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
  Chip
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
  Groups as TeamsIcon,
  Person as CustomerIcon,
  AutoAwesome as InnovationIcon,
  Verified as HonestyIcon,
  Public as ResponsibilityIcon,
  Star as QualityIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AboutUsPage: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [menuOpen, setMenuOpen] = useState(false);
  const [signModalOpen, setSignModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const goalsIcons = [
    <TeamsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    <CustomerIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    <InnovationIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    <HonestyIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    <ResponsibilityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    <QualityIcon sx={{ fontSize: 40, color: 'primary.main' }} />
  ];

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
                    alt={t('newprofile.header..title')}
                    sx={{ width: 40, height: 40 }}
                  />
                  <Typography variant="h6" fontWeight="bold">
                    {t('newprofile.header..title')}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item md={8} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button color="inherit">{t('newprofile.header..services')}</Button>
                <Button color="inherit" variant="outlined">
                  {t('newprofile.header..about')}
                </Button>
                <Button color="inherit">{t('newprofile.header..contact')}</Button>
                <Button color="inherit">{t('newprofile.header..stations')}</Button>
                <Button color="inherit">{t('newprofile.header..bookedTickets')}</Button>
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

  // Hero Section
  const HeroSection = () => (
    <Box
      sx={{
        backgroundImage: 'url(/img/pages/index/booking/main-1.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 8,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
        }
      }}
    >
      <Container sx={{ position: 'relative' }}>
        <Paper
          elevation={8}
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 3,
            textAlign: 'center',
            py: 5,
            px: 4
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {t('newprofile.about.title')}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            {t('newprofile.about.subtitle')}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );

  // Top Gallery Slider
  const TopGallerySlider = () => (
    <Box sx={{ py: 5 }}>
      <Container>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 1000 }}
          speed={1000}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            720: { slidesPerView: 5 }
          }}
        >
          {t('newprofile.about.gallery.topImages', { returnObjects: true }).map((image: string, index: number) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={image}
                alt={`Gallery ${index + 1}`}
                sx={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                  borderRadius: 2,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );

  // Company Info Section
  const CompanyInfoSection = () => (
    <Box sx={{ py: 5 }}>
      <Container>
        <Paper
          elevation={2}
          sx={{
            bgcolor: 'grey.50',
            border: 1,
            borderColor: 'divider',
            borderRadius: 3,
            p: 4
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
                {t('newprofile.about.companyInfo.title')}
              </Typography>
              
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
                {t('newprofile.about.companyInfo.description1')}
              </Typography>
              
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
                {t('newprofile.about.companyInfo.description2')}
              </Typography>
              
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
                {t('newprofile.about.companyInfo.description3')}
              </Typography>

              {/* Routes Section */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
                  {t('newprofile.about.companyInfo.routesTitle')}
                </Typography>
                <Grid container spacing={2}>
                  {t('newprofile.about.companyInfo.routes', { returnObjects: true }).map((route: string, index: number) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Chip
                        icon={<LocationIcon />}
                        label={route}
                        variant="outlined"
                        color="primary"
                        sx={{ width: '100%', justifyContent: 'flex-start' }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );

  // Goals Section
  const GoalsSection = () => (
    <Box sx={{ py: 5, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          {t('newprofile.about.goals.title')}
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {t('newprofile.about.goals.items', { returnObjects: true }).map((goal: string, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  p: 3,
                  textAlign: 'center',
                  borderRadius: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {goalsIcons[index]}
                </Box>
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                  {goal}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  // Work Environment Gallery
  const WorkEnvironmentGallery = () => (
    <Box sx={{ py: 5 }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          {t('newprofile.about.workEnvironment.title')}
        </Typography>
        
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 1000 }}
          speed={1000}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            720: { slidesPerView: 5 }
          }}
          style={{ paddingBottom: 40, marginTop: 20 }}
        >
          {t('newprofile.about.gallery.workImages', { returnObjects: true }).map((image: string, index: number) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={image}
                alt={`Work Environment ${index + 1}`}
                sx={{
                  width: '100%',
                  height: 250,
                  objectFit: 'cover',
                  borderRadius: 2,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
        borderColor: 'divider',
        mt: 8
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
                    alt={t('newprofile.header..title')}
                    sx={{ width: 60, height: 60 }}
                  />
                  <Typography variant="h4" fontWeight="bold">
                    {t('newprofile.header..title')}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon fontSize="small" />
                  <Typography>
                    {t('newprofile.common.phone')}: ۰۱۱۳۳۲۴۳۰۵۶ - ۰۹۱۱۷۹۷۶۸۵۵
                  </Typography>
                </Box>
                
                <Typography>
                  {t('newprofile.common.address')}: مازندران، ساری، ترمینال دولت، پرتو سیر ایرانیان
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
                    <Button color="inherit" size="small">{t('newprofile.header..about')}</Button>
                    <Button color="inherit" size="small">{t('newprofile.header..contact')}</Button>
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
      <HeroSection />
      <TopGallerySlider />
      <CompanyInfoSection />
      <GoalsSection />
      <WorkEnvironmentGallery />
      <Footer />
      <AuthModal />
    </Box>
  );
};

export default AboutUsPage;