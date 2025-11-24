import React, { useState } from "react";
import LikeUnlike from "./LikeUnlike";
import { useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import getTheme from '../../theme';
const SEAT_STATUS = {
  AVAILABLE: 1,
  BOOKED: 2,
};

const BusSeat = ({ chairNumber, status, index, RowSeats, data, setData, BusPerson, setBusPerson, onPress, isSpacer, isMobile, isSquare }) => {
  const { t ,i18n} = useTranslation();
  const theme = getTheme(i18n.language);
  
  const getStatusColor = () => {
    switch (status) {
      case 0:
        return 'rgba(161, 162, 162, 0.5)';
      case 2:
        return 'rgba(28,56,187,0.5)';
      case 3:
        return 'rgba(28,56,187,0.5)';
      case 1:
        return 'rgba(28,56,187,0.5)';
      default:
        return 'rgba(2, 146, 129,1)';
    }
  };

  let marginLeft = index === RowSeats ? '1%' : '1%';

  if (isSpacer) {
    return <div style={{ width: '5%', height: isSquare ? '50px' : '35px' }} />;
  }

  const getSeatLabel = () => {
    if (status === 2) return t('seat.male');
    if (status === 3) return t('seat.female');
    return chairNumber;
  };

  return (
    <div style={{
      padding: isMobile ? '5px' : '1px',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: marginLeft,
    }}>
      <LikeUnlike
        text={getSeatLabel()}
        LikeColour={getStatusColor()}
        UnlikeColour={getStatusColor()}
        index={status}
        data={data}
        DefaultStyle={{
          height: isSquare ? '50px' : '35px',
          width: isSquare ? '50px' : '35px',
          fontFamily: theme.typography.fontFamily,
          fontSize: isSquare ? '16px' : '12px',
          borderRadius: isSquare ? '8px' : '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        ViewStyle={{ height: '3px' }}
        setData={setData}
        BusPerson={BusPerson}
        setBusPerson={setBusPerson}
      />
    </div>
  );
};

const BusSeats = ({ data, setData, BusPerson, setBusPerson }) => {
  const { t, i18n } = useTranslation();
  const theme = getTheme(i18n.language);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatPress = (chairNumber) => {
    const isSelected = selectedSeats.includes(chairNumber);
    setSelectedSeats(isSelected ? selectedSeats.filter(seat => seat !== chairNumber) : [...selectedSeats, chairNumber]);
  };

  const renderRow = (row) => {
    const seats = data?.seates?.filter((seat) => seat.row === row).filter(s => s.chairNumber != -1);
    const isTwoColumns = seats.length === 2;
    var RowSeats = data?.seates?.length > 0 && data?.seates?.filter(a => a.row == 1).length == 3 ? 1 : 2;

    const seatElements = [];
    seats?.forEach((seat, index) => {
      const isSquare = seat.isSquare;

      seatElements.push(
        <BusSeat
          key={seat.chairNumber}
          chairNumber={seat.chairNumber}
          status={seat.status}
          onPress={() => handleSeatPress(seat.chairNumber)}
          index={seat.column}
          RowSeats={RowSeats}
          data={data}
          setData={setData}
          BusPerson={BusPerson}
          setBusPerson={setBusPerson}
          isMobile={isMobile}
          isSquare={isSquare}
        />
      );
      if (RowSeats === 1 && index === 0) {
        seatElements.push(<BusSeat key={`spacer-${row}`} isSpacer={true} isMobile={isMobile} />);
      }
    });

    return (
      <div style={{
        flexDirection: 'row',
        width: isMobile ? '100%' : '97%',
        display: 'flex',
        justifyContent: isMobile ? 'flex-start' : 'flex-start',
        marginBottom: isMobile ? '8px' : '10px',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginLeft: isMobile ? 0 : ['fa', 'ar','pa'].includes(i18n.language) ? '0' : '25%',
        direction: ['fa', 'ar','pa'].includes(i18n.language) ? 'rtl' : 'ltr'
      }}>
        {seatElements}
      </div>
    );
  };

  return (
    <div style={{
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      maxWidth: isMobile ? '100%' : '800px',
      margin: '0 auto',
      direction: ['fa', 'ar','pa'].includes(i18n.language) ? 'rtl' : 'ltr'
    }}>
      {data?.seates?.reduce((acc, seat) => {
        if (!acc.currentRow || acc.currentRow !== seat.row) {
          acc.currentRow = seat.row;
          acc.rows.push(renderRow(seat.row));
        }
        return acc;
      }, { rows: [], currentRow: null }).rows}
    </div>
  );
};

export default BusSeats;