import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Stepper,
  Step,
  StepLabel,
  useTheme,
  useMediaQuery,
  Divider
} from '@mui/material';
import {
  Check as CheckIcon,
  Groups as GroupsIcon,
  Description as DescriptionIcon,
  Checklist as ChecklistIcon,
  CreditCard as CreditCardIcon,
  ConfirmationNumber as ConfirmationNumberIcon,
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const RefundSelectionPage: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [refundOption, setRefundOption] = useState('option1');

  const handleRefundOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRefundOption(event.target.value);
  };

  const steps = [
    { label: t('order.steps.selectFlight'), icon: <CheckIcon />, completed: true },
    { label: t('newprofile.order.steps.passengerDetails'), icon: <GroupsIcon />, completed: true },
    // { label: t('newprofile.order.steps.travelServices'), icon: <DescriptionIcon />, completed: true },
    { label: t('newprofile.order.steps.confirmInfo'), icon: <ChecklistIcon />, active: true },
    { label: t('newprofile.order.steps.payment'), icon: <CreditCardIcon /> },
    { label: t('newprofile.order.steps.ticketIssuance'), icon: <ConfirmationNumberIcon /> }
  ];

  const refundOptions = [
    {
      id: 'option1',
      title: t('newprofile.refund.normalRefund.title'),
      price: t('newprofile.refund.normalRefund.price'),
      description: t('newprofile.refund.normalRefund.description'),
      icon: 'info',
      color: 'warning'
    },
    {
      id: 'option2',
      title: t('newprofile.refund.noPenaltyRefund.title'),
      price: t('newprofile.refund.noPenaltyRefund.price'),
      description: t('newprofile.refund.noPenaltyRefund.description'),
      icon: 'check',
      color: 'success'
    }
  ];

  const conditions = [
    t('newprofile.refund.conditions.condition1'),
    t('newprofile.refund.conditions.condition2'),
    t('newprofile.refund.conditions.condition3'),
    t('newprofile.refund.conditions.condition4')
  ];

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
        <Card>
          <CardContent sx={{ p: { xs: 2, md: 4 } }}>
            {/* Page Title */}
            <Typography 
              variant="h5" 
              fontWeight="bold" 
              sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <GroupsIcon />
              {t('newprofile.refund.pageTitle')}
            </Typography>

            {/* Refund Options */}
            <FormControl component="fieldset" sx={{ width: '100%' }}>
              <RadioGroup
                aria-label="refund-options"
                name="refund-options"
                value={refundOption}
                onChange={handleRefundOptionChange}
              >
                {refundOptions.map((option) => (
                  <Card 
                    key={option.id}
                    variant="outlined"
                    sx={{ 
                      mb: 2,
                      borderColor: refundOption === option.id ? 'primary.main' : 'divider',
                      borderWidth: refundOption === option.id ? 2 : 1
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                      <FormControlLabel
                        value={option.id}
                        control={<Radio />}
                        label={
                          <Box sx={{ width: '100%', ml: 2 }}>
                            <Box sx={{ 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              flexWrap: 'wrap'
                            }}>
                              <Typography variant="h6" fontWeight="bold">
                                {option.title}
                              </Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                                  {t('newprofile.refund.passengerCount')}
                                </Typography>
                                <Typography variant="h6" color="secondary.main" sx={{ mr: 0.5 }}>
                                  {option.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {t('newprofile.common.currency')}
                                </Typography>
                              </Box>
                            </Box>
                            
                            {/* Description */}
                            <Box 
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'flex-start',
                                mt: 1,
                                color: `${option.color}.main`
                              }}
                            >
                              {option.icon === 'info' ? (
                                <Box component="span" sx={{ mr: 1, mt: 0.2 }}>
                                  ℹ️
                                </Box>
                              ) : (
                                <Box component="span" sx={{ mr: 1, mt: 0.2 }}>
                                  ✅
                                </Box>
                              )}
                              <Typography 
                                variant={isMobile ? "body2" : "body1"}
                                sx={{ lineHeight: 1.6 }}
                              >
                                {option.description}
                              </Typography>
                            </Box>
                          </Box>
                        }
                        sx={{ 
                          width: '100%', 
                          m: 0,
                          alignItems: 'flex-start'
                        }}
                      />
                    </CardContent>
                  </Card>
                ))}
              </RadioGroup>
            </FormControl>

            {/* Terms and Conditions */}
            <Accordion sx={{ mt: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="terms-content"
                id="terms-header"
              >
                <Typography variant="h6" fontWeight="bold">
                  {t('newprofile.refund.terms.title')}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box component="ul" sx={{ pl: 2, py: 2 }}>
                  {conditions.map((condition, index) => (
                    <Box 
                      component="li" 
                      key={index}
                      sx={{ 
                        mb: 2,
                        '&:last-child': { mb: 0 }
                      }}
                    >
                      <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        {condition}
                      </Typography>
                    </Box>
                  ))}
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
            {/* Back Button */}
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: { xs: 'center', md: 'flex-start' },
                py: { xs: 1, md: 0 }
              }}>
                <Button 
                  variant="outlined" 
                  color="inherit"
                  startIcon={<ChevronRightIcon />}
                  sx={{ 
                    borderColor: 'grey.400',
                    color: 'text.primary'
                  }}
                >
                  {t('newprofile.common.back')}
                </Button>
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
                    {t('newprofile.refund.totalPrice')}
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

export default RefundSelectionPage;