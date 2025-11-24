import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
  Grid,
  Popover,
  IconButton
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
  Remove as RemoveIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const BookingSection = () => {
  const { t } = useTranslation();
  const [serviceType, setServiceType] = useState(0);
  const [bookingType, setBookingType] = useState('1');
  const [passengerAnchor, setPassengerAnchor] = useState(null);
  const [passengers, setPassengers] = useState({
    adults: 0,
    children: 0,
    infants: 0
  });

  const services = [
    { icon: <SearchIcon />, label: t('homepage.home.services.bus') },
    { icon: <SearchIcon />, label: t('homepage.home.services.taxi') },
    { icon: <SearchIcon />, label: t('homepage.home.services.van') },
    { icon: <SearchIcon />, label: t('homepage.home.services.cargo') }
  ];

  const cities = [
    t('cities.tehran'),
    t('cities.ahvaz'),
    t('cities.shiraz'),
    t('cities.mashhad'),
    t('cities.bandar'),
    t('cities.esfehan'),
    t('cities.tabriz'),
    t('cities.kish')
  ];

  const handlePassengerClick = (event) => {
    setPassengerAnchor(event.currentTarget);
  };

  const handlePassengerClose = () => {
    setPassengerAnchor(null);
  };

  const updatePassenger = (type, operation) => {
    setPassengers(prev => ({
      ...prev,
      [type]: operation === 'increase' ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }));
  };

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  return (
    <Box 
      sx={{ 
        backgroundImage: 'url(/img/pages/index/booking/sliderf.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 8
      }}
    >
      <Container>
        <Paper 
          elevation={8}
          sx={{ 
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          {/* Service Tabs */}
          <Tabs
            value={serviceType}
            onChange={(e, newValue) => setServiceType(newValue)}
            variant="fullWidth"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            {services.map((service, index) => (
              <Tab 
                key={index}
                icon={service.icon}
                label={service.label}
                sx={{ py: 2 }}
              />
            ))}
          </Tabs>

          {/* Booking Form */}
          <Box sx={{ p: 4 }}>
            <Grid container spacing={3}>
              {/* Booking Type */}
              <Grid item xs={12}>
                <FormControl size="small">
                  <Select
                    value={bookingType}
                    onChange={(e) => setBookingType(e.target.value)}
                    sx={{ borderRadius: '50px' }}
                  >
                    <MenuItem value="1">{t('homepage.home.booking.oneWay')}</MenuItem>
                    <MenuItem value="2">{t('homepage.home.booking.roundTrip')}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* From & To */}
              <Grid item xs={12} md={6} lg={5}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>{t('homepage.home.booking.origin')}</InputLabel>
                      <Select label={t('homepage.home.booking.origin')}>
                        <MenuItem value=""><em>{t('homepage.home.booking.origin')}</em></MenuItem>
                        {cities.map((city, index) => (
                          <MenuItem key={index} value={city}>{city}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>{t('homepage.home.booking.destination')}</InputLabel>
                      <Select label={t('homepage.home.booking.destination')}>
                        <MenuItem value=""><em>{t('homepage.home.booking.destination')}</em></MenuItem>
                        {cities.map((city, index) => (
                          <MenuItem key={index} value={city}>{city}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              {/* Dates */}
              <Grid item xs={12} md={6} lg={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('homepage.home.booking.departureDate')}
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('homepage.home.booking.returnDate')}
                      type="text"
                      disabled={bookingType === '1'}
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* Passengers */}
              <Grid item xs={6} md={6} lg={2}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handlePassengerClick}
                  sx={{ 
                    justifyContent: 'space-between',
                    py: 1.5
                  }}
                >
                  <Typography>
                    {totalPassengers} {t('homepage.home.booking.passengers')}
                  </Typography>
                  <Typography>▼</Typography>
                </Button>

                <Popover
                  open={Boolean(passengerAnchor)}
                  anchorEl={passengerAnchor}
                  onClose={handlePassengerClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Box sx={{ p: 2, minWidth: 300 }}>
                    {/* Adults */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <Box>
                        <Typography variant="body1">
                          {t('homepage.home.booking.adult')}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t('homepage.home.booking.adultDesc')}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <IconButton 
                          size="small" 
                          onClick={() => updatePassenger('adults', 'decrease')}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{passengers.adults}</Typography>
                        <IconButton 
                          size="small" 
                          onClick={() => updatePassenger('adults', 'increase')}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                    </Box>

                    {/* Children */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <Box>
                        <Typography variant="body1">
                          {t('homepage.home.booking.child')}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t('homepage.home.booking.childDesc')}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <IconButton 
                          size="small" 
                          onClick={() => updatePassenger('children', 'decrease')}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{passengers.children}</Typography>
                        <IconButton 
                          size="small" 
                          onClick={() => updatePassenger('children', 'increase')}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                    </Box>

                    {/* Infants */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography variant="body1">
                          {t('homepage.home.booking.infant')}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t('homepage.home.booking.infantDesc')}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <IconButton 
                          size="small" 
                          onClick={() => updatePassenger('infants', 'decrease')}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{passengers.infants}</Typography>
                        <IconButton 
                          size="small" 
                          onClick={() => updatePassenger('infants', 'increase')}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Popover>
              </Grid>

              {/* Search Button */}
              <Grid item xs={6} md={6} lg={2}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={<SearchIcon />}
                  sx={{ py: 2 }}
                >
                  {t('homepage.home.booking.search')}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default BookingSection;