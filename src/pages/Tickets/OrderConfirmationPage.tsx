
import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  useTheme,
  useMediaQuery,
  Divider,
  Chip,
  Alert,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText
} from '@mui/material';
import {
  Check as CheckIcon,
  Groups as GroupsIcon,
  Description as DescriptionIcon,
  Checklist as ChecklistIcon,
  CreditCard as CreditCardIcon,
  ConfirmationNumber as ConfirmationNumberIcon,
  ExpandMore as ExpandMoreIcon,
  Info as InfoIcon,
  LocalOffer as LocalOfferIcon,
  ArrowBack as ArrowBackIcon,
  Home as HomeIcon,
  Warning as WarningIcon,
  Close as CloseIcon,
  // Bus as BusIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import moment from 'moment-jalaali';

import UserContext from './../../UserContext';
import { busPreReserves } from '../../Api/ApiMaster';

const OrderConfirmationPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const navigate = useNavigate();
  const isPersian = ['fa', 'ar', 'pa'].includes(i18n.language);
  
  // Get data from navigation state
  const confirmationData = location.state as {
    busData: any;
    tripDetails: any;
    passengers: any[];
    selectedSeats: string[];
    totalPrice: number;
    formData: any;
  };
  
  const [discountCode, setDiscountCode] = useState('');
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  
  const { userData } = useContext(UserContext);
  
  // If no data was passed, show error
  if (!confirmationData) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, minHeight: '60vh' }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          {t('newprofile.orders.noBookingData')}
        </Alert>
        <Button
          variant="contained"
          onClick={() => navigate('/')}
        >
          {t('newprofile.common.backToHome')}
        </Button>
      </Container>
    );
  }

  // تابع پرداخت اصلی از OrderPage
  const handlePayment = async () => {
    if (!confirmationData || !confirmationData.tripDetails || !userData?.[0]) {
      setError(t('newprofile.orders.incompleteInfo'));
      return;
    }

    try {
      setPaymentLoading(true);
      setError('');
      
      // آماده‌سازی داده‌های مسافران
      const passengers = confirmationData.passengers.map((passenger: any) => ({
        firstName: passenger.firstName,
        lastName: passenger.lastName,
        nationalIdentification: passenger.nationalId,
        seatNumber: passenger.seatNumber,
        birthDate: passenger.birthDate,
        gender: passenger.gender  //=== '2' ? '2' : '3'
      }));

      // اطلاعات تماس
      const telephone = { 
        phoneNumber: confirmationData.passengers[0]?.mobile || userData[0]?.Mobile || '' 
      };
      
      const contact = { 
        name: `${confirmationData.passengers[0]?.firstName || ''} ${confirmationData.passengers[0]?.lastName || ''}`.trim(),
        email: ""
      };
      
      const clientUserTelephone = { 
        phoneNumber: userData[0]?.Mobile || '' 
      };

      // دریافت اطلاعات اتوبوس از localStorage
      const storedBusInfo = JSON.parse(localStorage.getItem('selectedBusInfo') || '{}');
      const requestNumber = storedBusInfo.requestNumber || 'default_request';
      const sourceCode = storedBusInfo.sourceCode || userData[0].StartPlaceCode;
      const busCode = storedBusInfo.busCode || storedBusInfo.scheduleId;

      // فراخوانی API رزرو
      await busPreReserves(
        requestNumber,
        sourceCode,
        busCode,
        userData[0]?.Token,
        passengers,
        confirmationData.totalPrice,
        telephone,
        contact,
        clientUserTelephone,
        "",
        setPaymentLoading,
        {
          headers: {
            'accept': 'text/plain',
            "Access-Control-Allow-Origin": "*",
            'Authorization': userData[0]?.Token || ''
          }
        },
        (paymentLink) => {
          if (paymentLink && paymentLink.url) {
            // هدایت به درگاه پرداخت
            window.location.href = paymentLink.url;
          } else if (paymentLink) {
            // هدایت به درگاه پرداخت (فرمت دیگر)
            window.location.href = paymentLink;
          } else {
            // ذخیره اطلاعات رزرو در localStorage
            const reserveInfo = {
              busData: confirmationData.busData,
              passengers: confirmationData.passengers,
              totalPrice: confirmationData.totalPrice,
              reserveDate: new Date().toISOString(),
              requestNumber: requestNumber
            };
            
            localStorage.setItem('lastReserve', JSON.stringify(reserveInfo));
            
            setSuccess(t('newprofile.orders.reserveSuccess'));
            
            // هدایت به صفحه پرداخت
            // setTimeout(() => {
            //   navigate('/payment');
            // }, 2000);
          }
        },
        {}
      );

    } catch (error: any) {
      console.error('Error submitting booking:', error);
      setError(error.message || t('newprofile.orders.reserveError'));
    } finally {
      setPaymentLoading(false);
      setConfirmationDialogOpen(false);
    }
  };

  // باز کردن دیالوگ تأیید پرداخت
  const handleOpenPaymentConfirmation = () => {
    if (confirmationData.passengers.length === 0) {
      setError(t('newprofile.orders.noPassengers'));
      return;
    }
    
    // بررسی اعتبار داده‌های مسافران
    const invalidPassengers = confirmationData.passengers.filter(passenger => 
      !passenger.firstName || 
      !passenger.lastName || 
      !passenger.nationalId || 
      !passenger.mobile
    );
    
    if (invalidPassengers.length > 0) {
      setError(t('newprofile.orders.invalidPassengerData'));
      return;
    }
    
    setConfirmationDialogOpen(true);
  };

  // مرحله‌های سفارش
  const steps = [
    { label: t('newprofile.order.steps.selectFlight'), icon: <CheckIcon />, completed: true },
    { label: t('newprofile.order.steps.passengerDetails'), icon: <GroupsIcon />, completed: true },
    { label: t('newprofile.order.steps.confirmInfo'), icon: <ChecklistIcon />, active: true },
    { label: t('newprofile.order.steps.payment'), icon: <CreditCardIcon /> },
    { label: t('newprofile.order.steps.ticketIssuance'), icon: <ConfirmationNumberIcon /> }
  ];

  // تبدیل داده‌ها برای نمایش
  const ticketInfo = {
    origin: confirmationData?.tripDetails?.from ,
    destination: confirmationData?.tripDetails?.to ,
    company: confirmationData?.tripDetails?.company ,
    dateTime: `${confirmationData?.tripDetails?.date } ${confirmationData?.tripDetails?.departureTime }`,
    busCode: confirmationData?.busData?.busCode ,
    carType: confirmationData?.tripDetails?.carType ,
    description: confirmationData?.tripDetails?.description ,
    originTerminal: confirmationData?.tripDetails?.originTerminal ,
    destinationTerminal: confirmationData?.tripDetails?.destinationTerminal ,
    seatsLeft: confirmationData?.tripDetails?.seatsLeft || 0,
    price: confirmationData?.tripDetails?.price || 0,
    totalPrice: confirmationData?.totalPrice || 0
  };

  // تابع تعیین گروه سنی
  const getAgeGroup = (birthDate: string) => {
    if (!birthDate) return t('newprofile.confirmation.passengers.adult');
    
    try {
      const today = new Date();
      let birthDateObj;
      
      if (isPersian) {
        // پارس تاریخ فارسی
        const [year, month, day] = birthDate.split('/').map(Number);
        if (year && month && day) {
          // تبدیل تاریخ فارسی به میلادی
          const gregorianDate = moment(`${year}/${month}/${day}`, 'jYYYY/jM/jD').toDate();
          birthDateObj = gregorianDate;
        }
      } else {
        birthDateObj = new Date(birthDate);
      }
      
      if (birthDateObj && !isNaN(birthDateObj.getTime())) {
        const age = today.getFullYear() - birthDateObj.getFullYear();
        const monthDiff = today.getMonth() - birthDateObj.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
          // هنوز سالگرد تولد امسال نیامده
          const adjustedAge = age - 1;
          
          if (adjustedAge < 2) {
            return t('newprofile.confirmation.passengers.infant');
          } else if (adjustedAge < 12) {
            return t('newprofile.confirmation.passengers.child');
          }
        } else {
          if (age < 2) {
            return t('newprofile.confirmation.passengers.infant');
          } else if (age < 12) {
            return t('newprofile.confirmation.passengers.child');
          }
        }
      }
    } catch (error) {
      console.error('Error calculating age:', error);
    }
    
    return t('newprofile.confirmation.passengers.adult');
  };

  // تبدیل داده‌های مسافران
  const passengers = confirmationData?.passengers?.map((passenger, index) => ({
    index: index + 1,
    ageGroup: getAgeGroup(passenger.birthDate),
    fullName: `${passenger.firstName || ''} ${passenger.lastName || ''}`.trim(),
    gender: passenger.gender == '2' 
      ? t('newprofile.confirmation.passengers.male') 
      : passenger.gender === '3' 
        ? t('newprofile.confirmation.passengers.female')
        : '',
    nationalId: passenger.nationalId || '',
    birthDate: passenger.birthDate || '',
    nationality: t('newprofile.confirmation.passengers.iranian'),
    seatNumber: passenger.seatNumber || '',
    mobile: passenger.mobile || '',
    originalData: passenger // حفظ داده اصلی برای پرداخت
  })) || [];

  const contactInfo = {
    email: userData[0]?.Email, // ممکن است بخواهید ایمیل به فرم مسافر اضافه کنید
    phone: passengers[0]?.mobile || t('newprofile.confirmation.contactInfo.phone')
  };

  const handleApplyDiscount = () => {
    if (discountCode.trim()) {
      setIsDiscountApplied(true);
      // در اینجا معمولاً API برای اعتبارسنجی و اعمال تخفیف فراخوانی می‌شود
      setError('');
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleBackToOrder = () => {
    navigate(-1); // برگشت به صفحه قبل (OrderPage)
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString(isPersian ? 'fa-IR' : 'en-US');
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

  // دیالوگ تأیید پرداخت
  const renderPaymentConfirmationDialog = () => (
    <Dialog
      open={confirmationDialogOpen}
      onClose={() => setConfirmationDialogOpen(false)}
      maxWidth="sm"
      fullWidth
      sx={{direction:!isPersian ? 'rtl' : 'ltr'}}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <CreditCardIcon color="primary" />
        {t('newprofile.orders.paymentConfirmation')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>
          {t('newprofile.orders.paymentConfirmationDescription')}
        </DialogContentText>
        
        <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
          <Typography variant="subtitle2" gutterBottom>
            {t('newprofile.orders.paymentSummary')}:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2">{t('newprofile.orders.totalAmount')}:</Typography>
            <Typography variant="body1" fontWeight="bold">
              {formatPrice(ticketInfo.totalPrice)} {t('newprofile.common.currency')}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2">{t('newprofile.orders.passengerCount')}:</Typography>
            <Typography variant="body1">{passengers.length}</Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1" fontWeight="bold">
              {t('newprofile.orders.finalAmount')}:
            </Typography>
            <Typography variant="h6" color="primary" fontWeight="bold">
              {formatPrice(ticketInfo.totalPrice)} {t('newprofile.common.currency')}
            </Typography>
          </Box>
        </Box>
        
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
        
        {success && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {success}
          </Alert>
        )}
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={() => setConfirmationDialogOpen(false)}
          disabled={paymentLoading}
        >
          {t('newprofile.common.cancel')}
        </Button>
        <Button
          onClick={handlePayment}
          variant="contained"
          color="primary"
          disabled={paymentLoading}
          startIcon={paymentLoading ? <CircularProgress size={20} /> : <CheckIcon />}
        >
          {paymentLoading ? t('newprofile.orders.processing') : t('newprofile.orders.confirmPayment')}
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: 'background.default',
      direction: !isPersian ? 'rtl' : 'ltr' 
    }}>
      {/* Breadcrumb Stepper */}
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

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {error && !confirmationDialogOpen && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
        
        {success && !confirmationDialogOpen && (
          <Alert severity="success" sx={{ mb: 3 }}>
            {success}
          </Alert>
        )}

        {/* Trip Summary */}
        <Card sx={{ mb: 3, border: 1, borderColor: 'primary.light' }}>
          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            <Typography 
              variant="h5" 
              fontWeight="bold" 
              sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}
            >
              {/* <BusIcon /> */}
              {t('newprofile.orders.tripInfo')}
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 1.5,
                  bgcolor: 'grey.50',
                  borderRadius: 1,
                  mb: 1
                }}>
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.orders.origin')}:
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {ticketInfo.origin}
                    {ticketInfo.originTerminal && (
                      <Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>
                        ({ticketInfo.originTerminal})
                      </Typography>
                    )}
                  </Typography>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 1.5,
                  bgcolor: 'grey.50',
                  borderRadius: 1,
                  mb: 1
                }}>
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.orders.destination')}:
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {ticketInfo.destination}
                    {ticketInfo.destinationTerminal && (
                      <Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>
                        ({ticketInfo.destinationTerminal})
                      </Typography>
                    )}
                  </Typography>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 1.5,
                  bgcolor: 'grey.50',
                  borderRadius: 1,
                  mb: 1
                }}>
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.orders.company')}:
                  </Typography>
                  <Typography variant="body1">{ticketInfo.company}</Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 1.5,
                  bgcolor: 'grey.50',
                  borderRadius: 1,
                  mb: 1
                }}>
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.orders.departureDate')}:
                  </Typography>
                  <Typography variant="body1">{ticketInfo.dateTime}</Typography>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 1.5,
                  bgcolor: 'grey.50',
                  borderRadius: 1,
                  mb: 1
                }}>
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.orders.vehicleType')}:
                  </Typography>
                  <Typography variant="body1">{ticketInfo.carType}</Typography>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 1.5,
                  bgcolor: 'grey.50',
                  borderRadius: 1,
                  mb: 1
                }}>
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.confirmation.ticketInfo.flightNumberLabel')}:
                  </Typography>
                  <Typography variant="body1">{ticketInfo.busCode}</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Ticket Information */}
        <Card sx={{ mb: 3 }}>
          <CardContent sx={{ p: { xs: 2, md: 4 } }}>
            <Typography 
              variant="h5" 
              fontWeight="bold" 
              sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <ConfirmationNumberIcon />
              {t('newprofile.confirmation.ticketInfo.title')}
            </Typography>

            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="ticket information table">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none', width: '30%' }}>
                      {t('newprofile.confirmation.ticketInfo.originLabel')}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>
                      {ticketInfo.origin}
                      {ticketInfo.originTerminal && (
                        <Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>
                          ({ticketInfo.originTerminal})
                        </Typography>
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
                      {t('newprofile.confirmation.ticketInfo.destinationLabel')}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>
                      {ticketInfo.destination}
                      {ticketInfo.destinationTerminal && (
                        <Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>
                          ({ticketInfo.destinationTerminal})
                        </Typography>
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
                      {t('newprofile.confirmation.ticketInfo.airlineLabel')}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>{ticketInfo.company}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
                      {t('newprofile.confirmation.ticketInfo.dateTimeLabel')}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>{ticketInfo.dateTime}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
                      {t('newprofile.confirmation.ticketInfo.flightNumberLabel')}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>{ticketInfo.busCode}</TableCell>
                  </TableRow>
                  <TableRow>
                    {/* <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
                      {t('newprofile.confirmation.ticketInfo.flightClassLabel')}
                    </TableCell> */}
                    {/* <TableCell sx={{ border: 'none' }}>{ticketInfo.carType}</TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
                      {t('newprofile.confirmation.ticketInfo.flightClassLabel')}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>{ticketInfo.description}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
                      {t('newprofile.confirmation.ticketInfo.selectedSeats')}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>
                      <Chip 
                        label={confirmationData?.selectedSeats?.join(', ') || t('newprofile.orders.noSeatSelected')} 
                        color="primary" 
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        {/* Passenger Information */}
        <Card sx={{ mb: 3 }}>
          <CardContent sx={{ p: { xs: 2, md: 4 } }}>
            <Typography 
              variant="h5" 
              fontWeight="bold" 
              sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <GroupsIcon />
              {t('newprofile.confirmation.passengers.title')}
            </Typography>

            {passengers.length > 0 ? (
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="passengers table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>
                        #
                      </TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>
                        {t('newprofile.confirmation.passengers.seatNumber')}
                      </TableCell>
                     
                      <TableCell sx={{ fontWeight: 'bold' }}>
                        {t('newprofile.confirmation.passengers.fullName')}
                      </TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>
                        {t('newprofile.confirmation.passengers.gender')}
                      </TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>
                        {t('newprofile.confirmation.passengers.nationalId')}
                      </TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>
                        {t('newprofile.confirmation.passengers.birthDate')}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {passengers.map((passenger, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          {passenger.index}
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={`${t('newprofile.confirmation.passengers.seat')} ${passenger.seatNumber}`} 
                            size="small" 
                            color="primary"
                          />
                        </TableCell>
                     
                        <TableCell>{passenger.fullName}</TableCell>
                        <TableCell>{passenger.gender}</TableCell>
                        <TableCell>{passenger.nationalId}</TableCell>
                        <TableCell>{passenger.birthDate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Alert severity="warning">
                {t('newprofile.confirmation.noPassengers')}
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Travel Notification */}
        <Card sx={{ mb: 3 }}>
          <CardContent sx={{ p: { xs: 2, md: 4 } }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
              {t('newprofile.confirmation.notification.title')}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: 'warning.main', mb: 3 }}>
              <InfoIcon />
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                {t('newprofile.confirmation.notification.description')}
              </Typography>
            </Box>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="body1" fontWeight="bold">
                    {t('newprofile.confirmation.notification.email')}:
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {contactInfo.email || t('newprofile.confirmation.notification.noEmail')}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="body1" fontWeight="bold">
                    {t('newprofile.confirmation.notification.phone')}:
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {contactInfo.phone}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Discount Code */}
        <Card sx={{ mb: 3 }}>
          <CardContent sx={{ p: { xs: 2, md: 4 } }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
              {t('newprofile.confirmation.discount.title')}
            </Typography>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="discount-content"
                id="discount-header"
              >
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocalOfferIcon />
                  {t('newprofile.confirmation.discount.clickToEnter')}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ py: 2 }}>
                  <Typography variant="body1" gutterBottom>
                    {t('newprofile.confirmation.discount.instructions')}
                  </Typography>
                  
                  <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <TextField
                          fullWidth
                          size="small"
                          placeholder={t('newprofile.confirmation.discount.placeholder')}
                          value={discountCode}
                          onChange={(e) => setDiscountCode(e.target.value)}
                          disabled={isDiscountApplied}
                        />
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={handleApplyDiscount}
                          disabled={isDiscountApplied || !discountCode.trim()}
                        >
                          {t('newprofile.confirmation.discount.apply')}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>

                  {isDiscountApplied && (
                    <Box sx={{ mt: 2, p: 2, bgcolor: 'success.light', borderRadius: 1 }}>
                      <Typography variant="body2" color="success.dark">
                        {t('newprofile.confirmation.discount.appliedSuccess')}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 4,
          p: 3,
          bgcolor: 'grey.50',
          borderRadius: 2,
          border: 1,
          borderColor: 'divider'
        }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              {t('newprofile.orders.finalAmount')}:
            </Typography>
            <Typography variant="h4" color="primary" fontWeight="bold">
              {formatPrice(ticketInfo.totalPrice)} {t('newprofile.common.currency')}
            </Typography>
            {isDiscountApplied && (
              <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                {t('newprofile.confirmation.discount.applied')}
              </Typography>
            )}
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              size="large"
              onClick={handleBackToOrder}
              startIcon={<ArrowBackIcon />}
            >
              {t('newprofile.common.back')}
            </Button>
            
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleOpenPaymentConfirmation}
              disabled={passengers.length === 0 || paymentLoading}
              startIcon={paymentLoading ? <CircularProgress size={20} /> : <CheckIcon />}
              sx={{ px: 4, minWidth: 180 }}
            >
              {paymentLoading ? t('newprofile.orders.processing') : t('newprofile.orders.confirmAndPay')}
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Dialog for payment confirmation */}
      {renderPaymentConfirmationDialog()}
    </Box>
  );
};

export default OrderConfirmationPage;