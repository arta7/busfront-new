

import React, { useState, useEffect, useContext } from 'react';
import Header from './../../components/home/Header';
import Footer from './../../components/home/Footer';
import { Link,useNavigate  } from 'react-router-dom';
import UserContext from './../../UserContext';

const ProfileOrdersPage = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderType, setOrderType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleViewDetails = (orderId,ticketList) => {
    navigate('/profile-orders-detail', {
      state: { orderId: orderId,ticketList:ticketList }
    });
  };
  // توابع برای مدیریت تغییرات فرم
  const handleOrderNumberChange = (e) => {
    const value = e.target.value;
    setOrderNumber(value);
    filterOrders(value, orderType, fromDate, toDate);
  };

  const handleOrderTypeChange = (e) => {
    console.log('e : ', e.target.value)
    const value = e.target.value;
    setOrderType(value);
    filterOrders(orderNumber, value, fromDate, toDate);
  };

  const handleFromDateChange = (e) => {
    const value = e.target.value;
    setFromDate(value);
    filterOrders(orderNumber, orderType, value, toDate);
  };

  const handleToDateChange = (e) => {
    const value = e.target.value;
    setToDate(value);
    filterOrders(orderNumber, orderType, fromDate, value);
  };

  // تابع فیلتر سفارشات
  const filterOrders = (number, type, from, to) => {
    let filtered = orders;

    if (number) {
      filtered = filtered.filter(order =>
        order.requestNumber?.includes(number) ||
        order.ticketNumber?.includes(number) ||
        order.trackCode?.includes(number)
      );
    }

    if (type && type !== "all") {
      filtered = filtered.filter(order => {
        if (type === "reserved") return order.status === '0';
        if (type === "cancelled") return order.status !== '0';
        return true;
      });
    }

    if (from) {
      filtered = filtered.filter(order => {
        const orderDate = new Date(order.updatedAt);
        const fromDate = new Date(from);
        return orderDate >= fromDate;
      });
    }

    if (to) {
      filtered = filtered.filter(order => {
        const orderDate = new Date(order.updatedAt);
        const toDate = new Date(to);
        return orderDate <= toDate;
      });
    }

    setFilteredOrders(filtered);
  };

  // بارگذاری اولیه سفارشات از API
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.kalanholding.com/api/bus/bus-tickets', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': userData[0]?.Token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({})
        });

        const data = await response.json();


        // if (data.status != '0') {
        //   throw new Error(data.message || 'خطا در دریافت بلیط‌ها');
        // }

        const tickets = data.data.filter(item=>item.busDetail !=null)  || [];
        setOrders(tickets);
        setFilteredOrders(tickets);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userData && userData[0]?.Token) {
      fetchTickets();
    } else {
      setError('لطفاً ابتدا وارد حساب کاربری خود شوید');
      setLoading(false);
    }
  }, [userData]);

  // توابع کمکی
  const formatPrice = (price) => {
    if (!price) return '۰';
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'نامشخص';
    const date = new Date(dateString);
    return date.toLocaleDateString('fa-IR');
  };

  const formatTime = (timeString) => {
    if (!timeString) return 'نامشخص';
    return timeString;
  };

  const getStatusText = (status) => {
    const statusMap = {
      '0': { text: 'رزرو شده', className: 'bg-success text-success' },
      '1': { text: 'لغو شده', className: 'bg-danger text-danger' },
      '2': { text: 'صادر شده', className: 'bg-info text-info' },
      '3': { text: 'در انتظار پرداخت', className: 'bg-warning text-warning' }
    };
    return statusMap[status];
  };

  const getGenderText = (gender) => {
    return gender === '2' ? 'آقا' : 'خانم';
  };

  const getUserName = () => {
    if (userData && userData[0]) {
      return `${userData[0]?.firstName || ''} ${userData[0]?.lastName || ''}`.trim() || 'کاربر';
    }
    return 'کاربر';
  };

  const getUserPhone = () => {
    if (userData && userData[0]) {
      return userData[0]?.Mobile || 'نامشخص';
    }
    return 'نامشخص';
  };

  // تابع برای تعداد مسافران
  const getPassengersCount = (passengers) => {
    return passengers?.length || 0;
  };

  // if (error) {
  //   return (
  //     <>
  //       <Header />
  //       <main className="main" style={{ marginTop: '30px' }}>
  //         <div className="container py-5">
  //           <div className="alert alert-danger text-center">
  //             <i className="ti ti-alert-circle fs-4 me-2" aria-hidden="true"></i>
  //             {error}
  //             <div className="mt-3">
  //               <button 
  //                 className="btn btn-primary me-2"
  //                 onClick={() => window.location.reload()}
  //               >
  //                 تلاش مجدد
  //               </button>
  //               <Link to="/login" className="btn btn-outline-primary">
  //                 ورود به حساب کاربری
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       </main>
  //       <Footer />
  //     </>
  //   );
  // }

  return (
    <>
      <Header />

      <main className="main" style={{ marginTop: '30px' }}>
        <div className="profile">
          <div className="container">
            <div className="row py-5">
              {/* سایدبار دسکتاپ */}
              <aside className="col-12 col-md-3 d-none d-md-block">
                <div className="bg-white border rounded py-5 px-4">
                  <div className="nt-flex-column-center-center mb-4">
                    <div className="border border-primary rounded-circle position-relative">
                      <span
                        className="position-absolute top-0 start-0 translate-middle badge rounded bg-success"
                        title="تایید شده"
                      >
                        <i className="ti ti-checks fs-5" aria-hidden="true"></i>
                        <span className="visually-hidden">تایید شده</span>
                      </span>
                      <img src="./img/layouts/avatar/m1.png" alt="پرتو سیر" />
                    </div>
                    <div className="nt-flex-column">
                      <div className="profile-title">{getUserName()}</div>
                      <div className="text-muted">{getUserPhone()}</div>
                    </div>
                  </div>

                  {/* بخش کیف پول */}


                  <div className="text-muted fw-bold small mb-3">منو کاربری</div>
                  <nav className="profile-menu">
                    <Link className="btn btn-outline-light" to="/profile">
                      <i className="ti ti-user fs-4" aria-hidden="true"></i>
                      حساب کاربری
                    </Link>
                    <Link className="btn btn-outline-light active" to="/profile-orders">
                      <i className="ti ti-luggage fs-4" aria-hidden="true"></i>
                      سفر های من
                    </Link>
                    {/* <Link className="btn btn-outline-light" to="/profile-passengers">
                      <i className="ti ti-users-group fs-4" aria-hidden="true"></i>
                      لیست های مسافران
                    </Link>
                    <Link className="btn btn-outline-light" to="/profile-wishlist">
                      <i className="ti ti-heart fs-4" aria-hidden="true"></i>
                      علاقه مندی ها
                    </Link>
                    <Link className="btn btn-outline-light" to="/profile-ticketing">
                      <i className="ti ti-headset fs-4" aria-hidden="true"></i>
                      درخواست پشتیبانی
                    </Link>
                    <Link className="btn btn-outline-light" to="/profile-transactions">
                      <i className="ti ti-businessplan fs-4" aria-hidden="true"></i>
                      موجودی و اعتبار من
                    </Link> */}
                  </nav>
                </div>
              </aside>

              {/* بخش اصلی محتوا */}
              <section className="col-12 col-md-9">
                {/* دکمه منو برای موبایل */}
                <div className="d-md-none mb-3">
                  <button
                    className="btn btn-light"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasProfile"
                  >
                    <i className="ti ti-menu fs-4" aria-hidden="true"></i>
                    <div className="fw-bold">منو کاربری</div>
                  </button>
                </div>

                {/* بخش سفارشات */}
                <div className="profile-row">
                  <div className="row align-items-center g-3">
                    <div className="col-12 col-md">
                      <div className="profile-title mb-4">
                        <i className="ti ti-ticket fs-4 me-2" aria-hidden="true"></i>
                        سفر های من
                        <span className="badge bg-primary ms-2">
                          {filteredOrders.length} سفارش
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* فرم جستجوی سفارشات */}
                  <div className="row pb-4 border-bottom">
                    {/* فیلد شماره سفارش */}
                    <div className="col-12 col-md-3">
                      <div className="text-muted mb-2 small">شماره سفارش/بلیط</div>
                      <div className="form-floating">
                        <input
                          className="form-control"
                          id="orderNumber"
                          type="text"
                          placeholder="شماره سفارش"
                          value={orderNumber}
                          onChange={handleOrderNumberChange}
                        />
                        <label htmlFor="orderNumber">شماره سفارش/بلیط</label>
                      </div>
                    </div>

                    {/* فیلد وضعیت سفارش */}
                    <div className="col-12 col-md-3">
                      <div className="text-muted mb-2 small">وضعیت سفارش</div>
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="orderType"
                          value={orderType}
                          onChange={handleOrderTypeChange}
                        >
                          <option value="all">همه وضعیت‌ها</option>
                          <option value="reserved">رزرو شده</option>
                          <option value="cancelled">لغو شده</option>
                          <option value="issued">صادر شده</option>
                        </select>
                        <label htmlFor="orderType">وضعیت سفارش</label>
                      </div>
                    </div>

                    {/* فیلد تاریخ سفارش */}
                    <div className="col-12 col-md-6">
                      <div className="text-muted mb-2 small">تاریخ سفارش</div>
                      <div className="input-group">
                        <div className="form-floating">
                          <input
                            className="form-control"
                            id="from"
                            type="date"
                            placeholder="از تاریخ"
                            value={fromDate}
                            onChange={handleFromDateChange}
                          />
                          <label htmlFor="from">از تاریخ</label>
                        </div>
                        <span className="input-group-text">تا</span>
                        <div className="form-floating">
                          <input
                            className="form-control"
                            id="to"
                            type="date"
                            placeholder="تا تاریخ"
                            value={toDate}
                            onChange={handleToDateChange}
                          />
                          <label htmlFor="to">تا تاریخ</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Loading State */}
                  {loading && (
                    <div className="row py-4">
                      <div className="col-12 text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">در حال بارگذاری...</span>
                        </div>
                        <div className="text-muted mt-3">در حال دریافت اطلاعات سفارشات...</div>
                      </div>
                    </div>
                  )}

                  {/* لیست سفارشات */}
                  {!loading && filteredOrders.length > 0 && (
                    <div className="row py-4">
                      {filteredOrders.map((order) => {
                        const statusInfo = getStatusText(order.status);
                        return (
                          <div key={order.id} className="col-12 mb-4">
                            <div className="border rounded shadow-sm">
                              {/* هدر سفارش */}
                              <div className="nt-flex-between-center border-bottom p-3 bg-light">
                                <div className="nt-flex align-items-center">
                                  <i className="ti ti-bus fs-4 text-primary me-2" aria-hidden="true"></i>
                                  <div>
                                    <div className="fs-5 fw-bold">سفر اتوبوسی</div>
                                    <div className="text-muted small">
                                      <i className="ti ti-calendar me-1" aria-hidden="true"></i>
                                      {formatDate(order.updatedAt)}
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                  <div className={`nt-badge ${statusInfo.className} small mb-2`}>
                                    {statusInfo.text}
                                  </div>
                                  <div className="text-muted small">
                                    کد رهگیری: {order.trackCode || 'نامشخص'}
                                  </div>
                                </div>
                              </div>

                              {/* اطلاعات اصلی */}
                              <div className="p-3 border-bottom">
                                <div className="row">
                                  {/* اطلاعات مسیر */}
                                  <div className="col-md-6 mb-3">
                                    <div className="d-flex align-items-start mb-2">
                                      <i className="ti ti-route fs-5 text-primary me-2 mt-1" aria-hidden="true"></i>
                                      <div>
                                        <div className="text-muted small">مسیر</div>
                                        <div className="fw-bold fs-5">
                                          {order.busDetail?.originCity || 'نامشخص'}
                                          <i className="ti ti-arrow-right mx-2 text-muted" aria-hidden="true"></i>
                                          {order.busDetail?.destinationCity || 'نامشخص'}
                                        </div>
                                        <div className="text-muted small mt-1">
                                          ترمینال: {order.busDetail?.originTerminal} → {order.busDetail?.destinationTerminal}
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* اطلاعات زمان و تاریخ */}
                                  <div className="col-md-6 mb-3">
                                    <div className="row">
                                      <div className="col-6">
                                        <div className="text-muted small">تاریخ حرکت</div>
                                        <div className="fw-bold">{order.busDetail?.dateMove || 'نامشخص'}</div>
                                      </div>
                                      <div className="col-6">
                                        <div className="text-muted small">ساعت حرکت</div>
                                        <div className="fw-bold">{formatTime(order.busDetail?.timeMove)}</div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* اطلاعات شرکت و نوع ماشین */}
                                  <div className="col-md-6">
                                    <div className="text-muted small">شرکت حمل‌ونقل</div>
                                    <div className="fw-bold">
                                      <i className="ti ti-building me-1" aria-hidden="true"></i>
                                      {order.busDetail?.companyName || 'نامشخص'}
                                      <span className="badge bg-secondary ms-2">
                                        {order.busDetail?.carType || 'نامشخص'}
                                      </span>
                                    </div>
                                  </div>

                                  {/* اطلاعات مسافران */}
                                  <div className="col-md-6">
                                    <div className="text-muted small">مسافران</div>
                                    <div className="fw-bold">
                                      <i className="ti ti-users me-1" aria-hidden="true"></i>
                                      {getPassengersCount(order.passengers)} نفر
                                    </div>
                                    {order.passengers?.map(passenger => (
                                      <div key={passenger.id} className="badge bg-light text-dark me-1 mt-1">
                                        {passenger.firstName} {passenger.lastName} (صندلی {passenger.seatNumber})
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* فوتتر سفارش */}
                              <div className="nt-flex-between-center p-3 bg-light">
                                <div className="nt-flex-start-center gap-4 flex-wrap">
                                  <div className="nt-flex flex-column">
                                    <div className="text-muted small">شماره سفارش</div>
                                    <div className="fw-bold">{order.requestNumber || 'نامشخص'}</div>
                                  </div>
                                  <div className="nt-flex flex-column">
                                    <div className="text-muted small">شماره بلیط</div>
                                    <div className="fw-bold">{order.ticketNumber || 'نامشخص'}</div>
                                  </div>
                                  <div className="nt-flex flex-column">
                                    <div className="text-muted small">مبلغ پرداختی</div>
                                    <div className="fw-bold text-success">
                                      {formatPrice(order.price)} تومان
                                    </div>
                                  </div>
                                  {order.beforeDiscountPrice && order.beforeDiscountPrice > order.price && (
                                    <div className="nt-flex flex-column">
                                      <div className="text-muted small">قیمت اصلی</div>
                                      <div className="fw-bold text-decoration-line-through text-muted">
                                        {formatPrice(order.beforeDiscountPrice)} تومان
                                      </div>
                                    </div>
                                  )}
                                </div>
                                {/* <Link 
                                  className="btn btn-primary d-flex align-items-center" 
                                  to={`/profile-orders-detail/${order.id}`}
                                >
                                  <i className="ti ti-eye me-2" aria-hidden="true"></i>
                                  مشاهده جزییات
                                </Link> */}
                                <button
                                  className="btn btn-primary d-flex align-items-center"
                                  onClick={() => {
                                    console.log('order',order)
                                    handleViewDetails(order.id,order)
                                  
                                  }}
                                  type="button"
                                >
                                  <i className="ti ti-eye me-2" aria-hidden="true"></i>
                                  مشاهده جزییات
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* پیام در صورت نبودن سفارش */}
                  {!loading && filteredOrders.length === 0 && orders.length === 0 && (
                   <div className="row py-4">
                   <div className="col-12 text-center py-5">
                     <div className="alert alert-warning">
                       <i className="ti ti-search-off fs-4 me-2" aria-hidden="true"></i>
                       <div className="fs-5">هیچ سفارشی با فیلترهای انتخابی یافت نشد</div>
                          <div className="mt-2">
                            می‌توانید از 
                            <Link to="/" className="mx-1">صفحه اصلی</Link>
                            برای خرید بلیط اقدام کنید.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* پیام در صورت نبودن سفارش پس از فیلتر */}
                  {!loading && filteredOrders.length === 0 && orders.length > 0 && (
                    <div className="row py-4">
                      <div className="col-12 text-center py-5">
                        <div className="alert alert-warning">
                          <i className="ti ti-search-off fs-4 me-2" aria-hidden="true"></i>
                          <div className="fs-5">هیچ سفارشی با فیلترهای انتخابی یافت نشد</div>
                          <button
                            className="btn btn-sm btn-outline-primary mt-3"
                            onClick={() => {
                              setOrderNumber('');
                              setOrderType('');
                              setFromDate('');
                              setToDate('');
                              setFilteredOrders(orders);
                            }}
                          >
                            حذف فیلترها
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Offcanvas Profile برای موبایل */}
      <div className="offcanvas offcanvas-start" id="offcanvasProfile" tabIndex="-1">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">پروفایل کاربری</h5>
          <button className="btn-close" type="button" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <div className="p-2">
            <div className="nt-flex-column-center-center mb-4">
              <div className="border border-primary rounded-circle position-relative">
                <span className="position-absolute top-0 start-0 translate-middle badge rounded bg-success">
                  <i className="ti ti-checks fs-5" aria-hidden="true"></i>
                </span>
                <img src="./img/layouts/avatar/m1.png" alt="پرتو سیر" />
              </div>
              <div className="nt-flex-column">
                <div className="profile-title">{getUserName()}</div>
                <div className="text-muted">{getUserPhone()}</div>
              </div>
            </div>

            {/* بخش کیف پول در منوی موبایل */}
            {/* <div className="bg-secondary text-white rounded p-3 mb-4">
              <div className="nt-flex-between-start gap-2">
                <div className="nt-flex-column gap-3">
                  <div className="nt-flex text-bg-light">
                    <i className="ti ti-wallet fs-3" aria-hidden="true"></i>
                    موجودی حساب 
                  </div>
                  <Link className="btn btn-sm btn-secondary" to="/profile-transactions">
                    <i className="ti ti-plus fs-5" aria-hidden="true"></i>
                    <span className="small">افزایش موجودی</span>
                  </Link>
                </div>
                <div className="nt-flex">
                  <div className="badge text-bg-light">۰</div>
                  <div className="small text-bg-light">تومان</div>
                </div>
              </div>
            </div> */}

            <div className="text-muted fw-bold small mb-3">منو کاربری</div>
            <nav className="profile-menu">
              <Link className="btn btn-outline-light" to="/profile">
                <i className="ti ti-user fs-4" aria-hidden="true"></i>
                حساب کاربری
              </Link>
              <Link className="btn btn-outline-light active" to="/profile-orders">
                <i className="ti ti-luggage fs-4" aria-hidden="true"></i>
                سفر های من
              </Link>
              {/* <Link className="btn btn-outline-light" to="/profile-passengers">
                <i className="ti ti-users-group fs-4" aria-hidden="true"></i>
                لیست های مسافران
              </Link>
              <Link className="btn btn-outline-light" to="/profile-wishlist">
                <i className="ti ti-heart fs-4" aria-hidden="true"></i>
                علاقه مندی ها
              </Link>
              <Link className="btn btn-outline-light" to="/profile-ticketing">
                <i className="ti ti-headset fs-4" aria-hidden="true"></i>
                درخواست پشتیبانی
              </Link>
              <Link className="btn btn-outline-light" to="/profile-transactions">
                <i className="ti ti-businessplan fs-4" aria-hidden="true"></i>
                موجودی و اعتبار من
              </Link> */}
            </nav>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProfileOrdersPage;