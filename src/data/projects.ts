import {Project} from '../types';

export const projects: Project[] = [
  {
    id: 'lemunz-azkar',
    title: 'لمونځ او اذکار',
    shortDescription: 'A practical Islamic Android application focused on prayer times, Adhkar, Tasbih, Duas, Qibla, and offline usability.',
    fullDescription: 'A practical native Android application built with Kotlin, focused on accurate prayer times, daily Adhkar, Tasbih counter, authentic Duas, and Qibla direction. The project emphasizes 100% offline usability, lightweight memory consumption, clean typography, and zero background telemetry.',
    category: 'Android Application',
    filterCategories: ['Mobile'],
    technologies: ['Kotlin', 'Android SDK', 'SQLite', 'Room Database', 'XML Layouts', 'Android Studio'],
    image: '/src/assets/images/project_prayer_app_1790485013658.jpg',
    year: '2025',
    status: 'Completed',
    featured: true,
    platformBadge: 'Native Android',
    storeBadge: 'Offline-First APK',
    productVision: 'To provide a dependable, lightweight Islamic daily companion that respects user privacy, works reliably in remote areas without internet access, and delivers zero distraction.',
    designAndPlanning: 'Planned user flows around quick access to prayer countdowns and daily remembrances. Chose high-contrast typography, large touch targets for the digital Tasbih, and an uncluttered screen hierarchy.',
    architecture: 'Offline-first native Android architecture leveraging Room Database as the single source of truth over SQLite, with asynchronous query dispatching to avoid main-thread blocking.',
    features: [
      'Accurate astronomical prayer times calculation',
      'Daily morning & evening Adhkar, Tasbih & authentic Duas catalog',
      'Hardware sensor-based Qibla direction compass indicator',
      '100% offline persistence with local Room & SQLite database',
      'Zero advertising, zero analytics trackers, and low battery consumption'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Maintaining instant prayer calculation and remembrance loading without internet connectivity in rural zones.',
        solution: 'Pre-seeded a structured local SQLite database via Room with indexed calculation tables, ensuring sub-10ms lookup times completely offline.'
      },
      {
        challenge: 'Preventing UI stutter during sensor reading updates for the Qibla compass indicator.',
        solution: 'Implemented smoothed low-pass filtering on device orientation azimuth sensors and isolated UI re-renders.'
      }
    ],
    developerContribution: 'Conceived the application structure, designed the navigation and UI layout in XML, structured the Room database schema and seed data, wrote and verified Kotlin logic, conducted real-device debugging on low-resource hardware, and tested offline state persistence.',
    role: 'Android Developer (Design, Architecture & Implementation)',
    translations: {
      ps: {
        title: 'لمونځ او اذکار',
        category: 'انډروایډ کاریال',
        shortDescription: 'د لمانځه د وختونو، مسنونو اذکارو، تسبېح او قبلې ښودلو لپاره عملي او بې‌انټرنېټه انډروایډ کاریال.',
        fullDescription: 'یو عملي او بومي انډروایډ کاریال چې په کوټلین کې جوړ شوی، د لمانځه دقیق وختونه، سهاري او ماښامني اذکار، ګڼونکې تسبېح، مسنونې دعاګانې او قبله په خورا سپک او ډاډمن ډیزاین کې وړاندې کوي.',
        productVision: 'د یو داسې باوري، پاک او افلاین ملګري رامنځته کول چې په لرو پرتو سیمو کې له انټرنېټ پرته په چټکۍ کار وکړي او هېڅ ډول اعلانات یا دروندوالی ونه لري.',
        designAndPlanning: 'د اسانه لاسرسي لپاره د سکرینونو پلانول، د تسبېح لپاره لوی او پوهېدونکي بټنې، او د متنونو روښانه خطاطي او ترتیب.',
        architecture: 'د Room Database او محلي SQLite پر بنسټ افلاین معمارۍ پلي کول، چې ټول معلومات پر ټیلفون خوندي ساتي او بېټرۍ کمه لګوي.',
        features: [
          'د لمانځه د وختونو دقیق حساب',
          'د مسنونو اذکارو، دعاګانو او تسبېح بشپړه ټولګه',
          'د قبلې لوري ښودونکی کمپاس',
          'سل په سلو کې افلاین کارېدنه په Room / SQLite کې',
          'له اعلاناتو او د بېټرۍ له بې‌ځایه مصرف څخه پاک'
        ],
        challengesAndSolutions: [
          {
            challenge: 'له انټرنېټ پرته د لمانځه او اذکارو د معلوماتو سمدستي او بې‌ځنډه ښودل.',
            solution: 'په محلي Room ډېټابېس کې د منظمو جدولونو ډیزاین چې په څو مېلي‌ثانیو کې معلومات راباسي.'
          }
        ],
        developerContribution: 'د کاریال فکري پلان، په XML کې د کاروونکي مخپاڼې ډیزاین، د Room ډېټابېس جدولونو جوړول، په کوټلین کې د منطق پلي کول او څارنه، او په کمزورو موبایلونو کې د هغه عملي ازمویل او سمون.',
      },
      fa: {
        title: 'نماز و اذکار',
        category: 'اپلیکیشن اندروید',
        shortDescription: 'اپلیکیشن کاربردی و کاملاً آفلاین اندروید برای اوقات شرعی، اذکار، تسبیح، ادعیه و قبله‌نما.',
        fullDescription: 'یک برنامه کاربردی بومی اندروید با کاتلین، متمرکز بر محاسبه دقیق اوقات شرعی، اذکار روزانه، شمارنده تسبیح، ادعیه مأثوره و جهت قبله با رابط کاربری روان و بهینه.',
        productVision: 'ایجاد ابزاری سبک، معتبر و بدون آگهی برای تسهیل عبادات روزانه که حتی در دورافتاده‌ترین نقاط بدون اینترنت به راحتی کار کند.',
        designAndPlanning: 'طراحی گام‌به‌گام صفحات جهت دسترسی زیر یک ثانیه به اذکار و اوقات، با تأکید بر خوانایی متن و دکمه‌های مناسب لمسی.',
        architecture: 'معماری مبتنی بر داده‌های محلی با پایگاه داده Room و SQLite بدون وابستگی به سرورهای خارجی.',
        features: [
          'محاسبه دقیق اوقات شرعی نمازها',
          'مجموعه اذکار صبح و شام، ادعیه و تسبیح دیجیتال',
          'قبله‌نمای سبک مبتنی بر سنسور جهت‌یاب',
          'عملکرد کاملاً آفلاین با پایگاه داده محلی',
          'حفظ حریم خصوصی، بدون تبلیغات و با حداقل مصرف باتری'
        ],
        challengesAndSolutions: [
          {
            challenge: 'فراخوانی آنی صدها ذکر و دعا بدون کندی در دستگاه‌های ضعیف‌تر.',
            solution: 'ایندکس‌گذاری دقیق در SQLite و بارگذاری غیرهمگام در لایه داده با Room.'
          }
        ],
        developerContribution: 'برنامه‌ریزی ساختار پروژه، طراحی رابط کاربری در XML، پیاده‌سازی اسکیما و کدهای دیتابیس Room، برنامه‌نویسی و تست منطق کاتلین، و بهینه‌سازی عملکرد روی دستگاه‌های واقعی.',
      }
    }
  },
  {
    id: 'weather-app',
    title: 'د هوا حالاتو',
    shortDescription: 'A responsive real-time weather tracking application providing accurate regional forecasts.',
    fullDescription: 'A responsive web application that provides real-time meteorological updates, 5-day regional forecasts, and atmospheric condition metrics with high performance on low-bandwidth networks.',
    category: 'Web Application',
    filterCategories: ['Web'],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API', 'Responsive Design'],
    image: '/src/assets/images/project_weather_app_1790485024344.jpg',
    year: '2025',
    status: 'Completed',
    featured: true,
    platformBadge: 'Web Application',
    storeBadge: 'Live Service',
    productVision: 'To deliver weather and atmospheric data in a clean, high-speed interface that loads reliably even over slower 3G mobile connections.',
    designAndPlanning: 'Engineered a clear visual dashboard displaying temperature, wind, humidity, and forecast timeline with dynamic atmospheric condition accents.',
    architecture: 'Lightweight client-side architecture using modular JavaScript with asynchronous fetch handlers, data normalization, and localized cached state.',
    features: [
      'Real-time atmospheric condition and temperature updates',
      'Structured 5-day forecast with daily temperature highs and lows',
      'Dynamic weather condition styling and visual indicators',
      'Responsive design ensuring comfortable usability across smartphones and laptops'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Handling API rate limits and network latency on unstable mobile connections.',
        solution: 'Implemented client-side session caching for recently queried locations to prevent duplicate requests and provide instant feedback.'
      }
    ],
    developerContribution: 'Designed the UI layout and wireframes, wrote the frontend JavaScript logic and asynchronous API handling, structured responsive CSS styles, and tested cross-device responsiveness.',
    role: 'Frontend Developer (UI Design & JavaScript Implementation)',
    translations: {
      ps: {
        title: 'د هوا حالاتو څارونکی',
        category: 'وېب کاریال',
        shortDescription: 'د سیمې د هوا حالاتو ژوندی او باوري وړاندوینه کوونکی چټک وېب کاریال.',
        fullDescription: 'یو عصري وېب کاریال چې د سیمې د هوا دقیق معلومات، پنځه ورځنۍ وړاندوینه او موسمي بدلونونه په زړه پورې، سپک او باوري ډیزاین کې ښیي.',
        productVision: 'د هوا د معلوماتو چټک وړاندې کول په داسې ساده مخپاڼه کې چې حتی په کمزوري انټرنېټ کې هم په څو ثانیو کې خلاصه شي.',
        designAndPlanning: 'د تودوخې، باد، رطوبت او ورځني مهالوېش روښانه وېش ترڅو هر څوک پرې ژر پوه شي.',
        architecture: 'د جاواسکریپټ ماډیولر کوډ چې د هوا له سرورونو معلومات اخلي او له چاڼ وروسته یې ژر پر مخپاڼه ښيي.',
        features: [
          'د هوا د حالاتو ژوندي معلومات',
          'د پنځو راتلونکو ورځو وړاندوینه',
          'د هوا له حال سره برابر بصري رنګونه او نښانې',
          'په موبایل او کمپیوټر کې بشپړ ځواب ویونکی ډیزاین'
        ],
        challengesAndSolutions: [
          {
            challenge: 'په ضعیف انټرنېټ کې د معلوماتو د تکراري ښکته کولو مخنیوی.',
            solution: 'په براوزر کې د معلوماتو موقتي ساتنه ترڅو ورته غوښتنې سمدستي ځواب شي.'
          }
        ],
        developerContribution: 'د ټولې مخپاڼې ډیزاین، په جاواسکریپټ کې د ډېټا راوړلو او تنظیم کوډ لیکل، د ځواب ویونکي CSS تنظیمول او په بېلابېلو وسیلو کې یې ازمویل.',
      },
      fa: {
        title: 'سامانه وضعیت آب و هوا',
        category: 'وب اپلیکیشن',
        shortDescription: 'سامانه آنلاین و سریع پیش‌بینی وضعیت جوی و هواشناسی منطقه‌ای.',
        fullDescription: 'یک وب‌اپلیکیشن واکنش‌گرا برای ارائه آخرین اطلاعات جوی، پیش‌بینی پنج‌روزه و تغییرات دما با سرعت بالا و حجم مصرفی اندک.',
        productVision: 'دسترسی سریع و شفاف به پیش‌بینی وضعیت هوا بدون تبلیغات و در کمترین زمان ممکن حتی روی خطوط اینترنت کم‌سرعت.',
        designAndPlanning: 'دسته‌بندی منظم شاخص‌های هوا (دما، سرعت باد، رطوبت) در کارت‌های استاندارد با کنتراست مطلوب.',
        architecture: 'معماری ماژولار فرانت‌اند با جاوااسکریپت و فراخوانی بهینه داده‌ها از API با مدیریت کش موقت.',
        features: [
          'بروزرسانی زنده وضعیت و دمای هوا',
          'پیش‌بینی ۵ روزه با نمایش حداکثر و حداقل دما',
          'استایل پویا و متناسب با شرایط بارانی، آفتابی و ابری',
          'سازگاری کامل با صفحه نمایش انواع موبایل و لپ‌تاپ'
        ],
        challengesAndSolutions: [
          {
            challenge: 'مدیریت خطاهای شبکه هنگام قطع و وصل شدن اینترنت.',
            solution: 'پیاده‌سازی مکانیزم نمایش خطای واضح و بارگذاری از حافظه موقت مرورگر.'
          }
        ],
        developerContribution: 'ایده‌پردازی و طراحی رابط کاربری، پیاده‌سازی منطق جاوااسکریپت، بهینه‌سازی کدهای CSS و آزمودن عملکرد در مرورگرهای مختلف.',
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
