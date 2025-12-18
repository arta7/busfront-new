import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        about: {
          storyTitle: "Our Story",
          storyContent: "Parto Sir Iranian International Company was established in 1997 with over 27 years of experience in international passenger transportation services. Under the leadership of CEO Mr. Naser Kalantari, we operate a modern fleet including 30 buses, 24 vans, and 54 intercity vehicles.",
          storyImageAlt: "Our company history",
          networkTitle: "Our Network",
          networkContent1: "With branches in Sari, Mashhad, Qom, Ahvaz, Zahedan, Taybad, Zabol, Chabahar, Rasht, Tehran, and Ilam, we serve key international routes including:",
          route1: "Mashhad-Herat / Taybad-Herat",
          route2: "Zabol-Kandahar / Zahedan-Nimroz",
          route3: "Zahedan-Quetta / Chabahar-Karachi",
          route4: "Ahvaz-Basra / Qom-Najaf",
          route5: "Sari-Najaf / Rasht-Najaf",
          networkImageAlt: "Our transportation network",
          achievementsTitle: "Our Achievements",
          achievementsContent1: "We have established strong transportation partnerships with Turkmenistan, Iraq, and Afghanistan. During Arbaeen, we're recognized as a top transportation provider for pilgrims, offering dedicated fleets and professional drivers.",
          achievementsContent2: "Building on domestic capabilities and regional relationships, we're committed to sustainable development in transportation, tourism, and passenger services, working toward Iran's Vision 2025 as a regional tourism hub.",
          achievementsImageAlt: "Our achievements"
        },
        busSchedule: {
          days: {
            saturday: "Saturday",
            sunday: "Sunday",
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday"
          },
          noResults: "No bus schedules available",
          seatsLeft: "seats left",
          price: "Price",
          time: "Departure Time",
          bookNow: "Book Now"
        },
        navbar: {
          home: "Home",
          about: "About Us",
          stations: "Stations",
          loginWithGoogle: "Login with Google",
          greeting: "Hi ",
          profile: "Profile",
          logout: "Logout",
          login: "Login",
          user: "User",
          changeLanguage: "Change Language",
          logoutError: "Logout failed. Please try again"
        },
        mapList: {
          title: 'Branch Information',
          address: 'Address:',
          phone: 'Phone:',
          manager: 'Manager:',
          mapUnavailable: 'Map is currently unavailable',
          viewOnNeshan: '(View on Neshan)',
          branch: '',
          toggleLanguage: 'فارسی',
          branches: {
            Taybad: 'Taybad',
            Zabol: 'Zabol',
            Qom: 'Qom',
            Sari: 'Sari',
            Ilam: 'Ilam',
            Ahvaz: 'Ahvaz',
            Mashhad: 'Mashhad',
            Chabahar: 'Chabahar'
          },
          addresses: {
            Taybad: 'Taybad Terminal, Booth 1',
            Zabol: 'Zabol, Rostam Square, Terminal Booth 13',
            Qom: 'Qom Terminal, Kowsar Terminal, next to the Trade Union',
            Sari: 'Dolat Passenger Terminal, Defa Moghaddas Blvd',
            Ilam: 'Ilam, Chalsara Martyrs Blvd, Ilam Municipality Martyrs Passenger Terminal',
            Ahvaz: 'Ahvaz, Sayahat Terminal, 2nd Floor',
            Mashhad: 'Mashhad, next to Imam Reza Terminal, corner of Imam Reza 69',
            Chabahar: 'Chabahar Central District, Chabahar Passenger Terminal'
          },
          managers: {
            Taybad: 'Mr. Behrouz Yazdani',
            Zabol: 'Mr. Rajab Akbari',
            Qom: 'Mr. Nizar Abolsan',
            Sari: 'Mr. Naser Kalantari',
            Ilam: 'Mr. Mashallah Rahmati',
            Ahvaz: 'Mr. Hossein Kalantari',
            Mashhad: 'Mr. Naser Kalantari',
            Chabahar: 'Ms. Behnaz Yazdani'
          }
        },
        search: {
          source: 'Source',
          destination: 'Destination',
          date: 'Date',
          searchButton: 'Search',
          alertMessage: 'Please select all items',
          transportType: 'Type',
          bus: 'Bus',
          taxi: 'Taxi',
          van: 'Van',
          cargo: 'Cargo'
        },
        contact: {
          title: 'Contact us',
          help: {
            title: 'Live chat & Help center',
            detail1: 'Want a quick answer to a Burning Question?',
            detail2: 'Visit our Help Center for FAQs or chat with a live agent.'
          },
          phone: {
            title: 'Mobile & WhatsApp',
            label: 'Phone'
          },
          email: {
            title: 'Email Us'
          }
        },
        login: {
          phoneLabel: 'Phone Number',
          submitButton: 'Submit',
          codeLabel: 'Verification Code',
          modalTitle: 'Please enter the code sent to your phone',
          verifying: 'Verifying...',
          resendButton: 'Resend Code',
          resendCountdown: 'Resend in {{count}}s',
          codeEmptyAlert: 'Verification code is required',
          title: 'Login'
        },
        buttons: {
          more: 'More',
          payment: 'Payment'
        },
        booking: {
          title: 'Booking Details'
        },
        labels: {
          company: 'Company',
          details: 'Details',
          busFront: 'Bus Front'
        },
        passenger: {
          title: 'Passenger',
          name: 'Name',
          family: 'Family',
          mobile: 'Mobile No',
          birthday: 'Birthday (yyyy/mm/dd)',
          nationalCode: 'National Code',
          male: 'Male',
          female: 'Female'
        },
        validation: {
          nameRequired: 'Name required',
          minName: 'Min Name 3 Characters',
          familyRequired: 'Family Required',
          minFamily: 'Min Family 3 Characters',
          mobileRequired: 'Cell Phone Required',
          minMobile: 'Min Mobile 11 Characters',
          birthdayRequired: 'BirthDay Required',
          nationalCodeRequired: 'NationalCode Required',
          minPassenger: 'At least one passenger is required'
        },
        seat: {
          male: 'Man',
          female: 'Woman'
        },
        busDetails: {
          source: "Source",
          destination: "Destination",
          dateTime: "Date & Time",
          type: "Type",
          sourceIconAlt: "Source Icon",
          destinationIconAlt: "Destination Icon",
          arrowIconAlt: "Arrow Icon",
          scheduleIconAlt: "Schedule Icon",
          facilitiesIconAlt: "Facilities Icon"
        },
        busTicket: {
          currency: "Rial",
          seatsLeft: "{{count}} seats left",
          busIconAlt: "Bus icon"
        },
        footer: {
          usefulLinks: "Useful Links",
          aboutUs: "About Us",
          privacyPolicy: "Privacy Policy",
          termsConditions: "Terms & Conditions",
          support: "Support",
          refundPolicy: "Refund Policy",
          contactUs: "Contact Us",
          copyright: " partoseir.com - Website designed by ",
          logoAlt: "College logo",
          frameAlt: "College frame"
        },
        home: {
          advertise: "Advertise",
          ad1Title: "Advertising 1",
          ad2Title: "Advertising 2",
          ad1Alt: "First advertisement image",
          ad2Alt: "Second advertisement image"
        },
         "profile": {
      "name": "Name",
      "family": "Last Name",
      "mobile": "Mobile",
      "email": "Email",
      "profileImageAlt": "Profile Image",
      "profileDetails": "Profile Details",
      "noName": "No name provided",
      "noMobile": "No mobile number",
      "noEmail": "No email provided",
      "upcoming": "Upcoming",
      "completed": "Completed",
      "filters": {
        "lastWeek": "Last Week",
        "lastMonth": "Last Month",
        "last3Months": "Last 3 Months",
        "last6Months": "Last 6 Months"
      },
      "changeEmail": "Change Email",
      "emailPlaceholder": "Enter your email",
      "areYouSure": "Are you sure?",
      "cancel": "Cancel",
      "logout": "Logout",
      "changeName": "Change Name",
      "namePlaceholder": "Enter your name",
      "changeLastName": "Change Last Name",
      "lastNamePlaceholder": "Enter your last name",
      "saving": "Saving...",
      "save": "Save",
      "validationError": "Please fill in all required fields",
      "profileUpdateSuccess": "Profile updated successfully",
      "profileUpdateError": "Failed to update profile"
    },
        navbar2: {

          "travelServices": "Travel Services",
          "busTicket": "Bus Ticket",
          "TaxiTicket": "Taxi Ticket",
          "VanTicket": "Van Ticket",
          "Cargo": "Cargo"

        },
        "terms": {
          "title": "Terms and Conditions",
          "introduction": "These Terms and Conditions govern your use of the passenger transportation service system. Please read the following terms carefully before using the system. Using the system means full acceptance of these terms.",
          "registration": {
            "title": "User Registration and Information",
            "1_1": "Users must enter their complete and accurate identity information during registration. Users are responsible for the accuracy of the entered information.",
            "1_2": "Any use of another person's information or documents without legal permission is prohibited and considered a violation."
          },
          "booking": {
            "title": "Ticket Reservation and Purchase",
            "2_1": "Ticket reservation and purchase is only possible through the company's official system and authorized representatives.",
            "2_2": "Trip changes or cancellations are subject to the company's cancellation policy as stated in the 'Refund Policy' section of the system.",
            "2_3": "Ticket prices vary based on vehicle type, route, date, and capacity, and are determined according to company regulations."
          },
          "responsibilities": {
            "title": "User (Passenger) Responsibilities",
            "3_1": "Passengers must arrive at the departure point at the scheduled time; otherwise, the company will not be responsible for delays or trip cancellations.",
            "3_2": "Carrying any prohibited, dangerous, or illegal items is forbidden, and passengers will be solely responsible for any violations.",
            "3_3": "Maintaining order, social etiquette, personal hygiene, and respect for other passengers and drivers during the trip is mandatory."
          },
          "acceptance": "Entering the system and using its services means the user has read, understood, and accepted all the above terms.",
          "images": {
            "about": "About Us",
            "story": "Our Story",
            "mission": "Our Mission"
          }
        },
        cancelpage: {
          paymentResult: 'Payment Result',
          paymentFailed: 'Payment Failed',
          paymentFailedMessage: 'Unfortunately, your payment encountered a problem.',
          homePage: 'Home Page'
        },
        success: {
          paymentResult: 'Payment Result',
          paymentSuccess: 'Payment Successful!',
          orderRegistered: 'Your order has been successfully registered.',
          trackingCode: 'Tracking Code'
        },
        "fareBreakdown": {
          "ticketPrice": "Ticket Price",
          "ticketCounts": "Ticket Counts",
          "endPrice": "End Price",
          "rial": "Rial"
        },
           "ticket": {
    "passengers": "Passengers",
    "seatNumber": "Seat No.",
    "reservationNumber": "Reservation No.",
     "noTickets": 'No bus tickets found',
    "ticketNumber": "Ticket No.",
    "unknownCompany": "Unknown Company",
    "unknownCarType": "Unknown Type",
    "unknownCity": "Unknown City",
    "noPassengers": "No passengers",
    "downloadPdf": "Download PDF",
    "sendEmail": "Send to Email",
     "Tickets":"Ticket List",
    "status": {
      "reserved": "Reserved",
      "cancelled": "Cancelled",
      "completed": "Completed",
      "unknown": "Unknown",
      
    }
  },
  "common": {
    "currency": "Toman",
    "backToList": "Back to list"
  },
   "terms1": {
    "accept": "I accept the terms and conditions",
    "title": "Terms and Conditions",
  "content": "Passenger information must be accurate and match identification documents.\nThe buyer is responsible for any errors in the entered information.\nIn case of cancellation, the refund will be issued according to the transportation company's policy.\nPurchased tickets are non-transferable to others.\nPlease arrive at the location at least 30 minutes before departure.\nA valid ID card is mandatory at the time of travel.\nIf your travel plans change, please contact customer support.\nTransporting pets is prohibited."
  },
  "validation1": {
    "termsRequired": "You must accept the terms and conditions"
  },
   "buttons1": {
    "more": "More",
    "payment": "Payment",
    "close": "Close",
    "view": "View",
    "bookNow": "Book Now",
    "confirm": "Confirm",
    "cancel": "Cancel",
    "back": "Back",
    "next": "Next",
    "search": "Search",
    "select": "Select",
    "continue": "Continue",
    "submit": "Submit"
  },
  notfound:{
     title: 'Coming Soon',
      description: 'Please wait for this page to be launched',
      button: 'Go to home'
  }
       





      }
    },
    fa: {
      translation: {
        homepage:{
  "home": {
    "title": "پرتو سیر | صفحه اصلی",
    "booking": {
      "oneWay": "یک طرفه",
      "roundTrip": "دو طرفه",
      "origin": "مبدا (شهر)",
      "destination": "مقصد (شهر)",
      "departureDate": "تاریخ ",
      "returnDate": "تاریخ برگشت",
      "passengers": "مسافر",
      "search": "جستجو",
      "adult": "مسافر",
      "adultDesc": "(۱۲ سال به بالا)",
      "child": "کودک",
      "childDesc": "(۲ تا ۱۲ سال)",
      "infant": "نوزاد",
      "infantDesc": "(۱۰ روز تا ۲ سال)",
      "increase": "تعداد را افزایش دهید",
      "decrease": "تعداد را کاهش دهید",
      "loading":'بارگزاری'
      
    },


    "services": {
      "bus": "اتوبوس",
      "taxi": "تاکسی",
      "van": "ون",
      "cargo": "باربری"
    },
    "news": "اخبار",
    "popularRoutes": "مسیر های پرمخاطب",
    "from": "مبدا",
    "to": "مقصد",
    "startingPrice": "شروع قیمت از",
    "phoneBooking": "خرید تلفنی",
    "travelLimit": "سفر، تنها محدود به آرزوهای توست!",
    "moreInfo": " اطلاعات بیشتر",
    "downloadApp": "برنامه پرتو سیر رو دانلود کن",
    "travelEasier": "سفرت رو راحت‌تر کن",
    "downloadAndroid": "دانلود نسخه اندروید",
    "downloadIOS": "دانلود اپل",
    "directDownload": "دانلود مستقیم",
    "webApp": "وب اپلیکیشن",
    "scanDownload": "اسکن کنید و دانلود کنید!",
    "faq": "پرسش های متداول",
    "highlights": {
      "anywhere": "هرجا که بخوای، با هر بودجه‌ای",
      "anywhereDesc": "رزرو آنلاین انواع بلیط اتوبوس، تاکسی و ون",
      "alwaysAvailable": "هر لحظه در دسترس، همیشه همراه",
      "alwaysAvailableDesc": "فقط یه کلیک تا مقصدت فاصله داری",
      "worryFree": "از درِ خونه تا مقصد، بی‌دغدغه",
      "worryFreeDesc": "آسایش شما، هدف ماست"
    },
    "readyToTravel": "چمدونت برای سفر آمادست؟",
    "readyToTravelDesc": "چمدونت آماده‌ست، بلیتت چی؟ با رزرو آنلاین، از بهترین قیمت‌ها و صندلی‌ها بهره‌مند شو. علاوه بر این، می‌تونی با خیال راحت، جزئیات سفرت رو مدیریت کنی.",
    "onlineOrder": "سفارش آنلاین"
  },
  
  "cities": {
    "tehran": "تهران",
    "ahvaz": "اهواز",
    "shiraz": "شیراز",
    "mashhad": "مشهد",
    "bandar": "بندر عباس",
    "esfehan": "اصفهان",
    "tabriz": "تبریز",
    "kish": "جزیره کیش"
  }
},
newprofile:{
    "validateAuth": {
      "signInRequired": "ورود الزامی است",
      "verifyCode": "تایید کد",
      "pleaseSignIn": "لطفا برای ادامه وارد شوید",
      "signInMessage": "برای دسترسی به این صفحه نیاز به ورود دارید.",
      "phoneNumber": "شماره تلفن",
      "phonePlaceholder": "شماره تلفن خود را وارد کنید",
      "termsText": "با ادامه، شما با",
      "termsLink": "شرایط و ضوابط",
      "sendCode": "ارسال کد تایید",
      "continueBrowsing": "ادامه مرور",
      "enterCode": "وارد کردن کد تایید",
      "codeSentTo": "کد تایید به شماره",
      "verificationCode": "کد تایید",
      "codePlaceholder": "کد ۶ رقمی را وارد کنید",
      "resendCode": "ارسال مجدد کد",
      "resendCountdown": "ارسال مجدد در {{count}} ثانیه",
      "verifySignIn": "تایید و ورود",
      "back": "بازگشت",
      "sending": "در حال ارسال...",
      "verifying": "در حال تایید...",
      "enterPhoneAlert": "لطفا شماره تلفن خود را وارد کنید",
      "sendCodeError": "ارسال کد تایید ناموفق بود. لطفا مجددا تلاش کنید.",
      "enterCodeAlert": "لطفا کد تایید را وارد کنید",
      "invalidCodeError": "کد تایید نامعتبر است. لطفا مجددا تلاش کنید.",
      "resendError": "ارسال مجدد کد ناموفق بود. لطفا مجددا تلاش کنید."
    },
      "mapList": {
        "title": "شعب ما",
        "subtitle": "شعب ما را در سراسر کشور پیدا کنید",
        "branch": "شعبه",
        "address": "آدرس",
        "phone": "تلفن",
        "manager": "مدیر",
        "mapUnavailable": "نقشه در دسترس نیست",
        "viewOnNeshan": "مشاهده در نقشه نشان",
        "status": {
          "active": "فعال"
        },
        "group1": "شعب شرقی",
        "group2": "شعب مرکزی",
        "group3": "شعب غربی",
        "group4": "شعب شمالی",
        "info": {
          "title": "اطلاعات مهم",
          "description": "تمامی شعب ما مجهز به امکانات مدرن و پرسنل حرفه‌ای برای خدمت‌رسانی بهتر به شما هستند."
        },
        "services": {
          "title": "خدمات ما",
          "description": "ما خدمات حمل و نقل مختلفی ارائه می‌دهیم از جمله:",
          "bus": "حمل و نقل اتوبوسی",
          "taxi": "سرویس تاکسی",
          "van": "سرویس ون",
          "cargo": "حمل بار",
          "map": "پوشش سراسری"
        },
        "branches": {
          "Taybad": "تایباد",
          "Zabol": "زابل",
          "Qom": "قم",
          "Sari": "ساری",
          "Ilam": "ایلام",
          "Ahvaz": "اهواز",
          "Mashhad": "مشهد",
          "Chabahar": "چابهار"
        },
        "addresses": {
          "Taybad": "جاده اصلی تایباد، کنار پمپ بنزین",
          "Zabol": "مرکز شهر زابل، منطقه تجاری",
          "Qom": "قم، جاده جمکران",
          "Sari": "ساری، مازندران",
          "Ilam": "مرکز شهر ایلام",
          "Ahvaz": "اهواز، خوزستان",
          "Mashhad": "مشهد، خراسان رضوی",
          "Chabahar": "بندر چابهار، سیستان و بلوچستان"
        },
        "managers": {
          "Taybad": "محمد رضا",
          "Zabol": "علی حسینی",
          "Qom": "سعید محمدی",
          "Sari": "حسن کریمی",
          "Ilam": "رضا احمدی",
          "Ahvaz": "محمود نوری",
          "Mashhad": "امیر حسینی",
          "Chabahar": "کریم بلوچی"
        }
      },
   
   
   
  

  "profile": {
    "title": "پرتو سیر | پروفایل",
    "pageTitle": "پروفایل کاربری",
    "userMenu": "منو کاربری",
    "verified": "تایید شده",
    "accountBalance": "موجودی حساب",
    "increaseBalance": "افزایش موجودی",
    "currency": "ریال",
    "sidebar": {
      "account": "حساب کاربری",
      "myTrips": "سفر های من",
      "passengers": "لیست های مسافران",
      "wishlist": "علاقه مندی ها",
      "support": "درخواست پشتیبانی",
      "balance": "موجودی و اعتبار من"
    },
    "sections": {
      "accountInfo": "اطلاعات حساب کاربری",
      "personalInfo": "اطلاعات شخصی",
      "bankInfo": "اطلاعات حساب بانکی"
    },
    "fields": {
      "mobile": "شماره موبایل",
      "email": "ایمیل",
      "password": "کلمه عبور",
      "fullName": "نام و نام خانوادگی",
      "nationalId": "کد ملی",
      "emergencyContact": "شماره تماس ضروری",
      "birthDate": "تاریخ تولد",
      "sheba": "شماره شبا",
      "accountNumber": "شماره حساب",
      "cardNumber": "شماره کارت"
    },
    "actions": {
      "edit": "ویرایش",
      "save": "ثبت",
      "close": "بستن",
      "editPassword": "ویرایش کلمه عبور",
      "editInfo": "ویرایش اطلاعات"
    },
    "modals": {
      "editPhone": {
        "title": "ویرایش شماره موبایل",
        "description": "برای ویرایش، شماره موبایل جدید خود را وارد کنید."
      },
      "editEmail": {
        "title": "ویرایش آدرس ایمیل",
        "description": "برای ویرایش، آدرس ایمیل جدید خود را وارد کنید."
      },
      "editPassword": {
        "title": "تغییر کلمه عبور",
        "description": "رمز عبور فعلی و رمز عبور جدید خود را وارد نمایید.",
        "currentPassword": "رمز عبور فعلی",
        "newPassword": "رمز عبور جدید",
        "confirmPassword": "تکرار رمز عبور جدید",
        "passwordHint": "رمز عبور باید بیشتر از ۶ رقم باشد."
      },
      "editPersonal": {
        "title": "ویرایش اطلاعات شخصی",
        "firstName": "نام",
        "lastName": "نام خانوادگی",
        "birthDate": "تاریخ تولد",
        "gender": "جنسیت",
        "selectGender": "جنسیت خود را انتخاب کنید",
        "male": "مرد",
        "female": "زن",
        "nationalId": "کد ملی",
        "emergencyNumber": "شماره تماس ضروری"
      },
      "editBank": {
        "title": "ویرایش اطلاعات حساب بانکی",
        "description": "اطلاعات حساب بانکی به منظور بازگشت وجه پس از استرداد دریافت می‌شود.",
        "sheba": "شماره شبا",
        "accountNumber": "شماره حساب",
        "cardNumber": "شماره کارت"
      }
    },
    "notSet": "—"
  },
  "wishlist": {
    "title": "پرتو سیر | علاقه‌مندی‌ها",
    "pageTitle": "علاقه‌مندی‌ها",
    "emptyTitle": "لیست علاقه‌مندی‌ها خالی است",
    "emptyMessage": "هیچ موردی در لیست علاقه‌مندی‌های شما وجود ندارد.",
    "emptyDescription": "می‌توانید مسیرها و مقاصد مورد علاقه خود را به این لیست اضافه کنید.",
    "addToWishlist": "افزودن به علاقه‌مندی‌ها",
    "removeFromWishlist": "حذف از علاقه‌مندی‌ها",
    "itemsCount": "تعداد موارد",
    "clearAll": "پاک کردن همه",
    "suggestions": "پیشنهادها برای شما",
    "viewDetails": "مشاهده جزئیات",
    "bookNow": "رزرو کنید",
    "categories": {
      "popularRoutes": "مسیرهای پرطرفدار",
      "recentSearches": "جستجوهای اخیر",
      "savedDestinations": "مقاصد ذخیره شده"
    }
  },
  "transactions": {
    "accountBalance": "موجودی حساب",
    "increaseBalance": "افزایش موجودی",
    "withdrawBalance": "برداشت موجودی",
    "historyTitle": "تاریخچه تراکنش‌ها و درخواست‌ها",
    "dateTime": "تاریخ و ساعت",
    "amount": "مبلغ (تومان)",
    "type": "نوع تراکنش",
    "description": "توضیحات",
    "emptyTitle": "تراکنشی یافت نشد",
    "emptyMessage": "هنوز هیچ تراکنشی در حساب شما ثبت نشده است.",
    "amountPlaceholder": "مبلغ مورد نظر (تومان)",
    "cashInInfo": "مبلغ مورد نظر برای افزایش موجودی را وارد کنید"
  },
  "support": {
    "pageTitle": "درخواست‌های پشتیبانی",
    "ticketsCount": "تعداد درخواست‌ها",
    "newTicket": "ایجاد درخواست جدید",
    "emptyTitle": "صندوق درخواست‌های پشتیبانی شما خالی است",
    "emptyMessage": "اگر سوال یا مشکلی دارید می توانید با ایجاد درخواست پشتیبانی در سریعترین زمان ممکن آن را پیگیری کنید",
    "emptyDescription": "تیم پشتیبانی پرتو سیر آماده پاسخگویی به سوالات شماست",
    "ticketWarning": "لطفا تا زمان به نتیجه‌رسیدن درخواست فعلی، درخواست جدیدی در همان زمینه ثبت نکنید",
    "ticketType": "نوع درخواست",
    "selectType": "انتخاب کنید",
    "orderNumber": "شماره سفارش",
    "orderNumberPlaceholder": "شماره سفارش مربوطه را وارد کنید",
    "subject": "موضوع",
    "subjectPlaceholder": "موضوع درخواست خود را وارد کنید",
    "description": "توضیحات",
    "descriptionPlaceholder": "شرح کامل مشکل یا سوال خود را بنویسید",
    "viewDetails": "مشاهده جزئیات",
    "followUp": "پیگیری",
    "createdAt": "تاریخ ایجاد",
    "lastUpdate": "آخرین بروزرسانی",
    "conversation": "مکاتبات",
    "you": "شما",
    "supportTeam": "پشتیبانی پرتو سیر",
    "replyPlaceholder": "پاسخ خود را بنویسید",
    "typeYourMessage": "پیام خود را تایپ کنید...",
    "sendReply": "ارسال پاسخ",
    "status": {
      "open": "باز",
      "pending": "در حال بررسی",
      "resolved": "حل شده",
      "closed": "بسته شده"
    }
  },
  "passengers": {
    "pageTitle": "لیست های مسافران",
    "passengersCount": "تعداد مسافران",
    "addNewPassenger": "افزودن مسافر جدید",
    "editPassenger": "ویرایش اطلاعات مسافر",
    "fullName": "نام و نام خانوادگی",
    "gender": "جنسیت",
    "nationalId": "کدملی",
    "birthDate": "تاریخ تولد",
    "passportNumber": "شماره پاسپورت",
    "emptyTitle": "لیست مسافران خالی است",
    "emptyMessage": "هنوز هیچ مسافری به لیست خود اضافه نکرده‌اید",
    "addFirstPassenger": "افزودن اولین مسافر",
    "delete": "حذف",
    "edit": "ویرایش",
    "firstNameFarsi": "نام فارسی",
    "firstNameFarsiPlaceholder": "نام فارسی را وارد کنید",
    "lastNameFarsi": "نام خانوادگی فارسی",
    "lastNameFarsiPlaceholder": "نام خانوادگی فارسی را وارد کنید",
    "firstNameEnglish": "نام لاتین",
    "firstNameEnglishPlaceholder": "نام لاتین را وارد کنید",
    "lastNameEnglish": "نام خانوادگی لاتین",
    "lastNameEnglishPlaceholder": "نام خانوادگی لاتین را وارد کنید",
    "day": "روز",
    "month": "ماه",
    "year": "سال",
    "selectGender": "جنسیت خود را انتخاب کنید",
    "male": "مرد",
    "female": "زن",
    "nationalIdInfo": "برای مسافرین ایرانی که قصد سفر به نقاط مختلف داخل کشور را دارند، ارائه کد ملی الزامی است.",
    "passportNumberPlaceholder": "در صورت داشتن پاسپورت وارد کنید"
  },
  "common": {
    "cancel": "بستن",
    "submit": "ثبت",
    "update": "بروزرسانی",
    "actions": "عملیات",
     "clear": "پاک کردن",
    "search": "جستجو",
     "back": "بازگشت",
      "currency": "ریال",
    "close": "بستن",
    "confirmAndContinue": "تایید و ادامه خرید",
    "learnMore": "اطلاعات بیشتر",
    "download": "دانلود",
    "menu": "منو",
    "profile": "پروفایل",
    "login": "ورود",
    "signup": "ثبت‌نام",
    "readMore": "مطالعه بیشتر",
    "phone": "تلفن",
    "address": "آدرس","home":'خانه'
  },
  "orders": {
    "pageTitle": "سفر های من",
    "filterTitle": "جستجو در سفرها",
    "orderNumber": "شماره سفارش",
    "orderNumberPlaceholder": "شماره سفارش را وارد کنید",
    "orderType": "نوع سفارش",
    "selectOrderType": "انتخاب کنید",
    "fromDate": "از",
    "toDate": "تا",
    
    "paidAmount": "مبلغ پرداخت شده",
    "route": "مسیر",
    "dateTime": "تاریخ و ساعت",
    "orderDetails": "جزییات سفارش و استرداد",
    "emptyTitle": "سفری یافت نشد",
    "emptyMessage": "هنوز هیچ سفری ثبت نکرده‌اید",
    "status": {
      "finalized": "نهایی شده",
      "pending": "در انتظار",
      "cancelled": "لغو شده",
      "refunded": "عودت داده شده"
    },
    "title": "جزئیات سفارش",
    "tripInfo": "اطلاعات سفر",
    "origin": "مبدا",
    "destination": "مقصد",
    "company": "شرکت",
    "vehicleType": "نوع وسیله نقلیه",
    "departureDate": "تاریخ حرکت",
    "departureTime": "ساعت حرکت",
    "priceSummary": "خلاصه قیمت",
    "pricePerTicket": "قیمت هر بلیط",
    "passengerCount": "تعداد مسافر",
    "passengerUnit": "نفر",
    "seatsLeft": "صندلی‌های باقی‌مانده",
    "seatUnit": "صندلی",
    "totalAmount": "مبلغ کل",
    "finalAmount": "مبلغ نهایی",
    "selectSeat": "انتخاب صندلی",
    "selectSeatDescription": "برای انتخاب روی صندلی‌های آزاد کلیک کنید. می‌توانید چندین صندلی انتخاب کنید.",
    "frontOfBus": "جلو اتوبوس",
    "aisle": "راهرو",
    "selectedSeats": "صندلی‌های انتخاب شده",
    "noSeatSelected": "هیچ صندلی انتخاب نشده",
    "passengerInfo": "اطلاعات مسافران",
    "passengers" : "مسافران",
    "passengerNumber": "مسافر {{number}}",
    "seat": "صندلی",
    "confirmAndPay": "تأیید و پرداخت",
    "submitting": "در حال ارسال...",
    "back": "بازگشت",
    "backToSearch": "بازگشت به جستجو",
    "backToHome": "بازگشت به صفحه اصلی",
    "termsText": "من مطالعه کرده‌ام و با ",
    "termsLink": "قوانین و مقررات",
    "privacyLink": "سیاست حفظ حریم خصوصی",
    "and": "و",
    "termsSuffix": " موافقم.",
    "noSeatInfo": "اطلاعات صندلی موجود نیست",
    "maxSeatsError": "می‌توانید حداکثر {{maxSeats}} صندلی انتخاب کنید",
    "seatNotAvailable": "این صندلی در دسترس نیست",
    "userNotFound": "اطلاعات کاربر یافت نشد. لطفاً ابتدا وارد شوید.",
    "busInfoError": "خطا در بارگذاری اطلاعات اتوبوس",
    "noBusSelected": "هیچ اتوبوسی انتخاب نشده است. لطفاً ابتدا یک اتوبوس انتخاب کنید.",
    "busOrUserNotFound": "اطلاعات اتوبوس یا کاربر یافت نشد",
    "busDetailsError": "خطا در بارگذاری جزئیات اتوبوس",
    "incompleteInfo": "اطلاعات ناقص",
    "reserveError": "خطا در رزرو",
    "reserveSuccess": "رزرو با موفقیت انجام شد!",
    "noPassengers": "لطفاً مسافران را اضافه کنید",
    "invalidPassengerData": "لطفاً تمام اطلاعات مسافران را تکمیل کنید",
    "paymentConfirmation": "تأیید پرداخت",
    "paymentConfirmationDescription": "آیا مطمئن هستید که می‌خواهید پرداخت را ادامه دهید؟",
    "paymentSummary": "خلاصه پرداخت",
    "processing": "در حال پردازش",
    "confirmPayment": "تأیید پرداخت",
    "paymentProcessing": "در حال پردازش پرداخت",
    "paymentSuccess": "پرداخت با موفقیت انجام شد"
  },
"seat": {
      "available": "آزاد",
      "selected": "انتخاب شده",
      "reserved": "رزرو شده",
      "blocked": "مسدود",
      "unknown": "نامشخص",
      "maleReserved": "رزرو شده (مرد)",
      "femaleReserved": "رزرو شده (زن)"
    },
    "form": {
      "firstName": "نام",
      "lastName": "نام خانوادگی",
      "nationalId": "کد ملی",
      "mobile": "شماره موبایل",
      "birthDate": "تاریخ تولد",
      "gender": "جنسیت",
      "select": "انتخاب کنید",
      "male": "مرد",
      "female": "زن"
    },
    "validation": {
      "firstNameRequired": "نام الزامی است",
      "firstNameMinLength": "نام باید حداقل ۲ کاراکتر باشد",
      "lastNameRequired": "نام خانوادگی الزامی است",
      "lastNameMinLength": "نام خانوادگی باید حداقل ۲ کاراکتر باشد",
      "genderRequired": "جنسیت الزامی است",
      "nationalIdRequired": "کد ملی الزامی است",
      "nationalIdInvalid": "کد ملی معتبر نیست",
      "mobileRequired": "شماره موبایل الزامی است",
      "mobileInvalid": "شماره موبایل معتبر نیست",
      "birthDateRequired": "تاریخ تولد الزامی است",
      "seatNumberRequired": "شماره صندلی الزامی است",
      "minPassengers": "حداقل یک مسافر الزامی است",
      "termsRequired": "پذیرش قوانین الزامی است"
    },
   
    "steps": {
      "selectFlight": "انتخاب پرواز",
      "passengerDetails": "اطلاعات مسافر",
      "confirmInfo": "تأیید اطلاعات",
      "payment": "پرداخت",
      "ticketIssuance": "صدور بلیط"
    },

    // "confirmation": {
    //   "title": "تأیید سفارش",
    //   "noBookingData": "اطلاعات سفارش یافت نشد. لطفاً مجدداً از ابتدا شروع کنید.",
    //   "noPassengers": "اطلاعات مسافر یافت نشد",
    //   "ticketInfo": {
    //     "title": "اطلاعات بلیط",
    //     "origin": "مبدا",
    //     "destination": "مقصد",
    //     "originLabel": "مبدا",
    //     "destinationLabel": "مقصد",
    //     "airlineLabel": "شرکت حمل‌ونقل",
    //     "airline": "شرکت",
    //     "dateTimeLabel": "تاریخ و ساعت حرکت",
    //     "dateTime": "تاریخ و ساعت",
    //     "flightNumberLabel": "شماره پرواز",
    //     "flightNumber": "شماره",
    //     "flightClassLabel": "کلاس پرواز",
    //     "flightClass": "کلاس",
    //     "baggageAllowanceLabel": "مجوز بار",
    //     "baggageAllowance": "بار مجاز",
    //     "selectedSeats": "صندلی‌های انتخاب شده"
    //   },
    //   "passengers": {
    //     "title": "اطلاعات مسافران",
    //     "ageGroup": "گروه سنی",
    //     "fullName": "نام و نام خانوادگی",
    //     "gender": "جنسیت",
    //     "nationalId": "کد ملی",
    //     "birthDate": "تاریخ تولد",
    //     "nationality": "ملیت",
    //     "seatNumber": "شماره صندلی",
    //     "seat": "صندلی",
    //     "adult": "بزرگسال",
    //     "child": "کودک",
    //     "infant": "نوزاد",
    //     "male": "مرد",
    //     "female": "زن",
    //     "iranian": "ایرانی"
    //   },
    //   "notification": {
    //     "title": "اطلاعات سفر",
    //     "description": "اطلاعات بلیط و جزئیات سفر به شماره موبایل و ایمیل شما ارسال خواهد شد. لطفاً از صحت اطلاعات تماس اطمینان حاصل کنید.",
    //     "email": "ایمیل",
    //     "phone": "تلفن",
    //     "noEmail": "ایمیل وارد نشده است"
    //   },
    //   "discount": {
    //     "title": "تخفیف",
    //     "clickToEnter": "برای وارد کردن کد تخفیف کلیک کنید",
    //     "instructions": "در صورت داشتن کد تخفیف، آن را در قسمت زیر وارد کنید.",
    //     "placeholder": "کد تخفیف را وارد کنید",
    //     "apply": "اعمال",
    //     "appliedSuccess": "تخفیف با موفقیت اعمال شد",
    //     "applied": "تخفیف اعمال شده است"
    //   },
    //   "contactInfo": {
    //     "phone": "شماره تلفن"
    //   },
    //   // "noPassengers": "مسافری یافت نشد"
    // },



  "orderDetails": {
    "orderNumber": "شماره سفارش",
    "serviceType": "نوع سفر",
    "purchaseTime": "زمان خرید",
    "status": {
      "finalized": "نهایی شده",
      "pending": "در انتظار",
      "cancelled": "لغو شده"
    },
    "tickets": "بلیط ها",
    "downloadTicket": "دانلود بلیط",
    "departureTime": "زمان حرکت",
    "start": "شروع",
    "end": "پایان",
    "trainInfo": "اطلاعات قطار",
    "hallName": "نام سالن",
    "trainNumber": "شماره قطار",
    "trainType": "نوع قطار",
    "passengers": "مسافران",
    "seat": "صندلی",
    "cabin": "کوپه",
    "nationalId": "کد ملی",
    "paidAmount": "مبلغ پرداخت شده"
  },
  "order": {
    "steps": {
      "selectFlight": "انتخاب بلیط",
      "passengerDetails": "مشخصات مسافران",
      "travelServices": "خدمات سفر",
      "confirmInfo": "تایید اطلاعات",
      "payment": "پرداخت",
      "ticketIssuance": "صدور بلیط"
    },
    "flight": {
      "company": "تابان",
      "type": "سیستمی",
      "class": "اکونومی",
      "aircraft": "Boeing MD-۸۰",
      "from": "تهران",
      "to": "مشهد",
      "departureTime": "۲۲:۳۰",
      "arrivalTime": "۲۳:۴۵",
      "date": "دوشنبه ، ۱۵ مرداد",
      "direction": "بلیط رفت",
      "changeTicket": "تغییر بلیط"
    },
    "pricing": {
      "adult": "بزرگسال",
      "total": "مجموع"
    },
    "passengerDetails": {
      "title": "مشخصات مسافران",
      "adult": "بزرگسال",
      "nationalId": "کارت ملی",
      "passport": "پاسپورت",
      "selectPreviousPassenger": "انتخاب مسافر سابق",
      "firstName": "نام",
      "lastName": "نام خانوادگی",
      "gender": "جنسیت",
      "selectGender": "جنسیت خود را انتخاب کنید",
      "male": "مرد",
      "female": "زن",
      "nationalIdNumber": "کد ملی",
      "birthDate": "تاریخ تولد",
      "day": "روز",
      "month": "ماه",
      "year": "سال",
      "addNewPassenger": "اضافه کردن مسافر جدید"
    },
    "previousPassengers": {
      "title": "لیست مسافران سابق",
      "fullName": "نام و نام خانوادگی",
      "nationalId": "کدملی",
      "birthDate": "تاریخ تولد",
      "select": "انتخاب",
      "sampleName": "علی محمدی",
      "sampleNationalId": "۰۱۲۳۴۵۶۷۸۹",
      "sampleBirthDate": "۱۳۰۰/۰۱/۰۱"
    },
    "footer": {
      "agreement": "با کلیک روی تایید و ادامه خرید با {{siteRules}} و {{flightRules}} موافقت کرده‌اید.",
      "siteRules": "قوانین سایت",
      "flightRules": "قوانین پرتوسیر",
      "confirmAndContinue": "تایید و ادامه خرید"
    }
  },
  // "order": {
  //   "steps": {
  //     "selectFlight": "انتخاب پرواز",
  //     "passengerDetails": "مشخصات مسافران",
  //     "travelServices": "خدمات سفر",
  //     "confirmInfo": "تایید اطلاعات",
  //     "payment": "پرداخت",
  //     "ticketIssuance": "صدور بلیط"
  //   }
  // },
  "ticketIssuance": {
    "title": "صدور بلیط",
    "successMessage": "بلیط شما با موفقیت صادر شد",
    "orderNumberLabel": "شماره سفارش",
    "sampleOrderNumber": "۱۲۳۴۵۶۸۹۰",
    "downloadTicket": "دانلود بلیط",
    "viewOrder": "مشاهده سفارش",
    "additionalInfo": "بلیط شما به ایمیلتان نیز ارسال شده است. در صورت نیاز به راهنمایی بیشتر با پشتیبانی تماس بگیرید.",
    "contactSupport": "تماس با پشتیبانی",
    "faq": "سوالات متداول",
    "nextSteps": {
      "title": "مراحل بعدی",
      "step1": {
        "title": "دانلود بلیط",
        "description": "بلیط خود را دانلود و چاپ کنید"
      },
      "step2": {
        "title": "ارسال به ایمیل",
        "description": "بلیط به ایمیل شما ارسال شده است"
      },
      "step3": {
        "title": "آماده سفر",
        "description": "با خیال راحت سفر کنید"
      }
    }
  },
  "refund": {
    "pageTitle": "مشخصات مسافران",
    "passengerCount": "۱ وسیله",
    "totalPrice": "۲،۱۰۰،۰۰۰",
    "terms": {
      "title": "شرایط و قوانین"
    },
    "normalRefund": {
      "title": "استرداد عادی",
      "price": "بدون هزینه",
      "description": "استرداد این بلیط مطابق قوانین شرکت از ۱۲ ساعت قبل از حرکت شامل حداقل ۲,۱۰۰,۰۰۰ تومان جریمه خواهد بود."
    },
    "noPenaltyRefund": {
      "title": "استرداد بدون جریمه",
      "price": "۴۲۰,۰۰۰",
      "description": "در صورت استرداد تا 12 ساعت قبل از حرکت، مبلغ بلیط بدون جریمه به شما برمی‌گردد."
    },
    "conditions": {
      "condition1": "جهت استفاده از این ضمانت، فقط کافیست درخواست استرداد خود را ثبت کنید. پس از بررسی مبلغ بلیط به صورت کامل برای شما واریز خواهد شد.",
      "condition2": "توجه نمایید که برای استفاده از ضمانت میبایست حداکثر تا 12 ساعت مانده به حرکت، درخواست استرداد خود را ثبت نمایید.",
      "condition3": "پس از استرداد، تنها مبلغ بلیط پرداخت می‌شود و هزینه پرداخت شده جهت ضمانت شامل بازپرداخت نمی‌شود.",
      "condition4": "در صورت کنسل شدن بلیط به علت تغییرات  مبلغ ضمانت به مسافر باز می‌گردد."
    }
  },
  "confirmation": {
    "title": "تأیید سفارش",
    "noBookingData": "اطلاعات سفارش یافت نشد. لطفاً مجدداً از ابتدا شروع کنید.",
    "noPassengers": "اطلاعات مسافر یافت نشد",
    "ticketInfo": {
      "title": "اطلاعات بلیط",
      "originLabel": "مبدا",
      "destinationLabel": "مقصد",
      "airlineLabel": "شرکت ",
      "dateTimeLabel": "تاریخ و ساعت حرکت",
      "flightNumberLabel": "شماره ",
      "flightClassLabel": "جزییات ",
      "baggageAllowanceLabel": "مقدار بار مجاز",
      "origin": "تهران",
      "destination": "مشهد",
      "airline": "تابان",
      "dateTime": "دوشنبه ۱۵ مرداد - ۲۲:۳۰",
      "flightNumber": "HH ۱۲۳۴",
      "flightClass": "اکونومی",
      "baggageAllowance": "20 کیلوگرم",
      "selectedSeats": "صندلی‌های انتخاب شده"
    },
    "passengers": {
      "title": "مشخصات مسافران",
      "ageGroup": "بازه سنی",
      "fullName": "نام و نام خانوادگی",
      "gender": "جنسیت",
      "nationalId": "کدملی",
      "seatNumber": "شماره صندلی",
      "birthDate": "تاریخ تولد",
      "nationality": "ملیت",
      "adult": "بزرگسال",
      "sampleName": "علی محمدی",
      "male": "مرد",
      "sampleNationalId": "۰۱۲۳۴۵۶۷۸۹",
      "sampleBirthDate": "۱۳۰۰/۰۱/۰۱",
      "iranian": "ایران",
      "seat": "صندلی",
      "child": "کودک",
      "infant": "نوزاد",
      "female": "زن",
    },
    "travelServices": {
      "title": "خدمات سفر",
      "normalRefund": "استرداد عادی",
      "refundWarning": "در صورت استرداد، بر اساس زمان اعلام کنسلی درصد جریمه مشخصی از کل مبلغ بلیط کسر خواهد شد."
    },
    "notification": {
      "title": "اطلاع رسانی سفر",
      "description": "اطلاعات بلیط و اطلاع‌رسانی بعدی به این ادرس ارسال می‌شود.",
      "email": "ایمیل",
      "phone": "شماره موبایل",
      "noEmail": "ایمیل وارد نشده است"
    },
    "contactInfo": {
      "email": "...",
      "phone": "..."
    },
    "discount": {
      "title": "کد تخفیف",
      "clickToEnter": "برای وارد کردن کد تخفیف کلیک کنید",
      "instructions": "کد تخفیف خود را در بخش زیر وارد کنید و دکمه ثبت را بزنید.",
      "placeholder": "کد تخفیف",
      "apply": "ثبت",
      "appliedSuccess": "کد تخفیف با موفقیت اعمال شد",
      "applied": "تخفیف اعمال شده است"
    },
    "payment": {
      "payableAmount": "مبلغ قابل پرداخت",
      "totalPrice": "۲،۱۰۰،۰۰۰"
    }
  },
  "contact": {
    "title": "تماس با ما",
    "about": {
      "title": "در ارتباط با ما",
      "description": "برای هرگونه سوال، پیشنهاد یا درخواست پشتیبانی، خوشحال می‌شویم که با ما تماس بگیرید. تیم پشتیبانی پرتو سیر به‌طور مداوم در تلاش است تا بهترین خدمات را به شما ارائه دهد و از نظرات و پیشنهادات شما استقبال می‌کند. لطفاً برای ارتباط با ما از طریق فرم زیر استفاده کنید یا به آدرس ایمیل و شماره تماس ارائه شده مراجعه نمایید. تیم ما در سریع‌ترین زمان ممکن پاسخگوی شما خواهد بود."
    },
    "form": {
      "fullName": "نام کامل مسافر *",
      "subject": "عنوان",
      "ticketNumber": "شماره بلیط",
      "message": "لطفا درخواست خود را به طور کامل شرح دهید. *",
      "requiredFields": "فیلدهایی که با * علامت‌گذاری شده‌اند، الزامی هستند و باید برای ارسال فرم پر شوند.",
      "submit": "ارسال"
    },
    "phone": {
      "title": "شماره تماس",
      "primary": "01133243056",
      "secondary": "09117976855"
    },
    "email": {
      "title": "ایمیل",
      "address": "mail@email.com"
    },
    "address": {
      "title": "آدرس دفتر مرکزی",
      "location": "مازندران، ساری، ترمینال دولت، پرتو سیر ایرانیان"
    },
    "gallery": {
      "title": "گالری تصاویر",
      "description": "نمایی از خدمات و فعالیت‌های پرتو سیر",
      "alt": "پرتو سیر"
    }
  },

  "branches": {
    "title": "ایستگاه های پرتو سیر",
    "subtitle": "پرتو سیر: همراه همیشگی سفرهای شما",
    "manager": "مدیر",
    "status": {
      "active": "فعال"
    },
    "stationGroups": {
      "group1": "ایستگاه‌های گروه اول",
      "group2": "ایستگاه‌های گروه دوم", 
      "group3": "ایستگاه‌های گروه سوم",
      "group4": "ایستگاه‌های گروه چهارم"
    },
    "stations": {
      "taybad": {
        "name": "تایباد",
        "address": "پایانه تایباد، غرفه ۱",
        "phone": "05432295153",
        "manager": "آقای رجب اکبری"
      },
      "zabol": {
        "name": "زابل", 
        "address": "زابل، میدان رستم، پایانه مسافربری غرفه ۱۳",
        "phone": "05154539432",
        "manager": "آقای بهروز یزدانی"
      },
      "ghom": {
        "name": "قم",
        "address": "پایانه قم، پایانه کوثر، جنب اتحادیه صنف",
        "phone": "02536644071", 
        "manager": "آقای نزار ابولسان"
      },
      "sari": {
        "name": "ساری",
        "address": "پایانه مسافربری دولت، بلوار دفاع مقدس",
        "phone": "01133407770",
        "manager": "آقای ناصر کلانتری"
      },
      "ilam": {
        "name": "ایلام",
        "address": "ایلام، بلوار شهدای چال سارا، پایانه مسافربری شهدای شهرداری ایلام",
        "phone": "",
        "manager": "آقای ماشاءالله رحمتی"
      },
      "ahvaz": {
        "name": "اهواز", 
        "address": "اهواز، پایانه سیاحت، طبقه دوم",
        "phone": "",
        "manager": "آقای حسین کلانتری"
      },
      "mashhad": {
        "name": "مشهد",
        "address": "مشهد، جنب پایانه امام رضا، نبش امام رضا ۶۹",
        "phone": "05138584915",
        "manager": "آقای ناصر کلانتری"
      },
      "chabahar": {
        "name": "چابهار",
        "address": "بخش مرکزی چابهار، پایانه مسافربری چابهار", 
        "phone": "09154540536",
        "manager": "خانم بهناز یزدانی"
      }
    },
    "info": {
      "title": "دسترسی آسان به خدمات پرتو سیر",
      "description": "شبکه گسترده ایستگاه‌های پرتو سیر در سراسر کشور این امکان را فراهم می‌کند تا مسافران عزیز بتوانند به راحتی از خدمات متنوع ما شامل بلیط اتوبوس، تاکسی، ون و باربری استفاده نمایند."
    },
    "services": {
      "title": "خدمات جامع مسافرتی",
      "description": "پرتو سیر با ارائه کامل‌ترین خدمات مسافرتی، همراه مطمئن سفرهای شما در سراسر کشور است.",
      "bus": "اتوبوس",
      "taxi": "تاکسی", 
      "van": "ون",
      "cargo": "باربری",
      "map": "نمای کلی ایستگاه‌ها"
    }
  },

  "van": {
    "serviceTabs": {
      "bus": "اتوبوس",
      "taxi": "تاکسی", 
      "van": "ون",
      "cargo": "باربری"
    },
    "booking": {
      "type": "نوع سفر",
      "oneWay": "یک طرفه",
      "roundTrip": "دو طرفه",
      "from": "مبدا (شهر)",
      "to": "مقصد (شهر)", 
      "departureDate": "تاریخ رفت",
      "returnDate": "تاریخ برگشت",
      "passengers": "مسافران",
      "adults": "بزرگسال (۱۲ سال به بالا)",
      "children": "کودک (۲ تا ۱۲ سال)", 
      "infants": "نوزاد (۱۰ روز تا ۲ سال)",
      "search": "جستجو",
      "person" : "مسافران",
      "loading":'باگزاری'
     

    },
    "cities": {
      "tehran": "تهران",
      "ahvaz": "اهواز",
      "shiraz": "شیراز",
      "mashhad": "مشهد",
      "bandar": "بندر عباس", 
      "esfehan": "اصفهان",
      "tabriz": "تبریز",
      "kish": "کیش"
    },
    "offers": {
      "title": "اخبار و پیشنهادات",
      "learnMore": "اطلاعات بیشتر",
      "persepolis": {
        "title": "تخت جمشید؛ میراث جهانی بشری",
        "description": "سفری تاریخی برای آشنایی از نزدیک این بنای تاریخی"
      },
      "shiraz": {
        "title": "شیراز؛ شهر عشق و دلدادگی", 
        "description": "به شهری سفر کنید که عطر بهارنارنج آن شما را به وجد می‌آورد"
      },
      "kashan": {
        "title": "کاشان؛ نگین کویر ایران",
        "description": "سفر به شهری که عطر گلاب آن شما را به وجد می‌آورد"
      },
      "esfehan": {
        "title": "اصفهان؛ موزه زنده ایران",
        "description": "سفر به شهری که تاریخ و فرهنگ ایران را در خود جای داده است"
      }
    },
    "popularRoutes": {
      "title": "مسیر های پرمخاطب",
      "from": "مبدا",
      "to": "مقصد",
      "startingFrom": "شروع قیمت از",
      "kishTehran": {
        "from": "جزیره کیش",
        "to": "تهران",
        "price": "۱،۵۷۴،۰۰۰"
      },
      "mashhadTehran": {
        "from": "مشهد", 
        "to": "تهران",
        "price": "۱،۶۳۷،۰۰۰"
      },
      "ahvazTehran": {
        "from": "اهواز",
        "to": "تهران", 
        "price": "۲،۳۵۱،۰۰۰"
      },
      "shirazTehran": {
        "from": "شیراز",
        "to": "تهران",
        "price": "۲،۶۷۰،۰۰۰"
      }
    },
    "phoneBooking": {
      "title": "خرید تلفنی",
      "subtitle": "سفر، تنها محدود به آرزوهای توست!",
      "learnMore": "اطلاعات بیشتر"
    },
    "faq": {
      "title": "پرسش های متداول",
      "childrenTicket": {
        "question": "آیا خرید بلیط ون برای کودکان و اطفال زیر ۲ سال الزامی است؟",
        "answer": "قیمت بلیط ون برای کودکان زیر دو سال، در صورتی که صندلی‌ به آن‌ها تعلق نگیرد رایگان است. اگر کودک به استفاده از صندلی نیاز داشته باشد، باید هزینه کامل بلیط را برایش پرداخت کنید تا صندلی متعلق به خودتان باشد."
      },
      "howToBook": {
        "question": "نحوه رزرو بلیط ون در پرتو سیر چگونه است؟",
        "answer": "برای خرید اینترنتی بلیط ون در وب‌سایت یا اپلیکیشن پرتو سیر (بخش بلیط ون) مبدا، مقصد، تاریخ حرکت و تعداد بلیط خود را انتخاب می‌کنید. سپس می‌توانید بلیط‌های موجود را در تاریخ مدنظرتان ببینید و با کارت بانکی و رمز دوم، بلیط دلخواهتان را بخرید."
      },
      "checkTicket": {
        "question": "استعلام بلیط ون پرتو سیر چگونه است؟",
        "answer": "برای استعلام بلیط ون، کافی است به وب‌سایت یا اپلیکیشن پرتو سیر بروید و بعد از مشخص‌کردن مبدا و مقصد، لیست کامل ون‌های شرکت‌های مختلف را ببینید."
      },
      "changeSeat": {
        "question": "آیا بعد از خرید بلیط ون امکان تعویض صندلی وجود دارد؟",
        "answer": "خیر. بعد از خرید بلیط ون، امکان تعویض صندلی وجود ندارد."
      },
      "editTicket": {
        "question": "آیا می‌توانم اطلاعات بلیط ون خریداری‌شده را ویرایش کنم؟",
        "answer": "خیر. بعد از خرید بلیط ون، امکان ویرایش اطلاعات آن وجود ندارد. درصورت نیاز، باید بلیط خود را استرداد کنید و بلیط جدیدی با اطلاعات جدید تهیه کنید."
      }
    },
    "services": {
      "comfort": {
        "title": "سفر راحت و ایمن",
        "description": "با ون‌های مدرن و راحت ما، سفری لذت‌بخش را تجربه کنید"
      },
      "accessibility": {
        "title": "دسترسی آسان",
        "description": "در هر زمان و مکانی می‌توانید بلیط ون خود را رزرو کنید"
      },
      "convenience": {
        "title": "راحتی و آسایش",
        "description": "از درب منزل تا مقصد، با خدمات کامل ما همراه باشید"
      }
    }
  },

  "flights": {
    "serviceTabs": {
      "bus": "اتوبوس",
      "taxi": "تاکسی", 
      "van": "ون",
      "cargo": "باربری"
    },
    "booking": {
      "type": "نوع سفر",
      "oneWay": "یک طرفه",
      "roundTrip": "دو طرفه",
      "from": "مبدا (شهر)",
      "to": "مقصد (شهر)", 
      "departureDate": "تاریخ رفت",
      "returnDate": "تاریخ برگشت",
      "passengers": "مسافران",
      "adults": "بزرگسال (۱۲ سال به بالا)",
      "children": "کودک (۲ تا ۱۲ سال)", 
      "infants": "نوزاد (۱۰ روز تا ۲ سال)",
      "search": "جستجو",
      "loading":'باگزاری'
    },
    "cities": {
      "tehran": "تهران",
      "ahvaz": "اهواز",
      "shiraz": "شیراز",
      "mashhad": "مشهد",
      "bandar": "بندر عباس", 
      "esfehan": "اصفهان",
      "tabriz": "تبریز",
      "kish": "کیش"
    },
    "offers": {
      "title": "اخبار و پیشنهادات",
      "learnMore": "اطلاعات بیشتر",
      "persepolis": {
        "title": "تخت جمشید؛ میراث جهانی بشری",
        "description": "سفری تاریخی برای آشنایی از نزدیک این بنای تاریخی"
      },
      "shiraz": {
        "title": "شیراز؛ شهر عشق و دلدادگی", 
        "description": "به شهری سفر کنید که عطر بهارنارنج آن شما را به وجد می‌آورد"
      },
      "kashan": {
        "title": "کاشان؛ نگین کویر ایران",
        "description": "سفر به شهری که عطر گلاب آن شما را به وجد می‌آورد"
      },
      "esfehan": {
        "title": "اصفهان؛ موزه زنده ایران",
        "description": "سفر به شهری که تاریخ و فرهنگ ایران را در خود جای داده است"
      }
    },
    "popularRoutes": {
      "title": "مسیر های پرمخاطب",
      "from": "مبدا",
      "to": "مقصد",
      "startingFrom": "شروع قیمت از",
      "kishTehran": {
        "from": "جزیره کیش",
        "to": "تهران",
        "price": "۱،۵۷۴،۰۰۰"
      },
      "mashhadTehran": {
        "from": "مشهد", 
        "to": "تهران",
        "price": "۱،۶۳۷،۰۰۰"
      },
      "ahvazTehran": {
        "from": "اهواز",
        "to": "تهران", 
        "price": "۲،۳۵۱،۰۰۰"
      },
      "shirazTehran": {
        "from": "شیراز",
        "to": "تهران",
        "price": "۲،۶۷۰،۰۰۰"
      }
    },
    "phoneBooking": {
      "title": "خرید تلفنی",
      "subtitle": "سفر، تنها محدود به آرزوهای توست!",
      "learnMore": "اطلاعات بیشتر"
    },
    "app": {
      "title": "برنامه پرتو سیر رو دانلود کن",
      "subtitle": "سفرت رو راحت‌تر کن",
      "description": "با اپلیکیشن پرتو سیر، بلیط، هتل و هرچیزی که برای سفر نیاز داری رو با چند تا لمس رزرو کن. از تخفیف‌های ویژه لذت ببر و سفرت رو هوشمندانه برنامه‌ریزی کن. همین حالا دانلود کن!",
      "android": "اندروید",
      "ios": "اپل",
      "direct": "مستقیم",
      "web": "وب اپ",
      "scan": "اسکن کنید و دانلود کنید!"
    },
    "faq": {
      "title": "پرسش های متداول",
      "childrenTicket": {
        "question": "آیا خرید بلیط برای کودکان و اطفال زیر ۲ سال الزامی است؟",
        "answer": "قیمت بلیط برای کودکان زیر دو سال، در صورتی که صندلی‌ به آن‌ها تعلق نگیرد رایگان است. اگر کودک به استفاده از صندلی نیاز داشته باشد، باید هزینه کامل بلیط را برایش پرداخت کنید تا صندلی متعلق به خودتان باشد."
      },
      "howToBook": {
        "question": "نحوه رزرو بلیط در پرتو سیر چگونه است؟",
        "answer": "برای خرید اینترنتی بلیط در وب‌سایت یا اپلیکیشن پرتو سیر مبدا، مقصد، تاریخ حرکت و تعداد بلیط خود را انتخاب می‌کنید. سپس می‌توانید بلیط‌های موجود را در تاریخ مدنظرتان ببینید و با کارت بانکی و رمز دوم، بلیط دلخواهتان را بخرید."
      },
      "checkTicket": {
        "question": "استعلام بلیط پرتو سیر چگونه است؟",
        "answer": "برای استعلام بلیط، کافی است به وب‌سایت یا اپلیکیشن پرتو سیر بروید و بعد از مشخص‌کردن مبدا و مقصد، لیست کامل وسایل نقلیه شرکت‌های مختلف را ببینید."
      },
      "changeSeat": {
        "question": "آیا بعد از خرید بلیط امکان تعویض صندلی وجود دارد؟",
        "answer": "خیر. بعد از خرید بلیط، امکان تعویض صندلی وجود ندارد."
      },
      "editTicket": {
        "question": "آیا می‌توانم اطلاعات بلیط خریداری‌شده را ویرایش کنم؟",
        "answer": "خیر. بعد از خرید بلیط، امکان ویرایش اطلاعات آن وجود ندارد. درصورت نیاز، باید بلیط خود را استرداد کنید و بلیط جدیدی با اطلاعات جدید تهیه کنید."
      }
    },
    "services": {
      "comfort": {
        "title": "سفر راحت و ایمن",
        "description": "با وسایل نقلیه مدرن و راحت ما، سفری لذت‌بخش را تجربه کنید"
      },
      "accessibility": {
        "title": "دسترسی آسان",
        "description": "در هر زمان و مکانی می‌توانید بلیط خود را رزرو کنید"
      },
      "convenience": {
        "title": "راحتی و آسایش",
        "description": "از درب منزل تا مقصد، با خدمات کامل ما همراه باشید"
      }
    },
    "cta": {
      "title": "چمدونت برای سفر آمادست؟",
      "description": "چمدونت آماده‌ست، بلیتت چی؟ با رزرو آنلاین، از بهترین قیمت‌ها و صندلی‌ها بهره‌مند شو. علاوه بر این، می‌تونی با خیال راحت، جزئیات سفرت رو مدیریت کنی.",
      "button": "سفارش آنلاین"
    }
  },

  "header": {
    "title": "پرتو سیر",
    "services": "خدمات سفر",
    "about": "درباره ما",
    "contact": "تماس با ما",
    "stations": "ایستگاه ها",
    "bookedTickets": "بلیط های رزرو شده",
    "userMenu": "منو کاربری",
      "bus": "اتوبوس",
      "taxi": "تاکسی",
      "van": "ون",
      "cargo": "باربری",
      "branches": "شعبه‌ها",
      "reservedTickets": "بلیط‌های رزرو شده",
      "toggleTheme": "تغییر تم",
      "signIn": "ورود / ثبت‌نام",
      "menu": "منو",
    
      "myTickets": "بلیط‌های من",
      "myOrders": "سفارش‌های من",
      
      "profile": "پروفایل",
      "logout": "خروج",
      "welcome": "خوش آمدید",
      "changeLanguage": "تغییر زبان",
      "selectLanguage": "انتخاب زبان",
    
  },
  "signin": {
    "title": "ورود | ثبت‌نام",
    "subtitle": "به پرتو سیر خوش آمدید",
    "description": "برای ورود یا ثبت‌نام شماره موبایل خود را وارد کنید",
    "phoneNumber": "شماره موبایل",
    "terms": "با ورود و یا ثبت نام در پرتو سیر",
    "termsLink": "شرایط و قوانین",
    "submit": "ارسال کد تایید",
    "passwordLogin": "ورود با رمز عبور"
  },
  "booking": {
    "oneWay": "یک طرفه",
    "roundTrip": "دو طرفه",
    "private": "دربست می‌خواهم",
    "shared": "دربست نمی‌خواهم",
    "normalPassengers": "مسافرین عادی",
    "brothers": "ویژه برادران",
    "sisters": "ویژه خواهران",
    "withCar": "حمل خودرو می‌خواهم",
    "withoutCar": "حمل خودرو نمی‌خواهم",
    "from": "مبدا (شهر)",
    "to": "مقصد (شهر)",
    "departureDate": "تاریخ رفت",
    "returnDate": "تاریخ برگشت",
    "passengers": "مسافر",
    "adults": "بزرگسال",
    "children": "کودک",
    "infants": "نوزاد",
    "type": "نوع سفر",
    "option": "نوع رزرو",
    "passengerType": "نوع مسافر",
    "carTransport": "حمل خودرو",
    "adultsDesc": "(۱۲ سال به بالا)",
    "childrenDesc": "(۲ تا ۱۲ سال)",
    "infantsDesc": "(۱۰ روز تا ۲ سال)"
  },
  "offers": {
    "title": "اخبار",
    "persepolis": {
      "title": "تخت جمشید؛ میراث جهانی بشری",
      "description": "سفری تاریخی برای آشنایی از نزدیک این بنای تاریخی"
    },
    "shiraz": {
      "title": "شیراز؛ شهر عشق و دلدادگی",
      "description": "به شهری سفر کنید که عطر بهارنارنج آن شما را به وجد می‌آورد"
    },
    "kashan": {
      "title": "کاشان؛ نگین کویر ایران",
      "description": "سفر به شهری که عطر گلاب آن شما را به وجد می‌آورد"
    },
    "esfehan": {
      "title": "اصفهان؛ موزه زنده ایران",
      "description": "سفر به شهری که تاریخ و فرهنگ ایران را در خود جای داده است"
    },
    "kerman": {
      "title": "کرمان؛ شهری با هزار و یک راز",
      "description": "سفر به شهری که تاریخ و فرهنگ ایران را در خود جای داده است"
    },
    "masuleh": {
      "title": "ماسوله؛ نگین گیلان",
      "description": "سفری به روستایی با معماری پلکانی و طبیعتی بکر و دست‌نخورده"
    },
    "mazandaran": {
      "title": "مازندران؛ سرزمین آبشارها و رودخانه‌ها",
      "description": "در دل طبیعت گشت و گذار کنید و از زیبایی‌های آن لذت ببرید"
    },
    "tabriz": {
      "title": "تبریز؛ شهری با تاریخ کهن",
      "description": "سفری به شهری با معماری بی‌نظیر و فرهنگی غنی"
    },
    "mashhad": {
      "title": "مقصدی برای هر فصل از سال",
      "description": "به مشهد سفر کنید و زیبایی‌های آن لذت ببرید"
    }
  },
  "popularRoutes": {
    "title": "مسیر های پرمخاطب",
    "from": "مبدا",
    "to": "مقصد",
    "startingFrom": "شروع قیمت از",
    "kishTehran": {
      "from": "جزیره کیش",
      "to": "تهران",
      "price": "۱،۵۷۴،۰۰۰"
    },
    "mashhadTehran": {
      "from": "مشهد",
      "to": "تهران",
      "price": "۱،۶۳۷،۰۰۰"
    },
    "ahvazTehran": {
      "from": "اهواز",
      "to": "تهران",
      "price": "۲،۳۵۱،۰۰۰"
    },
    "shirazTehran": {
      "from": "شیراز",
      "to": "تهران",
      "price": "۲،۶۷۰،۰۰۰"
    }
  },
  "serviceTabs": {
    "bus": "اتوبوس",
    "taxi": "تاکسی",
    "van": "ون",
    "train": "قطار"
  },
  "phoneBooking": {
    "title": "خرید تلفنی",
    "subtitle": "سفر، تنها محدود به آرزوهای توست!",
    "phone": "۰۱۱۳۳۲۴۳۰۵۶",
    "learnMore": "اطلاعات بیشتر"
  },
  "app": {
    "title": "برنامه پرتو سیر رو دانلود کن",
    "subtitle": "سفرت رو راحت‌تر کن",
    "description": "با اپلیکیشن پرتو سیر، بلیط، هتل و هرچیزی که برای سفر نیاز داری رو با چند تا لمس رزرو کن. از تخفیف‌های ویژه لذت ببر و سفرت رو هوشمندانه برنامه‌ریزی کن. همین حالا دانلود کن!",
    "android": "دانلود نسخه اندروید",
    "ios": "دانلود اپل",
    "direct": "دانلود مستقیم",
    "web": "وب اپلیکیشن",
    "scan": "اسکن کنید و دانلود کنید!"
  },
  "faq": {
    "title": "پرسش های متداول",
    "childrenTicket": {
      "question": "آیا خرید بلیط اتوبوس برای کودکان و اطفال زیر ۲ سال الزامی است؟",
      "answer": "قیمت بلیط اتوبوس برای کودکان زیر دو سال، در صورتی که صندلی‌ به آن‌ها تعلق نگیرد رایگان است. اگر کودک به استفاده از صندلی نیاز داشته باشد، باید هزینه کامل بلیط اتوبوس را برایش پرداخت کنید تا صندلی متعلق به خودتان باشد."
    },
    "howToBook": {
      "question": "نحوه رزرو بلیط اتوبوس در پرتو سیر چگونه است؟",
      "answer": "برای خرید اینترنتی بلیط اتوبوس در وب‌سایت یا اپلیکیشن پرتو سیر (بخش بلیط اتوبوس) مبدا، مقصد، تاریخ حرکت و تعداد بلیط خود را انتخاب می‌کنید. سپس می‌توانید بلیط‌های موجود را در تاریخ مدنظرتان ببینید و با کارت بانکی و رمز دوم، بلیط دلخواهتان را بخرید."
    },
    "checkTicket": {
      "question": "استعلام بلیط اتوبوس پرتو سیر چگونه است؟",
      "answer": "برای استعلام بلیط اتوبوس، کافی است به وب‌سایت یا اپلیکیشن پرتو سیر بروید و بعد از مشخص‌کردن مبدا و مقصد، لیست کامل اتوبوس‌های شرکت‌های مختلف را ببینید."
    },
    "changeSeat": {
      "question": "آیا بعد از خرید بلیط اتوبوس امکان تعویض صندلی وجود دارد؟",
      "answer": "خیر. بعد از خرید بلیط اتوبوس، امکان تعویض صندلی وجود ندارد."
    },
    "editTicket": {
      "question": "آیا می‌توانم اطلاعات بلیط اتوبوس خریداری‌شده را ویرایش کنم؟",
      "answer": "خیر. بعد از خرید بلیط اتوبوس، امکان ویرایش اطلاعات آن وجود ندارد. درصورت نیاز، باید بلیط خود را استرداد کنید و بلیط جدیدی با اطلاعات جدید تهیه کنید."
    },
    "wrongPurchase": {
      "question": "در صورت اشتباه در خرید آنلاین بلیط اتوبوس چکار کنیم؟",
      "answer": "در خرید آنلاین بلیط اتوبوس اگر اشتباهات در حد ایرادات ساده نگارشی باشد، می‌توانید این موضوع را با تعاونی مطرح کنید. اگر هم خطا در انتخاب مسیر باشد، باید بلیط خودتان را استرداد کنید و بلیط بخرید."
    },
    "purchaseConfirmation": {
      "question": "چطور مطمئن شوم خرید بلیط اتوبوس با موفقیت انجام شده؟",
      "answer": "اگر خرید بلیط اتوبوس با موفقیت انجام شود، یک پیامک از پرتو سیر برای شما ارسال خواهد شد. در این پیامک شماره سفارش شما، اطلاعات اتوبوس وجود دارد."
    },
    "priceDifference": {
      "question": "آیا قیمت بلیط اتوبوس در خرید اینترنتی با خرید حضوری فرق می‌کند؟",
      "answer": "خیر. قیمت بلیط اتوبوس در خرید اینترنتی و حضوری تفاوتی ندارد؛ اما توجه داشته باشید که خرید اینترنتی بلیط اتوبوس سریع‌ترین راه خرید بلیط است."
    },
    "pets": {
      "question": "امکان حمل حیوانات خانگی در داخل اتوبوس وجود دارد؟",
      "answer": "طبق قوانین سازمان حمل‌ونقل امکان حمل حیوانات در اتوبوس وجود ندارد."
    },
    "documents": {
      "question": "مدارک مورد نیاز برای استفاده از اتوبوس چیست؟",
      "answer": "به همراه داشتن کارت شناسایی معتبر (کارت ملی یا شناسنامه) برای دریافت بلیط الزامی است."
    },
    "arrivalTime": {
      "question": "جهت سوار شدن به اتوبوس چه مدت قبل از حرکت در ترمینال حضور داشته باشیم؟",
      "answer": "در صورتی که حرکت سرویس در ساعت مقرر انجام گردد مسافر می بایست حداکثر 30 دقیقه قبل حرکت سرویس در ترمینال مبدا حضور داشته باشد."
    },
    "luggage": {
      "question": "میزان بار مجاز هر مسافر در سفر با اتوبوس چقدر است؟",
      "answer": "طبق قوانین سازمان حمل‌ونقل میزان بار مجاز 20 کیلوگرم است. البته برخی از تعاونی‌ها با دریافت هزینه، امکان حمل بار تا 40 کیلوگرم را نیز ارائه می‌دهند."
    },
    "vanTaxiRules": {
      "question": "قوانین مربوط به ون و تاکسی",
      "answer": "برای مشاهده قوانین و مقررات مربوط به سفر با ون و تاکسی، لطفاً به صفحه قوانین و مقررات مراجعه کنید."
    }
  },
  "services": {
    "comfort": {
      "title": "هرجا که بخوای، با هر بودجه‌ای",
      "description": "رزرو آنلاین انواع بلیط اتوبوس، تاکسی و ون"
    },
    "accessibility": {
      "title": "هر لحظه در دسترس، همیشه همراه",
      "description": "فقط یه کلیک تا مقصدت فاصله داری"
    },
    "convenience": {
      "title": "از درِ خونه تا مقصد، بی‌دغدغه",
      "description": "آسایش شما، هدف ماست"
    }
  },
  "cta": {
    "title": "چمدونت برای سفر آمادست؟",
    "description": "چمدونت آماده‌ست، بلیتت چی؟ با رزرو آنلاین، از بهترین قیمت‌ها و صندلی‌ها بهره‌مند شو. علاوه بر این، می‌تونی با خیال راحت، جزئیات سفرت رو مدیریت کنی.",
    "button": "سفارش آنلاین"
  },
  "cities": {
    "tehran": "تهران",
    "ahvaz": "اهواز",
    "shiraz": "شیراز",
    "mashhad": "مشهد",
    "bandar": "بندر عباس",
    "esfehan": "اصفهان",
    "tabriz": "تبریز",
    "kish": "کیش"
  },
  "footer": {
    "description": "پرتو سیر; همراه همیشگی سفرهای شما.",
    "copyright": "۱۴۰۴ پرتو سیر. تمامی حقوق محفوظ است.",
    "about": "پرتو سیر",
    "customerService": "خدمات مشتریان",
    "additionalInfo": "اطلاعات تکمیلی",
    "refundGuide": "راهنمای استرداد",
    "terms": "قوانین و مقررات",
    "corporateSales": "فروش سازمانی",
    "agencyCooperation": "همکاری با آژانس ها",
    "designCredit": "طراحی سایت » گروه نرم افزاری تمشک «",
    "contact": "تماس با ما",
    "refund": "شرایط استرداد",
    "corporate": "همکاری سازمانی",
    "agency": "همکاری با آژانس‌ها",
    "company": "شرکت",
    "services": "خدمات",
    "additional": "بیشتر"
  },
  "auth": {
    "loginSignup": "ورود یا ثبت‌نام",
    "enterPhone": "برای ادامه شماره موبایل خود را وارد کنید",
    "phoneNumber": "شماره موبایل",
    "acceptTerms": "استفاده از پرتو سیر به معنی پذیرش قوانین و مقررات این سرویس است.",
    "confirm": "تایید و دریافت",
    "loginWithPassword": "ورود با کلمه عبور"
  },
  // "profile": {
  //   "title": "پروفایل کاربری",
  //   "verified": "تایید شده",
  //   "wallet": "موجودی حساب",
  //   "increaseBalance": "افزایش موجودی",
  //   "specialAccount": "حساب ویژه پرتو سیر",
  //   "userAccount": "حساب کاربری",
  //   "myTrips": "سفر های من",
  //   "passengerLists": "لیست های مسافران",
  //   "wishlist": "علاقه مندی ها",
  //   "support": "درخواست پشتیبانی",
  //   "balance": "موجودی و اعتبار من"
  // },
  "share": {
    "title": "اشتراک گذاری",
    "copyLink": "کپی لینک"
  },
  


  "about": {
    "title": "درباره پرتو سیر - ما کی هستیم؟",
    "subtitle": "پرتو سیر: همراه همیشگی سفرهای شما",
    "companyInfo": {
      "title": "شرکت بین المللی پرتوسیر ایرانیان",
      "description1": "شرکت بین المللی پرتوسیر ایرانیان با بیش از 27 سال تجربه (1376) با هدف ارائه خدمات حمل ونقل بین المللی مسافر تاسیس شد و مدیر عامل کنونی آقای ناصرکلانتری شرکت با ناوگانی متشکل از 30دستگاه اتوبوس ، 24 دستگاه ون و 54 دستگاه سواری های برون شهری ملکی و تحت پوشش و با بهره مندی از شعب فعال در شهرهای چون ساری ،مشهد ، قم ، اهواز ، زاهدان ، تایباد ، زابل ،چابهار، رشت ، تهران و ایلام فعالیت دارد.",
      "description2": "پرتوسیر ایرانیان سابقه ای درخشان در توسعه همکاری های حمل ونقل جاده ای با کشورهایی مانند ترکمنستان ، عراق و افغانستان دارد. در دهه اخیر، این شرکت با توسعه ناوگان و گسترش ارتباطات بین المللی ، جایگاه خود را به عنوان یکی از فعالترین شرکت های حمل ونقل برون مرزی ایران تثبیت نموده است.",
      "description3": "پرتوسیرایرانیان با تکیه برظرفیت های داخلی و روابط منطقه ای ، به دنبال توسعه پایدار در زمینه حمل ونقل ، گردشگری و خدمات مسافری است و در مسیر تحقق سند چشم انداز 1404 برای تبدیل ایران به قطب گردشگری منطقه ، گام برمی دارد.",
      "routesTitle": "مسیر های ما:",
      "routes": [
        "مشهد – هرات",
        "تایباد – هرات",
        "زابل – قندهار",
        "زاهدان – نیمروز",
        "زاهدان –کویته",
        "چابهار- کراچی",
        "اهواز – بصره",
        "قم – نجف",
        "ساری – نجف",
        "رشت – نجف"
      ]
    },
    "goals": {
      "title": "هدف های ما",
      "items": [
        "ما به قدرت همکاری و تیمی بودن اعتقاد داریم.",
        "مشتری مداری، هسته اصلی کسب‌وکار ما است.",
        "نوآوری و خلاقیت، موتور محرک رشد ما هستند.",
        "صداقت و شفافیت، اساس روابط ما با همکاران و مشتریان است.",
        "مسئولیت‌پذیری اجتماعی، بخشی جدایی‌ناپذیر از فرهنگ ما است.",
        "کیفیت، تعهد ما به مشتریان است."
      ]
    },
    "workEnvironment": {
      "title": "محیط کاری پرتو سیر"
    },
    "gallery": {
      "topImages": [
        "/img/pages/about-us/top/1.jpg",
        "/img/pages/about-us/top/2.jpg",
        "/img/pages/about-us/top/3.jpg",
        "/img/pages/about-us/top/4.jpg",
        "/img/pages/about-us/top/5.jpg",
        "/img/pages/about-us/top/6.jpg"
      ],
      "workImages": [
        "/img/pages/why-us/1.jpg",
        "/img/pages/why-us/2.jpg",
        "/img/pages/why-us/3.jpg",
        "/img/pages/why-us/4.jpg",
        "/img/pages/why-us/5.jpg",
        "/img/pages/why-us/6.jpg",
        "/img/pages/why-us/7.jpg",
        "/img/pages/why-us/8.jpg"
      ]
    }
  },



  "neworder": {
    "title": "سفارش - استرداد",
    "breadcrumb": {
      "flightSelection": "انتخاب پرواز",
      "passengerInfo": "مشخصات مسافران",
      "travelServices": "خدمات سفر",
      "confirmation": "تایید اطلاعات",
      "payment": "پرداخت",
      "ticketIssuance": "صدور بلیط"
    },
    "refundOptions": {
      "title": "مشخصات مسافران",
      "normalRefund": "استرداد عادی",
      "penaltyFreeRefund": "استرداد بدون جریمه",
      "noCost": "بدون هزینه",
      "perPassenger": "مسافر",
      "warningMessage": "استرداد این بلیط مطابق قوانین ایرلاین از ۱۲ ساعت قبل از پرواز شامل حداقل ۲,۱۰۰,۰۰۰ تومان جریمه خواهد بود.",
      "successMessage": "در صورت استرداد تا 12 ساعت قبل از پرواز، مبلغ بلیط بدون جریمه به شما برمی‌گردد."
    },
    "termsConditions": {
      "title": "شرایط و قوانین",
      "items": [
        "جهت استفاده از این ضمانت، فقط کافیست درخواست استرداد خود را ثبت کنید. پس از بررسی مبلغ بلیط به صورت کامل برای شما واریز خواهد شد.",
        "توجه نمایید که برای استفاده از ضمانت میبایست حداکثر تا 12 ساعت مانده به پرواز، درخواست استرداد خود را ثبت نمایید.",
        "پس از استرداد، تنها مبلغ بلیط پرداخت می‌شود و هزینه پرداخت شده جهت ضمانت شامل بازپرداخت نمی‌شود.",
        "در صورت کنسل شدن پرواز به علت تغییرات ایرلاین، مبلغ ضمانت به مسافر باز می‌گردد."
      ]
    },
    "actionButtons": {
      "back": "بازگشت",
      "confirmContinue": "تایید و ادامه خرید",
      "totalPrice": "۲،۱۰۰،۰۰۰"
    }
  },




  "error404": {
    "title": "صفحه ۴۰۴",
    "errorCode": "Error 404",
    "mainMessage": "یافت نشد!",
    "description": "برای یافتن آنچه به دنبال آن هستید، می‌توانید از منوی اصلی سایت استفاده کنید.",
    "goHome": "بازگشت به صفحه اصلی",
    "contactSupport": "تماس با پشتیبانی",
    "suggestions": {
      "title": "پیشنهاد ما",
      "items": [
        "بررسی آدرس وارد شده",
        "استفاده از جستجوی سایت",
        "مراجعه به صفحه اصلی",
        "تماس با پشتیبانی"
      ]
    }
  },

  
   
    "search": {
      "title": "جستجو",
      "header": {
        "ticket": "بلیط ",
        "fromTo": "تهران به شیراز",
        "date": "شنبه، 6 مرداد",
        "passengers": "مسافر",
        "editSearch": "ویرایش جستجو"
      },
        "dateSlider": {
          "today": "امروز",
          "select": "انتخاب",
          "past": "گذشته",
          "loading": "در حال بارگذاری تاریخ‌ها...",
          "noDates": "تاریخ موجود نیست",
          "morning": "صبح",
          "afternoon": "ظهر",
          "evening": "عصر",
          "night": "شب",
          "weekend": "آخر هفته",
          "weekday": "روز کاری"
        },
      
      "filters": {
        "title": "فیلترها",
        "clearAll": "لغو فیلتر ها",
        "ticketType": "نوع بلیط",
        "departureTime": "ساعت حرکت",
        "airlines": "شرکت های حمل و نقل",
        "otherOptions": "موارد دیگر",
        "ticketTypes": {
          "system": "سیستمی",
          "charter": "چارتر"
        },
        "otherOptionsList": {
          "duplicateTickets": "نمایش بلیط های تکراری",
          "availableTickets": "نمایش بلیط های موجود"
        }
      },
      "results": {
        "showing": "نمایش",
        "of": "از",
        "flights": "وسیله نقلیه",
        "sortBy": "مرتب سازی:",
        "sortOptions": {
          "recommended": "پیشنهادی",
          "earliest": "زودترین",
          "latest": "دیرترین",
          "cheapest": "ارزان‌ترین",
          "mostExpensive": "گران‌ترین"
        },
        "priceNote": "نرخ‌ها برای هر فرد بزرگسال در نظر گرفته شده است.",
        "flightInfo": "اطلاعات ",
        "refundRules": "قوانین استرداد",
        "selectFlight": "انتخاب وسیله نقلیه",
        "seatsLeft": "صندلی باقی مانده",
        "adult": "بزرگسال",
        "total": "مجموع",
        "price" : 'قیمت',
        "officialRate": "نرخ رسمی ",
        "flightNumber": "شماره ",
        "cabinClass": "کلاس کابین",
        "aircraftModel": "مدل وسیله نقلیه",
        "luggageAllowance": "مقدار بار مجاز",
        "terminal": "ترمینال",
        "flightType": "نوع ",
        "refundNote": "درصد جریمه کسر شده بر اساس زمان اعلام کنسلی",
        "viewRefundRules": "قوانین استرداد"
      },
      "booking": {
        "oneWay": "یک طرفه",
        "roundTrip": "دو طرفه",
        "from": "مبدا (شهر)",
        "to": "مقصد (شهر)",
        "departureDate": "تاریخ رفت",
        "returnDate": "تاریخ برگشت",
        "passengers": "مسافر",
        "adults": "بزرگسال",
        "children": "کودک",
        "infants": "نوزاد",
        "adultsDesc": "(۱۲ سال به بالا)",
        "childrenDesc": "(۲ تا ۱۲ سال)",
        "infantsDesc": "(۱۰ روز تا ۲ سال)"
      },
      "airlines": {
        "taban": "تابان",
        "ata": "آتا",
        "flypersia": "فلای پرشیا",
        "karun": "کارون",
        "aseman": "آسمان",
        "saha": "ساها"
      }
    }
  












},
        about: {
          storyTitle: "داستان ما",
          storyContent: "شرکت بین المللی پرتوسیر ایرانیان با بیش از 27 سال تجربه (1376) با هدف ارائه خدمات حمل ونقل بین المللی مسافر تاسیس شد و مدیر عامل کنونی آقای ناصرکلانتری شرکت با ناوگانی متشکل از 30دستگاه اتوبوس ، 24 دستگاه ون و 54 دستگاه سواری های برون شهری ملکی و تحت پوشش و با بهره مندی از شعب فعال در شهرهای چون ساری ،مشهد ، قم ، اهواز ، زاهدان ، تایباد ، زابل ،چابهار، رشت ، تهران و ایلام فعالیت دارد.",
          storyImageAlt: "تاریخچه شرکت ما",
          networkTitle: "شبکه ما",
          networkContent1: "ما در مسیر های مهمی چون:",
          route1: "مشهد – هرات / تایباد – هرات",
          route2: "زابل – قندهار / زاهدان – نیمروز",
          route3: "زاهدان –کویته / چابهار- کراچی",
          route4: "اهواز – بصره / قم – نجف",
          route5: "ساری – نجف / رشت – نجف",
          networkImageAlt: "شبکه حمل و نقل ما",
          achievementsTitle: "دستاوردهای ما",
          achievementsContent1: "پرتوسیر ایرانیان سابقه ای درخشان در توسعه همکاری های حمل ونقل جاده ای با کشورهایی مانند ترکمنستان ، عراق و افغانستان دارد. در دهه اخیر، این شرکت با توسعه ناوگان و گسترش ارتباطات بین المللی ، جایگاه خود را به عنوان یکی از فعالترین شرکت های حمل ونقل برون مرزی ایران تثبیت نموده است.",
          achievementsContent2: "پرتوسیرایرانیان با تکیه برظرفیت های داخلی و روابط منطقه ای ، به دنبال توسعه پایدار در زمینه حمل ونقل ، گردشگری و خدمات مسافری است و در مسیر تحقق سند چشم انداز 1404 برای تبدیل ایران به قطب گردشگری منطقه ، گام برمی دارد.",
          achievementsImageAlt: "دستاوردهای ما"
        },
        busSchedule: {
          days: {
            saturday: "شنبه",
            sunday: "یکشنبه",
            monday: "دوشنبه",
            tuesday: "سه‌شنبه",
            wednesday: "چهارشنبه",
            thursday: "پنج‌شنبه",
            friday: "جمعه"
          },
          noResults: "هیچ برنامه زمانی اتوبوسی موجود نیست",
          seatsLeft: "صندلی باقی مانده",
          price: "قیمت",
          time: "زمان حرکت",
          bookNow: "رزرو کنید"
        },
        navbar: {
          home: "خانه",
          about: "درباره ما",
          stations: "ایستگاه‌ها",
          loginWithGoogle: "ورود با گوگل",
          greeting: "سلام ",
          profile: "پروفایل",
          logout: "خروج",
          login: "ورود",
          user: "کاربر",
          changeLanguage: "تغییر زبان",
          logoutError: "خروج ناموفق بود. لطفاً دوباره تلاش کنید"
        },
        mapList: {
          title: 'اطلاعات شعب',
          address: 'آدرس:',
          phone: 'تلفن:',
          manager: 'مدیر:',
          mapUnavailable: 'نقشه در حال حاضر در دسترس نیست',
          viewOnNeshan: '(مشاهده در نقشه نشان)',
          branch: '',
          toggleLanguage: 'English',
          branches: {
            Taybad: 'تایباد',
            Zabol: 'زابل',
            Qom: 'قم',
            Sari: 'ساری',
            Ilam: 'ایلام',
            Ahvaz: 'اهواز',
            Mashhad: 'مشهد',
            Chabahar: 'چابهار'
          },
          addresses: {
            Taybad: 'پایانه تایباد، غرفه ۱',
            Zabol: 'زابل، میدان رستم، پایانه مسافربری غرفه ۱۳',
            Qom: 'پایانه قم، پایانه کوثر، جنب اتحادیه صنف',
            Sari: 'پایانه مسافربری دولت، بلوار دفاع مقدس',
            Ilam: 'ایلام، بلوار شهدای چال سارا، پایانه مسافربری شهدای شهرداری ایلام',
            Ahvaz: 'اهواز، پایانه سیاحت، طبقه دوم',
            Mashhad: 'مشهد، جنب پایانه امام رضا، نبش امام رضا ۶۹',
            Chabahar: 'بخش مرکزی چابهار، پایانه مسافربری چابهار'
          },
          managers: {
            Taybad: 'آقای بهروز یزدانی',
            Zabol: 'آقای رجب اکبری',
            Qom: 'آقای نزار ابولسان',
            Sari: 'آقای ناصر کلانتری',
            Ilam: 'آقای ماشاءالله رحمتی',
            Ahvaz: 'آقای حسین کلانتری',
            Mashhad: 'آقای ناصر کلانتری',
            Chabahar: 'خانم بهناز یزدانی'
          }
        },
        search: {
          source: 'مبدا',
          destination: 'مقصد',
          date: 'تاریخ',
          searchButton: 'جستجو',
          alertMessage: 'لطفا تمام موارد را انتخاب کنید',
          transportType: 'نوع سفر',
          bus: 'اتوبوس',
          taxi: 'تاکسی',
          van: 'ون',
          cargo: 'باربری'
        },
        contact: {
          title: 'تماس با ما',
          help: {
            title: 'چت آنلاین و مرکز کمک',
            detail1: 'پاسخ سریع به سوالات خود می‌خواهید؟',
            detail2: 'برای سوالات متداول به مرکز کمک مراجعه کنید یا با کارشناسان ما چت کنید.'
          },
          phone: {
            title: 'تلفن و واتساپ',
            label: 'تلفن ثابت'
          },
          email: {
            title: 'ایمیل به ما'
          }
        },
        login: {
          phoneLabel: 'شماره تلفن',
          submitButton: 'ارسال',
          codeLabel: 'کد تأیید',
          modalTitle: 'لطفاً کد ارسال شده به تلفن خود را وارد کنید',
          verifying: 'در حال تأیید...',
          resendButton: 'ارسال مجدد کد',
          resendCountdown: 'ارسال مجدد پس از {{count}} ثانیه',
          codeEmptyAlert: 'لطفاً کد تأیید را وارد کنید',
          title: 'ورود'
        },
        buttons: {
          more: 'جزئیات',
          payment: 'پرداخت'
        },
        booking: {
          title: 'جزئیات رزرو'
        },
        labels: {
          company: 'شرکت',
          details: 'جزئیات',
          busFront: 'جلوی اتوبوس'
        },
        passenger: {
          title: 'مسافر',
          name: 'نام',
          family: 'نام خانوادگی',
          mobile: 'شماره موبایل',
          birthday: 'تاریخ تولد (yyyy/mm/dd)',
          nationalCode: 'کد ملی',
          male: 'مرد',
          female: 'زن'
        },
        validation: {
          nameRequired: 'نام الزامی است',
          minName: 'حداقل ۳ کاراکتر برای نام',
          familyRequired: 'نام خانوادگی الزامی است',
          minFamily: 'حداقل ۳ کاراکتر برای نام خانوادگی',
          mobileRequired: 'شماره موبایل الزامی است',
          minMobile: 'حداقل ۱۱ کاراکتر برای موبایل',
          birthdayRequired: 'تاریخ تولد الزامی است',
          nationalCodeRequired: 'کد ملی الزامی است',
          minPassenger: 'حداقل یک مسافر باید تعریف شود'
        },
        seat: {
          male: 'آقا',
          female: 'خانم'
        },
        busDetails: {
          source: "مبدأ",
          destination: "مقصد",
          dateTime: "تاریخ و ساعت",
          type: "نوع",
          sourceIconAlt: "آیکون مبدأ",
          destinationIconAlt: "آیکون مقصد",
          arrowIconAlt: "آیکون فلش",
          scheduleIconAlt: "آیکون برنامه زمانی",
          facilitiesIconAlt: "آیکون امکانات"
        },
        busTicket: {
          currency: "ریال",
          seatsLeft: "{{count}} صندلی باقی مانده",
          busIconAlt: "آیکون اتوبوس"
        },
        footer: {
          usefulLinks: "لینک‌های مفید",
          aboutUs: "درباره ما",
          privacyPolicy: "سیاست حفظ حریم خصوصی",
          termsConditions: "شرایط و ضوابط",
          support: "پشتیبانی",
          refundPolicy: "سیاست بازپرداخت",
          contactUs: "تماس با ما",
          copyright: "  partoseir.com - Website designed by ",
          logoAlt: "لوگوی دانشگاه",
          frameAlt: "قاب دانشگاه"
        },
        home: {
          advertise: "تبلیغات",
          ad1Title: "تبلیغ اول",
          ad2Title: "تبلیغ دوم",
          ad1Alt: "تصویر تبلیغ اول",
          ad2Alt: "تصویر تبلیغ دوم"
        },
         "profile": {
      "name": "نام",
      "family": "نام خانوادگی",
      "mobile": "شماره موبایل",
      "email": "ایمیل",
      "profileImageAlt": "تصویر پروفایل",
      "profileDetails": "جزئیات پروفایل",
      "noName": "نام وارد نشده",
      "noMobile": "شماره موبایل وارد نشده",
      "noEmail": "ایمیل وارد نشده",
      "upcoming": "آینده",
      "completed": "تکمیل شده",
      "filters": {
        "lastWeek": "هفته گذشته",
        "lastMonth": "ماه گذشته",
        "last3Months": "۳ ماه گذشته",
        "last6Months": "۶ ماه گذشته"
      },
      "changeEmail": "تغییر ایمیل",
      "emailPlaceholder": "ایمیل خود را وارد کنید",
      "areYouSure": "آیا مطمئن هستید؟",
      "cancel": "انصراف",
      "logout": "خروج از حساب",
      "changeName": "تغییر نام",
      "namePlaceholder": "نام خود را وارد کنید",
      "changeLastName": "تغییر نام خانوادگی",
      "lastNamePlaceholder": "نام خانوادگی خود را وارد کنید",
      "saving": "در حال ذخیره...",
      "save": "ذخیره",
      "validationError": "لطفا تمام فیلدهای الزامی را پر کنید",
      "profileUpdateSuccess": "پروفایل با موفقیت به روز شد",
      "profileUpdateError": "خطا در به روز رسانی پروفایل"
    }
        ,
        navbar2: {
          "travelServices": "خدمات سفر",
          "busTicket": "بلیط اتوبوس",
          "TaxiTicket": "بلیط تاکسی",
          "VanTicket": "بلیط ون",
          "Cargo": "باربری"

        },
        "terms": {
          "title": "قوانین و مقررات",
          "introduction": "قوانین و مقررات استفاده از سامانه خدمات حمل‌ونقل مسافری لطفاً پیش از ورود به سامانه و بهره‌مندی از خدمات، مفاد ذیل را با دقت مطالعه فرمایید. استفاده از این سامانه به منزله پذیرش کامل شرایط و ضوابط آن تلقی خواهد شد.",
          "registration": {
            "title": "ثبت‌نام و اطلاعات کاربران",
            "1_1": "کاربران موظف‌اند در زمان ثبت‌نام، اطلاعات هویتی خود را به‌صورت کامل و صحیح وارد نمایند. مسئولیت صحت و سقم اطلاعات واردشده بر عهده کاربر می‌باشد.",
            "1_2": "هرگونه استفاده از مشخصات و مدارک اشخاص دیگر، بدون کسب مجوز قانونی، ممنوع بوده و تخلف محسوب می‌شود."
          },
          "booking": {
            "title": "قوانین مربوط به رزرو و خرید بلیت",
            "2_1": "رزرو و خرید بلیت تنها از طریق سامانه رسمی شرکت کلان و نمایندگان مجاز امکان‌پذیر است.",
            "2_2": "تغییر یا لغو سفر، تابع شرایط کنسلی شرکت بوده که در بخش «سیاست‌های بازپرداخت» سامانه اعلام گردیده است.",
            "2_3": "نرخ بلیت‌ها بر اساس وسیله نقلیه، مسیر، تاریخ و ظرفیت، متغیر و طبق مصوبات شرکت تعیین می‌گردد."
          },
          "responsibilities": {
            "title": "تعهدات کاربران (مسافران)",
            "3_1": "مسافر موظف است در زمان مقرر در محل حرکت حضور یابد؛ در غیر این‌صورت شرکت مسئولیتی در قبال تاخیر یا عدم امکان انجام سفر نخواهد داشت.",
            "3_2": "حمل هرگونه محموله غیرمجاز، خطرناک، یا مغایر با قوانین کشور ممنوع بوده و در صورت تخلف، مسئولیت آن مستقیماً متوجه مسافر خواهد بود.",
            "3_3": "رعایت نظم، شئونات اجتماعی، بهداشت فردی و احترام به دیگر مسافران و رانندگان در طول سفر الزامی است."
          },
          "acceptance": "✅ ورود به سامانه و استفاده از خدمات آن به منزله مطالعه، آگاهی و پذیرش کلیه مفاد فوق از سوی کاربر تلقی می‌گردد.",
          "images": {
            "about": "درباره ما",
            "story": "داستان ما",
            "mission": "ماموریت ما"
          }
        },
        cancelpage: {
          paymentResult: 'نتیجه پرداخت',
          paymentFailed: 'پرداخت ناموفق بود',
          paymentFailedMessage: 'متأسفانه پرداخت شما با مشکل مواجه شد.',
          homePage: 'صفحه اصلی'
        },
        success: {
          paymentResult: 'نتیجه پرداخت',
          paymentSuccess: 'پرداخت با موفقیت انجام شد!',
          orderRegistered: 'سفارش شما با موفقیت ثبت گردید.',
          trackingCode: 'کد رهگیری'
        },
        "fareBreakdown": {
          "ticketPrice": "قیمت بلیت",
          "ticketCounts": "تعداد بلیت",
          "endPrice": "قیمت نهایی",
          "rial": "ریال"
        },
      
  "ticket": {
    "passengers": "مسافران",
    "seatNumber": "شماره صندلی",
      "noTickets": 'بلیط اتوبوسی یافت نشد',
    "reservationNumber": "شماره رزرو",
    "ticketNumber": "شماره بلیط",
    "unknownCompany": "شرکت نامشخص",
    "unknownCarType": "نوع نامشخص",
    "unknownCity": "شهر نامشخص",
    "noPassengers": "مسافری وجود ندارد",
    "downloadPdf": "دانلود PDF",
    "sendEmail": "ارسال به ایمیل",
    "Tickets":"بلیط های رزرو شده",
    "status": {
      "reserved": "رزرو شده",
      "cancelled": "لغو شده",
      "completed": "تکمیل شده",
      "unknown": "نامشخص"
    }
  },
  "common": {
    "currency": "ریال",
    "backToList": "بازگشت به لیست"
  },
  "terms1": {
    "accept": "شرایط و ضوابط را می پذیرم",
    "title": "شرایط و ضوابط",
    "content":`• اطلاعات مسافرین باید دقیق و مطابق با مدارک شناسایی باشد
• مسئولیت هرگونه اشتباه در اطلاعات وارد شده بر عهده خریدار است
• در صورت کنسلی، مبلغ طبق شرایط شرکت حمل و نقل برگشت داده می‌شود
• بلیط های خریداری شده غیر قابل انتقال به دیگران می‌باشد
• لطفا حداقل 30 دقیقه قبل از حرکت در محل حاضر باشید
• ارائه کارت شناسایی معتبر در زمان سفر الزامی است
• در صورت تغییر برنامه سفر، حتماً با پشتیبانی تماس بگیرید
• حمل حیوانات خانگی ممنوع می‌باشد`
  
  },
  "validation1": {
    "termsRequired": "شما باید شرایط و ضوابط را بپذیرید"
  },
  "buttons1": {
    "more": "بیشتر",
    "payment": "پرداخت",
    "close": "بستن",
    "view": "مشاهده",
    "bookNow": "رزرو الآن",
    "confirm": "تایید",
    "cancel": "لغو",
    "back": "بازگشت",
    "next": "بعدی",
    "search": "جستجو",
    "select": "انتخاب",
    "continue": "ادامه",
    "submit": "ثبت"
  },
    notfound:{
      title: 'به زودی ',
      description: 'لطفا منتظر رونمایی این صفحه باشید',
      button: 'برو به صفحه اصلی'
  }


      }
    },
    ru: {
      translation: {
        about: {
          storyTitle: "Наша история",
          storyContent: "Компания Parto Sir Iranian International была основана в 1997 году и имеет более чем 27-летний опыт оказания услуг международных пассажирских перевозок. Под руководством генерального директора г-на Насера Калантари мы управляем современным парком, включающим 30 автобусов, 24 микроавтобуса и 54 междугородних транспортных средства.",
          storyImageAlt: "История нашей компании",
          networkTitle: "Наша сеть",
          networkContent1: "Имея филиалы в Сари, Мешхеде, Куме, Ахвазе, Захедане, Тайбаде, Заболе, Чабахаре, Реште, Тегеране и Иламе, мы обслуживаем ключевые международные маршруты, включая:",
          route1: "Мешхед-Герат / Тайбад-Герат",
          route2: "Заболь-Кандагар / Захедан-Нимроз",
          route3: "Захедан-Кветта / Чабахар-Карачи",
          route4: "Ахваз-Басра / Кум-Эн-Наджаф",
          route5: "Сари-Эн-Наджаф / Решт-Эн-Наджаф",
          networkImageAlt: "Наша транспортная сеть",
          achievementsTitle: "Наши достижения",
          achievementsContent1: "Мы установили прочные партнерские отношения в сфере транспорта с Туркменистаном, Ираком и Афганистаном. Во время Арбаина мы признаны ведущим транспортным поставщиком для паломников, предлагая специальные автопарки и профессиональных водителей.",
          achievementsContent2: "Опираясь на внутренние возможности и региональные отношения, мы стремимся к устойчивому развитию в сфере транспорта, туризма и пассажирских перевозок, работая над реализацией иранского видения 2025 года как регионального туристического центра.",
          achievementsImageAlt: "Наши достижения"
        },
        busSchedule: {
          days: {
            saturday: "Суббота",
            sunday: "Воскресенье",
            monday: "Понедельник",
            tuesday: "Вторник",
            wednesday: "Среда",
            thursday: "Четверг",
            friday: "Пятница"
          },
          noResults: "Расписание автобусов недоступно",
          seatsLeft: "осталось мест",
          price: "Цена",
          time: "Время отправления",
          bookNow: "Забронировать сейчас"
        },
        navbar: {
          home: "Главная",
          about: "О нас",
          stations: "Станции",
          loginWithGoogle: "Войти через Google",
          greeting: "Привет ",
          profile: "Профиль",
          logout: "Выйти",
          login: "Войти",
          user: "Пользователь",
          changeLanguage: "Изменить язык",
          logoutError: "Не удалось выйти. Пожалуйста, попробуйте снова"
        },
        mapList: {
          title: 'Информация о филиалах',
          address: 'Адрес:',
          phone: 'Телефон:',
          manager: 'Менеджер:',
          mapUnavailable: 'Карта временно недоступна',
          viewOnNeshan: '(Посмотреть на Neshan)',
          branch: '',
          toggleLanguage: 'فارسی',
          branches: {
            Taybad: 'Тайбад',
            Zabol: 'Заболь',
            Qom: 'Кум',
            Sari: 'Сари',
            Ilam: 'Илам',
            Ahvaz: 'Ахваз',
            Mashhad: 'Мешхед',
            Chabahar: 'Чабахар'
          },
          addresses: {
            Taybad: 'Тайбадский терминал, Стойка 1',
            Zabol: 'Заболь, площадь Ростама, Стойка терминала 13',
            Qom: 'Кумский терминал, терминал Ковсар, рядом с Торговым союзом',
            Sari: 'Пассажирский терминал Долат, бульвар Дефа Могаддас',
            Ilam: 'Илам, бульвар Шахидов Чалсара, Пассажирский терминал Шахидов муниципалитета Илама',
            Ahvaz: 'Ахваз, терминал Саяхат, 2 этаж',
            Mashhad: 'Мешхед, рядом с терминалом Имама Резы, угол Имама Резы 69',
            Chabahar: 'Центральный район Чабахар, Чабахарский пассажирский терминал'
          },
          managers: {
            Taybad: 'Г-н Бехруз Яздани',
            Zabol: 'Г-н Раджаб Акбари',
            Qom: 'Г-н Низар Аболсан',
            Sari: 'Г-н Насер Калантари',
            Ilam: 'Г-н Машаллах Рахмати',
            Ahvaz: 'Г-н Хоссейн Калантари',
            Mashhad: 'Г-н Насер Калантари',
            Chabahar: 'Г-жа Бехназ Яздани'
          }
        },
        search: {
          source: 'Откуда',
          destination: 'Куда',
          date: 'Дата',
          searchButton: 'Поиск',
          alertMessage: 'Пожалуйста, выберите все пункты',
          transportType: 'Тип транспорта',
          bus: 'Автобус',
          taxi: 'Такси',
          van: 'Микроавтобус',
          cargo: 'Грузоперевозки'
        },
        contact: {
          title: 'Свяжитесь с нами',
          help: {
            title: 'Чат и центр поддержки',
            detail1: 'Нужен быстрый ответ на срочный вопрос?',
            detail2: 'Посетите наш Центр поддержки для FAQ или пообщайтесь с живым агентом.'
          },
          phone: {
            title: 'Мобильный и WhatsApp',
            label: 'Телефон'
          },
          email: {
            title: 'Напишите нам'
          }
        },
        login: {
          phoneLabel: 'Номер телефона',
          submitButton: 'Отправить',
          codeLabel: 'Код подтверждения',
          modalTitle: 'Пожалуйста, введите код, отправленный на ваш телефон',
          verifying: 'Проверка...',
          resendButton: 'Отправить код повторно',
          resendCountdown: 'Отправить повторно через {{count}}с',
          codeEmptyAlert: 'Требуется код подтверждения',
          title: 'Вход'
        },
        buttons: {
          more: 'Подробнее',
          payment: 'Оплата'
        },
        booking: {
          title: 'Детали бронирования'
        },
        labels: {
          company: 'Компания',
          details: 'Детали',
          busFront: 'Передняя часть автобуса'
        },
        passenger: {
          title: 'Пассажир',
          name: 'Имя',
          family: 'Фамилия',
          mobile: 'Мобильный номер',
          birthday: 'Дата рождения (гггг/мм/дд)',
          nationalCode: 'Национальный код',
          male: 'Мужской',
          female: 'Женский'
        },
        validation: {
          nameRequired: 'Требуется имя',
          minName: 'Минимум 3 символа',
          familyRequired: 'Требуется фамилия',
          minFamily: 'Минимум 3 символа',
          mobileRequired: 'Требуется номер телефона',
          minMobile: 'Минимум 11 символов',
          birthdayRequired: 'Требуется дата рождения',
          nationalCodeRequired: 'Требуется национальный код',
          minPassenger: 'Требуется хотя бы один пассажир'
        },
        seat: {
          male: 'Мужчина',
          female: 'Женщина'
        },
        busDetails: {
          source: "Откуда",
          destination: "Куда",
          dateTime: "Дата и время",
          type: "Тип",
          sourceIconAlt: "Иконка места отправления",
          destinationIconAlt: "Иконка места назначения",
          arrowIconAlt: "Иконка стрелки",
          scheduleIconAlt: "Иконка расписания",
          facilitiesIconAlt: "Иконка удобств"
        },
        busTicket: {
          currency: "Риал",
          seatsLeft: "Осталось {{count}} мест",
          busIconAlt: "Иконка автобуса"
        },
        footer: {
          usefulLinks: "Полезные ссылки",
          aboutUs: "О нас",
          privacyPolicy: "Политика конфиденциальности",
          termsConditions: "Условия и положения",
          support: "Поддержка",
          refundPolicy: "Политика возврата",
          contactUs: "Свяжитесь с нами",
          copyright: " partoseir.com - Сайт разработан ",
          logoAlt: "Логотип компании",
          frameAlt: "Фрейм компании"
        },
        home: {
          advertise: "Реклама",
          ad1Title: "Реклама 1",
          ad2Title: "Реклама 2",
          ad1Alt: "Первое рекламное изображение",
          ad2Alt: "Второе рекламное изображение"
        },
    "profile": {
      "name": "Имя",
      "family": "Фамилия",
      "mobile": "Мобильный телефон",
      "email": "Электронная почта",
      "profileImageAlt": "Изображение профиля",
      "profileDetails": "Детали профиля",
      "noName": "Имя не указано",
      "noMobile": "Номер телефона не указан",
      "noEmail": "Электронная почта не указана",
      "upcoming": "Предстоящие",
      "completed": "Завершенные",
      "filters": {
        "lastWeek": "Прошлая неделя",
        "lastMonth": "Прошлый месяц",
        "last3Months": "Последние 3 месяца",
        "last6Months": "Последние 6 месяцев"
      },
      "changeEmail": "Изменить email",
      "emailPlaceholder": "Введите ваш email",
      "areYouSure": "Вы уверены?",
      "cancel": "Отмена",
      "logout": "Выйти",
      "changeName": "Изменить имя",
      "namePlaceholder": "Введите ваше имя",
      "changeLastName": "Изменить фамилию",
      "lastNamePlaceholder": "Введите вашу фамилию",
      "saving": "Сохранение...",
      "save": "Сохранить",
      "validationError": "Пожалуйста, заполните все обязательные поля",
      "profileUpdateSuccess": "Профиль успешно обновлен",
      "profileUpdateError": "Не удалось обновить профиль"
    }
        
        ,
        navbar2: {
          "travelServices": "Туристические услуги",
          "busTicket": "Автобусный билет",
          "TaxiTicket": "Такси билет",
          "VanTicket": "Билет на микроавтобус",
          "Cargo": "Грузоперевозки"
        },

        "terms": {
          "title": "Условия и положения",
          "introduction": "Настоящие Условия и положения регулируют использование вами системы услуг пассажирских перевозок. Пожалуйста, внимательно прочитайте следующие условия перед использованием системы. Использование системы означает полное принятие этих условий.",
          "registration": {
            "title": "Регистрация и информация пользователей",
            "1_1": "Пользователи должны вводить полную и точную идентификационную информацию во время регистрации. Пользователи несут ответственность за точность введенной информации.",
            "1_2": "Любое использование информации или документов других лиц без юридического разрешения запрещено и считается нарушением."
          },
          "booking": {
            "title": "Бронирование и покупка билетов",
            "2_1": "Бронирование и покупка билетов возможны только через официальную систему компании и уполномоченных представителей.",
            "2_2": "Изменения или отмена поездки подчиняются политике отмены компании, как указано в разделе 'Политика возврата' системы.",
            "2_3": "Цены на билеты варьируются в зависимости от типа транспортного средства, маршрута, даты и вместимости и определяются в соответствии с правилами компании."
          },
          "responsibilities": {
            "title": "Обязанности пользователей (пассажиров)",
            "3_1": "Пассажиры должны прибыть в пункт отправления в назначенное время; в противном случае компания не несет ответственности за задержки или отмены поездок.",
            "3_2": "Запрещено перевозить любые запрещенные, опасные или незаконные предметы, и пассажиры несут полную ответственность за любые нарушения.",
            "3_3": "Соблюдение порядка, социальных норм, личной гигиены и уважения к другим пассажирам и водителям во время поездки обязательно."
          },
          "acceptance": "Вход в систему и использование ее услуг означает, что пользователь прочитал, понял и принял все вышеуказанные условия.",
          "images": {
            "about": "О нас",
            "story": "Наша история",
            "mission": "Наша миссия"
          }
        },
        cancelpage: {
          paymentResult: 'Результат платежа',
          paymentFailed: 'Платеж не прошел',
          paymentFailedMessage: 'К сожалению, при обработке вашего платежа возникла проблема.',
          homePage: 'Главная страница'
        },
        success: {
          paymentResult: 'Результат платежа',
          paymentSuccess: 'Платеж успешно выполнен!',
          orderRegistered: 'Ваш заказ успешно зарегистрирован.',
          trackingCode: 'Код отслеживания'
        },
        "fareBreakdown": {
          "ticketPrice": "Цена билета",
          "ticketCounts": "Количество билетов",
          "endPrice": "Итоговая цена",
          "rial": "Риал"
        },
            "ticket": {
    "passengers": "Пассажиры",
    "seatNumber": "Номер места",
     "noTickets": 'Автобусные билеты не найдены',
    "reservationNumber": "Номер брони",
    "ticketNumber": "Номер билета",
    "unknownCompany": "Неизвестная компания",
    "unknownCarType": "Неизвестный тип",
    "unknownCity": "Неизвестный город",
    "noPassengers": "Нет пассажиров",
    "downloadPdf": "Скачать PDF",
    "sendEmail": "Отправить по почте",
     "Tickets":"Список билетов",
    "status": {
      "reserved": "Забронирован",
      "cancelled": "Отменен",
      "completed": "Завершен",
      "unknown": "Неизвестно",
      
    }
  },
  "common": {
    "currency": "руб",
    "backToList": "Вернуться к списку"
  },
   "terms1": {
    "accept": "Я принимаю условия",
    "title": "Условия использования",
    "content": "Данные пассажиров должны быть точными и соответствовать удостоверяющим документам.\nОтветственность за любые ошибки в введённых данных несёт покупатель.\nВ случае отмены сумма возвращается согласно условиям транспортной компании.\nКупленные билеты нельзя передавать другим лицам.\nПожалуйста, прибудьте на место не менее чем за 30 минут до отправления.\nПредъявление действительного удостоверения личности во время поездки обязательно.\nПри изменении планов поездки обязательно свяжитесь со службой поддержки.\nПеревозка домашних животных запрещена."
   },
  "validation1": {
    "termsRequired": "Вы должны принять условия"
  },
   "buttons1": {
    "more": "Ещё",
    "payment": "Оплата",
    "close": "Закрыть",
    "view": "Просмотр",
    "bookNow": "Забронировать",
    "confirm": "Подтвердить",
    "cancel": "Отмена",
    "back": "Назад",
    "next": "Далее",
    "search": "Поиск",
    "select": "Выбрать",
    "continue": "Продолжить",
    "submit": "Отправить"
  },
  notfound:{
     title: 'Скоро этот раздел будет активен',
      description: 'Пожалуйста, ждите запуска этой страницы',
      button: 'На главную'
  }



      }
    },
    ar: {
      translation: {
        about: {
          storyTitle: "قصتنا",
          storyContent: "تأسست شركة بارتو سير الإيرانية الدولية عام 1997 ولديها أكثر من 27 عامًا من الخبرة في خدمات نقل الركاب الدولية. تحت قيادة الرئيس التنفيذي السيد ناصر كلانتاري، ندير أسطولًا حديثًا يشمل 30 حافلة و24 ميني باص و54 مركبة بين المدن.",
          storyImageAlt: "تاريخ شركتنا",
          networkTitle: "شبكتنا",
          networkContent1: "مع فروع في ساري ومشهد وقم وأهواز وزاهدان وتايباد وزابل وتشابهار ورشط وطهران وإيلام، نخدم طرقًا دولية رئيسية تشمل:",
          route1: "مشهد-هرات / تايباد-هرات",
          route2: "زابل-قندهار / زاهدان-نيمروز",
          route3: "زاهدان-كويتا / تشابهار-كراتشي",
          route4: "أهواز-البصرة / قم-النجف",
          route5: "ساري-النجف / رشت-النجف",
          networkImageAlt: "شبكة النقل الخاصة بنا",
          achievementsTitle: "إنجازاتنا",
          achievementsContent1: "لقد أنشأنا شراكات نقل قوية مع تركمانستان والعراق وأفغانستان. خلال الأربعين، نُعتبر من أفضل مقدمي خدمات النقل للحجاج، حيث نقدم أساطيل مخصصة وسائقين محترفين.",
          achievementsContent2: "بناءً على القدرات المحلية والعلاقات الإقليمية، نحن ملتزمون بالتنمية المستدامة في النقل والسياحة وخدمات الركاب، ونعمل نحو رؤية إيران 2025 كمركز سياحي إقليمي.",
          achievementsImageAlt: "إنجازاتنا"
        },
        busSchedule: {
          days: {
            saturday: "السبت",
            sunday: "الأحد",
            monday: "الاثنين",
            tuesday: "الثلاثاء",
            wednesday: "الأربعاء",
            thursday: "الخميس",
            friday: "الجمعة"
          },
          noResults: "لا توجد جداول حافلات متاحة",
          seatsLeft: "مقاعد متبقية",
          price: "السعر",
          time: "وقت المغادرة",
          bookNow: "احجز الآن"
        },
        navbar: {
          home: "الرئيسية",
          about: "من نحن",
          stations: "المحطات",
          loginWithGoogle: "تسجيل الدخول عبر جوجل",
          greeting: "مرحباً ",
          profile: "الملف الشخصي",
          logout: "تسجيل الخروج",
          login: "تسجيل الدخول",
          user: "المستخدم",
          changeLanguage: "تغيير اللغة",
          logoutError: "فشل تسجيل الخروج. يرجى المحاولة مرة أخرى"
        },
        mapList: {
          title: 'معلومات الفروع',
          address: 'العنوان:',
          phone: 'الهاتف:',
          manager: 'المدير:',
          mapUnavailable: 'الخريطة غير متاحة حالياً',
          viewOnNeshan: '(عرض على نشان)',
          branch: '',
          toggleLanguage: 'فارسی',
          branches: {
            Taybad: 'تايباد',
            Zabol: 'زابل',
            Qom: 'قم',
            Sari: 'ساري',
            Ilam: 'إيلام',
            Ahvaz: 'أهواز',
            Mashhad: 'مشهد',
            Chabahar: 'تشابهار'
          },
          addresses: {
            Taybad: 'محطة تايباد، كشك 1',
            Zabol: 'زابل، ميدان رستم، كشك المحطة 13',
            Qom: 'محطة قم، محطة كوثر، بجانب اتحاد التجارة',
            Sari: 'محطة الركاب دولت، شارع دفاع مقدس',
            Ilam: 'إيلام، شارع شهداء تشالسارا، محطة ركاب شهداء بلدية إيلام',
            Ahvaz: 'أهواز، محطة سياحت، الطابق الثاني',
            Mashhad: 'مشهد، بجانب محطة الإمام رضا، زاوية الإمام رضا 69',
            Chabahar: 'منطقة تشابهار المركزية، محطة ركاب تشابهار'
          },
          managers: {
            Taybad: 'السيد بهروز يزداني',
            Zabol: 'السيد رجب أكبري',
            Qom: 'السيد نزار أبولسان',
            Sari: 'السيد ناصر كلانتري',
            Ilam: 'السيد ما شاء الله رحمتي',
            Ahvaz: 'السيد حسين كلانتري',
            Mashhad: 'السيد ناصر كلانتري',
            Chabahar: 'السيدة بهناز يزداني'
          }
        },
        search: {
          source: 'من',
          destination: 'إلى',
          date: 'التاريخ',
          searchButton: 'بحث',
          alertMessage: 'الرجاء تحديد جميع العناصر',
          transportType: 'النوع',
          bus: 'حافلة',
          taxi: 'تاكسي',
          van: 'ميني باص',
          cargo: 'بضائع'
        },
        contact: {
          title: 'اتصل بنا',
          help: {
            title: 'الدردشة الحية ومركز المساعدة',
            detail1: 'هل تريد إجابة سريعة لسؤال ملح؟',
            detail2: 'قم بزيارة مركز المساعدة لدينا للأسئلة الشائعة أو دردش مع وكيل مباشر.'
          },
          phone: {
            title: 'الجوال وواتساب',
            label: 'الهاتف'
          },
          email: {
            title: 'راسلنا عبر البريد'
          }
        },
        login: {
          phoneLabel: 'رقم الهاتف',
          submitButton: 'إرسال',
          codeLabel: 'رمز التحقق',
          modalTitle: 'الرجاء إدخال الرمز المرسل إلى هاتفك',
          verifying: 'جاري التحقق...',
          resendButton: 'إعادة إرسال الرمز',
          resendCountdown: 'إعادة الإرسال خلال {{count}}ث',
          codeEmptyAlert: 'رمز التحقق مطلوب',
          title: 'تسجيل الدخول'
        },
        buttons: {
          more: 'المزيد',
          payment: 'الدفع'
        },
        booking: {
          title: 'تفاصيل الحجز'
        },
        labels: {
          company: 'الشركة',
          details: 'التفاصيل',
          busFront: 'مقدمة الحافلة'
        },
        passenger: {
          title: 'الراكب',
          name: 'الاسم',
          family: 'العائلة',
          mobile: 'رقم الجوال',
          birthday: 'تاريخ الميلاد (سنة/شهر/يوم)',
          nationalCode: 'الرمز الوطني',
          male: 'ذكر',
          female: 'أنثى'
        },
        validation: {
          nameRequired: 'الاسم مطلوب',
          minName: 'الحد الأدنى للاسم 3 أحرف',
          familyRequired: 'العائلة مطلوبة',
          minFamily: 'الحد الأدنى للعائلة 3 أحرف',
          mobileRequired: 'رقم الجوال مطلوب',
          minMobile: 'الحد الأدنى للجوال 11 رقمًا',
          birthdayRequired: 'تاريخ الميلاد مطلوب',
          nationalCodeRequired: 'الرمز الوطني مطلوب',
          minPassenger: 'مطلوب راكب واحد على الأقل'
        },
        seat: {
          male: 'رجل',
          female: 'امرأة'
        },
        busDetails: {
          source: "من",
          destination: "إلى",
          dateTime: "التاريخ والوقت",
          type: "النوع",
          sourceIconAlt: "أيقونة المصدر",
          destinationIconAlt: "أيقونة الوجهة",
          arrowIconAlt: "أيقونة السهم",
          scheduleIconAlt: "أيقونة الجدول",
          facilitiesIconAlt: "أيقونة المرافق"
        },
        busTicket: {
          currency: "ريال",
          seatsLeft: "باقي {{count}} مقاعد",
          busIconAlt: "أيقونة الحافلة"
        },
        footer: {
          usefulLinks: "روابط مفيدة",
          aboutUs: "من نحن",
          privacyPolicy: "سياسة الخصوصية",
          termsConditions: "الشروط والأحكام",
          support: "الدعم",
          refundPolicy: "سياسة الاسترجاع",
          contactUs: "اتصل بنا",
          copyright: " partoseir.com - تم تصميم الموقع بواسطة ",
          logoAlt: "شعار الشركة",
          frameAlt: "إطار الشركة"
        },
        home: {
          advertise: "إعلان",
          ad1Title: "الإعلان 1",
          ad2Title: "الإعلان 2",
          ad1Alt: "صورة الإعلان الأولى",
          ad2Alt: "صورة الإعلان الثانية"
        },
    "profile": {
      "name": "الاسم",
      "family": "اسم العائلة",
      "mobile": "رقم الهاتف",
      "email": "البريد الإلكتروني",
      "profileImageAlt": "صورة الملف الشخصي",
      "profileDetails": "تفاصيل الملف الشخصي",
      "noName": "لا يوجد اسم",
      "noMobile": "لا يوجد رقم هاتف",
      "noEmail": "لا يوجد بريد إلكتروني",
      "upcoming": "القادمة",
      "completed": "مكتمل",
      "filters": {
        "lastWeek": "الأسبوع الماضي",
        "lastMonth": "الشهر الماضي",
        "last3Months": "آخر 3 أشهر",
        "last6Months": "آخر 6 أشهر"
      },
      "changeEmail": "تغيير البريد الإلكتروني",
      "emailPlaceholder": "أدخل بريدك الإلكتروني",
      "areYouSure": "هل أنت متأكد؟",
      "cancel": "إلغاء",
      "logout": "تسجيل الخروج",
      "changeName": "تغيير الاسم",
      "namePlaceholder": "أدخل اسمك",
      "changeLastName": "تغيير اسم العائلة",
      "lastNamePlaceholder": "أدخل اسم عائلتك",
      "saving": "جاري الحفظ...",
      "save": "حفظ",
      "validationError": "يرجى ملء جميع الحقول المطلوبة",
      "profileUpdateSuccess": "تم تحديث الملف الشخصي بنجاح",
      "profileUpdateError": "فشل تحديث الملف الشخصي"
    }
  
        
        ,
        navbar2: {
          "travelServices": "خدمات السفر",
          "busTicket": "تذكرة حافلة",
          "TaxiTicket": "تذكرة تاكسي",
          "VanTicket": "تذكرة فان",
          "Cargo": "شحن"
        },

        "terms": {
          "title": "الشروط والأحكام",
          "introduction": "تحكم هذه الشروط والأحكام استخدامك لنظام خدمات النقل للركاب. يرجى قراءة الشروط التالية بعناية قبل استخدام النظام. استخدام النظام يعني القبول الكامل لهذه الشروط.",
          "registration": {
            "title": "تسجيل المستخدم والمعلومات",
            "1_1": "يجب على المستخدمين إدخال معلومات هويتهم الكاملة والدقيقة أثناء التسجيل. المستخدمون مسؤولون عن دقة المعلومات المدخلة.",
            "1_2": "أي استخدام لمعلومات أو وثائق أشخاص آخرين دون إذن قانوني ممنوع ويعتبر مخالفة."
          },
          "booking": {
            "title": "حجز وتذاكر السفر",
            "2_1": "حجز وتذاكر السفر ممكن فقط من خلال النظام الرسمي للشركة والممثلين المعتمدين.",
            "2_2": "تغيير أو إلغاء الرحلة يخضع لسياسة الإلغاء الخاصة بالشركة كما هو مذكور في قسم 'سياسة الاسترداد' في النظام.",
            "2_3": "تختلف أسعار التذاكر حسب نوع المركبة، المسار، التاريخ والسعة، وتحدد وفقًا للوائح الشركة."
          },
          "responsibilities": {
            "title": "مسؤوليات المستخدمين (الركاب)",
            "3_1": "يجب على الركاب الحضور إلى نقطة المغادرة في الوقت المحدد؛ وإلا فإن الشركة لن تتحمل مسؤولية التأخيرات أو إلغاء الرحلة.",
            "3_2": "يحظر حمل أي مواد محظورة أو خطيرة أو غير قانونية، وسيكون الركاب مسؤولين بشكل كامل عن أي مخالفات.",
            "3_3": "الحفاظ على النظام، الآداب الاجتماعية، النظافة الشخصية واحترام الركاب الآخرين والسائقين أثناء الرحلة إلزامي."
          },
          "acceptance": "الدخول إلى النظام واستخدام خدماته يعني أن المستخدم قد قرأ وفهم وقبل جميع الشروط المذكورة أعلاه.",
          "images": {
            "about": "معلومات عنا",
            "story": "قصتنا",
            "mission": "مهمتنا"
          }
        },
        cancelpage: {
          paymentResult: 'نتيجة الدفع',
          paymentFailed: 'فشل في الدفع',
          paymentFailedMessage: 'للأسف، واجهت عملية الدفع مشكلة.',
          homePage: 'الصفحة الرئيسية'
        },
        success: {
          paymentResult: 'نتيجة الدفع',
          paymentSuccess: 'تم الدفع بنجاح!',
          orderRegistered: 'تم تسجيل طلبك بنجاح.',
          trackingCode: 'كود التتبع'
        },
        "fareBreakdown": {
          "ticketPrice": "سعر التذكرة",
          "ticketCounts": "عدد التذاكر",
          "endPrice": "السعر النهائي",
          "rial": "ريال"
        },
            "ticket": {
    "passengers": "الركاب",
    "seatNumber": "رقم المقعد",
     "noTickets": 'لم يتم العثور على تذاكر حافلة',
    "reservationNumber": "رقم الحجز",
    "ticketNumber": "رقم التذكرة",
    "unknownCompany": "شركة غير معروفة",
    "unknownCarType": "نوع غير معروف",
    "unknownCity": "مدينة غير معروفة",
    "noPassengers": "لا يوجد ركاب",
    "downloadPdf": "تحميل PDF",
     "Tickets":"تذاكر",
    "sendEmail": "إرسال بالبريد",
    "status": {
      "reserved": "محجوز",
      "cancelled": "ملغى",
      "completed": "مكتمل",
      "unknown": "غير معروف"
    }
  },
  "common": {
    "currency": "ريال",
    "backToList": "العودة إلى القائمة"
  },
   "terms1": {
    "accept": "أوافق على الشروط والأحكام",
    "title": "الشروط والأحكام",
    "content": "يجب أن تكون معلومات المسافرين دقيقة ومطابقة للوثائق الرسمية.\nيتحمل المشتري المسؤولية عن أي أخطاء في المعلومات المدخلة.\nفي حالة الإلغاء، يتم استرداد المبلغ وفقًا لشروط شركة النقل.\nالتذاكر المشتراة غير قابلة للتحويل إلى أشخاص آخرين.\nيرجى الحضور إلى الموقع قبل 30 دقيقة على الأقل من موعد المغادرة.\nيُطلب تقديم بطاقة هوية سارية المفعول أثناء السفر.\nفي حالة تغيير خطط السفر، يُرجى الاتصال بدعم العملاء.\nيُحظر نقل الحيوانات الأليفة."
  },
  "validation1": {
    "termsRequired": "يجب عليك قبول الشروط والأحكام"
  },
  "buttons1": {
    "more": "المزيد",
    "payment": "الدفع",
    "close": "إغلاق",
    "view": "عرض",
    "bookNow": "احجز الآن",
    "confirm": "تأكيد",
    "cancel": "إلغاء",
    "back": "رجوع",
    "next": "التالي",
    "search": "بحث",
    "select": "اختيار",
    "continue": "متابعة",
    "submit": "إرسال"
  },
    notfound:{
      title: 'قريباً سيكون هذا القسم نشطاً',
      description: 'يرجى الانتظار لإطلاق هذه الصفحة',
      button: 'اذهب إلى الصفحة الرئيسية'
  }

      }
    },
    pa: {
      translation: {
        about: {
          storyTitle: "زموږ کیسه",
          storyContent: "د پارتو سیر ایرانی نړیواله شرکت په ۱۹۹۷ کې تاسیس شوی او د نړیوال مسافر لیږد خدماتو کې له ۲۷ کلونو څخه زیات تجربه لري. د مدیر عامل ناصر کلانتاري په مشرۍ، موږ یو نوی پارک لرو چې ۳۰ بسونه، ۲۴ وینونه او ۵۴ ښاري موټرونه پکې شامل دي.",
          storyImageAlt: "زموږ د شرکت تاریخ",
          networkTitle: "زموږ شبکه",
          networkContent1: "په ساري، مشهد، قم، اهواز، زاهدان، تایباد، زابل، چابهار، رشت، تهران او ایلام کې د څانګو سره، موږ لاندې مهم نړیوال لارې خدمت کوو:",
          route1: "مشهد-هرات / تایباد-هرات",
          route2: "زابل-کندهار / زاهدان-نیمروز",
          route3: "زاهدان-کویټه / چابهار-کراچي",
          route4: "اهواز-بصره / قم-نجف",
          route5: "ساري-نجف / رشت-نجف",
          networkImageAlt: "زموږ د لیږد شبکه",
          achievementsTitle: "زموږ لاسته راوړنې",
          achievementsContent1: "موږ د ترکمنستان، عراق او افغانستان سره قوي د لیږد شراکتونه جوړ کړي دي. په اربعین کې، موږ د حاجیانو لپاره د غوره لیږد خدماتو وړاندې کوونکی بلل شوي یو، چې ځانګړي پارکونه او مسلکي چلوونکي وړاندې کوو.",
          achievementsContent2: "د کورني وړتیاو او سیمه ایزو اړیکو پر بنسټ، موږ په لیږد، سیاحت او مسافر خدماتو کې د پایدار پراختیا لپاره ژمن یو، د ایران د ۲۰۲۵ لیدلوري په لور کار کوو چې یو سیمه ایز سیاحتي مرکز وي.",
          achievementsImageAlt: "زموږ لاسته راوړنې"
        },
        busSchedule: {
          days: {
            saturday: "شنبه",
            sunday: "یکشنبه",
            monday: "دوشنبه",
            tuesday: "سه‌شنبه",
            wednesday: "چهارشنبه",
            thursday: "پنجشنبه",
            friday: "جمعه"
          },
          noResults: "د بس جدول شتون نلري",
          seatsLeft: "پاتې څوکي",
          price: "قیمت",
          time: "د تګ وخت",
          bookNow: "اوس رزرو کړئ"
        },
        navbar: {
          home: "کور",
          about: "زموږ په اړه",
          stations: "سټیشنونه",
          loginWithGoogle: "د ګوګل په واسطه ننوتل",
          greeting: "سلام ",
          profile: "پروفایل",
          logout: "وتل",
          login: "ننوتل",
          user: "کارن",
          changeLanguage: "ژبه بدلول",
          logoutError: "وتل کې ناکام شو. بیا هڅه وکړئ"
        },
        mapList: {
          title: 'د څانګو معلومات',
          address: 'پته:',
          phone: 'تلیفون:',
          manager: 'مدیر:',
          mapUnavailable: 'نقشه اوس مهال شتون نلري',
          viewOnNeshan: '(په نشان کې وګورئ)',
          branch: '',
          toggleLanguage: 'فارسی',
          branches: {
            Taybad: 'تایباد',
            Zabol: 'زابل',
            Qom: 'قم',
            Sari: 'ساري',
            Ilam: 'ایلام',
            Ahvaz: 'اهواز',
            Mashhad: 'مشهد',
            Chabahar: 'چابهار'
          },
          addresses: {
            Taybad: 'د تایباد ټرمینل، بوټ ۱',
            Zabol: 'زابل، د رستم میدان، د ټرمینل بوټ ۱۳',
            Qom: 'د قم ټرمینل، د کوثر ټرمینل، د سوداګریز اتحادیې تر څنګ',
            Sari: 'د دولت مسافر ټرمینل، د دفاع مقدس بولوار',
            Ilam: 'ایلام، د چالسرا شهدا بولوار، د ایلام د ښاروالۍ د شهدا مسافر ټرمینل',
            Ahvaz: 'اهواز، د سیاحت ټرمینل، دوهم پوړ',
            Mashhad: 'مشهد، د امام رضا ټرمینل تر څنګ، د امام رضا ۶۹ کونج',
            Chabahar: 'د چابهار مرکزي ولسوالۍ، د چابهار مسافر ټرمینل'
          },
          managers: {
            Taybad: 'ښاغلی بهروز یزداني',
            Zabol: 'ښاغلی رجب اکبري',
            Qom: 'ښاغلی نزار ابولسان',
            Sari: 'ښاغلی ناصر کلانتري',
            Ilam: 'ښاغلی ماشاءالله رحمتي',
            Ahvaz: 'ښاغلی حسین کلانتري',
            Mashhad: 'ښاغلی ناصر کلانتري',
            Chabahar: 'ښځه بهناز یزداني'
          }
        },
        search: {
          source: 'سرچینه',
          destination: 'منزل',
          date: 'نېټه',
          searchButton: 'لټون',
          alertMessage: 'مهرباني وکړئ ټول توکي وټاکئ',
          transportType: 'ډول',
          bus: 'بس',
          taxi: 'ټکسي',
          van: 'وین',
          cargo: 'بار'
        },
        contact: {
          title: 'موږ سره اړیکه',
          help: {
            title: 'ژوندۍ خبرې اترې او مرستې مرکز',
            detail1: 'د یوې اوریدونکې پوښتنې لپاره ګړۍ ځواب غواړئ؟',
            detail2: 'زموږ د مرستې مرکز ته د FAQs لپاره مراجعه وکړئ یا د ژوندي استازي سره ورسره خبرې وکړئ.'
          },
          phone: {
            title: 'موبایل او وٹساپ',
            label: 'تلیفون'
          },
          email: {
            title: 'موږ ته بریښنالیک واستوئ'
          }
        },
        login: {
          phoneLabel: 'د تلیفون شمېره',
          submitButton: 'سپارل',
          codeLabel: 'د تایید کوډ',
          modalTitle: 'مهرباني وکړئ ستاسو تلیفون ته لیږل شوی کوډ دننه کړئ',
          verifying: 'د تایید کولو...',
          resendButton: 'کوډ بیا واستوئ',
          resendCountdown: 'په {{count}} ثانیو کې بیا واستوئ',
          codeEmptyAlert: 'د تایید کوډ اړین دی',
          title: 'ننوتل'
        },
        buttons: {
          more: 'نور',
          payment: 'تادیه'
        },
        booking: {
          title: 'د رزرو تفصیلات'
        },
        labels: {
          company: 'شرکت',
          details: 'تفصیلات',
          busFront: 'د بس مخ'
        },
        passenger: {
          title: 'مسافر',
          name: 'نوم',
          family: 'تخلص',
          mobile: 'د موبایل شمېره',
          birthday: 'د زیږون نېټه (کال/میاشت/ورځ)',
          nationalCode: 'ملي کوډ',
          male: 'نارینه',
          female: 'ښځینه'
        },
        validation: {
          nameRequired: 'نوم اړین دی',
          minName: 'د نوم لږترلږه 3 توري',
          familyRequired: 'تخلص اړین دی',
          minFamily: 'د تخلص لږترلږه 3 توري',
          mobileRequired: 'د موبایل شمېره اړینه ده',
          minMobile: 'د موبایل لږترلږه 11 شمېرې',
          birthdayRequired: 'د زیږون نېټه اړینه ده',
          nationalCodeRequired: 'ملي کوډ اړین دی',
          minPassenger: 'لږترلږه یو مسافر اړین دی'
        },
        seat: {
          male: 'سړی',
          female: 'ښځه'
        },
        busDetails: {
          source: "سرچینه",
          destination: "منزل",
          dateTime: "نېټه او وخت",
          type: "ډول",
          sourceIconAlt: "د سرچینې نښه",
          destinationIconAlt: "د منزل نښه",
          arrowIconAlt: "د غشي نښه",
          scheduleIconAlt: "د جدول نښه",
          facilitiesIconAlt: "د اسانتیاو نښه"
        },
        busTicket: {
          currency: "ریال",
          seatsLeft: "{{count}} پاتې څوکي",
          busIconAlt: "د بس نښه"
        },
        footer: {
          usefulLinks: "مفید لینکونه",
          aboutUs: "زموږ په اړه",
          privacyPolicy: "د محرمیت تګلاره",
          termsConditions: "شرایط او ضوابط",
          support: "ملاتړ",
          refundPolicy: "د بیرته ورکولو تګلاره",
          contactUs: "موږ سره اړیکه",
          copyright: " partoseir.com - ویب پاڼه د لخوا ډیزاین شوی ",
          logoAlt: "د شرکت نښه",
          frameAlt: "د شرکت فریم"
        },
        home: {
          advertise: "اعلان",
          ad1Title: "اعلان ۱",
          ad2Title: "اعلان ۲",
          ad1Alt: "د لومړي اعلان انځور",
          ad2Alt: "د دوهم اعلان انځور"
        },
      "profile": {
      "name": "نوم",
      "family": "تخلص",
      "mobile": "د موبایل شمیره",
      "email": "بریښنالیک",
      "profileImageAlt": "د پروفایل انځور",
      "profileDetails": "د پروفایل جزئیات",
      "noName": "نوم نه دی ورکړ شوی",
      "noMobile": "د موبایل شمیره نه ده ورکړ شوی",
      "noEmail": "بریښنالیک نه دی ورکړ شوی",
      "upcoming": "راتلونکی",
      "completed": "بشپړ شوی",
      "filters": {
        "lastWeek": "تیره اونۍ",
        "lastMonth": "تیره میاشت",
        "last3Months": "وروستۍ ۳ میاشتې",
        "last6Months": "وروستۍ ۶ میاشتې"
      },
      "changeEmail": "بریښنالیک بدلول",
      "emailPlaceholder": "خپل بریښنالیک دننه کړئ",
      "areYouSure": "آیا تاسې ډاډه یاست؟",
      "cancel": "لغوه کول",
      "logout": "وتل",
      "changeName": "نوم بدلول",
      "namePlaceholder": "خپل نوم دننه کړئ",
      "changeLastName": "تخلص بدلول",
      "lastNamePlaceholder": "خپل تخلص دننه کړئ",
      "saving": "ثبیږي...",
      "save": "خوندي کول",
      "validationError": "مهرباني وکړئ ټول اړین ساحې ډک کړئ",
      "profileUpdateSuccess": "پروفایل په بریالیتوب سره تازه شو",
      "profileUpdateError": "په پروفایل کې تازه کولو کې ناکامي"
    }
        ,
        navbar2: {
          "travelServices": "د سفر خدمات",
          "busTicket": "د بس تکت",
          "TaxiTicket": "د ټاکسي تکت",
          "VanTicket": "د وین تکت",
          "Cargo": "بار وړل"
        },

        "terms": {
          "title": "شرایط او ضوابط",
          "introduction": "دا شرایط او ضوابط د مسافر حمل و نقل د خدمت سیسټم د کارولو لپاره دي. مهرباني وکړئ د سیسټم د کارولو دمخه لاندې شرایط په دقت سره ولولئ. د سیسټم کارول د دې شرایطو د بشپړ منلو په معنی دي.",
          "registration": {
            "title": "د کارونکي ثبت او معلومات",
            "1_1": "کارونکي اړ دي چې د ثبت په وخت کې خپل بشپړ او دقیق هویتي معلومات داخل کړي. د داخل شوي معلوماتو د صحت مسؤلیت د کارونکي پر غاړه دی.",
            "1_2": "د بل چا د معلوماتو یا اسنادو هر ډول کارول د قانوني اجازې پرته منع دي او د تخلف په توګه ګڼل کیږي."
          },
          "booking": {
            "title": "د ټکټ رزرو او پیرود",
            "2_1": "د ټکټ رزرو او پیرود یوازې د شرکت د رسمي سیسټم او مجاز استازو له لارې ممکن دی.",
            "2_2": "د سفر بدلون یا لغوه کول د شرکت د لغوه کولو پالیسي تابع دي چې د سیسټم د 'د بیرته ورکړې پالیسي' برخه کې اعلان شوي دي.",
            "2_3": "د ټکټ نرخونه د موټر ډول، لار، نیټه او ظرفیت په اساس توپیر لري او د شرکت د مقرراتو مطابق ټاکل کیږي."
          },
          "responsibilities": {
            "title": "د کارونکو (مسافرو) مسؤلیتونه",
            "3_1": "مسافر اړ دي چې په ټاکل شوي وخت کې د حرکت په ځای کې حاضر شي؛ که نه نو شرکت به د وروستي یا د سفر د نه ترسره کیدو مسؤلیت ونه لري.",
            "3_2": "د هر ډول منع شوي، خطرناک یا غیرقانوني توکو لیږد منع دی او په دې صورت کې مسؤلیت مستقیم د مسافر پر غاړه دی.",
            "3_3": "د سفر په جریان کې د نظم، ټولنیزو اصولو، شخصي صفایي او د نورو مسافرو او چلوونکو درناوي ساتل اړین دي."
          },
          "acceptance": "د سیسټم ته ننوتل او د هغه د خدمتونو کارول په دې معنی دي چې کارونکي ټول پورتنۍ شرایط لوستلي، پوه شوي او منلي دي.",
          "images": {
            "about": "زموږ په اړه",
            "story": "زموږ کیسه",
            "mission": "زموږ ماموریت"
          }
        },
        cancelpage: {
          paymentResult: 'د پیسو د ورکړې پایله',
          paymentFailed: 'پیسې ورکړه ناکامه شوه',
          paymentFailedMessage: 'له بده مرغه، ستاسو د پیسو د ورکړې په بهیر کې یوه ستونزه رامنځته شوه.',
          homePage: 'اصلی پاڼه'
        },
        success: {
          paymentResult: 'د پیسو د ورکړې پایله',
          paymentSuccess: 'پیسې په بریالیتوب سره ورکړل شوې!',
          orderRegistered: 'ستاسو امر په بریالیتوب سره ثبت شو.',
          trackingCode: 'د تعقیب کوډ'
        },
        "fareBreakdown": {
          "ticketPrice": "د تکت بیه",
          "ticketCounts": "د تکت شمېر",
          "endPrice": "ختم بیه",
          "rial": "ریال"
        },
  "ticket": {
    "passengers": "مسافرین",
    "seatNumber": "د سیټ شمیره",
      "noTickets": 'د بس ټکټ ونه موندل شو',
    "reservationNumber": "د ریزرو شمیره",
    "ticketNumber": "د ټکټ شمیره",
    "unknownCompany": "نامعلوم شرکت",
    "unknownCarType": "نامعلوم ډول",
    "unknownCity": "نامعلوم ښار",
    "noPassengers": "هیڅ مسافر نشته",
    "downloadPdf": "PDF ډاونلوډ کړئ",
    "sendEmail": "په ایمیل واستوئ",
    "Tickets":"تکټونه",
    "status": {
      "reserved": "ریزرو شوی",
      "cancelled": "لغوه شوی",
      "completed": "بشپړ شوی",
      "unknown": "نامعلوم"
    }
  },
  "common": {
    "currency": "افغانی",
    "backToList": "لیست ته راستنیدل"
  },
   "terms1": {
    "accept": "زه د شرطونو او شرایطو سره موافق یم",
    "title": "شرایط او شرایط",
    "content": "د مسافرو معلومات باید دقیق او د شناسايي اسنادو سره مطابقت ولري.\nد داخل شوو معلوماتو کومه تېروتنه په پیرودونکي پورې تړل کیږي.\nپه لغوه کېدو کی، پیسې د ترانسپورټ شرکت په شرایطو سره بیرته راکول کیږي.\nاخیستل شوي ټکټونه بل چا ته لیږدولای نشي.\nمهرباني وکړئ تر حرکت ۳۰ دقیقې وړاندې په ځای کې حاضر اوسئ.\nد سفر په وخت کې معتبر شناسايي کارت ارائه اړین دی.\nکه ستاسو د سفر پلان بدل شي، مهرباني وکړئ د ملاتړ سره اړیکه ونیسئ.\nد کورنيو حیواناتو انتقال منع دی."
  },
  "validation1": {
    "termsRequired": "تاسو باید شرایط ومنئ"
  },
   "buttons1": {
    "more": "نور",
    "payment": "تادیه",
    "close": "بندول",
    "view": "لیدل",
    "bookNow": "اوس رزرو کړئ",
    "confirm": "تایید",
    "cancel": "لغوه کول",
    "back": "بیرته",
    "next": "بل",
    "search": "پلټل",
    "select": "ټاکل",
    "continue": "ادامه",
    "submit": "سپارل"
  },
   notfound:{
      title: 'ډیر ژر به دا برخه فعاله شي',
      description: 'مهرباني وکړئ د دې پاڼې د پرانیستلو لپاره انتظار وکړئ',
      button: 'کور ته لاړ شه'
  }

      }
    }
  },
  lng: "fa", // زبان پیش‌فرض
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;