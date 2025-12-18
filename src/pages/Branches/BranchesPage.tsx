// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Paper,
//   useTheme,
//   useMediaQuery,
//   Chip,
//   IconButton
// } from '@mui/material';
// import {
//   LocationOn as LocationIcon,
//   Phone as PhoneIcon,
//   Person as PersonIcon,
//   Close as CloseIcon
// } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import L from 'leaflet';

// const BranchesPage: React.FC = () => {
//   const { t, i18n } = useTranslation();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

//   const getNeshanMapUrl = (lat: string, lng: string) => {
//     return `https://api.neshan.org/v4/static?key=service.c8299aba7c6346768feb579c1f9a2962&type=neshan&width=500&height=300&zoom=15&center=${lat},${lng}&markertoken=162341.urwAJgOr`;
//   };

//   const handleImageError = (branchId: string) => {
//     setImageErrors(prev => ({ ...prev, [branchId]: true }));
//   };

//   const branches = [
//     {
//       id: 'Taybad',
//       name: t('newprofile.mapList.branches.Taybad'),
//       location: '34.741073,60.791896',
//       lat: '34.741073',
//       lng: '60.791896',
//       staticMapUrl: getNeshanMapUrl('34.741073', '60.791896'),
//       phone: '05154539432',
//       address: t('newprofile.mapList.addresses.Taybad'),
//       manager: t('newprofile.mapList.managers.Taybad'),
//       image: './img/pages/about-us/top/1.jpg'
//     },
//     {
//       id: 'Zabol',
//       name: t('newprofile.mapList.branches.Zabol'),
//       location: '31.001623,61.479900',
//       lat: '31.001623',
//       lng: '61.479900',
//       staticMapUrl: getNeshanMapUrl('31.001623', '61.479900'),
//       phone: '05432295153',
//       address: t('newprofile.mapList.addresses.Zabol'),
//       manager: t('newprofile.mapList.managers.Zabol'),
//       image: './img/pages/about-us/top/2.jpg'
//     },
//     {
//       id: 'Qom',
//       name: t('newprofile.mapList.branches.Qom'),
//       location: '34.641437,50.882995',
//       lat: '34.641437',
//       lng: '50.882995',
//       staticMapUrl: getNeshanMapUrl('34.641437', '50.882995'),
//       phone: '02536644071',
//       address: t('newprofile.mapList.addresses.Qom'),
//       manager: t('newprofile.mapList.managers.Qom'),
//       image: './img/pages/why-us/1.jpg'
//     },
//     {
//       id: 'Sari',
//       name: t('newprofile.mapList.branches.Sari'),
//       location: '36.579219,53.072124',
//       lat: '36.579219',
//       lng: '53.072124',
//       staticMapUrl: getNeshanMapUrl('36.579219', '53.072124'),
//       phone: '01133407770',
//       address: t('newprofile.mapList.addresses.Sari'),
//       manager: t('newprofile.mapList.managers.Sari'),
//       image: './img/pages/why-us/2.jpg'
//     },
//     {
//       id: 'Ilam',
//       name: t('newprofile.mapList.branches.Ilam'),
//       location: '33.624011,46.402233',
//       lat: '33.624011',
//       lng: '46.402233',
//       staticMapUrl: getNeshanMapUrl('33.624011', '46.402233'),
//       phone: '',
//       address: t('newprofile.mapList.addresses.Ilam'),
//       manager: t('newprofile.mapList.managers.Ilam'),
//       image: './img/pages/why-us/1.jpg'
//     },
//     {
//       id: 'Ahvaz',
//       name: t('newprofile.mapList.branches.Ahvaz'),
//       location: '31.335302,48.632709',
//       lat: '31.335302',
//       lng: '48.632709',
//       staticMapUrl: getNeshanMapUrl('31.335302', '48.632709'),
//       phone: '',
//       address: t('newprofile.mapList.addresses.Ahvaz'),
//       manager: t('newprofile.mapList.managers.Ahvaz'),
//       image: './img/pages/why-us/2.jpg'
//     },
//     {
//       id: 'Mashhad',
//       name: t('newprofile.mapList.branches.Mashhad'),
//       location: '36.261970,59.593116',
//       lat: '36.261970',
//       lng: '59.593116',
//       staticMapUrl: getNeshanMapUrl('36.261970', '59.593116'),
//       phone: '05138584915',
//       address: t('newprofile.mapList.addresses.Mashhad'),
//       manager: t('newprofile.mapList.managers.Mashhad'),
//       image: './img/pages/why-us/1.jpg'
//     },
//     {
//       id: 'Chabahar',
//       name: t('newprofile.mapList.branches.Chabahar'),
//       location: '25.298286,60.694736',
//       lat: '25.298286',
//       lng: '60.694736',
//       staticMapUrl: getNeshanMapUrl('25.298286', '60.694736'),
//       phone: '09154540536',
//       address: t('newprofile.mapList.addresses.Chabahar'),
//       manager: t('newprofile.mapList.managers.Chabahar'),
//       image: './img/pages/why-us/2.jpg'
//     }
//   ];

//   // Group branches into groups of 2
//   const stationGroups = [
//     {
//       title: t('newprofile.mapList.group1'),
//       stations: branches.slice(0, 2)
//     },
//     {
//       title: t('newprofile.mapList.group2'),
//       stations: branches.slice(2, 4)
//     },
//     {
//       title: t('newprofile.mapList.group3'),
//       stations: branches.slice(4, 6)
//     },
//     {
//       title: t('newprofile.mapList.group4'),
//       stations: branches.slice(6, 8)
//     }
//   ];

//   const StationCard: React.FC<{ station: typeof branches[0] }> = ({ station }) => {
//     const handleMapClick = (e: React.MouseEvent) => {
//       e.preventDefault();
//       window.open(`https://neshan.org/maps/@${station.location},15z`, '_blank');
//     };

//     return (
//       <Card
//         sx={{
//           height: '100%',
         
//           display: 'flex',
//           flexDirection: 'column',
//           borderRadius: 3,
//           overflow: 'hidden',
//           transition: 'all 0.3s ease',
//           '&:hover': {
//             transform: 'translateY(-8px)',
//             boxShadow: 6
//           }
//         }}
//       >
//         {/* Station Image */}
//         {/* <Box
//           sx={{
//             height: 200,
//             overflow: 'hidden',
//             cursor: 'pointer'
//           }}
//           onClick={() => setSelectedImage(station.image)}
//         >
//           <Box
//             component="img"
//             src={station.image}
//             alt={station.name}
//             sx={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//               transition: 'transform 0.3s ease',
//               '&:hover': {
//                 transform: 'scale(1.1)'
//               }
//             }}
//           />
//         </Box> */}

//         <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
//           {/* Station Name */}
//           <Typography variant="h6" fontWeight="bold" gutterBottom color="primary.main">
//             {station.name} {t('newprofile.mapList.branch')}
//           </Typography>

//           {/* Address */}
//           <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 2 }}>
//             <LocationIcon sx={{ color: 'text.secondary', mt: 0.5, fontSize: 20 }} />
//             <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
//               {station.address}
//             </Typography>
//           </Box>

//           {/* Phone */}
//           {station.phone && (
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
//               <PhoneIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
//               <Typography 
//                 variant="body2" 
//                 component="a" 
//                 href={`tel:${station.phone}`}
//                 sx={{ 
//                   color: 'primary.main', 
//                   textDecoration: 'none',
//                   direction: 'ltr',
//                   display: 'block'
//                 }}
//               >
//                 {station.phone}
//               </Typography>
//             </Box>
//           )}

//           {/* Manager */}
//           {station.manager && station.manager !== '' && (
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
//               <PersonIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
//               <Typography variant="body2" color="text.secondary">
//                 {t('newprofile.mapList.manager')}: {station.manager}
//               </Typography>
//             </Box>
//           )}

//           {/* Map */}
//           <Box sx={{ mt: 2, borderRadius: 2, overflow: 'hidden', border: 1, borderColor: 'divider' }}>
//             {station.staticMapUrl && !imageErrors[station.id] ? (
//               <Box
//                 component="a"
//                 href={`https://neshan.org/maps/@${station.location},15z`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onClick={handleMapClick}
//                 sx={{ display: 'block', textDecoration: 'none' }}
//               >
//                 <Box
//                   component="img"
//                   src={station.staticMapUrl}
//                   alt={`${station.name} Map`}
//                   onError={() => handleImageError(station.id)}
//                   sx={{
//                     width: '100%',
//                     height: 150,
//                     objectFit: 'cover',
//                     transition: 'opacity 0.3s ease',
//                     '&:hover': {
//                       opacity: 0.9
//                     }
//                   }}
//                 />
//               </Box>
//             ) : (
//               <Box
//                 sx={{
//                   height: 150,
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   bgcolor: 'grey.100',
//                   p: 2,
//                   textAlign: 'center'
//                 }}
//               >
//                 <Typography variant="body2" color="text.secondary" gutterBottom>
//                   {t('newprofile.mapList.mapUnavailable')}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   component="a"
//                   href={`https://neshan.org/maps/@${station.location},15z`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   sx={{ 
//                     color: 'primary.main', 
//                     textDecoration: 'none',
//                     fontWeight: 'medium'
//                   }}
//                 >
//                   {t('newprofile.mapList.viewOnNeshan')}
//                 </Typography>
//               </Box>
//             )}
//           </Box>

//           {/* Status Chip */}
//           <Box sx={{ mt: 'auto', pt: 2 }}>
//             <Chip 
//               label={t('newprofile.mapList.status.active')} 
//               color="success" 
//               size="small" 
//               variant="outlined" 
//             />
//           </Box>
//         </CardContent>
//       </Card>
//     );
//   };

//   const StationSwiper: React.FC<{ stations: typeof branches }> = ({ stations }) => (
//     <Box sx={{ width: '100%', py: 2, direction: i18n.language === 'fa' ? 'rtl' : 'ltr' }}>
//       <Swiper
//         modules={[Autoplay, Navigation]}
//         spaceBetween={20}
//         slidesPerView={1}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         speed={1000}
//         loop={true}
//         navigation
//         breakpoints={{
//           480: { slidesPerView: 2 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 }
//         }}
//         style={{ padding: '10px 0' }}
//       >
//         {stations.map((station) => (
//           <SwiperSlide key={station.id}>
//             <StationCard station={station} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );

//   return (
//     <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           backgroundImage: 'url(./img/pages/index/booking/main-1.webp)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           py: 8
//         }}
//       >
//         <Container>
//           <Paper
//             elevation={8}
//             sx={{
//               bgcolor: 'background.paper',
//               borderRadius: 3,
//               p: { xs: 3, md: 5 },
//               textAlign: 'center',
//               backdropFilter: 'blur(10px)',
//               backgroundColor: 'rgba(255, 255, 255, 0.9)'
//             }}
//           >
//             <Typography 
//               variant="h3" 
//               fontWeight="bold" 
//               gutterBottom 
//               color="primary.main"
//               sx={{ 
//                 fontSize: { xs: 'h4.fontSize', md: 'h3.fontSize' }
//               }}
//             >
//               {t('newprofile.mapList.title')}
//             </Typography>
//             <Typography 
//               variant="h6" 
//               color="text.secondary" 
//               sx={{ 
//                 lineHeight: 1.8,
//                 fontSize: { xs: 'body1.fontSize', md: 'h6.fontSize' }
//               }}
//             >
//               {t('newprofile.mapList.subtitle')}
//             </Typography>
//           </Paper>
//         </Container>
//       </Box>

//       {/* Stations Section */}
//       <Container sx={{ py: 8 }}>
//         <Box
//           sx={{
//             bgcolor: 'grey.50',
//             border: 1,
//             borderColor: 'divider',
//             borderRadius: 3,
//             p: { xs: 2, md: 4 },
//             mb: 6
//           }}
//         >
//           <Grid container spacing={6}>
//             {stationGroups.map((group, groupIndex) => (
//               <Grid item xs={12} key={groupIndex}>
//                 {/* Group Title */}
//                 <Typography 
//                   variant="h5" 
//                   fontWeight="bold" 
//                   gutterBottom 
//                   color="secondary.main"
//                   sx={{ 
//                     textAlign: 'center',
//                     mb: 4,
//                     pb: 2,
//                     borderBottom: 2,
//                     borderColor: 'divider',
//                     fontSize: { xs: 'h6.fontSize', md: 'h5.fontSize' }
//                   }}
//                 >
//                   {/* {group.title} */}
//                 </Typography>

//                 {/* Stations Swiper */}
//                 <StationSwiper stations={group.stations} />
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* Additional Information */}
//         <Paper
//           elevation={2}
//           sx={{
//             p: 4,
//             textAlign: 'center',
//             bgcolor: 'primary.light',
//             color: 'primary.contrastText',
//             borderRadius: 3,
//             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
//           }}
//         >
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             {t('newprofile.mapList.info.title')}
//           </Typography>
//           <Typography variant="body1" sx={{ lineHeight: 1.8, maxWidth: 800, mx: 'auto' }}>
//             {t('newprofile.mapList.info.description')}
//           </Typography>
//         </Paper>
//       </Container>

//       {/* Services Overview */}
//       <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
//         <Container>
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
//                 {t('newprofile.mapList.services.title')}
//               </Typography>
//               <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
//                 {t('newprofile.mapList.services.description')}
//               </Typography>
              
//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//                 {[
//                   t('newprofile.mapList.services.bus'),
//                   t('newprofile.mapList.services.taxi'),
//                   t('newprofile.mapList.services.van'),
//                   t('newprofile.mapList.services.cargo')
//                 ].map((service, index) => (
//                   <Chip
//                     key={index}
//                     label={service}
//                     color="primary"
//                     variant="outlined"
//                     sx={{ mb: 1 }}
//                   />
//                 ))}
//               </Box>
//             </Grid>
            
//             <Grid item xs={12} md={6}>
//               <Box
//                 sx={{
//                   height: 300,
//                   background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//                   borderRadius: 3,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   color: 'white',
//                   textAlign: 'center',
//                   position: 'relative',
//                   overflow: 'hidden'
//                 }}
//               >
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     backgroundImage: 'url(https://api.neshan.org/v4/static?key=service.c8299aba7c6346768feb579c1f9a2962&type=neshan&width=600&height=300&zoom=5&center=32.4279,53.6880)',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     opacity: 0.3
//                   }}
//                 />
//                 <Box sx={{ position: 'relative', zIndex: 1 }}>
//                   <LocationIcon sx={{ fontSize: 64, mb: 2 }} />
//                   <Typography variant="h6" fontWeight="bold">
//                     {t('newprofile.mapList.services.map')}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Image Preview Modal */}
//       {selectedImage && (
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: 'rgba(0, 0, 0, 0.9)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             zIndex: 1300,
//             p: 2
//           }}
//           onClick={() => setSelectedImage(null)}
//         >
//           <IconButton
//             onClick={() => setSelectedImage(null)}
//             sx={{
//               position: 'absolute',
//               top: 20,
//               right: 20,
//               color: 'white',
//               bgcolor: 'rgba(0, 0, 0, 0.5)',
//               '&:hover': {
//                 bgcolor: 'rgba(0, 0, 0, 0.7)'
//               }
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//           <Box
//             component="img"
//             src={selectedImage}
//             alt="Preview"
//             sx={{
//               maxWidth: '90%',
//               maxHeight: '90%',
//               objectFit: 'contain',
//               borderRadius: 1
//             }}
//             onClick={(e) => e.stopPropagation()}
//           />
//         </Box>
//       )}

//       {/* Spacer */}
//       <Box sx={{ py: 8 }} />
//     </Box>
//   );
// };

// export default BranchesPage;


import React, { useState, useEffect } from 'react';
import Header from './../../components/home/Header';
import Footer from './../../components/home/Footer';

const BranchesPage = () => {
  const [theme, setTheme] = useState('light');
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [activeMenuAccordion, setActiveMenuAccordion] = useState(false);
  const [activeSlide1, setActiveSlide1] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const [activeSlide3, setActiveSlide3] = useState(0);
  const [activeSlide4, setActiveSlide4] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

  // داده‌های اسلایدرها
  const branchSlides1 = [
    {
      city: 'تایباد',
      address: 'پایانه تایباد، غرفه ۱',
      phone: '05432295153',
      manager: 'آقای رجب اکبری',
      image: './img/pages/about-us/top/1.jpg'
    },
    {
      city: 'زابل',
      address: 'زابل، میدان رستم، پایانه مسافربری غرفه ۱۳',
      phone: '05154539432',
      manager: 'آقای بهروز یزدانی',
      image: './img/pages/about-us/top/2.jpg'
    }
  ];

  const branchSlides2 = [
    {
      city: 'قم',
      address: 'پایانه قم، پایانه کوثر، جنب اتحادیه صنف',
      phone: '02536644071',
      manager: 'آقای نزار ابولسان',
      image: './img/pages/why-us/1.jpg'
    },
    {
      city: 'ساری',
      address: 'پایانه مسافربری دولت، بلوار دفاع مقدس',
      phone: '01133407770',
      manager: 'آقای ناصر کلانتری',
      image: './img/pages/why-us/2.jpg'
    }
  ];

  const branchSlides3 = [
    {
      city: 'ایلام',
      address: 'ایلام، بلوار شهدای چال سارا، پایانه مسافربری شهدای شهرداری ایلام',
      phone: '',
      manager: 'آقای ماشاءالله رحمتی',
      image: './img/pages/why-us/1.jpg'
    },
    {
      city: 'اهواز',
      address: 'اهواز، پایانه سیاحت، طبقه دوم',
      phone: '',
      manager: 'آقای حسین کلانتری',
      image: './img/pages/why-us/2.jpg'
    }
  ];

  const branchSlides4 = [
    {
      city: 'مشهد',
      address: 'مشهد، جنب پایانه امام رضا، نبش امام رضا ۶۹',
      phone: '05138584915',
      manager: 'آقای ناصر کلانتری',
      image: './img/pages/why-us/1.jpg'
    },
    {
      city: 'چابهار',
      address: 'بخش مرکزی چابهار، پایانه مسافربری چابهار',
      phone: '09154540536',
      manager: 'خانم بهناز یزدانی',
      image: './img/pages/why-us/2.jpg'
    }
  ];

  // اتوپلی برای اسلایدرها
  useEffect(() => {
    const interval1 = setInterval(() => {
      setActiveSlide1(prev => (prev + 1) % branchSlides1.length);
    }, 3000);

    const interval2 = setInterval(() => {
      setActiveSlide2(prev => (prev + 1) % branchSlides2.length);
    }, 3000);

    const interval3 = setInterval(() => {
      setActiveSlide3(prev => (prev + 1) % branchSlides3.length);
    }, 3000);

    const interval4 = setInterval(() => {
      setActiveSlide4(prev => (prev + 1) % branchSlides4.length);
    }, 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>پرتو سیر | ایستگاه ها</title>
        <link rel="stylesheet" href="./css/bootstrap-custom.css" />
        <link rel="stylesheet" href="./vendor/fonts/tabler/tabler-icons.css" />
        <link rel="stylesheet" href="./css/style.css" />
        <link rel="icon" type="image/x-icon" href="logo.ico" />
        <meta name="description" content="پرتوسیر ایرانیان ارائه‌دهنده بلیط اتوبوس، بلیط تاکسی و بلیط ون با بهترین قیمت و پشتیبانی ۲۴ ساعته. خرید آسان بلیت اتوبوس از پرتو سیر." />
        <meta name="keywords" content="پرتوسیر, پرتو سیر, بلیط اتوبوس, بلیت اتوبوس, بلیط تاکسی, بلیت تاکسی, بلیط ون, بلیت ون, پرتو سیر ایرانیان" />
        <meta name="author" content="پرتوسیر ایرانیان" />
        <meta name="robots" content="index, follow" />
      </head>

      <div className="par-tosir-app" dir="rtl" data-bs-theme={theme}>
        {/* ---------------------------- Offcanvas Menu ---------------------------- */}
        <div className={`offcanvas offcanvas-start ${showMenu ? 'show' : ''}`} id="offcanvasMenu" tabIndex="-1" aria-labelledby="offcanvasMenuLabel" style={showMenu ? {display: 'block', visibility: 'visible'} : {}}>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-muted" id="offcanvasMenuLabel">منو کاربری</h5>
            <button className="btn-close" type="button" onClick={() => setShowMenu(false)} aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="h-100 nt-flex-column">
              <div className="w-100 flex-grow-1">
                <div className="nt-flex-between-center gap-2 mb-4">
                  <div className="nt-flex-start-center">
                    <img src="./img/logo-m.png" alt="پرتو سیر" width="80" />
                  </div>
                  <button className="btnSwitch btn btn-lg btn-light" type="button" onClick={toggleTheme} aria-label="تغییر حالت روشن و تاریک سایت">
                    <i className={`ti ti-${theme === 'light' ? 'sun' : 'moon'} fs-5`} aria-hidden="true"></i>
                  </button>
                </div>
                <div className="accordion accordion-flush" id="accordionOffcanvasMenu">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${activeMenuAccordion ? '' : 'collapsed'} fs-5`} 
                        type="button" 
                        onClick={() => setActiveMenuAccordion(!activeMenuAccordion)}
                        aria-expanded={activeMenuAccordion}
                        aria-controls="accordionOffcanvasMenu1"
                      >
                        خدمات سفر
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeMenuAccordion ? 'show' : ''}`} id="accordionOffcanvasMenu1">
                      <div className="accordion-body">
                        <ul className="list-unstyled nt-flex-column">
                          <li>
                            <a className="btn btn-link link-dark fs-5" href="./index.html">
                              <i className="ti ti-bus fs-4" aria-hidden="true"></i>اتوبوس
                            </a>
                          </li>
                          <li>
                            <a className="btn btn-link link-dark fs-5" href="./booking-taxi.html">
                              <i className="ti ti-car fs-4" aria-hidden="true"></i>تاکسی
                            </a>
                          </li>
                          <li>
                            <a className="btn btn-link link-dark fs-5" href="./booking-van.html">
                              <i className="ti ti-rv-truck fs-4" aria-hidden="true"></i>ون
                            </a>
                          </li>
                          <li>
                            <a className="btn btn-link link-dark fs-5" href="./booking-bar.html">
                              <i className="ti ti-truck fs-4" aria-hidden="true"></i>باربری
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <nav className="nt-flex-column">
                  <a className="btn btn-link link-dark fs-5" href="./about-us.html">درباره ما</a>
                  <a className="btn btn-link link-dark fs-5" href="./contact.html">تماس با ما</a>
                  <a className="btn btn-link link-dark fs-5" href="./branches.html">ایستگاه ها</a>
                  <a className="btn btn-link link-dark fs-5" href="">بلیط های رزرو شده</a>
                </nav>
              </div>
              <div className="w-100 border-top py-3">
                <div className="nt-flex-column-center-center">
                  <div className="text-muted">پرتو سیر; همراه همیشگی سفرهای شما.</div>
                  <div className="nt-flex-start-center text-muted" role="contentinfo" aria-label="اطلاعات حق نشر">
                    <span className="visually-hidden">حق نشر ©</span>
                    <i className="ti ti-copyright fs-5" aria-hidden="true"></i>
                    ۱۴۰۴ پرتو سیر. تمامی حقوق محفوظ است.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------- end Offcanvas Menu -------------------------- */}

        {/* --------------------------- Offcanvas Profile -------------------------- */}
        <div className={`offcanvas offcanvas-start ${showProfile ? 'show' : ''}`} id="offcanvasProfile" tabIndex="-1" aria-labelledby="offcanvasProfileLabel" style={showProfile ? {display: 'block', visibility: 'visible'} : {}}>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasProfileLabel">پروفایل کاربری</h5>
            <button className="btn-close" type="button" onClick={() => setShowProfile(false)} aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="p-2">
              <div className="nt-flex-column-center-center mb-4">
                <div className="border border-primary rounded-circle position-relative">
                  <span className="position-absolute top-0 start-0 translate-middle badge rounded bg-success">
                    <i className="ti ti-checks fs-5" aria-hidden="true"></i>
                    <span className="visually-hidden">تایید شده</span>
                  </span>
                  <img src="./img/layouts/avatar/m1.png" alt="پرتو سیر" width="80" />
                </div>
                <div className="nt-flex-column mt-3">
                  <div className="profile-title">علی محمدی</div>
                  <div className="text-muted">09121234567</div>
                </div>
              </div>
              <div className="bg-secondary text-white rounded p-3 mb-4">
                <div className="nt-flex-between-start gap-2">
                  <div className="nt-flex-column gap-3">
                    <div className="nt-flex text-light">
                      <i className="ti ti-wallet fs-3" aria-hidden="true"></i>
                      موجودی حساب
                    </div>
                    <a className="btn btn-sm btn-secondary" href="./profile-transactions.html">
                      <i className="ti ti-plus fs-5" aria-hidden="true"></i>
                      <span className="small">افزایش موجودی</span>
                    </a>
                  </div>
                  <div className="nt-flex align-items-center">
                    <div className="badge text-bg-light">۰</div>
                    <div className="small text-light ms-2">تومان</div>
                  </div>
                </div>
              </div>
              <div className="d-grid mb-4">
                <a className="btn btn-lg justify-content-start btn-outline-primary" href="./profile-plus.html">
                  <i className="ti ti-sparkles fs-5" aria-hidden="true"></i>
                  <div className="text-muted fw-bold small">حساب ویژه پرتو سیر</div>
                </a>
              </div>
              <div className="text-muted fw-bold small mb-3">منو کاربری</div>
              <nav className="profile-menu">
                <a className="btn btn-outline-light mb-2" href="./profile.html">
                  <i className="ti ti-user fs-4" aria-hidden="true"></i>حساب کاربری
                </a>
                <a className="btn btn-outline-light mb-2" href="./profile-orders.html">
                  <i className="ti ti-luggage fs-4" aria-hidden="true"></i>سفر های من
                </a>
                <a className="btn btn-outline-light mb-2" href="./profile-passengers.html">
                  <i className="ti ti-users-group fs-4" aria-hidden="true"></i>لیست های مسافران
                </a>
                <a className="btn btn-outline-light mb-2" href="./profile-wishlist.html">
                  <i className="ti ti-heart fs-4" aria-hidden="true"></i>علاقه مندی ها
                </a>
                <a className="btn btn-outline-light mb-2" href="./profile-ticketing.html">
                  <i className="ti ti-headset fs-4" aria-hidden="true"></i>درخواست پشتیبانی
                </a>
                <a className="btn btn-outline-light" href="./profile-transactions.html">
                  <i className="ti ti-businessplan fs-4" aria-hidden="true"></i>موجودی و اعتبار من
                </a>
              </nav>
            </div>
          </div>
        </div>
        {/* ------------------------- end Offcanvas Profile ------------------------ */}

        {/* -------------------------------- Header -------------------------------- */}
        <Header 
          theme={theme}
          toggleTheme={toggleTheme}
          setShowMenu={setShowMenu}
        />
        {/* ------------------------------ end Header ------------------------------ */}

        {/* -------------------------------- Main ---------------------------------- */}
        <main className="main">
          {/* Hero Section */}
          <section className="booking-wrapper" style={{backgroundImage: 'url(img/pages/index/booking/sliderf.webp)'}}>
            <div className="container g-0 booking-inner shadow-sm">
              <div className="text-center bg-white py-5 px-4 rounded">
                <div className="fs-4 fw-bold mb-3">ایستگاه های پرتو سیر</div>
                <p className="lead lh-lg text-muted">پرتو سیر: همراه همیشگی سفرهای شما</p>
              </div>
            </div>
          </section>

          {/* Branches Section */}
          <section className="container py-5 mb-5">
            <div className="row gap-4">
              <div className="row g-4 bg-light-subtle border border-1 rounded">
                <div className="col-12 col-md-12">
                  {/* First Swiper */}
                  <section className="swiper pb-5" style={{overflow: 'hidden', position: 'relative'}}>
                    <div className="swiper-wrapper" style={{
                      display: 'flex',
                      transition: 'transform 0.5s ease',
                      gap: '20px',
                      padding: '0 10px'
                    }}>
                      {branchSlides1.map((branch, index) => (
                        <div key={index} className="swiper-slide swiper-no-swiping" style={{
                          flex: '0 0 auto',
                          width: 'calc(100% / 2 - 10px)',
                          minWidth: '300px'
                        }}>
                          <div style={{padding: '20px'}}>
                            <p className="lead lh-lg text-muted">
                              <strong>{branch.city}</strong><br/>
                              آدرس:<br/>
                              {branch.address}<br/>
                              تلفن:<br/>
                              {branch.phone}<br/>
                              مدیر:<br/>
                              {branch.manager}
                            </p>
                            <img 
                              className="lozad rounded" 
                              src={branch.image} 
                              alt="پرتو سیر"
                              style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                marginTop: '15px'
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="swiper-scrollbar" style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '10px',
                      right: '10px',
                      height: '4px',
                      backgroundColor: 'rgba(0,0,0,0.1)',
                      borderRadius: '2px'
                    }}>
                      <div style={{
                        width: '50%',
                        height: '100%',
                        backgroundColor: '#0d6efd',
                        borderRadius: '2px'
                      }}></div>
                    </div>
                  </section>

                  {/* Second Swiper */}
                  <section className="container mb-5">
                    <div className="swiper pb-5" style={{overflow: 'hidden', position: 'relative'}}>
                      <div className="swiper-wrapper" style={{
                        display: 'flex',
                        transition: 'transform 0.5s ease',
                        gap: '10px',
                        padding: '0 10px'
                      }}>
                        {branchSlides2.map((branch, index) => (
                          <div key={index} className="swiper-slide" style={{
                            flex: '0 0 auto',
                            width: 'calc(100% / 2 - 5px)',
                            minWidth: '300px'
                          }}>
                            <div style={{padding: '20px'}}>
                              <p className="lead lh-lg text-muted">
                                <strong>{branch.city}</strong><br/>
                                آدرس:<br/>
                                {branch.address}<br/>
                                تلفن:<br/>
                                {branch.phone}<br/>
                                مدیر:<br/>
                                {branch.manager}
                              </p>
                              <img 
                                className="lozad rounded" 
                                src={branch.image} 
                                alt="پرتو سیر"
                                style={{
                                  width: '100%',
                                  height: '200px',
                                  objectFit: 'cover',
                                  marginTop: '15px'
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="swiper-scrollbar" style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        right: '10px',
                        height: '4px',
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        borderRadius: '2px'
                      }}>
                        <div style={{
                          width: '50%',
                          height: '100%',
                          backgroundColor: '#0d6efd',
                          borderRadius: '2px'
                        }}></div>
                      </div>
                    </div>
                  </section>

                  {/* Third Swiper */}
                  <section className="container mb-5">
                    <div className="swiper pb-5" style={{overflow: 'hidden', position: 'relative'}}>
                      <div className="swiper-wrapper" style={{
                        display: 'flex',
                        transition: 'transform 0.5s ease',
                        gap: '10px',
                        padding: '0 10px'
                      }}>
                        {branchSlides3.map((branch, index) => (
                          <div key={index} className="swiper-slide" style={{
                            flex: '0 0 auto',
                            width: 'calc(100% / 2 - 5px)',
                            minWidth: '300px'
                          }}>
                            <div style={{padding: '20px'}}>
                              <p className="lead lh-lg text-muted">
                                <strong>{branch.city}</strong><br/>
                                آدرس:<br/>
                                {branch.address}<br/>
                                تلفن:<br/>
                                {branch.phone}<br/>
                                مدیر:<br/>
                                {branch.manager}
                              </p>
                              <img 
                                className="lozad rounded" 
                                src={branch.image} 
                                alt="پرتو سیر"
                                style={{
                                  width: '100%',
                                  height: '200px',
                                  objectFit: 'cover',
                                  marginTop: '15px'
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="swiper-scrollbar" style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        right: '10px',
                        height: '4px',
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        borderRadius: '2px'
                      }}>
                        <div style={{
                          width: '50%',
                          height: '100%',
                          backgroundColor: '#0d6efd',
                          borderRadius: '2px'
                        }}></div>
                      </div>
                    </div>
                  </section>

                  {/* Fourth Swiper */}
                  <section className="container mb-5">
                    <div className="swiper pb-5" style={{overflow: 'hidden', position: 'relative'}}>
                      <div className="swiper-wrapper" style={{
                        display: 'flex',
                        transition: 'transform 0.5s ease',
                        gap: '10px',
                        padding: '0 10px'
                      }}>
                        {branchSlides4.map((branch, index) => (
                          <div key={index} className="swiper-slide" style={{
                            flex: '0 0 auto',
                            width: 'calc(100% / 2 - 5px)',
                            minWidth: '300px'
                          }}>
                            <div style={{padding: '20px'}}>
                              <p className="lead lh-lg text-muted">
                                <strong>{branch.city}</strong><br/>
                                آدرس:<br/>
                                {branch.address}<br/>
                                تلفن:<br/>
                                {branch.phone}<br/>
                                مدیر:<br/>
                                {branch.manager}
                              </p>
                              <img 
                                className="lozad rounded" 
                                src={branch.image} 
                                alt="پرتو سیر"
                                style={{
                                  width: '100%',
                                  height: '200px',
                                  objectFit: 'cover',
                                  marginTop: '15px'
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="swiper-scrollbar" style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        right: '10px',
                        height: '4px',
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        borderRadius: '2px'
                      }}>
                        <div style={{
                          width: '50%',
                          height: '100%',
                          backgroundColor: '#0d6efd',
                          borderRadius: '2px'
                        }}></div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>

          <div className="py-5"></div>
        </main>
        {/* ------------------------------ end Main -------------------------------- */}

        {/* -------------------------------- Footer -------------------------------- */}
        <Footer />
        {/* ------------------------------ end Footer ------------------------------ */}

        {/* ------------------------------- Scripts ------------------------------- */}
        <script src="./vendor/lib/filterizr/vanilla.filterizr.min.js"></script>
        <script src="./vendor/lib/lozad/lozad.min.js"></script>
        <script src="./vendor/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="./vendor/lib/swiper/swiper-bundle.min.css" />
        <script src="./vendor/lib/swiper/swiper-bundle.min.js"></script>
        <link rel="stylesheet" href="./vendor/lib/jalaliDatePicker/jalalidatepicker.min.css" />
        <script src="./vendor/lib/jalaliDatePicker/jalalidatepicker.min.js"></script>
        <link rel="stylesheet" href="./vendor/lib/tom-select/tom-select.min.css" />
        <script src="./vendor/lib/tom-select/tom-select.complete.min.js"></script>
        <link rel="stylesheet" href="./vendor/lib/nouislider/nouislider.min.css" />
        <script src="./vendor/lib/nouislider/nouislider.min.js"></script>
        <script src="./js/script.js"></script>
      </div>
    </>
  );
};

export default BranchesPage;