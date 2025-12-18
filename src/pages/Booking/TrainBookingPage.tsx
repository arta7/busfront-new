import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
  Chip,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Badge,
  Avatar,
  FormControlLabel,
  Switch,
  DialogActions,
  InputAdornment,
  CardMedia
} from '@mui/material';
import {
  Train as TrainIcon,
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon,
  HelpOutline as HelpIcon,
  Phone as PhoneIcon,
  Download as DownloadIcon,
  Android as AndroidIcon,
  Apple as AppleIcon,
  Language as WebIcon,
  Luggage as LuggageIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Person as PersonIcon,
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
  Telegram as TelegramIcon,
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
  // آیکون‌های تصحیح شده:
  DirectionsBus as BusIcon,
  DirectionsCar as CarIcon,
  LocalShipping as VanIcon,
  LocalShipping as TruckIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  Flight as FlightIcon,
  EmojiEvents as AwardIcon,
  Help as QuestionMarkIcon,
  AccountBalanceWallet as WalletIcon,
  AutoAwesome as SparklesIcon,
  Groups as UsersGroupIcon,
  Favorite as HeartIcon,
  SupportAgent as HeadsetIcon,
  AccountBalance as BusinessplanIcon,
  Check as CheckIcon,
  ContentCopy as CopyIcon,
  // آیکون‌های اضافی که ممکن است نیاز باشد:
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon,
  Email as EmailIcon,
  Share as ShareIcon,
  Star as StarIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TrainBookingPage: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // States
  const [bookingType, setBookingType] = useState('one-way');
  const [bookingOption, setBookingOption] = useState('private');
  const [passengerType, setPassengerType] = useState('normal');
  const [carTransport, setCarTransport] = useState('with-car');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState({
    adults: 0,
    children: 0,
    infants: 0
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [signModalOpen, setSignModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeService, setActiveService] = useState('train');

  const cities = [
    t('newprofile.cities.tehran'),
    t('newprofile.cities.ahvaz'),
    t('newprofile.cities.shiraz'),
    t('newprofile.cities.mashhad'),
    t('newprofile.cities.bandar'),
    t('newprofile.cities.esfehan'),
    t('newprofile.cities.tabriz'),
    t('newprofile.cities.kish')
  ];

  const topOffers = [
    {
      title: t('newprofile.offers.persepolis.title'),
      description: t('newprofile.offers.persepolis.description'),
      image: '/img/pages/index/slider/Persepolis.jpg'
    },
    {
      title: t('newprofile.offers.shiraz.title'),
      description: t('newprofile.offers.shiraz.description'),
      image: '/img/pages/index/slider/Shiraz.jpg'
    },
    {
      title: t('newprofile.offers.kashan.title'),
      description: t('newprofile.offers.kashan.description'),
      image: '/img/pages/index/slider/Kashan.jpg'
    },
    {
      title: t('newprofile.offers.esfehan.title'),
      description: t('newprofile.offers.esfehan.description'),
      image: '/img/pages/index/slider/Isfahan.jpg'
    }
  ];

  const popularRoutes = [
    {
      from: t('newprofile.popularRoutes.kishTehran.from'),
      to: t('newprofile.popularRoutes.kishTehran.to'),
      price: t('newprofile.popularRoutes.kishTehran.price')
    },
    {
      from: t('newprofile.popularRoutes.mashhadTehran.from'),
      to: t('newprofile.popularRoutes.mashhadTehran.to'),
      price: t('newprofile.popularRoutes.mashhadTehran.price')
    },
    {
      from: t('newprofile.popularRoutes.ahvazTehran.from'),
      to: t('newprofile.popularRoutes.ahvazTehran.to'),
      price: t('newprofile.popularRoutes.ahvazTehran.price')
    },
    {
      from: t('newprofile.popularRoutes.shirazTehran.from'),
      to: t('newprofile.popularRoutes.shirazTehran.to'),
      price: t('newprofile.popularRoutes.shirazTehran.price')
    }
  ];

  const faqs = [
    {
      question: t('newprofile.faq.childrenTicket.question'),
      answer: t('newprofile.faq.childrenTicket.answer')
    },
    {
      question: t('newprofile.faq.howToBook.question'),
      answer: t('newprofile.faq.howToBook.answer')
    },
    {
      question: t('newprofile.faq.checkTicket.question'),
      answer: t('newprofile.faq.checkTicket.answer')
    },
    {
      question: t('newprofile.faq.changeSeat.question'),
      answer: t('newprofile.faq.changeSeat.answer')
    }
  ];

  const services = [
    {
      icon: <TrainIcon sx={{ fontSize: 40 }} />,
      title: t('newprofile.services..comfort.title'),
      description: t('newprofile.services..comfort.description')
    },
    {
      icon: <WebIcon sx={{ fontSize: 40 }} />,
      title: t('newprofile.services..accessibility.title'),
      description: t('newprofile.services..accessibility.description')
    },
    {
      icon: <LuggageIcon sx={{ fontSize: 40 }} />,
      title: t('newprofile.services..convenience.title'),
      description: t('newprofile.services..convenience.description')
    }
  ];

  const handlePassengerChange = (type: 'adults' | 'children' | 'infants', operation: 'plus' | 'minus') => {
    setPassengers(prev => ({
      ...prev,
      [type]: operation === 'plus' ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }));
  };

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

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
                    alt={t('header.title')}
                    sx={{ width: 40, height: 40 }}
                  />
                  <Typography variant="h6" fontWeight="bold">
                    {t('header.title')}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item md={8} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button color="inherit">{t('header.services')}</Button>
                <Button color="inherit">{t('header.about')}</Button>
                <Button color="inherit">{t('header.contact')}</Button>
                <Button color="inherit">{t('header.stations')}</Button>
                <Button color="inherit">{t('header.bookedTickets')}</Button>
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
                  {t('newprofile.auth..loginSignup')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );

  // Booking Form Component
  const BookingForm = () => (
    <Paper
      elevation={8}
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 3,
        overflow: 'hidden',
        mb: 4
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={activeService} 
          onChange={(e, newValue) => setActiveService(newValue)}
          centered
        >
          <Tab 
            icon={<BusIcon />} 
            label={t('serviceTabs.bus')}
            value="bus"
          />
          <Tab 
            icon={<CarIcon />} 
            label={t('serviceTabs.taxi')}
            value="taxi"
          />
          <Tab 
            icon={<VanIcon />} 
            label={t('serviceTabs.van')}
            value="van"
          />
          <Tab 
            icon={<TrainIcon />} 
            label={t('serviceTabs.train')}
            value="train"
            sx={{ 
              bgcolor: 'primary.main', 
              color: 'primary.contrastText',
              borderRadius: '50px',
              mx: 1
            }}
          />
        </Tabs>
      </Box>

      <Box sx={{ p: 4 }}>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel>{t('booking.type')}</InputLabel>
                    <Select
                      value={bookingType}
                      onChange={(e) => setBookingType(e.target.value)}
                      label={t('booking.type')}
                    >
                      <MenuItem value="one-way">{t('booking.oneWay')}</MenuItem>
                      <MenuItem value="round-trip">{t('booking.roundTrip')}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel>{t('booking.option')}</InputLabel>
                    <Select
                      value={bookingOption}
                      onChange={(e) => setBookingOption(e.target.value)}
                      label={t('booking.option')}
                    >
                      <MenuItem value="private">{t('booking.private')}</MenuItem>
                      <MenuItem value="shared">{t('booking.shared')}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel>{t('booking.passengerType')}</InputLabel>
                    <Select
                      value={passengerType}
                      onChange={(e) => setPassengerType(e.target.value)}
                      label={t('booking.passengerType')}
                    >
                      <MenuItem value="normal">{t('booking.normalPassengers')}</MenuItem>
                      <MenuItem value="brothers">{t('booking.brothers')}</MenuItem>
                      <MenuItem value="sisters">{t('booking.sisters')}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel>{t('booking.carTransport')}</InputLabel>
                    <Select
                      value={carTransport}
                      onChange={(e) => setCarTransport(e.target.value)}
                      label={t('booking.carTransport')}
                    >
                      <MenuItem value="with-car">{t('booking.withCar')}</MenuItem>
                      <MenuItem value="without-car">{t('booking.withoutCar')}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={5}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>{t('booking.from')}</InputLabel>
                    <Select
                      value={fromCity}
                      onChange={(e) => setFromCity(e.target.value)}
                      label={t('booking.from')}
                    >
                      {cities.map(city => (
                        <MenuItem key={city} value={city}>{city}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>{t('booking.to')}</InputLabel>
                    <Select
                      value={toCity}
                      onChange={(e) => setToCity(e.target.value)}
                      label={t('booking.to')}
                    >
                      {cities.map(city => (
                        <MenuItem key={city} value={city}>{city}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={3}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t('booking.departureDate')}
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t('booking.returnDate')}
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    disabled={bookingType === 'one-way'}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={2}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography variant="subtitle2" gutterBottom align="center">
                  {totalPassengers} {t('booking.passengers')}
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box>
                    <Typography variant="body2">{t('booking.adults')}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {t('booking.adultsDesc')}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton 
                      size="small" 
                      onClick={() => handlePassengerChange('adults', 'minus')}
                      disabled={passengers.adults === 0}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography>{passengers.adults}</Typography>
                    <IconButton 
                      size="small" 
                      onClick={() => handlePassengerChange('adults', 'plus')}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box>
                    <Typography variant="body2">{t('booking.children')}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {t('booking.childrenDesc')}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton 
                      size="small" 
                      onClick={() => handlePassengerChange('children', 'minus')}
                      disabled={passengers.children === 0}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography>{passengers.children}</Typography>
                    <IconButton 
                      size="small" 
                      onClick={() => handlePassengerChange('children', 'plus')}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body2">{t('booking.infants')}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {t('booking.infantsDesc')}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton 
                      size="small" 
                      onClick={() => handlePassengerChange('infants', 'minus')}
                      disabled={passengers.infants === 0}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography>{passengers.infants}</Typography>
                    <IconButton 
                      size="small" 
                      onClick={() => handlePassengerChange('infants', 'plus')}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={2}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                startIcon={<SearchIcon />}
                sx={{ height: '100%', minHeight: 56 }}
              >
                {t('common.search')}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );

  // Top Offers Slider Component
  const TopOffersSlider = () => (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <AwardIcon sx={{ fontSize: 32, color: 'secondary.main' }} />
        <Typography variant="h5" fontWeight="bold">
          {t('newprofile.offers.title')}
        </Typography>
      </Box>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          760: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }}
        style={{ paddingBottom: 40 }}
      >
        {topOffers.map((offer, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                height: 300,
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${offer.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}
            >
              <CardContent sx={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0,
                color: 'white',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))'
              }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {offer.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, minHeight: 40 }}>
                  {offer.description}
                </Typography>
                <Button 
                  variant="contained" 
                  size="small" 
                  endIcon={<FlightIcon />}
                >
                  {t('common.readMore')}
                </Button>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );

  // Popular Routes Component
  const PopularRoutes = () => (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <TrainIcon sx={{ fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h5" fontWeight="bold">
          {t('newprofile.popularRoutes.title')}
        </Typography>
      </Box>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          760: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1180: { slidesPerView: 4 }
        }}
        style={{ paddingBottom: 40 }}
      >
        {popularRoutes.map((route, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ 
              borderRadius: 3, 
              overflow: 'hidden',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}>
              <CardContent sx={{ p: 4, flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.popularRoutes.from')}
                  </Typography>
                  <FlightIcon sx={{ color: 'text.secondary', transform: 'rotate(90deg)' }} />
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.popularRoutes.to')}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {route.from}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {route.to}
                  </Typography>
                </Box>
              </CardContent>
              
              <Box sx={{ 
                bgcolor: 'primary.main', 
                color: 'primary.contrastText', 
                py: 2, 
                px: 3 
              }}>
                <Typography variant="body2" gutterBottom>
                  {t('newprofile.popularRoutes.startingFrom')}
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {route.price} {t('common.currency')}
                </Typography>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );

  // Phone Booking Section
  const PhoneBookingSection = () => (
    <Paper sx={{ p: 4, mb: 8, borderRadius: 3, bgcolor: 'grey.50' }}>
      <Grid container alignItems="center" spacing={4}>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src="/img/pages/index/bus.png"
            alt={t('phoneBooking.title')}
            sx={{ width: '100%', borderRadius: 2 }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {t('phoneBooking.title')}
            </Typography>
            <Typography variant="h5" fontWeight="bold" color="primary.main" gutterBottom>
              {t('phoneBooking.subtitle')}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 2 }}>
              <PhoneIcon color="primary" />
              <Typography variant="h6" fontWeight="bold" color="primary.main">
                {t('phoneBooking.phone')}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" size="large" color="secondary">
              {t('phoneBooking.learnMore')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );

  // App Download Section
  const AppDownloadSection = () => (
    <Box sx={{ mb: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src="/img/pages/index/app-2.png"
              alt={t('app.title')}
              sx={{ width: '100%', maxWidth: 300, borderRadius: 2 }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {t('app.title')}
            </Typography>
            <Typography variant="h5" color="primary.main" fontWeight="bold" gutterBottom>
              {t('app.subtitle')}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
              {t('app.description')}
            </Typography>

            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={6} md={6}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<AndroidIcon />}
                  sx={{ mb: 1 }}
                >
                  {t('app.android')}
                </Button>
              </Grid>
              <Grid item xs={6} md={6}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<AppleIcon />}
                  sx={{ mb: 1 }}
                >
                  {t('app.ios')}
                </Button>
              </Grid>
              <Grid item xs={6} md={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  sx={{ mb: 1 }}
                >
                  {t('app.direct')}
                </Button>
              </Grid>
              <Grid item xs={6} md={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<WebIcon />}
                  sx={{ mb: 1 }}
                >
                  {t('app.web')}
                </Button>
              </Grid>
            </Grid>

            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 3, 
              flexWrap: 'wrap', 
              justifyContent: { xs: 'center', md: 'flex-start' } 
            }}>
              <Box
                component="img"
                src="/img/pages/index/qr.png"
                alt="QR Code"
                sx={{ width: 120, height: 120, borderRadius: 1 }}
              />
              <Typography variant="body2" color="text.secondary">
                {t('app.scan')}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  // FAQ Section
  const FAQSection = () => (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <HelpIcon sx={{ fontSize: 32, color: 'primary.main' }} />
          <Typography variant="h5" fontWeight="bold">
            {t('newprofile.faq.title')}
          </Typography>
        </Box>
        <Chip label="FAQ's" variant="outlined" />
      </Box>

      <Paper sx={{ borderRadius: 3, overflow: 'hidden' }}>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ 
                  bgcolor: 'secondary.light', 
                  p: 1, 
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40
                }}>
                  <QuestionMarkIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>
                  {faq.question}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Box>
  );

  // Services Highlights
  const ServicesHighlights = () => (
    <Box sx={{ mb: 8 }}>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ 
              p: 4, 
              textAlign: 'center', 
              borderRadius: 3,
              height: '100%',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 6
              }
            }}>
              <Box sx={{ color: 'secondary.main', mb: 3 }}>
                {service.icon}
              </Box>
              <Typography variant="h6" fontWeight="bold" color="secondary.main" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {service.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  // Call to Action Section
  const CallToActionSection = () => (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 8,
        borderRadius: 3,
        mb: 8,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <LuggageIcon sx={{ fontSize: 120, opacity: 0.8 }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {t('cta.title')}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, lineHeight: 1.8 }}>
              {t('cta.description')}
            </Typography>
            <Button 
              variant="outlined" 
              color="inherit" 
              size="large"
              sx={{ 
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  bgcolor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              {t('cta.button')}
            </Button>
          </Grid>
        </Grid>
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
                    alt={t('header.title')}
                    sx={{ width: 60, height: 60 }}
                  />
                  <Typography variant="h4" fontWeight="bold">
                    {t('header.title')}
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
                  {t('footer.description')}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                <Grid item xs={6} md={4}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('footer.about')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button color="inherit" size="small">{t('header.about')}</Button>
                    <Button color="inherit" size="small">{t('header.contact')}</Button>
                  </Box>
                </Grid>
                
                <Grid item xs={6} md={4}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('footer.customerService')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button color="inherit" size="small">{t('footer.refundGuide')}</Button>
                    <Button color="inherit" size="small">{t('footer.terms')}</Button>
                  </Box>
                </Grid>
                
                <Grid item xs={6} md={4}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('footer.additionalInfo')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button color="inherit" size="small">{t('footer.corporateSales')}</Button>
                    <Button color="inherit" size="small">{t('footer.agencyCooperation')}</Button>
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
            {t('footer.copyright')} • {t('footer.designCredit')}
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
          <Typography variant="h6">{t('newprofile.auth..loginSignup')}</Typography>
          <IconButton onClick={() => setSignModalOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" gutterBottom>
            {t('newprofile.auth..enterPhone')}
          </Typography>
          
          <TextField
            fullWidth
            label={t('newprofile.auth..phoneNumber')}
            variant="outlined"
            sx={{ my: 3 }}
          />
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            <HelpIcon sx={{ fontSize: 16, mr: 0.5 }} />
            {t('newprofile.auth..acceptTerms')}
          </Typography>
          
          <Button 
            variant="contained" 
            fullWidth 
            size="large"
            sx={{ mb: 2 }}
          >
            {t('newprofile.auth..confirm')}
          </Button>
          
          <Button variant="text" fullWidth>
            {t('newprofile.auth..loginWithPassword')}
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

      <Box
        sx={{
          backgroundImage: 'url(/img/pages/index/booking/sliderf.webp)',
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
          <BookingForm />
        </Container>
      </Box>

      <Container>
        <TopOffersSlider />
        <PopularRoutes />
        <PhoneBookingSection />
        <AppDownloadSection />
        <FAQSection />
        <ServicesHighlights />
        <CallToActionSection />
      </Container>

      <Footer />
      <AuthModal />
    </Box>
  );
};

export default TrainBookingPage;