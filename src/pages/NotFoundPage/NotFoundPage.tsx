import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
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
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
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
  Home as HomeIcon,
  Search as SearchIcon,
  SupportAgent as SupportIcon,
  Warning as WarningIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';

const NotFoundPage: React.FC = () => {
  const { t,i18n} = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [signModalOpen, setSignModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const isPersian = ['fa', 'ar', 'pa'].includes(i18n.language);
  const isRTL = isPersian;



  // 404 Error Section
  const ErrorSection = () => (
    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default'
      }}
    >
      {/* Background SVG */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.1
        }}
      >
        <svg 
          viewBox="0 0 900 600" 
          width="100%" 
          height="100%" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0 207L129 207L129 198L257 198L257 177L386 177L386 214L514 214L514 201L643 201L643 192L771 192L771 208L900 208L900 200L900 0L900 0L771 0L771 0L643 0L643 0L514 0L514 0L386 0L386 0L257 0L257 0L129 0L129 0L0 0Z" 
            fill={theme.palette.grey[200]}
          />
          <path 
            d="M0 97L129 97L129 117L257 117L257 109L386 109L386 130L514 130L514 118L643 118L643 118L771 118L771 77L900 77L900 133L900 0L900 0L771 0L771 0L643 0L643 0L514 0L514 0L386 0L386 0L257 0L257 0L129 0L129 0L0 0Z" 
            fill={theme.palette.grey[100]}
          />
        </svg>
      </Box>

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', py: 8 }}>
          {/* Error Code */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: 2,
              mb: 3
            }}
          >
            <Typography 
              variant="h4" 
              fontWeight="bold" 
              color="warning.main"
            >
              {t('newprofile.error404.errorCode')}
            </Typography>
            <WarningIcon sx={{ fontSize: 48, color: 'warning.main' }} />
          </Box>

          {/* Main Message */}
          <Typography 
            variant="h1" 
            fontWeight="bold" 
            gutterBottom
            sx={{ 
              fontSize: { xs: '3rem', md: '4rem' },
              color: 'text.primary'
            }}
          >
            {t('newprofile.error404.mainMessage')}
          </Typography>

          {/* Description */}
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ 
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.8
            }}
          >
            {t('newprofile.error404.description')}
          </Typography>

          {/* Spacer */}
          <Box sx={{ py: 2 }} />

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<HomeIcon />}
              onClick={() => navigate('/')}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2
              }}
            >
              {t('newprofile.error404.goHome')}
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<SupportIcon />}
              onClick={() => navigate('/contact')}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2
              }}
            >
              {t('newprofile.error404.contactSupport')}
            </Button>
          </Box>

          {/* Suggestions */}
          <Box sx={{ mt: 6, maxWidth: '500px', mx: 'auto' }}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: 'background.paper'
              }}
            >
              <Typography 
                variant="h6" 
                fontWeight="bold" 
                gutterBottom
                color="primary"
              >
                {t('newprofile.error404.suggestions.title')}
              </Typography>
              
              <List>
                {t('newprofile.error404.suggestions.items', { returnObjects: true }).map((item: string, index: number) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CheckIcon color="success" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={item}
                      primaryTypographyProps={{ variant: 'body1' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
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
      direction: !isRTL ? 'rtl' : 'ltr'
    }}>
      <Header />
      <ErrorSection />
      <Footer />
      <AuthModal />
    </Box>
  );
};

export default NotFoundPage;