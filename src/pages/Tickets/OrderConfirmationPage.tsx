// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   useTheme,
//   useMediaQuery,
//   Divider,
//   Chip
// } from '@mui/material';
// import {
//   Check as CheckIcon,
//   Groups as GroupsIcon,
//   Description as DescriptionIcon,
//   Checklist as ChecklistIcon,
//   CreditCard as CreditCardIcon,
//   ConfirmationNumber as ConfirmationNumberIcon,
//   ExpandMore as ExpandMoreIcon,
//   Info as InfoIcon,
//   LocalOffer as LocalOfferIcon
// } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';

// const OrderConfirmationPage: React.FC = () => {
//   const { t } = useTranslation();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
//   const [discountCode, setDiscountCode] = useState('');
//   const [isDiscountApplied, setIsDiscountApplied] = useState(false);

//   const steps = [
//     { label: t('newprofile.order.steps.selectFlight'), icon: <CheckIcon />, completed: true },
//     { label: t('newprofile.order.steps.passengerDetails'), icon: <GroupsIcon />, completed: true },
//     // { label: t('newprofile.order.steps.travelServices'), icon: <DescriptionIcon />, completed: true },
//     { label: t('newprofile.order.steps.confirmInfo'), icon: <ChecklistIcon />, active: true },
//     { label: t('newprofile.order.steps.payment'), icon: <CreditCardIcon /> },
//     { label: t('newprofile.order.steps.ticketIssuance'), icon: <ConfirmationNumberIcon /> }
//   ];

//   const ticketInfo = {
//     origin: t('newprofile.confirmation.ticketInfo.origin'),
//     destination: t('newprofile.confirmation.ticketInfo.destination'),
//     airline: t('newprofile.confirmation.ticketInfo.airline'),
//     dateTime: t('newprofile.confirmation.ticketInfo.dateTime'),
//     flightNumber: t('newprofile.confirmation.ticketInfo.flightNumber'),
//     flightClass: t('newprofile.confirmation.ticketInfo.flightClass'),
//     baggageAllowance: t('newprofile.confirmation.ticketInfo.baggageAllowance')
//   };

//   const passengers = [
//     {
//       ageGroup: t('newprofile.confirmation.passengers.adult'),
//       fullName: t('newprofile.confirmation.passengers.sampleName'),
//       gender: t('newprofile.confirmation.passengers.male'),
//       nationalId: t('newprofile.confirmation.passengers.sampleNationalId'),
//       birthDate: t('newprofile.confirmation.passengers.sampleBirthDate'),
//       nationality: t('newprofile.confirmation.passengers.iranian')
//     }
//   ];

//   const contactInfo = {
//     email: t('newprofile.confirmation.contactInfo.email'),
//     phone: t('newprofile.confirmation.contactInfo.phone')
//   };

//   const handleApplyDiscount = () => {
//     if (discountCode.trim()) {
//       setIsDiscountApplied(true);
//       // Logic to apply discount would go here
//     }
//   };

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

//   return (
//     <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
//       {/* Breadcrumb Stepper */}
//       <Paper 
//         elevation={0} 
//         sx={{ 
//           borderBottom: 1, 
//           borderColor: 'divider',
//           bgcolor: 'background.paper'
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

//       {/* Main Content */}
//       <Container maxWidth="lg" sx={{ py: 4 }}>
//         {/* Ticket Information */}
//         <Card sx={{ mb: 3 }}>
//           <CardContent sx={{ p: { xs: 2, md: 4 } }}>
//             <Typography 
//               variant="h5" 
//               fontWeight="bold" 
//               sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}
//             >
//               <ConfirmationNumberIcon />
//               {t('newprofile.confirmation.ticketInfo.title')}
//             </Typography>

//             <TableContainer>
//               <Table sx={{ minWidth: 650 }} aria-label="ticket information table">
//                 <TableBody>
//                   <TableRow>
//                     <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
//                       {t('newprofile.confirmation.ticketInfo.originLabel')}
//                     </TableCell>
//                     <TableCell sx={{ border: 'none' }}>{ticketInfo.origin}</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
//                       {t('newprofile.confirmation.ticketInfo.destinationLabel')}
//                     </TableCell>
//                     <TableCell sx={{ border: 'none' }}>{ticketInfo.destination}</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
//                       {t('newprofile.confirmation.ticketInfo.airlineLabel')}
//                     </TableCell>
//                     <TableCell sx={{ border: 'none' }}>{ticketInfo.airline}</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
//                       {t('newprofile.confirmation.ticketInfo.dateTimeLabel')}
//                     </TableCell>
//                     <TableCell sx={{ border: 'none' }}>{ticketInfo.dateTime}</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
//                       {t('newprofile.confirmation.ticketInfo.flightNumberLabel')}
//                     </TableCell>
//                     <TableCell sx={{ border: 'none' }}>{ticketInfo.flightNumber}</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
//                       {t('newprofile.confirmation.ticketInfo.flightClassLabel')}
//                     </TableCell>
//                     <TableCell sx={{ border: 'none' }}>{ticketInfo.flightClass}</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
//                       {t('newprofile.confirmation.ticketInfo.baggageAllowanceLabel')}
//                     </TableCell>
//                     <TableCell sx={{ border: 'none' }}>{ticketInfo.baggageAllowance}</TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </CardContent>
//         </Card>

//         {/* Passenger Information */}
//         <Card sx={{ mb: 3 }}>
//           <CardContent sx={{ p: { xs: 2, md: 4 } }}>
//             <Typography 
//               variant="h5" 
//               fontWeight="bold" 
//               sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}
//             >
//               <GroupsIcon />
//               {t('newprofile.confirmation.passengers.title')}
//             </Typography>

//             <TableContainer>
//               <Table sx={{ minWidth: 650 }} aria-label="passengers table">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell sx={{ fontWeight: 'bold' }}>
//                       {t('newprofile.confirmation.passengers.ageGroup')}
//                     </TableCell>
//                     <TableCell sx={{ fontWeight: 'bold' }}>
//                       {t('newprofile.confirmation.passengers.fullName')}
//                     </TableCell>
//                     <TableCell sx={{ fontWeight: 'bold' }}>
//                       {t('newprofile.confirmation.passengers.gender')}
//                     </TableCell>
//                     <TableCell sx={{ fontWeight: 'bold' }}>
//                       {t('newprofile.confirmation.passengers.nationalId')}
//                     </TableCell>
//                     <TableCell sx={{ fontWeight: 'bold' }}>
//                       {t('newprofile.confirmation.passengers.birthDate')}
//                     </TableCell>
//                     <TableCell sx={{ fontWeight: 'bold' }}>
//                       {t('newprofile.confirmation.passengers.nationality')}
//                     </TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {passengers.map((passenger, index) => (
//                     <TableRow key={index}>
//                       <TableCell>
//                         <Chip 
//                           label={passenger.ageGroup} 
//                           size="small" 
//                           color="primary" 
//                           variant="outlined" 
//                         />
//                       </TableCell>
//                       <TableCell>{passenger.fullName}</TableCell>
//                       <TableCell>{passenger.gender}</TableCell>
//                       <TableCell>{passenger.nationalId}</TableCell>
//                       <TableCell>{passenger.birthDate}</TableCell>
//                       <TableCell>{passenger.nationality}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </CardContent>
//         </Card>

//         {/* Travel Services */}
//         {/* <Card sx={{ mb: 3 }}>
//           <CardContent sx={{ p: { xs: 2, md: 4 } }}>
//             <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
//               {t('newprofile.confirmation.travelServices.title')}
//             </Typography>

//             <Box 
//               sx={{ 
//                 bgcolor: 'grey.50', 
//                 border: 1, 
//                 borderColor: 'divider', 
//                 borderRadius: 1, 
//                 p: 3, 
//                 mb: 2 
//               }}
//             >
//               <Typography variant="h6" gutterBottom>
//                 {t('newprofile.confirmation.travelServices.normalRefund')}
//               </Typography>
//             </Box>

//             <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: 'warning.main' }}>
//               <InfoIcon />
//               <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
//                 {t('newprofile.confirmation.travelServices.refundWarning')}
//               </Typography>
//             </Box>
//           </CardContent>
//         </Card> */}

//         {/* Travel Notification */}
//         <Card sx={{ mb: 3 }}>
//           <CardContent sx={{ p: { xs: 2, md: 4 } }}>
//             <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
//               {t('newprofile.confirmation.notification.title')}
//             </Typography>

//             <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: 'warning.main', mb: 3 }}>
//               <InfoIcon />
//               <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
//                 {t('newprofile.confirmation.notification.description')}
//               </Typography>
//             </Box>

//             <Grid container spacing={4}>
//               <Grid item xs={12} md={6}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                   <Typography variant="body1" fontWeight="bold">
//                     {t('newprofile.confirmation.notification.email')}:
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     {contactInfo.email}
//                   </Typography>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                   <Typography variant="body1" fontWeight="bold">
//                     {t('newprofile.confirmation.notification.phone')}:
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     {contactInfo.phone}
//                   </Typography>
//                 </Box>
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>

//         {/* Discount Code */}
//         <Card>
//           <CardContent sx={{ p: { xs: 2, md: 4 } }}>
//             <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
//               {t('newprofile.confirmation.discount.title')}
//             </Typography>

//             <Accordion>
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="discount-content"
//                 id="discount-header"
//               >
//                 <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <LocalOfferIcon />
//                   {t('newprofile.confirmation.discount.clickToEnter')}
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Box sx={{ py: 2 }}>
//                   <Typography variant="body1" gutterBottom>
//                     {t('newprofile.confirmation.discount.instructions')}
//                   </Typography>
                  
//                   <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
//                     <Grid item xs={12} md={6}>
//                       <Box sx={{ display: 'flex', gap: 1 }}>
//                         <TextField
//                           fullWidth
//                           size="small"
//                           placeholder={t('newprofile.confirmation.discount.placeholder')}
//                           value={discountCode}
//                           onChange={(e) => setDiscountCode(e.target.value)}
//                           disabled={isDiscountApplied}
//                         />
//                         <Button
//                           variant="outlined"
//                           color="primary"
//                           onClick={handleApplyDiscount}
//                           disabled={isDiscountApplied || !discountCode.trim()}
//                         >
//                           {t('newprofile.confirmation.discount.apply')}
//                         </Button>
//                       </Box>
//                     </Grid>
//                   </Grid>

//                   {isDiscountApplied && (
//                     <Box sx={{ mt: 2, p: 2, bgcolor: 'success.light', borderRadius: 1 }}>
//                       <Typography variant="body2" color="success.dark">
//                         {t('newprofile.confirmation.discount.appliedSuccess')}
//                       </Typography>
//                     </Box>
//                   )}
//                 </Box>
//               </AccordionDetails>
//             </Accordion>
//           </CardContent>
//         </Card>
//       </Container>

//       {/* Sticky Bottom Action Bar */}
//       <Paper 
//         elevation={3}
//         sx={{ 
//           position: 'sticky',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           zIndex: 10,
//           borderTop: 1,
//           borderColor: 'divider',
//           bgcolor: 'background.paper'
//         }}
//       >
//         <Container maxWidth="lg">
//           <Grid container alignItems="center" sx={{ py: 2 }}>
//             {/* Payment Label */}
//             <Grid item xs={12} md={6}>
//               <Box sx={{ 
//                 display: 'flex', 
//                 justifyContent: { xs: 'center', md: 'flex-start' },
//                 py: { xs: 1, md: 0 }
//               }}>
//                 <Typography variant="h6" fontWeight="bold">
//                   {t('newprofile.confirmation.payment.payableAmount')}
//                 </Typography>
//               </Box>
//             </Grid>
            
//             {/* Price and Continue Button */}
//             <Grid item xs={12} md={6}>
//               <Box sx={{ 
//                 display: 'flex', 
//                 justifyContent: { xs: 'center', md: 'flex-end' },
//                 alignItems: 'center',
//                 flexWrap: 'wrap',
//                 gap: 2,
//                 py: { xs: 1, md: 0 }
//               }}>
//                 {/* Price */}
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <Typography variant="h5" fontWeight="bold" color="secondary.main" sx={{ mr: 0.5 }}>
//                     {t('newprofile.confirmation.payment.totalPrice')}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     {t('newprofile.common.currency')}
//                   </Typography>
//                 </Box>
                
//                 {/* Continue Button */}
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   size="large"
//                   sx={{
//                     px: 4,
//                     py: 1.5,
//                     borderRadius: 2,
//                     fontWeight: 'bold'
//                   }}
//                 >
//                   {t('newprofile.common.confirmAndContinue')}
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Paper>
//     </Box>
//   );
// };

// export default OrderConfirmationPage;


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
  Alert
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
  // Bus as BusIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import moment from 'moment-jalaali';

import UserContext from './../../UserContext';

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
    
  const { userData,setuserData } = useContext(UserContext);
  
  // If no data was passed, show error
  if (!confirmationData) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, minHeight: '60vh' }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          {t('newprofile.order.noBookingData')}
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
  
  const steps = [
    { label: t('newprofile.order.steps.selectFlight'), icon: <CheckIcon />, completed: true },
    { label: t('newprofile.order.steps.passengerDetails'), icon: <GroupsIcon />, completed: true },
    { label: t('newprofile.order.steps.confirmInfo'), icon: <ChecklistIcon />, active: true },
    { label: t('newprofile.order.steps.payment'), icon: <CreditCardIcon /> },
    { label: t('newprofile.order.steps.ticketIssuance'), icon: <ConfirmationNumberIcon /> }
  ];

  // Transform data for display
  const ticketInfo = {
    origin: confirmationData?.tripDetails?.from || t('newprofile.confirmation.ticketInfo.origin'),
    destination: confirmationData?.tripDetails?.to || t('newprofile.confirmation.ticketInfo.destination'),
    company: confirmationData?.tripDetails?.company || t('newprofile.confirmation.ticketInfo.airline'),
    dateTime: `${confirmationData?.tripDetails?.date || ''} ${confirmationData?.tripDetails?.departureTime || ''}`,
    busCode: confirmationData?.busData?.busCode || t('newprofile.confirmation.ticketInfo.flightNumber'),
    carType: confirmationData?.tripDetails?.carType || t('newprofile.confirmation.ticketInfo.flightClass'),
    description: confirmationData?.tripDetails?.description || t('newprofile.confirmation.ticketInfo.baggageAllowance'),
    originTerminal: confirmationData?.tripDetails?.originTerminal || '',
    destinationTerminal: confirmationData?.tripDetails?.destinationTerminal || '',
    seatsLeft: confirmationData?.tripDetails?.seatsLeft || 0,
    price: confirmationData?.tripDetails?.price || 0,
    totalPrice: confirmationData?.totalPrice || 0
  };

  // Helper function to determine age group
  const getAgeGroup = (birthDate: string) => {
    if (!birthDate) return t('newprofile.confirmation.passengers.adult');
    
    try {
      const today = new Date();
      let birthDateObj;
      
      if (isPersian) {
        // Parse Persian date (jYYYY/jMM/jDD)
        const [year, month, day] = birthDate.split('/').map(Number);
        if (year && month && day) {
          // Convert Persian date to Gregorian
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
          // Not yet had birthday this year
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

  // Transform passengers data
  const passengers = confirmationData?.passengers?.map((passenger, index) => ({
    index: index + 1,
    ageGroup: getAgeGroup(passenger.birthDate),
    fullName: `${passenger.firstName || ''} ${passenger.lastName || ''}`.trim(),
    gender: passenger.gender === 'male' 
      ? t('newprofile.confirmation.passengers.male') 
      : passenger.gender === 'female' 
        ? t('newprofile.confirmation.passengers.female')
        : '',
    nationalId: passenger.nationalId || '',
    birthDate: passenger.birthDate || '',
    nationality: t('newprofile.confirmation.passengers.iranian'),
    seatNumber: passenger.seatNumber || '',
    mobile: passenger.mobile || ''
  })) || [];

  const contactInfo = {
    email: '', // You might want to add email to your passenger form
    phone: passengers[0]?.mobile || t('newprofile.confirmation.contactInfo.phone')
  };

  const handleApplyDiscount = () => {
    if (discountCode.trim()) {
      setIsDiscountApplied(true);
      // Here you would typically call an API to validate and apply the discount
      setError('');
    }
  };

  const handleConfirmAndContinue = () => {
    // Navigate to payment page with all data
    navigate('/payment', { 
      state: {
        ...confirmationData,
        discountCode: isDiscountApplied ? discountCode : null,
        ticketInfo: ticketInfo,
        passengers: passengers
      }
    });
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleBackToOrder = () => {
    navigate(-1); // Go back to previous page (OrderPage)
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

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: 'background.default',
      direction: isPersian ? 'rtl' : 'ltr' 
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
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
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
              {t('newprofile.order.tripInfo')}
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
                    {t('newprofile.order.origin')}:
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
                    {t('newprofile.order.destination')}:
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
                    {t('newprofile.order.company')}:
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
                    {t('newprofile.order.departureDateTime')}:
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
                    {t('newprofile.order.vehicleType')}:
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
                    {t('newprofile.order.busCode')}:
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
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
                      {t('newprofile.confirmation.ticketInfo.flightClassLabel')}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>{ticketInfo.carType}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
                      {t('newprofile.confirmation.ticketInfo.baggageAllowanceLabel')}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>{ticketInfo.description}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
                      {t('newprofile.confirmation.ticketInfo.selectedSeats')}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>
                      <Chip 
                        label={confirmationData?.selectedSeats?.join(', ') || t('newprofile.order.noSeatSelected')} 
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
                        {t('newprofile.confirmation.passengers.ageGroup')}
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
                        <TableCell>
                          <Chip 
                            label={passenger.ageGroup} 
                            size="small" 
                            color={passenger.ageGroup === t('newprofile.confirmation.passengers.infant') ? "warning" : 
                                   passenger.ageGroup === t('newprofile.confirmation.passengers.child') ? "info" : "primary"} 
                            variant="outlined" 
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
              {t('newprofile.order.finalAmount')}:
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
              onClick={handleConfirmAndContinue}
              startIcon={<CheckIcon />}
              sx={{ px: 4, minWidth: 180 }}
            >
              {t('newprofile.common.confirmAndContinue')}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OrderConfirmationPage;