import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import EmptyStateIllustration from './../assets/no-results.svg'; 

const NoResultsFound = ({ title, description, suggestion, isPersian }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');
  const { t } = useTranslation();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      py: 8,
      px: isMobile ? 2 : 4,
      direction: isPersian ? 'rtl' : 'ltr'
    }}>
      <Box sx={{ 
        width: isMobile ? '200px' : '300px',
        height: isMobile ? '200px' : '300px',
        mb: 4
      }}>
       
        <img 
          src={EmptyStateIllustration} 
          alt="No results found" 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Box>
      
      <Typography 
        variant="h5" 
        component="h2" 
        gutterBottom
        sx={{ 
          fontWeight: 600,
          color: theme.palette.text.primary,
          mb: 2
        }}
      >
        {title}
      </Typography>
      
      {/* <Typography 
        variant="body1" 
        sx={{ 
          color: theme.palette.text.secondary,
          maxWidth: '600px',
          mb: 3
        }}
      >
        {description}
      </Typography>
      
      <Typography 
        variant="body2" 
        sx={{ 
          color: theme.palette.text.secondary,
          fontStyle: 'italic',
          mb: 4
        }}
      >
        {suggestion}
      </Typography> */}
      
      {/* <Button 
        variant="contained" 
        color="primary"
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: 2,
          textTransform: 'none',
          fontSize: '1rem'
        }}
      >
        {t('busSchedule.noResults.tryDifferentDate')}
      </Button> */}
    </Box>
  );
};

export default NoResultsFound;