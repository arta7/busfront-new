import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
  Paper,
  Divider,
  Badge,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import {
  Wallet as WalletIcon,
  Person as PersonIcon,
  Luggage as LuggageIcon,
  Groups as GroupsIcon,
  Favorite as FavoriteIcon,
  Headset as HeadsetIcon,
  AccountBalance as BalanceIcon,
  Download as DownloadIcon,
  ArrowBack as ArrowBackIcon,
  Info as InfoIcon,
  Train as TrainIcon,
  Schedule as ScheduleIcon,
  LocationOn as LocationIcon,
  Star as StarIcon,
  Payment as PaymentIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface Ticket {
  id: string;
  orderNumber: string;
  type: string;
  status: 'finalized' | 'pending' | 'cancelled';
  purchaseDate: string;
  purchaseTime: string;
  route: {
    from: string;
    to: string;
    direction: string;
  };
  departure: {
    time: string;
    date: string;
    dateBadge: string;
  };
  train: {
    name: string;
    number: string;
    type: string;
    class: string;
    cabinType: string;
    isPrivate: boolean;
  };
  amount: number;
  passengers: Passenger[];
}

interface Passenger {
  id: string;
  name: string;
  nationalId: string;
  seat: string;
  cabin: string;
}

const OrderDetailsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [ticket, setTicket] = useState<Ticket>({
    id: '1',
    orderNumber: '123456789',
    type: 'قطار',
    status: 'finalized',
    purchaseDate: '۱۴۰۱/۰۱/۰۱',
    purchaseTime: '۱۲:۰۰',
    route: {
      from: 'تهران',
      to: 'مشهد',
      direction: 'رفت: تهران به مشهد'
    },
    departure: {
      time: '۱۲:۰۰',
      date: '۱ فروردین',
      dateBadge: '۱ فروردین'
    },
    train: {
      name: 'نور الرضا',
      number: '۱۲۳',
      type: 'کوپه ای ۴ نفره',
      class: '۵ ستاره نور (بیزینس)',
      cabinType: 'کوپه دربست',
      isPrivate: true
    },
    amount: 6800000,
    passengers: [
      {
        id: '1',
        name: 'علی محمدی',
        nationalId: '0123456789',
        seat: 'A1',
        cabin: 'کوپه ۱'
      },
      {
        id: '2',
        name: 'فاطمه احمدی',
        nationalId: '9876543210',
        seat: 'A2',
        cabin: 'کوپه ۱'
      }
    ]
  });

  const profileMenuItems = [
    { icon: <PersonIcon />, label: t('newprofile.profile.sidebar.account'), active: false, href: '/profile' },
    { icon: <LuggageIcon />, label: t('newprofile.profile.sidebar.myTrips'), active: true, href: '/profile-orders' },
    { icon: <GroupsIcon />, label: t('newprofile.profile.sidebar.passengers'), active: false, href: '/profile-passengers' },
    { icon: <FavoriteIcon />, label: t('newprofile.profile.sidebar.wishlist'), active: false, href: '/profile-wishlist' },
    { icon: <HeadsetIcon />, label: t('newprofile.profile.sidebar.support'), active: false, href: '/profile-ticketing' },
    { icon: <BalanceIcon />, label: t('newprofile.profile.sidebar.balance'), active: false, href: '/profile-transactions' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'finalized':
        return 'success';
      case 'pending':
        return 'warning';
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'finalized':
        return t('newprofile.orderDetails.status.finalized');
      case 'pending':
        return t('newprofile.orderDetails.status.pending');
      case 'cancelled':
        return t('newprofile.orderDetails.status.cancelled');
      default:
        return status;
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  const handleDownloadTicket = () => {
    // Logic for downloading ticket
    console.log('Downloading ticket...');
  };

  const handleBackToOrders = () => {
    // Logic for going back to orders list
    console.log('Going back to orders list...');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <Card sx={{ position: 'sticky', top: 100 }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                {/* Avatar */}
                <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
                  <Avatar
                    src="/img/layouts/avatar/m1.png"
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      border: 2, 
                      borderColor: 'primary.main',
                      mx: 'auto'
                    }}
                  />
                  <Badge
                    color="success"
                    badgeContent="✓"
                    sx={{
                      '& .MuiBadge-badge': {
                        fontSize: 16,
                        height: 24,
                        minWidth: 24,
                        borderRadius: '50%'
                      }
                    }}
                  >
                    <Box />
                  </Badge>
                </Box>

                {/* User Info */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  علی محمدی
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  ۰۹۱۲۱۲۳۴۵۶۷
                </Typography>

                {/* Balance Card */}
                <Card 
                  sx={{ 
                    backgroundColor: 'secondary.main', 
                    color: 'white', 
                    mt: 2, 
                    mb: 3,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}
                >
                  <CardContent sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <WalletIcon />
                        <Box>
                          <Typography variant="body2" fontWeight="medium">
                            {t('newprofile.profile.accountBalance')}
                          </Typography>
                          <Button 
                            variant="contained" 
                            size="small" 
                            sx={{ 
                              mt: 1,
                              backgroundColor: 'white', 
                              color: 'secondary.main',
                              '&:hover': {
                                backgroundColor: 'grey.100'
                              }
                            }}
                            href="/profile-transactions"
                          >
                            <Typography variant="caption" fontWeight="bold">
                              {t('newprofile.profile.increaseBalance')}
                            </Typography>
                          </Button>
                        </Box>
                      </Box>
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" fontWeight="bold">
                          ۰
                        </Typography>
                        <Typography variant="body2">
                          {t('newprofile.profile.currency')}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

                {/* Menu Items */}
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ mb: 2, textAlign: 'right', fontWeight: 'bold' }}
                >
                  {t('newprofile.profile.userMenu')}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {profileMenuItems.map((item, index) => (
                    <Button
                      key={index}
                      startIcon={item.icon}
                      variant={item.active ? "contained" : "outlined"}
                      fullWidth
                      sx={{ 
                        justifyContent: 'flex-start',
                        borderRadius: 2
                      }}
                      href={item.href}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9}>
            {/* Header */}
            <Card sx={{ mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={handleBackToOrders}
                    sx={{ borderRadius: 2 }}
                  >
                    {t('newprofile.common.back')}
                  </Button>
                  <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {t('newprofile.orderDetails.orderNumber')}
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                          {ticket.orderNumber}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {t('newprofile.orderDetails.serviceType')}
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                          {ticket.type}
                        </Typography>
                      </Box>
                      <Chip
                        label={getStatusText(ticket.status)}
                        color={getStatusColor(ticket.status) as any}
                        size="medium"
                      />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mt: 1, flexWrap: 'wrap' }}>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {t('newprofile.orderDetails.purchaseTime')}
                        </Typography>
                        <Typography variant="body2">
                          {ticket.purchaseDate} - {ticket.purchaseTime}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Tickets Section */}
            <Card sx={{ mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h5" fontWeight="bold">
                    {t('newprofile.orderDetails.tickets')}
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    onClick={handleDownloadTicket}
                    sx={{ borderRadius: 2 }}
                  >
                    {t('newprofile.orderDetails.downloadTicket')}
                  </Button>
                </Box>

                {/* Ticket Details */}
                <Card variant="outlined" sx={{ mb: 3 }}>
                  <CardContent sx={{ p: 4 }}>
                    {/* Route Info */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {ticket.type} {ticket.route.direction}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <ScheduleIcon color="action" />
                        <Typography variant="body2" color="text.secondary">
                          {t('newprofile.orderDetails.departureTime')}: {ticket.departure.time}
                        </Typography>
                        <Chip
                          label={ticket.departure.dateBadge}
                          color="info"
                          size="small"
                        />
                      </Box>
                    </Box>

                    {/* Train Info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          component="img"
                          src="/img/pages/profile-orders/noor.png"
                          alt={ticket.train.name}
                          sx={{ width: 40, height: 40 }}
                        />
                        <Typography variant="h6" fontWeight="bold">
                          {ticket.train.name}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="body2" color="text.secondary">
                            {t('newprofile.orderDetails.start')}
                          </Typography>
                          <Typography variant="h6" fontWeight="bold">
                            {ticket.departure.time}
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="body2" color="text.secondary">
                            {t('newprofile.orderDetails.end')}
                          </Typography>
                          <Typography variant="h6" fontWeight="bold">
                            ۰۶:۰۰
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    {/* Train Details */}
                    <Paper variant="outlined" sx={{ p: 3, bgcolor: 'grey.50' }}>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {t('newprofile.orderDetails.trainInfo')}
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                          <Box>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              {t('newprofile.orderDetails.hallName')}
                            </Typography>
                            <Typography variant="body1" fontWeight="medium">
                              {ticket.train.class}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Box>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              {t('newprofile.orderDetails.trainNumber')}
                            </Typography>
                            <Typography variant="body1" fontWeight="medium">
                              {ticket.train.number}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Box>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              {t('newprofile.orderDetails.trainType')}
                            </Typography>
                            <Typography variant="body1" fontWeight="medium">
                              {ticket.train.type}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'flex-end' }}>
                            <InfoIcon color="info" />
                            <Typography variant="body2" color="info.main" fontWeight="medium">
                              {ticket.train.cabinType}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </CardContent>
                </Card>

                {/* Passengers List */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t('newprofile.orderDetails.passengers')}
                </Typography>
                <List>
                  {ticket.passengers.map((passenger, index) => (
                    <ListItem key={passenger.id} divider={index !== ticket.passengers.length - 1}>
                      <ListItemIcon>
                        <PersonIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body1" fontWeight="medium">
                              {passenger.name}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                              <Chip
                                label={`${t('newprofile.orderDetails.seat')} ${passenger.seat}`}
                                size="small"
                                variant="outlined"
                              />
                              <Chip
                                label={`${t('newprofile.orderDetails.cabin')} ${passenger.cabin}`}
                                size="small"
                                variant="outlined"
                              />
                            </Box>
                          </Box>
                        }
                        secondary={
                          <Typography variant="body2" color="text.secondary">
                            {t('newprofile.orderDetails.nationalId')}: {passenger.nationalId}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            {/* Payment Summary */}
            <Card>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PaymentIcon color="action" />
                    <Typography variant="body1" color="text.secondary">
                      {t('newprofile.orderDetails.paidAmount')}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h5" fontWeight="bold" color="primary">
                      {formatPrice(ticket.amount)}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {t('newprofile.profile.currency')}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OrderDetailsPage;