// import { Box, Typography, Paper, Button, Divider, Chip, useMediaQuery } from '@mui/material';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import getTheme from '../../theme';
// import moment from 'moment-jalaali';

// const TicketDetail = () => {
//   const { t, i18n } = useTranslation();
//   const { state } = useLocation();
//   const ticket = state?.ticket;
//   const navigate = useNavigate();
//   const isRTL = ['fa', 'ar', 'pa'].includes(i18n.language);
//   const theme = getTheme(i18n.language);
//   const isMobile = useMediaQuery('(max-width:600px)');

//   // رنگ‌بندی
//   const primaryColor = '#01a693';
//   const primaryDark = '#018c7d';
//   const secondaryColor = '#333333';
//   const lightBg = '#f5f5f5';

//   if (!ticket) {
//     navigate('/tickets');
//     return null;
//   }

//   const formatDate = (dateString) => {
//     if (!dateString) return '-';
//     return isRTL 
//       ? moment(dateString).format('jYYYY/jMM/jDD')
//       : moment(dateString).format('YYYY/MM/DD');
//   };

//   const handlePrint = () => {
//     const printContent = document.getElementById('ticket-content').innerHTML;
//     const originalContent = document.body.innerHTML;
    
//     document.body.innerHTML = printContent;
//     window.print();
//     document.body.innerHTML = originalContent;
//     window.location.reload();
//   };

//   const formatPrice = (price) => {
//     if (!price) return '0';
//     return new Intl.NumberFormat(i18n.language === 'fa' ? 'fa-IR' : 'en-US').format(price);
//   };

//   // ترجمه وضعیت بلیط برای تمام زبان‌ها
//   const getStatusTranslation = (status) => {
//     switch(status) {
//       case '0': return t('ticket.status.reserved');
//       case '1': return t('ticket.status.cancelled');
//       case '2': return t('ticket.status.completed');
//       default: return t('ticket.status.unknown');
//     }
//   };

//   return (
//     <Box sx={{ p: isMobile ? 2 : 4, maxWidth: '90%', mx: 'auto' }}>
//       <Button 
//         variant="outlined" 
//         onClick={() => navigate('/tickets')}
//         sx={{ 
//           mb: 3, 
//           borderColor: primaryColor,
//           color: primaryColor,
//           '&:hover': { borderColor: primaryDark },
//           fontFamily: theme.typography.fontFamily
//         }}
//       >
//         {t('common.backToList')}
//       </Button>
      
//       {/* بلیط اصلی */}
//       <Paper id="ticket-content" elevation={3} sx={{ 
//         border: `3px solid ${primaryColor}`,
//         borderRadius: 2,
//         overflow: 'hidden',
//         position: 'relative',
//         '&:before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           [isRTL ? 'right' : 'left']: 0,
//           width: '100%',
//           height: '40px',
//           backgroundColor: primaryColor,
//         }
//       }}>
//         {/* هدر بلیط */}
//         <Box sx={{ 
//           p: 2, 
//           backgroundColor: primaryColor,
//           color: 'white',
//           textAlign: 'center'
//         }}>
//           <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: theme.typography.fontFamily }}>
//             {ticket.busDetail?.companyName || t('ticket.unknownCompany')}
//           </Typography>
//           <Typography variant="body1" sx={{ fontFamily: theme.typography.fontFamily }}>
//             {ticket.busDetail?.carType || t('ticket.unknownCarType')} • {ticket.busDetail?.description || ''}
//           </Typography>
//         </Box>
        
//         {/* بدنه بلیط */}
//         <Box sx={{ p: 3 }}>
//           {/* اطلاعات مسیر */}
//           <Box sx={{ 
//             display: 'flex', 
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             mb: 3,
//             flexDirection: isRTL ? 'row-reverse' : 'row'
//           }}>
//             <Box sx={{ textAlign: isRTL ? 'right' : 'left' }}>
//               <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: theme.typography.fontFamily }}>
//                 {ticket.busDetail?.originCity || t('ticket.unknownCity')}
//               </Typography>
//               <Typography variant="body1" sx={{ fontFamily: theme.typography.fontFamily }}>
//                 {ticket.busDetail?.originTerminal || ''}
//               </Typography>
//             </Box>
            
//             <Box sx={{ textAlign: 'center' }}>
//               <Typography variant="body1" sx={{ fontFamily: theme.typography.fontFamily }}>
//                 {formatDate(ticket.busDetail?.dateMove)}
//               </Typography>
//               <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: theme.typography.fontFamily }}>
//                 {ticket.busDetail?.timeMove || '--:--'}
//               </Typography>
//             </Box>
            
//             <Box sx={{ textAlign: isRTL ? 'left' : 'right' }}>
//               <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: theme.typography.fontFamily }}>
//                 {ticket.busDetail?.destinationCity || t('ticket.unknownCity')}
//               </Typography>
//               <Typography variant="body1" sx={{ fontFamily: theme.typography.fontFamily }}>
//                 {ticket.busDetail?.destinationTerminal || ''}
//               </Typography>
//             </Box>
//           </Box>
          
//           <Divider sx={{ my: 2, borderColor: primaryColor }} />
          
//           {/* اطلاعات مسافران */}
//           <Box sx={{ mb: 3 }}>
//             <Typography variant="h6" sx={{ 
//               mb: 1, 
//               color: primaryColor,
//               fontFamily: theme.typography.fontFamily
//             }}>
//               {t('ticket.passengers')} ({ticket.passengers?.length || 0})
//             </Typography>
            
//             {ticket.passengers?.length > 0 ? (
//               ticket.passengers.map((passenger, index) => (
//                 <Box key={index} sx={{ 
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   mb: 1,
//                   flexDirection: isRTL ? 'row-reverse' : 'row'
//                 }}>
//                   <Typography sx={{ fontFamily: theme.typography.fontFamily }}>
//                     {passenger.firstName} {passenger.lastName} {passenger.nationalCode ? `(${passenger.nationalCode})` : ''}
//                   </Typography>
//                   <Typography sx={{ fontFamily: theme.typography.fontFamily }}>
//                     {t('ticket.seatNumber')}: {passenger.seatNumber || '-'}
//                   </Typography>
//                 </Box>
//               ))
//             ) : (
//               <Typography sx={{ fontFamily: theme.typography.fontFamily, color: secondaryColor }}>
//                 {t('ticket.noPassengers')}
//               </Typography>
//             )}
//           </Box>
          
//           {/* اطلاعات پرداخت */}
//           <Box sx={{ 
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             flexDirection: isRTL ? 'row-reverse' : 'row'
//           }}>
//             <Box>
//               <Typography variant="body2" sx={{ fontFamily: theme.typography.fontFamily }}>
//                 {t('ticket.ticketNumber')}: {ticket.ticketNumber || '-'}
//               </Typography>
//               <Typography variant="body2" sx={{ fontFamily: theme.typography.fontFamily }}>
//                 {t('ticket.reservationNumber')}: {ticket.requestNumber || '-'}
//               </Typography>
//             </Box>
            
//             <Box sx={{ textAlign: isRTL ? 'left' : 'right' }}>
//               <Typography variant="h5" sx={{ 
//                 fontWeight: 'bold',
//                 color: primaryColor,
//                 fontFamily: theme.typography.fontFamily
//               }}>
//                 {formatPrice(ticket.price)} {t('common.currency')}
//               </Typography>
//               <Chip 
//                 label={getStatusTranslation(ticket.status)} 
//                 sx={{ 
//                   backgroundColor: ticket.status === '0' ? primaryColor : 
//                                  ticket.status === '1' ? '#f44336' : '#4caf50',
//                   color: 'white',
//                   fontWeight: 'bold',
//                   fontFamily: theme.typography.fontFamily
//                 }} 
//               />
//             </Box>
//           </Box>
//         </Box>
//       </Paper>
      
//       {/* دکمه‌های اقدام */}
//       <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
//         <Button 
//           variant="contained" 
//           sx={{ 
//             bgcolor: primaryColor,
//             '&:hover': { bgcolor: primaryDark },
//             fontFamily: theme.typography.fontFamily
//           }}
//           onClick={handlePrint}
//         >
//           {t('ticket.downloadPdf')}
//         </Button>
       
//       </Box>

//        <style>
//         {`
//           @media print {
//             body * {
//               visibility: hidden;
//             }
//             #ticket-content, #ticket-content * {
//               visibility: visible;
//             }
//             #ticket-content {
//               position: absolute;
//               left: 0;
//               top: 0;
//               width: 100%;
//               border: none !important;
//             }
//             #ticket-content:before, #ticket-content:after {
//               display: none;
//             }
//           }
//         `}
//       </style>
//     </Box>
//   );
// };

// export default TicketDetail;

import { Box, Typography, Paper, Button, Divider, Chip, useMediaQuery } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import getTheme from '../../theme';
import moment from 'moment-jalaali';

const TicketDetail = () => {
  const { t, i18n } = useTranslation();
  const { state } = useLocation();
  const ticket = state?.ticket;
  const navigate = useNavigate();
  const isRTL = ['fa', 'ar', 'pa'].includes(i18n.language);
  const theme = getTheme(i18n.language);
  const isMobile = useMediaQuery('(max-width:600px)');

  // رنگ‌بندی
  const primaryColor = '#01a693';
  const primaryDark = '#018c7d';
  const secondaryColor = '#333333';
  const lightBg = '#f5f5f5';

  if (!ticket) {
    navigate('/tickets');
    return null;
  }

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return isRTL 
      ? moment(dateString).format('jYYYY/jMM/jDD HH:mm')
      : moment(dateString).format('YYYY/MM/DD HH:mm');
  };

  const handlePrint = () => {
    const printContent = document.getElementById('print-area').innerHTML;
    const originalContent = document.body.innerHTML;
    
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
  };

  const formatPrice = (price) => {
    if (!price) return '0';
    return new Intl.NumberFormat(i18n.language === 'fa' ? 'fa-IR' : 'en-US').format(price);
  };

  const getStatusTranslation = (status) => {
    switch(status) {
      case '0': return t('ticket.status.reserved');
      case '1': return t('ticket.status.cancelled');
      case '2': return t('ticket.status.completed');
      default: return t('ticket.status.unknown');
    }
  };

  return (
    <Box sx={{ p: isMobile ? 2 : 4, maxWidth: '90%', mx: 'auto' }}>
      {/* بخش نمایش اصلی (بدون تغییر) */}
      {/* <Button 
        variant="outlined" 
        onClick={() => navigate('/tickets')}
        sx={{ 
          mb: 3, 
          borderColor: primaryColor,
          color: primaryColor,
          '&:hover': { borderColor: primaryDark },
          fontFamily: theme.typography.fontFamily
        }}
      >
        {t('common.backToList')}
      </Button> */}
      
      <Paper id="ticket-content" elevation={3} sx={{ 
        border: `3px solid ${primaryColor}`,
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          [isRTL ? 'right' : 'left']: 0,
          width: '100%',
          height: '40px',
          backgroundColor: primaryColor,
        }
      }}>
        {/* هدر بلیط */}
        <Box sx={{ 
          p: 2, 
          backgroundColor: primaryColor,
          color: 'white',
          textAlign: 'center'
        }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: theme.typography.fontFamily }}>
            {ticket.busDetail?.companyName || t('ticket.unknownCompany')}
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: theme.typography.fontFamily }}>
            {ticket.busDetail?.carType || t('ticket.unknownCarType')} • {ticket.busDetail?.description || ''}
          </Typography>
        </Box>
        
        {/* بدنه بلیط */}
        <Box sx={{ p: 3 }}>
          {/* اطلاعات مسیر */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
            flexDirection: isRTL ? 'row-reverse' : 'row'
          }}>
            <Box sx={{ textAlign: isRTL ? 'right' : 'left' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: theme.typography.fontFamily }}>
                {ticket.busDetail?.originCity || t('ticket.unknownCity')}
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: theme.typography.fontFamily }}>
                {ticket.busDetail?.originTerminal || ''}
              </Typography>
            </Box>
            
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body1" sx={{ fontFamily: theme.typography.fontFamily }}>
                {formatDate(ticket.busDetail?.dateMove)}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: theme.typography.fontFamily }}>
                {ticket.busDetail?.timeMove || '--:--'}
              </Typography>
            </Box>
            
            <Box sx={{ textAlign: isRTL ? 'left' : 'right' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: theme.typography.fontFamily }}>
                {ticket.busDetail?.destinationCity || t('ticket.unknownCity')}
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: theme.typography.fontFamily }}>
                {ticket.busDetail?.destinationTerminal || ''}
              </Typography>
            </Box>
          </Box>
          
          <Divider sx={{ my: 2, borderColor: primaryColor }} />
          
          {/* اطلاعات مسافران */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ 
              mb: 1, 
              color: primaryColor,
              fontFamily: theme.typography.fontFamily
            }}>
              {t('ticket.passengers')} ({ticket.passengers?.length || 0})
            </Typography>
            
            {ticket.passengers?.length > 0 ? (
              ticket.passengers.map((passenger, index) => (
                <Box key={index} sx={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 1,
                  flexDirection: isRTL ? 'row-reverse' : 'row'
                }}>
                  <Typography sx={{ fontFamily: theme.typography.fontFamily }}>
                    {passenger.firstName} {passenger.lastName} {passenger.nationalCode ? `(${passenger.nationalCode})` : ''}
                  </Typography>
                  <Typography sx={{ fontFamily: theme.typography.fontFamily }}>
                    {t('ticket.seatNumber')}: {passenger.seatNumber || '-'}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography sx={{ fontFamily: theme.typography.fontFamily, color: secondaryColor }}>
                {t('ticket.noPassengers')}
              </Typography>
            )}
          </Box>
          
          {/* اطلاعات پرداخت */}
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: isRTL ? 'row-reverse' : 'row'
          }}>
            <Box>
              <Typography variant="body2" sx={{ fontFamily: theme.typography.fontFamily }}>
                {t('ticket.ticketNumber')}: {ticket.ticketNumber || '-'}
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: theme.typography.fontFamily }}>
                {t('ticket.reservationNumber')}: {ticket.requestNumber || '-'}
              </Typography>
            </Box>
            
            <Box sx={{ textAlign: isRTL ? 'left' : 'right' }}>
              <Typography variant="h5" sx={{ 
                fontWeight: 'bold',
                color: primaryColor,
                fontFamily: theme.typography.fontFamily
              }}>
                {formatPrice(ticket.price)} {t('common.currency')}
              </Typography>
              <Chip 
                label={getStatusTranslation(ticket.status)} 
                sx={{ 
                  backgroundColor: ticket.status === '0' ? primaryColor : 
                                 ticket.status === '1' ? '#f44336' : '#4caf50',
                  color: 'white',
                  fontWeight: 'bold',
                  fontFamily: theme.typography.fontFamily
                }} 
              />
            </Box>
          </Box>
        </Box>
      </Paper>
      
      {/* دکمه‌های اقدام */}
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button 
          variant="contained" 
          sx={{ 
            bgcolor: primaryColor,
            '&:hover': { bgcolor: primaryDark },
            fontFamily: theme.typography.fontFamily
          }}
          onClick={handlePrint}
        >
          {t('ticket.downloadPdf')}
        </Button>
      </Box>

      {/* بخش چاپ دو تیکه (مخفی در حالت عادی) */}
      <div id="print-area" style={{ display: 'none' }}>
        <Box sx={{ 
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto',
          fontFamily: theme.typography.fontFamily,
          direction: isRTL ? 'rtl' : 'ltr'
        }}>
          {/* بخش اول بلیط */}
          <Box sx={{ 
            p: 3,
            border: '2px dashed #ccc',
            borderBottom: 'none',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px'
          }}>
            <Typography variant="h4" sx={{ 
              fontWeight: 'bold', 
              textAlign: 'center',
              mb: 2,
              color: primaryColor
            }}>
              {ticket.busDetail?.companyName || t('ticket.unknownCompany')}
            </Typography>
            
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3
            }}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {ticket.busDetail?.originCity || t('ticket.unknownCity')}
                </Typography>
                <Typography variant="body1">
                  {ticket.busDetail?.originTerminal || ''}
                </Typography>
              </Box>
              
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body1">
                  {formatDate(ticket.busDetail?.dateMove)}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {ticket.busDetail?.timeMove || '--:--'}
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {ticket.busDetail?.destinationCity || t('ticket.unknownCity')}
                </Typography>
                <Typography variant="body1">
                  {ticket.busDetail?.destinationTerminal || ''}
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {t('ticket.passengers')} ({ticket.passengers?.length || 0})
              </Typography>
              
              {ticket.passengers?.map((passenger, index) => (
                <Box key={index} sx={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 1
                }}>
                  <Typography>
                    {passenger.firstName} {passenger.lastName}
                    {passenger.nationalCode && ` (${passenger.nationalCode})`}
                  </Typography>
                  <Typography>
                    {t('ticket.seatNumber')}: {passenger.seatNumber || '-'}
                  </Typography>
                </Box>
              ))}
            </Box>
            
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'space-between',
              mt: 3
            }}>
              <Typography variant="body1">
                {t('ticket.ticketNumber')}: {ticket.ticketNumber || '-'}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {formatPrice(ticket.price)} {t('common.currency')}
              </Typography>
            </Box>
          </Box>
          
          {/* بخش دوم بلیط */}
          <Box sx={{ 
            p: 3,
            border: '2px dashed #ccc',
            borderTop: 'none',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px'
          }}>
            <Typography variant="body1" sx={{ 
              textAlign: 'center',
              fontStyle: 'italic',
              mb: 2,
              color: '#555'
            }}>
              کلان از ابتدا تا انتهای مسیر، همراه شماست.
            </Typography>
            
            <Box sx={{ 
              backgroundColor: '#f9f9f9',
              p: 2,
              borderRadius: 1,
              mb: 2
            }}>
              <Typography variant="body2">
                قوانین حمل بار: میزان بار مجاز برای سفرهای داخلی 20 کیلوگرم و برای سفرهای خارجی 30 کیلوگرم است.
                لطفاً در رعایت این محدودیت همکاری فرمایید.
              </Typography>
            </Box>
            
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'space-between',
              mt: 2
            }}>
              <Typography variant="body2">
                شماره تماس: {ticket.busDetail?.companyPhone || '---'}
              </Typography>
              <Typography variant="body2">
                شناسه خرید: {ticket.requestNumber || '-'}
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>

      {/* استایل برای چاپ */}
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #print-area, #print-area * {
              visibility: visible;
            }
            #print-area {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              padding: 20px;
              background: white;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default TicketDetail;