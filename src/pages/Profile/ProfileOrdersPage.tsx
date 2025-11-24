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
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  InputAdornment
} from '@mui/material';
import {
  Wallet as WalletIcon,
  Person as PersonIcon,
  Luggage as LuggageIcon,
  Groups as GroupsIcon,
  Favorite as FavoriteIcon,
  Headset as HeadsetIcon,
  AccountBalance as BalanceIcon,
  Search as SearchIcon,
  Train as TrainIcon,
  DirectionsBus as BusIcon,
  DirectionsCar as CarIcon,
  LocalShipping as VanIcon,
  Flight as FlightIcon,
  Hotel as HotelIcon,
  BeachAccess as TourIcon,
  Security as InsuranceIcon,
  ChevronLeft as ChevronLeftIcon,
  CalendarToday as CalendarIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';

interface Trip {
  id: string;
  orderNumber: string;
  type: string;
  status: 'finalized' | 'pending' | 'cancelled' | 'refunded';
  from: string;
  to: string;
  date: string;
  time: string;
  passengers: number;
  amount: number;
  paymentMethod: string;
  createdAt: string;
}

const ProfileOrdersPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [trips, setTrips] = useState<Trip[]>([
    {
      id: '1',
      orderNumber: '123456789',
      type: 'قطار',
      status: 'finalized',
      from: 'تهران',
      to: 'مشهد',
      date: '۱۴۰۳/۰۸/۲۰',
      time: '۱۴:۳۰',
      passengers: 2,
      amount: 6800000,
      paymentMethod: 'درگاه پرداخت',
      createdAt: '۱۴۰۳/۰۸/۱۵'
    },
    {
      id: '2',
      orderNumber: '123456790',
      type: 'اتوبوس',
      status: 'pending',
      from: 'اصفهان',
      to: 'شیراز',
      date: '۱۴۰۳/۰۸/۲۵',
      time: '۰۸:۰۰',
      passengers: 1,
      amount: 4500000,
      paymentMethod: 'کیف پول',
      createdAt: '۱۴۰۳/۰۸/۱۸'
    },
    {
      id: '3',
      orderNumber: '123456791',
      type: 'تاکسی',
      status: 'cancelled',
      from: 'تبریز',
      to: 'ارومیه',
      date: '۱۴۰۳/۰۸/۲۲',
      time: '۱۶:۴۵',
      passengers: 3,
      amount: 1200000,
      paymentMethod: 'کارت بانکی',
      createdAt: '۱۴۰۳/۰۸/۲۰'
    }
  ]);

  const [filters, setFilters] = useState({
    orderNumber: '',
    orderType: '',
    fromDate: null,
    toDate: null
  });

  const orderTypes = [
    'پرواز داخلی',
    'پرواز خارجی',
    'هتل داخلی',
    'هتل خارجی',
    'تور داخلی',
    'تور خارجی',
    'بیمه مسافرتی',
    'تور گروهی',
    'قطار',
    'اتوبوس',
    'تاکسی',
    'ون'
  ];

  const profileMenuItems = [
      { icon: <PersonIcon />, label: t('newprofile.profile.sidebar.account'), active: false, href: '/profile' },
      { icon: <LuggageIcon />, label: t('newprofile.profile.sidebar.myTrips'), active: false, href: '/profile-orders' },
      { icon: <GroupsIcon />, label: t('newprofile.profile.sidebar.passengers'), active: false, href: '/profile-passengers' },
      { icon: <FavoriteIcon />, label: t('newprofile.profile.sidebar.wishlist'), active: false, href: '/profile-wishlist' },
      { icon: <HeadsetIcon />, label: t('newprofile.profile.sidebar.support'), active: true, href: '/profile-ticketing' },
      { icon: <BalanceIcon />, label: t('newprofile.profile.sidebar.balance'), active: false, href: '/profile-transactions' }
    ];

  const getTripIcon = (type: string) => {
    switch (type) {
      case 'قطار':
        return <TrainIcon color="primary" />;
      case 'اتوبوس':
        return <BusIcon color="secondary" />;
      case 'تاکسی':
        return <CarIcon color="info" />;
      case 'ون':
        return <VanIcon color="warning" />;
      case 'پرواز داخلی':
      case 'پرواز خارجی':
        return <FlightIcon color="success" />;
      case 'هتل داخلی':
      case 'هتل خارجی':
        return <HotelIcon color="primary" />;
      case 'تور داخلی':
      case 'تور خارجی':
      case 'تور گروهی':
        return <TourIcon color="secondary" />;
      case 'بیمه مسافرتی':
        return <InsuranceIcon color="info" />;
      default:
        return <LuggageIcon color="primary" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'finalized':
        return 'success';
      case 'pending':
        return 'warning';
      case 'cancelled':
        return 'error';
      case 'refunded':
        return 'info';
      default:
        return 'default';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'finalized':
        return t('newprofile.orders.status.finalized');
      case 'pending':
        return t('newprofile.orders.status.pending');
      case 'cancelled':
        return t('newprofile.orders.status.cancelled');
      case 'refunded':
        return t('newprofile.orders.status.refunded');
      default:
        return status;
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  const filteredTrips = trips.filter(trip => {
    if (filters.orderNumber && !trip.orderNumber.includes(filters.orderNumber)) {
      return false;
    }
    if (filters.orderType && trip.type !== filters.orderType) {
      return false;
    }
    // Add date filtering logic here when date pickers are implemented
    return true;
  });

  const handleFilterChange = (field: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    // Filter logic is already implemented in filteredTrips
    console.log('Searching with filters:', filters);
  };

  const handleClearFilters = () => {
    setFilters({
      orderNumber: '',
      orderType: '',
      fromDate: null,
      toDate: null
    });
  };

  const renderTripCard = (trip: Trip) => (
    <Card key={trip.id} sx={{ mb: 2, border: 1, borderColor: 'divider' }}>
      {/* Trip Header */}
      <CardContent sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {getTripIcon(trip.type)}
            <Typography variant="h6" fontWeight="bold">
              {trip.type}
            </Typography>
          </Box>
          <Chip
            label={getStatusText(trip.status)}
            color={getStatusColor(trip.status) as any}
            size="small"
          />
        </Box>
      </CardContent>

      {/* Trip Details */}
      <CardContent sx={{ p: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {t('newprofile.orders.orderNumber')}
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {trip.orderNumber}
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {t('newprofile.orders.paidAmount')}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body1" fontWeight="bold">
                    {formatPrice(trip.amount)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.profile.currency')}
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {t('newprofile.orders.route')}
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {trip.from} → {trip.to}
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {t('newprofile.orders.dateTime')}
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {trip.date} - {trip.time}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<ChevronLeftIcon />}
                sx={{ borderRadius: 2 }}
              >
                {t('newprofile.orders.orderDetails')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
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
                    <LuggageIcon color="primary" sx={{ fontSize: 32 }} />
                    <Typography variant="h4" fontWeight="bold">
                      {t('newprofile.orders.pageTitle')}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              {/* Filters */}
              <Card sx={{ mb: 3 }}>
                <CardContent sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('newprofile.orders.filterTitle')}
                  </Typography>
                  
                  <Grid container spacing={2}>
                    {/* Order Number */}
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label={t('newprofile.orders.orderNumber')}
                        value={filters.orderNumber}
                        onChange={(e) => handleFilterChange('orderNumber', e.target.value)}
                        placeholder={t('newprofile.orders.orderNumberPlaceholder')}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon color="action" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    {/* Order Type */}
                    <Grid item xs={12} md={4}>
                      <TextField
                        select
                        fullWidth
                        label={t('newprofile.orders.orderType')}
                        value={filters.orderType}
                        onChange={(e) => handleFilterChange('orderType', e.target.value)}
                      >
                        <MenuItem value="">
                          {t('newprofile.orders.selectOrderType')}
                        </MenuItem>
                        {orderTypes.map((type) => (
                          <MenuItem key={type} value={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    {/* Date Range */}
                    <Grid item xs={12} md={4}>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <DatePicker
                          label={t('newprofile.orders.fromDate')}
                          value={filters.fromDate}
                          onChange={(newValue) => handleFilterChange('fromDate', newValue)}
                          slotProps={{
                            textField: {
                              fullWidth: true,
                              InputProps: {
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <CalendarIcon color="action" />
                                  </InputAdornment>
                                ),
                              }
                            }
                          }}
                        />
                        <DatePicker
                          label={t('newprofile.orders.toDate')}
                          value={filters.toDate}
                          onChange={(newValue) => handleFilterChange('toDate', newValue)}
                          slotProps={{
                            textField: {
                              fullWidth: true,
                              InputProps: {
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <CalendarIcon color="action" />
                                  </InputAdornment>
                                ),
                              }
                            }
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>

                {/* Filter Actions */}
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                    <Button
                      variant="outlined"
                      onClick={handleClearFilters}
                    >
                      {t('newprofile.common.clear')}
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleSearch}
                      startIcon={<SearchIcon />}
                    >
                      {t('newprofile.common.search')}
                    </Button>
                  </Box>
                </CardContent>
              </Card>

              {/* Trips List */}
              <Card>
                <CardContent sx={{ p: 3 }}>
                  {filteredTrips.length > 0 ? (
                    <Box>
                      {filteredTrips.map(renderTripCard)}
                    </Box>
                  ) : (
                    /* Empty State */
                    <Box sx={{ textAlign: 'center', py: 8 }}>
                      <LuggageIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {t('newprofile.orders.emptyTitle')}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {t('newprofile.orders.emptyMessage')}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </LocalizationProvider>
    </Box>
  );
};

export default ProfileOrdersPage;