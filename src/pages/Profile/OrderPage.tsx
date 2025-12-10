
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
  Paper,
  Divider,
  TextField,
  MenuItem,
  Alert,
  CircularProgress,
  Stepper,
  Step,
  StepLabel,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  FormControlLabel as MuiFormControlLabel,
  IconButton,
  Stack,
  Skeleton,
  Breadcrumbs
} from '@mui/material';
import {
  Check as CheckIcon,
  Groups as GroupsIcon,
  Description as DescriptionIcon,
  ConfirmationNumber as ConfirmationNumberIcon,
  CreditCard as CreditCardIcon,
  AirportShuttle as BusIcon,
  Add as AddIcon,
  Person as PersonIcon,
  ArrowBack as ArrowBackIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
  Close as CloseIcon,
  Chair as ChairIcon,
  Home as HomeIcon,
  EventSeat as EventSeatIcon,
  Checklist as ChecklistIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import UserContext from './../../UserContext';
import moment from 'moment-jalaali';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BusDetailss, busPreReserves } from '../../Api/ApiMaster';

interface Passenger {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  nationalId: string;
  birthDate: string;
  mobile: string;
  seatNumber: string;
}

interface BusData {
  busCode: string;
  sourceCode: string;
  companyName: string;
  carType: string;
  originCity: string;
  destinationCity: string;
  originTerminal: string;
  destinationTerminal: string;
  timeMove: string;
  price: number;
  countFreeChairs: number;
  description: string;
  moveDateTime: string;
  seates?: Array<{
    chairNumber: number;
    row: number;
    column: number;
    status: number; // 0: آزاد, 2: انتخاب شده, 3: رزرو شده, 4: مسدود
  }>;
}

interface SeatButtonProps {
  seat: {
    chairNumber: number;
    row: number;
    column: number;
    status: number;
  };
  selectedSeats: string[];
  onSelect: (seatNumber: string) => void;
  disabled: boolean;
}

const SeatButton: React.FC<SeatButtonProps> = ({ seat, selectedSeats, onSelect, disabled }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  
  const isSelected = selectedSeats.includes(seat.chairNumber.toString());
  const isReserved = seat.status === 2 || seat.status === 3;
  const isBlocked = seat.status === 4 || seat.chairNumber === -1;
  const isAvailable = seat.status === 0 && seat.chairNumber > 0;
  
  // فضای خالی (صندلی -1 با وضعیت 4)
  if (seat.chairNumber === -1 && seat.status === 4) {
    return (
      <Box sx={{ 
        width: 40, 
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'default'
      }}>
        {/* فضای خالی - نشان داده نمی‌شود */}
      </Box>
    );
  }
  
  const getBackgroundColor = () => {
    if (isSelected) return theme.palette.primary.main;
    if (isReserved) return theme.palette.error.main;
    if (isBlocked) return theme.palette.grey[400];
    return isAvailable ? theme.palette.grey[200] : theme.palette.grey[300];
  };
  
  const getBorderColor = () => {
    if (isSelected) return theme.palette.primary.dark;
    if (isReserved) return theme.palette.error.dark;
    if (isBlocked) return theme.palette.grey[500];
    return isAvailable ? theme.palette.grey[400] : theme.palette.grey[500];
  };
  
  const getColor = () => {
    if (isSelected || isReserved) return 'white';
    return theme.palette.text.primary;
  };
  
  const getCursor = () => {
    if (isReserved || isBlocked || !isAvailable || disabled) return 'not-allowed';
    return 'pointer';
  };
  
  const getTooltip = () => {
    if (isReserved) return t('seat.reserved');
    if (isBlocked) return t('seat.blocked');
    if (isSelected) return t('seat.selected');
    if (isAvailable) return t('seat.available');
    return t('seat.unknown');
  };
  
  return (
    <Box
      title={getTooltip()}
      onClick={() => {
        if (isAvailable && !isReserved && !isBlocked && !disabled) {
          onSelect(seat.chairNumber.toString());
        }
      }}
      sx={{
        width: 40,
        height: 40,
        bgcolor: getBackgroundColor(),
        border: `2px solid ${getBorderColor()}`,
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: getCursor(),
        position: 'relative',
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: isAvailable && !isReserved && !isBlocked && !disabled ? 'scale(1.05)' : 'none',
          boxShadow: isAvailable && !isReserved && !isBlocked && !disabled ? 2 : 'none'
        },
        opacity: disabled && !isSelected ? 0.5 : 1
      }}
    >
      {seat.chairNumber > 0 && (
        <Typography
          variant="body2"
          sx={{
            color: getColor(),
            fontWeight: isSelected ? 'bold' : 'normal'
          }}
        >
          {seat.chairNumber}
        </Typography>
      )}
      
      {isSelected && (
        <CheckIcon
          sx={{
            position: 'absolute',
            top: -5,
            right: -5,
            fontSize: 16,
            color: 'white',
            bgcolor: theme.palette.success.main,
            borderRadius: '50%',
            p: 0.5
          }}
        />
      )}
      
      {(isReserved && !isSelected) && (
        <CloseIcon
          sx={{
            position: 'absolute',
            top: -5,
            right: -5,
            fontSize: 16,
            color: 'white',
            bgcolor: theme.palette.error.main,
            borderRadius: '50%',
            p: 0.5
          }}
        />
      )}
    </Box>
  );
};

const OrderPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const isPersian = ['fa', 'ar', 'pa'].includes(i18n.language);
  
  const { userData } = useContext(UserContext);
  
  const [loading, setLoading] = useState(true);
  const [busLoading, setBusLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [busData, setBusData] = useState<BusData | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [availableSeats, setAvailableSeats] = useState<string[]>([]);
  const [previousReserves, setPreviousReserves] = useState<any[]>([]);
  const [selectPassengerModalOpen, setSelectPassengerModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  
  useEffect(() => {
    if (!userData || userData.length === 0) {
      setError(t('newprofile.order.userNotFound'));
      setLoading(false);
      return;
    }
    
    const storedBusInfo = localStorage.getItem('selectedBusInfo');
    if (storedBusInfo) {
      try {
        const busInfo = JSON.parse(storedBusInfo);
        fetchBusDetails(busInfo);
      } catch (err) {
        setError(t('newprofile.order.busInfoError'));
        setLoading(false);
      }
    } else {
      setError(t('newprofile.order.noBusSelected'));
      setLoading(false);
    }
  }, [userData, t]);

  const passengerSchema = yup.object().shape({
    firstName: yup.string()
      .required(t('validation.firstNameRequired'))
      .min(2, t('validation.firstNameMinLength')),
    lastName: yup.string()
      .required(t('validation.lastNameRequired'))
      .min(2, t('validation.lastNameMinLength')),
    gender: yup.string().required(t('validation.genderRequired')),
    nationalId: yup.string()
      .required(t('validation.nationalIdRequired'))
      .matches(/^\d{10}$/, t('validation.nationalIdInvalid')),
    mobile: yup.string()
      .required(t('validation.mobileRequired'))
      .matches(/^09\d{9}$/, t('validation.mobileInvalid')),
    birthDate: yup.string().required(t('validation.birthDateRequired')),
    seatNumber: yup.string().required(t('validation.seatNumberRequired'))
  });

  const formSchema = yup.object().shape({
    passengers: yup.array().of(passengerSchema).min(1, t('validation.minPassengers')),
    termsAccepted: yup.boolean().oneOf([true], t('validation.termsRequired'))
  });

  const { control, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      passengers: [],
      termsAccepted: false
    }
  });

  const fetchBusDetails = async (busInfo: any) => {
    if (!busInfo || !userData?.[0]) {
      setError(t('newprofile.order.busOrUserNotFound'));
      setLoading(false);
      return;
    }

    try {
      setBusLoading(true);
      
      const busCode = busInfo.busCode;
      const sourceCode = busInfo.sourceCode;
      const requestNumber = busInfo.requestNumber || 'default_request';
      
      await BusDetailss(
        requestNumber,
        sourceCode,
        busCode,
        userData[0]?.Token || '',
        setBusLoading,
        (data) => {
          console.log('Bus details data:', data);
          setBusData(data);
          
          if (data.seates) {
            const freeSeats = data.seates
              .filter((seat: any) => seat.status === 0 && seat.chairNumber > 0)
              .map((seat: any) => seat.chairNumber.toString());
            setAvailableSeats(freeSeats);
          }
          
          setLoading(false);
        },
        {},
        null
      );
    } catch (error) {
      console.error('Error fetching bus details:', error);
      setError(t('newprofile.order.busDetailsError'));
      setLoading(false);
      setBusLoading(false);
    }
  };

  const getTripDetails = () => {
    if (!busData && !userData?.[0]) return null;



    
    const data = busData;
    const user = userData[0];


    console.log('data',data)
    
    const price = data?.price ;
    const passengerCount = selectedSeats.length || watch('passengers')?.length || 
                          (user?.Passengers?.adults || 1);
    
    let moveDate = data?.dateMove;
    let moveTime = data?.timeMove;
    // moveTime = data.timeMove;
    // if (data?.moveDateTime) {
    //   const date = new Date(data?.moveDateTime);
    //   moveDate = isPersian 
    //     ? moment(date).format('jYYYY/jMM/jDD')
    //     : moment(date).format('YYYY/MM/DD');
    //   moveTime = data.timeMove;
    // }
    
    return {
      company: data?.company ,
      carType: data?.carType ,
      from: data?.originCity || user?.StartPlaceName || user?.StartPlace || '',
      to: data?.destinationCity || user?.EndPlaceName || user?.EndPlace || '',
      departureTime: moveTime,
      date: moveDate,
      originTerminal: data?.originTerminal || '',
      destinationTerminal: data?.destinationTerminal || '',
      price: price,
      totalPrice: price * passengerCount,
      busCode: data?.busCode || '',
      seatsLeft: data?.countFreeChairs || 0,
      description: data?.description || '',
      passengerCount: passengerCount
    };
  };

  const tripDetails = getTripDetails();

  useEffect(() => {
    const passengers = watch('passengers');
    
    if (selectedSeats.length > 0) {
      const maxSeats = userData?.[0]?.Passengers?.adults || 1;
      
      if (selectedSeats.length > maxSeats) {
        setSelectedSeats(prev => prev.slice(0, maxSeats));
        return;
      }
      
      const newPassengers = [];
      
      for (let i = 0; i < selectedSeats.length; i++) {
        const seat = selectedSeats[i];
        const existingPassenger = passengers[i] || {};
        
        newPassengers.push({
          id: existingPassenger.id || `passenger-${Date.now()}-${i}`,
          firstName: existingPassenger.firstName || '',
          lastName: existingPassenger.lastName || '',
          gender: existingPassenger.gender || '',
          nationalId: existingPassenger.nationalId || '',
          birthDate: existingPassenger.birthDate || '',
          mobile: existingPassenger.mobile || userData?.[0]?.Mobile || '',
          seatNumber: seat
        });
      }
      
      setValue('passengers', newPassengers);
    } else {
      setValue('passengers', []);
    }
  }, [selectedSeats, setValue, watch, userData]);

  // const steps = [
  //   t('newprofile.order.steps.selectFlight'),
  //   t('newprofile.order.steps.passengerDetails'),
  //   t('newprofile.order.steps.confirmInfo'),
  //   t('newprofile.order.steps.payment'),
  //   t('newprofile.order.steps.issueTicket')
  // ];

  const steps = [
    { label: t('newprofile.order.steps.selectFlight'), icon: <CheckIcon />, completed: true },
    { label: t('newprofile.order.steps.passengerDetails'), icon: <GroupsIcon />, completed: true },
    // { label: t('newprofile.order.steps.travelServices'), icon: <DescriptionIcon />, completed: true },
    { label: t('newprofile.order.steps.confirmInfo'), icon: <ChecklistIcon />, active: true },
    { label: t('newprofile.order.steps.payment'), icon: <CreditCardIcon /> },
    { label: t('newprofile.order.steps.ticketIssuance'), icon: <ConfirmationNumberIcon /> }
  ];

  const handleSeatSelect = (seatNumber: string) => {
    setSelectedSeats(prev => {
      if (prev.includes(seatNumber)) {
        return prev.filter(seat => seat !== seatNumber);
      } else {
        const maxSeats = userData?.[0]?.Passengers?.adults || 1;
        if (prev.length < maxSeats) {
          return [...prev, seatNumber];
        } else {
          setError(t('newprofile.order.maxSeatsError', { maxSeats }));
          setTimeout(() => setError(''), 3000);
          return prev;
        }
      }
    });
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString(isPersian ? 'fa-IR' : 'en-US');
  };

  const handleBackToSearch = () => {
    navigate('/search-results');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const renderSeatMap = () => {
    const seats = busData?.seates || [];
    
    if (seats.length === 0) {
      return (
        <Alert severity="warning">
          {t('newprofile.order.noSeatInfo')}
        </Alert>
      );
    }

    const uniqueColumns = [...new Set(seats.filter(s => s.chairNumber > 0).map(seat => seat.column))].sort((a, b) => a - b);
    const maxRow = Math.max(...seats.map(seat => seat.row));
    
    const seatsByRow: {[key: number]: typeof seats} = {};
    seats.forEach(seat => {
      if (!seatsByRow[seat.row]) {
        seatsByRow[seat.row] = [];
      }
      seatsByRow[seat.row].push(seat);
    });

    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: 2,
        mb: 3,
        p: 3,
        bgcolor: 'grey.50',
        borderRadius: 2,
        border: 1,
        borderColor: 'divider'
      }}>
        {/* جلو اتوبوس */}
        <Box sx={{ 
          width: '100%', 
          textAlign: 'center', 
          mb: 2,
          p: 1,
          bgcolor: 'grey.200',
          borderRadius: 1
        }}>
          <Typography variant="caption" color="text.secondary">
            {t('newprofile.order.frontOfBus')}
          </Typography>
        </Box>
        
        {/* ردیف‌های صندلی */}
        {Array.from({ length: maxRow }, (_, index) => {
          const rowNumber = index + 1;
          const rowSeats = seatsByRow[rowNumber] || [];
          
          // جدا کردن صندلی‌ها بر اساس سمت چپ و راست
          const leftSeats = rowSeats.filter(seat => seat.column === 1 || seat.column === 2)
            .sort((a, b) => a.column - b.column);
          const rightSeats = rowSeats.filter(seat => seat.column === 4 || seat.column === 5)
            .sort((a, b) => a.column - b.column);
          
          // اگر این ردیف فقط صندلی‌های سمت چپ دارد (مثل ردیف‌های 6 و 7)
          const hasOnlyLeftSeats = leftSeats.length > 0 && rightSeats.length === 0;
          
          return (
            <Box 
              key={`row-${rowNumber}`}
              sx={{ 
                display: 'flex', 
                gap: hasOnlyLeftSeats ? 1 : 3,
                alignItems: 'center',
                width: '100%',
                justifyContent: 'center'
              }}
            >
              {/* سمت چپ (صندلی‌های 1 و 2) */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {leftSeats.map(seat => (
                  <SeatButton
                    key={`seat-${seat.chairNumber}`}
                    seat={seat}
                    selectedSeats={selectedSeats}
                    onSelect={handleSeatSelect}
                    disabled={selectedSeats.length >= (userData?.[0]?.Passengers?.adults || 1) && 
                             !selectedSeats.includes(seat.chairNumber.toString())}
                  />
                ))}
              </Box>
              
              {/* راهرو - فقط اگر صندلی سمت راست وجود داشته باشد */}
              {!hasOnlyLeftSeats && rightSeats.length > 0 && (
                <Box sx={{ 
                  width: 40, 
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <Divider orientation="vertical" sx={{ height: '100%' }} />
                  {rowNumber === 1 && (
                    <Typography 
                      variant="caption" 
                      color="text.secondary"
                      sx={{ 
                        position: 'absolute',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {t('newprofile.order.aisle')}
                    </Typography>
                  )}
                </Box>
              )}
              
              {/* سمت راست (صندلی‌های 4 و 5) */}
              {rightSeats.length > 0 && (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {rightSeats.map(seat => (
                    <SeatButton
                      key={`seat-${seat.chairNumber}`}
                      seat={seat}
                      selectedSeats={selectedSeats}
                      onSelect={handleSeatSelect}
                      disabled={selectedSeats.length >= (userData?.[0]?.Passengers?.adults || 1) && 
                               !selectedSeats.includes(seat.chairNumber.toString())}
                    />
                  ))}
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    );
  };

  // const onSubmit = async (formData: any) => {
  //   if (!busData || !tripDetails || !userData?.[0]) {
  //     setError(t('newprofile.order.incompleteInfo'));
  //     return;
  //   }

  //   try {
  //     setSubmitting(true);
  //     setError('');
      
  //     const passengers = formData.passengers.map((passenger: any) => ({
  //       firstName: passenger.firstName,
  //       lastName: passenger.lastName,
  //       nationalIdentification: passenger.nationalId,
  //       seatNumber: passenger.seatNumber,
  //       birthDate: passenger.birthDate,
  //       gender: passenger.gender === 'male' ? '2' : '3'
  //     }));

  //     const telephone = { 
  //       phoneNumber: formData.passengers[0]?.mobile || userData[0]?.Mobile || '' 
  //     };
      
  //     const contact = { 
  //       name: `${formData.passengers[0]?.firstName || ''} ${formData.passengers[0]?.lastName || ''}`.trim(),
  //       email: "" 
  //     };
      
  //     const clientUserTelephone = { 
  //       phoneNumber: userData[0]?.Mobile || '' 
  //     };

  //     const storedBusInfo = JSON.parse(localStorage.getItem('selectedBusInfo') || '{}');
  //     const requestNumber = storedBusInfo.requestNumber || 'default_request';
  //     const sourceCode = storedBusInfo.sourceCode || userData[0].StartPlaceCode;
  //     const busCode = storedBusInfo.busCode || storedBusInfo.scheduleId;

  //     await busPreReserves(
  //       requestNumber,
  //       sourceCode,
  //       busCode,
  //       userData[0]?.Token,
  //       passengers,
  //       tripDetails.totalPrice,
  //       telephone,
  //       contact,
  //       clientUserTelephone,
  //       "",
  //       setSubmitting,
  //       {
  //         headers: {
  //           'accept': 'text/plain',
  //           "Access-Control-Allow-Origin": "*",
  //           'Authorization': userData[0]?.Token || ''
  //         }
  //       },
  //       (paymentLink) => {
  //         if (paymentLink && paymentLink.url) {
  //           window.location.href = paymentLink.url;
  //         } else if (paymentLink) {
  //           window.location.href = paymentLink;
  //         } else {
  //           const reserveInfo = {
  //             busData: busData,
  //             passengers: formData.passengers,
  //             totalPrice: tripDetails.totalPrice,
  //             reserveDate: new Date().toISOString(),
  //             requestNumber: requestNumber
  //           };
            
  //           localStorage.setItem('lastReserve', JSON.stringify(reserveInfo));
            
  //           setSuccess(t('newprofile.order.reserveSuccess'));
  //           setActiveStep(3);
            
  //           setTimeout(() => {
  //             navigate('/payment');
  //           }, 2000);
  //         }
  //       },
  //       {}
  //     );

  //   } catch (error: any) {
  //     console.error('Error submitting booking:', error);
  //     setError(error.message || t('newprofile.order.reserveError'));
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const onSubmit = async (formData: any) => {
    if (!busData || !tripDetails || !userData?.[0]) {
      setError(t('newprofile.order.incompleteInfo'));
      return;
    }

    try {
      setSubmitting(true);
      setError('');

            setActiveStep(4);
            
            setTimeout(() => {
              // navigate('/orders-confirm');
              navigate('/orders-confirm', { 
                state: {
                  busData: busData,
                  tripDetails: tripDetails,
                  passengers: formData.passengers,
                  selectedSeats: selectedSeats,
                  totalPrice: tripDetails.totalPrice,
                  formData: formData
                }
              });
            }, 2000);
          
          
      
      

    } catch (error: any) {
      console.error('Error submitting booking:', error);
      setError(error.message || t('newprofile.order.reserveError'));
    } finally {
      setSubmitting(false);
    }
  };

  const CustomStepConnector = () => (
    <Box
      sx={{
        flex: 1,
        height: 2,
        backgroundColor: 'divider',
        mx: 1
      }}
    />
  );

  const LoadingSkeletons = () => (
    <Stack spacing={2} sx={{ px: isMobile ? 1 : 4, py: 4 }}>
      <Skeleton variant="rectangular" width="100%" height={200} sx={{ borderRadius: 2 }} />
      <Skeleton variant="rectangular" width="100%" height={150} sx={{ borderRadius: 2 }} />
      <Skeleton variant="rectangular" width="100%" height={100} sx={{ borderRadius: 2 }} />
    </Stack>
  );

  if (busLoading) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          {LoadingSkeletons()}
        </Container>
      </Box>
    );
  }

  if (!userData || userData.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, minHeight: '60vh' }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          {t('newprofile.order.userNotFound')}
        </Alert>
        <Button
          variant="contained"
          onClick={handleBackToHome}
        >
          {t('newprofile.common.backToHome')}
        </Button>
      </Container>
    );
  }

  if (!tripDetails || !busData) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, minHeight: '60vh' }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          {error || t('newprofile.order.noBusSelected')}
        </Alert>
        <Button
          variant="contained"
          onClick={handleBackToSearch}
        >
          {t('newprofile.common.backToSearch')}
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: 'background.default', 
      direction: isPersian ? 'rtl' : 'ltr' 
    }}>
      <Paper 
        elevation={0} 
        sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          bgcolor: 'background.paper',
          py: 2
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Button
              color="inherit"
              startIcon={<HomeIcon />}
              onClick={handleBackToHome}
              sx={{ textTransform: 'none' }}
            >
              {t('newprofile.common.home')}
            </Button>
            <Button
              color="inherit"
              startIcon={<BusIcon />}
              onClick={handleBackToSearch}
              sx={{ textTransform: 'none' }}
            >
              {t('newprofile.common.search')}
            </Button>
            <Typography color="text.primary" sx={{ display: 'flex', alignItems: 'center' }}>
              <ConfirmationNumberIcon sx={{ mr: 0.5 }} />
              {t('newprofile.order.title')}
            </Typography>
          </Breadcrumbs>
          
          {/* <Stepper activeStep={activeStep} sx={{ pt: 1 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper> */}

<Box sx={{ py: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            {steps.map((step, index) => (
              <React.Fragment key={step.label}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mx: 1 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: step.completed ? 'primary.main' : step.active ? 'primary.main' : 'grey.300',
                      color: step.completed || step.active ? 'white' : 'grey.500',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      mb: 1
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Typography 
                    variant="body2" 
                    fontWeight={step.active ? 'bold' : 'normal'}
                    color={step.active ? 'primary.main' : 'text.secondary'}
                    sx={{ textAlign: 'center' }}
                  >
                    {step.label}
                  </Typography>
                </Box>
                {index < steps.length - 1 && <CustomStepConnector />}
              </React.Fragment>
            ))}
          </Box>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
        
        {success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            {success}
          </Alert>
        )}
        
        <Card sx={{ mb: 4, border: 1, borderColor: 'primary.light', boxShadow: 2 }}>
          <CardContent sx={{ p: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <BusIcon color="primary" sx={{ ml: 1 }} />
                  <Typography variant="h5" fontWeight="bold">
                    {t('newprofile.order.tripInfo')}
                  </Typography>
                </Box>
                <Divider sx={{ mb: 3 }} />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      {t('newprofile.order.origin')}:
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      {tripDetails.from}
                    </Typography>
                    {tripDetails.originTerminal && (
                      <Typography variant="caption" color="text.secondary">
                        ({tripDetails.originTerminal})
                      </Typography>
                    )}
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      {t('newprofile.order.destination')}:
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      {tripDetails.to}
                    </Typography>
                    {tripDetails.destinationTerminal && (
                      <Typography variant="caption" color="text.secondary">
                        ({tripDetails.destinationTerminal})
                      </Typography>
                    )}
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      {t('newprofile.order.company')}:
                    </Typography>
                    <Typography variant="body1">{tripDetails.company}</Typography>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      {t('newprofile.order.vehicleType')}:
                    </Typography>
                    <Typography variant="body1">{tripDetails.carType}</Typography>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      {t('newprofile.order.departureDate')}:
                    </Typography>
                    <Typography variant="body1">{tripDetails.date}</Typography>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      {t('newprofile.order.departureTime')}:
                    </Typography>
                    <Typography variant="body1" fontWeight="bold" color="primary">
                      {tripDetails.departureTime}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  bgcolor: 'grey.50', 
                  p: 3, 
                  borderRadius: 2,
                  border: 1,
                  borderColor: 'divider',
                  height: '100%'
                }}>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                    <CreditCardIcon sx={{ ml: 1 }} />
                    {t('newprofile.order.priceSummary')}
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">{t('newprofile.order.pricePerTicket')}:</Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {formatPrice(tripDetails.price)} {t('newprofile.common.currency')}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">{t('newprofile.order.passengerCount')}:</Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {selectedSeats.length || 0} {t('newprofile.order.passengerUnit')}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">{t('newprofile.order.seatsLeft')}:</Typography>
                      <Typography variant="body2" fontWeight="bold" color={
                        tripDetails.seatsLeft > 5 ? 'success.main' : 
                        tripDetails.seatsLeft > 0 ? 'warning.main' : 'error.main'
                      }>
                        {tripDetails.seatsLeft} {t('newprofile.order.seatUnit')}
                      </Typography>
                    </Box>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="h6" fontWeight="bold">{t('newprofile.order.totalAmount')}:</Typography>
                      <Typography variant="h5" color="primary" fontWeight="bold">
                        {formatPrice(tripDetails.totalPrice)} {t('newprofile.common.currency')}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <ChairIcon sx={{ ml: 1 }} />
                {t('newprofile.order.selectSeat')}
              </Typography>
              
              <Alert severity="info" sx={{ mb: 3 }}>
                {t('newprofile.order.selectSeatDescription')}
                {userData?.[0]?.Passengers?.adults && (
                  <strong> {t('newprofile.order.maxSeats', { maxSeats: userData[0].Passengers.adults })}</strong>
                )}
              </Alert>
              
              {renderSeatMap()}
              
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: 3, 
                mt: 4,
                p: 2,
                bgcolor: 'grey.50',
                borderRadius: 2
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 20, height: 20, border: 1, borderColor: 'grey.400', borderRadius: 1 }} />
                  <Typography variant="caption">{t('seat.available')}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 20, height: 20, bgcolor: 'primary.main', borderRadius: 1 }} />
                  <Typography variant="caption">{t('seat.selected')}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 20, height: 20, bgcolor: 'error.main', borderRadius: 1 }} />
                  <Typography variant="caption">{t('seat.reserved')}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 20, height: 20, bgcolor: 'grey.400', borderRadius: 1 }} />
                  <Typography variant="caption">{t('seat.blocked')}</Typography>
                </Box>
              </Box>
              
              {selectedSeats.length > 0 && (
                <Box sx={{ 
                  mt: 3, 
                  p: 2, 
                  bgcolor: 'primary.50', 
                  borderRadius: 2,
                  border: 1,
                  borderColor: 'primary.100'
                }}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    {t('newprofile.order.selectedSeats')}: 
                    <span style={{ color: '#1976d2', marginRight: '5px' }}>
                      {selectedSeats.length > 0 ? selectedSeats.join(', ') : t('newprofile.order.noSeatSelected')}
                    </span>
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>

          {selectedSeats.length > 0 && (
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center' }}>
                    <GroupsIcon sx={{ ml: 1 }} />
                    {t('newprofile.order.passengerInfo')}
                  </Typography>
                </Box>
                
                <Controller
                  name="passengers"
                  control={control}
                  render={({ field }) => (
                    <Stack spacing={3}>
                      {field.value.map((passenger, index) => (
                        <Paper key={passenger.id || index} sx={{ p: 3, border: 1, borderColor: 'divider', borderRadius: 2 }}>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            mb: 2,
                            p: 1,
                            bgcolor: 'primary.50',
                            borderRadius: 1
                          }}>
                            <PersonIcon color="primary" sx={{ ml: 1 }} />
                            <Typography variant="subtitle1" fontWeight="bold">
                              {t('newprofile.order.passengerNumber', { number: index + 1 })} - {t('newprofile.order.seat')} {passenger.seatNumber}
                            </Typography>
                          </Box>
                          
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                              <Controller
                                name={`passengers.${index}.firstName`}
                                control={control}
                                render={({ field: passengerField }) => (
                                  <TextField
                                    {...passengerField}
                                    fullWidth
                                    label={t('form.firstName')}
                                    size="small"
                                    error={!!errors.passengers?.[index]?.firstName}
                                    helperText={errors.passengers?.[index]?.firstName?.message}
                                  />
                                )}
                              />
                            </Grid>
                            
                            <Grid item xs={12} sm={6} md={3}>
                              <Controller
                                name={`passengers.${index}.lastName`}
                                control={control}
                                render={({ field: passengerField }) => (
                                  <TextField
                                    {...passengerField}
                                    fullWidth
                                    label={t('form.lastName')}
                                    size="small"
                                    error={!!errors.passengers?.[index]?.lastName}
                                    helperText={errors.passengers?.[index]?.lastName?.message}
                                  />
                                )}
                              />
                            </Grid>
                            
                            <Grid item xs={12} sm={6} md={3}>
                              <Controller
                                name={`passengers.${index}.nationalId`}
                                control={control}
                                render={({ field: passengerField }) => (
                                  <TextField
                                    {...passengerField}
                                    fullWidth
                                    label={t('form.nationalId')}
                                    size="small"
                                    error={!!errors.passengers?.[index]?.nationalId}
                                    helperText={errors.passengers?.[index]?.nationalId?.message}
                                  />
                                )}
                              />
                            </Grid>
                            
                            <Grid item xs={12} sm={6} md={3}>
                              <Controller
                                name={`passengers.${index}.mobile`}
                                control={control}
                                render={({ field: passengerField }) => (
                                  <TextField
                                    {...passengerField}
                                    fullWidth
                                    label={t('form.mobile')}
                                    size="small"
                                    error={!!errors.passengers?.[index]?.mobile}
                                    helperText={errors.passengers?.[index]?.mobile?.message}
                                  />
                                )}
                              />
                            </Grid>
                            
                            <Grid item xs={12} sm={6} md={3}>
                              <Controller
                                name={`passengers.${index}.birthDate`}
                                control={control}
                                render={({ field: passengerField }) => (
                                  <TextField
                                    {...passengerField}
                                    fullWidth
                                    label={t('form.birthDate')}
                                    size="small"
                                    placeholder={isPersian ? "۱۳۷۰/۰۵/۱۵" : "1991/08/06"}
                                    error={!!errors.passengers?.[index]?.birthDate}
                                    helperText={errors.passengers?.[index]?.birthDate?.message}
                                  />
                                )}
                              />
                            </Grid>
                            
                            <Grid item xs={12} sm={6} md={3}>
                              <Controller
                                name={`passengers.${index}.gender`}
                                control={control}
                                render={({ field: passengerField }) => (
                                  <TextField
                                    select
                                    {...passengerField}
                                    fullWidth
                                    label={t('form.gender')}
                                    size="small"
                                    error={!!errors.passengers?.[index]?.gender}
                                    helperText={errors.passengers?.[index]?.gender?.message}
                                  >
                                    <MenuItem value="">{t('form.select')}</MenuItem>
                                    <MenuItem value="male">{t('form.male')}</MenuItem>
                                    <MenuItem value="female">{t('form.female')}</MenuItem>
                                  </TextField>
                                )}
                              />
                            </Grid>
                          </Grid>
                        </Paper>
                      ))}
                    </Stack>
                  )}
                />
              </CardContent>
            </Card>
          )}

          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Controller
                name="termsAccepted"
                control={control}
                render={({ field }) => (
                  <MuiFormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        color="primary"
                      />
                    }
                    label={
                      <Typography variant="body2">
                        {t('newprofile.order.termsText')}
                        <Link href="/terms" underline="always" target="_blank">
                          {t('newprofile.order.termsLink')}
                        </Link>
                        {' '}{t('newprofile.order.and')}{' '}
                        <Link href="/privacy" underline="always" target="_blank">
                          {t('newprofile.order.privacyLink')}
                        </Link>
                        {' '}{t('newprofile.order.termsSuffix')}
                      </Typography>
                    }
                  />
                )}
              />
              {errors.termsAccepted && (
                <Typography color="error" variant="caption" display="block">
                  {errors.termsAccepted.message}
                </Typography>
              )}
            </CardContent>
          </Card>

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 3,
            bgcolor: 'grey.50',
            borderRadius: 2,
            border: 1,
            borderColor: 'divider'
          }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                {t('newprofile.order.finalAmount')}:
              </Typography>
              <Typography variant="h4" color="primary" fontWeight="bold">
                {formatPrice(tripDetails.totalPrice)} {t('newprofile.common.currency')}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                size="large"
                onClick={handleBackToSearch}
                startIcon={<ArrowBackIcon />}
              >
                {t('newprofile.common.back')}
              </Button>
              
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={selectedSeats.length === 0 || submitting}
                startIcon={submitting ? <CircularProgress size={20} /> : <CheckIcon />}
                sx={{ px: 4, minWidth: 180 }}
              >
                {submitting ? t('newprofile.order.submitting') : t('newprofile.order.confirmAndPay')}
              </Button>
            </Box>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default OrderPage;