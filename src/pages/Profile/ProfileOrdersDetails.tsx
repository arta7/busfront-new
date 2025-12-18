// import React, { useEffect } from 'react';
// import Header from '../../components/home/Header';
// import Footer from '../../components/home/Footer';
// import { useLocation } from 'react-router-dom';
// const ProfileOrdersDetails = () => {
//     const location = useLocation();
//     const { orderId } = location?.state;
//   // برای فعال کردن ابزارهای Bootstrap
// //   useEffect(() => {
// //     // فعال کردن tooltip ها
// //     const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
// //     tooltipTriggerList.map(function (tooltipTriggerEl) {
// //       return new window.bootstrap.Tooltip(tooltipTriggerEl);
// //     });
// //   }, []);

//   // تابع کپی لینک
//   const handleCopyLink = () => {
//     const shareLink = document.getElementById('shareLink');
//     if (shareLink) {
//       shareLink.select();
//       document.execCommand('copy');
//       // می‌توانید پیام موفقیت آمیز بودن کپی را اینجا اضافه کنید
//     }
//   };

//   // تابع تغییر حالت تاریک/روشن
//   const toggleTheme = () => {
//     const currentTheme = document.documentElement.getAttribute('data-bs-theme');
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
//     document.documentElement.setAttribute('data-bs-theme', newTheme);
    
//     // تغییر آیکون
//     const themeIcon = document.querySelector('.btnSwitch i');
//     if (themeIcon) {
//       themeIcon.className = newTheme === 'light' ? 'ti ti-sun fs-5' : 'ti ti-moon fs-5';
//     }
//   };

//   // متصل کردن event listener برای دکمه تغییر تم
//   useEffect(() => {
//     const themeButtons = document.querySelectorAll('.btnSwitch');
//     themeButtons.forEach(button => {
//       button.addEventListener('click', toggleTheme);
//     });

//     return () => {
//       themeButtons.forEach(button => {
//         button.removeEventListener('click', toggleTheme);
//       });
//     };
//   }, []);

//   return (
//     <div className="page-wrapper" dir="rtl">
//       {/* Offcanvas Menu */}
//       <div className="offcanvas offcanvas-start" id="offcanvasMenu" tabIndex="-1" aria-labelledby="offcanvasMenuLabel">
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title text-muted" id="offcanvasMenuLabel">منو کاربری</h5>
//           <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body">
//           <div className="h-100 d-flex flex-column">
//             <div className="w-100 flex-grow-1">
//               <div className="d-flex justify-content-between align-items-center gap-2 mb-4">
//                 <div className="d-flex align-items-center">
//                   <img src="./img/logo-m.png" alt="پرتو سیر" width="80" />
//                 </div>
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
//                       <ul className="list-unstyled d-flex flex-column">
//                         <li>
//                           <a className="btn btn-link link-dark fs-5" href="./index.html">
//                             <i className="ti ti-plane-inflight fs-4" aria-hidden="true"></i>
//                             اتوبوس
//                           </a>
//                         </li>
//                         <li>
//                           <a className="btn btn-link link-dark fs-5" href="./booking-taxi.html">
//                             <i className="ti ti-plane-departure fs-4" aria-hidden="true"></i>
//                             تاکسی
//                           </a>
//                         </li>
//                         <li>
//                           <a className="btn btn-link link-dark fs-5" href="./booking-van.html">
//                             <i className="ti ti-train fs-4" aria-hidden="true"></i>
//                             ون
//                           </a>
//                         </li>
//                         <li>
//                           <a className="btn btn-link link-dark fs-5" href="./booking-bar.html">
//                             <i className="ti ti-bus fs-4" aria-hidden="true"></i>
//                             باربری
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <nav className="d-flex flex-column">
//                 <a className="btn btn-link link-dark fs-5" href="./about-us.html">درباره ما</a>
//                 <a className="btn btn-link link-dark fs-5" href="./contact.html">تماس با ما</a>
//                 <a className="btn btn-link link-dark fs-5" href="./branches.html">ایستگاه ها</a>
//                 <a className="btn btn-link link-dark fs-5" href="">بلیط های رزرو شده</a>
//               </nav>
//             </div>
//             <div className="w-100 border-top py-3">
//               <div className="d-flex flex-column align-items-center justify-content-center text-center">
//                 <div className="text-muted">پرتو سیر; همراه همیشگی سفرهای شما.</div>
//                 <div className="d-flex align-items-center text-muted" role="contentinfo" aria-label="اطلاعات حق نشر">
//                   <span className="visually-hidden">حق نشر ©</span>
//                   <i className="ti ti-copyright fs-5" aria-hidden="true"></i>
//                   ۱۴۰۴ پرتو سیر. تمامی حقوق محفوظ است.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

   
//       {/* Offcanvas Profile */}
//       <div className="offcanvas offcanvas-start" id="offcanvasProfile" tabIndex="-1" aria-labelledby="offcanvasProfileLabel">
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title" id="offcanvasProfileLabel">پروفایل کاربری</h5>
//           <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body">
//           <div className="p-2">
//             <div className="d-flex flex-column align-items-center justify-content-center mb-4">
//               <div className="border border-primary rounded-circle position-relative">
//                 <span className="position-absolute top-0 start-0 translate-middle badge rounded bg-success" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="تایید شده">
//                   <i className="ti ti-checks fs-5" aria-hidden="true"></i>
//                   <span className="visually-hidden">تایید شده</span>
//                 </span>
//                 <img src="./img/layouts/avatar/m1.png" alt="پرتو سیر" width="80" />
//               </div>
//               <div className="d-flex flex-column text-center mt-3">
//                 <div className="profile-title">علی محمدی</div>
//                 <div className="text-muted">09121234567</div>
//               </div>
//             </div>
//             <div className="bg-secondary text-white rounded p-3 mb-4">
//               <div className="d-flex justify-content-between align-items-start gap-2">
//                 <div className="d-flex flex-column gap-3">
//                   <div className="d-flex align-items-center text-bg-light">
//                     <i className="ti ti-wallet fs-3" aria-hidden="true"></i>
//                     موجودی حساب
//                   </div>
//                   <a className="btn btn-sm btn-secondary" href="./profile-transactions.html">
//                     <i className="ti ti-plus fs-5" aria-hidden="true"></i>
//                     <span className="small">افزایش موجودی</span>
//                   </a>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <div className="badge text-bg-light">۰</div>
//                   <div className="small text-bg-light">تومان</div>
//                 </div>
//               </div>
//             </div>
//             <div className="text-muted fw-bold small mb-3">منو کاربری</div>
//             <nav className="profile-menu d-grid gap-2">
//               <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile.html">
//                 <i className="ti ti-user fs-4" aria-hidden="true"></i>
//                 حساب کاربری
//               </a>
//               <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-orders.html">
//                 <i className="ti ti-luggage fs-4" aria-hidden="true"></i>
//                 سفر های من
//               </a>
//               <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-passengers.html">
//                 <i className="ti ti-users-group fs-4" aria-hidden="true"></i>
//                 لیست های مسافران
//               </a>
//               <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-wishlist.html">
//                 <i className="ti ti-heart fs-4" aria-hidden="true"></i>
//                 علاقه مندی ها
//               </a>
//               <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-ticketing.html">
//                 <i className="ti ti-headset fs-4" aria-hidden="true"></i>
//                 درخواست پشتیبانی
//               </a>
//               <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-transactions.html">
//                 <i className="ti ti-businessplan fs-4" aria-hidden="true"></i>
//                 موجودی و اعتبار من
//               </a>
//             </nav>
//           </div>
//         </div>
//       </div>

    

//       {/* Modal Share */}
//       <div className="modal fade" id="shareModal" tabIndex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1 className="modal-title fs-5" id="shareModalLabel">اشتراک گذاری</h1>
//               <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <div className="wrapper-xs py-5 text-center">
//                 <nav className="d-flex justify-content-around align-items-center gap-4 mb-5" aria-label="پیوند های شبکه های اجتماعی">
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
//                   <input className="form-control form-control" type="text" id="shareLink" value="https://netthemes.ir/html/parnet" dir="ltr" readOnly />
//                   <button className="btn btn-primary" type="button" id="copyLinkBtn" onClick={handleCopyLink}>
//                     کپی لینک
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Header />


//       {/* Main Content */}
//       <main className="main">
//         <div className="profile">
//           <div className="container">
//             <div className="row py-5">
//               <aside className="col-12 col-md-3 d-none d-md-block">
//                 <div className="bg-white border rounded py-5 px-4">
//                   <div className="d-flex flex-column align-items-center justify-content-center mb-4">
//                     <div className="border border-primary rounded-circle position-relative">
//                       <span className="position-absolute top-0 start-0 translate-middle badge rounded bg-success" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="تایید شده">
//                         <i className="ti ti-checks fs-5" aria-hidden="true"></i>
//                         <span className="visually-hidden">تایید شده</span>
//                       </span>
//                       <img src="./img/layouts/avatar/m1.png" alt="پرتو سیر" width="80" />
//                     </div>
//                     <div className="d-flex flex-column text-center mt-3">
//                       <div className="profile-title">علی محمدی</div>
//                       <div className="text-muted">09121234567</div>
//                     </div>
//                   </div>
//                   <div className="bg-secondary text-white rounded p-3 mb-4">
//                     <div className="d-flex justify-content-between align-items-start gap-2">
//                       <div className="d-flex flex-column gap-3">
//                         <div className="d-flex align-items-center text-bg-light">
//                           <i className="ti ti-wallet fs-3" aria-hidden="true"></i>
//                           موجودی حساب
//                         </div>
//                         <a className="btn btn-sm btn-secondary" href="./profile-transactions.html">
//                           <i className="ti ti-plus fs-5" aria-hidden="true"></i>
//                           <span className="small">افزایش موجودی</span>
//                         </a>
//                       </div>
//                       <div className="d-flex align-items-center">
//                         <div className="badge text-bg-light">۰</div>
//                         <div className="small text-bg-light">تومان</div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-muted fw-bold small mb-3">منو کاربری</div>
//                   <nav className="profile-menu d-grid gap-2">
//                     <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile.html">
//                       <i className="ti ti-user fs-4" aria-hidden="true"></i>
//                       حساب کاربری
//                     </a>
//                     <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-orders.html">
//                       <i className="ti ti-luggage fs-4" aria-hidden="true"></i>
//                       سفر های من
//                     </a>
//                     <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-passengers.html">
//                       <i className="ti ti-users-group fs-4" aria-hidden="true"></i>
//                       لیست های مسافران
//                     </a>
//                     <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-wishlist.html">
//                       <i className="ti ti-heart fs-4" aria-hidden="true"></i>
//                       علاقه مندی ها
//                     </a>
//                     <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-ticketing.html">
//                       <i className="ti ti-headset fs-4" aria-hidden="true"></i>
//                       درخواست پشتیبانی
//                     </a>
//                     <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-transactions.html">
//                       <i className="ti ti-businessplan fs-4" aria-hidden="true"></i>
//                       موجودی و اعتبار من
//                     </a>
//                   </nav>
//                 </div>
//               </aside>
//               <section className="col-12 col-md-9">
//                 <div className="d-md-none mb-3">
//                   <button className="btn btn-light d-flex align-items-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasProfile" aria-controls="offcanvasProfile">
//                     <i className="ti ti-menu fs-4" aria-hidden="true"></i>
//                     <div className="fw-bold me-2">منو کاربری</div>
//                   </button>
//                 </div>
//                 <div className="profile-row">
//                   <div className="row align-items-center g-3">
//                     <div className="col-12">
//                       <div className="d-flex align-items-center gap-4 mb-4">
//                         <a className="btn btn-outline-dark btn-sm" href="">
//                           <i className="ti ti-arrow-narrow-right fs-3" aria-hidden="true"></i>
//                         </a>
//                         <div className="flex-grow-1 d-flex flex-column gap-3">
//                           <div className="d-flex align-items-center gap-4">
//                             <div className="fs-6">شماره سفارش ۱۲۳۴۵۶۷۸۹</div>
//                             <div className="fs-6">قطار</div>
//                             <div className="nt-badge bg-success text-success small">نهایی شده</div>
//                           </div>
//                           <div className="d-flex align-items-center gap-4 text-muted">
//                             <div className="fs-6">زمان خرید: ۱۴۰۱/۰۱/۰۱</div>
//                             <div className="fs-6">۱۲:۰۰</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-12 col-md">
//                       <div className="d-flex justify-content-between align-items-center mb-4">
//                         <div className="profile-title">بلیط ها</div>
//                         <a className="d-flex align-items-center link-info text-decoration-none" href="">
//                           <i className="ti ti-download fs-5" aria-hidden="true"></i>
//                           دانلود بلیط
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row py-2">
//                     <div className="border rounded mb-4">
//                       <div className="py-4 px-3">
//                         <div className="fs-5 fw-bold mb-3">قطار رفت: تهران به مشهد</div>
//                         <div className="d-flex align-items-center text-muted mb-3">
//                           زمان حرکت: ساعت ۱۲:۰۰
//                           <div className="nt-badge bg-info text-info small ms-2">۱ فروردین</div>
//                         </div>
//                         <div className="d-flex align-items-center gap-4 mb-3">
//                           <div className="d-flex align-items-center flex-nowrap gap-3">
//                             <img className="lozad" src="./img/pages/profile-orders/noor.png" alt="پرتو سیر" width="40" aria-hidden="true" />
//                             نور الرضا
//                           </div>
//                           <div className="d-flex align-items-center gap-5">
//                             <div className="d-flex flex-column fw-bold">
//                               <div className="text-muted">شروع</div>
//                               ۱۲:۰۰
//                             </div>
//                             <div className="d-flex flex-column fw-bold">
//                               <div className="text-muted">پایان</div>
//                               ۰۶:۰۰
//                             </div>
//                           </div>
//                         </div>
//                         <div className="bg-light rounded p-4">
//                           <div className="fw-bold mb-4">اطلاعات قطار</div>
//                           <div className="row">
//                             <div className="col-3 d-flex flex-column">
//                               <div className="text-muted">نام سالن</div>
//                               <div className="fs-6">۵ ستاره نور (بیزینس)</div>
//                             </div>
//                             <div className="col-3 d-flex flex-column">
//                               <div className="text-muted">شماره قطار</div>
//                               <div className="fs-6">۱۲۳</div>
//                             </div>
//                             <div className="col-3 d-flex flex-column">
//                               <div className="text-muted">نوع قطار</div>
//                               <div className="fs-6">کوپه ای ۴ نفره</div>
//                             </div>
//                             <div className="col-3 d-flex flex-column align-items-end justify-content-end">
//                               <div className="d-flex align-items-center flex-nowrap text-info">
//                                 <i className="ti ti-info-circle fs-5" aria-hidden="true"></i>
//                                 کوپه دربست
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="border rounded p-4">
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div className="text-muted">مبلغ پرداخت شده</div>
//                         <div className="d-flex align-items-center fw-bold">
//                           <div className="fs-5">۶،۸۰۰،۰۰۰</div>
//                           <div className="small me-1">تومان</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       {/* <footer className="footer">
//         <div className="container border-bottom mb-5"></div>
//         <div className="footer-content">
//           <div className="container">
//             <div className="row g-4">
//               <div className="col-12 col-md-6">
//                 <div className="d-flex flex-column align-items-center align-items-md-start gap-2">
//                   <div className="d-flex align-items-center gap-2 mb-3">
//                     <img src="./img/logo-m.png" alt="پرتو سیر" width="80" />
//                     <h1 className="fs-2 fw-bold mb-0">پرتو سیر</h1>
//                   </div>
//                   <div className="d-flex gap-1">
//                     تلفن‌ :‌
//                     <div dir="ltr">
//                       <a className="link text-decoration-none" href="tel:+981133243056">01133243056</a>
//                       <br />
//                       <a className="link text-decoration-none" href="tel:+989117976855">09117976855</a>
//                     </div>
//                   </div>
//                   <p>آدرس : مازندران، ساری، ترمینال دولت، پرتو سیر ایرانیان</p>
//                   <div className="mb-4"></div>
//                   <nav className="d-flex">
//                     <a className="link footer-badge" href="">
//                       <img className="lozad" src="./img/layouts/footer/badges/enamad.jpg" alt="پرتو سیر" width="70" />
//                     </a>
//                     <a className="link footer-badge" href="">
//                       <img className="lozad" src="./img/layouts/footer/badges/kasbokar.jpg" alt="پرتو سیر" width="70" />
//                     </a>
//                     <a className="link footer-badge" href="">
//                       <img className="lozad" src="./img/layouts/footer/badges/rezi.jpg" alt="پرتو سیر" width="70" />
//                     </a>
//                   </nav>
//                 </div>
//               </div>
//               <div className="col-12 col-md-6 d-md-none">
//                 <div className="accordion accordion-flush" id="footerAccordionNav">
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#footerAccordionNav1" aria-expanded="false" aria-controls="footerAccordionNav1">
//                         پرتو سیر
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="footerAccordionNav1" data-bs-parent="#footerAccordionNav">
//                       <div className="accordion-body">
//                         <div className="d-grid gap-3">
//                           <a className="link text-decoration-none" href="./about-us.html" title="درباره پرتو سیر - بلیط اتوبوس و تاکسی">درباره ما</a>
//                           <a className="link text-decoration-none" href="./contact.html" title="تماس با پرتو سیر">تماس با ما</a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#footerAccordionNav2" aria-expanded="false" aria-controls="footerAccordionNav2">
//                         خدمات مشتریان
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="footerAccordionNav2" data-bs-parent="#footerAccordionNav">
//                       <div className="accordion-body">
//                         <div className="d-grid gap-3">
//                           <a className="link text-decoration-none" href="" title="راهنمای استرداد بلیط اتوبوس پرتو سیر">راهنمای استرداد</a>
//                           <a className="link text-decoration-none" href="./terms.html" title="قوانین و مقررات خرید بلیت اتوبوس و تاکسی">قوانین و مقررات</a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#footerAccordionNav3" aria-expanded="false" aria-controls="footerAccordionNav3">
//                         اطلاعات تکمیلی
//                       </button>
//                     </h2>
//                     <div className="accordion-collapse collapse" id="footerAccordionNav3" data-bs-parent="#footerAccordionNav">
//                       <div className="accordion-body">
//                         <div className="d-grid gap-3">
//                           <a className="link text-decoration-none" href="" title="فروش سازمانی بلیت اتوبوس پرتو سیر">فروش سازمانی</a>
//                           <a className="link text-decoration-none" href="" title="همکاری با آژانس‌های مسافرتی">همکاری با آژانس ها</a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 col-md-6 d-none d-md-block">
//                 <div className="row g-3">
//                   <div className="col-6 col-md-4">
//                     <h5 className="fs-5 fw-bold mb-4">پرتو سیر</h5>
//                     <div className="d-grid gap-3">
//                       <a className="link text-decoration-none" href="./about-us.html" title="درباره پرتو سیر - بلیط اتوبوس و تاکسی">درباره ما</a>
//                       <a className="link text-decoration-none" href="./contact.html" title="تماس با پرتو سیر">تماس با ما</a>
//                     </div>
//                   </div>
//                   <div className="col-6 col-md-4">
//                     <h5 className="fs-5 fw-bold mb-4">خدمات مشتریان</h5>
//                     <div className="d-grid gap-3">
//                       <a className="link text-decoration-none" href="" title="راهنمای استرداد بلیط اتوبوس پرتو سیر">راهنمای استرداد</a>
//                       <a className="link text-decoration-none" href="./terms.html" title="قوانین و مقررات خرید بلیت اتوبوس و تاکسی">قوانین و مقررات</a>
//                     </div>
//                   </div>
//                   <div className="col-6 col-md-4">
//                     <h5 className="fs-5 fw-bold mb-4">اطلاعات تکمیلی</h5>
//                     <div className="d-grid gap-3">
//                       <a className="link text-decoration-none" href="" title="فروش سازمانی بلیت اتوبوس پرتو سیر">فروش سازمانی</a>
//                       <a className="link text-decoration-none" href="" title="همکاری با آژانس‌های مسافرتی">همکاری با آژانس ها</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="footer-copyright">
//           <div className="container">
//             <div className="row py-5">
//               <div className="col-12 col-md">
//                 <p className="text-muted lh-lg small" role="contentinfo" aria-label="اطلاعات حق نشر">
//                   هرگونه استفاده از این موارد بدون مجوز کتبی و صریح از شرکت پرتو سیر، نقض حقوق مالکیت معنوی محسوب شده و پیگرد قانونی خواهد داشت.
//                   &nbsp;&nbsp;&nbsp;
//                   <a className="link text-decoration-none" href="https://tameshkgroup.com">© ۲۰۲۵ - طراحی سایت » گروه نرم افزاری تمشک «</a>
//                 </p>
//               </div>
//               <div className="col-12 col-md-auto">
//                 <nav className="d-flex justify-content-center align-items-center gap-4 justify-content-md-start" aria-label="پیوند های شبکه های اجتماعی">
//                   <a className="link" href="" aria-label="در تلگرام به ما بپیوندید">
//                     <i className="ti ti-brand-telegram fs-2" aria-hidden="true"></i>
//                   </a>
//                   <a className="link" href="" aria-label="از صفحه X (که قبلاً توییتر بود) ما بازدید کنید">
//                     <i className="ti ti-brand-x fs-2" aria-hidden="true"></i>
//                   </a>
//                   <a className="link" href="" aria-label="از صفحه یوتیوب ما دیدن کنید">
//                     <i className="ti ti-brand-youtube fs-2" aria-hidden="true"></i>
//                   </a>
//                   <a className="link" href="" aria-label="از صفحه اینستاگرام ما دیدن کنید">
//                     <i className="ti ti-brand-instagram fs-2" aria-hidden="true"></i>
//                   </a>
//                   <a className="link" href="" aria-label="از صفحه لینکدین ما دیدن کنید">
//                     <i className="ti ti-brand-linkedin fs-2" aria-hidden="true"></i>
//                   </a>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//         <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="none">
//           <path className="path-first" d="M0 328L75 357.8C150 387.7 300 447.3 450 438.3C600 429.3 750 351.7 825 312.8L900 274L900 601L825 601C750 601 600 601 450 601C300 601 150 601 75 601L0 601Z" fill="#f7f8f9"></path>
//           <path className="path-second" d="M0 510L75 507.3C150 504.7 300 499.3 450 496.8C600 494.3 750 494.7 825 494.8L900 495L900 601L825 601C750 601 600 601 450 601C300 601 150 601 75 601L0 601Z" fill="#e0e3e8"></path>
//         </svg>
//       </footer> */}

//       <Footer />

//       {/* Scripts */}
//       <script src="./vendor/lib/filterizr/vanilla.filterizr.min.js"></script>
//       <script src="./vendor/lib/lozad/lozad.min.js"></script>
//       <script src="./vendor/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
//       <link rel="stylesheet" href="./vendor/lib/swiper/swiper-bundle.min.css" />
//       <script src="./vendor/lib/swiper/swiper-bundle.min.js"></script>
//       <link rel="stylesheet" href="./vendor/lib/jalaliDatePicker/jalalidatepicker.min.css" />
//       <script src="./vendor/lib/jalaliDatePicker/jalalidatepicker.min.js"></script>
//       <link rel="stylesheet" href="./vendor/lib/tom-select/tom-select.min.css" />
//       <script src="./vendor/lib/tom-select/tom-select.complete.min.js"></script>
//       <link rel="stylesheet" href="./vendor/lib/nouislider/nouislider.min.css" />
//       <script src="./vendor/lib/nouislider/nouislider.min.js"></script>
//       <script src="./js/script.js"></script>
//     </div>
//   );
// };

// export default ProfileOrdersDetails;


import React, { useEffect, useState,useContext } from 'react';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import UserContext from './../../UserContext';

const ProfileOrdersDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { orderId, ticketList } = location?.state || {};
    
    // پیدا کردن تیکت بر اساس orderId
    const [currentTicket, setCurrentTicket] = useState(null);
    const { userData } = useContext(UserContext);
    
    useEffect(() => {
        if (orderId && ticketList ) {
            const foundTicket = ticketList;
            if (foundTicket) {
                setCurrentTicket(foundTicket);
            } else {
                // اگر تیکت پیدا نشد، به صفحه قبلی برگرد
                navigate(-1);
            }
        }
    }, [orderId, ticketList, navigate]);

    // فرمت تاریخ
    const formatDate = (dateString) => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('fa-IR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // فرمت قیمت
    const formatPrice = (price) => {
        if (!price) return '0';
        return new Intl.NumberFormat('fa-IR').format(price);
    };

    // تابع چاپ بلیط
    const handlePrintTicket = () => {
        const printContent = document.getElementById('print-area').innerHTML;
        const originalContent = document.body.innerHTML;
        
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
    };

    // تابع دانلود PDF (ساده شده)
    const handleDownloadPdf = () => {
        handlePrintTicket(); // در حال حاضر همان چاپ را انجام می‌دهد
        // در آینده می‌توانید از کتابخانه‌هایی مثل jsPDF استفاده کنید
    };

    // وضعیت سفارش
    const getOrderStatus = (status) => {
        switch(status) {
            case '0': return 'رزرو شده';
            case '1': return 'لغو شده';
            case '2': return 'تکمیل شده';
            default: return 'نامشخص';
        }
    };

    // رنگ وضعیت
    const getStatusColor = (status) => {
        switch(status) {
            case '0': return 'success';
            case '1': return 'danger';
            case '2': return 'primary';
            default: return 'secondary';
        }
    };

    // برای فعال کردن ابزارهای Bootstrap
    useEffect(() => {
        // فعال کردن tooltip ها
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    }, []);

    // تابع کپی لینک
    const handleCopyLink = () => {
        const shareLink = document.getElementById('shareLink');
        if (shareLink) {
            shareLink.select();
            document.execCommand('copy');
            // می‌توانید پیام موفقیت آمیز بودن کپی را اینجا اضافه کنید
        }
    };

    // تابع تغییر حالت تاریک/روشن
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        
        // تغییر آیکون
        const themeIcon = document.querySelector('.btnSwitch i');
        if (themeIcon) {
            themeIcon.className = newTheme === 'light' ? 'ti ti-sun fs-5' : 'ti ti-moon fs-5';
        }
    };

    // متصل کردن event listener برای دکمه تغییر تم
    useEffect(() => {
        const themeButtons = document.querySelectorAll('.btnSwitch');
        themeButtons.forEach(button => {
            button.addEventListener('click', toggleTheme);
        });

        return () => {
            themeButtons.forEach(button => {
                button.removeEventListener('click', toggleTheme);
            });
        };
    }, []);

    // اگر تیکت پیدا نشده باشد
    if (!currentTicket) {
        return (
            <div className="page-wrapper" dir="rtl">
                <Header />
                <main className="main">
                    <div className="container py-5">
                        <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">در حال بارگذاری...</span>
                            </div>
                            <p className="mt-3">در حال بارگذاری اطلاعات بلیط...</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // اطلاعات بلیط
    const ticket = currentTicket;

    return (
        <div className="page-wrapper" dir="rtl">
            {/* Offcanvas Menu */}
            {/* <div className="offcanvas offcanvas-start" id="offcanvasMenu" tabIndex="-1" aria-labelledby="offcanvasMenuLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-muted" id="offcanvasMenuLabel">منو کاربری</h5>
                    <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="h-100 d-flex flex-column">
                        <div className="w-100 flex-grow-1">
                            <div className="d-flex justify-content-between align-items-center gap-2 mb-4">
                                <div className="d-flex align-items-center">
                                    <img src="./img/logo-m.png" alt="پرتو سیر" width="80" />
                                </div>
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
                                            <ul className="list-unstyled d-flex flex-column">
                                                <li>
                                                    <a className="btn btn-link link-dark fs-5" href="./index.html">
                                                        <i className="ti ti-plane-inflight fs-4" aria-hidden="true"></i>
                                                        اتوبوس
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-link link-dark fs-5" href="./booking-taxi.html">
                                                        <i className="ti ti-plane-departure fs-4" aria-hidden="true"></i>
                                                        تاکسی
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-link link-dark fs-5" href="./booking-van.html">
                                                        <i className="ti ti-train fs-4" aria-hidden="true"></i>
                                                        ون
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-link link-dark fs-5" href="./booking-bar.html">
                                                        <i className="ti ti-bus fs-4" aria-hidden="true"></i>
                                                        باربری
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="d-flex flex-column">
                                <a className="btn btn-link link-dark fs-5" href="./about-us.html">درباره ما</a>
                                <a className="btn btn-link link-dark fs-5" href="./contact.html">تماس با ما</a>
                                <a className="btn btn-link link-dark fs-5" href="./branches.html">ایستگاه ها</a>
                                <a className="btn btn-link link-dark fs-5" href="">بلیط های رزرو شده</a>
                            </nav>
                        </div>
                        <div className="w-100 border-top py-3">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="text-muted">پرتو سیر; همراه همیشگی سفرهای شما.</div>
                                <div className="d-flex align-items-center text-muted" role="contentinfo" aria-label="اطلاعات حق نشر">
                                    <span className="visually-hidden">حق نشر ©</span>
                                    <i className="ti ti-copyright fs-5" aria-hidden="true"></i>
                                    ۱۴۰۴ پرتو سیر. تمامی حقوق محفوظ است.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Offcanvas Profile */}
            <div className="offcanvas offcanvas-start" id="offcanvasProfile" tabIndex="-1" aria-labelledby="offcanvasProfileLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasProfileLabel">پروفایل کاربری</h5>
                    <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="p-2">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                            <div className="border border-primary rounded-circle position-relative">
                                <span className="position-absolute top-0 start-0 translate-middle badge rounded bg-success" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="تایید شده">
                                    <i className="ti ti-checks fs-5" aria-hidden="true"></i>
                                    <span className="visually-hidden">تایید شده</span>
                                </span>
                                <img src="./img/layouts/avatar/m1.png" alt="پرتو سیر" width="80" />
                            </div>
                            <div className="d-flex flex-column text-center mt-3">
                            <div className="profile-title">{userData[0].Name}</div>
                            <div className="text-muted">{userData[0].Mobile}</div>
                            </div>
                        </div>
                        {/* <div className="bg-secondary text-white rounded p-3 mb-4">
                            <div className="d-flex justify-content-between align-items-start gap-2">
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex align-items-center text-bg-light">
                                        <i className="ti ti-wallet fs-3" aria-hidden="true"></i>
                                        موجودی حساب
                                    </div>
                                    <a className="btn btn-sm btn-secondary" href="./profile-transactions.html">
                                        <i className="ti ti-plus fs-5" aria-hidden="true"></i>
                                        <span className="small">افزایش موجودی</span>
                                    </a>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="badge text-bg-light">۰</div>
                                    <div className="small text-bg-light">تومان</div>
                                </div>
                            </div>
                        </div> */}
                        <div className="text-muted fw-bold small mb-3">منو کاربری</div>
                        <nav className="profile-menu d-grid gap-2">
                            <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile.html">
                                <i className="ti ti-user fs-4" aria-hidden="true"></i>
                                حساب کاربری
                            </a>
                            <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-orders.html">
                                <i className="ti ti-luggage fs-4" aria-hidden="true"></i>
                                سفر های من
                            </a>
                            {/* <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-passengers.html">
                                <i className="ti ti-users-group fs-4" aria-hidden="true"></i>
                                لیست های مسافران
                            </a>
                            <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-wishlist.html">
                                <i className="ti ti-heart fs-4" aria-hidden="true"></i>
                                علاقه مندی ها
                            </a>
                            <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-ticketing.html">
                                <i className="ti ti-headset fs-4" aria-hidden="true"></i>
                                درخواست پشتیبانی
                            </a>
                            <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-transactions.html">
                                <i className="ti ti-businessplan fs-4" aria-hidden="true"></i>
                                موجودی و اعتبار من
                            </a> */}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Modal Share */}
            <div className="modal fade" id="shareModal" tabIndex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="shareModalLabel">اشتراک گذاری</h1>
                            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="wrapper-xs py-5 text-center">
                                <nav className="d-flex justify-content-around align-items-center gap-4 mb-5" aria-label="پیوند های شبکه های اجتماعی">
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
                                    <input className="form-control form-control" type="text" id="shareLink" value="https://netthemes.ir/html/parnet" dir="ltr" readOnly />
                                    <button className="btn btn-primary" type="button" id="copyLinkBtn" onClick={handleCopyLink}>
                                        کپی لینک
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Header />

            {/* Main Content */}
            <main className="main" style={{marginTop:'50px'}}>
                <div className="profile">
                    <div className="container">
                        <div className="row py-5">
                            <aside className="col-12 col-md-3 d-none d-md-block">
                                <div className="bg-white border rounded py-5 px-4">
                                    <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                                        <div className="border border-primary rounded-circle position-relative">
                                            <span className="position-absolute top-0 start-0 translate-middle badge rounded bg-success"
                                             data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="تایید شده">
                                                <i className="ti ti-checks fs-5" aria-hidden="true"></i>
                                                <span className="visually-hidden">تایید شده</span>
                                            </span>
                                            <img src="./img/layouts/avatar/m1.png" alt="پرتو سیر" width="80" />
                                        </div>
                                        <div className="d-flex flex-column text-center mt-3">
                                            <div className="profile-title">{userData[0].Name}</div>
                                            <div className="text-muted">{userData[0].Mobile}</div>
                                        </div>
                                    </div>
                                    {/* <div className="bg-secondary text-white rounded p-3 mb-4">
                                        <div className="d-flex justify-content-between align-items-start gap-2">
                                            <div className="d-flex flex-column gap-3">
                                                <div className="d-flex align-items-center text-bg-light">
                                                    <i className="ti ti-wallet fs-3" aria-hidden="true"></i>
                                                    موجودی حساب
                                                </div>
                                                <a className="btn btn-sm btn-secondary" href="./profile-transactions.html">
                                                    <i className="ti ti-plus fs-5" aria-hidden="true"></i>
                                                    <span className="small">افزایش موجودی</span>
                                                </a>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="badge text-bg-light">۰</div>
                                                <div className="small text-bg-light">تومان</div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="text-muted fw-bold small mb-3">منو کاربری</div>
                                    <nav className="profile-menu d-grid gap-2">
                                        <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile.html">
                                            <i className="ti ti-user fs-4" aria-hidden="true"></i>
                                            حساب کاربری
                                        </a>
                                        <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-orders.html">
                                            <i className="ti ti-luggage fs-4" aria-hidden="true"></i>
                                            سفر های من
                                        </a>
                                        {/* <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-passengers.html">
                                            <i className="ti ti-users-group fs-4" aria-hidden="true"></i>
                                            لیست های مسافران
                                        </a> */}
                                        {/* <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-wishlist.html">
                                            <i className="ti ti-heart fs-4" aria-hidden="true"></i>
                                            علاقه مندی ها
                                        </a>
                                        <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-ticketing.html">
                                            <i className="ti ti-headset fs-4" aria-hidden="true"></i>
                                            درخواست پشتیبانی
                                        </a>
                                        <a className="btn btn-outline-light d-flex align-items-center gap-2" href="./profile-transactions.html">
                                            <i className="ti ti-businessplan fs-4" aria-hidden="true"></i>
                                            موجودی و اعتبار من
                                        </a> */}
                                    </nav>
                                </div>
                            </aside>
                            <section className="col-12 col-md-9">
                                <div className="d-md-none mb-3">
                                    <button className="btn btn-light d-flex align-items-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasProfile" aria-controls="offcanvasProfile">
                                        <i className="ti ti-menu fs-4" aria-hidden="true"></i>
                                        <div className="fw-bold me-2">منو کاربری</div>
                                    </button>
                                </div>
                                
                                {/* دکمه بازگشت */}
                                {/* <div className="mb-4">
                                    <button 
                                        className="btn btn-outline-secondary d-flex align-items-center" 
                                        onClick={() => navigate(-1)}
                                    >
                                        <i className="ti ti-arrow-narrow-right me-2" aria-hidden="true"></i>
                                        بازگشت به لیست سفارشات
                                    </button>
                                </div> */}

                                <div className="profile-row">
                                    <div className="row align-items-center g-3">
                                        <div className="col-12">
                                            <div className="d-flex align-items-center gap-4 mb-4">
                                                <div className="flex-grow-1 d-flex flex-column gap-3">
                                                    <div className="d-flex align-items-center gap-4">
                                                        <div className="fs-6">شماره سفارش: {ticket.requestNumber || '---'}</div>
                                                        <div className="fs-6">{ticket.busDetail?.carType || ' اتوبوس '}</div>
                                                        <div className={`nt-badge bg-${getStatusColor(ticket.status)} text-${getStatusColor(ticket.status)} small`}>
                                                            {getOrderStatus(ticket.status)}
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-4 text-muted">
                                                        <div className="fs-6">زمان خرید: {(ticket.createdAt)}</div>
                                                        <div className="fs-6">تاریخ سفر: {(ticket.busDetail?.dateMove)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md">
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div className="profile-title">جزئیات بلیط</div>
                                                <div className="d-flex gap-2">
                                                    {/* <button 
                                                        className="btn btn-primary d-flex align-items-center" 
                                                        onClick={handleDownloadPdf}
                                                    >
                                                        <i className="ti ti-download me-2" aria-hidden="true"></i>
                                                        دانلود بلیط
                                                    </button> */}
                                                    <button 
                                                        className="btn btn-outline-primary d-flex align-items-center" 
                                                        onClick={handlePrintTicket}
                                                    >
                                                        <i className="ti ti-printer me-2" aria-hidden="true"></i>
                                                        چاپ بلیط
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* نمایش بلیط */}
                                    <div className="row py-2">
                                        <div className="border rounded mb-4">
                                            <div className="py-4 px-3">
                                                <div className="fs-5 fw-bold mb-3">
                                                    {ticket.busDetail?.carType || ' اتوبوس '} 
                                                      : {ticket.busDetail?.originCity } به {ticket.busDetail?.destinationCity }
                                                </div>
                                                <div className="d-flex align-items-center text-muted mb-3">
                                                    زمان حرکت: ساعت {ticket.busDetail?.timeMove }
                                                    <div className="nt-badge bg-info text-info small ms-2">
                                                        {(ticket.busDetail?.dateMove)}
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-4 mb-3">
                                                    <div className="d-flex align-items-center flex-nowrap gap-3">
                                                        <img 
                                                            className="lozad" 
                                                            src={ticket.busDetail?.companyLogo || './img/pages/profile-orders/noor.png'} 
                                                            alt={ticket.busDetail?.companyName || 'شرکت مسافربری'} 
                                                            width="40" 
                                                            aria-hidden="true" 
                                                        />
                                                        {ticket.busDetail?.companyName || 'شرکت مسافربری'}
                                                    </div>
                                                    <div className="d-flex align-items-center gap-5">
                                                        <div className="d-flex flex-column fw-bold">
                                                            <div className="text-muted">حرکت</div>
                                                            {ticket.busDetail?.timeMove || '--:--'}
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                                <div className="bg-light rounded p-4">
                                                    <div className="fw-bold mb-4">اطلاعات سفر</div>
                                                    <div className="row">
                                                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                                                            <div className="text-muted">ایستگاه مبدأ</div>
                                                            <div className="fs-6">{ticket.busDetail?.originTerminal || '---'}</div>
                                                        </div>
                                                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                                                            <div className="text-muted">ایستگاه مقصد</div>
                                                            <div className="fs-6">{ticket.busDetail?.destinationTerminal || '---'}</div>
                                                        </div>
                                                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                                                            <div className="text-muted">نوع وسیله نقلیه</div>
                                                            <div className="fs-6">{ticket.busDetail?.carType || '---'}</div>
                                                        </div>
                                                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                                                            <div className="text-muted">توضیحات</div>
                                                            <div className="fs-6">{ticket.busDetail?.description || '---'}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* اطلاعات مسافران */}
                                        <div className="border rounded mb-4">
                                            <div className="py-4 px-3">
                                                <div className="fw-bold mb-3">مسافران</div>
                                                <div className="row">
                                                    {ticket.passengers && ticket.passengers.length > 0 ? (
                                                        ticket.passengers.map((passenger, index) => (
                                                            <div key={index} className="col-12 col-md-6 mb-3">
                                                                <div className="border rounded p-3">
                                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                                        <div className="fw-bold">{passenger.firstName} {passenger.lastName}</div>
                                                                        <div className="badge bg-info">صندلی: {passenger.seatNumber || '---'}</div>
                                                                    </div>
                                                                    <div className="text-muted small">
                                                                        کد ملی: {passenger.nationalCode || '---'}
                                                                    </div>
                                                                    <div className="text-muted small">
                                                                        شماره موبایل: {passenger.mobile || '---'}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div className="col-12">
                                                            <div className="text-center text-muted py-3">
                                                                اطلاعات مسافران موجود نیست
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* اطلاعات پرداخت */}
                                        <div className="border rounded p-4">
                                            <div className="row">
                                                <div className="col-12 col-md-6 mb-3">
                                                    <div className="text-muted">شماره بلیط</div>
                                                    <div className="fw-bold">{ticket.ticketNumber || '---'}</div>
                                                </div>
                                                <div className="col-12 col-md-6 mb-3">
                                                    <div className="text-muted">شماره رزرو</div>
                                                    <div className="fw-bold">{ticket.requestNumber || '---'}</div>
                                                </div>
                                                <div className="col-12 col-md-6 mb-3">
                                                    <div className="text-muted">روش پرداخت</div>
                                                    <div className="fw-bold">{ticket.paymentMethod === '1' ? 'آنلاین' : 'نقدی'}</div>
                                                </div>
                                                <div className="col-12 col-md-6 mb-3">
                                                    <div className="text-muted">وضعیت پرداخت</div>
                                                    <div className={`badge bg-${ticket.isPaid ? 'success' : 'danger'}`}>
                                                        {ticket.isPaid ? 'پرداخت شده' : 'پرداخت نشده'}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                                                        <div className="text-muted">مبلغ پرداخت شده</div>
                                                        <div className="d-flex align-items-center fw-bold">
                                                            <div className="fs-5">{formatPrice(ticket.price)}</div>
                                                            <div className="small me-1">تومان</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            {/* بخش چاپ بلیط (مخفی در حالت عادی) */}
            <div id="print-area" style={{ display: 'none' }}>
                <div style={{ 
                    width: '100%',
                    maxWidth: '600px',
                    margin: '0 auto',
                    fontFamily: 'IRANSans, Tahoma, Arial, sans-serif',
                    direction: 'rtl'
                }}>
                    {/* بخش اول بلیط */}
                    <div style={{ 
                        padding: '20px',
                        border: '2px dashed #ccc',
                        borderBottom: 'none',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px'
                    }}>
                        <h2 style={{ 
                            fontWeight: 'bold', 
                            textAlign: 'center',
                            marginBottom: '20px',
                            color: '#01a693'
                        }}>
                            {ticket.busDetail?.companyName || 'شرکت مسافربری'}
                        </h2>
                        
                        <div style={{ 
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '30px'
                        }}>
                            <div>
                                <h3 style={{ fontWeight: 'bold' }}>
                                    {ticket.busDetail?.originCity || 'مبدا'}
                                </h3>
                                <p>{ticket.busDetail?.originTerminal || ''}</p>
                            </div>
                            
                            <div style={{ textAlign: 'center' }}>
                                <p>{formatDate(ticket.busDetail?.dateMove)}</p>
                                <h3 style={{ fontWeight: 'bold' }}>
                                    {ticket.busDetail?.timeMove || '--:--'}
                                </h3>
                            </div>
                            
                            <div>
                                <h3 style={{ fontWeight: 'bold' }}>
                                    {ticket.busDetail?.destinationCity || 'مقصد'}
                                </h3>
                                <p>{ticket.busDetail?.destinationTerminal || ''}</p>
                            </div>
                        </div>
                        
                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ marginBottom: '10px' }}>
                                مسافران ({ticket.passengers?.length || 0})
                            </h4>
                            
                            {ticket.passengers?.map((passenger, index) => (
                                <div key={index} style={{ 
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '10px',
                                    paddingBottom: '10px',
                                    borderBottom: index < ticket.passengers.length - 1 ? '1px dashed #eee' : 'none'
                                }}>
                                    <div>
                                        <strong>{passenger.firstName} {passenger.lastName}</strong>
                                        {passenger.nationalCode && ` (${passenger.nationalCode})`}
                                    </div>
                                    <div>
                                        صندلی: {passenger.seatNumber || '-'}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div style={{ 
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '30px'
                        }}>
                            <div>
                                <p>شماره بلیط: {ticket.ticketNumber || '-'}</p>
                                <p>شماره رزرو: {ticket.requestNumber || '-'}</p>
                            </div>
                            <div>
                                <h3 style={{ fontWeight: 'bold', textAlign: 'left' }}>
                                    {formatPrice(ticket.price)} تومان
                                </h3>
                                <div style={{ 
                                    backgroundColor: ticket.status === '0' ? '#01a693' : 
                                                   ticket.status === '1' ? '#f44336' : '#4caf50',
                                    color: 'white',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    marginTop: '10px',
                                    textAlign: 'center'
                                }}>
                                    {getOrderStatus(ticket.status)}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* بخش دوم بلیط */}
                    <div style={{ 
                        padding: '20px',
                        border: '2px dashed #ccc',
                        borderTop: 'none',
                        borderBottomLeftRadius: '8px',
                        borderBottomRightRadius: '8px'
                    }}>
                        <p style={{ 
                            textAlign: 'center',
                            fontStyle: 'italic',
                            marginBottom: '20px',
                            color: '#555'
                        }}>
                            پرتو سیر از ابتدا تا انتهای مسیر، همراه شماست.
                        </p>
                        
                        <div style={{ 
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            marginBottom: '20px',
                            fontSize: '14px'
                        }}>
                            <p>
                                <strong>توجه:</strong> میزان بار مجاز برای سفرهای داخلی ۲۰ کیلوگرم است.
                                لطفاً در رعایت این محدودیت همکاری فرمایید.
                            </p>
                            <p style={{ marginTop: '10px' }}>
                                <strong>زمان حضور در ترمینال:</strong> حداقل ۳۰ دقیقه قبل از حرکت
                            </p>
                        </div>
                        
                        <div style={{ 
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '20px',
                            fontSize: '14px',
                            color: '#666'
                        }}>
                            <div>
                                <p>شماره تماس: {ticket.busDetail?.companyPhone }</p>
                            </div>
                            <div>
                                <p>تاریخ صدور: {formatDate(ticket.createdAt)}</p>
                            </div>
                        </div>
                        
                        <div style={{ 
                            textAlign: 'center',
                            marginTop: '20px',
                            paddingTop: '20px',
                            borderTop: '1px dashed #ccc',
                            fontSize: '12px',
                            color: '#999'
                        }}>
                            <p>www.parstoosir.com</p>
                            <p>پشتیبانی: ۰۱۱۳۳۲۴۳۰۵۶</p>
                        </div>
                    </div>
                </div>
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
                        .no-print {
                            display: none !important;
                        }
                    }
                `}
            </style>

            <Footer />

            {/* Scripts */}
            <script src="./vendor/lib/filterizr/vanilla.filterizr.min.js"></script>
            <script src="./vendor/lib/lozad/lozad.min.js"></script>
            <script src="./vendor/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
            <link rel="stylesheet" href="./vendor/lib/swiper/swiper-bundle.min.css" />
            <script src="./vendor/lib/swiper/swiper-bundle.min.js"></script>
            <link rel="stylesheet" href="./vendor/lib/jalaliDatePicker/jalalidatepicker.min.css" />
            <script src="./vendor/lib/jalaliDatePicker/jalalidatepicker.min.js"></script>
            <link rel="stylesheet" href="./vendor/lib/tom-select/tom-select.min.css" />
            <script src="./vendor/lib/tom-select/tom-select.complete.min.js"></script>
            <link rel="stylesheet" href="./vendor/lib/nouislider/nouislider.min.css" />
            <script src="./vendor/lib/nouislider/nouislider.min.js"></script>
            <script src="./js/script.js"></script>
        </div>
    );
};

export default ProfileOrdersDetails;