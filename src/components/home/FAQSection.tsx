import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  HelpOutline as HelpIcon,
  QuestionMark as QuestionIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const FAQSection = () => {
  const { t } = useTranslation();

  const faqItems = [
    {
      id: 1,
      question: 'آیا خرید بلیط اتوبوس برای کودکان و اطفال زیر ۲ سال الزامی است؟',
      answer: 'قیمت بلیط اتوبوس برای کودکان زیر دو سال، در صورتی که صندلی‌ به آن‌ها تعلق نگیرد رایگان است. اگر کودک به استفاده از صندلی نیاز داشته باشد، باید هزینه کامل بلیط اتوبوس را برایش پرداخت کنید تا صندلی متعلق به خودتان باشد.'
    },
    {
      id: 2,
      question: 'نحوه رزرو بلیط اتوبوس در پرتو سیر چگونه است؟',
      answer: 'برای خرید اینترنتی بلیط اتوبوس در وب‌سایت یا اپلیکیشن پرتو سیر (بخش بلیط اتوبوس) مبدا، مقصد، تاریخ حرکت و تعداد بلیط خود را انتخاب می‌کنید. سپس می‌توانید بلیط‌های موجود را در تاریخ مدنظرتان ببینید و با کارت بانکی و رمز دوم، بلیط دلخواهتان را بخرید.'
    },
    {
      id: 3,
      question: 'استعلام بلیط اتوبوس پرتو سیر چگونه است؟',
      answer: 'برای استعلام بلیط اتوبوس، کافی است به وب‌سایت یا اپلیکیشن پرتو سیر بروید و بعد از مشخص‌کردن مبدا و مقصد، لیست کامل اتوبوس‌های شرکت‌های مختلف را ببینید.'
    },
    {
      id: 4,
      question: 'آیا بعد از خرید بلیط اتوبوس امکان تعویض صندلی وجود دارد؟',
      answer: 'خیر. بعد از خرید بلیط اتوبوس، امکان تعویض صندلی وجود ندارد.'
    },
    {
      id: 5,
      question: 'آیا می‌توانم اطلاعات بلیط اتوبوس خریداری‌شده را ویرایش کنم؟',
      answer: 'خیر. بعد از خرید بلیط اتوبوس، امکان ویرایش اطلاعات آن وجود ندارد. درصورت نیاز، باید بلیط خود را استرداد کنید و بلیط جدیدی با اطلاعات جدید تهیه کنید. طبیعی است که طبق قوانین، استرداد بلیط اتوبوس با درصدی جریمه همراه است (گاهی تا 100 درصد جریمه).'
    },
    {
      id: 6,
      question: 'در صورت اشتباه در خرید آنلاین بلیط اتوبوس چکار کنیم؟',
      answer: 'در خرید آنلاین بلیط اتوبوس اگر اشتباهات در حد ایرادات ساده نگارشی باشد، می‌توانید این موضوع را با تعاونی مطرح کنید. اگر هم خطا در انتخاب مسیر باشد، باید بلیط خودتان را استرداد کنید و بلیط بخرید. طبق قوانین، استرداد بلیط اتوبوس با درصدی جریمه همراه است.'
    },
    {
      id: 7,
      question: 'چطور مطمئن شوم خرید بلیط اتوبوس با موفقیت انجام شده؟',
      answer: 'اگر خرید بلیط اتوبوس با موفقیت انجام شود، یک پیامک از پرتو سیر برای شما ارسال خواهد شد. در این پیامک شماره سفارش شما، اطلاعات اتوبوس وجود دارد.'
    },
    {
      id: 8,
      question: 'آیا قیمت بلیط اتوبوس در خرید اینترنتی با خرید حضوری فرق می‌کند؟',
      answer: 'خیر. قیمت بلیط اتوبوس در خرید اینترنتی و حضوری تفاوتی ندارد؛ اما توجه داشته باشید که خرید اینترنتی بلیط اتوبوس سریع‌ترین راه خرید بلیط است. در هر زمان از شبانه‌روز امکان دسترسی به تمام بلیط‌ها در پرتو سیر وجود دارد. علاوه بر این، در خرید اینترنتی بلیط اتوبوس در پرتو سیر، امکان جانمایی صندلی هم وجود دارد.'
    },
    {
      id: 9,
      question: 'امکان حمل حیوانات خانگی در داخل اتوبوس وجود دارد؟',
      answer: 'طبق قوانین سازمان حمل‌ونقل امکان حمل حیوانات در اتوبوس وجود ندارد.'
    },
    {
      id: 10,
      question: 'مدارک مورد نیاز برای استفاده از اتوبوس چیست؟',
      answer: 'به همراه داشتن کارت شناسایی معتبر (کارت ملی یا شناسنامه) برای دریافت بلیط الزامی است.'
    },
    {
      id: 11,
      question: 'جهت سوار شدن به اتوبوس چه مدت قبل از حرکت در ترمینال حضور داشته باشیم؟',
      answer: 'در صورتی که حرکت سرویس در ساعت مقرر انجام گردد مسافر می بایست حداکثر 30 دقیقه قبل حرکت سرویس در ترمینال مبدا حضور داشته باشد.'
    },
    {
      id: 12,
      question: 'میزان بار مجاز هر مسافر در سفر با اتوبوس چقدر است؟',
      answer: 'طبق قوانین سازمان حمل‌ونقل میزان بار مجاز 20 کیلوگرم است. البته برخی از تعاونی‌ها با دریافت هزینه، امکان حمل بار تا 40 کیلوگرم را نیز ارائه می‌دهند. همچنین یکی دیگر از مسائلی که در این زمینه باید مد نظر قرار بدهید، تعاونی اتوبوس شماست. معمولا تعاونی ها، علاوه بر قوانین کلی میزان بار مجاز، قوانین خاص خودشان را دارند که در بعضی موارد، با قوانین تعاونی های دیگر فرق می‌کند. برای این که از میزان بار مجازتان مطمئن شوید و در حین سفر به مشکل برنخورید، به تعاونی که از آن بلیط تهیه کرده‌اید زنگ زده و از آن‌ها سوال کنید. به این موضوع هم دقت کنید که اگر میزان بار اضافه شما بیش از حد باشد، متصدی اتوبوس ممکن است از گذاشتن آن‌ها در اتوبوس ممانعت کند. در این نوع مواقع می‌توانید در این مورد صحبت کنید که هزینه میزان بار اضافه‌تان را پرداخت کنید تا بتوانید همه وسیله‌هایتان را با خودتان حمل کنید.'
    },
    {
      id: 13,
      question: 'قوانین مربوط به ون و تاکسی',
      answer: 'برای مشاهده قوانین و مقررات مربوط به سفر با ون و تاکسی، لطفاً به صفحه قوانین و مقررات مراجعه کنید.'
    }
  ];

  return (
    <Box sx={{ py: 5, mb: 5 }} className="commonQuestions">
      <Container>
        <Paper elevation={0} sx={{ py: 5, mb: 4 }}>
          {/* Header */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 4 
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <HelpIcon sx={{ fontSize: 32, color: 'primary.main' }} />
              <Typography variant="h5" fontWeight="bold">
                {t('homepage.home.faq')}
              </Typography>
            </Box>
            <Typography variant="h5" color="text.secondary">
              FAQ's
            </Typography>
          </Box>

          {/* FAQ Accordions */}
          <Paper elevation={1} sx={{ borderRadius: 2, overflow: 'hidden' }}>
            {faqItems.map((item, index) => (
              <Accordion 
                key={item.id}
                sx={{
                  '&:before': {
                    display: 'none',
                  },
                  borderBottom: index !== faqItems.length - 1 ? 1 : 0,
                  borderColor: 'divider',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: 'background.default',
                    minHeight: 80,
                    '& .MuiAccordionSummary-content': {
                      alignItems: 'center',
                      gap: 2
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      backgroundColor: 'secondary.light',
                      borderRadius: 1,
                      color: 'secondary.main'
                    }}
                  >
                    <QuestionIcon />
                  </Box>
                  <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: 'grey.50' }}>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    sx={{ lineHeight: 1.8 }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Paper>
        </Paper>
      </Container>
    </Box>
  );
};

export default FAQSection;