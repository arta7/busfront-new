import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Breadcrumbs,
  Link,
  Divider
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Person as PersonIcon,
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  Phone as PhoneIcon,
  Telegram as TelegramIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Check as CheckIcon,
  People as PeopleIcon,
  Receipt as ReceiptIcon,
  Checklist as ChecklistIcon,
  CreditCard as CreditCardIcon,
  ConfirmationNumber as TicketIcon,
  ChevronRight as ChevronRightIcon,
  Info as InfoIcon,
  CheckCircle as CheckCircleIcon,
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';

const OrderRefundPage: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [signModalOpen, setSignModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [refundOption, setRefundOption] = useState('option1');
  const [termsExpanded, setTermsExpanded] = useState(false);



  // Breadcrumb Component
  const Breadcrumb = () => (
    <Paper 
      elevation={0} 
      sx={{ 
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
        py: 2
      }}
    >
      <Container>
        <Breadcrumbs 
          separator={<ChevronRightIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckIcon color="primary" />
            <Typography color="text.primary" fontWeight="bold">
              {t('newprofile.neworder.breadcrumb.flightSelection')}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PeopleIcon color="primary" />
            <Typography color="text.primary" fontWeight="bold">
              {t('newprofile.neworder.breadcrumb.passengerInfo')}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ReceiptIcon color="primary" />
            <Typography color="text.primary" fontWeight="bold">
              {t('newprofile.neworder.breadcrumb.travelServices')}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ChecklistIcon />
            <Typography color="text.secondary">
              {t('newprofile.neworder.breadcrumb.confirmation')}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CreditCardIcon />
            <Typography color="text.secondary">
              {t('newprofile.neworder.breadcrumb.payment')}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TicketIcon />
            <Typography color="text.secondary">
              {t('newprofile.neworder.breadcrumb.ticketIssuance')}
            </Typography>
          </Box>
        </Breadcrumbs>
      </Container>
    </Paper>
  );

  // Refund Options Section
  const RefundOptions = () => (
    <Container sx={{ py: 5 }}>
      <Paper 
        elevation={2} 
        sx={{ 
          p: 4,
          borderRadius: 3
        }}
      >
        <Typography 
          variant="h5" 
          fontWeight="bold" 
          gutterBottom
          sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}
        >
          <PeopleIcon color="primary" />
          {t('newprofile.neworder.refundOptions.title')}
        </Typography>

        <FormControl component="fieldset" sx={{ width: '100%' }}>
          <RadioGroup
            value={refundOption}
            onChange={(e) => setRefundOption(e.target.value)}
          >
            {/* Normal Refund Option */}
            <Paper
              elevation={1}
              sx={{
                p: 3,
                mb: 3,
                borderRadius: 2,
                border: refundOption === 'option1' ? 2 : 1,
                borderColor: refundOption === 'option1' ? 'primary.main' : 'divider',
                transition: 'all 0.3s',
                cursor: 'pointer',
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: 'primary.light',
                  '& .MuiRadio-root': {
                    color: 'primary.main'
                  }
                }
              }}
              onClick={() => setRefundOption('option1')}
            >
              <FormControlLabel
                value="option1"
                control={<Radio />}
                label={
                  <Box sx={{ width: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h6" fontWeight="bold">
                        {t('newprofile.neworder.refundOptions.normalRefund')}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {t('newprofile.neworder.refundOptions.noCost')}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      color: 'warning.main',
                      flexWrap: isMobile ? 'wrap' : 'nowrap'
                    }}>
                      <InfoIcon />
                      <Typography variant="body2">
                        {t('newprofile.neworder.refundOptions.warningMessage')}
                      </Typography>
                    </Box>
                  </Box>
                }
                sx={{ width: '100%', m: 0 }}
              />
            </Paper>

            {/* Penalty-Free Refund Option */}
            <Paper
              elevation={1}
              sx={{
                p: 3,
                mb: 3,
                borderRadius: 2,
                border: refundOption === 'option2' ? 2 : 1,
                borderColor: refundOption === 'option2' ? 'primary.main' : 'divider',
                transition: 'all 0.3s',
                cursor: 'pointer',
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: 'primary.light',
                  '& .MuiRadio-root': {
                    color: 'primary.main'
                  }
                }
              }}
              onClick={() => setRefundOption('option2')}
            >
              <FormControlLabel
                value="option2"
                control={<Radio />}
                label={
                  <Box sx={{ width: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h6" fontWeight="bold">
                        {t('newprofile.neworder.refundOptions.penaltyFreeRefund')}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ 
                          borderRight: 1, 
                          borderColor: 'divider', 
                          pr: 2 
                        }}>
                          <Typography variant="body2">
                            1 {t('newprofile.neworder.refundOptions.perPassenger')}
                          </Typography>
                        </Box>
                        <Typography variant="h6" color="secondary.main">
                          ۴۲۰,۰۰۰
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {t('newprofile.common.currency')}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      color: 'success.main',
                      flexWrap: isMobile ? 'wrap' : 'nowrap'
                    }}>
                      <CheckCircleIcon />
                      <Typography variant="body2">
                        {t('newprofile.neworder.refundOptions.successMessage')}
                      </Typography>
                    </Box>
                  </Box>
                }
                sx={{ width: '100%', m: 0 }}
              />
            </Paper>
          </RadioGroup>
        </FormControl>

        {/* Terms and Conditions Accordion */}
        <Accordion 
          expanded={termsExpanded}
          onChange={() => setTermsExpanded(!termsExpanded)}
          sx={{ mt: 3 }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">
              {t('newprofile.neworder.termsConditions.title')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* <Box component="ul" sx={{ pl: 2 }}>
              {t('newprofile.order.termsConditions.items', { returnObjects: true }).map((item: string, index: number) => (
                <Box component="li" key={index} sx={{ mb: 2 }}>
                  <Typography variant="body1">
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box> */}
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Container>
  );

  // Action Buttons Bar
  const ActionButtons = () => (
    <Paper 
      elevation={3}
      sx={{
        position: 'sticky',
        bottom: 0,
        zIndex: 1000,
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        py: 3
      }}
    >
      <Container>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Button
              variant="outlined"
              startIcon={<ChevronRightIcon sx={{ transform: 'rotate(180deg)' }} />}
              onClick={() => navigate('/orders')}
              sx={{ py: 1.5 }}
            >
              {t('newprofile.neworder.actionButtons.back')}
            </Button>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h5" color="secondary.main" fontWeight="bold">
                  {t('newprofile.neworder.actionButtons.totalPrice')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('newprofile.common.currency')}
                </Typography>
              </Box>
              
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate('/orders-confirm')}
                sx={{ 
                  px: 4,
                  py: 1.5,
                  minWidth: 200
                }}
              >
                {t('newprofile.neworder.actionButtons.confirmContinue')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );



  // Auth Modal
  const AuthModal = () => (
    <Dialog 
      open={signModalOpen} 
      onClose={() => setSignModalOpen(false)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">{t('newprofile.auth.loginSignup')}</Typography>
          <IconButton onClick={() => setSignModalOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" gutterBottom>
            {t('newprofile.auth.enterPhone')}
          </Typography>
          
          <Box sx={{ my: 3 }}>
            <Typography variant="body2" color="text.secondary">
              {t('newprofile.auth.phoneNumber')}
            </Typography>
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            {t('newprofile.auth.acceptTerms')}
          </Typography>
          
          <Button 
            variant="contained" 
            fullWidth 
            size="large"
            sx={{ mb: 2 }}
          >
            {t('newprofile.auth.confirm')}
          </Button>
          
          <Button variant="text" fullWidth>
            {t('newprofile.auth.loginWithPassword')}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: 'background.default',
      direction: 'rtl'
    }}>
      <Header />
      <Breadcrumb />
      <RefundOptions />
      <ActionButtons />
      <Footer />
      <AuthModal />
    </Box>
  );
};

export default OrderRefundPage;