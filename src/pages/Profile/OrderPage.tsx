// import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Chip,
//   useTheme,
//   useMediaQuery,
//   Paper,
//   Divider,
//   TextField,
//   MenuItem,
//   Alert,
//   CircularProgress,
//   Link,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Checkbox,
//   FormControlLabel as MuiFormControlLabel,
//   IconButton,
//   Stack,
//   Skeleton,
//   Breadcrumbs,
//   Snackbar,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   DialogContentText
// } from '@mui/material';
// import {
//   Check as CheckIcon,
//   Groups as GroupsIcon,
//   Description as DescriptionIcon,
//   ConfirmationNumber as ConfirmationNumberIcon,
//   CreditCard as CreditCardIcon,
//   AirportShuttle as BusIcon,
//   Person as PersonIcon,
//   ArrowBack as ArrowBackIcon,
//   Warning as WarningIcon,
//   Info as InfoIcon,
//   Close as CloseIcon,
//   Chair as ChairIcon,
//   Home as HomeIcon,
//   Male as MaleIcon,
//   Female as FemaleIcon,
//   Checklist as ChecklistIcon,
// } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';
// import UserContext from './../../UserContext';
// import moment from 'moment-jalaali';
// import { Controller, useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { BusDetailss } from '../../Api/ApiMaster';

// interface Passenger {
//   id: string;
//   firstName: string;
//   lastName: string;
//   gender: string; // '2' for male, '3' for female
//   nationalId: string;
//   birthDate: string;
//   mobile: string;
//   seatNumber: string;
// }

// interface BusData {
//   busCode: string;
//   sourceCode: string;
//   companyName: string;
//   carType: string;
//   originCity: string;
//   destinationCity: string;
//   originTerminal: string;
//   destinationTerminal: string;
//   timeMove: string;
//   price: number;
//   countFreeChairs: number;
//   description: string;
//   moveDateTime: string;
//   seates?: Array<{
//     chairNumber: number;
//     row: number;
//     column: number;
//     status: number; // 0: آزاد, 2: رزرو مرد, 3: رزرو زن, 4: مسدود
//   }>;
// }

// interface SeatButtonProps {
//   seat: {
//     chairNumber: number;
//     row: number;
//     column: number;
//     status: number;
//   };
//   selectedSeats: string[];
//   onSelect: (seatNumber: string) => void;
//   disabled: boolean;
// }

// // تابع کمکی برای تولید کلید ذخیره‌سازی
// const getStorageKey = (busData: BusData | null) => {
//   if (!busData) return null;
  
//   const { busCode, originCity, destinationCity } = busData;
//   const date = moment(busData.moveDateTime).format('YYYY-MM-DD');
  
//   return `bus_booking_${busCode}_${date}_${originCity}_${destinationCity}`.replace(/\s+/g, '_');
// };



// // تابع بارگذاری داده‌های ذخیره شده
// const loadSavedData = (storageKey: string | null) => {
//   if (!storageKey) return null;
  
//   try {
//     const savedData = localStorage.getItem(storageKey);
//     if (savedData) {
//       return JSON.parse(savedData);
//     }
//   } catch (error) {
//     console.error('Error loading saved data:', error);
//   }
//   return null;
// };

// // تابع ذخیره داده‌ها
// const saveDataToStorage = (
//   storageKey: string | null,
//   passengers: Passenger[],
//   selectedSeats: string[],
//   busData: BusData
// ) => {
//   if (!storageKey) return false;
  
//   try {
//     const saveData = {
//       passengers,
//       selectedSeats,
//       busData: {
//         busCode: busData.busCode,
//         originCity: busData.originCity,
//         destinationCity: busData.destinationCity,
//         moveDateTime: busData.moveDateTime
//       },
//       saveDate: new Date().toISOString()
//     };
    
//     localStorage.setItem(storageKey, JSON.stringify(saveData));
//     return true;
//   } catch (error) {
//     console.error('Error saving data:', error);
//     return false;
//   }
// };

// // تابع حذف داده‌های ذخیره شده
// const clearStorageData = (storageKey: string | null) => {
//   if (!storageKey) return;
//   localStorage.removeItem(storageKey);
// };

// const SeatButton: React.FC<SeatButtonProps> = ({ seat, selectedSeats, onSelect, disabled }) => {
//   const { t } = useTranslation();
//   const theme = useTheme();
  
//   const isSelected = selectedSeats.includes(seat.chairNumber.toString());
//   const isReserved = seat.status === 2 || seat.status === 3; // 2: مرد, 3: زن
//   const isMaleReserved = seat.status === 2;
//   const isFemaleReserved = seat.status === 3;
//   const isBlocked = seat.status === 4 || seat.chairNumber === -1;
//   const isAvailable = seat.status === 0 && seat.chairNumber > 0;
  


//   if (seat.chairNumber === -1 && seat.status === 4) {
//     return (
//       <Box sx={{ 
//         width: 40, 
//         height: 40,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         cursor: 'default'
//       }}>
//         {/* فضای خالی */}
//       </Box>
//     );
//   }
  
//   const getBackgroundColor = () => {
//     if (isSelected) return theme.palette.primary.main;
//     if (isMaleReserved) return theme.palette.error.light; // رنگ مخصوص مرد
//     if (isFemaleReserved) return theme.palette.secondary.light; // رنگ مخصوص زن
//     if (isBlocked) return theme.palette.grey[400];
//     return isAvailable ? theme.palette.grey[200] : theme.palette.grey[300];
//   };
  
//   const getBorderColor = () => {
//     if (isSelected) return theme.palette.primary.dark;
//     if (isMaleReserved) return theme.palette.error.main;
//     if (isFemaleReserved) return theme.palette.secondary.main;
//     if (isBlocked) return theme.palette.grey[500];
//     return isAvailable ? theme.palette.grey[400] : theme.palette.grey[500];
//   };
  
//   const getColor = () => {
//     if (isSelected || isReserved) return 'white';
//     return theme.palette.text.primary;
//   };
  
//   const getCursor = () => {
//     if (isReserved || isBlocked || disabled) return 'not-allowed';
//     return 'pointer';
//   };
  
//   const getTooltip = () => {
//     if (isMaleReserved) return t('newprofile.seat.maleReserved');
//     if (isFemaleReserved) return t('newprofile.seat.femaleReserved');
//     if (isBlocked) return t('newprofile.seat.blocked');
//     if (isSelected) return t('newprofile.seat.selected');
//     if (isAvailable) return t('newprofile.seat.available');
//     return t('newprofile.seat.unknown');
//   };
  
//   return (
//     <Box
//       title={getTooltip()}
//       onClick={() => {
//         if (isAvailable && !isReserved && !isBlocked && !disabled) {
//           onSelect(seat.chairNumber.toString());
//         }
//       }}
//       sx={{
//         width: 40,
//         height: 40,
//         bgcolor: getBackgroundColor(),
//         border: `2px solid ${getBorderColor()}`,
//         borderRadius: '4px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         cursor: getCursor(),
//         position: 'relative',
//         transition: 'all 0.2s ease',
//         '&:hover': {
//           transform: isAvailable && !isReserved && !isBlocked && !disabled ? 'scale(1.05)' : 'none',
//           boxShadow: isAvailable && !isReserved && !isBlocked && !disabled ? 2 : 'none'
//         },
//         opacity: disabled && !isSelected ? 0.5 : 1
//       }}
//     >
//       {seat.chairNumber > 0 && (
//         <Typography
//           variant="body2"
//           sx={{
//             color: getColor(),
//             fontWeight: isSelected ? 'bold' : 'normal'
//           }}
//         >
//           {seat.chairNumber}
//         </Typography>
//       )}
      
//       {isSelected && (
//         <CheckIcon
//           sx={{
//             position: 'absolute',
//             top: -5,
//             right: -5,
//             fontSize: 16,
//             color: 'white',
//             bgcolor: theme.palette.success.main,
//             borderRadius: '50%',
//             p: 0.5
//           }}
//         />
//       )}
      
//       {isMaleReserved && !isSelected && (
//         <MaleIcon
//           sx={{
//             position: 'absolute',
//             top: -5,
//             right: -5,
//             fontSize: 16,
//             color: 'white',
//             bgcolor: theme.palette.error.main,
//             borderRadius: '50%',
//             p: 0.5
//           }}
//         />
//       )}
      
//       {isFemaleReserved && !isSelected && (
//         <FemaleIcon
//           sx={{
//             position: 'absolute',
//             top: -5,
//             right: -5,
//             fontSize: 16,
//             color: 'white',
//             bgcolor: theme.palette.secondary.main,
//             borderRadius: '50%',
//             p: 0.5
//           }}
//         />
//       )}
//     </Box>
//   );
// };

// const OrderPage: React.FC = () => {
//   const { t, i18n } = useTranslation();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const navigate = useNavigate();
//   const isPersian = ['fa', 'ar', 'pa'].includes(i18n.language);
  
//   const { userData } = useContext(UserContext);
  
//   const [loading, setLoading] = useState(true);
//   const [busLoading, setBusLoading] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [busData, setBusData] = useState<BusData | null>(null);
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
//   const [availableSeats, setAvailableSeats] = useState<string[]>([]);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info'>('info');
//   const [clearDialogOpen, setClearDialogOpen] = useState(false);


//   const steps = [
//     { label: t('newprofile.order.steps.selectFlight'), icon: <CheckIcon />, completed: true },
//     { label: t('newprofile.order.steps.passengerDetails'), icon: <GroupsIcon />, completed: true },
//     { label: t('newprofile.order.steps.confirmInfo'), icon: <ChecklistIcon />, active: true },
//     { label: t('newprofile.order.steps.payment'), icon: <CreditCardIcon /> },
//     { label: t('newprofile.order.steps.ticketIssuance'), icon: <ConfirmationNumberIcon /> }
//   ];
  
//   const passengerSchema = yup.object().shape({
//     firstName: yup.string()
//       .required(t('newprofile.validation.firstNameRequired'))
//       .min(2, t('newprofile.validation.firstNameMinLength')),
//     lastName: yup.string()
//       .required(t('newprofile.validation.lastNameRequired'))
//       .min(2, t('newprofile.validation.lastNameMinLength')),
//     gender: yup.string().required(t('newprofile.validation.genderRequired')),
//     nationalId: yup.string()
//       .required(t('newprofile.validation.nationalIdRequired'))
//       .matches(/^\d{10}$/, t('newprofile.validation.nationalIdInvalid')),
//     mobile: yup.string()
//       .required(t('newprofile.validation.mobileRequired'))
//       .matches(/^09\d{9}$/, t('newprofile.validation.mobileInvalid')),
//     birthDate: yup.string().required(t('newprofile.validation.birthDateRequired')),
//     seatNumber: yup.string().required(t('newprofile.validation.seatNumberRequired'))
//   });

//   const formSchema = yup.object().shape({
//     passengers: yup.array().of(passengerSchema).min(1, t('newprofile.validation.minPassengers')),
//     termsAccepted: yup.boolean().oneOf([true], t('newprofile.validation.termsRequired'))
//   });

//   const { control, handleSubmit, formState: { errors }, setValue, watch } = useForm({
//     resolver: yupResolver(formSchema),
//     defaultValues: {
//       passengers: [],
//       termsAccepted: false
//     }
//   });

//   useEffect(() => {
//     if (!userData || userData.length === 0) {
//       setError(t('newprofile.orders.userNotFound'));
//       setLoading(false);
//       return;
//     }
    
//     const storedBusInfo = localStorage.getItem('selectedBusInfo');
//     if (storedBusInfo) {
//       try {
//         const busInfo = JSON.parse(storedBusInfo);
//         fetchBusDetails(busInfo);
//       } catch (err) {
//         setError(t('newprofile.orders.busInfoError'));
//         setLoading(false);
//       }
//     } else {
//       setError(t('newprofile.orders.noBusSelected'));
//       setLoading(false);
//     }
//   }, [userData, t]);

//   const fetchBusDetails = async (busInfo: any) => {
//     if (!busInfo || !userData?.[0]) {
//       setError(t('newprofile.orders.busOrUserNotFound'));
//       setLoading(false);
//       return;
//     }

//     try {
//       setBusLoading(true);
      
//       const busCode = busInfo.busCode;
//       const sourceCode = busInfo.sourceCode;
//       const requestNumber = busInfo.requestNumber || 'default_request';
      
//       await BusDetailss(
//         requestNumber,
//         sourceCode,
//         busCode,
//         userData[0]?.Token || '',
//         setBusLoading,
//         (data) => {
//           console.log('Bus details data:', data);
//           setBusData(data);
          
//           if (data.seates) {
//             // فقط صندلی‌هایی که status === 0 (آزاد) هستند را نشان می‌دهیم
//             const freeSeats = data.seates
//               .filter((seat: any) => seat.status === 0 && seat.chairNumber > 0)
//               .map((seat: any) => seat.chairNumber.toString());
//             setAvailableSeats(freeSeats);
//           }
          
//           // بارگذاری داده‌های ذخیره شده برای این اتوبوس
//           const storageKey = getStorageKey(data);
//           if (storageKey) {
//             const savedData = loadSavedData(storageKey);
//             if (savedData) {
//               console.log('Loading saved data:', savedData);
//               setSelectedSeats(savedData.selectedSeats || []);
//               setValue('passengers', savedData.passengers || []);
//               setValue('termsAccepted', false);
              
//               // نمایش پیام فقط اگر داده‌ای بارگذاری شده باشد
//               if (savedData.selectedSeats?.length > 0 || savedData.passengers?.length > 0) {
//                 setSnackbarMessage(t('newprofile.orders.savedDataLoaded'));
//                 setSnackbarSeverity('success');
//                 setSnackbarOpen(true);
//               }
//             }
//           }
          
//           setLoading(false);
//         },
//         {},
//         null
//       );
//     } catch (error) {
//       console.error('Error fetching bus details:', error);
//       setError(t('newprofile.orders.busDetailsError'));
//       setLoading(false);
//       setBusLoading(false);
//     }
//   };

//   const getTripDetails = () => {
//     if (!busData && !userData?.[0]) return null;
    
//     const data = busData;
//     const user = userData[0];
    
//     const price = data?.price;
//     const passengerCount = selectedSeats.length || watch('passengers')?.length || 1;
    
//     let moveDate = data?.dateMove ;
//     let moveTime = data?.timeMove;
    
//     console.log('data?.companyName 5 :', data);

//     return {
//       company: data?.companyName || data?.company || '',
//       carType: data?.carType,
//       from: data?.originCity || user?.StartPlaceName || user?.StartPlace || '',
//       to: data?.destinationCity || user?.EndPlaceName || user?.EndPlace || '',
//       departureTime: moveTime,
//       date: moveDate,
//       originTerminal: data?.originTerminal || '',
//       destinationTerminal: data?.destinationTerminal || '',
//       price: price,
//       totalPrice: price ? price * passengerCount : 0,
//       busCode: data?.busCode || '',
//       seatsLeft: data?.countFreeChairs || 0,
//       description: data?.description || '',
//       passengerCount: passengerCount
//     };
//   };

//   const tripDetails = getTripDetails();

//   useEffect(() => {
//     const passengers = watch('passengers');
    
//     if (selectedSeats.length > 0) {
//       const newPassengers = [];
      
//       for (let i = 0; i < selectedSeats.length; i++) {
//         const seat = selectedSeats[i];
//         const existingPassenger = passengers[i] || {};
        
//         newPassengers.push({
//           id: existingPassenger.id || `passenger-${Date.now()}-${i}`,
//           firstName: existingPassenger.firstName || '',
//           lastName: existingPassenger.lastName || '',
//           gender: existingPassenger.gender || '2', // پیش‌فرض مرد
//           nationalId: existingPassenger.nationalId || '',
//           birthDate: existingPassenger.birthDate || '',
//           mobile: existingPassenger.mobile || userData?.[0]?.Mobile || '',
//           seatNumber: seat
//         });
//       }
      
//       setValue('passengers', newPassengers);
//     } else {
//       setValue('passengers', []);
//     }
//   }, [selectedSeats, setValue, watch, userData]);

//   const handleSeatSelect = (seatNumber: string) => {
//     setSelectedSeats(prev => {
//       if (prev.includes(seatNumber)) {
//         return prev.filter(seat => seat !== seatNumber);
//       } else {
//         if (availableSeats.includes(seatNumber)) {
//           return [...prev, seatNumber];
//         } else {
//           setError(t('newprofile.orders.seatNotAvailable'));
//           setTimeout(() => setError(''), 3000);
//           return prev;
//         }
//       }
//     });
//   };

//   const formatPrice = (price: number) => {
//     return price.toLocaleString(isPersian ? 'fa-IR' : 'en-US');
//   };

//   const handleBackToSearch = () => {
//     navigate('/search-results');
//   };

//   const handleBackToHome = () => {
//     navigate('/');
//   };

//   const onSubmit = async (formData: any) => {
//     if (!busData || !tripDetails || !userData?.[0]) {
//       setError(t('newprofile.orders.incompleteInfo'));
//       return;
//     }

//     try {
//       setSubmitting(true);
//       setError('');

//       // تبدیل جنسیت از string به number برای API
//       const formattedPassengers = formData.passengers.map((passenger: Passenger) => ({
//         ...passenger,
//         gender: parseInt(passenger.gender) // تبدیل به عدد برای API
//       }));

//       // ذخیره اطلاعات قبل از ارسال به صفحه تأیید
//       const storageKey = getStorageKey(busData);
//       if (storageKey) {
//         const saveSuccess = saveDataToStorage(
//           storageKey, 
//           formattedPassengers, 
//           selectedSeats, 
//           busData
//         );
        
//         if (saveSuccess) {
//           console.log('Data saved successfully before confirmation');
//         }
//       }

//       navigate('/orders-confirm', { 
//         state: {
//           busData: busData,
//           tripDetails: tripDetails,
//           passengers: formattedPassengers,
//           selectedSeats: selectedSeats,
//           totalPrice: tripDetails.totalPrice,
//           formData: formData
//         }
//       });
      
//     } catch (error: any) {
//       console.error('Error submitting booking:', error);
//       setError(error.message || t('newprofile.orders.reserveError'));
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const LoadingSkeletons = () => (
//     <Stack spacing={2} sx={{ px: isMobile ? 1 : 4, py: 4 }}>
//       <Skeleton variant="rectangular" width="100%" height={200} sx={{ borderRadius: 2 }} />
//       <Skeleton variant="rectangular" width="100%" height={150} sx={{ borderRadius: 2 }} />
//       <Skeleton variant="rectangular" width="100%" height={100} sx={{ borderRadius: 2 }} />
//     </Stack>
//   );

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   const renderSnackbar = () => (
//     <Snackbar
//       open={snackbarOpen}
//       autoHideDuration={4000}
//       onClose={handleSnackbarClose}
//       anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//     >
//       <Alert 
//         onClose={handleSnackbarClose} 
//         severity={snackbarSeverity}
//         sx={{ width: '100%' }}
//       >
//         {snackbarMessage}
//       </Alert>
//     </Snackbar>
//   );

//   const CustomStepConnector = () => (
//     <Box
//       sx={{
//         flex: 1,
//         height: 2,
//         backgroundColor: 'divider',
//         mx: 1
//       }}
//     />
//   );

//   // const renderSeatMap = () => {
//   //   const seats = busData?.seates || [];
    
//   //   if (seats.length === 0) {
//   //     return (
//   //       <Alert severity="warning">
//   //         {t('newprofile.orders.noSeatInfo')}
//   //       </Alert>
//   //     );
//   //   }

//   //   const uniqueColumns = [...new Set(seats.filter(s => s.chairNumber > 0).map(seat => seat.column))].sort((a, b) => a - b);
//   //   const maxRow = Math.max(...seats.map(seat => seat.row));
    
//   //   const seatsByRow: {[key: number]: typeof seats} = {};
//   //   seats.forEach(seat => {
//   //     if (!seatsByRow[seat.row]) {
//   //       seatsByRow[seat.row] = [];
//   //     }
//   //     seatsByRow[seat.row].push(seat);
//   //   });

//   //   return (
//   //     <Box sx={{ 
//   //       display: 'flex', 
//   //       flexDirection: 'column', 
//   //       alignItems: 'center',
//   //       gap: 2,
//   //       mb: 3,
//   //       p: 3,
//   //       bgcolor: 'grey.50',
//   //       borderRadius: 2,
//   //       border: 1,
//   //       borderColor: 'divider',
//   //       direction:'rtl'
//   //     }}>
//   //       <Box sx={{ 
//   //         width: '100%', 
//   //         textAlign: 'center', 
//   //         mb: 2,
//   //         p: 1,
//   //         bgcolor: 'grey.200',
//   //         borderRadius: 1
//   //       }}>
//   //         <Typography variant="caption" color="text.secondary">
//   //           {t('newprofile.orders.frontOfBus')}
//   //         </Typography>
//   //       </Box>
        
//   //       {Array.from({ length: maxRow }, (_, index) => {
//   //         const rowNumber = index + 1;
//   //         const rowSeats = seatsByRow[rowNumber] || [];
          
//   //         const leftSeats = rowSeats.filter(seat => seat.column === 1 || seat.column === 2)
//   //           .sort((a, b) => a.column - b.column);
//   //         const rightSeats = rowSeats.filter(seat => seat.column === 4 || seat.column === 5)
//   //           .sort((a, b) => a.column - b.column);
          
//   //         const hasOnlyLeftSeats = leftSeats.length > 0 && rightSeats.length === 0;
          
//   //         return (
//   //           <Box 
//   //             key={`row-${rowNumber}`}
//   //             sx={{ 
//   //               display: 'flex', 
//   //               gap: hasOnlyLeftSeats ? 1 : 3,
//   //               alignItems: 'center',
//   //               width: '100%',
//   //               justifyContent: 'center'
//   //             }}
//   //           >
//   //             <Box sx={{ display: 'flex', gap: 1 }}>
//   //               {leftSeats.map(seat => (
//   //                 <SeatButton
//   //                   key={`seat-${seat.chairNumber}`}
//   //                   seat={seat}
//   //                   selectedSeats={selectedSeats}
//   //                   onSelect={handleSeatSelect}
//   //                   disabled={!availableSeats.includes(seat.chairNumber.toString())}
//   //                 />
//   //               ))}
//   //             </Box>
              
//   //             {!hasOnlyLeftSeats && rightSeats.length > 0 && (
//   //               <Box sx={{ 
//   //                 width: 40, 
//   //                 height: 40,
//   //                 display: 'flex',
//   //                 alignItems: 'center',
//   //                 justifyContent: 'center',
//   //                 position: 'relative'
//   //               }}>
//   //                 <Divider orientation="vertical" sx={{ height: '100%' }} />
//   //                 {rowNumber === 1 && (
//   //                   <Typography 
//   //                     variant="caption" 
//   //                     color="text.secondary"
//   //                     sx={{ 
//   //                       position: 'absolute',
//   //                       whiteSpace: 'nowrap'
//   //                     }}
//   //                   >
//   //                     {t('newprofile.orders.aisle')}
//   //                   </Typography>
//   //                 )}
//   //               </Box>
//   //             )}
              
//   //             {rightSeats.length > 0 && (
//   //               <Box sx={{ display: 'flex', gap: 1 }}>
//   //                 {rightSeats.map(seat => (
//   //                   <SeatButton
//   //                     key={`seat-${seat.chairNumber}`}
//   //                     seat={seat}
//   //                     selectedSeats={selectedSeats}
//   //                     onSelect={handleSeatSelect}
//   //                     disabled={!availableSeats.includes(seat.chairNumber.toString())}
//   //                   />
//   //                 ))}
//   //               </Box>
//   //             )}
//   //           </Box>
//   //         );
//   //       })}
//   //     </Box>
//   //   );
//   // };
//   const renderSeatMap = () => {
//     const seats = busData?.seates || [];
    
//     if (seats.length === 0) {
//       return (
//         <Alert severity="warning">
//           {t('newprofile.orders.noSeatInfo')}
//         </Alert>
//       );
//     }
  
//     const uniqueColumns = [...new Set(seats.filter(s => s.chairNumber > 0).map(seat => seat.column))].sort((a, b) => a - b);
//     const maxRow = Math.max(...seats.map(seat => seat.row));
    
//     const seatsByRow: {[key: number]: typeof seats} = {};
//     seats.forEach(seat => {
//       if (!seatsByRow[seat.row]) {
//         seatsByRow[seat.row] = [];
//       }
//       seatsByRow[seat.row].push(seat);
//     });
  
//     return (
//       <Box sx={{ 
//         display: 'flex', 
//         flexDirection: 'row', 
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: 3,
//         mb: 3,
//         p: 3,
//         bgcolor: 'grey.50',
//         borderRadius: 2,
//         border: 1,
//         borderColor: 'divider',
//         minHeight: 500,
//         width: '100%',
//         position: 'relative',direction:'ltr'
//       }}>
//         {/* Front of Bus Label - Now on the left side after rotation */}
//         <Box sx={{ 
//           position: 'absolute',
//           right: 8,
//           top: '50%',
//           transform: 'translateY(-50%) rotate(-90deg)',
//           p: 1,
//           bgcolor: 'grey.200',
//           borderRadius: 1,
//           zIndex: 1,
//           whiteSpace: 'nowrap'
//         }}>
//           <Typography variant="caption" color="text.secondary">
//             {t('newprofile.orders.frontOfBus')}
//           </Typography>
//         </Box>
        
//         {/* Aisle Label - Now at the top after rotation */}
//         <Box sx={{ 
//           position: 'absolute',
//           top: 8,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           zIndex: 1
//         }}>
//           <Typography variant="caption" color="text.secondary">
//             {t('newprofile.orders.aisle')}
//           </Typography>
//         </Box>
        
//         {/* Seat Rows - Now displayed as columns */}
//         <Box sx={{ 
//           display: 'flex', 
//           flexDirection: 'row-reverse', // Reverse for RTL
//           gap: 2,
//           alignItems: 'center',
//           justifyContent: 'center',
//           flex: 1
//         }}>
//           {Array.from({ length: maxRow }, (_, index) => {
//             const rowNumber = index + 1;
//             const rowSeats = seatsByRow[rowNumber] || [];
            
//             // For rotated view:
//             // leftSeats (columns 1,2) become bottom seats
//             // rightSeats (columns 4,5) become top seats
//             const bottomSeats = rowSeats.filter(seat => seat.column === 1 || seat.column === 2)
//               .sort((a, b) => a.column - b.column);
//             const topSeats = rowSeats.filter(seat => seat.column === 4 || seat.column === 5)
//               .sort((a, b) => a.column - b.column);
            
//             const hasOnlyBottomSeats = bottomSeats.length > 0 && topSeats.length === 0;
            
//             return (
//               <Box 
//                 key={`row-${rowNumber}`}
//                 sx={{ 
//                   display: 'flex', 
//                   flexDirection: 'column',
//                   gap: hasOnlyBottomSeats ? 1 : 3,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   minWidth: 60
//                 }}
//               >
//                 {/* Top seats (previously right seats) */}
//                 {topSeats.length > 0 && (
//                   <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                     {topSeats.map(seat => (
//                       <SeatButton
//                         key={`seat-${seat.chairNumber}`}
//                         seat={seat}
//                         selectedSeats={selectedSeats}
//                         onSelect={handleSeatSelect}
//                         disabled={!availableSeats.includes(seat.chairNumber.toString())}
//                         sx={{ 
//                           transform: 'rotate(-90deg)', // Keep seat buttons readable
//                           width: 40,
//                           height: 40
//                         }}
//                       />
//                     ))}
//                   </Box>
//                 )}
                
//                 {/* Aisle Divider - Now horizontal */}
//                 {!hasOnlyBottomSeats && topSeats.length > 0 && (
//                   <Box sx={{ 
//                     width: '100%', 
//                     height: 40,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     position: 'relative'
//                   }}>
//                     <Divider orientation="horizontal" sx={{ width: '100%' }} />
//                   </Box>
//                 )}
                
//                 {/* Bottom seats (previously left seats) */}
//                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                   {bottomSeats.map(seat => (
//                     <SeatButton
//                       key={`seat-${seat.chairNumber}`}
//                       seat={seat}
//                       selectedSeats={selectedSeats}
//                       onSelect={handleSeatSelect}
//                       disabled={!availableSeats.includes(seat.chairNumber.toString())}
//                       sx={{ 
//                         transform: 'rotate(-90deg)', // Keep seat buttons readable
//                         width: 40,
//                         height: 40
//                       }}
//                     />
//                   ))}
//                 </Box>
                
//                 {/* Row Number Label */}
//                 <Typography 
//                   variant="caption" 
//                   color="text.secondary"
//                   sx={{ 
//                     mt: 1,
//                     fontWeight: 'bold'
//                   }}
//                 >
//                   {rowNumber}
//                 </Typography>
//               </Box>
//             );
//           })}
//         </Box>
//       </Box>
//     );
//   };

//   if (busLoading) {
//     return (
//       <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
//         <Container maxWidth="lg" sx={{ py: 4 }}>
//           {LoadingSkeletons()}
//         </Container>
//       </Box>
//     );
//   }

//   if (!userData || userData.length === 0) {
//     return (
//       <Container maxWidth="lg" sx={{ py: 4, minHeight: '60vh' }}>
//         <Alert severity="error" sx={{ mb: 3 }}>
//           {t('newprofile.orders.userNotFound')}
//         </Alert>
//         <Button
//           variant="contained"
//           onClick={handleBackToHome}
//         >
//           {t('newprofile.common.backToHome')}
//         </Button>
//       </Container>
//     );
//   }

//   if (!tripDetails || !busData) {
//     return (
//       <Container maxWidth="lg" sx={{ py: 4, minHeight: '60vh' }}>
//         <Alert severity="error" sx={{ mb: 3 }}>
//           {error || t('newprofile.orders.noBusSelected')}
//         </Alert>
//         <Button
//           variant="contained"
//           onClick={handleBackToSearch}
//         >
//           {t('newprofile.common.backToSearch')}
//         </Button>
//       </Container>
//     );
//   }

//   return (
//     <Box sx={{ 
//       minHeight: '100vh', 
//       bgcolor: 'background.default', 
//       direction: !isPersian ? 'rtl' : 'ltr' 
//     }}>
    

//     <Paper 
//         elevation={0} 
//         sx={{ 
//           borderBottom: 1, 
//           borderColor: 'divider',
//           bgcolor: 'background.paper',
//           py: 2
//         }}
//       >
//         <Container maxWidth="lg">
//           <Box sx={{ py: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
//             {steps.map((step, index) => (
//               <React.Fragment key={step.label}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mx: 1 }}>
//                   <Box
//                     sx={{
//                       width: 40,
//                       height: 40,
//                       borderRadius: '50%',
//                       bgcolor: step.completed ? 'primary.main' : step.active ? 'primary.main' : 'grey.300',
//                       color: step.completed || step.active ? 'white' : 'grey.500',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       fontSize: '1.2rem',
//                       mb: 1
//                     }}
//                   >
//                     {step.icon}
//                   </Box>
//                   <Typography 
//                     variant="body2" 
//                     fontWeight={step.active ? 'bold' : 'normal'}
//                     color={step.active ? 'primary.main' : 'text.secondary'}
//                     sx={{ textAlign: 'center' }}
//                   >
//                     {step.label}
//                   </Typography>
//                 </Box>
//                 {index < steps.length - 1 && <CustomStepConnector />}
//               </React.Fragment>
//             ))}
//           </Box>
//         </Container>
//       </Paper>

//       <Container maxWidth="lg" sx={{ py: 4 }}>
//         {error && (
//           <Alert severity="error" sx={{ mb: 3 }}>
//             {error}
//           </Alert>
//         )}
        
//         {success && (
//           <Alert severity="success" sx={{ mb: 3 }}>
//             {success}
//           </Alert>
//         )}
        
//         <Card sx={{ mb: 4, border: 1, borderColor: 'primary.light', boxShadow: 2 }}>
//           <CardContent sx={{ p: 3 }}>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                   <BusIcon color="primary" sx={{ ml: 1 }} />
//                   <Typography variant="h5" fontWeight="bold">
//                     {t('newprofile.orders.tripInfo')}
//                   </Typography>
//                 </Box>
//                 <Divider sx={{ mb: 3 }} />
//               </Grid>
              
//               <Grid item xs={12} md={6}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       {t('newprofile.orders.origin')}:
//                     </Typography>
//                     <Typography variant="body1" fontWeight="bold">
//                       {tripDetails.from}
//                     </Typography>
//                     {tripDetails.originTerminal && (
//                       <Typography variant="caption" color="text.secondary">
//                         ({tripDetails.originTerminal})
//                       </Typography>
//                     )}
//                   </Grid>
                  
//                   <Grid item xs={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       {t('newprofile.orders.destination')}:
//                     </Typography>
//                     <Typography variant="body1" fontWeight="bold">
//                       {tripDetails.to}
//                     </Typography>
//                     {tripDetails.destinationTerminal && (
//                       <Typography variant="caption" color="text.secondary">
//                         ({tripDetails.destinationTerminal})
//                       </Typography>
//                     )}
//                   </Grid>
                  
//                   <Grid item xs={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       {t('newprofile.orders.company')}:
//                     </Typography>
//                     <Typography variant="body1">{tripDetails.company}</Typography>
//                   </Grid>
                  
//                   <Grid item xs={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       {t('newprofile.orders.vehicleType')}:
//                     </Typography>
//                     <Typography variant="body1">{tripDetails.carType}</Typography>
//                   </Grid>
                  
//                   <Grid item xs={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       {t('newprofile.orders.departureDate')}:
//                     </Typography>
//                     <Typography variant="body1">{tripDetails.date}</Typography>
//                   </Grid>
                  
//                   <Grid item xs={6}>
//                     <Typography variant="body2" color="text.secondary">
//                       {t('newprofile.orders.departureTime')}:
//                     </Typography>
//                     <Typography variant="body1" fontWeight="bold" color="primary">
//                       {tripDetails.departureTime}
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Grid>
              
//               <Grid item xs={12} md={6}>
//                 <Box sx={{ 
//                   bgcolor: 'grey.50', 
//                   p: 3, 
//                   borderRadius: 2,
//                   border: 1,
//                   borderColor: 'divider',
//                   height: '100%'
//                 }}>
//                   <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
//                     <CreditCardIcon sx={{ ml: 1 }} />
//                     {t('newprofile.orders.priceSummary')}
//                   </Typography>
                  
//                   <Box sx={{ mb: 2 }}>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
//                       <Typography variant="body2">{t('newprofile.orders.pricePerTicket')}:</Typography>
//                       <Typography variant="body2" fontWeight="bold">
//                         {formatPrice(tripDetails.price)} {t('newprofile.common.currency')}
//                       </Typography>
//                     </Box>
                    
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
//                       <Typography variant="body2">{t('newprofile.orders.passengerCount')}:</Typography>
//                       <Typography variant="body2" fontWeight="bold">
//                         {selectedSeats.length || 0} {t('newprofile.orders.passengerUnit')}
//                       </Typography>
//                     </Box>
                    
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
//                       <Typography variant="body2">{t('newprofile.orders.seatsLeft')}:</Typography>
//                       <Typography variant="body2" fontWeight="bold" color={
//                         tripDetails.seatsLeft > 5 ? 'success.main' : 
//                         tripDetails.seatsLeft > 0 ? 'warning.main' : 'error.main'
//                       }>
//                         {tripDetails.seatsLeft} {t('newprofile.orders.seatUnit')}
//                       </Typography>
//                     </Box>
                    
//                     <Divider sx={{ my: 2 }} />
                    
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                       <Typography variant="h6" fontWeight="bold">{t('newprofile.orders.totalAmount')}:</Typography>
//                       <Typography variant="h5" color="primary" fontWeight="bold">
//                         {formatPrice(tripDetails.totalPrice)} {t('newprofile.common.currency')}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Box>
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>
        
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Card sx={{ mb: 4 }}>
//             <CardContent sx={{ p: 3 }}>
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//                 <Typography variant="h6" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center' }}>
//                   <ChairIcon sx={{ ml: 1 }} />
//                   {t('newprofile.orders.selectSeat')}
//                 </Typography>
                
//                 {selectedSeats.length > 0 && (
//                   <Chip 
//                     label={`${selectedSeats.length} ${t('newprofile.orders.selectedSeats')}`}
//                     color="primary"
//                     variant="outlined"
//                   />
//                 )}
//               </Box>
              
//               <Alert severity="info" sx={{ mb: 3 }}>
//                 {t('newprofile.orders.selectSeatDescription')}
//               </Alert>
               
//                             {renderSeatMap()}
              
//               <Box sx={{ 
//                 display: 'flex', 
//                 flexWrap: 'wrap', 
//                 justifyContent: 'center', 
//                 gap: 3, 
//                 mt: 4,
//                 p: 2,
//                 bgcolor: 'grey.50',
//                 borderRadius: 2
//               }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <Box sx={{ width: 20, height: 20, border: 1, borderColor: 'grey.400', borderRadius: 1 }} />
//                   <Typography variant="caption">{t('newprofile.seat.available')}</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <Box sx={{ width: 20, height: 20, bgcolor: 'primary.main', borderRadius: 1 }} />
//                   <Typography variant="caption">{t('newprofile.seat.selected')}</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <Box sx={{ width: 20, height: 20, bgcolor: 'error.light', borderRadius: 1 }} />
//                   <Typography variant="caption">{t('newprofile.seat.maleReserved')}</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <Box sx={{ width: 20, height: 20, bgcolor: 'secondary.light', borderRadius: 1 }} />
//                   <Typography variant="caption">{t('newprofile.seat.femaleReserved')}</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <Box sx={{ width: 20, height: 20, bgcolor: 'grey.400', borderRadius: 1 }} />
//                   <Typography variant="caption">{t('newprofile.seat.blocked')}</Typography>
//                 </Box>
//               </Box>
//             </CardContent>
//           </Card>

//           {selectedSeats.length > 0 && (
//             <Card sx={{ mb: 4 }}>
//               <CardContent sx={{ p: 3 }}>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//                   <Typography variant="h6" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center' }}>
//                     <GroupsIcon sx={{ ml: 1 }} />
//                     {t('newprofile.orders.passengerInfo')}
//                   </Typography>
                  
//                   {/* <Chip 
//                     label={`${selectedSeats.length} ${t('newprofile.orders.passengers')}`}
//                     color="secondary"
//                     variant="outlined"
//                   /> */}
//                 </Box>
                
//                 <Controller
//                   name="passengers"
//                   control={control}
//                   render={({ field }) => (
//                     <Stack spacing={3}>
//                       {field.value.map((passenger, index) => (
//                         <Paper key={passenger.id || index} sx={{ p: 3, border: 1, borderColor: 'divider', borderRadius: 2 }}>
//                           <Box sx={{ 
//                             display: 'flex', 
//                             alignItems: 'center', 
//                             mb: 2,
//                             p: 1,
//                             bgcolor: 'primary.50',
//                             borderRadius: 1
//                           }}>
//                             <PersonIcon color="primary" sx={{ ml: 1 }} />
//                             <Typography variant="subtitle1" fontWeight="bold">
//                               {t('newprofile.orders.passengerNumber', { number: index + 1 })} - {t('newprofile.orders.seat')} {passenger.seatNumber}
//                             </Typography>
//                           </Box>
                          
//                           <Grid container spacing={2}>
//                             <Grid item xs={12} sm={6} md={3}>
//                               <Controller
//                                 name={`passengers.${index}.firstName`}
//                                 control={control}
//                                 render={({ field: passengerField }) => (
//                                   <TextField
//                                     {...passengerField}
//                                     fullWidth
//                                     label={t('newprofile.form.firstName')}
//                                     size="small"
//                                     error={!!errors.passengers?.[index]?.firstName}
//                                     helperText={errors.passengers?.[index]?.firstName?.message}
//                                   />
//                                 )}
//                               />
//                             </Grid>
                            
//                             <Grid item xs={12} sm={6} md={3}>
//                               <Controller
//                                 name={`passengers.${index}.lastName`}
//                                 control={control}
//                                 render={({ field: passengerField }) => (
//                                   <TextField
//                                     {...passengerField}
//                                     fullWidth
//                                     label={t('newprofile.form.lastName')}
//                                     size="small"
//                                     error={!!errors.passengers?.[index]?.lastName}
//                                     helperText={errors.passengers?.[index]?.lastName?.message}
//                                   />
//                                 )}
//                               />
//                             </Grid>
                            
//                             <Grid item xs={12} sm={6} md={3}>
//                               <Controller
//                                 name={`passengers.${index}.nationalId`}
//                                 control={control}
//                                 render={({ field: passengerField }) => (
//                                   <TextField
//                                     {...passengerField}
//                                     fullWidth
//                                     label={t('newprofile.form.nationalId')}
//                                     size="small"
//                                     error={!!errors.passengers?.[index]?.nationalId}
//                                     helperText={errors.passengers?.[index]?.nationalId?.message}
//                                   />
//                                 )}
//                               />
//                             </Grid>
                            
//                             <Grid item xs={12} sm={6} md={3}>
//                               <Controller
//                                 name={`passengers.${index}.mobile`}
//                                 control={control}
//                                 render={({ field: passengerField }) => (
//                                   <TextField
//                                     {...passengerField}
//                                     fullWidth
//                                     label={t('newprofile.form.mobile')}
//                                     size="small"
//                                     error={!!errors.passengers?.[index]?.mobile}
//                                     helperText={errors.passengers?.[index]?.mobile?.message}
//                                   />
//                                 )}
//                               />
//                             </Grid>
                            
//                             <Grid item xs={12} sm={6} md={3}>
//                               <Controller
//                                 name={`passengers.${index}.birthDate`}
//                                 control={control}
//                                 render={({ field: passengerField }) => (
//                                   <TextField
//                                     {...passengerField}
//                                     fullWidth
//                                     label={t('newprofile.form.birthDate')}
//                                     size="small"
//                                     placeholder={isPersian ? "۱۳۷۰/۰۵/۱۵" : "1991/08/06"}
//                                     error={!!errors.passengers?.[index]?.birthDate}
//                                     helperText={errors.passengers?.[index]?.birthDate?.message}
//                                   />
//                                 )}
//                               />
//                             </Grid>
                            
//                             <Grid item xs={12} sm={6} md={3}>
//                               <Controller
//                                 name={`passengers.${index}.gender`}
//                                 control={control}
//                                 render={({ field: passengerField }) => (
//                                   <TextField
//                                     select
//                                     {...passengerField}
//                                     fullWidth
//                                     label={t('newprofile.form.gender')}
//                                     size="small"
//                                     error={!!errors.passengers?.[index]?.gender}
//                                     helperText={errors.passengers?.[index]?.gender?.message}
//                                   >
//                                     <MenuItem value="">{t('newprofile.form.select')}</MenuItem>
//                                     <MenuItem value="2">{t('newprofile.form.male')}</MenuItem>
//                                     <MenuItem value="3">{t('newprofile.form.female')}</MenuItem>
//                                   </TextField>
//                                 )}
//                               />
//                             </Grid>
//                           </Grid>
//                         </Paper>
//                       ))}
//                     </Stack>
//                   )}
//                 />
//               </CardContent>
//             </Card>
//           )}

//           <Card sx={{ mb: 4 }}>
//             <CardContent>
//               <Controller
//                 name="termsAccepted"
//                 control={control}
//                 render={({ field }) => (
//                   <MuiFormControlLabel
//                     control={
//                       <Checkbox
//                         {...field}
//                         checked={field.value}
//                         onChange={(e) => field.onChange(e.target.checked)}
//                         color="primary"
//                       />
//                     }
//                     label={
//                       <Typography variant="body2">
//                         {t('newprofile.orders.termsText')}
//                         <Link href="/terms" underline="always" target="_blank">
//                           {t('newprofile.orders.termsLink')}
//                         </Link>
//                         {' '}{t('newprofile.orders.and')}{' '}
//                         <Link href="/privacy" underline="always" target="_blank">
//                           {t('newprofile.orders.privacyLink')}
//                         </Link>
//                         {' '}{t('newprofile.orders.termsSuffix')}
//                       </Typography>
//                     }
//                   />
//                 )}
//               />
//               {errors.termsAccepted && (
//                 <Typography color="error" variant="caption" display="block">
//                   {errors.termsAccepted.message}
//                 </Typography>
//               )}
//             </CardContent>
//           </Card>

//           <Box sx={{ 
//             display: 'flex', 
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             p: 3,
//             bgcolor: 'grey.50',
//             borderRadius: 2,
//             border: 1,
//             borderColor: 'divider'
//           }}>
//             <Box>
//               <Typography variant="h6" gutterBottom>
//                 {t('newprofile.orders.finalAmount')}:
//               </Typography>
//               <Typography variant="h4" color="primary" fontWeight="bold">
//                 {formatPrice(tripDetails.totalPrice)} {t('newprofile.common.currency')}
//               </Typography>
//             </Box>
            
//             <Box sx={{ display: 'flex', gap: 2 }}>
//               <Button
//                 variant="outlined"
//                 size="large"
//                 onClick={handleBackToSearch}
//                 startIcon={<ArrowBackIcon />}
//               >
//                 {t('newprofile.common.back')}
//               </Button>
              
//               <Button
//                 type="submit"
//                 variant="contained"
//                 size="large"
//                 disabled={selectedSeats.length === 0 || submitting}
//                 startIcon={submitting ? <CircularProgress size={20} /> : <CheckIcon />}
//                 sx={{ px: 4, minWidth: 180 }}
//               >
//                 {submitting ? t('newprofile.orders.submitting') : t('newprofile.orders.confirmAndPay')}
//               </Button>
//             </Box>
//           </Box>
//         </form>
//       </Container>

//       {/* اسنکبار برای اطلاع‌رسانی */}
//       {renderSnackbar()}
//     </Box>
//   );
// };

// export default OrderPage;


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
  Link,
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
  Breadcrumbs,
  Snackbar,
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
  ConfirmationNumber as ConfirmationNumberIcon,
  CreditCard as CreditCardIcon,
  AirportShuttle as BusIcon,
  Person as PersonIcon,
  ArrowBack as ArrowBackIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
  Close as CloseIcon,
  Chair as ChairIcon,
  Home as HomeIcon,
  Male as MaleIcon,
  Female as FemaleIcon,
  Checklist as ChecklistIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import UserContext from './../../UserContext';
import moment from 'moment-jalaali';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BusDetailss } from '../../Api/ApiMaster';

interface Passenger {
  id: string;
  firstName: string;
  lastName: string;
  gender: string; // '2' for male, '3' for female
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
    status: number; // 0: آزاد, 2: رزرو مرد, 3: رزرو زن, 4: مسدود
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

const getStorageKey = (busData: BusData | null) => {
  if (!busData) return null;
  
  const { busCode, originCity, destinationCity } = busData;
  const date = moment(busData.moveDateTime).format('YYYY-MM-DD');
  
  return `bus_booking_${busCode}_${date}_${originCity}_${destinationCity}`.replace(/\s+/g, '_');
};

const loadSavedData = (storageKey: string | null) => {
  if (!storageKey) return null;
  
  try {
    const savedData = localStorage.getItem(storageKey);
    if (savedData) {
      return JSON.parse(savedData);
    }
  } catch (error) {
    console.error('Error loading saved data:', error);
  }
  return null;
};

const saveDataToStorage = (
  storageKey: string | null,
  passengers: Passenger[],
  selectedSeats: string[],
  busData: BusData
) => {
  if (!storageKey) return false;
  
  try {
    const saveData = {
      passengers,
      selectedSeats,
      busData: {
        busCode: busData.busCode,
        originCity: busData.originCity,
        destinationCity: busData.destinationCity,
        moveDateTime: busData.moveDateTime
      },
      saveDate: new Date().toISOString()
    };
    
    localStorage.setItem(storageKey, JSON.stringify(saveData));
    return true;
  } catch (error) {
    console.error('Error saving data:', error);
    return false;
  }
};

const clearStorageData = (storageKey: string | null) => {
  if (!storageKey) return;
  localStorage.removeItem(storageKey);
};

const SeatButton: React.FC<SeatButtonProps> = ({ seat, selectedSeats, onSelect, disabled }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  
  const isSelected = selectedSeats.includes(seat.chairNumber.toString());
  const isReserved = seat.status === 2 || seat.status === 3; // 2: مرد, 3: زن
  const isMaleReserved = seat.status === 2;
  const isFemaleReserved = seat.status === 3;
  const isBlocked = seat.status === 4 || seat.chairNumber === -1;
  const isAvailable = seat.status === 0 && seat.chairNumber > 0;
  


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
        {/* فضای خالی */}
      </Box>
    );
  }
  
  const getBackgroundColor = () => {
    if (isSelected) return theme.palette.primary.main;
    if (isMaleReserved) return theme.palette.error.light; // رنگ مخصوص مرد
    if (isFemaleReserved) return theme.palette.secondary.light; // رنگ مخصوص زن
    if (isBlocked) return theme.palette.grey[400];
    return isAvailable ? theme.palette.grey[200] : theme.palette.grey[300];
  };
  
  const getBorderColor = () => {
    if (isSelected) return theme.palette.primary.dark;
    if (isMaleReserved) return theme.palette.error.main;
    if (isFemaleReserved) return theme.palette.secondary.main;
    if (isBlocked) return theme.palette.grey[500];
    return isAvailable ? theme.palette.grey[400] : theme.palette.grey[500];
  };
  
  const getColor = () => {
    if (isSelected || isReserved) return 'white';
    return theme.palette.text.primary;
  };
  
  const getCursor = () => {
    if (isReserved || isBlocked || disabled) return 'not-allowed';
    return 'pointer';
  };
  
  const getTooltip = () => {
    if (isMaleReserved) return t('newprofile.seat.maleReserved');
    if (isFemaleReserved) return t('newprofile.seat.femaleReserved');
    if (isBlocked) return t('newprofile.seat.blocked');
    if (isSelected) return t('newprofile.seat.selected');
    if (isAvailable) return t('newprofile.seat.available');
    return t('newprofile.seat.unknown');
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
            fontWeight: isSelected ? 'bold' : 'normal',
            fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
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
      
      {isMaleReserved && !isSelected && (
        <MaleIcon
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
      
      {isFemaleReserved && !isSelected && (
        <FemaleIcon
          sx={{
            position: 'absolute',
            top: -5,
            right: -5,
            fontSize: 16,
            color: 'white',
            bgcolor: theme.palette.secondary.main,
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
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info'>('info');
  const [clearDialogOpen, setClearDialogOpen] = useState(false);


  const steps = [
    { label: t('newprofile.order.steps.selectFlight'), icon: <CheckIcon />, completed: true },
    { label: t('newprofile.order.steps.passengerDetails'), icon: <GroupsIcon />, completed: true },
    { label: t('newprofile.order.steps.confirmInfo'), icon: <ChecklistIcon />, active: true },
    { label: t('newprofile.order.steps.payment'), icon: <CreditCardIcon /> },
    { label: t('newprofile.order.steps.ticketIssuance'), icon: <ConfirmationNumberIcon /> }
  ];
  
  const passengerSchema = yup.object().shape({
    firstName: yup.string()
      .required(t('newprofile.validation.firstNameRequired'))
      .min(2, t('newprofile.validation.firstNameMinLength')),
    lastName: yup.string()
      .required(t('newprofile.validation.lastNameRequired'))
      .min(2, t('newprofile.validation.lastNameMinLength')),
    gender: yup.string().required(t('newprofile.validation.genderRequired')),
    nationalId: yup.string()
      .required(t('newprofile.validation.nationalIdRequired'))
      .matches(/^\d{10}$/, t('newprofile.validation.nationalIdInvalid')),
    mobile: yup.string()
      .required(t('newprofile.validation.mobileRequired'))
      .matches(/^09\d{9}$/, t('newprofile.validation.mobileInvalid')),
    birthDate: yup.string().required(t('newprofile.validation.birthDateRequired')),
    seatNumber: yup.string().required(t('newprofile.validation.seatNumberRequired'))
  });

  const formSchema = yup.object().shape({
    passengers: yup.array().of(passengerSchema).min(1, t('newprofile.validation.minPassengers')),
    termsAccepted: yup.boolean().oneOf([true], t('newprofile.validation.termsRequired'))
  });

  const { control, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      passengers: [],
      termsAccepted: false
    }
  });

  useEffect(() => {
    if (!userData || userData.length === 0) {
      setError(t('newprofile.orders.userNotFound'));
      setLoading(false);
      return;
    }
    
    const storedBusInfo = localStorage.getItem('selectedBusInfo');
    if (storedBusInfo) {
      try {
        const busInfo = JSON.parse(storedBusInfo);
        fetchBusDetails(busInfo);
      } catch (err) {
        setError(t('newprofile.orders.busInfoError'));
        setLoading(false);
      }
    } else {
      setError(t('newprofile.orders.noBusSelected'));
      setLoading(false);
    }
  }, [userData, t]);

  const fetchBusDetails = async (busInfo: any) => {
    if (!busInfo || !userData?.[0]) {
      setError(t('newprofile.orders.busOrUserNotFound'));
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
            // فقط صندلی‌هایی که status === 0 (آزاد) هستند را نشان می‌دهیم
            const freeSeats = data.seates
              .filter((seat: any) => seat.status === 0 && seat.chairNumber > 0)
              .map((seat: any) => seat.chairNumber.toString());
            setAvailableSeats(freeSeats);
          }
          
          // بارگذاری داده‌های ذخیره شده برای این اتوبوس
          const storageKey = getStorageKey(data);
          if (storageKey) {
            const savedData = loadSavedData(storageKey);
            if (savedData) {
              console.log('Loading saved data:', savedData);
              setSelectedSeats(savedData.selectedSeats || []);
              setValue('passengers', savedData.passengers || []);
              setValue('termsAccepted', false);
              
              // نمایش پیام فقط اگر داده‌ای بارگذاری شده باشد
              if (savedData.selectedSeats?.length > 0 || savedData.passengers?.length > 0) {
                setSnackbarMessage(t('newprofile.orders.savedDataLoaded'));
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
              }
            }
          }
          
          setLoading(false);
        },
        {},
        null
      );
    } catch (error) {
      console.error('Error fetching bus details:', error);
      setError(t('newprofile.orders.busDetailsError'));
      setLoading(false);
      setBusLoading(false);
    }
  };

  const getTripDetails = () => {
    if (!busData && !userData?.[0]) return null;
    
    const data = busData;
    const user = userData[0];
    
    const price = data?.price;
    const passengerCount = selectedSeats.length || watch('passengers')?.length || 1;
    
    let moveDate = data?.dateMove ;
    let moveTime = data?.timeMove;
    
    console.log('data?.companyName 5 :', data);

    return {
      company: data?.companyName || data?.company || '',
      carType: data?.carType,
      from: data?.originCity || user?.StartPlaceName || user?.StartPlace || '',
      to: data?.destinationCity || user?.EndPlaceName || user?.EndPlace || '',
      departureTime: moveTime,
      date: moveDate,
      originTerminal: data?.originTerminal || '',
      destinationTerminal: data?.destinationTerminal || '',
      price: price,
      totalPrice: price ? price * passengerCount : 0,
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
      const newPassengers = [];
      
      for (let i = 0; i < selectedSeats.length; i++) {
        const seat = selectedSeats[i];
        const existingPassenger = passengers[i] || {};
        
        newPassengers.push({
          id: existingPassenger.id || `passenger-${Date.now()}-${i}`,
          firstName: existingPassenger.firstName || '',
          lastName: existingPassenger.lastName || '',
          gender: existingPassenger.gender || '2', // پیش‌فرض مرد
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

  const handleSeatSelect = (seatNumber: string) => {
    setSelectedSeats(prev => {
      if (prev.includes(seatNumber)) {
        return prev.filter(seat => seat !== seatNumber);
      } else {
        if (availableSeats.includes(seatNumber)) {
          return [...prev, seatNumber];
        } else {
          setError(t('newprofile.orders.seatNotAvailable'));
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

  const onSubmit = async (formData: any) => {
    if (!busData || !tripDetails || !userData?.[0]) {
      setError(t('newprofile.orders.incompleteInfo'));
      return;
    }

    try {
      setSubmitting(true);
      setError('');

      // تبدیل جنسیت از string به number برای API
      const formattedPassengers = formData.passengers.map((passenger: Passenger) => ({
        ...passenger,
        gender: parseInt(passenger.gender) // تبدیل به عدد برای API
      }));

      // ذخیره اطلاعات قبل از ارسال به صفحه تأیید
      const storageKey = getStorageKey(busData);
      if (storageKey) {
        const saveSuccess = saveDataToStorage(
          storageKey, 
          formattedPassengers, 
          selectedSeats, 
          busData
        );
        
        if (saveSuccess) {
          console.log('Data saved successfully before confirmation');
        }
      }

      navigate('/orders-confirm', { 
        state: {
          busData: busData,
          tripDetails: tripDetails,
          passengers: formattedPassengers,
          selectedSeats: selectedSeats,
          totalPrice: tripDetails.totalPrice,
          formData: formData
        }
      });
      
    } catch (error: any) {
      console.error('Error submitting booking:', error);
      setError(error.message || t('newprofile.orders.reserveError'));
    } finally {
      setSubmitting(false);
    }
  };

  const LoadingSkeletons = () => (
    <Stack spacing={2} sx={{ px: isMobile ? 1 : 4, py: 4 }}>
      <Skeleton variant="rectangular" width="100%" height={200} sx={{ borderRadius: 2 }} />
      <Skeleton variant="rectangular" width="100%" height={150} sx={{ borderRadius: 2 }} />
      <Skeleton variant="rectangular" width="100%" height={100} sx={{ borderRadius: 2 }} />
    </Stack>
  );

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const renderSnackbar = () => (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={4000}
      onClose={handleSnackbarClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert 
        onClose={handleSnackbarClose} 
        severity={snackbarSeverity}
        sx={{ width: '100%', fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );

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

  // const renderSeatMap = () => {
  //   const seats = busData?.seates || [];
    
  //   if (seats.length === 0) {
  //     return (
  //       <Alert severity="warning" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
  //         {t('newprofile.orders.noSeatInfo')}
  //       </Alert>
  //     );
  //   }

  //   const uniqueColumns = [...new Set(seats.filter(s => s.chairNumber > 0).map(seat => seat.column))].sort((a, b) => a - b);
  //   const maxRow = Math.max(...seats.map(seat => seat.row));
    
  //   const seatsByRow: {[key: number]: typeof seats} = {};
  //   seats.forEach(seat => {
  //     if (!seatsByRow[seat.row]) {
  //       seatsByRow[seat.row] = [];
  //     }
  //     seatsByRow[seat.row].push(seat);
  //   });

  //   return (
  //     <Box sx={{ 
  //       display: 'flex', 
  //       flexDirection: 'column', 
  //       alignItems: 'center',
  //       gap: 2,
  //       mb: 3,
  //       p: 3,
  //       bgcolor: 'grey.50',
  //       borderRadius: 2,
  //       border: 1,
  //       borderColor: 'divider',
  //       direction:'rtl'
  //     }}>
  //       <Box sx={{ 
  //         width: '100%', 
  //         textAlign: 'center', 
  //         mb: 2,
  //         p: 1,
  //         bgcolor: 'grey.200',
  //         borderRadius: 1
  //       }}>
  //         <Typography variant="caption" color="text.secondary" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
  //           {t('newprofile.orders.frontOfBus')}
  //         </Typography>
  //       </Box>
        
  //       {Array.from({ length: maxRow }, (_, index) => {
  //         const rowNumber = index + 1;
  //         const rowSeats = seatsByRow[rowNumber] || [];
          
  //         const leftSeats = rowSeats.filter(seat => seat.column === 1 || seat.column === 2)
  //           .sort((a, b) => a.column - b.column);
  //         const rightSeats = rowSeats.filter(seat => seat.column === 4 || seat.column === 5)
  //           .sort((a, b) => a.column - b.column);
          
  //         const hasOnlyLeftSeats = leftSeats.length > 0 && rightSeats.length === 0;
          
  //         return (
  //           <Box 
  //             key={`row-${rowNumber}`}
  //             sx={{ 
  //               display: 'flex', 
  //               gap: hasOnlyLeftSeats ? 1 : 3,
  //               alignItems: 'center',
  //               width: '100%',
  //               justifyContent: 'center'
  //             }}
  //           >
  //             <Box sx={{ display: 'flex', gap: 1 }}>
  //               {leftSeats.map(seat => (
  //                 <SeatButton
  //                   key={`seat-${seat.chairNumber}`}
  //                   seat={seat}
  //                   selectedSeats={selectedSeats}
  //                   onSelect={handleSeatSelect}
  //                   disabled={!availableSeats.includes(seat.chairNumber.toString())}
  //                 />
  //               ))}
  //             </Box>
              
  //             {!hasOnlyLeftSeats && rightSeats.length > 0 && (
  //               <Box sx={{ 
  //                 width: 40, 
  //                 height: 40,
  //                 display: 'flex',
  //                 alignItems: 'center',
  //                 justifyContent: 'center',
  //                 position: 'relative'
  //               }}>
  //                 <Divider orientation="vertical" sx={{ height: '100%' }} />
  //                 {rowNumber === 1 && (
  //                   <Typography 
  //                     variant="caption" 
  //                     color="text.secondary"
  //                     sx={{ 
  //                       position: 'absolute',
  //                       whiteSpace: 'nowrap',
  //                       fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  //                     }}
  //                   >
  //                     {t('newprofile.orders.aisle')}
  //                   </Typography>
  //                 )}
  //               </Box>
  //             )}
              
  //             {rightSeats.length > 0 && (
  //               <Box sx={{ display: 'flex', gap: 1 }}>
  //                 {rightSeats.map(seat => (
  //                   <SeatButton
  //                     key={`seat-${seat.chairNumber}`}
  //                     seat={seat}
  //                     selectedSeats={selectedSeats}
  //                     onSelect={handleSeatSelect}
  //                     disabled={!availableSeats.includes(seat.chairNumber.toString())}
  //                   />
  //                 ))}
  //               </Box>
  //             )}
  //           </Box>
  //         );
  //       })}
  //     </Box>
  //   );
  // };
  const renderSeatMap = () => {
    const seats = busData?.seates || [];
    
    if (seats.length === 0) {
      return (
        <Alert severity="warning">
          {t('newprofile.orders.noSeatInfo')}
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
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        mb: 3,
        p: 3,
        bgcolor: 'grey.50',
        borderRadius: 2,
        border: 1,
        borderColor: 'divider',
        minHeight: 500,
        width: '100%',
        position: 'relative',direction:'ltr'
      }}>
        {/* Front of Bus Label - Now on the left side after rotation */}
        <Box sx={{ 
          position: 'absolute',
          right: 8,
          top: '50%',
          transform: 'translateY(-50%) rotate(-90deg)',
          p: 1,
          bgcolor: 'grey.200',
          borderRadius: 1,
          zIndex: 1,
          whiteSpace: 'nowrap'
        }}>
          <Typography variant="caption" color="text.secondary">
            {t('newprofile.orders.frontOfBus')}
          </Typography>
        </Box>
        
        {/* Aisle Label - Now at the top after rotation */}
        <Box sx={{ 
          position: 'absolute',
          top: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1
        }}>
          <Typography variant="caption" color="text.secondary">
            {/* {t('newprofile.orders.aisle')} */}
          </Typography>
        </Box>
        
        {/* Seat Rows - Now displayed as columns */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row-reverse', // Reverse for RTL
          gap: 2,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1
        }}>
          {Array.from({ length: maxRow }, (_, index) => {
            const rowNumber = index + 1;
            const rowSeats = seatsByRow[rowNumber] || [];
            
            // For rotated view:
            // leftSeats (columns 1,2) become bottom seats
            // rightSeats (columns 4,5) become top seats
            const bottomSeats = rowSeats.filter(seat => seat.column === 1 || seat.column === 2)
              .sort((a, b) => a.column - b.column);
            const topSeats = rowSeats.filter(seat => seat.column === 4 || seat.column === 5)
              .sort((a, b) => a.column - b.column);
            
            const hasOnlyBottomSeats = bottomSeats.length > 0 && topSeats.length === 0;
            
            return (
              <Box 
                key={`row-${rowNumber}`}
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: hasOnlyBottomSeats ? 1 : 3,
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 60
                }}
              >
                {/* Top seats (previously right seats) */}
                {topSeats.length > 0 && (
                  <Box sx={{ display: 'flex', flexDirection: 'column-reverse', gap: 1 }}>
                    {topSeats.map(seat => (
                      <SeatButton
                        key={`seat-${seat.chairNumber}`}
                        seat={seat}
                        selectedSeats={selectedSeats}
                        onSelect={handleSeatSelect}
                        disabled={!availableSeats.includes(seat.chairNumber.toString())}
                        sx={{ 
                          transform: 'rotate(-90deg)', // Keep seat buttons readable
                          width: 40,
                          height: 40
                        }}
                      />
                    ))}
                  </Box>
                )}
                
                {/* Aisle Divider - Now horizontal */}
                {!hasOnlyBottomSeats && topSeats.length > 0 && (
                  <Box sx={{ 
                    width: '100%', 
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <Divider orientation="horizontal" sx={{ width: '100%' }} />
                  </Box>
                )}
                
                {/* Bottom seats (previously left seats) */}
                <Box sx={{ display: 'flex', flexDirection: 'column-reverse', gap: 1 }}>
                  {bottomSeats.map(seat => (
                    <SeatButton
                      key={`seat-${seat.chairNumber}`}
                      seat={seat}
                      selectedSeats={selectedSeats}
                      onSelect={handleSeatSelect}
                      disabled={!availableSeats.includes(seat.chairNumber.toString())}
                      sx={{ 
                        transform: 'rotate(-90deg)', // Keep seat buttons readable
                        width: 40,
                        height: 40
                      }}
                    />
                  ))}
                </Box>
                
                {/* Row Number Label */}
               
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  };

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
        <Alert severity="error" sx={{ mb: 3, fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
          {t('newprofile.orders.userNotFound')}
        </Alert>
        <Button
          variant="contained"
          onClick={handleBackToHome}
          sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}
        >
          {t('newprofile.common.backToHome')}
        </Button>
      </Container>
    );
  }

  if (!tripDetails || !busData) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, minHeight: '60vh' }}>
        <Alert severity="error" sx={{ mb: 3, fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
          {error || t('newprofile.orders.noBusSelected')}
        </Alert>
        <Button
          variant="contained"
          onClick={handleBackToSearch}
          sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}
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
      direction: !isPersian ? 'rtl' : 'ltr',
      fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
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
                    color={
                    // step.active ? 'primary.main' :
                     'text.secondary'}
                    sx={{ textAlign: 'center', fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}
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
          <Alert severity="error" sx={{ mb: 3, fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
            {error}
          </Alert>
        )}
        
        {success && (
          <Alert severity="success" sx={{ mb: 3, fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
            {success}
          </Alert>
        )}
        
        <Card sx={{ mb: 4, border: 1, borderColor: 'primary.light', boxShadow: 2 }}>
          <CardContent sx={{ p: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <BusIcon color="primary" sx={{ ml: 1 }} />
                  <Typography variant="h5" fontWeight="bold" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                    {t('newprofile.orders.tripInfo')}
                  </Typography>
                </Box>
                <Divider sx={{ mb: 3 }} />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                      {t('newprofile.orders.origin')}:
                    </Typography>
                    <Typography variant="body1" fontWeight="bold" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                      {tripDetails.from}
                    </Typography>
                    {tripDetails.originTerminal && (
                      <Typography variant="caption" color="text.secondary" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                        ({tripDetails.originTerminal})
                      </Typography>
                    )}
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                      {t('newprofile.orders.destination')}:
                    </Typography>
                    <Typography variant="body1" fontWeight="bold" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                      {tripDetails.to}
                    </Typography>
                    {tripDetails.destinationTerminal && (
                      <Typography variant="caption" color="text.secondary" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                        ({tripDetails.destinationTerminal})
                      </Typography>
                    )}
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                      {t('newprofile.orders.company')}:
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{tripDetails.company}</Typography>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                      {t('newprofile.orders.vehicleType')}:
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{tripDetails.carType}</Typography>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                      {t('newprofile.orders.departureDate')}:
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{tripDetails.date}</Typography>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                      {t('newprofile.orders.departureTime')}:
                    </Typography>
                    <Typography variant="body1" fontWeight="bold" color="primary" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
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
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                    <CreditCardIcon sx={{ ml: 1 }} />
                    {t('newprofile.orders.priceSummary')}
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{t('newprofile.orders.pricePerTicket')}:</Typography>
                      <Typography variant="body2" fontWeight="bold" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                        {formatPrice(tripDetails.price)} {t('newprofile.common.currency')}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{t('newprofile.orders.passengerCount')}:</Typography>
                      <Typography variant="body2" fontWeight="bold" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                        {selectedSeats.length || 0} {t('newprofile.orders.passengerUnit')}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{t('newprofile.orders.seatsLeft')}:</Typography>
                      <Typography variant="body2" fontWeight="bold" color={
                        tripDetails.seatsLeft > 5 ? 'success.main' : 
                        tripDetails.seatsLeft > 0 ? 'warning.main' : 'error.main'
                      } sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                        {tripDetails.seatsLeft} {t('newprofile.orders.seatUnit')}
                      </Typography>
                    </Box>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{t('newprofile.orders.totalAmount')}:</Typography>
                      <Typography variant="h5" color="primary" fontWeight="bold" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                  <ChairIcon sx={{ ml: 1 }} />
                  {t('newprofile.orders.selectSeat')}
                </Typography>
                
                {selectedSeats.length > 0 && (
                  <Chip 
                    label={`${selectedSeats.length} ${t('newprofile.orders.selectedSeats')}`}
                    color="primary"
                    variant="outlined"
                    sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}
                  />
                )}
              </Box>
              
              <Alert severity="info" sx={{ mb: 3, fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                {t('newprofile.orders.selectSeatDescription')}
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
                  <Typography variant="caption" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{t('newprofile.seat.available')}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 20, height: 20, bgcolor: 'primary.main', borderRadius: 1 }} />
                  <Typography variant="caption" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{t('newprofile.seat.selected')}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 20, height: 20, bgcolor: 'error.light', borderRadius: 1 }} />
                  <Typography variant="caption" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{t('newprofile.seat.maleReserved')}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 20, height: 20, bgcolor: 'secondary.light', borderRadius: 1 }} />
                  <Typography variant="caption" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{t('newprofile.seat.femaleReserved')}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 20, height: 20, bgcolor: 'grey.400', borderRadius: 1 }} />
                  <Typography variant="caption" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{t('newprofile.seat.blocked')}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {selectedSeats.length > 0 && (
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                    <GroupsIcon sx={{ ml: 1 }} />
                    {t('newprofile.orders.passengerInfo')}
                  </Typography>
                  
                  {/* <Chip 
                    label={`${selectedSeats.length} ${t('newprofile.orders.passengers')}`}
                    color="secondary"
                    variant="outlined"
                  /> */}
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
                            <Typography variant="subtitle1" fontWeight="bold" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                              {t('newprofile.orders.passengerNumber', { number: index + 1 })} - {t('newprofile.orders.seat')} {passenger.seatNumber}
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
                                    label={t('newprofile.form.firstName')}
                                    size="small"
                                    error={!!errors.passengers?.[index]?.firstName}
                                    helperText={errors.passengers?.[index]?.firstName?.message}
                                    InputProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
                                    InputLabelProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
                                    FormHelperTextProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
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
                                    label={t('newprofile.form.lastName')}
                                    size="small"
                                    error={!!errors.passengers?.[index]?.lastName}
                                    helperText={errors.passengers?.[index]?.lastName?.message}
                                    InputProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
                                    InputLabelProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
                                    FormHelperTextProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
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
                                    label={t('newprofile.form.nationalId')}
                                    size="small"
                                    error={!!errors.passengers?.[index]?.nationalId}
                                    helperText={errors.passengers?.[index]?.nationalId?.message}
                                    InputProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
                                    InputLabelProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
                                    FormHelperTextProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
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
                                    label={t('newprofile.form.mobile')}
                                    size="small"
                                    error={!!errors.passengers?.[index]?.mobile}
                                    helperText={errors.passengers?.[index]?.mobile?.message}
                                    InputProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
                                    InputLabelProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
                                    FormHelperTextProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
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
                                    label={t('newprofile.form.birthDate')}
                                    size="small"
                                    placeholder={isPersian ? "۱۳۷۰/۰۵/۱۵" : "1991/08/06"}
                                    error={!!errors.passengers?.[index]?.birthDate}
                                    helperText={errors.passengers?.[index]?.birthDate?.message}
                                    InputProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
                                    InputLabelProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
                                    FormHelperTextProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
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
                                    label={t('newprofile.form.gender')}
                                    size="small"
                                    error={!!errors.passengers?.[index]?.gender}
                                    helperText={errors.passengers?.[index]?.gender?.message}
                                    InputProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
                                    InputLabelProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
                                    FormHelperTextProps={{
                                      style: { fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
                                    }}
                                  >
                                    <MenuItem value="" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{t('newprofile.form.select')}</MenuItem>
                                    <MenuItem value="2" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{t('newprofile.form.male')}</MenuItem>
                                    <MenuItem value="3" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>{t('newprofile.form.female')}</MenuItem>
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
                      <Typography variant="body2" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                        {t('newprofile.orders.termsText')}
                        <Link href="/terms" underline="always" target="_blank" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                          {t('newprofile.orders.termsLink')}
                        </Link>
                        {' '}{t('newprofile.orders.and')}{' '}
                        <Link href="/privacy" underline="always" target="_blank" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                          {t('newprofile.orders.privacyLink')}
                        </Link>
                        {' '}{t('newprofile.orders.termsSuffix')}
                      </Typography>
                    }
                  />
                )}
              />
              {errors.termsAccepted && (
                <Typography color="error" variant="caption" display="block" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
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
              <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                {t('newprofile.orders.finalAmount')}:
              </Typography>
              <Typography variant="h4" color="primary" fontWeight="bold" sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                {formatPrice(tripDetails.totalPrice)} {t('newprofile.common.currency')}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                size="large"
                onClick={handleBackToSearch}
                startIcon={<ArrowBackIcon />}
                sx={{ fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}
              >
                {t('newprofile.common.back')}
              </Button>
              
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={selectedSeats.length === 0 || submitting}
                startIcon={submitting ? <CircularProgress size={20} /> : <CheckIcon />}
                sx={{ px: 4, minWidth: 180, fontFamily: '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}
              >
                {submitting ? t('newprofile.orders.submitting') : t('newprofile.orders.confirmAndPay')}
              </Button>
            </Box>
          </Box>
        </form>
      </Container>

      {/* اسنکبار برای اطلاع‌رسانی */}
      {renderSnackbar()}
    </Box>
  );
};

export default OrderPage;