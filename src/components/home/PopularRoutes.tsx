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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const PopularRoutes = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const popularRoutes = [
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

      {/* Routes Slider */}
      <Box sx={{ pb: 5 }}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            760: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1180: {
              slidesPerView: 4,
            }
          }}
          style={{
            paddingBottom: '40px'
          }}
        >
          {popularRoutes.map((route) => (
            <SwiperSlide key={route.id}>
              <Card 
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
                  <Grid container alignItems="center">
                    <Grid item xs="auto">
                      <Typography variant="h6" fontWeight="bold">
                        {route.from}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      {/* Spacer */}
                    </Grid>
                    <Grid item xs="auto">
                      <Typography variant="h6" fontWeight="bold">
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
                    <Typography variant="h6" fontWeight="bold">
                      {route.price}
                    </Typography>
                    <Typography variant="body2">
                      {t('profile.currency')}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default PopularRoutes;