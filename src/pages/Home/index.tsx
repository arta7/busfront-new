
// import React, { useEffect, useContext, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './style.css';

// // ایمپورت context و API
// import UserContext from '../../UserContext';
// import { GetCities } from '../../Api/ApiMaster';

// // ایمپورت کامپوننت‌های تاریخ شمسی MUI
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TextField } from '@mui/material';

// // ایمپورت Swiper
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Header from '../../components/home/Header';
// import Footer from '../../components/home/Footer';

// function App() {
//   const { userData, setUserData } = useContext(UserContext);
//   const navigate = useNavigate();
  
//   const originSelectRef = useRef(null);
//   const destinationSelectRef = useRef(null);
//   const [cityList, setCityList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [departureDate, setDepartureDate] = useState(null);
//   const [swiperInitialized, setSwiperInitialized] = useState(false);
//   let originTomSelect = null;
//   let destinationTomSelect = null;

//   // تنظیمات Swiper برای بخش اخبار
//   const topOffersSwiperOptions = {
//     modules: [Navigation, Pagination, Autoplay],
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 10,
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       dynamicBullets: true,
//     },
//     breakpoints: {
//       760: {
//         slidesPerView: 2,
//       },
//       992: {
//         slidesPerView: 3,
//       },
//     }
//   };

//   // تنظیمات Swiper برای بخش مسیرهای پرمخاطب
//   const popularRoutesSwiperOptions = {
//     modules: [Pagination],
//     slidesPerView: 1,
//     spaceBetween: 10,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       dynamicBullets: true,
//     },
//     breakpoints: {
//       760: {
//         slidesPerView: 2,
//       },
//       992: {
//         slidesPerView: 3,
//       },
//       1180: {
//         slidesPerView: 4,
//       },
//     }
//   };

//   // شهرهای پیش‌فرض (در صورت عدم دسترسی به API)
//   const defaultCities = [
//     { code: '1', name_fa: 'تهران', name_en: 'Tehran' },
//     { code: '2', name_fa: 'اهواز', name_en: 'Ahvaz' },
//     { code: '3', name_fa: 'شیراز', name_en: 'Shiraz' },
//     { code: '4', name_fa: 'مشهد', name_en: 'Mashhad' },
//     { code: '5', name_fa: 'بندر عباس', name_en: 'Bandar Abbas' },
//     { code: '6', name_fa: 'اصفهان', name_en: 'Isfahan' },
//     { code: '7', name_fa: 'تبریز', name_en: 'Tabriz' },
//     { code: '8', name_fa: 'کیش', name_en: 'Kish' },
//     { code: '9', name_fa: 'رشت', name_en: 'Rasht' },
//     { code: '10', name_fa: 'کرج', name_en: 'Karaj' },
//     { code: '11', name_fa: 'قم', name_en: 'Qom' },
//     { code: '12', name_fa: 'کرمان', name_en: 'Kerman' },
//     { code: '13', name_fa: 'یزد', name_en: 'Yazd' },
//     { code: '14', name_fa: 'اردبیل', name_en: 'Ardabil' },
//     { code: '15', name_fa: 'زاهدان', name_en: 'Zahedan' },
//     { code: '16', name_fa: 'همدان', name_en: 'Hamedan' },
//     { code: '17', name_fa: 'ساری', name_en: 'Sari' },
//     { code: '18', name_fa: 'بوشهر', name_en: 'Bushehr' },
//     { code: '19', name_fa: 'ارومیه', name_en: 'Urmia' },
//     { code: '20', name_fa: 'قزوین', name_en: 'Qazvin' }
//   ];

//   // تابع برای به‌روزرسانی userData
//   const updateUserData = (updates) => {
//     const currentDate = new Date().toISOString();
    
//     // اگر userData وجود ندارد، ابتدا ایجاد کن
//     let newUserData;
//     // if (!userData || userData.length === 0) {
//     //   newUserData = [{
//     //     radioType: '1',
//     //     CurrentDate: currentDate,
//     //     Token: '',
//     //     StartPlace: '',
//     //     StartPlaceCode: '',
//     //     EndPlace: '',
//     //     EndPlaceCode: '',
//     //     DepartureDate: departureDate ? departureDate.toISOString() : null,
//     //     Passengers: {
//     //       adults: 1,
//     //       children: 0,
//     //       infants: 0
//     //     }
//     //   }];
//     // } else
//      {
//       newUserData = [...userData];
//     }
    
//     // به‌روزرسانی داده‌ها
//     newUserData[0] = {
//       ...newUserData[0],
//       ...updates,
//       CurrentDate: currentDate
//     };
    
//     // اگر تاریخ در updates وجود دارد، state محلی را نیز به‌روز کن
//     if (updates.DepartureDate !== undefined) {
//       setDepartureDate(updates.DepartureDate ? new Date(updates.DepartureDate) : null);
//     }
    
//     setUserData(newUserData);
//     localStorage.setItem('storageData', JSON.stringify(newUserData));
    
//     return newUserData[0];
//   };

//   // مقداردهی اولیه userData و دریافت شهرها
//   useEffect(() => {
//     const storedData = localStorage.getItem('storageData');
    
//     // بارگذاری داده‌های ذخیره شده
//     if (storedData && (!userData || userData.length === 0)) {
//       try {
//         const parsedData = JSON.parse(storedData);
//         setUserData(parsedData);
        
//         // تنظیم تاریخ از داده‌های ذخیره شده
//         if (parsedData[0]?.DepartureDate) {
//           const date = new Date(parsedData[0].DepartureDate);
//           if (!isNaN(date.getTime())) {
//             setDepartureDate(date);
//           }
//         }
//       } catch (error) {
//         console.error('Error parsing stored data:', error);
//       }
//     }
    
//     // دریافت لیست شهرها از API
//     const fetchCities = () => {
//       setLoading(true);
//       const headers = {
//         'accept': 'text/plain',
//         "Access-Control-Allow-Origin": "*",
//         'Authorization': userData[0]?.Token || ''
//       };

//       GetCities(setCityList, cityList, {}, setLoading, { headers });
//     };

//     if (userData[0]?.Token === "" || userData[0]?.Token == null) {
//       setTimeout(fetchCities, 1000);
//     } else {
//       fetchCities();
//     }
//   }, []);

//   // Initialize tom-select برای شهرها (با داده‌های API یا پیش‌فرض)
//   const initializeTomSelect = () => {
//     if (window.TomSelect && originSelectRef.current && destinationSelectRef.current) {
//       // استفاده از cityList از API یا defaultCities
//       const cities = cityList.length > 0 ? cityList : defaultCities;

//       // شهر مبدا
//       originTomSelect = new window.TomSelect(originSelectRef.current, {
//         valueField: 'code',
//         labelField: 'name_fa',
//         searchField: ['name_fa'],
//         options: cities.map(city => ({
//           code: city.code,
//           name_fa: city.name_fa
//         })),
//         create: false,
//         maxOptions: 50,
//         plugins: ['clear_button'],
//         render: {
//           option: function(data, escape) {
//             return `<div>${escape(data.name_fa)}</div>`;
//           },
//           item: function(data, escape) {
//             return `<div>${escape(data.name_fa)}</div>`;
//           }
//         },
//         onChange: function(value) {
//           const selectedCity = cities.find(city => city.code === value);
//           if (selectedCity) {
//             updateUserData({
//               StartPlace: selectedCity.name_fa,
//               StartPlaceCode: selectedCity.code
//             });
//           }
//         }
//       });

//       // شهر مقصد
//       destinationTomSelect = new window.TomSelect(destinationSelectRef.current, {
//         valueField: 'code',
//         labelField: 'name_fa',
//         searchField: ['name_fa'],
//         options: cities.map(city => ({
//           code: city.code,
//           name_fa: city.name_fa
//         })),
//         create: false,
//         maxOptions: 50,
//         plugins: ['clear_button'],
//         render: {
//           option: function(data, escape) {
//             return `<div>${escape(data.name_fa)}</div>`;
//           },
//           item: function(data, escape) {
//             return `<div>${escape(data.name_fa)}</div>`;
//           }
//         },
//         onChange: function(value) {
//           const selectedCity = cities.find(city => city.code === value);
//           if (selectedCity) {
//             updateUserData({
//               EndPlace: selectedCity.name_fa,
//               EndPlaceCode: selectedCity.code
//             });
//           }
//         }
//       });

//       // تنظیم مقادیر از userData اگر وجود داشته باشد
//       if (userData[0]?.StartPlaceCode) {
//         originTomSelect.setValue(userData[0].StartPlaceCode);
//       }
//       if (userData[0]?.EndPlaceCode) {
//         destinationTomSelect.setValue(userData[0].EndPlaceCode);
//       }
//     }
//   };

//   // تابع جستجو با اعتبارسنجی کامل
//   const handleSearch = (e) => {
//     e.preventDefault();
//     // console.log('userData[0]',userData[0])
//     // console.log('departureDate',departureDate)
//     // اعتبارسنجی فیلدهای ضروری
//     if (!userData[0]?.StartPlaceCode || !userData[0]?.EndPlaceCode || !departureDate) {
//       alert('لطفاً مبدا، مقصد و تاریخ را انتخاب کنید');
//       return;
//     }

//     // بررسی اینکه مبدا و مقصد یکسان نباشند
//     if (userData[0].StartPlaceCode === userData[0].EndPlaceCode) {
//       alert('مبدا و مقصد نمی‌توانند یکسان باشند');
//       return;
//     }

//     // به‌روزرسانی آخرین تغییرات در userData
//     updateUserData({
//       DepartureDate: departureDate.toISOString()
//     });

//     // هدایت به صفحه نتایج جستجو
//     navigate('/search-results', { 
//       state: { 
//         searchData: {
//           ...userData[0],
//           DepartureDate: departureDate.toISOString()
//         }
//       } 
//     });
//   };

//   // مدیریت تغییر تاریخ
//   const handleDateChange = (newDate) => {
//     setDepartureDate(newDate);
//     updateUserData({
//       DepartureDate: newDate ? newDate.toISOString() : null
//     });
//   };

//   // تابع برای مدیریت تعداد مسافران
//   const updatePassengerCount = (type, operation) => {
//     const currentPassengers = userData[0]?.Passengers || {
//       adults: 0,
//       children: 0,
//       infants: 0
//     };
    
//     const newCount = operation === 'increase' 
//       ? currentPassengers[type] + 1 
//       : Math.max(0, currentPassengers[type] - 1);
    
//     const newPassengers = {
//       ...currentPassengers,
//       [type]: newCount
//     };
    
//     updateUserData({
//       Passengers: newPassengers
//     });
//   };

//   // دریافت تعداد کل مسافران
//   const getTotalPassengers = () => {
//     const passengers = userData[0]?.Passengers || {
//       adults: 0,
//       children: 0,
//       infants: 0
//     };
//     return passengers.adults + passengers.children + passengers.infants;
//   };

//   // تبدیل select به option برای backward compatibility
//   const getCurrentStartPlaceCode = () => {
//     return userData[0]?.StartPlaceCode || '';
//   };

//   const getCurrentEndPlaceCode = () => {
//     return userData[0]?.EndPlaceCode || '';
//   };

//   useEffect(() => {
//     // لود اسکریپت‌های خارجی
//     const loadExternalScripts = () => {
//       const scripts = [
//         { src: './vendor/lib/filterizr/vanilla.filterizr.min.js', async: true },
//         { src: './vendor/lib/lozad/lozad.min.js', async: true },
//         { src: './vendor/lib/bootstrap/js/bootstrap.bundle.min.js', async: true },
//         { src: './vendor/lib/jalaliDatePicker/jalalidatepicker.min.js', async: true },
//         { src: './vendor/lib/tom-select/tom-select.complete.min.js', async: true },
//         { src: './vendor/lib/nouislider/nouislider.min.js', async: true },
//         { src: './js/script.js', async: true }
//       ];

//       scripts.forEach(script => {
//         const scriptElement = document.createElement('script');
//         scriptElement.src = script.src;
//         if (script.async) scriptElement.async = true;
//         document.body.appendChild(scriptElement);
//       });
//     };

//     // لود CSSهای اضافی
//     const loadExternalCSS = () => {
//       const cssLinks = [
//         './vendor/fonts/tabler/tabler-icons.css',
//         './vendor/lib/jalaliDatePicker/jalalidatepicker.min.css',
//         './vendor/lib/tom-select/tom-select.min.css',
//         './vendor/lib/nouislider/nouislider.min.css',
//         './css/bootstrap-custom.css',
//         './css/style.css'
//       ];

//       cssLinks.forEach(href => {
//         const link = document.createElement('link');
//         link.rel = 'stylesheet';
//         link.href = href;
//         document.head.appendChild(link);
//       });
//     };

//     // تنظیمات اولیه صفحه
//     document.documentElement.lang = 'fa';
//     document.documentElement.dir = 'rtl';
//     document.documentElement.setAttribute('data-bs-theme', 'light');

//     // اجرای لودها با تاخیر
//     setTimeout(loadExternalCSS, 100);
//     setTimeout(loadExternalScripts, 300);

//     // Initialize tom-select بعد از لود شدن اسکریپت و شهرها
//     const initScripts = setInterval(() => {
//       if (window.TomSelect && !loading) {
//         initializeTomSelect();
//         clearInterval(initScripts);
//       }
//     }, 100);

//     return () => {
//       // Cleanup
//       document.documentElement.dir = '';
//       document.documentElement.removeAttribute('data-bs-theme');
//       if (originTomSelect) originTomSelect.destroy();
//       if (destinationTomSelect) destinationTomSelect.destroy();
//     };
//   }, [cityList, loading]);

//   // باز کردن مودال
//   const openModal = (modalId) => {
//     const modalElement = document.getElementById(modalId);
//     if (modalElement && window.bootstrap) {
//       const modal = new window.bootstrap.Modal(modalElement);
//       modal.show();
//     }
//   };

//   // تابع کمکی برای لینک‌های خارجی
//   const handleExternalLink = (url) => {
//     window.location.href = url;
//   };

//   // داده‌های بخش اخبار
//   const topOffersSlides = [
//     {
//       id: 1,
//       image: "../img/pages/index/slider/Persepolis.jpg",
//       title: "تخت جمشید؛ میراث جهانی بشری",
//       description: "سفری تاریخی برای آشنایی از نزدیک این بنای تاریخی",
//       link: '/destinations/persepolis'
//     },
//     {
//       id: 2,
//       image: "../img/pages/index/slider/Shiraz.jpg",
//       title: "شیراز؛ شهر عشق و دلدادگی",
//       description: "به شهری سفر کنید که عطر بهارنارنج آن شما را به وجد می‌آورد",
//       link: '/destinations/shiraz'
//     },
//     {
//       id: 3,
//       image: "../img/pages/index/slider/Kashan.jpg",
//       title: "کاشان؛ نگین کویر ایران",
//       description: "سفر به شهری که عطر گلاب آن شما را به وجد می‌آورد",
//       link: '/destinations/kashan'
//     },
//     {
//       id: 4,
//       image: "../img/pages/index/slider/Isfahan.jpg",
//       title: "اصفهان؛ موزه زنده ایران",
//       description: "سفر به شهری که تاریخ و فرهنگ ایران را در خود جای داده است",
//       link: '/destinations/isfahan'
//     },
//     {
//       id: 5,
//       image: "../img/pages/index/slider/Kerman.jpg",
//       title: "کرمان؛ شهری با هزار و یک راز",
//       description: "سفر به شهری که تاریخ و فرهنگ ایران را در خود جای داده است",
//       link: '/destinations/kerman'
//     },
//     {
//       id: 6,
//       image: "../img/pages/index/slider/masuleh.jpg",
//       title: "ماسوله؛ نگین گیلان",
//       description: "سفری به روستایی با معماری پلکانی و طبیعتی بکر و دست‌نخورده.",
//       link: '/destinations/masuleh'
//     },
//     {
//       id: 7,
//       image: "../img/pages/index/slider/mazandaran.jpg",
//       title: "مازندران؛ سرزمین آبشارها و رودخانه‌ها",
//       description: "در دل طبیعت گشت و گذار کنید و از زیبایی‌های آن لذت ببرید",
//       link: '/destinations/mazandaran'
//     },
//     {
//       id: 8,
//       image: "../img/pages/index/slider/Tabriz.jpg",
//       title: "تبریز؛ شهری با تاریخ کهن",
//       description: "سفری به شهری با معماری بی‌نظیر و فرهنگی غنی.",
//       link: '/destinations/tabriz'
//     },
//     {
//       id: 9,
//       image: "../img/pages/index/slider/Mashhad.jpg",
//       title: "مقصدی برای هر فصل از سال",
//       description: "به مشهد سفر کنید و زیبایی‌های آن لذت ببرید",
//       link: '/destinations/mashhad'
//     }
//   ];

//   // داده‌های بخش مسیرهای پرمخاطب
//   const popularRoutes = [
//     {
//       id: 1,
//       origin: "جزیره کیش",
//       destination: "تهران",
//       price: "۱،۵۷۴،۰۰۰",
//       link: '/routes/kish-tehran'
//     },
//     {
//       id: 2,
//       origin: "مشهد",
//       destination: "تهران",
//       price: "۱،۶۳۷،۰۰۰",
//       link: '/routes/mashhad-tehran'
//     },
//     {
//       id: 3,
//       origin: "اهواز",
//       destination: "تهران",
//       price: "۲،۳۵۱،۰۰۰",
//       link: '/routes/ahvaz-tehran'
//     },
//     {
//       id: 4,
//       origin: "شیراز",
//       destination: "تهران",
//       price: "۲،۶۷۰،۰۰۰",
//       link: '/routes/shiraz-tehran'
//     },
//     {
//       id: 5,
//       origin: "جزیره کیش",
//       destination: "تهران",
//       price: "۱،۵۷۴،۰۰۰",
//       link: '/routes/kish-tehran'
//     }
//   ];

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
//       {/* ---------------------------- Offcanvas Menu ---------------------------- */}
//       <div className="offcanvas offcanvas-start" id="offcanvasMenu" tabIndex="-1" aria-labelledby="offcanvasMenuLabel">
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title text-muted" id="offcanvasMenuLabel">منو کاربری</h5>
//           <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body">
//           <div className="h-100 nt-flex-column">
//             <div className="w-100 flex-grow-1">
//               {/* logo & dark theme*/}
//               <div className="nt-flex-between-center gap-2 mb-4">
//                 {/* logo*/}
//                 <div className="nt-flex-start-center">
//                   <img src="./img/logo-m.png" alt="پرتو سیر" width="80"/>
//                 </div>
//                 {/* dark theme*/}
//                 <button className="btnSwitch btn btn-lg btn-light" type="button" aria-label="تغییر حالت روشن و تاریک سایت">
//                   <i className="ti ti-sun fs-5" aria-hidden="true"></i>
//                 </button>
//               </div>
//               <div className="accordion accordion-flush" id="accordionOffcanvasMenu">
//                 <div className="accordion-item">
//                   <h2 className="accordion-header">
//                     <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#accordionOffcanvasMenu1" aria-expanded="false" aria-controls="accordionOffcanvasMenu1">
//                       خدمات سفر
//                     </button>
//                   </h2>
//                   <div className="accordion-collapse collapse" id="accordionOffcanvasMenu1" data-bs-parent="#accordionOffcanvasMenu">
//                     <div className="accordion-body">
//                       <ul className="list-unstyled nt-flex-column">
//                         <li>
//                           <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/')}>
//                             <i className="ti ti-plane-inflight fs-4" aria-hidden="true"></i>
//                             اتوبوس
//                           </button>
//                         </li>
//                         <li>
//                           <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/booking-taxi')}>
//                             <i className="ti ti-plane-departure fs-4" aria-hidden="true"></i>
//                             تاکسی
//                           </button>
//                         </li>
//                         <li>
//                           <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/booking-van')}>
//                             <i className="ti ti-train fs-4" aria-hidden="true"></i>
//                             ون
//                           </button>
//                         </li>
//                         <li>
//                           <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/booking-bar')}>
//                             <i className="ti ti-bus fs-4" aria-hidden="true"></i>
//                             باربری
//                           </button>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <nav className="nt-flex-column">
//                 <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/about-us')}>درباره ما</button>
//                 <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/contact')}>تماس با ما</button>
//                 <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/branches')}>ایستگاه ها</button>
//                 <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/reserved-tickets')}>بلیط های رزرو شده</button>
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

//       {/* --------------------------- Offcanvas Profile -------------------------- */}
//       <div className="offcanvas offcanvas-start" id="offcanvasProfile" tabIndex="-1" aria-labelledby="offcanvasProfileLabel">
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title" id="offcanvasProfileLabel">پروفایل کاربری</h5>
//           <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body">
//           <div className="p-2">
//             <div className="nt-flex-column-center-center mb-4">
//               <div className="border border-primary rounded-circle position-relative">
//                 {/* badge*/}
//                 <span className="position-absolute top-0 start-0 translate-middle badge rounded bg-success" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="تایید شده">
//                   <i className="ti ti-checks fs-5" aria-hidden="true"></i>
//                   <span className="visually-hidden">تایید شده</span>
//                 </span>
//                 {/* avatar*/}
//                 <img src="./img/layouts/avatar/m1.png" alt="پرتو سیر"/>
//               </div>
//               {/* name & phone*/}
//               <div className="nt-flex-column">
//                 {/* name*/}
//                 <div className="profile-title">علی محمدی</div>
//                 {/* phone*/}
//                 <div className="text-muted">09121234567</div>
//               </div>
//             </div>
//             {/* wallet wrapper*/}
//             <div className="bg-secondary text-white rounded p-3 mb-4">
//               <div className="nt-flex-between-start gap-2">
//                 {/* wallet*/}
//                 <div className="nt-flex-column gap-3">
//                   <div className="nt-flex text-dark">
//                     <i className="ti ti-wallet fs-3" aria-hidden="true"></i>
//                     موجودی حساب
//                   </div>
//                   <button className="btn btn-sm btn-secondary" onClick={() => navigate('/profile-transactions')}>
//                     <i className="ti ti-plus fs-5" aria-hidden="true"></i>
//                     <span className="small">افزایش موجودی</span>
//                   </button>
//                 </div>
//                 {/* money*/}
//                 <div className="nt-flex">
//                   <div className="badge text-bg-light">۰</div>
//                   <div className="small text-dark">تومان</div>
//                 </div>
//               </div>
//             </div>
//             <div className="text-muted fw-bold small mb-3">منو کاربری</div>
//             <nav className="profile-menu">
//               <button className="btn btn-outline-light" onClick={() => navigate('/profile')}>
//                 <i className="ti ti-user fs-4" aria-hidden="true"></i>
//                 حساب کاربری
//               </button>
//               <button className="btn btn-outline-light" onClick={() => navigate('/profile-orders')}>
//                 <i className="ti ti-luggage fs-4" aria-hidden="true"></i>
//                 سفر های من
//               </button>
//               <button className="btn btn-outline-light" onClick={() => navigate('/profile-passengers')}>
//                 <i className="ti ti-users-group fs-4" aria-hidden="true"></i>
//                 لیست های مسافران
//               </button>
//               <button className="btn btn-outline-light" onClick={() => navigate('/profile-wishlist')}>
//                 <i className="ti ti-heart fs-4" aria-hidden="true"></i>
//                 علاقه مندی ها
//               </button>
//               <button className="btn btn-outline-light" onClick={() => navigate('/profile-ticketing')}>
//                 <i className="ti ti-headset fs-4" aria-hidden="true"></i>
//                 درخواست پشتیبانی
//               </button>
//               <button className="btn btn-outline-light" onClick={() => navigate('/profile-transactions')}>
//                 <i className="ti ti-businessplan fs-4" aria-hidden="true"></i>
//                                 موجودی و اعتبار من
//               </button>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* ------------------------------ Modal Sign ------------------------------ */}
//       <div className="modal fade" id="signModal" tabIndex="-1" aria-labelledby="signModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <div className="wrapper-xs py-5 text-center">
//                 <div className="fs-5 fw-bold mb-2">ورود یا ثبت‌نام</div>
//                 <p className="lead">برای ادامه شماره موبایل خود را وارد کنید.</p>
//                 <form action="">
//                   <div className="form-floating mb-2">
//                     <input className="form-control form-control-lg" type="tel" name="" placeholder="شماره موبایل" id="floatingInput"/>
//                     <label htmlFor="floatingInput">شماره موبایل</label>
//                   </div>
//                   <div className="nt-flex-center-center gap-1 small mb-4">
//                     <i className="ti ti-info-circle fs-5 text-muted" aria-hidden="true"></i>
//                     استفاده از پرتو سیر به معنی پذیرش
//                     <button className="link" onClick={() => navigate('/terms')}>قوانین و مقررات</button>
//                     این سرویس است.
//                   </div>
//                   <div className="d-grid gap-3">
//                     <button className="btn btn-primary btn-lg" type="submit">تایید و دریافت</button>
//                     {/* <button className="btn btn-link" type="button">ورود با کلمه عبور</button> */}
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ------------------------------ Modal share ----------------------------- */}
//       <div className="modal fade" id="shareModal" tabIndex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1 className="modal-title fs-5" id="shareModalLabel">اشتراک گذاری</h1>
//               <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <div className="wrapper-xs py-5 text-center">
//                 <nav className="nt-flex-around-center gap-4 mb-5" aria-label="پیوند های شبکه های اجتماعی">
//                   <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="از صفحه فیس بوک ما دیدن کنید">
//                     <i className="ti ti-brand-facebook fs-3" aria-hidden="true"></i>
//                   </button>
//                   <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="از صفحه X (که قبلاً توییتر بود) ما بازدید کنید">
//                     <i className="ti ti-brand-x fs-3" aria-hidden="true"></i>
//                   </button>
//                   <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="به صفحه اینستاگرام ما مراجعه کنید">
//                     <i className="ti ti-brand-instagram fs-3" aria-hidden="true"></i>
//                   </button>
//                   <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="با ما در WhatsApp گپ بزنید">
//                     <i className="ti ti-brand-whatsapp fs-3" aria-hidden="true"></i>
//                   </button>
//                   <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="در تلگرام به ما بپیوندید">
//                     <i className="ti ti-brand-telegram fs-3" aria-hidden="true"></i>
//                   </button>
//                 </nav>
//                 <div className="input-group">
//                   <input className="form-control form-control" type="text" id="shareLink" defaultValue="https://netthemes.ir/html/parnet" dir="ltr" readOnly="readonly"/>
//                   <button className="btn btn-primary" type="button" id="copyLinkBtn">کپی لینک</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* -------------------------------- Header -------------------------------- */}
//    <Header />

//       {/* ------------------------------------------------------------------------ */}
//       {/*                                   Main                                   */}
//       {/* ------------------------------------------------------------------------ */}
//       <main className="main">
//         {/* booking ------------------------------- */}
//         <section className="booking-wrapper" style={{backgroundImage: "url(img/pages/index/booking/sliderf.webp)"}}>
//           <div className="container g-0 booking-inner shadow-sm">
//             <nav className="booking-nav">
//               <button className="btn active" 
//               // onClick={() => navigate('/')}
//               >
//                 <i className="ti ti-bus fs-2" aria-hidden="true"></i>
//                 اتوبوس
//               </button>
//               <button className="btn" 
//               // onClick={() => navigate('/booking-taxi')}
//               >
//                 <i className="ti ti-car fs-2" aria-hidden="true"></i>
//                 تاکسی
//               </button>
//               <button className="btn" 
//               //onClick={() => navigate('/booking-van')}
//               >
//                 <i className="ti ti-rv-truck fs-2" aria-hidden="true"></i>
//                 ون
//               </button>
//               <button className="btn"
//               //  onClick={() => navigate('/booking-bar')}
//               >
//                 <i className="ti ti-truck fs-2" aria-hidden="true"></i>
//                 باربری
//               </button>
//             </nav>
//             <div className="container g-3">
//               <form className="row g-3 booking-form" onSubmit={handleSearch}>
//                 {/* top row ------------------------------- */}
//                 <div className="col-12">
//                   <div className="nt-flex gap-3 mb-2">
                  
//                   </div>
//                 </div>
//                 {/* bottom row ------------------------------ */}
//                 <div className="col-12 col-md-6 col-lg-5">
//                   {/* from & to*/}
//                   <div className="booking-fromTo">
//                     <select 
//                       ref={originSelectRef}
//                       className="tom-select-header form-select" 
//                       placeholder="مبدا (شهر)" 
//                       autoComplete="off"
//                       defaultValue={getCurrentStartPlaceCode()}
//                     >
//                       <option value="">مبدا (شهر)</option>
//                       {(cityList.length > 0 ? cityList : defaultCities).map(city => (
//                         <option key={city.code} value={city.code}>
//                           {city.name_fa}
//                         </option>
//                       ))}
//                     </select>
//                     <select 
//                       ref={destinationSelectRef}
//                       className="tom-select-header form-select" 
//                       placeholder="مقصد (شهر)" 
//                       autoComplete="off"
//                       defaultValue={getCurrentEndPlaceCode()}
//                     >
//                       <option value="">مقصد (شهر)</option>
//                       {(cityList.length > 0 ? cityList : defaultCities).map(city => (
//                         <option key={city.code} value={city.code}>
//                           {city.name_fa}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//                 {/* departure & return*/}
//                 <div className="col-12 col-md-6 col-lg-3">
//                   <div className="booking-departureReturn">
//                     <DatePicker
//                       label="تاریخ"
//                       value={userData[0]?.currentDate}
//                       onChange={handleDateChange}
//                       renderInput={(params) => (
//                         <TextField 
//                           {...params} 
//                           className="form-control"
//                           placeholder="تاریخ "
//                           fullWidth
//                           sx={{
//                             '& .MuiInputBase-root': {
//                               height: '100%',
//                               fontFamily: 'inherit'
//                             }
//                           }}
//                         />
//                       )}
//                     />
//                     {/* <input className="form-control" id="bookingTo" type="text" name="" placeholder="تاریخ برگشت" data-jdp="" disabled="disabled"/> */}
//                   </div>
//                 </div>
//                 {/* travelers*/}
//                 {/* <div className="col-6 col-md-6 col-lg-2">
//                   <div className="w-100 btn-group booking-travelers">
//                     <button className="btn btn-white dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
//                       <span id="total-travelers">{getTotalPassengers()}</span>مسافر
//                     </button>
//                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" data-bs-auto-close="outside">
//                       <div className="dropdown-item">
//                         <div className="nt-flex-start-center">
//                           <div className="nt-flex-start-center gap-1 flex-grow-1">
//                             بزرگسال
//                             <div className="text-muted">(۱۲ سال به بالا)</div>
//                           </div>
//                           <div className="nt-flex-start-center gap-3">
//                             <button className="btn btn-primary btn-sm" onClick={() => updatePassengerCount('adults', 'increase')} type="button" aria-label="تعداد را افزایش دهید">
//                               <i className="ti ti-plus" aria-hidden="true"></i>
//                             </button>
//                             <span id="adults-count">{userData?.[0]?.Passengers?.adults || 0}</span>
//                             <button className="btn btn-primary btn-sm" onClick={() => updatePassengerCount('adults', 'decrease')} type="button" aria-label="تعداد را کاهش دهید">
//                               <i className="ti ti-minus" aria-hidden="true"></i>
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="dropdown-item">
//                         <div className="nt-flex-start-center">
//                           <div className="nt-flex-start-center gap-1 flex-grow-1">
//                             کودک
//                             <div className="text-muted">(۲ تا ۱۲ سال)</div>
//                           </div>
//                           <div className="nt-flex-start-center gap-3">
//                             <button className="btn btn-primary btn-sm" onClick={() => updatePassengerCount('children', 'increase')} type="button" aria-label="تعداد را افزایش دهید">
//                               <i className="ti ti-plus" aria-hidden="true"></i>
//                             </button>
//                             <span id="children-count">{userData?.[0]?.Passengers?.children || 0}</span>
//                             <button className="btn btn-primary btn-sm" onClick={() => updatePassengerCount('children', 'decrease')} type="button" aria-label="تعداد را کاهش دهید">
//                               <i className="ti ti-minus" aria-hidden="true"></i>
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="dropdown-item">
//                         <div className="nt-flex-start-center">
//                           <div className="nt-flex-start-center gap-1 flex-grow-1">
//                             نوزاد
//                             <div className="text-muted">(۱۰ روز تا ۲ سال)</div>
//                           </div>
//                           <div className="nt-flex-start-center gap-3">
//                             <button className="btn btn-primary btn-sm" onClick={() => updatePassengerCount('infants', 'increase')} type="button" aria-label="تعداد را افزایش دهید">
//                               <i className="ti ti-plus" aria-hidden="true"></i>
//                             </button>
//                             <span id="infants-count">{userData?.[0]?.Passengers?.infants || 0}</span>
//                             <button className="btn btn-primary btn-sm" onClick={() => updatePassengerCount('infants', 'decrease')} type="button" aria-label="تعداد را کاهش دهید">
//                               <i className="ti ti-minus" aria-hidden="true"></i>
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </ul>
//                   </div>
//                 </div> */}
//                 {/* search (submit)*/}
//                 <div className="col-6 col-md-6 col-lg-2">
//                   <button className="btn btn-primary booking-submit" type="submit">
//                     جستجو
//                     <i className="ti ti-search fs-5" aria-hidden="true"></i>
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </section>

//         {/* top offers slider -------------------------- */}
//         <section className="container topOffersSlider py-5">
//           <div className="nt-flex-between-center mb-4">
//             <div className="nt-flex-start-center gap-2">
//               <i className="ti ti-award text-secondary fs-3" aria-hidden="true"></i>
//               <div className="fw-bold fs-5">اخبار</div>
//             </div>
//           </div>
//           <div className="swiper-container pb-5">
//             <Swiper {...topOffersSwiperOptions} className="pb-5">
//               {topOffersSlides.map((slide) => (
//                 <SwiperSlide key={slide.id}>
//                   <div 
//                     className="swiper-slide" 
//                     style={{backgroundImage: `url(${slide.image})`}}
//                   >
//                     <button 
//                       className="link topOffersSlider-slide p-3" 
//                       onClick={() => navigate(slide.link)}
//                     >
//                       <div className="topOffersSlider-slide-content">
//                         <div className="nt-flex-between-center flex-nowrap">
//                           <div className="nt-flex-column">
//                             <div className="fs-5">{slide.title}</div>
//                             <div className="small">{slide.description}</div>
//                           </div>
//                           <div className="btn btn-dark">
//                             <i className="ti ti-arrow-up-left fs-3" aria-hidden="true"></i>
//                           </div>
//                         </div>
//                       </div>
//                     </button>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <div className="swiper-pagination"></div>
//             <div className="swiper-button-next"></div>
//             <div className="swiper-button-prev"></div>
//           </div>
//         </section>

//         {/* popular routes ---------------------------- */}
//         <section className="popularRoutes container py-5 mb-4">
//           <div className="nt-flex-start-center gap-2 fw-bold fs-5 mb-4">
//             <i className="ti ti-bus text-primary fs-3" aria-hidden="true"></i>
//             مسیر های پرمخاطب
//           </div>
//           <div className="swiper-container pb-5">
//             <Swiper {...popularRoutesSwiperOptions} className="pb-5">
//               {popularRoutes.map((route) => (
//                 <SwiperSlide key={route.id}>
//                   <div className="swiper-slide">
//                     <a className="link" >
//                       <div className="flex-grow-1 p-4">
//                         <div className="row align-items-center mb-3">
//                           <div className="col-auto">
//                             <div className="text-muted">مبدا</div>
//                           </div>
//                           <div className="col">
//                             <div className="nt-PathVisualizer reversed-icon">
//                               <div className="nt-PathVisualizer-line"></div>
//                               <i className="ti ti-plane fs-5 text-muted" aria-hidden="true"></i>
//                             </div>
//                           </div>
//                           <div className="col-auto">
//                             <div className="text-muted">مقصد</div>
//                           </div>
//                         </div>
//                         <div className="row align-items-center">
//                           <div className="col-auto">
//                             <div className="fs-5">{route.origin}</div>
//                           </div>
//                           <div className="col"></div>
//                           <div className="col-auto">
//                             <div className="fs-5">{route.destination}</div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="popularRoutes-price py-3 px-4">
//                         {/* <div className="text-muted small">شروع قیمت از</div>
//                         <div className="fs-6">{route.price} تومان</div> */}
//                       </div>
//                     </a>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <div className="swiper-pagination"></div>
//           </div>
//         </section>

//         {/* full cover ------------------------------ */}
//         <section className="container py-3 mb-5">
//           <div className="row g-0 bg-light-subtle border border-1 rounded">
//             <div className="col-12 col-md-4 order-md-last">
//               <img className="lozad rounded" src="img/pages/index/bus.png" alt="cover"/>
//             </div>
//             <div className="col-12 col-md-3 offset-md-1">
//               <div className="h-100 nt-flex-column-center-start gap-4 p-4">
//                 <div className="fs-2 fw-bold">خرید تلفنی</div>
//                 <div className="fs-3 lead fw-bold">سفر، تنها محدود به آرزوهای توست!</div>
//                 <div className="nt-flex-start-center fs-3 fw-bold">01133243056</div>
//               </div>
//             </div>
//             <div className="col-12 col-md-3">
//               <div className="h-100 nt-flex-column-center-center gap-4 py-4">
//                 <a className="btn btn-lg btn-secondary" >
//                   اطلاعات بیشتر
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* download app ----------------------------- */}
//         <section className="container py-5 mb-5">
//           <div className="row g-0">
//             <div className="col-12 col-md-4">
//               <div className="h-100 nt-flex-column-center-center p-5">
//                 <img className="lozad rounded" src="img/pages/index/app-2.png" alt="پرتو سیر"/>
//               </div>
//             </div>
//             <div className="col-12 col-md-6 offset-md-1">
//               <div className="h-100 nt-flex-column-center-start gap-4 p-4">
//                 <div className="nt-flex-column">
//                   <div className="fs-3 fw-bold">برنامه پرتو سیر رو دانلود کن</div>
//                   <div className="fs-3 text-primary fw-bold">سفرت رو راحت‌تر کن</div>
//                 </div>
//                 <div className="lead">با اپلیکیشن پرتو سیر، بلیط، هتل و هرچیزی که برای سفر نیاز داری رو با چند تا لمس رزرو کن. از تخفیف‌های ویژه لذت ببر و سفرت رو هوشمندانه برنامه‌ریزی کن. همین حالا دانلود کن!</div>
//                 <div className="row align-items-center pb-4">
//                   <div className="col-12 col-md-7">
//                     <div className="row row-cols-md-2 g-3">
//                       <div className="col-12 col-md">
//                         <button className="w-100 btn btn-dark" onClick={() => handleExternalLink('https://play.google.com/store/apps/details?id=com.pertosir')}>
//                           <i className="ti ti-brand-android fs-5" aria-hidden="true"></i>
//                           دانلود نسخه اندروید
//                         </button>
//                       </div>
//                       <div className="col-12 col-md">
//                         <button className="btn btn-dark" onClick={() => handleExternalLink('https://apps.apple.com/app/pertosir')}>
//                           <i className="ti ti-brand-apple fs-5" aria-hidden="true"></i>
//                           دانلود اپل
//                         </button>
//                       </div>
//                       <div className="col-12 col-md">
//                         <button className="btn btn-dark" onClick={() => handleExternalLink('https://pertosir.com/app/download')}>
//                           <i className="ti ti-download fs-5" aria-hidden="true"></i>
//                           دانلود مستقیم
//                         </button>
//                       </div>
//                       <div className="col-12 col-md">
//                         <button className="btn btn-dark" onClick={() => navigate('/web-app')}>
//                           <i className="ti ti-world fs-5" aria-hidden="true"></i>
//                           وب اپلیکیشن
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-12 col-md-5">
//                     <div className="nt-flex-column-center-center gap-1">
//                       <img className="lozad rounded" src="./img/pages/index/qr.png" alt="پرتو سیر" width="150"/>
//                       <div className="text-muted small">اسکن کنید و دانلود کنید!</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
        
//         {/* common questions --------------------------- */}
//         <section className="commonQuestions py-5 mb-5">
//           <div className="container py-5 mb-4">
//             <div className="row g-0">
//               <div className="col-12">
//                 <div className="w-100 nt-flex-between-center mb-4">
//                   <div className="nt-flex-start-center fs-5 fw-bold">
//                     <i className="ti ti-help-octagon text-primary fs-3" aria-hidden="true"></i>
//                     پرسش های متداول
//                   </div>
//                   <div className="fs-5 text-light">FAQ's</div>
//                 </div>
//               </div>
//               <div className="col-12 border rounded">
//                 <div className="accordion accordion-flush" id="accordionPanelsStayOpenExample">
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
//                         <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3">
//                           <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
//                         </div>
//                         <div className="fs-5">آیا خرید بلیط اتوبوس برای کودکان و اطفال زیر ۲ سال الزامی است؟</div>
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="panelsStayOpen-collapseOne">
//                       <div className="accordion-body">
//                         <p className="lead lh-lg text-muted">قیمت بلیط اتوبوس برای کودکان زیر دو سال، در صورتی که صندلی‌ به آن‌ها تعلق نگیرد رایگان است. اگر کودک به استفاده از صندلی نیاز داشته باشد، باید هزینه کامل بلیط اتوبوس را برایش پرداخت کنید تا صندلی متعلق به خودتان باشد.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
//                         <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3">
//                           <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
//                         </div>
//                         <div className="fs-5">نحوه رزرو بلیط اتوبوس در پرتو سیر چگونه است؟</div>
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="panelsStayOpen-collapseTwo">
//                       <div className="accordion-body">
//                         <p className="lead lh-lg text-muted">برای خرید اینترنتی بلیط اتوبوس در وب‌سایت یا اپلیکیشن پرتو سیر (بخش بلیط اتوبوس) مبدا، مقصد، تاریخ حرکت و تعداد بلیط خود را انتخاب می‌کنید. سپس می‌توانید بلیط‌های موجود را در تاریخ مدنظرتان ببینید و با کارت بانکی و رمز دوم، بلیط دلخواهتان را بخرید.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
//                         <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3">
//                           <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
//                         </div>
//                         <div className="fs-5">استعلام بلیط اتوبوس پرتو سیر چگونه است؟</div>
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="panelsStayOpen-collapseThree">
//                       <div className="accordion-body">
//                         <p className="lead lh-lg text-muted">برای استعلام بلیط اتوبوس، کافی است به وب‌سایت یا اپلیکیشن پرتو سیر بروید و بعد از مشخص‌کردن مبدا و مقصد، لیست کامل اتوبوس‌های شرکت‌های مختلف را ببینید.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
//                         <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3">
//                           <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
//                         </div>
//                         <div className="fs-5">آیا بعد از خرید بلیط اتوبوس امکان تعویض صندلی وجود دارد؟</div>
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="panelsStayOpen-collapseFour">
//                       <div className="accordion-body">
//                         <p className="lead lh-lg text-muted">خیر. بعد از خرید بلیط اتوبوس، امکان تعویض صندلی وجود ندارد.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
//                         <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3">
//                           <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
//                         </div>
//                         <div className="fs-5">آیا می‌توانم اطلاعات بلیط اتوبوس خریداری‌شده را ویرایش کنم؟</div>
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="panelsStayOpen-collapseFive">
//                       <div className="accordion-body">
//                         <p className="lead lh-lg text-muted">خیر. بعد از خرید بلیط اتوبوس، امکان ویرایش اطلاعات آن وجود ندارد. درصورت نیاز، باید بلیط خود را استرداد کنید و بلیط جدیدی با اطلاعات جدید تهیه کنید. طبیعی است که طبق قوانین، استرداد بلیط اتوبوس با درصدی جریمه همراه است (گاهی تا 100 درصد جریمه).</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
//                         <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3">
//                           <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
//                         </div>
//                         <div className="fs-5">در صورت اشتباه در خرید آنلاین بلیط اتوبوس چکار کنیم؟</div>
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="panelsStayOpen-collapseSix">
//                       <div className="accordion-body">
//                         <p className="lead lh-lg text-muted">در خرید آنلاین بلیط اتوبوس اگر اشتباهات در حد ایرادات ساده نگارشی باشد، می‌توانید این موضوع را با تعاونی مطرح کنید. اگر هم خطا در انتخاب مسیر باشد، باید بلیط خودتان را استرداد کنید و بلیط بخرید. طبق قوانین، استرداد بلیط اتوبوس با درصدی جریمه همراه است.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
//                         <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3">
//                           <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
//                         </div>
//                         <div className="fs-5">چطور مطمئن شوم خرید بلیط اتوبوس با موفقیت انجام شده؟</div>
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="panelsStayOpen-collapseSeven">
//                       <div className="accordion-body">
//                         <p className="lead lh-lg text-muted">اگر خرید بلیط اتوبوس با موفقیت انجام شود، یک پیامک از پرتو سیر برای شما ارسال خواهد شد. در این پیامک شماره سفارش شما، اطلاعات اتوبوس وجود دارد.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
//                         <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3">
//                           <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
//                         </div>
//                         <div className="fs-5">آیا قیمت بلیط اتوبوس در خرید اینترنتی با خرید حضوری فرق می‌کند؟</div>
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="panelsStayOpen-collapseEight">
//                       <div className="accordion-body">
//                         <p className="lead lh-lg text-muted">خیر. قیمت بلیط اتوبوس در خرید اینترنتی و حضوری تفاوتی ندارد؛ اما توجه داشته باشید که خرید اینترنتی بلیط اتوبوس سریع‌ترین راه خرید بلیط است. در هر زمان از شبانه‌روز امکان دسترسی به تمام بلیط‌ها در پرتو سیر وجود دارد. علاوه بر این، در خرید اینترنتی بلیط اتوبوس در پرتو سیر، امکان جانمایی صندلی هم وجود دارد.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
//                         <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3">
//                           <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
//                         </div>
//                         <div className="fs-5">امکان حمل حیوانات خانگی در داخل اتوبوس وجود دارد؟</div>
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="panelsStayOpen-collapseNine">
//                       <div className="accordion-body">
//                         <p className="lead lh-lg text-muted">طبق قوانین سازمان حمل‌ونقل امکان حمل حیوانات در اتوبوس وجود ندارد.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTen">
//                         <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3">
//                           <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
//                         </div>
//                         <div className="fs-5">مدارک مورد نیاز برای استفاده از اتوبوس چیست؟</div>
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="panelsStayOpen-collapseTen">
//                       <div className="accordion-body">
//                         <p className="lead lh-lg text-muted">به همراه داشتن کارت شناسایی معتبر (کارت ملی یا شناسنامه) برای دریافت بلیط الزامی است.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEleven" aria-expanded="false" aria-controls="panelsStayOpen-collapseEleven">
//                         <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3">
//                           <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
//                         </div>
//                         <div className="fs-5">جهت سوار شدن به اتوبوس چه مدت قبل از حرکت در ترمینال حضور داشته باشیم؟</div>
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="panelsStayOpen-collapseEleven">
//                       <div className="accordion-body">
//                         <p className="lead lh-lg text-muted">در صورتی که حرکت سرویس در ساعت مقرر انجام گردد مسافر می بایست حداکثر 30 دقیقه قبل حرکت سرویس در ترمینال مبدا حضور داشته باشد.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwelve" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwelve">
//                         <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3">
//                           <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
//                         </div>
//                         <div className="fs-5">میزان بار مجاز هر مسافر در سفر با اتوبوس چقدر است؟</div>
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="panelsStayOpen-collapseTwelve">
//                       <div className="accordion-body">
//                         <p className="lead lh-lg text-muted">طبق قوانین سازمان حمل‌ونقل میزان بار مجاز 20 کیلوگرم است. البته برخی از تعاونی‌ها با دریافت هزینه، امکان حمل بار تا 40 کیلوگرم را نیز ارائه می‌دهند. همچنین یکی دیگر از مسائلی که در این زمینه باید مد نظر قرار بدهید، تعاونی اتوبوس شماست. معمولا تعاونی ها، علاوه بر قوانین کلی میزان بار مجاز، قوانین خاص خودشان را دارند که در بعضی موارد، با قوانین تعاونی های دیگر فرق می‌کند. برای این که از میزان بار مجازتان مطمئن شوید و در حین سفر به مشکل برنخورید، به تعاونی که از آن بلیط تهیه کرده‌اید زنگ زده و از آن‌ها سوال کنید. به این موضوع هم دقت کنید که اگر میزان بار اضافه شما بیش از حد باشد، متصدی اتوبوس ممکن است از گذاشتن آن‌ها در اتوبوس ممانعت کند. در این نوع مواقع می‌توانید در این مورد صحبت کنید که هزینه میزان بار اضافه‌تان را پرداخت کنید تا بتوانید همه وسیله‌هایتان را با خودتان حمل کنید.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThirteen" aria-expanded="false" aria-controls="panelsStayOpen-collapseThirteen">
//                         <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3">
//                           <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
//                         </div>
//                         <div className="fs-5">قوانین مربوط به ون و تاکسی</div>
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="panelsStayOpen-collapseThirteen">
//                       <div className="accordion-body">
//                         <p className="lead lh-lg">
//                           برای مشاهده قوانین و مقررات مربوط به سفر با <strong>ون</strong> و <strong>تاکسی</strong>، لطفاً به صفحه
//                           <button className="link-dark" onClick={() => navigate('/terms')}>قوانین و مقررات</button> مراجعه کنید.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* key highlights ---------------------------- */}
//         <section className="container py-5 mb-5">
//           <div className="row g-4">
//             <div className="col-12 col-md-4">
//               <div className="keyHighlights p-4">
//                 <div className="keyHighlights-icon mb-3">
//                   <i className="ti ti-ticket fs-1" aria-hidden="true"></i>
//                 </div>
//                 <div className="fs-4 mb-0 text-secondary fw-bold">هرجا که بخوای، با هر بودجه‌ای</div>
//                 <p className="lead lh-lg">رزرو آنلاین انواع بلیط اتوبوس، تاکسی و ون</p>
//               </div>
//             </div>
//             <div className="col-12 col-md-4">
//               <div className="keyHighlights p-4">
//                 <div className="keyHighlights-icon mb-3">
//                   <i className="ti ti-world fs-1" aria-hidden="true"></i>
//                 </div>
//                 <div className="fs-4 mb-0 text-secondary fw-bold">هر لحظه در دسترس، همیشه همراه</div>
//                 <p className="lead lh-lg">فقط یه کلیک تا مقصدت فاصله داری</p>
//               </div>
//             </div>
//             <div className="col-12 col-md-4">
//               <div className="keyHighlights p-4">
//                 <div className="keyHighlights-icon mb-3">
//                   <i className="ti ti-sunglasses fs-1" aria-hidden="true"></i>
//                 </div>
//                 <div className="fs-4 mb-0 text-secondary fw-bold">از درِ خونه تا مقصد، بی‌دغدغه</div>
//                 <p className="lead lh-lg">آسایش شما، هدف ماست</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* image caption ---------------------------- */}
//         <section className="imageCaption py-5 mb-5">
//           <div className="container">
//             <div className="row g-4">
//               <div className="col-12 col-md-4">
//                 <img src="./img/pages/index/luggage.png" alt="پرتو سیر" width="200"/>
//               </div>
//               <div className="col-12 col-md-6">
//                 <div className="h-100 nt-flex-column-center-start">
//                   <div className="text-white fs-3 fw-bold mb-2">چمدونت برای سفر آمادست؟</div>
//                   <p className="text-white lead lh-lg mb-5">چمدونت آماده‌ست، بلیتت چی؟ با رزرو آنلاین، از بهترین قیمت‌ها و صندلی‌ها بهره‌مند شو. علاوه بر این، می‌تونی با خیال راحت، جزئیات سفرت رو مدیریت کنی.</p>
//                   <button className="btn btn-lg btn-outline-light" onClick={() => navigate('/booking')}>سفارش آنلاین</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* -------------------------------- Footer -------------------------------- */}
//        <Footer />
       
//     </LocalizationProvider>
//   );
// }

// export default App;

import React, { useEffect, useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

// ایمپورت context و API
import UserContext from '../../UserContext';
import { GetCities } from '../../Api/ApiMaster';

// ایمپورت کامپوننت‌های تاریخ شمسی MUI
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';

// ایمپورت Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';

function App() {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  
  const originSelectRef = useRef('');
  const destinationSelectRef = useRef('');
  const [cityList, setCityList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [departureDate, setDepartureDate] = useState(null);
  const [swiperInitialized, setSwiperInitialized] = useState(false);
  let originTomSelect = null;
  let destinationTomSelect = null;

  // تنظیمات Swiper برای بخش اخبار
  const topOffersSwiperOptions = {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      760: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    }
  };

  // تنظیمات Swiper برای بخش مسیرهای پرمخاطب
  const popularRoutesSwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      760: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1180: {
        slidesPerView: 4,
      },
    }
  };

  // شهرهای پیش‌فرض (در صورت عدم دسترسی به API)
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

  // تابع برای به‌روزرسانی userData
  const updateUserData = (updates) => {
    const currentDate = new Date().toISOString();
    
    // اگر userData وجود ندارد، ابتدا ایجاد کن
    let newUserData;
    // if (!userData || userData.length === 0) {
    //   newUserData = [{
    //     radioType: '1',
    //     CurrentDate: currentDate,
    //     Token: '',
    //     StartPlace: '',
    //     StartPlaceCode: '',
    //     EndPlace: '',
    //     EndPlaceCode: '',
    //     DepartureDate: departureDate ? departureDate.toISOString() : null,
    //     Passengers: {
    //       adults: 1,
    //       children: 0,
    //       infants: 0
    //     }
    //   }];
    // } else
     {
      newUserData = [...userData];
    }
    
    // به‌روزرسانی داده‌ها
    newUserData[0] = {
      ...newUserData[0],
      ...updates,
      CurrentDate: currentDate
    };
    
    // اگر تاریخ در updates وجود دارد، state محلی را نیز به‌روز کن
    if (updates.DepartureDate !== undefined) {
      setDepartureDate(updates.DepartureDate ? new Date(updates.DepartureDate) : null);
    }
    
    setUserData(newUserData);
    localStorage.setItem('storageData', JSON.stringify(newUserData));
    
    return newUserData[0];
  };

  // مقداردهی اولیه userData و دریافت شهرها
  useEffect(() => {
    const storedData = localStorage.getItem('storageData');
    
    // بارگذاری داده‌های ذخیره شده
    if (storedData && (!userData || userData.length === 0)) {
      try {
        const parsedData = JSON.parse(storedData);
        setUserData(parsedData);
        
        // تنظیم تاریخ از داده‌های ذخیره شده
        if (parsedData[0]?.DepartureDate) {
          const date = new Date(parsedData[0].DepartureDate);
          if (!isNaN(date.getTime())) {
            setDepartureDate(date);
          }
        }
      } catch (error) {
        console.error('Error parsing stored data:', error);
      }
    }
    
    // دریافت لیست شهرها از API
    const fetchCities = () => {
      setLoading(true);
      const headers = {
        'accept': 'text/plain',
        "Access-Control-Allow-Origin": "*",
        'Authorization': userData[0]?.Token || ''
      };

      GetCities(setCityList, cityList, {}, setLoading, { headers });
    };

    if (userData[0]?.Token == "" || userData[0]?.Token == null) {
      setTimeout(fetchCities, 1000);
    } else {
      fetchCities();
    }
  }, []);

  // Initialize tom-select برای شهرها (با داده‌های API یا پیش‌فرض)
  // const initializeTomSelect = () => {
  //   if (window.TomSelect && originSelectRef.current && destinationSelectRef.current) {
  //     // استفاده از cityList از API یا defaultCities
  //     const cities = cityList.length > 0 && cityList ;

  //     // شهر مبدا
  //     originTomSelect = new window.TomSelect(originSelectRef.current, {
  //       valueField: 'code',
  //       labelField: 'name_fa',
  //       searchField: ['name_fa'],
  //       options: cities.map(city => ({
  //         code: city.code,
  //         name_fa: city.name_fa
  //       })),
  //       create: false,
  //       maxOptions: 50,
  //       plugins: ['clear_button'],
  //       render: {
  //         option: function(data, escape) {
  //           return `<div>${escape(data.name_fa)}</div>`;
  //         },
  //         item: function(data, escape) {
  //           return `<div>${escape(data.name_fa)}</div>`;
  //         }
  //       },
  //       onChange: function(value) {
  //         const selectedCity = cities.find(city => city.code == value);
  //         if (selectedCity) {
  //           updateUserData({
  //             StartPlace: selectedCity.name_fa,
  //             StartPlaceCode: selectedCity.code
  //           });
  //         }
  //       }
  //     });

  //     // شهر مقصد
  //     destinationTomSelect = new window.TomSelect(destinationSelectRef.current, {
  //       valueField: 'code',
  //       labelField: 'name_fa',
  //       searchField: ['name_fa'],
  //       options: cities.map(city => ({
  //         code: city.code,
  //         name_fa: city.name_fa
  //       })),
  //       create: false,
  //       maxOptions: 50,
  //       plugins: ['clear_button'],
  //       render: {
  //         option: function(data, escape) {
  //           return `<div>${escape(data.name_fa)}</div>`;
  //         },
  //         item: function(data, escape) {
  //           return `<div>${escape(data.name_fa)}</div>`;
  //         }
  //       },
  //       onChange: function(value) {
  //         const selectedCity = cities.find(city => city.code == value);
  //         if (selectedCity) {
  //           updateUserData({
  //             EndPlace: selectedCity.name_fa,
  //             EndPlaceCode: selectedCity.code
  //           });
  //         }
  //       }
  //     });

  //     // تنظیم مقادیر از userData اگر وجود داشته باشد
  //     if (userData[0]?.StartPlaceCode) {
  //       originTomSelect.setValue(userData[0].StartPlaceCode);
  //     }
  //     if (userData[0]?.EndPlaceCode) {
  //       destinationTomSelect.setValue(userData[0].EndPlaceCode);
  //     }
  //   }
  // };


  // const initializeTomSelect = () => {
  //   if (window.TomSelect && originSelectRef.current && destinationSelectRef.current) {
  //     // استفاده از cityList از API یا defaultCities
  //     const cities = cityList.length > 0 ? cityList : defaultCities;
  
  //     // شهر مبدا
  //     originTomSelect = new window.TomSelect(originSelectRef.current, {
  //       valueField: 'code',
  //       labelField: 'name_fa',
  //       searchField: ['name_fa'],
  //       options: cities.map(city => ({
  //         code: city.code,
  //         name_fa: city.name_fa
  //       })),
  //       create: false,
  //       maxOptions: 50,
  //       plugins: ['clear_button'],
  //       render: {
  //         option: function(data, escape) {
  //           return `<div>${escape(data.name_fa)}</div>`;
  //         },
  //         item: function(data, escape) {
  //           return `<div>${escape(data.name_fa)}</div>`;
  //         }
  //       },
  //       onChange: function(value) {
  //         const selectedCity = cities.find(city => city.code == value);
  //         if (selectedCity) {
  //           updateUserData({
  //             StartPlace: selectedCity.name_fa,
  //             StartPlaceCode: selectedCity.code
  //           });
  //         }
  //       }
  //     });
  
  //     // شهر مقصد
  //     destinationTomSelect = new window.TomSelect(destinationSelectRef.current, {
  //       valueField: 'code',
  //       labelField: 'name_fa',
  //       searchField: ['name_fa'],
  //       options: cities.map(city => ({
  //         code: city.code,
  //         name_fa: city.name_fa
  //       })),
  //       create: false,
  //       maxOptions: 50,
  //       plugins: ['clear_button'],
  //       render: {
  //         option: function(data, escape) {
  //           return `<div>${escape(data.name_fa)}</div>`;
  //         },
  //         item: function(data, escape) {
  //           return `<div>${escape(data.name_fa)}</div>`;
  //         }
  //       },
  //       onChange: function(value) {
  //         const selectedCity = cities.find(city => city.code == value);
  //         if (selectedCity) {
  //           updateUserData({
  //             EndPlace: selectedCity.name_fa,
  //             EndPlaceCode: selectedCity.code
  //           });
  //         }
  //       }
  //     });
  
  //     // تأخیر برای اطمینان از بارگذاری userData
  //     setTimeout(() => {
  //       // تنظیم مقادیر از userData اگر وجود داشته باشد
  //       if (userData[0]?.StartPlaceCode && originTomSelect) {
  //         try {
  //           originTomSelect.setValue(userData[0].StartPlaceCode, true);
  //         } catch (error) {
  //           console.error('Error setting origin value:', error);
  //         }
  //       }
        
  //       if (userData[0]?.EndPlaceCode && destinationTomSelect) {
  //         try {
  //           destinationTomSelect.setValue(userData[0].EndPlaceCode, true);
  //         } catch (error) {
  //           console.error('Error setting destination value:', error);
  //         }
  //       }
  //     }, 100); // تأخیر 100 میلی‌ثانیه
  //   }
  // };

  // const initializeTomSelect = () => {
  //   if (window.TomSelect && originSelectRef.current && destinationSelectRef.current) {
  //     // استفاده از cityList از API یا defaultCities
  //     const cities = cityList ;
  
  //     if (!cities || cities.length == 0) {
  //       console.warn('No cities available for TomSelect');
  //       return;
  //     }
  //     // شهر مبدا
  //     originTomSelect = new window.TomSelect(originSelectRef.current, {
  //       valueField: 'code',
  //       labelField: 'name_fa',
  //       searchField: ['name_fa'],
  //       options: cities.map(city => ({
  //         code: city.code,
  //         name_fa: city.name_fa
  //       })),
  //       create: false,
  //       maxOptions: 50,
  //       plugins: ['clear_button'],
  //       render: {
  //         option: function(data, escape) {
  //           return `<div>${escape(data.name_fa)}</div>`;
  //         },
  //         item: function(data, escape) {
  //           return `<div>${escape(data.name_fa)}</div>`;
  //         }
  //       },
  //       onChange: function(value) {
  //         const selectedCity = cities.find(city => city.code == value);
  //         if (selectedCity) {
  //           updateUserData({
  //             StartPlace: selectedCity.name_fa,
  //             StartPlaceCode: selectedCity.code
  //           });
  //         }
  //       }
  //     });
  
  //     // شهر مقصد
  //     destinationTomSelect = new window.TomSelect(destinationSelectRef.current, {
  //       valueField: 'code',
  //       labelField: 'name_fa',
  //       searchField: ['name_fa'],
  //       options: cities.map(city => ({
  //         code: city.code,
  //         name_fa: city.name_fa
  //       })),
  //       create: false,
  //       maxOptions: 50,
  //       plugins: ['clear_button'],
  //       render: {
  //         option: function(data, escape) {
  //           return `<div>${escape(data.name_fa)}</div>`;
  //         },
  //         item: function(data, escape) {
  //           return `<div>${escape(data.name_fa)}</div>`;
  //         }
  //       },
  //       onChange: function(value) {
  //         const selectedCity = cities.find(city => city.code == value);
  //         if (selectedCity) {
  //           updateUserData({
  //             EndPlace: selectedCity.name_fa,
  //             EndPlaceCode: selectedCity.code
  //           });
  //         }
  //       }
  //     });
  
  //     // تأخیر برای اطمینان از بارگذاری userData
  //     setTimeout(() => {
  //       // تنظیم مقادیر از userData اگر وجود داشته باشد
  //       if (userData[0]?.StartPlaceCode && originTomSelect) {
  //         try {
  //           originTomSelect.setValue(userData[0].StartPlaceCode, true);
  //         } catch (error) {
  //           console.error('Error setting origin value:', error);
  //         }
  //       }
        
  //       if (userData[0]?.EndPlaceCode && destinationTomSelect) {
  //         try {
  //           destinationTomSelect.setValue(userData[0].EndPlaceCode, true);
  //         } catch (error) {
  //           console.error('Error setting destination value:', error);
  //         }
  //       }
  //     }, 100); // تأخیر 100 میلی‌ثانیه
  //   }
  // };

  const [originCity, setOriginCity] = useState(userData[0]?.StartPlaceCode );
const [destinationCity, setDestinationCity] = useState(userData[0]?.EndPlaceCode );

const initializeTomSelect = () => {
  if (window.TomSelect && originSelectRef.current && destinationSelectRef.current) {
    const cities = cityList.length > 0 ? cityList : defaultCities;

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
        const selectedCity = cities.find(city => city.code == value);
        if (selectedCity) {
          setOriginCity(value);
          updateUserData({
            StartPlace: selectedCity.name_fa,
            StartPlaceCode: selectedCity.code
          });
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
        const selectedCity = cities.find(city => city.code == value);
        if (selectedCity) {
          setDestinationCity(value);
          updateUserData({
            EndPlace: selectedCity.name_fa,
            EndPlaceCode: selectedCity.code
          });
        }
      }
    });

    // تنظیم مقادیر اولیه
    if (userData[0]?.StartPlaceCode) {
      setTimeout(() => {
        originTomSelect.setValue(userData[0].StartPlaceCode, true);
      }, 100);
    }
    if (userData[0]?.EndPlaceCode) {
      setTimeout(() => {
        destinationTomSelect.setValue(userData[0].EndPlaceCode, true);
      }, 100);
    }
  }
};

  // تابع جستجو با اعتبارسنجی کامل
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('userData[0]',userData[0])
    // console.log('departureDate',departureDate)
    // اعتبارسنجی فیلدهای ضروری
    if (!departureDate) {
      alert('لطفاً  تاریخ را انتخاب کنید');
      return;
    }

    // بررسی اینکه مبدا و مقصد یکسان نباشند
    if (userData[0].StartPlaceCode === userData[0].EndPlaceCode) {
      alert('مبدا و مقصد نمی‌توانند یکسان باشند');
      return;
    }

    // به‌روزرسانی آخرین تغییرات در userData
    updateUserData({
      DepartureDate: departureDate.toISOString()
    });

    // هدایت به صفحه نتایج جستجو
    navigate('/search-results', { 
      state: { 
        searchData: {
          ...userData[0],
          DepartureDate: departureDate.toISOString()
        }
      } 
    });
  };

  // مدیریت تغییر تاریخ
  const handleDateChange = (newDate) => {
    setDepartureDate(newDate);
    updateUserData({
      DepartureDate: newDate ? newDate.toISOString() : null
    });
  };

  // تابع برای مدیریت تعداد مسافران
  const updatePassengerCount = (type, operation) => {
    const currentPassengers = userData[0]?.Passengers || {
      adults: 0,
      children: 0,
      infants: 0
    };
    
    const newCount = operation === 'increase' 
      ? currentPassengers[type] + 1 
      : Math.max(0, currentPassengers[type] - 1);
    
    const newPassengers = {
      ...currentPassengers,
      [type]: newCount
    };
    
    updateUserData({
      Passengers: newPassengers
    });
  };

  // دریافت تعداد کل مسافران
  const getTotalPassengers = () => {
    const passengers = userData[0]?.Passengers || {
      adults: 0,
      children: 0,
      infants: 0
    };
    return passengers.adults + passengers.children + passengers.infants;
  };

  // تبدیل select به option برای backward compatibility
  const getCurrentStartPlaceCode = () => {
    return userData[0]?.StartPlaceCode || '';
  };

  const getCurrentEndPlaceCode = () => {
    return userData[0]?.EndPlaceCode || '';
  };

  useEffect(() => {
    // لود اسکریپت‌های خارجی
    const loadExternalScripts = () => {
      const scripts = [
        { src: './vendor/lib/filterizr/vanilla.filterizr.min.js', async: true },
        { src: './vendor/lib/lozad/lozad.min.js', async: true },
        { src: './vendor/lib/bootstrap/js/bootstrap.bundle.min.js', async: true },
        { src: './vendor/lib/jalaliDatePicker/jalalidatepicker.min.js', async: true },
        { src: './vendor/lib/tom-select/tom-select.complete.min.js', async: true },
        { src: './vendor/lib/nouislider/nouislider.min.js', async: true },
        { src: './js/script.js', async: true }
      ];

      scripts.forEach(script => {
        const scriptElement = document.createElement('script');
        scriptElement.src = script.src;
        if (script.async) scriptElement.async = true;
        document.body.appendChild(scriptElement);
      });
    };

    // لود CSSهای اضافی
    const loadExternalCSS = () => {
      const cssLinks = [
        './vendor/fonts/tabler/tabler-icons.css',
        './vendor/lib/jalaliDatePicker/jalalidatepicker.min.css',
        './vendor/lib/tom-select/tom-select.min.css',
        './vendor/lib/nouislider/nouislider.min.css',
        './css/bootstrap-custom.css',
        './css/style.css'
      ];

      cssLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    // تنظیمات اولیه صفحه
    document.documentElement.lang = 'fa';
    document.documentElement.dir = 'rtl';
    document.documentElement.setAttribute('data-bs-theme', 'light');

    // اجرای لودها با تاخیر
    setTimeout(loadExternalCSS, 100);
    setTimeout(loadExternalScripts, 300);

    // Initialize tom-select بعد از لود شدن اسکریپت و شهرها
    const initScripts = setInterval(() => {
      if (window.TomSelect && !loading) {
        initializeTomSelect();
        clearInterval(initScripts);
      }
    }, 100);

    return () => {
      // Cleanup
      document.documentElement.dir = '';
      document.documentElement.removeAttribute('data-bs-theme');
      if (originTomSelect) originTomSelect.destroy();
      if (destinationTomSelect) destinationTomSelect.destroy();
    };
  }, [cityList, loading]);

  // باز کردن مودال
  const openModal = (modalId) => {
    const modalElement = document.getElementById(modalId);
    if (modalElement && window.bootstrap) {
      const modal = new window.bootstrap.Modal(modalElement);
      modal.show();
    }
  };

  // تابع کمکی برای لینک‌های خارجی
  const handleExternalLink = (url) => {
    window.location.href = url;
  };

  // داده‌های بخش اخبار
  const topOffersSlides = [
    {
      id: 1,
      image: "../img/pages/index/slider/Persepolis.jpg",
      title: "تخت جمشید؛ میراث جهانی بشری",
      description: "سفری تاریخی برای آشنایی از نزدیک این بنای تاریخی",
      link: '/destinations/persepolis'
    },
    {
      id: 2,
      image: "../img/pages/index/slider/Shiraz.jpg",
      title: "شیراز؛ شهر عشق و دلدادگی",
      description: "به شهری سفر کنید که عطر بهارنارنج آن شما را به وجد می‌آورد",
      link: '/destinations/shiraz'
    },
    {
      id: 3,
      image: "../img/pages/index/slider/Kashan.jpg",
      title: "کاشان؛ نگین کویر ایران",
      description: "سفر به شهری که عطر گلاب آن شما را به وجد می‌آورد",
      link: '/destinations/kashan'
    },
    {
      id: 4,
      image: "../img/pages/index/slider/Isfahan.jpg",
      title: "اصفهان؛ موزه زنده ایران",
      description: "سفر به شهری که تاریخ و فرهنگ ایران را در خود جای داده است",
      link: '/destinations/isfahan'
    },
    {
      id: 5,
      image: "../img/pages/index/slider/Kerman.jpg",
      title: "کرمان؛ شهری با هزار و یک راز",
      description: "سفر به شهری که تاریخ و فرهنگ ایران را در خود جای داده است",
      link: '/destinations/kerman'
    },
    {
      id: 6,
      image: "../img/pages/index/slider/masuleh.jpg",
      title: "ماسوله؛ نگین گیلان",
      description: "سفری به روستایی با معماری پلکانی و طبیعتی بکر و دست‌نخورده.",
      link: '/destinations/masuleh'
    },
    {
      id: 7,
      image: "../img/pages/index/slider/mazandaran.jpg",
      title: "مازندران؛ سرزمین آبشارها و رودخانه‌ها",
      description: "در دل طبیعت گشت و گذار کنید و از زیبایی‌های آن لذت ببرید",
      link: '/destinations/mazandaran'
    },
    {
      id: 8,
      image: "../img/pages/index/slider/Tabriz.jpg",
      title: "تبریز؛ شهری با تاریخ کهن",
      description: "سفری به شهری با معماری بی‌نظیر و فرهنگی غنی.",
      link: '/destinations/tabriz'
    },
    {
      id: 9,
      image: "../img/pages/index/slider/Mashhad.jpg",
      title: "مقصدی برای هر فصل از سال",
      description: "به مشهد سفر کنید و زیبایی‌های آن لذت ببرید",
      link: '/destinations/mashhad'
    }
  ];

  // داده‌های بخش مسیرهای پرمخاطب
  const popularRoutes = [
    {
      id: 1,
      origin: "جزیره کیش",
      destination: "تهران",
      price: "۱،۵۷۴،۰۰۰",
      link: '/routes/kish-tehran'
    },
    {
      id: 2,
      origin: "مشهد",
      destination: "تهران",
      price: "۱،۶۳۷،۰۰۰",
      link: '/routes/mashhad-tehran'
    },
    {
      id: 3,
      origin: "اهواز",
      destination: "تهران",
      price: "۲،۳۵۱،۰۰۰",
      link: '/routes/ahvaz-tehran'
    },
    {
      id: 4,
      origin: "شیراز",
      destination: "تهران",
      price: "۲،۶۷۰،۰۰۰",
      link: '/routes/shiraz-tehran'
    },
    {
      id: 5,
      origin: "جزیره کیش",
      destination: "تهران",
      price: "۱،۵۷۴،۰۰۰",
      link: '/routes/kish-tehran'
    }
  ];

  // State برای مدیریت آکاردئون FAQ
  const [activeFaq, setActiveFaq] = useState(null);

  // تابع toggle برای آکاردئون
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
      {/* ---------------------------- Offcanvas Menu ---------------------------- */}
      <div className="offcanvas offcanvas-start" id="offcanvasMenu" tabIndex="-1" aria-labelledby="offcanvasMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-muted" id="offcanvasMenuLabel">منو کاربری</h5>
          <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="h-100 nt-flex-column">
            <div className="w-100 flex-grow-1">
              {/* logo & dark theme*/}
              <div className="nt-flex-between-center gap-2 mb-4">
                {/* logo*/}
                <div className="nt-flex-start-center">
                  <img src="./img/logo-m.png" alt="پرتو سیر" width="80"/>
                </div>
                {/* dark theme*/}
                <button className="btnSwitch btn btn-lg btn-light" type="button" aria-label="تغییر حالت روشن و تاریک سایت">
                  <i className="ti ti-sun fs-5" aria-hidden="true"></i>
                </button>
              </div>
              <div className="accordion accordion-flush" id="accordionOffcanvasMenu">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#accordionOffcanvasMenu1" aria-expanded="false" aria-controls="accordionOffcanvasMenu1">
                      خدمات سفر
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse" id="accordionOffcanvasMenu1" data-bs-parent="#accordionOffcanvasMenu">
                    <div className="accordion-body">
                      <ul className="list-unstyled nt-flex-column">
                        <li>
                          <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/')}>
                            <i className="ti ti-plane-inflight fs-4" aria-hidden="true"></i>
                            اتوبوس
                          </button>
                        </li>
                        <li>
                          <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/booking-taxi')}>
                            <i className="ti ti-plane-departure fs-4" aria-hidden="true"></i>
                            تاکسی
                          </button>
                        </li>
                        <li>
                          <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/booking-van')}>
                            <i className="ti ti-train fs-4" aria-hidden="true"></i>
                            ون
                          </button>
                        </li>
                        <li>
                          <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/booking-bar')}>
                            <i className="ti ti-bus fs-4" aria-hidden="true"></i>
                            باربری
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="nt-flex-column">
                <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/about-us')}>درباره ما</button>
                <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/contact')}>تماس با ما</button>
                <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/branches')}>ایستگاه ها</button>
                <button className="btn btn-link link-dark fs-5" onClick={() => navigate('/reserved-tickets')}>بلیط های رزرو شده</button>
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

      {/* --------------------------- Offcanvas Profile -------------------------- */}
      <div className="offcanvas offcanvas-start" id="offcanvasProfile" tabIndex="-1" aria-labelledby="offcanvasProfileLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasProfileLabel">پروفایل کاربری</h5>
          <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="p-2">
            <div className="nt-flex-column-center-center mb-4">
              <div className="border border-primary rounded-circle position-relative">
                {/* badge*/}
                <span className="position-absolute top-0 start-0 translate-middle badge rounded bg-success" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="تایید شده">
                  <i className="ti ti-checks fs-5" aria-hidden="true"></i>
                  <span className="visually-hidden">تایید شده</span>
                </span>
                {/* avatar*/}
                <img src="./img/layouts/avatar/m1.png" alt="پرتو سیر"/>
              </div>
              {/* name & phone*/}
              <div className="nt-flex-column">
                {/* name*/}
                <div className="profile-title">علی محمدی</div>
                {/* phone*/}
                <div className="text-muted">09121234567</div>
              </div>
            </div>
            {/* wallet wrapper*/}
            <div className="bg-secondary text-white rounded p-3 mb-4">
              <div className="nt-flex-between-start gap-2">
                {/* wallet*/}
                <div className="nt-flex-column gap-3">
                  <div className="nt-flex text-dark">
                    <i className="ti ti-wallet fs-3" aria-hidden="true"></i>
                    موجودی حساب
                  </div>
                  <button className="btn btn-sm btn-secondary" onClick={() => navigate('/profile-transactions')}>
                    <i className="ti ti-plus fs-5" aria-hidden="true"></i>
                    <span className="small">افزایش موجودی</span>
                  </button>
                </div>
                {/* money*/}
                <div className="nt-flex">
                  <div className="badge text-bg-light">۰</div>
                  <div className="small text-dark">تومان</div>
                </div>
              </div>
            </div>
            <div className="text-muted fw-bold small mb-3">منو کاربری</div>
            <nav className="profile-menu">
              <button className="btn btn-outline-light" onClick={() => navigate('/profile')}>
                <i className="ti ti-user fs-4" aria-hidden="true"></i>
                حساب کاربری
              </button>
              <button className="btn btn-outline-light" onClick={() => navigate('/profile-orders')}>
                <i className="ti ti-luggage fs-4" aria-hidden="true"></i>
                سفر های من
              </button>
              <button className="btn btn-outline-light" onClick={() => navigate('/profile-passengers')}>
                <i className="ti ti-users-group fs-4" aria-hidden="true"></i>
                لیست های مسافران
              </button>
              <button className="btn btn-outline-light" onClick={() => navigate('/profile-wishlist')}>
                <i className="ti ti-heart fs-4" aria-hidden="true"></i>
                علاقه مندی ها
              </button>
              <button className="btn btn-outline-light" onClick={() => navigate('/profile-ticketing')}>
                <i className="ti ti-headset fs-4" aria-hidden="true"></i>
                درخواست پشتیبانی
              </button>
              <button className="btn btn-outline-light" onClick={() => navigate('/profile-transactions')}>
                <i className="ti ti-businessplan fs-4" aria-hidden="true"></i>
                                موجودی و اعتبار من
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* ------------------------------ Modal Sign ------------------------------ */}
      <div className="modal fade" id="signModal" tabIndex="-1" aria-labelledby="signModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="wrapper-xs py-5 text-center">
                <div className="fs-5 fw-bold mb-2">ورود یا ثبت‌نام</div>
                <p className="lead">برای ادامه شماره موبایل خود را وارد کنید.</p>
                <form action="">
                  <div className="form-floating mb-2">
                    <input className="form-control form-control-lg" type="tel" name="" placeholder="شماره موبایل" id="floatingInput"/>
                    <label htmlFor="floatingInput">شماره موبایل</label>
                  </div>
                  <div className="nt-flex-center-center gap-1 small mb-4">
                    <i className="ti ti-info-circle fs-5 text-muted" aria-hidden="true"></i>
                    استفاده از پرتو سیر به معنی پذیرش
                    <button className="link" onClick={() => navigate('/terms')}>قوانین و مقررات</button>
                    این سرویس است.
                  </div>
                  <div className="d-grid gap-3">
                    <button className="btn btn-primary btn-lg" type="submit">تایید و دریافت</button>
                    {/* <button className="btn btn-link" type="button">ورود با کلمه عبور</button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------ Modal share ----------------------------- */}
      <div className="modal fade" id="shareModal" tabIndex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="shareModalLabel">اشتراک گذاری</h1>
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="wrapper-xs py-5 text-center">
                <nav className="nt-flex-around-center gap-4 mb-5" aria-label="پیوند های شبکه های اجتماعی">
                  <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="از صفحه فیس بوک ما دیدن کنید">
                    <i className="ti ti-brand-facebook fs-3" aria-hidden="true"></i>
                  </button>
                  <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="از صفحه X (که قبلاً توییتر بود) ما بازدید کنید">
                    <i className="ti ti-brand-x fs-3" aria-hidden="true"></i>
                  </button>
                  <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="به صفحه اینستاگرام ما مراجعه کنید">
                    <i className="ti ti-brand-instagram fs-3" aria-hidden="true"></i>
                  </button>
                  <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="با ما در WhatsApp گپ بزنید">
                    <i className="ti ti-brand-whatsapp fs-3" aria-hidden="true"></i>
                  </button>
                  <button className="btn btn-lg btn-outline-dark py-3 rounded-circle" type="button" aria-label="در تلگرام به ما بپیوندید">
                    <i className="ti ti-brand-telegram fs-3" aria-hidden="true"></i>
                  </button>
                </nav>
                <div className="input-group">
                  <input className="form-control form-control" type="text" id="shareLink" defaultValue="https://netthemes.ir/html/parnet" dir="ltr" readOnly="readonly"/>
                  <button className="btn btn-primary" type="button" id="copyLinkBtn">کپی لینک</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------- Header -------------------------------- */}
   <Header />

      {/* ------------------------------------------------------------------------ */}
      {/*                                   Main                                   */}
      {/* ------------------------------------------------------------------------ */}
      <main className="main">
        {/* booking ------------------------------- */}
        <section className="booking-wrapper" style={{backgroundImage: "url(img/pages/index/booking/sliderf.webp)"}}>
          <div className="container g-0 booking-inner shadow-sm">
            <nav className="booking-nav">
              <button className="btn active" 
              // onClick={() => navigate('/')}
              >
                <i className="ti ti-bus fs-2" aria-hidden="true"></i>
                اتوبوس
              </button>
              <button className="btn" 
              // onClick={() => navigate('/booking-taxi')}
              >
                <i className="ti ti-car fs-2" aria-hidden="true"></i>
                تاکسی
              </button>
              <button className="btn" 
              //onClick={() => navigate('/booking-van')}
              >
                <i className="ti ti-rv-truck fs-2" aria-hidden="true"></i>
                ون
              </button>
              <button className="btn"
              //  onClick={() => navigate('/booking-bar')}
              >
                <i className="ti ti-truck fs-2" aria-hidden="true"></i>
                باربری
              </button>
            </nav>
            <div className="container g-3">
              <form className="row g-3 booking-form" onSubmit={handleSearch}>
                {/* top row ------------------------------- */}
                <div className="col-12">
                  <div className="nt-flex gap-3 mb-2">
                  
                  </div>
                </div>
                {/* bottom row ------------------------------ */}
                <div className="col-12 col-md-6 col-lg-5">
                  {/* from & to*/}
                  <div className="booking-fromTo">
                    <select 
                      ref={originSelectRef}
                      className="tom-select-header form-select" 
                      placeholder="مبدا (شهر)" 
                      autoComplete="off"
                      defaultValue={getCurrentStartPlaceCode()}
                    >
                      <option value="">مبدا (شهر)</option>
                      {cityList?.map(city => (
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
                      defaultValue={getCurrentEndPlaceCode()}
                    >
                      <option value="">مقصد (شهر)</option>
                      {cityList?.map(city => (
                        <option key={city.code} value={city.code}>
                          {city.name_fa}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* departure & return*/}
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="booking-departureReturn">
                    <DatePicker
                      label="تاریخ"
                      value={userData[0]?.currentDate}
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
                    {/* <input className="form-control" id="bookingTo" type="text" name="" placeholder="تاریخ برگشت" data-jdp="" disabled="disabled"/> */}
                  </div>
                </div>
                {/* travelers*/}
                {/* <div className="col-6 col-md-6 col-lg-2">
                  <div className="w-100 btn-group booking-travelers">
                    <button className="btn btn-white dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                      <span id="total-travelers">{getTotalPassengers()}</span>مسافر
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" data-bs-auto-close="outside">
                      <div className="dropdown-item">
                        <div className="nt-flex-start-center">
                          <div className="nt-flex-start-center gap-1 flex-grow-1">
                            بزرگسال
                            <div className="text-muted">(۱۲ سال به بالا)</div>
                          </div>
                          <div className="nt-flex-start-center gap-3">
                            <button className="btn btn-primary btn-sm" onClick={() => updatePassengerCount('adults', 'increase')} type="button" aria-label="تعداد را افزایش دهید">
                              <i className="ti ti-plus" aria-hidden="true"></i>
                            </button>
                            <span id="adults-count">{userData?.[0]?.Passengers?.adults || 0}</span>
                            <button className="btn btn-primary btn-sm" onClick={() => updatePassengerCount('adults', 'decrease')} type="button" aria-label="تعداد را کاهش دهید">
                              <i className="ti ti-minus" aria-hidden="true"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="nt-flex-start-center">
                          <div className="nt-flex-start-center gap-1 flex-grow-1">
                            کودک
                            <div className="text-muted">(۲ تا ۱۲ سال)</div>
                          </div>
                          <div className="nt-flex-start-center gap-3">
                            <button className="btn btn-primary btn-sm" onClick={() => updatePassengerCount('children', 'increase')} type="button" aria-label="تعداد را افزایش دهید">
                              <i className="ti ti-plus" aria-hidden="true"></i>
                            </button>
                            <span id="children-count">{userData?.[0]?.Passengers?.children || 0}</span>
                            <button className="btn btn-primary btn-sm" onClick={() => updatePassengerCount('children', 'decrease')} type="button" aria-label="تعداد را کاهش دهید">
                              <i className="ti ti-minus" aria-hidden="true"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="nt-flex-start-center">
                          <div className="nt-flex-start-center gap-1 flex-grow-1">
                            نوزاد
                            <div className="text-muted">(۱۰ روز تا ۲ سال)</div>
                          </div>
                          <div className="nt-flex-start-center gap-3">
                            <button className="btn btn-primary btn-sm" onClick={() => updatePassengerCount('infants', 'increase')} type="button" aria-label="تعداد را افزایش دهید">
                              <i className="ti ti-plus" aria-hidden="true"></i>
                            </button>
                            <span id="infants-count">{userData?.[0]?.Passengers?.infants || 0}</span>
                            <button className="btn btn-primary btn-sm" onClick={() => updatePassengerCount('infants', 'decrease')} type="button" aria-label="تعداد را کاهش دهید">
                              <i className="ti ti-minus" aria-hidden="true"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div> */}
                {/* search (submit)*/}
                <div className="col-6 col-md-6 col-lg-2">
                  <button className="btn btn-primary booking-submit" type="submit">
                    جستجو
                    <i className="ti ti-search fs-5" aria-hidden="true"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* top offers slider -------------------------- */}
        <section className="container topOffersSlider py-5">
          <div className="nt-flex-between-center mb-4">
            <div className="nt-flex-start-center gap-2">
              <i className="ti ti-award text-secondary fs-3" aria-hidden="true"></i>
              <div className="fw-bold fs-5">اخبار</div>
            </div>
          </div>
          <div className="swiper-container pb-5">
            <Swiper {...topOffersSwiperOptions} className="pb-5">
              {topOffersSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div 
                    className="swiper-slide" 
                    style={{backgroundImage: `url(${slide.image})`}}
                  >
                    <button 
                      className="link topOffersSlider-slide p-3" 
                      onClick={() => navigate(slide.link)}
                    >
                      <div className="topOffersSlider-slide-content">
                        <div className="nt-flex-between-center flex-nowrap">
                          <div className="nt-flex-column">
                            <div className="fs-5">{slide.title}</div>
                            <div className="small">{slide.description}</div>
                          </div>
                          <div className="btn btn-dark">
                            <i className="ti ti-arrow-up-left fs-3" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </section>

        {/* popular routes ---------------------------- */}
        <section className="popularRoutes container py-5 mb-4">
          <div className="nt-flex-start-center gap-2 fw-bold fs-5 mb-4">
            <i className="ti ti-bus text-primary fs-3" aria-hidden="true"></i>
            مسیر های پرمخاطب
          </div>
          <div className="swiper-container pb-5">
            <Swiper {...popularRoutesSwiperOptions} className="pb-5">
              {popularRoutes.map((route) => (
                <SwiperSlide key={route.id}>
                  <div className="swiper-slide">
                    <a className="link" >
                      <div className="flex-grow-1 p-4">
                        <div className="row align-items-center mb-3">
                          <div className="col-auto">
                            <div className="text-muted">مبدا</div>
                          </div>
                          <div className="col">
                            <div className="nt-PathVisualizer reversed-icon">
                              <div className="nt-PathVisualizer-line"></div>
                              <i className="ti ti-plane fs-5 text-muted" aria-hidden="true"></i>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="text-muted">مقصد</div>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <div className="fs-5">{route.origin}</div>
                          </div>
                          <div className="col"></div>
                          <div className="col-auto">
                            <div className="fs-5">{route.destination}</div>
                          </div>
                        </div>
                      </div>
                      <div className="popularRoutes-price py-3 px-4">
                        {/* <div className="text-muted small">شروع قیمت از</div>
                        <div className="fs-6">{route.price} تومان</div> */}
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
        </section>

        {/* full cover ------------------------------ */}
        <section className="container py-3 mb-5">
          <div className="row g-0 bg-light-subtle border border-1 rounded">
            <div className="col-12 col-md-4 order-md-last">
              <img className="lozad rounded" src="img/pages/index/bus.png" alt="cover"/>
            </div>
            <div className="col-12 col-md-3 offset-md-1">
              <div className="h-100 nt-flex-column-center-start gap-4 p-4">
                <div className="fs-2 fw-bold">خرید تلفنی</div>
                <div className="fs-3 lead fw-bold">سفر، تنها محدود به آرزوهای توست!</div>
                <div className="nt-flex-start-center fs-3 fw-bold">01133243056</div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="h-100 nt-flex-column-center-center gap-4 py-4">
                <a className="btn btn-lg btn-secondary" >
                  اطلاعات بیشتر
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* download app ----------------------------- */}
        <section className="container py-5 mb-5">
          <div className="row g-0">
            <div className="col-12 col-md-4">
              <div className="h-100 nt-flex-column-center-center p-5">
                <img className="lozad rounded" src="img/pages/index/app-2.png" alt="پرتو سیر"/>
              </div>
            </div>
            <div className="col-12 col-md-6 offset-md-1">
              <div className="h-100 nt-flex-column-center-start gap-4 p-4">
                <div className="nt-flex-column">
                  <div className="fs-3 fw-bold">برنامه پرتو سیر رو دانلود کن</div>
                  <div className="fs-3 text-primary fw-bold">سفرت رو راحت‌تر کن</div>
                </div>
                <div className="lead">با اپلیکیشن پرتو سیر، بلیط، هتل و هرچیزی که برای سفر نیاز داری رو با چند تا لمس رزرو کن. از تخفیف‌های ویژه لذت ببر و سفرت رو هوشمندانه برنامه‌ریزی کن. همین حالا دانلود کن!</div>
                <div className="row align-items-center pb-4">
                  <div className="col-12 col-md-7">
                    <div className="row row-cols-md-2 g-3">
                      <div className="col-12 col-md">
                        <button className="w-100 btn btn-dark" onClick={() => handleExternalLink('https://play.google.com/store/apps/details?id=com.pertosir')}>
                          <i className="ti ti-brand-android fs-5" aria-hidden="true"></i>
                          دانلود نسخه اندروید
                        </button>
                      </div>
                      <div className="col-12 col-md">
                        <button className="btn btn-dark" onClick={() => handleExternalLink('https://apps.apple.com/app/pertosir')}>
                          <i className="ti ti-brand-apple fs-5" aria-hidden="true"></i>
                          دانلود اپل
                        </button>
                      </div>
                      <div className="col-12 col-md">
                        <button className="btn btn-dark" onClick={() => handleExternalLink('https://pertosir.com/app/download')}>
                          <i className="ti ti-download fs-5" aria-hidden="true"></i>
                          دانلود مستقیم
                        </button>
                      </div>
                      <div className="col-12 col-md">
                        <button className="btn btn-dark" onClick={() => navigate('/web-app')}>
                          <i className="ti ti-world fs-5" aria-hidden="true"></i>
                          وب اپلیکیشن
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-5">
                    <div className="nt-flex-column-center-center gap-1">
                      <img className="lozad rounded" src="./img/pages/index/qr.png" alt="پرتو سیر" width="150"/>
                      <div className="text-muted small">اسکن کنید و دانلود کنید!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* common questions --------------------------- */}
        <section className="commonQuestions py-5 mb-5">
          <div className="container py-5 mb-4">
            <div className="row g-0">
              <div className="col-12">
                <div className="w-100 nt-flex-between-center mb-4">
                  <div className="nt-flex-start-center fs-5 fw-bold">
                    <i className="ti ti-help-octagon text-primary fs-3" aria-hidden="true"></i>
                    پرسش های متداول
                  </div>
                  <div className="fs-5 text-light">FAQ's</div>
                </div>
              </div>
              <div className="col-12 border rounded">
                <div id="accordionFAQ">
                  {/* آیتم 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${activeFaq === 1 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(1)}
                        style={{ padding: '1rem 1.25rem' }}
                      >
                        <div className="d-flex align-items-center w-100">
                          <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3 flex-shrink-0">
                            <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
                          </div>
                          <div className="fs-5 flex-grow-1 text-start">آیا خرید بلیط اتوبوس برای کودکان و اطفال زیر ۲ سال الزامی است؟</div>
                          <i className={`ti ti-chevron-${activeFaq === 1 ? 'up' : 'down'} ms-2 flex-shrink-0`} aria-hidden="true"></i>
                        </div>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeFaq === 1 ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <p className="lead lh-lg text-muted">قیمت بلیط اتوبوس برای کودکان زیر دو سال، در صورتی که صندلی‌ به آن‌ها تعلق نگیرد رایگان است. اگر کودک به استفاده از صندلی نیاز داشته باشد، باید هزینه کامل بلیط اتوبوس را برایش پرداخت کنید تا صندلی متعلق به خودتان باشد.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* آیتم 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${activeFaq === 2 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(2)}
                        style={{ padding: '1rem 1.25rem' }}
                      >
                        <div className="d-flex align-items-center w-100">
                          <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3 flex-shrink-0">
                            <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
                          </div>
                          <div className="fs-5 flex-grow-1 text-start">نحوه رزرو بلیط اتوبوس در پرتو سیر چگونه است؟</div>
                          <i className={`ti ti-chevron-${activeFaq === 2 ? 'up' : 'down'} ms-2 flex-shrink-0`} aria-hidden="true"></i>
                        </div>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeFaq === 2 ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <p className="lead lh-lg text-muted">برای خرید اینترنتی بلیط اتوبوس در وب‌سایت یا اپلیکیشن پرتو سیر (بخش بلیط اتوبوس) مبدا، مقصد، تاریخ حرکت و تعداد بلیط خود را انتخاب می‌کنید. سپس می‌توانید بلیط‌های موجود را در تاریخ مدنظرتان ببینید و با کارت بانکی و رمز دوم، بلیط دلخواهتان را بخرید.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* آیتم 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${activeFaq === 3 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(3)}
                        style={{ padding: '1rem 1.25rem' }}
                      >
                        <div className="d-flex align-items-center w-100">
                          <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3 flex-shrink-0">
                            <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
                          </div>
                          <div className="fs-5 flex-grow-1 text-start">استعلام بلیط اتوبوس پرتو سیر چگونه است؟</div>
                          <i className={`ti ti-chevron-${activeFaq === 3 ? 'up' : 'down'} ms-2 flex-shrink-0`} aria-hidden="true"></i>
                        </div>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeFaq === 3 ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <p className="lead lh-lg text-muted">برای استعلام بلیط اتوبوس، کافی است به وب‌سایت یا اپلیکیشن پرتو سیر بروید و بعد از مشخص‌کردن مبدا و مقصد، لیست کامل اتوبوس‌های شرکت‌های مختلف را ببینید.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* آیتم 4 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${activeFaq === 4 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(4)}
                        style={{ padding: '1rem 1.25rem' }}
                      >
                        <div className="d-flex align-items-center w-100">
                          <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3 flex-shrink-0">
                            <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
                          </div>
                          <div className="fs-5 flex-grow-1 text-start">آیا بعد از خرید بلیط اتوبوس امکان تعویض صندلی وجود دارد؟</div>
                          <i className={`ti ti-chevron-${activeFaq === 4 ? 'up' : 'down'} ms-2 flex-shrink-0`} aria-hidden="true"></i>
                        </div>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeFaq === 4 ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <p className="lead lh-lg text-muted">خیر. بعد از خرید بلیط اتوبوس، امکان تعویض صندلی وجود ندارد.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* آیتم 5 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${activeFaq === 5 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(5)}
                        style={{ padding: '1rem 1.25rem' }}
                      >
                        <div className="d-flex align-items-center w-100">
                          <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3 flex-shrink-0">
                            <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
                          </div>
                          <div className="fs-5 flex-grow-1 text-start">آیا می‌توانم اطلاعات بلیط اتوبوس خریداری‌شده را ویرایش کنم؟</div>
                          <i className={`ti ti-chevron-${activeFaq === 5 ? 'up' : 'down'} ms-2 flex-shrink-0`} aria-hidden="true"></i>
                        </div>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeFaq === 5 ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <p className="lead lh-lg text-muted">خیر. بعد از خرید بلیط اتوبوس، امکان ویرایش اطلاعات آن وجود ندارد. درصورت نیاز، باید بلیط خود را استرداد کنید و بلیط جدیدی با اطلاعات جدید تهیه کنید. طبیعی است که طبق قوانین، استرداد بلیط اتوبوس با درصدی جریمه همراه است (گاهی تا 100 درصد جریمه).</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* آیتم 6 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${activeFaq === 6 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(6)}
                        style={{ padding: '1rem 1.25rem' }}
                      >
                        <div className="d-flex align-items-center w-100">
                          <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3 flex-shrink-0">
                            <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
                          </div>
                          <div className="fs-5 flex-grow-1 text-start">در صورت اشتباه در خرید آنلاین بلیط اتوبوس چکار کنیم؟</div>
                          <i className={`ti ti-chevron-${activeFaq === 6 ? 'up' : 'down'} ms-2 flex-shrink-0`} aria-hidden="true"></i>
                        </div>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeFaq === 6 ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <p className="lead lh-lg text-muted">در خرید آنلاین بلیط اتوبوس اگر اشتباهات در حد ایرادات ساده نگارشی باشد، می‌توانید این موضوع را با تعاونی مطرح کنید. اگر هم خطا در انتخاب مسیر باشد، باید بلیط خودتان را استرداد کنید و بلیط بخرید. طبق قوانین، استرداد بلیط اتوبوس با درصدی جریمه همراه است.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* آیتم 7 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${activeFaq === 7 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(7)}
                        style={{ padding: '1rem 1.25rem' }}
                      >
                        <div className="d-flex align-items-center w-100">
                          <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3 flex-shrink-0">
                            <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
                          </div>
                          <div className="fs-5 flex-grow-1 text-start">چطور مطمئن شوم خرید بلیط اتوبوس با موفقیت انجام شده؟</div>
                          <i className={`ti ti-chevron-${activeFaq === 7 ? 'up' : 'down'} ms-2 flex-shrink-0`} aria-hidden="true"></i>
                        </div>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeFaq === 7 ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <p className="lead lh-lg text-muted">اگر خرید بلیط اتوبوس با موفقیت انجام شود، یک پیامک از پرتو سیر برای شما ارسال خواهد شد. در این پیامک شماره سفارش شما، اطلاعات اتوبوس وجود دارد.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* آیتم 8 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${activeFaq === 8 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(8)}
                        style={{ padding: '1rem 1.25rem' }}
                      >
                        <div className="d-flex align-items-center w-100">
                          <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3 flex-shrink-0">
                            <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
                          </div>
                          <div className="fs-5 flex-grow-1 text-start">آیا قیمت بلیط اتوبوس در خرید اینترنتی با خرید حضوری فرق می‌کند؟</div>
                          <i className={`ti ti-chevron-${activeFaq === 8 ? 'up' : 'down'} ms-2 flex-shrink-0`} aria-hidden="true"></i>
                        </div>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeFaq === 8 ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <p className="lead lh-lg text-muted">خیر. قیمت بلیط اتوبوس در خرید اینترنتی و حضوری تفاوتی ندارد؛ اما توجه داشته باشید که خرید اینترنتی بلیط اتوبوس سریع‌ترین راه خرید بلیط است. در هر زمان از شبانه‌روز امکان دسترسی به تمام بلیط‌ها در پرتو سیر وجود دارد. علاوه بر این، در خرید اینترنتی بلیط اتوبوس در پرتو سیر، امکان جانمایی صندلی هم وجود دارد.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* آیتم 9 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${activeFaq === 9 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(9)}
                        style={{ padding: '1rem 1.25rem' }}
                      >
                        <div className="d-flex align-items-center w-100">
                          <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3 flex-shrink-0">
                            <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
                          </div>
                          <div className="fs-5 flex-grow-1 text-start">امکان حمل حیوانات خانگی در داخل اتوبوس وجود دارد؟</div>
                          <i className={`ti ti-chevron-${activeFaq === 9 ? 'up' : 'down'} ms-2 flex-shrink-0`} aria-hidden="true"></i>
                        </div>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeFaq === 9 ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <p className="lead lh-lg text-muted">طبق قوانین سازمان حمل‌ونقل امکان حمل حیوانات در اتوبوس وجود ندارد.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* آیتم 10 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${activeFaq === 10 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(10)}
                        style={{ padding: '1rem 1.25rem' }}
                      >
                        <div className="d-flex align-items-center w-100">
                          <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3 flex-shrink-0">
                            <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
                          </div>
                          <div className="fs-5 flex-grow-1 text-start">مدارک مورد نیاز برای استفاده از اتوبوس چیست؟</div>
                          <i className={`ti ti-chevron-${activeFaq === 10 ? 'up' : 'down'} ms-2 flex-shrink-0`} aria-hidden="true"></i>
                        </div>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeFaq === 10 ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <p className="lead lh-lg text-muted">به همراه داشتن کارت شناسایی معتبر (کارت ملی یا شناسنامه) برای دریافت بلیط الزامی است.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* آیتم 11 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${activeFaq === 11 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(11)}
                        style={{ padding: '1rem 1.25rem' }}
                      >
                        <div className="d-flex align-items-center w-100">
                          <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3 flex-shrink-0">
                            <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
                          </div>
                          <div className="fs-5 flex-grow-1 text-start">جهت سوار شدن به اتوبوس چه مدت قبل از حرکت در ترمینال حضور داشته باشیم؟</div>
                          <i className={`ti ti-chevron-${activeFaq === 11 ? 'up' : 'down'} ms-2 flex-shrink-0`} aria-hidden="true"></i>
                        </div>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeFaq === 11 ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <p className="lead lh-lg text-muted">در صورتی که حرکت سرویس در ساعت مقرر انجام گردد مسافر می بایست حداکثر 30 دقیقه قبل حرکت سرویس در ترمینال مبدا حضور داشته باشد.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* آیتم 12 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${activeFaq === 12 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(12)}
                        style={{ padding: '1rem 1.25rem' }}
                      >
                        <div className="d-flex align-items-center w-100">
                          <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3 flex-shrink-0">
                            <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
                          </div>
                          <div className="fs-5 flex-grow-1 text-start">میزان بار مجاز هر مسافر در سفر با اتوبوس چقدر است؟</div>
                          <i className={`ti ti-chevron-${activeFaq === 12 ? 'up' : 'down'} ms-2 flex-shrink-0`} aria-hidden="true"></i>
                        </div>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeFaq === 12 ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <p className="lead lh-lg text-muted">طبق قوانین سازمان حمل‌ونقل میزان بار مجاز 20 کیلوگرم است. البته برخی از تعاونی‌ها با دریافت هزینه، امکان حمل بار تا 40 کیلوگرم را نیز ارائه می‌دهند. همچنین یکی دیگر از مسائلی که در این زمینه باید مد نظر قرار بدهید، تعاونی اتوبوس شماست. معمولا تعاونی ها، علاوه بر قوانین کلی میزان بار مجاز، قوانین خاص خودشان را دارند که در بعضی موارد، با قوانین تعاونی های دیگر فرق می‌کند. برای این که از میزان بار مجازتان مطمئن شوید و در حین سفر به مشکل برنخورید، به تعاونی که از آن بلیط تهیه کرده‌اید زنگ زده و از آن‌ها سوال کنید. به این موضوع هم دقت کنید که اگر میزان بار اضافه شما بیش از حد باشد، متصدی اتوبوس ممکن است از گذاشتن آن‌ها در اتوبوس ممانعت کند. در این نوع مواقع می‌توانید در این مورد صحبت کنید که هزینه میزان بار اضافه‌تان را پرداخت کنید تا بتوانید همه وسیله‌هایتان را با خودتان حمل کنید.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* آیتم 13 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${activeFaq === 13 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(13)}
                        style={{ padding: '1rem 1.25rem' }}
                      >
                        <div className="d-flex align-items-center w-100">
                          <div className="commonQuestions-icon bg-secondary bg-opacity-10 me-3 flex-shrink-0">
                            <i className="ti ti-question-mark fs-4 text-secondary" aria-hidden="true"></i>
                          </div>
                          <div className="fs-5 flex-grow-1 text-start">قوانین مربوط به ون و تاکسی</div>
                          <i className={`ti ti-chevron-${activeFaq === 13 ? 'up' : 'down'} ms-2 flex-shrink-0`} aria-hidden="true"></i>
                        </div>
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${activeFaq === 13 ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <p className="lead lh-lg">
                          برای مشاهده قوانین و مقررات مربوط به سفر با <strong>ون</strong> و <strong>تاکسی</strong>، لطفاً به صفحه
                          <button className="link-dark ms-1" onClick={() => navigate('/terms')}>قوانین و مقررات</button> مراجعه کنید.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* key highlights ---------------------------- */}
        <section className="container py-5 mb-5">
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="keyHighlights p-4">
                <div className="keyHighlights-icon mb-3">
                  <i className="ti ti-ticket fs-1" aria-hidden="true"></i>
                </div>
                <div className="fs-4 mb-0 text-secondary fw-bold">هرجا که بخوای، با هر بودجه‌ای</div>
                <p className="lead lh-lg">رزرو آنلاین انواع بلیط اتوبوس، تاکسی و ون</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="keyHighlights p-4">
                <div className="keyHighlights-icon mb-3">
                  <i className="ti ti-world fs-1" aria-hidden="true"></i>
                </div>
                <div className="fs-4 mb-0 text-secondary fw-bold">هر لحظه در دسترس، همیشه همراه</div>
                <p className="lead lh-lg">فقط یه کلیک تا مقصدت فاصله داری</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="keyHighlights p-4">
                <div className="keyHighlights-icon mb-3">
                  <i className="ti ti-sunglasses fs-1" aria-hidden="true"></i>
                </div>
                <div className="fs-4 mb-0 text-secondary fw-bold">از درِ خونه تا مقصد، بی‌دغدغه</div>
                <p className="lead lh-lg">آسایش شما، هدف ماست</p>
              </div>
            </div>
          </div>
        </section>

        {/* image caption ---------------------------- */}
        <section className="imageCaption py-5 mb-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-md-4">
                <img src="./img/pages/index/luggage.png" alt="پرتو سیر" width="200"/>
              </div>
              <div className="col-12 col-md-6">
                <div className="h-100 nt-flex-column-center-start">
                  <div className="text-white fs-3 fw-bold mb-2">چمدونت برای سفر آمادست؟</div>
                  <p className="text-white lead lh-lg mb-5">چمدونت آماده‌ست، بلیتت چی؟ با رزرو آنلاین، از بهترین قیمت‌ها و صندلی‌ها بهره‌مند شو. علاوه بر این، می‌تونی با خیال راحت، جزئیات سفرت رو مدیریت کنی.</p>
                  <button className="btn btn-lg btn-outline-light" onClick={() => navigate('/booking')}>سفارش آنلاین</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* -------------------------------- Footer -------------------------------- */}
       <Footer />
       
    </LocalizationProvider>
  );
}

export default App;