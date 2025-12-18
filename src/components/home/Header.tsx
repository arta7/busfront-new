
// import React, { useState, useContext } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   IconButton,
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
//   Menu,
//   MenuItem as MuiMenuItem,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   Link,
//   InputAdornment,
//   ListItemIcon,
//   Tooltip,
//   Stack,
//   useScrollTrigger,
//   Slide,
//   Avatar,Accordion,
//   Chip,AccordionSummary,AccordionDetails,FormControl,TextField 
// } from '@mui/material';
// import {
//   ExpandMore as ExpandMoreIcon,
//   Menu as MenuIcon,
//   Close as CloseIcon,
//   PersonOutline as PersonOutlineIcon,
//   DirectionsBus as BusIcon,
//   LocalShipping as TruckIcon,
//   Info as InfoIcon,
//   Facebook,
//   Twitter,
//   Instagram,
//   WhatsApp,
//   Telegram,
//   Language as LanguageIcon,
//   AccountCircle
// } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';
// import UserContext from './../../UserContext'; // مسیر صحیح Context را وارد کنید

// import logo from '../../img/logo-m.png';

// const Header = () => {
//     const [mobileOpen, setMobileOpen] = useState(false);
//     const [profileOpen, setProfileOpen] = useState(false);
//     const [signModalOpen, setSignModalOpen] = useState(false);
//     const [shareModalOpen, setShareModalOpen] = useState(false);
//     const [languageMenuAnchor, setLanguageMenuAnchor] = useState(null);
//     const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
    
//     const { t, i18n } = useTranslation();
//     const { userData,setUserData } = useContext(UserContext); // استفاده از Context
    
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//     const scrollTrigger = useScrollTrigger();
  
//     const handleDrawerToggle = () => {
//       setMobileOpen(!mobileOpen);
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
  
//     const openLanguageMenu = (event) => {
//       setLanguageMenuAnchor(event.currentTarget);
//     };
  
//     const closeLanguageMenu = () => {
//       setLanguageMenuAnchor(null);
//     };
  
//     const openProfileMenu = (event) => {
//       setProfileMenuAnchor(event.currentTarget);
//     };
  
//     const closeProfileMenu = () => {
//       try {
//               setUserData([{
//                 UserId: '',
//                 Username: '',
//                 CurrentDate: '',
//                 StartPlace: '',
//                 EndPlace: '',
//                 StartPlaceCode: '',
//                 EndPlaceCode: '',
//                 isLoading: true,
//                 Mobile: '',
//                 RequestNumber: '',
//                 Name: '',Email:''
//               }]);
        
//               localStorage.removeItem('storageData');
//               localStorage.removeItem('UserId');
//               localStorage.removeItem('Username');
//               localStorage.removeItem('Token');
        
//               window.location.replace('/');
//             } catch (error) {
             
//             }
//       setProfileMenuAnchor(null);
//     };
  
//     const changeLanguage = (lng) => {
//       i18n.changeLanguage(lng);
//       localStorage.setItem('language', lng);
//       closeLanguageMenu();
//       window.location.reload(); // رفرش صفحه برای اعمال تغییرات RTL/LTR
//     };
  
//     const menuItems = [
//       { 
//         text: t('newprofile.header.services'), 
//         submenu: [
//           { icon: <BusIcon />, text: t('newprofile.header.bus'), link: '/' },
//           { icon: <BusIcon />, text: t('newprofile.header.taxi'), link: '/taxi' },
//           { icon: <TruckIcon />, text: t('newprofile.header.van'), link: '/van' },
//           { icon: <BusIcon />, text: t('newprofile.header.cargo'), link: '/cargo' }
//         ]
//       },
//       { text: t('newprofile.header.about'), link: '/about' },
//       { text: t('newprofile.header.contact'), link: '/contact' },
//       { text: t('newprofile.header.branches'), link: '/branches' },
//       { text: t('newprofile.header.reservedTickets'), link: '/profile-orders' }
//     ];
  
//     // بررسی اینکه کاربر وارد شده است یا نه
//     const isAuthenticated = Array.isArray(userData) && 
//                            userData.length > 0 && 
//                            userData[0]?.Token;
  
//     // زبان‌های موجود
//     const languages = [
//       { code: 'en', name: 'English', nativeName: 'EN' },
//       { code: 'fa', name: 'فارسی', nativeName: 'FA' },
//       { code: 'ru', name: 'Русский', nativeName: 'RU' },
//       { code: 'ar', name: 'العربية', nativeName: 'AR' },
//       { code: 'pa', name: 'پښتو', nativeName: 'PA' }
//     ];
  
//     // زبان فعلی
//     const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  
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
//                         <Typography variant="h6" sx={{ 
//                           ml: 1, 
//                           fontWeight: 'bold', 
//                           color: 'text.primary',
//                           fontFamily: i18n.language === 'fa' ? 'Vazir, Arial' : 'inherit'
//                         }}>
//                            پرتو سیر
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
//                                 sx={{ 
//                                   textTransform: 'none', 
//                                   fontSize: '1rem',
//                                   fontFamily: i18n.language === 'fa' ? 'Vazir, Arial' : 'inherit'
//                                 }}
//                               >
//                                 {item.text}
//                               </Button>
//                               <Menu>
//                                 {item.submenu.map((sub) => (
//                                   <MuiMenuItem key={sub.text}>
//                                     <ListItemIcon>{sub.icon}</ListItemIcon>
//                                     <ListItemText 
//                                       primary={sub.text}
//                                       sx={{ 
//                                         fontFamily: i18n.language === 'fa' ? 'Vazir, Arial' : 'inherit'
//                                       }}
//                                     />
//                                   </MuiMenuItem>
//                                 ))}
//                               </Menu>
//                             </Box>
//                           ) : (
//                             <Button
//                               key={item.text}
//                               color="inherit"
//                               href={item.link}
//                               sx={{ 
//                                 textTransform: 'none', 
//                                 fontSize: '1rem',
//                                 fontFamily: i18n.language === 'fa' ? 'Vazir, Arial' : 'inherit'
//                               }}
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
//                       {/* Language Selector */}
//                       <Tooltip title={t('newprofile.header.changeLanguage')}>
//                         <Button
//                           color="inherit"
//                           startIcon={<LanguageIcon />}
//                           onClick={openLanguageMenu}
//                           sx={{ 
//                             textTransform: 'none',
//                             color: 'text.secondary',
//                             minWidth: 'auto'
//                           }}
//                         >
//                           {currentLanguage.nativeName}
//                         </Button>
//                       </Tooltip>
  
//                       {/* Language Menu */}
//                       <Menu
//                         anchorEl={languageMenuAnchor}
//                         open={Boolean(languageMenuAnchor)}
//                         onClose={closeLanguageMenu}
//                       >
//                         {languages.map((language) => (
//                           <MuiMenuItem 
//                             key={language.code}
//                             onClick={() => changeLanguage(language.code)}
//                             selected={i18n.language === language.code}
//                             sx={{ 
//                               fontFamily: language.code === 'fa' ? 'Vazir, Arial' : 'inherit',
//                               direction: language.code === 'fa' || language.code === 'ar' ? 'rtl' : 'ltr'
//                             }}
//                           >
//                             {language.name} ({language.nativeName})
//                           </MuiMenuItem>
//                         ))}
//                       </Menu>
  
//                       {/* User Profile / Sign In Button */}
//                       {isAuthenticated ? (
//                         <>
//                           <Tooltip title={t('newprofile.header.profile')}>
//                             <IconButton
//                               onClick={openProfileMenu}
//                               color="inherit"
//                               sx={{ 
//                                 border: '1px solid',
//                                 borderColor: 'grey.300'
//                               }}
//                             >
//                               <AccountCircle />
//                             </IconButton>
//                           </Tooltip>
  
//                           {/* Profile Menu */}
//                           <Menu
//                             anchorEl={profileMenuAnchor}
//                             open={Boolean(profileMenuAnchor)}
//                             onClose={closeProfileMenu}
//                           >
//                             <MuiMenuItem onClick={closeProfileMenu}>
//                               <ListItemIcon>
//                                 <AccountCircle fontSize="small" />
//                               </ListItemIcon>
//                               <ListItemText 
//                                 primary={userData[0]?.Name || t('newprofile.header.profile')}
//                                 sx={{ 
//                                   fontFamily: i18n.language === 'fa' ? 'Vazir, Arial' : 'inherit'
//                                 }}
//                               />
//                             </MuiMenuItem>
//                             <Divider />
//                             {/* <MuiMenuItem onClick={closeProfileMenu}>
//                               <ListItemIcon>
//                                 <BusIcon fontSize="small" />
//                               </ListItemIcon>
//                               <ListItemText 
//                                 primary={t('newprofile.header.myTickets')}
//                                 sx={{ 
//                                   fontFamily: i18n.language === 'fa' ? 'Vazir, Arial' : 'inherit'
//                                 }}
//                               />
//                             </MuiMenuItem>
//                             <MuiMenuItem onClick={closeProfileMenu}>
//                               <ListItemIcon>
//                                 <TruckIcon fontSize="small" />
//                               </ListItemIcon>
//                               <ListItemText 
//                                 primary={t('newprofile.header.myOrders')}
//                                 sx={{ 
//                                   fontFamily: i18n.language === 'fa' ? 'Vazir, Arial' : 'inherit'
//                                 }}
//                               />
//                             </MuiMenuItem>
//                             <Divider /> */}
//                             <MuiMenuItem onClick={closeProfileMenu}>
//                               <ListItemIcon>
//                                 <CloseIcon fontSize="small" />
//                               </ListItemIcon>
//                               <ListItemText 
//                                 primary={t('newprofile.header.logout')}
//                                 sx={{ 
//                                   fontFamily: i18n.language === 'fa' ? 'Vazir, Arial' : 'inherit',
//                                   color: 'error.main'
//                                 }}
//                               />
//                             </MuiMenuItem>
//                           </Menu>
//                         </>
//                       ) : (
//                         <Button
//                           variant="outlined"
//                           startIcon={<PersonOutlineIcon />}
//                           onClick={handleSignModalOpen}
//                           sx={{ 
//                             textTransform: 'none',
//                             borderColor: 'grey.300',
//                             color: 'text.secondary',
//                             fontFamily: i18n.language === 'fa' ? 'Vazir, Arial' : 'inherit'
//                           }}
//                         >
//                           {t('newprofile.header.signIn')}
//                         </Button>
//                       )}
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
//           anchor={i18n.language === 'fa' ? 'right' : 'left'}
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
          
//           {/* User Info in Mobile Drawer */}
//           <Box sx={{ p: 2, bgcolor: 'grey.50', mb: 2 }}>
//             {isAuthenticated ? (
//               <Stack direction="row" spacing={2} alignItems="center">
//                 <Avatar>
//                   <AccountCircle />
//                 </Avatar>
//                 <Box>
//                   <Typography variant="subtitle1">
//                     {userData[0]?.Name || t('newprofile.header.welcome')}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {userData[0]?.Mobile}
//                   </Typography>
//                 </Box>
//               </Stack>
//             ) : (
//               <Button
//                 variant="outlined"
//                 fullWidth
//                 startIcon={<PersonOutlineIcon />}
//                 onClick={handleSignModalOpen}
//               >
//                 {t('newprofile.header.signIn')}
//               </Button>
//             )}
//           </Box>
          
//           {/* Language Selector in Mobile */}
//           <Box sx={{ px: 2, mb: 2 }}>
//             <Typography variant="subtitle2" color="text.secondary" gutterBottom>
//               {t('newprofile.header.selectLanguage')}
//             </Typography>
//             <Stack direction="row" spacing={1}>
//               {languages.map((language) => (
//                 <Chip
//                   key={language.code}
//                   label={language.nativeName}
//                   onClick={() => changeLanguage(language.code)}
//                   variant={i18n.language === language.code ? "filled" : "outlined"}
//                   color={i18n.language === language.code ? "primary" : "default"}
//                   size="small"
//                 />
//               ))}
//             </Stack>
//           </Box>
          
//           <Divider sx={{ mb: 1 }} />
          
//           <List>
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
//               </Stack>
//             </Box>
//           </DialogContent>
//         </Dialog>
  
//         {/* Share Modal - Unchanged */}
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
  
//   export default Header;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//   const navigate = useNavigate();
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.setAttribute('data-bs-theme', darkMode ? 'light' : 'dark');
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <>
//       {/* Offcanvas Menu */}
//       <div className="offcanvas offcanvas-start" id="offcanvasMenu" tabIndex="-1" aria-labelledby="offcanvasMenuLabel">
//         {/* محتوای منو آف‌کنواس */}
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title text-muted" id="offcanvasMenuLabel">منو کاربری</h5>
//           <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body">
//           <div className="h-100 nt-flex-column">
//             <div className="w-100 flex-grow-1">
//               <div className="nt-flex-between-center gap-2 mb-4">
//                 <div className="nt-flex-start-center">
//                   <img src="./img/logo-m.png" alt="پرتو سیر" width="80"/>
//                 </div>
//                 <button 
//                   className="btnSwitch btn btn-lg btn-light" 
//                   type="button" 
//                   aria-label="تغییر حالت روشن و تاریک سایت"
//                   onClick={toggleTheme}
//                 >
//                   <i className={`ti ti-${darkMode ? 'moon' : 'sun'} fs-5`} aria-hidden="true"></i>
//                 </button>
//               </div>
              
//               <div className="accordion accordion-flush" id="accordionOffcanvasMenu">
//                 <div className="accordion-item">
//                   <h2 className="accordion-header">
//                     <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#accordionOffcanvasMenu1">خدمات سفر</button>
//                   </h2>
//                   <div className="accordion-collapse collapse" id="accordionOffcanvasMenu1" data-bs-parent="#accordionOffcanvasMenu">
//                     <div className="accordion-body">
//                       <ul className="list-unstyled nt-flex-column">
//                         <li>
//                           <button 
//                             className="btn btn-link link-dark fs-5" 
//                             onClick={() => handleNavigation('/')}
//                           >
//                             <i className="ti ti-bus fs-4" aria-hidden="true"></i>اتوبوس
//                           </button>
//                         </li>
//                         <li>
//                           <button 
//                             className="btn btn-link link-dark fs-5" 
//                             onClick={() => handleNavigation('/booking-taxi')}
//                           >
//                             <i className="ti ti-car fs-4" aria-hidden="true"></i>تاکسی
//                           </button>
//                         </li>
//                         <li>
//                           <button 
//                             className="btn btn-link link-dark fs-5" 
//                             onClick={() => handleNavigation('/booking-van')}
//                           >
//                             <i className="ti ti-rv-truck fs-4" aria-hidden="true"></i>ون
//                           </button>
//                         </li>
//                         <li>
//                           <button 
//                             className="btn btn-link link-dark fs-5" 
//                             onClick={() => handleNavigation('/booking-bar')}
//                           >
//                             <i className="ti ti-truck fs-4" aria-hidden="true"></i>باربری
//                           </button>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <nav className="nt-flex-column">
//                 <button 
//                   className="btn btn-link link-dark fs-5" 
//                   onClick={() => handleNavigation('/about-us')}
//                 >
//                   درباره ما
//                 </button>
//                 <button 
//                   className="btn btn-link link-dark fs-5" 
//                   onClick={() => handleNavigation('/contact')}
//                 >
//                   تماس با ما
//                 </button>
//                 <button 
//                   className="btn btn-link link-dark fs-5" 
//                   onClick={() => handleNavigation('/branches')}
//                 >
//                   ایستگاه ها
//                 </button>
//                 <button 
//                   className="btn btn-link link-dark fs-5" 
//                   onClick={() => handleNavigation('/reserved-tickets')}
//                 >
//                   بلیط های رزرو شده
//                 </button>
//               </nav>
//             </div>
//             <div className="w-100 border-top py-3">
//               <div className="nt-flex-column-center-center">
//                 <div className="text-muted">پرتو سیر; همراه همیشگی سفرهای شما.</div>
//                 <div className="nt-flex-start-center text-muted" role="contentinfo" aria-label="اطلاعات حق نشر">
//                   <span className="visually-hidden">حق نشر ©</span>
//                   <i className="ti ti-copyright fs-5" aria-hidden="true"></i>
//                   ۱۴۰۴ پرتو سیر. تمامی حقوق محفوظ است.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Header Main */}
//       <header className="header">
//         <div className="container py-3">
//           <div className="row align-items-center">
//             {/* Logo & Mobile Menu */}
//             <div className="col-auto">
//               <div className="nt-flex-start-center">
//                 {/* Mobile Menu Button */}
//                 <div className="d-md-none">
//                   <button 
//                     className="btn btn-link link" 
//                     type="button" 
//                     data-bs-toggle="offcanvas" 
//                     data-bs-target="#offcanvasMenu"
//                     aria-label="باز کردن منو"
//                   >
//                     <i className="ti ti-menu-2 fs-1" aria-hidden="true"></i>
//                   </button>
//                 </div>
                
//                 {/* Logo */}
//                 <button 
//                   className="header-logo link" 
//                   onClick={() => handleNavigation('/')}
//                   style={{ background: 'none', border: 'none', textAlign: 'right' }}
//                 >
//                   <img src="./img/logo-m.png" alt="پرتو سیر" width="100"/>
//                   <h1 className="fs-4 fw-bold">پرتو سیر</h1>
//                 </button>
//               </div>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="col">
//               <nav className="header-nav d-none d-md-flex">
//                 {/* Services Dropdown */}
//                 <div className="dropdown">
//                   <button className="btn btn-link link dropdown-toggle" type="button" data-bs-toggle="dropdown">
//                     خدمات سفر
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <button 
//                         className="dropdown-item" 
//                         onClick={() => handleNavigation('/')}
//                       >
//                         <i className="ti ti-bus fs-4" aria-hidden="true"></i> اتوبوس
//                       </button>
//                     </li>
//                     <li>
//                       <button 
//                         className="dropdown-item" 
//                         onClick={() => handleNavigation('/booking-taxi')}
//                       >
//                         <i className="ti ti-car fs-4" aria-hidden="true"></i>تاکسی
//                       </button>
//                     </li>
//                     <li>
//                       <button 
//                         className="dropdown-item" 
//                         onClick={() => handleNavigation('/booking-van')}
//                       >
//                         <i className="ti ti-rv-truck fs-4" aria-hidden="true"></i>ون
//                       </button>
//                     </li>
//                     <li>
//                       <button 
//                         className="dropdown-item" 
//                         onClick={() => handleNavigation('/booking-bar')}
//                       >
//                         <i className="ti ti-truck fs-4" aria-hidden="true"></i>باربری
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
                
//                 {/* Navigation Links */}
//                 <button 
//                   className="btn btn-link link" 
//                   onClick={() => handleNavigation('/about-us')}
//                 >
//                   درباره ما
//                 </button>
                
//                 <button 
//                   className="btn btn-link link" 
//                   onClick={() => handleNavigation('/contact')}
//                 >
//                   تماس با ما
//                 </button>
                
//                 <button 
//                   className="btn btn-link link" 
//                   onClick={() => handleNavigation('/branches')}
//                 >
//                   ایستگاه ها
//                 </button>
                
//                 <button 
//                   className="btn btn-link link" 
//                   onClick={() => handleNavigation('/reserved-tickets')}
//                 >
//                   بلیط های رزرو شده
//                 </button>
//               </nav>
//             </div>
            
//             {/* Theme Switcher */}
//             <div className="col-auto d-none d-md-flex">
//               <button 
//                 className="btnSwitch btn btn-lg btn-light" 
//                 type="button" 
//                 aria-label="تغییر حالت روشن و تاریک سایت"
//                 onClick={toggleTheme}
//               >
//                 <i className={`ti ti-${darkMode ? 'moon' : 'sun'} fs-5`} aria-hidden="true"></i>
//               </button>
//             </div>
            
//             {/* User */}
//             <div className="col-auto">
//               <button 
//                 className="btn btn-light header-user" 
//                 type="button" 
//                 data-bs-toggle="modal" 
//                 data-bs-target="#signModal"
//               >
//                 <i className="ti ti-user fs-3 text-muted" aria-hidden="true"></i>
//                 <div className="fs-6">ورود یا ثبت نام</div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import '@tabler/icons-webfont/tabler-icons.min.css';
// import '../../css/style.css'; // مسیر به فایل استایل شما

// const Header = () => {
//   const navigate = useNavigate();
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     // بارگذاری اسکریپت‌های Bootstrap
//     const loadBootstrapScripts = () => {
//       // اگر Bootstrap هنوز بارگذاری نشده باشد
//       if (typeof window.bootstrap === 'undefined') {
//         const script = document.createElement('script');
//         script.src = './vendor/lib/bootstrap/js/bootstrap.bundle.min.js';
//         script.async = true;
//         document.body.appendChild(script);
//       }
//     };

//     loadBootstrapScripts();
//   }, []);

//   const toggleTheme = () => {
//     const newDarkMode = !darkMode;
//     setDarkMode(newDarkMode);
//     document.documentElement.setAttribute('data-bs-theme', newDarkMode ? 'dark' : 'light');
    
//     // آپدیت آیکون
//     const themeIcon = document.querySelector('.btnSwitch i');
//     if (themeIcon) {
//       themeIcon.className = `ti ti-${newDarkMode ? 'moon' : 'sun'} fs-5`;
//     }
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   const handleSignModal = () => {
//     // باز کردن modal لاگین با Bootstrap
//     const signModal = document.getElementById('signModal');
//     if (signModal && window.bootstrap) {
//       const modal = new window.bootstrap.Modal(signModal);
//       modal.show();
//     }
//   };

//   return (
//     <>
//       {/* Offcanvas Menu */}
//       <div className="offcanvas offcanvas-start" id="offcanvasMenu" tabIndex="-1" aria-labelledby="offcanvasMenuLabel">
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title text-muted" id="offcanvasMenuLabel">منو کاربری</h5>
//           <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body">
//           <div className="h-100 nt-flex-column">
//             <div className="w-100 flex-grow-1">
//               <div className="nt-flex-between-center gap-2 mb-4">
//                 <div className="nt-flex-start-center">
//                   <img src="./img/logo-m.png" alt="پرتو سیر" width="80"/>
//                 </div>
            
//               </div>
              
//               <div className="accordion accordion-flush" id="accordionOffcanvasMenu">
//                 <div className="accordion-item">
//                   <h2 className="accordion-header">
//                     <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#accordionOffcanvasMenu1">خدمات سفر</button>
//                   </h2>
//                   <div className="accordion-collapse collapse" id="accordionOffcanvasMenu1" data-bs-parent="#accordionOffcanvasMenu">
//                     <div className="accordion-body">
//                       <ul className="list-unstyled nt-flex-column">
//                         <li>
//                           <button 
//                             className="btn btn-link link-dark fs-5 w-100 text-start" 
//                             onClick={() => handleNavigation('/')}
//                           >
//                             <i className="ti ti-bus fs-4 me-2" aria-hidden="true"></i>اتوبوس
//                           </button>
//                         </li>
//                         <li>
//                           <button 
//                             className="btn btn-link link-dark fs-5 w-100 text-start" 
//                             onClick={() => handleNavigation('/booking-taxi')}
//                           >
//                             <i className="ti ti-car fs-4 me-2" aria-hidden="true"></i>تاکسی
//                           </button>
//                         </li>
//                         <li>
//                           <button 
//                             className="btn btn-link link-dark fs-5 w-100 text-start" 
//                             onClick={() => handleNavigation('/booking-van')}
//                           >
//                             <i className="ti ti-rv-truck fs-4 me-2" aria-hidden="true"></i>ون
//                           </button>
//                         </li>
//                         <li>
//                           <button 
//                             className="btn btn-link link-dark fs-5 w-100 text-start" 
//                             onClick={() => handleNavigation('/booking-bar')}
//                           >
//                             <i className="ti ti-truck fs-4 me-2" aria-hidden="true"></i>باربری
//                           </button>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <nav className="nt-flex-column">
//                 <button 
//                   className="btn btn-link link-dark fs-5 w-100 text-start" 
//                   onClick={() => handleNavigation('/about-us')}
//                 >
//                   درباره ما
//                 </button>
//                 <button 
//                   className="btn btn-link link-dark fs-5 w-100 text-start" 
//                   onClick={() => handleNavigation('/contact')}
//                 >
//                   تماس با ما
//                 </button>
//                 <button 
//                   className="btn btn-link link-dark fs-5 w-100 text-start" 
//                   onClick={() => handleNavigation('/branches')}
//                 >
//                   ایستگاه ها
//                 </button>
//                 <button 
//                   className="btn btn-link link-dark fs-5 w-100 text-start" 
//                   onClick={() => handleNavigation('/reserved-tickets')}
//                 >
//                   بلیط های رزرو شده
//                 </button>
//               </nav>
//             </div>
//             <div className="w-100 border-top py-3">
//               <div className="nt-flex-column-center-center">
//                 <div className="text-muted">پرتو سیر; همراه همیشگی سفرهای شما.</div>
//                 <div className="nt-flex-start-center text-muted" role="contentinfo" aria-label="اطلاعات حق نشر">
//                   <span className="visually-hidden">حق نشر ©</span>
//                   <i className="ti ti-copyright fs-5" aria-hidden="true"></i>
//                   ۱۴۰۴ پرتو سیر. تمامی حقوق محفوظ است.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Header Main */}
//       <header className="header">
//         <div className="container py-3">
//           <div className="row align-items-center">
//             {/* Logo & Mobile Menu */}
//             <div className="col-auto">
//               <div className="nt-flex-start-center">
//                 {/* Mobile Menu Button */}
//                 <div className="d-md-none">
//                   <button 
//                     className="btn btn-link link" 
//                     type="button" 
//                     data-bs-toggle="offcanvas" 
//                     data-bs-target="#offcanvasMenu"
//                     aria-label="باز کردن منو"
//                   >
//                     <i className="ti ti-menu-2 fs-1" aria-hidden="true"></i>
//                   </button>
//                 </div>
                
//                 {/* Logo */}
//                 <button 
//                   className="header-logo link" 
//                   onClick={() => handleNavigation('/')}
//                   style={{ background: 'none', border: 'none', textAlign: 'right' }}
//                 >
//                   <img src="./img/logo-m.png" alt="پرتو سیر" width="100"/>
//                   <h1 className="fs-4 fw-bold mb-0">پرتو سیر</h1>
//                 </button>
//               </div>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="col">
//               <nav className="header-nav d-none d-md-flex">
//                 {/* Services Dropdown */}
//                 <div className="dropdown">
//                   <button className="btn btn-link link dropdown-toggle" type="button" data-bs-toggle="dropdown">
//                     خدمات سفر
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <button 
//                         className="dropdown-item" 
//                         onClick={() => handleNavigation('/')}
//                       >
//                         <i className="ti ti-bus fs-4 me-2" aria-hidden="true"></i> اتوبوس
//                       </button>
//                     </li>
//                     <li>
//                       <button 
//                         className="dropdown-item" 
//                         onClick={() => handleNavigation('/booking-taxi')}
//                       >
//                         <i className="ti ti-car fs-4 me-2" aria-hidden="true"></i>تاکسی
//                       </button>
//                     </li>
//                     <li>
//                       <button 
//                         className="dropdown-item" 
//                         onClick={() => handleNavigation('/booking-van')}
//                       >
//                         <i className="ti ti-rv-truck fs-4 me-2" aria-hidden="true"></i>ون
//                       </button>
//                     </li>
//                     <li>
//                       <button 
//                         className="dropdown-item" 
//                         onClick={() => handleNavigation('/booking-bar')}
//                       >
//                         <i className="ti ti-truck fs-4 me-2" aria-hidden="true"></i>باربری
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
                
//                 {/* Navigation Links */}
//                 <button 
//                   className="btn btn-link link" 
//                   onClick={() => handleNavigation('/about-us')}
//                 >
//                   درباره ما
//                 </button>
                
//                 <button 
//                   className="btn btn-link link" 
//                   onClick={() => handleNavigation('/contact')}
//                 >
//                   تماس با ما
//                 </button>
                
//                 <button 
//                   className="btn btn-link link" 
//                   onClick={() => handleNavigation('/branches')}
//                 >
//                   ایستگاه ها
//                 </button>
                
//                 <button 
//                   className="btn btn-link link" 
//                   onClick={() => handleNavigation('/reserved-tickets')}
//                 >
//                   بلیط های رزرو شده
//                 </button>
//               </nav>
//             </div>
            
//             {/* Theme Switcher */}
//             <div className="col-auto d-none d-md-flex">
//               <button 
//                 className="btnSwitch btn btn-lg btn-light" 
//                 type="button" 
//                 aria-label="تغییر حالت روشن و تاریک سایت"
//                 onClick={toggleTheme}
//               >
//                 <i className={`ti ti-${darkMode ? 'moon' : 'sun'} fs-5`} aria-hidden="true"></i>
//               </button>
//             </div>
            
//             {/* User */}
//             <div className="col-auto">
//               <button 
//                 className="btn btn-light header-user" 
//                 type="button" 
//                 onClick={handleSignModal}
//               >
//                 <i className="ti ti-user fs-3 text-muted" aria-hidden="true"></i>
//                 <div className="fs-6">ورود یا ثبت نام</div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Modal Sign */}
//       <div className="modal fade" id="signModal" tabIndex="-1" aria-labelledby="signModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <div className="wrapper-xs py-5 text-center"> 
//                 <div className="fs-5 fw-bold mb-2">ورود یا ثبت‌نام </div>
//                 <p className="lead">برای ادامه شماره موبایل خود را وارد کنید. </p>
//                 <form action=""> 
//                   <div className="form-floating mb-2">
//                     <input className="form-control form-control-lg" type="tel" name="" placeholder="شماره موبایل" id="floatingInput"/>
//                     <label htmlFor="floatingInput">شماره موبایل</label>
//                   </div>
//                   <div className="nt-flex-center-center gap-1 small mb-4">
//                     <i className="ti ti-info-circle fs-5 text-muted" aria-hidden="true"></i>
//                     استفاده از پرتو سیر به معنی پذیرش
//                     <a className="link" href=""> قوانین و مقررات</a>
//                     این سرویس است.
//                   </div>
//                   <div className="d-grid gap-3">
//                     <button className="btn btn-primary btn-lg" type="submit">
//                       تایید و دریافت
//                     </button>
//                     <button className="btn btn-link" type="button">
//                       ورود با کلمه عبور
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bootstrap Scripts */}
//       <script src="./vendor/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
//     </>
//   );
// };

// export default Header;



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Header = ({ theme, toggleTheme, setShowSignModal, setShowMenu }) => {
//   const navigate = useNavigate();

//   return (
//     <header className="header dynamic">
//       <div className="container py-3">
//         <div className="row align-items-center">
//           <div className="col-auto">
//             <div className="nt-flex-start-center">
//               <div className="d-md-none">
//                 <button className="btn btn-link link" type="button" onClick={() => setShowMenu(true)} aria-label="باز کردن منو">
//                   <i className="ti ti-menu-2 fs-1" aria-hidden="true"></i>
//                 </button>
//               </div>
//               <Link className="header-logo link" to="/">
//                 <img src="./img/logo-m.png" alt="پرتو سیر" width="100" />
//                 <h1 className="fs-4 fw-bold">پرتو سیر</h1>
//               </Link>
//             </div>
//           </div>
//           <div className="col">
//             <nav className="header-nav d-none d-md-flex">
//               <div className="dropdown">
//                 <button className="btn btn-link link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   خدمات سفر
//                 </button>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link className="dropdown-item" to="/">
//                       <i className="ti ti-bus fs-4" aria-hidden="true"></i> اتوبوس
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/booking-taxi">
//                       <i className="ti ti-car fs-4" aria-hidden="true"></i>تاکسی
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/booking-van">
//                       <i className="ti ti-rv-truck fs-4" aria-hidden="true"></i>ون
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/booking-bar">
//                       <i className="ti ti-truck fs-4" aria-hidden="true"></i>باربری
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <Link className="btn btn-link link" to="/about">درباره ما</Link>
//               <Link className="btn btn-link link" to="/contact">تماس با ما</Link>
//               <Link className="btn btn-link link" to="/branches">ایستگاه ها</Link>
//               <button className="btn btn-link link" onClick={() => {}}>بلیط های رزرو شده</button>
//             </nav>
//           </div>
         
//           <div className="col-auto">
//             <button className="btn btn-light header-user" type="button" onClick={() => setShowSignModal(true)}>
//               <i className="ti ti-user fs-3 text-muted" aria-hidden="true"></i>
//               <div className="fs-6">ورود یا ثبت نام</div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from '../../UserContext';
import { LoginAPI, VerifyAPI } from '../../Api/ApiMaster';

const Header = ({ theme, toggleTheme, setShowMenu }) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  
  const [showSignModal, setShowSignModal] = useState(false);
  const [loginStep, setLoginStep] = useState('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [error, setError] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  // چک کردن لاگین بودن کاربر
  const isLoggedIn = userData && 
                    Array.isArray(userData) && 
                    userData.length > 0 && 
                    userData[0]?.Token;

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await LoginAPI(
        phoneNumber,
        null,
        userData,
        setUserData,
        setIsLoading
      );
      
      console.log('LoginAPI response:', response);
      
      // رفتن به مرحله وریفای
      setLoginStep('verify');
      setCountdown(60);
      
    } catch (error) {
      console.error('Login error:', error);
      setError('خطا در ارسال کد تأیید');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await VerifyAPI(
        phoneNumber,
        verificationCode,
        () => {},
        setIsLoading,
        userData,
        setUserData,
        () => {},
        () => {
          console.log('Verification successful');
          setShowSignModal(false);
          setPhoneNumber('');
          setVerificationCode('');
          setLoginStep('phone');
          window.location.reload();
        }
      );
    } catch (error) {
      console.error('Verification error:', error);
      setError('کد تأیید نامعتبر است');
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (countdown > 0) return;
    
    setIsLoading(true);
    try {
      await LoginAPI(
        phoneNumber,
        null,
        userData,
        setUserData,
        setIsLoading
      );
      setCountdown(60);
      setError('');
    } catch (error) {
      console.error('Resend error:', error);
      setError('خطا در ارسال مجدد کد');
    } finally {
      setIsLoading(false);
    }
  };

  // const handleLogout = () => {
  //   setUserData([]);
  //   localStorage.removeItem('authToken');
  //   localStorage.removeItem('userPhone');
  //   window.location.reload();
  // };

  const handleLogout = () => {
          try {
                  setUserData([{
                    UserId: '',
                    Username: '',
                    CurrentDate: '',
                    StartPlace: '',
                    EndPlace: '',
                    StartPlaceCode: '',
                    EndPlaceCode: '',
                    isLoading: true,
                    Mobile: '',
                    RequestNumber: '',
                    Name: '',Email:''
                  }]);
            
                  localStorage.removeItem('storageData');
                  localStorage.removeItem('UserId');
                  localStorage.removeItem('Username');
                  localStorage.removeItem('Token');
            
                 
                } catch (error) {
                 
                }
         
          window.location.reload();
        };

  // Countdown timer effect
  React.useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [countdown]);

  return (
    <>
      <header className="header dynamic">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-auto">
              <div className="nt-flex-start-center">
                <div className="d-md-none">
                  <button className="btn btn-link link" type="button" onClick={() => setShowMenu(true)} aria-label="باز کردن منو">
                    <i className="ti ti-menu-2 fs-1" aria-hidden="true"></i>
                  </button>
                </div>
                <Link className="header-logo link" to="/">
                  <img src="./img/logo-m.png" alt="پرتو سیر" width="100" />
                  <h1 className="fs-4 fw-bold">پرتو سیر</h1>
                </Link>
              </div>
            </div>
            <div className="col">
              <nav className="header-nav d-none d-md-flex">
                {/* خدمات سفر Dropdown با React Bootstrap */}
                <Dropdown 
                  show={showServicesDropdown} 
                  onToggle={(isOpen) => setShowServicesDropdown(isOpen)}
                >
                  <Dropdown.Toggle as={CustomToggle} id="services-dropdown">
                    <span className="btn btn-link link">خدمات سفر</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/">
                      <i className="ti ti-bus fs-4 me-2" aria-hidden="true"></i>
                      اتوبوس
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/">
                      <i className="ti ti-car fs-4 me-2" aria-hidden="true"></i>
                      تاکسی
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/">
                      <i className="ti ti-rv-truck fs-4 me-2" aria-hidden="true"></i>
                      ون
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/">
                      <i className="ti ti-truck fs-4 me-2" aria-hidden="true"></i>
                      باربری
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Link className="btn btn-link link" to="/about">درباره ما</Link>
                <Link className="btn btn-link link" to="/contact">تماس با ما</Link>
                <Link className="btn btn-link link" to="/branches">ایستگاه ها</Link>
                <button className="btn btn-link link" onClick={() => {navigate('/profile-orders')}}>بلیط های رزرو شده</button>
              </nav>
            </div>
           
            <div className="col-auto">
              {isLoggedIn ? (
                <Dropdown 
                  show={showDropdown} 
                  onToggle={(isOpen) => setShowDropdown(isOpen)}
                  align="end"
                >
                  <Dropdown.Toggle as={CustomUserToggle} id="user-dropdown">
                    <div className="btn btn-light header-user">
                      <i className="ti ti-user-check fs-3 text-primary" aria-hidden="true"></i>
                      <div className="fs-6">
                        {userData[0]?.Name}
                      </div>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profile">
                      <i className="ti ti-user-circle fs-4 me-2"></i>
                      پروفایل
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/profile-orders">
                      <i className="ti ti-ticket fs-4 me-2"></i>
                      بلیط‌های من
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout} className="text-danger">
                      <i className="ti ti-logout fs-4 me-2"></i>
                      خروج
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <button className="btn btn-light header-user" type="button" onClick={() => setShowSignModal(true)}>
                  <i className="ti ti-user fs-3 text-muted" aria-hidden="true"></i>
                  <div className="fs-6">ورود یا ثبت نام</div>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Modal ورود و ثبت‌نام */}
      <div className={`modal fade ${showSignModal ? 'show' : ''}`} id="signModal" tabIndex="-1" aria-labelledby="signModalLabel" aria-hidden={!showSignModal} style={showSignModal ? {display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'} : {}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button className="btn-close" type="button" onClick={() => {
                setShowSignModal(false);
                setError('');
                setPhoneNumber('');
                setVerificationCode('');
                setLoginStep('phone');
              }} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {loginStep === 'phone' ? (
                <div className="wrapper-xs py-5 text-center">
                  <div className="fs-5 fw-bold mb-2">ورود یا ثبت‌نام</div>
                  <p className="lead">برای ادامه شماره موبایل خود را وارد کنید.</p>
                  
                  {error && (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                      {error}
                      <button type="button" className="btn-close" onClick={() => setError('')}></button>
                    </div>
                  )}
                  
                  <form onSubmit={handlePhoneSubmit}>
                    <div className="form-floating mb-2">
                      <input
                        className="form-control form-control-lg"
                        type="tel"
                        placeholder="شماره موبایل"
                        id="floatingInput"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        dir="ltr"
                        pattern="09[0-9]{9}"
                        maxLength="11"
                        disabled={isLoading}
                      />
                      <label htmlFor="floatingInput">شماره موبایل</label>
                    </div>
                    
                    <div className="nt-flex-center-center gap-1 small mb-4">
                      <i className="ti ti-info-circle fs-5 text-muted" aria-hidden="true"></i>
                      استفاده از پرتو سیر به معنی پذیرش
                      <Link className="link text-primary" to="/terms" onClick={() => setShowSignModal(false)}> قوانین و مقررات</Link>
                      این سرویس است.
                    </div>
                    
                    <div className="d-grid gap-3">
                      <button 
                        className="btn btn-primary btn-lg" 
                        type="submit"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            در حال ارسال...
                          </>
                        ) : (
                          'تایید و دریافت کد'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="wrapper-xs py-5 text-center">
                  <div className="fs-5 fw-bold mb-2">تأیید کد</div>
                  <p className="lead">کد تأیید به شماره {phoneNumber} ارسال شد.</p>
                  
                  {error && (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                      {error}
                      <button type="button" className="btn-close" onClick={() => setError('')}></button>
                    </div>
                  )}
                  
                  <form onSubmit={handleVerifySubmit}>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="کد تأیید"
                        id="verificationCode"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                        dir="ltr"
                        inputMode="numeric"
                        maxLength="6"
                        disabled={isLoading}
                      />
                      <label htmlFor="verificationCode">کد تأیید</label>
                    </div>
                    
                    <div className="mb-4">
                      <button 
                        type="button" 
                        className="btn btn-link p-0"
                        onClick={handleResendCode}
                        disabled={countdown > 0 || isLoading}
                      >
                        {countdown > 0 ? (
                          `ارسال مجدد (${countdown} ثانیه)`
                        ) : (
                          'ارسال مجدد کد'
                        )}
                      </button>
                    </div>
                    
                    <div className="d-grid gap-3">
                      <button 
                        className="btn btn-primary btn-lg" 
                        type="submit"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            در حال تأیید...
                          </>
                        ) : (
                          'تأیید و ورود'
                        )}
                      </button>
                      
                      <button 
                        type="button" 
                        className="btn btn-outline-secondary"
                        onClick={() => {
                          setLoginStep('phone');
                          setVerificationCode('');
                          setError('');
                        }}
                        disabled={isLoading}
                      >
                        تغییر شماره موبایل
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// کامپوننت‌های سفارشی برای Dropdown Toggle
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <button
    className="btn btn-link link"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    style={{ background: 'none', border: 'none', color: 'inherit' }}
  >
    {children}
  </button>
));

const CustomUserToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    style={{ cursor: 'pointer' }}
  >
    {children}
  </div>
));

export default Header;