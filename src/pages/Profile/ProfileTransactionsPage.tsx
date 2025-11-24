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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert
} from '@mui/material';
import {
  Wallet as WalletIcon,
  Person as PersonIcon,
  Luggage as LuggageIcon,
  Groups as GroupsIcon,
  Favorite as FavoriteIcon,
  Headset as HeadsetIcon,
  AccountBalance as BalanceIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  Business as BusinessIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Receipt as ReceiptIcon,
  Info as InfoIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface Transaction {
  id: string;
  date: string;
  time: string;
  amount: number;
  type: 'increase' | 'decrease';
  category: string;
  description: string;
  receipt?: string;
}

const ProfileTransactionsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [balance, setBalance] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      date: '۱۴۰۳/۰۸/۱۵',
      time: '۱۴:۳۰',
      amount: 6800000,
      type: 'decrease',
      category: 'خرید بلیط',
      description: 'بلیط اتوبوس تهران به مشهد'
    },
    {
      id: '2',
      date: '۱۴۰۳/۰۸/۱۰',
      time: '۰۹:۱۵',
      amount: 10000000,
      type: 'increase',
      category: 'افزایش اعتبار',
      description: 'واریز از طریق درگاه بانکی',
      receipt: 'U29ycnksIEluIHRoZSBjb3B5IG9mIHRoZSB0cmFuc2FjdGlvbiBpcyBhIGltYW'
    },
    {
      id: '3',
      date: '۱۴۰۳/۰۸/۰۵',
      time: '۱۶:۴۵',
      amount: 2500000,
      type: 'decrease',
      category: 'خرید بلیط',
      description: 'بلیط تاکسی اصفهان به شیراز'
    },
    {
      id: '4',
      date: '۱۴۰۳/۰۷/۲۸',
      time: '۱۱:۲۰',
      amount: 5000000,
      type: 'increase',
      category: 'افزایش اعتبار',
      description: 'واریز از طریق کارت به کارت'
    }
  ]);

  const [cashInModalOpen, setCashInModalOpen] = useState(false);
  const [cashInAmount, setCashInAmount] = useState('');

  const profileMenuItems = [
    { icon: <PersonIcon />, label: t('newprofile.profile.sidebar.account'), active: false },
       { icon: <LuggageIcon />, label: t('newprofile.profile.sidebar.myTrips'), active: false },
       { icon: <GroupsIcon />, label: t('newprofile.profile.sidebar.passengers'), active: false },
       { icon: <FavoriteIcon />, label: t('newprofile.profile.sidebar.wishlist'), active: true },
       { icon: <HeadsetIcon />, label: t('newprofile.profile.sidebar.support'), active: false },
       { icon: <BalanceIcon />, label: t('newprofile.profile.sidebar.balance'), active: false }
  ];

  const handleCashIn = () => {
    const amount = parseInt(cashInAmount.replace(/,/g, ''));
    if (amount > 0) {
      const newTransaction: Transaction = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('fa-IR'),
        time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
        amount: amount,
        type: 'increase',
        category: 'افزایش اعتبار',
        description: 'افزایش موجودی از طریق درگاه'
      };
      
      setTransactions(prev => [newTransaction, ...prev]);
      setBalance(prev => prev + amount);
      setCashInAmount('');
      setCashInModalOpen(false);
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  const getTransactionIcon = (type: string) => {
    return type === 'increase' ? 
      <TrendingUpIcon color="success" /> : 
      <TrendingDownIcon color="error" />;
  };

  const getTransactionColor = (type: string) => {
    return type === 'increase' ? 'success' : 'error';
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
                            {t('newprofile.transactions.accountBalance')}
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
                            onClick={() => setCashInModalOpen(true)}
                          >
                            <AddIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption" fontWeight="bold">
                              {t('newprofile.transactions.increaseBalance')}
                            </Typography>
                          </Button>
                        </Box>
                      </Box>
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" fontWeight="bold">
                          {formatPrice(balance)}
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
                  {t('newprofile.transactions.userMenu')}
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
            {/* Balance Summary */}
            <Card sx={{ mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} md="auto">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <WalletIcon color="primary" sx={{ fontSize: 32 }} />
                      <Typography variant="h4" fontWeight="bold">
                        {t('newprofile.transactions.accountBalance')}
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs md>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="h4" fontWeight="bold" color="success.main">
                        {formatPrice(balance)}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {t('newprofile.profile.currency')}
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs="auto">
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<AddIcon />}
                      onClick={() => setCashInModalOpen(true)}
                      sx={{ borderRadius: 2 }}
                    >
                      {t('newprofile.transactions.increaseBalance')}
                    </Button>
                  </Grid>

                  <Grid item xs="auto">
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<RemoveIcon />}
                      disabled
                      sx={{ borderRadius: 2 }}
                    >
                      {t('newprofile.transactions.withdrawBalance')}
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Transactions History */}
            <Card>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
                  {t('newprofile.transactions.historyTitle')}
                </Typography>

                {transactions.length > 0 ? (
                  <TableContainer component={Paper} variant="outlined">
                    <Table>
                      <TableHead>
                        <TableRow sx={{ backgroundColor: 'grey.50' }}>
                          <TableCell>
                            <Typography variant="subtitle2" fontWeight="bold">
                              {t('newprofile.transactions.dateTime')}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="subtitle2" fontWeight="bold">
                              {t('newprofile.transactions.amount')}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="subtitle2" fontWeight="bold">
                              {t('newprofile.transactions.type')}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="subtitle2" fontWeight="bold">
                              {t('newprofile.transactions.description')}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {transactions.map((transaction) => (
                          <TableRow 
                            key={transaction.id}
                            sx={{ 
                              '&:hover': { 
                                backgroundColor: 'action.hover' 
                              } 
                            }}
                          >
                            <TableCell>
                              <Box>
                                <Typography variant="body2" fontWeight="medium">
                                  {transaction.date}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                  {transaction.time}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Chip
                                icon={getTransactionIcon(transaction.type)}
                                label={`${formatPrice(transaction.amount)} ${t('newprofile.profile.currency')}`}
                                color={getTransactionColor(transaction.type) as any}
                                variant="outlined"
                                sx={{ fontWeight: 'bold' }}
                              />
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2">
                                {transaction.category}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Box>
                                <Typography variant="body2">
                                  {transaction.description}
                                </Typography>
                                {transaction.receipt && (
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                                    <ReceiptIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                                    <Typography 
                                      variant="caption" 
                                      color="text.secondary"
                                      sx={{ 
                                        fontFamily: 'monospace',
                                        direction: 'ltr',
                                        display: 'block',
                                        maxWidth: 200,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                      }}
                                    >
                                      {transaction.receipt}
                                    </Typography>
                                  </Box>
                                )}
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                ) : (
                  /* Empty State */
                  <Box sx={{ textAlign: 'center', py: 8 }}>
                    <InfoIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {t('newprofile.transactions.emptyTitle')}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {t('newprofile.transactions.emptyMessage')}
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Cash In Modal */}
      <Dialog 
        open={cashInModalOpen} 
        onClose={() => setCashInModalOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AddIcon color="primary" />
            {t('newprofile.transactions.increaseBalance')}
          </Box>
        </DialogTitle>
        
        <DialogContent>
          <Alert severity="info" sx={{ mb: 2 }}>
            {t('newprofile.transactions.cashInInfo')}
          </Alert>
          
          <TextField
            autoFocus
            fullWidth
            label={t('newprofile.transactions.amountPlaceholder')}
            value={cashInAmount}
            onChange={(e) => setCashInAmount(e.target.value)}
            placeholder="مثال: 100000"
            type="text"
            sx={{ mt: 1 }}
          />
        </DialogContent>
        
        <DialogActions sx={{ p: 3 }}>
          <Button 
            onClick={() => setCashInModalOpen(false)}
            variant="outlined"
          >
            {t('newprofile.common.cancel')}
          </Button>
          <Button 
            onClick={handleCashIn}
            variant="contained"
            disabled={!cashInAmount || parseInt(cashInAmount.replace(/,/g, '')) <= 0}
          >
            {t('newprofile.common.submit')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfileTransactionsPage;