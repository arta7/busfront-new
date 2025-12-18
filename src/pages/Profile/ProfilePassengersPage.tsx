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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip
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
  Edit as EditIcon,
  Delete as DeleteIcon,
  Female as FemaleIcon,
  Male as MaleIcon,
  Badge as IdCardIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface Passenger {
  id: string;
  firstName: string;
  lastName: string;
  firstNameEnglish: string;
  lastNameEnglish: string;
  gender: 'male' | 'female';
  nationalId: string;
  birthDate: {
    day: string;
    month: string;
    year: string;
  };
  passportNumber?: string;
}

const ProfilePassengersPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [passengers, setPassengers] = useState<Passenger[]>([
    {
      id: '1',
      firstName: 'علی',
      lastName: 'محمدی',
      firstNameEnglish: 'Ali',
      lastNameEnglish: 'Mohammadi',
      gender: 'male',
      nationalId: '0123456789',
      birthDate: {
        day: '01',
        month: '01',
        year: '1300'
      }
    }
  ]);

  const [passengerModalOpen, setPassengerModalOpen] = useState(false);
  const [editingPassenger, setEditingPassenger] = useState<Passenger | null>(null);

  const [passengerForm, setPassengerForm] = useState({
    firstName: '',
    lastName: '',
    firstNameEnglish: '',
    lastNameEnglish: '',
    gender: '',
    nationalId: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    passportNumber: ''
  });

  const profileMenuItems = [
    { icon: <PersonIcon />, label: t('newprofile.profile.sidebar.account'), active: false, href: '/profile' },
    { icon: <LuggageIcon />, label: t('newprofile.profile.sidebar.myTrips'), active: false, href: '/profile-orders' }
    // { icon: <GroupsIcon />, label: t('newprofile.profile.sidebar.passengers'), active: true, href: '/profile-passengers' },
    // { icon: <FavoriteIcon />, label: t('newprofile.profile.sidebar.wishlist'), active: false, href: '/profile-wishlist' },
    // { icon: <HeadsetIcon />, label: t('newprofile.profile.sidebar.support'), active: false, href: '/profile-ticketing' },
    // { icon: <BalanceIcon />, label: t('newprofile.profile.sidebar.balance'), active: false, href: '/profile-transactions' }
  ];

  const handleAddPassenger = () => {
    setEditingPassenger(null);
    setPassengerForm({
      firstName: '',
      lastName: '',
      firstNameEnglish: '',
      lastNameEnglish: '',
      gender: '',
      nationalId: '',
      birthDay: '',
      birthMonth: '',
      birthYear: '',
      passportNumber: ''
    });
    setPassengerModalOpen(true);
  };

  const handleEditPassenger = (passenger: Passenger) => {
    setEditingPassenger(passenger);
    setPassengerForm({
      firstName: passenger.firstName,
      lastName: passenger.lastName,
      firstNameEnglish: passenger.firstNameEnglish,
      lastNameEnglish: passenger.lastNameEnglish,
      gender: passenger.gender,
      nationalId: passenger.nationalId,
      birthDay: passenger.birthDate.day,
      birthMonth: passenger.birthDate.month,
      birthYear: passenger.birthDate.year,
      passportNumber: passenger.passportNumber || ''
    });
    setPassengerModalOpen(true);
  };

  const handleDeletePassenger = (passengerId: string) => {
    setPassengers(prev => prev.filter(p => p.id !== passengerId));
  };

  const handleSavePassenger = () => {
    if (passengerForm.firstName && passengerForm.lastName && passengerForm.nationalId && passengerForm.gender) {
      const passengerData: Passenger = {
        id: editingPassenger?.id || Date.now().toString(),
        firstName: passengerForm.firstName,
        lastName: passengerForm.lastName,
        firstNameEnglish: passengerForm.firstNameEnglish,
        lastNameEnglish: passengerForm.lastNameEnglish,
        gender: passengerForm.gender as 'male' | 'female',
        nationalId: passengerForm.nationalId,
        birthDate: {
          day: passengerForm.birthDay,
          month: passengerForm.birthMonth,
          year: passengerForm.birthYear
        },
        passportNumber: passengerForm.passportNumber || undefined
      };

      if (editingPassenger) {
        setPassengers(prev => prev.map(p => p.id === editingPassenger.id ? passengerData : p));
      } else {
        setPassengers(prev => [...prev, passengerData]);
      }

      setPassengerModalOpen(false);
    }
  };

  const formatBirthDate = (birthDate: { day: string; month: string; year: string }) => {
    return `${birthDate.year}/${birthDate.month}/${birthDate.day}`;
  };

  const getGenderIcon = (gender: string) => {
    return gender === 'male' ? <MaleIcon color="primary" /> : <FemaleIcon color="secondary" />;
  };

  const getGenderText = (gender: string) => {
    return gender === 'male' ? t('newprofile.passengers.male') : t('newprofile.passengers.female');
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
                  {t('profile.userMenu')}
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
                    <GroupsIcon color="primary" sx={{ fontSize: 32 }} />
                    <Box>
                      <Typography variant="h4" fontWeight="bold">
                        {t('newprofile.passengers.pageTitle')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('newprofile.passengers.passengersCount')}: {passengers.length}
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={handleAddPassenger}
                    sx={{ borderRadius: 2 }}
                  >
                    {t('newprofile.passengers.addNewPassenger')}
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* Passengers Table */}
            <Card>
              <CardContent sx={{ p: 3 }}>
                {passengers.length > 0 ? (
                  <TableContainer component={Paper} variant="outlined">
                    <Table>
                      <TableHead>
                        <TableRow sx={{ backgroundColor: 'grey.50' }}>
                          <TableCell>
                            <Typography variant="subtitle2" fontWeight="bold">
                              {t('newprofile.passengers.fullName')}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="subtitle2" fontWeight="bold">
                              {t('newprofile.passengers.gender')}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="subtitle2" fontWeight="bold">
                              {t('newprofile.passengers.nationalId')}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="subtitle2" fontWeight="bold">
                              {t('newprofile.passengers.birthDate')}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="subtitle2" fontWeight="bold">
                              {t('newprofile.passengers.passportNumber')}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography variant="subtitle2" fontWeight="bold">
                              {t('common.actions')}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {passengers.map((passenger) => (
                          <TableRow 
                            key={passenger.id}
                            sx={{ 
                              '&:hover': { 
                                backgroundColor: 'action.hover' 
                              } 
                            }}
                          >
                            <TableCell>
                              <Box>
                                <Typography variant="body1" fontWeight="medium">
                                  {passenger.firstName} {passenger.lastName}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                  {passenger.firstNameEnglish} {passenger.lastNameEnglish}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                {getGenderIcon(passenger.gender)}
                                <Typography variant="body2">
                                  {getGenderText(passenger.gender)}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IdCardIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                                <Typography variant="body2" fontFamily="monospace">
                                  {passenger.nationalId}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2">
                                {formatBirthDate(passenger.birthDate)}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2" color="text.secondary">
                                {passenger.passportNumber || '—'}
                              </Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                                <Tooltip title={t('newprofile.passengers.delete')}>
                                  <IconButton
                                    color="error"
                                    onClick={() => handleDeletePassenger(passenger.id)}
                                    size="small"
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title={t('newprofile.passengers.edit')}>
                                  <IconButton
                                    color="info"
                                    onClick={() => handleEditPassenger(passenger)}
                                    size="small"
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </Tooltip>
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
                    <GroupsIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {t('newprofile.passengers.emptyTitle')}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                      {t('newprofile.passengers.emptyMessage')}
                    </Typography>
                    <Button
                      variant="contained"
                      startIcon={<AddIcon />}
                      onClick={handleAddPassenger}
                    >
                      {t('newprofile.passengers.addFirstPassenger')}
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Passenger Modal */}
      <Dialog 
        open={passengerModalOpen} 
        onClose={() => setPassengerModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <GroupsIcon color="primary" />
            {editingPassenger ? t('newprofile.passengers.editPassenger') : t('newprofile.passengers.addNewPassenger')}
          </Box>
        </DialogTitle>
        
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {/* Persian First Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('newprofile.passengers.firstNameFarsi')}
                value={passengerForm.firstName}
                onChange={(e) => setPassengerForm(prev => ({ ...prev, firstName: e.target.value }))}
                required
                placeholder={t('newprofile.passengers.firstNameFarsiPlaceholder')}
              />
            </Grid>

            {/* Persian Last Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('newprofile.passengers.lastNameFarsi')}
                value={passengerForm.lastName}
                onChange={(e) => setPassengerForm(prev => ({ ...prev, lastName: e.target.value }))}
                required
                placeholder={t('newprofile.passengers.lastNameFarsiPlaceholder')}
              />
            </Grid>

            {/* English First Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('newprofile.passengers.firstNameEnglish')}
                value={passengerForm.firstNameEnglish}
                onChange={(e) => setPassengerForm(prev => ({ ...prev, firstNameEnglish: e.target.value }))}
                required
                placeholder={t('newprofile.passengers.firstNameEnglishPlaceholder')}
              />
            </Grid>

            {/* English Last Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('newprofile.passengers.lastNameEnglish')}
                value={passengerForm.lastNameEnglish}
                onChange={(e) => setPassengerForm(prev => ({ ...prev, lastNameEnglish: e.target.value }))}
                required
                placeholder={t('newprofile.passengers.lastNameEnglishPlaceholder')}
              />
            </Grid>

            {/* Birth Date */}
            <Grid item xs={12}>
              <Typography variant="subtitle2" gutterBottom>
                {t('newprofile.passengers.birthDate')} *
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  fullWidth
                  label={t('newprofile.passengers.day')}
                  value={passengerForm.birthDay}
                  onChange={(e) => setPassengerForm(prev => ({ ...prev, birthDay: e.target.value }))}
                  placeholder="01"
                />
                <TextField
                  fullWidth
                  label={t('newprofile.passengers.month')}
                  value={passengerForm.birthMonth}
                  onChange={(e) => setPassengerForm(prev => ({ ...prev, birthMonth: e.target.value }))}
                  placeholder="01"
                />
                <TextField
                  fullWidth
                  label={t('newprofile.passengers.year')}
                  value={passengerForm.birthYear}
                  onChange={(e) => setPassengerForm(prev => ({ ...prev, birthYear: e.target.value }))}
                  placeholder="1300"
                />
              </Box>
            </Grid>

            {/* Gender */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label={t('newprofile.passengers.gender')}
                value={passengerForm.gender}
                onChange={(e) => setPassengerForm(prev => ({ ...prev, gender: e.target.value }))}
                required
              >
                <MenuItem value="">
                  {t('newprofile.passengers.selectGender')}
                </MenuItem>
                <MenuItem value="male">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <MaleIcon />
                    {t('newprofile.passengers.male')}
                  </Box>
                </MenuItem>
                <MenuItem value="female">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FemaleIcon />
                    {t('newprofile.passengers.female')}
                  </Box>
                </MenuItem>
              </TextField>
            </Grid>

            {/* National ID */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('newprofile.passengers.nationalId')}
                value={passengerForm.nationalId}
                onChange={(e) => setPassengerForm(prev => ({ ...prev, nationalId: e.target.value }))}
                required
                placeholder="0123456789"
                inputProps={{ maxLength: 10 }}
              />
            </Grid>

            {/* National ID Info */}
            <Grid item xs={12}>
              <Alert severity="info" sx={{ mb: 2 }}>
                <Typography variant="body2">
                  {t('newprofile.passengers.nationalIdInfo')}
                </Typography>
              </Alert>
            </Grid>

            {/* Passport Number (Optional) */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('newprofile.passengers.passportNumber')}
                value={passengerForm.passportNumber}
                onChange={(e) => setPassengerForm(prev => ({ ...prev, passportNumber: e.target.value }))}
                placeholder={t('newprofile.passengers.passportNumberPlaceholder')}
              />
            </Grid>
          </Grid>
        </DialogContent>
        
        <DialogActions sx={{ p: 3 }}>
          <Button 
            onClick={() => setPassengerModalOpen(false)}
            variant="outlined"
          >
            {t('common.cancel')}
          </Button>
          <Button 
            onClick={handleSavePassenger}
            variant="contained"
            disabled={!passengerForm.firstName || !passengerForm.lastName || !passengerForm.nationalId || !passengerForm.gender}
          >
            {editingPassenger ? t('common.update') : t('common.submit')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfilePassengersPage;