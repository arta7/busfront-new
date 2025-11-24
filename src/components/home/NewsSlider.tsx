// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   CardActions,
//   IconButton,
//   useTheme,
//   useMediaQuery
// } from '@mui/material';
// import {
//   Award as AwardIcon,
//   ArrowUpLeft as ArrowIcon
// } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const NewsSlider = () => {
//   const { t } = useTranslation();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const newsItems = [
//     {
//       id: 1,
//       image: '/img/pages/index/slider/Persepolis.jpg',
//       title: 'تخت جمشید؛ میراث جهانی بشری',
//       description: 'سفری تاریخی برای آشنایی از نزدیک این بنای تاریخی'
//     },
//     {
//       id: 2,
//       image: '/img/pages/index/slider/Shiraz.jpg',
//       title: 'شیراز؛ شهر عشق و دلدادگی',
//       description: 'به شهری سفر کنید که عطر بهارنارنج آن شما را به وجد می‌آورد'
//     },
//     {
//       id: 3,
//       image: '/img/pages/index/slider/Kashan.jpg',
//       title: 'کاشان؛ نگین کویر ایران',
//       description: 'سفر به شهری که عطر گلاب آن شما را به وجد می‌آورد'
//     },
//     {
//       id: 4,
//       image: '/img/pages/index/slider/Isfahan.jpg',
//       title: 'اصفهان؛ موزه زنده ایران',
//       description: 'سفر به شهری که تاریخ و فرهنگ ایران را در خود جای داده است'
//     },
//     {
//       id: 5,
//       image: '/img/pages/index/slider/Kerman.jpg',
//       title: 'کرمان؛ شهری با هزار و یک راز',
//       description: 'سفر به شهری که تاریخ و فرهنگ ایران را در خود جای داده است'
//     },
//     {
//       id: 6,
//       image: '/img/pages/index/slider/masuleh.jpg',
//       title: 'ماسوله؛ نگین گیلان',
//       description: 'سفری به روستایی با معماری پلکانی و طبیعتی بکر و دست‌نخورده.'
//     },
//     {
//       id: 7,
//       image: '/img/pages/index/slider/mazandaran.jpg',
//       title: 'مازندران؛ سرزمین آبشارها و رودخانه‌ها',
//       description: 'در دل طبیعت گشت و گذار کنید و از زیبایی‌های آن لذت ببرید'
//     },
//     {
//       id: 8,
//       image: '/img/pages/index/slider/Tabriz.jpg',
//       title: 'تبریز؛ شهری با تاریخ کهن',
//       description: 'سفری به شهری با معماری بی‌نظیر و فرهنگی غنی.'
//     },
//     {
//       id: 9,
//       image: '/img/pages/index/slider/Mashhad.jpg',
//       title: 'مقصدی برای هر فصل از سال',
//       description: 'به مشهد سفر کنید و زیبایی‌های آن لذت ببرید'
//     }
//   ];

//   return (
//     <Container sx={{ py: 5 }}>
//       {/* Header */}
//       <Box sx={{ 
//         display: 'flex', 
//         alignItems: 'center', 
//         gap: 2, 
//         mb: 4 
//       }}>
//         <AwardIcon sx={{ fontSize: 32, color: 'secondary.main' }} />
//         <Typography variant="h5" fontWeight="bold">
//           {t('homepage.home.news')}
//         </Typography>
//       </Box>

//       {/* Swiper Slider */}
//       <Box sx={{ pb: 5, position: 'relative' }}>
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={16}
//           slidesPerView={1}
//           navigation={{
//             nextEl: '.news-swiper-button-next',
//             prevEl: '.news-swiper-button-prev',
//           }}
//           pagination={{
//             clickable: true,
//             dynamicBullets: true,
//           }}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             760: {
//               slidesPerView: 2,
//             },
//             992: {
//               slidesPerView: 3,
//             }
//           }}
//           style={{
//             paddingBottom: '40px'
//           }}
//         >
//           {newsItems.map((item) => (
//             <SwiperSlide key={item.id}>
//               <Card 
//                 sx={{ 
//                   height: 300,
//                   backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${item.image})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'flex-end',
//                   color: 'white',
//                   transition: 'transform 0.3s ease',
//                   '&:hover': {
//                     transform: 'translateY(-8px)',
//                   }
//                 }}
//               >
//                 <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
//                   <Typography variant="h6" fontWeight="bold" gutterBottom>
//                     {item.title}
//                   </Typography>
//                   <Typography variant="body2" sx={{ opacity: 0.9 }}>
//                     {item.description}
//                   </Typography>
//                 </CardContent>
//                 <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
//                   <Box sx={{ flexGrow: 1 }} />
//                   <IconButton 
//                     sx={{ 
//                       color: 'white',
//                       backgroundColor: 'rgba(0,0,0,0.5)',
//                       '&:hover': {
//                         backgroundColor: 'rgba(0,0,0,0.7)',
//                       }
//                     }}
//                   >
//                     <ArrowIcon />
//                   </IconButton>
//                 </CardActions>
//               </Card>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Navigation Buttons */}
//         <IconButton 
//           className="news-swiper-button-prev"
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: 0,
//             transform: 'translateY(-50%)',
//             zIndex: 10,
//             backgroundColor: 'white',
//             boxShadow: 2,
//             '&:hover': {
//               backgroundColor: 'grey.100',
//             }
//           }}
//         >
//           ‹
//         </IconButton>
//         <IconButton 
//           className="news-swiper-button-next"
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             right: 0,
//             transform: 'translateY(-50%)',
//             zIndex: 10,
//             backgroundColor: 'white',
//             boxShadow: 2,
//             '&:hover': {
//               backgroundColor: 'grey.100',
//             }
//           }}
//         >
//           ›
//         </IconButton>
//       </Box>
//     </Container>
//   );
// };

// export default NewsSlider;

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  DirectionsBus as BusIcon,
  Flight as FlightIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface Route {
  id: number;
  from: string;
  to: string;
  price: string;
}

const PopularRoutes: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const popularRoutes: Route[] = [
    {
      id: 1,
      from: t('homepage.cities.kish'),
      to: t('homepage.cities.tehran'),
      price: '۱،۵۷۴،۰۰۰'
    },
    {
      id: 2,
      from: t('homepage.cities.mashhad'),
      to: t('homepage.cities.tehran'),
      price: '۱،۶۳۷،۰۰۰'
    },
    {
      id: 3,
      from: t('homepage.cities.ahvaz'),
      to: t('homepage.cities.tehran'),
      price: '۲،۳۵۱،۰۰۰'
    },
    {
      id: 4,
      from: t('homepage.cities.shiraz'),
      to: t('homepage.cities.tehran'),
      price: '۲،۶۷۰،۰۰۰'
    },
    {
      id: 5,
      from: t('homepage.cities.kish'),
      to: t('homepage.cities.tehran'),
      price: '۱،۵۷۴،۰۰۰'
    },
    {
      id: 6,
      from: t('homepage.cities.tabriz'),
      to: t('homepage.cities.tehran'),
      price: '۱،۸۰۰،۰۰۰'
    }
  ];

  return (
    <Container sx={{ py: 5, mb: 4 }}>
      {/* Header */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2, 
        mb: 4 
      }}>
        <BusIcon sx={{ fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h5" fontWeight="bold">
          {t('homepage.home.popularRoutes')}
        </Typography>
      </Box>

      {/* Routes Grid */}
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)'
        },
        gap: 3
      }}>
        {popularRoutes.map((route) => (
          <Card 
            key={route.id}
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4,
              }
            }}
          >
            {/* Route Info */}
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              {/* From/To Labels */}
              <Grid container alignItems="center" sx={{ mb: 2 }}>
                <Grid item xs="auto">
                  <Typography variant="body2" color="text.secondary">
                    {t('homepage.home.from')}
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    position: 'relative',
                    mx: 2
                  }}>
                    <Box sx={{ 
                      width: '100%', 
                      height: 2, 
                      bgcolor: 'divider',
                      position: 'absolute'
                    }} />
                    <FlightIcon sx={{ 
                      color: 'text.secondary', 
                      zIndex: 1,
                      fontSize: 20 
                    }} />
                  </Box>
                </Grid>
                <Grid item xs="auto">
                  <Typography variant="body2" color="text.secondary">
                    {t('homepage.home.to')}
                  </Typography>
                </Grid>
              </Grid>

              {/* Cities */}
              <Grid container alignItems="center" sx={{ minHeight: 60 }}>
                <Grid item xs={5}>
                  <Typography variant="h6" fontWeight="bold" align="center">
                    {route.from}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  {/* Spacer */}
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="h6" fontWeight="bold" align="center">
                    {route.to}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>

            {/* Price */}
            <Box 
              sx={{ 
                backgroundColor: 'grey.50',
                py: 2,
                px: 3,
                borderTop: 1,
                borderColor: 'divider'
              }}
            >
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {t('homepage.home.startingPrice')}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Typography variant="h6" fontWeight="bold" color="primary">
                  {route.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('profile.currency')}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default PopularRoutes;