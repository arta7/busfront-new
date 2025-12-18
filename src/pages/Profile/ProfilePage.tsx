import Header from './../../components/home/Header'; // کامپوننت هدر
import Footer from './../../components/home/Footer'; // کامپوننت فوتر
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from '../../UserContext';
import { useNavigate,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePage = () => {
  const { userData: contextUserData, setUserData: setContextUserData } = useContext(UserContext);
  const navigate = useNavigate();

  // State برای مدیریت modal‌ها
  const [showModals, setShowModals] = useState({
    editPhone: false,
    editEmail: false,
    editPassword: false,
    editPersonal: false,
    editWallet: false
  });

  // State برای اطلاعات کاربر
  const [userInfo, setUserInfo] = useState({
    phone: '',
    email: '',
    fullName: '',
    nationalCode: '—',
    emergencyContact: '—',
    birthDate: '—',
    shaba: '—',
    accountNumber: '—',
    cardNumber: '—',
    firstName: '',
    lastName: '',
    image: null
  });

  // State برای فرم‌ها
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: '',
    nationalId: '',
    emergencyPhone: '',
    shabaNumber: '',
    bankAccount: '',
    cardNumber: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // API Configuration
  const api = axios.create({
    baseURL: 'https://api.kalanholding.com/api',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': contextUserData?.[0]?.Token || ''
    }
  });

  // Fetch profile data from API
  const fetchProfileData = async () => {
    setIsFetching(true);
    setError('');
    try {
      const response = await api.get('/profile');
      const data = response.data.data;

      setUserInfo(prev => ({
        ...prev,
        email: data.email || '',
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        fullName: `${data.firstName || ''} ${data.lastName || ''}`.trim(),
        phone: data.mobile || contextUserData?.[0]?.Mobile || '',
        nationalCode: data.nationalId || '—',
        emergencyContact: data.emergencyContact || '—',
        birthDate: data.birthDate || '—',
        shaba: data.sheba || '—',
        accountNumber: data.accountNumber || '—',
        cardNumber: data.cardNumber || '—',
        image: data.image
      }));

      // Update context
      if (contextUserData?.[0]) {
        const updatedUserData = [...contextUserData];
        updatedUserData[0].email = data.email;
        updatedUserData[0].firstName = data.firstName;
        updatedUserData[0].lastName = data.lastName;
        setContextUserData(updatedUserData);
      }

      // Update localStorage
      if (data.email) localStorage.setItem('email', data.email);
      if (data.firstName) localStorage.setItem('firstName', data.firstName);
      if (data.lastName) localStorage.setItem('lastName', data.lastName);

    } catch (error) {
      console.error('Error fetching profile data:', error);
      setError('خطا در بارگذاری اطلاعات پروفایل');
    } finally {
      setIsFetching(false);
    }
  };

  // Update profile API
  const updateProfile = async (updatedFields) => {
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const formDataToSend = new FormData();

      if (updatedFields.firstName !== undefined) {
        formDataToSend.append('FirstName', updatedFields.firstName);
      }
      if (updatedFields.lastName !== undefined) {
        formDataToSend.append('LastName', updatedFields.lastName);
      }
      if (updatedFields.email !== undefined) {
        formDataToSend.append('Email', updatedFields.email);
      }
      if (updatedFields.image !== undefined) {
        formDataToSend.append('Image', updatedFields.image || '');
      }

      const response = await axios.post('https://api.kalanholding.com/api/profile', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': contextUserData?.[0]?.Token
        }
      });

      setSuccess('اطلاعات با موفقیت به‌روز شد');
      return response.data.data;
    } catch (error) {
      console.error('Profile update error:', error);
      setError('خطا در به‌روزرسانی اطلاعات');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // توابع برای باز کردن modal‌ها
  const openModal = (modalName) => {
    setShowModals(prev => ({ ...prev, [modalName]: true }));

    // مقداردهی اولیه فرم‌ها با داده‌های فعلی
    if (modalName === 'editPhone') {
      setFormData(prev => ({ ...prev, phone: userInfo.phone }));
    } else if (modalName === 'editEmail') {
      setFormData(prev => ({ ...prev, email: userInfo.email }));
    } else if (modalName === 'editPersonal') {
      const nameParts = userInfo.fullName.split(' ');
      setFormData(prev => ({
        ...prev,
        firstName: nameParts[0] || '',
        lastName: nameParts[1] || '',
        nationalId: userInfo.nationalCode,
        emergencyPhone: userInfo.emergencyContact
      }));
    } else if (modalName === 'editWallet') {
      setFormData(prev => ({
        ...prev,
        shabaNumber: userInfo.shaba,
        bankAccount: userInfo.accountNumber,
        cardNumber: userInfo.cardNumber
      }));
    }
  };

  // توابع برای بستن modal‌ها
  const closeModal = (modalName) => {
    setShowModals(prev => ({ ...prev, [modalName]: false }));
  };

  // توابع برای ذخیره تغییرات
  const saveChanges = async (modalName) => {
    try {
      let updatedFields = {};

      switch (modalName) {
        case 'editPhone':
          if (formData.phone) {
            updatedFields = { mobile: formData.phone };
            // Note: You'll need to implement specific API for mobile update
            setUserInfo(prev => ({ ...prev, phone: formData.phone }));
          }
          break;
        case 'editEmail':
          if (formData.email) {
            updatedFields = {
              email: formData.email,
              firstName: userInfo.firstName,
              lastName: userInfo.lastName
            };
            const updatedData = await updateProfile(updatedFields);
            setUserInfo(prev => ({
              ...prev,
              email: formData.email,
              Email: formData.email
            }));
          }
          break;
        case 'editPersonal':
          updatedFields = {
            email: userInfo.email,
            firstName: formData.firstName || userInfo.firstName,
            lastName: formData.lastName || userInfo.lastName
          };
          const updatedData = await updateProfile(updatedFields);
          setUserInfo(prev => ({
            ...prev,
            firstName: formData.firstName || prev.firstName,
            lastName: formData.lastName || prev.lastName,
            fullName: `${formData.firstName || prev.firstName} ${formData.lastName || prev.lastName}`.trim(),
            nationalCode: formData.nationalId || prev.nationalCode,
            emergencyContact: formData.emergencyPhone || prev.emergencyContact
          }));
          break;
        case 'editWallet':
          // Note: You'll need to implement specific API for bank info update
          setUserInfo(prev => ({
            ...prev,
            shaba: formData.shabaNumber,
            accountNumber: formData.bankAccount,
            cardNumber: formData.cardNumber
          }));
          break;
      }

      closeModal(modalName);
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  // تابع برای مدیریت تغییرات input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchProfileData();
  }, []);

  // Initialize form data when modal opens
  useEffect(() => {
    if (openModal === 'editPersonal') {
      setFormData({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        nationalId: userInfo.nationalCode,
        emergencyPhone: userInfo.emergencyContact
      });
    } else if (openModal === 'editEmail') {
      setFormData({ email: userInfo.email });
    } else if (openModal === 'editPhone') {
      setFormData({ phone: userInfo.phone });
    }
  }, [openModal, userInfo]);

  // Loading state
  if (isFetching) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">در حال بارگذاری...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <Header />

      {/* Error/Success Messages */}
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {error}
          <button type="button" className="btn-close" onClick={() => setError('')}></button>
        </div>
      )}
      {success && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {success}
          <button type="button" className="btn-close" onClick={() => setSuccess('')}></button>
        </div>
      )}

      {/* Offcanvas Menu */}
      <div className="offcanvas offcanvas-start" id="offcanvasMenu" tabIndex="-1" aria-labelledby="offcanvasMenuLabel" style={{ display: 'none' }}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-muted" id="offcanvasMenuLabel">منو کاربری</h5>
          <button className="btn-close" type="button" onClick={() => closeModal('offcanvasMenu')}></button>
        </div>
        <div className="offcanvas-body">
          <div className="h-100 nt-flex-column">
            <div className="w-100 flex-grow-1">
              <div className="nt-flex-between-center gap-2 mb-4">
                <div className="nt-flex-start-center">
                  <img src="./img/logo-m.png" alt="پرتو سیر" width="80" />
                </div>
                <button className="btnSwitch btn btn-lg btn-light" type="button" aria-label="تغییر حالت روشن و تاریک سایت">
                  <i className="ti ti-sun fs-5" aria-hidden="true"></i>
                </button>
              </div>
              <div className="accordion accordion-flush" id="accordionOffcanvasMenu">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-5" type="button">
                      خدمات سفر
                    </button>
                  </h2>
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

      {/* Offcanvas Profile */}
      <div className="offcanvas offcanvas-start" id="offcanvasProfile" tabIndex="-1" aria-labelledby="offcanvasProfileLabel" style={{ display: 'none' }}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasProfileLabel">پروفایل کاربری</h5>
          <button className="btn-close" type="button" onClick={() => closeModal('offcanvasProfile')}></button>
        </div>
        <div className="offcanvas-body">
          <div className="p-2">
            <div className="nt-flex-column-center-center mb-4">
              <div className="border border-primary rounded-circle position-relative">
                <span className="position-absolute top-0 start-0 translate-middle badge rounded bg-success">
                  <i className="ti ti-checks fs-5" aria-hidden="true"></i>
                </span>
                <img src={userInfo.image || "./img/layouts/avatar/m1.png"} alt="پرتو سیر" width="80" />
              </div>
              <div className="nt-flex-column">
                <div className="profile-title">{userInfo.fullName}</div>
                <div className="text-muted">{userInfo.phone}</div>
              </div>
            </div>
            <div className="text-muted fw-bold small mb-3">منو کاربری</div>
            <nav className="profile-menu">
              <Link className="btn btn-outline-light active"  to="./profile">
                <i className="ti ti-user fs-4" aria-hidden="true"></i>
                حساب کاربری
              </Link>
              <Link className="btn btn-outline-light" to="/profile-orders">
                <i className="ti ti-luggage fs-4" aria-hidden="true"></i>
                سفر های من
              </Link>
              <button
                className="btn btn-outline-light d-flex align-items-center justify-content-start w-100 text-start"
                onClick={handleLogout}
                style={{ border: '1px solid #e0e3e8', padding: '12px 20px', borderRadius: '8px', color: '#495057' }}
              >
                <i className="ti ti-logout fs-4 me-2" aria-hidden="true"></i>
                خروج
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="main">
        <div className="profile">
          <div className="container">
            <div className="row py-5">
              {/* Sidebar (Desktop) */}
              <aside className="col-12 col-md-3 d-none d-md-block">
                <div className="bg-white border rounded py-5 px-4">
                  <div className="nt-flex-column-center-center mb-4">
                    <div className="border border-primary rounded-circle position-relative">
                      <span className="position-absolute top-0 start-0 translate-middle badge rounded bg-success">
                        <i className="ti ti-checks fs-5" aria-hidden="true"></i>
                      </span>
                      <img src={userInfo.image || "./img/layouts/avatar/m1.png"} alt="پرتو سیر" width="80" />
                    </div>
                    <div className="nt-flex-column">
                      <div className="profile-title">{userInfo.fullName}</div>
                      <div className="text-muted">{userInfo.phone}</div>
                    </div>
                  </div>
                  <div className="text-muted fw-bold small mb-3">منو کاربری</div>
                  <nav className="profile-menu">
                  <Link className="btn btn-outline-light active"  to="./profile">
                <i className="ti ti-user fs-4" aria-hidden="true"></i>
                حساب کاربری
              </Link>
              <Link className="btn btn-outline-light" to="/profile-orders">
                <i className="ti ti-luggage fs-4" aria-hidden="true"></i>
                سفر های من
              </Link>
                    <button
                      className="btn btn-outline-light d-flex align-items-center justify-content-start w-100 text-start mt-2"
                      onClick={handleLogout}
                      style={{ border: '1px solid #e0e3e8', padding: '12px 20px', borderRadius: '8px', color: '#495057' }}
                    >
                      <i className="ti ti-logout fs-4 me-2" aria-hidden="true"></i>
                      خروج
                    </button>
                  </nav>
                </div>
              </aside>

              {/* Main Content Area */}
              <section className="col-12 col-md-9">
                {/* Mobile Menu Button */}
                <div className="d-md-none mb-3">
                  <button className="btn btn-light" type="button">
                    <i className="ti ti-menu fs-4" aria-hidden="true"></i>
                    <div className="fw-bold">منو کاربری</div>
                  </button>
                </div>

                {/* Account Information */}
                <div className="profile-row">
                  <div className="profile-title mb-4">
                    <i className="ti ti-user-check fs-4" aria-hidden="true"></i>
                    اطلاعات حساب کاربری
                  </div>

                  {/* Phone Number */}
                  <div className="row align-items-center g-3 mb-4">
                    <div className="col-12 col-md-6">
                      <div className="row align-items-center">
                        <div className="col-12 col-md">
                          <div className="nt-flex-between-center gap-4">
                            <div className="text-muted">شماره موبایل</div>
                            <div className="text-truncate fw-bold">{userInfo.phone}</div>
                          </div>
                        </div>
                        <div className="col-auto col-md-4">
                          <div className="nt-badge bg-success text-success">
                            <i className="ti ti-check" aria-hidden="true"></i>
                            <div className="small">تایید شده</div>
                          </div>
                        </div>
                        <div className="col-auto col-md-2">
                          {/* <button 
                            className="btn btn-link link-info" 
                            type="button"
                            onClick={() => openModal('editPhone')}
                            disabled={isLoading}
                          >
                            <i className="ti ti-edit fs-5" aria-hidden="true"></i>
                            ویرایش
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="row align-items-center g-3">
                    <div className="col-12 col-md-6">
                      <div className="row align-items-center">
                        <div className="col-12 col-md">
                          <div className="nt-flex-between-center gap-4">
                            <div className="text-muted">ایمیل</div>
                            <div className="text-truncate fw-bold">{userInfo.email}</div>
                          </div>
                        </div>
                        <div className="col-auto col-md-2">
                          <button
                            className="btn btn-link link-info"
                            type="button"
                            onClick={() => openModal('editEmail')}
                            disabled={isLoading}
                          >
                            <i className="ti ti-edit fs-5" aria-hidden="true"></i>
                            ویرایش
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Password Edit Button */}
                  {/* <div className="nt-flex-end-end">
                    <button 
                      className="btn btn-outline-info" 
                      type="button"
                      onClick={() => openModal('editPassword')}
                      disabled={isLoading}
                    >
                      <i className="ti ti-key fs-5" aria-hidden="true"></i>
                      ویرایش کلمه عبور
                    </button>
                  </div> */}
                </div>

                {/* Personal Information */}
                <div className="profile-row">
                  <div className="nt-flex-between-center mb-4">
                    <div className="profile-title">
                      <i className="ti ti-user-square-rounded fs-4" aria-hidden="true"></i>
                      اطلاعات حساب کاربری
                    </div>
                    <button
                      className="btn btn-link link-info"
                      type="button"
                      onClick={() => openModal('editPersonal')}
                      disabled={isLoading}
                    >
                      <i className="ti ti-edit fs-5" aria-hidden="true"></i>
                      ویرایش اطلاعات
                    </button>
                  </div>

                  <div className="row align-items-center g-4 mb-4">
                    <div className="col-12 col-md-6">
                      <div className="row align-items-center">
                        <div className="col-12 col-md">
                          <div className="nt-flex-between-center gap-4">
                            <div className="text-muted">نام و نام خانوادگی</div>
                            <div className="text-truncate fw-bold">{userInfo.fullName}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="row align-items-center">
                        <div className="col-12 col-md">
                          <div className="nt-flex-between-center gap-4">
                            <div className="text-muted">کد ملی</div>
                            <div className="text-truncate fw-bold">{userInfo.nationalCode}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row align-items-center g-4">
                    <div className="col-12 col-md-6">
                      <div className="row align-items-center">
                        <div className="col-12 col-md">
                          <div className="nt-flex-between-center gap-4">
                            <div className="text-muted">شماره تماس ضروری</div>
                            <div className="text-truncate fw-bold">{userInfo.emergencyContact}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="row align-items-center">
                        <div className="col-12 col-md">
                          <div className="nt-flex-between-center gap-4">
                            <div className="text-muted">تاریخ تولد</div>
                            <div className="text-truncate fw-bold">{userInfo.birthDate}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bank Account Information - فعلا غیرفعال */}
                {/* <div className="profile-row">
                  <div className="nt-flex-between-center mb-4">
                    <div className="profile-title">
                      <i className="ti ti-building-bank fs-4" aria-hidden="true"></i>
                      اطلاعات حساب بانکی
                    </div>
                    <button 
                      className="btn btn-link link-info" 
                      type="button"
                      onClick={() => openModal('editWallet')}
                    >
                      <i className="ti ti-edit fs-5" aria-hidden="true"></i>
                      ویرایش اطلاعات
                    </button>
                  </div>

                  <div className="row align-items-center g-4 mb-4">
                    <div className="col-12 col-md-6">
                      <div className="row align-items-center">
                        <div className="col-12 col-md">
                          <div className="nt-flex-between-center gap-4">
                            <div className="text-muted">شماره شبا</div>
                            <div className="text-truncate fw-bold">{userInfo.shaba}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="row align-items-center">
                        <div className="col-12 col-md">
                          <div className="nt-flex-between-center gap-4">
                            <div className="text-muted">شماره حساب</div>
                            <div className="text-truncate fw-bold">{userInfo.accountNumber}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row align-items-center g-4">
                    <div className="col-12 col-md-6">
                      <div className="row align-items-center">
                        <div className="col-12 col-md">
                          <div className="nt-flex-between-center gap-4">
                            <div className="text-muted">شماره کارت</div>
                            <div className="text-truncate fw-bold">{userInfo.cardNumber}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Modal برای ویرایش شماره موبایل */}
      {showModals.editPhone && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">ویرایش شماره موبایل</h1>
                <button className="btn-close" type="button" onClick={() => closeModal('editPhone')}></button>
              </div>
              <div className="modal-body">
                <div className="nt-modal-wrapper">
                  <p className="lead lh-lg text-muted">برای ویرایش، شماره موبایل جدید خود را وارد کنید.</p>
                  <form>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="شماره موبایل"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isLoading}
                    />
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-light" type="button" onClick={() => closeModal('editPhone')} disabled={isLoading}>
                  بستن
                </button>
                <button className="btn btn-primary" type="button" onClick={() => saveChanges('editPhone')} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      در حال ذخیره...
                    </>
                  ) : 'ثبت'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal برای ویرایش ایمیل */}
      {showModals.editEmail && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">ویرایش آدرس ایمیل</h1>
                <button className="btn-close" type="button" onClick={() => closeModal('editEmail')}></button>
              </div>
              <div className="modal-body">
                <div className="nt-modal-wrapper">
                  <p className="lead lh-lg text-muted">برای ویرایش، آدرس ایمیل جدید خود را وارد کنید.</p>
                  <form>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="آدرس ایمیل"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isLoading}
                    />
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-light" type="button" onClick={() => closeModal('editEmail')} disabled={isLoading}>
                  بستن
                </button>
                <button className="btn btn-primary" type="button" onClick={() => saveChanges('editEmail')} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      در حال ذخیره...
                    </>
                  ) : 'ثبت'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal برای تغییر رمز عبور */}
      {showModals.editPassword && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">تغییر کلمه عبور</h1>
                <button className="btn-close" type="button" onClick={() => closeModal('editPassword')}></button>
              </div>
              <div className="modal-body">
                <div className="nt-modal-wrapper">
                  <p className="lead lh-lg text-muted">رمز عبور فعلی و رمز عبور جدید خود را وارد نمایید.</p>
                  <form>
                    <div className="row g-4 mb-4">
                      <div className="col-12">
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          placeholder="رمز عبور فعلی"
                          name="currentPassword"
                          value={formData.currentPassword || ''}
                          onChange={handleInputChange}
                          disabled={isLoading}
                        />
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          placeholder="رمز عبور جدید"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          disabled={isLoading}
                        />
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          placeholder="تکرار رمز عبور جدید"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                    <div className="w-100 text-start text-muted small">رمز عبور باید بیشتر از ۶ رقم باشد.</div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-light" type="button" onClick={() => closeModal('editPassword')} disabled={isLoading}>
                  بستن
                </button>
                <button className="btn btn-primary" type="button" onClick={() => closeModal('editPassword')} disabled={isLoading}>
                  ثبت
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal برای ویرایش اطلاعات شخصی */}
      {showModals.editPersonal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">ویرایش اطلاعات شخصی</h1>
                <button className="btn-close" type="button" onClick={() => closeModal('editPersonal')}></button>
              </div>
              <div className="modal-body">
                <div className="nt-modal-wrapper">
                  <form>
                    <div className="mb-3">
                      <div className="form-floating">
                        <input
                          className="form-control"
                          id="firstName"
                          type="text"
                          placeholder="نام"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          disabled={isLoading}
                        />
                        <label htmlFor="firstName">نام</label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-floating">
                        <input
                          className="form-control"
                          id="familyName"
                          type="text"
                          placeholder="نام خانوادگی"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          disabled={isLoading}
                        />
                        <label htmlFor="familyName">نام خانوادگی</label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="birthDate">تاریخ تولد</label>
                      <div className="input-group">
                        <input
                          className="form-control"
                          id="birthDay"
                          type="text"
                          placeholder="روز"
                          name="birthDay"
                          value={formData.birthDay}
                          onChange={handleInputChange}
                          disabled={isLoading}
                        />
                        <input
                          className="form-control"
                          id="birthMonth"
                          type="text"
                          placeholder="ماه"
                          name="birthMonth"
                          value={formData.birthMonth}
                          onChange={handleInputChange}
                          disabled={isLoading}
                        />
                        <input
                          className="form-control"
                          id="birthYear"
                          type="text"
                          placeholder="سال"
                          name="birthYear"
                          value={formData.birthYear}
                          onChange={handleInputChange}
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">جنسیت</label>
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          disabled={isLoading}
                        >
                          <option value="">جنسیت خود را انتخاب کنید</option>
                          <option value="1">مرد</option>
                          <option value="2">زن</option>
                        </select>
                        <label htmlFor="gender">جنسیت</label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-floating">
                        <input
                          className="form-control"
                          id="idNumber"
                          type="text"
                          placeholder="کد ملی"
                          name="nationalId"
                          value={formData.nationalId}
                          onChange={handleInputChange}
                          disabled={isLoading}
                        />
                        <label htmlFor="idNumber">کد ملی</label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-floating">
                        <input
                          className="form-control"
                          id="emergencyNumber"
                          type="text"
                          placeholder="شماره تماس ضروری"
                          name="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={handleInputChange}
                          disabled={isLoading}
                        />
                        <label htmlFor="emergencyNumber">شماره تماس ضروری</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-light" type="button" onClick={() => closeModal('editPersonal')} disabled={isLoading}>
                  بستن
                </button>
                <button className="btn btn-primary" type="button" onClick={() => saveChanges('editPersonal')} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      در حال ذخیره...
                    </>
                  ) : 'ثبت'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal برای ویرایش اطلاعات حساب بانکی */}
      {showModals.editWallet && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">ویرایش اطلاعات حساب بانکی</h1>
                <button className="btn-close" type="button" onClick={() => closeModal('editWallet')}></button>
              </div>
              <div className="modal-body">
                <div className="nt-modal-wrapper">
                  <p className="lead lh-lg text-muted">
                    اطلاعات حساب بانکی به منظور بازگشت وجه پس از استرداد دریافت می‌شود.
                  </p>
                  <form>
                    <div className="row g-4 mb-4">
                      <div className="col-12">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          placeholder="شماره شبا"
                          name="shabaNumber"
                          value={formData.shabaNumber}
                          onChange={handleInputChange}
                          disabled={isLoading}
                        />
                      </div>
                      <div className="col-12">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          placeholder="شماره حساب"
                          name="bankAccount"
                          value={formData.bankAccount}
                          onChange={handleInputChange}
                          disabled={isLoading}
                        />
                      </div>
                      <div className="col-12">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          placeholder="شماره کارت"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-light" type="button" onClick={() => closeModal('editWallet')} disabled={isLoading}>
                  بستن
                </button>
                <button className="btn btn-primary" type="button" onClick={() => saveChanges('editWallet')} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      در حال ذخیره...
                    </>
                  ) : 'ثبت'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProfilePage;