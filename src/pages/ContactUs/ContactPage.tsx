import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Paper,
  useTheme,
  useMediaQuery,
  Divider,
  IconButton
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  ContactMail as ContactMailIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    ticketNumber: '',
    message: ''
  });

  const contactInfo = {
    phone: [
      t('newprofile.contact.phone.primary'),
      t('newprofile.contact.phone.secondary')
    ],
    email: t('newprofile.contact.email'),
    address: t('newprofile.contact.address')
  };

  const galleryImages = [
    { src: './img/pages/contact/1.jpg', alt: t('newprofile.contact.gallery.alt') },
    { src: './img/pages/contact/2.jpg', alt: t('newprofile.contact.gallery.alt') },
    { src: './img/pages/contact/3.jpg', alt: t('newprofile.contact.gallery.alt') },
    { src: './img/pages/contact/4.jpg', alt: t('newprofile.contact.gallery.alt') },
    { src: './img/pages/contact/5.jpg', alt: t('newprofile.contact.gallery.alt') },
    { src: './img/pages/contact/6.jpg', alt: t('newprofile.contact.gallery.alt') },
    { src: './img/pages/contact/7.jpg', alt: t('newprofile.contact.gallery.alt') },
    { src: './img/pages/contact/8.jpg', alt: t('newprofile.contact.gallery.alt') }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section with Contact Form */}
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
              borderRadius: 2,
              p: { xs: 3, md: 5 }
            }}
          >
            {/* Section Title */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <ContactMailIcon sx={{ fontSize: 32, color: 'primary.main' }} />
              <Typography variant="h4" fontWeight="bold">
                {t('newprofile.contact.title')}
              </Typography>
            </Box>

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Full Name */}
                <Grid item xs={12} md={6} lg={4}>
                  <TextField
                    fullWidth
                    size="medium"
                    label={t('newprofile.contact.form.fullName')}
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2
                      }
                    }}
                  />
                </Grid>

                {/* Subject */}
                <Grid item xs={12} md={6} lg={4}>
                  <TextField
                    fullWidth
                    size="medium"
                    label={t('newprofile.contact.form.subject')}
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2
                      }
                    }}
                  />
                </Grid>

                {/* Ticket Number */}
                <Grid item xs={12} md={6} lg={4}>
                  <TextField
                    fullWidth
                    size="medium"
                    label={t('newprofile.contact.form.ticketNumber')}
                    name="ticketNumber"
                    value={formData.ticketNumber}
                    onChange={handleInputChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2
                      }
                    }}
                  />
                </Grid>

                {/* Message */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label={t('newprofile.contact.form.message')}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2
                      }
                    }}
                  />
                </Grid>

                {/* Form Footer */}
                <Grid item xs={12}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: { xs: 'stretch', md: 'center' },
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 2
                  }}>
                    {/* Required Fields Note */}
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ 
                        textAlign: { xs: 'center', md: 'left' },
                        order: { xs: 2, md: 1 }
                      }}
                    >
                      {t('newprofile.contact.form.requiredFields')}
                    </Typography>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        borderRadius: 2,
                        px: 4,
                        py: 1.5,
                        fontWeight: 'bold',
                        order: { xs: 1, md: 2 }
                      }}
                    >
                      {t('newprofile.contact.form.submit')}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>

      {/* Contact Information Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="flex-start">
          {/* Contact Description */}
          <Grid item xs={12} md={5}>
            <Typography 
              variant="h5" 
              fontWeight="bold" 
              gutterBottom
              color="primary.main"
            >
              {t('newprofile.contact.about.title')}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8,
                color: 'text.secondary',
                mb: 4
              }}
            >
              {t('newprofile.contact.about.description')}
            </Typography>
          </Grid>

          {/* Contact Info Cards */}
          <Grid item xs={12} md={6} sx={{ ml: { md: 'auto' } }}>
            <Grid container spacing={3}>
              {/* Phone */}
              <Grid item xs={12} sm={6}>
                <Card 
                  sx={{ 
                    height: '100%',
                    bgcolor: 'primary.light',
                    color: 'primary.contrastText',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      mb: 4 
                    }}>
                      <PhoneIcon sx={{ fontSize: 40 }} />
                    </Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {t('newprofile.contact.phone.title')}
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                      {contactInfo.phone.map((phone, index) => (
                        <Typography 
                          key={index}
                          variant="body1" 
                          component="div"
                          sx={{ 
                            mb: 1,
                            direction: 'ltr',
                            textAlign: 'center'
                          }}
                        >
                          <Button 
                            href={`tel:${phone}`}
                            sx={{ 
                              color: 'inherit',
                              textDecoration: 'none',
                              fontSize: '1rem'
                            }}
                          >
                            {phone}
                          </Button>
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Email */}
              <Grid item xs={12} sm={6}>
                <Card 
                  sx={{ 
                    height: '100%',
                    bgcolor: 'secondary.light',
                    color: 'secondary.contrastText',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      mb: 4 
                    }}>
                      <EmailIcon sx={{ fontSize: 40 }} />
                    </Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {t('newprofile.contact.email.title')}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{ 
                        direction: 'ltr',
                        textAlign: 'center'
                      }}
                    >
                      <Button 
                        href={`mailto:${contactInfo.email}`}
                        sx={{ 
                          color: 'inherit',
                          textDecoration: 'none',
                          fontSize: '1rem'
                        }}
                      >
                        {contactInfo.email}
                      </Button>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Address */}
              <Grid item xs={12}>
                <Card 
                  sx={{ 
                    bgcolor: 'grey.100',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 3,
                      gap: 2
                    }}>
                      <LocationIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                      <Typography variant="h6" fontWeight="bold">
                        {t('newprofile.contact.address.title')}
                      </Typography>
                    </Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        lineHeight: 1.8,
                        color: 'text.secondary'
                      }}
                    >
                      {contactInfo.address}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* Background Visual Spacer */}
          <Grid item xs={12}>
            <Box 
              sx={{ 
                height: 200,
                bgcolor: 'grey.50',
                borderRadius: 3,
                my: 4,
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Gallery Section */}
      <Container sx={{ py: 8 }}>
        <Typography 
          variant="h4" 
          fontWeight="bold" 
          textAlign="center"
          gutterBottom
          color="primary.main"
        >
          {t('newprofile.contact.gallery.title')}
        </Typography>
        
        <Typography 
          variant="body1" 
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
        >
          {t('newprofile.contact.gallery.description')}
        </Typography>

        {/* Image Gallery */}
        <Grid container spacing={2}>
          {galleryImages.map((image, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
              <Card
                sx={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 4
                  }
                }}
              >
                <Box
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  sx={{
                    width: '100%',
                    height: 120,
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Spacer */}
      <Box sx={{ py: 8 }} />
    </Box>
  );
};

export default ContactPage;