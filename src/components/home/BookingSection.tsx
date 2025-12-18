// import React, { useState, useEffect, useContext } from 'react';
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
//   IconButton,
//   useMediaQuery
// } from '@mui/material';
// import {
//   Search as SearchIcon,
//   Add as AddIcon,
//   Remove as RemoveIcon
// } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';

// // ایمپورت کامپوننت‌های تاریخ شمسی
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';

// // ایمپورت context و API
// import UserContext from './../../UserContext';
// import { GetCities } from '../../Api/ApiMaster';
// import getTheme from '../../theme';
// import DropdownComponent from '../../pages/Home/DropDown';

// import headerImage from '../../img/pages/index/booking/sliderf.webp'

// // مسیر کامپوننت Dropdown

// const BookingSection = (props) => {
//   const { userData, setUserData } = useContext(UserContext);
//   const [Loading, setLoading] = useState(false);
//   const [CityList, setCityList] = useState([]);
//   const [passengerAnchor, setPassengerAnchor] = useState(null);
//   const [serviceType, setServiceType] = useState(0);
  
//   const { t, i18n } = useTranslation();
//   const navigate = useNavigate();
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const theme = getTheme(i18n.language);

//   // وضعیت پیش‌فرض برای مسافران
//   const [passengers, setPassengers] = useState({
//     adults: 1,
//     children: 0,
//     infants: 0
//   });

//   // فیلدهای مربوط به شهرها
//   const labelField = i18n.language === 'fa' ? 'name_fa' : 'name_en';
//   const codeField = 'code';

//   // مقداردهی اولیه userData اگر خالی باشد
//   useEffect(() => {
//     if (!userData || userData.length === 0) {
//       const initialUserData = [{
//         radioType: '1', // پیش‌فرض اتوبوس
//         CurrentDate: new Date().toISOString(),
//         Token: '',
//         StartPlace: '',
//         StartPlaceCode: '',
//         EndPlace: '',
//         EndPlaceCode: '',
//         DepartureDate: null,
//         Passengers: passengers
//       }];
//       setUserData(initialUserData);
//       localStorage.setItem('storageData', JSON.stringify(initialUserData));
//     } else {
//       // به روزرسانی تاریخ اگر تاریخ گذشته باشد
//       const currentDate = new Date();
//       const storedDate = userData[0]?.CurrentDate ? new Date(userData[0].CurrentDate) : null;
      
//       if (!storedDate || storedDate < currentDate) {
//         const updatedData = [...userData];
//         updatedData[0].CurrentDate = currentDate.toISOString();
//         setUserData(updatedData);
//         localStorage.setItem('storageData', JSON.stringify(updatedData));
//       }

//       // همگام‌سازی وضعیت مسافران
//       if (userData[0]?.Passengers) {
//         setPassengers(userData[0].Passengers);
//       }
//     }
//   }, []);

//   // دریافت لیست شهرها
//   useEffect(() => {
//     setLoading(true);
    
//     const fetchCities = () => {
//       const headers = {
//         'accept': 'text/plain',
//         "Access-Control-Allow-Origin": "*",
//         'Authorization': userData[0]?.Token || ''
//       };

//       GetCities(setCityList, CityList, props, setLoading, { headers });
//     };

//     if (userData[0]?.Token === "" || userData[0]?.Token == null) {
//       setTimeout(fetchCities, 4000);
//     } else {
//       fetchCities();
//     }
//   }, []);

//   // سرویس‌های مختلف
//   const services = [
//     { 
//       icon: <SearchIcon />, 
//       label: t('homepage.home.services.bus'),
//       value: '1'
//     },
//     { 
//       icon: <SearchIcon />, 
//       label: t('homepage.home.services.taxi'),
//       value: '2' 
//     },
//     { 
//       icon: <SearchIcon />, 
//       label: t('homepage.home.services.van'),
//       value: '3' 
//     },
//     { 
//       icon: <SearchIcon />, 
//       label: t('homepage.home.services.cargo'),
//       value: '4' 
//     }
//   ];

//   const handleServiceTypeChange = (event, newValue) => {
//     setServiceType(newValue);
//     const selectedService = services[newValue];
    
//     // به روزرسانی radioType در userData
//     const updatedData = [...userData];
//     updatedData[0].radioType = selectedService.value;
//     setUserData(updatedData);
//     localStorage.setItem('storageData', JSON.stringify(updatedData));
//   };

//   const handleOriginChange = (From) => {
//     if (From.code.toString() === userData[0]?.EndPlaceCode?.toString()) {
//       const myNextList = [...userData];
//       const DatesStep = myNextList;
//       DatesStep[0].EndPlace = '';
//       DatesStep[0].EndPlaceCode = '';
//       setUserData(myNextList);
//       localStorage.setItem('storageData', JSON.stringify(myNextList));
//     }
    
//     const myNextList = [...userData];
//     const DatesStep = myNextList;
//     DatesStep[0].StartPlace = i18n.language === 'fa' ? From.name_fa : From.name_en;
//     DatesStep[0].StartPlaceCode = From.code.toString();
//     setUserData(myNextList);
//     localStorage.setItem('storageData', JSON.stringify(myNextList));
//   };

//   const handleDestinationChange = (To) => {
//     if (To.code.toString() === userData[0]?.StartPlaceCode?.toString()) {
//       const myNextList = [...userData];
//       const DatesStep = myNextList;
//       DatesStep[0].StartPlace = '';
//       DatesStep[0].StartPlaceCode = '';
//       setUserData(myNextList);
//       localStorage.setItem('storageData', JSON.stringify(myNextList));
//     }
    
//     const myNextList = [...userData];
//     const DatesStep = myNextList;
//     DatesStep[0].EndPlace = i18n.language === 'fa' ? To.name_fa : To.name_en;
//     DatesStep[0].EndPlaceCode = To.code.toString();
//     setUserData(myNextList);
//     localStorage.setItem('storageData', JSON.stringify(myNextList));
//   };

//   const handleDepartureDateChange = (newValue) => {
//     const updatedData = [...userData];
//     updatedData[0].DepartureDate = newValue;
//     setUserData(updatedData);
//     localStorage.setItem('storageData', JSON.stringify(updatedData));
//   };

//   const handlePassengerClick = (event) => {
//     setPassengerAnchor(event.currentTarget);
//   };

//   const handlePassengerClose = () => {
//     setPassengerAnchor(null);
//   };

//   const updatePassenger = (type, operation) => {
//     const newPassengers = {
//       ...passengers,
//       [type]: operation === 'increase' ? passengers[type] + 1 : Math.max(0, passengers[type] - 1)
//     };
    
//     setPassengers(newPassengers);
    
//     // به روزرسانی در userData
//     const updatedData = [...userData];
//     updatedData[0].Passengers = newPassengers;
//     setUserData(updatedData);
//     localStorage.setItem('storageData', JSON.stringify(updatedData));
//   };

//   const handleSearch = () => {
//     // بررسی اعتبار داده‌ها
//     if (!userData[0]?.StartPlaceCode || !userData[0]?.EndPlaceCode || !userData[0]?.DepartureDate) {
//       alert(t('homepage.home.booking.validationError'));
//       return;
//     }

//     // هدایت به صفحه نتایج جستجو
//     navigate('/search-results', { 
//       state: { 
//         searchData: userData[0],
//         serviceType: services[serviceType].label
//       } 
//     });
//   };

//   const totalPassengers = passengers.adults + passengers.children + passengers.infants;

//   // تصویر پس‌زمینه بر اساس نوع سرویس انتخابی
//   const getBackgroundImage = () => {
//     const serviceImages = {
//       '1': headerImage, // اتوبوس
//       '2': '/img/pages/index/booking/taxi-bg.jpg',  // تاکسی
//       '3': '../../img/pages/index/booking/van-bg.jpg',   // ون
//       '4': '/img/pages/index/booking/cargo-bg.jpg'  // بار
//     };
    
//     const currentService = '1';
//     return `url(${serviceImages[currentService]})`;
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
//     <Box 
//         sx={{ 
//           backgroundImage: getBackgroundImage(),
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           py: isMobile ? 4 : 8,
//           position: 'relative',
//           minHeight: isMobile ? 400 : 500,
//           display: 'flex',
//           alignItems: 'center',
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))',
//             zIndex: 1
//           }
//         }}
//       >
//         <Container sx={{ position: 'relative', zIndex: 2 }}>
//           <Paper 
//             // elevation={8}
//             // sx={{ 
//             //   borderRadius: 2,
//             //   overflow: 'hidden',
//             //   backgroundColor: 'rgba(255, 255, 255, 0.95)'
//             // }}
//             elevation={8}
//             sx={{ 
//               borderRadius: 2,
//               overflow: 'hidden',
//               backgroundColor: 'rgba(255, 255, 255, 0.95)',
//               backdropFilter: 'blur(10px)'
//             }}
//           >
//             {/* Service Tabs */}
//             <Tabs
//               value={serviceType}
//               onChange={handleServiceTypeChange}
//               variant="fullWidth"
//               sx={{ 
//                 borderBottom: 1, 
//                 borderColor: 'divider',
//                 '& .MuiTab-root': {
//                   py: 2,
//                   fontWeight: 'bold'
//                 }
//               }}
//             >
             
//               {services.map((service, index) => (
//                 <Tab 
//                   key={index}
//                   icon={service.icon}
//                   label={service.label}
//                 />
//               ))}
//             </Tabs>

//             {/* Booking Form */}
//             <Box sx={{ p: isMobile ? 2 : 4 }}>
//               <Grid container spacing={3} alignItems="center">
//                 {/* Origin City */}
//                 <Grid item xs={12} md={3}>
//                   <FormControl fullWidth size={isMobile ? "small" : "medium"}>
                   
//                     <DropdownComponent
//                       data={CityList}
//                       labelField={labelField}
//                       valueField={codeField}
//                       Loading={Loading}
//                       value={userData[0]?.StartPlaceCode || ''}
//                       onChange={handleOriginChange}
//                       placeholder={t('homepage.home.booking.origin')}
//                       ShowIcon={true}
//                       labelStyle={{ 
//                         color: 'black', 
//                         fontFamily: theme.typography.fontFamily,
//                       }}
//                       placeholderStyle={{ 
//                         color: 'grey', 
//                         fontFamily: theme.typography.fontFamily,
//                       }}
//                       selectedTextStyle={{ 
//                         color: 'black', 
//                         fontFamily: theme.typography.fontFamily,
//                       }}
//                     />
//                   </FormControl>
//                 </Grid>

//                 {/* Destination City */}
//                 <Grid item xs={12} md={3}>
//                   <FormControl fullWidth size={isMobile ? "small" : "medium"}>
//                     {/* <InputLabel shrink={false} sx={{ 
//                       color: 'black', 
//                       fontFamily: theme.typography.fontFamily,
//                       backgroundColor: 'white',
//                       px: 1,
//                       ml: -0.5
//                     }}>
//                       {t('homepage.home.booking.destination')}
//                     </InputLabel> */}
//                     <DropdownComponent
//                       data={CityList}
//                       labelField={labelField}
//                       valueField={codeField}
//                       Loading={Loading}
//                       value={userData[0]?.EndPlaceCode || ''}
//                       onChange={handleDestinationChange}
//                       placeholder={t('homepage.home.booking.destination')}
//                       ShowIcon={true}
//                       labelStyle={{ 
//                         color: 'black', 
//                         fontFamily: theme.typography.fontFamily,
//                       }}
//                       placeholderStyle={{ 
//                         color: 'grey', 
//                         fontFamily: theme.typography.fontFamily,
//                       }}
//                       selectedTextStyle={{ 
//                         color: 'black', 
//                         fontFamily: theme.typography.fontFamily,
//                       }}
//                     />
//                   </FormControl>
//                 </Grid>

//                 {/* Departure Date */}
//                 <Grid item xs={12} md={2}>
//                   <DatePicker
//                     label={t('homepage.home.booking.departureDate')}
//                     value={userData[0]?.DepartureDate || null}
//                     onChange={handleDepartureDateChange}
//                     renderInput={(params) => (
//                       <TextField 
//                         {...params} 
//                         fullWidth 
//                         size={isMobile ? "small" : "medium"}
//                         sx={{
//                           '& .MuiInputLabel-root': {
//                             fontFamily: theme.typography.fontFamily,
//                           },
//                           '& .MuiInputBase-input': {
//                             fontFamily: theme.typography.fontFamily,
//                           }
//                         }}
//                       />
//                     )}
//                   />
//                 </Grid>

//                 {/* Passengers */}
//                 <Grid item xs={12} md={2}>
//                   {/* <Button
//                     fullWidth
//                     variant="outlined"
//                     onClick={handlePassengerClick}
//                     size={isMobile ? "small" : "medium"}
//                     sx={{ 
//                       py: isMobile ? 1 : 1.5,
//                       height: isMobile ? '40px' : '56px',
//                       borderColor: 'grey.400',
//                       '&:hover': {
//                         borderColor: 'grey.600',
//                       }
//                     }}
//                   >
//                     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                       <Typography 
//                         variant="caption" 
//                         color="text.secondary"
//                         fontFamily={theme.typography.fontFamily}
//                       >
//                         {t('homepage.home.booking.passengers')}
//                       </Typography>
//                       <Typography 
//                         variant="body2" 
//                         fontWeight="bold"
//                         fontFamily={theme.typography.fontFamily}
//                       >
//                         {totalPassengers} {t('homepage.home.booking.person')}
//                       </Typography>
//                     </Box>
//                   </Button> */}

//                   <Popover
//                     open={Boolean(passengerAnchor)}
//                     anchorEl={passengerAnchor}
//                     onClose={handlePassengerClose}
//                     anchorOrigin={{
//                       vertical: 'bottom',
//                       horizontal: 'left',
//                     }}
//                     transformOrigin={{
//                       vertical: 'top',
//                       horizontal: 'left',
//                     }}
//                   >
//                     <Box sx={{ p: 2, minWidth: 250 }}>
//                       {/* Adults */}
//                       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
//                         <Box>
//                           <Typography 
//                             variant="body1" 
//                             fontWeight="medium"
//                             fontFamily={theme.typography.fontFamily}
//                           >
//                             {t('homepage.home.booking.adult')}
//                           </Typography>
//                           <Typography 
//                             variant="caption" 
//                             color="text.secondary"
//                             fontFamily={theme.typography.fontFamily}
//                           >
//                             {/* {t('homepage.home.booking.adultDesc')} */}
//                           </Typography>
//                         </Box>
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                           <IconButton 
//                             size="small" 
//                             onClick={() => updatePassenger('adults', 'decrease')}
//                             disabled={passengers.adults <= 1}
//                           >
//                             <RemoveIcon />
//                           </IconButton>
//                           <Typography 
//                             sx={{ minWidth: '20px', textAlign: 'center' }}
//                             fontFamily={theme.typography.fontFamily}
//                           >
//                             {passengers.adults}
//                           </Typography>
//                           <IconButton 
//                             size="small" 
//                             onClick={() => updatePassenger('adults', 'increase')}
//                           >
//                             <AddIcon />
//                           </IconButton>
//                         </Box>
//                       </Box>

//                       {/* Children */}
//                       {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
//                         <Box>
//                           <Typography 
//                             variant="body1" 
//                             fontWeight="medium"
//                             fontFamily={theme.typography.fontFamily}
//                           >
//                             {t('homepage.home.booking.child')}
//                           </Typography>
//                           <Typography 
//                             variant="caption" 
//                             color="text.secondary"
//                             fontFamily={theme.typography.fontFamily}
//                           >
//                             {t('homepage.home.booking.childDesc')}
//                           </Typography>
//                         </Box>
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                           <IconButton 
//                             size="small" 
//                             onClick={() => updatePassenger('children', 'decrease')}
//                             disabled={passengers.children <= 0}
//                           >
//                             <RemoveIcon />
//                           </IconButton>
//                           <Typography 
//                             sx={{ minWidth: '20px', textAlign: 'center' }}
//                             fontFamily={theme.typography.fontFamily}
//                           >
//                             {passengers.children}
//                           </Typography>
//                           <IconButton 
//                             size="small" 
//                             onClick={() => updatePassenger('children', 'increase')}
//                           >
//                             <AddIcon />
//                           </IconButton>
//                         </Box>
//                       </Box> */}

//                       {/* Infants */}
//                       {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                         <Box>
//                           <Typography 
//                             variant="body1" 
//                             fontWeight="medium"
//                             fontFamily={theme.typography.fontFamily}
//                           >
//                             {t('homepage.home.booking.infant')}
//                           </Typography>
//                           <Typography 
//                             variant="caption" 
//                             color="text.secondary"
//                             fontFamily={theme.typography.fontFamily}
//                           >
//                             {t('homepage.home.booking.infantDesc')}
//                           </Typography>
//                         </Box>
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                           <IconButton 
//                             size="small" 
//                             onClick={() => updatePassenger('infants', 'decrease')}
//                             disabled={passengers.infants <= 0}
//                           >
//                             <RemoveIcon />
//                           </IconButton>
//                           <Typography 
//                             sx={{ minWidth: '20px', textAlign: 'center' }}
//                             fontFamily={theme.typography.fontFamily}
//                           >
//                             {passengers.infants}
//                           </Typography>
//                           <IconButton 
//                             size="small" 
//                             onClick={() => updatePassenger('infants', 'increase')}
//                           >
//                             <AddIcon />
//                           </IconButton>
//                         </Box>
//                       </Box> */}
//                     </Box>
//                   </Popover>
//                 </Grid>

//                 {/* Search Button */}
//                 <Grid item xs={12} md={2}>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     size={isMobile ? "small" : "large"}
//                     startIcon={<SearchIcon />}
//                     onClick={handleSearch}
//                     disabled={Loading}
//                     // sx={{ 
//                     //   py: isMobile ? 1 : 2,
//                     //   height: isMobile ? '40px' : '56px',
//                     //   backgroundColor: theme.palette.primary.main,
//                     //   fontFamily: theme.typography.fontFamily,
//                     //   '&:hover': {
//                     //     backgroundColor: theme.palette.primary.dark
//                     //   }
//                     // }}
                    
//                   >
//                     {Loading ? t('homepage.home.booking.loading') : t('homepage.home.booking.search')}
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
  Remove as RemoveIcon,
  DirectionsBus as BusIcon,
  LocalTaxi as TaxiIcon,
  AirportShuttle as VanIcon,
  LocalShipping as ShipingIcon
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

import headerImage from '../../img/pages/index/booking/sliderf.webp'

const BookingSection = (props) => {
  const { userData, setUserData } = useContext(UserContext);
  const [Loading, setLoading] = useState(false);
  const [CityList, setCityList] = useState([]);
  const [passengerAnchor, setPassengerAnchor] = useState(null);
  const [serviceType, setServiceType] = useState(0);
  const [departureDate, setDepartureDate] = useState(null); // حالت جداگانه برای تاریخ
  
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

  // تابع برای به‌روزرسانی userData در localStorage
  const updateUserData = (updates) => {
    const currentDate = new Date().toISOString();
    
    const newUserData = userData && userData.length > 0 
      ? [...userData]
      : [{
          radioType: '1',
          CurrentDate: currentDate,
          Token: '',
          StartPlace: '',
          StartPlaceCode: '',
          EndPlace: '',
          EndPlaceCode: '',
          DepartureDate: departureDate, // استفاده از state محلی
          Passengers: passengers
        }];
    
    // همیشه CurrentDate را به‌روز کنیم
    newUserData[0] = {
      ...newUserData[0],
      ...updates,
      CurrentDate: currentDate // همیشه تاریخ جاری را ذخیره کن
    };
    
    setUserData(newUserData);
    localStorage.setItem('storageData', JSON.stringify(newUserData));
    
    return newUserData[0];
  };

  // مقداردهی اولیه userData و departureDate
  useEffect(() => {
    const loadUserData = () => {
      const storedData = localStorage.getItem('storageData');
      
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          
          // بررسی تاریخ ذخیره شده
          const storedDate = parsedData[0]?.CurrentDate ? new Date(parsedData[0].CurrentDate) : null;
          const currentDate = new Date();
          
          // اگر بیش از 24 ساعت از آخرین ذخیره گذشته باشد، CurrentDate را به‌روز کنیم
          if (storedDate && (currentDate - storedDate) > 24 * 60 * 60 * 1000) {
            parsedData[0].CurrentDate = currentDate.toISOString();
          }
          
          // اگر CurrentDate وجود نداشته باشد، اضافه کنیم
          if (!parsedData[0].CurrentDate) {
            parsedData[0].CurrentDate = currentDate.toISOString();
          }
          
          setUserData(parsedData);
          
          // تنظیم departureDate از userData ذخیره شده
          if (parsedData[0]?.DepartureDate) {
            // تبدیل رشته تاریخ به شیء Date
            const dateValue = new Date(parsedData[0].DepartureDate);
            if (!isNaN(dateValue.getTime())) {
              setDepartureDate(dateValue);
            } else {
              // اگر فرمت تاریخ اشتباه بود، از moment-jalaali برای پارس استفاده کن
              try {
                const moment = require('moment-jalaali');
                if (i18n.language === 'fa') {
                  const jalaliDate = moment(parsedData[0].DepartureDate, 'jYYYY/jMM/jDD');
                  if (jalaliDate.isValid()) {
                    setDepartureDate(jalaliDate.toDate());
                  }
                } else {
                  setDepartureDate(dateValue);
                }
              } catch (error) {
                console.error('Error parsing date:', error);
                setDepartureDate(null);
              }
            }
          }
          
          // همگام‌سازی وضعیت مسافران
          if (parsedData[0]?.Passengers) {
            setPassengers(parsedData[0].Passengers);
          }
          
          // همگام‌سازی serviceType بر اساس radioType
          if (parsedData[0]?.radioType) {
            const serviceValue = parsedData[0].radioType;
            const serviceIndex = services.findIndex(service => service.value === serviceValue);
            if (serviceIndex !== -1) {
              setServiceType(serviceIndex);
            }
          }
          
        } catch (error) {
          console.error('Error parsing stored data:', error);
          initializeDefaultData();
        }
      } else {
        initializeDefaultData();
      }
    };
    
    const initializeDefaultData = () => {
      const currentDate = new Date().toISOString();
      const defaultData = [{
        radioType: '1',
        CurrentDate: currentDate,
        Token: '',
        StartPlace: '',
        StartPlaceCode: '',
        EndPlace: '',
        EndPlaceCode: '',
        DepartureDate: null,
        Passengers: passengers
      }];
      
      setUserData(defaultData);
      localStorage.setItem('storageData', JSON.stringify(defaultData));
      setDepartureDate(null); // مقدار پیش‌فرض
    };
    
    loadUserData();
  }, []); // فقط یک بار اجرا شود

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

    if (userData?[0]?.Token === "" || userData?.[0]?.Token == null) {
      setTimeout(fetchCities, 4000);
    } else {
      fetchCities();
    }
  }, [userData]);

  // سرویس‌های مختلف
  const services = [
    { 
      icon: <BusIcon />, 
      label: t('homepage.home.services.bus'),
      value: '1'
    },
    { 
      icon: <TaxiIcon />, 
      label: t('homepage.home.services.taxi'),
      value: '2' 
    },
    { 
      icon: <VanIcon />, 
      label: t('homepage.home.services.van'),
      value: '3' 
    },
    { 
      icon: <ShipingIcon />, 
      label: t('homepage.home.services.cargo'),
      value: '4' 
    }
  ];

  const handleServiceTypeChange = (event, newValue) => {
    setServiceType(newValue);
    const selectedService = services[newValue];
    
    // به روزرسانی radioType در userData و CurrentDate
    updateUserData({
      radioType: selectedService.value
    });
  };

  const handleOriginChange = (From) => {
    if (From.code.toString() === userData?.[0]?.EndPlaceCode?.toString()) {
      updateUserData({
        EndPlace: '',
        EndPlaceCode: ''
      });
    }
    
    updateUserData({
      StartPlace: i18n.language === 'fa' ? From.name_fa : From.name_en,
      StartPlaceCode: From.code.toString()
    });
  };

  const handleDestinationChange = (To) => {
    if (To.code.toString() === userData?.[0]?.StartPlaceCode?.toString()) {
      updateUserData({
        StartPlace: '',
        StartPlaceCode: ''
      });
    }
    
    updateUserData({
      EndPlace: i18n.language === 'fa' ? To.name_fa : To.name_en,
      EndPlaceCode: To.code.toString()
    });
  };

  const handleDepartureDateChange = (newValue) => {
    setDepartureDate(newValue); // به‌روزرسانی state محلی
    
    // به‌روزرسانی userData با فرمت صحیح
    updateUserData({
      DepartureDate: newValue ? newValue.toISOString() : null
    });
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
    updateUserData({
      Passengers: newPassengers
    });
  };

  const handleSearch = () => {
    // بررسی اعتبار داده‌ها
    if (!userData?.[0]?.StartPlaceCode || !userData?.[0]?.EndPlaceCode || !departureDate) {
      alert(t('homepage.home.booking.validationError'));
      return;
    }

    // قبل از هدایت، CurrentDate را یک بار دیگر به‌روز کنیم
    updateUserData({});

    // هدایت به صفحه نتایج جستجو
    navigate('/search-results', { 
      state: { 
        searchData: {
          ...userData[0],
          DepartureDate: departureDate
        },
        serviceType: services[serviceType].label
      } 
    });
  };

  // تابع برای گرفتن مقدار فعلی از userData
  const getCurrentValue = (field) => {
    return userData?.[0]?.[field] || '';
  };

  // تابع برای تبدیل رشته تاریخ از localStorage به شیء Date
  const parseStoredDate = (dateString) => {
    if (!dateString) return null;
    
    try {
      // تلاش برای پارس به عنوان ISO string
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date;
      }
      
      // تلاش برای پارس به عنوان تاریخ فارسی
      if (i18n.language === 'fa') {
        try {
          const moment = require('moment-jalaali');
          const jalaliDate = moment(dateString, 'jYYYY/jMM/jDD');
          if (jalaliDate.isValid()) {
            return jalaliDate.toDate();
          }
        } catch (error) {
          console.error('Error parsing Jalali date:', error);
        }
      }
      
      return null;
    } catch (error) {
      console.error('Error parsing date:', error);
      return null;
    }
  };

  // همگام‌سازی departureDate با userData هنگام تغییر userData
  useEffect(() => {
    if (userData?.[0]?.DepartureDate && !departureDate) {
      const parsedDate = parseStoredDate(userData[0].DepartureDate);
      if (parsedDate) {
        setDepartureDate(parsedDate);
      }
    }
  }, [userData]);

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  // تصویر پس‌زمینه بر اساس نوع سرویس انتخابی
  const getBackgroundImage = () => {
    const serviceImages = {
      '1': headerImage, // اتوبوس
      '2': headerImage,  // تاکسی
      '3': headerImage,   // ون
      '4': headerImage // بار
    };
    
    const currentService = getCurrentValue('radioType') || '1';
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
          minHeight: isMobile ? 400 : 500,
          display: 'flex',
          alignItems: 'center',
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
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)'
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
                    <DropdownComponent
                      data={CityList}
                      labelField={labelField}
                      valueField={codeField}
                      Loading={Loading}
                      value={getCurrentValue('StartPlaceCode')}
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
                    <DropdownComponent
                      data={CityList}
                      labelField={labelField}
                      valueField={codeField}
                      Loading={Loading}
                      value={getCurrentValue('EndPlaceCode')}
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
                    value={departureDate} // استفاده از state محلی
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
                    // تنظیمات اضافی برای پایداری
                    PopperProps={{
                      placement: "bottom-start"
                    }}
                  />
                </Grid>

                {/* Passengers */}
                <Grid item xs={12} md={2}>
                 
                </Grid>

                {/* Search Button */}
                <Grid item xs={12} md={2}>
                  <Button
                    fullWidth
                    variant="contained"
                    size={isMobile ? "small" : "large"}
                    startIcon={<SearchIcon />}
                    onClick={handleSearch}
                    disabled={getCurrentValue('radioType') != '1' ? true : Loading}
                  >
                    {Loading ? t('homepage.home.booking.loading') : t('homepage.home.booking.search')}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
          
          {/* نمایش اطلاعات ذخیره شده برای دیباگ */}
          {/* <Box sx={{ mt: 2, p: 2, bgcolor: 'rgba(0,0,0,0.5)', borderRadius: 1, color: 'white' }}>
            <Typography variant="caption">
              Stored DepartureDate: {userData?.[0]?.DepartureDate}
            </Typography>
            <br />
            <Typography variant="caption">
              Current DepartureDate State: {departureDate ? departureDate.toString() : 'null'}
            </Typography>
          </Box> */}
        </Container>
      </Box>
    </LocalizationProvider>
  );
};

export default BookingSection;