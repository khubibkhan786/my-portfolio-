import {Project} from '../types';

export const projects: Project[] = [
  {
    id: 'lemunz-azkar',
    title: 'لمونځ او اذکار',
    shortDescription: 'A practical Islamic Android application focused on prayer times, Adhkar, Tasbih, Duas, Qibla, and offline usability.',
    fullDescription: 'A practical Islamic Android application built with Kotlin, focused on accurate prayer times, daily Adhkar, Tasbih counter, Duas, and Qibla direction. The project emphasizes offline usability, lightweight performance, clean typography, and a simple user experience without unnecessary background tracking.',
    category: 'Android Application',
    filterCategories: ['Mobile'],
    technologies: ['Kotlin', 'Android SDK', 'SQLite', 'Room Database', 'XML'],
    image: '/src/assets/images/project_prayer_app_1790485013658.jpg',
    year: '2025',
    status: 'Completed',
    featured: true,
    platformBadge: 'Android',
    storeBadge: 'Offline-First APK',
    features: [
      'Accurate prayer times calculations',
      'Daily Adhkar, Tasbih & Duas catalog',
      'Qibla direction compass indicator',
      '100% offline usability with local SQLite / Room storage'
    ],
    problem: 'Users need a reliable, distraction-free tool for daily prayers and authentic supplications that works seamlessly offline without ad intrusions or heavy battery drain.',
    solution: 'Built an offline-first Android application in Kotlin using local SQLite/Room database storage for instant lookup and minimal resource consumption.',
    role: 'Android Developer',
    translations: {
      ps: {
        title: 'لمونځ او اذکار',
        category: 'انډروایډ کاریال',
        shortDescription: 'د لمانځه د وختونو، مسنونو اذکارو، تسبېح او قبلې ښودلو لپاره عملي او افلاین انډروایډ کاریال.',
        fullDescription: 'یو عملي او افلاین انډروایډ کاریال چې په کوټلین کې جوړ شوی، د لمانځه دقیق وختونه، سهاري او ماښامني اذکار، تسبېح، مسنونې دعاګانې او قبله په سپک او ساده ډیزاین کې وړاندې کوي.',
        features: [
          'د لمانځه د وختونو دقیق حساب',
          'د ورځنیو اذکارو او تسبېح ټولګه',
          'د قبلې لوری ښودونکی',
          'بشپړ افلاین کارېدنه په Room / SQLite کې'
        ],
        problem: 'کاروونکي یو داسې باوري، سپک او له اعلاناتو پاک وسیلې ته اړتیا لري چې په بشپړ ډول افلاین کار وکړي او بېټرۍ کمه مصرف کړي.',
        solution: 'په کوټلین او محلي ډېټابېس کې داسې اپلیکیشن جوړ شو چې له انټرنېټ پرته په چټکۍ کار کوي او کارول یې ډېر اسانه دي.'
      },
      fa: {
        title: 'نماز و اذکار',
        category: 'اپلیکیشن اندروید',
        shortDescription: 'اپلیکیشن کاربردی و آفلاین اندروید برای اوقات شرعی، اذکار، تسبیح، ادعیه و قبله‌نما.',
        fullDescription: 'یک برنامه کاربردی و آفلاین اندروید توسعه‌یافته با کاتلین، متمرکز بر اوقات دقیق شرعی، اذکار روزانه، شمارشگر تسبیح، ادعیه و جهت قبله با رابط کاربری ساده، سبک و بدون تبلیغات مزاحم.',
        features: [
          'محاسبه دقیق اوقات شرعی نماز',
          'مجموعه اذکار، ادعیه و تسبیح‌شمار',
          'قبله‌نمای دقیق و سبک',
          'عملکرد کاملاً آفلاین با پایگاه داده Room / SQLite'
        ],
        problem: 'نیاز به یک ابزار مذهبی معتبر، سبک و آرام‌بخش جهت پیگیری فرایض روزانه بدون اتصال اینترنت و بدون ردیابی و تبلیغات.',
        solution: 'پیاده‌سازی بومی با کاتلین و پایگاه داده محلی جهت دسترسی لحظه‌ای و مصرف بهینه باتری دستگاه.'
      }
    }
  },
  {
    id: 'weather-app',
    title: 'د هوا حالاتو',
    shortDescription: 'A responsive real-time weather tracking application providing accurate regional forecasts.',
    fullDescription: 'A responsive web application that provides real-time updates, multi-day forecasts, and atmospheric condition data for various locations with lightweight network usage.',
    category: 'Web Application',
    filterCategories: ['Web'],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
    image: '/src/assets/images/project_weather_app_1790485024344.jpg',
    year: '2025',
    status: 'Completed',
    featured: true,
    platformBadge: 'Web App',
    storeBadge: 'Live Service',
    features: [
      'Real-time weather data fetching',
      '5-day forecast overview',
      'Location-based search',
      'Dynamic condition-adaptive styling'
    ],
    problem: 'Visualizing regional climate and multi-day forecasts in a clean, high-speed interface with minimal network payload.',
    solution: 'Built an asynchronous frontend parsing meteorological endpoints, rendering condition-adaptive visuals, and responsive 5-day trends.',
    role: 'Frontend Developer',
    translations: {
      ps: {
        title: 'د هوا حالاتو څارونکی',
        category: 'وېب کاریال',
        shortDescription: 'د سیمې د هوا حالاتو ژوندی او کره وړاندوینه کوونکی چټک وېب کاریال.',
        fullDescription: 'یو عصري وېب کاریال چې د سیمې د هوا دقیق معلومات، پنځه ورځنۍ وړاندوینه او موسمي بدلونونه په زړه پورې او سپک ډیزاین کې ښیي.',
        features: [
          'د هوا د حالاتو ژوندي معلومات',
          'پنځه ورځنۍ وړاندوینه',
          'د موقعیت له مخې پلټنه',
          'د هوا له حال سره بدلېدونکی شالید'
        ],
        problem: 'د هوا معلومات اکثره په درنو وېبپاڼو کې وي چې په ضعیف انټرنېټ کې ورو پرانیستل کېږي.',
        solution: 'د سپکو APIs او چټک جاواسکریپټ په مرسته داسې مخپاڼه جوړه شوه چې په ټیټ انټرنېټ هم په ثانیو کې کره معلومات وړاندې کوي.'
      },
      fa: {
        title: 'سامانه وضعیت آب و هوا',
        category: 'وب اپلیکیشن',
        shortDescription: 'سامانه آنلاین و سریع پیش‌بینی وضعیت جوی و هواشناسی.',
        fullDescription: 'یک وب‌اپلیکیشن واکنش‌گرا برای ارائه آخرین اطلاعات جوی، پیش‌بینی پنج‌روزه و نمایش تغییرات دما با سرعت بالا و حجم کم.',
        features: [
          'بروزرسانی زنده وضعیت هوا',
          'پیش‌بینی ۵ روز آینده',
          'جستجوی بر اساس مکان',
          'پس‌زمینه متغیر با شرایط جوی'
        ],
        problem: 'دسترسی سریع به وضعیت آب‌وهوا بدون صفحات سنگین و کند اینترنتی.',
        solution: 'پیاده‌سازی فرانت‌اند سبک با پردازش داده‌های آب‌وهوا و سازگار با انواع مرورگرها.'
      }
    }
  },
  {
    id: 'student-portal-hub',
    title: 'Student Academic Portal & Schedule Hub',
    shortDescription: 'A responsive digital web dashboard designed to organize course syllabi, assignments, and study schedules.',
    fullDescription: 'A lightweight and practical student web application prototype built with modern frontend tools to help university peers organize lecture notes, track semester deadlines, and coordinate course schedules.',
    category: 'Web Application',
    filterCategories: ['Web'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage'],
    year: '2025',
    status: 'In Progress',
    featured: false,
    platformBadge: 'Web Prototype',
    storeBadge: 'Prototype',
    features: [
      'Interactive semester calendar & deadline tracker',
      'Course resource & lecture note repository',
      'Instant search and tag filtering',
      'Local storage persistence with zero backend overhead'
    ],
    problem: 'University students frequently lose track of scattered assignment dates, disparate slide decks, and semester milestones across different chat groups.',
    solution: 'Created a unified client-side dashboard with fast local browser persistence, calendar countdowns, category filters, and clean responsive layout.',
    role: 'Student Developer',
    translations: {
      ps: {
        title: 'د محصلینو تحصیلي پورټل او تقسیم اوقات',
        category: 'وېب کاریال (پروټوټایپ)',
        shortDescription: 'د پوهنتون د محصلینو لپاره د لکچرونو، کورنیو دندو او تاریخونو د تنظیم سیستم.',
        fullDescription: 'یو ګټور وېب ډشبورډ چې محصلینو ته مرسته کوي د خپلو مضمونونو مواد، د ازموینو نېټې او مهالوېش په یو منظم ځای کې وساتي.',
        features: [
          'د سمستر انټراکټیف کلیزه او د ضرب‌الاجل یادوونکی',
          'د مضمونونو او نوټونو ذخیره',
          'فوري پلټنه او فلټرینګ',
          'په براوزر کې د معلوماتو خوندي ساتل'
        ],
        problem: 'محصلین اکثره په ګروپونو کې د سلایډونو او ازموینو نېټې ورکوي.',
        solution: 'د React او TypeScript په واسطه یو مرکزي ډشبورډ جوړ شو چې ټول اسناد په چټکۍ او په منظمه بڼه وړاندې کوي.'
      },
      fa: {
        title: 'پورتال آکادمیک و مدیریت تقویم دانشجویی',
        category: 'وب اپلیکیشن (نمونه اولیه)',
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
    category: 'Automation Tool',
    filterCategories: ['Automation', 'AI'],
    technologies: ['JavaScript', 'Node.js', 'AI API Integration', 'JSON'],
    year: '2026',
    status: 'In Progress',
    featured: false,
    platformBadge: 'CLI & Tools',
    storeBadge: 'In Development',
    features: [
      'Automated text summaries of lecture transcripts',
      'Batch conversion of structured notes into flashcard format',
      'CLI utilities for fast repetitive file organization',
      'API-driven content synthesis'
    ],
    problem: 'Processing lengthy educational transcripts and converting raw technical notes into structured study summaries was manual and time-consuming.',
    solution: 'Designed scripted CLI pipelines combining Node.js stream parsers with structured AI prompts to batch-convert unformatted notes into clean JSON flashcards.',
    role: 'Student Developer',
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
    id: 'smart-study-extractor',
    title: 'AI Exam Prep & Lecture Digest Engine',
    shortDescription: 'An automated academic prototype synthesizing course transcripts into structured review flashcards and test quizzes.',
    fullDescription: 'An academic study prototype connecting web interfaces with structured AI prompts to process computer science lecture notes into high-retention study flashcards, summary checkpoints, and self-test assessments.',
    category: 'Web / AI Prototype',
    filterCategories: ['AI', 'Web'],
    technologies: ['Python', 'React', 'TypeScript', 'AI API Integration', 'Tailwind CSS'],
    year: '2026',
    status: 'In Progress',
    featured: true,
    platformBadge: 'Web & AI',
    storeBadge: 'Concept',
    features: [
      'Automated transcript analysis and topic summarization',
      'Dynamic flashcard deck generation with review intervals',
      'Instant markdown and structured JSON export',
      'Bilingual learning support for technical terminology'
    ],
    problem: 'Computer Science students face information overload when digesting lengthy technical lectures and extensive slide decks before university exams.',
    solution: 'Designed an automated parsing prototype transforming course texts into bite-sized concept cards with interactive test prompts.',
    role: 'Student Developer',
    translations: {
      ps: {
        title: 'د AI تحصیلي لنډیز او چمتووالي سیستم',
        category: 'وېب او مصنوعي هوښیارتیا',
        shortDescription: 'د درسي لکچرونو د اتومات لنډیز او د ازموینې د پوښتنو جوړولو لومړنۍ طرحه.',
        fullDescription: 'یو عصري وېب پروټوټایپ چې د مصنوعي هوښیارتیا په مرسته اوږده تخنیکي درسي متون شننه کوي او د زده کړې فلش کارتونه ترې راباسي.',
        features: [
          'د اوږدو لکچرونو اتومات شننه او لنډیز',
          'د ازموینې لپاره د فلش کارتونو تولید',
          'په Markdown او JSON بڼه د ډېټا اسانه صادرول',
          'د تخنیکي اصطلاحاتو مرسته'
        ],
        problem: 'د پوهنتون د ازموینو پر مهال د سلګونو پاڼو سلایډونو لوستل ډېر وخت نیسي.',
        solution: 'د عصري AI او وېب ټکنالوژیو په مرسته داسې پروټوټایپ جوړ شو چې له درسي موادو څخه مهم ټکي بېلوي.'
      },
      fa: {
        title: 'موتور خلاصه‌سازی درسی و آمادگی آزمون',
        category: 'وب و هوش مصنوعی',
        shortDescription: 'طرح اولیه سامانه تبدیل جزوات درسی به کارت‌های مرور و آزمونک‌ها.',
        fullDescription: 'یک سامانه مبتنی بر وب که با به‌کارگیری هوش مصنوعی، متون کتاب‌های درسی را به سرفصل‌های کلیدی و فلش‌کارت‌های مرور تبدیل می‌کند.',
        features: [
          'تحلیل و خلاصه‌سازی هوشمند جلسات درسی',
          'تولید کارت‌های مرور مفاهیم کلیدی',
          'خروجی سریع به فرمت‌های استاندارد Markdown و JSON',
          'پشتیبانی از اصطلاحات تخصصی کامپیوتر'
        ],
        problem: 'حجم بالای اسلایدهای درسی پیش از امتحانات دانشگاهی و دشواری استخراج نکات کلیدی.',
        solution: 'طراحی خط پردازش اولیه مبتنی بر وب برای استخراج خودکار چکیده درس‌ها.'
      }
    }
  },
  {
    id: 'academic-sync-cli',
    title: 'Academic Data Sync & Backup Utility',
    shortDescription: 'A lightweight automation tool for syncing course schedules, organizing lecture files, and managing database backups.',
    fullDescription: 'A practical utility script designed to automate university coursework file synchronization, organize semester materials, and maintain local SQLite database backups with clean CLI reporting.',
    category: 'Automation Tool',
    filterCategories: ['Automation'],
    technologies: ['Python', 'SQLite', 'JSON', 'Bash'],
    year: '2026',
    status: 'In Progress',
    featured: false,
    platformBadge: 'CLI Script',
    storeBadge: 'Prototype',
    features: [
      'Automated semester coursework and syllabus directory indexing',
      'Local SQLite database backup verification and dump scripts',
      'Cross-platform file organization and duplicate cleanup',
      'Configurable JSON-driven schedule sync'
    ],
    problem: 'Managing semester files, database lecture dumps, and course project repositories manually across different folders leads to scattered copies and accidental data loss.',
    solution: 'Built a lightweight automated Python and Bash utility that syncs coursework directories, dumps SQLite databases, and generates structured JSON file manifests.',
    role: 'Student Developer',
    translations: {
      ps: {
        title: 'د پوهنتوني فایلونو او ډېټابېس بیکپ اتومات وسایل',
        category: 'اتومات وسایل',
        shortDescription: 'د پوهنتوني موادو، مهالوېش او محلي ډېټابېسونو د اتومات بیکپ او فایلونو د تنظیم وسیله.',
        fullDescription: 'د Python او Bash پر بنسټ یو عملي اتومات سکرېپټ چې د سمستر درسي فایلونه، نوټونه او د SQLite ډېټابېس محلي نسخې په منظمه توګه خوندي او همغږي کوي.',
        features: [
          'د سمستر د درسونو او فایلونو اتومات تنظیم',
          'د SQLite ډېټابېس منظم بیکپ او کتنه',
          'د تکراري فایلونو پاکول',
          'د JSON له لارې د مهالوېش چټک بدلون'
        ],
        problem: 'د درسونو، ډېټابېسونو او اسنادو په لاس ساتل ډېر وخت نیسي او کله ناکله مواد ورکېږي.',
        solution: 'د سپکو اتومات سکرېپټونو په جوړولو سره دا بهیر اتومات شو چې هر ماښام د موادو نسخه په منظم ډول خوندي کوي.'
      },
      fa: {
        title: 'ابزار خودکارسازی همگام‌سازی و پشتیبان‌گیری درسی',
        category: 'ابزار خودکارسازی',
        shortDescription: 'اسکریپت کاربردی جهت سازماندهی جزوات، تقویم درسی و تهیه نسخه پشتیبان از دیتابیس‌های محلی.',
        fullDescription: 'یک اسکریپت خودکارسازی سبک با پایتون و بش برای پشتیبان‌گیری منظم از پایگاه داده‌های درسی SQLite، دسته‌بندی جزوات ترم و سازماندهی فایل‌ها.',
        features: [
          'فهرست‌بندی خودکار فایل‌ها و جزوات درسی ترم',
          'پشتیبان‌گیری خودکار از دیتابیس‌های تمرینی SQLite',
          'پاکسازی فایل‌های تکراری و بهینه‌سازی فضا',
          'پیکربندی ساده و انعطاف‌پذیر با فرمت JSON'
        ],
        problem: 'پراکندگی فایل‌های درسی و ریسک از دست رفتن تمرین‌های دیتابیس در طول ترم تحصیلی.',
        solution: 'ایجاد اسکریپت سبک خودکارسازی جهت یکپارچه‌سازی و تهیه نسخه پشتیبان در کمترین زمان.'
      }
    }
  }
];
