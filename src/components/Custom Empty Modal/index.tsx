// import {Box, Button, Typography} from '@mui/material';
// import {useNavigate} from 'react-router-dom';
// import {CustomEmptyProps} from '../../types';

// const EmptyModal: React.FC<CustomEmptyProps> = props => {
//   const navigate = useNavigate();
//   const GoHome = () => {
//     navigate('/');
//   };
//   return (
//     <>
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           flexDirection: {xs: 'column'},
//           paddingTop: '20px',
//           paddingRight: '30px',
//         }}
//       >
//         <Box>
//           <img src={props.img} alt="NotFound" height={314} width={420} />
//         </Box>
//         <Box
//           sx={{
//             marginLeft: '10px',
//             marginBottom: '15px',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: {xs: 'center'},
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: 'bold',
//             }}
//           >
//             {props.title}
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{
//               marginTop: '10px',
//               textAlign: {xs: 'center'},
//             }}
//           >
//             {props.description}
//           </Typography>
//           <Button
//             variant="contained"
//             sx={{
//               marginTop: '30px',
//             }}
//             onClick={() => {
//               GoHome();
//             }}
//           >
//             Go to home
//           </Button>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default EmptyModal;


import {Box, Button, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {CustomEmptyProps} from '../../types';
import { useTranslation } from 'react-i18next';

const EmptyModal: React.FC<CustomEmptyProps> = props => {
  const navigate = useNavigate();
  
  const GoHome = () => {
    navigate('/');
  };

  // متون برای زبان‌های مختلف
  const translations = {
    fa: {
      title: 'به زودی ',
      description: 'لطفا منتظر رونمایی این صفحه باشید',
      button: 'برو به صفحه اصلی'
    },
    en: {
      title: 'Coming Soon',
      description: 'Please wait for this page to be launched',
      button: 'Go to home'
    },
    ar: {
      title: 'قريباً سيكون هذا القسم نشطاً',
      description: 'يرجى الانتظار لإطلاق هذه الصفحة',
      button: 'اذهب إلى الصفحة الرئيسية'
    },
    ps: {
      title: 'ډیر ژر به دا برخه فعاله شي',
      description: 'مهرباني وکړئ د دې پاڼې د پرانیستلو لپاره انتظار وکړئ',
      button: 'کور ته لاړ شه'
    },
    ru: {
      title: 'Скоро этот раздел будет активен',
      description: 'Пожалуйста, ждите запуска этой страницы',
      button: 'На главную'
    }
  };


    const { t, i18n } = useTranslation();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: {xs: 'column'},
          paddingTop: '20px',
          paddingRight: '30px',
        }}
      >
        <Box>
          <img src={props.img} alt="NotFound" height={314} width={420} />
        </Box>
        <Box
          sx={{
            marginLeft: '10px',
            marginBottom: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: {xs: 'center'},
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              direction: ['ar', 'fa','pa'].includes(i18n.language) ? 'rtl' : 'ltr',
            }}
          >
              {t('notfound.title')}
         
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginTop: '10px',
              textAlign: {xs: 'center'},
              direction: ['ar', 'fa','pa'].includes(i18n.language) ? 'rtl' : 'ltr',
            }}
          >
             {t('notfound.description')}
          
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: '30px',
            }}
            onClick={() => {
              GoHome();
            }}
          >
             {t('notfound.button')}
            
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EmptyModal;