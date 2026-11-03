import {Language} from '../types';
export type {Language};

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    skills: string;
    roadmap: string;
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
    viewDetails: string;
    hideDetails: string;
    verifiedAreasTitle: string;
    learningTitle: string;
    learningNote: string;
    categories: {
      practical: string;
      practicalDesc: string;
      learning: string;
      learningDesc: string;
      foundational: string;
      foundationalDesc: string;
    };
    filterAll: string;
    verifiedEvidence: string;
  };
  roadmap: {
    tag: string;
    headline: string;
    subtitle: string;
    closingStatement: string;
    stagePrefix: string;
    foundationalBadge: string;
    currentBadge: string;
    futureBadge: string;
    backendDecisionTitle: string;
    stages: {
      s1Title: string;
      s1Subtitle: string;
      s1Desc: string;
      s2Title: string;
      s2Subtitle: string;
      s2Desc: string;
      s3Title: string;
      s3Subtitle: string;
      s3Desc: string;
      s4Title: string;
      s4Subtitle: string;
      s4Desc: string;
      s4Decision: string;
      s5Title: string;
      s5Subtitle: string;
      s5Desc: string;
      s6Title: string;
      s6Subtitle: string;
      s6Desc: string;
      s7Title: string;
      s7Subtitle: string;
      s7Desc: string;
    };
  };
  services: {
    tag: string;
    headline: string;
    subtitle: string;
    s1Title: string;
    s1Desc: string;
    s2Title: string;
    s2Desc: string;
    s3Title: string;
    s3Desc: string;
    s4Title: string;
    s4Desc: string;
    s5Title: string;
    s5Desc: string;
    s6Title: string;
    s6Desc: string;
    processTitle: string;
    processSubtitle: string;
    processSteps: string[];
    productionQuality: string;
  };
  projects: {
    tag: string;
    headline: string;
    subtitle: string;
    allFilter: string;
    filters: {
      all: string;
      mobile: string;
      web: string;
      automation: string;
      ai: string;
    };
    resetFilter: string;
    noProjectsMatch: string;
    viewCaseStudy: string;
    sourceCode: string;
    productVisionTitle: string;
    designPlanningTitle: string;
    architectureTitle: string;
    developerContributionTitle: string;
    challengesSolutionsTitle: string;
    keyFeaturesTitle: string;
    techStackTitle: string;
    viewRepo: string;
    liveDemo: string;
    closeCaseStudy: string;
    statusCompleted: string;
    statusInProgress: string;
    behindTheBuild: string;
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
      roadmap: 'Roadmap',
      services: 'Services',
      projects: 'Projects',
      journey: 'Journey',
      contact: 'Contact',
      letsTalk: "Let's Talk",
      language: 'Language',
    },
    hero: {
      statusBadge: 'Abdul Jalil Zwak',
      subline: 'Computer Science · Information Systems · Paktia University',
      role: 'Software Developer',
      headlinePre: 'Building reliable',
      headlineHighlight: 'web & mobile applications',
      headlinePost: 'with clean, thoughtful code.',
      description:
        'Computer Science student & developer crafting responsive web apps, native Android software, and clean digital experiences.',
      viewWork: 'View My Work',
      contactMe: 'Contact Me',
      metrics: {
        metric1Value: 'Software Dev',
        metric1Label: 'Practical Focus',
        metric2Value: 'Android & Web',
        metric2Label: 'Active Work',
        metric3Value: '2026',
        metric3Label: 'Paktia University',
      },
    },
    about: {
      tag: '01 — PERSONAL IDENTITY & FOCUS',
      headlinePre: 'Building purposeful software with curiosity and',
      headlineHighlight: 'disciplined engineering.',
      headlinePost: '',
      intro1:
        'I am a Computer Science student at Paktia University specializing in Information Systems, dedicated to engineering practical applications that solve everyday needs. My daily development work bridges product thinking with hands-on technical building.',
      intro2:
        'Rather than merely writing surface-level code, I invest substantial effort into conceptual planning, application architecture, UI design decisions, code review, debugging, and iterative refinement. I believe the best software is honest, lightweight, and dependable.',
      educationTitle: 'Academic Background',
      educationDegree: 'Computer Science (B.Sc.)',
      educationSub: 'Information Systems Specialization · Paktia University (Class of 2026)',
      focusTitle: 'Technical Development',
      focusDomain: 'Software Engineering',
      focusSub: 'Native Android, Web Applications, Relational Databases & Tooling',
      learningTitle: 'Future Direction',
      learningDomain: 'Full-Stack & AI Integration',
      learningSub: 'Scalable Backends, Cloud Services & Intelligent Application Features',
      showLess: 'Show Less',
      showPrinciples: 'My Development Principles',
      requestResume: 'Request Resume / CV',
      principlesHeading: 'My Development Principles',
      principlesP1:
        'I prioritize practical utility, clean structure, and respect for user resources. In every project, I hold myself accountable to these principles:',
      principlesList: [
        'Build practical solutions that address genuine user problems',
        'Prioritize clear, maintainable architecture over unnecessary complexity',
        'Take full ownership of product structure, design decisions, and code quality',
        'Learn deeply through iterative project implementation and deliberate practice',
        'Safeguard user privacy and optimize runtime performance on all hardware',
      ],
      principlesP2:
        'Continuous growth comes through disciplined building, testing on real physical hardware, and learning from technical challenges.',
      profileRole: 'Software Developer · CS Student',
      profileUniversity: 'Paktia University · Information Systems',
      directionTitle: 'Academic & Engineering Direction',
      directionBadge: 'Information Systems',
      directionDesc:
        'Advancing in relational database systems, native Android development, and responsive web architecture while maintaining strong academic standing at Paktia University.',
      interestsTitle: 'Primary Focus Areas',
      interests: [
        'Practical Software Engineering',
        'Native Android Development (Kotlin & Room)',
        'Responsive Web Interfaces (React & TypeScript)',
        'Relational Databases & Data Modeling (SQL & MySQL)',
      ],
    },
    skills: {
      tag: '02 — TECHNICAL FOUNDATIONS',
      headline: 'Focused Technical Capabilities',
      subtitle: 'Structured across core software principles, relational databases, and modern web/mobile development.',
      viewDetails: 'View Focus Areas',
      hideDetails: 'Hide Details',
      verifiedAreasTitle: 'Verified Implementation Areas',
      learningTitle: 'Continuous Technical Growth',
      learningNote: 'Continuously strengthening software engineering foundations, studying real-world application architectures, and building practical, reliable digital products.',
      categories: {
        practical: 'Practical Application',
        practicalDesc: 'Technologies genuinely used in real projects, with sufficient understanding to explain, review, and validate their implementation.',
        learning: 'Currently Learning',
        learningDesc: 'Technologies actively studied through university coursework, practical exercises, and personal development.',
        foundational: 'Foundational Knowledge',
        foundationalDesc: 'Technologies whose fundamental concepts are understood, but whose practical proficiency is still developing.',
      },
      filterAll: 'All Categories',
      verifiedEvidence: 'Verified Evidence',
    },
    roadmap: {
      tag: '03 — FUTURE DIRECTION',
      headline: 'Future Development Direction',
      subtitle: 'From Programming Foundations to Full-Stack & AI-Integrated Software.',
      closingStatement: 'Continuously learning. Building with purpose. Growing through practical experience.',
      stagePrefix: 'Stage',
      foundationalBadge: 'Foundational',
      currentBadge: 'Active Focus',
      futureBadge: 'Upcoming Goal',
      backendDecisionTitle: 'Architectural Selection Open',
      stages: {
        s1Title: 'Programming Foundations',
        s1Subtitle: 'Core computer science and structured software thinking',
        s1Desc: 'Deepening comprehension of programming paradigms, robust problem solving, and disciplined debugging.',
        s2Title: 'Database Engineering',
        s2Subtitle: 'Relational modeling, schema design, and query optimization',
        s2Desc: 'Mastering relational database design, data integrity, transactional safety, and query design.',
        s3Title: 'Modern Web Development',
        s3Subtitle: 'Accessible, responsive, and type-safe client applications',
        s3Desc: 'Refining frontend engineering to deliver fast, accessible, and structured user experiences.',
        s4Title: 'Backend Engineering',
        s4Subtitle: 'Scalable server architecture, APIs, and business logic (Path Open)',
        s4Desc: 'Designing robust backend services. The specific backend stack direction is intentionally open between two strong paths, to be finalized after solidifying programming and database foundations.',
        s4Decision: 'Direction intentionally undecided: Option A (Java + Spring Boot) vs. Option B (TypeScript + Node.js). Final choice will follow foundational database and OOP mastery.',
        s5Title: 'Mobile Application Development',
        s5Subtitle: 'Native Android architecture, local storage, and offline-first reliability',
        s5Desc: 'Expanding on native Android expertise to architect production-grade, offline-first mobile applications.',
        s6Title: 'AI-Integrated Software',
        s6Subtitle: 'Connecting intelligent capabilities with practical software products',
        s6Desc: 'Integrating machine intelligence securely via backend endpoints to solve genuine user problems.',
        s7Title: 'Full-Stack Software Engineering',
        s7Subtitle: 'End-to-end product delivery across web, mobile, and backend systems',
        s7Desc: 'Unifying client applications, mobile apps, shared backend APIs, relational databases, AI services, and automated testing into complete, dependable digital products.',
      },
    },
    services: {
      tag: '04 — SERVICES',
      headline: 'Practical Development Services',
      subtitle: 'Realistic developer services grounded in actual coursework, verified technical skills, and software building experience.',
      s1Title: 'Responsive Website Development',
      s1Desc: 'Building modern, fast-loading, mobile-friendly websites with clean semantic HTML5, modern CSS, and React.',
      s2Title: 'Portfolio & Personal Websites',
      s2Desc: 'Crafting distinctive, professional developer portfolios with dark/light themes, typography, and multilingual support.',
      s3Title: 'UI Implementation & Redesign',
      s3Desc: 'Translating design concepts and wireframes into clean, responsive, accessible code with attention to spacing and layout.',
      s4Title: 'Existing Website Improvements',
      s4Desc: 'Refining existing web pages for mobile responsiveness, performance optimizations, and typographic consistency.',
      s5Title: 'Basic Database-Driven Applications',
      s5Desc: 'Designing relational schemas, setting up SQLite/MySQL tables, and creating structured CRUD data flows.',
      s6Title: 'Android Application Development',
      s6Desc: 'Developing offline-first native Android applications in Kotlin with Room database persistence and material design.',
      processTitle: 'Responsible Delivery Process',
      processSubtitle: 'A structured, transparent workflow ensuring clarity and dependable results for every project.',
      processSteps: [
        '1. Requirement Understanding',
        '2. Scope Definition',
        '3. Planning & Architecture',
        '4. Implementation',
        '5. Review & Testing',
        '6. Feedback & Iteration',
        '7. Final Delivery',
      ],
      productionQuality: 'Realistic & Dependable Delivery',
    },
    projects: {
      tag: '05 — SELECTED PROJECTS',
      headline: 'Featured Work & Practical Projects',
      subtitle: 'Real software products demonstrating thoughtful planning, architectural decisions, and verified implementation effort.',
      allFilter: 'All',
      filters: {
        all: 'All Projects',
        mobile: 'Mobile (Android)',
        web: 'Web Applications',
        automation: 'Automation & Tools',
        ai: 'AI Prototypes',
      },
      resetFilter: 'Show All Projects',
      noProjectsMatch: 'No projects match this category.',
      viewCaseStudy: 'Behind the Build',
      sourceCode: 'Source Code',
      productVisionTitle: 'Product Vision',
      designPlanningTitle: 'Design & Planning',
      architectureTitle: 'Architecture & Structure',
      developerContributionTitle: 'Verified Developer Contribution',
      challengesSolutionsTitle: 'Challenges & Solutions',
      keyFeaturesTitle: 'Key Implemented Features',
      techStackTitle: 'Technologies Actually Used',
      viewRepo: 'View on GitHub',
      liveDemo: 'Live Demo',
      closeCaseStudy: 'Close Details',
      statusCompleted: 'Completed',
      statusInProgress: 'In Development',
      behindTheBuild: 'Behind the Build: Project Case Study',
    },
    journey: {
      tag: '06 — TIMELINE & MILESTONES',
      headline: 'Academic & Development Journey',
      subtitle: 'Progressing step-by-step from fundamental computer science to applied software engineering.',
      currentFocus: 'Current Focus',
      nextMilestone: 'Future Direction',
    },
    contact: {
      tag: '07 — GET IN TOUCH',
      headline: 'Have a project or opportunity in mind?',
      subtitle: 'I am open to discussing software projects, collaborative learning, and technical opportunities.',
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
      roadmap: 'راتلونکی مسیر',
      services: 'خدمات',
      projects: 'پروژې',
      journey: 'زده کړې مزل',
      contact: 'اړیکه',
      letsTalk: 'خبرې وکړو',
      language: 'ژبه',
    },
    hero: {
      statusBadge: 'عبدالجلیل ځواک',
      subline: 'د کمپیوټر ساینس محصل · معلوماتي سیستمونه · پکتیا پوهنتون',
      role: 'د سافټویر جوړونکی',
      headlinePre: 'د عملي او باوري',
      headlineHighlight: 'وېب او موبایل سافټویرونو',
      headlinePost: 'جوړول او پراختیا.',
      description:
        'د معلوماتي سیستمونو محصل او پروګرامر، چې د باوري وېبپاڼو، انډروایډ کاریالونو او ساده، چټکو کارن مخونو په جوړولو بوخت یم.',
      viewWork: 'زما کارونه وګورئ',
      contactMe: 'اړیکه ونیسئ',
      metrics: {
        metric1Value: 'سافټویر جوړونکی',
        metric1Label: 'عملي کار',
        metric2Value: 'انډروایډ او وېب',
        metric2Label: 'فعال تمرکز',
        metric3Value: '۲۰۲۶',
        metric3Label: 'پکتیا پوهنتون',
      },
    },
    about: {
      tag: '۰۱ — زما او تمرکز په اړه',
      headlinePre: 'د تلپاتې هڅې او پوهنتوني زده کړې سره د',
      headlineHighlight: 'عملي سافټویر جوړول.',
      headlinePost: '',
      intro1:
        'زه عبدالجلیل ځواک یم، په پکتیا پوهنتون کې د کمپیوټر ساینس پوهنځي د معلوماتي سیستمونو (IS) محصل. زما تمرکز د عملي او ګټورو سافټویرونو جوړول او په مسلکي سافټویر انجینرۍ کې پرمختګ دی.',
      intro2:
        'زه یوازې کوډ نه لیکم، بلکې د پروژې په فکري جوړښت، د انټرفیس په ساده او اغېزمن ډیزاین، د معماري په ټاکنه، د کوډ په سمون او د تخنیکي ستونزو په حل کې خپله ټوله هڅه کوم. زما موخه د داسې سافټویرونو جوړول دي چې باوري، سپک او رښتیني وي.',
      educationTitle: 'اکاډمیک شالید',
      educationDegree: 'کمپیوټر ساینس (لیسانس)',
      educationSub: 'معلوماتي سیستمونه · پکتیا پوهنتون (د ۲۰۲۶ دور)',
      focusTitle: 'فني تمرکز',
      focusDomain: 'سافټویر انجینري',
      focusSub: 'بومي انډروایډ، وېب اپلیکیشنونه، اړیکیز ډېټابېسونه او اوزارونه',
      learningTitle: 'راتلونکی مسیر',
      learningDomain: 'بشپړ سټیک او له AI سره یوځای کېدنه',
      learningSub: 'بیک اینډ سیستمونه، کلاوډ خدمات او هوښیارې ځانګړتیاوې',
      showLess: 'لږ ښودل',
      showPrinciples: 'زما کاري اصول',
      requestResume: 'د سي وي غوښتنه',
      principlesHeading: 'زما کاري اصول',
      principlesP1:
        'زه عملي حل لارو، د کوډ پاکوالي او د کاروونکو د سرچینو سپما ته ارزښت ورکوم. په خپلو کارونو کې دا اصول عملي کوم:',
      principlesList: [
        'د رښتینو ستونزو د هواري لپاره عملي حل لارې جوړول',
        'د بې ځایه پېچلتیاوو پر ځای د ساده او باوري معمارۍ غوره کول',
        'د محصول په پلان، ډیزاین او د کوډ په کیفیت پوره مسؤلیت اخیستل',
        'د عملي پروژو او دوامداره تمرین له لارې ژوره زده کړه کول',
        'د کاروونکو محرمیت او د موبایل او کمپیوټر بېټرۍ او حافظې ته درناوی',
      ],
      principlesP2:
        'مسلکي وده د رښتینو پروژو په عملي جوړولو، په اصلي موبایلونو کې په ازمویلو او له تخنیکي ننګونو څخه په زده کړه ترلاسه کېږي.',
      profileRole: 'د سافټویر جوړونکی · د CS محصل',
      profileUniversity: 'پکتیا پوهنتون · معلوماتي سیستمونه',
      directionTitle: 'اکاډمیک او انجینري مسیر',
      directionBadge: 'معلوماتي سیستمونه',
      directionDesc:
        'په پکتیا پوهنتون کې د اړیکیزو ډېټابېسونو سیستم، د انډروایډ اپلیکیشن جوړولو او د چټکو وېبپاڼو په معمارۍ کې ګام پر ګام پرمختګ.',
      interestsTitle: 'اصلي کاري برخې',
      interests: [
        'عملي سافټویر انجینري',
        'د انډروایډ اپلیکیشن جوړول (Kotlin & Room)',
        'ځواب ویونکې وېب مخپاڼې (React & TypeScript)',
        'اړیکیز ډېټابېسونه او د ډېټا ماډلینګ (SQL & MySQL)',
      ],
    },
    skills: {
      tag: '۰۲ — تخنیکي بنسټونه',
      headline: 'متمرکز تخنیکي مهارتونه',
      subtitle: 'د سافټویر پراختیا، اړیکیزو ډېټابېسونو او د وېب او موبایل جوړولو په دریو مهمو کټګوریو ویشل شوي.',
      viewDetails: 'تخنیکي جزئیات',
      hideDetails: 'پټول',
      verifiedAreasTitle: 'د عملي پلي کولو باوري برخې',
      learningTitle: 'دوامداره مسلکي وده',
      learningNote: 'په دوامداره توګه د سافټویر انجینرۍ د اساساتو پیاوړي کول، د عملي سیسټمونو د معمارۍ زده کړه او د ګټورو او ډاډمنو ډیجیټل محصولاتو جوړول.',
      categories: {
        practical: 'عملي کارونه (Practical Application)',
        practicalDesc: 'هغه ټکنالوژۍ چې په رښتینو پروژو کې کارول شوې او بشپړ عملي پوهاوی ورڅخه لرم.',
        learning: 'د زده کړې په حال کې (Currently Learning)',
        learningDesc: 'هغه موضوعات چې دمګړۍ په پوهنتوني درسونو او عملي تمرینونو کې تر کار لاندې دي.',
        foundational: 'بنسټیزه پوهه (Foundational Knowledge)',
        foundationalDesc: 'هغه ټکنالوژۍ چې مفاهیم یې زده شوي خو عملي تجربه یې د ودې په لور روانه ده.',
      },
      filterAll: 'ټولې وېشنیزې',
      verifiedEvidence: 'باوري ثبوت',
    },
    roadmap: {
      tag: '۰۳ — راتلونکی مسیر',
      headline: 'د راتلونکي پرمختګ مسیر',
      subtitle: 'له بنسټیز پروګرامینګ څخه تر فول سټیک او له AI سره مدغم سافټویرونو پورې.',
      closingStatement: 'دوامداره زده کړه · له هدف سره ودانول · په عملي تجربو کې وده کول.',
      stagePrefix: 'پړاو',
      foundationalBadge: 'بنسټیز',
      currentBadge: 'فعال تمرکز',
      futureBadge: 'راتلونکی هدف',
      backendDecisionTitle: 'د بیک اینډ ټاکنه خلاصه ده',
      stages: {
        s1Title: 'د پروګرامینګ بنسټونه',
        s1Subtitle: 'اصلي کمپیوټر ساینس او منظم سافټویري فکر',
        s1Desc: 'د پروګرامینګ د اصولو ژوره زده کړه، د ستونزو حل او د کوډ اصلاح کول.',
        s2Title: 'د ډېټابېس انجینري',
        s2Subtitle: 'اړیکیز ماډلینګ، د جدولونو ډیزاین او د پوښتنو اصلاح',
        s2Desc: 'د اړیکیزو ډېټابېسونو جوړول، د معلوماتو ساتنه او په SQL او MySQL کې دقیق کوېري ګانې.',
        s3Title: 'عصري وېب پرمختیا',
        s3Subtitle: 'چټک، ځواب ویونکي او باوري وېب اپلیکیشنونه',
        s3Desc: 'د React او TypeScript په مرسته د چټکو، ښکلو او منظمو وېب انټرفیسونو وړاندې کول.',
        s4Title: 'د بیک اینډ انجینري',
        s4Subtitle: 'د سرور معمارۍ، APIs او ډېټا پروسس (لار خلاصه ده)',
        s4Desc: 'د سرور د خدماتو جوړول. د بیک اینډ د ټکنالوژۍ ټاکنه په قصدي ډول د دوو لارو ترمنځ خلاصه ساتل شوې ترڅو د ډېټابېس او پروګرامینګ له بشپړېدو وروسته وټاکل شي.',
        s4Decision: 'پرېکړه خلاصه ده: الف لاره (Java + Spring Boot) یا ب لاره (TypeScript + Node.js). وروستۍ ټاکنه به د عملي ضرورت له مخې وشي.',
        s5Title: 'د موبایل اپلیکیشن جوړول',
        s5Subtitle: 'بومي انډروایډ معمارۍ، محلي زېرمه او افلاین باور',
        s5Desc: 'د کوټلین او Room په مرسته د لوړ کیفیت او بې‌انټرنېټه انډروایډ کاریالونو پراخول.',
        s6Title: 'له AI سره مدغم سافټویرونه',
        s6Subtitle: 'له رښتینو محصولاتو سره د مصنوعي هوښیارتیا نښلول',
        s6Desc: 'د خوندي سرورونو له لارې د هوښیارو ځانګړتیاوو راوستل ترڅو د کاروونکو رښتینې ستونزې هوارې کړي.',
        s7Title: 'بشپړ سټیک سافټویر انجینري',
        s7Subtitle: 'له وېب او موبایل څخه تر سرورونو او ډېټابېسونو پورې پوره محصول وړاندې کول',
        s7Desc: 'د وېبپاڼو، موبایل، بیک اینډ، ډېټابېس او د ټېسټینګ په یوځای کولو سره د بشپړو سافټویرونو سپارل.',
      },
    },
    services: {
      tag: '۰۴ — کاري خدمات',
      headline: 'د سافټویر عملي خدمات',
      subtitle: 'هغه رښتیني او ګټور خدمات چې د خپلو عملي زده کړو او پروژو له مخې یې په ډاډمنه توګه وړاندې کوم.',
      s1Title: 'ځواب ویونکې وېبپاڼې',
      s1Desc: 'د HTML، CSS او React په کارولو سره د داسې وېبپاڼو جوړول چې په موبایل او کمپیوټر کې چټکې او ښکلې وي.',
      s2Title: 'شخصي او پورټفولیو وېبپاڼې',
      s2Desc: 'د متخصصینو او کاروونکو لپاره د څو ژبو، ډارک/لایټ موډ او ځانګړي ډیزاین سره د پورټفولیو جوړول.',
      s3Title: 'د انټرفیس تطبیق (UI Implementation)',
      s3Desc: 'د ډیزایني مفکورو او سکیچونو اړول په پاک، منظم او ځواب ویونکي کوډ باندې.',
      s4Title: 'د موجوده وېبپاڼو سمون او ښه والی',
      s4Desc: 'په پخوانیو وېبپاڼو کې د موبایل غبرګون، د سرعت ښه کول او د ډیزاین د نیمګړتیاوو هوارول.',
      s5Title: 'د ډېټابېس پر بنسټ بنسټیز کاریالونه',
      s5Desc: 'د اړیکیزو جدولونو جوړول، په SQLite او MySQL کې د معلوماتو خوندي کول او د هغوی منظم مدیریت.',
      s6Title: 'د انډروایډ بومي کاریالونه',
      s6Desc: 'په کوټلین کې د داسې اپلیکیشنونو جوړول چې له انټرنېټ پرته هم په چټکۍ او پوره ډاډ سره کار کوي.',
      processTitle: 'د کار باوري او منظم پړاوونه',
      processSubtitle: 'یو شفاف او ګام په ګام بهیر چې هر کار له پیل څخه تر پایه په بریالیتوب رسوي.',
      processSteps: [
        '۱. د اړتیاوو دقیق پوهاوی',
        '۲. د کار د حدودو ټاکل',
        '۳. پلان او د جوړښت معمارۍ',
        '۴. د کوډ عملي تطبیق',
        '۵. څېړنه او هراړخیز ټېسټ',
        '۶. د پېرودونکي نظر او سمون',
        '۷. وروستۍ سپارل او ډاډ',
      ],
      productionQuality: 'باوري او رښتینی کار',
    },
    projects: {
      tag: '۰۵ — غوره پروژې',
      headline: 'عملي کارونه او پروژې',
      subtitle: 'هغه پروژې چې په موبایل، وېب او اتومات جوړولو کې ما پخپله جوړې کړې او عملي کار مې پرې کړی دی.',
      allFilter: 'ټولې',
      filters: {
        all: 'ټولې پروژې',
        mobile: 'موبایل (انډروایډ)',
        web: 'وېب اپلیکیشنونه',
        automation: 'اتوماسیون او اوزار',
        ai: 'د AI لومړني ماډلونه',
      },
      resetFilter: 'ټولې پروژې وښایاست',
      noProjectsMatch: 'په دې وېشنیزه کې کومه پروژه ونه موندل شوه.',
      viewCaseStudy: 'د پروژې شالید او تفصیل',
      sourceCode: 'سورس کوډ',
      productVisionTitle: 'د محصول موخه او لیدلوری',
      designPlanningTitle: 'ډیزاین او پلان جوړونه',
      architectureTitle: 'د پروژې جوړښت او معمارۍ',
      developerContributionTitle: 'زما رښتینې ونډه او کار',
      challengesSolutionsTitle: 'ننګونې او حل لارې',
      keyFeaturesTitle: 'مهمې عملي ځانګړتیاوې',
      techStackTitle: 'کارول شوې ټکنالوژۍ',
      viewRepo: 'کوډ کتل په GitHub کې',
      liveDemo: 'ژوندی لید',
      closeCaseStudy: 'بندول',
      statusCompleted: 'بشپړه شوې',
      statusInProgress: 'تر کار لاندې',
      behindTheBuild: 'د پروژې شاته: ژور تخنیکي معلومات',
    },
    journey: {
      tag: '۰۶ — پړاوونه او مزل',
      headline: 'اکاډمیک او کاري مزل',
      subtitle: 'په پکتیا پوهنتون کې له بنسټیزو درسونو څخه د سافټویر انجینرۍ پر لور عملي پرمختګ.',
      currentFocus: 'اوسنی تمرکز',
      nextMilestone: 'راتلونکی مسیر',
    },
    contact: {
      tag: '۰۷ — اړیکه',
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
      roadmap: 'مسیر آینده',
      services: 'خدمات',
      projects: 'پروژه‌ها',
      journey: 'مسیر رشد',
      contact: 'تماس',
      letsTalk: 'گفتگو کنیم',
      language: 'زبان',
    },
    hero: {
      statusBadge: 'عبدالجلیل ځواک',
      subline: 'دانشجوی کامپیوتر ساینس · سیستم‌های معلوماتی · پوهنتون پکتیا',
      role: 'توسعه‌دهنده نرم‌افزار',
      headlinePre: 'توسعه و ساخت',
      headlineHighlight: 'برنامه‌های کاربردی وب و موبایل',
      headlinePost: 'با کدنویسی اصولی و مدرن.',
      description:
        'دانشجوی سیستم‌های معلوماتی و توسعه‌دهنده نرم‌افزار، متمرکز بر ساخت برنامه‌های وب، موبایل بومی و تجارب کاربری روان.',
      viewWork: 'مشاهده کارهای من',
      contactMe: 'تماس با من',
      metrics: {
        metric1Value: 'توسعه نرم‌افزار',
        metric1Label: 'تمرکز عملی',
        metric2Value: 'اندروید و وب',
        metric2Label: 'فعالیت جاری',
        metric3Value: '۲۰۲۶',
        metric3Label: 'پوهنتون پکتیا',
      },
    },
    about: {
      tag: '۰۱ — هویت فردی و تمرکز کاری',
      headlinePre: 'ساخت نرم‌افزارهای هدفمند با کنجکاوی و',
      headlineHighlight: 'مهندسی منضبط.',
      headlinePost: '',
      intro1:
        'من عبدالجلیل ځواک هستم، دانشجوی کامپیوتر ساینس در پوهنتون پکتیا با گرایش سیستم‌های معلوماتی. هدف من ایجاد برنامه‌های کاربردی است که پاسخگوی نیازهای واقعی روزمره باشند.',
      intro2:
        'رویکرد من فراتر از نوشتن کدهای سطحی است؛ من بر طراحی معماری، تصمیمات رابط کاربری، بازبینی دقیق کد، عیب‌یابی و بهینه‌سازی مستمر متمرکز هستم و باور دارم نرم‌افزار اصیل باید سبک، مطمئن و شفاف باشد.',
      educationTitle: 'پیشینه تحصیلی',
      educationDegree: 'لیسانس کامپیوتر ساینس',
      educationSub: 'سیستم‌های معلوماتی · پوهنتون پکتیا (دوره ۲۰۲۶)',
      focusTitle: 'توسعه فنی',
      focusDomain: 'مهندسی نرم‌افزار',
      focusSub: 'اندروید بومی، وب اپلیکیشن‌ها، دیتابیس‌های رابطه‌ای و ابزارها',
      learningTitle: 'جهت‌گیری آینده',
      learningDomain: 'توسعه فول‌استک و هوش مصنوعی',
      learningSub: 'بک‌اند مقیاس‌پذیر، خدمات ابری و قابلیت‌های هوشمند نرم‌افزاری',
      showLess: 'نمایش کمتر',
      showPrinciples: 'اصول توسعه من',
      requestResume: 'درخواست سی‌وی / رزومه',
      principlesHeading: 'اصول توسعه من',
      principlesP1:
        'من کارایی واقعی، ساختار تمیز و بهینه‌سازی منابع کاربر را در اولویت قرار می‌دهم و همواره به این اصول پایبندم:',
      principlesList: [
        'توسعه راه‌حل‌های کاربردی برای حل چالش‌های واقعی کاربران',
        'ترجیح معماری تمیز و قابل‌نگهداری بر پیچیدگی‌های زائد',
        'پذیرش کامل مسئولیت ساختار محصول، تصمیمات طراحی و کیفیت کد',
        'یادگیری عمیق از طریق پیاده‌سازی گام‌به‌گام پروژه‌ها و تمرین منسجم',
        'احترام به حریم خصوصی کاربر و بهینه‌سازی مصرف پردازنده و باتری',
      ],
      principlesP2:
        'پیشرفت واقعی از طریق ساخت پروژه‌های واقعی، آزمایش روی دستگاه‌های فیزیکی و درس گرفتن از موانع فنی حاصل می‌شود.',
      profileRole: 'توسعه‌دهنده نرم‌افزار · دانشجوی CS',
      profileUniversity: 'پوهنتون پکتیا · سیستم‌های معلوماتی',
      directionTitle: 'مسیر آکادمیک و مهندسی',
      directionBadge: 'سیستم‌های معلوماتی',
      directionDesc:
        'تعمیق پایه‌های سیستم‌های پایگاه داده رابطه‌ای، توسعه اپلیکیشن بومی اندروید و رابط‌های مدرن وب در پوهنتون پکتیا.',
      interestsTitle: 'حوزه‌های اصلی تمرکز',
      interests: [
        'مهندسی کاربردی نرم‌افزار',
        'توسعه برنامه‌های اندروید (Kotlin & Room)',
        'رابط‌های مدرن وب (React & TypeScript)',
        'پایگاه داده‌های رابطه‌ای و مدلسازی داده (SQL & MySQL)',
      ],
    },
    skills: {
      tag: '۰۲ — مبانی و توانمندی‌های فنی',
      headline: 'مهارت‌ها و توانمندی‌های متمرکز',
      subtitle: 'ساختاریافته در سه حوزه اصلی: مهندسی نرم‌افزار، پایگاه‌های داده رابطه‌ای و توسعه وب و موبایل.',
      viewDetails: 'مشاهده جزئیات',
      hideDetails: 'بستن جزئیات',
      verifiedAreasTitle: 'حوزه‌های پیاده‌سازی اثبات‌شده',
      learningTitle: 'رشد مستمر مهندسی',
      learningNote: 'تقویت پیوسته مبانی مهندسی نرم‌افزار، مطالعه معماری سیستم‌های کاربردی و توسعه هدفمند محصولات دیجیتال و مطمئن.',
      categories: {
        practical: 'کاربرد عملی (Practical Application)',
        practicalDesc: 'فناوری‌هایی که در پروژه‌های واقعی پیاده شده و تسلط کافی برای توضیح و بازبینی آن‌ها وجود دارد.',
        learning: 'در حال یادگیری (Currently Learning)',
        learningDesc: 'فناوری‌هایی که در دروس دانشگاهی و تمرینات هفتگی فعالانه در حال یادگیری و تقویت هستند.',
        foundational: 'دانش پایه‌ای (Foundational Knowledge)',
        foundationalDesc: 'مفاهیمی که اصول اولیه آن‌ها درک شده اما تسلط عملی آن‌ها در حال شکل‌گیری است.',
      },
      filterAll: 'همه دسته‌ها',
      verifiedEvidence: 'شواهد اثبات‌شده',
    },
    roadmap: {
      tag: '۰۳ — مسیر آینده',
      headline: 'مسیر پیشرفت و توسعه آینده',
      subtitle: 'از مبانی برنامه‌نویسی تا مهندسی فول‌استک و نرم‌افزارهای هوشمند.',
      closingStatement: 'یادگیری مستمر · ساخت هدفمند · بالندگی در بستره تجربه عملی.',
      stagePrefix: 'مرحله',
      foundationalBadge: 'پایه‌ای',
      currentBadge: 'تمرکز جاری',
      futureBadge: 'هدف آتی',
      backendDecisionTitle: 'انتخاب بک‌اند باز است',
      stages: {
        s1Title: 'مبانی برنامه‌نویسی',
        s1Subtitle: 'تفکر ساختارمند مهندسی و علوم کامپیوتر',
        s1Desc: 'تعمیق درک الگوهای برنامه‌نویسی، حل مسئله و متدهای اصولی عیب‌یابی.',
        s2Title: 'مهندسی پایگاه داده',
        s2Subtitle: 'طراحی رابطه‌ای، اسکیما و بهینه‌سازی کوئری‌ها',
        s2Desc: 'تسلط بر طراحی دیتابیس رابطه‌ای، جامعیت داده‌ها و تراکنش‌ها در SQL و MySQL.',
        s3Title: 'توسعه وب مدرن',
        s3Subtitle: 'برنامه‌های کلاینت دسترس‌پذیر و تایپ‌سیف',
        s3Desc: 'توسعه رابط‌های کاربری سریع و ماژولار با React و TypeScript.',
        s4Title: 'مهندسی بک‌اند',
        s4Subtitle: 'معماری سرور، طراحی API و منطق تجاری (مسیر باز است)',
        s4Desc: 'طراحی سرویس‌های پایدار بک‌اند. انتخاب تکنولوژی نهایی بک‌اند آگاهانه باز نگه داشته شده است تا پس از تقویت پایه‌های شی‌گرایی و دیتابیس تعیین گردد.',
        s4Decision: 'تصمیم‌گیری آگاهانه باز است: گزینه الف (Java + Spring Boot) یا گزینه ب (TypeScript + Node.js).',
        s5Title: 'توسعه اپلیکیشن موبایل',
        s5Subtitle: 'معماری بومی اندروید و عملکرد آفلاین‌محور',
        s5Desc: 'گسترش تخصص اندروید برای تولید برنامه‌های مقاوم و با قابلیت همگام‌سازی آفلاین با Kotlin و Room.',
        s6Title: 'نرم‌افزارهای مبتنی بر هوش مصنوعی',
        s6Subtitle: 'اتصال قابلیت‌های هوشمند به نرم‌افزارهای کاربردی',
        s6Desc: 'یکپارچه‌سازی امن مدل‌های هوش مصنوعی از طریق سرور برای حل نیازهای واقعی کاربران.',
        s7Title: 'مهندسی نرم‌افزار فول‌استک',
        s7Subtitle: 'توسعه سرتاسری سامانه‌ها میان وب، موبایل و سرویس‌های پشتیبان',
        s7Desc: 'یکپارچه‌سازی فرانت‌اند، اپلیکیشن موبایل، APIهای اشتراکی، پایگاه‌های داده و تست خودکار در قالب محصولی مطمئن.',
      },
    },
    services: {
      tag: '۰۴ — خدمات تخصصی',
      headline: 'خدمات کاربردی توسعه نرم‌افزار',
      subtitle: 'خدمات واقع‌بینانه بر مبنای دانش دانشگاهی، توانمندی‌های تأییدشده و تجربه عملی پیاده‌سازی.',
      s1Title: 'توسعه وبسایت‌های واکنش‌گرا',
      s1Desc: 'ساخت وبسایت‌های مدرن، سبک و سازگار با موبایل با HTML5، CSS مدرن و ری‌اکت.',
      s2Title: 'سایت‌های شخصی و پورتفولیو',
      s2Desc: 'طراحی پورتفولیوهای متمایز با پشتیبانی از حالت‌های تیره/روشن، تایپوگرافی تمیز و چندزبانه.',
      s3Title: 'پیاده‌سازی رابط کاربری (UI)',
      s3Desc: 'تبدیل طرح‌های شماتیک و وایرفریم‌ها به کدهای ماژولار، استاندارد و واکنش‌گرا.',
      s4Title: 'بهینه‌سازی وبسایت‌های موجود',
      s4Desc: 'بهینه‌سازی نمایش موبایل، افزایش سرعت بارگذاری و اصلاح ناهماهنگی‌های بصری.',
      s5Title: 'برنامه‌های پایه مبتنی بر دیتابیس',
      s5Desc: 'طراحی جداول رابطه‌ای، ایجاد جریان‌های داده در SQLite و MySQL و پیاده‌سازی عملیات CRUD.',
      s6Title: 'توسعه اپلیکیشن‌های بومی اندروید',
      s6Desc: 'توسعه اپلیکیشن‌های آفلاین‌محور در کاتلین با پایگاه داده Room و رابط کاربری منسجم.',
      processTitle: 'فرآیند مسئولانه و شفاف تحویل',
      processSubtitle: 'روندی گام‌به‌گام و قابل‌اتکا برای تضمین کیفیت و شفافیت در هر پروژه.',
      processSteps: [
        '۱. درک عمیق نیازمندی‌ها',
        '۲. تعریف محدوده و ویژگی‌ها',
        '۳. برنامه‌ریزی و طراحی معماری',
        '۴. پیاده‌سازی و کدنویسی',
        '۵. بازبینی و تست فنی',
        '۶. بازخورد و اعمال اصلاحات',
        '۷. تحویل نهایی و پشتیبانی',
      ],
      productionQuality: 'تحویل مطمئن و واقع‌بینانه',
    },
    projects: {
      tag: '۰۵ — پروژه‌های منتخب',
      headline: 'پروژه‌ها و نمونه‌کارها',
      subtitle: 'محصولات واقعی نرم‌افزاری که نشان‌دهنده برنامه‌ریزی سنجیده، تصمیمات ساختاری و تلاش عملی پیاده‌سازی هستند.',
      allFilter: 'همه',
      filters: {
        all: 'همه پروژه‌ها',
        mobile: 'موبایل (اندروید)',
        web: 'وب اپلیکیشن‌ها',
        automation: 'اتوماسیون و ابزارها',
        ai: 'طرح‌های هوش مصنوعی',
      },
      resetFilter: 'نمایش همه پروژه‌ها',
      noProjectsMatch: 'پروژه‌ای در این دسته‌بندی یافت نشد.',
      viewCaseStudy: 'روایت ساخت پروژه',
      sourceCode: 'سورس‌کد',
      productVisionTitle: 'چشم‌انداز و هدف محصول',
      designPlanningTitle: 'طراحی و برنامه‌ریزی',
      architectureTitle: 'ساختار و معماری فنی',
      developerContributionTitle: 'سهم و نقش واقعی من در پروژه',
      challengesSolutionsTitle: 'چالش‌ها و راهکارهای فنی',
      keyFeaturesTitle: 'قابلیت‌های کلیدی پیاده‌شده',
      techStackTitle: 'تکنالوژی‌های مورداستفاده',
      viewRepo: 'مشاهده در گیت‌هاب',
      liveDemo: 'پیش‌نمایش زنده',
      closeCaseStudy: 'بستن',
      statusCompleted: 'تکمیل‌شده',
      statusInProgress: 'در حال ساخت',
      behindTheBuild: 'روایت ساخت: جزئیات عمیق پروژه',
    },
    journey: {
      tag: '۰۶ — مسیر رشد و دستاوردها',
      headline: 'مسیر یادگیری و رشد',
      subtitle: 'پیشرفت گام‌به‌گام از دروس دانشگاهی پکتیا تا مهندسی نرم‌افزار.',
      currentFocus: 'تمرکز فعلی',
      nextMilestone: 'مسیر آینده',
    },
    contact: {
      tag: '۰۷ — ارتباط با من',
      headline: 'پروژه یا ایده‌ای در ذهن دارید؟',
      subtitle: 'همیشه از گفتگو پیرامون پروژه‌های نرم‌افزاری، یادگیری مشترک و همکاری‌های فنی استقبال می‌کنم.',
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
