import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
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
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
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
  Home as HomeIcon,
  Search as SearchIcon,
  SupportAgent as SupportIcon,
  Warning as WarningIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [signModalOpen, setSignModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Header Component
  const Header = () => (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={6} md={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {isMobile && (
                  <IconButton onClick={() => setMenuOpen(true)}>
                    <MenuIcon />
                  </IconButton>
                )}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    component="img"
                    src="/img/logo-m.png"
                    alt={t('newprofile.header.title')}
                    sx={{ width: 40, height: 40 }}
                  />
                  <Typography variant="h6" fontWeight="bold">
                    {t('newprofile.header.title')}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item md={8} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button color="inherit">{t('newprofile.header.services')}</Button>
                <Button color="inherit">{t('newprofile.header.about')}</Button>
                <Button color="inherit">{t('newprofile.header.contact')}</Button>
                <Button color="inherit">{t('newprofile.header.stations')}</Button>
                <Button color="inherit">{t('newprofile.header.bookedTickets')}</Button>
              </Box>
            </Grid>

            <Grid item xs={6} md={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                <IconButton onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <LightIcon /> : <DarkIcon />}
                </IconButton>
                <Button
                  variant="outlined"
                  startIcon={<PersonIcon />}
                  onClick={() => setSignModalOpen(true)}
                >
                  {t('newprofile.auth.loginSignup')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );

  // 404 Error Section
  const ErrorSection = () => (
    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default'
      }}
    >
      {/* Background SVG */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.1
        }}
      >
        <svg 
          viewBox="0 0 900 600" 
          width="100%" 
          height="100%" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0 207L129 207L129 198L257 198L257 177L386 177L386 214L514 214L514 201L643 201L643 192L771 192L771 208L900 208L900 200L900 0L900 0L771 0L771 0L643 0L643 0L514 0L514 0L386 0L386 0L257 0L257 0L129 0L129 0L0 0Z" 
            fill={theme.palette.grey[200]}
          />
          <path 
            d="M0 97L129 97L129 117L257 117L257 109L386 109L386 130L514 130L514 118L643 118L643 118L771 118L771 77L900 77L900 133L900 0L900 0L771 0L771 0L643 0L643 0L514 0L514 0L386 0L386 0L257 0L257 0L129 0L129 0L0 0Z" 
            fill={theme.palette.grey[100]}
          />
        </svg>
      </Box>

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', py: 8 }}>
          {/* Error Code */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: 2,
              mb: 3
            }}
          >
            <Typography 
              variant="h4" 
              fontWeight="bold" 
              color="warning.main"
            >
              {t('newprofile.error404.errorCode')}
            </Typography>
            <WarningIcon sx={{ fontSize: 48, color: 'warning.main' }} />
          </Box>

          {/* Main Message */}
          <Typography 
            variant="h1" 
            fontWeight="bold" 
            gutterBottom
            sx={{ 
              fontSize: { xs: '3rem', md: '4rem' },
              color: 'text.primary'
            }}
          >
            {t('newprofile.error404.mainMessage')}
          </Typography>

          {/* Description */}
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ 
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.8
            }}
          >
            {t('newprofile.error404.description')}
          </Typography>

          {/* Spacer */}
          <Box sx={{ py: 2 }} />

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<HomeIcon />}
              onClick={() => navigate('/')}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2
              }}
            >
              {t('newprofile.error404.goHome')}
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<SupportIcon />}
              onClick={() => navigate('/contact')}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2
              }}
            >
              {t('newprofile.error404.contactSupport')}
            </Button>
          </Box>

          {/* Suggestions */}
          <Box sx={{ mt: 6, maxWidth: '500px', mx: 'auto' }}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: 'background.paper'
              }}
            >
              <Typography 
                variant="h6" 
                fontWeight="bold" 
                gutterBottom
                color="primary"
              >
                {t('newprofile.error404.suggestions.title')}
              </Typography>
              
              <List>
                {t('newprofile.error404.suggestions.items', { returnObjects: true }).map((item: string, index: number) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CheckIcon color="success" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={item}
                      primaryTypographyProps={{ variant: 'body1' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );

  // Footer Component
  const Footer = () => (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider'
      }}
    >
      <Container>
        <Box sx={{ py: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box
                    component="img"
                    src="/img/logo-m.png"
                    alt={t('newprofile.header.title')}
                    sx={{ width: 60, height: 60 }}
                  />
                  <Typography variant="h4" fontWeight="bold">
                    {t('newprofile.header.title')}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon fontSize="small" />
                  <Typography>
                    {t('common.phone')}: ۰۱۱۳۳۲۴۳۰۵۶ - ۰۹۱۱۷۹۷۶۸۵۵
                  </Typography>
                </Box>
                
                <Typography>
                  {t('common.address')}: مازندران، ساری، ترمینال دولت، پرتو سیر ایرانیان
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  {t('newprofile.footer.description')}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                <Grid item xs={6} md={4}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('newprofile.footer.about')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button color="inherit" size="small">{t('newprofile.header.about')}</Button>
                    <Button color="inherit" size="small">{t('newprofile.header.contact')}</Button>
                  </Box>
                </Grid>
                
                <Grid item xs={6} md={4}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('newprofile.footer.customerService')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button color="inherit" size="small">{t('newprofile.footer.refundGuide')}</Button>
                    <Button color="inherit" size="small">{t('newprofile.footer.terms')}</Button>
                  </Box>
                </Grid>
                
                <Grid item xs={6} md={4}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('newprofile.footer.additionalInfo')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button color="inherit" size="small">{t('newprofile.footer.corporateSales')}</Button>
                    <Button color="inherit" size="small">{t('newprofile.footer.agencyCooperation')}</Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ 
          borderTop: 1, 
          borderColor: 'divider', 
          py: 4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Typography variant="body2" color="text.secondary">
            {t('newprofile.footer.copyright')} • {t('newprofile.footer.designCredit')}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton size="small" color="primary">
              <TelegramIcon />
            </IconButton>
            <IconButton size="small" color="primary">
              <TwitterIcon />
            </IconButton>
            <IconButton size="small" color="primary">
              <YouTubeIcon />
            </IconButton>
            <IconButton size="small" color="primary">
              <InstagramIcon />
            </IconButton>
            <IconButton size="small" color="primary">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Footer SVG Background */}
      <Box sx={{ mt: 2 }}>
        <svg 
          viewBox="0 0 900 600" 
          width="100%" 
          height="150"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 328L75 357.8C150 387.7 300 447.3 450 438.3C600 429.3 750 351.7 825 312.8L900 274L900 601L825 601C750 601 600 601 450 601C300 601 150 601 75 601L0 601Z" 
            fill={theme.palette.grey[50]}
          />
          <path 
            d="M0 510L75 507.3C150 504.7 300 499.3 450 496.8C600 494.3 750 494.7 825 494.8L900 495L900 601L825 601C750 601 600 601 450 601C300 601 150 601 75 601L0 601Z" 
            fill={theme.palette.grey[100]}
          />
        </svg>
      </Box>
    </Box>
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
      <ErrorSection />
      <Footer />
      <AuthModal />
    </Box>
  );
};

export default NotFoundPage;