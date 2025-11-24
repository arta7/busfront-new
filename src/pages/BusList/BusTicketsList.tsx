
import { Box, Typography, Paper, Chip, Stack, Skeleton, useMediaQuery, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import getTheme from '../../theme';
import { useEffect, useState, useContext } from 'react';
import moment from 'moment-jalaali';
import UserContext from './../../UserContext';
import { useNavigate } from 'react-router-dom';

const BusTicketsList = () => {
  const { t, i18n } = useTranslation();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isRTL = ['fa', 'ar', 'pa'].includes(i18n.language);
  const theme = getTheme(i18n.language);
  const isMobile = useMediaQuery('(max-width:600px)');
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  // رنگ‌های اصلی
  const primaryColor = '#01a693';
  const primaryLight = 'rgba(1, 166, 147, 0.1)';
  const primaryLighter = 'rgba(1, 166, 147, 0.05)';
  const secondaryColor = '#333333';

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.kalanholding.com/api/bus/bus-tickets', {
          method: 'POST',
          headers: {
            'Accept': 'text/plain',
            'Authorization': userData[0].Token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({})
        });

        if (!response.ok) {
          throw new Error(t('ticket.error.fetch'));
        }

        const data = await response.json();
        const filteredTickets = data.data ? data.data
        .filter(item=>item.busDetail !=null) 
        : [];
        setTickets(filteredTickets);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [i18n.language, t, userData]);

  const formatPrice = (price) => {
    if (!price) return '0';
    return new Intl.NumberFormat(i18n.language === 'fa' ? 'fa-IR' : 'en-US').format(price);
  };

  const handleTicketClick = (ticket) => {
    navigate('/tickets', { state: { ticket } });
  };

  if (error) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="error">{error}</Typography>
        <Button 
          variant="contained" 
          sx={{ mt: 2, bgcolor: primaryColor }}
          onClick={() => window.location.reload()}
        >
          {t('common.retry')}
        </Button>
      </Box>
    );
  }

  if (loading) {
    return (
      <Stack spacing={2} sx={{ p: 2 }}>
        {[1, 2, 3].map((item) => (
          <Skeleton 
            key={item} 
            variant="rectangular" 
            width="100%" 
            height={120} 
            sx={{ borderRadius: 2 }}
          />
        ))}
      </Stack>
    );
  }

  if (tickets.length === 0) {
    return (
      <Box sx={{ 
        p: 3, 
        textAlign: 'center', 
        bgcolor: primaryLighter, 
        borderRadius: 2,
        border: `2px solid ${primaryColor}`
      }}>
        <Typography variant="h6" color={secondaryColor}>
          {t('ticket.noTickets')}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: isMobile ? 1 : 3, bgcolor: primaryLighter }}>
      {tickets.map((ticket) => (
        <Paper 
          key={ticket.id}
          elevation={0}
          onClick={() => handleTicketClick(ticket)}
          sx={{
            mb: 3,
            borderRadius: 2,
            overflow: 'hidden',
            border: `2px solid ${primaryColor}`,
            '&:hover': {
              boxShadow: `0 0 0 3px ${primaryColor}`,
              cursor: 'pointer'
            }
          }}
        >
          {/* بخش بالایی - قیمت و مسافران */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 3,
            bgcolor: 'white',
            borderBottom: `2px solid ${primaryLight}`
          }}>
            <Box>
              <Typography variant="h4" sx={{ 
                fontWeight: 'bold',
                color: primaryColor,
                fontFamily: theme.typography.fontFamily
              }}>
                {formatPrice(ticket.price)} {t('common.currency')}
              </Typography>
              <Typography variant="h6" sx={{ 
                color: secondaryColor,
                fontFamily: theme.typography.fontFamily,
                mt: 1
              }}>
                {ticket.passengers?.length || 0} {t('ticket.passengers')}
              </Typography>
            </Box>
            
            <Chip
              label={ticket.status === '0' ? t('ticket.status.reserved') : t('ticket.status.cancelled')}
              sx={{
                bgcolor: ticket.status === '0' ? primaryColor : '#f44336',
                color: 'white',
                fontWeight: 'bold',
                fontFamily: theme.typography.fontFamily,
                height: '40px',
                fontSize: '1rem'
              }}
            />
          </Box>

          {/* بخش میانی - مسیر */}
          <Box sx={{ 
            p: 3, 
            bgcolor: 'white',
            borderBottom: `2px solid ${primaryLight}`
          }}>
            <Typography variant="h5" sx={{ 
              fontWeight: 'bold',
              color: primaryColor,
              fontFamily: theme.typography.fontFamily,
              mb: 2,
              textAlign: 'center'
            }}>
              {ticket.busDetail?.originCity} → {ticket.busDetail?.destinationCity}
            </Typography>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Typography variant="h6" sx={{ 
                color: secondaryColor,
                fontFamily: theme.typography.fontFamily
              }}>
                {(ticket.busDetail?.dateMove)}
              </Typography>
              
              <Typography variant="h6" sx={{ 
                color: secondaryColor,
                fontFamily: theme.typography.fontFamily
              }}>
                {ticket.busDetail?.timeMove}
              </Typography>
            </Box>
          </Box>

          {/* بخش پایینی - اطلاعات شرکت */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 3,
            bgcolor: primaryLighter
          }}>
            <Typography variant="h6" sx={{ 
              color: secondaryColor,
              fontFamily: theme.typography.fontFamily
            }}>
              {ticket.busDetail?.companyName}
            </Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default BusTicketsList;