import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Button
} from '@mui/material';
import {
  Gavel as GavelIcon,
  Person as PersonIcon,
  Receipt as ReceiptIcon,
  Assignment as AssignmentIcon,
  Language as LanguageIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const TermsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const languages = [
    { code: 'fa', name: 'فارسی', dir: 'rtl' },
    { code: 'en', name: 'English', dir: 'ltr' },
    { code: 'ar', name: 'العربية', dir: 'rtl' },
    { code: 'ps', name: 'پښتو', dir: 'rtl' },
    { code: 'ru', name: 'Русский', dir: 'ltr' }
  ];

  const termsSections = [
    {
      id: 1,
      icon: <GavelIcon sx={{ fontSize: 32 }} />,
      title: t('terms.sections.general'),
      content: t('terms.content.general'),
      color: 'primary.main'
    },
    {
      id: 2,
      icon: <PersonIcon sx={{ fontSize: 32 }} />,
      title: t('terms.sections.registration'),
      content: t('terms.content.registration'),
      color: 'secondary.main'
    },
    {
      id: 3,
      icon: <ReceiptIcon sx={{ fontSize: 32 }} />,
      title: t('terms.sections.booking'),
      content: t('terms.content.booking'),
      color: 'info.main'
    },
    {
      id: 4,
      icon: <AssignmentIcon sx={{ fontSize: 32 }} />,
      title: t('terms.sections.passenger'),
      content: t('terms.content.passenger'),
      color: 'warning.main'
    }
  ];

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    document.dir = lng === 'fa' || lng === 'ar' || lng === 'ps' ? 'rtl' : 'ltr';
  };

  return (
    <Box>
      {/* Language Selector */}
      <Box sx={{ backgroundColor: 'grey.100', py: 1 }}>
        <Container>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
            <LanguageIcon sx={{ fontSize: 20, color: 'primary.main' }} />
            <Typography variant="body2" color="text.secondary">
              زبان / Language:
            </Typography>
            {languages.map((lang) => (
              <Button
                key={lang.code}
                size="small"
                variant={i18n.language === lang.code ? "contained" : "outlined"}
                onClick={() => handleLanguageChange(lang.code)}
                sx={{ 
                  minWidth: 'auto',
                  fontSize: '0.75rem',
                  px: 1,
                  mx: 0.5
                }}
              >
                {lang.name}
              </Button>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box 
        sx={{ 
          backgroundImage: 'url(/img/pages/index/booking/main-1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          py: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 1
          }
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Paper 
            elevation={8}
            sx={{ 
              backgroundColor: 'white',
              py: 6,
              px: 4,
              borderRadius: 2,
              textAlign: 'center',
              maxWidth: 800,
              mx: 'auto'
            }}
          >
            <Typography 
              variant="h3" 
              fontWeight="bold" 
              gutterBottom
              color="primary"
            >
              {t('terms.pageTitle')}
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ lineHeight: 1.8 }}
            >
              {t('terms.subtitle')}
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Terms Content */}
      <Container sx={{ py: 8 }}>
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            align="center" 
            gutterBottom
            color="primary"
          >
            {t('terms.pageTitle')}
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: 'auto', lineHeight: 1.8 }}
          >
            {t('terms.subtitle')}
          </Typography>
        </Box>

        {/* Terms Sections */}
        <Box sx={{ mb: 6 }}>
          {termsSections.map((section, index) => (
            <Card 
              key={section.id}
              sx={{ 
                mb: 4,
                border: 1,
                borderColor: 'grey.200',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                  borderColor: section.color
                }
              }}
            >
              <CardContent sx={{ p: 4 }}>
                {/* Section Header */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2, 
                  mb: 3,
                  pb: 2,
                  borderBottom: 1,
                  borderColor: 'divider'
                }}>
                  <Box sx={{ color: section.color }}>
                    {section.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    fontWeight="bold"
                    sx={{ color: section.color }}
                  >
                    {section.title}
                  </Typography>
                </Box>

                {/* Section Content */}
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 2,
                    textAlign: i18n.dir() === 'rtl' ? 'right' : 'left',
                    color: 'text.primary',
                    direction: i18n.dir()
                  }}
                >
                  {section.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Acceptance Section */}
        <Paper 
          elevation={2}
          sx={{ 
            backgroundColor: 'success.light',
            color: 'success.contrastText',
            p: 4,
            borderRadius: 2,
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="h6" 
            fontWeight="bold"
            sx={{ lineHeight: 1.8 }}
          >
            {t('terms.content.acceptance')}
          </Typography>
        </Paper>

        {/* Additional Info Cards */}
        <Box sx={{ mt: 8 }}>
          <Typography 
            variant="h5" 
            fontWeight="bold" 
            align="center" 
            gutterBottom
            color="primary"
          >
            {t('terms.importantNotes')}
          </Typography>
          
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            },
            gap: 3,
            mt: 4
          }}>
            {/* Card 1 */}
            <Card 
              sx={{ 
                textAlign: 'center',
                p: 3,
                backgroundColor: 'primary.50',
                border: 1,
                borderColor: 'primary.100'
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 2 }}>
                <PersonIcon sx={{ fontSize: 40 }} />
              </Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {t('terms.points.accurateInfo')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('terms.points.accurateInfoDesc')}
              </Typography>
            </Card>

            {/* Card 2 */}
            <Card 
              sx={{ 
                textAlign: 'center',
                p: 3,
                backgroundColor: 'secondary.50',
                border: 1,
                borderColor: 'secondary.100'
              }}
            >
              <Box sx={{ color: 'secondary.main', mb: 2 }}>
                <ReceiptIcon sx={{ fontSize: 40 }} />
              </Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {t('terms.points.onlineBooking')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('terms.points.onlineBookingDesc')}
              </Typography>
            </Card>

            {/* Card 3 */}
            <Card 
              sx={{ 
                textAlign: 'center',
                p: 3,
                backgroundColor: 'warning.50',
                border: 1,
                borderColor: 'warning.100'
              }}
            >
              <Box sx={{ color: 'warning.main', mb: 2 }}>
                <AssignmentIcon sx={{ fontSize: 40 }} />
              </Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {t('terms.points.passengerDuties')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('terms.points.passengerDutiesDesc')}
              </Typography>
            </Card>
          </Box>
        </Box>

        {/* Contact Info */}
        <Paper 
          sx={{ 
            mt: 8,
            p: 4,
            backgroundColor: 'grey.50',
            border: 1,
            borderColor: 'divider',
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h6" 
            fontWeight="bold" 
            align="center" 
            gutterBottom
            color="primary"
          >
            {t('terms.moreInfo')}
          </Typography>
          <Typography 
            variant="body1" 
            align="center" 
            color="text.secondary"
            sx={{ lineHeight: 1.8, mb: 2 }}
          >
            {t('terms.contactText')}
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" fontWeight="bold" color="secondary">
              {t('terms.phone')}: ۰۱۱۳۳۲۴۳۰۵۶
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default TermsPage;