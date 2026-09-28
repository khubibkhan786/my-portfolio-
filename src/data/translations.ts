export type Language = 'en' | 'ps' | 'fa';

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    skills: string;
    services: string;
    projects: string;
    journey: string;
    contact: string;
    letsTalk: string;
    language: string;
  };
  hero: {
    statusBadge: string;
    subline: string;
    role: string;
    headlinePre: string;
    headlineHighlight: string;
    headlinePost: string;
    description: string;
    viewWork: string;
    contactMe: string;
    metrics: {
      metric1Value: string;
      metric1Label: string;
      metric2Value: string;
      metric2Label: string;
      metric3Value: string;
      metric3Label: string;
    };
    softwarePillar: string;
    webPillar: string;
    dataPillar: string;
  };
  about: {
    tag: string;
    headlinePre: string;
    headlineHighlight: string;
    headlinePost: string;
    intro1: string;
    intro2: string;
    educationTitle: string;
    educationDegree: string;
    educationSub: string;
    focusTitle: string;
    focusDomain: string;
    focusSub: string;
    buildingTitle: string;
    buildingProject: string;
    buildingSub: string;
    learningTitle: string;
    learningDomain: string;
    learningSub: string;
    showLess: string;
    showPrinciples: string;
    requestResume: string;
    principlesHeading: string;
    principlesP1: string;
    principlesP2: string;
    currentlyBuildingBadge: string;
    inDevelopment: string;
    companionDesc: string;
    targetAndroid: string;
    viewInProjects: string;
  };
  skills: {
    tag: string;
    headline: string;
    subtitle: string;
    competenciesSuffix: string;
    activeCapability: string;
    appliedInCode: string;
    activeLearningTitle: string;
    activeLearningSubtitle: string;
    inStudyBadge: string;
  };
  services: {
    tag: string;
    headline: string;
    subtitle: string;
    softwareTitle: string;
    softwareDesc: string;
    webTitle: string;
    webDesc: string;
    databaseTitle: string;
    databaseDesc: string;
    uiTitle: string;
    uiDesc: string;
    futureVision: string;
    productionQuality: string;
  };
  projects: {
    tag: string;
    headline: string;
    subtitle: string;
    allFilter: string;
    viewCaseStudy: string;
    sourceCode: string;
    verifiedProject: string;
    problemTitle: string;
    solutionTitle: string;
    keyFeatures: string;
    techStack: string;
    viewRepo: string;
    liveDemo: string;
    closeCaseStudy: string;
    statusCompleted: string;
    statusInProgress: string;
  };
  journey: {
    tag: string;
    headline: string;
    subtitle: string;
    currentFocus: string;
    nextMilestone: string;
  };
  contact: {
    tag: string;
    headline: string;
    subtitle: string;
    directEmail: string;
    copyEmail: string;
    emailCopied: string;
    draftShortcut: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    emailClientNote: string;
    openInEmailApp: string;
  };
  footer: {
    subline: string;
    rightsReserved: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      services: 'Services',
      projects: 'Projects',
      journey: 'Journey',
      contact: 'Contact',
      letsTalk: "Let's Talk",
      language: 'Language',
    },
    hero: {
      statusBadge: 'Abdul Jalil Zwak',
      subline: 'Information Systems · 2026',
      role: 'Software Developer',
      headlinePre: 'I build practical software and',
      headlineHighlight: 'modern digital experiences.',
      headlinePost: '',
      description:
        'Computer Science student focused on building useful applications, responsive web interfaces, and automated workflows with clean code and disciplined problem-solving.',
      viewWork: 'View My Work',
      contactMe: 'Contact Me',
      metrics: {
        metric1Value: '100%',
        metric1Label: 'Offline Autonomy',
        metric2Value: '4+',
        metric2Label: 'Delivered Projects',
        metric3Value: '2026',
        metric3Label: 'CS & IS Candidate',
      },
      softwarePillar: 'Java & Kotlin',
      webPillar: 'React & TS',
      dataPillar: 'SQL & Scripts',
    },
    about: {
      tag: '01 — ABOUT & FOCUS',
      headlinePre: 'Building practical software with curiosity &',
      headlineHighlight: 'disciplined craftsmanship.',
      headlinePost: '',
      intro1:
        'I’m Abdul Jalil Zwak, a Computer Science student with a dedicated focus on software development and practical digital technologies.',
      intro2:
        'I prioritize building real-world solutions: native Android applications, responsive web interfaces, and automated scripts that solve everyday challenges with reliable code.',
      educationTitle: 'Education',
      educationDegree: 'Computer Science',
      educationSub: 'Information Systems · 2026',
      focusTitle: 'Focus',
      focusDomain: 'Software Development',
      focusSub: 'Java, Kotlin, React & SQL',
      buildingTitle: 'Currently Building',
      buildingProject: 'Islamic Companion',
      buildingSub: 'Android · Kotlin · Offline-first',
      learningTitle: 'Learning',
      learningDomain: 'Full-Stack Architecture',
      learningSub: 'APIs, Coroutines & Cloud Services',
      showLess: 'Show Less',
      showPrinciples: 'My Engineering Principles',
      requestResume: 'Request Resume / CV',
      principlesHeading: 'Core Foundations Over Ephemeral Hype',
      principlesP1:
        'I believe in understanding core computer science principles: solid object-oriented structure in Java, relational data normalization in SQL, and modular component hierarchy in modern web applications.',
      principlesP2:
        'I embrace modern AI automation tools as productivity amplifiers for testing and fast prototyping, while keeping complete ownership of code quality, architecture, and maintainability.',
      currentlyBuildingBadge: 'Currently Building',
      inDevelopment: 'In Development',
      companionDesc:
        'A focused spiritual mindfulness app engineered with local Room database persistence, accurate prayer timetables, clean typography, and zero background tracking.',
      targetAndroid: 'Target: Native Android',
      viewInProjects: 'View in Projects',
    },
    skills: {
      tag: '02 — TECHNICAL TOOLKIT',
      headline: 'Skills & Practical Evidence',
      subtitle: 'Grounded in real project implementation — no arbitrary percentages or inflated claims.',
      competenciesSuffix: 'competencies',
      activeCapability: 'Domain Verified',
      appliedInCode: 'Applied in Code',
      activeLearningTitle: 'Active Learning & Expansion Targets',
      activeLearningSubtitle: 'Concepts and frameworks currently being explored through university coursework and personal labs',
      inStudyBadge: 'In Study · 2026',
    },
    services: {
      tag: '03 — SERVICES',
      headline: 'Practical Development Services',
      subtitle: 'Realistic developer services grounded in actual coursework and software building capabilities.',
      softwareTitle: 'Software Development',
      softwareDesc: 'Engineering practical software applications with structured object-oriented foundations in Java and modern Kotlin.',
      webTitle: 'Web Development',
      webDesc: 'Crafting responsive, high-performance web applications using React, TypeScript, and utility-first Tailwind CSS.',
      databaseTitle: 'Database Solutions',
      databaseDesc: 'Designing normalized relational schemas, executing SQL queries, and implementing offline-first SQLite / Room persistence.',
      uiTitle: 'UI Implementation',
      uiDesc: 'Translating design concepts into clean, accessible user interfaces with refined spacing, smooth transitions, and mobile polish.',
      futureVision: 'Committed to delivering bug-free, performant code that respects user privacy and system efficiency.',
      productionQuality: 'Production-Grade Engineering',
    },
    projects: {
      tag: '04 — SELECTED PROJECTS',
      headline: 'Featured Work & Case Studies',
      subtitle: 'Real software projects spanning native Android development, web applications, and automation scripts.',
      allFilter: 'All',
      viewCaseStudy: 'View Case Study',
      sourceCode: 'Source',
      verifiedProject: 'Verified Project',
      problemTitle: 'The Problem',
      solutionTitle: 'The Solution & Engineering Approach',
      keyFeatures: 'Key Features & Specifications',
      techStack: 'Technology Stack',
      viewRepo: 'View Repository',
      liveDemo: 'Live Demo',
      closeCaseStudy: 'Close Case Study',
      statusCompleted: 'Completed',
      statusInProgress: 'In Development',
    },
    journey: {
      tag: '05 — MILESTONES & PATH',
      headline: 'My Learning Journey',
      subtitle: 'Continuous progression from fundamentals to software engineering.',
      currentFocus: 'Current Focus',
      nextMilestone: 'Next Milestone',
    },
    contact: {
      tag: '06 — GET IN TOUCH',
      headline: 'Have a project or opportunity in mind?',
      subtitle: 'I’m always open to discussing new software projects, collaborative learning, or technical opportunities.',
      directEmail: 'Send Direct Email',
      copyEmail: 'Copy Email Address',
      emailCopied: 'Email Copied to Clipboard',
      draftShortcut: 'Draft a Message Shortcut',
      subjectPlaceholder: 'Subject (e.g. Project Collaboration, Question)',
      messagePlaceholder: 'Your message details...',
      emailClientNote: '* Opens your default email app with this message prefilled.',
      openInEmailApp: 'Open in Email App',
    },
    footer: {
      subline: 'Computer Science & Software Development',
      rightsReserved: 'All rights reserved.',
    },
  },
  ps: {
    nav: {
      home: 'کور',
      about: 'زما په اړه',
      skills: 'مهارتونه',
      services: 'خدمات',
      projects: 'پروژې',
      journey: 'زده کړې لاره',
      contact: 'اړیکه',
      letsTalk: 'خبرې وکړو',
      language: 'ژبه',
    },
    hero: {
      statusBadge: 'عبدالجلیل ځواک',
      subline: 'د معلوماتي سیستمونو محصل · ۲۰۲۶',
      role: 'سافټویر جوړونکی',
      headlinePre: 'زه عملي سافټویرونه او',
      headlineHighlight: 'عصري ډیجیټل تجربې جوړوم.',
      headlinePost: '',
      description:
        'د کمپیوټر ساینس محصل چې په ګټورو اپلیکیشنونو، ځواب ویونکو وېب پاڼو او د اتوماتیک کاري جریان په جوړولو تمرکز لري.',
      viewWork: 'زما کارونه وګورئ',
      contactMe: 'اړیکه ونیسئ',
      metrics: {
        metric1Value: '۱۰۰٪',
        metric1Label: 'افلاین کارېدنه',
        metric2Value: '+۴',
        metric2Label: 'بشپړې شوې پروژې',
        metric3Value: '۲۰۲۶',
        metric3Label: 'د فراغت کال',
      },
      softwarePillar: 'جاوا او کوټلین',
      webPillar: 'ریاکټ او ټایپ سکرېپټ',
      dataPillar: 'ډېټابېس او سکرېپټونه',
    },
    about: {
      tag: '۰۱ — زما او تمرکز په اړه',
      headlinePre: 'د تلپاتې دقت او لېوالتیا سره د',
      headlineHighlight: 'عملي سافټویر جوړول.',
      headlinePost: '',
      intro1:
        'زه عبدالجلیل ځواک یم، د کمپیوټر ساینس محصل چې د سافټویر جوړونې او نوې ټکنالوژۍ سره ژوره مینه لرم.',
      intro2:
        'زما تمرکز د ګټورو انډروایډ اپلیکیشنونو، معیاري وېبپاڼو او اتوماتیک کاري وسیلو په جوړولو دی ترڅو حقیقي ستونزې حل کړم.',
      educationTitle: 'زده کړې',
      educationDegree: 'کمپیوټر ساینس',
      educationSub: 'معلوماتي سیستمونه · ۲۰۲۶',
      focusTitle: 'کاري تمرکز',
      focusDomain: 'سافټویر جوړونه',
      focusSub: 'جاوا، کوټلین، ریاکټ او SQL',
      buildingTitle: 'اوسنی کار',
      buildingProject: 'اسلامي ملګری (Islamic Companion)',
      buildingSub: 'انډروایډ · کوټلین · افلاین',
      learningTitle: 'د زده کړې لور',
      learningDomain: 'بشپړ سټیک معمارۍ',
      learningSub: 'کلاوډ او عصري APIs',
      showLess: 'لږ ښودل',
      showPrinciples: 'زما تخنیکي اصول',
      requestResume: 'د سي وي غوښتنه',
      principlesHeading: 'اساسي بنسټونه تر لنډمهاله هایپ غوره دي',
      principlesP1:
        'زه په بنسټیز کمپیوټر ساینس باور لرم: په جاوا کې پاک آبجکټ اورینټډ کوډ، په SQL کې د ډېټا منظم جوړښت، او په وېب کې د موډیولر اجزاو کارول.',
      principlesP2:
        'د مصنوعي هوښیارتیا وسایل د کار سرعت او پروټوټایپ لپاره کاروم، خو د کوډ کیفیت او امنیت اصلي کنټرول په لاس کې لرم.',
      currentlyBuildingBadge: 'تر کار لاندې پروژه',
      inDevelopment: 'د پرمختګ په حال کې',
      companionDesc:
        'یو ځانګړی افلاین اسلامي اپلیکیشن چې د لمونځونو دقیق وختونه، تایید شوي اذکار او غوره خط لري، پرته له اعلاناتو او بې ځایه ټریکینګ څخه.',
      targetAndroid: 'پلیټفارم: نیټیف انډروایډ',
      viewInProjects: 'پروژو کې کتل',
    },
    skills: {
      tag: '۰۲ — تخنیکي وسایل او مهارتونه',
      headline: 'مهارتونه او عملي ثبوتونه',
      subtitle: 'حقیقي تجربې چې په عملي پروژو کې کارول شوي — پرته له بې معنی سلنو.',
      competenciesSuffix: 'مهارتونه',
      activeCapability: 'تایید شوې وړتیا',
      appliedInCode: 'په کوډ کې پلې شوې',
      activeLearningTitle: 'د زده کړې او ودې نوي اهداف',
      activeLearningSubtitle: 'هغه موضوعات چې پوهنتون او شخصي تجربو کې پرې کار کوم',
      inStudyBadge: 'د زده کړې په حال کې · ۲۰۲۶',
    },
    services: {
      tag: '۰۳ — کاري خدمات',
      headline: 'د سافټویر عملي خدمات',
      subtitle: 'هغه رښتیني خدمات چې زه یې د جوړولو وړتیا او تخنیکي پوهه لرم.',
      softwareTitle: 'سافټویر جوړونه',
      softwareDesc: 'د جاوا او کوټلین ژبو په مرسته د قوي او منظمو اپلیکیشنونو جوړول.',
      webTitle: 'وېب پرمختیا',
      webDesc: 'د React او Tailwind په مټ د تېزو او ټولو سکرینونو سره جوړېدونکو وېبپاڼو ډیزاین.',
      databaseTitle: 'د ډېټابېس حل لارې',
      databaseDesc: 'د SQL منظم ډېټابېسونه او په انډروایډ کې د افلاین SQLite/Room ډېټا ذخیره.',
      uiTitle: 'د کاروونکي مخپاڼې تطبیق (UI)',
      uiDesc: 'د ډیزاینونو عملي کول په پاک او ځواب ویونکي شکل چې کارول یې اسانه او خوندور وي.',
      futureVision: 'زه تل ژمن یم چې پاک، باوري او له بګونو پاک سافټویر وړاندې کړم.',
      productionQuality: 'مسلکي او معیاري جوړښت',
    },
    projects: {
      tag: '۰۴ — غوره پروژې',
      headline: 'عملي کارونه او پروژې',
      subtitle: 'هغه کارونه چې په موبایل، وېب او اتومات جوړولو کې ما پخپله بشپړ کړي.',
      allFilter: 'ټولې',
      viewCaseStudy: 'د پروژې څېړنه',
      sourceCode: 'کوډ',
      verifiedProject: 'تایید شوې پروژه',
      problemTitle: 'اصلي ننګونه او ستونزه',
      solutionTitle: 'انجینري حل لاره',
      keyFeatures: 'مهمې ځانګړتیاوې',
      techStack: 'ټکنالوژۍ او وسایل',
      viewRepo: 'کوډ کتل (GitHub)',
      liveDemo: 'ژوندی لید',
      closeCaseStudy: 'بندول',
      statusCompleted: 'بشپړه شوې',
      statusInProgress: 'تر کار لاندې',
    },
    journey: {
      tag: '۰۵ — پړاوونه او مزل',
      headline: 'زما د زده کړې مزل',
      subtitle: 'له پیل څخه د مسلکي سافټویر انجینرۍ پر لور تدریجي پرمختګ.',
      currentFocus: 'اوسنی تمرکز',
      nextMilestone: 'راتلونکی پړاو',
    },
    contact: {
      tag: '۰۶ — اړیکه',
      headline: 'کومه نوې پروژه یا همکاري لرئ؟',
      subtitle: 'زه د نویو پروژو، تخنیکي بحثونو او کاري فرصتونو لپاره تل چمتو یم.',
      directEmail: 'مستقیم برېښنالیک واستوئ',
      copyEmail: 'ایمیل کاپي کړئ',
      emailCopied: 'برېښنالیک کاپي شو',
      draftShortcut: 'د پیغام لیکلو لنډلار',
      subjectPlaceholder: 'د پیغام موضوع (د بېلګې په توګه: د پروژې وړاندیز)',
      messagePlaceholder: 'خپل پیغام دلته ولیکئ...',
      emailClientNote: '* دا ستاسو د ایمیل په پروګرام کې دا متن پخپله پرانیزي.',
      openInEmailApp: 'په ایمیل کې خلاصول',
    },
    footer: {
      subline: 'کمپیوټر ساینس او سافټویر جوړونه',
      rightsReserved: 'ټول حقوق خوندي دي.',
    },
  },
  fa: {
    nav: {
      home: 'خانه',
      about: 'درباره من',
      skills: 'مهارت‌ها',
      services: 'خدمات',
      projects: 'پروژه‌ها',
      journey: 'مسیر یادگیری',
      contact: 'تماس',
      letsTalk: 'گفتگو کنیم',
      language: 'زبان',
    },
    hero: {
      statusBadge: 'عبدالجلیل ځواک',
      subline: 'دانشجوی سیستم‌های معلوماتی · ۲۰۲۶',
      role: 'توسعه‌دهنده نرم‌افزار',
      headlinePre: 'من نرم‌افزارهای کاربردی و',
      headlineHighlight: 'تجربه‌های مدرن دیجیتال می‌سازم.',
      headlinePost: '',
      description:
        'دانشجوی کامپیوتر ساینس متمرکز بر ساخت برنامه‌های مفید، رابط‌های وب واکنش‌گرا و ابزارهای اتوماسیون با کدنویسی تمیز و اصولی.',
      viewWork: 'مشاهده کارهای من',
      contactMe: 'تماس با من',
      metrics: {
        metric1Value: '۱۰۰٪',
        metric1Label: 'عملکرد آفلاین',
        metric2Value: '+۴',
        metric2Label: 'پروژه تکمیل‌شده',
        metric3Value: '۲۰۲۶',
        metric3Label: 'فارغ‌التحصیل ساینس',
      },
      softwarePillar: 'جاوا و کاتلین',
      webPillar: 'ری‌اکت و تایپ‌اسکریپت',
      dataPillar: 'دیتابیس و اسکریپت',
    },
    about: {
      tag: '۰۱ — درباره و تمرکز کاری',
      headlinePre: 'ساخت نرم‌افزارهای مفید با دقت و',
      headlineHighlight: 'تخصص ساختارمند.',
      headlinePost: '',
      intro1:
        'من عبدالجلیل ځواک هستم، دانشجوی کامپیوتر ساینس با تمرکز جدی بر مهندسی نرم‌افزار و تکنالوژی‌های مدرن.',
      intro2:
        'اولویت من توسعه راه‌حل‌های عملی است: اپلیکیشن‌های بومی اندروید، وبسایت‌های واکنش‌گرا و اسکریپت‌های کاربردی جهت رفع چالش‌های واقعی.',
      educationTitle: 'تحصیلات',
      educationDegree: 'کامپیوتر ساینس',
      educationSub: 'سیستم‌های معلوماتی · ۲۰۲۶',
      focusTitle: 'تمرکز فنی',
      focusDomain: 'توسعه نرم‌افزار',
      focusSub: 'جاوا، کاتلین، ری‌اکت و SQL',
      buildingTitle: 'پروژه در حال ساخت',
      buildingProject: 'همراه اسلامی (Islamic Companion)',
      buildingSub: 'اندروید · کاتلین · آفلاین',
      learningTitle: 'اهداف یادگیری',
      learningDomain: 'معماری فول‌استک',
      learningSub: 'سرویس‌های ابری و کوروتین‌ها',
      showLess: 'نمایش کمتر',
      showPrinciples: 'اصول مهندسی من',
      requestResume: 'درخواست سی‌وی / رزومه',
      principlesHeading: 'پایبندی به اصول بنیادین به‌جای موج‌های زودگذر',
      principlesP1:
        'من به درک عمیق مفاهیم اصلی باور دارم: طراحی شیءگرا در جاوا، نرمال‌سازی اصولی پایگاه‌داده در SQL و معماری ماژولار در وب.',
      principlesP2:
        'ابزارهای هوش مصنوعی را برای تسریع کار و تست به کار می‌گیرم، درحالی‌که تسلط کامل بر منطق و پایداری کد را حفظ می‌کنم.',
      currentlyBuildingBadge: 'پروژه در حال توسعه',
      inDevelopment: 'در حال ساخت',
      companionDesc:
        'اپلیکیشن آفلاین اسلامی متمرکز بر اوقات دقیق نماز، اذکار معتبر و فونت‌های زیبا، بدون تبلیغات مزاحم و رهگیری.',
      targetAndroid: 'پلتفرم: اندروید نیتیو',
      viewInProjects: 'مشاهده در پروژه‌ها',
    },
    skills: {
      tag: '۰۲ — جعبه‌ابزار فنی',
      headline: 'مهارت‌ها و شواهد عملی',
      subtitle: 'مبتنی بر پیاده‌سازی واقعی در پروژه‌ها — بدون درصدهای تخیلی.',
      competenciesSuffix: 'مهارت',
      activeCapability: 'تاییدشده در پروژه',
      appliedInCode: 'پیاده‌شده در کد',
      activeLearningTitle: 'اهداف یادگیری و توسعه',
      activeLearningSubtitle: 'مفاهیمی که در درس‌های دانشگاهی و آزمایش‌های فردی دنبال می‌کنم',
      inStudyBadge: 'در حال مطالعه · ۲۰۲۶',
    },
    services: {
      tag: '۰۳ — خدمات تخصصی',
      headline: 'خدمات کاربردی توسعه نرم‌افزار',
      subtitle: 'خدمات واقعی بر مبنای دانش فنی و مهارت‌های برنامه‌نویسی اثبات‌شده.',
      softwareTitle: 'توسعه نرم‌افزار',
      softwareDesc: 'توسعه اپلیکیشن‌های استاندارد با اصول شیءگرایی در جاوا و کاتلین.',
      webTitle: 'توسعه وب',
      webDesc: 'ایجاد وبسایت‌های سریع و واکنش‌گرا با استفاده از React و Tailwind CSS.',
      databaseTitle: 'راه‌حل‌های پایگاه داده',
      databaseDesc: 'طراحی اسکیمای رابطه‌ای در SQL و مدیریت دیتابیس محلی SQLite/Room.',
      uiTitle: 'پیاده‌سازی رابط کاربری (UI)',
      uiDesc: 'تبدیل طرح‌ها به رابط‌های کاربری چشم‌نواز، بهینه‌شده برای موبایل و دسکتاپ.',
      futureVision: 'همواره متعهد به ارائه کدهای بهینه، ایمن و کاربرپسند هستم.',
      productionQuality: 'مهندسی با کیفیت استاندارد',
    },
    projects: {
      tag: '۰۴ — پروژه‌های منتخب',
      headline: 'پروژه‌ها و نمونه‌کارها',
      subtitle: 'پروژه‌های واقعی در حوزه اپلیکیشن‌های اندروید، وب و ابزارهای اتوماسیون.',
      allFilter: 'همه',
      viewCaseStudy: 'مشاهده تحلیل پروژه',
      sourceCode: 'سورس‌کد',
      verifiedProject: 'پروژه تاییدشده',
      problemTitle: 'چالش و مسئله اصلی',
      solutionTitle: 'راه‌حل و رویکرد مهندسی',
      keyFeatures: 'قابلیت‌های کلیدی',
      techStack: 'تکنالوژی‌های مورداستفاده',
      viewRepo: 'مشاهده سورس (GitHub)',
      liveDemo: 'پیش‌نمایش زنده',
      closeCaseStudy: 'بستن پنجره',
      statusCompleted: 'تکمیل‌شده',
      statusInProgress: 'در حال ساخت',
    },
    journey: {
      tag: '۰۵ — مسیر رشد و دستاوردها',
      headline: 'مسیر یادگیری من',
      subtitle: 'پیشرفت گام‌به‌گام از اصول پایه تا مهندسی نرم‌افزار.',
      currentFocus: 'تمرکز فعلی',
      nextMilestone: 'هدف بعدی',
    },
    contact: {
      tag: '۰۶ — ارتباط با من',
      headline: 'پروژه یا ایده‌ای در ذهن دارید؟',
      subtitle: 'همیشه از گفتگو پیرامون پروژه‌های نرم‌افزاری و همکاری‌های فنی استقبال می‌کنم.',
      directEmail: 'ارسال ایمیل مستقیم',
      copyEmail: 'کپی آدرس ایمیل',
      emailCopied: 'ایمیل در کلیپ‌بورد کپی شد',
      draftShortcut: 'میانبر نگارش پیام',
      subjectPlaceholder: 'موضوع پیام (مثلاً: پیشنهاد همکاری، سوال)',
      messagePlaceholder: 'متن پیام شما...',
      emailClientNote: '* برنامه ایمیل پیش‌فرض شما با این اطلاعات باز خواهد شد.',
      openInEmailApp: 'باز کردن در برنامه ایمیل',
    },
    footer: {
      subline: 'کامپیوتر ساینس و توسعه نرم‌افزار',
      rightsReserved: 'تمامی حقوق محفوظ است.',
    },
  },
};
