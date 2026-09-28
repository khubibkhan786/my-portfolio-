import {Project} from '../types';

export const projects: Project[] = [
  {
    id: 'lemunz-azkar',
    title: 'لمونځ او اذکار',
    shortDescription: 'A comprehensive Android application for prayer times and Islamic supplications.',
    fullDescription: 'A dedicated Android application designed to help users track prayer times, recite daily azkar (supplications), and maintain their spiritual journey with a clean and intuitive interface.',
    category: 'Android Application',
    technologies: ['Java', 'Android SDK', 'SQLite', 'XML'],
    image: '/src/assets/images/project_prayer_app_1790485013658.jpg',
    year: '2025',
    status: 'Completed',
    featured: true,
    platformBadge: 'Android',
    storeBadge: 'Offline-First APK',
    features: [
      'Accurate prayer time calculations',
      'Daily azkar collection',
      'Offline access',
      'Customizable notifications'
    ],
    problem: 'Users in areas with intermittent internet connectivity needed a reliable, distraction-free tool for accurate prayer schedules and authentic daily supplications without persistent ad tracking.',
    solution: 'Engineered an offline-first native Android app with local SQLite storage for instant daily azkar lookup, calculated astronomical prayer timetables, and battery-friendly notifications.',
    role: 'Android Developer',
    translations: {
      ps: {
        title: 'لمونځ او اذکار',
        category: 'انډروایډ اپلیکیشن',
        shortDescription: 'د لمانځه د وختونو او مسنونو اذکارو لپاره جامع او افلاین انډروایډ اپلیکیشن.',
        fullDescription: 'یو مسلکي او افلاین انډروایډ کاریال چې په کې د لمانځه دقیق وختونه، سهاري او ماښامني اذکار او تسبیحات په پاکه او ښکلې بڼه راټول شوي دي.',
        features: [
          'د لمانځه د وختونو دقیق حساب',
          'د ورځنیو اذکارو ټولګه',
          'بشپړ افلاین کارېدنه',
          'شخصي شوي خبرتیاوې (Notifications)'
        ],
        problem: 'هغه کاروونکي چې پرله پسې انټرنېټ نه لري، یو باوري او له اعلاناتو پاک وسیلې ته اړتیا درلوده چې هر وخت ورته لمونځ او اذکار چمتو کړي.',
        solution: 'په نیټیف جاوا او SQLite کې داسې اپلیکیشن جوړ شو چې پرته له انټرنېټ په چټکۍ کار کوي او د بېټرۍ لږ مصرف لري.'
      },
      fa: {
        title: 'نماز و اذکار',
        category: 'اپلیکیشن اندروید',
        shortDescription: 'اپلیکیشن جامع و آفلاین اندروید برای اوقات نماز و اذکار روزانه.',
        fullDescription: 'یک برنامه استاندارد اندروید برای دسترسی به اوقات دقیق شرعی نماز، ادعیه و اذکار مسنون با رابط کاربری روان و به دور از هرگونه تبلیغات.',
        features: [
          'محاسبه دقیق اوقات شرعی نماز',
          'مجموعه اذکار صبح و شام',
          'دسترسی کاملاً آفلاین',
          'اعلان‌ها و یادآوری‌های قابل تنظیم'
        ],
        problem: 'نیاز به یک ابزار معتبر و سبک جهت پیگیری دقیق عبادات روزانه بدون نیاز به اتصال دائمی به اینترنت و بدون مزاحمت تبلیغات.',
        solution: 'توسعه اپلیکیشن بومی با دیتابیس محلی SQLite جهت دسترسی لحظه‌ای و مصرف حداقلی شارژ باتری.'
      }
    }
  },
  {
    id: 'weather-app',
    title: 'د هوا حالاتو',
    shortDescription: 'A real-time weather tracking application providing accurate forecasts.',
    fullDescription: 'A modern weather application that provides real-time updates, multi-day forecasts, and detailed atmospheric data for various locations.',
    category: 'Weather Application',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
    image: '/src/assets/images/project_weather_app_1790485024344.jpg',
    year: '2025',
    status: 'Completed',
    featured: true,
    platformBadge: 'Web App',
    storeBadge: 'Live Service',
    features: [
      'Real-time weather updates',
      '5-day forecast',
      'Location-based tracking',
      'Dynamic weather backgrounds'
    ],
    problem: 'Visualizing regional climate and multi-day forecasts in a clean, high-speed interface with minimal network payload.',
    solution: 'Built an asynchronous frontend parsing meteorological endpoints, rendering condition-adaptive backgrounds, hourly atmospheric conditions, and responsive 5-day trends.',
    role: 'Frontend Developer',
    translations: {
      ps: {
        title: 'د هوا حالاتو څارونکی',
        category: 'وېب اپلیکیشن',
        shortDescription: 'د هوا د حالاتو ژوندی او کره وړاندوینه کوونکی چټک وېب اپلیکیشن.',
        fullDescription: 'یو عصري وېب کاریال چې د سیمې د هوا دقیق معلومات، پنځه ورځنۍ وړاندوینه او موسمي بدلونونه په زړه پورې ډیزاین کې ښیي.',
        features: [
          'د هوا د حالاتو ژوندي معلومات',
          'پنځه ورځنۍ وړاندوینه',
          'د موقعیت له مخې پلټنه',
          'د هوا له حال سره بدلېدونکی شالید'
        ],
        problem: 'د هوا معلومات اکثره په درنو او پېچلو وېبپاڼو کې وي چې په ضعیف انټرنېټ کې ورو پرانیستل کېږي.',
        solution: 'د سپکو APIs او چټک جاواسکریپټ په مرسته داسې مخپاڼه جوړه شوه چې په ټیټ انټرنېټ هم په ثانیو کې کره معلومات وړاندې کوي.'
      },
      fa: {
        title: 'سامانه وضعیت آب و هوا',
        category: 'وب اپلیکیشن',
        shortDescription: 'سامانه آنلاین و سریع پیش‌بینی وضعیت جوی و هواشناسی.',
        fullDescription: 'یک وب‌اپلیکیشن واکنش‌گرا برای ارائه آخرین اطلاعات جوی، پیش‌بینی پنج‌روزه و نمایش تغییرات دما با انیمیشن‌های مناسب.',
        features: [
          'بروزرسانی زنده وضعیت هوا',
          'پیش‌بینی ۵ روز آینده',
          'جستجوی بر اساس مکان',
          'پس‌زمینه متغیر با شرایط جوی'
        ],
        problem: 'دسترسی سریع به وضعیت آب‌وهوا بدون صفحات سنگین و تبلیغاتی.',
        solution: 'پیاده‌سازی فرانت‌اند سبک با پردازش داده‌های آب‌وهوا و سازگار با انواع مرورگرها.'
      }
    }
  },
  {
    id: 'student-portal-hub',
    title: 'Student Academic Portal & Schedule Hub',
    shortDescription: 'A responsive digital web dashboard designed to organize course syllabi, assignments, and study materials.',
    fullDescription: 'A lightweight and practical student web application built with modern frontend tools to help university peers organize lecture notes, track semester deadlines, and coordinate course schedules.',
    category: 'Web Application',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage'],
    year: '2025',
    status: 'Completed',
    featured: false,
    platformBadge: 'Web Platform',
    storeBadge: 'Client-Side App',
    features: [
      'Interactive semester calendar & deadline tracker',
      'Course resource & lecture note repository',
      'Instant search and tag filtering',
      'Local storage persistence with zero backend overhead'
    ],
    problem: 'University students frequently lose track of scattered assignment dates, disparate slide decks, and semester milestones across different chat groups.',
    solution: 'Created a unified client-side dashboard with fast local browser persistence, calendar countdowns, category filters, and zero authentication friction.',
    role: 'Full-Stack Student Builder',
    translations: {
      ps: {
        title: 'د محصلینو تحصیلي پورټل او تقسیم اوقات',
        category: 'وېب کاریال',
        shortDescription: 'د پوهنتون د محصلینو لپاره د لکچرونو، کورنیو دندو او تاریخونو د تنظیم سیستم.',
        fullDescription: 'یو ګټور وېب ډشبورډ چې محصلینو ته مرسته کوي د خپلو مضمونونو مواد، د ازموینو نېټې او مهالوېش په یو منظم ځای کې وساتي.',
        features: [
          'د سمستر انټراکټیف کلیزه او د ضرب‌الاجل یادوونکی',
          'د مضمونونو او نوټونو ذخیره',
          'فوري پلټنه او فلټرینګ',
          'په براوزر کې د معلوماتو خوندي ساتل'
        ],
        problem: 'محصلین اکثره په ټیلیګرام او واټساپ ګروپونو کې د سلایډونو او ازموینو نېټې ورکوي.',
        solution: 'د React او TypeScript په واسطه یو مرکزي ډشبورډ جوړ شو چې ټول اسناد په چټکۍ او په منظمه بڼه وړاندې کوي.'
      },
      fa: {
        title: 'پورتال آکادمیک و مدیریت تقویم دانشجویی',
        category: 'وب اپلیکیشن',
        shortDescription: 'سامانه مدیریت تکالیف، جزوات و تقویم درسی دانشجویان.',
        fullDescription: 'یک پورتال سبک و سریع طراحی‌شده با فناوری‌های مدرن وب جهت سازماندهی منابع درسی و پیگیری زمان‌بندی امتحانات دانشگاهی.',
        features: [
          'تقویم تعاملی ترم و پیگیری مهلت تکالیف',
          'مخزن دسته‌بندی‌شده اسلایدها و جزوات',
          'جستجوی سریع و فیلتر بر اساس عنوان درس',
          'ذخیره‌سازی سریع در حافظه مرورگر'
        ],
        problem: 'پراکندگی فایل‌ها و اطلاعیه‌های مهم درسی میان پیام‌رسان‌های مختلف دانشگاهی.',
        solution: 'طراحی رابط کاربری یکپارچه با ری‌اکت بدون نیاز به سرور و با لود آنی اطلاعات.'
      }
    }
  },
  {
    id: 'workflow-automation-toolkit',
    title: 'AI-Assisted Workflow Automation Toolkit',
    shortDescription: 'Practical automation utility scripts leveraging modern AI tools to streamline repetitive digital tasks.',
    fullDescription: 'A collection of focused JavaScript automation tools and prompt templates designed to parse raw educational transcripts, auto-generate study flashcards, and format data exports efficiently.',
    category: 'Automation & Tools',
    technologies: ['JavaScript', 'Node.js', 'AI API Integration', 'JSON'],
    year: '2026',
    status: 'In Progress',
    featured: false,
    platformBadge: 'CLI & Tools',
    storeBadge: 'Active Scripts',
    features: [
      'Automated text summaries of lecture transcripts',
      'Batch conversion of structured notes into flashcard format',
      'CLI utilities for fast repetitive file organization',
      'API-driven content synthesis'
    ],
    problem: 'Processing lengthy educational transcripts and converting raw technical notes into structured study summaries was manual and time-consuming.',
    solution: 'Designed scripted CLI pipelines combining Node.js stream parsers with structured AI prompts to batch-convert unformatted notes into clean JSON flashcards.',
    role: 'Automation Developer',
    translations: {
      ps: {
        title: 'د کاري جریان د اتومات کولو وسیلې',
        category: 'اتومات وسایل',
        shortDescription: 'د مصنوعي هوښیارتیا په مرسته د تکراري کارونو د چټکولو سکرېپټونه.',
        fullDescription: 'د Node.js او AI پراساس داسې وسایل چې اوږده متون په فلش کارتونو او خلاصو بدلوي او تکراري فایلونه تنظیموي.',
        features: [
          'د اوږدو لکچرونو اتومات لنډیز',
          'د نوټونو بدلول د ازموینې په پوښتنو او فلش کارتونو',
          'د کمانډ لاین چټکې ګټورې وسیلې',
          'د ډېټا منظم جوړښت'
        ],
        problem: 'د درسي موادو لاس لیکل او خلاصه کول ډېر زیات وخت ضایع کوي.',
        solution: 'د سکرېپټونو جوړول چې متن په اوتومات ډول واخلي او په څو ثانیو کې جوړښت ورته برابر کړي.'
      },
      fa: {
        title: 'مجموعه ابزارهای خودکارسازی با هوش مصنوعی',
        category: 'اتوماسیون و اسکریپت',
        shortDescription: 'ابزارهای کاربردی جهت تسریع پردازش متون و تبدیل یادداشت‌ها.',
        fullDescription: 'مجموعه‌ای از اسکریپت‌های کاربردی تحت Node.js برای خلاصه کردن رونوشت درس‌ها و تولید خودکار کارت‌های مرور.',
        features: [
          'خلاصه‌سازی خودکار متون علمی',
          'تبدیل یادداشت‌ها به فرمت فلش‌کارت',
          'اسکریپت‌های خط فرمان برای سازماندهی فایل‌ها',
          'خروجی ساختارمند با JSON'
        ],
        problem: 'زمان‌بر بودن تبدیل دست‌نویس‌ها و متن‌های طولانی به خلاصه درس‌های ساختارمند.',
        solution: 'اتوماسیون استخراج نکات کلیدی با استفاده از هوش مصنوعی و اسکریپت‌نویسی دقیق.'
      }
    }
  },
  {
    id: 'islamic-companion',
    title: 'Islamic Companion',
    shortDescription: 'Modern offline-first Android application designed for spiritual mindfulness and daily supplications.',
    fullDescription: 'An offline-first Android application built with Kotlin, focusing on performance, elegant typography, verified supplications, and local device autonomy without tracking.',
    category: 'Android Application',
    technologies: ['Kotlin', 'Android Jetpack', 'Room Database', 'Material 3'],
    year: '2026',
    status: 'In Progress',
    featured: true,
    platformBadge: 'Android',
    storeBadge: 'In Development',
    features: [
      'Offline-first Room database architecture',
      'Clean typography and verified azkar catalog',
      'Low battery consumption background alarms',
      'Material 3 design system'
    ],
    problem: 'Many spiritual apps are encumbered with intrusive advertising, battery-draining telemetry, and broken offline access.',
    solution: 'Developing an intentional, clean Kotlin application powered by local Room persistence and lightweight Material 3 components.',
    role: 'Android Developer',
    translations: {
      ps: {
        title: 'اسلامي ملګری (Islamic Companion)',
        category: 'انډروایډ اپلیکیشن',
        shortDescription: 'یو مدرن، له اعلاناتو پاک او په بشپړ ډول افلاین انډروایډ اپلیکیشن.',
        fullDescription: 'د کوټلین او روم ډېټابېس په مرسته یو معیاري اپلیکیشن چې د لمونځونو اذان، مسنونه اذکار او اسلامي لارښوونې په افلاین ډول وړاندې کوي.',
        features: [
          'د Room ډېټابېس افلاین معمارۍ',
          'ښکلی او کره پښتو او عربي خط',
          'د بېټرۍ کم مصرف د شالید الارمونو کې',
          'د Material 3 عصري ډیزاین'
        ],
        problem: 'ډېری دیني اپلیکیشنونه اعلانونه لري یا انټرنېټ ته اړتیا لري چې کاروونکي تنګوي.',
        solution: 'په کوټلین کې داسې جوړښت رامنځته کول چې سل په سلو کې افلاین، پاک او بې خطره وي.'
      },
      fa: {
        title: 'همراه اسلامی (Islamic Companion)',
        category: 'اپلیکیشن اندروید',
        shortDescription: 'اپلیکیشن مدرن و آفلاین اندروید با تمرکز بر ادعیه و اوقات شرعی.',
        fullDescription: 'برنامه اختصاصی توسعه‌یافته با کاتلین و معماری مدرن اندروید، بدون تبلیغات و با حفظ کامل حریم خصوصی کاربر.',
        features: [
          'معماری پایگاه داده محلی Room',
          'فونت‌های زیبا و متن‌های بازبینی‌شده ادعیه',
          'مصرف باتری بسیار پایین برای هشدارهای اذان',
          'طراحی طبق استانداردهای Material 3'
        ],
        problem: 'وجود تبلیغات نامناسب و دسترسی‌های ناامن در برنامه‌های مذهبی موجود.',
        solution: 'توسعه اختصاصی با کاتلین و پایگاه داده محلی مستقل جهت استقلال کامل از سرورهای خارجی.'
      }
    }
  }
];
