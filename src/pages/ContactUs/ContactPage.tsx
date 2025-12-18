// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   TextField,
//   Paper,
//   useTheme,
//   useMediaQuery,
//   Divider,
//   IconButton
// } from '@mui/material';
// import {
//   Phone as PhoneIcon,
//   Email as EmailIcon,
//   LocationOn as LocationIcon,
//   Send as SendIcon,
//   ContactMail as ContactMailIcon
// } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';

// const ContactPage: React.FC = () => {
//   const { t } = useTranslation();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
//   const [formData, setFormData] = useState({
//     fullName: '',
//     subject: '',
//     ticketNumber: '',
//     message: ''
//   });

//   const contactInfo = {
//     phone: [
//       t('newprofile.contact.phone.primary'),
//       t('newprofile.contact.phone.secondary')
//     ],
//     email: t('newprofile.contact.email.address'),
//     address: t('newprofile.contact.address.location')
//   };

//   const galleryImages = [
//     { src: '../../img/pages/contact/1.jpg', alt: t('newprofile.contact.gallery.alt') },
//     { src: '../../img/pages/contact/2.jpg', alt: t('newprofile.contact.gallery.alt') },
//     { src: '../../img/pages/contact/3.jpg', alt: t('newprofile.contact.gallery.alt') },
//     { src: '../../img/pages/contact/4.jpg', alt: t('newprofile.contact.gallery.alt') },
//     { src: '../../img/pages/contact/5.jpg', alt: t('newprofile.contact.gallery.alt') },
//     { src: '../../img/pages/contact/6.jpg', alt: t('newprofile.contact.gallery.alt') },
//     { src: '../../img/pages/contact/7.jpg', alt: t('newprofile.contact.gallery.alt') },
//     { src: '../../img/pages/contact/8.jpg', alt: t('newprofile.contact.gallery.alt') }
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
//       {/* Hero Section with Contact Form */}
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
//               borderRadius: 2,
//               p: { xs: 3, md: 5 }
//             }}
//           >
//             {/* Section Title */}
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
//               <ContactMailIcon sx={{ fontSize: 32, color: 'primary.main' }} />
//               <Typography variant="h4" fontWeight="bold">
//                 {t('newprofile.contact.title')}
//               </Typography>
//             </Box>

//             {/* Contact Form */}
//             <form onSubmit={handleSubmit}>
//               <Grid container spacing={3}>
//                 {/* Full Name */}
//                 <Grid item xs={12} md={6} lg={4}>
//                   <TextField
//                     fullWidth
//                     size="medium"
//                     label={t('newprofile.contact.form.fullName')}
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     required
//                     sx={{
//                       '& .MuiOutlinedInput-root': {
//                         borderRadius: 2
//                       }
//                     }}
//                   />
//                 </Grid>

//                 {/* Subject */}
//                 <Grid item xs={12} md={6} lg={4}>
//                   <TextField
//                     fullWidth
//                     size="medium"
//                     label={t('newprofile.contact.form.subject')}
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     sx={{
//                       '& .MuiOutlinedInput-root': {
//                         borderRadius: 2
//                       }
//                     }}
//                   />
//                 </Grid>

//                 {/* Ticket Number */}
//                 <Grid item xs={12} md={6} lg={4}>
//                   <TextField
//                     fullWidth
//                     size="medium"
//                     label={t('newprofile.contact.form.ticketNumber')}
//                     name="ticketNumber"
//                     value={formData.ticketNumber}
//                     onChange={handleInputChange}
//                     sx={{
//                       '& .MuiOutlinedInput-root': {
//                         borderRadius: 2
//                       }
//                     }}
//                   />
//                 </Grid>

//                 {/* Message */}
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     multiline
//                     rows={6}
//                     label={t('newprofile.contact.form.message')}
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     sx={{
//                       '& .MuiOutlinedInput-root': {
//                         borderRadius: 2
//                       }
//                     }}
//                   />
//                 </Grid>

//                 {/* Form Footer */}
//                 <Grid item xs={12}>
//                   <Box sx={{ 
//                     display: 'flex', 
//                     justifyContent: 'space-between', 
//                     alignItems: { xs: 'stretch', md: 'center' },
//                     flexDirection: { xs: 'column', md: 'row' },
//                     gap: 2
//                   }}>
//                     {/* Required Fields Note */}
//                     <Typography 
//                       variant="body2" 
//                       color="text.secondary"
//                       sx={{ 
//                         textAlign: { xs: 'center', md: 'left' },
//                         order: { xs: 2, md: 1 }
//                       }}
//                     >
//                       {t('newprofile.contact.form.requiredFields')}
//                     </Typography>

//                     {/* Submit Button */}
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       color="primary"
//                       size="large"
//                       endIcon={<SendIcon />}
//                       sx={{
//                         borderRadius: 2,
//                         px: 4,
//                         py: 1.5,
//                         fontWeight: 'bold',
//                         order: { xs: 1, md: 2 }
//                       }}
//                     >
//                       {t('newprofile.contact.form.submit')}
//                     </Button>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </form>
//           </Paper>
//         </Container>
//       </Box>

//       {/* Contact Information Section */}
//       <Container sx={{ py: 8 }}>
//         <Grid container spacing={4} alignItems="flex-start">
//           {/* Contact Description */}
//           <Grid item xs={12} md={5}>
//             <Typography 
//               variant="h5" 
//               fontWeight="bold" 
//               gutterBottom
//               color="primary.main"
//             >
//               {t('newprofile.contact.about.title')}
//             </Typography>
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 lineHeight: 1.8,
//                 color: 'text.secondary',
//                 mb: 4
//               }}
//             >
//               {t('newprofile.contact.about.description')}
//             </Typography>
//           </Grid>

//           {/* Contact Info Cards */}
//           <Grid item xs={12} md={6} sx={{ ml: { md: 'auto' } }}>
//             <Grid container spacing={3}>
//               {/* Phone */}
//               <Grid item xs={12} sm={6}>
//                 <Card 
//                   sx={{ 
//                     height: '100%',
//                     bgcolor: 'primary.light',
//                     color: 'primary.contrastText',
//                     borderRadius: 3,
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       transform: 'translateY(-4px)',
//                       boxShadow: 4
//                     }
//                   }}
//                 >
//                   <CardContent sx={{ p: 4, textAlign: 'center' }}>
//                     <Box sx={{ 
//                       display: 'flex', 
//                       justifyContent: 'center', 
//                       mb: 4 
//                     }}>
//                       <PhoneIcon sx={{ fontSize: 40 }} />
//                     </Box>
//                     <Typography variant="h6" fontWeight="bold" gutterBottom>
//                       {t('newprofile.contact.phone.title')}
//                     </Typography>
//                     <Box sx={{ textAlign: 'center' }}>
//                       {contactInfo.phone.map((phone, index) => (
//                         <Typography 
//                           key={index}
//                           variant="body1" 
//                           component="div"
//                           sx={{ 
//                             mb: 1,
//                             direction: 'ltr',
//                             textAlign: 'center'
//                           }}
//                         >
//                           <Button 
//                             href={`tel:${phone}`}
//                             sx={{ 
//                               color: 'inherit',
//                               textDecoration: 'none',
//                               fontSize: '1rem'
//                             }}
//                           >
//                             {phone}
//                           </Button>
//                         </Typography>
//                       ))}
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </Grid>

//               {/* Email */}
//               <Grid item xs={12} sm={6}>
//                 <Card 
//                   sx={{ 
//                     height: '100%',
//                     bgcolor: 'secondary.light',
//                     color: 'secondary.contrastText',
//                     borderRadius: 3,
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       transform: 'translateY(-4px)',
//                       boxShadow: 4
//                     }
//                   }}
//                 >
//                   <CardContent sx={{ p: 4, textAlign: 'center' }}>
//                     <Box sx={{ 
//                       display: 'flex', 
//                       justifyContent: 'center', 
//                       mb: 4 
//                     }}>
//                       <EmailIcon sx={{ fontSize: 40 }} />
//                     </Box>
//                     <Typography variant="h6" fontWeight="bold" gutterBottom>
//                       {t('newprofile.contact.email.title')}
//                     </Typography>
//                     <Typography 
//                       variant="body1"
//                       sx={{ 
//                         direction: 'ltr',
//                         textAlign: 'center'
//                       }}
//                     >
//                       <Button 
//                         href={`mailto:${contactInfo.email}`}
//                         sx={{ 
//                           color: 'inherit',
//                           textDecoration: 'none',
//                           fontSize: '1rem'
//                         }}
//                       >
//                         {contactInfo.email}
//                       </Button>
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>

//               {/* Address */}
//               <Grid item xs={12}>
//                 <Card 
//                   sx={{ 
//                     bgcolor: 'grey.100',
//                     borderRadius: 3,
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       transform: 'translateY(-4px)',
//                       boxShadow: 4
//                     }
//                   }}
//                 >
//                   <CardContent sx={{ p: 4 }}>
//                     <Box sx={{ 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       mb: 3,
//                       gap: 2
//                     }}>
//                       <LocationIcon sx={{ fontSize: 32, color: 'primary.main' }} />
//                       <Typography variant="h6" fontWeight="bold">
//                         {t('newprofile.contact.address.title')}
//                       </Typography>
//                     </Box>
//                     <Typography 
//                       variant="body1" 
//                       sx={{ 
//                         lineHeight: 1.8,
//                         color: 'text.secondary'
//                       }}
//                     >
//                       {contactInfo.address}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             </Grid>
//           </Grid>

//           {/* Background Visual Spacer */}
//           <Grid item xs={12}>
//             <Box 
//               sx={{ 
//                 height: 200,
//                 bgcolor: 'grey.50',
//                 borderRadius: 3,
//                 my: 4,
//                 background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
//               }}
//             />
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Gallery Section */}
//       <Container sx={{ py: 8 }}>
//         <Typography 
//           variant="h4" 
//           fontWeight="bold" 
//           textAlign="center"
//           gutterBottom
//           color="primary.main"
//         >
//           {t('newprofile.contact.gallery.title')}
//         </Typography>
        
//         <Typography 
//           variant="body1" 
//           textAlign="center"
//           color="text.secondary"
//           sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
//         >
//           {t('newprofile.contact.gallery.description')}
//         </Typography>

//         {/* Image Gallery */}
//         <Grid container spacing={2}>
//           {galleryImages.map((image, index) => (
//             <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
//               <Card
//                 sx={{
//                   borderRadius: 2,
//                   overflow: 'hidden',
//                   transition: 'all 0.3s ease',
//                   '&:hover': {
//                     transform: 'scale(1.05)',
//                     boxShadow: 4
//                   }
//                 }}
//               >
//                 <Box
//                   // component="img"
                 
//                   sx={{
//                     backgroundImage : `url(${image.src})`,
//                     // width: '100%',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat',
//                     height: 120,
//                     // objectFit: 'cover',
//                     // display: 'block'
//                   }}
//                 />
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Spacer */}
//       <Box sx={{ py: 8 }} />
//     </Box>
//   );
// };

// export default ContactPage;


// import React, { useState, useEffect } from 'react';
// import Header from   './../../components/home/Header';
// import Footer from './../../components/home/Footer';

// const ContactPage = () => {
//   const [theme, setTheme] = useState('light');
//   const [showMenu, setShowMenu] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const [activeMenuAccordion, setActiveMenuAccordion] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     title: '',
//     ticketNumber: '',
//     message: ''
//   });

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     document.documentElement.setAttribute('data-bs-theme', newTheme);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//     // Add API call here
//     alert('فرم با موفقیت ارسال شد!');
//     setFormData({
//       fullName: '',
//       title: '',
//       ticketNumber: '',
//       message: ''
//     });
//   };

//   // اسلایدر تصاویر تماس
//   const contactImages = [
//     './img/pages/contact/1.jpg',
//     './img/pages/contact/2.jpg',
//     './img/pages/contact/3.jpg',
//     './img/pages/contact/4.jpg',
//     './img/pages/contact/5.jpg',
//     './img/pages/contact/6.jpg',
//     './img/pages/contact/7.jpg',
//     './img/pages/contact/8.jpg'
//   ];

//   return (
//     <div className="par-tosir-app" dir="rtl" data-bs-theme={theme}>
//       <head>
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>پرتو سیر | تماس با ما</title>
//         <link rel="stylesheet" href="./css/bootstrap-custom.css" />
//         <link rel="stylesheet" href="./vendor/fonts/tabler/tabler-icons.css" />
//         <link rel="stylesheet" href="./css/style.css" />
//         <link rel="icon" type="image/x-icon" href="logo.ico" />
//         <meta name="description" content="پرتوسیر ایرانیان ارائه‌دهنده بلیط اتوبوس، بلیط تاکسی و بلیط ون با بهترین قیمت و پشتیبانی ۲۴ ساعته. خرید آسان بلیت اتوبوس از پرتو سیر." />
//         <meta name="keywords" content="پرتوسیر, پرتو سیر, بلیط اتوبوس, بلیت اتوبوس, بلیط تاکسی, بلیت تاکسی, بلیط ون, بلیت ون, پرتو سیر ایرانیان" />
//         <meta name="author" content="پرتوسیر ایرانیان" />
//         <meta name="robots" content="index, follow" />
//       </head>

//       {/* ---------------------------- Offcanvas Menu ---------------------------- */}
//       <div className={`offcanvas offcanvas-start ${showMenu ? 'show' : ''}`} id="offcanvasMenu" tabIndex="-1" aria-labelledby="offcanvasMenuLabel" style={showMenu ? {display: 'block'} : {}}>
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title text-muted" id="offcanvasMenuLabel">منو کاربری</h5>
//           <button className="btn-close" type="button" onClick={() => setShowMenu(false)} aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body">
//           <div className="h-100 nt-flex-column">
//             <div className="w-100 flex-grow-1">
//               <div className="nt-flex-between-center gap-2 mb-4">
//                 <div className="nt-flex-start-center">
//                   <img src="./img/logo-m.png" alt="پرتو سیر" width="80" />
//                 </div>
//                 <button className="btnSwitch btn btn-lg btn-light" type="button" onClick={toggleTheme} aria-label="تغییر حالت روشن و تاریک سایت">
//                   <i className={`ti ti-${theme === 'light' ? 'sun' : 'moon'} fs-5`} aria-hidden="true"></i>
//                 </button>
//               </div>
//               <div className="accordion accordion-flush" id="accordionOffcanvasMenu">
//                 <div className="accordion-item">
//                   <h2 className="accordion-header">
//                     <button 
//                       className={`accordion-button ${activeMenuAccordion ? '' : 'collapsed'} fs-5`} 
//                       type="button" 
//                       onClick={() => setActiveMenuAccordion(!activeMenuAccordion)}
//                       aria-expanded={activeMenuAccordion}
//                       aria-controls="accordionOffcanvasMenu1"
//                     >
//                       خدمات سفر
//                     </button>
//                   </h2>
//                   <div className={`accordion-collapse collapse ${activeMenuAccordion ? 'show' : ''}`} id="accordionOffcanvasMenu1">
//                     <div className="accordion-body">
//                       <ul className="list-unstyled nt-flex-column">
//                         <li>
//                           <a className="btn btn-link link-dark fs-5" href="./index.html">
//                             <i className="ti ti-bus fs-4" aria-hidden="true"></i>اتوبوس
//                           </a>
//                         </li>
//                         <li>
//                           <a className="btn btn-link link-dark fs-5" href="./booking-taxi.html">
//                             <i className="ti ti-car fs-4" aria-hidden="true"></i>تاکسی
//                           </a>
//                         </li>
//                         <li>
//                           <a className="btn btn-link link-dark fs-5" href="./booking-van.html">
//                             <i className="ti ti-rv-truck fs-4" aria-hidden="true"></i>ون
//                           </a>
//                         </li>
//                         <li>
//                           <a className="btn btn-link link-dark fs-5" href="./booking-bar.html">
//                             <i className="ti ti-truck fs-4" aria-hidden="true"></i>باربری
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <nav className="nt-flex-column">
//                 <a className="btn btn-link link-dark fs-5" href="./about-us.html">درباره ما</a>
//                 <a className="btn btn-link link-dark fs-5" href="./contact.html">تماس با ما</a>
//                 <a className="btn btn-link link-dark fs-5" href="./branches.html">ایستگاه ها</a>
//                 <a className="btn btn-link link-dark fs-5" href="">بلیط های رزرو شده</a>
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
//       {/* -------------------------- end Offcanvas Menu -------------------------- */}

//       {/* --------------------------- Offcanvas Profile -------------------------- */}
//       <div className={`offcanvas offcanvas-start ${showProfile ? 'show' : ''}`} id="offcanvasProfile" tabIndex="-1" aria-labelledby="offcanvasProfileLabel" style={showProfile ? {display: 'block'} : {}}>
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title" id="offcanvasProfileLabel">پروفایل کاربری</h5>
//           <button className="btn-close" type="button" onClick={() => setShowProfile(false)} aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body">
//           <div className="p-2">
//             <div className="nt-flex-column-center-center mb-4">
//               <div className="border border-primary rounded-circle position-relative">
//                 <span className="position-absolute top-0 start-0 translate-middle badge rounded bg-success">
//                   <i className="ti ti-checks fs-5" aria-hidden="true"></i>
//                   <span className="visually-hidden">تایید شده</span>
//                 </span>
//                 <img src="./img/layouts/avatar/m1.png" alt="پرتو سیر" width="80" />
//               </div>
//               <div className="nt-flex-column mt-3">
//                 <div className="profile-title">علی محمدی</div>
//                 <div className="text-muted">09121234567</div>
//               </div>
//             </div>
//             <div className="bg-secondary text-white rounded p-3 mb-4">
//               <div className="nt-flex-between-start gap-2">
//                 <div className="nt-flex-column gap-3">
//                   <div className="nt-flex text-light">
//                     <i className="ti ti-wallet fs-3" aria-hidden="true"></i>
//                     موجودی حساب
//                   </div>
//                   <a className="btn btn-sm btn-secondary" href="./profile-transactions.html">
//                     <i className="ti ti-plus fs-5" aria-hidden="true"></i>
//                     <span className="small">افزایش موجودی</span>
//                   </a>
//                 </div>
//                 <div className="nt-flex align-items-center">
//                   <div className="badge text-bg-light">۰</div>
//                   <div className="small text-light ms-2">تومان</div>
//                 </div>
//               </div>
//             </div>
//             <div className="d-grid mb-4">
//               <a className="btn btn-lg justify-content-start btn-outline-primary" href="./profile-plus.html">
//                 <i className="ti ti-sparkles fs-5" aria-hidden="true"></i>
//                 <div className="text-muted fw-bold small">حساب ویژه پرتو سیر</div>
//               </a>
//             </div>
//             <div className="text-muted fw-bold small mb-3">منو کاربری</div>
//             <nav className="profile-menu">
//               <a className="btn btn-outline-light mb-2" href="./profile.html">
//                 <i className="ti ti-user fs-4" aria-hidden="true"></i>حساب کاربری
//               </a>
//               <a className="btn btn-outline-light mb-2" href="./profile-orders.html">
//                 <i className="ti ti-luggage fs-4" aria-hidden="true"></i>سفر های من
//               </a>
//               <a className="btn btn-outline-light mb-2" href="./profile-passengers.html">
//                 <i className="ti ti-users-group fs-4" aria-hidden="true"></i>لیست های مسافران
//               </a>
//               <a className="btn btn-outline-light mb-2" href="./profile-wishlist.html">
//                 <i className="ti ti-heart fs-4" aria-hidden="true"></i>علاقه مندی ها
//               </a>
//               <a className="btn btn-outline-light mb-2" href="./profile-ticketing.html">
//                 <i className="ti ti-headset fs-4" aria-hidden="true"></i>درخواست پشتیبانی
//               </a>
//               <a className="btn btn-outline-light" href="./profile-transactions.html">
//                 <i className="ti ti-businessplan fs-4" aria-hidden="true"></i>موجودی و اعتبار من
//               </a>
//             </nav>
//           </div>
//         </div>
//       </div>
//       {/* ------------------------- end Offcanvas Profile ------------------------ */}

//       {/* -------------------------------- Header -------------------------------- */}
//       <Header 
//         theme={theme}
//         toggleTheme={toggleTheme}
//         setShowMenu={setShowMenu}
//       />
//       {/* ------------------------------ end Header ------------------------------ */}

//       {/* -------------------------------- Main ---------------------------------- */}
//       <main className="main">
//         {/* Contact Form Section */}
//         <section className="booking-wrapper" style={{backgroundImage: 'url(img/pages/index/booking/main-1.webp)'}}>
//           <div className="container booking-inner shadow-sm">
//             <div className="row bg-white py-5 px-4 rounded">
//               <div className="col-12">
//                 <div className="nt-flex-start-center fs-4 mb-3">
//                   <i className="ti ti-address-book fs-2" aria-hidden="true"></i>
//                   <div className="fw-bold">تماس با ما</div>
//                 </div>
//               </div>
              
//               <div className="col-12">
//                 <form onSubmit={handleSubmit}>
//                   <div className="row g-4">
//                     <div className="col-12 col-md-6 col-lg-4">
//                       <input 
//                         className="form-control form-control-lg" 
//                         type="text" 
//                         name="fullName"
//                         placeholder="نام کامل مسافر *" 
//                         required
//                         value={formData.fullName}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-12 col-md-6 col-lg-4">
//                       <input 
//                         className="form-control form-control-lg" 
//                         type="text" 
//                         name="title"
//                         placeholder="عنوان"
//                         value={formData.title}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-12 col-md-6 col-lg-4">
//                       <input 
//                         className="form-control form-control-lg" 
//                         type="text" 
//                         name="ticketNumber"
//                         placeholder="شماره بلیط"
//                         value={formData.ticketNumber}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-12">
//                       <textarea 
//                         className="form-control form-control-lg" 
//                         rows="6" 
//                         name="message"
//                         placeholder="لطفا درخواست خود را به طور کامل شرح دهید. *"
//                         required
//                         value={formData.message}
//                         onChange={handleInputChange}
//                       ></textarea>
//                     </div>
//                     <div className="col-12">
//                       <div className="nt-flex-between-center">
//                         <div className="text-muted small">
//                           فیلدهایی که با * علامت‌گذاری شده‌اند، الزامی هستند و باید برای ارسال فرم پر شوند.
//                         </div>
//                         <button className="btn btn-lg btn-primary" type="submit">
//                           ارسال <i className="ti ti-arrow-left fs-5" aria-hidden="true"></i>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Contact Information Section */}
//         <section className="container contact-info py-5 mb-5">
//           <div className="row g-3">
//             <div className="col-12 col-md-5">
//               <p className="lead lh-lg mb-5">
//                 برای هرگونه سوال، پیشنهاد یا درخواست پشتیبانی، خوشحال می‌شویم که با ما تماس بگیرید. تیم پشتیبانی پرتو سیر به‌طور مداوم در تلاش است تا بهترین خدمات را به شما ارائه دهد و از نظرات و پیشنهادات شما استقبال می‌کند. لطفاً برای ارتباط با ما از طریق فرم زیر استفاده کنید یا به آدرس ایمیل و شماره تماس ارائه شده مراجعه نمایید. تیم ما در سریع‌ترین زمان ممکن پاسخگوی شما خواهد بود.
//               </p>
//             </div>

//             <div className="col-12 col-md-6 offset-md-1">
//               <div className="row g-4">
//                 <div className="col-6">
//                   <div className="contact-info-col p-4">
//                     <div className="contact-icon mb-5">
//                       <i className="ti ti-phone fs-4" aria-hidden="true"></i>
//                     </div>
//                     <div className="fs-5 fw-bold mb-2">شماره تماس:</div>
//                     <div dir="ltr">
//                       <a className="link text-secondary" href="tel:+981133243056">
//                         01133243056
//                       </a>
//                       <br/>
//                       <a className="link text-secondary" href="tel:+989117976855">
//                         09117976855
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-6">
//                   <div className="contact-info-col p-4">
//                     <div className="contact-icon mb-5">
//                       <i className="ti ti-mail fs-4" aria-hidden="true"></i>
//                     </div>
//                     <div className="fs-5 fw-bold mb-2">ایمیل:</div>
//                     <div dir="ltr">
//                       <p className="link text-secondary">mail@email.com</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-12">
//                   <div className="contact-info-col p-4">
//                     <div className="contact-icon mb-5">
//                       <i className="ti ti-map-pin fs-4" aria-hidden="true"></i>
//                     </div>
//                     <div className="fs-5 fw-bold mb-2">آدرس دفتر مرکزی:</div>
//                     <p className="lead lh-lg mb-0">
//                       آدرس: مازندران، ساری، ترمینال دولت، پرتو سیر ایرانیان
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-12">
//               <div className="contact-bg p-5 my-3"></div>
//             </div>
//           </div>
//         </section>

//         {/* Gallery Slider Section */}
//         <section className="container py-5">
//           <div className="swiper pb-5">
//             <div className="swiper-wrapper" style={{
//               display: 'flex',
//               gap: '10px',
//               overflowX: 'auto',
//               paddingBottom: '10px'
//             }}>
//               {contactImages.map((img, index) => (
//                 <div key={index} className="swiper-slide" style={{
//                   flex: '0 0 auto',
//                   width: 'calc(100% / 5 - 8px)',
//                   minWidth: '150px'
//                 }}>
//                   <img 
//                     className="lozad rounded" 
//                     src={img} 
//                     alt={`پرتو سیر ${index + 1}`}
//                     style={{
//                       width: '100%',
//                       height: '120px',
//                       objectFit: 'cover'
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>
//             <div className="swiper-scrollbar" style={{
//               position: 'relative',
//               height: '4px',
//               backgroundColor: 'rgba(0,0,0,0.1)',
//               borderRadius: '2px',
//               marginTop: '10px'
//             }}>
//               <div style={{
//                 width: '20%',
//                 height: '100%',
//                 backgroundColor: '#0d6efd',
//                 borderRadius: '2px'
//               }}></div>
//             </div>
//           </div>
//         </section>

//         <div className="py-5"></div>
//       </main>
//       {/* ------------------------------ end Main -------------------------------- */}

//       {/* -------------------------------- Footer -------------------------------- */}
//       <Footer />
//       {/* ------------------------------ end Footer ------------------------------ */}

//       {/* ------------------------------- Scripts ------------------------------- */}
//       <script src="./vendor/lib/filterizr/vanilla.filterizr.min.js"></script>
//       <script src="./vendor/lib/lozad/lozad.min.js"></script>
//       <script src="./vendor/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
//       <link rel="stylesheet" href="./vendor/lib/swiper/swiper-bundle.min.css" />
//       <script src="./vendor/lib/swiper/swiper-bundle.min.js"></script>
//       <link rel="stylesheet" href="./vendor/lib/jalaliDatePicker/jalalidatepicker.min.css" />
//       <script src="./vendor/lib/jalaliDatePicker/jalalidatepicker.min.js"></script>
//       <link rel="stylesheet" href="./vendor/lib/tom-select/tom-select.min.css" />
//       <script src="./vendor/lib/tom-select/tom-select.complete.min.js"></script>
//       <link rel="stylesheet" href="./vendor/lib/nouislider/nouislider.min.css" />
//       <script src="./vendor/lib/nouislider/nouislider.min.js"></script>
//       <script src="./js/script.js"></script>
//     </div>
//   );
// };

// export default ContactPage;


import React, { useState, useEffect } from 'react';
import Header from './../../components/home/Header';
import Footer from './../../components/home/Footer';

const ContactPage = () => {
  const [theme, setTheme] = useState('light');
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [activeMenuAccordion, setActiveMenuAccordion] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    title: '',
    ticketNumber: '',
    message: ''
  });
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('فرم با موفقیت ارسال شد!');
    setFormData({
      fullName: '',
      title: '',
      ticketNumber: '',
      message: ''
    });
  };

  // اسلایدر تصاویر تماس
  const contactImages = [
    './img/pages/contact/1.jpg',
    './img/pages/contact/2.jpg',
    './img/pages/contact/3.jpg',
    './img/pages/contact/4.jpg',
    './img/pages/contact/5.jpg',
    './img/pages/contact/6.jpg',
    './img/pages/contact/7.jpg',
    './img/pages/contact/8.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % contactImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [contactImages.length]);

  const getVisibleSlides = (images, activeIndex, slidesPerView = 5) => {
    const result = [];
    for (let i = 0; i < slidesPerView; i++) {
      const slideIndex = (activeIndex + i) % images.length;
      result.push(images[slideIndex]);
    }
    return result;
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>پرتو سیر | تماس با ما</title>
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
          {/* Contact Form Section */}
          <section className="booking-wrapper" style={{backgroundImage: 'url(img/pages/index/booking/sliderf.webp)'}}>
            <div className="container g-0 booking-inner shadow-sm">
              <div className="row bg-white py-5 px-4 rounded">
                <div className="col-12">
                  <div className="nt-flex-start-center fs-4 mb-3">
                    <i className="ti ti-address-book fs-2" aria-hidden="true"></i>
                    <div className="fw-bold">تماس با ما</div>
                  </div>
                </div>
                
                <div className="col-12">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      <div className="col-12 col-md-6 col-lg-4">
                        <input 
                          className="form-control form-control-lg" 
                          type="text" 
                          name="fullName"
                          placeholder="نام کامل مسافر *" 
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <input 
                          className="form-control form-control-lg" 
                          type="text" 
                          name="title"
                          placeholder="عنوان"
                          value={formData.title}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <input 
                          className="form-control form-control-lg" 
                          type="text" 
                          name="ticketNumber"
                          placeholder="شماره بلیط"
                          value={formData.ticketNumber}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-12">
                        <textarea 
                          className="form-control form-control-lg" 
                          rows="6" 
                          name="message"
                          placeholder="لطفا درخواست خود را به طور کامل شرح دهید. *"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <div className="nt-flex-between-center">
                          <div className="text-muted small">
                            فیلدهایی که با * علامت‌گذاری شده‌اند، الزامی هستند و باید برای ارسال فرم پر شوند.
                          </div>
                          <button className="btn btn-lg btn-primary" type="submit">
                            ارسال <i className="ti ti-arrow-left fs-5" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="container contact-info py-5 mb-5">
            <div className="row g-3">
              <div className="col-12 col-md-5">
                <p className="lead lh-lg mb-5">
                  برای هرگونه سوال، پیشنهاد یا درخواست پشتیبانی، خوشحال می‌شویم که با ما تماس بگیرید. تیم پشتیبانی پرتو سیر به‌طور مداوم در تلاش است تا بهترین خدمات را به شما ارائه دهد و از نظرات و پیشنهادات شما استقبال می‌کند. لطفاً برای ارتباط با ما از طریق فرم زیر استفاده کنید یا به آدرس ایمیل و شماره تماس ارائه شده مراجعه نمایید. تیم ما در سریع‌ترین زمان ممکن پاسخگوی شما خواهد بود.
                </p>
              </div>

              <div className="col-12 col-md-5 offset-md-1">
                <div className="row g-4">
                  <div className="col-6">
                    <div className="contact-info-col p-4">
                      <div className="contact-icon mb-5">
                        <i className="ti ti-phone fs-4" aria-hidden="true"></i>
                      </div>
                      <div className="fs-5 fw-bold mb-2">شماره تماس:</div>
                      <div dir="ltr">
                        <a className="link text-secondary" href="tel:+981133243056">
                          01133243056
                        </a>
                        <br/>
                        <a className="link text-secondary" href="tel:+989117976855">
                          09117976855
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="contact-info-col p-4">
                      <div className="contact-icon mb-5">
                        <i className="ti ti-mail fs-4" aria-hidden="true"></i>
                      </div>
                      <div className="fs-5 fw-bold mb-2">ایمیل:</div>
                      <div dir="ltr">
                        <p className="link text-secondary">mail@email.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="contact-info-col p-4">
                      <div className="contact-icon mb-5">
                        <i className="ti ti-map-pin fs-4" aria-hidden="true"></i>
                      </div>
                      <div className="fs-5 fw-bold mb-2">آدرس دفتر مرکزی:</div>
                      <p className="lead lh-lg mb-0">
                        آدرس: مازندران، ساری، ترمینال دولت، پرتو سیر ایرانیان
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="contact-bg p-5 my-3"></div>
              </div>
            </div>
          </section>

          {/* Gallery Slider Section */}
          <section className="container py-5">
            <div className="swiper pb-5" style={{overflow: 'hidden', position: 'relative'}}>
              <div className="swiper-wrapper" style={{
                display: 'flex',
                transition: 'transform 0.5s ease',
                gap: '10px',
                padding: '0 10px'
              }}>
                {getVisibleSlides(contactImages, activeSlideIndex, 5).map((img, index) => (
                  <div key={index} className="swiper-slide" style={{
                    flex: '0 0 auto',
                    width: 'calc(100% / 5 - 8px)',
                    minWidth: '150px'
                  }}>
                    <img 
                      className="lozad rounded" 
                      src={img} 
                      alt={`پرتو سیر ${index + 1}`}
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
    </>
  );
};

export default ContactPage;