import React from 'react';
import {
  Container,
  Typography,
  ThemeProvider,
  Box,
  Grid,
  Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import aboutUsImage from '../../assets/about-us.png';
import ourMissionImage from '../../assets/our-mission.jpg';
import ourStoryImage from '../../assets/our-story.jpg';
import getTheme from '../../theme';

// Create RTL theme
const rtlTheme = createTheme({
  // direction: 'rtl',
  typography: {
    fontFamily: [
      'IranianSans'
      
    ].join(','),
  },
});

const AboutUs = () => {
 
 
  const { t, i18n } = useTranslation();


 const theme = getTheme(i18n.language);
 const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isPersian = ['fa', 'ar', 'pa'].includes(i18n.language ) ;
  //i18n.language === 'fa';

  const sectionStyles = {
    container: {
      py: 8,
      bgcolor: '#ffffff',
    },
    image: {
      width: '100%',
      maxWidth: isSmallScreen ? '24rem' : '32rem',
      borderRadius: '8px',
      boxShadow: theme.shadows[4],
    },
    text: {
      textAlign: !isPersian ? 'right' : 'left',
      lineHeight: 2,
      color: theme.palette.text.secondary,
      fontFamily:'IranianSans'
    },
    title: {
      fontWeight: 700,
      color: theme.palette.primary.main,
      mb: 4,
      textAlign: 'center',
      fontFamily:'IranianSans'
    },
    languageButton: {
      position: 'fixed',
      top: '80px',
      right: isPersian ? 'unset' : '20px',
      left: isPersian ? '20px' : 'unset',
      zIndex: 1000,
    }
  };

  return (
    <ThemeProvider theme={rtlTheme}>
      <Box dir={isPersian ? 'rtl' : 'ltr'} component="section" sx={sectionStyles.container}>
       
        
        <Container maxWidth="lg">
          {/* Our Story Section */}
          <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <Box textAlign="center">
                <img 
                  src={ourStoryImage} 
                  alt={t('about.storyImageAlt')} 
                  style={sectionStyles.image} 
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={sectionStyles.title}>
                {t('about.storyTitle')}
              </Typography>
              <Typography variant="body1" sx={sectionStyles.text}>
                {t('about.storyContent')}
              </Typography>
            </Grid>
          </Grid>

          {/* Our Network Section */}
          <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Typography variant="h4" sx={sectionStyles.title}>
                {t('about.networkTitle')}
              </Typography>
              <Typography variant="body1" sx={sectionStyles.text}>
                {t('about.networkContent1')}
                <ul>
                  <li>{t('about.route1')}</li>
                  <li>{t('about.route2')}</li>
                  <li>{t('about.route3')}</li>
                  <li>{t('about.route4')}</li>
                  <li>{t('about.route5')}</li>
                </ul>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box textAlign="center">
                <img 
                  src={aboutUsImage} 
                  alt={t('about.networkImageAlt')} 
                  style={sectionStyles.image} 
                />
              </Box>
            </Grid>
          </Grid>

          {/* Our Achievements Section */}
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box textAlign="center">
                <img 
                  src={ourMissionImage} 
                  alt={t('about.achievementsImageAlt')} 
                  style={sectionStyles.image} 
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={sectionStyles.title}>
                {t('about.achievementsTitle')}
              </Typography>
              <Typography variant="body1" sx={sectionStyles.text}>
                {t('about.achievementsContent1')}
                <br /><br />
                {t('about.achievementsContent2')}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AboutUs;