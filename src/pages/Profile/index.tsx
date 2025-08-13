// import './animation.css';

// import {useTheme, Typography, styled, Box, Button} from '@mui/material';
// import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import {useState,useContext} from 'react';
// import {useAuthStore} from '../../store/authStore';
// import SchedulesByPassengerEmailClose from '../../components/TicketCardClose';
// import SchedulesByPassengerEmail from '../../components/TicketCard';
// import UserContext from './../..//UserContext';


// const ContainerMain = styled(Box)`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 1rem;

//   @media (max-width: 799px) {
//     align-items: center;
//   }

//   @media (min-width: 800px) {
//     align-items: start;
//     flex-direction: row;
//   }
// `;

// const ProfileSection = styled(Box)`
//   width: 90%;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   margin-bottom: 2rem;
//   margin-right: 2rem;

//   @media (min-width: 800px) {
//     max-width: 350px;
//     border-right: 2px solid #ddd;
//     padding: 1rem;
//     flex: 1;
//     margin-bottom: 0;
//   }
// `;

// const ProfileImage = styled(Box)`
//   display: grid;
//   place-items: center;
//   height: 150px;
//   width: 150px;
//   background: #f9f9f9;
//   border: 2px solid #e6e6e6;
//   border-radius: 100%;
//   margin: auto;
//   overflow: hidden;

//   @media (min-width: 200px) {
//     height: 170px;
//     width: 170px;
//   }

//   @media (min-width: 400px) {
//     height: 220px;
//     width: 220px;
//   }

//   @media (min-width: 800px) {
//     margin: 0;
//     height: 250px;
//     width: 250px;
//   }
// `;

// const EventBox = styled(Box)`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;

//   @media (min-width: 800px) {
//     width: calc(100% - 350px);
//     margin: 0;
//   }
// `;

// const FiltersBox = styled(Box)`
//   display: none;
//   width: 100%;
//   justify-content: space-between;
//   align-items: center;
//   marginbottom: 1rem;
//   gap: 5px;

//   @media (min-width: 800px) {
//     display: flex;
//   }
// `;

// const FilterButton = styled(Button)`
//   background: #f9f9f9;
//   border: 1px solid #e6e6e6;
//   color: #c6c6c6;
// `;

// const ProfilePage = () => {
//   const theme = useTheme();
//   const [currentTab, setCurrentTab] = useState<1 | 2>(1);
//    const { userData, setUserData } = useContext(UserContext);
//   const {user} = useAuthStore();
//   const [filter, setFilter] = useState<string>('all');
//   const handleFilterChange = (selectedFilter: string) => {
//     setFilter(selectedFilter);
//   };
//   const ActiveTabIndicator = styled(Box)`
//     position: absolute;
//     bottom: -3px;
//     width: 7.5rem;
//     height: 4px;
//     border-radius: 2px;
//     background: ${theme.palette.primary.main};
//   `;

//   return (
//     <ContainerMain>
//       <ProfileSection>
//         <ProfileImage>
//           <img
//             src={user?.picture}
//             alt="loading..."
//             height="100%"
//             width="100%"
//             style={{objectFit: 'cover'}}
//           />
//         </ProfileImage>
//         <Typography
//           variant="h2"
//           fontSize={{xs: '1rem', sm: '1.25rem', md: '1.5rem'}}
//           fontWeight={600}
//           marginTop="1.5rem"
//           color={theme.palette.primary.main}
//         >
//           Profile Details
//         </Typography>
//         <Box>
//           <Typography variant="h4" color="#c6c6c6" marginBottom="0" fontWeight={500}>
//             Name : 
//           </Typography>
//           <Typography variant="h5" marginBottom="1rem" fontWeight={500}>
//             {userData[0].Name ?? 'No Name ...'}
//           </Typography>
//           <Typography variant="h4" color="#c6c6c6" marginBottom="0" fontWeight={500}>
//             Mobile : 
//           </Typography>
//           <Typography variant="h5" marginBottom="1rem" fontWeight={500}>
//             {userData[0].Mobile ?? 'No Mobile No!!'}
//           </Typography>
//         </Box>
//         {/* <Typography
//           variant="body2"
//           color={theme.palette.secondary.light}
//           fontWeight={600}
//         >
//           Member Since, May 2022
//         </Typography> */}
//       </ProfileSection>
//       {/* <EventBox>
//         <Box
//           display="flex"
//           justifyContent="start"
//           alignItems="center"
//           marginBottom="0.5rem"
//           gap="2rem"
//           borderBottom="2px solid #000"
//           position="relative"
//         >
//           <ActiveTabIndicator
//             className={
//               currentTab === 2 ? 'animate-slide-right' : 'animate-slide-left'
//             }
//           />
//           <Typography
//             variant="h4"
//             fontWeight={600}
//             color={currentTab === 1 ? theme.palette.primary.main : '#000'}
//             paddingBottom="0.5rem"
//             onClick={() => {
//               setCurrentTab(1);
//             }}
//             style={{cursor: 'pointer'}}
//           >
//             Upcoming
//           </Typography> 
//            <Typography
//             variant="h4"
//             fontWeight={600}
//             color={currentTab === 2 ? theme.palette.primary.main : '#000'}
//             paddingBottom="0.5rem"
//             onClick={() => {
//               setCurrentTab(2);
//             }}
//             style={{cursor: 'pointer'}}
//           >
//             Completed
//           </Typography>
//           <Box margin="0 10px 0 auto">
//             <SearchOutlinedIcon
//               htmlColor="#000"
//               sx={{fontSize: '2.5rem'}}
//               style={{cursor: 'pointer'}}
//             />
//           </Box>
//         </Box>
//         <Box width="100%" height="100%">
//           {currentTab === 1 ? (
//             <Box>
//               <Box
//                 display="flex"
//                 justifyContent="center"
//                 gap="10px"
//                 width="100%"
//                 overflow="auto"
//               >
//                 <SchedulesByPassengerEmail email={user?.email || ''} />
//               </Box>
//             </Box>
//           ) : (
//             <Box>
//               <FiltersBox
//                 display="flex"
//                 width="100%"
//                 justifyContent="space-between"
//                 marginBottom="1rem"
//               >
//                 <Box display="flex" gap="5px" flexWrap="wrap">
//                   <FilterButton onClick={() => handleFilterChange('Last week')}>
//                     Last week
//                   </FilterButton>
//                   <FilterButton
//                     onClick={() => handleFilterChange('Last month')}
//                   >
//                     Last month
//                   </FilterButton>
//                   <FilterButton
//                     onClick={() => handleFilterChange('Last 3 months')}
//                   >
//                     Last 3 months
//                   </FilterButton>
//                   <FilterButton
//                     onClick={() => handleFilterChange('Last 6 months')}
//                   >
//                     Last 6 months
//                   </FilterButton>
//                 </Box>
//                 <Box>
//                   <FilterButton>
//                     <TuneOutlinedIcon sx={{fontSize: '1.5rem'}} />
//                   </FilterButton>
//                 </Box>
//               </FiltersBox>
//               <Box
//                 display="flex"
//                 justifyContent="center"
//                 gap="10px"
//                 width="100%"
//                 overflow="auto"
//               >
//                 <SchedulesByPassengerEmailClose
//                   email={user?.email || ''}
//                   filter={filter}
//                 />
//               </Box>
//             </Box>
//           )}
//         </Box>
//       </EventBox> */}
//     </ContainerMain>
//   );
// };

// export default ProfilePage;


// import './animation.css';
// import { useTheme, Typography, styled, Box, Button, useMediaQuery } from '@mui/material';
// import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import { useState, useContext } from 'react';
// import { useAuthStore } from '../../store/authStore';
// import SchedulesByPassengerEmailClose from '../../components/TicketCardClose';
// import SchedulesByPassengerEmail from '../../components/TicketCard';
// import UserContext from '../../UserContext';
// import { useTranslation } from 'react-i18next';
// import getTheme from '../../theme';

// const ContainerMain = styled(Box)(({ theme }) => ({
//   width: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '1rem',
//   [theme.breakpoints.up('md')]: {
//     alignItems: 'flex-start',
//     flexDirection: 'row',
//   },
// }));

// const ProfileSection = styled(Box)(({ theme }) => ({
//   width: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '1.5rem',
//   marginBottom: '2rem',
//   [theme.breakpoints.up('md')]: {
//     maxWidth: '350px',
//     borderRight: `2px solid ${theme.palette.divider}`,
//     paddingRight: '2rem',
//     marginRight: '2rem',
//     marginBottom: 0,
//   },
// }));

// const ProfileImage = styled(Box)(({ theme }) => ({
//   display: 'grid',
//   placeItems: 'center',
//   height: '150px',
//   width: '150px',
//   background: theme.palette.background.paper,
//   border: `2px solid ${theme.palette.divider}`,
//   borderRadius: '50%',
//   margin: '0 auto',
//   overflow: 'hidden',
//   [theme.breakpoints.up('sm')]: {
//     height: '170px',
//     width: '170px',
//   },
//   [theme.breakpoints.up('md')]: {
//     height: '200px',
//     width: '200px',
//     margin: 0,
//   },
// }));

// const EventBox = styled(Box)(({ theme }) => ({
//   width: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '1.5rem',
//   [theme.breakpoints.up('md')]: {
//     width: 'calc(100% - 350px)',
//   },
// }));

// const FiltersBox = styled(Box)(({ theme }) => ({
//   display: 'none',
//   width: '100%',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   marginBottom: '1rem',
//   gap: '0.5rem',
//   [theme.breakpoints.up('md')]: {
//     display: 'flex',
//   },
// }));

// const FilterButton = styled(Button)(({ theme }) => ({
//   background: theme.palette.background.paper,
//   border: `1px solid ${theme.palette.divider}`,
//   color: theme.palette.text.secondary,
//   textTransform: 'none',
//   borderRadius: '8px',
//   padding: '6px 12px',
// }));

// const ProfileDetailItem = ({ label, value }: { label: string; value: string }) => (
//   <Box>
//     <Typography variant="subtitle2" color="text.secondary" fontWeight={500}>
//       {label}
//     </Typography>
//     <Typography variant="body1" fontWeight={500}>
//       {value || `-`}
//     </Typography>
//   </Box>
// );

// const ProfilePage = () => {
//   const { t ,i18n } = useTranslation();
  
//  const theme = getTheme(i18n.language);
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   // const isRTL = useDirection(); // اگر از راست به چپ پشتیبانی می‌کنید
 
//   const [currentTab, setCurrentTab] = useState<1 | 2>(1);
//   const { userData, setUserData } = useContext(UserContext);
//   const { user } = useAuthStore();
//   const [filter, setFilter] = useState<string>('all');

//   const handleFilterChange = (selectedFilter: string) => {
//     setFilter(selectedFilter);
//   };

//   const ActiveTabIndicator = styled(Box)`
//     position: absolute;
//     bottom: -3px;
//     width: 7.5rem;
//     height: 4px;
//     border-radius: 2px;
//     background: ${theme.palette.primary.main};
//   `;

//   return (
//     // <ContainerMain>
//     //   <ProfileSection>
//     //     <ProfileImage>
//     //       <img
//     //         src={user?.picture}
//     //         alt={t('profileImageAlt')}
//     //         height="100%"
//     //         width="100%"
//     //         style={{ objectFit: 'cover' }}
//     //       />
//     //     </ProfileImage>
        
//     //     <Typography
//     //       variant="h5"
//     //       fontWeight={600}
//     //       color="primary"
//     //       sx={{ mt: { xs: 1, md: 2 }, textAlign: isMobile ? 'center' : 'left' }}
//     //     >
//     //       {t('profileDetails')}
//     //     </Typography>
        
//     //     <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//     //       <ProfileDetailItem 
//     //         label={t('name')} 
//     //         value={userData[0]?.Name || t('noName')} 
//     //       />
//     //       <ProfileDetailItem 
//     //         label={t('mobile')} 
//     //         value={userData[0]?.Mobile || t('noMobile')} 
//     //       />
//     //       <ProfileDetailItem 
//     //         label={t('email')} 
//     //         value={user?.email || t('noEmail')} 
//     //       />
//     //       {/* Add more profile details as needed */}
//     //     </Box>
//     //   </ProfileSection>

//     //   <EventBox>
//     //     <Box
//     //       sx={{
//     //         display: 'flex',
//     //         justifyContent: 'start',
//     //         alignItems: 'center',
//     //         mb: 1,
//     //         gap: 2,
//     //         borderBottom: `2px solid ${theme.palette.divider}`,
//     //         position: 'relative',
//     //       }}
//     //     >
//     //       <ActiveTabIndicator
//     //         className={
//     //           currentTab === 2 ? 'animate-slide-right' : 'animate-slide-left'
//     //         }
//     //       />
//     //       <Typography
//     //         variant={isMobile ? 'body1' : 'h6'}
//     //         fontWeight={600}
//     //         color={currentTab === 1 ? 'primary' : 'text.primary'}
//     //         sx={{ 
//     //           pb: 1,
//     //           cursor: 'pointer',
//     //           minWidth: '80px',
//     //           textAlign: 'center'
//     //         }}
//     //         onClick={() => setCurrentTab(1)}
//     //       >
//     //         {t('upcoming')}
//     //       </Typography>
//     //       <Typography
//     //         variant={isMobile ? 'body1' : 'h6'}
//     //         fontWeight={600}
//     //         color={currentTab === 2 ? 'primary' : 'text.primary'}
//     //         sx={{ 
//     //           pb: 1,
//     //           cursor: 'pointer',
//     //           minWidth: '80px',
//     //           textAlign: 'center'
//     //         }}
//     //         onClick={() => setCurrentTab(2)}
//     //       >
//     //         {t('completed')}
//     //       </Typography>
//     //       <Box sx={{ ml: 'auto' }}>
//     //         <SearchOutlinedIcon
//     //           color="action"
//     //           sx={{ fontSize: '1.8rem' }}
//     //           style={{ cursor: 'pointer' }}
//     //         />
//     //       </Box>
//     //     </Box>

//     //     <Box width="100%" height="100%">
//     //       {currentTab === 1 ? (
//     //         <Box>
//     //           <Box
//     //             sx={{
//     //               display: 'flex',
//     //               justifyContent: 'center',
//     //               gap: 2,
//     //               width: '100%',
//     //               overflow: 'auto',
//     //               p: 1
//     //             }}
//     //           >
//     //             <SchedulesByPassengerEmail email={user?.email || ''} />
//     //           </Box>
//     //         </Box>
//     //       ) : (
//     //         <Box>
//     //           <FiltersBox>
//     //             <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//     //               <FilterButton onClick={() => handleFilterChange('Last week')}>
//     //                 {t('filters.lastWeek')}
//     //               </FilterButton>
//     //               <FilterButton onClick={() => handleFilterChange('Last month')}>
//     //                 {t('filters.lastMonth')}
//     //               </FilterButton>
//     //               <FilterButton onClick={() => handleFilterChange('Last 3 months')}>
//     //                 {t('filters.last3Months')}
//     //               </FilterButton>
//     //               <FilterButton onClick={() => handleFilterChange('Last 6 months')}>
//     //                 {t('filters.last6Months')}
//     //               </FilterButton>
//     //             </Box>
//     //             <Box>
//     //               <FilterButton>
//     //                 <TuneOutlinedIcon sx={{ fontSize: '1.2rem' }} />
//     //               </FilterButton>
//     //             </Box>
//     //           </FiltersBox>
//     //           <Box
//     //             sx={{
//     //               display: 'flex',
//     //               justifyContent: 'center',
//     //               gap: 2,
//     //               width: '100%',
//     //               overflow: 'auto',
//     //               p: 1
//     //             }}
//     //           >
//     //             <SchedulesByPassengerEmailClose
//     //               email={user?.email || ''}
//     //               filter={filter}
//     //             />
//     //           </Box>
//     //         </Box>
//     //       )}
//     //     </Box>
//     //   </EventBox>
//     // </ContainerMain>
//      <ContainerMain sx={{ direction: ['en', 'ru'].includes(i18n.language)? 'rtl' : 'ltr' }} >
//       <ProfileSection>
//         <ProfileImage>
//           <img
//             src={user?.picture}
//             alt={t('profile.profileImageAlt')}
//             height="100%"
//             width="100%"
//             style={{ objectFit: 'cover' }}
//           />
//         </ProfileImage>
        
//         <Typography variant="h5" fontWeight={600} color="primary">
//           {t('profile.profileDetails')}
//         </Typography>
        
//         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//           <ProfileDetailItem 
//             label={t('profile.name')} 
//             value={userData[0]?.Name || t('profile.noName')} 
        
//           />
//           <ProfileDetailItem 
//             label={t('profile.mobile')} 
//             value={userData[0]?.Mobile || t('profile.noMobile')} 
//           />
//           <ProfileDetailItem 
//             label={t('profile.email')} 
//             value={user?.email || t('profile.noEmail')} 
//           />
//         </Box>
//       </ProfileSection>

//       <EventBox>
//         <Box sx={{ display: 'flex', borderBottom: '2px solid #ddd', position: 'relative' }}>
//           <Button 
//             onClick={() => setCurrentTab(1)}
//             sx={{
//               fontWeight: currentTab === 1 ? 600 : 400,
//               color: currentTab === 1 ? 'primary.main' : 'text.secondary',
//               minWidth: '100px'
//             }}
//           >
//             {t('profile.upcoming')}
//           </Button>
//           <Button 
//             onClick={() => setCurrentTab(2)}
//             sx={{
//               fontWeight: currentTab === 2 ? 600 : 400,
//               color: currentTab === 2 ? 'primary.main' : 'text.secondary',
//               minWidth: '100px'
//             }}
//           >
//             {t('profile.completed')}
//           </Button>
//           <ActiveTabIndicator
//             className={currentTab === 2 ? 'animate-slide-right' : 'animate-slide-left'}
//             sx={{ right: ['en', 'ru'].includes(i18n.language) && currentTab === 1 ? '100px' : undefined }}
//           />
//         </Box>

//         {currentTab === 2 && (
//           <FiltersBox>
//             <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', py: 1 }}>
//               {['lastWeek', 'lastMonth', 'last3Months', 'last6Months'].map((filterKey) => (
//                 <FilterButton 
//                   key={filterKey}
//                   onClick={() => handleFilterChange(filterKey)}
//                   variant={filter === filterKey ? 'contained' : 'outlined'}
//                 >
//                   {t(`profile.filters.${filterKey}`)}
//                 </FilterButton>
//               ))}
//             </Box>
//           </FiltersBox>
//         )}

//         {/* محتوای تب‌ها */}
//       </EventBox>
//     </ContainerMain>
//   );
// };

// export default ProfilePage;



import React, { useState, useEffect, useContext } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Modal,
  CircularProgress,
  IconButton,
  styled
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import UserContext from '../../UserContext';
import { useTranslation } from 'react-i18next';
// import { showMessage } from '../../components/Alert';

const ProfileContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',
  padding: theme.spacing(3),
  backgroundColor: 'rgba(1, 166, 147, 0.05)',
  borderRadius: theme.shape.borderRadius,
}));

const ProfileHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4, 0),
  marginBottom: theme.spacing(3),
  backgroundColor: 'rgba(1, 166, 147, 1)',// theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
}));

const ProfileDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const DetailCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: theme.shadows[1],
  borderLeft: `4px solid ${theme.palette.primary.main}`,
}));

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  width: '90%',
  maxWidth: '400px',
  outline: 'none',
}));

const ProfilePage = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const { userData, setUserData } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
   const isRTL = ['fa', 'ar', 'pa'].includes(i18n.language);

  const stateArray = {
    email: userData[0]?.email || "",
    firstName: userData[0]?.firstName || "",
    lastName: userData[0]?.lastName || "",
  };

  const [state, setState] = useState(stateArray);

  // API Configuration
  const api = axios.create({
    baseURL: 'https://api.kalanholding.com/api',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': userData[0]?.Token
    }
  });

  // Fetch profile data
  const fetchProfileData = async () => {
    setIsFetching(true);
    try {
      const response = await api.get('/profile');
      const data = response.data.data;
      setProfileData(data);

      setState({
        ...state,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName
      });

      const updatedUserData = [...userData];
      updatedUserData[0].email = data.email;
      updatedUserData[0].firstName = data.firstName;
      updatedUserData[0].lastName = data.lastName;
      setUserData(updatedUserData);

      localStorage.setItem('email', data.email);
      localStorage.setItem('firstName', data.firstName);
      localStorage.setItem('lastName', data.lastName);

    } catch (error) {
      console.error('Error fetching profile data:', error);
      // alert(
      //    t('profileUpdateError'));
    } finally {
      setIsFetching(false);
    }
  };

  const updateProfile = async (updatedFields) => {
    try {
      const profileData = {
        FirstName: state.firstName,
        LastName: state.lastName,
        Email: state.email,
        Image: null
      };

      const response = await axios.post('https://api.kalanholding.com/api/profile', profileData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': userData[0]?.Token
        }
      });

      return response.data.data;
    } catch (error) {
      console.error('Profile update error:', error);
      throw error;
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      if (modalContent === 2 && !state.email) {
        throw new Error(t('validationError'));
      }
      if ((modalContent === 5 || modalContent === 6) && (!state.firstName || !state.lastName)) {
        throw new Error(t('validationError'));
      }

      const formData = new FormData();
      formData.append('FirstName', state.firstName);
      formData.append('LastName', state.lastName);
      formData.append('Email', state.email);
      formData.append('Image', null);

      await updateProfile(formData);
      await fetchProfileData();

        alert(
         t('profileUpdateSuccess'));

      setModalVisible(false);
    } catch (error) {
      alert(
      error.message || t('profileUpdateError'),
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  if (isFetching && !profileData) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        <Typography variant="h5" fontWeight="bold">
          {`${userData[0]?.firstName} ${userData[0]?.lastName}`.trim()}
        </Typography>
        {/* <Typography variant="subtitle1">{t('profile')}</Typography> */}
      </ProfileHeader>

      <ProfileDetails>
        {/* Name Section */}
        <DetailCard>
          <Box>
            <Typography variant="subtitle2" color="textSecondary">
              {t('profile.name')}
            </Typography>
            <Typography variant="body1">
              {userData[0]?.firstName}
            </Typography>
          </Box>
          <IconButton
            onClick={() => { setModalVisible(true); setModalContent(5) }}
            color="primary"
          >
            <EditIcon />
          </IconButton>
        </DetailCard>

        {/* Last Name Section */}
        <DetailCard>
          <Box>
            <Typography variant="subtitle2" color="textSecondary">
              {t('profile.family')}
            </Typography>
            <Typography variant="body1">
              {userData[0]?.lastName}
            </Typography>
          </Box>
          <IconButton
            onClick={() => { setModalVisible(true); setModalContent(6) }}
            color="primary"
          >
            <EditIcon />
          </IconButton>
        </DetailCard>

        {/* Phone Number Section */}
        <DetailCard>
          <Box>
            <Typography variant="subtitle2" color="textSecondary">
              {t('profile.mobile')}
            </Typography>
            <Typography variant="body1">
              {userData[0]?.Mobile}
            </Typography>
          </Box>
          <IconButton disabled color="primary">
            <EditIcon />
          </IconButton>
        </DetailCard>

        {/* Email Section */}
        <DetailCard>
          <Box>
            <Typography variant="subtitle2" color="textSecondary">
              {t('profile.email')}
            </Typography>
            <Typography variant="body1">
              {userData[0]?.email}
            </Typography>
          </Box>
          <IconButton
            onClick={() => { setModalVisible(true); setModalContent(2) }}
            color="primary"
          >
            <EditIcon />
          </IconButton>
        </DetailCard>

        {/* Logout Button */}
        <Button
          onClick={() => { setModalVisible(true); setModalContent(4) }}
          endIcon={<ArrowForwardIcon />}
          sx={{
            mt: 2,
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            justifyContent: 'space-between'
          }}
          fullWidth
        >
          {t('profile.logout')}
        </Button>
      </ProfileDetails>

      {/* Modals */}
      <StyledModal
        open={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <ModalContent>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={() => setModalVisible(false)}>
              <CloseIcon color="primary" />
            </IconButton>
          </Box>

          {modalContent === 2 ? (
             <Box dir={isRTL ? 'rtl' : 'ltr' } >
              <Typography variant="h6" color="primary" textAlign="center" mb={2}>
                {t('profile.changeEmail')}
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                // label={t('emailPlaceholder')}
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
                margin="normal"
              />
            </Box>
          ) : modalContent === 4 ? (
            <Box textAlign="center">
              <Typography variant="h6" color="primary" mb={2}>
                {t('profile.areYouSure')}
              </Typography>
              <Box display="flex" justifyContent="center" gap={2} mt={3}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setModalVisible(false)}
                >
                  {t('profile.cancel')}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={async () => {
                    localStorage.clear();
                    window.location.href = '/login';
                  }}
                >
                  {t('profile.logout')}
                </Button>
              </Box>
            </Box>
          ) : modalContent === 5 ? (
            <Box dir={isRTL ? 'rtl' : 'ltr' } >
              <Typography variant="h6" color="primary" textAlign="center" mb={2}>
                {t('profile.changeName')}
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                // label={t('namePlaceholder')}
                value={state.firstName}
                onChange={(e) => setState({ ...state, firstName: e.target.value })}
                margin="normal"
              />
            </Box>
          ) : modalContent === 6 ? (
            <Box dir={isRTL ? 'rtl' : 'ltr' } >
              <Typography variant="h6" color="primary" textAlign="center" mb={2}>
                {t('profile.changeLastName')}
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                // label={t('lastNamePlaceholder')}
                value={state.lastName}
                onChange={(e) => setState({ ...state, lastName: e.target.value })}
                margin="normal"
                
              />
            </Box>
          ) : null}

          {(modalContent === 2 || modalContent === 5 || modalContent === 6) && (
            <Box display="flex" justifyContent="center" gap={2} mt={3}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setModalVisible(false)}
              >
                {t('profile.cancel')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                disabled={isLoading}
                startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
              >
                {isLoading ? t('profile.saving') : t('profile.save')}
              </Button>
            </Box>
          )}
        </ModalContent>
      </StyledModal>
    </ProfileContainer>
  );
};

export default ProfilePage;