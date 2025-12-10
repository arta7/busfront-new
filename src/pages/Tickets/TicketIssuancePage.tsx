import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepConnector
} from '@mui/material';
import {
  Check as CheckIcon,
  Groups as GroupsIcon,
  Description as DescriptionIcon,
  ConfirmationNumber as ConfirmationNumberIcon,
  CreditCard as CreditCardIcon,
  Download as DownloadIcon,
  Visibility as VisibilityIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const TicketIssuancePage: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const steps = [
    { label: t('newprofile.order.steps.selectFlight'), icon: <CheckIcon />, completed: true },
    { label: t('newprofile.order.steps.passengerDetails'), icon: <GroupsIcon />, completed: true },
    // { label: t('newprofile.order.steps.travelServices'), icon: <DescriptionIcon />, completed: true },
    { label: t('newprofile.order.steps.confirmInfo'), icon: <CheckIcon />, completed: true },
    { label: t('newprofile.order.steps.payment'), icon: <CreditCardIcon />, completed: true },
    { label: t('newprofile.order.steps.ticketIssuance'), icon: <ConfirmationNumberIcon />, active: true }
  ];

  const orderDetails = {
    orderNumber: t('newprofile.ticketIssuance.sampleOrderNumber')
  };

  const CustomStepConnector = () => (
    <StepConnector
      sx={{
        '& .MuiStepConnector-line': {
          borderColor: 'divider',
          borderTopWidth: 2,
          margin: '0 8px'
        }
      }}
    />
  );

  const handleDownloadTicket = () => {
    // Logic for downloading ticket
    console.log('Downloading ticket...');
  };

  const handleViewOrder = () => {
    // Logic for viewing order details
    console.log('Viewing order details...');
  };

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
          <Stepper 
            alternativeLabel 
            activeStep={5}
            connector={<CustomStepConnector />}
            sx={{ py: 2 }}
          >
            {steps.map((step, index) => (
              <Step key={step.label} completed={step.completed}>
                <StepLabel
                  StepIconComponent={() => (
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
                        fontSize: '1.2rem'
                      }}
                    >
                      {step.icon}
                    </Box>
                  )}
                >
                  <Typography 
                    variant="body2" 
                    fontWeight={step.active ? 'bold' : 'normal'}
                    color={step.active ? 'primary.main' : 'text.secondary'}
                  >
                    {step.label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Card>
          <CardContent sx={{ p: 4 }}>
            {/* Page Title */}
            <Typography 
              variant="h5" 
              fontWeight="bold" 
              sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <ConfirmationNumberIcon />
              {t('newprofile.ticketIssuance.title')}
            </Typography>

            {/* Success Message */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: 4, 
              mb: 5,
              textAlign: 'center'
            }}>
              {/* Success Icon */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  bgcolor: 'success.light',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'success.main'
                }}
              >
                <CheckIcon sx={{ fontSize: 40 }} />
              </Box>

              {/* Success Text */}
              <Box>
                <Typography 
                  variant="h5" 
                  color="success.main" 
                  fontWeight="bold"
                  gutterBottom
                >
                  {t('newprofile.ticketIssuance.successMessage')}
                </Typography>
                
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ lineHeight: 1.8 }}
                >
                  {t('newprofile.ticketIssuance.orderNumberLabel')}: 
                  <Box 
                    component="span" 
                    sx={{ 
                      fontWeight: 'bold', 
                      color: 'primary.main',
                      mr: 1
                    }}
                  >
                    {orderDetails.orderNumber}
                  </Box>
                </Typography>
              </Box>

              {/* Action Buttons */}
              <Grid container spacing={2} sx={{ maxWidth: 400, mx: 'auto' }}>
                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    startIcon={<DownloadIcon />}
                    onClick={handleDownloadTicket}
                    sx={{
                      py: 1.5,
                      borderRadius: 2
                    }}
                  >
                    <Box sx={{ whiteSpace: 'nowrap' }}>
                      {t('newprofile.ticketIssuance.downloadTicket')}
                    </Box>
                  </Button>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    fullWidth
                    startIcon={<VisibilityIcon />}
                    onClick={handleViewOrder}
                    sx={{
                      py: 1.5,
                      borderRadius: 2,
                      borderWidth: 2
                    }}
                  >
                    <Box sx={{ whiteSpace: 'nowrap' }}>
                      {t('newprofile.ticketIssuance.viewOrder')}
                    </Box>
                  </Button>
                </Grid>
              </Grid>
            </Box>

            {/* Additional Information */}
            <Box 
              sx={{ 
                textAlign: 'center',
                borderTop: 1,
                borderColor: 'divider',
                pt: 3,
                mt: 3
              }}
            >
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ lineHeight: 1.8 }}
              >
                {t('newprofile.ticketIssuance.additionalInfo')}
              </Typography>
              
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                <Button 
                  variant="text" 
                  color="primary"
                  size="small"
                >
                  {t('newprofile.ticketIssuance.contactSupport')}
                </Button>
                <Button 
                  variant="text" 
                  color="primary"
                  size="small"
                >
                  {t('newprofile.ticketIssuance.faq')}
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Next Steps Card */}
        <Card sx={{ mt: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {t('newprofile.ticketIssuance.nextSteps.title')}
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    <DownloadIcon />
                  </Box>
                  <Typography variant="body1" fontWeight="medium" gutterBottom>
                    {t('newprofile.ticketIssuance.nextSteps.step1.title')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.ticketIssuance.nextSteps.step1.description')}
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: 'secondary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'secondary.main',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    <ConfirmationNumberIcon />
                  </Box>
                  <Typography variant="body1" fontWeight="medium" gutterBottom>
                    {t('newprofile.ticketIssuance.nextSteps.step2.title')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.ticketIssuance.nextSteps.step2.description')}
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: 'success.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'success.main',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    <CheckIcon />
                  </Box>
                  <Typography variant="body1" fontWeight="medium" gutterBottom>
                    {t('newprofile.ticketIssuance.nextSteps.step3.title')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.ticketIssuance.nextSteps.step3.description')}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default TicketIssuancePage;