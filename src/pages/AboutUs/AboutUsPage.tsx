// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Paper,
//   useTheme,
//   useMediaQuery,
//   AppBar,
//   Toolbar,
//   IconButton,
//   Chip,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   FormControl,
//   InputLabel,
//   Select,
//   TextField,
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
//   Slide,
// } from '@mui/material';
// import {
//   Menu as MenuIcon,
//   Close as CloseIcon,
//   Person as PersonIcon,
//   Brightness4 as DarkIcon,
//   Brightness7 as LightIcon,
//   Phone as PhoneIcon,
//   Telegram as TelegramIcon,
//   Twitter as TwitterIcon,
//   YouTube as YouTubeIcon,
//   Instagram as InstagramIcon,
//   LinkedIn as LinkedInIcon,
//   Groups as TeamsIcon,
//   Person as CustomerIcon,
//   AutoAwesome as InnovationIcon,
//   Verified as HonestyIcon,
//   Public as ResponsibilityIcon,
//   Star as QualityIcon,
//   LocationOn as LocationIcon,
//   DirectionsBus as BusIcon,
//   LocalTaxi as TaxiIcon,
//   AirportShuttle as VanIcon,
//   LocalShipping as ShipingIcon,
//   ExpandMore as ExpandMoreIcon,
//   PersonOutline as PersonOutlineIcon,
//   Brightness4,
//   Info as InfoIcon,
//   Facebook,
//   Twitter,
//   Instagram,
//   WhatsApp,
//   Telegram,
//   YouTube,
//   LinkedIn,
//   Brightness7,
// } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import logo from '../../img/logo.png';
// import backgroundImages from '../../img/pages/index/booking/main-1.webp';
// import appImage from '../../img/pages/index/app.png';
// import qrCode from '../../img/pages/index/qr.png';
// import luggageImage from '../../img/pages/index/luggage.png';
// import enamadBadge from '../../img/layouts/footer/badges/enamad.jpg';
// import kasbokarBadge from '../../img/layouts/footer/badges/kasbokar.jpg';
// import reziBadge from '../../img/layouts/footer/badges/rezi.jpg';

// const AboutUsPage: React.FC = () => {
//   const { t } = useTranslation();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [signModalOpen, setSignModalOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const goalsIcons = [
//     <TeamsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
//     <CustomerIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
//     <InnovationIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
//     <HonestyIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
//     <ResponsibilityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
//     <QualityIcon sx={{ fontSize: 40, color: 'primary.main' }} />
//   ];

//   // Header Component
//   // const Header = () => (
//   //   <AppBar position="static" color="default" elevation={1}>
//   //     <Toolbar>
//   //       <Container maxWidth="lg">
//   //         <Grid container alignItems="center" spacing={2}>
//   //           <Grid item xs={6} md={2}>
//   //             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//   //               {isMobile && (
//   //                 <IconButton onClick={() => setMenuOpen(true)}>
//   //                   <MenuIcon />
//   //                 </IconButton>
//   //               )}
//   //               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//   //                 <Box
//   //                   component="img"
//   //                   src="/img/logo-m.png"
//   //                   alt={t('newprofile.header.title')}
//   //                   sx={{ width: 40, height: 40 }}
//   //                 />
//   //                 <Typography variant="h6" fontWeight="bold">
//   //                   {t('newprofile.header.title')}
//   //                 </Typography>
//   //               </Box>
//   //             </Box>
//   //           </Grid>

//   //           <Grid item md={8} sx={{ display: { xs: 'none', md: 'block' } }}>
//   //             <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
//   //               <Button color="inherit">{t('newprofile.header.services')}</Button>
//   //               <Button color="inherit" variant="outlined">
//   //                 {t('newprofile.header.about')}
//   //               </Button>
//   //               <Button color="inherit">{t('newprofile.header.contact')}</Button>
//   //               <Button color="inherit">{t('newprofile.header.stations')}</Button>
//   //               <Button color="inherit">{t('newprofile.header.bookedTickets')}</Button>
//   //             </Box>
//   //           </Grid>

//   //           <Grid item xs={6} md={2}>
//   //             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
//   //               <IconButton onClick={() => setDarkMode(!darkMode)}>
//   //                 {darkMode ? <LightIcon /> : <DarkIcon />}
//   //               </IconButton>
//   //               <Button
//   //                 variant="outlined"
//   //                 startIcon={<PersonIcon />}
//   //                 onClick={() => setSignModalOpen(true)}
//   //               >
//   //                 {t('newprofile.auth.loginSignup')}
//   //               </Button>
//   //             </Box>
//   //           </Grid>
//   //         </Grid>
//   //       </Container>
//   //     </Toolbar>
//   //   </AppBar>
//   // );
//   const getBackgroundImage = () => {
//     const serviceImages = {
//       '1': backgroundImages, 
//     };
    
//     const currentService  =  '1';
//     return `url(${serviceImages[currentService]})`;
//   };

//   const Header = () => {
//     const [mobileOpen, setMobileOpen] = useState(false);
//     const [profileOpen, setProfileOpen] = useState(false);
//     const [signModalOpen, setSignModalOpen] = useState(false);
//     const [shareModalOpen, setShareModalOpen] = useState(false);
//     const [darkMode, setDarkMode] = useState(false);
//     const { t } = useTranslation();
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
//     const handleDrawerToggle = () => {
//       setMobileOpen(!mobileOpen);
//     };
  
//     const handleProfileToggle = () => {
//       setProfileOpen(!profileOpen);
//     };
  
//     const handleSignModalOpen = () => {
//       setSignModalOpen(true);
//     };
  
//     const handleSignModalClose = () => {
//       setSignModalOpen(false);
//     };
  
//     const handleShareModalOpen = () => {
//       setShareModalOpen(true);
//     };
  
//     const handleShareModalClose = () => {
//       setShareModalOpen(false);
//     };
  
//     const toggleDarkMode = () => {
//       setDarkMode(!darkMode);
//     };

  

   
  
//     const scrollTrigger = useScrollTrigger();
  
//     const menuItems = [
//       { text: t('newprofile.header.services'), submenu: [
//         { icon: <BusIcon />, text: t('newprofile.header.bus'), link: '/' },
//         { icon: <TaxiIcon />, text: t('newprofile.header.taxi'), link: '/taxi' },
//         { icon: <VanIcon />, text: t('newprofile.header.van'), link: '/van' },
//         { icon: <ShipingIcon />, text: t('newprofile.header.cargo'), link: '/cargo' }
//       ]},
//       { text: t('newprofile.header.about'), link: '/about' },
//       { text: t('newprofile.header.contact'), link: '/contact' },
//       { text: t('newprofile.header.branches'), link: '/branches' },
//       { text: t('newprofile.header.reservedTickets'), link: '/tickets' }
//     ];
  
//     return (
//       <>
//         <Slide appear={false} direction="down" in={!scrollTrigger}>
//           <AppBar 
//             position="fixed" 
//             sx={{ 
//               bgcolor: 'background.paper',
//               color: 'text.primary',
//               boxShadow: scrollTrigger ? 3 : 0,
//               borderBottom: '1px solid',
//               borderColor: 'divider'
//             }}
//           >
//             <Toolbar>
//               <Container maxWidth="xl">
//                 <Grid container alignItems="center" spacing={2}>
//                   {/* Logo and Mobile Menu */}
//                   <Grid item xs="auto">
//                     <Stack direction="row" alignItems="center" spacing={1}>
//                       {isMobile && (
//                         <IconButton
//                           color="inherit"
//                           aria-label="open drawer"
//                           edge="start"
//                           onClick={handleDrawerToggle}
//                         >
//                           <MenuIcon />
//                         </IconButton>
//                       )}
//                       <Link href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//                         <Box component="img" src={logo} alt="پرتو سیر" width={40} height={40} />
//                         <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold', color: 'text.primary' }}>
//                           پرتو سیر
//                         </Typography>
//                       </Link>
//                     </Stack>
//                   </Grid>
  
//                   {/* Desktop Navigation */}
//                   {!isMobile && (
//                     <Grid item xs>
//                       <Stack direction="row" spacing={2}>
//                         {menuItems.map((item) => (
//                           item.submenu ? (
//                             <Box key={item.text}>
//                               <Button
//                                 color="inherit"
//                                 endIcon={<ExpandMoreIcon />}
//                                 sx={{ textTransform: 'none', fontSize: '1rem' }}
//                               >
//                                 {item.text}
//                               </Button>
//                               <Menu>
//                                 {item.submenu.map((sub) => (
//                                   <MuiMenuItem key={sub.text}>
//                                     <ListItemIcon>{sub.icon}</ListItemIcon>
//                                     <ListItemText>{sub.text}</ListItemText>
//                                   </MuiMenuItem>
//                                 ))}
//                               </Menu>
//                             </Box>
//                           ) : (
//                             <Button
//                               key={item.text}
//                               color="inherit"
//                               href={item.link}
//                               sx={{ textTransform: 'none', fontSize: '1rem' }}
//                             >
//                               {item.text}
//                             </Button>
//                           )
//                         ))}
//                       </Stack>
//                     </Grid>
//                   )}
  
//                   {/* Right Side Actions */}
//                   <Grid item xs="auto">
//                     <Stack direction="row" spacing={1} alignItems="center">
//                       {!isMobile && (
//                         <Tooltip title={t('newprofile.header.toggleTheme')}>
//                           <IconButton onClick={toggleDarkMode} color="inherit">
//                             {darkMode ? <Brightness7 /> : <Brightness4 />}
//                           </IconButton>
//                         </Tooltip>
//                       )}
                      
//                       <Button
//                         variant="outlined"
//                         startIcon={<PersonOutlineIcon />}
//                         onClick={handleSignModalOpen}
//                         sx={{ 
//                           textTransform: 'none',
//                           borderColor: 'grey.300',
//                           color: 'text.secondary'
//                         }}
//                       >
//                         {t('newprofile.header.signIn')}
//                       </Button>
//                     </Stack>
//                   </Grid>
//                 </Grid>
//               </Container>
//             </Toolbar>
//           </AppBar>
//         </Slide>
  
//         {/* Mobile Drawer */}
//         <Drawer
//           variant="temporary"
//           anchor="right"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{ keepMounted: true }}
//           sx={{
//             display: { xs: 'block', md: 'none' },
//             '& .MuiDrawer-paper': { 
//               boxSizing: 'border-box', 
//               width: 300,
//               bgcolor: 'background.paper'
//             },
//           }}
//         >
//           <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <Typography variant="h6" color="text.secondary">
//               {t('newprofile.header.menu')}
//             </Typography>
//             <IconButton onClick={handleDrawerToggle}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
          
//           <Divider />
          
//           <List>
//             <ListItem disablePadding>
//               <ListItemButton onClick={toggleDarkMode}>
//                 <ListItemIcon>
//                   {darkMode ? <Brightness7 /> : <Brightness4 />}
//                 </ListItemIcon>
//                 <ListItemText primary={t('newprofile.header.toggleTheme')} />
//               </ListItemButton>
//             </ListItem>
            
//             <Divider sx={{ my: 1 }} />
            
//             {menuItems.map((item, index) => (
//               item.submenu ? (
//                 <Accordion key={item.text} disableGutters elevation={0}>
//                   <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography>{item.text}</Typography>
//                   </AccordionSummary>
//                   <AccordionDetails sx={{ p: 0 }}>
//                     <List dense disablePadding>
//                       {item.submenu.map((sub) => (
//                         <ListItem key={sub.text} disablePadding>
//                           <ListItemButton href={sub.link} sx={{ pl: 4 }}>
//                             <ListItemIcon>{sub.icon}</ListItemIcon>
//                             <ListItemText primary={sub.text} />
//                           </ListItemButton>
//                         </ListItem>
//                       ))}
//                     </List>
//                   </AccordionDetails>
//                 </Accordion>
//               ) : (
//                 <ListItem key={item.text} disablePadding>
//                   <ListItemButton href={item.link}>
//                     <ListItemText primary={item.text} />
//                   </ListItemButton>
//                 </ListItem>
//               )
//             ))}
//           </List>
          
//           <Divider sx={{ mt: 'auto' }} />
          
//           <Box sx={{ p: 2, textAlign: 'center' }}>
//             <Typography variant="body2" color="text.secondary">
//               {t('newprofile.footer.copyright', { year: new Date().getFullYear() })}
//             </Typography>
//           </Box>
//         </Drawer>
  
//         {/* Sign In Modal */}
//         <Dialog open={signModalOpen} onClose={handleSignModalClose} maxWidth="xs" fullWidth>
//           <DialogTitle>
//             <Box display="flex" justifyContent="space-between" alignItems="center">
//               <Typography variant="h6">{t('newprofile.signin.title')}</Typography>
//               <IconButton onClick={handleSignModalClose} size="small">
//                 <CloseIcon />
//               </IconButton>
//             </Box>
//           </DialogTitle>
//           <DialogContent>
//             <Box sx={{ py: 4, textAlign: 'center' }}>
//               <Typography variant="h6" gutterBottom>
//                 {t('newprofile.signin.subtitle')}
//               </Typography>
//               <Typography color="text.secondary" paragraph>
//                 {t('newprofile.signin.description')}
//               </Typography>
              
//               <FormControl fullWidth sx={{ mb: 2 }}>
//                 <TextField
//                   label={t('newprofile.signin.phoneNumber')}
//                   type="tel"
//                   size="medium"
//                   fullWidth
//                 />
//               </FormControl>
              
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
//                 <InfoIcon color="disabled" fontSize="small" />
//                 <Typography variant="caption" color="text.secondary">
//                   {t('newprofile.signin.terms')}
//                   <Link href="/terms" sx={{ ml: 0.5 }}>
//                     {t('newprofile.signin.termsLink')}
//                   </Link>
//                 </Typography>
//               </Box>
              
//               <Stack spacing={2}>
//                 <Button variant="contained" size="large" fullWidth>
//                   {t('newprofile.signin.submit')}
//                 </Button>
//                 {/* <Button variant="text" size="small">
//                   {t('newprofile.signin.passwordLogin')}
//                 </Button> */}
//               </Stack>
//             </Box>
//           </DialogContent>
//         </Dialog>
  
//         {/* Share Modal */}
//         <Dialog open={shareModalOpen} onClose={handleShareModalClose} maxWidth="xs" fullWidth>
//           <DialogTitle>
//             <Box display="flex" justifyContent="space-between" alignItems="center">
//               <Typography variant="h6">{t('share.title')}</Typography>
//               <IconButton onClick={handleShareModalClose} size="small">
//                 <CloseIcon />
//               </IconButton>
//             </Box>
//           </DialogTitle>
//           <DialogContent>
//             <Box sx={{ py: 4, textAlign: 'center' }}>
//               <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
//                 {[
//                   { icon: <Facebook />, label: 'Facebook' },
//                   { icon: <Twitter />, label: 'Twitter' },
//                   { icon: <Instagram />, label: 'Instagram' },
//                   { icon: <WhatsApp />, label: 'WhatsApp' },
//                   { icon: <Telegram />, label: 'Telegram' }
//                 ].map((social) => (
//                   <Tooltip key={social.label} title={social.label}>
//                     <IconButton
//                       sx={{
//                         border: '2px solid',
//                         borderColor: 'grey.300',
//                         width: 64,
//                         height: 64
//                       }}
//                     >
//                       {social.icon}
//                     </IconButton>
//                   </Tooltip>
//                 ))}
//               </Stack>
              
//               <Box sx={{ display: 'flex', gap: 1 }}>
//                 <TextField
//                   fullWidth
//                   value="https://netthemes.ir/html/parnet"
//                   InputProps={{
//                     readOnly: true,
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <Button
//                           variant="contained"
//                           onClick={() => navigator.clipboard.writeText('https://netthemes.ir/html/parnet')}
//                         >
//                           {t('share.copy')}
//                         </Button>
//                       </InputAdornment>
//                     ),
//                   }}
//                   sx={{
//                     '& .MuiInputBase-input': {
//                       direction: 'ltr',
//                       textAlign: 'left'
//                     }
//                   }}
//                 />
//               </Box>
//             </Box>
//           </DialogContent>
//         </Dialog>
//       </>
//     );
//   };

//   // Hero Section
//   const HeroSection = () => (
//     <Box
//       sx={{
//         backgroundImage: getBackgroundImage(),
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         py: 8,
//         position: 'relative',
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'rgba(0,0,0,0.4)',
//         }
//       }}
//     >
//       <Container sx={{ position: 'relative' }}>
//         <Paper
//           elevation={8}
//           sx={{
//             bgcolor: 'background.paper',
//             borderRadius: 3,
//             textAlign: 'center',
//             py: 5,
//             px: 4
//           }}
//         >
//           <Typography variant="h4" fontWeight="bold" gutterBottom>
//             {t('newprofile.about.title')}
//           </Typography>
//           <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.8 }}>
//             {t('newprofile.about.subtitle')}
//           </Typography>
//         </Paper>
//       </Container>
//     </Box>
//   );

//   // Top Gallery Slider
//   const TopGallerySlider = () => (
//     <Box sx={{ py: 5 }}>
//       <Container>
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={10}
//           slidesPerView={1}
//           autoplay={{ delay: 1000 }}
//           speed={1000}
//           loop={true}
//           breakpoints={{
//             480: { slidesPerView: 2 },
//             640: { slidesPerView: 3 },
//             720: { slidesPerView: 5 }
//           }}
//         >
//           {t('newprofile.about.gallery.topImages', { returnObjects: true }).map((image: string, index: number) => (
//             <SwiperSlide key={index}>
//               <Box
//                 component="img"
//                 src={image}
//                 alt={`Gallery ${index + 1}`}
//                 sx={{
//                   width: '100%',
//                   height: 200,
//                   objectFit: 'cover',
//                   borderRadius: 2,
//                   transition: 'transform 0.3s',
//                   '&:hover': {
//                     transform: 'scale(1.05)'
//                   }
//                 }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Container>
//     </Box>
//   );

//   // Company Info Section
//   const CompanyInfoSection = () => (
//     <Box sx={{ py: 5 }}>
//       <Container>
//         <Paper
//           elevation={2}
//           sx={{
//             bgcolor: 'grey.50',
//             border: 1,
//             borderColor: 'divider',
//             borderRadius: 3,
//             p: 4
//           }}
//         >
//           <Grid container spacing={4}>
//             <Grid item xs={12}>
//               <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
//                 {t('newprofile.about.companyInfo.title')}
//               </Typography>
              
//               <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
//                 {t('newprofile.about.companyInfo.description1')}
//               </Typography>
              
//               <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
//                 {t('newprofile.about.companyInfo.description2')}
//               </Typography>
              
//               <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
//                 {t('newprofile.about.companyInfo.description3')}
//               </Typography>

//               {/* Routes Section */}
//               <Box sx={{ mt: 4 }}>
//                 <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
//                   {t('newprofile.about.companyInfo.routesTitle')}
//                 </Typography>
//                 <Grid container spacing={2}>
//                   {t('newprofile.about.companyInfo.routes', { returnObjects: true }).map((route: string, index: number) => (
//                     <Grid item xs={12} sm={6} md={4} key={index}>
//                       <Chip
//                         icon={<LocationIcon />}
//                         label={route}
//                         variant="outlined"
//                         color="primary"
//                         sx={{ width: '100%', justifyContent: 'flex-start' }}
//                       />
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Container>
//     </Box>
//   );

//   // Goals Section
//   const GoalsSection = () => (
//     <Box sx={{ py: 5, bgcolor: 'background.default' }}>
//       <Container>
//         <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
//           {t('newprofile.about.goals.title')}
//         </Typography>
        
//         <Grid container spacing={3} sx={{ mt: 2 }}>
//           {t('newprofile.about.goals.items', { returnObjects: true }).map((goal: string, index: number) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card
//                 sx={{
//                   height: '100%',
//                   p: 3,
//                   textAlign: 'center',
//                   borderRadius: 3,
//                   transition: 'transform 0.3s, box-shadow 0.3s',
//                   '&:hover': {
//                     transform: 'translateY(-8px)',
//                     boxShadow: 6
//                   }
//                 }}
//               >
//                 <Box sx={{ mb: 2 }}>
//                   {goalsIcons[index]}
//                 </Box>
//                 <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
//                   {goal}
//                 </Typography>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );

//   // Work Environment Gallery
//   const WorkEnvironmentGallery = () => (
//     <Box sx={{ py: 5 }}>
//       <Container>
//         <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
//           {t('newprofile.about.workEnvironment.title')}
//         </Typography>
        
//         <Swiper
//           modules={[Autoplay, Navigation, Pagination]}
//           spaceBetween={10}
//           slidesPerView={1}
//           autoplay={{ delay: 1000 }}
//           speed={1000}
//           loop={true}
//           navigation
//           pagination={{ clickable: true }}
//           breakpoints={{
//             480: { slidesPerView: 2 },
//             640: { slidesPerView: 3 },
//             720: { slidesPerView: 5 }
//           }}
//           style={{ paddingBottom: 40, marginTop: 20 }}
//         >
//           {t('newprofile.about.gallery.workImages', { returnObjects: true }).map((image: string, index: number) => (
//             <SwiperSlide key={index}>
//               <Box
//                 component="img"
//                 src={image}
//                 alt={`Work Environment ${index + 1}`}
//                 sx={{
//                   width: '100%',
//                   height: 250,
//                   objectFit: 'cover',
//                   borderRadius: 2,
//                   transition: 'transform 0.3s',
//                   '&:hover': {
//                     transform: 'scale(1.05)'
//                   }
//                 }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Container>
//     </Box>
//   );

//   // Footer Component
//   const Footer = () => (
//     <Box
//       component="footer"
//       sx={{
//         bgcolor: 'background.paper',
//         borderTop: 1,
//         borderColor: 'divider',
//         mt: 8
//       }}
//     >
//       <Container>
//         <Box sx={{ py: 8 }}>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
//                   <Box
//                     component="img"
//                     src={logo}
//                     alt={t('newprofile.header.title')}
//                     sx={{ width: 60, height: 60 }}
//                   />
//                   <Typography variant="h4" fontWeight="bold">
//                     {t('newprofile.header.title')}
//                   </Typography>
//                 </Box>
                
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <PhoneIcon fontSize="small" />
//                   <Typography>
//                     {t('newprofile.common.phone')}: ۰۱۱۳۳۲۴۳۰۵۶ - ۰۹۱۱۷۹۷۶۸۵۵
//                   </Typography>
//                 </Box>
                
//                 <Typography>
//                   {t('newprofile.common.address')}: مازندران، ساری، ترمینال دولت، پرتو سیر ایرانیان
//                 </Typography>
                
//                 <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
//                   {t('newprofile.footer.description')}
//                 </Typography>
//               </Box>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <Grid container spacing={4}>
//                 <Grid item xs={6} md={4}>
//                   <Typography variant="h6" fontWeight="bold" gutterBottom>
//                     {t('newprofile.footer.about')}
//                   </Typography>
//                   <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                     <Button color="inherit" size="small">{t('newprofile.header.about')}</Button>
//                     <Button color="inherit" size="small">{t('newprofile.header.contact')}</Button>
//                   </Box>
//                 </Grid>
                
//                 <Grid item xs={6} md={4}>
//                   <Typography variant="h6" fontWeight="bold" gutterBottom>
//                     {t('newprofile.footer.customerService')}
//                   </Typography>
//                   <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                     <Button color="inherit" size="small">{t('newprofile.footer.refundGuide')}</Button>
//                     <Button color="inherit" size="small">{t('newprofile.footer.terms')}</Button>
//                   </Box>
//                 </Grid>
                
//                 <Grid item xs={6} md={4}>
//                   <Typography variant="h6" fontWeight="bold" gutterBottom>
//                     {t('newprofile.footer.additionalInfo')}
//                   </Typography>
//                   <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                     <Button color="inherit" size="small">{t('newprofile.footer.corporateSales')}</Button>
//                     <Button color="inherit" size="small">{t('newprofile.footer.agencyCooperation')}</Button>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Box>

//         <Box sx={{ 
//           borderTop: 1, 
//           borderColor: 'divider', 
//           py: 4,
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           gap: 2
//         }}>
//           <Typography variant="body2" color="text.secondary">
//             {t('newprofile.footer.copyright')} • {t('newprofile.footer.designCredit')}
//           </Typography>
          
//           <Box sx={{ display: 'flex', gap: 1 }}>
//             <IconButton size="small" color="primary">
//               <TelegramIcon />
//             </IconButton>
//             <IconButton size="small" color="primary">
//               <TwitterIcon />
//             </IconButton>
//             <IconButton size="small" color="primary">
//               <YouTubeIcon />
//             </IconButton>
//             <IconButton size="small" color="primary">
//               <InstagramIcon />
//             </IconButton>
//             <IconButton size="small" color="primary">
//               <LinkedInIcon />
//             </IconButton>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );

//   // Auth Modal
//   const AuthModal = () => (
//     <Dialog 
//       open={signModalOpen} 
//       onClose={() => setSignModalOpen(false)}
//       maxWidth="sm"
//       fullWidth
//     >
//       <DialogTitle>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Typography variant="h6">{t('newprofile.auth.loginSignup')}</Typography>
//           <IconButton onClick={() => setSignModalOpen(false)}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       </DialogTitle>
//       <DialogContent>
//         <Box sx={{ textAlign: 'center', py: 4 }}>
//           <Typography variant="h6" gutterBottom>
//             {t('newprofile.auth.enterPhone')}
//           </Typography>
          
//           <Box sx={{ my: 3 }}>
//             <Typography variant="body2" color="text.secondary">
//               {t('newprofile.auth.phoneNumber')}
//             </Typography>
//           </Box>
          
//           <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
//             {t('newprofile.auth.acceptTerms')}
//           </Typography>
          
//           <Button 
//             variant="contained" 
//             fullWidth 
//             size="large"
//             sx={{ mb: 2 }}
//           >
//             {t('newprofile.auth.confirm')}
//           </Button>
          
//           <Button variant="text" fullWidth>
//             {t('newprofile.auth.loginWithPassword')}
//           </Button>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );

//   return (
//     <Box sx={{ 
//       minHeight: '100vh', 
//       bgcolor: 'background.default',
//       // direction: 'rtl'
//     }}>
//       <Header />
//       <HeroSection />
//       {/* <TopGallerySlider /> */}
//       <CompanyInfoSection />
//       <GoalsSection />
//       {/* <WorkEnvironmentGallery /> */}
//       <Footer />
//       <AuthModal />
//     </Box>
//   );
// };

// export default AboutUsPage;





import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';

const AboutUs = () => {
  const [theme, setTheme] = useState('light');
  const [showSignModal, setShowSignModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activeMenuAccordion, setActiveMenuAccordion] = useState(false);
  
  const topSwiperRef = useRef(null);
  const workSwiperRef = useRef(null);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

  const handleSignSubmit = (e) => {
    e.preventDefault();
    console.log('Phone number:', phoneNumber);
    setShowSignModal(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText('https://netthemes.ir/html/parnet');
    alert('لینک کپی شد!');
  };

  // شبیه‌سازی اسلایدر با CSS
  useEffect(() => {
    // تنظیم اولیه تم
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  // داده‌های تصاویر اسلایدر
  const topImages = [
    './img/pages/about-us/top/1.jpg',
    './img/pages/about-us/top/2.jpg',
    './img/pages/about-us/top/3.jpg',
    './img/pages/about-us/top/4.jpg',
    './img/pages/about-us/top/5.jpg',
    './img/pages/about-us/top/6.jpg'
  ];

  const workImages = [
    './img/pages/why-us/1.jpg',
    './img/pages/why-us/2.jpg',
    './img/pages/why-us/3.jpg',
    './img/pages/why-us/4.jpg',
    './img/pages/why-us/5.jpg',
    './img/pages/why-us/6.jpg',
    './img/pages/why-us/7.jpg',
    './img/pages/why-us/8.jpg'
  ];

  return (
    <div className="par-tosir-app" dir="rtl" data-bs-theme={theme}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>پرتو سیر | درباره ما</title>
        <link rel="stylesheet" href="./css/bootstrap-custom.css" />
        <link rel="stylesheet" href="./vendor/fonts/tabler/tabler-icons.css" />
        <link rel="stylesheet" href="./css/style.css" />
        <link rel="icon" type="image/x-icon" href="logo.ico" />
        <meta name="description" content="پرتوسیر ایرانیان ارائه‌دهنده بلیط اتوبوس، بلیط تاکسی و بلیط ون با بهترین قیمت و پشتیبانی ۲۴ ساعته. خرید آسان بلیت اتوبوس از پرتو سیر." />
        <meta name="keywords" content="پرتوسیر, پرتو سیر, بلیط اتوبوس, بلیت اتوبوس, بلیط تاکسی, بلیت تاکسی, بلیط ون, بلیت ون, پرتو سیر ایرانیان" />
        <meta name="author" content="پرتوسیر ایرانیان" />
        <meta name="robots" content="index, follow" />
      </head>

      {/* ---------------------------- Offcanvas Menu ---------------------------- */}
      <div className={`offcanvas offcanvas-start ${showMenu ? 'show' : ''}`} id="offcanvasMenu" tabIndex="-1" aria-labelledby="offcanvasMenuLabel" style={showMenu ? {display: 'block'} : {}}>
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
      <div className={`offcanvas offcanvas-start ${showProfile ? 'show' : ''}`} id="offcanvasProfile" tabIndex="-1" aria-labelledby="offcanvasProfileLabel" style={showProfile ? {display: 'block'} : {}}>
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

      {/* ------------------------------ Modal Sign ------------------------------ */}
      <div className={`modal fade ${showSignModal ? 'show' : ''}`} id="signModal" tabIndex="-1" aria-labelledby="signModalLabel" aria-hidden={!showSignModal} style={showSignModal ? {display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'} : {}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button className="btn-close" type="button" onClick={() => setShowSignModal(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="wrapper-xs py-5 text-center">
                <div className="fs-5 fw-bold mb-2">ورود یا ثبت‌نام</div>
                <p className="lead">برای ادامه شماره موبایل خود را وارد کنید.</p>
                <form onSubmit={handleSignSubmit}>
                  <div className="form-floating mb-2">
                    <input
                      className="form-control form-control-lg"
                      type="tel"
                      placeholder="شماره موبایل"
                      id="floatingInput"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                    <label htmlFor="floatingInput">شماره موبایل</label>
                  </div>
                  <div className="nt-flex-center-center gap-1 small mb-4">
                    <i className="ti ti-info-circle fs-5 text-muted" aria-hidden="true"></i>
                    استفاده از پرتو سیر به معنی پذیرش
                    <a className="link" href=""> قوانین و مقررات</a>
                    این سرویس است.
                  </div>
                  <div className="d-grid gap-3">
                    <button className="btn btn-primary btn-lg" type="submit">تایید و دریافت</button>
                    {/* <button className="btn btn-link" type="button">ورود با کلمه عبور</button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------- end Modal Sign ---------------------------- */}

      {/* ------------------------------ Modal share ----------------------------- */}
      <div className={`modal fade ${showShareModal ? 'show' : ''}`} id="shareModal" tabIndex="-1" aria-labelledby="shareModalLabel" aria-hidden={!showShareModal} style={showShareModal ? {display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'} : {}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="shareModalLabel">اشتراک گذاری</h1>
              <button className="btn-close" type="button" onClick={() => setShowShareModal(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="wrapper-xs py-5 text-center">
                <nav className="nt-flex-around-center gap-4 mb-5" aria-label="پیوند های شبکه های اجتماعی">
                  <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="از صفحه فیس بوک ما دیدن کنید">
                    <i className="ti ti-brand-facebook fs-3" aria-hidden="true"></i>
                  </button>
                  <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="از صفحه X (که قبلاً توییتر بود) ما بازدید کنید">
                    <i className="ti ti-brand-x fs-3" aria-hidden="true"></i>
                  </button>
                  <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="به صفحه اینستاگرام ما مراجعه کنید">
                    <i className="ti ti-brand-instagram fs-3" aria-hidden="true"></i>
                  </button>
                  <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="با ما در WhatsApp گپ بزنید">
                    <i className="ti ti-brand-whatsapp fs-3" aria-hidden="true"></i>
                  </button>
                  <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="در تلگرام به ما بپیوندید">
                    <i className="ti ti-brand-telegram fs-3" aria-hidden="true"></i>
                  </button>
                </nav>
                <div className="input-group">
                  <input
                    className="form-control form-control"
                    type="text"
                    id="shareLink"
                    value="https://netthemes.ir/html/parnet"
                    dir="ltr"
                    readOnly
                  />
                  <button className="btn btn-primary" type="button" onClick={copyToClipboard} id="copyLinkBtn">
                    کپی لینک
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------- end Modal share --------------------------- */}

      {/* -------------------------------- Header -------------------------------- */}
      <Header 
        theme={theme}
        toggleTheme={toggleTheme}
        setShowSignModal={setShowSignModal}
        setShowMenu={setShowMenu}
      />
      {/* ------------------------------ end Header ------------------------------ */}

      {/* -------------------------------- Main ---------------------------------- */}
      <main className="main">
        <section className="booking-wrapper" style={{backgroundImage: 'url(img/pages/index/booking/sliderf.webp)'}}>
          <div className="container g-0 booking-inner shadow-sm">
            <div className="text-center bg-white py-5 px-4 rounded">
              <div className="fs-4 fw-bold mb-3">درباره پرتو سیر ما کی هستیم؟</div>
              <p className="lead lh-lg text-muted">پرتو سیر: همراه همیشگی سفرهای شما</p>
            </div>
          </div>
        </section>

        {/* اسلایدر اول - شبیه‌سازی Swiper */}
        <section className="swiper pb-5" style={{overflow: 'hidden', position: 'relative'}}>
          <div className="swiper-wrapper" style={{
            display: 'flex',
            transition: 'transform 0.5s ease',
            gap: '10px',
            padding: '0 10px'
          }}>
            {topImages.map((img, index) => (
              <div key={index} className="swiper-slide swiper-no-swiping" style={{
                flex: '0 0 auto',
                width: 'calc(100% / 5 - 8px)',
                minWidth: '150px'
              }}>
                <img 
                  className="lozad rounded" 
                  src={img} 
                  alt={`اسلاید ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '120px',
                    objectFit: 'cover'
                  }}
                />
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
              width: '20%',
              height: '100%',
              backgroundColor: '#0d6efd',
              borderRadius: '2px'
            }}></div>
          </div>
        </section>

        <section className="container py-5 mb-5">
          <div className="row g-3">
            <div className="row g-4 bg-light-subtle border border-1 rounded">
              <div className="col-12 col-md-12">
                <p className="lead lh-lg">شرکت بین المللی پرتوسیر ایرانیان با بیش از 27 سال تجربه (1376) با هدف ارائه خدمات حمل ونقل بین المللی مسافر تاسیس شد و مدیر عامل کنونی آقای ناصرکلانتری شرکت با ناوگانی متشکل از 30دستگاه اتوبوس ، 24 دستگاه ون و 54 دستگاه سواری های برون شهری ملکی و تحت پوشش و با بهره مندی از شعب فعال در شهرهای چون ساری ،مشهد ، قم ، اهواز ، زاهدان ، تایباد ، زابل ،چابهار، رشت ، تهران و ایلام فعالیت دارد.</p>
                <p className="lead lh-lg justify-content-md-start">
                  پرتوسیر ایرانیان سابقه ای درخشان در توسعه همکاری های حمل ونقل جاده ای با کشورهایی مانند ترکمنستان ، عراق و افغانستان دارد. در دهه اخیر، این شرکت با توسعه ناوگان و گسترش ارتباطات بین المللی ، جایگاه خود را به عنوان یکی از فعالترین شرکت های حمل ونقل برون مرزی ایران تثبیت نموده است.
                  پرتوسیرایرانیان با تکیه برظرفیت های داخلی و روابط منطقه ای ، به دنبال توسعه پایدار در زمینه حمل ونقل ، گردشگری و خدمات مسافری است و در مسیر تحقق سند چشم انداز 1404 برای تبدیل ایران به قطب گردشگری منطقه ، گام برمی دارد.
                </p>
                <p className="lead lh-lg">
                  مسیر های ما:<br />
                  مشهد – هرات ** تایباد – هرات<br />
                  **زابل – قندهار ** زاهدان – نیمروز<br />
                  **زاهدان –کویته ** چابهار- کراچی<br />
                  **اهواز – بصره ** قم – نجف<br />
                  **ساری – نجف ** رشت – نجف
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mb-5">
          <div className="text-center fs-5 fw-bold mb-3">هدف های ما</div>
          <div className="nt-flex-center-center flex-wrap">
            <div className="border rounded p-4 m-2">ما به قدرت همکاری و تیمی بودن اعتقاد داریم.</div>
            <div className="border rounded p-4 m-2">مشتری مداری، هسته اصلی کسب‌وکار ما است.</div>
            <div className="border rounded p-4 m-2">نوآوری و خلاقیت، موتور محرک رشد ما هستند.</div>
            <div className="border rounded p-4 m-2">صداقت و شفافیت، اساس روابط ما با همکاران و مشتریان است.</div>
            <div className="border rounded p-4 m-2">مسئولیت‌پذیری اجتماعی، بخشی جدایی‌ناپذیر از فرهنگ ما است.</div>
            <div className="border rounded p-4 m-2">کیفیت، تعهد ما به مشتریان است.</div>
          </div>
        </section>

        {/* اسلایدر دوم - شبیه‌سازی Swiper */}
        <section className="container mb-5">
          <div className="text-center fs-5 fw-bold mb-3">محیط کاری پرتو سیر</div>
          <div className="swiper pb-5" style={{overflow: 'hidden', position: 'relative'}}>
            <div className="swiper-wrapper" style={{
              display: 'flex',
              transition: 'transform 0.5s ease',
              gap: '10px',
              padding: '0 10px'
            }}>
              {workImages.map((img, index) => (
                <div key={index} className="swiper-slide" style={{
                  flex: '0 0 auto',
                  width: 'calc(100% / 5 - 8px)',
                  minWidth: '150px'
                }}>
                  <img 
                    className="lozad rounded" 
                    src={img} 
                    alt={`محیط کار ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '120px',
                      objectFit: 'cover'
                    }}
                  />
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
                width: '20%',
                height: '100%',
                backgroundColor: '#0d6efd',
                borderRadius: '2px'
              }}></div>
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
  );
};

export default AboutUs;