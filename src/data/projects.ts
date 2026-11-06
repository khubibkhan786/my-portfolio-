import {Project} from '../types';
import zwakWeatherBanner from '../assets/images/zwak_weather_banner.png';
import hidayatLarBanner from '../assets/images/hidayat_lar_banner.png';

export const projects: Project[] = [
  {
    id: 'zwak-weather',
    title: 'Zwak Weather',
    shortDescription: 'A multilingual weather application offering forecasts, radar, agricultural insights, air quality, and weather news.',
    fullDescription: 'Zwak Weather is a modern, high-precision Android weather application engineered by AGZ Labs. It delivers accurate meteorological forecasts, interactive radar maps, specialized agricultural indicators (Zarghoona Hawa), air quality monitoring, and climate news across four languages (Pashto, Dari, Arabic, and English). Built natively with Kotlin and Jetpack Compose, it features smart GPS location detection and Room Database local caching for reliable access to previously retrieved forecasts.',
    category: 'Android Application',
    filterCategories: ['Mobile'],
    technologies: ['Kotlin', 'Jetpack Compose', 'Android'],
    image: zwakWeatherBanner,
    year: '2025',
    status: 'Completed',
    featured: true,
    hasDedicatedPage: true,
    platformBadge: 'Android Application',
    storeBadge: 'AGZ Labs · v2.5.0',
    featureHighlights: [
      'Real-Time Weather & 7-Day Forecasts',
      'Interactive Weather Radar & Air Quality',
      'Agricultural Intelligence (Zarghoona Hawa)',
      'Four-Language Native Support'
    ],
    productVision: 'To provide a dependable, unified, and accessible meteorological platform tailored for everyday commuters, families, and agricultural communities.',
    designAndPlanning: 'Designed a high-clarity Jetpack Compose UI with native Pashto, Dari, Arabic, and English typography, dynamic atmospheric condition styling, interactive radar maps, and a specialized Zarghoona Hawa agricultural view.',
    architecture: 'Clean modern Android architecture with Jetpack Compose declarative UI, asynchronous weather data ingestion, and Room Database local caching for reliable continuity.',
    features: [
      'Real-Time Weather & Forecasts',
      'Smart GPS Location',
      'Interactive Weather Radar',
      'Agricultural Intelligence',
      'Severe Weather Alerts',
      'Air Quality Monitoring',
      'Climate & Weather News',
      'Four-Language Support',
      'Dark & Light Themes'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Fragmented Weather Information: Weather forecasts, radar, air quality, and environmental information are spread across different services.',
        solution: 'Multiple weather information sources consolidated into one intuitive application.'
      },
      {
        challenge: 'Limited Agricultural Insights: General weather applications often lack practical agricultural indicators such as evapotranspiration, soil moisture, and spraying conditions.',
        solution: 'Agricultural calculations and crop insights integrated directly into daily planning.'
      },
      {
        challenge: 'Complex Weather Data: Meteorological information can be difficult for ordinary people to understand and use in daily decisions.',
        solution: 'Understandable weather visualizations and clear hourly and 7-day forecast curves.'
      },
      {
        challenge: 'Severe Weather Preparedness: Understanding and preparing for heatwaves, frost, strong winds, dust storms, and potential flooding is a significant challenge.',
        solution: 'Severe weather alerts and proactive warnings for extreme conditions.'
      }
    ],
    developerContribution: 'Conceived product architecture at AGZ Labs, designed UI in Jetpack Compose, integrated REST weather endpoints, built Room Database local caching layers, implemented multilingual RTL/LTR typography, and engineered the Zarghoona Hawa agricultural module.',
    role: 'Lead Android Developer & UI/UX Designer',
    translations: {
      ps: {
        title: 'ځواک ویدر (Zwak Weather)',
        category: 'د انډروایډ کاریال',
        shortDescription: 'د هوا حالاتو څو ژبنی کاریال چې د هوا وړاندوینې، رادار، کرنیز معلومات، د هوا کیفیت او تازه خبرونه وړاندې کوي.',
        fullDescription: 'ځواک ویدر د AGZ Labs لخوا جوړ شوی یو پرمختللی انډروایډ کاریال دی چې په څلورو ژبو (پښتو، دري، عربي او انګلیسي) د هوا ژوندي حالات، د ۷ ورځو وړاندوینه، انټراکټیف رادار، کرنیز معلومات (زرغونه هوا)، د هوا کیفیت او اقلیمي خبرونه وړاندې کوي.',
        productVision: 'ټولو هېوادوالو، مسافرو او کروندګرو ته په روښانه ژبه او لوړ دقت د باوري او یو موټي اقلیمي معلوماتو وړاندې کول.',
        featureHighlights: [
          'د هوا ژوندی حالت او ۷ ورځنۍ وړاندوینه',
          'انټراکټیف رادار او د هوا کیفیت',
          'کرنیز معلومات (زرغونه هوا)',
          'په څلورو ژبو بشپړ ملاتړ'
        ],
        features: [
          'د هوا ژوندی حالت او وړاندوینې (Real-Time Weather & Forecasts)',
          'د GPS سمارټ موقعیت موندنه (Smart GPS Location)',
          'انټراکټیف اقلیمي رادار (Interactive Weather Radar)',
          'کرنیز معلومات او پوهه (Agricultural Intelligence)',
          'د سختې هوا بېړنۍ خبرتیاوې (Severe Weather Alerts)',
          'د هوا د کیفیت څارنه (Air Quality Monitoring)',
          'د اقلیم او هوا تازه خبرونه (Climate & Weather News)',
          'په څلورو ژبو بشپړ ملاتړ (Four-Language Support)',
          'د ورځې او شپې بڼې (Dark & Light Themes)'
        ]
      },
      fa: {
        title: 'زواک ویدر (Zwak Weather)',
        category: 'اپلیکیشن اندروید',
        shortDescription: 'اپلیکیشن چندزبانه هواشناسی شامل پیش‌بینی وضع هوا، رادار، بینش‌های زراعتی، کیفیت هوا و اخبار جوی.',
        fullDescription: 'زواک ویدر اپلیکیشن پیشرفته هواشناسی اندروید از AGZ Labs است که با کاتلین و Jetpack Compose توسعه یافته و اطلاعات دقیق جوی، رادار تعاملی، توصیه‌های زراعتی (زرغونه هوا)، پایش کیفیت هوا و اخبار اقلیمی را به چهار زبان ارائه می‌دهد.',
        productVision: 'تسهیل دسترسی عموم مردم، مسافران و کشاورزان به اطلاعات اقلیمی یکپارچه و بومی‌سازی‌شده با بالاترین دقت و زبان مادری.',
        featureHighlights: [
          'پیش‌بینی زنده جوی و ۷ روزه',
          'رادار تعاملی و کیفیت هوا',
          'بینش‌های زراعتی (زرغونه هوا)',
          'پشتیبانی از چهار زبان'
        ],
        features: [
          'پیش‌بینی زنده جوی و پیش‌بینی وضع هوا',
          'مکان‌یابی هوشمند با GPS',
          'رادار تعاملی هواشناسی',
          'بینش‌های زراعتی و شاخص‌های کشت',
          'هشدارهای فوری شرایط نامساعد جوی',
          'پایش شاخص کیفیت هوا (AQI)',
          'اخبار و مقالات آب و هوا',
          'پشتیبانی از چهار زبان',
          'تم‌های بهینه تاریک و روشن'
        ]
      }
    }
  },
  {
    id: 'hidayat-lar',
    title: 'Hidayat Lar — Islamic Companion & AI Assistant',
    shortDescription: 'A smart native Android companion combining astronomical prayer times, Qibla compass, Adhkar, Duas, nearby mosque locator, and an Islamic AI Assistant.',
    fullDescription: 'Hidayat Lar (هدایت لار) is an advanced native Android application developed by AGZ Labs to serve as an intelligent, lifelong Islamic companion. Engineered with high-precision astronomical prayer calculation algorithms, a hardware sensor-based Qibla compass, an authentic digital Tasbih with haptic feedback, a comprehensive catalog of Duas and Hadith, a GPS-driven nearby mosques locator, and an Islamic AI Assistant to answer religious and fiqh inquiries. Available in four languages (Pashto, Dari, Arabic, and English), it emphasizes 100% offline usability for essential worship tools with zero ads and complete privacy.',
    category: 'Android Application',
    filterCategories: ['Mobile', 'AI'],
    technologies: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Room Database', 'GPS & Sensors', 'Islamic AI Assistant'],
    image: hidayatLarBanner,
    year: '2025',
    status: 'Completed',
    featured: true,
    hasDedicatedPage: true,
    platformBadge: 'Native Android',
    storeBadge: 'AGZ Labs · v2.0',
    featureHighlights: [
      'Astronomical Prayer Times & Auto Location',
      'Islamic AI Assistant for Religious Inquiries',
      'Precision Sensor-Based Qibla Compass',
      'Digital Tasbih, Authentic Adhkar & Duas',
      'Nearby Mosques & Jumats GPS Locator',
      'Four Languages (Pashto, Dari, Arabic, English)'
    ],
    productVision: 'To provide Muslims worldwide with a dependable, dignified, and technologically refined digital companion that enriches daily worship, offers instant religious guidance, and functions seamlessly without constant connectivity.',
    designAndPlanning: 'Crafted a serene, distraction-free Jetpack Compose user interface featuring authentic Islamic motifs, balanced RTL/LTR typography for Arabic, Pashto, Dari, and English, smooth haptic micro-interactions for the digital Tasbih counter, and an ergonomic bottom navigation layout.',
    architecture: 'Offline-first native Android architecture leveraging Kotlin and Jetpack Compose. Utilizes Room Database for sub-millisecond local retrieval of prayer tables, Azkar, and Duas, hardware azimuth sensor fusion for the Qibla compass, and asynchronous dispatching for the Islamic AI Assistant.',
    features: [
      'Accurate astronomical prayer times calculation with auto GPS location',
      'Real-time countdown timer to next prayer and congregation guidance',
      'Islamic AI Assistant providing instant answers to religious questions',
      'Sensor-driven high-precision Qibla direction compass',
      'Digital Tasbih counter with haptic vibration feedback and lap targets',
      'Authentic morning, evening, and after-prayer Adhkar collections',
      'Extensive catalog of authentic Duas from the Holy Quran and Hadith',
      'Nearby Mosques & Jumats finder with real-time walking distance',
      'Four-language interface (Pashto, Dari, Arabic, and English)',
      'Optimized Dark and Light themes with zero advertisements'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Delivering accurate prayer calculations and authentic texts in remote areas without internet access.',
        solution: 'Embedded pre-indexed astronomical calculation algorithms and comprehensive religious texts inside a local Room/SQLite database for 100% offline availability.'
      },
      {
        challenge: 'Integrating an intelligent AI Assistant while maintaining rapid response times and preserving offline reliability.',
        solution: 'Decoupled offline worship features from the online AI assistant, ensuring all core daily tools remain instant and available even without a network.'
      },
      {
        challenge: 'Managing mixed bi-directional scripts (Arabic Quranic verses, Pashto/Dari text, and English technical terms) cleanly on diverse screen sizes.',
        solution: 'Implemented strict Unicode bidirectional isolation (dir="ltr" / dir="rtl") and custom typographic scales to prevent awkward character wrapping.'
      }
    ],
    developerContribution: 'Conceived product architecture at AGZ Labs, designed the UI/UX in Jetpack Compose, built the local Room database schema, developed sensor fusion algorithms for the Qibla compass, integrated the Islamic AI Assistant module, and verified RTL localization.',
    role: 'Lead Android Developer & UI/UX Designer',
    translations: {
      ps: {
        title: 'هدایت لار (Hidayat Lar)',
        category: 'د انډروایډ بومي کاریال',
        shortDescription: 'د لمانځه دقیق وختونه، د قبلې کمپاس، مسنون اذکار، تسبېح، نږدې جوماتونه او اسلامي AI مرستیال.',
        fullDescription: 'هدایت لار د AGZ Labs لخوا جوړ شوی یو پرمختللی انډروایډ کاریال دی چې د اسلامي ژوند د لارښوونې لپاره ډیزاین شوی. دا کاریال د لمانځه دقیق فلکي وختونه، د قبلې کمپاس، ډیجیټل تسبېح، مسنون اذکار او دعاګانې، د نږدې جوماتونو موندنه او د دیني پوښتنو لپاره اسلامي AI مرستیال په څلورو ژبو (پښتو، دري، عربي او انګلیسي) وړاندې کوي.',
        productVision: 'ټولو مسلمانانو ته د یو داسې باوري، ښکلي او ګټور ملګري وړاندې کول چې عبادت اسانه کړي، پوښتنو ته ځواب ووایي او سل په سلو کې د کاروونکي محرمیت وساتي.',
        featureHighlights: [
          'د لمانځه دقیق وختونه او د قبلې کمپاس',
          'د دیني پوښتنو لپاره اسلامي AI مرستیال',
          'ډیجیټل تسبېح او مسنون اذکار او دعاګانې',
          'د نږدې جوماتونو موندونکی (GPS)',
          'په څلورو ژبو (پښتو، دري، عربي، انګلیسي) ملاتړ'
        ],
        features: [
          'د لمانځه دقیق فلکي وختونه او د راتلونکي لمانځه پاتې وخت',
          'د دیني او فقهي پوښتنو لپاره اسلامي AI مرستیال (Islamic AI Assistant)',
          'د موبایل د سنسرونو پر مټ د قبلې دقیق لوری (Qibla Compass)',
          'ډیجیټل تسبېح د وایبریشن او غږیز غبرګون سره (Tasbih & Adhkar)',
          'سهاري، ماښامني او له لمانځه وروسته مستند اذکار او مسنونې دعاګانې',
          'د قران او احادیثو څخه د غوره دعاګانو ټولګه (Duas & Hadith)',
          'د نږدې جوماتونو او جمعو موندنه د GPS له لارې (Nearby Mosques)',
          'په څلورو ژبو بشپړ ملاتړ (پښتو، دري، عربي او انګلیسي)',
          'سل په سلو کې افلاین کارېدنه د عباداتو او اذکارو لپاره',
          'د ورځې او شپې تمونه پرته له اعلاناتو او اضافي مصارفو'
        ]
      },
      fa: {
        title: 'هدایت لار (Hidayat Lar)',
        category: 'اپلیکیشن بومی اندروید',
        shortDescription: 'اوقات شرعی نجومی، قبله‌نما، اذکار و ادعیه، تسبیح هوشمند، مکان‌یاب مساجد و دستیار هوش مصنوعی اسلامی.',
        fullDescription: 'هدایت لار یک اپلیکیشن بومی و پیشرفته اندروید از AGZ Labs است که به عنوان همراه جامع سبک زندگی اسلامی عمل می‌کند. این برنامه با امکاناتی نظیر اوقات شرعی دقیق، قبله‌نمای سنسوری، تسبیح دیجیتال با لرزش، گنجینه ادعیه مأثوره، مکان‌یابی مساجد اطراف و دستیار هوش مصنوعی پاسخگوی مسائل شرعی به چهار زبان عرضه شده است.',
        productVision: 'ارائه ابزاری معتبر، زیبا و امن برای تسهیل عبادات روزانه و پاسخ به نیازهای دینی با بهره‌گیری از هوش مصنوعی و کارکرد آفلاین.',
        featureHighlights: [
          'اوقات شرعی نجومی و قبله‌نما',
          'دستیار هوش مصنوعی برای مسائل دینی',
          'تسبیح دیجیتال و گنجینه اذکار و ادعیه',
          'مکان‌یاب مساجد با GPS',
          'پشتیبانی کامل از چهار زبان'
        ],
        features: [
          'محاسبه دقیق اوقات شرعی و شمارش معکوس تا نماز بعدی',
          'دستیار هوش مصنوعی اسلامی برای پاسخگویی به سوالات دینی و فقهی',
          'قبله‌نمای دقیق مبتنی بر سنسورهای سخت‌افزاری دستگاه',
          'شمارنده تسبیح دیجیتال با بازخورد هپتیک (ویبره)',
          'مجموعه کامل اذکار صبح و شام و تعقیبات نماز',
          'گنجینه ادعیه مستند از قرآن و سنت نبوی',
          'مکان‌یاب مساجد و نمازهای جمعه با محاسبه دقیق فاصله (GPS)',
          'پشتیبانی از چهار زبان (پشتو، دری، عربی و انگلیسی)',
          'عملکرد آفلاین بدون وابستگی دائمی به اینترنت',
          'طراحی بهینه با تم‌های شب و روز بدون تبلیغات'
        ]
      }
    }
  },
  {
    id: 'student-portal-hub',
    title: 'Student Academic Portal & Schedule Hub',
    shortDescription: 'A responsive digital web dashboard designed to organize course syllabi, assignments, and study schedules.',
    fullDescription: 'A lightweight and practical student web application prototype built with React and TypeScript to help university peers organize lecture notes, track semester deadlines, and coordinate course schedules in one place.',
    category: 'Web Application',
    filterCategories: ['Web'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage', 'Vite'],
    year: '2025',
    status: 'In Progress',
    featured: false,
    platformBadge: 'Web Prototype',
    storeBadge: 'Prototype',
    productVision: 'To eliminate the chaos of scattered course PDFs, assignment deadlines, and exam schedules across disparate chat groups by centralizing them into a single fast dashboard.',
    designAndPlanning: 'Structured modular dashboard widgets for current course notices, lecture slide links, and semester countdown timers. Prioritized keyboard shortcuts and clean category tagging.',
    architecture: 'Client-side single-page application built on React functional components and typed TypeScript interfaces, utilizing browser Local Storage for zero-backend zero-latency persistence.',
    features: [
      'Interactive semester calendar & deadline tracker',
      'Course resource & lecture note repository with quick search',
      'Category filtering by subject and assignment status',
      'Instant local browser storage persistence without external server requirements'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Structuring student data flexibly without requiring immediate backend hosting costs.',
        solution: 'Defined comprehensive TypeScript data interfaces and local storage synchronization hooks, making future backend REST integration straightforward.'
      }
    ],
    developerContribution: 'Identified university student workflow bottlenecks, designed the UI dashboard layouts in Tailwind CSS, wrote React state management and TypeScript data contracts, and gathered peer feedback for iterative UX refinement.',
    role: 'Student Developer (UI Architecture & Frontend Logic)',
    translations: {
      ps: {
        title: 'د محصلینو تحصیلي پورټل او تقسیم اوقات',
        category: 'وېب کاریال (پروټوټایپ)',
        shortDescription: 'د پوهنتون د محصلینو لپاره د لکچرونو، کورنیو دندو او ازموینو د مهالوېش تنظیمونکی سیستم.',
        fullDescription: 'یو ګټور وېب ډشبورډ چې محصلینو ته مرسته کوي د خپلو مضمونونو مواد، د ازموینو نېټې او تحصیلي مهالوېش په یو منظم او چټک ځای کې وساتي.',
        productVision: 'د محصلینو د درسي موادو او د ازموینو د نېټو منظم کول ترڅو هېڅ مهم تاریخ یا لکچر له پامه ونه وځي.',
        designAndPlanning: 'د مضمونونو، ازموینو او یادښتونو لپاره د بېلو کارتونو او تقویم طرحه کول ترڅو کارول یې ډېر ساده وي.',
        architecture: 'د React او TypeScript پر بنسټ عصري فرانت اینډ معمارۍ، چې معلومات په براوزر کې په پوره خوندیتوب او چټکۍ ساتي.',
        features: [
          'د سمستر انټراکټیف کلیزه او د ضرب‌الاجل یادوونکی',
          'د مضمونونو او سلایډونو منظم بنډل',
          'د مضامینو فوري فلټرینګ او پلټنه',
          'په براوزر کې له ځنډ پرته د ډېټا خوندي ساتنه'
        ],
        challengesAndSolutions: [
          {
            challenge: 'له سرور پرته د محصلینو د ډېټا ساتل او سمبالول.',
            solution: 'د براوزر له محلي حافظې او قوي ټایپ سکرېپټ سټراکچر څخه ګټه اخیستنه.'
          }
        ],
        developerContribution: 'د محصلینو د اصلي اړتیاوو پېژندل، د ډشبورډ د کاروونکي مخ ډیزاین، د React او TypeScript کوډ لیکل او د ټولګیوالو د نظرياتو پر بنسټ د هغه ښه کول.',
      },
      fa: {
        title: 'پورتال آکادمیک و مدیریت تقویم دانشجویی',
        category: 'وب اپلیکیشن (نمونه اولیه)',
        shortDescription: 'سامانه مدیریت تکالیف، جزوات و تقویم درسی دانشجویان پوهنتون.',
        fullDescription: 'یک پورتال سبک و سریع طراحی‌شده با React و TypeScript جهت سازماندهی منابع درسی، یادداشت‌ها و پیگیری زمان‌بندی امتحانات دانشگاهی.',
        productVision: 'یکپارچه‌سازی اطلاعیه‌های درسی و فایل‌های اسلاید برای جلوگیری از گم شدن تاریخ امتحانات و تکالیف.',
        designAndPlanning: 'طراحی ویجت‌های تفکیک‌شده برای دروس جاری، تقویم ترمی و جستجوی سریع در جزوات.',
        architecture: 'معماری مدرن سمت کاربر با کامپوننت‌های ری‌اکت و ذخیره‌سازی محلی بدون تحمیل هزینه سرور.',
        features: [
          'تقویم تعاملی ترم و پیگیری مهلت تکالیف',
          'مخزن دسته‌بندی‌شده اسلایدها و منابع درسی',
          'جستجوی لحظه‌ای بر اساس عنوان و موضوع درس',
          'ذخیره‌سازی آنی در حافظه مرورگر با تایپ‌سیفتی بالا'
        ],
        challengesAndSolutions: [
          {
            challenge: 'آماده‌سازی پروژه برای اتصال آینده به دیتابیس بدون تغییر اساسی در فرانت‌اند.',
            solution: 'تعریف دقیق اینترفیس‌های تایپ‌اسکریپت و جداسازی لایه داده از لایه نمایش.'
          }
        ],
        developerContribution: 'برنامه‌ریزی ویژگی‌های محصول، طراحی واکنش‌گرای رابط کاربری با Tailwind، پیاده‌سازی هوک‌های مدیریت وضعیت ری‌اکت و بهینه‌سازی تجربه کاربری.',
      }
    }
  },
  {
    id: 'workflow-automation-toolkit',
    title: 'Workflow Automation Toolkit',
    shortDescription: 'Practical automation utility scripts leveraging modern tools to streamline repetitive digital coursework tasks.',
    fullDescription: 'A collection of focused JavaScript and Node.js automation tools and scripts designed to parse raw educational transcripts, batch-organize technical notes, and format structured data exports efficiently.',
    category: 'Automation Tool',
    filterCategories: ['Automation'],
    technologies: ['JavaScript', 'Node.js', 'JSON', 'CLI Utilities'],
    year: '2026',
    status: 'In Progress',
    featured: false,
    platformBadge: 'CLI & Tools',
    storeBadge: 'In Development',
    productVision: 'To automate repetitive manual tasks in study and project workflows, allowing more time for deep conceptual learning and code review.',
    designAndPlanning: 'Constructed clean CLI commands accepting input file paths, parsing syntax, extracting summary concepts, and writing standardized output files.',
    architecture: 'Modular Node.js command-line pipeline with streaming file readers, regex-based structured tokenizers, and formatted JSON/Markdown exporters.',
    features: [
      'Batch conversion of structured notes into clean review checkpoints',
      'Automated extraction of technical terminology and definitions',
      'Command-line utilities for rapid directory file organization',
      'Configurable JSON data export pipelines'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Handling varied and inconsistent formatting in raw lecture note text files.',
        solution: 'Developed resilient regex tokenizers that detect headings, bullet points, and definitions regardless of indentation variations.'
      }
    ],
    developerContribution: 'Identified repetitive manual note formatting routines, wrote the Node.js parsing and file handling logic, organized reusable automation scripts, and validated output integrity across various coursework datasets.',
    role: 'Student Developer (Scripting & Automation)',
    translations: {
      ps: {
        title: 'د کاري جریان د اتومات کولو وسیلې',
        category: 'اتومات وسایل',
        shortDescription: 'د تکراري پوهنتوني او پروژوي کارونو د چټکولو لپاره عملي سکرېپټونه.',
        fullDescription: 'د Node.js او جاواسکریپټ پر بنسټ داسې وسایل چې اوږده درسي نوټونه په منظمو خلاصو بدلوي، فایلونه تنظیموي او د پوهنتون کارونه چټکوي.',
        productVision: 'د تکراري لاس‌کاري کارونو اتومات کول ترڅو د پروګرامینګ ژورې زده کړې ته ډېر وخت پاتې شي.',
        designAndPlanning: 'د کمانډ لاین داسې اسانه کمانډونه چې فایل اخلي او په منظم فارمټ کې یې بدلوي.',
        architecture: 'د Node.js ماډیولر جوړښت چې فایلونه لولي، منظم کوي یې او په JSON یا Markdown یې ثبتوي.',
        features: [
          'د درسي نوټونو اتومات ډلبندي',
          'د مهمو تخنیکي اصطلاحاتو را ایستل',
          'د فایلونو د چټک تنظیم کمانډ لاین وسایل',
          'په اسانه او منظم JSON بڼه د ډېټا صادرول'
        ],
        challengesAndSolutions: [
          {
            challenge: 'د بې‌نظمه متونو او نوټونو په سمه توګه لوستل او منظم کول.',
            solution: 'د منظمو الګوریتمونو او دقیقو نمونو (Regex) کارول ترڅو سرلیکونه او نکتې سمې وپېژني.'
          }
        ],
        developerContribution: 'د ستونزې پېژندل، د Node.js د سکرېپټونو لیکل، د کمانډ لاین ازمویل او د درسي موادو په تنظیم کې د هغو عملي کارول.',
      },
      fa: {
        title: 'مجموعه ابزارهای خودکارسازی وظایف درسی',
        category: 'اتوماسیون و اسکریپت',
        shortDescription: 'اسکریپت‌های کاربردی جهت تسریع پردازش فایل‌ها و سازماندهی یادداشت‌های فنی.',
        fullDescription: 'مجموعه‌ای از ابزارهای خط فرمان توسعه‌یافته با Node.js برای استخراج نکات کلیدی، تبدیل خودکار یادداشت‌ها به فرمت‌های استاندارد و دسته‌بندی فایل‌ها.',
        productVision: 'صرفه‌جویی در زمان پردازش دستی جزوات و تمرکز بر یادگیری عمیق مفاهیم مهندسی.',
        designAndPlanning: 'طراحی دستورات ساده خط فرمان با ورودی و خروجی شفاف و مستندسازی شده.',
        architecture: 'خط پردازش ماژولار مبتنی بر استریم‌های فایل Node.js و فرمت‌بندی خروجی با JSON.',
        features: [
          'تبدیل دسته‌ای یادداشت‌ها به سرفصل‌های قابل مرور',
          'شناسایی و استخراج خودکار تعاریف و اصطلاحات تخصصی',
          'ابزارهای خط فرمان برای مرتب‌سازی سریع فایل‌های درسی',
          'خروجی‌های ساختارمند و استاندارد برای استفاده در پورتال‌ها'
        ],
        challengesAndSolutions: [
          {
            challenge: 'فرمت‌های نامنظم و متنوع فایل‌های متنی اولیه.',
            solution: 'پیاده‌سازی قوانین پردازش متن برای تشخیص تیترها و نکات کلیدی.'
          }
        ],
        developerContribution: 'تحلیل نیاز، برنامه‌نویسی اسکریپت‌های Node.js، تست در محیط خط فرمان و اعتبارسنجی خروجی‌ها روی فایل‌های واقعی دانشگاهی.',
      }
    }
  }
];
