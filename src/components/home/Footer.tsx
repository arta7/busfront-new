
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
//   useMediaQuery,
//   AppBar,
//   Toolbar,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Divider,
//   Avatar,
//   Badge,
//   Menu,
//   MenuItem as MuiMenuItem,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Link,
//   InputAdornment,
//   ListItemIcon,
//   Tooltip,
//   Stack,
//   useScrollTrigger,
//   Slide
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
//   Luggage as LuggageIcon,
//   Menu as MenuIcon,
//   Close as CloseIcon,
//   Person as PersonIcon,
//   PersonOutline as PersonOutlineIcon,
//   DirectionsBus as BusIcon,
//   // Car as CarIcon,
//   LocalShipping as TruckIcon,
//   FlightTakeoff as FlightTakeoffIcon,
//   Info as InfoIcon,
//   Email as EmailIcon,
//   Phone as PhoneIcon,
//   LocationOn as LocationIcon,
//   Facebook,
//   Twitter,
//   Instagram,
//   WhatsApp,
//   Telegram,
//   YouTube,
//   LinkedIn,
//   Brightness4,
//   Brightness7,
//   Home as HomeIcon,
//   AccountCircle,
//   ShoppingBag,
//   Favorite,
//   Headset,
//   Business,
//   Wallet,
//   ChevronRight,
//   Share,
//   QrCode
// } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';
// import NewsSlider from '../../components/home/NewsSlider';
// import PopularRoutes from '../../components/home/PopularRoutes';
// import FAQSection from '../../components/home/FAQSection';
// import BookingSection from '../../components/home/BookingSection';

// // تصاویر - فرض می‌کنیم در پوشه assets قرار دارند
// import logo from '../../img/logo-m.png';
// import busImage from '../../img/pages/index/bus.png';
// import appImage from '../../img/pages/index/app.png';
// import qrCode from '../../img/pages/index/qr.png';
// import luggageImage from '../../img/pages/index/luggage.png';
// import enamadBadge from '../../img/layouts/footer/badges/enamad.jpg';
// import kasbokarBadge from '../../img/layouts/footer/badges/kasbokar.jpg';
// import reziBadge from '../../img/layouts/footer/badges/rezi.jpg';
// import persepolisImage from '../../img/pages/index/slider/Persepolis.jpg';
// import shirazImage from '../../img/pages/index/slider/Shiraz.jpg';


// const Footer = () => {
//     const { t } = useTranslation();
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
//     const footerLinks = {
//       company: [
//         { text: t('newprofile.footer.about'), href: '/about' },
//         { text: t('newprofile.footer.contact'), href: '/contact' }
//       ],
//       services: [
//         { text: t('newprofile.footer.refund'), href: '/refund' },
//         { text: t('newprofile.footer.terms'), href: '/terms' }
//       ],
//       additional: [
//         { text: t('newprofile.footer.corporate'), href: '/corporate' },
//         { text: t('newprofile.footer.agency'), href: '/agency' }
//       ]
//     };
  
//     const socialLinks = [
//       { icon: <Telegram />, label: 'Telegram', href: '#' },
//       { icon: <Twitter />, label: 'Twitter', href: '#' },
//       { icon: <YouTube />, label: 'YouTube', href: '#' },
//       { icon: <Instagram />, label: 'Instagram', href: '#' },
//       { icon: <LinkedIn />, label: 'LinkedIn', href: '#' }
//     ];
  
//     return (
//       <Box component="footer" sx={{ bgcolor: 'background.paper', mt: 'auto', position: 'relative' }}>
//         {/* Top Border */}
//         <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 5 }}>
//           <Container maxWidth="xl">
//             <Divider />
//           </Container>
//         </Box>
  
//         {/* Main Content */}
//         <Container maxWidth="xl" sx={{ pb: 5 }}>
//           <Grid container spacing={4}>
//             {/* Logo and Contact Info */}
//             <Grid item xs={12} md={6}>
//               <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }}>
//                 <Stack direction="row" alignItems="center" spacing={2}>
//                   <Box component="img" src={logo} alt="پرتو سیر" width={80} />
//                   <Typography variant="h4" fontWeight="bold">
//                     پرتو سیر
//                   </Typography>
//                 </Stack>
  
//                 <Stack spacing={1}>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <Typography variant="body2">تلفن‌ :‌</Typography>
//                     <Box dir="ltr">
//                       <Link href="tel:+981133243056" color="inherit" display="block">
//                         01133243056
//                       </Link>
//                       <Link href="tel:+989117976855" color="inherit" display="block">
//                         09117976855
//                       </Link>
//                     </Box>
//                   </Box>
  
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <LocationIcon fontSize="small" />
//                     <Typography variant="body2">
//                       مازندران، ساری، ترمینال دولت، پرتو سیر ایرانیان
//                     </Typography>
//                   </Box>
//                 </Stack>
  
//                 {/* Badges */}
//                 <Stack direction="row" spacing={1}>
//                   <Link href="#">
//                     <Box component="img" src={enamadBadge} alt="نماد الکترونیک" height={60} />
//                   </Link>
//                   <Link href="#">
//                     <Box component="img" src={kasbokarBadge} alt="کسب‌وکار" height={60} />
//                   </Link>
//                   <Link href="#">
//                     <Box component="img" src={reziBadge} alt="رضایتمندی" height={60} />
//                   </Link>
//                 </Stack>
//               </Stack>
//             </Grid>
  
//             {/* Navigation Links */}
//             <Grid item xs={12} md={6}>
//               {isMobile ? (
//                 // Mobile Accordion
//                 <Stack spacing={2}>
//                   {Object.entries(footerLinks).map(([key, links]) => (
//                     <Accordion key={key} disableGutters elevation={0}>
//                       <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                         <Typography fontWeight="bold">{t(`footer.${key}`)}</Typography>
//                       </AccordionSummary>
//                       <AccordionDetails>
//                         <Stack spacing={2}>
//                           {links.map((link) => (
//                             <Link key={link.text} href={link.href} color="inherit" underline="hover">
//                               {link.text}
//                             </Link>
//                           ))}
//                         </Stack>
//                       </AccordionDetails>
//                     </Accordion>
//                   ))}
//                 </Stack>
//               ) : (
//                 // Desktop Grid
//                 <Grid container spacing={3}>
//                   <Grid item xs={6} md={4}>
//                     <Typography variant="h6" fontWeight="bold" gutterBottom>
//                       {t('newprofile.footer.company')}
//                     </Typography>
//                     <Stack spacing={2}>
//                       {footerLinks.company.map((link) => (
//                         <Link key={link.text} href={link.href} color="inherit" underline="hover">
//                           {link.text}
//                         </Link>
//                       ))}
//                     </Stack>
//                   </Grid>
                  
//                   <Grid item xs={6} md={4}>
//                     <Typography variant="h6" fontWeight="bold" gutterBottom>
//                       {t('newprofile.footer.services')}
//                     </Typography>
//                     <Stack spacing={2}>
//                       {footerLinks.services.map((link) => (
//                         <Link key={link.text} href={link.href} color="inherit" underline="hover">
//                           {link.text}
//                         </Link>
//                       ))}
//                     </Stack>
//                   </Grid>
                  
//                   {/* <Grid item xs={6} md={4}>
//                     <Typography variant="h6" fontWeight="bold" gutterBottom>
//                       {t('newprofile.footer.additional')}
//                     </Typography>
//                     <Stack spacing={2}>
//                       {footerLinks.additional.map((link) => (
//                         <Link key={link.text} href={link.href} color="inherit" underline="hover">
//                           {link.text}
//                         </Link>
//                       ))}
//                     </Stack>
//                   </Grid> */}
//                 </Grid>
//               )}
//             </Grid>
//           </Grid>
//         </Container>
  
//         {/* Copyright and Social */}
//         <Box sx={{ bgcolor: 'grey.50', py: 5 }}>
//           <Container maxWidth="xl">
//             <Grid container alignItems="center" spacing={3}>
//               <Grid item xs={12} md={6}>
//                 <Typography variant="body2" color="text.secondary" paragraph>
//                   هرگونه استفاده از این موارد بدون مجوز کتبی و صریح از شرکت
//                   پرتو سیر، نقض حقوق مالکیت معنوی محسوب شده و پیگرد قانونی خواهد داشت.
//                 </Typography>
//                 <Typography variant="caption" color="text.secondary">
//                   <Link href="https://tameshkgroup.com" color="inherit" underline="hover">
//                     © {new Date().getFullYear()} - طراحی سایت » گروه نرم افزاری تمشک «
//                   </Link>
//                 </Typography>
//               </Grid>
              
//               <Grid item xs={12} md={6}>
//                 <Stack 
//                   direction="row" 
//                   spacing={4} 
//                   justifyContent={{ xs: 'center', md: 'flex-end' }}
//                   alignItems="center"
//                 >
//                   {socialLinks.map((social) => (
//                     <Tooltip key={social.label} title={social.label}>
//                       <IconButton 
//                         href={social.href} 
//                         sx={{ color: 'text.secondary' }}
//                         aria-label={social.label}
//                       >
//                         {social.icon}
//                       </IconButton>
//                     </Tooltip>
//                   ))}
//                 </Stack>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>
  
//         {/* Decorative SVG */}
//         <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: -1 }}>
//           <svg 
//             width="100%" 
//             height="150" 
//             viewBox="0 0 900 150" 
//             preserveAspectRatio="none"
//             style={{ display: 'block' }}
//           >
//             <path 
//               d="M0 0L75 25C150 50 300 100 450 95C600 90 750 40 825 15L900 0L900 150L825 150C750 150 600 150 450 150C300 150 150 150 75 150L0 150Z" 
//               fill="#f7f8f9"
//             />
//             <path 
//               d="M0 50L75 52.5C150 55 300 60 450 62.5C600 65 750 65 825 65L900 65L900 150L825 150C750 150 600 150 450 150C300 150 150 150 75 150L0 150Z" 
//               fill="#e0e3e8"
//             />
//           </svg>
//         </Box>
//       </Box>
//     );
//   };


//   export default Footer;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Footer = () => {
//   const navigate = useNavigate();

//   const handleExternalLink = (url) => {
//     window.open(url, '_blank');
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <footer className="footer">
//       {/* top border */}
//       <div className="container border-bottom mb-5"></div>
      
//       {/* content */}
//       <div className="footer-content">
//         <div className="container">
//           <div className="row g-4">
//             {/* logo & contact info */}
//             <div className="col-12 col-md-6">
//               <div className="nt-flex-column-start-center align-items-md-start gap-2">
//                 <div className="nt-flex-start-center gap-2 mb-3">
//                   <img src="/img/logo-m.png" alt="پرتو سیر" width="80" />
//                   <h1 className="fs-2 fw-bold mb-0">پرتو سیر</h1>
//                 </div>
//                 <div className="nt-flex gap-1">
//                   تلفن‌ :‌
//                   <div dir="ltr">
//                     <a 
//                       className="link" 
//                       href="tel:+981133243056"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         window.location.href = 'tel:+981133243056';
//                       }}
//                     >
//                       01133243056
//                     </a>
//                     <br />
//                     <a 
//                       className="link" 
//                       href="tel:+989117976855"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         window.location.href = 'tel:+989117976855';
//                       }}
//                     >
//                       09117976855
//                     </a>
//                   </div>
//                 </div>
//                 <p>آدرس : مازندران، ساری، ترمینال دولت، پرتو سیر ایرانیان</p>
//                 <div className="mb-4"></div>
//                 <nav className="nt-flex">
//                   <button 
//                     className="link footer-badge" 
//                     onClick={() => handleExternalLink('https://enamad.ir')}
//                   >
//                     <img src="/img/layouts/footer/badges/enamad.jpg" alt="نماد اعتماد الکترونیک" />
//                   </button>
//                   <button 
//                     className="link footer-badge" 
//                     onClick={() => handleExternalLink('https://kasbokar.com')}
//                   >
//                     <img src="/img/layouts/footer/badges/kasbokar.jpg" alt="نماد کسب و کار الکترونیک" />
//                   </button>
//                   <button 
//                     className="link footer-badge" 
//                     onClick={() => handleExternalLink('https://rezi.ir')}
//                   >
//                     <img src="/img/layouts/footer/badges/rezi.jpg" alt="نماد رسا" />
//                   </button>
//                 </nav>
//               </div>
//             </div>
            
//             {/* mobile accordion nav */}
//             <div className="col-12 col-md-6 d-md-none">
//               <div className="accordion accordion-flush" id="footerAccordionNav">
//                 <div className="accordion-item">
//                   <h2 className="accordion-header">
//                     <button 
//                       className="accordion-button collapsed fw-bold" 
//                       type="button" 
//                       data-bs-toggle="collapse" 
//                       data-bs-target="#footerAccordionNav1" 
//                       aria-expanded="false" 
//                       aria-controls="footerAccordionNav1"
//                     >
//                       پرتو سیر
//                     </button>
//                   </h2>
//                   <div className="accordion-collapse collapse" id="footerAccordionNav1" data-bs-parent="#footerAccordionNav">
//                     <div className="accordion-body">
//                       <div className="d-grid gap-3">
//                         <button 
//                           className="link text-start" 
//                           onClick={() => handleNavigation('/about-us')}
//                         >
//                           درباره ما
//                         </button>
//                         <button 
//                           className="link text-start" 
//                           onClick={() => handleNavigation('/contact')}
//                         >
//                           تماس با ما
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="accordion-item">
//                   <h2 className="accordion-header">
//                     <button 
//                       className="accordion-button collapsed fw-bold" 
//                       type="button" 
//                       data-bs-toggle="collapse" 
//                       data-bs-target="#footerAccordionNav2" 
//                       aria-expanded="false" 
//                       aria-controls="footerAccordionNav2"
//                     >
//                       خدمات مشتریان
//                     </button>
//                   </h2>
//                   <div className="accordion-collapse collapse" id="footerAccordionNav2" data-bs-parent="#footerAccordionNav">
//                     <div className="accordion-body">
//                       <div className="d-grid gap-3">
//                         <button 
//                           className="link text-start" 
//                           onClick={() => handleNavigation('/refund')}
//                         >
//                           راهنمای استرداد
//                         </button>
//                         <button 
//                           className="link text-start" 
//                           onClick={() => handleNavigation('/terms')}
//                         >
//                           قوانین و مقررات
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="accordion-item">
//                   <h2 className="accordion-header">
//                     <button 
//                       className="accordion-button collapsed fw-bold" 
//                       type="button" 
//                       data-bs-toggle="collapse" 
//                       data-bs-target="#footerAccordionNav3" 
//                       aria-expanded="false" 
//                       aria-controls="footerAccordionNav3"
//                     >
//                       اطلاعات تکمیلی
//                     </button>
//                   </h2>
//                   <div className="accordion-collapse collapse" id="footerAccordionNav3" data-bs-parent="#footerAccordionNav">
//                     <div className="accordion-body">
//                       <div className="d-grid gap-3">
//                         <button 
//                           className="link text-start" 
//                           onClick={() => handleNavigation('/corporate')}
//                         >
//                           فروش سازمانی
//                         </button>
//                         <button 
//                           className="link text-start" 
//                           onClick={() => handleNavigation('/agencies')}
//                         >
//                           همکاری با آژانس ها
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* desktop nav */}
//             <div className="col-12 col-md-6 d-none d-md-block">
//               <div className="row g-3">
//                 <div className="col-6 col-md-4">
//                   <h5 className="fs-5 fw-bold mb-4">پرتو سیر</h5>
//                   <div className="d-grid gap-3">
//                     <button 
//                       className="link text-start" 
//                       onClick={() => handleNavigation('/about-us')}
//                     >
//                       درباره ما
//                     </button>
//                     <button 
//                       className="link text-start" 
//                       onClick={() => handleNavigation('/contact')}
//                     >
//                       تماس با ما
//                     </button>
//                   </div>
//                 </div>
//                 <div className="col-6 col-md-4">
//                   <h5 className="fs-5 fw-bold mb-4">خدمات مشتریان</h5>
//                   <div className="d-grid gap-3">
//                     <button 
//                       className="link text-start" 
//                       onClick={() => handleNavigation('/refund')}
//                     >
//                       راهنمای استرداد
//                     </button>
//                     <button 
//                       className="link text-start" 
//                       onClick={() => handleNavigation('/terms')}
//                     >
//                       قوانین و مقررات
//                     </button>
//                   </div>
//                 </div>
//                 <div className="col-6 col-md-4">
//                   <h5 className="fs-5 fw-bold mb-4">اطلاعات تکمیلی</h5>
//                   <div className="d-grid gap-3">
//                     <button 
//                       className="link text-start" 
//                       onClick={() => handleNavigation('/corporate')}
//                     >
//                       فروش سازمانی
//                     </button>
//                     <button 
//                       className="link text-start" 
//                       onClick={() => handleNavigation('/agencies')}
//                     >
//                       همکاری با آژانس ها
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* copyright section */}
//       <div className="footer-copyright">
//         <div className="container">
//           <div className="row py-5">
//             <div className="col-12 col-md">
//               <p className="text-muted lh-lg small" role="contentinfo" aria-label="اطلاعات حق نشر">
//                 هرگونه استفاده از این موارد بدون مجوز کتبی و صریح از شرکت پرتو سیر،
//                 نقض حقوق مالکیت معنوی محسوب شده و پیگرد قانونی خواهد داشت.
//                 &nbsp;&nbsp;&nbsp;
//                 <button 
//                   className="link" 
//                   onClick={() => handleExternalLink('https://tameshkgroup.com')}
//                 >
//                   © ۲۰۲۵ - طراحی سایت » گروه نرم افزاری تمشک «
//                 </button>
//               </p>
//             </div>
//             <div className="col-12 col-md-auto">
//               <nav className="nt-flex-center-center gap-4 justify-content-md-start" aria-label="پیوند های شبکه های اجتماعی">
//                 <button 
//                   className="link" 
//                   onClick={() => handleExternalLink('https://t.me/pertosir')}
//                   aria-label="در تلگرام به ما بپیوندید"
//                 >
//                   <i className="ti ti-brand-telegram fs-2" aria-hidden="true"></i>
//                 </button>
//                 <button 
//                   className="link" 
//                   onClick={() => handleExternalLink('https://x.com/pertosir')}
//                   aria-label="از صفحه X (که قبلاً توییتر بود) ما بازدید کنید"
//                 >
//                   <i className="ti ti-brand-x fs-2" aria-hidden="true"></i>
//                 </button>
//                 <button 
//                   className="link" 
//                   onClick={() => handleExternalLink('https://youtube.com/pertosir')}
//                   aria-label="از صفحه یوتیوب ما دیدن کنید"
//                 >
//                   <i className="ti ti-brand-youtube fs-2" aria-hidden="true"></i>
//                 </button>
//                 <button 
//                   className="link" 
//                   onClick={() => handleExternalLink('https://instagram.com/pertosir')}
//                   aria-label="از صفحه اینستاگرام ما دیدن کنید"
//                 >
//                   <i className="ti ti-brand-instagram fs-2" aria-hidden="true"></i>
//                 </button>
//                 <button 
//                   className="link" 
//                   onClick={() => handleExternalLink('https://linkedin.com/company/pertosir')}
//                   aria-label="از صفحه لینکدین ما دیدن کنید"
//                 >
//                   <i className="ti ti-brand-linkedin fs-2" aria-hidden="true"></i>
//                 </button>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* SVG Background */}
//       <svg 
//         id="visual" 
//         viewBox="0 0 900 600" 
//         width="900" 
//         height="600" 
//         xmlns="http://www.w3.org/2000/svg" 
//         xmlnsXlink="http://www.w3.org/1999/xlink" 
//         version="1.1" 
//         preserveAspectRatio="none"
//       >
//         <path 
//           className="path-first" 
//           d="M0 328L75 357.8C150 387.7 300 447.3 450 438.3C600 429.3 750 351.7 825 312.8L900 274L900 601L825 601C750 601 600 601 450 601C300 601 150 601 75 601L0 601Z" 
//           fill="#f7f8f9"
//         ></path>
//         <path 
//           className="path-second" 
//           d="M0 510L75 507.3C150 504.7 300 499.3 450 496.8C600 494.3 750 494.7 825 494.8L900 495L900 601L825 601C750 601 600 601 450 601C300 601 150 601 75 601L0 601Z" 
//           fill="#e0e3e8"
//         ></path>
//       </svg>
//     </footer>
//   );
// };

// export default Footer;


// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container border-bottom mb-5"></div>
      
//       <div className="footer-content">
//         <div className="container">
//           <div className="row g-4">
//             <div className="col-12 col-md-6">
//               <div className="nt-flex-column-start-center align-items-md-start gap-2">
//                 <div className="nt-flex-start-center gap-2 mb-3">
//                   <img src="./img/logo-m.png" alt="پرتو سیر" width="80" />
//                   <h1 className="fs-2 fw-bold mb-0">پرتو سیر</h1>
//                 </div>
//                 <div className="nt-flex gap-1">
//                   تلفن‌ :‌
//                   <div dir="ltr">
//                     <a className="link" href="tel:+981133243056">01133243056</a>
//                     <br />
//                     <a className="link" href="tel:+989117976855">09117976855</a>
//                   </div>
//                 </div>
//                 <p>آدرس : مازندران، ساری، ترمینال دولت، پرتو سیر ایرانیان</p>
//                 <div className="mb-4"></div>
//                 <nav className="nt-flex">
//                   <a className="link footer-badge" href="">
//                     <img className="lozad" src="./img/layouts/footer/badges/enamad.jpg" alt="" />
//                   </a>
//                   <a className="link footer-badge" href="">
//                     <img className="lozad" src="./img/layouts/footer/badges/kasbokar.jpg" alt="" />
//                   </a>
//                   <a className="link footer-badge" href="">
//                     <img className="lozad" src="./img/layouts/footer/badges/rezi.jpg" alt="" />
//                   </a>
//                 </nav>
//               </div>
//             </div>

//             <div className="col-12 col-md-6 d-md-none">
//               <div className="accordion accordion-flush" id="footerAccordionNav">
//                 <div className="accordion-item">
//                   <h2 className="accordion-header">
//                     <button className="accordion-button collapsed fw-bold" type="button">
//                       پرتو سیر
//                     </button>
//                   </h2>
//                   <div className="accordion-collapse collapse">
//                     <div className="accordion-body">
//                       <div className="d-grid gap-3">
//                         <a className="link" href="./about-us.html" title="درباره پرتو سیر - بلیط اتوبوس و تاکسی">درباره ما</a>
//                         <a className="link" href="./contact.html" title="تماس با پرتو سیر">تماس با ما</a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="accordion-item">
//                   <h2 className="accordion-header">
//                     <button className="accordion-button collapsed fw-bold" type="button">
//                       خدمات مشتریان
//                     </button>
//                   </h2>
//                   <div className="accordion-collapse collapse">
//                     <div className="accordion-body">
//                       <div className="d-grid gap-3">
//                         <a className="link" href="" title="راهنمای استرداد بلیط اتوبوس پرتو سیر">راهنمای استرداد</a>
//                         <a className="link" href="./terms.html" title="قوانین و مقررات خرید بلیت اتوبوس و تاکسی">قوانین و مقررات</a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="accordion-item">
//                   <h2 className="accordion-header">
//                     <button className="accordion-button collapsed fw-bold" type="button">
//                       اطلاعات تکمیلی
//                     </button>
//                   </h2>
//                   <div className="accordion-collapse collapse">
//                     <div className="accordion-body">
//                       <div className="d-grid gap-3">
//                         <a className="link" href="" title="فروش سازمانی بلیت اتوبوس پرتو سیر">فروش سازمانی</a>
//                         <a className="link" href="" title="همکاری با آژانس‌های مسافرتی">همکاری با آژانس ها</a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-12 col-md-6 d-none d-md-block">
//               <div className="row g-3">
//                 <div className="col-6 col-md-4">
//                   <h5 className="fs-5 fw-bold mb-4">پرتو سیر</h5>
//                   <div className="d-grid gap-3">
//                     <a className="link" href="./about-us.html" title="درباره پرتو سیر - بلیط اتوبوس و تاکسی">درباره ما</a>
//                     <a className="link" href="./contact.html" title="تماس با پرتو سیر">تماس با ما</a>
//                   </div>
//                 </div>
//                 <div className="col-6 col-md-4">
//                   <h5 className="fs-5 fw-bold mb-4">خدمات مشتریان</h5>
//                   <div className="d-grid gap-3">
//                     <a className="link" href="" title="راهنمای استرداد بلیط اتوبوس پرتو سیر">راهنمای استرداد</a>
//                     <a className="link" href="./terms.html" title="قوانین و مقررات خرید بلیت اتوبوس و تاکسی">قوانین و مقررات</a>
//                   </div>
//                 </div>
//                 <div className="col-6 col-md-4">
//                   <h5 className="fs-5 fw-bold mb-4">اطلاعات تکمیلی</h5>
//                   <div className="d-grid gap-3">
//                     <a className="link" href="" title="فروش سازمانی بلیت اتوبوس پرتو سیر">فروش سازمانی</a>
//                     <a className="link" href="" title="همکاری با آژانس‌های مسافرتی">همکاری با آژانس ها</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="footer-copyright">
//         <div className="container">
//           <div className="row py-5">
//             <div className="col-12 col-md">
//               <p className="text-muted lh-lg small" role="contentinfo" aria-label="اطلاعات حق نشر">
//                 هرگونه استفاده از این موارد بدون مجوز کتبی و صریح از شرکت پرتو سیر، نقض حقوق مالکیت معنوی محسوب شده و پیگرد قانونی خواهد داشت.
//                 &nbsp;&nbsp;&nbsp;
//                 <a className="link" href="https://tameshkgroup.com">© ۲۰۲۵ - طراحی سایت » گروه نرم افزاری تمشک «</a>
//               </p>
//             </div>
//             <div className="col-12 col-md-auto">
//               <nav className="nt-flex-center-center gap-4 justify-content-md-start" aria-label="پیوند های شبکه های اجتماعی">
//                 <a className="link" href="" aria-label="در تلگرام به ما بپیوندید">
//                   <i className="ti ti-brand-telegram fs-2" aria-hidden="true"></i>
//                 </a>
//                 <a className="link" href="" aria-label="از صفحه X (که قبلاً توییتر بود) ما بازدید کنید">
//                   <i className="ti ti-brand-x fs-2" aria-hidden="true"></i>
//                 </a>
//                 <a className="link" href="" aria-label="از صفحه یوتیوب ما دیدن کنید">
//                   <i className="ti ti-brand-youtube fs-2" aria-hidden="true"></i>
//                 </a>
//                 <a className="link" href="" aria-label="از صفحه اینستاگرام ما دیدن کنید">
//                   <i className="ti ti-brand-instagram fs-2" aria-hidden="true"></i>
//                 </a>
//                 <a className="link" href="" aria-label="از صفحه لینکدین ما دیدن کنید">
//                   <i className="ti ti-brand-linkedin fs-2" aria-hidden="true"></i>
//                 </a>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>

//       <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="none">
//         <path className="path-first" d="M0 328L75 357.8C150 387.7 300 447.3 450 438.3C600 429.3 750 351.7 825 312.8L900 274L900 601L825 601C750 601 600 601 450 601C300 601 150 601 75 601L0 601Z" fill="#f7f8f9"></path>
//         <path className="path-second" d="M0 510L75 507.3C150 504.7 300 499.3 450 496.8C600 494.3 750 494.7 825 494.8L900 495L900 601L825 601C750 601 600 601 450 601C300 601 150 601 75 601L0 601Z" fill="#e0e3e8"></path>
//       </svg>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container border-bottom mb-5"></div>
      
      <div className="footer-content">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="nt-flex-column-start-center align-items-md-start gap-2">
                <div className="nt-flex-start-center gap-2 mb-3">
                  <img src="./img/logo-m.png" alt="پرتو سیر" width="80" />
                  <h1 className="fs-2 fw-bold mb-0">پرتو سیر</h1>
                </div>
                <div className="nt-flex gap-1">
                  تلفن‌ :‌
                  <div dir="ltr">
                    <Link className="link" to="tel:+981133243056">01133243056</Link>
                    <br />
                    <Link className="link" to="tel:+989117976855">09117976855</Link>
                  </div>
                </div>
                <p>آدرس : مازندران، ساری، ترمینال دولت، پرتو سیر ایرانیان</p>
                <div className="mb-4"></div>
                <nav className="nt-flex">
                  <Link className="link footer-badge" to="">
                    <img className="lozad" src="./img/layouts/footer/badges/enamad.jpg" alt="" />
                  </Link>
                  <Link className="link footer-badge" to="">
                    <img className="lozad" src="./img/layouts/footer/badges/kasbokar.jpg" alt="" />
                  </Link>
                  <Link className="link footer-badge" to="">
                    <img className="lozad" src="./img/layouts/footer/badges/rezi.jpg" alt="" />
                  </Link>
                </nav>
              </div>
            </div>

            <div className="col-12 col-md-6 d-md-none">
              <div className="accordion accordion-flush" id="footerAccordionNav">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" type="button">
                      پرتو سیر
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <div className="d-grid gap-3">
                        <Link className="link" to="/about" title="درباره پرتو سیر - بلیط اتوبوس و تاکسی">درباره ما</Link>
                        <Link className="link" to="/contact" title="تماس با پرتو سیر">تماس با ما</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" type="button">
                      خدمات مشتریان
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <div className="d-grid gap-3">
                        <Link className="link" to="/refund-guide" title="راهنمای استرداد بلیط اتوبوس پرتو سیر">راهنمای استرداد</Link>
                        <Link className="link" to="/terms" title="قوانین و مقررات خرید بلیت اتوبوس و تاکسی">قوانین و مقررات</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" type="button">
                      اطلاعات تکمیلی
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <div className="d-grid gap-3">
                        <Link className="link" to="/corporate-sales" title="فروش سازمانی بلیت اتوبوس پرتو سیر">فروش سازمانی</Link>
                        <Link className="link" to="/agency-cooperation" title="همکاری با آژانس‌های مسافرتی">همکاری با آژانس ها</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 d-none d-md-block">
              <div className="row g-3">
                <div className="col-6 col-md-4">
                  <h5 className="fs-5 fw-bold mb-4">پرتو سیر</h5>
                  <div className="d-grid gap-3">
                    <Link className="link" to="/about" title="درباره پرتو سیر - بلیط اتوبوس و تاکسی">درباره ما</Link>
                    <Link className="link" to="/contact" title="تماس با پرتو سیر">تماس با ما</Link>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <h5 className="fs-5 fw-bold mb-4">خدمات مشتریان</h5>
                  <div className="d-grid gap-3">
                    <Link className="link" to="/refund-guide" title="راهنمای استرداد بلیط اتوبوس پرتو سیر">راهنمای استرداد</Link>
                    <Link className="link" to="/terms" title="قوانین و مقررات خرید بلیت اتوبوس و تاکسی">قوانین و مقررات</Link>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <h5 className="fs-5 fw-bold mb-4">اطلاعات تکمیلی</h5>
                  <div className="d-grid gap-3">
                    <Link className="link" to="/corporate-sales" title="فروش سازمانی بلیت اتوبوس پرتو سیر">فروش سازمانی</Link>
                    <Link className="link" to="/agency-cooperation" title="همکاری با آژانس‌های مسافرتی">همکاری با آژانس ها</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-md">
              <p className="text-muted lh-lg small" role="contentinfo" aria-label="اطلاعات حق نشر">
                هرگونه استفاده از این موارد بدون مجوز کتبی و صریح از شرکت پرتو سیر، نقض حقوق مالکیت معنوی محسوب شده و پیگرد قانونی خواهد داشت.
                &nbsp;&nbsp;&nbsp;
                <a className="link" href="https://tameshkgroup.com">© ۲۰۲۵ - طراحی سایت » گروه نرم افزاری تمشک «</a>
              </p>
            </div>
            <div className="col-12 col-md-auto">
              <nav className="nt-flex-center-center gap-4 justify-content-md-start" aria-label="پیوند های شبکه های اجتماعی">
                <Link className="link" to="https://t.me/paratosir" aria-label="در تلگرام به ما بپیوندید" target="_blank" rel="noopener noreferrer">
                  <i className="ti ti-brand-telegram fs-2" aria-hidden="true"></i>
                </Link>
                <Link className="link" to="https://x.com/paratosir" aria-label="از صفحه X (که قبلاً توییتر بود) ما بازدید کنید" target="_blank" rel="noopener noreferrer">
                  <i className="ti ti-brand-x fs-2" aria-hidden="true"></i>
                </Link>
                <Link className="link" to="https://youtube.com/paratosir" aria-label="از صفحه یوتیوب ما دیدن کنید" target="_blank" rel="noopener noreferrer">
                  <i className="ti ti-brand-youtube fs-2" aria-hidden="true"></i>
                </Link>
                <Link className="link" to="https://instagram.com/paratosir" aria-label="از صفحه اینستاگرام ما دیدن کنید" target="_blank" rel="noopener noreferrer">
                  <i className="ti ti-brand-instagram fs-2" aria-hidden="true"></i>
                </Link>
                <Link className="link" to="https://linkedin.com/company/paratosir" aria-label="از صفحه لینکدین ما دیدن کنید" target="_blank" rel="noopener noreferrer">
                  <i className="ti ti-brand-linkedin fs-2" aria-hidden="true"></i>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="none">
        <path className="path-first" d="M0 328L75 357.8C150 387.7 300 447.3 450 438.3C600 429.3 750 351.7 825 312.8L900 274L900 601L825 601C750 601 600 601 450 601C300 601 150 601 75 601L0 601Z" fill="#f7f8f9"></path>
        <path className="path-second" d="M0 510L75 507.3C150 504.7 300 499.3 450 496.8C600 494.3 750 494.7 825 494.8L900 495L900 601L825 601C750 601 600 601 450 601C300 601 150 601 75 601L0 601Z" fill="#e0e3e8"></path>
      </svg>
    </footer>
  );
};

export default Footer;