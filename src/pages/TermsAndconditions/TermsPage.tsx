// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Paper,
//   Card,
//   CardContent,
//   useTheme,
//   useMediaQuery,
//   Button
// } from '@mui/material';
// import {
//   Gavel as GavelIcon,
//   Person as PersonIcon,
//   Receipt as ReceiptIcon,
//   Assignment as AssignmentIcon,
//   Language as LanguageIcon
// } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';

// const TermsPage: React.FC = () => {
//   const { t, i18n } = useTranslation();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const languages = [
//     { code: 'fa', name: 'فارسی', dir: 'rtl' },
//     { code: 'en', name: 'English', dir: 'ltr' },
//     { code: 'ar', name: 'العربية', dir: 'rtl' },
//     { code: 'ps', name: 'پښتو', dir: 'rtl' },
//     { code: 'ru', name: 'Русский', dir: 'ltr' }
//   ];

//   const termsSections = [
//     {
//       id: 1,
//       icon: <GavelIcon sx={{ fontSize: 32 }} />,
//       title: t('terms.sections.general'),
//       content: t('terms.content.general'),
//       color: 'primary.main'
//     },
//     {
//       id: 2,
//       icon: <PersonIcon sx={{ fontSize: 32 }} />,
//       title: t('terms.sections.registration'),
//       content: t('terms.content.registration'),
//       color: 'secondary.main'
//     },
//     {
//       id: 3,
//       icon: <ReceiptIcon sx={{ fontSize: 32 }} />,
//       title: t('terms.sections.booking'),
//       content: t('terms.content.booking'),
//       color: 'info.main'
//     },
//     {
//       id: 4,
//       icon: <AssignmentIcon sx={{ fontSize: 32 }} />,
//       title: t('terms.sections.passenger'),
//       content: t('terms.content.passenger'),
//       color: 'warning.main'
//     }
//   ];

//   const handleLanguageChange = (lng: string) => {
//     i18n.changeLanguage(lng);
//     document.dir = lng === 'fa' || lng === 'ar' || lng === 'ps' ? 'rtl' : 'ltr';
//   };

//   return (
//     <Box>
//       {/* Language Selector */}
//       <Box sx={{ backgroundColor: 'grey.100', py: 1 }}>
//         <Container>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
//             <LanguageIcon sx={{ fontSize: 20, color: 'primary.main' }} />
//             <Typography variant="body2" color="text.secondary">
//               زبان / Language:
//             </Typography>
//             {languages.map((lang) => (
//               <Button
//                 key={lang.code}
//                 size="small"
//                 variant={i18n.language === lang.code ? "contained" : "outlined"}
//                 onClick={() => handleLanguageChange(lang.code)}
//                 sx={{ 
//                   minWidth: 'auto',
//                   fontSize: '0.75rem',
//                   px: 1,
//                   mx: 0.5
//                 }}
//               >
//                 {lang.name}
//               </Button>
//             ))}
//           </Box>
//         </Container>
//       </Box>

//       {/* Hero Section */}
//       <Box 
//         sx={{ 
//           backgroundImage: 'url(/img/pages/index/booking/main-1.webp)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           py: 8,
//           position: 'relative',
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: 'rgba(0,0,0,0.4)',
//             zIndex: 1
//           }
//         }}
//       >
//         <Container sx={{ position: 'relative', zIndex: 2 }}>
//           <Paper 
//             elevation={8}
//             sx={{ 
//               backgroundColor: 'white',
//               py: 6,
//               px: 4,
//               borderRadius: 2,
//               textAlign: 'center',
//               maxWidth: 800,
//               mx: 'auto'
//             }}
//           >
//             <Typography 
//               variant="h3" 
//               fontWeight="bold" 
//               gutterBottom
//               color="primary"
//             >
//               {t('terms.pageTitle')}
//             </Typography>
//             <Typography 
//               variant="h6" 
//               color="text.secondary"
//               sx={{ lineHeight: 1.8 }}
//             >
//               {t('terms.subtitle')}
//             </Typography>
//           </Paper>
//         </Container>
//       </Box>

//       {/* Terms Content */}
//       <Container sx={{ py: 8 }}>
//         <Box sx={{ mb: 6 }}>
//           <Typography 
//             variant="h4" 
//             fontWeight="bold" 
//             align="center" 
//             gutterBottom
//             color="primary"
//           >
//             {t('terms.pageTitle')}
//           </Typography>
//           <Typography 
//             variant="h6" 
//             align="center" 
//             color="text.secondary"
//             sx={{ mb: 6, maxWidth: 600, mx: 'auto', lineHeight: 1.8 }}
//           >
//             {t('terms.subtitle')}
//           </Typography>
//         </Box>

//         {/* Terms Sections */}
//         <Box sx={{ mb: 6 }}>
//           {termsSections.map((section, index) => (
//             <Card 
//               key={section.id}
//               sx={{ 
//                 mb: 4,
//                 border: 1,
//                 borderColor: 'grey.200',
//                 borderRadius: 2,
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   transform: 'translateY(-4px)',
//                   boxShadow: 4,
//                   borderColor: section.color
//                 }
//               }}
//             >
//               <CardContent sx={{ p: 4 }}>
//                 {/* Section Header */}
//                 <Box sx={{ 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   gap: 2, 
//                   mb: 3,
//                   pb: 2,
//                   borderBottom: 1,
//                   borderColor: 'divider'
//                 }}>
//                   <Box sx={{ color: section.color }}>
//                     {section.icon}
//                   </Box>
//                   <Typography 
//                     variant="h5" 
//                     fontWeight="bold"
//                     sx={{ color: section.color }}
//                   >
//                     {section.title}
//                   </Typography>
//                 </Box>

//                 {/* Section Content */}
//                 <Typography 
//                   variant="body1" 
//                   sx={{ 
//                     lineHeight: 2,
//                     textAlign: i18n.dir() === 'rtl' ? 'right' : 'left',
//                     color: 'text.primary',
//                     direction: i18n.dir()
//                   }}
//                 >
//                   {section.content}
//                 </Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>

//         {/* Acceptance Section */}
//         <Paper 
//           elevation={2}
//           sx={{ 
//             backgroundColor: 'success.light',
//             color: 'success.contrastText',
//             p: 4,
//             borderRadius: 2,
//             textAlign: 'center'
//           }}
//         >
//           <Typography 
//             variant="h6" 
//             fontWeight="bold"
//             sx={{ lineHeight: 1.8 }}
//           >
//             {t('terms.content.acceptance')}
//           </Typography>
//         </Paper>

//         {/* Additional Info Cards */}
//         <Box sx={{ mt: 8 }}>
//           <Typography 
//             variant="h5" 
//             fontWeight="bold" 
//             align="center" 
//             gutterBottom
//             color="primary"
//           >
//             {t('terms.importantNotes')}
//           </Typography>
          
//           <Box sx={{ 
//             display: 'grid',
//             gridTemplateColumns: {
//               xs: '1fr',
//               md: 'repeat(2, 1fr)',
//               lg: 'repeat(3, 1fr)'
//             },
//             gap: 3,
//             mt: 4
//           }}>
//             {/* Card 1 */}
//             <Card 
//               sx={{ 
//                 textAlign: 'center',
//                 p: 3,
//                 backgroundColor: 'primary.50',
//                 border: 1,
//                 borderColor: 'primary.100'
//               }}
//             >
//               <Box sx={{ color: 'primary.main', mb: 2 }}>
//                 <PersonIcon sx={{ fontSize: 40 }} />
//               </Box>
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 {t('terms.points.accurateInfo')}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {t('terms.points.accurateInfoDesc')}
//               </Typography>
//             </Card>

//             {/* Card 2 */}
//             <Card 
//               sx={{ 
//                 textAlign: 'center',
//                 p: 3,
//                 backgroundColor: 'secondary.50',
//                 border: 1,
//                 borderColor: 'secondary.100'
//               }}
//             >
//               <Box sx={{ color: 'secondary.main', mb: 2 }}>
//                 <ReceiptIcon sx={{ fontSize: 40 }} />
//               </Box>
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 {t('terms.points.onlineBooking')}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {t('terms.points.onlineBookingDesc')}
//               </Typography>
//             </Card>

//             {/* Card 3 */}
//             <Card 
//               sx={{ 
//                 textAlign: 'center',
//                 p: 3,
//                 backgroundColor: 'warning.50',
//                 border: 1,
//                 borderColor: 'warning.100'
//               }}
//             >
//               <Box sx={{ color: 'warning.main', mb: 2 }}>
//                 <AssignmentIcon sx={{ fontSize: 40 }} />
//               </Box>
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 {t('terms.points.passengerDuties')}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {t('terms.points.passengerDutiesDesc')}
//               </Typography>
//             </Card>
//           </Box>
//         </Box>

//         {/* Contact Info */}
//         <Paper 
//           sx={{ 
//             mt: 8,
//             p: 4,
//             backgroundColor: 'grey.50',
//             border: 1,
//             borderColor: 'divider',
//             borderRadius: 2
//           }}
//         >
//           <Typography 
//             variant="h6" 
//             fontWeight="bold" 
//             align="center" 
//             gutterBottom
//             color="primary"
//           >
//             {t('terms.moreInfo')}
//           </Typography>
//           <Typography 
//             variant="body1" 
//             align="center" 
//             color="text.secondary"
//             sx={{ lineHeight: 1.8, mb: 2 }}
//           >
//             {t('terms.contactText')}
//           </Typography>
//           <Box sx={{ textAlign: 'center' }}>
//             <Typography variant="h6" fontWeight="bold" color="secondary">
//               {t('terms.phone')}: ۰۱۱۳۳۲۴۳۰۵۶
//             </Typography>
//           </Box>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default TermsPage;



import React from 'react';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';

const TermsPage = () => {
  return (
    <div lang="fa" dir="rtl" data-bs-theme="light" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0, padding: 0 }}>
      {/* Head Metadata */}
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>پرتو سیر | قوانین و مقررات</title>
        <link rel="stylesheet" href="./css/bootstrap-custom.css" />
        <link rel="stylesheet" href="./vendor/fonts/tabler/tabler-icons.css" />
        <link rel="stylesheet" href="./css/style.css" />
        <link rel="icon" type="image/x-icon" href="logo.ico" />
        <meta name="description" content="پرتوسیر ایرانیان ارائه‌دهنده بلیط اتوبوس، بلیط تاکسی و بلیط ون با بهترین قیمت و پشتیبانی ۲۴ ساعته. خرید آسان بلیت اتوبوس از پرتو سیر." />
        <meta name="keywords" content="پرتوسیر, پرتو سیر, بلیط اتوبوس, بلیت اتوبوس, بلیط تاکسی, بلیت تاکسی, بلیط ون, بلیت ون, پرتو سیر ایرانیان" />
        <meta name="author" content="پرتوسیر ایرانیان" />
        <meta name="robots" content="index, follow" />
      </head>
      
      {/* Header Component */}
      <Header />
        
      {/* ---------------------------- Offcanvas Menu ---------------------------- */}
      <div className="offcanvas offcanvas-start" id="offcanvasMenu" tabIndex="-1" aria-labelledby="offcanvasMenuLabel" style={{ right: '0', left: 'auto', width: '320px' }}>
        <div className="offcanvas-header" style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #dee2e6' }}>
          <h5 className="offcanvas-title text-muted" id="offcanvasMenuLabel" style={{ fontSize: '1rem', fontWeight: '500', margin: '0' }}>منو کاربری</h5>
          <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close" style={{ marginRight: 'auto', marginLeft: '0' }}></button>
        </div>
        <div className="offcanvas-body" style={{ padding: '0' }}>
          <div className="h-100 nt-flex-column" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="w-100 flex-grow-1" style={{ flexGrow: '1', width: '100%', padding: '1.5rem' }}>
              <div className="nt-flex-between-center gap-2 mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div className="nt-flex-start-center" style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="./img/logo-m.png" alt="پرتو سیر" width="80" style={{ width: '80px' }} />
                </div>
                <button className="btnSwitch btn btn-lg btn-light" type="button" aria-label="تغییر حالت روشن و تاریک سایت" style={{ padding: '0.5rem', fontSize: '1rem', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6' }}>
                  <i className="ti ti-sun fs-5" aria-hidden="true" style={{ fontSize: '1.25rem' }}></i>
                </button>
              </div>
              <div className="accordion accordion-flush" id="accordionOffcanvasMenu" style={{ border: 'none' }}>
                <div className="accordion-item" style={{ border: 'none', background: 'none' }}>
                  <h2 className="accordion-header" style={{ margin: '0' }}>
                    <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#accordionOffcanvasMenu1" aria-expanded="false" aria-controls="accordionOffcanvasMenu1" style={{ fontSize: '1.25rem', padding: '0.75rem 0', background: 'none', border: 'none', boxShadow: 'none', color: '#212529' }}>
                      خدمات سفر
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse" id="accordionOffcanvasMenu1" data-bs-parent="#accordionOffcanvasMenu" style={{ marginTop: '0.5rem' }}>
                    <div className="accordion-body" style={{ padding: '0.5rem 0' }}>
                      <ul className="list-unstyled nt-flex-column" style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li>
                          <a className="btn btn-link link-dark fs-5" href="./index.html" style={{ fontSize: '1.25rem', padding: '0.5rem 0', color: '#212529', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <i className="ti ti-plane-inflight fs-4" aria-hidden="true" style={{ fontSize: '1.5rem' }}></i>اتوبوس
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-link link-dark fs-5" href="./booking-taxi.html" style={{ fontSize: '1.25rem', padding: '0.5rem 0', color: '#212529', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <i className="ti ti-plane-departure fs-4" aria-hidden="true" style={{ fontSize: '1.5rem' }}></i>تاکسی
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-link link-dark fs-5" href="./booking-van.html" style={{ fontSize: '1.25rem', padding: '0.5rem 0', color: '#212529', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <i className="ti ti-train fs-4" aria-hidden="true" style={{ fontSize: '1.5rem' }}></i>ون
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-link link-dark fs-5" href="./booking-bar.html" style={{ fontSize: '1.25rem', padding: '0.5rem 0', color: '#212529', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <i className="ti ti-bus fs-4" aria-hidden="true" style={{ fontSize: '1.5rem' }}></i>باربری
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="nt-flex-column" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                <a className="btn btn-link link-dark fs-5" href="./about-us.html" style={{ fontSize: '1.25rem', padding: '0.5rem 0', color: '#212529', textDecoration: 'none', textAlign: 'right' }}>درباره ما</a>
                <a className="btn btn-link link-dark fs-5" href="./contact.html" style={{ fontSize: '1.25rem', padding: '0.5rem 0', color: '#212529', textDecoration: 'none', textAlign: 'right' }}>تماس با ما</a>
                <a className="btn btn-link link-dark fs-5" href="./branches.html" style={{ fontSize: '1.25rem', padding: '0.5rem 0', color: '#212529', textDecoration: 'none', textAlign: 'right' }}>ایستگاه ها</a>
                <a className="btn btn-link link-dark fs-5" href="" style={{ fontSize: '1.25rem', padding: '0.5rem 0', color: '#212529', textDecoration: 'none', textAlign: 'right' }}>بلیط های رزرو شده</a>
              </nav>
            </div>
            <div className="w-100 border-top py-3" style={{ width: '100%', borderTop: '1px solid #dee2e6', padding: '1rem 1.5rem' }}>
              <div className="nt-flex-column-center-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div className="text-muted" style={{ color: '#6c757d', fontSize: '0.875rem', marginBottom: '0.5rem' }}>پرتو سیر; همراه همیشگی سفرهای شما.</div>
                <div className="nt-flex-start-center text-muted" role="contentinfo" aria-label="اطلاعات حق نشر" style={{ display: 'flex', alignItems: 'center', color: '#6c757d', fontSize: '0.75rem' }}>
                  <span className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: '0' }}>حق نشر ©</span>
                  <i className="ti ti-copyright fs-5" aria-hidden="true" style={{ fontSize: '1rem', marginLeft: '0.25rem' }}></i>
                  ۱۴۰۴ پرتو سیر. تمامی حقوق محفوظ است.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------- Offcanvas Profile -------------------------- */}
      <div className="offcanvas offcanvas-start" id="offcanvasProfile" tabIndex="-1" aria-labelledby="offcanvasProfileLabel" style={{ right: '0', left: 'auto', width: '320px' }}>
        <div className="offcanvas-header" style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #dee2e6' }}>
          <h5 className="offcanvas-title" id="offcanvasProfileLabel" style={{ fontSize: '1.25rem', fontWeight: '500', margin: '0' }}>پروفایل کاربری</h5>
          <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close" style={{ marginRight: 'auto', marginLeft: '0' }}></button>
        </div>
        <div className="offcanvas-body" style={{ padding: '0' }}>
          <div className="p-2" style={{ padding: '0.5rem' }}>
            <div className="nt-flex-column-center-center mb-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <div className="border border-primary rounded-circle position-relative" style={{ border: '2px solid #0d6efd', borderRadius: '50%', position: 'relative', width: '80px', height: '80px', overflow: 'hidden' }}>
                <span className="position-absolute top-0 start-0 translate-middle badge rounded bg-success" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="تایید شده" style={{ position: 'absolute', top: '0', left: '0', transform: 'translate(-50%, -50%)', backgroundColor: '#198754', borderRadius: '50%', padding: '0.25rem', fontSize: '0.75rem' }}>
                  <i className="ti ti-checks fs-5" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                  <span className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: '0' }}>تایید شده</span>
                </span>
                <img src="./img/layouts/avatar/m1.png" alt="پرتو سیر" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="nt-flex-column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0.75rem' }}>
                <div className="profile-title" style={{ fontSize: '1.125rem', fontWeight: '600' }}>علی محمدی</div>
                <div className="text-muted" style={{ color: '#6c757d', fontSize: '0.875rem' }}>09121234567</div>
              </div>
            </div>
            <div className="bg-secondary text-white rounded p-3 mb-4" style={{ backgroundColor: '#6c757d', color: '#fff', borderRadius: '0.375rem', padding: '1rem', marginBottom: '1.5rem' }}>
              <div className="nt-flex-between-start gap-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                <div className="nt-flex-column gap-3" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div className="nt-flex text-light" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f8f9fa' }}>
                    <i className="ti ti-wallet fs-3" aria-hidden="true" style={{ fontSize: '1.5rem' }}></i>
                    موجودی حساب
                  </div>
                  <a className="btn btn-sm btn-secondary" href="./profile-transactions.html" style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', backgroundColor: '#5a6268', borderColor: '#545b62', color: '#fff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    <i className="ti ti-plus fs-5" aria-hidden="true" style={{ fontSize: '1rem' }}></i>
                    <span className="small" style={{ fontSize: '0.875rem' }}>افزایش موجودی</span>
                  </a>
                </div>
                <div className="nt-flex" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <div className="badge text-bg-light" style={{ backgroundColor: '#f8f9fa', color: '#212529', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.875rem' }}>۰</div>
                  <div className="small text-light" style={{ fontSize: '0.875rem', color: '#f8f9fa' }}>تومان</div>
                </div>
              </div>
            </div>
            <div className="d-grid mb-4" style={{ display: 'grid', marginBottom: '1.5rem' }}>
              <a className="btn btn-lg justify-content-start btn-outline-primary" href="./profile-plus.html" style={{ padding: '0.75rem 1rem', fontSize: '1rem', border: '1px solid #0d6efd', color: '#0d6efd', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '0.375rem' }}>
                <i className="ti ti-sparkles fs-5" aria-hidden="true" style={{ fontSize: '1.25rem' }}></i>
                <div className="text-muted fw-bold small" style={{ color: '#6c757d', fontWeight: '700', fontSize: '0.875rem' }}>
                  حساب ویژه پرتو سیر
                </div>
              </a>
            </div>
            <div className="text-muted fw-bold small mb-3" style={{ color: '#6c757d', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.75rem' }}>منو کاربری</div>
            <nav className="profile-menu" style={{ display: 'grid', gap: '0.5rem' }}>
              <a className="btn btn-outline-light" href="./profile.html" style={{ padding: '0.75rem', border: '1px solid #dee2e6', color: '#212529', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '0.375rem' }}>
                <i className="ti ti-user fs-4" aria-hidden="true" style={{ fontSize: '1.5rem' }}></i>حساب کاربری
              </a>
              <a className="btn btn-outline-light" href="./profile-orders.html" style={{ padding: '0.75rem', border: '1px solid #dee2e6', color: '#212529', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '0.375rem' }}>
                <i className="ti ti-luggage fs-4" aria-hidden="true" style={{ fontSize: '1.5rem' }}></i>سفر های من
              </a>
              <a className="btn btn-outline-light" href="./profile-passengers.html" style={{ padding: '0.75rem', border: '1px solid #dee2e6', color: '#212529', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '0.375rem' }}>
                <i className="ti ti-users-group fs-4" aria-hidden="true" style={{ fontSize: '1.5rem' }}></i>لیست های مسافران
              </a>
              <a className="btn btn-outline-light" href="./profile-wishlist.html" style={{ padding: '0.75rem', border: '1px solid #dee2e6', color: '#212529', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '0.375rem' }}>
                <i className="ti ti-heart fs-4" aria-hidden="true" style={{ fontSize: '1.5rem' }}></i>علاقه مندی ها
              </a>
              <a className="btn btn-outline-light" href="./profile-ticketing.html" style={{ padding: '0.75rem', border: '1px solid #dee2e6', color: '#212529', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '0.375rem' }}>
                <i className="ti ti-headset fs-4" aria-hidden="true" style={{ fontSize: '1.5rem' }}></i>درخواست پشتیبانی
              </a>
              <a className="btn btn-outline-light" href="./profile-transactions.html" style={{ padding: '0.75rem', border: '1px solid #dee2e6', color: '#212529', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '0.375rap' }}>
                <i className="ti ti-businessplan fs-4" aria-hidden="true" style={{ fontSize: '1.5rem' }}></i>موجودی و اعتبار من
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* ------------------------------ Modal Sign ------------------------------ */}
     

      {/* ------------------------------ Modal share ----------------------------- */}
      <div className="modal fade" id="shareModal" tabIndex="-1" aria-labelledby="shareModalLabel" aria-hidden="true" style={{ display: 'none' }}>
        <div className="modal-dialog" style={{ maxWidth: '500px', margin: '1.75rem auto' }}>
          <div className="modal-content" style={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.15)' }}>
            <div className="modal-header" style={{ borderBottom: '1px solid #dee2e6', padding: '1rem 1.5rem' }}>
              <h1 className="modal-title fs-5" id="shareModalLabel" style={{ fontSize: '1.25rem', fontWeight: '500', margin: '0' }}>اشتراک گذاری</h1>
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" style={{ marginRight: 'auto', marginLeft: '0' }}></button>
            </div>
            <div className="modal-body" style={{ padding: '1.5rem' }}>
              <div className="wrapper-xs py-5 text-center" style={{ padding: '3rem 0' }}>
                <nav className="nt-flex-around-center gap-4 mb-5" aria-label="پیوند های شبکه های اجتماعی" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                  <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="از صفحه فیس بوک ما دیدن کنید" style={{ padding: '1.5rem', borderRadius: '50%', border: '1px solid #212529', backgroundColor: 'transparent', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="ti ti-brand-facebook fs-3" aria-hidden="true" style={{ fontSize: '1.75rem', color: '#212529' }}></i>
                  </button>
                  <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="از صفحه X (که قبلاً توییتر بود) ما بازدید کنید" style={{ padding: '1.5rem', borderRadius: '50%', border: '1px solid #212529', backgroundColor: 'transparent', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="ti ti-brand-x fs-3" aria-hidden="true" style={{ fontSize: '1.75rem', color: '#212529' }}></i>
                  </button>
                  <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="به صفحه اینستاگرام ما مراجعه کنید" style={{ padding: '1.5rem', borderRadius: '50%', border: '1px solid #212529', backgroundColor: 'transparent', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="ti ti-brand-instagram fs-3" aria-hidden="true" style={{ fontSize: '1.75rem', color: '#212529' }}></i>
                  </button>
                  <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="با ما در WhatsApp گپ بزنید" style={{ padding: '1.5rem', borderRadius: '50%', border: '1px solid #212529', backgroundColor: 'transparent', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="ti ti-brand-whatsapp fs-3" aria-hidden="true" style={{ fontSize: '1.75rem', color: '#212529' }}></i>
                  </button>
                  <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="در تلگرام به ما بپیوندید" style={{ padding: '1.5rem', borderRadius: '50%', border: '1px solid #212529', backgroundColor: 'transparent', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="ti ti-brand-telegram fs-3" aria-hidden="true" style={{ fontSize: '1.75rem', color: '#212529' }}></i>
                  </button>
                </nav>
                <div className="input-group" style={{ display: 'flex' }}>
                  <input className="form-control form-control" type="text" id="shareLink" value="https://netthemes.ir/html/parnet" dir="ltr" readOnly style={{ direction: 'ltr', padding: '0.375rem 0.75rem', fontSize: '1rem', borderRadius: '0.375rem 0 0 0.375rem', border: '1px solid #dee2e6', flex: '1', minWidth: '0' }} />
                  <button className="btn btn-primary" type="button" id="copyLinkBtn" style={{ backgroundColor: '#0d6efd', borderColor: '#0d6efd', color: '#fff', padding: '0.375rem 0.75rem', fontSize: '1rem', borderRadius: '0 0.375rem 0.375rem 0', border: '1px solid transparent' }}>کپی لینک</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------ */}
      {/*                                   Main                                   */}
      {/* ------------------------------------------------------------------------ */}
      <main className="main" style={{ minHeight: 'calc(100vh - 200px)', marginTop: 0 }}>
        {/* booking section - تصویر تمام عرض و متن در پایین */}
        <section className="booking-wrapper" style={{ 
          backgroundImage: 'url(img/pages/index/booking/sliderf.webp)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '500px',
          position: 'relative',
          margin: 0,
          padding: 0
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
          }}></div>
          
          <div className="container" style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 15px',
            position: 'relative',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center'
          }}>
            <div className="text-center bg-white py-5 px-4 rounded" style={{ 
              backgroundColor: '#ffffff', 
              padding: '2rem 2rem', 
              borderRadius: '0.375rem', 
              boxShadow: '0 0.125rem 0.5rem rgba(0,0,0,0.1)',
              marginBottom: '-50px',
              position: 'relative',
              zIndex: 1,
              width: '90%',
              maxWidth: '800px'
            }}>
              <div className="fs-4 fw-bold mb-3" style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem', color: '#212529' }}>قوانین و مقررات</div>
              <p className="lead lh-lg text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#6c757d', margin: 0 }}>پرتو سیر: همراه همیشگی سفرهای شما</p>
            </div>
          </div>
        </section>

        {/* spacer برای پایین آوردن محتوای قوانین */}
        <div style={{ height: '60px' }}></div>

        {/* about section - محتوای قوانین */}
        <section className="container" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto 3rem', 
          padding: '0 15px'
        }}>
          <div className="row g-3" style={{ margin: 0 }}>
            <div className="row g-4 bg-light-subtle border border-1 rounded" style={{ 
              backgroundColor: '#f8f9fa', 
              border: '1px solid #dee2e6', 
              borderRadius: '0.375rem', 
              padding: '2rem',
              margin: 0
            }}>
              <div className="col-12 col-md-12" style={{ flex: '0 0 100%', maxWidth: '100%', padding: 0 }}>
                <p className="lead lh-lg fw-bold justify-content-md-start" style={{ 
                  fontSize: '1.25rem', 
                  lineHeight: '1.8', 
                  fontWeight: '700', 
                  color: '#212529', 
                  marginBottom: '1.5rem',
                  textAlign: 'right'
                }}>قوانین و مقررات</p>
                
                <p className="lead lh-lg justify-content-md-start" style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8', 
                  color: '#212529', 
                  marginBottom: '1.5rem',
                  textAlign: 'right'
                }}>
                  استفاده از سامانه خدمات حمل‌ونقل مسافری لطفاً پیش از ورود به سامانه و بهره‌مندی از خدمات، مفاد ذیل را با دقت مطالعه فرمایید. استفاده از این سامانه به منزله پذیرش کامل شرایط و ضوابط آن تلقی خواهد شد.
                </p>
                
                <p className="lead lh-lg fw-bold justify-content-md-start" style={{ 
                  fontSize: '1.2rem', 
                  lineHeight: '1.8', 
                  fontWeight: '700', 
                  color: '#212529', 
                  marginBottom: '1rem', 
                  marginTop: '2rem',
                  textAlign: 'right'
                }}>ثبت‌نام و اطلاعات کاربران</p>
                <p className="lead lh-lg justify-content-md-start" style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8', 
                  color: '#212529', 
                  marginBottom: '1rem',
                  textAlign: 'right'
                }}>
                  کاربران موظف‌اند در زمان ثبت‌نام، اطلاعات هویتی خود را به‌صورت کامل و صحیح وارد نمایند. مسئولیت صحت و سقم اطلاعات واردشده بر عهده کاربر می‌باشد.
                </p>
                <p className="lead lh-lg justify-content-md-start" style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8', 
                  color: '#212529', 
                  marginBottom: '2rem',
                  textAlign: 'right'
                }}>
                  هرگونه استفاده از مشخصات و مدارک اشخاص دیگر، بدون کسب مجوز قانونی، ممنوع بوده و تخلف محسوب می‌شود.
                </p>
                
                <p className="lead lh-lg fw-bold justify-content-md-start" style={{ 
                  fontSize: '1.2rem', 
                  lineHeight: '1.8', 
                  fontWeight: '700', 
                  color: '#212529', 
                  marginBottom: '1rem', 
                  marginTop: '2rem',
                  textAlign: 'right'
                }}>قوانین مربوط به رزرو و خرید بلیت</p>
                <p className="lead lh-lg justify-content-md-start" style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8', 
                  color: '#212529', 
                  marginBottom: '1rem',
                  textAlign: 'right'
                }}>
                  رزرو و خرید بلیت تنها از طریق سامانه رسمی شرکت کلان و نمایندگان مجاز امکان‌پذیر است.
                </p>
                <p className="lead lh-lg justify-content-md-start" style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8', 
                  color: '#212529', 
                  marginBottom: '1rem',
                  textAlign: 'right'
                }}>
                  تغییر یا لغو سفر، تابع شرایط کنسلی شرکت بوده که در بخش «سیاست‌های بازپرداخت» سامانه اعلام گردیده است.
                </p>
                <p className="lead lh-lg justify-content-md-start" style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8', 
                  color: '#212529', 
                  marginBottom: '2rem',
                  textAlign: 'right'
                }}>
                  نرخ بلیت‌ها بر اساس وسیله نقلیه، مسیر، تاریخ و ظرفیت، متغیر و طبق مصوبات شرکت تعیین می‌گردد.
                </p>
                
                <p className="lead lh-lg fw-bold justify-content-md-start" style={{ 
                  fontSize: '1.2rem', 
                  lineHeight: '1.8', 
                  fontWeight: '700', 
                  color: '#212529', 
                  marginBottom: '1rem', 
                  marginTop: '2rem',
                  textAlign: 'right'
                }}>تعهدات کاربران (مسافران)</p>
                <p className="lead lh-lg justify-content-md-start" style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8', 
                  color: '#212529', 
                  marginBottom: '1rem',
                  textAlign: 'right'
                }}>
                  مسافر موظف است در زمان مقرر در محل حرکت حضور یابد؛ در غیر این‌صورت شرکت مسئولیتی در قبال تاخیر یا عدم امکان انجام سفر نخواهد داشت.
                </p>
                <p className="lead lh-lg justify-content-md-start" style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8', 
                  color: '#212529', 
                  marginBottom: '1rem',
                  textAlign: 'right'
                }}>
                  حمل هرگونه محموله غیرمجاز، خطرناک، یا مغایر با قوانین کشور ممنوع بوده و در صورت تخلف، مسئولیت آن مستقیماً متوجه مسافر خواهد بود.
                </p>
                <p className="lead lh-lg justify-content-md-start" style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8', 
                  color: '#212529', 
                  marginBottom: '2rem',
                  textAlign: 'right'
                }}>
                  رعایت نظم، شئونات اجتماعی، بهداشت فردی و احترام به دیگر مسافران و رانندگان در طول سفر الزامی است.
                </p>
                
                <div className="alert alert-success mt-4" role="alert" style={{ 
                  backgroundColor: '#d1e7dd', 
                  border: '1px solid #badbcc', 
                  color: '#0f5132', 
                  padding: '1rem 1.25rem', 
                  borderRadius: '0.375rem', 
                  marginTop: '1.5rem', 
                  display: 'flex', 
                  alignItems: 'center',
                  textAlign: 'right'
                }}>
                  <i className="ti ti-check fs-4 me-2" aria-hidden="true" style={{ 
                    fontSize: '1.5rem', 
                    marginLeft: '0.75rem',
                    marginRight: '0',
                    flexShrink: '0' 
                  }}></i>
                  <span style={{ flex: '1' }}>✅ ورود به سامانه و استفاده از خدمات آن به منزله مطالعه، آگاهی و پذیرش کلیه مفاد فوق از سوی کاربر تلقی می‌گردد.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* spacer */}
        <div style={{ height: '3rem' }}></div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default TermsPage;