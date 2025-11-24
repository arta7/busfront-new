import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery,
  Divider
} from '@mui/material';
import {
  Edit as EditIcon,
  Person as PersonIcon,
  Check as CheckIcon,
  Wallet as WalletIcon,
  Key as KeyIcon,
  AccountBalance as BankIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Language as LanguageIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface UserData {
  mobile: string;
  email: string;
  fullName: string;
  nationalId: string;
  emergencyContact: string;
  birthDate: string;
  sheba: string;
  accountNumber: string;
  cardNumber: string;
  balance: number;
}

const ProfilePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [userData, setUserData] = useState<UserData>({
    mobile: '۰۹۱۲۱۲۳۴۵۶۷',
    email: 'name@mail.com',
    fullName: 'علی محمدی',
    nationalId: t('newprofile.profile.notSet'),
    emergencyContact: t('newprofile.profile.notSet'),
    birthDate: t('newprofile.profile.notSet'),
    sheba: t('newprofile.profile.notSet'),
    accountNumber: t('newprofile.profile.notSet'),
    cardNumber: t('newprofile.profile.notSet'),
    balance: 0
  });

  const [openModal, setOpenModal] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});



  const profileMenuItems = [
    { icon: <PersonIcon />, label: t('newprofile.profile.sidebar.account'), active: true },
    { icon: <PersonIcon />, label: t('newprofile.profile.sidebar.myTrips') },
    { icon: <PersonIcon />, label: t('newprofile.profile.sidebar.passengers') },
    { icon: <PersonIcon />, label: t('newprofile.profile.sidebar.wishlist') },
    { icon: <PersonIcon />, label: t('newprofile.profile.sidebar.support') },
    { icon: <WalletIcon />, label: t('newprofile.profile.sidebar.balance') }
  ];

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    document.dir = lng === 'fa' || lng === 'ar' || lng === 'ps' ? 'rtl' : 'ltr';
  };

  const handleOpenModal = (modalType: string) => {
    setOpenModal(modalType);
    setFormData({});
  };

  const handleCloseModal = () => {
    setOpenModal(null);
    setFormData({});
  };

  const handleSave = () => {
    // در اینجا اطلاعات ذخیره می‌شوند
    if (openModal === 'editPhone' && formData.mobile) {
      setUserData(prev => ({ ...prev, mobile: formData.mobile }));
    } else if (openModal === 'editEmail' && formData.email) {
      setUserData(prev => ({ ...prev, email: formData.email }));
    } else if (openModal === 'editPersonal') {
      // ذخیره اطلاعات شخصی
    } else if (openModal === 'editBank') {
      // ذخیره اطلاعات بانکی
    }
    handleCloseModal();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // کامپوننت‌های مودال
  const renderModals = () => (
    <>
      {/* مودال ویرایش شماره موبایل */}
      <Dialog open={openModal === 'editPhone'} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogTitle>{t('newprofile.profile.modals.editPhone.title')}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {t('newprofile.profile.modals.editPhone.description')}
          </Typography>
          <TextField
            fullWidth
            label={t('newprofile.profile.fields.mobile')}
            value={formData.mobile || ''}
            onChange={(e) => handleInputChange('mobile', e.target.value)}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>{t('newprofile.profile.actions.close')}</Button>
          <Button onClick={handleSave} variant="contained">
            {t('newprofile.profile.actions.save')}
          </Button>
        </DialogActions>
      </Dialog>

      {/* مودال ویرایش ایمیل */}
      <Dialog open={openModal === 'editEmail'} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogTitle>{t('newprofile.profile.modals.editEmail.title')}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {t('newprofile.profile.modals.editEmail.description')}
          </Typography>
          <TextField
            fullWidth
            label={t('newprofile.profile.fields.email')}
            value={formData.email || ''}
            onChange={(e) => handleInputChange('email', e.target.value)}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>{t('newprofile.profile.actions.close')}</Button>
          <Button onClick={handleSave} variant="contained">
            {t('newprofile.profile.actions.save')}
          </Button>
        </DialogActions>
      </Dialog>

      {/* مودال ویرایش رمز عبور */}
      <Dialog open={openModal === 'editPassword'} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogTitle>{t('newprofile.profile.modals.editPassword.title')}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {t('newprofile.profile.modals.editPassword.description')}
          </Typography>
          <TextField
            fullWidth
            type="password"
            label={t('newprofile.profile.modals.editPassword.currentPassword')}
            sx={{ mb: 2 }}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="password"
                label={t('newprofile.profile.modals.editPassword.newPassword')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="password"
                label={t('newprofile.profile.modals.editPassword.confirmPassword')}
              />
            </Grid>
          </Grid>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
            {t('newprofile.profile.modals.editPassword.passwordHint')}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>{t('newprofile.profile.actions.close')}</Button>
          <Button onClick={handleSave} variant="contained">
            {t('newprofile.profile.actions.save')}
          </Button>
        </DialogActions>
      </Dialog>

      {/* مودال ویرایش اطلاعات شخصی */}
      <Dialog open={openModal === 'editPersonal'} onClose={handleCloseModal} maxWidth="md" fullWidth>
        <DialogTitle>{t('newprofile.profile.modals.editPersonal.title')}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('newprofile.profile.modals.editPersonal.firstName')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('newprofile.profile.modals.editPersonal.lastName')}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {t('newprofile.profile.modals.editPersonal.birthDate')}
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <TextField fullWidth placeholder="روز" />
                </Grid>
                <Grid item xs={4}>
                  <TextField fullWidth placeholder="ماه" />
                </Grid>
                <Grid item xs={4}>
                  <TextField fullWidth placeholder="سال" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>{t('newprofile.profile.modals.editPersonal.gender')}</InputLabel>
                <Select label={t('newprofile.profile.modals.editPersonal.gender')}>
                  <MenuItem value="">
                    {t('newprofile.profile.modals.editPersonal.selectGender')}
                  </MenuItem>
                  <MenuItem value="male">
                    {t('newprofile.profile.modals.editPersonal.male')}
                  </MenuItem>
                  <MenuItem value="female">
                    {t('newprofile.profile.modals.editPersonal.female')}
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('newprofile.profile.modals.editPersonal.nationalId')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('newprofile.profile.modals.editPersonal.emergencyNumber')}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>{t('newprofile.profile.actions.close')}</Button>
          <Button onClick={handleSave} variant="contained">
            {t('newprofile.profile.actions.save')}
          </Button>
        </DialogActions>
      </Dialog>

      {/* مودال ویرایش اطلاعات بانکی */}
      <Dialog open={openModal === 'editBank'} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogTitle>{t('newprofile.profile.modals.editBank.title')}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {t('newprofile.profile.modals.editBank.description')}
          </Typography>
          <TextField
            fullWidth
            label={t('newprofile.profile.modals.editBank.sheba')}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label={t('newprofile.profile.modals.editBank.accountNumber')}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label={t('newprofile.profile.modals.editBank.cardNumber')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>{t('newprofile.profile.actions.close')}</Button>
          <Button onClick={handleSave} variant="contained">
            {t('newprofile.profile.actions.save')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );

  return (
    <Box>
      {/* Language Selector */}
      {/* <Box sx={{ backgroundColor: 'grey.100', py: 1 }}>
        <Container>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
            <LanguageIcon sx={{ fontSize: 20, color: 'primary.main' }} />
            <Typography variant="body2" color="text.secondary">
              زبان / Language:
            </Typography>
            {languages.map((lang) => (
              <Button
                key={lang.code}
                size="small"
                variant={i18n.language === lang.code ? "contained" : "outlined"}
                onClick={() => handleLanguageChange(lang.code)}
                sx={{ 
                  minWidth: 'auto',
                  fontSize: '0.75rem',
                  px: 1,
                  mx: 0.5
                }}
              >
                {lang.name}
              </Button>
            ))}
          </Box>
        </Container>
      </Box> */}

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
                    icon={<CheckIcon />}
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
                  {userData.fullName}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {userData.mobile}
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
                          {userData.balance.toLocaleString()}
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
            {/* Account Information Section */}
            <Card sx={{ mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <PersonIcon color="primary" />
                  <Typography variant="h6" fontWeight="bold">
                    {t('newprofile.profile.sections.accountInfo')}
                  </Typography>
                </Box>

                {/* Mobile Number */}
                <Box sx={{ mb: 3 }}>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography color="text.secondary">
                          {t('newprofile.profile.fields.mobile')}
                        </Typography>
                        <Typography fontWeight="bold">
                          {userData.mobile}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Chip
                        icon={<CheckIcon />}
                        label={t('newprofile.profile.verified')}
                        color="success"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Button
                        startIcon={<EditIcon />}
                        onClick={() => handleOpenModal('editPhone')}
                        color="info"
                        size="small"
                      >
                        {t('newprofile.profile.actions.edit')}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>

                {/* Email */}
                <Box sx={{ mb: 3 }}>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography color="text.secondary">
                          {t('newprofile.profile.fields.email')}
                        </Typography>
                        <Typography fontWeight="bold">
                          {userData.email}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      {/* Empty space for alignment */}
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Button
                        startIcon={<EditIcon />}
                        onClick={() => handleOpenModal('editEmail')}
                        color="info"
                        size="small"
                      >
                        {t('newprofile.profile.actions.edit')}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>

                {/* Password */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    startIcon={<KeyIcon />}
                    onClick={() => handleOpenModal('editPassword')}
                    variant="outlined"
                    color="info"
                  >
                    {t('newprofile.profile.actions.editPassword')}
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* Personal Information Section */}
            <Card sx={{ mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PersonIcon color="primary" />
                    <Typography variant="h6" fontWeight="bold">
                      {t('newprofile.profile.sections.personalInfo')}
                    </Typography>
                  </Box>
                  <Button
                    startIcon={<EditIcon />}
                    onClick={() => handleOpenModal('editPersonal')}
                    color="info"
                  >
                    {t('newprofile.profile.actions.editInfo')}
                  </Button>
                </Box>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">
                        {t('newprofile.profile.fields.fullName')}
                      </Typography>
                      <Typography fontWeight="bold">
                        {userData.fullName}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">
                        {t('newprofile.profile.fields.nationalId')}
                      </Typography>
                      <Typography fontWeight="bold">
                        {userData.nationalId}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">
                        {t('newprofile.profile.fields.emergencyContact')}
                      </Typography>
                      <Typography fontWeight="bold">
                        {userData.emergencyContact}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">
                        {t('newprofile.profile.fields.birthDate')}
                      </Typography>
                      <Typography fontWeight="bold">
                        {userData.birthDate}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Bank Information Section */}
            <Card>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <BankIcon color="primary" />
                    <Typography variant="h6" fontWeight="bold">
                      {t('newprofile.profile.sections.bankInfo')}
                    </Typography>
                  </Box>
                  <Button
                    startIcon={<EditIcon />}
                    onClick={() => handleOpenModal('editBank')}
                    color="info"
                  >
                    {t('newprofile.profile.actions.editInfo')}
                  </Button>
                </Box>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">
                        {t('newprofile.profile.fields.sheba')}
                      </Typography>
                      <Typography fontWeight="bold">
                        {userData.sheba}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">
                        {t('newprofile.profile.fields.accountNumber')}
                      </Typography>
                      <Typography fontWeight="bold">
                        {userData.accountNumber}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">
                        {t('newprofile.profile.fields.cardNumber')}
                      </Typography>
                      <Typography fontWeight="bold">
                        {userData.cardNumber}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Render Modals */}
      {renderModals()}
    </Box>
  );
};

export default ProfilePage;