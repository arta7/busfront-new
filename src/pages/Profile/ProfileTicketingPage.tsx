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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Alert,
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
  Add as AddIcon,
  Business as BusinessIcon,
  Info as InfoIcon,
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
  Cancel as CancelIcon,
  Chat as ChatIcon,
  Assignment as AssignmentIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface SupportTicket {
  id: string;
  title: string;
  type: string;
  orderNumber?: string;
  description: string;
  status: 'open' | 'pending' | 'resolved' | 'closed';
  createdAt: string;
  updatedAt: string;
  messages: TicketMessage[];
}

interface TicketMessage {
  id: string;
  sender: 'user' | 'support';
  message: string;
  timestamp: string;
  read: boolean;
}

const ProfileTicketingPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [newTicketModalOpen, setNewTicketModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);

  const [newTicketForm, setNewTicketForm] = useState({
    type: '',
    orderNumber: '',
    subject: '',
    description: ''
  });

  const ticketTypes = [
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
    'ون',
    'باربری'
  ];

  const sampleTickets: SupportTicket[] = [
    {
      id: '1',
      title: 'مشکل در خرید بلیط اتوبوس',
      type: 'اتوبوس',
      orderNumber: 'ORD-001',
      description: 'در هنگام پرداخت بلیط اتوبوس با خطا مواجه شدم',
      status: 'resolved',
      createdAt: '۱۴۰۳/۰۸/۱۰',
      updatedAt: '۱۴۰۳/۰۸/۱۲',
      messages: [
        {
          id: '1',
          sender: 'user',
          message: 'در هنگام پرداخت بلیط اتوبوس از تهران به مشهد با خطای پرداخت مواجه شدم',
          timestamp: '۱۴۰۳/۰۸/۱۰ - ۱۴:۳۰',
          read: true
        },
        {
          id: '2',
          sender: 'support',
          message: 'با سلام، مشکل پرداخت شما بررسی شد. لطفا مجددا اقدام به خرید نمایید',
          timestamp: '۱۴۰۳/۰۸/۱۱ - ۰۹:۱۵',
          read: true
        }
      ]
    },
    {
      id: '2',
      title: 'استرداد بلیط تاکسی',
      type: 'تاکسی',
      orderNumber: 'ORD-002',
      description: 'درخواست استرداد بلیط تاکسی اصفهان به شیراز',
      status: 'pending',
      createdAt: '۱۴۰۳/۰۸/۱۵',
      updatedAt: '۱۴۰۳/۰۸/۱۵',
      messages: [
        {
          id: '1',
          sender: 'user',
          message: 'بلیط تاکسی رزرو شده را نیاز به کنسلی دارم',
          timestamp: '۱۴۰۳/۰۸/۱۵ - ۱۶:۴۵',
          read: true
        }
      ]
    }
  ];

  const profileMenuItems = [
    { icon: <PersonIcon />, label: t('newprofile.profile.sidebar.account'), active: false, href: '/profile' },
    { icon: <LuggageIcon />, label: t('newprofile.profile.sidebar.myTrips'), active: false, href: '/profile-orders' },
    // { icon: <GroupsIcon />, label: t('newprofile.profile.sidebar.passengers'), active: false, href: '/profile-passengers' },
    // { icon: <FavoriteIcon />, label: t('newprofile.profile.sidebar.wishlist'), active: false, href: '/profile-wishlist' },
    { icon: <HeadsetIcon />, label: t('newprofile.profile.sidebar.support'), active: true, href: '/profile-ticketing' },
    { icon: <BalanceIcon />, label: t('newprofile.profile.sidebar.balance'), active: false, href: '/profile-transactions' }
  ];

  const handleCreateTicket = () => {
    if (newTicketForm.subject && newTicketForm.description && newTicketForm.type) {
      const newTicket: SupportTicket = {
        id: Date.now().toString(),
        title: newTicketForm.subject,
        type: newTicketForm.type,
        orderNumber: newTicketForm.orderNumber,
        description: newTicketForm.description,
        status: 'open',
        createdAt: new Date().toLocaleDateString('fa-IR'),
        updatedAt: new Date().toLocaleDateString('fa-IR'),
        messages: [
          {
            id: '1',
            sender: 'user',
            message: newTicketForm.description,
            timestamp: new Date().toLocaleDateString('fa-IR') + ' - ' + new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
            read: true
          }
        ]
      };

      setTickets(prev => [newTicket, ...prev]);
      setNewTicketForm({
        type: '',
        orderNumber: '',
        subject: '',
        description: ''
      });
      setNewTicketModalOpen(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <ChatIcon color="info" />;
      case 'pending':
        return <PendingIcon color="warning" />;
      case 'resolved':
        return <CheckCircleIcon color="success" />;
      case 'closed':
        return <CancelIcon color="error" />;
      default:
        return <ChatIcon color="info" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'info';
      case 'pending':
        return 'warning';
      case 'resolved':
        return 'success';
      case 'closed':
        return 'error';
      default:
        return 'info';
    }
  };

  const renderTicketItem = (ticket: SupportTicket) => (
    <Card key={ticket.id} sx={{ mb: 2, transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-2px)' } }}>
      <CardContent sx={{ p: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              {getStatusIcon(ticket.status)}
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                  {ticket.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                  <Chip
                    label={ticket.type}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    icon={getStatusIcon(ticket.status)}
                    label={t(`newprofile.support.status.${ticket.status}`)}
                    color={getStatusColor(ticket.status) as any}
                    size="small"
                  />
                </Box>
              </Box>
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {ticket.description}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
              {ticket.orderNumber && (
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.support.orderNumber')}
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {ticket.orderNumber}
                  </Typography>
                </Box>
              )}
              
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {t('newprofile.support.createdAt')}
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {ticket.createdAt}
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2" color="text.secondary">
                  {t('newprofile.support.lastUpdate')}
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {ticket.updatedAt}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <CardActions sx={{ justifyContent: 'center', gap: 1, flexDirection: 'column' }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<ChatIcon />}
                  onClick={() => setSelectedTicket(ticket)}
                >
                  {t('newprofile.support.viewDetails')}
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  startIcon={<AssignmentIcon />}
                >
                  {t('newprofile.support.followUp')}
                </Button>
              </CardActions>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

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
                            {t('profile.accountBalance')}
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
                            <AddIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption" fontWeight="bold">
                              {t('profile.increaseBalance')}
                            </Typography>
                          </Button>
                        </Box>
                      </Box>
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" fontWeight="bold">
                          ۰
                        </Typography>
                        <Typography variant="body2">
                          {t('profile.currency')}
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
                  {t('newprofile.profile.Menu')}
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <HeadsetIcon color="primary" sx={{ fontSize: 32 }} />
                    <Box>
                      <Typography variant="h4" fontWeight="bold">
                        {t('newprofile.support.pageTitle')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('newprofile.support.ticketsCount')}: {tickets.length}
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={() => setNewTicketModalOpen(true)}
                    sx={{ borderRadius: 2 }}
                  >
                    {t('newprofile.support.newTicket')}
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* Tickets List */}
            {tickets.length > 0 ? (
              <Box sx={{ mb: 4 }}>
                {tickets.map(renderTicketItem)}
              </Box>
            ) : (
              /* Empty State */
              <Card>
                <CardContent sx={{ p: 6, textAlign: 'center' }}>
                  <Box sx={{ mb: 3 }}>
                    <img 
                      src="/img/pages/profile-ticketing/no-data.svg" 
                      alt={t('newprofile.support.emptyTitle')}
                      style={{ width: 200, height: 200 }}
                    />
                  </Box>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {t('newprofile.support.emptyTitle')}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 400, mx: 'auto' }}>
                    {t('newprofile.support.emptyMessage')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t('newprofile.support.emptyDescription')}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
        </Grid>
      </Container>

      {/* New Ticket Modal */}
      <Dialog 
        open={newTicketModalOpen} 
        onClose={() => setNewTicketModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AddIcon color="primary" />
            {t('newprofile.support.newTicket')}
          </Box>
        </DialogTitle>
        
        <DialogContent>
          <Alert severity="info" sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <InfoIcon />
              {t('newprofile.support.ticketWarning')}
            </Box>
          </Alert>
          
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label={t('newprofile.support.ticketType')}
                value={newTicketForm.type}
                onChange={(e) => setNewTicketForm(prev => ({ ...prev, type: e.target.value }))}
              >
                <MenuItem value="">
                  {t('newprofile.support.selectType')}
                </MenuItem>
                {ticketTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('newprofile.support.orderNumber')}
                value={newTicketForm.orderNumber}
                onChange={(e) => setNewTicketForm(prev => ({ ...prev, orderNumber: e.target.value }))}
                placeholder={t('newprofile.support.orderNumberPlaceholder')}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('newprofile.support.subject')}
                value={newTicketForm.subject}
                onChange={(e) => setNewTicketForm(prev => ({ ...prev, subject: e.target.value }))}
                placeholder={t('newprofile.support.subjectPlaceholder')}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={6}
                label={t('newprofile.support.description')}
                value={newTicketForm.description}
                onChange={(e) => setNewTicketForm(prev => ({ ...prev, description: e.target.value }))}
                placeholder={t('newprofile.support.descriptionPlaceholder')}
              />
            </Grid>
          </Grid>
        </DialogContent>
        
        <DialogActions sx={{ p: 3 }}>
          <Button 
            onClick={() => setNewTicketModalOpen(false)}
            variant="outlined"
          >
            {t('newprofile.common.cancel')}
          </Button>
          <Button 
            onClick={handleCreateTicket}
            variant="contained"
            disabled={!newTicketForm.subject || !newTicketForm.description || !newTicketForm.type}
          >
            {t('newprofile.common.submit')}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Ticket Details Modal */}
      <Dialog 
        open={!!selectedTicket} 
        onClose={() => setSelectedTicket(null)}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AssignmentIcon color="primary" />
            {selectedTicket?.title}
          </Box>
        </DialogTitle>
        
        <DialogContent>
          {selectedTicket && (
            <Box>
              {/* Ticket Header */}
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6}>
                      <Typography variant="h6" gutterBottom>
                        {selectedTicket.title}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Chip
                          label={selectedTicket.type}
                          color="primary"
                          variant="outlined"
                        />
                        <Chip
                          icon={getStatusIcon(selectedTicket.status)}
                          label={t(`newprofile.support.status.${selectedTicket.status}`)}
                          color={getStatusColor(selectedTicket.status) as any}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                        <Typography variant="body2" color="text.secondary">
                          {t('newprofile.support.createdAt')}: {selectedTicket.createdAt}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {t('newprofile.support.lastUpdate')}: {selectedTicket.updatedAt}
                        </Typography>
                        {selectedTicket.orderNumber && (
                          <Typography variant="body2" color="text.secondary">
                            {t('newprofile.support.orderNumber')}: {selectedTicket.orderNumber}
                          </Typography>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {/* Messages */}
              <Typography variant="h6" gutterBottom>
                {t('newprofile.support.conversation')}
              </Typography>
              
              <List>
                {selectedTicket.messages.map((message) => (
                  <ListItem key={message.id} alignItems="flex-start">
                    <ListItemIcon>
                      <Avatar sx={{ 
                        bgcolor: message.sender === 'user' ? 'primary.main' : 'secondary.main',
                        width: 32,
                        height: 32
                      }}>
                        {message.sender === 'user' ? <PersonIcon /> : <HeadsetIcon />}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="subtitle2">
                            {message.sender === 'user' ? t('newprofile.support.you') : t('newprofile.support.supportTeam')}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {message.timestamp}
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          {message.message}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>

              {/* Reply Section */}
              <Box sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label={t('newprofile.support.replyPlaceholder')}
                  placeholder={t('newprofile.support.typeYourMessage')}
                />
                <Box sx={{ mt: 1, textAlign: 'left' }}>
                  <Button variant="contained">
                    {t('newprofile.support.sendReply')}
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </DialogContent>
        
        <DialogActions sx={{ p: 3 }}>
          <Button 
            onClick={() => setSelectedTicket(null)}
            variant="outlined"
          >
            {t('newprofile.common.close')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfileTicketingPage;