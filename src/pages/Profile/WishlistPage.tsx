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
  Badge
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Language as LanguageIcon,
  Person as PersonIcon,
  Wallet as WalletIcon,
  Luggage as LuggageIcon,
  Groups as GroupsIcon,
  Headset as HeadsetIcon,
  AccountBalance as BalanceIcon,
  SentimentDissatisfied as EmptyIcon,
  DirectionsBus as BusIcon,
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface WishlistItem {
  id: string;
  type: 'route' | 'destination';
  title: string;
  description: string;
  image?: string;
  from: string;
  to: string;
  price: number;
  date?: string;
  isFavorite: boolean;
}

const WishlistPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

 

  const suggestedItems: WishlistItem[] = [
    {
      id: '1',
      type: 'route',
      title: 'تهران به مشهد',
      description: 'مسیر مستقیم با امکانات کامل',
      from: 'تهران',
      to: 'مشهد',
      price: 1850000,
      date: '۱۴۰۳/۰۸/۲۰',
      isFavorite: false
    },
    {
      id: '2',
      type: 'route',
      title: 'اصفهان به شیراز',
      description: 'سفر به شهر فرهنگ و هنر',
      from: 'اصفهان',
      to: 'شیراز',
      price: 1200000,
      date: '۱۴۰۳/۰۸/۲۵',
      isFavorite: false
    },
    {
      id: '3',
      type: 'destination',
      title: 'کیش',
      description: 'جزیره زیبای خلیج فارس',
      from: 'تهران',
      to: 'کیش',
      price: 2500000,
      isFavorite: false
    },
    {
      id: '4',
      type: 'route',
      title: 'تبریز به ارومیه',
      description: 'مسیر کوهستانی با مناظر زیبا',
      from: 'تبریز',
      to: 'ارومیه',
      price: 850000,
      date: '۱۴۰۳/۰۹/۰۱',
      isFavorite: false
    }
  ];

  const profileMenuItems = [
    { icon: <PersonIcon />, label: t('newprofile.profile.sidebar.account'), active: false },
    { icon: <LuggageIcon />, label: t('newprofile.profile.sidebar.myTrips'), active: false },
    { icon: <GroupsIcon />, label: t('newprofile.profile.sidebar.passengers'), active: false },
    { icon: <FavoriteIcon />, label: t('newprofile.profile.sidebar.wishlist'), active: true },
    { icon: <HeadsetIcon />, label: t('newprofile.profile.sidebar.support'), active: false },
    { icon: <BalanceIcon />, label: t('newprofile.profile.sidebar.balance'), active: false }
  ];

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    document.dir = lng === 'fa' || lng === 'ar' || lng === 'ps' ? 'rtl' : 'ltr';
  };

  const handleAddToWishlist = (item: WishlistItem) => {
    setWishlistItems(prev => [...prev, { ...item, isFavorite: true }]);
  };

  const handleRemoveFromWishlist = (itemId: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleClearAll = () => {
    setWishlistItems([]);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  const renderWishlistItem = (item: WishlistItem) => (
    <Card key={item.id} sx={{ mb: 2, transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)' } }}>
      <CardContent sx={{ p: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              {item.type === 'route' ? <BusIcon color="primary" /> : <LocationIcon color="secondary" />}
              <Typography variant="h6" fontWeight="bold">
                {item.title}
              </Typography>
              <Chip 
                label={item.type === 'route' ? t('newprofile.wishlist.categories.popularRoutes') : t('newprofile.wishlist.categories.savedDestinations')} 
                size="small" 
                color={item.type === 'route' ? 'primary' : 'secondary'}
              />
            </Box>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {item.description}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {t('home.from')}
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {item.from}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 60, height: 2, bgcolor: 'divider', position: 'relative' }}>
                  <Box sx={{ position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)' }}>
                    <BusIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  </Box>
                </Box>
              </Box>

              <Box>
                <Typography variant="body2" color="text.secondary">
                  {t('home.to')}
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {item.to}
                </Typography>
              </Box>
            </Box>

            {item.date && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  {item.date}
                </Typography>
              </Box>
            )}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
                {formatPrice(item.price)} {t('newprofile.profile.currency')}
              </Typography>
              
              <CardActions sx={{ justifyContent: 'center', gap: 1 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<FavoriteIcon />}
                >
                  {t('newprofile.wishlist.bookNow')}
                </Button>
                <IconButton
                  color="error"
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  sx={{ 
                    backgroundColor: 'error.light',
                    '&:hover': { backgroundColor: 'error.main' }
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderSuggestedItem = (item: WishlistItem) => (
    <Card key={item.id} sx={{ height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)' } }}>
      <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          {item.type === 'route' ? <BusIcon color="primary" /> : <LocationIcon color="secondary" />}
          <Typography variant="h6" fontWeight="bold" sx={{ flexGrow: 1 }}>
            {item.title}
          </Typography>
          <IconButton
            size="small"
            color={item.isFavorite ? "error" : "default"}
            onClick={() => handleAddToWishlist(item)}
          >
            {item.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
          {item.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              {item.from} → {item.to}
            </Typography>
          </Box>
          <Typography variant="h6" color="primary" fontWeight="bold">
            {formatPrice(item.price)}
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => handleAddToWishlist(item)}
        >
          {t('newprofile.wishlist.addToWishlist')}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <Box>
      <Container>
        <Grid container spacing={3} sx={{ py: 4 }}>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <Card sx={{ height: 'fit-content' }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                {/* Avatar */}
                <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
                  <Avatar
                    src="/img/layouts/avatar/m1.png"
                    sx={{ width: 80, height: 80, border: 2, borderColor: 'primary.main' }}
                  />
                  <Chip
                    icon={<FavoriteIcon />}
                    label={t('newprofile.profile.verified')}
                    color="success"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      transform: 'translate(-30%, -30%)'
                    }}
                  />
                </Box>

                {/* User Info */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  علی محمدی
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  ۰۹۱۲۱۲۳۴۵۶۷
                </Typography>

                {/* Balance Card */}
                <Card sx={{ backgroundColor: 'secondary.main', color: 'white', mt: 2, mb: 3 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <WalletIcon />
                          <Typography variant="body2">
                            {t('newprofile.profile.accountBalance')}
                          </Typography>
                        </Box>
                        <Button variant="contained" size="small" sx={{ backgroundColor: 'white', color: 'secondary.main' }}>
                          <Typography variant="caption">
                            {t('newprofile.profile.increaseBalance')}
                          </Typography>
                        </Button>
                      </Box>
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="h6">
                          {0}
                        </Typography>
                        <Typography variant="body2">
                          {t('newprofile.profile.currency')}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

                {/* Menu Items */}
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: 'right' }}>
                  {t('newprofile.profile.userMenu')}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {profileMenuItems.map((item, index) => (
                    <Button
                      key={index}
                      startIcon={item.icon}
                      variant={item.active ? "contained" : "outlined"}
                      fullWidth
                      sx={{ justifyContent: 'flex-start' }}
                      
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FavoriteIcon color="primary" sx={{ fontSize: 32 }} />
                    <Box>
                      <Typography variant="h4" fontWeight="bold">
                        {t('newprofile.wishlist.pageTitle')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('newprofile.wishlist.itemsCount')}: {wishlistItems.length}
                      </Typography>
                    </Box>
                  </Box>

                  {wishlistItems.length > 0 && (
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={handleClearAll}
                    >
                      {t('newprofile.wishlist.clearAll')}
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>

            {/* Wishlist Items */}
            {wishlistItems.length > 0 ? (
              <Box sx={{ mb: 4 }}>
                {wishlistItems.map(renderWishlistItem)}
              </Box>
            ) : (
              /* Empty State */
              <Card sx={{ mb: 4 }}>
                <CardContent sx={{ p: 6, textAlign: 'center' }}>
                  <EmptyIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {t('newprofile.wishlist.emptyTitle')}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {t('newprofile.wishlist.emptyMessage')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.wishlist.emptyDescription')}
                  </Typography>
                </CardContent>
              </Card>
            )}

            {/* Suggestions */}
            {showSuggestions && (
              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FavoriteIcon color="primary" />
                    {t('newprofile.wishlist.suggestions')}
                  </Typography>
                  
                  <Grid container spacing={3}>
                    {suggestedItems.map((item) => (
                      <Grid item xs={12} sm={6} key={item.id}>
                        {renderSuggestedItem(item)}
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WishlistPage;