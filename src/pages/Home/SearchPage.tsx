
// import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../../components/home/Header';
// import Footer from '../../components/home/Footer';
// import UserContext from './../../UserContext';
// import { BusSearch } from '../../Api/ApiMaster';
// import moment from 'moment-jalaali';
// import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// function SearchPage() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [searchExpanded, setSearchExpanded] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [datePrices, setDatePrices] = useState([]);
//   const [flightData, setFlightData] = useState({ searchItems: [], totalCount: 0 });
//   const [loading, setLoading] = useState(false);
//   const [activeSort, setActiveSort] = useState('recommended');
//   const [expandedFlightId, setExpandedFlightId] = useState(null); // برای نمایش تب‌های هر پرواز
//   const [activeFlightTab, setActiveFlightTab] = useState({}); // برای هر پرواز تب فعال
//   const [passengers, setPassengers] = useState({
//     adults: 0,
//     children: 0,
//     infants: 0
//   });
//   const [totalTravelers, setTotalTravelers] = useState(0);

//   const { userData, setUserData } = useContext(UserContext);
//   const navigate = useNavigate();
//   const lastFetchedDateRef = useRef('');
//   const isMountedRef = useRef(true);
//   const swiperRef = useRef(null);

//   // محاسبه تعداد کل مسافران
//   useEffect(() => {
//     const total = passengers.adults + passengers.children + passengers.infants;
//     setTotalTravelers(total);
//   }, [passengers]);

//   // تابع برای فرمت تاریخ شمسی
//   const formatPersianDate = (date) => {
//     const persianDayNames = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
//     const persianMonthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    
//     const momentDate = moment(date);
//     const dayOfWeek = momentDate.day();
//     const day = momentDate.format('jD');
//     const month = persianMonthNames[parseInt(momentDate.format('jM')) - 1];
//     const persianDayName = persianDayNames[dayOfWeek];
    
//     return {
//       fullDate: `${persianDayName} ${day} ${month}`,
//       shortDate: `${persianDayName} - ${momentDate.format('jDD/jMM')}`,
//       dayName: persianDayName,
//       dayNumber: day,
//       monthName: month
//     };
//   };

//   // تولید آرایه تاریخ‌ها برای اسلایدر
//   const generateDateArray = useCallback((baseDate) => {
//     const dates = [];
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
    
//     // 7 روز آینده
//     for (let i = 0; i < 7; i++) {
//       const date = new Date(today);
//       date.setDate(today.getDate() + i);
      
//       const persianDate = formatPersianDate(date);
//       const isToday = moment(date).isSame(today, 'day');
//       const isSelected = moment(date).isSame(baseDate, 'day');
//       const isPast = date < today;
      
//       // قیمت تصادفی برای نمایش
//       const randomPrice = Math.floor(Math.random() * 300000) + 1000000;
      
//       dates.push({
//         date: persianDate.shortDate,
//         dateObj: date,
//         active: isSelected,
//         rawDate: date,
//         isToday: isToday,
//         isPast: isPast,
//         price: randomPrice.toLocaleString()
//       });
//     }
    
//     return dates.sort((a, b) => a.dateObj - b.dateObj);
//   }, []);

//   // تابع برای فراخوانی API
//   const fetchFlights = useCallback(async (date) => {
//     if (!userData || userData.length === 0) {
//       console.log('No user data available');
//       return;
//     }

//     const dateString = moment(date).format('jYYYY-jMM-jDD');
    
//     if (lastFetchedDateRef.current === dateString) {
//       console.log('Already fetched data for this date');
//       return;
//     }

//     console.log('Fetching flights for date:', dateString);
    
//     try {
//       setLoading(true);
//       lastFetchedDateRef.current = dateString;
      
//       await BusSearch(
//         userData[0].StartPlaceCode, 
//         userData[0].EndPlaceCode,
//         dateString,
//         userData[0].Token,
//         (isLoading) => {
//           if (isMountedRef.current) {
//             setLoading(isLoading);
//           }
//         }, 
//         (data) => {
//           if (isMountedRef.current) {
//             console.log('Flight data received:', data);
//             setFlightData(data || { searchItems: [], totalCount: 0 });
            
//             // مقداردهی اولیه تب‌ها برای هر پرواز
//             const initialTabs = {};
//             if (data?.searchItems) {
//               data.searchItems.forEach((flight, index) => {
//                 const flightId = flight.busCode || `flight-${index}`;
//                 initialTabs[flightId] = 0; // همه روی تب اطلاعات اتوبوس
//               });
//             }
//             setActiveFlightTab(initialTabs);
//           }
//         }, 
//         setUserData, 
//         userData, 
//         {}
//       );
//     } catch (error) {
//       console.error('Error fetching flights:', error);
//       if (isMountedRef.current) {
//         setFlightData({ searchItems: [], totalCount: 0 });
//         setLoading(false);
//         lastFetchedDateRef.current = '';
//       }
//     }
//   }, [userData, setUserData]);

//   // تابع برای toggle کردن تب‌های اطلاعات
//   const toggleFlightTabs = (flightId) => {
//     setExpandedFlightId(expandedFlightId === flightId ? null : flightId);
//     // اگر پرواز باز می‌شود، تب اول را فعال کن
//     if (expandedFlightId !== flightId) {
//       setActiveFlightTab(prev => ({
//         ...prev,
//         [flightId]: 0 // تب اطلاعات اتوبوس به صورت پیش‌فرض
//       }));
//     }
//   };

//   // تابع تغییر تب برای هر پرواز
//   const handleTabChange = (flightId, tabIndex) => {
//     setActiveFlightTab(prev => ({
//       ...prev,
//       [flightId]: tabIndex
//     }));
//   };

//   // تابع کلیک روی تاریخ در اسلایدر
//   const handleDateClick = useCallback(async (dateObj, dateItem) => {
//     if (dateItem.isPast) {
//       console.log('Cannot select past date');
//       return;
//     }
    
//     console.log('Date clicked:', dateObj);
//     setSelectedDate(dateObj);
    
//     // آپدیت تاریخ در userData
//     if (userData && userData.length > 0) {
//       const updatedUserData = [...userData];
//       updatedUserData[0].DepartureDate = dateObj.toISOString();
//       setUserData(updatedUserData);
//       localStorage.setItem('storageData', JSON.stringify(updatedUserData));
//     }
    
//     // آپدیت استیت تاریخ‌ها
//     setDatePrices(prev => prev.map(item => ({
//       ...item,
//       active: moment(item.dateObj).isSame(dateObj, 'day')
//     })));
    
//     // فراخوانی API برای تاریخ جدید
//     await fetchFlights(dateObj);
//   }, [userData, setUserData, fetchFlights]);

//   // تابع به‌روزرسانی تعداد مسافران
//   const updatePassengers = (type, operation) => {
//     setPassengers(prev => {
//       const newValue = operation === 'plus' ? prev[type] + 1 : Math.max(0, prev[type] - 1);
//       return { ...prev, [type]: newValue };
//     });
//   };

//   // مقداردهی اولیه
//   useEffect(() => {
//     console.log('Component initialized');
//     isMountedRef.current = true;
    
//     // تاریخ اولیه
//     let initialDate = new Date();
//     if (userData && userData.length > 0 && userData[0].DepartureDate) {
//       try {
//         initialDate = new Date(userData[0].DepartureDate);
//         if (isNaN(initialDate.getTime())) {
//           initialDate = new Date();
//         }
//       } catch (error) {
//         console.error('Error parsing date from userData:', error);
//         initialDate = new Date();
//       }
//     }
    
//     // اگر تاریخ ذخیره شده گذشته است، امروز را نشان بده
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     initialDate.setHours(0, 0, 0, 0);
    
//     if (initialDate < today) {
//       initialDate = new Date(today);
//     }
    
//     setSelectedDate(initialDate);
//     const initialDates = generateDateArray(initialDate);
//     setDatePrices(initialDates);
    
//     // فراخوانی API اولیه
//     if (userData && userData.length > 0) {
//       setTimeout(() => {
//         if (isMountedRef.current) {
//           fetchFlights(initialDate);
//         }
//       }, 100);
//     }

//     return () => {
//       isMountedRef.current = false;
//     };
//   }, []);

//   // Swiper initialization
//   useEffect(() => {
//     if (datePrices.length > 0) {
//       // کمی تاخیر برای اطمینان از لود شدن DOM
//       setTimeout(() => {
//         try {
//           const swiperEl = document.querySelector('.search-content-swiper');
//           if (swiperEl) {
//             const swiper = new Swiper('.search-content-swiper', {
//               modules: [Navigation],
//               slidesPerView: 3,
//               spaceBetween: 10,
//               navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//               },
//               breakpoints: {
//                 320: {
//                   slidesPerView: 2,
//                   spaceBetween: 5
//                 },
//                 480: {
//                   slidesPerView: 3,
//                   spaceBetween: 8
//                 },
//                 768: {
//                   slidesPerView: 5,
//                   spaceBetween: 10
//                 },
//                 1024: {
//                   slidesPerView: 7,
//                   spaceBetween: 15
//                 }
//               }
//             });
            
//             swiperRef.current = swiper;
            
//             // اسکرول به تاریخ فعال
//             const activeIndex = datePrices.findIndex(item => item.active);
//             if (activeIndex !== -1 && swiper) {
//               swiper.slideTo(activeIndex);
//             }
//           }
//         } catch (error) {
//           console.error('Error initializing Swiper:', error);
//         }
//       }, 500);
//     }
//   }, [datePrices]);

//   // تابع تبدیل داده‌های API به فرمت UI
//   const convertToFlightData = (apiData) => {
//     if (!apiData || apiData.length === 0) return [];
    
//     return apiData.map((flight, index) => {
//       // تبدیل زمان حرکت به فرمت مناسب
//       const departureTime = flight.timeMove || '۲۱:۴۰';
//       const arrivalTime = calculateArrivalTime(departureTime);
      
//       // تعیین لوگوی شرکت
//       const getCompanyLogo = (companyName) => {
//         // if (companyName?.includes('آتا')) return './img/pages/search/logos/ata-sm.png';
//         // if (companyName?.includes('فلای')) return './img/pages/search/logos/flypersia-sm.png';
//         // if (companyName?.includes('تابان')) return './img/pages/search/logos/taban-sm.png';
//         // if (companyName?.includes('کارون')) return './img/pages/search/logos/karun-sm.png';
//         // if (companyName?.includes('آسمان')) return './img/pages/search/logos/aseman-sm.png';
//         // if (companyName?.includes('ساها')) return './img/pages/search/logos/saha-sm.png';
//         return './img/logo-m.png';
//       };
      
//       return {
//         id: flight.busCode || `flight-${index}`,
//         companyName: flight.companyName || 'آتا',
//         companyLogo: getCompanyLogo(flight.companyName),
//         busCode: flight.busCode || `BUS${index + 1000}`,
//         originCity: flight.originCity || userData?.[0]?.StartPlaceName || 'تهران',
//         destinationCity: flight.destinationCity || userData?.[0]?.EndPlaceName || 'شیراز',
//         timeMove: departureTime,
//         arrivalTime: arrivalTime,
//         price: flight.price ? flight.price.toLocaleString() : '۱,۳۰۰,۰۰۰',
//         countFreeChairs: flight.countFreeChairs || Math.floor(Math.random() * 5) + 1,
//         carType: flight.carType || 'اتوبوس VIP',
//         classType: flight.classType || 'اکونومی',
//         ticketType: flight.ticketType || 'سیستمی',
//         luggage: flight.luggage || '20 کیلوگرم',
//         originTerminal: flight.originTerminal || 'ترمینال اصلی',
//         destinationTerminal: flight.destinationTerminal || 'ترمینال اصلی',
//         flightNumber: flight.busCode || `BUS${index + 1000}`,
//         moveDateTime: flight.moveDateTime,
//         description: flight.description,
//         sourceCode: flight.sourceCode
//       };
//     });
//   };

//   // محاسبه زمان رسیدن
//   const calculateArrivalTime = (departureTime) => {
//     if (!departureTime) return '۲۳:۴۰';
//     try {
//       const [hours, minutes] = departureTime.split(':').map(num => parseInt(num, 10));
//       if (isNaN(hours) || isNaN(minutes)) return '۲۳:۴۰';
      
//       // اضافه کردن 2 ساعت برای سفر اتوبوس
//       let arrivalHours = hours + 2;
//       if (arrivalHours >= 24) arrivalHours -= 24;
      
//       // تبدیل به فرمت فارسی
//       const persianHours = arrivalHours.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
//       const persianMinutes = minutes.toString().padStart(2, '0').replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
      
//       return `${persianHours}:${persianMinutes}`;
//     } catch (e) {
//       console.error('Error calculating arrival time:', e);
//       return '۲۳:۴۰';
//     }
//   };

//   // تابع کلیک روی انتخاب پرواز
//   const handleSelectFlight = (flight) => {
//     console.log('Selecting flight:', flight);
    
//     const busInfo = {
//       busCode: flight.busCode,
//       companyName: flight.companyName,
//       carType: flight.carType,
//       originCity: flight.originCity,
//       destinationCity: flight.destinationCity,
//       originTerminal: flight.originTerminal,
//       destinationTerminal: flight.destinationTerminal,
//       timeMove: flight.timeMove,
//       price: flight.price.replace(/,/g, ''),
//       countFreeChairs: flight.countFreeChairs,
//       description: flight.description,
//       moveDateTime: flight.moveDateTime,
//       sourceCode: flight.sourceCode,
//       userStartPlaceCode: userData?.[0]?.StartPlaceCode,
//       userToken: userData?.[0]?.Token,
//       requestNumber: flightData?.requestNumber
//     };
    
//     console.log('Saving bus info:', busInfo);
//     localStorage.setItem('selectedBusInfo', JSON.stringify(busInfo));
    
//     navigate('/OrderPage');
//   };

//   // داده‌های تبدیل شده
//   const flights = convertToFlightData(flightData?.searchItems || []);

//   return (
//     <div dir="rtl" lang="fa" data-bs-theme={darkMode ? 'dark' : 'light'}>
//       {/* Offcanvas Menu */}
//       <div className="offcanvas offcanvas-start" id="offcanvasMenu" tabIndex="-1" aria-labelledby="offcanvasMenuLabel">
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title text-muted" id="offcanvasMenuLabel">منو کاربری</h5>
//           <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body">
//           <div className="h-100 nt-flex-column">
//             <div className="w-100 flex-grow-1">
//               <div className="nt-flex-between-center gap-2 mb-4">
//                 <div className="nt-flex-start-center">
//                   <img src="./img/logo-m.png" alt="پرتو سیر" width="80"/>
//                 </div>
//                 <button className="btnSwitch btn btn-lg btn-light" type="button" onClick={() => setDarkMode(!darkMode)} aria-label="تغییر حالت روشن و تاریک سایت">
//                   <i className={`ti ti-${darkMode ? 'moon' : 'sun'} fs-5`} aria-hidden="true"></i>
//                 </button>
//               </div>
//               <div className="accordion accordion-flush" id="accordionOffcanvasMenu">
//                 <div className="accordion-item">
//                   <h2 className="accordion-header">
//                     <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#accordionOffcanvasMenu1" aria-expanded="false" aria-controls="accordionOffcanvasMenu1">خدمات سفر</button>
//                   </h2>
//                   <div className="accordion-collapse collapse" id="accordionOffcanvasMenu1" data-bs-parent="#accordionOffcanvasMenu">
//                     <div className="accordion-body">
//                       <ul className="list-unstyled nt-flex-column">
//                         <li><a className="btn btn-link link-dark fs-5" href="./index.html"><i className="ti ti-bus fs-4" aria-hidden="true"></i>اتوبوس</a></li>
//                         <li><a className="btn btn-link link-dark fs-5" href="./booking-taxi.html"><i className="ti ti-car fs-4" aria-hidden="true"></i>تاکسی</a></li>
//                         <li><a className="btn btn-link link-dark fs-5" href="./booking-van.html"><i className="ti ti-rv-truck fs-4" aria-hidden="true"></i>ون</a></li>
//                         <li><a className="btn btn-link link-dark fs-5" href="./booking-bar.html"><i className="ti ti-truck fs-4" aria-hidden="true"></i>باربری</a></li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <nav className="nt-flex-column">
//                 <a className="btn btn-link link-dark fs-5" href="./about-us.html">درباره ما</a>
//                 <a className="btn btn-link link-dark fs-5" href="./contact.html">تماس با ما</a>
//                 <a className="btn btn-link link-dark fs-5" href="./branches.html">ایستگاه ها</a>
//                 <a className="btn btn-link link-dark fs-5" href="">بلیط های رزرو شده</a>
//               </nav>
//             </div>
//             <div className="w-100 border-top py-3">
//               <div className="nt-flex-column-center-center">
//                 <div className="text-muted">پرتو سیر; همراه همیشگی سفرهای شما.</div>
//                 <div className="nt-flex-start-center text-muted" role="contentinfo" aria-label="اطلاعات حق نشر">
//                   <span className="visually-hidden">حق نشر ©</span>
//                   <i className="ti ti-copyright fs-5" aria-hidden="true"></i>
//                   ۱۴۰۴ پرتو سیر. تمامی حقوق محفوظ است.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Header Component */}
//       <Header />

//       {/* Main Content */}
//       <main className="main bg-light">
//         {/* فاصله بین هدر و بخش جستجو */}
//         <div style={{ paddingTop: '60px' }}></div>
        
//         <div className="search-header">
//           <div 
//             onClick={() => setSearchExpanded(!searchExpanded)}
//             style={{ cursor: 'pointer' }}
//           >
//             <div className="search-header-content gap-5 p-3">
//               <div className="nt-flex-start-center gap-1">
//                 <i className="ti ti-bus fs-5" aria-hidden="true"></i>
//                 <span>بلیط اتوبوس {userData?.[0]?.StartPlace } به {userData?.[0]?.EndPlace }</span>
//               </div>
//               <div className="nt-flex-start-center gap-1">
//                 <i className="ti ti-calendar-week fs-5" aria-hidden="true"></i>
//                 <span>{formatPersianDate(selectedDate).fullDate}</span>
//               </div>
             
//               <div className="btn btn-primary">
//                 <i className="ti ti-search fs-5" aria-hidden="true"></i>
//               </div>
//             </div>
//           </div>
          
//           <div className={`collapse ${searchExpanded ? 'show' : ''}`} id="collapseExample">
//             <div className="card card-body">
//               <div className="container booking-wrapper bg-transparent pt-4 px-4 mb-0">
//                 <div className="container mb-5">
//                   <form className="row g-3 booking-form">
//                     <div className="col-12">
//                       <div className="nt-flex gap-3 mb-2">
                       
//                       </div>
//                     </div>
                    
//                     <div className="col-12 col-md-5">
//                       <div className="booking-fromTo">
//                         <select className="tom-select-header form-select" defaultValue="tehran">
//                           <option value="">مبدا (شهر)</option>
//                           <option value="tehran">تهران</option>
//                           <option value="shiraz">شیراز</option>
//                           <option value="mashhad">مشهد</option>
//                         </select>
//                         <select className="tom-select-header form-select" defaultValue="shiraz">
//                           <option value="">مقصد (شهر)</option>
//                           <option value="tehran">تهران</option>
//                           <option value="shiraz">شیراز</option>
//                           <option value="mashhad">مشهد</option>
//                         </select>
//                       </div>
//                     </div>
                    
//                     <div className="col-12 col-md-3">
//                       <div className="booking-departureReturn">
//                         <input className="form-control" type="text" placeholder="تاریخ رفت" defaultValue={formatPersianDate(selectedDate).fullDate}/>
//                         {/* <input className="form-control" type="text" placeholder="تاریخ برگشت" disabled/> */}
//                       </div>
//                     </div>
                    
                 
                    
//                     <div className="col-6 col-md-2">
//                       <button className="btn btn-primary booking-submit" type="button">
//                         جستجو<i className="ti ti-search fs-5" aria-hidden="true"></i>
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* نتایج جستجو */}
//         <div className="container py-4 mb-5">
//           <div className="row g-4">
//             {/* محتوای اصلی - بدون سایدبار */}
//             <div className="col-12">
//               <div className="search-content">
//                 {/* اسلایدر تاریخ‌ها */}
//                 <div className="swiper search-content-swiper mb-4">
//                   <div className="swiper-wrapper">
//                     {datePrices.map((dateItem, index) => (
//                       <div className="swiper-slide" key={index}>
//                         <a 
//                           className={`link py-2 ${dateItem.active ? 'active' : ''}`}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             !dateItem.isPast && handleDateClick(dateItem.dateObj, dateItem);
//                           }}
//                           href=""
//                           style={{ 
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             minHeight: '70px',
//                             textDecoration: 'none',
//                             cursor: dateItem.isPast ? 'not-allowed' : 'pointer',
//                             opacity: dateItem.isPast ? 0.6 : 1,
//                             borderBottom: dateItem.active ? '2px solid #198754' : 'none',
//                             padding: '8px 5px',
//                           }}
//                         >
//                           <div className="text-muted" style={{ 
//                             fontSize: '14px',
//                             color: dateItem.isPast ? '#adb5bd' : '#6c757d'
//                           }}>
//                             {dateItem.date}
//                           </div>
                          
//                           {dateItem.isToday && !dateItem.active && (
//                             <div className="badge bg-warning text-dark mt-2" style={{
//                               fontSize: '11px',
//                               padding: '2px 6px',
//                               borderRadius: '10px'
//                             }}>
//                               امروز
//                             </div>
//                           )}
//                         </a>
//                       </div>
//                     ))}
//                   </div>
//                   {/* دکمه‌های ناوبری Swiper */}
//                   <div className="swiper-button-next" style={{ color: '#0d6efd' }}></div>
//                   <div className="swiper-button-prev" style={{ color: '#0d6efd' }}></div>
//                 </div>
                
//                 <div className="nt-flex-start-center gap-2 text-muted mb-4">
//                   <i className="ti ti-info-circle fs-5" aria-hidden="true"></i>
//                   نرخ‌ها برای هر فرد بزرگسال در نظر گرفته شده است.
//                 </div>
                
//                 {/* فیلتر مرتب‌سازی */}
//                 <div className="bg-white text-muted border rounded mb-4">
//                   <div className="search-content-filter gap-4 p-3">
//                     <div className="text-muted">مرتب سازی:</div>
//                     <nav className="nt-flex-start-center flex-nowrap flex-grow-1">
//                       <button 
//                         className={`btn btn-link ${activeSort === 'recommended' ? 'active' : ''}`}
//                         onClick={() => setActiveSort('recommended')}
//                       >پیشنهادی</button>
//                       <button 
//                         className={`btn btn-link ${activeSort === 'earliest' ? 'active' : ''}`}
//                         onClick={() => setActiveSort('earliest')}
//                       >زودترین</button>
//                       <button 
//                         className={`btn btn-link ${activeSort === 'latest' ? 'active' : ''}`}
//                         onClick={() => setActiveSort('latest')}
//                       >دیرترین</button>
//                       <button 
//                         className={`btn btn-link ${activeSort === 'cheapest' ? 'active' : ''}`}
//                         onClick={() => setActiveSort('cheapest')}
//                       >ارزان‌ترین</button>
//                       <button 
//                         className={`btn btn-link ${activeSort === 'mostExpensive' ? 'active' : ''}`}
//                         onClick={() => setActiveSort('mostExpensive')}
//                       >گران‌ترین</button>
//                     </nav>
//                   </div>
                  
//                   {/* لیست اتوبوس‌ها */}
//                   <ul className="search-content-lists p-3 bg-light-subtle">
//                     {loading ? (
//                       <li className="search-content-item container bg-white">
//                         <div className="text-center p-5">
//                           <div className="spinner-border text-primary" role="status">
//                             <span className="visually-hidden">در حال بارگذاری...</span>
//                           </div>
//                           <div className="mt-3">در حال بارگذاری نتایج...</div>
//                         </div>
//                       </li>
//                     ) : flights.length > 0 ? (
//                       flights.map((flight) => {
//                         const isExpanded = expandedFlightId === flight.id;
//                         const currentTab = activeFlightTab[flight.id] || 0;
                        
//                         return (
//                           <li className="search-content-item container bg-white" key={flight.id} style={{ marginBottom: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
//                             <div className="row">
//                               {/* اطلاعات اتوبوس */}
//                               <div className="col-12 col-md-9 nt-flex-column">
//                                 <div className="w-100 flex-grow-1 row align-items-center p-4">
//                                   {/* لوگو شرکت - دسکتاپ */}
//                                   <div className="col-2 d-none d-md-block">
//                                     <div className="nt-flex-center-center flex-md-column gap-3">
//                                       <img src={flight.companyLogo} alt={flight.companyName} width="70" style={{ borderRadius: '5px' }}/>
//                                       <div className="fs-5">{flight.companyName}</div>
//                                     </div>
//                                   </div>
                                  
//                                   {/* لوگو شرکت - موبایل */}
//                                   <div className="col-2 d-md-none">
//                                     <div className="nt-flex-center-center flex-md-column gap-3">
//                                       <img src={flight.companyLogo} alt={flight.companyName} width="50" style={{ borderRadius: '5px' }}/>
//                                       <div className="fs-6">{flight.companyName}</div>
//                                     </div>
//                                   </div>
                                  
//                                   {/* اطلاعات پرواز */}
//                                   <div className="col-10 col-md-10 nt-flex-column gap-4 flex-nowrap">
//                                     <div className="w-100 nt-flex-start-center flex-nowrap">
//                                       <div className="badge bg-light text-light-emphasis" style={{ backgroundColor: '#e8f5e8', color: '#2e7d32' }}>
//                                         {flight.carType}
//                                       </div>
//                                     </div>
                                    
//                                     <div className="w-100 row align-items-center">
//                                       {/* مبدا */}
//                                       <div className="col-4 col-md-4 fs-4 nt-flex gap-2 flex-column">
//                                         <div className="d-none d-md-block" style={{ fontSize: '14px', color: '#666' }}>{flight.originCity}</div>
//                                         <div className="small text-muted">{flight.originTerminal}</div>
//                                       </div>
                                      
//                                       {/* مسیر و زمان */}
//                                       <div className="col-4 col-md-4">
//                                         <div className="nt-PathVisualizer reversed-icon" style={{ position: 'relative', height: '50px' }}>
//                                           <div className="nt-PathVisualizer-line" style={{ height: '2px', backgroundColor: '#dee2e6', position: 'absolute', top: '50%', left: '0', right: '0', transform: 'translateY(-50%)' }}></div>
//                                           <div className="text-center" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '5px 15px', borderRadius: '20px', border: '1px solid #dee2e6' }}>
//                                             <div className="d-flex align-items-center gap-2">
//                                               <i className="ti ti-bus fs-5 text-primary" aria-hidden="true"></i>
//                                               <div className="fw-bold" style={{ fontSize: '18px' }}>{flight.timeMove}</div>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
                                      
//                                       {/* مقصد */}
//                                       <div className="col-4 col-md-4 fs-4 nt-flex gap-2 flex-column align-items-end">
//                                         <div className="d-none d-md-block" style={{ fontSize: '14px', color: '#666' }}>{flight.destinationCity}</div>
//                                         <div className="small text-muted text-end">{flight.destinationTerminal}</div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
                                
//                                 {/* تب‌های اطلاعات */}
//                                 {isExpanded && (
//                                   <div className="w-100 p-3 border-top">
//                                     <ul className="nav nav-pills gap-4 mb-3" role="tablist">
//                                       <li className="nav-item" role="presentation">
//                                         <button 
//                                           className={`nav-link ${currentTab === 0 ? 'active' : ''}`}
//                                           type="button"
//                                           onClick={() => handleTabChange(flight.id, 0)}
//                                         >
//                                           اطلاعات اتوبوس
//                                         </button>
//                                       </li>
//                                       <li className="nav-item" role="presentation">
//                                         <button 
//                                           className={`nav-link ${currentTab === 1 ? 'active' : ''}`}
//                                           type="button"
//                                           onClick={() => handleTabChange(flight.id, 1)}
//                                         >
//                                           قوانین استرداد
//                                         </button>
//                                       </li>
//                                     </ul>
                                    
//                                     {/* اطلاعات اتوبوس */}
//                                     {currentTab === 0 && (
//                                       <div className="tab-pane fade show active">
//                                         <div className="container p-4">
//                                           <div className="row g-4">
//                                             <div className="col-6 col-md-4">
//                                               <div className="nt-flex-column gap-1">
//                                                 <div className="small text-muted">شماره اتوبوس</div>
//                                                 <div className="fw-bold">{flight.busCode}</div>
//                                               </div>
//                                             </div>
//                                             {/* <div className="col-6 col-md-4">
//                                               <div className="nt-flex-column gap-1">
//                                                 <div className="small text-muted">کلاس</div>
//                                                 <div className="fw-bold">{flight.classType}</div>
//                                               </div>
//                                             </div> */}
//                                             <div className="col-6 col-md-4">
//                                               <div className="nt-flex-column gap-1">
//                                                 <div className="small text-muted">نوع اتوبوس</div>
//                                                 <div className="fw-bold">{flight.carType}</div>
//                                               </div>
//                                             </div>
//                                             <div className="col-6 col-md-4">
//                                               <div className="nt-flex-column gap-1">
//                                                 <div className="small text-muted">بار مجاز</div>
//                                                 <div className="fw-bold">{flight.luggage}</div>
//                                               </div>
//                                             </div>
//                                             <div className="col-6 col-md-4">
//                                               <div className="nt-flex-column gap-1">
//                                                 <div className="small text-muted">ترمینال مبدا</div>
//                                                 <div className="fw-bold">{flight.originTerminal}</div>
//                                               </div>
//                                             </div>
//                                             <div className="col-6 col-md-4">
//                                               <div className="nt-flex-column gap-1">
//                                                 <div className="small text-muted">ترمینال مقصد</div>
//                                                 <div className="fw-bold">{flight.destinationTerminal}</div>
//                                               </div>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     )}
                                    
//                                     {/* قوانین استرداد */}
//                                     {currentTab === 1 && (
//                                       <div className="tab-pane fade">
//                                         <div className="container">
//                                           <div className="row">
//                                             <div className="col-12">
//                                               <div className="nt-flex-start-center gap-2 p-4">
//                                                 <i className="ti ti-info-circle fs-5" aria-hidden="true"></i>
//                                                 <div className="nt-flex-start-center gap-3 text-muted">
//                                                   درصد جریمه کسر شده بر اساس زمان اعلام کنسلی
//                                                   <a className="link-dark" href=""> قوانین استرداد </a>
//                                                 </div>
//                                               </div>
//                                             </div>
//                                             <div className="col-6 col-md-3">
//                                               <div className="text-center nt-flex-column-center-center gap-1 p-4 border rounded">
//                                                 <div className="fs-5 text-danger">30%</div>
//                                                 <div className="text-dark small">تا ۳ روز قبل از حرکت</div>
//                                               </div>
//                                             </div>
//                                             <div className="col-6 col-md-3">
//                                               <div className="text-center nt-flex-column-center-center gap-1 p-4 border rounded">
//                                                 <div className="fs-5 text-danger">50%</div>
//                                                 <div className="text-dark small">تا ۱ روز قبل از حرکت</div>
//                                               </div>
//                                             </div>
//                                             <div className="col-6 col-md-3">
//                                               <div className="text-center nt-flex-column-center-center gap-1 p-4 border rounded">
//                                                 <div className="fs-5 text-danger">70%</div>
//                                                 <div className="text-dark small">تا ۴ ساعت قبل از حرکت</div>
//                                               </div>
//                                             </div>
//                                             <div className="col-6 col-md-3">
//                                               <div className="text-center nt-flex-column-center-center gap-1 p-4 border rounded">
//                                                 <div className="fs-5 text-danger">80%</div>
//                                                 <div className="text-dark small">کمتر از ۴ ساعت</div>
//                                               </div>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     )}
//                                   </div>
//                                 )}
                                
//                                 {/* دکمه نمایش/مخفی کردن اطلاعات */}
//                                 <div className="w-100 p-3 border-top text-center">
//                                   <button 
//                                     className="btn btn-link"
//                                     onClick={() => toggleFlightTabs(flight.id)}
//                                   >
//                                     <i className={`ti ti-chevron-${isExpanded ? 'up' : 'down'} me-2`}></i>
//                                     {isExpanded ? 'مشاهده کمتر' : 'مشاهده جزئیات بیشتر'}
//                                   </button>
//                                 </div>
//                               </div>
                              
//                               {/* قیمت و انتخاب - دسکتاپ */}
//                               <div className="col-12 col-md-3 d-none d-md-block search-content-dividerY">
//                                 <div className="nt-flex-column-center-center gap-3 px-3 py-5">
//                                   <div className="nt-flex-start-center gap-2">
//                                     <div className="fs-4 text-info fw-bold">{flight.price}</div>
//                                     <div className="small text-muted">تومان</div>
//                                   </div>
//                                   <div className="fw-bold">نرخ رسمی شرکت</div>
                                  
//                                   <button 
//                                     className="btn btn-primary w-100" 
//                                     type="button"
//                                     onClick={() => handleSelectFlight(flight)}
//                                     style={{ padding: '10px', fontSize: '16px' }}
//                                   >
//                                     <i className="ti ti-ticket fs-5 me-2" aria-hidden="true"></i>
//                                     انتخاب اتوبوس
//                                   </button>
                                  
//                                   <div className={`small ${flight.countFreeChairs > 3 ? 'text-success' : 'text-danger'}`}>
//                                     {flight.countFreeChairs} صندلی باقی مانده
//                                   </div>
                                  
//                                   <div className="search-content-total py-4 w-100">
//                                     <div className="p-2 text-muted nt-flex-between-center border-bottom">
//                                       <span>بزرگسال</span>
//                                       <span className="nt-flex gap-1">
//                                         {flight.price}
//                                         <div className="small">تومان</div>
//                                       </span>
//                                     </div>
//                                     <div className="p-2 text-muted nt-flex-between-center">
//                                       <span>مجموع</span>
//                                       <span className="nt-flex gap-1">
//                                         {flight.price}
//                                         <div className="small">تومان</div>
//                                       </span>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
                              
//                               {/* قیمت و انتخاب - موبایل */}
//                               <div className="col-12 col-md-3 d-md-none search-content-dividerX">
//                                 <div className="row align-items-center py-3 border-top">
//                                   <div className="col-6">
//                                     <div className="nt-flex-column gap-2">
//                                       <div className="nt-flex-start-center gap-2">
//                                         <div className="fs-4 text-info fw-bold">{flight.price}</div>
//                                         <div className="small text-muted">تومان</div>
//                                       </div>
//                                       <div className="fw-bold small">نرخ رسمی شرکت</div>
//                                       <div className={`small ${flight.countFreeChairs > 3 ? 'text-success' : 'text-danger'}`}>
//                                         {flight.countFreeChairs} صندلی باقی مانده
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div className="col-6">
//                                     <button 
//                                       className="btn btn-primary w-100" 
//                                       type="button"
//                                       onClick={() => handleSelectFlight(flight)}
//                                     >
//                                       <i className="ti ti-ticket fs-5 me-2" aria-hidden="true"></i>
//                                       انتخاب
//                                     </button>
//                                   </div>
//                                   <div className="col-12 mt-3">
//                                     <div className="search-content-total py-3 border-top">
//                                       <div className="p-2 text-muted nt-flex-between-center border-bottom">
//                                         <span>بزرگسال</span>
//                                         <span className="nt-flex gap-1">
//                                           {flight.price}
//                                           <div className="small">تومان</div>
//                                         </span>
//                                       </div>
//                                       <div className="p-2 text-muted nt-flex-between-center">
//                                         <span>مجموع</span>
//                                         <span className="nt-flex gap-1">
//                                           {flight.price}
//                                           <div className="small">تومان</div>
//                                         </span>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </li>
//                         );
//                       })
//                     ) : (
//                       <li className="search-content-item container bg-white">
//                         <div className="text-center p-5">
//                           <i className="ti ti-bus-off fs-1 text-muted mb-3" aria-hidden="true"></i>
//                           <div className="fs-5 text-muted">اتوبوسی برای این تاریخ یافت نشد</div>
//                           <div className="mt-3">
//                             <button className="btn btn-primary" onClick={() => setSearchExpanded(true)}>
//                               <i className="ti ti-search me-2" aria-hidden="true"></i>
//                               تغییر تاریخ یا مسیر
//                             </button>
//                           </div>
//                         </div>
//                       </li>
//                     )}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default SearchPage;

import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';
import UserContext from './../../UserContext';
import { BusSearch, GetCities } from '../../Api/ApiMaster';
import moment from 'moment-jalaali';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// ایمپورت MUI کامپوننت‌های تاریخ شمسی
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';

function SearchPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePrices, setDatePrices] = useState([]);
  const [flightData, setFlightData] = useState({ searchItems: [], totalCount: 0 });
  const [loading, setLoading] = useState(false);
  const [activeSort, setActiveSort] = useState('recommended');
  const [expandedFlightId, setExpandedFlightId] = useState(null);
  const [activeFlightTab, setActiveFlightTab] = useState({});
  const [passengers, setPassengers] = useState({
    adults: 0,
    children: 0,
    infants: 0
  });
  const [totalTravelers, setTotalTravelers] = useState(0);
  const [cityList, setCityList] = useState([]);
  const [citiesLoading, setCitiesLoading] = useState(true);

  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const lastFetchedDateRef = useRef('');
  const isMountedRef = useRef(true);
  const swiperRef = useRef(null);
  const originSelectRef = useRef(null);
  const destinationSelectRef = useRef(null);
  let originTomSelect = null;
  let destinationTomSelect = null;

  // شهرهای پیش‌فرض
  // const defaultCities = [
  //   { code: '1', name_fa: 'تهران', name_en: 'Tehran' },
  //   { code: '2', name_fa: 'اهواز', name_en: 'Ahvaz' },
  //   { code: '3', name_fa: 'شیراز', name_en: 'Shiraz' },
  //   { code: '4', name_fa: 'مشهد', name_en: 'Mashhad' },
  //   { code: '5', name_fa: 'بندر عباس', name_en: 'Bandar Abbas' },
  //   { code: '6', name_fa: 'اصفهان', name_en: 'Isfahan' },
  //   { code: '7', name_fa: 'تبریز', name_en: 'Tabriz' },
  //   { code: '8', name_fa: 'کیش', name_en: 'Kish' },
  //   { code: '9', name_fa: 'رشت', name_en: 'Rasht' },
  //   { code: '10', name_fa: 'کرج', name_en: 'Karaj' },
  //   { code: '11', name_fa: 'قم', name_en: 'Qom' },
  //   { code: '12', name_fa: 'کرمان', name_en: 'Kerman' },
  //   { code: '13', name_fa: 'یزد', name_en: 'Yazd' },
  //   { code: '14', name_fa: 'اردبیل', name_en: 'Ardabil' },
  //   { code: '15', name_fa: 'زاهدان', name_en: 'Zahedan' },
  //   { code: '16', name_fa: 'همدان', name_en: 'Hamedan' },
  //   { code: '17', name_fa: 'ساری', name_en: 'Sari' },
  //   { code: '18', name_fa: 'بوشهر', name_en: 'Bushehr' },
  //   { code: '19', name_fa: 'ارومیه', name_en: 'Urmia' },
  //   { code: '20', name_fa: 'قزوین', name_en: 'Qazvin' }
  // ];

  // تابع برای به‌روزرسانی userData (مشابه کد APP)
  const updateUserData = useCallback((updates) => {
    const currentDate = new Date().toISOString();
    
    let newUserData;
    if (!userData || userData.length === 0) {
      newUserData = [{
        radioType: '1',
        CurrentDate: currentDate,
        Token: '',
        StartPlace: '',
        StartPlaceCode: '',
        EndPlace: '',
        EndPlaceCode: '',
        DepartureDate: selectedDate ? selectedDate.toISOString() : null,
        Passengers: {
          adults: 0,
          children: 0,
          infants: 0
        }
      }];
    } else {
      newUserData = [...userData];
    }
    
    newUserData[0] = {
      ...newUserData[0],
      ...updates,
      CurrentDate: currentDate
    };
    
    setUserData(newUserData);
    localStorage.setItem('storageData', JSON.stringify(newUserData));
    
    console.log('UserData updated:', newUserData[0]);
    
    return newUserData[0];
  }, [userData, setUserData, selectedDate]);

  // دریافت لیست شهرها از API
  useEffect(() => {
    const fetchCities = () => {
      setCitiesLoading(true);
      const headers = {
        'accept': 'text/plain',
        "Access-Control-Allow-Origin": "*",
        'Authorization': userData[0]?.Token || ''
      };

      GetCities(setCityList, cityList, {}, setCitiesLoading, { headers });
    };

    if (userData[0]?.Token === "" || userData[0]?.Token == null) {
      setTimeout(fetchCities, 1000);
    } else {
      fetchCities();
    }
  }, []);

  // Initialize tom-select برای شهرها
  const initializeTomSelect = () => {
    if (window.TomSelect && originSelectRef.current && destinationSelectRef.current) {
      const cities = cityList.length > 0 ? cityList : [];

      // شهر مبدا
      originTomSelect = new window.TomSelect(originSelectRef.current, {
        valueField: 'code',
        labelField: 'name_fa',
        searchField: ['name_fa'],
        options: cities.map(city => ({
          code: city.code,
          name_fa: city.name_fa
        })),
        create: false,
        maxOptions: 50,
        plugins: ['clear_button'],
        render: {
          option: function(data, escape) {
            return `<div>${escape(data.name_fa)}</div>`;
          },
          item: function(data, escape) {
            return `<div>${escape(data.name_fa)}</div>`;
          }
        },
        onChange: function(value) {
          const selectedCity = cities.find(city => city.code === value);
          if (selectedCity) {
            const updatedData = updateUserData({
              StartPlace: selectedCity.name_fa,
              StartPlaceCode: selectedCity.code,
              // StartPlaceName: selectedCity.name_fa  // اضافه کردن نام شهر هم
            });
            console.log('Origin changed to:', selectedCity.name_fa, 'Code:', selectedCity.code);
            console.log('Current userData:', updatedData);
          }
        },
        onLoad: function() {
          // تنظیم مقدار اولیه از userData
          if (userData[0]?.StartPlaceCode) {
            this.setValue(userData[0].StartPlaceCode);
          }
        }
      });

      // شهر مقصد
      destinationTomSelect = new window.TomSelect(destinationSelectRef.current, {
        valueField: 'code',
        labelField: 'name_fa',
        searchField: ['name_fa'],
        options: cities.map(city => ({
          code: city.code,
          name_fa: city.name_fa
        })),
        create: false,
        maxOptions: 50,
        plugins: ['clear_button'],
        render: {
          option: function(data, escape) {
            return `<div>${escape(data.name_fa)}</div>`;
          },
          item: function(data, escape) {
            return `<div>${escape(data.name_fa)}</div>`;
          }
        },
        onChange: function(value) {
          const selectedCity = cities.find(city => city.code === value);
          if (selectedCity) {
            const updatedData = updateUserData({
              EndPlace: selectedCity.name_fa,
              EndPlaceCode: selectedCity.code,
              // EndPlaceName: selectedCity.name_fa  // اضافه کردن نام شهر هم
            });
            console.log('Destination changed to:', selectedCity.name_fa, 'Code:', selectedCity.code);
            console.log('Current userData:', updatedData);
          }
        },
        onLoad: function() {
          // تنظیم مقدار اولیه از userData
          if (userData[0]?.EndPlaceCode) {
            this.setValue(userData[0].EndPlaceCode);
          }
        }
      });

      // تنظیم مقادیر اولیه از userData اگر وجود داشته باشد
      setTimeout(() => {
        if (userData[0]?.StartPlaceCode && originTomSelect) {
          originTomSelect.setValue(userData[0].StartPlaceCode, true); // true برای silent
        }
        if (userData[0]?.EndPlaceCode && destinationTomSelect) {
          destinationTomSelect.setValue(userData[0].EndPlaceCode, true); // true برای silent
        }
      }, 100);
    }
  };

  // تابع جستجو
  const handleSearch = (e) => {
    if (e) e.preventDefault();
    
    console.log('Search clicked. Current userData:', userData[0]);
    
    if (!userData[0]?.StartPlaceCode || !userData[0]?.EndPlaceCode || !selectedDate) {
      alert('لطفاً مبدا، مقصد و تاریخ را انتخاب کنید');
      return;
    }

    if (userData[0].StartPlaceCode == userData[0].EndPlaceCode) {
      alert('مبدا و مقصد نمی‌توانند یکسان باشند');
      return;
    }

    updateUserData({
      DepartureDate: selectedDate.toISOString()
    });

    // فراخوانی API برای جستجو

    fetchFlights(selectedDate);
  };

  // مدیریت تغییر تاریخ
  const handleDateChange = (newDate) => {
    if (newDate) {
      setSelectedDate(newDate);
      updateUserData({
        DepartureDate: newDate.toISOString()
      });
    }
  };

  // محاسبه تعداد کل مسافران
  useEffect(() => {
    const total = passengers.adults + passengers.children + passengers.infants;
    setTotalTravelers(total);
  }, [passengers]);

  // تابع برای فرمت تاریخ شمسی
  const formatPersianDate = (date) => {
    const persianDayNames = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
    const persianMonthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    
    const momentDate = moment(date);
    const dayOfWeek = momentDate.day();
    const day = momentDate.format('jD');
    const month = persianMonthNames[parseInt(momentDate.format('jM')) - 1];
    const persianDayName = persianDayNames[dayOfWeek];
    
    return {
      fullDate: `${persianDayName} ${day} ${month}`,
      shortDate: `${persianDayName} - ${momentDate.format('jDD/jMM')}`,
      dayName: persianDayName,
      dayNumber: day,
      monthName: month
    };
  };

  // تولید آرایه تاریخ‌ها برای اسلایدر
  const generateDateArray = useCallback((baseDate) => {
    const dates = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const persianDate = formatPersianDate(date);
      const isToday = moment(date).isSame(today, 'day');
      const isSelected = moment(date).isSame(baseDate, 'day');
      const isPast = date < today;
      
      const randomPrice = Math.floor(Math.random() * 300000) + 1000000;
      
      dates.push({
        date: persianDate.shortDate,
        dateObj: date,
        active: isSelected,
        rawDate: date,
        isToday: isToday,
        isPast: isPast,
        price: randomPrice.toLocaleString()
      });
    }
    
    return dates.sort((a, b) => a.dateObj - b.dateObj);
  }, []);

  // تابع برای فراخوانی API
  const fetchFlights = useCallback(async (date) => {
    if (!userData || userData.length === 0) {
      console.log('No user data available');
      return;
    }

    const dateString = moment(date).format('jYYYY-jMM-jDD');
    
    // if (lastFetchedDateRef.current == dateString) {
    //   console.log('Already fetched data for this date');
    //   return;
    // }

    console.log('Fetching flights for date:', dateString);
    console.log('Using userData:', userData[0]);
    setFlightData({ searchItems: [], totalCount: 0 })
    try {
      setLoading(true);
      lastFetchedDateRef.current = dateString;
      
      await BusSearch(
        userData[0].StartPlaceCode, 
        userData[0].EndPlaceCode,
        dateString,
        userData[0].Token,
        (isLoading) => {
          if (isMountedRef.current) {
            setLoading(isLoading);
          }
        }, 
        (data) => {
          if (isMountedRef.current) {
            console.log('Flight data received:', data);
            setFlightData(data || { searchItems: [], totalCount: 0 });
            
            const initialTabs = {};
            if (data?.searchItems) {
              data.searchItems.forEach((flight, index) => {
                const flightId = flight.busCode || `flight-${index}`;
                initialTabs[flightId] = 0;
              });
            }
            setActiveFlightTab(initialTabs);
          }
        }, 
        setUserData, 
        userData, 
        {}
      );
    } catch (error) {
      console.error('Error fetching flights:', error);
      if (isMountedRef.current) {
        setFlightData({ searchItems: [], totalCount: 0 });
        setLoading(false);
        lastFetchedDateRef.current = '';
      }
    }
  }, [userData, setUserData]);

  // تابع toggle کردن تب‌های اطلاعات
  const toggleFlightTabs = (flightId) => {
    setExpandedFlightId(expandedFlightId === flightId ? null : flightId);
    if (expandedFlightId !== flightId) {
      setActiveFlightTab(prev => ({
        ...prev,
        [flightId]: 0
      }));
    }
  };

  // تابع تغییر تب برای هر پرواز
  const handleTabChange = (flightId, tabIndex) => {
    setActiveFlightTab(prev => ({
      ...prev,
      [flightId]: tabIndex
    }));
  };

  // تابع کلیک روی تاریخ در اسلایدر
  const handleDateClick = useCallback(async (dateObj, dateItem) => {
    if (dateItem.isPast) {
      console.log('Cannot select past date');
      return;
    }
    
    console.log('Date clicked:', dateObj);
    setSelectedDate(dateObj);
    
    updateUserData({
      DepartureDate: dateObj.toISOString()
    });
    
    setDatePrices(prev => prev.map(item => ({
      ...item,
      active: moment(item.dateObj).isSame(dateObj, 'day')
    })));
    
    await fetchFlights(dateObj);
  }, [updateUserData, fetchFlights]);

  // تابع به‌روزرسانی تعداد مسافران
  const updatePassengers = (type, operation) => {
    setPassengers(prev => {
      const newValue = operation === 'plus' ? prev[type] + 1 : Math.max(0, prev[type] - 1);
      const newPassengers = { ...prev, [type]: newValue };
      
      // به‌روزرسانی userData با تعداد مسافران جدید
      updateUserData({
        Passengers: newPassengers
      });
      
      return newPassengers;
    });
  };

  // مقداردهی اولیه
  useEffect(() => {
    console.log('Component initialized');
    console.log('Initial userData:', userData);
    isMountedRef.current = true;
    
    let initialDate = new Date();
    if (userData && userData.length > 0 && userData[0].DepartureDate) {
      try {
        initialDate = new Date(userData[0].DepartureDate);
        if (isNaN(initialDate.getTime())) {
          initialDate = new Date();
        }
      } catch (error) {
        console.error('Error parsing date from userData:', error);
        initialDate = new Date();
      }
    }
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    initialDate.setHours(0, 0, 0, 0);
    
    if (initialDate < today) {
      initialDate = new Date(today);
    }
    
    setSelectedDate(initialDate);
    const initialDates = generateDateArray(initialDate);
    setDatePrices(initialDates);
    
    // لود اسکریپت TomSelect
    const loadTomSelectScript = () => {
      const script = document.createElement('script');
      script.src = './vendor/lib/tom-select/tom-select.complete.min.js';
      script.onload = () => {
        setTimeout(() => {
          if (!citiesLoading && window.TomSelect) {
            initializeTomSelect();
          }
        }, 500);
      };
      document.body.appendChild(script);
      
      // لود CSS TomSelect
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './vendor/lib/tom-select/tom-select.min.css';
      document.head.appendChild(link);
    };

    loadTomSelectScript();

    return () => {
      isMountedRef.current = false;
      if (originTomSelect) originTomSelect.destroy();
      if (destinationTomSelect) destinationTomSelect.destroy();
    };
  }, [cityList, citiesLoading, userData, generateDateArray]);

  // Swiper initialization
  useEffect(() => {
    if (datePrices.length > 0) {
      setTimeout(() => {
        try {
          const swiperEl = document.querySelector('.search-content-swiper');
          if (swiperEl) {
            const swiper = new Swiper('.search-content-swiper', {
              modules: [Navigation],
              slidesPerView: 3,
              spaceBetween: 10,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              breakpoints: {
                320: {
                  slidesPerView: 2,
                  spaceBetween: 5
                },
                480: {
                  slidesPerView: 3,
                  spaceBetween: 8
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 10
                },
                1024: {
                  slidesPerView: 7,
                  spaceBetween: 15
                }
              }
            });
            
            swiperRef.current = swiper;
            
            const activeIndex = datePrices.findIndex(item => item.active);
            if (activeIndex !== -1 && swiper) {
              swiper.slideTo(activeIndex);
            }
          }
        } catch (error) {
          console.error('Error initializing Swiper:', error);
        }
      }, 500);
    }
  }, [datePrices]);

  // تابع تبدیل داده‌های API به فرمت UI
  const convertToFlightData = (apiData) => {
    if (!apiData || apiData.length === 0) return [];
    
    return apiData.map((flight, index) => {
      const departureTime = flight.timeMove || '۲۱:۴۰';
      const arrivalTime = calculateArrivalTime(departureTime);
      
      const getCompanyLogo = (companyName) => {
        return './img/logo-m.png';
      };
      
      return {
        id: flight.busCode || `flight-${index}`,
        companyName: flight.companyName || 'آتا',
        companyLogo: getCompanyLogo(flight.companyName),
        busCode: flight.busCode || `BUS${index + 1000}`,
        originCity: userData[0]?.StartPlace,
        destinationCity: userData[0]?.EndPlace ,
        timeMove: departureTime,
        arrivalTime: arrivalTime,
        price: flight.price ? flight.price.toLocaleString() : '۱,۳۰۰,۰۰۰',
        countFreeChairs: flight.countFreeChairs || Math.floor(Math.random() * 5) + 1,
        carType: flight.carType || 'اتوبوس VIP',
        classType: flight.classType || 'اکونومی',
        ticketType: flight.ticketType || 'سیستمی',
        luggage: flight.luggage || '20 کیلوگرم',
        originTerminal: flight.originTerminal || 'ترمینال اصلی',
        destinationTerminal: flight.destinationTerminal || 'ترمینال اصلی',
        flightNumber: flight.busCode || `BUS${index + 1000}`,
        moveDateTime: flight.moveDateTime,
        description: flight.description,
        sourceCode: flight.sourceCode
      };
    });
  };

  // محاسبه زمان رسیدن
  const calculateArrivalTime = (departureTime) => {
    if (!departureTime) return '۲۳:۴۰';
    try {
      const [hours, minutes] = departureTime.split(':').map(num => parseInt(num, 10));
      if (isNaN(hours) || isNaN(minutes)) return '۲۳:۴۰';
      
      let arrivalHours = hours + 2;
      if (arrivalHours >= 24) arrivalHours -= 24;
      
      const persianHours = arrivalHours.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
      const persianMinutes = minutes.toString().padStart(2, '0').replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
      
      return `${persianHours}:${persianMinutes}`;
    } catch (e) {
      console.error('Error calculating arrival time:', e);
      return '۲۳:۴۰';
    }
  };

  // تابع کلیک روی انتخاب پرواز
  const handleSelectFlight = (flight) => {
    console.log('Selecting flight:', flight);
    
    const busInfo = {
      busCode: flight.busCode,
      companyName: flight.companyName,
      carType: flight.carType,
      originCity: flight.originCity,
      destinationCity: flight.destinationCity,
      originTerminal: flight.originTerminal,
      destinationTerminal: flight.destinationTerminal,
      timeMove: flight.timeMove,
      price: flight.price.replace(/,/g, ''),
      countFreeChairs: flight.countFreeChairs,
      description: flight.description,
      moveDateTime: flight.moveDateTime,
      sourceCode: flight.sourceCode,
      userStartPlaceCode: userData[0]?.StartPlaceCode,
      userToken: userData[0]?.Token,
      requestNumber: flightData?.requestNumber
    };
    
    console.log('Saving bus info:', busInfo);
    localStorage.setItem('selectedBusInfo', JSON.stringify(busInfo));
    
    navigate('/OrderPage');
  };

  // داده‌های تبدیل شده
  const flights = convertToFlightData(flightData?.searchItems || []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
      <div dir="rtl" lang="fa" data-bs-theme={darkMode ? 'dark' : 'light'}>
        {/* Offcanvas Menu */}
        <div className="offcanvas offcanvas-start" id="offcanvasMenu" tabIndex="-1" aria-labelledby="offcanvasMenuLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-muted" id="offcanvasMenuLabel">منو کاربری</h5>
            <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="h-100 nt-flex-column">
              <div className="w-100 flex-grow-1">
                <div className="nt-flex-between-center gap-2 mb-4">
                  <div className="nt-flex-start-center">
                    <img src="./img/logo-m.png" alt="پرتو سیر" width="80"/>
                  </div>
                  <button className="btnSwitch btn btn-lg btn-light" type="button" onClick={() => setDarkMode(!darkMode)} aria-label="تغییر حالت روشن و تاریک سایت">
                    <i className={`ti ti-${darkMode ? 'moon' : 'sun'} fs-5`} aria-hidden="true"></i>
                  </button>
                </div>
                <div className="accordion accordion-flush" id="accordionOffcanvasMenu">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#accordionOffcanvasMenu1" aria-expanded="false" aria-controls="accordionOffcanvasMenu1">خدمات سفر</button>
                    </h2>
                    <div className="accordion-collapse collapse" id="accordionOffcanvasMenu1" data-bs-parent="#accordionOffcanvasMenu">
                      <div className="accordion-body">
                        <ul className="list-unstyled nt-flex-column">
                          <li><a className="btn btn-link link-dark fs-5" href="./index.html"><i className="ti ti-bus fs-4" aria-hidden="true"></i>اتوبوس</a></li>
                          <li><a className="btn btn-link link-dark fs-5" href="./booking-taxi.html"><i className="ti ti-car fs-4" aria-hidden="true"></i>تاکسی</a></li>
                          <li><a className="btn btn-link link-dark fs-5" href="./booking-van.html"><i className="ti ti-rv-truck fs-4" aria-hidden="true"></i>ون</a></li>
                          <li><a className="btn btn-link link-dark fs-5" href="./booking-bar.html"><i className="ti ti-truck fs-4" aria-hidden="true"></i>باربری</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <nav className="nt-flex-column">
                  <a className="btn btn-link link-dark fs-5" href="./about-us.html">درباره ما</a>
                  <a className="btn btn-link link-dark fs-5" href="./contact.html">تماس با ما</a>
                  <a className="btn btn-link link-dark fs-5" href="./branches.html">ایستگاه ها</a>
                  <a className="btn btn-link link-dark fs-5" href="">بلیط های رزرو شده</a>
                </nav>
              </div>
              <div className="w-100 border-top py-3">
                <div className="nt-flex-column-center-center">
                  <div className="text-muted">پرتو سیر; همراه همیشگی سفرهای شما.</div>
                  <div className="nt-flex-start-center text-muted" role="contentinfo" aria-label="اطلاعات حق نشر">
                    <span className="visually-hidden">حق نشر ©</span>
                    <i className="ti ti-copyright fs-5" aria-hidden="true"></i>
                    ۱۴۰۴ پرتو سیر. تمامی حقوق محفوظ است.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Component */}
        <Header />

        {/* Main Content */}
        <main className="main bg-light">
          {/* فاصله بین هدر و بخش جستجو */}
          <div style={{ paddingTop: '60px' }}></div>
          
          <div className="search-header">
            <div 
              onClick={() => setSearchExpanded(!searchExpanded)}
              style={{ cursor: 'pointer' }}
            >
              <div className="search-header-content gap-5 p-3">
                <div className="nt-flex-start-center gap-1">
                  <i className="ti ti-bus fs-5" aria-hidden="true"></i>
                  <span>بلیط اتوبوس {userData[0]?.StartPlace || '...'} به {userData[0]?.EndPlace || '...'}</span>
                </div>
                <div className="nt-flex-start-center gap-1">
                  <i className="ti ti-calendar-week fs-5" aria-hidden="true"></i>
                  <span>{formatPersianDate(selectedDate).fullDate}</span>
                </div>
               
                <div className="btn btn-primary">
                  <i className="ti ti-search fs-5" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            
            <div className={`collapse ${searchExpanded ? 'show' : ''}`} id="collapseExample">
              <div className="card card-body">
                <div className="container booking-wrapper bg-transparent pt-4 px-4 mb-0">
                  <div className="container mb-5">
                    <form className="row g-3 booking-form" onSubmit={handleSearch}>
                      <div className="col-12">
                        <div className="nt-flex gap-3 mb-2">
                       
                        </div>
                      </div>
                      
                      <div className="col-12 col-md-5">
                        <div className="booking-fromTo">
                          <select 
                            ref={originSelectRef}
                            className="tom-select-header form-select" 
                            placeholder="مبدا (شهر)" 
                            autoComplete="off"
                          >
                            <option value="">مبدا (شهر)</option>
                            {(cityList.length > 0 ? cityList : []).map(city => (
                              <option key={city.code} value={city.code}>
                                {city.name_fa}
                              </option>
                            ))}
                          </select>
                          <select 
                            ref={destinationSelectRef}
                            className="tom-select-header form-select" 
                            placeholder="مقصد (شهر)" 
                            autoComplete="off"
                          >
                            <option value="">مقصد (شهر)</option>
                            {(cityList.length > 0 ? cityList : []).map(city => (
                              <option key={city.code} value={city.code}>
                                {city.name_fa}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div className="col-12 col-md-3">
                        <div className="booking-departureReturn">
                          <DatePicker
                            label="تاریخ"
                            value={selectedDate}
                            onChange={handleDateChange}
                            renderInput={(params) => (
                              <TextField 
                                {...params} 
                                className="form-control"
                                placeholder="تاریخ "
                                fullWidth
                                sx={{
                                  '& .MuiInputBase-root': {
                                    height: '100%',
                                    fontFamily: 'inherit'
                                  }
                                }}
                              />
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="col-6 col-md-2">
                        <button className="btn btn-primary booking-submit" type="submit">
                          جستجو
                          <i className="ti ti-search fs-5" aria-hidden="true"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* نتایج جستجو */}
          <div className="container py-4 mb-5">
            <div className="row g-4">
              <div className="col-12">
                <div className="search-content">
                  {/* اسلایدر تاریخ‌ها */}
                  <div className="swiper search-content-swiper mb-4">
                    <div className="swiper-wrapper">
                      {datePrices.map((dateItem, index) => (
                        <div className="swiper-slide" key={index}>
                          <a 
                            className={`link py-2 ${dateItem.active ? 'active' : ''}`}
                            onClick={(e) => {
                              e.preventDefault();
                              !dateItem.isPast && handleDateClick(dateItem.dateObj, dateItem);
                            }}
                            href=""
                            style={{ 
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              minHeight: '70px',
                              textDecoration: 'none',
                              cursor: dateItem.isPast ? 'not-allowed' : 'pointer',
                              opacity: dateItem.isPast ? 0.6 : 1,
                              borderBottom: dateItem.active ? '2px solid #198754' : 'none',
                              padding: '8px 5px',
                            }}
                          >
                            <div className="text-muted" style={{ 
                              fontSize: '14px',
                              color: dateItem.isPast ? '#adb5bd' : '#6c757d'
                            }}>
                              {dateItem.date}
                            </div>
                            
                            {dateItem.isToday && !dateItem.active && (
                              <div className="badge bg-warning text-dark mt-2" style={{
                                fontSize: '11px',
                                padding: '2px 6px',
                                borderRadius: '10px'
                              }}>
                                امروز
                              </div>
                            )}
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className="swiper-button-next" style={{ color: '#0d6efd' }}></div>
                    <div className="swiper-button-prev" style={{ color: '#0d6efd' }}></div>
                  </div>
                  
                  <div className="nt-flex-start-center gap-2 text-muted mb-4">
                    <i className="ti ti-info-circle fs-5" aria-hidden="true"></i>
                    نرخ‌ها برای هر فرد بزرگسال در نظر گرفته شده است.
                  </div>
                  
                  {/* فیلتر مرتب‌سازی */}
                  <div className="bg-white text-muted border rounded mb-4">
                    <div className="search-content-filter gap-4 p-3">
                      <div className="text-muted">مرتب سازی:</div>
                      <nav className="nt-flex-start-center flex-nowrap flex-grow-1">
                        <button 
                          className={`btn btn-link ${activeSort === 'recommended' ? 'active' : ''}`}
                          onClick={() => setActiveSort('recommended')}
                        >پیشنهادی</button>
                        <button 
                          className={`btn btn-link ${activeSort === 'earliest' ? 'active' : ''}`}
                          onClick={() => setActiveSort('earliest')}
                        >زودترین</button>
                        <button 
                          className={`btn btn-link ${activeSort === 'latest' ? 'active' : ''}`}
                          onClick={() => setActiveSort('latest')}
                        >دیرترین</button>
                        <button 
                          className={`btn btn-link ${activeSort === 'cheapest' ? 'active' : ''}`}
                          onClick={() => setActiveSort('cheapest')}
                        >ارزان‌ترین</button>
                        <button 
                          className={`btn btn-link ${activeSort === 'mostExpensive' ? 'active' : ''}`}
                          onClick={() => setActiveSort('mostExpensive')}
                        >گران‌ترین</button>
                      </nav>
                    </div>
                    
                    {/* لیست اتوبوس‌ها */}
                    <ul className="search-content-lists p-3 bg-light-subtle">
                      {loading ? (
                        <li className="search-content-item container bg-white">
                          <div className="text-center p-5">
                            <div className="spinner-border text-primary" role="status">
                              <span className="visually-hidden">در حال بارگذاری...</span>
                            </div>
                            <div className="mt-3">در حال بارگذاری نتایج...</div>
                          </div>
                        </li>
                      ) : flights.length > 0 ? (
                        flights.map((flight) => {
                          const isExpanded = expandedFlightId === flight.id;
                          const currentTab = activeFlightTab[flight.id] || 0;
                          
                          return (
                            <li className="search-content-item container bg-white" key={flight.id} style={{ marginBottom: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
                              <div className="row">
                                {/* اطلاعات اتوبوس */}
                                <div className="col-12 col-md-9 nt-flex-column">
                                  <div className="w-100 flex-grow-1 row align-items-center p-4">
                                    {/* لوگو شرکت - دسکتاپ */}
                                    <div className="col-2 d-none d-md-block">
                                      <div className="nt-flex-center-center flex-md-column gap-3">
                                        <img src={flight.companyLogo} alt={flight.companyName} width="70" style={{ borderRadius: '5px' }}/>
                                        <div className="fs-5">{flight.companyName}</div>
                                      </div>
                                    </div>
                                    
                                    {/* لوگو شرکت - موبایل */}
                                    <div className="col-2 d-md-none">
                                      <div className="nt-flex-center-center flex-md-column gap-3">
                                        <img src={flight.companyLogo} alt={flight.companyName} width="50" style={{ borderRadius: '5px' }}/>
                                        <div className="fs-6">{flight.companyName}</div>
                                      </div>
                                    </div>
                                    
                                    {/* اطلاعات پرواز */}
                                    <div className="col-10 col-md-10 nt-flex-column gap-4 flex-nowrap">
                                      <div className="w-100 nt-flex-start-center flex-nowrap">
                                        <div className="badge bg-light text-light-emphasis" style={{ backgroundColor: '#e8f5e8', color: '#2e7d32' }}>
                                          {flight.carType}
                                        </div>
                                      </div>
                                      
                                      <div className="w-100 row align-items-center">
                                        {/* مبدا */}
                                        <div className="col-4 col-md-4 fs-4 nt-flex gap-2 flex-column">
                                          <div className="d-none d-md-block" style={{ fontSize: '14px', color: '#666' }}>{flight.originCity}</div>
                                          <div className="small text-muted">{flight.originTerminal}</div>
                                        </div>
                                        
                                        {/* مسیر و زمان */}
                                        <div className="col-4 col-md-4">
                                          <div className="nt-PathVisualizer reversed-icon" style={{ position: 'relative', height: '50px' }}>
                                            <div className="nt-PathVisualizer-line" style={{ height: '2px', backgroundColor: '#dee2e6', position: 'absolute', top: '50%', left: '0', right: '0', transform: 'translateY(-50%)' }}></div>
                                            <div className="text-center" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '5px 15px', borderRadius: '20px', border: '1px solid #dee2e6' }}>
                                              <div className="d-flex align-items-center gap-2">
                                                <i className="ti ti-bus fs-5 text-primary" aria-hidden="true"></i>
                                                <div className="fw-bold" style={{ fontSize: '18px' }}>{flight.timeMove}</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        
                                        {/* مقصد */}
                                        <div className="col-4 col-md-4 fs-4 nt-flex gap-2 flex-column align-items-end">
                                          <div className="d-none d-md-block" style={{ fontSize: '14px', color: '#666' }}>{flight.destinationCity}</div>
                                          <div className="small text-muted text-end">{flight.destinationTerminal}</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* تب‌های اطلاعات */}
                                  {isExpanded && (
                                    <div className="w-100 p-3 border-top">
                                      <ul className="nav nav-pills gap-4 mb-3" role="tablist">
                                        <li className="nav-item" role="presentation">
                                          <button 
                                            className={`nav-link ${currentTab === 0 ? 'active' : ''}`}
                                            type="button"
                                            onClick={() => handleTabChange(flight.id, 0)}
                                          >
                                            اطلاعات اتوبوس
                                          </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                          <button 
                                            className={`nav-link ${currentTab === 1 ? 'active' : ''}`}
                                            type="button"
                                            onClick={() => handleTabChange(flight.id, 1)}
                                          >
                                            قوانین استرداد
                                          </button>
                                        </li>
                                      </ul>
                                      
                                      {/* اطلاعات اتوبوس */}
                                      {currentTab === 0 && (
                                        <div className="tab-pane fade show active">
                                          <div className="container p-4">
                                            <div className="row g-4">
                                              <div className="col-6 col-md-4">
                                                <div className="nt-flex-column gap-1">
                                                  <div className="small text-muted">شماره اتوبوس</div>
                                                  <div className="fw-bold">{flight.busCode}</div>
                                                </div>
                                              </div>
                                              <div className="col-6 col-md-4">
                                                <div className="nt-flex-column gap-1">
                                                  <div className="small text-muted">نوع اتوبوس</div>
                                                  <div className="fw-bold">{flight.carType}</div>
                                                </div>
                                              </div>
                                              <div className="col-6 col-md-4">
                                                <div className="nt-flex-column gap-1">
                                                  <div className="small text-muted">بار مجاز</div>
                                                  <div className="fw-bold">{flight.luggage}</div>
                                                </div>
                                              </div>
                                              <div className="col-6 col-md-4">
                                                <div className="nt-flex-column gap-1">
                                                  <div className="small text-muted">ترمینال مبدا</div>
                                                  <div className="fw-bold">{flight.originTerminal}</div>
                                                </div>
                                              </div>
                                              <div className="col-6 col-md-4">
                                                <div className="nt-flex-column gap-1">
                                                  <div className="small text-muted">ترمینال مقصد</div>
                                                  <div className="fw-bold">{flight.destinationTerminal}</div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                      
                                      {/* قوانین استرداد */}
                                      {currentTab === 1 && (
                                        <div className="tab-pane fade">
                                          <div className="container">
                                            <div className="row">
                                              <div className="col-12">
                                                <div className="nt-flex-start-center gap-2 p-4">
                                                  <i className="ti ti-info-circle fs-5" aria-hidden="true"></i>
                                                  <div className="nt-flex-start-center gap-3 text-muted">
                                                    درصد جریمه کسر شده بر اساس زمان اعلام کنسلی
                                                    <a className="link-dark" href=""> قوانین استرداد </a>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-6 col-md-3">
                                                <div className="text-center nt-flex-column-center-center gap-1 p-4 border rounded">
                                                  <div className="fs-5 text-danger">30%</div>
                                                  <div className="text-dark small">تا ۳ روز قبل از حرکت</div>
                                                </div>
                                              </div>
                                              <div className="col-6 col-md-3">
                                                <div className="text-center nt-flex-column-center-center gap-1 p-4 border rounded">
                                                  <div className="fs-5 text-danger">50%</div>
                                                  <div className="text-dark small">تا ۱ روز قبل از حرکت</div>
                                                </div>
                                              </div>
                                              <div className="col-6 col-md-3">
                                                <div className="text-center nt-flex-column-center-center gap-1 p-4 border rounded">
                                                  <div className="fs-5 text-danger">70%</div>
                                                  <div className="text-dark small">تا ۴ ساعت قبل از حرکت</div>
                                                </div>
                                              </div>
                                              <div className="col-6 col-md-3">
                                                <div className="text-center nt-flex-column-center-center gap-1 p-4 border rounded">
                                                  <div className="fs-5 text-danger">80%</div>
                                                  <div className="text-dark small">کمتر از ۴ ساعت</div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                  
                                  {/* دکمه نمایش/مخفی کردن اطلاعات */}
                                  <div className="w-100 p-3 border-top text-center">
                                    <button 
                                      className="btn btn-link"
                                      onClick={() => toggleFlightTabs(flight.id)}
                                    >
                                      <i className={`ti ti-chevron-${isExpanded ? 'up' : 'down'} me-2`}></i>
                                      {isExpanded ? 'مشاهده کمتر' : 'مشاهده جزئیات بیشتر'}
                                    </button>
                                  </div>
                                </div>
                                
                                {/* قیمت و انتخاب - دسکتاپ */}
                                <div className="col-12 col-md-3 d-none d-md-block search-content-dividerY">
                                  <div className="nt-flex-column-center-center gap-3 px-3 py-5">
                                    <div className="nt-flex-start-center gap-2">
                                      <div className="fs-4 text-info fw-bold">{flight.price}</div>
                                      <div className="small text-muted">تومان</div>
                                    </div>
                                    <div className="fw-bold">نرخ رسمی شرکت</div>
                                    
                                    <button 
                                      className="btn btn-primary w-100" 
                                      type="button"
                                      onClick={() => handleSelectFlight(flight)}
                                      style={{ padding: '10px', fontSize: '16px' }}
                                    >
                                      <i className="ti ti-ticket fs-5 me-2" aria-hidden="true"></i>
                                      انتخاب اتوبوس
                                    </button>
                                    
                                    <div className={`small ${flight.countFreeChairs > 3 ? 'text-success' : 'text-danger'}`}>
                                      {flight.countFreeChairs} صندلی باقی مانده
                                    </div>
                                    
                                    <div className="search-content-total py-4 w-100">
                                      <div className="p-2 text-muted nt-flex-between-center border-bottom">
                                        <span>بزرگسال</span>
                                        <span className="nt-flex gap-1">
                                          {flight.price}
                                          <div className="small">تومان</div>
                                        </span>
                                      </div>
                                      <div className="p-2 text-muted nt-flex-between-center">
                                        <span>مجموع</span>
                                        <span className="nt-flex gap-1">
                                          {flight.price}
                                          <div className="small">تومان</div>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* قیمت و انتخاب - موبایل */}
                                <div className="col-12 col-md-3 d-md-none search-content-dividerX">
                                  <div className="row align-items-center py-3 border-top">
                                    <div className="col-6">
                                      <div className="nt-flex-column gap-2">
                                        <div className="nt-flex-start-center gap-2">
                                          <div className="fs-4 text-info fw-bold">{flight.price}</div>
                                          <div className="small text-muted">تومان</div>
                                        </div>
                                        <div className="fw-bold small">نرخ رسمی شرکت</div>
                                        <div className={`small ${flight.countFreeChairs > 3 ? 'text-success' : 'text-danger'}`}>
                                          {flight.countFreeChairs} صندلی باقی مانده
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-6">
                                      <button 
                                        className="btn btn-primary w-100" 
                                        type="button"
                                        onClick={() => handleSelectFlight(flight)}
                                      >
                                        <i className="ti ti-ticket fs-5 me-2" aria-hidden="true"></i>
                                        انتخاب
                                      </button>
                                    </div>
                                    <div className="col-12 mt-3">
                                      <div className="search-content-total py-3 border-top">
                                        <div className="p-2 text-muted nt-flex-between-center border-bottom">
                                          <span>بزرگسال</span>
                                          <span className="nt-flex gap-1">
                                            {flight.price}
                                            <div className="small">تومان</div>
                                          </span>
                                        </div>
                                        <div className="p-2 text-muted nt-flex-between-center">
                                          <span>مجموع</span>
                                          <span className="nt-flex gap-1">
                                            {flight.price}
                                            <div className="small">تومان</div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })
                      ) : (
                        <li className="search-content-item container bg-white">
                          <div className="text-center p-5">
                            <i className="ti ti-bus-off fs-1 text-muted mb-3" aria-hidden="true"></i>
                            <div className="fs-5 text-muted">اتوبوسی برای این تاریخ یافت نشد</div>
                            <div className="mt-3">
                              <button className="btn btn-primary" onClick={() => setSearchExpanded(true)}>
                                <i className="ti ti-search me-2" aria-hidden="true"></i>
                                تغییر تاریخ یا مسیر
                              </button>
                            </div>
                          </div>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LocalizationProvider>
  );
}

export default SearchPage;