// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Paper,
//   Tabs,
//   Tab,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   TextField,
//   Button,
//   Typography,
//   Grid,
//   Popover,
//   IconButton
// } from '@mui/material';
// import {
//   Search as SearchIcon,
//   Add as AddIcon,
//   Remove as RemoveIcon
// } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';

// // ایمپورت کامپوننت‌های تاریخ شمسی
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';

// const BookingSection = () => {
//   const { t } = useTranslation();
//   const [serviceType, setServiceType] = useState(0);
//   const [bookingType, setBookingType] = useState('1');
//   const [passengerAnchor, setPassengerAnchor] = useState(null);
//   const [passengers, setPassengers] = useState({
//     adults: 1,
//     children: 0,
//     infants: 0
//   });
//   const [departureDate, setDepartureDate] = useState(null);
//   const [returnDate, setReturnDate] = useState(null);

//   const services = [
//     { icon: <SearchIcon />, label: t('homepage.home.services.bus') },
//     { icon: <SearchIcon />, label: t('homepage.home.services.taxi') },
//     { icon: <SearchIcon />, label: t('homepage.home.services.van') },
//     { icon: <SearchIcon />, label: t('homepage.home.services.cargo') }
//   ];

//   const cities = [
//     t('cities.tehran'),
//     t('cities.ahvaz'),
//     t('cities.shiraz'),
//     t('cities.mashhad'),
//     t('cities.bandar'),
//     t('cities.esfehan'),
//     t('cities.tabriz'),
//     t('cities.kish')
//   ];

//   const handlePassengerClick = (event) => {
//     setPassengerAnchor(event.currentTarget);
//   };

//   const handlePassengerClose = () => {
//     setPassengerAnchor(null);
//   };

//   const updatePassenger = (type, operation) => {
//     setPassengers(prev => ({
//       ...prev,
//       [type]: operation === 'increase' ? prev[type] + 1 : Math.max(0, prev[type] - 1)
//     }));
//   };

//   const totalPassengers = passengers.adults + passengers.children + passengers.infants;

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
//       <Box 
//         sx={{ 
//           backgroundImage: 'url(/img/pages/index/booking/sliderf.webp)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           py: 8
//         }}
//       >
//         <Container>
//           <Paper 
//             elevation={8}
//             sx={{ 
//               borderRadius: 2,
//               overflow: 'hidden'
//             }}
//           >
//             {/* Service Tabs */}
//             <Tabs
//               value={serviceType}
//               onChange={(e, newValue) => setServiceType(newValue)}
//               variant="fullWidth"
//               sx={{ borderBottom: 1, borderColor: 'divider' }}
//             >
//               {services.map((service, index) => (
//                 <Tab 
//                   key={index}
//                   icon={service.icon}
//                   label={service.label}
//                   sx={{ py: 2 }}
//                 />
//               ))}
//             </Tabs>

//             {/* Booking Form */}
//             <Box sx={{ p: 4 }}>
//               <Grid container spacing={3}>
//                 {/* Booking Type */}
//                 <Grid item xs={12}>
//                   {/* <FormControl size="small">
//                     <Select
//                       value={bookingType}
//                       onChange={(e) => setBookingType(e.target.value)}
//                       sx={{ borderRadius: '50px' }}
//                     >
//                       <MenuItem value="1">{t('homepage.home.booking.oneWay')}</MenuItem>
//                       <MenuItem value="2">{t('homepage.home.booking.roundTrip')}</MenuItem>
//                     </Select>
//                   </FormControl> */}
//                 </Grid>

//                 {/* From & To */}
//                 <Grid item xs={12} md={6} lg={5}>
//                   <Grid container spacing={2}>
//                     <Grid item xs={12}>
//                       <FormControl fullWidth>
//                         <InputLabel>{t('homepage.home.booking.origin')}</InputLabel>
//                         <Select label={t('homepage.home.booking.origin')}>
//                           <MenuItem value=""><em>{t('homepage.home.booking.origin')}</em></MenuItem>
//                           {cities.map((city, index) => (
//                             <MenuItem key={index} value={city}>{city}</MenuItem>
//                           ))}
//                         </Select>
//                       </FormControl>
//                     </Grid>
//                     <Grid item xs={12}>
//                       <FormControl fullWidth>
//                         <InputLabel>{t('homepage.home.booking.destination')}</InputLabel>
//                         <Select label={t('homepage.home.booking.destination')}>
//                           <MenuItem value=""><em>{t('homepage.home.booking.destination')}</em></MenuItem>
//                           {cities.map((city, index) => (
//                             <MenuItem key={index} value={city}>{city}</MenuItem>
//                           ))}
//                         </Select>
//                       </FormControl>
//                     </Grid>
//                   </Grid>
//                 </Grid>

//                 {/* Dates */}
//                 <Grid item xs={12} md={6} lg={3}>
//                   <Grid container spacing={2}>
//                     <Grid item xs={12}>
//                       <DatePicker
//                         label={t('homepage.home.booking.departureDate')}
//                         value={departureDate}
//                         onChange={(newValue) => setDepartureDate(newValue)}
//                         renderInput={(params) => <TextField {...params} fullWidth />}
//                       />
//                     </Grid>
             
//                   </Grid>
//                 </Grid>

//                 {/* Passengers */}
//                 <Grid item xs={6} md={6} lg={2}>
               

//                   <Popover
//                     open={Boolean(passengerAnchor)}
//                     anchorEl={passengerAnchor}
//                     onClose={handlePassengerClose}
//                     anchorOrigin={{
//                       vertical: 'bottom',
//                       horizontal: 'left',
//                     }}
//                   >
//                     <Box sx={{ p: 2, minWidth: 300 }}>
//                       {/* Adults */}
//                       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
//                         <Box>
//                           <Typography variant="body1">
//                             {t('homepage.home.booking.adult')}
//                           </Typography>
//                           <Typography variant="caption" color="text.secondary">
//                             {t('homepage.home.booking.adultDesc')}
//                           </Typography>
//                         </Box>
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                           <IconButton 
//                             size="small" 
//                             onClick={() => updatePassenger('adults', 'decrease')}
//                             disabled={passengers.adults <= 0}
//                           >
//                             <RemoveIcon />
//                           </IconButton>
//                           <Typography>{passengers.adults}</Typography>
//                           <IconButton 
//                             size="small" 
//                             onClick={() => updatePassenger('adults', 'increase')}
//                           >
//                             <AddIcon />
//                           </IconButton>
//                         </Box>
//                       </Box>

//                       {/* Children */}
//                       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
//                         <Box>
//                           <Typography variant="body1">
//                             {t('homepage.home.booking.child')}
//                           </Typography>
//                           <Typography variant="caption" color="text.secondary">
//                             {t('homepage.home.booking.childDesc')}
//                           </Typography>
//                         </Box>
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                           <IconButton 
//                             size="small" 
//                             onClick={() => updatePassenger('children', 'decrease')}
//                             disabled={passengers.children <= 0}
//                           >
//                             <RemoveIcon />
//                           </IconButton>
//                           <Typography>{passengers.children}</Typography>
//                           <IconButton 
//                             size="small" 
//                             onClick={() => updatePassenger('children', 'increase')}
//                           >
//                             <AddIcon />
//                           </IconButton>
//                         </Box>
//                       </Box>

//                       {/* Infants */}
//                       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                         <Box>
//                           <Typography variant="body1">
//                             {t('homepage.home.booking.infant')}
//                           </Typography>
//                           <Typography variant="caption" color="text.secondary">
//                             {t('homepage.home.booking.infantDesc')}
//                           </Typography>
//                         </Box>
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                           <IconButton 
//                             size="small" 
//                             onClick={() => updatePassenger('infants', 'decrease')}
//                             disabled={passengers.infants <= 0}
//                           >
//                             <RemoveIcon />
//                           </IconButton>
//                           <Typography>{passengers.infants}</Typography>
//                           <IconButton 
//                             size="small" 
//                             onClick={() => updatePassenger('infants', 'increase')}
//                           >
//                             <AddIcon />
//                           </IconButton>
//                         </Box>
//                       </Box>
//                     </Box>
//                   </Popover>
//                 </Grid>

//                 {/* Search Button */}
//                 <Grid item xs={6} md={6} lg={2}>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     size="large"
//                     startIcon={<SearchIcon />}
//                     sx={{ py: 2 }}
//                   >
//                     {t('homepage.home.booking.search')}
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Paper>
//         </Container>
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default BookingSection;

import React, { useState, useEffect, useContext } from 'react';
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
  IconButton,
  useMediaQuery
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
  Remove as RemoveIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// ایمپورت کامپوننت‌های تاریخ شمسی
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';

// ایمپورت context و API
import UserContext from './../../UserContext';
import { GetCities } from '../../Api/ApiMaster';
import getTheme from '../../theme';
import DropdownComponent from '../../pages/Home/DropDown';
// مسیر کامپوننت Dropdown

const BookingSection = (props) => {
  const { userData, setUserData } = useContext(UserContext);
  const [Loading, setLoading] = useState(false);
  const [CityList, setCityList] = useState([]);
  const [passengerAnchor, setPassengerAnchor] = useState(null);
  const [serviceType, setServiceType] = useState(0);
  
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = getTheme(i18n.language);

  // وضعیت پیش‌فرض برای مسافران
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });

  // فیلدهای مربوط به شهرها
  const labelField = i18n.language === 'fa' ? 'name_fa' : 'name_en';
  const codeField = 'code';

  // مقداردهی اولیه userData اگر خالی باشد
  useEffect(() => {
    if (!userData || userData.length === 0) {
      const initialUserData = [{
        radioType: '1', // پیش‌فرض اتوبوس
        CurrentDate: new Date().toISOString(),
        Token: '',
        StartPlace: '',
        StartPlaceCode: '',
        EndPlace: '',
        EndPlaceCode: '',
        DepartureDate: null,
        Passengers: passengers
      }];
      setUserData(initialUserData);
      localStorage.setItem('storageData', JSON.stringify(initialUserData));
    } else {
      // به روزرسانی تاریخ اگر تاریخ گذشته باشد
      const currentDate = new Date();
      const storedDate = userData[0]?.CurrentDate ? new Date(userData[0].CurrentDate) : null;
      
      if (!storedDate || storedDate < currentDate) {
        const updatedData = [...userData];
        updatedData[0].CurrentDate = currentDate.toISOString();
        setUserData(updatedData);
        localStorage.setItem('storageData', JSON.stringify(updatedData));
      }

      // همگام‌سازی وضعیت مسافران
      if (userData[0]?.Passengers) {
        setPassengers(userData[0].Passengers);
      }
    }
  }, []);

  // دریافت لیست شهرها
  useEffect(() => {
    setLoading(true);
    
    const fetchCities = () => {
      const headers = {
        'accept': 'text/plain',
        "Access-Control-Allow-Origin": "*",
        'Authorization': userData[0]?.Token || ''
      };

      GetCities(setCityList, CityList, props, setLoading, { headers });
    };

    if (userData[0]?.Token === "" || userData[0]?.Token == null) {
      setTimeout(fetchCities, 4000);
    } else {
      fetchCities();
    }
  }, []);

  // سرویس‌های مختلف
  const services = [
    { 
      icon: <SearchIcon />, 
      label: t('homepage.home.services.bus'),
      value: '1'
    },
    { 
      icon: <SearchIcon />, 
      label: t('homepage.home.services.taxi'),
      value: '2' 
    },
    { 
      icon: <SearchIcon />, 
      label: t('homepage.home.services.van'),
      value: '3' 
    },
    { 
      icon: <SearchIcon />, 
      label: t('homepage.home.services.cargo'),
      value: '4' 
    }
  ];

  const handleServiceTypeChange = (event, newValue) => {
    setServiceType(newValue);
    const selectedService = services[newValue];
    
    // به روزرسانی radioType در userData
    const updatedData = [...userData];
    updatedData[0].radioType = selectedService.value;
    setUserData(updatedData);
    localStorage.setItem('storageData', JSON.stringify(updatedData));
  };

  const handleOriginChange = (From) => {
    if (From.code.toString() === userData[0]?.EndPlaceCode?.toString()) {
      const myNextList = [...userData];
      const DatesStep = myNextList;
      DatesStep[0].EndPlace = '';
      DatesStep[0].EndPlaceCode = '';
      setUserData(myNextList);
      localStorage.setItem('storageData', JSON.stringify(myNextList));
    }
    
    const myNextList = [...userData];
    const DatesStep = myNextList;
    DatesStep[0].StartPlace = i18n.language === 'fa' ? From.name_fa : From.name_en;
    DatesStep[0].StartPlaceCode = From.code.toString();
    setUserData(myNextList);
    localStorage.setItem('storageData', JSON.stringify(myNextList));
  };

  const handleDestinationChange = (To) => {
    if (To.code.toString() === userData[0]?.StartPlaceCode?.toString()) {
      const myNextList = [...userData];
      const DatesStep = myNextList;
      DatesStep[0].StartPlace = '';
      DatesStep[0].StartPlaceCode = '';
      setUserData(myNextList);
      localStorage.setItem('storageData', JSON.stringify(myNextList));
    }
    
    const myNextList = [...userData];
    const DatesStep = myNextList;
    DatesStep[0].EndPlace = i18n.language === 'fa' ? To.name_fa : To.name_en;
    DatesStep[0].EndPlaceCode = To.code.toString();
    setUserData(myNextList);
    localStorage.setItem('storageData', JSON.stringify(myNextList));
  };

  const handleDepartureDateChange = (newValue) => {
    const updatedData = [...userData];
    updatedData[0].DepartureDate = newValue;
    setUserData(updatedData);
    localStorage.setItem('storageData', JSON.stringify(updatedData));
  };

  const handlePassengerClick = (event) => {
    setPassengerAnchor(event.currentTarget);
  };

  const handlePassengerClose = () => {
    setPassengerAnchor(null);
  };

  const updatePassenger = (type, operation) => {
    const newPassengers = {
      ...passengers,
      [type]: operation === 'increase' ? passengers[type] + 1 : Math.max(0, passengers[type] - 1)
    };
    
    setPassengers(newPassengers);
    
    // به روزرسانی در userData
    const updatedData = [...userData];
    updatedData[0].Passengers = newPassengers;
    setUserData(updatedData);
    localStorage.setItem('storageData', JSON.stringify(updatedData));
  };

  const handleSearch = () => {
    // بررسی اعتبار داده‌ها
    if (!userData[0]?.StartPlaceCode || !userData[0]?.EndPlaceCode || !userData[0]?.DepartureDate) {
      alert(t('homepage.home.booking.validationError'));
      return;
    }

    // هدایت به صفحه نتایج جستجو
    navigate('/search-results', { 
      state: { 
        searchData: userData[0],
        serviceType: services[serviceType].label
      } 
    });
  };

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  // تصویر پس‌زمینه بر اساس نوع سرویس انتخابی
  const getBackgroundImage = () => {
    const serviceImages = {
      '1': '/img/pages/index/booking/sliderf.webp', // اتوبوس
      '2': '/img/pages/index/booking/taxi-bg.jpg',  // تاکسی
      '3': '/img/pages/index/booking/van-bg.jpg',   // ون
      '4': '/img/pages/index/booking/cargo-bg.jpg'  // بار
    };
    
    const currentService = userData[0]?.radioType || '1';
    return `url(${serviceImages[currentService]})`;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
      <Box 
        sx={{ 
          backgroundImage: getBackgroundImage(),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          py: isMobile ? 4 : 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))',
            zIndex: 1
          }
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Paper 
            elevation={8}
            sx={{ 
              borderRadius: 2,
              overflow: 'hidden',
              backgroundColor: 'rgba(255, 255, 255, 0.95)'
            }}
          >
            {/* Service Tabs */}
            <Tabs
              value={serviceType}
              onChange={handleServiceTypeChange}
              variant="fullWidth"
              sx={{ 
                borderBottom: 1, 
                borderColor: 'divider',
                '& .MuiTab-root': {
                  py: 2,
                  fontWeight: 'bold'
                }
              }}
            >
             
              {services.map((service, index) => (
                <Tab 
                  key={index}
                  icon={service.icon}
                  label={service.label}
                />
              ))}
            </Tabs>

            {/* Booking Form */}
            <Box sx={{ p: isMobile ? 2 : 4 }}>
              <Grid container spacing={3} alignItems="center">
                {/* Origin City */}
                <Grid item xs={12} md={3}>
                  <FormControl fullWidth size={isMobile ? "small" : "medium"}>
                    {/* <InputLabel shrink={false} sx={{ 
                      color: 'black', 
                      fontFamily: theme.typography.fontFamily,
                      backgroundColor: 'white',
                      px: 1,
                      ml: -0.5
                    }}>
                      {t('homepage.home.booking.origin')}
                    </InputLabel> */}
                    <DropdownComponent
                      data={CityList}
                      labelField={labelField}
                      valueField={codeField}
                      Loading={Loading}
                      value={userData[0]?.StartPlaceCode || ''}
                      onChange={handleOriginChange}
                      placeholder={t('homepage.home.booking.origin')}
                      ShowIcon={true}
                      labelStyle={{ 
                        color: 'black', 
                        fontFamily: theme.typography.fontFamily,
                      }}
                      placeholderStyle={{ 
                        color: 'grey', 
                        fontFamily: theme.typography.fontFamily,
                      }}
                      selectedTextStyle={{ 
                        color: 'black', 
                        fontFamily: theme.typography.fontFamily,
                      }}
                    />
                  </FormControl>
                </Grid>

                {/* Destination City */}
                <Grid item xs={12} md={3}>
                  <FormControl fullWidth size={isMobile ? "small" : "medium"}>
                    {/* <InputLabel shrink={false} sx={{ 
                      color: 'black', 
                      fontFamily: theme.typography.fontFamily,
                      backgroundColor: 'white',
                      px: 1,
                      ml: -0.5
                    }}>
                      {t('homepage.home.booking.destination')}
                    </InputLabel> */}
                    <DropdownComponent
                      data={CityList}
                      labelField={labelField}
                      valueField={codeField}
                      Loading={Loading}
                      value={userData[0]?.EndPlaceCode || ''}
                      onChange={handleDestinationChange}
                      placeholder={t('homepage.home.booking.destination')}
                      ShowIcon={true}
                      labelStyle={{ 
                        color: 'black', 
                        fontFamily: theme.typography.fontFamily,
                      }}
                      placeholderStyle={{ 
                        color: 'grey', 
                        fontFamily: theme.typography.fontFamily,
                      }}
                      selectedTextStyle={{ 
                        color: 'black', 
                        fontFamily: theme.typography.fontFamily,
                      }}
                    />
                  </FormControl>
                </Grid>

                {/* Departure Date */}
                <Grid item xs={12} md={2}>
                  <DatePicker
                    label={t('homepage.home.booking.departureDate')}
                    value={userData[0]?.DepartureDate || null}
                    onChange={handleDepartureDateChange}
                    renderInput={(params) => (
                      <TextField 
                        {...params} 
                        fullWidth 
                        size={isMobile ? "small" : "medium"}
                        sx={{
                          '& .MuiInputLabel-root': {
                            fontFamily: theme.typography.fontFamily,
                          },
                          '& .MuiInputBase-input': {
                            fontFamily: theme.typography.fontFamily,
                          }
                        }}
                      />
                    )}
                  />
                </Grid>

                {/* Passengers */}
                <Grid item xs={12} md={2}>
                  {/* <Button
                    fullWidth
                    variant="outlined"
                    onClick={handlePassengerClick}
                    size={isMobile ? "small" : "medium"}
                    sx={{ 
                      py: isMobile ? 1 : 1.5,
                      height: isMobile ? '40px' : '56px',
                      borderColor: 'grey.400',
                      '&:hover': {
                        borderColor: 'grey.600',
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Typography 
                        variant="caption" 
                        color="text.secondary"
                        fontFamily={theme.typography.fontFamily}
                      >
                        {t('homepage.home.booking.passengers')}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        fontWeight="bold"
                        fontFamily={theme.typography.fontFamily}
                      >
                        {totalPassengers} {t('homepage.home.booking.person')}
                      </Typography>
                    </Box>
                  </Button> */}

                  <Popover
                    open={Boolean(passengerAnchor)}
                    anchorEl={passengerAnchor}
                    onClose={handlePassengerClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    <Box sx={{ p: 2, minWidth: 250 }}>
                      {/* Adults */}
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                        <Box>
                          <Typography 
                            variant="body1" 
                            fontWeight="medium"
                            fontFamily={theme.typography.fontFamily}
                          >
                            {t('homepage.home.booking.adult')}
                          </Typography>
                          <Typography 
                            variant="caption" 
                            color="text.secondary"
                            fontFamily={theme.typography.fontFamily}
                          >
                            {t('homepage.home.booking.adultDesc')}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <IconButton 
                            size="small" 
                            onClick={() => updatePassenger('adults', 'decrease')}
                            disabled={passengers.adults <= 1}
                          >
                            <RemoveIcon />
                          </IconButton>
                          <Typography 
                            sx={{ minWidth: '20px', textAlign: 'center' }}
                            fontFamily={theme.typography.fontFamily}
                          >
                            {passengers.adults}
                          </Typography>
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
                          <Typography 
                            variant="body1" 
                            fontWeight="medium"
                            fontFamily={theme.typography.fontFamily}
                          >
                            {t('homepage.home.booking.child')}
                          </Typography>
                          <Typography 
                            variant="caption" 
                            color="text.secondary"
                            fontFamily={theme.typography.fontFamily}
                          >
                            {t('homepage.home.booking.childDesc')}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <IconButton 
                            size="small" 
                            onClick={() => updatePassenger('children', 'decrease')}
                            disabled={passengers.children <= 0}
                          >
                            <RemoveIcon />
                          </IconButton>
                          <Typography 
                            sx={{ minWidth: '20px', textAlign: 'center' }}
                            fontFamily={theme.typography.fontFamily}
                          >
                            {passengers.children}
                          </Typography>
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
                          <Typography 
                            variant="body1" 
                            fontWeight="medium"
                            fontFamily={theme.typography.fontFamily}
                          >
                            {t('homepage.home.booking.infant')}
                          </Typography>
                          <Typography 
                            variant="caption" 
                            color="text.secondary"
                            fontFamily={theme.typography.fontFamily}
                          >
                            {t('homepage.home.booking.infantDesc')}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <IconButton 
                            size="small" 
                            onClick={() => updatePassenger('infants', 'decrease')}
                            disabled={passengers.infants <= 0}
                          >
                            <RemoveIcon />
                          </IconButton>
                          <Typography 
                            sx={{ minWidth: '20px', textAlign: 'center' }}
                            fontFamily={theme.typography.fontFamily}
                          >
                            {passengers.infants}
                          </Typography>
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
                <Grid item xs={12} md={2}>
                  <Button
                    fullWidth
                    variant="contained"
                    size={isMobile ? "small" : "large"}
                    startIcon={<SearchIcon />}
                    onClick={handleSearch}
                    disabled={Loading}
                    // sx={{ 
                    //   py: isMobile ? 1 : 2,
                    //   height: isMobile ? '40px' : '56px',
                    //   backgroundColor: theme.palette.primary.main,
                    //   fontFamily: theme.typography.fontFamily,
                    //   '&:hover': {
                    //     backgroundColor: theme.palette.primary.dark
                    //   }
                    // }}
                    
                  >
                    {Loading ? t('homepage.home.booking.loading') : t('homepage.home.booking.search')}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>
    </LocalizationProvider>
  );
};

export default BookingSection;