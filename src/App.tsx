import React from 'react';
import { ThemeProvider, CssBaseline, Box, createTheme } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // فایل پیکربندی i18n
import theme from './theme';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import GoogleAuthLogin from './components/GoogleAuthLogin';
import ValidateAuth from './components/ValidateAuth';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BusSchedule from './pages/BusSchedule';
import Checkout from './pages/Checkout';
import Demopage from './pages/DemoPage/demopage';
import UserProtectedRoute from './components/ProtectedRoutes';
import { Toaster } from 'react-hot-toast';
import AdminDashBoard from './pages/AdminDashBoard';
import ProfilePage from './pages/Profile/ProfilePage';
import AdminProtectedRoute from './components/AdminProtectedRoutes';
import AdminSchedule from './pages/AdminSchedule';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PricingPage from './pages/PricingPage/PricingPage';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndconditions/TermsPage';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import ContactUs from './pages/ContactUs/contactUs.tsx';
import AboutUs from './pages/AboutUs/AboutUs';
import { useEffect, useState } from 'react';
import UserContext from './UserContext';
import Logins from './pages/Home/Login/index.tsx';
import MapList from './pages/Home/MapList.tsx';
import ChatinaWidget from './ChatinaWidget';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';


import PaymentSuccessPage from './pages/Home/PaymentSuccessPage.tsx';
import PaymentCancelPage from './pages/Home/PaymentCancelPage.tsx';
import BusTicketsList from './pages/BusList/BusTicketsList.tsx';
import TicketDetail from './pages/BusList/TicketDetail.tsx';
import WishlistPage from './pages/Profile/WishlistPage.tsx';
import ProfileTransactionsPage from './pages/Profile/ProfileTransactionsPage.tsx';
import ProfileTicketingPage from './pages/Profile/ProfileTicketingPage.tsx';
import ProfilePassengersPage from './pages/Profile/ProfilePassengersPage.tsx';
import ProfileOrdersPage from './pages/Profile/ProfileOrdersPage.tsx';
import OrderDetailsPage from './pages/Profile/OrderDetailsPage.tsx';
import OrderPage from './pages/Profile/OrderPage.tsx';
import TicketIssuancePage from './pages/Tickets/TicketIssuancePage.tsx';
import RefundSelectionPage from './pages/Tickets/RefundSelectionPage.tsx';
import OrderConfirmationPage from './pages/Tickets/OrderConfirmationPage.tsx';
import ContactPage from './pages/ContactUs/ContactPage.tsx';
import BranchesPage from './pages/Branches/BranchesPage.tsx';
import VanBookingPage from './pages/Booking/VanBookingPage.tsx';
import InternationalFlightsPage from './pages/Booking/InternationalFlightsPage.tsx';
import TrainBookingPage from './pages/Booking/TrainBookingPage.tsx';
import AboutUsPage from './pages/AboutUs/AboutUsPage.tsx';
import SearchPage from './pages/Home/SearchPage.tsx';
import OrderRefundPage from './pages/Tickets/OrderRefundPage.tsx';

// Create RTL cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  const location = useLocation();
  const [userData, setUserData] = useState(
    localStorage.getItem('storageData') !== null
      ? JSON.parse(localStorage.getItem('storageData'))
      : [{
        UserId: localStorage.getItem('UserId') || '',
        Username: localStorage.getItem('Username') || '',
        CurrentDate: '',
        StartPlace: '',
        EndPlace: '',
        StartPlaceCode: '',
        EndPlaceCode: '',
        isLoading: true,
        Mobile: '',
        Token: localStorage.getItem('Token') || '',
        RequestNumber: '',
        Name: '',
        sourcelat: '',
        sourcelong: '',
        deslat: '',
        deslong: '',
        radioType: '1'
      }]
  );

  // حالت زبان و جهت را از localStorage دریافت می‌کند یا پیش‌فرض انگلیسی (LTR) قرار می‌دهد
  const [language, setLanguage] = useState(localStorage.getItem('language'));
  const [isRTL, setIsRTL] = useState(['en', 'ru', 'he'].includes(language));


  useEffect(() => {
    const setLanguage = async () => {
      const language = await localStorage.getItem("language");
      i18n.changeLanguage(language);
      setIsRTL(['en', 'ru', 'he'].includes(language));
    }
    setLanguage()
  }, [])


  // useEffect(()=>{
  //   console.log('language',language)
  //    i18n.changeLanguage(language);

  // },[])

  // تغییر زبان و جهت
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    setIsRTL(['en', 'ru', 'he'].includes(lng));
    localStorage.setItem('language', lng);
  };

  // تطبیق تم با جهت زبان
  const rtlTheme = createTheme({
    ...theme,
    direction: isRTL ? 'rtl' : 'ltr',
  });

  const showNavbarAndFooter = !location.pathname.startsWith('/Logins');

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={rtlTheme}>
            <div dir={!isRTL ? 'rtl' : 'ltr'}>
              <ChatinaWidget />
              <UserContext.Provider value={{ userData, setUserData, language, changeLanguage }}>
                <ValidateAuth />
                <CssBaseline />
                <Box margin={{ xs: '0.5rem', md: '1rem 1rem' }}>
                  
                    
                     {/* <Navbar /> */}
                    
                  <Routes>
                    <Route path="/Logins" element={<Logins />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/google" element={<GoogleAuthLogin />} />
                    <Route path="/bus-schedule" element={<BusSchedule />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/MapList" element={<MapList />} />
                    <Route path="/tickets" element={<TicketDetail />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/BusTicketsList" element={<BusTicketsList />} />
                    <Route path="/refund-policy" element={<RefundPolicy />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/PaymentSuccessPage" element={<PaymentSuccessPage />} />
                    <Route path="/PaymentCancelPage" element={<PaymentCancelPage />} />

                    <Route path="/VanBookingPage" element={<VanBookingPage />} />
                    <Route path="/InternationalFlightsPage" element={<InternationalFlightsPage />} />
                    <Route path="/TrainBookingPage" element={<TrainBookingPage />} />



                    <Route
                      path="/checkout"
                      element={
                        <UserProtectedRoute>
                          <Checkout />
                        </UserProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin/dashboard"
                      element={
                        <AdminProtectedRoute>
                          <AdminDashBoard />
                        </AdminProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin/schedule"
                      element={
                        <AdminProtectedRoute>
                          <AdminSchedule />
                        </AdminProtectedRoute>
                      }
                    />
                    <Route
                      path="/demo-Page"
                      element={
                        <UserProtectedRoute>
                          <Demopage />
                        </UserProtectedRoute>
                      }
                    />
                    <Route
                      path="/profile"
                      element={
                        <UserProtectedRoute>
                          <ProfilePage />
                        </UserProtectedRoute>
                      }
                    />
                    <Route
                      path="/profile-wishlist"
                      element={
                        <UserProtectedRoute>
                          <WishlistPage />
                        </UserProtectedRoute>
                      }
                    />

                    <Route
                      path="/search-results"
                      element={
                        <UserProtectedRoute>
                          <SearchPage />
                        </UserProtectedRoute>
                      }
                    />

                    <Route
                      path="/ProfileTransactionsPage"
                      element={
                        <UserProtectedRoute>
                          <ProfileTransactionsPage />
                        </UserProtectedRoute>
                      }
                    />


                    <Route
                      path="/profile-orders"
                      element={
                        <UserProtectedRoute>
                          <ProfileOrdersPage />
                        </UserProtectedRoute>
                      }
                    />
                    <Route
                      path="/OrderPage"
                      element={
                        <UserProtectedRoute>
                          <OrderPage />
                        </UserProtectedRoute>
                      }
                    />

                    <Route
                      path="/TicketIssuancePage"
                      element={
                        <UserProtectedRoute>
                          <TicketIssuancePage />
                        </UserProtectedRoute>
                      }
                    />

                    <Route
                      path="/RefundSelectionPage"
                      element={
                        <UserProtectedRoute>
                          <RefundSelectionPage />
                        </UserProtectedRoute>
                      }
                    />


                    <Route
                      path="/orders-confirm"
                      element={
                        <UserProtectedRoute>
                          <OrderConfirmationPage />
                        </UserProtectedRoute>
                      }
                    />

                    <Route
                      path="/ContactPage"
                      element={
                        <UserProtectedRoute>
                          <ContactPage />
                        </UserProtectedRoute>
                      }
                    />


                    <Route
                      path="/BranchesPage"
                      element={
                        <UserProtectedRoute>
                          <BranchesPage />
                        </UserProtectedRoute>
                      }
                    />




                    <Route
                      path="/OrderDetailsPage"
                      element={
                        <UserProtectedRoute>
                          <OrderDetailsPage />
                        </UserProtectedRoute>
                      }
                    />

                      {/* <Route
                      path="/orders-recovery"
                      element={
                        <UserProtectedRoute>
                          <OrderRefundPage />
                        </UserProtectedRoute>
                      }
                    /> */}

                    <Route
                      path="/ProfileTicketingPage"
                      element={
                        <UserProtectedRoute>
                          <ProfileTicketingPage />
                        </UserProtectedRoute>
                      }
                    />


                    <Route
                      path="/profile-passengers"
                      element={
                        <UserProtectedRoute>
                          <ProfilePassengersPage />
                        </UserProtectedRoute>
                      }
                    />
                    <Route
                      path="*"
                      element={
                        <UserProtectedRoute>
                          <NotFoundPage />
                        </UserProtectedRoute>
                      }
                    />
                  </Routes>
                  {/* {showNavbarAndFooter && <Footer />} */}
                </Box>
              </UserContext.Provider>
              <Toaster />
            </div>
          </ThemeProvider>
        </CacheProvider>
      </I18nextProvider>
    </React.StrictMode>
  );
}

export default App;
