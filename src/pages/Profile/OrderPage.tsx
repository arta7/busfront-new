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
  Chip,
  useTheme,
  useMediaQuery,
  Paper,
  Divider,
  TextField,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Breadcrumbs,
  Link,
  Stepper,
  Step,
  StepLabel,
  StepConnector
} from '@mui/material';
import {
  Check as CheckIcon,
  Groups as GroupsIcon,
  Description as DescriptionIcon,
  ConfirmationNumber as ConfirmationNumberIcon,
  CreditCard as CreditCardIcon,
  Flight as FlightIcon,
  Add as AddIcon,
  Person as PersonIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface Passenger {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  nationalId: string;
  birthDate: {
    day: string;
    month: string;
    year: string;
  };
  documentType: 'nationalId' | 'passport';
  type: 'adult' | 'child' | 'infant';
}

const OrderPage: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [passengers, setPassengers] = useState<Passenger[]>([
    {
      id: '1',
      firstName: '',
      lastName: '',
      gender: '',
      nationalId: '',
      birthDate: { day: '', month: '', year: '' },
      documentType: 'nationalId',
      type: 'adult'
    }
  ]);

  const [selectedPassengerType, setSelectedPassengerType] = useState<'nationalId' | 'passport'>('nationalId');
  const [selectPassengerModalOpen, setSelectPassengerModalOpen] = useState(false);
  const [newPassengerModalOpen, setNewPassengerModalOpen] = useState(false);

  const flightDetails = {
    company: t('newprofile.order.flight.company'),
    type: t('newprofile.order.flight.type'),
    class: t('newprofile.order.flight.class'),
    aircraft: t('newprofile.order.flight.aircraft'),
    from: t('newprofile.order.flight.from'),
    to: t('newprofile.order.flight.to'),
    departureTime: t('newprofile.order.flight.departureTime'),
    arrivalTime: t('newprofile.order.flight.arrivalTime'),
    date: t('newprofile.order.flight.date'),
    direction: t('newprofile.order.flight.direction'),
    adultPrice: 2100000,
    totalPrice: 2100000
  };

  const steps = [
    { label: t('newprofile.order.steps.selectFlight'), icon: <CheckIcon />, completed: true },
    { label: t('newprofile.order.steps.passengerDetails'), icon: <GroupsIcon />, active: true },
    { label: t('newprofile.order.steps.travelServices'), icon: <DescriptionIcon /> },
    { label: t('newprofile.order.steps.confirmInfo'), icon: <CheckIcon /> },
    { label: t('newprofile.order.steps.payment'), icon: <CreditCardIcon /> },
    { label: t('newprofile.order.steps.ticketIssuance'), icon: <ConfirmationNumberIcon /> }
  ];

  const previousPassengers = [
    {
      id: '1',
      name: t('newprofile.order.previousPassengers.sampleName'),
      nationalId: t('newprofile.order.previousPassengers.sampleNationalId'),
      birthDate: t('newprofile.order.previousPassengers.sampleBirthDate')
    }
  ];

  const handlePassengerChange = (index: number, field: string, value: string) => {
    const updatedPassengers = [...passengers];
    if (field.includes('birthDate.')) {
      const dateField = field.split('.')[1] as keyof typeof updatedPassengers[0]['birthDate'];
      updatedPassengers[index].birthDate[dateField] = value;
    } else {
      (updatedPassengers[index] as any)[field] = value;
    }
    setPassengers(updatedPassengers);
  };

  const handleAddPassenger = () => {
    setPassengers([
      ...passengers,
      {
        id: Date.now().toString(),
        firstName: '',
        lastName: '',
        gender: '',
        nationalId: '',
        birthDate: { day: '', month: '', year: '' },
        documentType: 'nationalId',
        type: 'adult'
      }
    ]);
  };

  const handleSelectPreviousPassenger = (passenger: any) => {
    console.log('Selected passenger:', passenger);
    setSelectPassengerModalOpen(false);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  const CustomStepConnector = () => (
    <StepConnector
      sx={{
        '& .MuiStepConnector-line': {
          borderColor: 'divider',
          borderTopWidth: 2,
          margin: '0 8px'
        }
      }}
    />
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Breadcrumb Stepper */}
      <Paper 
        elevation={0} 
        sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          bgcolor: 'background.paper'
        }}
      >
        <Container maxWidth="lg">
          <Stepper 
            alternativeLabel 
            activeStep={1}
            connector={<CustomStepConnector />}
            sx={{ py: 2 }}
          >
            {steps.map((step, index) => (
              <Step key={step.label} completed={step.completed}>
                <StepLabel
                  StepIconComponent={() => (
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: step.completed ? 'primary.main' : step.active ? 'primary.main' : 'grey.300',
                        color: step.completed || step.active ? 'white' : 'grey.500',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem'
                      }}
                    >
                      {step.icon}
                    </Box>
                  )}
                >
                  <Typography 
                    variant="body2" 
                    fontWeight={step.active ? 'bold' : 'normal'}
                    color={step.active ? 'primary.main' : 'text.secondary'}
                  >
                    {step.label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <form>
          {/* Flight Summary */}
          <Card sx={{ mb: 3 }}>
            <CardContent sx={{ p: 0 }}>
              <Grid container>
                <Grid item xs={12} md={10}>
                  <Box sx={{ p: 4 }}>
                    {/* Badge & Date */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mb: 4 }}>
                      <Chip
                        icon={<ArrowBackIcon />}
                        label={flightDetails.direction}
                        color="info"
                        variant="filled"
                        size="small"
                      />
                      <Typography variant="h6" fontWeight="bold">
                        {flightDetails.date}
                      </Typography>
                    </Box>

                    {/* Flight Details */}
                    <Grid container alignItems="center">
                      {/* Airline Logo */}
                      <Grid item xs={4} md={2}>
                        <Box 
                          sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            gap: 3,
                            borderRight: 2,
                            borderColor: 'divider',
                            py: 1
                          }}
                        >
                          <Box
                            component="img"
                            src="/img/pages/search/logos/taban-sm.png"
                            alt={flightDetails.company}
                            sx={{ width: 50, height: 50 }}
                          />
                          <Typography variant="h6">
                            {flightDetails.company}
                          </Typography>
                        </Box>
                      </Grid>

                      {/* Flight Info */}
                      <Grid item xs={8} md={10}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          {/* Badges */}
                          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            <Chip label={flightDetails.type} variant="outlined" size="small" />
                            <Chip label={flightDetails.class} variant="outlined" size="small" />
                            <Chip label={flightDetails.aircraft} variant="outlined" size="small" />
                          </Box>

                          {/* Route and Times */}
                          <Grid container alignItems="center">
                            <Grid item xs={4} md="auto">
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="h5" fontWeight="bold">
                                  {flightDetails.departureTime}
                                </Typography>
                                {!isMobile && (
                                  <Typography variant="h6">
                                    {flightDetails.from}
                                  </Typography>
                                )}
                              </Box>
                            </Grid>

                            {/* Path Visualizer */}
                            <Grid item xs={4}>
                              <Box sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                position: 'relative',
                                height: 40
                              }}>
                                <Box 
                                  sx={{ 
                                    position: 'absolute',
                                    top: '50%',
                                    left: 0,
                                    right: 0,
                                    height: 2,
                                    bgcolor: 'divider',
                                    transform: 'translateY(-50%)'
                                  }} 
                                />
                                <FlightIcon 
                                  sx={{ 
                                    color: 'text.secondary',
                                    fontSize: 20,
                                    position: 'relative',
                                    zIndex: 1,
                                    bgcolor: 'background.default',
                                    p: 0.5
                                  }} 
                                />
                              </Box>
                            </Grid>

                            <Grid item xs={4} md="auto">
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'flex-end' }}>
                                <Typography variant="h5" fontWeight="bold">
                                  {flightDetails.arrivalTime}
                                </Typography>
                                {!isMobile && (
                                  <Typography variant="h6">
                                    {flightDetails.to}
                                  </Typography>
                                )}
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                {/* Price Summary */}
                <Grid item xs={12} md={2}>
                  <Box 
                    sx={{ 
                      height: '100%',
                      bgcolor: 'grey.50',
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Box sx={{ flexGrow: 1, mb: 3 }}>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{ borderWidth: 2 }}
                      >
                        {t('newprofile.order.flight.changeTicket')}
                      </Button>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                          {t('newprofile.order.pricing.adult')}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Typography variant="body1">
                            {formatPrice(flightDetails.adultPrice)}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {t('newprofile.common.currency')}
                          </Typography>
                        </Box>
                      </Box>

                      <Divider />

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                          {t('newprofile.order.pricing.total')}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Typography variant="h6" fontWeight="bold">
                            {formatPrice(flightDetails.totalPrice)}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {t('newprofile.common.currency')}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Passenger Details */}
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                <GroupsIcon />
                {t('newprofile.order.passengerDetails.title')}
              </Typography>

              {passengers.map((passenger, index) => (
                <Box key={passenger.id} sx={{ mb: 4 }}>
                  {/* Passenger Header */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Chip 
                        label={t('newprofile.order.passengerDetails.adult')} 
                        variant="outlined" 
                      />
                      <FormControl component="fieldset">
                        <RadioGroup
                          row
                          value={selectedPassengerType}
                          onChange={(e) => setSelectedPassengerType(e.target.value as 'nationalId' | 'passport')}
                        >
                          <FormControlLabel 
                            value="nationalId" 
                            control={<Radio />} 
                            label={t('newprofile.order.passengerDetails.nationalId')} 
                          />
                          <FormControlLabel 
                            value="passport" 
                            control={<Radio />} 
                            label={t('newprofile.order.passengerDetails.passport')} 
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>

                    <Button
                      variant="text"
                      color="secondary"
                      startIcon={<PersonIcon />}
                      onClick={() => setSelectPassengerModalOpen(true)}
                    >
                      {t('newprofile.order.passengerDetails.selectPreviousPassenger')}
                    </Button>
                  </Box>

                  {/* Passenger Form */}
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={3}>
                      <TextField
                        fullWidth
                        label={t('newprofile.order.passengerDetails.firstName')}
                        value={passenger.firstName}
                        onChange={(e) => handlePassengerChange(index, 'firstName', e.target.value)}
                        placeholder={t('newprofile.order.passengerDetails.firstName')}
                      />
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                      <TextField
                        fullWidth
                        label={t('newprofile.order.passengerDetails.lastName')}
                        value={passenger.lastName}
                        onChange={(e) => handlePassengerChange(index, 'lastName', e.target.value)}
                        placeholder={t('newprofile.order.passengerDetails.lastName')}
                      />
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                      <TextField
                        select
                        fullWidth
                        label={t('newprofile.order.passengerDetails.gender')}
                        value={passenger.gender}
                        onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
                      >
                        <MenuItem value="">
                          {t('newprofile.order.passengerDetails.selectGender')}
                        </MenuItem>
                        <MenuItem value="male">
                          {t('newprofile.order.passengerDetails.male')}
                        </MenuItem>
                        <MenuItem value="female">
                          {t('newprofile.order.passengerDetails.female')}
                        </MenuItem>
                      </TextField>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                      <TextField
                        fullWidth
                        label={t('newprofile.order.passengerDetails.nationalIdNumber')}
                        value={passenger.nationalId}
                        onChange={(e) => handlePassengerChange(index, 'nationalId', e.target.value)}
                        placeholder={t('newprofile.order.passengerDetails.nationalIdNumber')}
                      />
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                      <FormLabel component="legend">
                        {t('newprofile.order.passengerDetails.birthDate')}
                      </FormLabel>
                      <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                        <TextField
                          placeholder={t('newprofile.order.passengerDetails.day')}
                          value={passenger.birthDate.day}
                          onChange={(e) => handlePassengerChange(index, 'birthDate.day', e.target.value)}
                          sx={{ flex: 1 }}
                        />
                        <TextField
                          placeholder={t('newprofile.order.passengerDetails.month')}
                          value={passenger.birthDate.month}
                          onChange={(e) => handlePassengerChange(index, 'birthDate.month', e.target.value)}
                          sx={{ flex: 1 }}
                        />
                        <TextField
                          placeholder={t('newprofile.order.passengerDetails.year')}
                          value={passenger.birthDate.year}
                          onChange={(e) => handlePassengerChange(index, 'birthDate.year', e.target.value)}
                          sx={{ flex: 1 }}
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  {index === passengers.length - 1 && (
                    <Box sx={{ borderTop: 1, borderColor: 'divider', pt: 3, mt: 3 }}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<AddIcon />}
                        onClick={() => setNewPassengerModalOpen(true)}
                      >
                        {t('newprofile.order.passengerDetails.addNewPassenger')}
                      </Button>
                    </Box>
                  )}
                </Box>
              ))}
            </CardContent>
          </Card>
        </form>
      </Container>

      {/* Footer Action Bar */}
      <Paper 
        elevation={3}
        sx={{ 
          position: 'sticky',
          bottom: 0,
          zIndex: 1000,
          borderTop: 1,
          borderColor: 'divider'
        }}
      >
        <Container maxWidth="lg">
          <Grid container alignItems="center" sx={{ py: 3 }}>
            <Grid item xs={12} md>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {t('newprofile.order.footer.agreement', {
                  siteRules: t('newprofile.order.footer.siteRules'),
                  flightRules: t('newprofile.order.footer.flightRules')
                })}
                <Link href="#" underline="always" color="text.primary">
                  {t('newprofile.order.footer.siteRules')}
                </Link>
                و
                <Link href="#" underline="always" color="text.primary">
                  {t('newprofile.order.footer.flightRules')}
                </Link>
                موافقت کرده‌اید.
              </Typography>
            </Grid>

            <Grid item xs={12} md="auto">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'secondary.main' }}>
                  <Typography variant="h5" fontWeight="bold">
                    {formatPrice(flightDetails.totalPrice)}
                  </Typography>
                  <Typography>{t('newprofile.common.currency')}</Typography>
                </Box>

                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  href="/orders-recovery"
                >
                  {t('newprofile.order.footer.confirmAndContinue')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      {/* Select Previous Passenger Modal */}
      <Dialog 
        open={selectPassengerModalOpen} 
        onClose={() => setSelectPassengerModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {t('newprofile.order.previousPassengers.title')}
        </DialogTitle>
        <DialogContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'grey.50' }}>
                  <TableCell>{t('newprofile.order.previousPassengers.fullName')}</TableCell>
                  <TableCell>{t('newprofile.order.previousPassengers.nationalId')}</TableCell>
                  <TableCell>{t('newprofile.order.previousPassengers.birthDate')}</TableCell>
                  <TableCell align="center">{t('newprofile.common.actions')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {previousPassengers.map((passenger) => (
                  <TableRow key={passenger.id}>
                    <TableCell>
                      <Typography noWrap>
                        {passenger.name}
                      </Typography>
                    </TableCell>
                    <TableCell>{passenger.nationalId}</TableCell>
                    <TableCell>{passenger.birthDate}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        color="info"
                        size="small"
                        sx={{ borderWidth: 2 }}
                        onClick={() => handleSelectPreviousPassenger(passenger)}
                      >
                        {t('newprofile.order.previousPassengers.select')}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button 
            onClick={() => setSelectPassengerModalOpen(false)}
            variant="outlined"
          >
            {t('newprofile.common.close')}
          </Button>
          <Button variant="contained">
            {t('newprofile.common.submit')}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add New Passenger Modal */}
      <Dialog 
        open={newPassengerModalOpen} 
        onClose={() => setNewPassengerModalOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {t('newprofile.order.passengerDetails.addNewPassenger')}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('newprofile.order.passengerDetails.firstName')}
                placeholder={t('newprofile.order.passengerDetails.firstName')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('newprofile.order.passengerDetails.lastName')}
                placeholder={t('newprofile.order.passengerDetails.lastName')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label={t('newprofile.order.passengerDetails.gender')}
              >
                <MenuItem value="">
                  {t('newprofile.order.passengerDetails.selectGender')}
                </MenuItem>
                <MenuItem value="male">
                  {t('newprofile.order.passengerDetails.male')}
                </MenuItem>
                <MenuItem value="female">
                  {t('newprofile.order.passengerDetails.female')}
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('newprofile.order.passengerDetails.nationalIdNumber')}
                placeholder={t('newprofile.order.passengerDetails.nationalIdNumber')}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">
                {t('newprofile.order.passengerDetails.birthDate')}
              </FormLabel>
              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                <TextField 
                  placeholder={t('newprofile.order.passengerDetails.day')} 
                  sx={{ flex: 1 }} 
                />
                <TextField 
                  placeholder={t('newprofile.order.passengerDetails.month')} 
                  sx={{ flex: 1 }} 
                />
                <TextField 
                  placeholder={t('newprofile.order.passengerDetails.year')} 
                  sx={{ flex: 1 }} 
                />
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button 
            onClick={() => setNewPassengerModalOpen(false)}
            variant="outlined"
          >
            {t('newprofile.common.close')}
          </Button>
          <Button variant="contained">
            {t('newprofile.common.submit')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OrderPage;