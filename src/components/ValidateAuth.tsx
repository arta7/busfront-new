// // // import { useEffect, useContext, useState } from 'react';
// // // import { useAuthStore } from '../store/authStore';
// // // import axios from 'axios';
// // // import UserContext from './../UserContext';
// // // import { Navigate, useNavigate,useLocation } from 'react-router-dom';

// // // const ValidateAuth: React.FC = () => {
// // //   const { setIsAuth, setUser, setIsLoading } = useAuthStore();
// // //   const { userData, setUserData } = useContext(UserContext);
// // //   const [shouldRedirect, setShouldRedirect] = useState(false);
// // //     const navigate = useNavigate();
// // //     const location = useLocation()


// // //     useEffect(() => {
// // //       const isAuthenticated = Array.isArray(userData) && userData.length > 0 && userData[0].Token;

// // //       // Check if the user is authenticated. If not, navigate to login.
// // //       if (!isAuthenticated  && location.pathname != '/'  && location.pathname != '/about' 
// // //         && location.pathname != '/privacy-policy'  && location.pathname != '/contactus' && location.pathname != '/refund-policy'
// // //        && location.pathname != '/terms-and-conditions'  && location.pathname != '/MapList' 
// // //       ) {
// // //         navigate('/Logins');
// // //       }
// // //     }, [userData, navigate]); // Effect runs whenever userData changes

// // //     return null; // Or a loading spinner until the authentication check is complete
// // //   };



// // // export default ValidateAuth;

// // import React, { useEffect, useContext, useState, useRef } from 'react';
// // import { useAuthStore } from '../store/authStore';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import UserContext from './../UserContext';
// // import { useTranslation } from 'react-i18next';

// // // Import MUI components
// // import Dialog from '@mui/material/Dialog';
// // import DialogTitle from '@mui/material/DialogTitle';
// // import DialogContent from '@mui/material/DialogContent';
// // import Box from '@mui/material/Box';
// // import Typography from '@mui/material/Typography';
// // import IconButton from '@mui/material/IconButton';
// // import FormControl from '@mui/material/FormControl';
// // import TextField from '@mui/material/TextField';
// // import Link from '@mui/material/Link';
// // import Button from '@mui/material/Button';
// // import Stack from '@mui/material/Stack';
// // import CircularProgress from '@mui/material/CircularProgress';
// // import CloseIcon from '@mui/icons-material/Close';
// // import InfoIcon from '@mui/icons-material/Info';

// // // Import your API functions
// // import { LoginAPI, VerifyAPI } from '../Api/ApiMaster';

// // const ValidateAuth: React.FC = () => {
// //   const { setIsAuth, setUser } = useAuthStore();
// //   const { userData, setUserData } = useContext(UserContext);
// //   const { t, i18n } = useTranslation();
  
// //   const [showLoginModal, setShowLoginModal] = useState(false);
// //   const [loginStep, setLoginStep] = useState<'phone' | 'verify'>('phone');
// //   const [mobileNumber, setMobileNumber] = useState('');
// //   const [verificationCode, setVerificationCode] = useState('');
// //   const [isLoading, setIsLoadings] = useState(false);
// //   const [countdown, setCountdown] = useState(0);
// //   const location = useLocation();
// //   const navigate = useNavigate();
  
// //   // Use ref to track if we should show modal
// //   const shouldShowModalRef = useRef(false);

// //   // Define public routes that don't require authentication
// //   const publicRoutes = [
// //     '/',
// //     '/about',
// //     '/privacy-policy',
// //     '/contactus',
// //     '/refund-policy',
// //     '/terms-and-conditions',
// //     '/MapList',
// //     '/Logins',
// //   ];

// //   useEffect(() => {
// //     console.log('ValidateAuth: Checking authentication...');
    
// //     const isAuthenticated = Array.isArray(userData) && 
// //                            userData.length > 0 && 
// //                            userData[0]?.Token;

// //     const isPublicRoute = publicRoutes.some(route => 
// //       location.pathname === route 
// //     );

// //     console.log('isAuthenticated:', isAuthenticated);
// //     console.log('isPublicRoute:', isPublicRoute);
// //     console.log('current path:', location.pathname);

// //     // Only show modal if not authenticated and not on public route
// //     // AND we're not already in the verification step
// //     if (!isAuthenticated && !isPublicRoute && loginStep === 'phone') {
// //       console.log('Showing login modal - user not authenticated and on protected route');
// //       shouldShowModalRef.current = true;
// //       setShowLoginModal(true);
// //       setMobileNumber('');
// //       setVerificationCode('');
// //     } else if (isAuthenticated && showLoginModal) {
// //       // If user becomes authenticated, close the modal
// //       console.log('Closing modal - user is now authenticated');
// //       setShowLoginModal(false);
// //       shouldShowModalRef.current = false;
// //     }
    
// //     // Don't change modal visibility if we're in verification step
// //     // This prevents the modal from closing when userData updates
// //   }, [userData, location.pathname]);

// //   const handlePhoneSubmit = async () => {
// //     if (!mobileNumber || mobileNumber.trim() === '') {
// //       alert(t('newprofile.validateAuth.enterPhoneAlert'));
// //       return;
// //     }

// //     setIsLoadings(true);
    
// //     try {
// //       // We need to handle the LoginAPI response differently
// //       // to prevent it from triggering the useEffect that closes the modal
// //       const response = await LoginAPI(
// //         mobileNumber,
// //         null,
// //         userData,
// //         setUserData,
// //         setIsLoadings
// //       );
      
// //       console.log('LoginAPI response:', response);
      
// //       // Force show modal for verification step
// //       shouldShowModalRef.current = true;
// //       setShowLoginModal(true);
// //       setLoginStep('verify');
// //       setCountdown(60);
      
// //     } catch (error) {
// //       console.error('Login error:', error);
// //       alert(t('newprofile.validateAuth.sendCodeError'));
// //     } finally {
// //       setIsLoadings(false);
// //     }
// //   };

// //   const handleVerifySubmit = async () => {
// //     if (!verificationCode || verificationCode.trim() === '') {
// //       alert(t('newprofile.validateAuth.enterCodeAlert'));
// //       return;
// //     }

// //     setIsLoadings(true);
    
// //     try {
// //       // Pass a custom callback that doesn't immediately close the modal
// //       // Let the useEffect handle closing based on authentication state
// //       await VerifyAPI(
// //         mobileNumber,
// //         verificationCode,
// //         () => {},
// //         setIsLoadings,
// //         userData,
// //         setUserData,
// //         () => {},
// //         () => {
// //           // Don't close modal here - let useEffect handle it
// //           // This gives time for userData to update properly
// //           console.log('Verification successful, waiting for auth state update');
// //         }
// //       );
// //     } catch (error) {
// //       console.error('Verification error:', error);
// //       alert(t('newprofile.validateAuth.invalidCodeError'));
// //       setIsLoadings(false);
// //     }
// //   };

// //   const handleResendCode = async () => {
// //     if (countdown > 0) return;
    
// //     setIsLoadings(true);
// //     try {
// //       await LoginAPI(
// //         mobileNumber,
// //         null,
// //         userData,
// //         setUserData,
// //         setIsLoadings
// //       );
// //       setCountdown(60);
// //     } catch (error) {
// //       console.error('Resend error:', error);
// //       alert(t('newprofile.validateAuth.resendError'));
// //     } finally {
// //       setIsLoadings(false);
// //     }
// //   };

// //   const handleModalClose = () => {
// //     // When user closes modal without logging in, navigate back to previous page or home
// //     console.log('Modal closed by user, navigating back');
// //     setShowLoginModal(false);
// //     shouldShowModalRef.current = false;
    
// //     // Navigate back to previous page or home
// //     if (window.history.length > 1) {
// //       navigate(-1); // Go back to previous page
// //     } else {
// //       navigate('/'); // Go to home if no history
// //     }
// //   };

// //   // Countdown timer effect
// //   useEffect(() => {
// //     let timer: NodeJS.Timeout;
// //     if (countdown > 0) {
// //       timer = setInterval(() => {
// //         setCountdown(prev => {
// //           if (prev <= 1) {
// //             clearInterval(timer);
// //             return 0;
// //           }
// //           return prev - 1;
// //         });
// //       }, 1000);
// //     }
// //     return () => {
// //       if (timer) clearInterval(timer);
// //     };
// //   }, [countdown]);

// //   // Set RTL direction for Persian
// //   const isRTL = i18n.language === 'fa' || i18n.language === 'ar';

// //   return (
// //     <Dialog 
// //       open={showLoginModal} 
// //       onClose={handleModalClose}
// //       maxWidth="xs" 
// //       fullWidth
// //       disableEscapeKeyDown={false}
// //       dir={isRTL ? 'rtl' : 'ltr'}
// //     >
// //       <DialogTitle>
// //         <Box display="flex" justifyContent="space-between" alignItems="center" dir={isRTL ? 'rtl' : 'ltr'}>
// //           <Typography variant="h6">
// //             {loginStep === 'phone' ? t('newprofile.validateAuth.signInRequired') : t('newprofile.validateAuth.verifyCode')}
// //           </Typography>
// //           <IconButton onClick={handleModalClose} size="small" sx={{ ml: isRTL ? 'auto' : 0, mr: isRTL ? 0 : 'auto' }}>
// //             <CloseIcon />
// //           </IconButton>
// //         </Box>
// //       </DialogTitle>
      
// //       <DialogContent>
// //         <Box sx={{ py: 3, textAlign: isRTL ? 'right' : 'center', direction: isRTL ? 'rtl' : 'ltr' }}>
// //           {loginStep === 'phone' ? (
// //             <>
// //               <Typography variant="h6" gutterBottom>
// //                 {t('newprofile.validateAuth.pleaseSignIn')}
// //               </Typography>
// //               <Typography color="text.secondary" paragraph sx={{ mb: 3 }}>
// //                 {t('newprofile.validateAuth.signInMessage')}
// //               </Typography>
              
// //               <FormControl fullWidth sx={{ mb: 2 }}>
// //                 <TextField
// //                   label={t('newprofile.validateAuth.phoneNumber')}
// //                   type="tel"
// //                   value={mobileNumber}
// //                   onChange={(e) => setMobileNumber(e.target.value)}
// //                   size="medium"
// //                   fullWidth
// //                   placeholder={t('newprofile.validateAuth.phonePlaceholder')}
// //                   disabled={isLoading}
// //                   dir="ltr"
// //                   inputProps={{
// //                     dir: 'ltr'
// //                   }}
// //                 />
// //               </FormControl>
              
// //               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
// //                 <InfoIcon color="disabled" fontSize="small" />
// //                 <Typography variant="caption" color="text.secondary">
// //                   {t('newprofile.validateAuth.termsText')}
// //                   <Link href="/terms" sx={{ ml: 0.5, mr: isRTL ? 0.5 : 0 }}>
// //                     {t('newprofile.validateAuth.termsLink')}
// //                   </Link>
// //                 </Typography>
// //               </Box>
              
// //               <Stack spacing={2}>
// //                 <Button 
// //                   variant="contained" 
// //                   size="large" 
// //                   fullWidth
// //                   onClick={handlePhoneSubmit}
// //                   disabled={isLoading || !mobileNumber}
// //                   startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
// //                 >
// //                   {isLoading ? t('newprofile.validateAuth.sending') : t('newprofile.validateAuth.sendCode')}
// //                 </Button>
// //               </Stack>
// //             </>
// //           ) : (
// //             <>
// //               <Typography variant="h6" gutterBottom>
// //                 {t('newprofile.validateAuth.enterCode')}
// //               </Typography>
// //               <Typography color="text.secondary" paragraph sx={{ mb: 3 }}>
// //                 {t('newprofile.validateAuth.codeSentTo')} {mobileNumber}
// //               </Typography>
              
// //               <FormControl fullWidth sx={{ mb: 2 }}>
// //                 <TextField
// //                   label={t('newprofile.validateAuth.verificationCode')}
// //                   type="text"
// //                   value={verificationCode}
// //                   onChange={(e) => setVerificationCode(e.target.value)}
// //                   size="medium"
// //                   fullWidth
// //                   placeholder={t('newprofile.validateAuth.codePlaceholder')}
// //                   disabled={isLoading}
// //                   dir="ltr"
// //                   inputProps={{
// //                     dir: 'ltr',
// //                     inputMode: 'numeric'
// //                   }}
// //                 />
// //               </FormControl>
              
// //               <Box sx={{ mb: 3, textAlign: isRTL ? 'right' : 'left' }}>
// //                 <Button 
// //                   variant="text" 
// //                   size="small"
// //                   onClick={handleResendCode}
// //                   disabled={countdown > 0 || isLoading}
// //                 >
// //                   {countdown > 0 
// //                     ? t('newprofile.validateAuth.resendCountdown', { count: countdown }) 
// //                     : t('newprofile.validateAuth.resendCode')}
// //                 </Button>
// //               </Box>
              
// //               <Stack spacing={2}>
// //                 <Button 
// //                   variant="contained" 
// //                   size="large" 
// //                   fullWidth
// //                   onClick={handleVerifySubmit}
// //                   disabled={isLoading || !verificationCode}
// //                   startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
// //                 >
// //                   {isLoading ? t('newprofile.validateAuth.verifying') : t('newprofile.validateAuth.verifySignIn')}
// //                 </Button>
                
// //                 <Button 
// //                   variant="outlined" 
// //                   size="small"
// //                   onClick={() => {
// //                     setLoginStep('phone');
// //                     setVerificationCode('');
// //                   }}
// //                   disabled={isLoading}
// //                 >
// //                   {t('newprofile.validateAuth.back')}
// //                 </Button>
                
// //                 <Button 
// //                   variant="text" 
// //                   size="small"
// //                   onClick={handleModalClose}
// //                   disabled={isLoading}
// //                   color="error"
// //                 >
// //                   {t('newprofile.validateAuth.cancel')}
// //                 </Button>
// //               </Stack>
// //             </>
// //           )}
// //         </Box>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // };

// // export default ValidateAuth;

// import React, { useEffect, useContext, useState, useRef } from 'react';
// import { useAuthStore } from '../store/authStore';
// import { useLocation, useNavigate } from 'react-router-dom';
// import UserContext from './../UserContext';
// import { useTranslation } from 'react-i18next';

// // Import MUI components
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import CircularProgress from '@mui/material/CircularProgress';
// import CloseIcon from '@mui/icons-material/Close';
// import InfoIcon from '@mui/icons-material/Info';

// // Import your API functions
// import { LoginAPI, VerifyAPI } from '../Api/ApiMaster';

// const ValidateAuth: React.FC = () => {
//   const { setIsAuth, setUser } = useAuthStore();
//   const { userData, setUserData } = useContext(UserContext);
//   const { t, i18n } = useTranslation();
  
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [loginStep, setLoginStep] = useState<'phone' | 'verify'>('phone');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [verificationCode, setVerificationCode] = useState('');
//   const [isLoading, setIsLoadings] = useState(false);
//   const [countdown, setCountdown] = useState(0);
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   // Use ref to track if we should show modal
//   const shouldShowModalRef = useRef(false);

//   // Define public routes that don't require authentication
//   const publicRoutes = [
//     '/',
//     '/about',
//     '/privacy-policy',
//     '/contactus',
//     '/refund-policy',
//     '/terms-and-conditions',
//     '/MapList',
//     '/Logins',
//   ];

//   useEffect(() => {
//     console.log('ValidateAuth: Checking authentication...');
    
//     const isAuthenticated = Array.isArray(userData) && 
//                            userData.length > 0 && 
//                            userData[0]?.Token;

//     const isPublicRoute = publicRoutes.some(route => 
//       location.pathname === route 
//     );

//     console.log('isAuthenticated:', isAuthenticated);
//     console.log('isPublicRoute:', isPublicRoute);
//     console.log('current path:', location.pathname);

//     // Only show modal if not authenticated and not on public route
//     // AND we're not already in the verification step
//     if (!isAuthenticated && !isPublicRoute && loginStep === 'phone') {
//       console.log('Showing login modal - user not authenticated and on protected route');
//       shouldShowModalRef.current = true;
//       setShowLoginModal(true);
//       setMobileNumber('');
//       setVerificationCode('');
//     } else if (isAuthenticated && showLoginModal) {
//       // If user becomes authenticated, close the modal
//       console.log('Closing modal - user is now authenticated');
//       setShowLoginModal(false);
//       shouldShowModalRef.current = false;
//     }
    
//     // Don't change modal visibility if we're in verification step
//     // This prevents the modal from closing when userData updates
//   }, [userData, location.pathname]);

//   const handlePhoneSubmit = async () => {
//     if (!mobileNumber || mobileNumber.trim() === '') {
//       alert(t('newprofile.validateAuth.enterPhoneAlert'));
//       return;
//     }

//     setIsLoadings(true);
    
//     try {
//       // We need to handle the LoginAPI response differently
//       // to prevent it from triggering the useEffect that closes the modal
//       const response = await LoginAPI(
//         mobileNumber,
//         null,
//         userData,
//         setUserData,
//         setIsLoadings
//       );
      
//       console.log('LoginAPI response:', response);
      
//       // Force show modal for verification step
//       shouldShowModalRef.current = true;
//       setShowLoginModal(true);
//       setLoginStep('verify');
//       setCountdown(60);
      
//     } catch (error) {
//       console.error('Login error:', error);
//       alert(t('newprofile.validateAuth.sendCodeError'));
//     } finally {
//       setIsLoadings(false);
//     }
//   };

//   const handleVerifySubmit = async () => {
//     if (!verificationCode || verificationCode.trim() === '') {
//       alert(t('newprofile.validateAuth.enterCodeAlert'));
//       return;
//     }

//     setIsLoadings(true);
    
//     try {
//       // Pass a custom callback that doesn't immediately close the modal
//       // Let the useEffect handle closing based on authentication state
//       await VerifyAPI(
//         mobileNumber,
//         verificationCode,
//         () => {},
//         setIsLoadings,
//         userData,
//         setUserData,
//         () => {},
//         () => {
//           // Don't close modal here - let useEffect handle it
//           // This gives time for userData to update properly
//           console.log('Verification successful, waiting for auth state update');
//         }
//       );
//     } catch (error) {
//       console.error('Verification error:', error);
//       alert(t('newprofile.validateAuth.invalidCodeError'));
//       setIsLoadings(false);
//     }
//   };

//   const handleResendCode = async () => {
//     if (countdown > 0) return;
    
//     setIsLoadings(true);
//     try {
//       await LoginAPI(
//         mobileNumber,
//         null,
//         userData,
//         setUserData,
//         setIsLoadings
//       );
//       setCountdown(60);
//     } catch (error) {
//       console.error('Resend error:', error);
//       alert(t('newprofile.validateAuth.resendError'));
//     } finally {
//       setIsLoadings(false);
//     }
//   };

//   const handleModalClose = () => {
//     // When user closes modal without logging in, navigate back to previous page or home
//     console.log('Modal closed by user, navigating back');
//     setShowLoginModal(false);
//     shouldShowModalRef.current = false;
    
//     // Navigate back to previous page or home
//     if (window.history.length > 1) {
//       navigate(-1); // Go back to previous page
//     } else {
//       navigate('/'); // Go to home if no history
//     }
//   };

//   // Countdown timer effect
//   useEffect(() => {
//     let timer: NodeJS.Timeout;
//     if (countdown > 0) {
//       timer = setInterval(() => {
//         setCountdown(prev => {
//           if (prev <= 1) {
//             clearInterval(timer);
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     }
//     return () => {
//       if (timer) clearInterval(timer);
//     };
//   }, [countdown]);

//   // Set RTL direction for Persian
//   const isRTL = i18n.language === 'fa' || i18n.language === 'ar';

//   return (
//     <Dialog 
//       open={showLoginModal} 
//       onClose={handleModalClose}
//       maxWidth="xs" 
//       fullWidth
//       disableEscapeKeyDown={false}
//       dir={isRTL ? 'rtl' : 'ltr'}
//     >
//       <DialogTitle>
//         <Box display="flex" justifyContent="space-between" alignItems="center" dir={isRTL ? 'rtl' : 'ltr'}>
//           <Typography variant="h6">
//             {loginStep === 'phone' ? t('newprofile.validateAuth.signInRequired') : t('newprofile.validateAuth.verifyCode')}
//           </Typography>
//           <IconButton onClick={handleModalClose} size="small" sx={{ ml: isRTL ? 'auto' : 0, mr: isRTL ? 0 : 'auto' }}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       </DialogTitle>
      
//       <DialogContent>
//         {loginStep === 'phone' ? (
//           <Box className="wrapper-xs py-5 text-center" dir={isRTL ? 'rtl' : 'ltr'}>
//             <Typography variant="h5" component="div" className="fw-bold mb-2">
//               ورود یا ثبت‌نام
//             </Typography>
//             <Typography color="text.secondary" paragraph className="mb-4">
//               برای ادامه شماره موبایل خود را وارد کنید.
//             </Typography>
            
//             <FormControl fullWidth className="mb-3">
//               <TextField
//                 className="form-control-lg"
//                 label="شماره موبایل"
//                 type="tel"
//                 value={mobileNumber}
//                 onChange={(e) => setMobileNumber(e.target.value)}
//                 fullWidth
//                 placeholder="شماره موبایل"
//                 disabled={isLoading}
//                 dir="ltr"
//                 inputProps={{
//                   dir: 'ltr'
//                 }}
//                 sx={{
//                   '& .MuiInputBase-input': {
//                     fontSize: '1.1rem',
//                     padding: '1rem 0.75rem',
//                     height: 'auto'
//                   }
//                 }}
//               />
//             </FormControl>
            
//             <Box className="d-flex align-items-center justify-content-center gap-1 small mb-4" 
//                  sx={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
//               <InfoIcon color="disabled" fontSize="small" />
//               <Typography variant="caption" color="text.secondary">
//                 استفاده از پرتو سیر به معنی پذیرش
//                 <Link href="/terms" sx={{ mx: 0.5, textDecoration: 'none' }}>
//                   قوانین و مقررات
//                 </Link>
//                 این سرویس است.
//               </Typography>
//             </Box>
            
//             <Stack spacing={2}>
//               <Button 
//                 variant="contained" 
//                 size="large" 
//                 fullWidth
//                 onClick={handlePhoneSubmit}
//                 disabled={isLoading || !mobileNumber}
//                 startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
//                 sx={{
//                   padding: '0.75rem',
//                   fontSize: '1.1rem'
//                 }}
//               >
//                 {isLoading ? 'در حال ارسال...' : 'تایید و دریافت کد'}
//               </Button>
//             </Stack>
//           </Box>
//         ) : (
//           <Box sx={{ py: 3, textAlign: isRTL ? 'right' : 'center', direction: isRTL ? 'rtl' : 'ltr' }}>
//             <Typography variant="h6" gutterBottom>
//               {t('newprofile.validateAuth.enterCode')}
//             </Typography>
//             <Typography color="text.secondary" paragraph sx={{ mb: 3 }}>
//               {t('newprofile.validateAuth.codeSentTo')} {mobileNumber}
//             </Typography>
            
//             <FormControl fullWidth sx={{ mb: 2 }}>
//               <TextField
//                 label={t('newprofile.validateAuth.verificationCode')}
//                 type="text"
//                 value={verificationCode}
//                 onChange={(e) => setVerificationCode(e.target.value)}
//                 size="medium"
//                 fullWidth
//                 placeholder={t('newprofile.validateAuth.codePlaceholder')}
//                 disabled={isLoading}
//                 dir="ltr"
//                 inputProps={{
//                   dir: 'ltr',
//                   inputMode: 'numeric'
//                 }}
//               />
//             </FormControl>
            
//             <Box sx={{ mb: 3, textAlign: isRTL ? 'right' : 'left' }}>
//               <Button 
//                 variant="text" 
//                 size="small"
//                 onClick={handleResendCode}
//                 disabled={countdown > 0 || isLoading}
//               >
//                 {countdown > 0 
//                   ? t('newprofile.validateAuth.resendCountdown', { count: countdown }) 
//                   : t('newprofile.validateAuth.resendCode')}
//               </Button>
//             </Box>
            
//             <Stack spacing={2}>
//               <Button 
//                 variant="contained" 
//                 size="large" 
//                 fullWidth
//                 onClick={handleVerifySubmit}
//                 disabled={isLoading || !verificationCode}
//                 startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
//               >
//                 {isLoading ? t('newprofile.validateAuth.verifying') : t('newprofile.validateAuth.verifySignIn')}
//               </Button>
              
//               <Button 
//                 variant="outlined" 
//                 size="small"
//                 onClick={() => {
//                   setLoginStep('phone');
//                   setVerificationCode('');
//                 }}
//                 disabled={isLoading}
//               >
//                 {t('newprofile.validateAuth.back')}
//               </Button>
              
//               <Button 
//                 variant="text" 
//                 size="small"
//                 onClick={handleModalClose}
//                 disabled={isLoading}
//                 color="error"
//               >
//                 {t('newprofile.validateAuth.cancel')}
//               </Button>
//             </Stack>
//           </Box>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ValidateAuth;


import React, { useEffect, useContext, useState, useRef } from 'react';
import { useAuthStore } from '../store/authStore';
import { useLocation, useNavigate } from 'react-router-dom';
import UserContext from './../UserContext';
import { useTranslation } from 'react-i18next';

// Import your API functions
import { LoginAPI, VerifyAPI } from '../Api/ApiMaster';

const ValidateAuth = () => {
  const { setIsAuth, setUser } = useAuthStore();
  const { userData, setUserData } = useContext(UserContext);
  const { t } = useTranslation();
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginStep, setLoginStep] = useState('phone'); // 'phone' or 'verify'
  const [mobileNumber, setMobileNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  
  // Use ref to track if we should show modal
  const shouldShowModalRef = useRef(false);

  // Define public routes that don't require authentication
  const publicRoutes = [
    '/',
    '/about',
    '/privacy-policy',
    '/contactus',
    '/refund-policy',
    '/terms-and-conditions',
    '/MapList',
    '/Logins',
    '/contact',
    '/branches',
    '/terms'
  ];

  useEffect(() => {
    console.log('ValidateAuth: Checking authentication...');
    
    const isAuthenticated = Array.isArray(userData) && 
                           userData.length > 0 && 
                           userData[0]?.Token;

    const isPublicRoute = publicRoutes.some(route => 
      location.pathname === route 
    );

    console.log('isAuthenticated:', isAuthenticated);
    console.log('isPublicRoute:', isPublicRoute);
    console.log('current path:', location.pathname);

    // Only show modal if not authenticated and not on public route
    // AND we're not already in the verification step
    if (!isAuthenticated && !isPublicRoute && loginStep === 'phone') {
      console.log('Showing login modal - user not authenticated and on protected route');
      shouldShowModalRef.current = true;
      setShowLoginModal(true);
      setMobileNumber('');
      setVerificationCode('');
      setError('');
    } else if (isAuthenticated && showLoginModal) {
      // If user becomes authenticated, close the modal
      console.log('Closing modal - user is now authenticated');
      setShowLoginModal(false);
      shouldShowModalRef.current = false;
      setMobileNumber('');
      setVerificationCode('');
      setError('');
      setLoginStep('phone');
    }
    
    // Don't change modal visibility if we're in verification step
    // This prevents the modal from closing when userData updates
  }, [userData, location.pathname]);

  const handlePhoneSubmit = async (e) => {
    if (e) e.preventDefault();
    
    if (!mobileNumber || mobileNumber.trim() === '') {
      alert(t('newprofile.validateAuth.enterPhoneAlert') || 'لطفا شماره موبایل را وارد کنید.');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      const response = await LoginAPI(
        mobileNumber,
        null,
        userData,
        setUserData,
        setIsLoading
      );
      
      console.log('LoginAPI response:', response);
      
      // Force show modal for verification step
      shouldShowModalRef.current = true;
      setShowLoginModal(true);
      setLoginStep('verify');
      setCountdown(60);
      
    } catch (error) {
      console.error('Login error:', error);
      setError(t('newprofile.validateAuth.sendCodeError') || 'خطا در ارسال کد تأیید');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifySubmit = async (e) => {
    if (e) e.preventDefault();
    
    if (!verificationCode || verificationCode.trim() === '') {
      alert(t('newprofile.validateAuth.enterCodeAlert') || 'لطفا کد تأیید را وارد کنید.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await VerifyAPI(
        mobileNumber,
        verificationCode,
        () => {},
        setIsLoading,
        userData,
        setUserData,
        () => {},
        () => {
          // Don't close modal here - let useEffect handle it
          // This gives time for userData to update properly
          console.log('Verification successful, waiting for auth state update');
          setError('');
        }
      );
    } catch (error) {
      console.error('Verification error:', error);
      setError(t('newprofile.validateAuth.invalidCodeError') || 'کد تأیید نامعتبر است');
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (countdown > 0) return;
    
    setIsLoading(true);
    setError('');
    try {
      await LoginAPI(
        mobileNumber,
        null,
        userData,
        setUserData,
        setIsLoading
      );
      setCountdown(60);
    } catch (error) {
      console.error('Resend error:', error);
      setError(t('newprofile.validateAuth.resendError') || 'خطا در ارسال مجدد کد');
    } finally {
      setIsLoading(false);
    }
  };

  const handleModalClose = () => {
    // When user closes modal without logging in, navigate back to previous page or home
    console.log('Modal closed by user, navigating back');
    setShowLoginModal(false);
    shouldShowModalRef.current = false;
    setError('');
    setMobileNumber('');
    setVerificationCode('');
    setLoginStep('phone');
    
    // Navigate back to previous page or home
    if (window.history.length > 1) {
      navigate(-1); // Go back to previous page
    } else {
      navigate('/'); // Go to home if no history
    }
  };

  // Countdown timer effect
  useEffect(() => {
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
      {/* Modal ورود و ثبت‌نام - با استایل مشابه Header */}
      <div className={`modal fade ${showLoginModal ? 'show' : ''}`} id="validateAuthModal" tabIndex="-1" aria-labelledby="validateAuthModalLabel" aria-hidden={!showLoginModal} style={showLoginModal ? {display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'} : {}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button className="btn-close" type="button" onClick={handleModalClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {loginStep === 'phone' ? (
                <div className="wrapper-xs py-5 text-center">
                  <div className="fs-5 fw-bold mb-2">ورود یا ثبت‌نام</div>
                  <p className="lead">برای ادامه شماره موبایل خود را وارد کنید.</p>
                  
                  {error && (
                    <div className="alert alert-danger alert-dismissible fade show mb-3" role="alert">
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
                        id="validateFloatingInput"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                        dir="ltr"
                        pattern="09[0-9]{9}"
                        maxLength="11"
                        disabled={isLoading}
                      />
                      <label htmlFor="validateFloatingInput">شماره موبایل</label>
                    </div>
                    
                    <div className="nt-flex-center-center gap-1 small mb-4">
                      <i className="ti ti-info-circle fs-5 text-muted" aria-hidden="true"></i>
                      استفاده از پرتو سیر به معنی پذیرش
                      <a className="link" href="/terms" onClick={(e) => {
                        e.preventDefault();
                        handleModalClose();
                        navigate('/terms');
                      }}> قوانین و مقررات</a>
                      این سرویس است.
                    </div>
                    
                    <div className="d-grid gap-3">
                      <button 
                        className="btn btn-primary btn-lg" 
                        type="submit"
                        disabled={isLoading || !mobileNumber}
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
                      <button className="btn btn-link" type="button" onClick={handleModalClose}>
                        لغو
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="wrapper-xs py-5 text-center">
                  <div className="fs-5 fw-bold mb-2">تأیید کد</div>
                  <p className="lead">کد تأیید به شماره {mobileNumber} ارسال شد.</p>
                  
                  {error && (
                    <div className="alert alert-danger alert-dismissible fade show mb-3" role="alert">
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
                        id="validateVerificationCode"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                        dir="ltr"
                        inputMode="numeric"
                        maxLength="6"
                        disabled={isLoading}
                      />
                      <label htmlFor="validateVerificationCode">کد تأیید</label>
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
                        disabled={isLoading || !verificationCode}
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
                      
                      <button 
                        type="button" 
                        className="btn btn-link"
                        onClick={handleModalClose}
                        disabled={isLoading}
                      >
                        لغو
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

export default ValidateAuth;