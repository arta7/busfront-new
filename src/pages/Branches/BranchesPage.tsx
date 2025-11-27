import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  useTheme,
  useMediaQuery,
  Chip
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const BranchesPage: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const stationGroups = [
    {
      title: t('newprofile.branches.stationGroups.group1'),
      stations: [
        {
          name: t('newprofile.branches.stations.taybad.name'),
          address: t('newprofile.branches.stations.taybad.address'),
          phone: t('newprofile.branches.stations.taybad.phone'),
          manager: t('newprofile.branches.stations.taybad.manager'),
          image: './img/pages/about-us/top/1.jpg'
        },
        {
          name: t('newprofile.branches.stations.zabol.name'),
          address: t('newprofile.branches.stations.zabol.address'),
          phone: t('newprofile.branches.stations.zabol.phone'),
          manager: t('newprofile.branches.stations.zabol.manager'),
          image: './img/pages/about-us/top/2.jpg'
        }
      ]
    },
    {
      title: t('newprofile.branches.stationGroups.group2'),
      stations: [
        {
          name: t('newprofile.branches.stations.ghom.name'),
          address: t('newprofile.branches.stations.ghom.address'),
          phone: t('newprofile.branches.stations.ghom.phone'),
          manager: t('newprofile.branches.stations.ghom.manager'),
          image: './img/pages/why-us/1.jpg'
        },
        {
          name: t('newprofile.branches.stations.sari.name'),
          address: t('newprofile.branches.stations.sari.address'),
          phone: t('newprofile.branches.stations.sari.phone'),
          manager: t('newprofile.branches.stations.sari.manager'),
          image: './img/pages/why-us/2.jpg'
        }
      ]
    },
    {
      title: t('newprofile.branches.stationGroups.group3'),
      stations: [
        {
          name: t('newprofile.branches.stations.ilam.name'),
          address: t('newprofile.branches.stations.ilam.address'),
          phone: t('newprofile.branches.stations.ilam.phone'),
          manager: t('newprofile.branches.stations.ilam.manager'),
          image: './img/pages/why-us/1.jpg'
        },
        {
          name: t('newprofile.branches.stations.ahvaz.name'),
          address: t('newprofile.branches.stations.ahvaz.address'),
          phone: t('newprofile.branches.stations.ahvaz.phone'),
          manager: t('newprofile.branches.stations.ahvaz.manager'),
          image: './img/pages/why-us/2.jpg'
        }
      ]
    },
    {
      title: t('newprofile.branches.stationGroups.group4'),
      stations: [
        {
          name: t('newprofile.branches.stations.mashhad.name'),
          address: t('newprofile.branches.stations.mashhad.address'),
          phone: t('newprofile.branches.stations.mashhad.phone'),
          manager: t('newprofile.branches.stations.mashhad.manager'),
          image: './img/pages/why-us/1.jpg'
        },
        {
          name: t('newprofile.branches.stations.chabahar.name'),
          address: t('newprofile.branches.stations.chabahar.address'),
          phone: t('newprofile.branches.stations.chabahar.phone'),
          manager: t('newprofile.branches.stations.chabahar.manager'),
          image: './img/pages/why-us/2.jpg'
        }
      ]
    }
  ];

  const StationCard: React.FC<{ station: any }> = ({ station }) => (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 6
        }
      }}
    >
      {/* Station Image */}
      <Box
        sx={{
          height: 200,
          overflow: 'hidden'
        }}
      >
        <Box
          component="img"
          src={station.image}
          alt={station.name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)'
            }
          }}
        />
      </Box>

      <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Station Name */}
        <Typography variant="h6" fontWeight="bold" gutterBottom color="primary.main">
          {station.name}
        </Typography>

        {/* Address */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 2 }}>
          <LocationIcon sx={{ color: 'text.secondary', mt: 0.5, fontSize: 20 }} />
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
            {station.address}
          </Typography>
        </Box>

        {/* Phone */}
        {station.phone && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <PhoneIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
            <Typography 
              variant="body2" 
              component="a" 
              href={`tel:${station.phone}`}
              sx={{ 
                color: 'primary.main', 
                textDecoration: 'none',
                direction: 'ltr',
                display: 'block'
              }}
            >
              {station.phone}
            </Typography>
          </Box>
        )}

        {/* Manager */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <PersonIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
          <Typography variant="body2" color="text.secondary">
            {t('newprofile.branches.manager')}: {station.manager}
          </Typography>
        </Box>

        {/* Status Chip */}
        <Box sx={{ mt: 'auto', pt: 2 }}>
          <Chip 
            label={t('newprofile.branches.status.active')} 
            color="success" 
            size="small" 
            variant="outlined" 
          />
        </Box>
      </CardContent>
    </Card>
  );

  const StationSwiper: React.FC<{ stations: any[] }> = ({ stations }) => (
    <Box sx={{ width: '100%', py: 2 }}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        speed={1000}
        loop={true}
        breakpoints={{
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          720: { slidesPerView: 2 }
        }}
      >
        {stations.map((station, index) => (
          <SwiperSlide key={index}>
            <StationCard station={station} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(./img/pages/index/booking/main-1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 8
        }}
      >
        <Container>
          <Paper
            elevation={8}
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 3,
              p: 5,
              textAlign: 'center'
            }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom color="primary.main">
              {t('newprofile.branches.title')}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              {t('newprofile.branches.subtitle')}
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Stations Section */}
      <Container sx={{ py: 8 }}>
        <Box
          sx={{
            bgcolor: 'grey.50',
            border: 1,
            borderColor: 'divider',
            borderRadius: 3,
            p: 4,
            mb: 6
          }}
        >
          <Grid container spacing={6}>
            {stationGroups.map((group, groupIndex) => (
              <Grid item xs={12} key={groupIndex}>
                {/* Group Title */}
                <Typography 
                  variant="h5" 
                  fontWeight="bold" 
                  gutterBottom 
                  color="secondary.main"
                  sx={{ 
                    textAlign: 'center',
                    mb: 4,
                    pb: 2,
                    borderBottom: 2,
                    borderColor: 'divider'
                  }}
                >
                  {group.title}
                </Typography>

                {/* Stations Swiper */}
                <StationSwiper stations={group.stations} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Additional Information */}
        <Paper
          elevation={2}
          sx={{
            p: 4,
            textAlign: 'center',
            bgcolor: 'primary.light',
            color: 'primary.contrastText',
            borderRadius: 3
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {t('newprofile.branches.info.title')}
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, maxWidth: 800, mx: 'auto' }}>
            {t('newprofile.branches.info.description')}
          </Typography>
        </Paper>
      </Container>

      {/* Services Overview */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
                {t('newprofile.branches.services.title')}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                {t('newprofile.branches.services.description')}
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {[
                  t('newprofile.branches.services.bus'),
                  t('newprofile.branches.services.taxi'),
                  t('newprofile.branches.services.van'),
                  t('newprofile.branches.services.cargo')
                ].map((service, index) => (
                  <Chip
                    key={index}
                    label={service}
                    color="primary"
                    variant="outlined"
                    sx={{ mb: 1 }}
                  />
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: 300,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                <Box>
                  <LocationIcon sx={{ fontSize: 64, mb: 2 }} />
                  <Typography variant="h6" fontWeight="bold">
                    {t('newprofile.branches.services.map')}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Spacer */}
      <Box sx={{ py: 8 }} />
    </Box>
  );
};

export default BranchesPage;