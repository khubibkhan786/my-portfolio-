import {SkillItem, SkillCategoryGroup, SimplifiedSkillCategory, RoadmapStage, SkillStatus} from '../types';

export type {SkillItem, SkillCategoryGroup, SimplifiedSkillCategory, RoadmapStage, SkillStatus};

// Simplified 3 Core Technical Categories for Clean, Uncluttered Presentation
export const simplifiedSkillCategories: SimplifiedSkillCategory[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    shortSummary: 'Object-oriented fundamentals, structured code architecture, and disciplined problem solving.',
    icon: 'Terminal',
    verifiedDetails: [
      {
        area: 'Object-Oriented Programming (OOP)',
        description: 'Class hierarchies, inheritance, encapsulation, and modular design principles in Java and modern languages.',
      },
      {
        area: 'Clean Application Architecture',
        description: 'Separation of concerns, reusable component structures, and maintainable project organization.',
      },
      {
        area: 'Version Control & Git Workflow',
        description: 'Branch management, pull requests, semantic commit discipline, and collaborative repository management.',
      },
      {
        area: 'Systematic Debugging & Testing',
        description: 'Root-cause analysis, unit validation, error logging, and iterative code refinement.',
      },
    ],
    translations: {
      ps: {
        title: 'د سافټویر پراختیا او انجینري',
        shortSummary: 'د شیء محوره پروګرامینګ (OOP) بنسټونه، د کاریالونو جوړښت، د منطق تحلیل او منظم ډیبګنګ.',
        verifiedDetails: [
          {
            area: 'شیء محوره پروګرامینګ (OOP)',
            description: 'په جاوا او اړوندو ژبو کې کلاسونه، وراثت، انکپسولیشن او د کوډ ماژولار ویش.',
          },
          {
            area: 'د پروژې پاکه او منظمه معماري',
            description: 'د دندو جلاوالی، د برخو بیا کارول او د کوډ معیاري او روښانه جوړښت.',
          },
          {
            area: 'د ګېټ او نسخو کنټرول',
            description: 'په Git او GitHub کې د څانګو مدیریت، د بدلونونو ثبتول او د پروژو منظم ساتل.',
          },
          {
            area: 'منظم ډیبګنګ او ارزونه',
            description: 'د تخنیکي ستونزو موندل، منطقي سمون، ازموینه او د کوډ پرله‌پسې پاکول.',
          },
        ],
      },
      fa: {
        title: 'توسعه نرم‌افزار و مهندسی',
        shortSummary: 'مبانی برنامه‌نویسی شی‌گرا (OOP)، معماری برنامه‌ها، طراحی الگوریتم و عیب‌یابی اصولی.',
        verifiedDetails: [
          {
            area: 'برنامه‌نویسی شی‌گرا (OOP)',
            description: 'پیاده‌سازی کلاس‌ها، وراثت، کپسوله‌سازی و طراحی ساختاریافته در جاوا و زبان‌های مدرن.',
          },
          {
            area: 'معماری و ساختار تمیز کد',
            description: 'تفکیک مسئولیت‌ها، کامپوننت‌های ماژولار و سازمان‌دهی اصولی و قابل‌نگهداری پروژه‌ها.',
          },
          {
            area: 'کنترل نسخه با گیت (Git & GitHub)',
            description: 'مدیریت شاخه‌ها، مستندسازی تغییرات و مدیریت منسجم ریپازیتوری‌های کد.',
          },
          {
            area: 'عیب‌یابی سیستماتیک و ارزیابی',
            description: 'ریشه‌یابی خطاها، بهینه‌سازی منطق اجرایی، تست عملکردی و ارتقای پایداری برنامه.',
          },
        ],
      },
    },
  },
  {
    id: 'databases',
    title: 'Database & Data Management',
    shortSummary: 'Relational data modeling, table normalization, schema design, and local offline database storage.',
    icon: 'Database',
    verifiedDetails: [
      {
        area: 'Relational Schema Design',
        description: 'Entity-relationship modeling, primary & foreign keys, normalization, and relational integrity constraints.',
      },
      {
        area: 'SQL Querying & MySQL',
        description: 'Writing structured CRUD operations, joins, aggregations, and practical database administration.',
      },
      {
        area: 'Local & Offline-First Storage',
        description: 'Embedded database caching, Android Room DB architecture, and dependable offline persistence.',
      },
      {
        area: 'Information Systems Management',
        description: 'Coursework in structured data flows, business requirements, and operational data organization.',
      },
    ],
    translations: {
      ps: {
        title: 'ډېټابېس او د معلوماتو مدیریت',
        shortSummary: 'د اړیکیزو معلوماتو ماډلینګ، د جدولونو نارملایزېشن، د سکیم ډیزاین او افلاین خوندي کول.',
        verifiedDetails: [
          {
            area: 'د اړیکیز ډېټابېس سکیم ډیزاین',
            description: 'د جدولونو اړیکې (ER)، لومړني او بهرني کلیدونه، نارملایزیشن او د معلوماتو بشپړتیا.',
          },
          {
            area: 'په SQL او MySQL کې پوښتنې',
            description: 'د CRUD عملیات، د جدولونو نښلول (Joins)، د معلوماتو فلټر او د ډېټابېس مدیریت.',
          },
          {
            area: 'محلي او افلاین ډېټابېس',
            description: 'په موبایل کې د Room ډېټابېس کارول او د انټرنیټ پرته د معلوماتو ډاډمنه ذخیره.',
          },
          {
            area: 'معلوماتي سیستمونه (Information Systems)',
            description: 'د پوهنتون په تدریسي نصاب کې د معلوماتو بهیرونه او د سیستمونو تخنیکي تحلیل.',
          },
        ],
      },
      fa: {
        title: 'پایگاه داده و مدیریت داده‌ها',
        shortSummary: 'مدل‌سازی رابطه‌ای داده‌ها، نرمال‌سازی جداول، طراحی اسکیمای دیتابیس و ذخیره‌سازی آفلاین.',
        verifiedDetails: [
          {
            area: 'طراحی ساختار رابطه‌ای دیتابیس',
            description: 'مدل‌سازی ER، کلیدهای اصلی و خارجی، نرمال‌سازی و حفظ یکپارچگی ارجاعی داده‌ها.',
          },
          {
            area: 'پرس‌وجوهای SQL و MySQL',
            description: 'عملیات CRUD، پیوند جداول (Joins)، فیلترسازی و مدیریت اصولی جداول داده.',
          },
          {
            area: 'دیتابیس محلی و کارکرد آفلاین',
            description: 'به‌کارگیری دیتابیس Room در اندروید جهت ذخیره‌سازی پایدار و دسترسی بدون اینترنت.',
          },
          {
            area: 'سیستم‌های معلوماتی (Information Systems)',
            description: 'آشنایی آکادمیک با تحلیل جریان‌های داده، نیازمندی‌های سازمانی و ساختاردهی اطلاعات.',
          },
        ],
      },
    },
  },
  {
    id: 'web-mobile',
    title: 'Web & Mobile Development',
    shortSummary: 'Building responsive web interfaces and native mobile apps with practical AI-driven enhancements.',
    icon: 'Smartphone',
    verifiedDetails: [
      {
        area: 'Modern Web Applications (React & TypeScript)',
        description: 'Component lifecycles, state management hooks, typed contracts, and dynamic user interfaces.',
      },
      {
        area: 'Responsive UI Design (Tailwind CSS)',
        description: 'Mobile-first layout design, accessible contrast, custom themes, and refined micro-interactions.',
      },
      {
        area: 'Native Android Development (Kotlin)',
        description: 'Android Studio lifecycle, Material Design UI, background threads, and production APK packaging.',
      },
      {
        area: 'Practical AI API Integration',
        description: 'Integrating external AI model APIs to power smart text assistance, automated workflows, and assistive features.',
      },
    ],
    translations: {
      ps: {
        title: 'د وېب او موبایل پراختیا',
        shortSummary: 'د چټکو او ځواب ویونکو وېبپاڼو او بومي انډروایډ کاریالونو جوړول له عملي هوښیارو اسانتیاوو سره.',
        verifiedDetails: [
          {
            area: 'عصري وېب کاریالونه (React & TypeScript)',
            description: 'ماډولار کمپوننټونه، د سټیټ منظم مدیریت، ټایپ-سیف کوډ او روان کارن انټرفیس.',
          },
          {
            area: 'ځواب ویونکی وېب ډیزاین (Tailwind CSS)',
            description: 'د ټولو سکرینونو لپاره جوړ ډیزاین، تیاره او روښانه رنګونه او دقیق مایکرو انټریکشنونه.',
          },
          {
            area: 'بومي انډروایډ پراختیا (Kotlin)',
            description: 'په Android Studio کې د ایکټیویټي لایف سایکل، مټیریل ډیزاین او د APK جوړول.',
          },
          {
            area: 'د عملي AI APIs مدغم کول',
            description: 'د هوښیارو ماډلونو له APIs سره نښلول د مرستیال، اتومات کار او د کاروونکي د اسانتیا لپاره.',
          },
        ],
      },
      fa: {
        title: 'توسعه وب و موبایل',
        shortSummary: 'ساخت رابط‌های کاربری واکنش‌گرا و اپلیکیشن‌های بومی موبایل با ادغام قابلیت‌های هوشمند کاربردی.',
        verifiedDetails: [
          {
            area: 'برنامه‌های مدرن وب (React و TypeScript)',
            description: 'توسعه کامپوننت‌محور، مدیریت ساختاریافته وضعیت، تایپ‌سیف بودن و کاربری روان.',
          },
          {
            area: 'طراحی واکنش‌گرا (Tailwind CSS)',
            description: 'سازگاری کامل با موبایل و دسکتاپ، کنتراست استاندارد، پوسته‌های دارک و لایت.',
          },
          {
            area: 'توسعه بومی اندروید با کاتلین',
            description: 'چرخه حیات اکتیویتی در Android Studio، استانداردهای متریال دیزاین و خروجی APK.',
          },
          {
            area: 'ادغام قابلیت‌های کاربردی هوش مصنوعی',
            description: 'اتصال به API مدل‌های هوشمند جهت پردازش متن، پاسخ‌دهی خودکار و بهبود تجربه کاربری.',
          },
        ],
      },
    },
  },
];

// Preserved for backward compatibility
export const practicalSkills: SkillItem[] = [
  {
    name: 'React 19',
    status: 'practical',
    category: 'web',
    description: 'Component architecture, custom hooks, and reactive user interfaces.',
    evidence: 'AGZ Portfolio, Student Academic Portal',
    projectAssociation: ['student-portal-hub'],
  },
  {
    name: 'TypeScript',
    status: 'practical',
    category: 'web',
    description: 'Type-safe contracts, strict interfaces, and scalable frontend code.',
    evidence: 'React application logic & full-stack prototypes',
    projectAssociation: ['student-portal-hub'],
  },
  {
    name: 'Kotlin',
    status: 'practical',
    category: 'mobile',
    description: 'Native Android UI, activity lifecycle, and offline Room database integration.',
    evidence: 'Lemunz Aw Azkar production APK',
    projectAssociation: ['lemunz-azkar'],
  },
  {
    name: 'Tailwind CSS',
    status: 'practical',
    category: 'web',
    description: 'Modern utility styling, dark/light themes, and responsive design systems.',
    evidence: 'Responsive layouts & portfolio design',
  },
  {
    name: 'JavaScript (ES6+)',
    status: 'practical',
    category: 'web',
    description: 'Asynchronous APIs, DOM manipulation, and interactive client workflows.',
    evidence: 'Weather Tracking App & automation tools',
    projectAssociation: ['weather-app', 'workflow-automation-toolkit'],
  },
  {
    name: 'Git & GitHub',
    status: 'practical',
    category: 'tools',
    description: 'Version control, feature branching, commit discipline, and code repositories.',
    evidence: 'Active source management for all personal projects',
  },
  {
    name: 'Android Studio',
    status: 'practical',
    category: 'tools',
    description: 'Android IDE: Gradle build systems, layout inspections, and device debugging.',
    evidence: 'Used for compiling, debugging, and packaging APKs',
    projectAssociation: ['lemunz-azkar'],
  },
  {
    name: 'VS Code',
    status: 'practical',
    category: 'tools',
    description: 'Daily development environment for React, TypeScript, and script workflows.',
    evidence: 'Primary editor configured for web and tooling development',
  },
];

export const currentlyLearningSkills: SkillItem[] = [
  {
    name: 'SQL & Relational Databases',
    status: 'learning',
    category: 'databases',
    description: 'Relational data modeling, table relationships, primary/foreign keys, and query optimization.',
    evidence: 'Paktia University Information Systems coursework & practical lab exercises',
  },
  {
    name: 'MySQL',
    status: 'learning',
    category: 'databases',
    description: 'Database creation, relational constraints, CRUD operations, and transaction integrity.',
    evidence: 'University database administration lab assignments and test projects',
  },
  {
    name: 'Software Engineering Principles',
    status: 'learning',
    category: 'engineering',
    description: 'Software development life cycle (SDLC), modular architecture, requirement analysis, and code quality.',
    evidence: 'Core Information Systems curriculum and software design planning',
  },
  {
    name: 'Java & OOP',
    status: 'learning',
    category: 'languages',
    description: 'Object-oriented programming concepts: encapsulation, inheritance, polymorphism, and class hierarchies.',
    evidence: 'University computer science coursework & foundational problem solving',
  },
];

export const foundationalSkills: SkillItem[] = [];

export const skillCategoriesData: SkillCategoryGroup[] = [
  {
    category: 'Using in Projects',
    tagline: 'Technologies actively used in practical projects with verified implementation',
    items: practicalSkills,
  },
  {
    category: 'Currently Learning',
    tagline: 'Actively studied through university coursework, lab exercises, and practical building',
    items: currentlyLearningSkills,
  },
];

// 3. MINIMAL & PROFESSIONAL ROADMAP (5 STAGES)
export const softwareEngineeringRoadmap: RoadmapStage[] = [
  {
    stageNumber: 1,
    id: 'core-programming',
    title: 'Core Programming & OOP',
    subtitle: 'Solid foundations in structured code and object-oriented design',
    status: 'foundational',
    description: 'Mastering algorithmic thinking, data structures, and disciplined debugging in Java.',
    skills: ['Java', 'OOP Principles', 'Data Structures', 'Debugging'],
  },
  {
    stageNumber: 2,
    id: 'relational-databases',
    title: 'Relational Databases & SQL',
    subtitle: 'Database modeling, schema design, and query optimization',
    status: 'current',
    description: 'Designing structured tables, relationships, integrity constraints, and queries in MySQL.',
    skills: ['SQL', 'MySQL', 'Schema Design', 'Normalization', 'Relational Integrity'],
  },
  {
    stageNumber: 3,
    id: 'modern-web-development',
    title: 'Modern Web & Frontend',
    subtitle: 'Responsive, accessible, and type-safe client applications',
    status: 'current',
    description: 'Refining frontend engineering with React 19, TypeScript, and modern CSS architecture.',
    skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'REST APIs'],
  },
  {
    stageNumber: 4,
    id: 'mobile-ai-features',
    title: 'Mobile & Practical AI Features',
    subtitle: 'Native Android architecture with practical AI integration',
    status: 'current',
    description: 'Building offline-first Android apps with Kotlin and integrating practical AI APIs for smart features.',
    skills: ['Kotlin', 'Android Jetpack', 'Room DB', 'AI API Integration', 'Offline-First'],
  },
  {
    stageNumber: 5,
    id: 'full-stack-engineering',
    title: 'Full-Stack Software Engineering',
    subtitle: 'End-to-end applications across web, mobile, and backend systems',
    status: 'future',
    description: 'Unifying client interfaces, secure backend services, databases, and automated testing into reliable products.',
    skills: ['End-to-End Architecture', 'Backend Services', 'Database Integration', 'Cloud Deployment'],
  },
];
