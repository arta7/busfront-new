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
  InputLabel
} from '@mui/material';
import {
  Flight as FlightIcon,
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon,
  HelpOutline as HelpIcon,
  // Award as AwardIcon,
  Phone as PhoneIcon,
  Download as DownloadIcon,
  Android as AndroidIcon,
  Apple as AppleIcon,
  Language as WebIcon,
  Luggage as LuggageIcon,
  Public as WorldIcon,
  EmojiPeople as ComfortIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const InternationalFlightsPage: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [bookingType, setBookingType] = useState('one-way');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState({
    adults: 0,
    children: 0,
    infants: 0
  });

  const cities = [
    t('flights.cities.tehran'),
    t('newprofile.flights.cities.ahvaz'),
    t('newprofile.flights.cities.shiraz'),
    t('newprofile.flights.cities.mashhad'),
    t('newprofile.flights.cities.bandar'),
    t('newprofile.flights.cities.esfehan'),
    t('newprofile.flights.cities.tabriz'),
    t('newprofile.flights.cities.kish')
  ];

  const topOffers = [
    {
      title: t('newprofile.flights.offers.persepolis.title'),
      description: t('newprofile.flights.offers.persepolis.description'),
      image: '../img/pages/index/slider/Persepolis.jpg'
    },
    {
      title: t('newprofile.flights.offers.shiraz.title'),
      description: t('newprofile.flights.offers.shiraz.description'),
      image: '../img/pages/index/slider/Shiraz.jpg'
    },
    {
      title: t('newprofile.flights.offers.kashan.title'),
      description: t('newprofile.flights.offers.kashan.description'),
      image: '../img/pages/index/slider/Kashan.jpg'
    },
    {
      title: t('newprofile.flights.offers.esfehan.title'),
      description: t('newprofile.flights.offers.esfehan.description'),
      image: '../img/pages/index/slider/Isfahan.jpg'
    }
  ];

  const popularRoutes = [
    {
      from: t('newprofile.flights.popularRoutes.kishTehran.from'),
      to: t('newprofile.flights.popularRoutes.kishTehran.to'),
      price: t('newprofile.flights.popularRoutes.kishTehran.price')
    },
    {
      from: t('newprofile.flights.popularRoutes.mashhadTehran.from'),
      to: t('newprofile.flights.popularRoutes.mashhadTehran.to'),
      price: t('newprofile.flights.popularRoutes.mashhadTehran.price')
    },
    {
      from: t('newprofile.flights.popularRoutes.ahvazTehran.from'),
      to: t('newprofile.flights.popularRoutes.ahvazTehran.to'),
      price: t('newprofile.flights.popularRoutes.ahvazTehran.price')
    },
    {
      from: t('newprofile.flights.popularRoutes.shirazTehran.from'),
      to: t('newprofile.flights.popularRoutes.shirazTehran.to'),
      price: t('newprofile.flights.popularRoutes.shirazTehran.price')
    }
  ];

  const faqs = [
    {
      question: t('newprofile.flights.faq.childrenTicket.question'),
      answer: t('newprofile.flights.faq.childrenTicket.answer')
    },
    {
      question: t('newprofile.flights.faq.howToBook.question'),
      answer: t('newprofile.flights.faq.howToBook.answer')
    },
    {
      question: t('newprofile.flights.faq.checkTicket.question'),
      answer: t('newprofile.flights.faq.checkTicket.answer')
    },
    {
      question: t('newprofile.flights.faq.changeSeat.question'),
      answer: t('newprofile.flights.faq.changeSeat.answer')
    },
    {
      question: t('newprofile.flights.faq.editTicket.question'),
      answer: t('newprofile.flights.faq.editTicket.answer')
    }
  ];

  const services = [
    {
      icon: <FlightIcon sx={{ fontSize: 40 }} />,
      title: t('newprofile.flights.services.comfort.title'),
      description: t('newprofile.flights.services.comfort.description')
    },
    {
      icon: <WorldIcon sx={{ fontSize: 40 }} />,
      title: t('newprofile.flights.services.accessibility.title'),
      description: t('newprofile.flights.services.accessibility.description')
    },
    {
      icon: <ComfortIcon sx={{ fontSize: 40 }} />,
      title: t('newprofile.flights.services.convenience.title'),
      description: t('newprofile.flights.services.convenience.description')
    }
  ];

  const handlePassengerChange = (type: 'adults' | 'children' | 'infants', operation: 'plus' | 'minus') => {
    setPassengers(prev => ({
      ...prev,
      [type]: operation === 'plus' ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }));
  };

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  const BookingForm = () => (
    <Paper
      elevation={8}
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 3,
        p: 4,
        mb: 4
      }}
    >
      {/* Service Navigation */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value="flights" sx={{ mb: -1 }}>
          <Tab 
            icon={<FlightIcon />} 
            label={t('newprofile.flights.serviceTabs.bus')}
            value="bus"
            component="a"
            href="/index.html"
            sx={{ minHeight: 80 }}
          />
          <Tab 
            icon={<FlightIcon />} 
            label={t('newprofile.flights.serviceTabs.taxi')}
            value="taxi"
            component="a"
            href="/booking-taxi.html"
            sx={{ minHeight: 80 }}
          />
          <Tab 
            icon={<FlightIcon />} 
            label={t('newprofile.flights.serviceTabs.van')}
            value="van"
            component="a"
            href="/booking-van.html"
            sx={{ minHeight: 80 }}
          />
          <Tab 
            icon={<FlightIcon />} 
            label={t('newprofile.flights.serviceTabs.cargo')}
            value="cargo"
            component="a"
            href="/booking-bar.html"
            sx={{ minHeight: 80 }}
          />
        </Tabs>
      </Box>

      <form>
        <Grid container spacing={3}>
          {/* Booking Type */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>{t('newprofile.flights.booking.type')}</InputLabel>
              <Select
                value={bookingType}
                onChange={(e) => setBookingType(e.target.value)}
                label={t('newprofile.flights.booking.type')}
              >
                <MenuItem value="one-way">{t('newprofile.flights.booking.oneWay')}</MenuItem>
                <MenuItem value="round-trip">{t('newprofile.flights.booking.roundTrip')}</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* From & To Cities */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>{t('newprofile.flights.booking.from')}</InputLabel>
              <Select
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                label={t('newprofile.flights.booking.from')}
              >
                {cities.map(city => (
                  <MenuItem key={city} value={city}>{city}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>{t('newprofile.flights.booking.to')}</InputLabel>
              <Select
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                label={t('newprofile.flights.booking.to')}
              >
                {cities.map(city => (
                  <MenuItem key={city} value={city}>{city}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Dates */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label={t('newprofile.flights.booking.departureDate')}
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label={t('newprofile.flights.booking.returnDate')}
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              disabled={bookingType === 'one-way'}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          {/* Passengers */}
          <Grid item xs={12} md={6}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                {t('newprofile.flights.booking.passengers')}: {totalPassengers}
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="body2">
                  {t('newprofile.flights.booking.adults')}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton 
                    size="small" 
                    onClick={() => handlePassengerChange('adults', 'minus')}
                    disabled={passengers.adults === 0}
                  >
                    -
                  </IconButton>
                  <Typography>{passengers.adults}</Typography>
                  <IconButton 
                    size="small" 
                    onClick={() => handlePassengerChange('adults', 'plus')}
                  >
                    +
                  </IconButton>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="body2">
                  {t('newprofile.flights.booking.children')}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton 
                    size="small" 
                    onClick={() => handlePassengerChange('children', 'minus')}
                    disabled={passengers.children === 0}
                  >
                    -
                  </IconButton>
                  <Typography>{passengers.children}</Typography>
                  <IconButton 
                    size="small" 
                    onClick={() => handlePassengerChange('children', 'plus')}
                  >
                    +
                  </IconButton>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2">
                  {t('newprofile.flights.booking.infants')}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton 
                    size="small" 
                    onClick={() => handlePassengerChange('infants', 'minus')}
                    disabled={passengers.infants === 0}
                  >
                    -
                  </IconButton>
                  <Typography>{passengers.infants}</Typography>
                  <IconButton 
                    size="small" 
                    onClick={() => handlePassengerChange('infants', 'plus')}
                  >
                    +
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Search Button */}
          <Grid item xs={12} md={6}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={<SearchIcon />}
              sx={{ height: '100%', minHeight: 56 }}
            >
              {t('newprofile.flights.booking.search')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );

  const TopOffersSlider = () => (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        {/* <AwardIcon sx={{ fontSize: 32, color: 'secondary.main' }} /> */}
        <Typography variant="h5" fontWeight="bold">
          {t('newprofile.flights.offers.title')}
        </Typography>
      </Box>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          760: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }}
      >
        {topOffers.map((offer, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                height: 300,
                backgroundImage: `url(${offer.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  p: 3,
                  color: 'white'
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {offer.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {offer.description}
                </Typography>
                <Button variant="contained" size="small">
                  {t('newprofile.flights.offers.learnMore')}
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );

  const PopularRoutes = () => (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <FlightIcon sx={{ fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h5" fontWeight="bold">
          {t('newprofile.flights.popularRoutes.title')}
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
      >
        {popularRoutes.map((route, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.flights.popularRoutes.from')}
                  </Typography>
                  <FlightIcon sx={{ color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.flights.popularRoutes.to')}
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

                <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 2 }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {t('newprofile.flights.popularRoutes.startingFrom')}
                  </Typography>
                  <Typography variant="h6" color="primary.main" fontWeight="bold">
                    {route.price} {t('common.currency')}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );

  const PhoneBookingSection = () => (
    <Paper sx={{ p: 4, mb: 8, borderRadius: 3, bgcolor: 'grey.50' }}>
      <Grid container alignItems="center" spacing={4}>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src="./img/pages/index/bus.png"
            alt={t('newprofile.flights.phoneBooking.title')}
            sx={{ width: '100%', borderRadius: 2 }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {t('newprofile.flights.phoneBooking.title')}
            </Typography>
            <Typography variant="h5" fontWeight="bold" color="primary.main" gutterBottom>
              {t('newprofile.flights.phoneBooking.subtitle')}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 2 }}>
              <PhoneIcon />
              <Typography variant="h6" fontWeight="bold">
                01133243056
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" size="large" color="secondary">
              {t('newprofile.flights.phoneBooking.learnMore')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );

  const AppDownloadSection = () => (
    <Box sx={{ mb: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src="./img/pages/index/app-2.png"
              alt={t('newprofile.flights.app.title')}
              sx={{ width: '100%', maxWidth: 300, borderRadius: 2 }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {t('newprofile.flights.app.title')}
            </Typography>
            <Typography variant="h5" color="primary.main" fontWeight="bold" gutterBottom>
              {t('newprofile.flights.app.subtitle')}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
              {t('newprofile.flights.app.description')}
            </Typography>

            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={6} md={3}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<AndroidIcon />}
                  sx={{ mb: 1 }}
                >
                  {t('newprofile.flights.app.android')}
                </Button>
              </Grid>
              <Grid item xs={6} md={3}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<AppleIcon />}
                  sx={{ mb: 1 }}
                >
                  {t('newprofile.flights.app.ios')}
                </Button>
              </Grid>
              <Grid item xs={6} md={3}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  sx={{ mb: 1 }}
                >
                  {t('newprofile.flights.app.direct')}
                </Button>
              </Grid>
              <Grid item xs={6} md={3}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<WebIcon />}
                  sx={{ mb: 1 }}
                >
                  {t('newprofile.flights.app.web')}
                </Button>
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Box
                component="img"
                src="./img/pages/index/qr.png"
                alt="QR Code"
                sx={{ width: 120, height: 120, borderRadius: 1 }}
              />
              <Typography variant="body2" color="text.secondary">
                {t('newprofile.flights.app.scan')}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  const FAQSection = () => (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <HelpIcon sx={{ fontSize: 32, color: 'primary.main' }} />
          <Typography variant="h5" fontWeight="bold">
            {t('newprofile.flights.faq.title')}
          </Typography>
        </Box>
        <Chip label="FAQ's" variant="outlined" />
      </Box>

      <Paper sx={{ borderRadius: 3, overflow: 'hidden' }}>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ bgcolor: 'secondary.light', p: 1, borderRadius: 1 }}>
                  <HelpIcon sx={{ color: 'secondary.main' }} />
                </Box>
                <Typography variant="h6">{faq.question}</Typography>
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

  const ServicesHighlights = () => (
    <Box sx={{ mb: 8 }}>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
              <Box sx={{ color: 'secondary.main', mb: 2 }}>
                {service.icon}
              </Box>
              <Typography variant="h6" fontWeight="bold" color="secondary.main" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {service.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const CallToActionSection = () => (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 8,
        borderRadius: 3,
        mb: 8
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
              {t('newprofile.flights.cta.title')}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, lineHeight: 1.8 }}>
              {t('newprofile.flights.cta.description')}
            </Typography>
            <Button variant="outlined" color="inherit" size="large">
              {t('newprofile.flights.cta.button')}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section with Booking Form */}
      <Box
        sx={{
          backgroundImage: 'url(./img/pages/index/booking/main-1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 8
        }}
      >
        <Container>
          <BookingForm />
        </Container>
      </Box>

      {/* Main Content */}
      <Container>
        <TopOffersSlider />
        <PopularRoutes />
        <PhoneBookingSection />
        <AppDownloadSection />
        <FAQSection />
        <ServicesHighlights />
        <CallToActionSection />
      </Container>
    </Box>
  );
};

export default InternationalFlightsPage;