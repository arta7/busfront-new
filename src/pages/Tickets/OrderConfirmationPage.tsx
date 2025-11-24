import React, { useState } from 'react';
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
  Chip
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
  LocalOffer as LocalOfferIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const OrderConfirmationPage: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [discountCode, setDiscountCode] = useState('');
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  const steps = [
    { label: t('newprofile.order.steps.selectFlight'), icon: <CheckIcon />, completed: true },
    { label: t('newprofile.order.steps.passengerDetails'), icon: <GroupsIcon />, completed: true },
    { label: t('newprofile.order.steps.travelServices'), icon: <DescriptionIcon />, completed: true },
    { label: t('newprofile.order.steps.confirmInfo'), icon: <ChecklistIcon />, active: true },
    { label: t('newprofile.order.steps.payment'), icon: <CreditCardIcon /> },
    { label: t('newprofile.order.steps.ticketIssuance'), icon: <ConfirmationNumberIcon /> }
  ];

  const ticketInfo = {
    origin: t('newprofile.confirmation.ticketInfo.origin'),
    destination: t('newprofile.confirmation.ticketInfo.destination'),
    airline: t('newprofile.confirmation.ticketInfo.airline'),
    dateTime: t('newprofile.confirmation.ticketInfo.dateTime'),
    flightNumber: t('newprofile.confirmation.ticketInfo.flightNumber'),
    flightClass: t('newprofile.confirmation.ticketInfo.flightClass'),
    baggageAllowance: t('newprofile.confirmation.ticketInfo.baggageAllowance')
  };

  const passengers = [
    {
      ageGroup: t('newprofile.confirmation.passengers.adult'),
      fullName: t('newprofile.confirmation.passengers.sampleName'),
      gender: t('newprofile.confirmation.passengers.male'),
      nationalId: t('newprofile.confirmation.passengers.sampleNationalId'),
      birthDate: t('newprofile.confirmation.passengers.sampleBirthDate'),
      nationality: t('newprofile.confirmation.passengers.iranian')
    }
  ];

  const contactInfo = {
    email: t('newprofile.confirmation.contactInfo.email'),
    phone: t('newprofile.confirmation.contactInfo.phone')
  };

  const handleApplyDiscount = () => {
    if (discountCode.trim()) {
      setIsDiscountApplied(true);
      // Logic to apply discount would go here
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

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Breadcrumb Stepper */}
      <Paper 
        elevation={0} 
        sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          bgcolor: 'background.paper'
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
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
                      {t('newprofile.confirmation.ticketInfo.originLabel')}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>{ticketInfo.origin}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
                      {t('newprofile.confirmation.ticketInfo.destinationLabel')}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>{ticketInfo.destination}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
                      {t('newprofile.confirmation.ticketInfo.airlineLabel')}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>{ticketInfo.airline}</TableCell>
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
                    <TableCell sx={{ border: 'none' }}>{ticketInfo.flightNumber}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
                      {t('newprofile.confirmation.ticketInfo.flightClassLabel')}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>{ticketInfo.flightClass}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', border: 'none' }}>
                      {t('newprofile.confirmation.ticketInfo.baggageAllowanceLabel')}
                    </TableCell>
                    <TableCell sx={{ border: 'none' }}>{ticketInfo.baggageAllowance}</TableCell>
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

            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="passengers table">
                <TableHead>
                  <TableRow>
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
                    <TableCell sx={{ fontWeight: 'bold' }}>
                      {t('newprofile.confirmation.passengers.nationality')}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {passengers.map((passenger, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Chip 
                          label={passenger.ageGroup} 
                          size="small" 
                          color="primary" 
                          variant="outlined" 
                        />
                      </TableCell>
                      <TableCell>{passenger.fullName}</TableCell>
                      <TableCell>{passenger.gender}</TableCell>
                      <TableCell>{passenger.nationalId}</TableCell>
                      <TableCell>{passenger.birthDate}</TableCell>
                      <TableCell>{passenger.nationality}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        {/* Travel Services */}
        <Card sx={{ mb: 3 }}>
          <CardContent sx={{ p: { xs: 2, md: 4 } }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
              {t('newprofile.confirmation.travelServices.title')}
            </Typography>

            <Box 
              sx={{ 
                bgcolor: 'grey.50', 
                border: 1, 
                borderColor: 'divider', 
                borderRadius: 1, 
                p: 3, 
                mb: 2 
              }}
            >
              <Typography variant="h6" gutterBottom>
                {t('newprofile.confirmation.travelServices.normalRefund')}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: 'warning.main' }}>
              <InfoIcon />
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                {t('newprofile.confirmation.travelServices.refundWarning')}
              </Typography>
            </Box>
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
                    {contactInfo.email}
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
        <Card>
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
      </Container>

      {/* Sticky Bottom Action Bar */}
      <Paper 
        elevation={3}
        sx={{ 
          position: 'sticky',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          borderTop: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper'
        }}
      >
        <Container maxWidth="lg">
          <Grid container alignItems="center" sx={{ py: 2 }}>
            {/* Payment Label */}
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: { xs: 'center', md: 'flex-start' },
                py: { xs: 1, md: 0 }
              }}>
                <Typography variant="h6" fontWeight="bold">
                  {t('newprofile.confirmation.payment.payableAmount')}
                </Typography>
              </Box>
            </Grid>
            
            {/* Price and Continue Button */}
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: { xs: 'center', md: 'flex-end' },
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 2,
                py: { xs: 1, md: 0 }
              }}>
                {/* Price */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h5" fontWeight="bold" color="secondary.main" sx={{ mr: 0.5 }}>
                    {t('newprofile.confirmation.payment.totalPrice')}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {t('newprofile.common.currency')}
                  </Typography>
                </Box>
                
                {/* Continue Button */}
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 'bold'
                  }}
                >
                  {t('newprofile.common.confirmAndContinue')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Box>
  );
};

export default OrderConfirmationPage;