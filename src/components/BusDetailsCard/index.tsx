import { useTheme, Typography, styled, Box } from '@mui/material';
import busIconsource from '../../assets/bus-icon-source.svg';
import busIcondestination from '../../assets/bus-icon-destination.svg';
import arrorIcon from '../../assets/arrowIcon.svg';
import scheduleIcon from '../../assets/schedule-icon.svg';
import Facilities from '../../assets/Facilities.svg';
import { useTranslation } from 'react-i18next';
import { useEffect, useContext } from 'react';
import getTheme from '../../theme';
import UserContext from './../../UserContext';

const Icon = styled('img')`
  width: 40px;
  height: 40px;
  
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const ArrowIcon = styled('img')`
  width: 24px;
  height: 24px;
  margin: 0 8px;
  
  @media (max-width: 600px) {
    width: 18px;
    height: 18px;
    margin: 0 4px;
  }
`;

function BusDetailsCard({ carType, companyName, time, source, destination }) {
  const { t, i18n } = useTranslation();
  const theme = getTheme(i18n.language);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    console.log('Language changed to:', i18n.language);
  }, [i18n.language]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: { xs: '4px', sm: '8px', md: '12px' },
          mb: { xs: 2, sm: 3 }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: '4px', sm: '6px', md: '8px' },
          }}
        >
          <Icon src={busIconsource} alt={t('busDetails.sourceIconAlt')} />
          <Box>
            <Typography
              variant="h6"
              fontSize={{ xs: '0.75rem', sm: '0.875rem', md: '1rem' }}
              color={theme.palette.common.black}
              fontFamily={theme.typography.fontFamily}
            >
              {t('busDetails.source')}
            </Typography>
            <Typography
              variant="h6"
              fontSize={{ xs: '0.875rem', sm: '1rem', md: '1.25rem' }}
              color={theme.palette.secondary.main}
              fontFamily={theme.typography.fontFamily}
            >
              {source}
            </Typography>
          </Box>
        </Box>
        <ArrowIcon src={arrorIcon} alt={t('busDetails.arrowIconAlt')} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: '4px', sm: '6px', md: '8px' },
          }}
        >
          <Icon src={busIcondestination} alt={t('busDetails.destinationIconAlt')} />
          <Box>
            <Typography
              variant="h6"
              fontSize={{ xs: '0.75rem', sm: '0.875rem', md: '1rem' }}
              color={theme.palette.common.black}
              fontFamily={theme.typography.fontFamily}
            >
              {t('busDetails.destination')}
            </Typography>
            <Typography
              variant="h6"
              fontSize={{ xs: '0.875rem', sm: '1rem', md: '1.25rem' }}
              color={theme.palette.secondary.main}
              fontFamily={theme.typography.fontFamily}
            >
              {destination}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: { xs: '8px', sm: '12px' },
        mb: { xs: 2, sm: 3 }
      }}>
        <Icon src={scheduleIcon} alt={t('busDetails.scheduleIconAlt')} />
        <Box>
          <Typography
            variant="h6"
            fontSize={{ xs: '0.75rem', sm: '0.875rem', md: '1rem' }}
            color={theme.palette.common.black}
            fontFamily={theme.typography.fontFamily}
          >
            {t('busDetails.dateTime')}
          </Typography>
          <Typography
            variant="h6"
            fontSize={{ xs: '0.875rem', sm: '1rem', md: '1.25rem' }}
            color={theme.palette.secondary.main}
            fontFamily={theme.typography.fontFamily}
          >
            {time}
          </Typography>
          <Typography
            variant="h6"
            fontSize={{ xs: '0.875rem', sm: '1rem', md: '1.25rem' }}
            color={theme.palette.secondary.main}
            fontFamily={theme.typography.fontFamily}
          >
            {new Date(userData[0].CurrentDate).toLocaleDateString()}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: { xs: '8px', sm: '12px' }
      }}>
        <Icon src={Facilities} alt={t('busDetails.facilitiesIconAlt')} />
        <Box>
          <Typography
            variant="h6"
            fontSize={{ xs: '0.75rem', sm: '0.875rem', md: '1rem' }}
            color={theme.palette.common.black}
            fontFamily={theme.typography.fontFamily}
          >
            {t('busDetails.type')}
          </Typography>
          <Typography
            variant="h6"
            fontSize={{ xs: '0.875rem', sm: '1rem', md: '1.25rem' }}
            color={theme.palette.secondary.main}
            fontFamily={theme.typography.fontFamily}
          >
            {carType}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default BusDetailsCard;