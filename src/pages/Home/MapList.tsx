import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MapList.css';
import L from 'leaflet';

const MapList = () => {
  const { t, i18n } = useTranslation();
  const [imageErrors, setImageErrors] = useState({});

  const defaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const handleImageError = (branchId) => {
    setImageErrors(prev => ({ ...prev, [branchId]: true }));
  };

  const getNeshanMapUrl = (lat, lng) => {
    return `https://api.neshan.org/v4/static?key=service.c8299aba7c6346768feb579c1f9a2962&type=neshan&width=500&height=300&zoom=15&center=${lat},${lng}&markertoken=162341.urwAJgOr`;
  };

  const branches = [
    {
      id: 'Taybad',
      location: '34.741073,60.791896',
      staticMapUrl: getNeshanMapUrl('34.741073', '60.791896'),
      phoneNumber: '05154539432'
    },
    {
      id: 'Zabol',
      location: '31.001623,61.479900',
      staticMapUrl: getNeshanMapUrl('31.001623', '61.479900'),
      phoneNumber: '05432295153'
    },
    {
      id: 'Qom',
      location: '34.641437,50.882995',
      staticMapUrl: getNeshanMapUrl('34.641437', '50.882995'),
      phoneNumber: '02536644071'
    },
    {
      id: 'Sari',
      location: '36.579219,53.072124',
      staticMapUrl: getNeshanMapUrl('36.579219', '53.072124'),
      phoneNumber: '01133407770'
    },
    {
      id: 'Ilam',
      location: '33.624011,46.402233',
      staticMapUrl: getNeshanMapUrl('33.624011', '46.402233'),
      phoneNumber: ''
    },
    {
      id: 'Ahvaz',
      location: '31.335302,48.632709',
      staticMapUrl: getNeshanMapUrl('31.335302', '48.632709'),
      phoneNumber: ''
    },
    {
      id: 'Mashhad',
      location: '36.261970,59.593116',
      staticMapUrl: getNeshanMapUrl('36.261970', '59.593116'),
      phoneNumber: '05138584915'
    },
    {
      id: 'Chabahar',
      location: '25.298286,60.694736',
      staticMapUrl: getNeshanMapUrl('25.298286', '60.694736'),
      phoneNumber: '09154540536'
    }
  ];

  const chunkArray = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );
  };

  const chunkedBranches = chunkArray(branches, 2);

  // const toggleLanguage = () => {
  //   i18n.changeLanguage(i18n.language === 'fa' ? 'en' : 'fa');
  // };

  return (
    <div className={`branch-info-container ${['fa', 'ar','pa'].includes(i18n.language)?  'rtl' : 'ltr'}`}>
     
      
      <h1 className="page-title">{t('mapList.title')}</h1>
      
      {chunkedBranches.map((row, rowIndex) => (
        <div key={rowIndex} className="branch-row">
          {row.map(branch => (
            <div key={branch.id} className="branch-card">
              <div className="branch-header">
                <h3 className="branch-name">
                  {t(`mapList.branches.${branch.id}`)} {t('mapList.branch')}
                </h3>
              </div>
              
              <div className="branch-details">
                <div className="detail-item">
                  <span className="detail-label">{t('mapList.address')}</span>
                  <span className="detail-value">{t(`mapList.addresses.${branch.id}`)}</span>
                </div>
                
                {branch.phoneNumber && (
                  <div className="detail-item">
                    <span className="detail-label">{t('mapList.phone')}</span>
                    <span className="detail-value">{branch.phoneNumber}</span>
                  </div>
                )}
                
                {t(`mapList.managers.${branch.id}`) && (
                  <div className="detail-item">
                    <span className="detail-label">{t('mapList.manager')}</span>
                    <span className="detail-value">{t(`mapList.managers.${branch.id}`)}</span>
                  </div>
                )}
              </div>
              
              <div className="map-wrapper">
                {branch.staticMapUrl ? (
                  <a 
                    href={`https://neshan.org/maps/@${branch.location},15z`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    <img 
                      src={branch.staticMapUrl} 
                      alt={`${t(`mapList.branches.${branch.id}`)} ${t('mapList.branch')} Map`}
                      className="neshan-map"
                      onError={() => handleImageError(branch.id)}
                    />
                  </a>
                ) : (
                  <div className="map-error">
                    {t('mapList.mapUnavailable')}
                    <a 
                      href={`https://neshan.org/maps/@${branch.location},15z`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {t('mapList.viewOnNeshan')}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MapList;