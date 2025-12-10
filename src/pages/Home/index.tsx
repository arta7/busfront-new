
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




// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Paper,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   TextField,
//   IconButton,
//   Chip,
//   useTheme,
//   useMediaQuery
// } from '@mui/material';
// import {
//   ExpandMore as ExpandMoreIcon,
//   Search as SearchIcon,
//   LocalShipping as VanIcon,
//   Flight as FlightIcon,
//   Help as HelpIcon,
//   Download as DownloadIcon,
//   Smartphone as SmartphoneIcon,
//   Public as WorldIcon,
//   EmojiPeople as ComfortIcon,
//   Luggage as LuggageIcon
// } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';
// import NewsSlider from '../../components/home/NewsSlider';
// import PopularRoutes from '../../components/home/PopularRoutes';
// import FAQSection from '../../components/home/FAQSection';
// import BookingSection from '../../components/home/BookingSection';
// import x from '../../assets/1.png'

// const Home = () => {
//   const { t } = useTranslation();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   return (
//     <Box>
//       {/* Booking Section */}
//      <BookingSection />
//       {/* <BookingSection /> */}

//       {/* News Slider */}
//       <NewsSlider />

//       {/* Popular Routes */}
//       {/* <PopularRoutes /> */}

//       {/* Phone Booking Section */}
//       <Container sx={{ py: 3, mb: 5 }}>
//         <Paper 
//           elevation={0}
//           sx={{ 
//             bgcolor: 'grey.50', 
//             border: 1, 
//             borderColor: 'divider',
//             borderRadius: 2,
//             overflow: 'hidden'
//           }}
//         >
//           <Grid container>
//             {/* Image */}
//             <Grid item xs={12} md={4} sx={{ order: { md: 2 } }}>
//               <Box
//                 component="img"
//                 src="../../assets/BusImage.jpeg"
//                 alt="cover"
//                 sx={{
//                   width: '100%',
//                   height: 300,
//                   objectFit: 'cover',
//                   display: 'block'
//                 }}
//               />
//             </Grid>
            
//             {/* Text */}
//             <Grid item xs={12} md={4} sx={{ mx: { md: 'auto' } }}>
//               <Box sx={{ 
//                 height: '100%', 
//                 display: 'flex', 
//                 flexDirection: 'column', 
//                 justifyContent: 'center',
//                 alignItems: { xs: 'center', md: 'flex-start' },
//                 gap: 3,
//                 p: 4,
//                 textAlign: { xs: 'center', md: 'left' }
//               }}>
//                 <Typography variant="h3" fontWeight="bold">
//                   {t('homepage.home.phoneBooking')}
//                 </Typography>
//                 <Typography variant="h4" fontWeight="bold" color="primary">
//                   {t('homepage.home.travelLimit')}
//                 </Typography>
//                 <Typography variant="h4" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   01133243056
//                 </Typography>
//               </Box>
//             </Grid>
            
//             {/* Button */}
//             <Grid item xs={12} md={3}>
//               <Box sx={{ 
//                 height: '100%', 
//                 display: 'flex', 
//                 flexDirection: 'column', 
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 gap: 3,
//                 py: 4
//               }}>
//                 <Button 
//                   variant="contained" 
//                   size="large" 
//                   color="secondary"
//                   sx={{ px: 4, py: 1.5 }}
//                 >
//                   {t('homepage.home.moreInfo')}
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Container>

//       {/* Download App Section */}
//       <Container sx={{ py: 5, mb: 5 }}>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={4}>
//             <Box sx={{ 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'center',
//               alignItems: 'center',
//               p: 5
//             }}>
//               <img 
//                 src="../../assets/BusImage.jpeg" 
//                 alt={t('app.name')}
//                 style={{ 
//                   width: '100%', 
//                   maxWidth: 300,
//                   borderRadius: 8
//                 }}
//               />
//             </Box>
//           </Grid>
          
//           <Grid item xs={12} md={6} sx={{ ml: { md: 'auto' } }}>
//             <Box sx={{ 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'center',
//               alignItems: { xs: 'center', md: 'flex-start' },
//               gap: 3,
//               p: 4,
//               textAlign: { xs: 'center', md: 'left' }
//             }}>
//               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                 <Typography variant="h4" fontWeight="bold">
//                   {t('homepage.home.downloadApp')}
//                 </Typography>
//                 <Typography variant="h4" fontWeight="bold" color="primary">
//                   {t('homepage.home.travelEasier')}
//                 </Typography>
//               </Box>
              
//               <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
//                 با اپلیکیشن پرتو سیر، بلیط، هتل و هرچیزی که برای سفر نیاز داری رو با چند تا لمس رزرو کن. از تخفیف‌های ویژه لذت ببر و سفرت رو هوشمندانه برنامه‌ریزی کن. همین حالا دانلود کن!
//               </Typography>

//               <Grid container spacing={2} sx={{ pb: 4 }}>
//                 <Grid item xs={12} md={7}>
//                   <Grid container spacing={1}>
//                     <Grid item xs={12} md={6}>
//                       <Button 
//                         fullWidth 
//                         variant="contained" 
//                         color="inherit"
//                         startIcon={<SmartphoneIcon />}
//                         sx={{ mb: 1 }}
//                       >
//                         {t('homepage.home.downloadAndroid')}
//                       </Button>
//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                       <Button 
//                         fullWidth 
//                         variant="contained" 
//                         color="inherit"
//                         startIcon={<SmartphoneIcon />}
//                         sx={{ mb: 1 }}
//                       >
//                         {t('homepage.home.downloadIOS')}
//                       </Button>
//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                       <Button 
//                         fullWidth 
//                         variant="contained" 
//                         color="inherit"
//                         startIcon={<DownloadIcon />}
//                         sx={{ mb: 1 }}
//                       >
//                         {t('homepage.home.directDownload')}
//                       </Button>
//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                       <Button 
//                         fullWidth 
//                         variant="contained" 
//                         color="inherit"
//                         startIcon={<WorldIcon />}
//                         sx={{ mb: 1 }}
//                       >
//                         {t('homepage.home.webApp')}
//                       </Button>
//                     </Grid>
//                   </Grid>
//                 </Grid>
                
//                 <Grid item xs={12} md={5}>
//                   <Box sx={{ 
//                     display: 'flex', 
//                     flexDirection: 'column', 
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     gap: 1
//                   }}>
//                     <img 
//                       src="../../assets/BusImage.jpeg" 
//                       alt="QR Code"
//                       style={{ 
//                         width: 150,
//                         borderRadius: 8
//                       }}
//                     />
//                     <Typography variant="body2" color="text.secondary">
//                       {t('homepage.home.scanDownload')}
//                     </Typography>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* FAQ Section */}
//       <FAQSection />

//       {/* Key Highlights */}
//       <Container sx={{ py: 5, mb: 5 }}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={4}>
//             <Card elevation={2} sx={{ p: 3, height: '100%' }}>
//               <Box sx={{ 
//                 display: 'flex', 
//                 justifyContent: 'center', 
//                 mb: 2,
//                 color: 'secondary.main'
//               }}>
//                 <LuggageIcon sx={{ fontSize: 48 }} />
//               </Box>
//               <Typography variant="h5" fontWeight="bold" color="secondary" gutterBottom align="center">
//                 {t('homepage.home.highlights.anywhere')}
//               </Typography>
//               <Typography variant="body1" color="text.secondary" align="center">
//                 {t('homepage.home.highlights.anywhereDesc')}
//               </Typography>
//             </Card>
//           </Grid>
          
//           <Grid item xs={12} md={4}>
//             <Card elevation={2} sx={{ p: 3, height: '100%' }}>
//               <Box sx={{ 
//                 display: 'flex', 
//                 justifyContent: 'center', 
//                 mb: 2,
//                 color: 'secondary.main'
//               }}>
//                 <WorldIcon sx={{ fontSize: 48 }} />
//               </Box>
//               <Typography variant="h5" fontWeight="bold" color="secondary" gutterBottom align="center">
//                 {t('homepage.home.highlights.alwaysAvailable')}
//               </Typography>
//               <Typography variant="body1" color="text.secondary" align="center">
//                 {t('homepage.home.highlights.alwaysAvailableDesc')}
//               </Typography>
//             </Card>
//           </Grid>
          
//           <Grid item xs={12} md={4}>
//             <Card elevation={2} sx={{ p: 3, height: '100%' }}>
//               <Box sx={{ 
//                 display: 'flex', 
//                 justifyContent: 'center', 
//                 mb: 2,
//                 color: 'secondary.main'
//               }}>
//                 <ComfortIcon sx={{ fontSize: 48 }} />
//               </Box>
//               <Typography variant="h5" fontWeight="bold" color="secondary" gutterBottom align="center">
//                 {t('homepage.home.highlights.worryFree')}
//               </Typography>
//               <Typography variant="body1" color="text.secondary" align="center">
//                 {t('homepage.home.highlights.worryFreeDesc')}
//               </Typography>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Ready to Travel Section */}
//       <Box 
//         sx={{ 
//           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//           py: 8,
//           mb: 5
//         }}
//       >
//         <Container>
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={4}>
//               <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//                 <img 
//                   src="../../assets/BusImage.jpeg" 
//                   alt="Luggage"
//                   style={{ width: 200 }}
//                 />
//               </Box>
//             </Grid>
            
//             <Grid item xs={12} md={6}>
//               <Box sx={{ 
//                 display: 'flex', 
//                 flexDirection: 'column', 
//                 justifyContent: 'center',
//                 alignItems: { xs: 'center', md: 'flex-start' },
//                 gap: 2
//               }}>
//                 <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
//                   {t('homepage.home.readyToTravel')}
//                 </Typography>
//                 <Typography variant="h6" color="white" sx={{ mb: 3, maxWidth: 500 }}>
//                   {t('homepage.home.readyToTravelDesc')}
//                 </Typography>
//                 <Button 
//                   variant="outlined" 
//                   size="large"
//                   sx={{ 
//                     color: 'white', 
//                     borderColor: 'white',
//                     '&:hover': {
//                       borderColor: 'white',
//                       backgroundColor: 'rgba(255,255,255,0.1)'
//                     }
//                   }}
//                 >
//                   {t('homepage.home.onlineOrder')}
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

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
  useMediaQuery,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Avatar,
  Badge,
  Menu,
  MenuItem as MuiMenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Link,
  InputAdornment,
  ListItemIcon,
  Tooltip,
  Stack,
  useScrollTrigger,
  Slide
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
  Luggage as LuggageIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Person as PersonIcon,
  PersonOutline as PersonOutlineIcon,
  DirectionsBus as BusIcon,
  // Car as CarIcon,
  LocalShipping as TruckIcon,
  FlightTakeoff as FlightTakeoffIcon,
  Info as InfoIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Facebook,
  Twitter,
  Instagram,
  WhatsApp,
  Telegram,
  YouTube,
  LinkedIn,
  Brightness4,
  Brightness7,
  Home as HomeIcon,
  AccountCircle,
  ShoppingBag,
  Favorite,
  Headset,
  Business,
  Wallet,
  ChevronRight,
  Share,
  QrCode
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import NewsSlider from '../../components/home/NewsSlider';
import PopularRoutes from '../../components/home/PopularRoutes';
import FAQSection from '../../components/home/FAQSection';
import BookingSection from '../../components/home/BookingSection';

// تصاویر - فرض می‌کنیم در پوشه assets قرار دارند
import logo from '../../img/logo.png';
import busImage from '../../img/pages/index/bus.png';
import appImage from '../../img/pages/index/app.png';
import qrCode from '../../img/pages/index/qr.png';
import luggageImage from '../../img/pages/index/luggage.png';
import enamadBadge from '../../img/layouts/footer/badges/enamad.jpg';
import kasbokarBadge from '../../img/layouts/footer/badges/kasbokar.jpg';
import reziBadge from '../../img/layouts/footer/badges/rezi.jpg';
import persepolisImage from '../../assets/slider/Persepolis.jpg';
import shirazImage from '../../assets/slider/Shiraz.jpg';

// Header Component
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [signModalOpen, setSignModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileToggle = () => {
    setProfileOpen(!profileOpen);
  };

  const handleSignModalOpen = () => {
    setSignModalOpen(true);
  };

  const handleSignModalClose = () => {
    setSignModalOpen(false);
  };

  const handleShareModalOpen = () => {
    setShareModalOpen(true);
  };

  const handleShareModalClose = () => {
    setShareModalOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollTrigger = useScrollTrigger();

  const menuItems = [
    { text: t('newprofile.header.services'), submenu: [
      { icon: <BusIcon />, text: t('newprofile.header.bus'), link: '/' },
      { icon: <BusIcon />, text: t('newprofile.header.taxi'), link: '/taxi' },
      { icon: <TruckIcon />, text: t('newprofile.header.van'), link: '/van' },
      { icon: <BusIcon />, text: t('newprofile.header.cargo'), link: '/cargo' }
    ]},
    { text: t('newprofile.header.about'), link: '/about' },
    { text: t('newprofile.header.contact'), link: '/contact' },
    { text: t('newprofile.header.branches'), link: '/branches' },
    { text: t('newprofile.header.reservedTickets'), link: '/tickets' }
  ];

  return (
    <>
      <Slide appear={false} direction="down" in={!scrollTrigger}>
        <AppBar 
          position="fixed" 
          sx={{ 
            bgcolor: 'background.paper',
            color: 'text.primary',
            boxShadow: scrollTrigger ? 3 : 0,
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Toolbar>
            <Container maxWidth="xl">
              <Grid container alignItems="center" spacing={2}>
                {/* Logo and Mobile Menu */}
                <Grid item xs="auto">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    {isMobile && (
                      <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                      >
                        <MenuIcon />
                      </IconButton>
                    )}
                    <Link href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                      <Box component="img" src={logo} alt="پرتو سیر" width={40} height={40} />
                      <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold', color: 'text.primary' }}>
                        پرتو سیر
                      </Typography>
                    </Link>
                  </Stack>
                </Grid>

                {/* Desktop Navigation */}
                {!isMobile && (
                  <Grid item xs>
                    <Stack direction="row" spacing={2}>
                      {menuItems.map((item) => (
                        item.submenu ? (
                          <Box key={item.text}>
                            <Button
                              color="inherit"
                              endIcon={<ExpandMoreIcon />}
                              sx={{ textTransform: 'none', fontSize: '1rem' }}
                            >
                              {item.text}
                            </Button>
                            <Menu>
                              {item.submenu.map((sub) => (
                                <MuiMenuItem key={sub.text}>
                                  <ListItemIcon>{sub.icon}</ListItemIcon>
                                  <ListItemText>{sub.text}</ListItemText>
                                </MuiMenuItem>
                              ))}
                            </Menu>
                          </Box>
                        ) : (
                          <Button
                            key={item.text}
                            color="inherit"
                            href={item.link}
                            sx={{ textTransform: 'none', fontSize: '1rem' }}
                          >
                            {item.text}
                          </Button>
                        )
                      ))}
                    </Stack>
                  </Grid>
                )}

                {/* Right Side Actions */}
                <Grid item xs="auto">
                  <Stack direction="row" spacing={1} alignItems="center">
                    {!isMobile && (
                      <Tooltip title={t('newprofile.header.toggleTheme')}>
                        <IconButton onClick={toggleDarkMode} color="inherit">
                          {darkMode ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>
                      </Tooltip>
                    )}
                    
                    <Button
                      variant="outlined"
                      startIcon={<PersonOutlineIcon />}
                      onClick={handleSignModalOpen}
                      sx={{ 
                        textTransform: 'none',
                        borderColor: 'grey.300',
                        color: 'text.secondary'
                      }}
                    >
                      {t('newprofile.header.signIn')}
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </Slide>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 300,
            bgcolor: 'background.paper'
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            {t('newprofile.header.menu')}
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Divider />
        
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleDarkMode}>
              <ListItemIcon>
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </ListItemIcon>
              <ListItemText primary={t('newprofile.header.toggleTheme')} />
            </ListItemButton>
          </ListItem>
          
          <Divider sx={{ my: 1 }} />
          
          {menuItems.map((item, index) => (
            item.submenu ? (
              <Accordion key={item.text} disableGutters elevation={0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{item.text}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  <List dense disablePadding>
                    {item.submenu.map((sub) => (
                      <ListItem key={sub.text} disablePadding>
                        <ListItemButton href={sub.link} sx={{ pl: 4 }}>
                          <ListItemIcon>{sub.icon}</ListItemIcon>
                          <ListItemText primary={sub.text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItem key={item.text} disablePadding>
                <ListItemButton href={item.link}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            )
          ))}
        </List>
        
        <Divider sx={{ mt: 'auto' }} />
        
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </Typography>
        </Box>
      </Drawer>

      {/* Sign In Modal */}
      <Dialog open={signModalOpen} onClose={handleSignModalClose} maxWidth="xs" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{t('signIn.title')}</Typography>
            <IconButton onClick={handleSignModalClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 4, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              {t('signIn.subtitle')}
            </Typography>
            <Typography color="text.secondary" paragraph>
              {t('signIn.description')}
            </Typography>
            
            <FormControl fullWidth sx={{ mb: 2 }}>
              <TextField
                label={t('signIn.phoneNumber')}
                type="tel"
                size="medium"
                fullWidth
              />
            </FormControl>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <InfoIcon color="disabled" fontSize="small" />
              <Typography variant="caption" color="text.secondary">
                {t('signIn.terms')}
                <Link href="/terms" sx={{ ml: 0.5 }}>
                  {t('signIn.termsLink')}
                </Link>
              </Typography>
            </Box>
            
            <Stack spacing={2}>
              <Button variant="contained" size="large" fullWidth>
                {t('signIn.submit')}
              </Button>
              <Button variant="text" size="small">
                {t('signIn.passwordLogin')}
              </Button>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Share Modal */}
      <Dialog open={shareModalOpen} onClose={handleShareModalClose} maxWidth="xs" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{t('share.title')}</Typography>
            <IconButton onClick={handleShareModalClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 4, textAlign: 'center' }}>
            <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
              {[
                { icon: <Facebook />, label: 'Facebook' },
                { icon: <Twitter />, label: 'Twitter' },
                { icon: <Instagram />, label: 'Instagram' },
                { icon: <WhatsApp />, label: 'WhatsApp' },
                { icon: <Telegram />, label: 'Telegram' }
              ].map((social) => (
                <Tooltip key={social.label} title={social.label}>
                  <IconButton
                    sx={{
                      border: '2px solid',
                      borderColor: 'grey.300',
                      width: 64,
                      height: 64
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
            
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                fullWidth
                value="https://netthemes.ir/html/parnet"
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        onClick={() => navigator.clipboard.writeText('https://netthemes.ir/html/parnet')}
                      >
                        {t('share.copy')}
                      </Button>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiInputBase-input': {
                    direction: 'ltr',
                    textAlign: 'left'
                  }
                }}
              />
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Footer Component
const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const footerLinks = {
    company: [
      { text: t('footer.about'), href: '/about' },
      { text: t('footer.contact'), href: '/contact' }
    ],
    services: [
      { text: t('footer.refund'), href: '/refund' },
      { text: t('footer.terms'), href: '/terms' }
    ],
    additional: [
      { text: t('footer.corporate'), href: '/corporate' },
      { text: t('footer.agency'), href: '/agency' }
    ]
  };

  const socialLinks = [
    { icon: <Telegram />, label: 'Telegram', href: '#' },
    { icon: <Twitter />, label: 'Twitter', href: '#' },
    { icon: <YouTube />, label: 'YouTube', href: '#' },
    { icon: <Instagram />, label: 'Instagram', href: '#' },
    { icon: <LinkedIn />, label: 'LinkedIn', href: '#' }
  ];

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', mt: 'auto', position: 'relative' }}>
      {/* Top Border */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 5 }}>
        <Container maxWidth="xl">
          <Divider />
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ pb: 5 }}>
        <Grid container spacing={4}>
          {/* Logo and Contact Info */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box component="img" src={logo} alt="پرتو سیر" width={80} />
                <Typography variant="h4" fontWeight="bold">
                  پرتو سیر
                </Typography>
              </Stack>

              <Stack spacing={1}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography variant="body2">تلفن‌ :‌</Typography>
                  <Box dir="ltr">
                    <Link href="tel:+981133243056" color="inherit" display="block">
                      01133243056
                    </Link>
                    <Link href="tel:+989117976855" color="inherit" display="block">
                      09117976855
                    </Link>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center" gap={1}>
                  <LocationIcon fontSize="small" />
                  <Typography variant="body2">
                    مازندران، ساری، ترمینال دولت، پرتو سیر ایرانیان
                  </Typography>
                </Box>
              </Stack>

              {/* Badges */}
              <Stack direction="row" spacing={1}>
                <Link href="#">
                  <Box component="img" src={enamadBadge} alt="نماد الکترونیک" height={60} />
                </Link>
                <Link href="#">
                  <Box component="img" src={kasbokarBadge} alt="کسب‌وکار" height={60} />
                </Link>
                <Link href="#">
                  <Box component="img" src={reziBadge} alt="رضایتمندی" height={60} />
                </Link>
              </Stack>
            </Stack>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={6}>
            {isMobile ? (
              // Mobile Accordion
              <Stack spacing={2}>
                {Object.entries(footerLinks).map(([key, links]) => (
                  <Accordion key={key} disableGutters elevation={0}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography fontWeight="bold">{t(`footer.${key}`)}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack spacing={2}>
                        {links.map((link) => (
                          <Link key={link.text} href={link.href} color="inherit" underline="hover">
                            {link.text}
                          </Link>
                        ))}
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Stack>
            ) : (
              // Desktop Grid
              <Grid container spacing={3}>
                <Grid item xs={6} md={4}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('footer.company')}
                  </Typography>
                  <Stack spacing={2}>
                    {footerLinks.company.map((link) => (
                      <Link key={link.text} href={link.href} color="inherit" underline="hover">
                        {link.text}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
                
                <Grid item xs={6} md={4}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('footer.services')}
                  </Typography>
                  <Stack spacing={2}>
                    {footerLinks.services.map((link) => (
                      <Link key={link.text} href={link.href} color="inherit" underline="hover">
                        {link.text}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
                
                <Grid item xs={6} md={4}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('footer.additional')}
                  </Typography>
                  <Stack spacing={2}>
                    {footerLinks.additional.map((link) => (
                      <Link key={link.text} href={link.href} color="inherit" underline="hover">
                        {link.text}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>

      {/* Copyright and Social */}
      <Box sx={{ bgcolor: 'grey.50', py: 5 }}>
        <Container maxWidth="xl">
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" color="text.secondary" paragraph>
                هرگونه استفاده از این موارد بدون مجوز کتبی و صریح از شرکت
                پرتو سیر، نقض حقوق مالکیت معنوی محسوب شده و پیگرد قانونی خواهد داشت.
              </Typography>
              <Typography variant="caption" color="text.secondary">
                <Link href="https://tameshkgroup.com" color="inherit" underline="hover">
                  © {new Date().getFullYear()} - طراحی سایت » گروه نرم افزاری تمشک «
                </Link>
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Stack 
                direction="row" 
                spacing={4} 
                justifyContent={{ xs: 'center', md: 'flex-end' }}
                alignItems="center"
              >
                {socialLinks.map((social) => (
                  <Tooltip key={social.label} title={social.label}>
                    <IconButton 
                      href={social.href} 
                      sx={{ color: 'text.secondary' }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Decorative SVG */}
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: -1 }}>
        <svg 
          width="100%" 
          height="150" 
          viewBox="0 0 900 150" 
          preserveAspectRatio="none"
          style={{ display: 'block' }}
        >
          <path 
            d="M0 0L75 25C150 50 300 100 450 95C600 90 750 40 825 15L900 0L900 150L825 150C750 150 600 150 450 150C300 150 150 150 75 150L0 150Z" 
            fill="#f7f8f9"
          />
          <path 
            d="M0 50L75 52.5C150 55 300 60 450 62.5C600 65 750 65 825 65L900 65L900 150L825 150C750 150 600 150 450 150C300 150 150 150 75 150L0 150Z" 
            fill="#e0e3e8"
          />
        </svg>
      </Box>
    </Box>
  );
};

// Updated Home Component with Header and Footer
const Home = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <Box component="main" sx={{ flexGrow: 1, pt: { xs: 7, md: 8 } }}>
        {/* Booking Section */}
        <BookingSection />

        {/* News Slider */}
        <NewsSlider />

        {/* Popular Routes */}
        <PopularRoutes />

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
                  src={busImage}
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
                <Box
                  component="img"
                  src={appImage}
                  alt={t('app.name')}
                  sx={{ 
                    width: '100%', 
                    maxWidth: 300,
                    borderRadius: 2,
                    boxShadow: 3
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
                      <Box
                        component="img"
                        src={qrCode}
                        alt="QR Code"
                        sx={{ 
                          width: 150,
                          borderRadius: 1
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
                  <Box
                    component="img"
                    src={luggageImage}
                    alt="Luggage"
                    sx={{ width: 200 }}
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

      <Footer />
    </Box>
  );
};

export default Home;