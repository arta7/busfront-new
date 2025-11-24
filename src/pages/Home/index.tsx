
// import { useTheme, Box, Button, Grid, Typography, styled, Card, Link, useMediaQuery } from '@mui/material';
// // import busimg from '../../assets/BusImage.jpeg';
// import busimg from '../../assets/Bus--kalan.jpg';


// import busimg1 from '../../assets/1.png';
// import busimg2 from '../../assets/2.png';

// import vanimg from '../../assets/van-kalan-2.png';
// import taxiimg from '../../assets/taxi-kalan-2.png';
// import { useNavigate } from 'react-router-dom';
// import SearchCard from './SearchCard';
// import { useContext, useEffect, useState } from 'react';
// import { GetCities } from '../../Api/ApiMaster';
// import UserContext from './../../UserContext';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import Maps from './Maps';
// import { useTranslation } from 'react-i18next';
// import moment from 'moment-jalaali';
// import getTheme from '../../theme';

// delete L.Icon.Default.prototype._getIconUrl;

// const Home = (props) => {
//   const { userData, setUserData } = useContext(UserContext);
//   const [Loading, setLoading] = useState(false);
//   const [CityList, setCityList] = useState([]);
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const isMobile = useMediaQuery('(max-width:600px)');
//   const navigate = useNavigate();
  
//    const { t ,i18n } = useTranslation();
//  const theme = getTheme(i18n.language);


//   useEffect(() => {
//   if (userData.length > 0) {
//     const currentDate = new Date();
//     const storedDate = userData[0]?.CurrentDate ? new Date(userData[0].CurrentDate) : null;
    
//     // Only update if:
//     // 1. No date exists, or
//     // 2. The stored date is in the past
//     if (!storedDate || storedDate < currentDate) {
//       const updatedData = [...userData];
//       updatedData[0].CurrentDate = currentDate.toISOString();
//       setUserData(updatedData);
//       localStorage.setItem('storageData', JSON.stringify(updatedData));
//     }
//   }else
//   {
//      const updatedData = [...userData];
//       updatedData[0].radioType = '1';
//       setUserData(updatedData);
//   }
// }, []); 

//   useEffect(() => {

  

// console.log('moment().toDate()',new Date().toISOString(),'current date : ',new Date(userData[0]?.CurrentDate)?.toISOString())

//     setLoading(true);
//     if (userData[0]?.Token == "" || userData[0]?.Token == null) {
      
//       setTimeout(() => {
//         GetCities(setCityList, CityList, props, setLoading, {
//           headers: {
//             'accept': 'text/plain',
//             "Access-Control-Allow-Origin": "*",
//             'Authorization': userData[0]?.Token
//           }
//         });
//       }, 4000);
//     }
//     else {
//       GetCities(setCityList, CityList, props, setLoading, {
//         headers: {
//           'accept': 'text/plain',
//           "Access-Control-Allow-Origin": "*",
//           'Authorization': userData[0]?.Token
//         }
//       });
//     }
//   }, []);

//   return (
//     <Grid container direction="column" marginTop={isMobile ? '1rem' : '2rem'}>
//       <Grid item>
//         {/* Hero Section */}
//         <Box
//           sx={{
//           background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), 
//                  url(${userData[0]?.radioType == '1' ? busimg :  userData[0]?.radioType == '3' ?  vanimg : taxiimg || busimg})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: '100%', // Scales the image to 50% of its original width/height
//     backgroundPosition: 'center',
//     height: {
//       xs: isMobile ? '22rem' : '18rem',
//       sm: '22rem',
//       md: '28rem',
//       lg: '34rem'
//     },
//     width: '100%', // Box takes full width
//     backgroundColor: 'white', // White screen background
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 2,
//     marginBottom: 4,
//     boxShadow: 3,
//           }}
//         >
//           <SearchCard
//             CityList={CityList}
//             userData={userData}
//             setUserData={setUserData}
//             Loading={Loading}
//           />
//         </Box>

//         {/* Map Section */}
//         <Box mt={isMobile ? 2 : 4} mb={isMobile ? 2 : 4}>
//           <Maps />
//         </Box>

//         {/* Advertise Section */}
//         <Box marginBottom={isMobile ? '2rem' : '4rem'} px={isMobile ? 1 : 0}>
//           <Typography
//             variant={isMobile ? 'h3' : 'h2'}
//             fontWeight="700"
//             margin={isMobile ? '1rem 0' : '2rem 0'}
//             textAlign="center"
//             color={theme.palette.secondary.main} 
//             fontFamily={theme.typography.fontFamily}
//           >
//             {t('home.advertise')}
//           </Typography>

//           <Grid
//             container
//             spacing={isMobile ? 1 : 4}
//             px={isMobile ? 1 : 4}
//             justifyContent="center"
//           >
//             <Grid item xs={12} sm={6} md={6}>
//               <AdCard>
//                 <img
//                   src={busimg2}
//                   alt={t('home.ad1Alt')}
//                   style={{
//                     width: '100%',
//                     height: isMobile ? '120px' : '180px',
//                     objectFit: 'cover',
//                     borderRadius: '4px 4px 0 0'
//                   }}
//                 />
//                 <Typography
//                   variant={isMobile ? 'h5' : 'h4'}
//                   fontWeight="600"
//                   padding={1}
//                   textAlign="center"
//                   color={theme.palette.secondary.main} 
//                   fontFamily={theme.typography.fontFamily}
//                 >
//                   {/* {t('home.ad1Title')} */}
//                 </Typography>
//               </AdCard>
//             </Grid>
//             <Grid item xs={12} sm={6} md={6}>
//               <AdCard>
//                 <img
//                   src={busimg1}
//                   alt={t('home.ad2Alt')}
//                   style={{
//                     width: '100%',
//                     height: isMobile ? '120px' : '180px',
//                     objectFit: 'cover',
//                     borderRadius: '4px 4px 0 0'
//                   }}
//                 />
//                 <Typography
//                   variant={isMobile ? 'h5' : 'h4'}
//                   fontWeight="600"
//                   padding={1}
//                   textAlign="center"
//                   color={theme.palette.secondary.main} 
//                   fontFamily={theme.typography.fontFamily}
//                 >
//                   {/* {t('home.ad2Title')} */}
//                 </Typography>
//               </AdCard>
//             </Grid>
//           </Grid>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// // Styled Components
// const HeroContainer = styled(Box)(({ theme }) => ({
//   background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${busimg})`,
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'center',
//   backgroundPosition: 'center',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   borderRadius: theme.shape.borderRadius,
//   marginBottom: theme.spacing(4),
//   boxShadow: theme.shadows[4],
//   width: '100%',
//   padding: theme.spacing(2),
// }));

// const AdCard = styled(Card)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   height: '100%',
//   transition: 'transform 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'scale(1.02)',
//   },
// }));

// export default Home;

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Search as SearchIcon,
  LocalShipping as VanIcon,
  Flight as FlightIcon,
  Help as HelpIcon,
  Download as DownloadIcon,
  Smartphone as SmartphoneIcon,
  Public as WorldIcon,
  EmojiPeople as ComfortIcon,
  Luggage as LuggageIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import NewsSlider from '../../components/home/NewsSlider';
import PopularRoutes from '../../components/home/PopularRoutes';
import FAQSection from '../../components/home/FAQSection';
import BookingSection from '../../components/home/BookingSection';
import x from '../../assets/1.png'

const Home = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* Booking Section */}
     <BookingSection />
      {/* <BookingSection /> */}

      {/* News Slider */}
      <NewsSlider />

      {/* Popular Routes */}
      {/* <PopularRoutes /> */}

      {/* Phone Booking Section */}
      <Container sx={{ py: 3, mb: 5 }}>
        <Paper 
          elevation={0}
          sx={{ 
            bgcolor: 'grey.50', 
            border: 1, 
            borderColor: 'divider',
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <Grid container>
            {/* Image */}
            <Grid item xs={12} md={4} sx={{ order: { md: 2 } }}>
              <Box
                component="img"
                src="../../assets/BusImage.jpeg"
                alt="cover"
                sx={{
                  width: '100%',
                  height: 300,
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </Grid>
            
            {/* Text */}
            <Grid item xs={12} md={4} sx={{ mx: { md: 'auto' } }}>
              <Box sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                alignItems: { xs: 'center', md: 'flex-start' },
                gap: 3,
                p: 4,
                textAlign: { xs: 'center', md: 'left' }
              }}>
                <Typography variant="h3" fontWeight="bold">
                  {t('homepage.home.phoneBooking')}
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {t('homepage.home.travelLimit')}
                </Typography>
                <Typography variant="h4" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  01133243056
                </Typography>
              </Box>
            </Grid>
            
            {/* Button */}
            <Grid item xs={12} md={3}>
              <Box sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
                py: 4
              }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  color="secondary"
                  sx={{ px: 4, py: 1.5 }}
                >
                  {t('homepage.home.moreInfo')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Download App Section */}
      <Container sx={{ py: 5, mb: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              alignItems: 'center',
              p: 5
            }}>
              <img 
                src="../../assets/BusImage.jpeg" 
                alt={t('app.name')}
                style={{ 
                  width: '100%', 
                  maxWidth: 300,
                  borderRadius: 8
                }}
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ ml: { md: 'auto' } }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 3,
              p: 4,
              textAlign: { xs: 'center', md: 'left' }
            }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="h4" fontWeight="bold">
                  {t('homepage.home.downloadApp')}
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {t('homepage.home.travelEasier')}
                </Typography>
              </Box>
              
              <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                با اپلیکیشن پرتو سیر، بلیط، هتل و هرچیزی که برای سفر نیاز داری رو با چند تا لمس رزرو کن. از تخفیف‌های ویژه لذت ببر و سفرت رو هوشمندانه برنامه‌ریزی کن. همین حالا دانلود کن!
              </Typography>

              <Grid container spacing={2} sx={{ pb: 4 }}>
                <Grid item xs={12} md={7}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                      <Button 
                        fullWidth 
                        variant="contained" 
                        color="inherit"
                        startIcon={<SmartphoneIcon />}
                        sx={{ mb: 1 }}
                      >
                        {t('homepage.home.downloadAndroid')}
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Button 
                        fullWidth 
                        variant="contained" 
                        color="inherit"
                        startIcon={<SmartphoneIcon />}
                        sx={{ mb: 1 }}
                      >
                        {t('homepage.home.downloadIOS')}
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Button 
                        fullWidth 
                        variant="contained" 
                        color="inherit"
                        startIcon={<DownloadIcon />}
                        sx={{ mb: 1 }}
                      >
                        {t('homepage.home.directDownload')}
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Button 
                        fullWidth 
                        variant="contained" 
                        color="inherit"
                        startIcon={<WorldIcon />}
                        sx={{ mb: 1 }}
                      >
                        {t('homepage.home.webApp')}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                
                <Grid item xs={12} md={5}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1
                  }}>
                    <img 
                      src="../../assets/BusImage.jpeg" 
                      alt="QR Code"
                      style={{ 
                        width: 150,
                        borderRadius: 8
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {t('homepage.home.scanDownload')}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* FAQ Section */}
      <FAQSection />

      {/* Key Highlights */}
      <Container sx={{ py: 5, mb: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ p: 3, height: '100%' }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 2,
                color: 'secondary.main'
              }}>
                <LuggageIcon sx={{ fontSize: 48 }} />
              </Box>
              <Typography variant="h5" fontWeight="bold" color="secondary" gutterBottom align="center">
                {t('homepage.home.highlights.anywhere')}
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                {t('homepage.home.highlights.anywhereDesc')}
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ p: 3, height: '100%' }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 2,
                color: 'secondary.main'
              }}>
                <WorldIcon sx={{ fontSize: 48 }} />
              </Box>
              <Typography variant="h5" fontWeight="bold" color="secondary" gutterBottom align="center">
                {t('homepage.home.highlights.alwaysAvailable')}
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                {t('homepage.home.highlights.alwaysAvailableDesc')}
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ p: 3, height: '100%' }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 2,
                color: 'secondary.main'
              }}>
                <ComfortIcon sx={{ fontSize: 48 }} />
              </Box>
              <Typography variant="h5" fontWeight="bold" color="secondary" gutterBottom align="center">
                {t('homepage.home.highlights.worryFree')}
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                {t('homepage.home.highlights.worryFreeDesc')}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Ready to Travel Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          py: 8,
          mb: 5
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img 
                  src="../../assets/BusImage.jpeg" 
                  alt="Luggage"
                  style={{ width: 200 }}
                />
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                alignItems: { xs: 'center', md: 'flex-start' },
                gap: 2
              }}>
                <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
                  {t('homepage.home.readyToTravel')}
                </Typography>
                <Typography variant="h6" color="white" sx={{ mb: 3, maxWidth: 500 }}>
                  {t('homepage.home.readyToTravelDesc')}
                </Typography>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    color: 'white', 
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  {t('homepage.home.onlineOrder')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;