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
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   FormControlLabel,
//   Checkbox,
//   Chip,
//   Tabs,
//   Tab,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Slider,
//   Badge
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
//   Search as SearchIcon,
//   ExpandMore as ExpandMoreIcon,
//   Flight as FlightIcon,
//   CalendarToday as CalendarIcon,
//   People as PeopleIcon,
//   Info as InfoIcon,
//   FilterAlt as FilterIcon,
//   Sort as SortIcon
// } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const SearchPage: React.FC = () => {
//   const { t } = useTranslation();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [signModalOpen, setSignModalOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [searchExpanded, setSearchExpanded] = useState(false);
//   const [passengers, setPassengers] = useState({
//     adults: 1,
//     children: 0,
//     infants: 0
//   });
//   const [activeSort, setActiveSort] = useState('recommended');
//   const [activeFlightTab, setActiveFlightTab] = useState(0);

//   // داده‌های نمونه
//   const airlines = [
//     { id: 'taban', name: t('newprofile.search.airlines.taban'), logo: '/img/pages/search/logos/taban-sm.png' },
//     { id: 'ata', name: t('newprofile.search.airlines.ata'), logo: '/img/pages/search/logos/ata-sm.png' },
//     { id: 'flypersia', name: t('newprofile.search.airlines.flypersia'), logo: '/img/pages/search/logos/flypersia-sm.png' },
//     { id: 'karun', name: t('newprofile.search.airlines.karun'), logo: '/img/pages/search/logos/karun-sm.png' },
//     { id: 'aseman', name: t('newprofile.search.airlines.aseman'), logo: '/img/pages/search/logos/aseman-sm.png' },
//     { id: 'saha', name: t('newprofile.search.airlines.saha'), logo: '/img/pages/search/logos/saha-sm.png' }
//   ];

//   const flights = [
//     {
//       id: 1,
//       airline: 'ata',
//       flightNumber: '7401',
//       from: 'تهران',
//       to: 'شیراز',
//       departureTime: '۲۱:۴۰',
//       arrivalTime: '۲۲:۵۰',
//       price: '۱،۳۰۰،۰۰۰',
//       seatsLeft: 3,
//       aircraft: 'Boeing MD-82',
//       class: 'اکونومی',
//       type: 'سیستمی',
//       luggage: '20 کیلوگرم',
//       terminal: 'فرودگاه مهرآباد - ترمینال 4'
//     },
//     {
//       id: 2,
//       airline: 'flypersia',
//       flightNumber: '7402',
//       from: 'تهران',
//       to: 'شیراز',
//       departureTime: '۲۱:۵۰',
//       arrivalTime: '۲۳:۱۰',
//       price: '۱،۲۱۰،۸۰۰',
//       seatsLeft: 2,
//       aircraft: 'Boeing 737-300',
//       class: 'اکونومی',
//       type: 'سیستمی',
//       luggage: '20 کیلوگرم',
//       terminal: 'فرودگاه مهرآباد - ترمینال 4'
//     }
//   ];

//   const datePrices = [
//     { date: 'شنبه - 05/06', price: '1,210', active: true },
//     { date: 'یک‌شنبه - 05/07', price: '1,400', active: false },
//     { date: 'دوشنبه - 05/08', price: '2,003', active: false },
//     { date: 'سه‌شنبه - 05/09', price: '2,300', active: false },
//     { date: 'چهارشنبه - 05/10', price: '2,199', active: false },
//     { date: 'پنج‌شنبه - 05/11', price: '2,199', active: false },
//     { date: 'جمعه - 05/12', price: '2,003', active: false },
//     { date: 'شنبه - 05/13', price: '2,199', active: false }
//   ];

//   // Header Component
//   const Header = () => (
//     <AppBar position="static" color="default" elevation={1}>
//       <Toolbar>
//         <Container maxWidth="lg">
//           <Grid container alignItems="center" spacing={2}>
//             <Grid item xs={6} md={2}>
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 {isMobile && (
//                   <IconButton onClick={() => setMenuOpen(true)}>
//                     <MenuIcon />
//                   </IconButton>
//                 )}
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <Box
//                     component="img"
//                     src="/img/logo-m.png"
//                     alt={t('newprofile.header.title')}
//                     sx={{ width: 40, height: 40 }}
//                   />
//                   <Typography variant="h6" fontWeight="bold">
//                     {t('newprofile.header.title')}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>

//             <Grid item md={8} sx={{ display: { xs: 'none', md: 'block' } }}>
//               <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
//                 <Button color="inherit">{t('newprofile.header.services')}</Button>
//                 <Button color="inherit">{t('newprofile.header.about')}</Button>
//                 <Button color="inherit">{t('newprofile.header.contact')}</Button>
//                 <Button color="inherit">{t('newprofile.header.stations')}</Button>
//                 <Button color="inherit">{t('newprofile.header.bookedTickets')}</Button>
//               </Box>
//             </Grid>

//             <Grid item xs={6} md={2}>
//               <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
//                 <IconButton onClick={() => setDarkMode(!darkMode)}>
//                   {darkMode ? <LightIcon /> : <DarkIcon />}
//                 </IconButton>
//                 <Button
//                   variant="outlined"
//                   startIcon={<PersonIcon />}
//                   onClick={() => setSignModalOpen(true)}
//                 >
//                   {t('newprofile.auth.loginSignup')}
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Toolbar>
//     </AppBar>
//   );

//   // Search Header Section
//   const SearchHeader = () => (
//     <Paper 
//       elevation={2} 
//       sx={{ 
//         bgcolor: 'background.paper',
//         borderRadius: 2,
//         mb: 2,
//         cursor: 'pointer'
//       }}
//       onClick={() => setSearchExpanded(!searchExpanded)}
//     >
//       <Box sx={{ p: 3 }}>
//         <Grid container alignItems="center" spacing={3}>
//           <Grid item xs={12} md={3}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               <FlightIcon color="primary" />
//               <Typography variant="h6">
//                 {t('newprofile.search.header.ticket')} {t('newprofile.search.header.fromTo')}
//               </Typography>
//             </Box>
//           </Grid>
          
//           <Grid item xs={12} md={2}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               <CalendarIcon color="primary" />
//               <Typography variant="body1">
//                 {t('newprofile.search.header.date')}
//               </Typography>
//             </Box>
//           </Grid>
          
//           <Grid item xs={12} md={2}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               <PeopleIcon color="primary" />
//               <Typography variant="body1">
//                 {passengers.adults + passengers.children + passengers.infants} {t('newprofile.search.header.passengers')}
//               </Typography>
//             </Box>
//           </Grid>
          
//           <Grid item xs={12} md={2}>
//             <Button
//               variant="contained"
//               startIcon={<SearchIcon />}
//               fullWidth
//             >
//               {t('newprofile.search.header.editSearch')}
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>
//     </Paper>
//   );

//   // Filters Sidebar
//   const FiltersSidebar = () => (
//     <Card sx={{ display: { xs: 'none', md: 'block' } }}>
//       <CardContent sx={{ p: 3 }}>
//         {/* Filter Header */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//           <Typography variant="h6" fontWeight="bold">
//             {t('newprofile.search.filters.title')}
//           </Typography>
//           <Button size="small" color="primary">
//             {t('newprofile.search.filters.clearAll')}
//           </Button>
//         </Box>

//         {/* Active Filters */}
//         <Box sx={{ mb: 3 }}>
//           <Chip
//             label="نوع بلیط: سیستمی"
//             onDelete={() => {}}
//             variant="outlined"
//             size="small"
//             sx={{ mb: 1 }}
//           />
//         </Box>

//         {/* Filters Accordion */}
//         <Accordion defaultExpanded>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography fontWeight="bold">{t('newprofile.search.filters.departureTime')}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Slider
//               defaultValue={[6, 22]}
//               valueLabelDisplay="auto"
//               valueLabelFormat={(value) => `${value}:00`}
//               min={0}
//               max={24}
//               sx={{ mt: 2 }}
//             />
//           </AccordionDetails>
//         </Accordion>

//         <Accordion defaultExpanded>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography fontWeight="bold">{t('newprofile.search.filters.ticketType')}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <FormControlLabel
//               control={<Checkbox defaultChecked />}
//               label={t('newprofile.search.filters.ticketTypes.system')}
//             />
//             <FormControlLabel
//               control={<Checkbox />}
//               label={t('newprofile.search.filters.ticketTypes.charter')}
//             />
//           </AccordionDetails>
//         </Accordion>

//         <Accordion defaultExpanded>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography fontWeight="bold">{t('newprofile.search.filters.airlines')}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             {airlines.map((airline) => (
//               <FormControlLabel
//                 key={airline.id}
//                 control={<Checkbox />}
//                 label={
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                     <Box
//                       component="img"
//                       src={airline.logo}
//                       alt={airline.name}
//                       sx={{ width: 20, height: 20 }}
//                     />
//                     {airline.name}
//                   </Box>
//                 }
//               />
//             ))}
//           </AccordionDetails>
//         </Accordion>

//         <Accordion defaultExpanded>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography fontWeight="bold">{t('newprofile.search.filters.otherOptions')}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <FormControlLabel
//               control={<Checkbox />}
//               label={t('newprofile.search.filters.otherOptionsList.duplicateTickets')}
//             />
//             <FormControlLabel
//               control={<Checkbox />}
//               label={t('newprofile.search.filters.otherOptionsList.availableTickets')}
//             />
//           </AccordionDetails>
//         </Accordion>
//       </CardContent>
//     </Card>
//   );

//   // Date Price Slider
//   const DatePriceSlider = () => (
//     <Card sx={{ mb: 3 }}>
//       <CardContent sx={{ p: 2 }}>
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={10}
//           slidesPerView={isMobile ? 3 : 7}
//           navigation
//         >
//           {datePrices.map((datePrice, index) => (
//             <SwiperSlide key={index}>
//               <Paper
//                 sx={{
//                   p: 2,
//                   textAlign: 'center',
//                   cursor: 'pointer',
//                   bgcolor: datePrice.active ? 'primary.light' : 'background.paper',
//                   color: datePrice.active ? 'primary.contrastText' : 'text.primary',
//                   transition: 'all 0.3s',
//                   '&:hover': {
//                     bgcolor: 'primary.main',
//                     color: 'primary.contrastText'
//                   }
//                 }}
//               >
//                 <Typography variant="body2" sx={{ mb: 1 }}>
//                   {datePrice.date}
//                 </Typography>
//                 <Typography 
//                   variant="h6" 
//                   color={datePrice.active ? 'success.main' : 'text.primary'}
//                   fontWeight="bold"
//                 >
//                   {datePrice.price}
//                 </Typography>
//               </Paper>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </CardContent>
//     </Card>
//   );

//   // Flight Card Component
//   const FlightCard = ({ flight }: { flight: any }) => {
//     const airline = airlines.find(a => a.id === flight.airline);
    
//     return (
//       <Card sx={{ mb: 3, overflow: 'visible' }}>
//         <Grid container>
//           {/* Flight Info */}
//           <Grid item xs={12} md={9}>
//             <Box sx={{ p: 3 }}>
//               {/* Airline and Basic Info */}
//               <Grid container alignItems="center" spacing={3}>
//                 <Grid item xs={2}>
//                   <Box sx={{ textAlign: 'center' }}>
//                     <Box
//                       component="img"
//                       src={airline?.logo}
//                       alt={airline?.name}
//                       sx={{ width: 50, height: 50, mb: 1 }}
//                     />
//                     <Typography variant="body1" fontWeight="bold">
//                       {airline?.name}
//                     </Typography>
//                   </Box>
//                 </Grid>
                
//                 <Grid item xs={10}>
//                   <Box sx={{ mb: 2 }}>
//                     <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
//                       <Chip label={flight.type} size="small" variant="outlined" />
//                       <Chip label={flight.class} size="small" variant="outlined" />
//                       <Chip label={flight.aircraft} size="small" variant="outlined" />
//                     </Box>
                    
//                     <Grid container alignItems="center" spacing={2}>
//                       <Grid item xs={4}>
//                         <Typography variant="h6" fontWeight="bold">
//                           {flight.departureTime}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           {flight.from}
//                         </Typography>
//                       </Grid>
                      
//                       <Grid item xs={4} sx={{ textAlign: 'center' }}>
//                         <FlightIcon sx={{ transform: 'rotate(90deg)', color: 'text.secondary' }} />
//                         <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//                           1h 10m
//                         </Typography>
//                       </Grid>
                      
//                       <Grid item xs={4} sx={{ textAlign: 'right' }}>
//                         <Typography variant="h6" fontWeight="bold">
//                           {flight.arrivalTime}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           {flight.to}
//                         </Typography>
//                       </Grid>
//                     </Grid>
//                   </Box>

//                   {/* Flight Details Tabs */}
//                   <Tabs 
//                     value={activeFlightTab} 
//                     onChange={(e, newValue) => setActiveFlightTab(newValue)}
//                     sx={{ mb: 2 }}
//                   >
//                     <Tab label={t('newprofile.search.results.flightInfo')} />
//                     <Tab label={t('newprofile.search.results.refundRules')} />
//                   </Tabs>

//                   {activeFlightTab === 0 && (
//                     <Grid container spacing={3}>
//                       <Grid item xs={6} md={3}>
//                         <Typography variant="body2" color="text.secondary">
//                           {t('newprofile.search.results.flightNumber')}
//                         </Typography>
//                         <Typography variant="body1" fontWeight="bold">
//                           {flight.flightNumber}
//                         </Typography>
//                       </Grid>
//                       <Grid item xs={6} md={3}>
//                         <Typography variant="body2" color="text.secondary">
//                           {t('newprofile.search.results.cabinClass')}
//                         </Typography>
//                         <Typography variant="body1" fontWeight="bold">
//                           {flight.class}
//                         </Typography>
//                       </Grid>
//                       <Grid item xs={6} md={3}>
//                         <Typography variant="body2" color="text.secondary">
//                           {t('newprofile.search.results.aircraftModel')}
//                         </Typography>
//                         <Typography variant="body1" fontWeight="bold">
//                           {flight.aircraft}
//                         </Typography>
//                       </Grid>
//                       <Grid item xs={6} md={3}>
//                         <Typography variant="body2" color="text.secondary">
//                           {t('newprofile.search.results.luggageAllowance')}
//                         </Typography>
//                         <Typography variant="body1" fontWeight="bold">
//                           {flight.luggage}
//                         </Typography>
//                       </Grid>
//                     </Grid>
//                   )}

//                   {activeFlightTab === 1 && (
//                     <Box>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
//                         <InfoIcon color="info" />
//                         <Typography variant="body2" color="text.secondary">
//                           {t('newprofile.search.results.refundNote')}{' '}
//                           <Button variant="text" size="small">
//                             {t('newprofile.search.results.viewRefundRules')}
//                           </Button>
//                         </Typography>
//                       </Box>
                      
//                       <Grid container spacing={2}>
//                         {[30, 60, 70, 75].map((percent, index) => (
//                           <Grid item xs={6} md={3} key={index}>
//                             <Paper sx={{ p: 2, textAlign: 'center' }}>
//                               <Typography variant="h6" color="error.main">
//                                 {percent}%
//                               </Typography>
//                               <Typography variant="body2">
//                                 شرایط بازگشت وجه
//                               </Typography>
//                             </Paper>
//                           </Grid>
//                         ))}
//                       </Grid>
//                     </Box>
//                   )}
//                 </Grid>
//               </Grid>
//             </Box>
//           </Grid>

//           {/* Price and Action */}
//           <Grid item xs={12} md={3}>
//             <Box 
//               sx={{ 
//                 bgcolor: 'grey.50',
//                 height: '100%',
//                 p: 3,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//               }}
//             >
//               <Typography variant="h4" color="info.main" fontWeight="bold" gutterBottom>
//                 {flight.price}
//               </Typography>
//               <Typography variant="body2" color="text.secondary" gutterBottom>
//                 {t('newprofile.common.currency')}
//               </Typography>
              
//               <Typography variant="body2" fontWeight="bold" gutterBottom>
//                 {t('newprofile.search.results.officialRate')}
//               </Typography>
              
//               <Button 
//                 variant="contained" 
//                 fullWidth 
//                 size="large"
//                 sx={{ mb: 2 }}
//               >
//                 {t('newprofile.search.results.selectFlight')}
//               </Button>
              
//               <Typography variant="body2" color="error.main" gutterBottom>
//                 {flight.seatsLeft} {t('newprofile.search.results.seatsLeft')}
//               </Typography>

//               <Box sx={{ width: '100%', mt: 2 }}>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1, borderBottom: 1, borderColor: 'divider' }}>
//                   <Typography variant="body2">{t('newprofile.search.results.adult')}</Typography>
//                   <Typography variant="body2" fontWeight="bold">{flight.price} {t('newprofile.common.currency')}</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
//                   <Typography variant="body2">{t('newprofile.search.results.total')}</Typography>
//                   <Typography variant="body2" fontWeight="bold">{flight.price} {t('newprofile.common.currency')}</Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Card>
//     );
//   };

//   // Main Content
//   const MainContent = () => (
//     <Box>
//       {/* Results Header */}
//       <Card sx={{ mb: 3 }}>
//         <CardContent>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
//             <Typography variant="body1" color="text.secondary">
//               {t('newprofile.search.results.showing')} 11 {t('newprofile.search.results.of')} 23 {t('newprofile.search.results.flights')}
//             </Typography>
            
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//               <Typography variant="body2" color="text.secondary">
//                 {t('newprofile.search.results.sortBy')}
//               </Typography>
//               <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//                 {['recommended', 'earliest', 'latest', 'cheapest', 'mostExpensive'].map((sort) => (
//                   <Button
//                     key={sort}
//                     variant={activeSort === sort ? 'contained' : 'text'}
//                     size="small"
//                     onClick={() => setActiveSort(sort)}
//                   >
//                     {t(`newprofile.search.results.sortOptions.${sort}`)}
//                   </Button>
//                 ))}
//               </Box>
//             </Box>
//           </Box>
//         </CardContent>
//       </Card>

//       {/* Price Note */}
//       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
//         <InfoIcon color="info" />
//         <Typography variant="body2" color="text.secondary">
//           {t('newprofile.search.results.priceNote')}
//         </Typography>
//       </Box>

//       {/* Flights List */}
//       <Box>
//         {flights.map((flight) => (
//           <FlightCard key={flight.id} flight={flight} />
//         ))}
//       </Box>
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
//                     src="/img/logo-m.png"
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
//       direction: 'rtl'
//     }}>
//       <Header />
      
//       <Container maxWidth="lg" sx={{ py: 3 }}>
//         <SearchHeader />
        
//         <Grid container spacing={3}>
//           {/* Sidebar */}
//           <Grid item xs={12} md={3}>
//             <FiltersSidebar />
//           </Grid>
          
//           {/* Main Content */}
//           <Grid item xs={12} md={9}>
//             <DatePriceSlider />
//             <MainContent />
//           </Grid>
//         </Grid>
//       </Container>
      
//       <Footer />
//       <AuthModal />
//     </Box>
//   );
// };

// export default SearchPage;



import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  Chip,
  Tabs,
  Tab,
  Divider,
  List,
  ListItem,
  ListItemText,
  Slider,
  Badge,
  CircularProgress,
  Stack,
  Skeleton
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Person as PersonIcon,
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  Phone as PhoneIcon,
  Telegram as TelegramIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon,
  AirportShuttle as FlightIcon,
  CalendarToday as CalendarIcon,
  People as PeopleIcon,
  Info as InfoIcon,
  FilterAlt as FilterIcon,
  Sort as SortIcon,
  ConfirmationNumber as TicketIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import moment from 'moment-jalaali';
import UserContext from './../../UserContext';
import { BusSearch } from '../../Api/ApiMaster';
import NoResultsFound from '../../components/NoResultsFound';
import getTheme from '../../theme';


const SearchPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = getTheme(i18n.language);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isPersian = ['fa', 'ar', 'pa'].includes(i18n.language);
  const isRTL = isPersian;

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [signModalOpen, setSignModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });
  const [activeSort, setActiveSort] = useState('recommended');
  const [activeFlightTab, setActiveFlightTab] = useState(0);
  
  // State from old code
  const { userData, setUserData } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [flightData, setFlightData] = useState<any>({ searchItems: [], totalCount: 0 });
  const [datePrices, setDatePrices] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  // Ref برای پیگیری آخرین تاریخ لود شده
  const lastFetchedDateRef = useRef<string>('');
  const isMountedRef = useRef(true);

  // API call function
  const fetchFlights = useCallback(async (date: Date) => {
    if (!userData || userData.length === 0) {
      console.log('User data not available yet');
      return;
    }

    const dateString = moment(date).format('jYYYY-jMM-jDD');
    
    // اگر همین تاریخ قبلاً لود شده، دوباره لود نکن
    if (lastFetchedDateRef.current === dateString) {
      console.log('Already fetched data for this date:', dateString);
      return;
    }

    console.log('Fetching flights for date:', dateString);
    
    try {
      setLoading(true);
      lastFetchedDateRef.current = dateString;
      
      await BusSearch(
        userData[0].StartPlaceCode, 
        userData[0].EndPlaceCode,
        dateString,
        userData[0].Token,
        (isLoading) => {
          if (isMountedRef.current) {
            setLoading(isLoading);
          }
        }, 
        (data) => {
          if (isMountedRef.current) {
            console.log('Flight data received:', data);
            setFlightData(data || { searchItems: [], totalCount: 0 });
          }
        }, 
        setUserData, 
        userData, 
        {}
      );
    } catch (error) {
      console.error('Error fetching flights:', error);
      if (isMountedRef.current) {
        setFlightData({ searchItems: [], totalCount: 0 });
        setLoading(false);
        lastFetchedDateRef.current = ''; // Reset on error
      }
    }
  }, [userData, setUserData]);

  // Generate simple date array without prices
  // const generateDateArray = useCallback((baseDate: Date) => {
  //   const dates = [];
  //   const today = new Date(baseDate);
    
  //   // Generate 7 days starting from today
  //   for (let i = 0; i < 7; i++) {
  //     const date = new Date(today);
  //     date.setDate(today.getDate() + i);
      
  //     const formattedDate = isPersian 
  //       ? moment(date).format('dddd - jDD/jMM')
  //       : moment(date).locale('en').format('dddd - MM/DD');
      
  //     dates.push({
  //       date: formattedDate,
  //       dateObj: date,
  //       active: i === 0
  //     });
  //   }
  //   return dates;
  // }, [isPersian]);

  const generateDateArray = useCallback((baseDate: Date) => {
    const dates = [];
    const today = new Date(baseDate);
    
    // Generate 7 days starting from today
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Create moment instance for Persian formatting
      const momentDate = moment(date);
      
      // Persian day names mapping
      const persianDayNames = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
      
      // Get the Persian day of week (0 = یکشنبه, 1 = دوشنبه, etc.)
      // Note: moment(date).day() returns 0 for Sunday, 1 for Monday, etc.
      // We need to map: 0 -> یکشنبه, 1 -> دوشنبه, etc.
      const dayOfWeek = momentDate.day(); // 0-6 where 0 is Sunday
      const persianDayName = persianDayNames[dayOfWeek];
      
      // Format the Shamsi date part
      const shamsiDate = momentDate.format('jDD/jMM');
      
      // Final formatted date in Persian
      const formattedDate = isPersian 
        ? `${persianDayName} - ${shamsiDate}`
        : momentDate.locale('en').format('dddd - MM/DD');
      
      dates.push({
        date: formattedDate,
        dateObj: date,
        active: i === 0
      });
    }
    return dates;
  }, [isPersian]);

  // Handle date slider click
  const handleDateClick = useCallback(async (dateObj: Date) => {
    console.log('Date clicked:', dateObj);
    
    // Update selected date
    setSelectedDate(dateObj);
    
    // Update active date in slider
    setDatePrices(prev => prev.map(item => ({
      ...item,
      active: moment(item.dateObj).isSame(dateObj, 'day')
    })));
    
    // Update userData context
    if (userData && userData.length > 0) {
      const updatedUserData = [...userData];
      updatedUserData[0].CurrentDate = dateObj;
      setUserData(updatedUserData);
    }
    
    // Fetch flights for new date
    await fetchFlights(dateObj);
  }, [userData, setUserData, fetchFlights]);

  // Initialize - runs only once on mount
  useEffect(() => {
    console.log('Initializing component...');
    isMountedRef.current = true;
    
    // Generate date array without prices
    const initialDates = generateDateArray(new Date());
    setDatePrices(initialDates);
    
    // Set initial date from userData if available
    let initialDate = new Date();
    if (userData && userData.length > 0 && userData[0].CurrentDate) {
      initialDate = new Date(userData[0].CurrentDate);
      setSelectedDate(initialDate);
      
      // Update active date in slider
      const updatedDates = initialDates.map(item => ({
        ...item,
        active: moment(item.dateObj).isSame(initialDate, 'day')
      }));
      setDatePrices(updatedDates);
    }
    
    // Fetch initial data
    if (userData && userData.length > 0) {
      setTimeout(() => {
        if (isMountedRef.current) {
          fetchFlights(initialDate);
        }
      }, 100);
    }

    return () => {
      isMountedRef.current = false;
    };
  }, []); 
  
  // Empty dependency array - runs only once

  // Listen to userData changes
  useEffect(() => {
    if (userData && userData.length > 0 && isMountedRef.current) {
      console.log('UserData loaded, checking if need to fetch...');
      
      const userDate = new Date(userData[0].CurrentDate);
      const dateString = moment(userDate).format('jYYYY-jMM-jDD');
      
      // فقط اگر تاریخ جدیدی است که قبلاً لود نشده
      if (lastFetchedDateRef.current !== dateString) {
        setSelectedDate(userDate);
        
        // Update active date in slider
        setDatePrices(prev => prev.map(item => ({
          ...item,
          active: moment(item.dateObj).isSame(userDate, 'day')
        })));
        
        fetchFlights(userDate);
      }
    }
  }, [userData]); // Only depends on userData changes

  // Convert API data to flight format
  const convertToFlightData = (apiData: any[]) => {
    if (!apiData || apiData.length === 0) return [];
    
    return apiData.map((flight: any, index: number) => ({
      id: flight.busCode ,
      airline: flight.companyName ,
      busCode: flight.busCode ,
      from: flight.originCity || userData?.[0]?.StartPlaceName ,
      to: flight.destinationCity || userData?.[0]?.EndPlaceName ,
      departureTime: flight.timeMove ,
      arrivalTime: flight.arrivalTime ,
      price: flight.price ? flight.price.toLocaleString() : '',
      seatsLeft: flight.countFreeChairs ,
      aircraft: flight.carType ,
      class: flight.classType ,
      type: flight.ticketType ,
      luggage: flight.luggage ,
      terminal: `${flight.originTerminal } - ${flight.destinationTerminal }`,
      companyName: flight.companyName,
      originTerminal: flight.originTerminal,
      destinationTerminal: flight.destinationTerminal,
      moveDateTime: flight.moveDateTime,
      description: flight.description,
      sourceCode : flight.sourceCode,
      rawData: flight
    }));
  };

  // Helper function to calculate arrival time
  const calculateArrivalTime = (departureTime: string) => {
    if (!departureTime) return '۲۲:۵۰';
    const [hours, minutes] = departureTime.split(':').map(Number);
    const arrivalHours = (hours + 1) % 24;
    return `${arrivalHours.toString().padStart(2, '۰')}:${minutes.toString().padStart(2, '۰')}`;
  };

  // Sample airlines (you can update this with real airline data)
  const airlines = [
    { id: 'taban', name: t('newprofile.search.airlines.taban'), logo: '../../img/pages/search/logos/taban-sm.png' },
    { id: 'ata', name: t('newprofile.search.airlines.ata'), logo: '/img/pages/search/logos/ata-sm.png' },
    { id: 'flypersia', name: t('newprofile.search.airlines.flypersia'), logo: '/img/pages/search/logos/flypersia-sm.png' },
    { id: 'karun', name: t('newprofile.search.airlines.karun'), logo: '/img/pages/search/logos/karun-sm.png' },
    { id: 'aseman', name: t('newprofile.search.airlines.aseman'), logo: '/img/pages/search/logos/aseman-sm.png' },
    { id: 'saha', name: t('newprofile.search.airlines.saha'), logo: '/img/pages/search/logos/saha-sm.png' }
  ];

  // Header Component
  const Header = () => (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={6} md={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {isMobile && (
                  <IconButton onClick={() => setMenuOpen(true)}>
                    <MenuIcon />
                  </IconButton>
                )}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    component="img"
                    src="../../img/logo-m.png"
                    alt={t('newprofile.header.title')}
                    sx={{ width: 40, height: 40 }}
                  />
                  <Typography variant="h6" fontWeight="bold">
                    {t('newprofile.header.title')}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item md={8} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button color="inherit">{t('newprofile.header.services')}</Button>
                <Button color="inherit">{t('newprofile.header.about')}</Button>
                <Button color="inherit">{t('newprofile.header.contact')}</Button>
                <Button color="inherit">{t('newprofile.header.stations')}</Button>
                <Button color="inherit">{t('newprofile.header.bookedTickets')}</Button>
              </Box>
            </Grid>

            <Grid item xs={6} md={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                <IconButton onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <LightIcon /> : <DarkIcon />}
                </IconButton>
                <Button
                  variant="outlined"
                  startIcon={<PersonIcon />}
                  onClick={() => setSignModalOpen(true)}
                >
                  {t('newprofile.auth.loginSignup')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );

  // Search Header Section
  const SearchHeader = () => (
    <Paper 
      elevation={2} 
      sx={{ 
        bgcolor: 'background.paper',
        borderRadius: 2,
        mb: 2,
        cursor: 'pointer'
      }}
      onClick={() => setSearchExpanded(!searchExpanded)}
    >
      <Box sx={{ p: 3 }}>
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FlightIcon color="primary" />
              <Typography variant="h6">
                {userData?.[0]?.StartPlaceName || t('newprofile.search.header.ticket')} {t('newprofile.search.header.fromTo')} {userData?.[0]?.EndPlaceName || ''}
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarIcon color="primary" />
              <Typography variant="body1">
                {isPersian 
                  ? moment(selectedDate).format('jYYYY/jMM/jDD')
                  : moment(selectedDate).format('YYYY/MM/DD')}
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PeopleIcon color="primary" />
              {/* <Typography variant="body1">
                {passengers.adults + passengers.children + passengers.infants} {t('newprofile.search.header.passengers')}
              </Typography> */}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              fullWidth
              onClick={() => setSearchExpanded(!searchExpanded)}
            >
              {t('newprofile.search.header.editSearch')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );

  // Filters Sidebar
  const FiltersSidebar = () => (
    <Card sx={{ display: { xs: 'none', md: 'block' } }}>
      <CardContent sx={{ p: 3 }}>
        {/* Filter Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" fontWeight="bold">
            {t('newprofile.search.filters.title')}
          </Typography>
          <Button size="small" color="primary">
            {t('newprofile.search.filters.clearAll')}
          </Button>
        </Box>

        {/* Active Filters */}
        <Box sx={{ mb: 3 }}>
          <Chip
            label="نوع بلیط: سیستمی"
            onDelete={() => {}}
            variant="outlined"
            size="small"
            sx={{ mb: 1 }}
          />
        </Box>

        {/* Filters Accordion */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">{t('newprofile.search.filters.departureTime')}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              defaultValue={[6, 22]}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${value}:00`}
              min={0}
              max={24}
              sx={{ mt: 2 }}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">{t('newprofile.search.filters.ticketType')}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={t('newprofile.search.filters.ticketTypes.system')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={t('newprofile.search.filters.ticketTypes.charter')}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">{t('newprofile.search.filters.airlines')}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {airlines.map((airline) => (
              <FormControlLabel
                key={airline.id}
                control={<Checkbox />}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {/* <Box
                      component="img"
                      src={airline.logo}
                      alt={airline.name}
                      sx={{ width: 20, height: 20 }}
                    /> */}
                    {airline.name}
                  </Box>
                }
              />
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">{t('newprofile.search.filters.otherOptions')}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControlLabel
              control={<Checkbox />}
              label={t('newprofile.search.filters.otherOptionsList.duplicateTickets')}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={t('newprofile.search.filters.otherOptionsList.availableTickets')}
            />
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );

  // Date Slider (without prices)
  const DateSlider = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent sx={{ p: 2 }}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={isMobile ? 3 : 7}
          navigation
        >
          {datePrices.map((dateItem, index) => (
            <SwiperSlide key={index}>
              <Paper
                sx={{
                  p: 2,
                  textAlign: 'center',
                  cursor: 'pointer',
                  bgcolor: dateItem.active ? 'primary.light' : 'background.paper',
                  color: dateItem.active ? 'primary.contrastText' : 'text.primary',
                  transition: 'all 0.3s',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText'
                  }
                }}
                onClick={() => handleDateClick(dateItem.dateObj)}
              >
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {dateItem.date}
                </Typography>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardContent>
    </Card>
  );

  // Flight Card Component
  const FlightCard = ({ flight }: { flight: any }) => {
    const airline = airlines.find(a => a.id === 'ata') || airlines[0];
    
    return (
      <Card sx={{ mb: 3, overflow: 'visible' }}>
        <Grid container>
          {/* Flight Info */}
          <Grid item xs={12} md={9}>
            <Box sx={{ p: 3 }}>
              {/* Airline and Basic Info */}
              <Grid container alignItems="center" spacing={3}>
                <Grid item xs={2}>
                  <Box sx={{ textAlign: 'center' }}>
                    {/* <Box
                      component="img"
                      src={airline.logo}
                      alt={airline.name}
                      sx={{ width: 50, height: 50, mb: 1 }}
                    /> */}
                    <Typography variant="body1" fontWeight="bold">
                      {flight.companyName}
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={10}>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Chip label={flight.type} size="small" variant="outlined" />
                      <Chip label={flight.class} size="small" variant="outlined" />
                      <Chip label={flight.aircraft} size="small" variant="outlined" />
                    </Box>
                    
                    <Grid container alignItems="center" spacing={2}>
                      <Grid item xs={4}>
                      
                        <Typography variant="body2" color="text.secondary">
                          {flight.from}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {flight.originTerminal }
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={4} >
                        <FlightIcon sx={{  color: 'text.secondary' }} />
                        <Typography variant="h6" fontWeight="bold">
                          {flight.departureTime}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={4} sx={{ textAlign: 'right' }}>
                        <Typography variant="h6" fontWeight="bold">
                          {flight.arrivalTime}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {flight.to}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {flight.destinationTerminal }
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  {/* Flight Details Tabs */}
                  <Tabs 
                    value={activeFlightTab} 
                    onChange={(e, newValue) => setActiveFlightTab(newValue)}
                    sx={{ mb: 2 }}
                  >
                    <Tab label={t('newprofile.search.results.flightInfo')} />
                    <Tab label={t('newprofile.search.results.refundRules')} />
                  </Tabs>

                  {activeFlightTab === 0 && (
                    <Grid container spacing={3}>
                      <Grid item xs={6} md={3}>
                        <Typography variant="body2" color="text.secondary">
                          {t('newprofile.search.results.flightNumber')}
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                          {flight.flightNumber}
                        </Typography>
                      </Grid>
                      {/* <Grid item xs={6} md={3}>
                        <Typography variant="body2" color="text.secondary">
                          {t('newprofile.search.results.cabinClass')}
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                          {flight.class}
                        </Typography>
                      </Grid> */}
                      <Grid item xs={6} md={6}>
                        <Typography variant="body2" color="text.secondary">
                          {t('newprofile.search.results.aircraftModel')}
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                          {flight.aircraft}
                        </Typography>
                      </Grid>
                      {/* <Grid item xs={6} md={3}>
                        <Typography variant="body2" color="text.secondary">
                          {t('newprofile.search.results.luggageAllowance')}
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                          {flight.luggage}
                        </Typography>
                      </Grid> */}
                    </Grid>
                  )}

                  {activeFlightTab === 1 && (
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                        <InfoIcon color="info" />
                        <Typography variant="body2" color="text.secondary">
                          {t('newprofile.search.results.refundNote')}{' '}
                          <Button variant="text" size="small">
                            {t('newprofile.search.results.viewRefundRules')}
                          </Button>
                        </Typography>
                      </Box>
                      
                      <Grid container spacing={2}>
                        {[30, 60, 70, 75].map((percent, index) => (
                          <Grid item xs={6} md={3} key={index}>
                            <Paper sx={{ p: 2, textAlign: 'center' }}>
                              <Typography variant="h6" color="error.main">
                                {percent}%
                              </Typography>
                              <Typography variant="body2">
                                شرایط بازگشت وجه
                              </Typography>
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Price and Action */}
          <Grid item xs={12} md={3}>
            <Box 
              sx={{ 
                bgcolor: 'grey.50',
                height: '100%',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography variant="h4" color="info.main" fontWeight="bold" gutterBottom>
                {flight.price}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {t('newprofile.common.currency')}
              </Typography>
              
              <Typography variant="body2" fontWeight="bold" gutterBottom>
                {t('newprofile.search.results.officialRate')}
              </Typography>
              
              <Button 
                variant="contained" 
                fullWidth 
                size="large"
                sx={{ mb: 2 }}
                startIcon={<TicketIcon />}
                onClick={()=>{


  // ذخیره اطلاعات کامل
  localStorage.setItem('selectedBusInfo', JSON.stringify({
    busCode: flight.busCode,
    companyName: flight.companyName,
    carType: flight.carType,
    originCity: flight.originCity,
    destinationCity: flight.destinationCity,
    originTerminal: flight.originTerminal,
    destinationTerminal: flight.destinationTerminal,
    timeMove: flight.timeMove,
    price: flight.price,
    countFreeChairs: flight.countFreeChairs,
    description: flight.description,
    moveDateTime: flight.moveDateTime,
    sourceCode : flight.sourceCode,
    // اطلاعات userData
    userStartPlaceCode: userData[0].StartPlaceCode,
    userToken: userData[0].Token,
    // این مهم است: requestNumber را هم ذخیره کن
    requestNumber: flightData?.requestNumber // از state Data که خروجی BusSearch است
  }))
    console.log('flight.busCode',flight.sourceCode)
                   navigate('/OrderPage')
                }}
              >
                {t('newprofile.search.results.selectFlight')}
              </Button>
              
              <Typography variant="body2" color={flight.seatsLeft > 3 ? 'text.secondary' : 'error.main'} gutterBottom>
                {flight.seatsLeft} {t('newprofile.search.results.seatsLeft')}
              </Typography>

              <Box sx={{ width: '100%', mt: 2 }}>
                {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1, borderBottom: 1, borderColor: 'divider' }}>
                  <Typography variant="body2">{t('newprofile.search.results.adult')}</Typography>
                  <Typography variant="body2" fontWeight="bold">{flight.price} {t('newprofile.common.currency')}</Typography>
                </Box> */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                  <Typography variant="body2">{t('newprofile.search.results.price')}</Typography>
                  <Typography variant="body2" fontWeight="bold">{flight.price} {t('newprofile.common.currency')}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    );
  };

  // Loading Skeletons
  const LoadingSkeletons = () => (
    <Stack spacing={2}>
      {[1, 2, 3].map((item) => (
        <Skeleton 
          key={item} 
          variant="rectangular" 
          width="100%" 
          height={isMobile ? 150 : 200} 
          sx={{ borderRadius: 2 }}
        />
      ))}
    </Stack>
  );

  // Main Content
  const MainContent = () => {
    const flights = convertToFlightData(flightData?.searchItems || []);
    
    return (
      <Box>
        {/* Results Header */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Typography variant="body1" color="text.secondary">
                {loading ? (
                  <Skeleton width={200} />
                ) : (
                  `${t('newprofile.search.results.showing')} ${flights.length} ${t('newprofile.search.results.of')} ${flightData?.totalCount || 0} ${t('newprofile.search.results.flights')}`
                )}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  {t('newprofile.search.results.sortBy')}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {['recommended', 'earliest', 'latest', 'cheapest', 'mostExpensive'].map((sort) => (
                    <Button
                      key={sort}
                      variant={activeSort === sort ? 'contained' : 'text'}
                      size="small"
                      onClick={() => setActiveSort(sort)}
                      disabled={loading}
                    >
                      {t(`newprofile.search.results.sortOptions.${sort}`)}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Price Note */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <InfoIcon color="info" />
          <Typography variant="body2" color="text.secondary">
            {t('newprofile.search.results.priceNote')}
          </Typography>
        </Box>

        {/* Content */}
        {loading ? (
          <LoadingSkeletons />
        ) : flights.length > 0 ? (
          // Flights List
          <Box>
            {flights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </Box>
        ) : (
          // No Results Found
          <NoResultsFound 
            title={t('busSchedule.noResults')}
            isPersian={isPersian}
          />
        )}
      </Box>
    );
  };

  // Footer Component
  const Footer = () => (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        mt: 8
      }}
    >
      <Container>
        <Box sx={{ py: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box
                    component="img"
                    src="../../img/logo-m.png"
                    alt={t('newprofile.header.title')}
                    sx={{ width: 60, height: 60 }}
                  />
                  <Typography variant="h4" fontWeight="bold">
                    {t('newprofile.header.title')}
                  </Typography>
                </Box>
                
                <Box sx={{ display: '-flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon fontSize="small" />
                  <Typography>
                    {t('newprofile.common.phone')}: ۰۱۱۳۳۲۴۳۰۵۶ - ۰۹۱۱۷۹۷۶۸۵۵
                  </Typography>
                </Box>
                
                <Typography>
                  {t('newprofile.common.address')}: مازندران، ساری، ترمینال دولت، پرتو سیر ایرانیان
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  {t('newprofile.footer.description')}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                <Grid item xs={6} md={4}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('newprofile.footer.about')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button color="inherit" size="small">{t('newprofile.header.about')}</Button>
                    <Button color="inherit" size="small">{t('newprofile.header.contact')}</Button>
                  </Box>
                </Grid>
                
                <Grid item xs={6} md={4}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('newprofile.footer.customerService')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button color="inherit" size="small">{t('newprofile.footer.refundGuide')}</Button>
                    <Button color="inherit" size="small">{t('newprofile.footer.terms')}</Button>
                  </Box>
                </Grid>
                
                <Grid item xs={6} md={4}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('newprofile.footer.additionalInfo')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button color="inherit" size="small">{t('newprofile.footer.corporateSales')}</Button>
                    <Button color="inherit" size="small">{t('newprofile.footer.agencyCooperation')}</Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ 
          borderTop: 1, 
          borderColor: 'divider', 
          py: 4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Typography variant="body2" color="text.secondary">
            {t('newprofile.footer.copyright')} • {t('newprofile.footer.designCredit')}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton size="small" color="primary">
              <TelegramIcon />
            </IconButton>
            <IconButton size="small" color="primary">
              <TwitterIcon />
            </IconButton>
            <IconButton size="small" color="primary">
              <YouTubeIcon />
            </IconButton>
            <IconButton size="small" color="primary">
              <InstagramIcon />
            </IconButton>
            <IconButton size="small" color="primary">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );

  // Auth Modal
  const AuthModal = () => (
    <Dialog 
      open={signModalOpen} 
      onClose={() => setSignModalOpen(false)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">{t('newprofile.auth.loginSignup')}</Typography>
          <IconButton onClick={() => setSignModalOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" gutterBottom>
            {t('newprofile.auth.enterPhone')}
          </Typography>
          
          <Box sx={{ my: 3 }}>
            <Typography variant="body2" color="text.secondary">
              {t('newprofile.auth.phoneNumber')}
            </Typography>
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            {t('newprofile.auth.acceptTerms')}
          </Typography>
          
          <Button 
            variant="contained" 
            fullWidth 
            size="large"
            sx={{ mb: 2 }}
          >
            {t('newprofile.auth.confirm')}
          </Button>
          
          <Button variant="text" fullWidth>
            {t('newprofile.auth.loginWithPassword')}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: 'background.default',
      direction: isRTL ? 'rtl' : 'ltr'
    }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <SearchHeader />
        
        <Grid container spacing={3}>
          {/* Sidebar */}
          {/* <Grid item xs={12} md={3}>
            <FiltersSidebar />
          </Grid> */}
          
          {/* Main Content */}
          <Grid item xs={12} md={12}>
            <DateSlider />
            <MainContent />
          </Grid>
        </Grid>
      </Container>
      
      <Footer />
      <AuthModal />
    </Box>
  );
};

export default SearchPage;