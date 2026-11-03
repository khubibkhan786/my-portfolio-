import {Language} from '../types';
export type {Language};

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
    learningTitle: string;
    learningDomain: string;
    learningSub: string;
    showLess: string;
    showPrinciples: string;
    requestResume: string;
    principlesHeading: string;
    principlesP1: string;
    principlesList: string[];
    principlesP2: string;
    profileRole: string;
    profileUniversity: string;
    directionTitle: string;
    directionBadge: string;
    directionDesc: string;
    interestsTitle: string;
    interests: string[];
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
    filters: {
      all: string;
      ai: string;
      web: string;
      automation: string;
      mobile: string;
    };
    showingCategory: string;
    resetFilter: string;
    noProjectsMatch: string;
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
      subline: 'Computer Science · Information Systems · 2026',
      role: 'Software Developer',
      headlinePre: 'I build practical software and',
      headlineHighlight: 'modern digital experiences.',
      headlinePost: '',
      description:
        'Computer Science student focused on software development, Android applications, responsive web interfaces, databases, and practical digital solutions.',
      viewWork: 'View My Work',
      contactMe: 'Contact Me',
      metrics: {
        metric1Value: '6+',
        metric1Label: 'Projects',
        metric2Value: 'Software Dev',
        metric2Label: 'Focus',
        metric3Value: '2026',
        metric3Label: 'CS & IS Student',
      },
      softwarePillar: 'Java & Kotlin',
      webPillar: 'React & TS',
      dataPillar: 'SQL & Databases',
    },
    about: {
      tag: '01 — ABOUT & FOCUS',
      headlinePre: 'Building practical software with curiosity and',
      headlineHighlight: 'disciplined learning.',
      headlinePost: '',
      intro1:
        'I’m Abdul Jalil Zwak, a Computer Science student at Paktia University specializing in Information Systems. I’m focused on building practical software while strengthening my foundations in programming, databases, web development, and application development.',
      intro2:
        'I enjoy turning ideas into useful applications and continuously improving my understanding through coursework, personal projects, and hands-on experimentation.',
      educationTitle: 'Education',
      educationDegree: 'Computer Science',
      educationSub: 'Information Systems · Paktia University · Class of 2026',
      focusTitle: 'Core Focus',
      focusDomain: 'Software Development',
      focusSub: 'Kotlin, Java, JavaScript, TypeScript, SQL',
      learningTitle: 'Learning Direction',
      learningDomain: 'Full-Stack Foundations',
      learningSub: 'APIs, Backend Architecture & Software Engineering',
      showLess: 'Show Less',
      showPrinciples: 'My Development Principles',
      requestResume: 'Request Resume / CV',
      principlesHeading: 'My Development Principles',
      principlesP1:
        'I build practical solutions and keep code understandable. I prioritize learning through real projects, choosing simple and reliable solutions over unnecessary complexity.',
      principlesList: [
        'Build practical solutions that solve real needs',
        'Write clean, readable, and maintainable code',
        'Learn deeply through hands-on project implementation',
        'Choose reliable, simple architectures over unnecessary complexity',
        'Respect privacy and efficient resource usage in every build',
      ],
      principlesP2:
        'I improve through iteration while respecting privacy and efficient resource usage in every project I develop.',
      profileRole: 'Computer Science Student',
      profileUniversity: 'Paktia University · Information Systems',
      directionTitle: 'Academic & Engineering Direction',
      directionBadge: 'Information Systems',
      directionDesc:
        'Currently advancing in relational database systems, native Android development, and responsive web architecture while maintaining strong academic standing at Paktia University.',
      interestsTitle: 'Primary Interests',
      interests: [
        'Android Application Development',
        'Relational Database Modeling (SQL)',
        'Responsive Web Interfaces (React)',
        'Offline-First System Architecture',
      ],
    },
    skills: {
      tag: '02 — TECHNICAL TOOLKIT',
      headline: 'Skills & Technical Foundations',
      subtitle: 'Core competencies developed through coursework, practical projects, and applied software development.',
      competenciesSuffix: 'competencies',
      activeCapability: 'Applied Foundations',
      appliedInCode: 'In Projects',
      activeLearningTitle: 'Skill Maturity & Learning Targets',
      activeLearningSubtitle: 'Current technical foundations, actively developing skills, and upcoming expansion goals',
      inStudyBadge: 'Academic & Applied',
    },
    services: {
      tag: '03 — SERVICES',
      headline: 'Practical Development Services',
      subtitle: 'Realistic developer services grounded in actual coursework and software building capabilities.',
      softwareTitle: 'Software Development',
      softwareDesc: 'Building practical applications using Java and Kotlin with a focus on clean structure and understandable code.',
      webTitle: 'Web Development',
      webDesc: 'Creating responsive web interfaces using HTML, CSS, JavaScript, React, and TypeScript.',
      databaseTitle: 'Database Solutions',
      databaseDesc: 'Designing relational database structures and working with SQL, MySQL, SQLite, and Room.',
      uiTitle: 'UI Implementation',
      uiDesc: 'Turning interface ideas into responsive and clean user interfaces with attention to spacing, usability, and mobile responsiveness.',
      futureVision: 'Committed to delivering clean, maintainable code that respects user privacy and efficient resource usage.',
      productionQuality: 'Practical Development',
    },
    projects: {
      tag: '04 — SELECTED PROJECTS',
      headline: 'Featured Work & Practical Projects',
      subtitle: 'Real software projects spanning native Android development, web applications, and automation scripts.',
      allFilter: 'All',
      filters: {
        all: 'All',
        ai: 'AI',
        web: 'Web',
        automation: 'Automation',
        mobile: 'Mobile',
      },
      showingCategory: 'Showing category',
      resetFilter: 'Show All Projects',
      noProjectsMatch: 'No projects found in this category.',
      viewCaseStudy: 'Project Details',
      sourceCode: 'Source Code',
      verifiedProject: 'Active Project',
      problemTitle: 'The Problem',
      solutionTitle: 'Practical Solution',
      keyFeatures: 'Key Features & Capabilities',
      techStack: 'Technologies Used',
      viewRepo: 'View on GitHub',
      liveDemo: 'Live Demo',
      closeCaseStudy: 'Close Details',
      statusCompleted: 'Completed',
      statusInProgress: 'In Development',
    },
    journey: {
      tag: '05 — TIMELINE & MILESTONES',
      headline: 'Academic & Development Journey',
      subtitle: 'Progressing step-by-step from fundamental computer science to applied software engineering.',
      currentFocus: 'Current Focus',
      nextMilestone: 'Future Direction',
    },
    contact: {
      tag: '06 — GET IN TOUCH',
      headline: 'Have a project or opportunity in mind?',
      subtitle: 'I’m open to discussing software projects, collaborative learning, and technical opportunities.',
      directEmail: 'Direct Inquiry',
      copyEmail: 'Copy Message',
      emailCopied: 'Message Copied to Clipboard',
      draftShortcut: 'Message Draft',
      subjectPlaceholder: 'Subject (e.g. Collaboration, Inquiry, Question)',
      messagePlaceholder: 'Your message details...',
      emailClientNote: 'Use the message draft to prepare a direct inquiry.',
      openInEmailApp: 'Copy Draft',
    },
    footer: {
      subline: 'Computer Science · Information Systems · Paktia University',
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
      subline: 'د کمپیوټر ساینس محصل · معلوماتي سیستمونه · ۲۰۲۶',
      role: 'سافټویر جوړونکی',
      headlinePre: 'زه عملي سافټویرونه او',
      headlineHighlight: 'عصري ډیجیټل تجربې جوړوم.',
      headlinePost: '',
      description:
        'د کمپیوټر ساینس محصل چې په ګټورو کاریالونو، انډروایډ اپلیکیشنونو، وېبپاڼو، ډېټابېسونو او عملي ډیجیټل حل لارو تمرکز لري.',
      viewWork: 'زما کارونه وګورئ',
      contactMe: 'اړیکه ونیسئ',
      metrics: {
        metric1Value: '+۶',
        metric1Label: 'پروژې',
        metric2Value: 'سافټویر جوړونه',
        metric2Label: 'کاري تمرکز',
        metric3Value: '۲۰۲۶',
        metric3Label: 'د CS & IS محصل',
      },
      softwarePillar: 'جاوا او کوټلین',
      webPillar: 'ریاکټ او ټایپ سکرېپټ',
      dataPillar: 'ډېټابېس او SQL',
    },
    about: {
      tag: '۰۱ — زما او تمرکز په اړه',
      headlinePre: 'د تلپاتې هڅې او زده کړې سره د',
      headlineHighlight: 'عملي سافټویر جوړول.',
      headlinePost: '',
      intro1:
        'زه عبدالجلیل ځواک یم، په پکتیا پوهنتون کې د کمپیوټر ساینس پوهنځي د معلوماتي سیستمونو (IS) محصل. زما اصلي تمرکز د عملي سافټویرونو جوړول او په پروګرامینګ، ډېټابېس، وېب او اپلیکیشن جوړونه کې د خپلو بنسټونو پیاوړي کول دي.',
      intro2:
        'زه په دې خوښېږم چې خپلې فکري نظریې په ګټورو کاریالونو بدلې کړم او د پوهنتوني درسونو، شخصي پروژو او عملي تجربو له لارې خپله پوهه لا ژوره کړم.',
      educationTitle: 'زده کړې',
      educationDegree: 'کمپیوټر ساینس',
      educationSub: 'معلوماتي سیستمونه · پکتیا پوهنتون · ۲۰۲۶',
      focusTitle: 'کاري تمرکز',
      focusDomain: 'سافټویر جوړونه',
      focusSub: 'کوټلین، جاوا، جاواسکریپټ، ټایپ‌سکرېپټ، SQL',
      learningTitle: 'د زده کړې مسیر',
      learningDomain: 'بشپړ سټیک اساسي بنسټونه',
      learningSub: 'APIs، بیک اینډ او سافټویر انجینري',
      showLess: 'لږ ښودل',
      showPrinciples: 'زما پرمختیایي اصول',
      requestResume: 'د سي وي غوښتنه',
      principlesHeading: 'زما پرمختیایي اصول',
      principlesP1:
        'زه په عملي حل لارو او د اسانه او منظم کوډ په لیکلو باور لرم. زما لومړیتوب له رښتینو پروژو زده کړه ده، او د بې ځایه پېچلتیاوو پر ځای ساده او ډاډمنې لارې غوره ګڼم.',
      principlesList: [
        'د رښتینو اړتیاوو لپاره عملي حل لارې جوړول',
        'د پاک، منظم او پوهېدونکي کوډ لیکل',
        'له رښتینو عملي پروژو څخه ژوره زده کړه',
        'د بې ځایه پېچلتیاوو پر ځای د ساده او باوري معمارۍ غوره کول',
        'د کاروونکو محرمیت او د سرچینو سپما په پام کې نیول',
      ],
      principlesP2:
        'زه په تدریجي تمرین، فکري ډیزاین او داسې کوډ لیکلو باور لرم چې ساتنه او پراختیا یې اسانه وي.',
      profileRole: 'د کمپیوټر ساینس محصل',
      profileUniversity: 'پکتیا پوهنتون · معلوماتي سیستمونه',
      directionTitle: 'اکاډمیک او انجینري مسیر',
      directionBadge: 'معلوماتي سیستمونه',
      directionDesc:
        'په پکتیا پوهنتون کې د اړیکیزو ډېټابېسونو سیستم، د انډروایډ اپلیکیشن جوړولو او د چټکو وېبپاڼو په معمارۍ کې پرمختګ.',
      interestsTitle: 'اصلي لېوالتیاوې',
      interests: [
        'د انډروایډ اپلیکیشن جوړول',
        'د ډېټابېس ماډلینګ (SQL)',
        'د عصري وېب مخپاڼې (React)',
        'افلاین سیستمونه او بې‌انټرنېټه کارېدنه',
      ],
    },
    skills: {
      tag: '۰۲ — تخنیکي وسایل او مهارتونه',
      headline: 'تخنیکي مهارتونه او اساسي بنسټونه',
      subtitle: 'هغه اساسي وړتیاوې چې د پوهنتوني زده کړو، پروژو او عملي پروګرامینګ له لارې ترلاسه شوې دي.',
      competenciesSuffix: 'مهارتونه',
      activeCapability: 'عملي مهارت',
      appliedInCode: 'په پروژو کې',
      activeLearningTitle: 'د مهارتونو پړاوونه او نوي اهداف',
      activeLearningSubtitle: 'د اوسنیو اساسي مهارتونو، د ودې په حال کې وړتیاوو او راتلونکو موخو تفکیک',
      inStudyBadge: 'اکاډمیک او عملي',
    },
    services: {
      tag: '۰۳ — کاري خدمات',
      headline: 'د سافټویر عملي خدمات',
      subtitle: 'هغه رښتیني خدمات چې د محصل په توګه یې د پوهنتوني زده کړو او پروژو له مخې د ترسره کولو توان لرم.',
      softwareTitle: 'سافټویر جوړونه',
      softwareDesc: 'د جاوا او کوټلین ژبو په مرسته د پاک او پوهېدونکي کوډ سره د عملي اپلیکیشنونو جوړول.',
      webTitle: 'وېب پرمختیا',
      webDesc: 'د HTML، CSS، جاواسکریپټ، React او TypeScript په مرسته د چټکو او ځواب ویونکو وېبپاڼو جوړول.',
      databaseTitle: 'د ډېټابېس حل لارې',
      databaseDesc: 'د اړیکیزو ډېټابېسونو ډیزاین او په SQL، MySQL، SQLite او Room کې د ډېټا منظم مدیریت.',
      uiTitle: 'د کاروونکي مخپاڼې تطبیق (UI)',
      uiDesc: 'د ډیزاینونو عملي کول په داسې بڼه چې کارول یې ساده، منظم او په موبایل کې اسانه وي.',
      futureVision: 'زه متعهد یم چې پاک او د پوهېدو وړ کوډ ولیکم چې د کاروونکي محرمیت او د وسیلې سپکوالي ته درناوی ولري.',
      productionQuality: 'عملي پراختیا',
    },
    projects: {
      tag: '۰۴ — غوره پروژې',
      headline: 'عملي کارونه او پروژې',
      subtitle: 'هغه پروژې چې په موبایل، وېب او اتومات جوړولو کې ما پخپله جوړې کړې دي.',
      allFilter: 'ټولې',
      filters: {
        all: 'ټولې پروژې',
        ai: 'مصنوعي هوښیارتیا (AI)',
        web: 'وېب (Web)',
        automation: 'اتوماسیون (Automation)',
        mobile: 'موبایل (Mobile)',
      },
      showingCategory: 'د وېشنیزې پروژې',
      resetFilter: 'ټولې پروژې وښایاست',
      noProjectsMatch: 'په دې وېشنیزه کې کومه پروژه ونه موندل شوه.',
      viewCaseStudy: 'د پروژې تفصیلي معلومات',
      sourceCode: 'سورس کوډ',
      verifiedProject: 'فعاله پروژه',
      problemTitle: 'اصلي ننګونه او ستونزه',
      solutionTitle: 'عملي حل لاره',
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
      headline: 'اکاډمیک او کاري مزل',
      subtitle: 'په پکتیا پوهنتون کې له بنسټیزو درسونو څخه د سافټویر انجینرۍ پر لور عملي پرمختګ.',
      currentFocus: 'اوسنی تمرکز',
      nextMilestone: 'راتلونکی مسیر',
    },
    contact: {
      tag: '۰۶ — اړیکه',
      headline: 'کومه پروژه یا همکاري لرئ؟',
      subtitle: 'زه د نویو پروژو، ګډو زده کړو او تخنیکي همکاریو په اړه خبرو اترو ته چمتو یم.',
      directEmail: 'مستقیمه پوښتنه',
      copyEmail: 'پیغام کاپي کړئ',
      emailCopied: 'پیغام کاپي شو',
      draftShortcut: 'د پیغام مسوده',
      subjectPlaceholder: 'موضوع (د بېلګې په توګه: همکاري یا پوښتنه)',
      messagePlaceholder: 'خپل پیغام دلته ولیکئ...',
      emailClientNote: 'د مستقیمې اړیکې لپاره له دې مسودې ګټه واخلئ.',
      openInEmailApp: 'مسوده کاپي کړئ',
    },
    footer: {
      subline: 'کمپیوټر ساینس · معلوماتي سیستمونه · پکتیا پوهنتون',
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
      subline: 'دانشجوی کامپیوتر ساینس · سیستم‌های معلوماتی · ۲۰۲۶',
      role: 'توسعه‌دهنده نرم‌افزار',
      headlinePre: 'من نرم‌افزارهای کاربردی و',
      headlineHighlight: 'تجربه‌های مدرن دیجیتال می‌سازم.',
      headlinePost: '',
      description:
        'دانشجوی کامپیوتر ساینس متمرکز بر توسعه نرم‌افزار، برنامه‌های اندروید، رابط‌های وب واکنش‌گرا، پایگاه‌های داده و راهکارهای کاربردی.',
      viewWork: 'مشاهده کارهای من',
      contactMe: 'تماس با من',
      metrics: {
        metric1Value: '+۶',
        metric1Label: 'پروژه‌ها',
        metric2Value: 'توسعه نرم‌افزار',
        metric2Label: 'تمرکز کاری',
        metric3Value: '۲۰۲۶',
        metric3Label: 'دانشجوی CS & IS',
      },
      softwarePillar: 'جاوا و کاتلین',
      webPillar: 'ری‌اکت و تایپ‌اسکریپت',
      dataPillar: 'دیتابیس و SQL',
    },
    about: {
      tag: '۰۱ — درباره و تمرکز کاری',
      headlinePre: 'ساخت نرم‌افزارهای کاربردی با کنجکاوی و',
      headlineHighlight: 'یادگیری منضبط.',
      headlinePost: '',
      intro1:
        'من عبدالجلیل ځواک هستم، دانشجوی کامپیوتر ساینس در پوهنتون پکتیا با گرایش سیستم‌های معلوماتی. تمرکز اصلی من ساخت نرم‌افزارهای کاربردی و تقویت پایه‌های برنامه‌نویسی، دیتابیس، توسعه وب و اپلیکیشن است.',
      intro2:
        'از تبدیل ایده‌ها به برنامه‌های مفید لذت می‌برم و همواره از طریق دروس دانشگاهی، پروژه‌های شخصی و آزمایش‌های عملی دانش خود را ارتقا می‌دهم.',
      educationTitle: 'تحصیلات',
      educationDegree: 'کامپیوتر ساینس',
      educationSub: 'سیستم‌های معلوماتی · پوهنتون پکتیا · ۲۰۲۶',
      focusTitle: 'تمرکز فنی',
      focusDomain: 'توسعه نرم‌افزار',
      focusSub: 'کاتلین، جاوا، جاوااسکریپت، تایپ‌اسکریپت، SQL',
      learningTitle: 'اهداف آموزشی',
      learningDomain: 'پایه‌های توسعه فول‌استک',
      learningSub: 'APIs، معماری نرم‌افزار و دیتابیس',
      showLess: 'نمایش کمتر',
      showPrinciples: 'اصول توسعه من',
      requestResume: 'درخواست سی‌وی / رزومه',
      principlesHeading: 'اصول توسعه من',
      principlesP1:
        'به ساخت راه‌حل‌های کاربردی و کدهای خوانا باور دارم. یادگیری از طریق پروژه‌های واقعی را ترجیح می‌دهم و راه‌حل‌های ساده و قابل‌اطمینان را بر پیچیدگی‌های غیرضروری مقدم می‌دانم.',
      principlesList: [
        'ساخت راه‌حل‌های کاربردی برای نیازهای واقعی',
        'نوشتن کدهای خوانا، استاندارد و قابل‌درک',
        'یادگیری عمیق از طریق پروژه‌های واقعی',
        'ترجیح معماری‌های ساده و مطمئن بر پیچیدگی‌های زائد',
        'احترام به حریم خصوصی کاربر و بهینه‌سازی منابع سیستم',
      ],
      principlesP2:
        'با بازبینی مستمر پروژه‌هایم را بهبود می‌بخشم و به حریم خصوصی کاربر و مصرف بهینه منابع سیستم احترام می‌گذارم.',
      profileRole: 'دانشجوی کامپیوتر ساینس',
      profileUniversity: 'پوهنتون پکتیا · سیستم‌های معلوماتی',
      directionTitle: 'مسیر آکادمیک و مهندسی',
      directionBadge: 'سیستم‌های معلوماتی',
      directionDesc:
        'تعمیق پایه‌های سیستم‌های پایگاه داده رابطه‌ای، توسعه اپلیکیشن بومی اندروید و رابط‌های مدرن وب در پوهنتون پکتیا.',
      interestsTitle: 'علاقه‌مندی‌های اصلی',
      interests: [
        'توسعه اپلیکیشن‌های اندروید',
        'طراحی و مدلسازی دیتابیس (SQL)',
        'رابط‌های کاربری واکنش‌گرا (React)',
        'معماری سیستم‌های آفلاین‌محور',
      ],
    },
    skills: {
      tag: '۰۲ — جعبه‌ابزار فنی',
      headline: 'مهارت‌ها و پایه‌های فنی',
      subtitle: 'قابلیت‌های اساسی که از طریق دروس دانشگاهی، پروژه‌ها و پیاده‌سازی کاربردی نرم‌افزار شکل گرفته‌اند.',
      competenciesSuffix: 'مهارت',
      activeCapability: 'مهارت کاربردی',
      appliedInCode: 'در پروژه‌ها',
      activeLearningTitle: 'سطوح مهارت و اهداف یادگیری',
      activeLearningSubtitle: 'تفکیک مهارت‌های پایه‌ای موجود، مهارت‌های در حال گسترش و اهداف آموزشی پیش‌رو',
      inStudyBadge: 'آکادمیک و کاربردی',
    },
    services: {
      tag: '۰۳ — خدمات تخصصی',
      headline: 'خدمات کاربردی توسعه نرم‌افزار',
      subtitle: 'خدمات واقع‌بینانه بر مبنای دانش دانشگاهی و پروژه‌های عملی پیاده‌شده.',
      softwareTitle: 'توسعه نرم‌افزار',
      softwareDesc: 'توسعه اپلیکیشن‌های کاربردی با کاتلین و جاوا با تمرکز بر ساختار تمیز و کد قابل‌فهم.',
      webTitle: 'توسعه وب',
      webDesc: 'ایجاد وبسایت‌های واکنش‌گرا و مدرن با استفاده از HTML، CSS، جاوااسکریپت، ری‌اکت و تایپ‌اسکریپت.',
      databaseTitle: 'راه‌حل‌های پایگاه داده',
      databaseDesc: 'طراحی اسکیمای رابطه‌ای در SQL و مدیریت دیتابیس در SQLite و Room.',
      uiTitle: 'پیاده‌سازی رابط کاربری (UI)',
      uiDesc: 'تبدیل ایده‌ها به رابط‌های کاربری تمیز و هماهنگ، با رعایت فاصله، خوانایی و تناسب موبایل.',
      futureVision: 'همواره متعهد به ارائه کدهای تمیز و بهینه‌ای هستم که حریم خصوصی و منابع کاربر را پاس می‌دارد.',
      productionQuality: 'توسعه کاربردی',
    },
    projects: {
      tag: '۰۴ — پروژه‌های منتخب',
      headline: 'پروژه‌ها و نمونه‌کارها',
      subtitle: 'پروژه‌های واقعی در حوزه اپلیکیشن‌های اندروید، وب و ابزارهای اتوماسیون.',
      allFilter: 'همه',
      filters: {
        all: 'همه پروژه‌ها',
        ai: 'هوش مصنوعی (AI)',
        web: 'وب (Web)',
        automation: 'اتوماسیون (Automation)',
        mobile: 'موبایل (Mobile)',
      },
      showingCategory: 'پروژه‌های دسته‌بندی',
      resetFilter: 'نمایش همه پروژه‌ها',
      noProjectsMatch: 'پروژه‌ای در این دسته‌بندی یافت نشد.',
      viewCaseStudy: 'جزئیات پروژه',
      sourceCode: 'سورس‌کد',
      verifiedProject: 'پروژه فعال',
      problemTitle: 'چالش و مسئله اصلی',
      solutionTitle: 'راهکار کاربردی',
      keyFeatures: 'قابلیت‌های کلیدی',
      techStack: 'تکنالوژی‌های مورداستفاده',
      viewRepo: 'مشاهده در گیت‌هاب',
      liveDemo: 'پیش‌نمایش زنده',
      closeCaseStudy: 'بستن',
      statusCompleted: 'تکمیل‌شده',
      statusInProgress: 'در حال ساخت',
    },
    journey: {
      tag: '۰۵ — مسیر رشد و دستاوردها',
      headline: 'مسیر یادگیری و رشد',
      subtitle: 'پیشرفت گام‌به‌گام از دروس دانشگاهی پکتیا تا مهندسی نرم‌افزار.',
      currentFocus: 'تمرکز فعلی',
      nextMilestone: 'مسیر آینده',
    },
    contact: {
      tag: '۰۶ — ارتباط با من',
      headline: 'پروژه یا ایده‌ای در ذهن دارید؟',
      subtitle: 'همیشه از گفتگو پیرامون پروژه‌های نرم‌افزاری و همکاری‌های فنی استقبال می‌کنم.',
      directEmail: 'درخواست مستقیم',
      copyEmail: 'کپی پیام',
      emailCopied: 'پیام در کلیپ‌بورد کپی شد',
      draftShortcut: 'پیش‌نویس پیام',
      subjectPlaceholder: 'موضوع پیام (مثلاً: همکاری، سوال)',
      messagePlaceholder: 'متن پیام شما...',
      emailClientNote: 'جهت ارتباط مستقیم می‌توانید از این پیش‌نویس استفاده کنید.',
      openInEmailApp: 'کپی پیش‌نویس',
    },
    footer: {
      subline: 'کامپیوتر ساینس · سیستم‌های معلوماتی · پوهنتون پکتیا',
      rightsReserved: 'تمامی حقوق محفوظ است.',
    },
  },
};
