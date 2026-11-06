import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  ArrowLeft,
  Moon,
  Compass,
  Bot,
  BookOpen,
  MapPin,
  Sparkles,
  Smartphone,
  Database,
  WifiOff,
  SunMoon,
  AlertTriangle,
  Languages,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
  Maximize2,
  X,
  Share2,
  Check,
  ShieldCheck,
  Clock,
  HeartHandshake
} from 'lucide-react';
import {useTheme} from '../../context/ThemeContext';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';
import hidayatLarBanner from '../../assets/images/hidayat_lar_banner.png';

interface HidayatLarDetailsProps {
  onBack: () => void;
}

export function HidayatLarDetails({onBack}: HidayatLarDetailsProps) {
  const {theme, toggleTheme} = useTheme();
  const {language, setLanguage, isRtl} = useLanguage();
  const isDark = theme === 'dark';

  const [activeGalleryTab, setActiveGalleryTab] = useState<number>(0);
  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Content in 3 languages (English, Pashto, Dari)
  const content = {
    en: {
      breadcrumbPortfolio: 'Portfolio',
      breadcrumbProjects: 'Projects',
      backButton: 'Back to Projects',
      brandBadge: 'AGZ Labs · Native Android Application',
      versionBadge: 'v2.0 · Active Release',
      title: 'Hidayat Lar',
      arabicTitle: 'هدایت لار',
      tagline: 'A Smart Islamic Companion for a Better Life',
      subTagline: 'Your Companion for an Islamic Lifestyle',
      shortDescription:
        'A comprehensive native Android companion combining astronomical prayer times, Qibla compass, Adhkar, Duas, nearby mosque locator, and an Islamic AI Assistant.',
      coverImageAlt: 'Hidayat Lar - Islamic Companion & AI Assistant Promotional Banner',
      quickJump: 'Quick Navigation',
      navAppInfo: 'App Info',
      navChallenges: 'The Challenges',
      navSolution: 'The Solution',
      navResults: 'The Results',
      navFeatures: 'Key Features',
      navGallery: 'Visual Showcase',
      navSpecs: 'Project Specs',

      // Section A: App Info
      appInfoTitle: 'App Info & Core Purpose',
      appInfoSubtitle:
        'A modern, respectful, and technologically refined Islamic companion that combines authentic traditional spiritual practices with modern assistive intelligence.',
      appInfoIntro:
        'Hidayat Lar (هدایت لار) is an advanced native Android application conceived and engineered at AGZ Labs by Abdul Jalil Zwak. Designed from the ground up for clarity, precision, and privacy, Hidayat Lar unifies essential daily Islamic practices into a single, distraction-free environment. It provides astronomical prayer calculations with countdown timers, a hardware sensor-based Qibla compass, an authentic digital Tasbih, categorized Quranic Duas and Hadith, a GPS-driven nearby mosques locator, and an intelligent Islamic AI Assistant to answer religious and fiqh inquiries in four languages: Pashto, Dari, Arabic, and English.',
      appInfoPoints: [
        {
          title: 'Astronomical Prayer Calculations & Countdown',
          desc: 'High-precision solar angle algorithms calculate Fajr, Sunrise, Dhuhr, Asr, Maghrib, and Isha times locally, paired with next-prayer countdowns and congregation reminders.',
        },
        {
          title: 'Specialized Islamic AI Assistant',
          desc: 'An assistive, respectful AI interface designed to promptly answer questions regarding Islamic manners, prayer conditions, fasting rules, and authentic references.',
        },
        {
          title: 'Hardware Sensor Qibla Direction Compass',
          desc: 'Orientation azimuth calculations backed by real-time low-pass sensor smoothing for accurate, jitter-free navigation towards the Holy Kaaba.',
        },
        {
          title: 'Digital Tasbih & Authentic Adhkar Catalog',
          desc: 'A digital Tasbih counter with customizable haptic vibration feedback, complete with authentic morning, evening, and after-prayer remembrances.',
        },
      ],
      supportedLanguagesHeading: 'Supported Languages (Native RTL & LTR Isolation)',
      supportedLanguagesList: [
        {name: 'Pashto (پښتو)', note: 'Culturally native typography, localized numbers & Pashto translations'},
        {name: 'Dari (دری)', note: 'Full Persian/Dari vocabulary & authentic regional phrasing'},
        {name: 'Arabic (العربية)', note: 'Vowel-marked Quranic script (Tashkeel) & classical Hadith text'},
        {name: 'English', note: 'International format, clean hierarchy & global accessibility'},
      ],

      // Section B: The Challenges
      challengesTitle: 'The Challenges',
      challengesSubtitle:
        'Real-world problems that motivated the engineering of an authentic, ad-free Islamic mobile companion.',
      challengesList: [
        {
          id: 'inaccurate-times',
          title: 'Inaccurate Mountain & High-Latitude Timings',
          desc: 'Many generic prayer apps use rigid fixed angles that fail across diverse regional mountainous terrain, leading to calculation discrepancies for Fajr and Maghrib.',
          icon: Clock,
          color: 'from-amber-500/20 to-orange-500/5',
          border: 'border-amber-200 dark:border-amber-800/60',
          badge: 'Timing Precision',
        },
        {
          id: 'intrusive-ads',
          title: 'Intrusive Commercials & Telemetry in Worship Apps',
          desc: 'Mainstream religious applications frequently bombard users with noisy full-screen popups, video ads, and invasive data trackers during sacred moments of prayer and remembrance.',
          icon: AlertTriangle,
          color: 'from-rose-500/20 to-red-500/5',
          border: 'border-rose-200 dark:border-rose-800/60',
          badge: 'Distraction & Privacy',
        },
        {
          id: 'fragmented-tools',
          title: 'Fragmented Tools Across Disjointed Apps',
          desc: 'Users are forced to install and juggle separate apps for prayer timetables, Qibla compasses, daily Adhkar books, Hadith collections, and mosque finders.',
          icon: Layers,
          color: 'from-sky-500/20 to-blue-500/5',
          border: 'border-sky-200 dark:border-sky-800/60',
          badge: 'Fragmentation',
        },
        {
          id: 'religious-queries',
          title: 'Delayed Access to Authentic Religious Guidance',
          desc: 'Ordinary Muslims facing everyday questions about prayer rulings, purity, and fasting often struggle through contradictory internet forums without verified references.',
          icon: Bot,
          color: 'from-indigo-500/20 to-purple-500/5',
          border: 'border-indigo-200 dark:border-indigo-800/60',
          badge: 'Knowledge Barrier',
        },
      ],

      // Section C: The Solution
      solutionTitle: 'The Solution',
      solutionSubtitle:
        'How Hidayat Lar addresses these challenges through thoughtful engineering, offline-first reliability, and respectful assistive AI.',
      solutionList: [
        {
          title: 'All-in-One Islamic Lifestyle Architecture',
          desc: 'Consolidates prayer schedules, Qibla compass, Tasbih, authentic Adhkar, Duas, mosque discovery, and AI assistance into one cohesive application.',
          icon: Layers,
        },
        {
          title: 'Intelligent Islamic AI Assistant (AI)',
          desc: 'Provides respectful, instant answers to fiqh, daily prayers, and religious manners grounded in authentic Islamic sources.',
          icon: Bot,
        },
        {
          title: 'Zero Ads & 100% Privacy Guarantee',
          desc: 'Completely free from commercial banner ads, tracking scripts, and intrusive analytics. Worship remains pure and unmonitored.',
          icon: ShieldCheck,
        },
        {
          title: 'Astronomical Formulas with Local Room Caching',
          desc: 'Calculates solar azimuth and declination angles offline without requiring continuous internet or expensive server requests.',
          icon: Database,
        },
        {
          title: 'Low-Pass Smoothed Qibla Compass',
          desc: 'Combines accelerometer and magnetometer sensor fusion with low-pass dampening for ultra-smooth needle pointing toward the Kaaba.',
          icon: Compass,
        },
        {
          title: 'GPS Nearby Mosques & Jumats Finder',
          desc: 'Automatically pinpoints nearby Masajid and calculates walking/driving distances with direct navigation coordinates.',
          icon: MapPin,
        },
        {
          title: 'Four-Language Native RTL/LTR Typography',
          desc: 'Features culturally authentic typography with strict Unicode bidirectional isolation across Pashto, Dari, Arabic, and English.',
          icon: Languages,
        },
      ],

      // Section D: The Results
      resultsTitle: 'The Results',
      resultsSubtitle:
        'Practical benefits delivered to users, families, and everyday worshippers.',
      resultsList: [
        {
          title: 'Serene, Distraction-Free Worship',
          desc: 'Zero advertisements and zero disruptive popups guarantee absolute spiritual peace during prayer and Tasbih sessions.',
          metric: '100% Ad-Free',
          highlight: 'Zero distractions',
        },
        {
          title: 'Instant Clarification via AI Assistant',
          desc: 'Users receive swift, respectful answers to religious queries without scouring unverified web search results.',
          metric: 'Instant AI',
          highlight: 'Verified guidance',
        },
        {
          title: 'Flawless 100% Offline Core Functionality',
          desc: 'Prayer times, Qibla compass, Tasbih counter, and the full Adhkar catalog function with zero internet dependency in remote areas.',
          metric: 'Offline First',
          highlight: 'Full continuity',
        },
        {
          title: 'Authentic Spiritual Catalog',
          desc: 'Hundreds of verified morning, evening, and after-prayer supplications categorized systematically from the Quran and Hadith.',
          metric: 'Authentic',
          highlight: 'Verified Adhkar',
        },
        {
          title: 'Effortless Mosque Discovery',
          desc: 'Travelers and commuters quickly locate nearby Masajid and Friday Jumats with exact meters and direction.',
          metric: 'GPS Locator',
          highlight: 'Real-time distance',
        },
        {
          title: 'Linguistic & Cultural Inclusivity',
          desc: 'Native typography and bidirectional formatting make the app feel naturally designed for Pashto, Dari, and Arabic speakers.',
          metric: '4 Languages',
          highlight: 'Culturally native',
        },
      ],

      // Section E: Key Features (9 cards)
      featuresTitle: 'Key Features',
      featuresSubtitle:
        'Explore the nine core implemented capabilities engineered into Hidayat Lar.',
      featureCards: [
        {
          num: '01',
          title: 'Astronomical Prayer Times',
          desc: 'Accurate calculations for Fajr, Sunrise, Dhuhr, Asr, Maghrib, and Isha with live countdown to the next prayer and congregation reminders.',
          icon: Clock,
        },
        {
          num: '02',
          title: 'Islamic AI Assistant (AI)',
          desc: 'Ask your religious, fiqh, and moral questions directly and receive respectful, thoughtful answers with authentic contextual citations.',
          icon: Bot,
        },
        {
          num: '03',
          title: 'Precision Sensor Qibla Compass',
          desc: 'Hardware sensor-based orientation indicator with real-time degree azimuth and low-pass filtering for smooth alignment toward Mecca.',
          icon: Compass,
        },
        {
          num: '04',
          title: 'Digital Tasbih & Haptics',
          desc: 'Smart digital counter featuring customizable loop targets (33, 99, 1000) and tactile haptic vibration feedback for screen-free counting.',
          icon: Sparkles,
        },
        {
          num: '05',
          title: 'Authentic Adhkar Catalog',
          desc: 'Comprehensive, categorized collection of authentic morning and evening remembrances, post-Salah Adhkar, and protection supplications.',
          icon: BookOpen,
        },
        {
          num: '06',
          title: 'Duas & Hadith Treasury',
          desc: 'Carefully categorized supplications from the Holy Quran and Sahih Hadith collections with full Arabic diacritics and translations.',
          icon: HeartHandshake,
        },
        {
          num: '07',
          title: 'Nearby Mosques & Jumats',
          desc: 'Integrated GPS locator scanning nearby Masajid with walking distances, direction markers, and congregational Friday prayer locations.',
          icon: MapPin,
        },
        {
          num: '08',
          title: 'Four-Language Support',
          desc: 'Seamless switching between Pashto, Dari, Arabic, and English with dedicated typographic tokens and bidirectional Unicode isolation.',
          icon: Languages,
        },
        {
          num: '09',
          title: 'Light & Dark Serene Themes',
          desc: 'Specially tuned high-contrast Light mode and OLED-friendly Dark mode engineered to prevent glare during early morning Tahajjud and Fajr.',
          icon: SunMoon,
        },
      ],

      // Visual Showcase
      galleryTitle: 'Visual Showcase & Screens',
      gallerySubtitle:
        'Explore actual screens from Hidayat Lar, demonstrating clean Islamic aesthetics, balanced typography, and assistive features.',
      galleryTabs: [
        {title: 'Prayer Dashboard', key: 'prayer'},
        {title: 'Islamic AI Assistant', key: 'ai'},
        {title: 'Qibla Compass & Mosques', key: 'qibla'},
        {title: 'Tasbih & Adhkar', key: 'tasbih'},
      ],
      galleryItems: [
        {
          id: 'prayer',
          title: 'Main Prayer & Countdown Dashboard',
          subtitle: 'Real-time astronomical times, countdown & congregation guidance',
          description:
            'The central home screen displays current Auto Location, the Hijri date (24 Jumada I 1448 AH), and a dynamic prayer card highlighting Asr (03:19 PM) with "Perform prayer in congregation" guidance and an exact remaining countdown (02:47:52).',
          points: [
            'Dynamic active prayer card with next prayer countdown indicator',
            'Full 5-prayer timeline: Fajr 04:51 AM, Sunrise 06:16 AM, Dhuhr 11:37 AM, Asr 03:19 PM, Maghrib 04:57 PM, Isha 06:22 PM',
            'Hijri Islamic calendar integration with automatic regional moon sighting offset',
            'Integrated Islamic AI Assistant quick-prompt card directly on top',
          ],
        },
        {
          id: 'ai',
          title: 'Islamic AI Assistant (AI)',
          subtitle: 'Ask your Islamic and religious questions with peace of mind',
          description:
            'A dedicated intelligent assistant that answers users\' questions regarding prayer etiquette, fasting rulings, purification (Taharah), and general Islamic guidance with verified, respectful references.',
          points: [
            'Dedicated conversational interface with one-tap suggested religious queries',
            'Context-aware answers rooted in authentic Quranic verses and Sunnah',
            'Quick-copy and bookmarking tools for important religious rulings',
            'Available in Pashto, Dari, Arabic, and English',
          ],
        },
        {
          id: 'qibla',
          title: 'Qibla Compass & Nearby Mosques',
          subtitle: 'Precision direction finding and GPS discovery of Masajid',
          description:
            'Combines device orientation sensors to point precisely toward the Kaaba in Mecca, alongside an automatic GPS scanner discovering local Masajid (such as مسجد حضرت معاذ بن جبل 341m away) with direct distance indicators.',
          points: [
            'High-precision azimuth compass dial with degree markings and Kaaba indicator',
            'Low-pass sensor smoothing for stable needle orientation on any phone',
            'Nearby Mosques list showing exact distance in meters and walking time',
            'Direct one-tap direction guidance to congregational Friday Masajid',
          ],
        },
        {
          id: 'tasbih',
          title: 'Digital Tasbih & Authentic Adhkar Catalog',
          subtitle: 'Haptic counter, morning/evening Adhkar & Quranic Duas',
          description:
            'A modern, tactile digital Tasbih counter allowing seamless Dhikr tracking without looking at the screen, paired with a comprehensive library of authentic morning, evening, and post-Salah remembrances.',
          points: [
            'Large ergonomic tap target with subtle vibration (haptic) feedback on every count',
            'Loop presets for 33, 99, 100, and 1000 with completion chimes or vibration',
            'Morning and evening Adhkar with counter progression and Arabic diacritics',
            'Complete offline storage in local Room Database for zero-lag access',
          ],
        },
      ],

      // Technical Specs
      specsTitle: 'Project Specs & Technical Architecture',
      specsSubtitle:
        'Engineering details behind the native Android architecture and local database systems.',
      specsTable: [
        {label: 'Application Type', val: 'Native Android Mobile Application'},
        {label: 'Target Platform', val: 'Android 8.0+ (API Level 26–35)'},
        {label: 'Programming Language', val: 'Kotlin 2.0+ with Coroutines & StateFlow'},
        {label: 'UI Framework', val: 'Jetpack Compose with Material 3 & Custom Theming'},
        {label: 'Local Database', val: 'Android Room Database over SQLite (100% Offline-First)'},
        {label: 'Sensors Utilized', val: 'Accelerometer & Magnetometer with Azimuth Sensor Fusion'},
        {label: 'AI Assistant Pipeline', val: 'Islamic Knowledge Assistant & Natural Language Engine'},
        {label: 'Location Services', val: 'Google Play FusedLocationProviderClient + OpenStreetMap Overpass'},
        {label: 'Internationalization', val: 'Unicode Bidi Isolation (Pashto, Dari, Arabic, English)'},
        {label: 'Privacy & Security', val: 'Zero Telemetry, Zero Commercial Ads, Local-First Storage'},
        {label: 'Release Status', val: 'AGZ Labs Production v2.0'},
      ],

      ctaTitle: 'Experience Hidayat Lar',
      ctaSubtitle:
        'A thoughtfully designed, ad-free Islamic companion built for everyday peace of mind.',
      ctaBack: 'Back to Projects',
      ctaShare: 'Share Project',
      linkCopied: 'Link Copied!',
    },

    ps: {
      breadcrumbPortfolio: 'پورټفولیو',
      breadcrumbProjects: 'پروژې',
      backButton: 'بېرته پروژو ته',
      brandBadge: 'AGZ Labs · د انډروایډ بومي کاریال',
      versionBadge: 'v2.0 · فعاله نسخه',
      title: 'هدایت لار',
      arabicTitle: 'Hidayat Lar',
      tagline: 'د ښه او اسلامي ژوند لپاره ځیرک ملګری',
      subTagline: 'ستاسو باوري ملګری د عباداتو او نېکو کارونو لپاره',
      shortDescription:
        'د لمانځه دقیق فلکي وختونه، د قبلې کمپاس، مسنون اذکار، ګڼونکې تسبېح، مسنونې دعاګانې، نږدې جوماتونه او اسلامي AI مرستیال په څلورو ژبو.',
      coverImageAlt: 'د هدایت لار اسلامي کاریال او AI مرستیال رسمي پروموشنل بېنر',
      quickJump: 'فوري لاسرسی',
      navAppInfo: 'د کاریال معلومات',
      navChallenges: 'ننګونې',
      navSolution: 'حللارې',
      navResults: 'لاسته راوړنې',
      navFeatures: 'اصلي ځانګړنې',
      navGallery: 'بصري ننداره',
      navSpecs: 'تخنیکي مشخصات',

      // Section A: App Info
      appInfoTitle: 'د کاریال پیژندنه او اصلي موخه',
      appInfoSubtitle:
        'یو پرمختللی، ښکلی او بې‌اعلاناتو اسلامي ډیجیټل ملګری چې اصیل عبادات او عصري هوښیار مرستیال سره یوځای کوي.',
      appInfoIntro:
        'هدایت لار (Hidayat Lar) یو پرمختللی بومي انډروایډ کاریال دی چې په AGZ Labs کې د عبدالجلیل ځواک لخوا طرحه او جوړ شوی دی. دغه کاریال د کاروونکو د عباداتو د اسانتیا، د عبادت په وخت کې د بشپړ تمرکز او د هغوی د رازدارۍ د ساتلو لپاره رامنځته شوی. دا کاریال د لمانځه دقیق فلکي حسابونه، د قبلې سنسوري کمپاس، ګڼونکې تسبېح، مسنون اذکار او نبوي دعاګانې، د نږدې جوماتونو موندنه او د دیني پوښتنو لپاره اسلامي AI مرستیال په څلورو ژبو (پښتو، دري، عربي او انګلیسي) وړاندې کوي.',
      appInfoPoints: [
        {
          title: 'د لمانځه فلکي وختونه او معکوس حساب',
          desc: 'د سیمه ییز GPS موقعیت له مخې د پنځه وخته لمانځه دقیق فلکي حساب، د بل لمانځه پاتې وخت او د جماعت د لمانځه لارښوونې.',
        },
        {
          title: 'ځانګړی اسلامي AI مرستیال',
          desc: 'یو هوښیار او باادبه AI سیسټم چې د دیني مسایلو، د لمانځه شرایطو، روژې او شرعي پوښتنو ته سمدستي او مستند ځوابونه ورکوي.',
        },
        {
          title: 'د قبلې دقیق سنسوري کمپاس',
          desc: 'د موبایل د سنسرونو له لارې د کعبې شریفي د لوري دقیق ښودل، چې د لړزې ضد فلټرونو په مرسته بې له تېروتنې کار کوي.',
        },
        {
          title: 'ډیجیټل تسبېح او مسنون اذکار',
          desc: 'د وایبریشن او غږیز غبرګون لرونکې ګڼونکې تسبېح، د سهاري، ماښامني او له لمانځه وروسته مسنونو اذکارو او دعاګانو سره.',
        },
      ],
      supportedLanguagesHeading: 'ملاتړ شوې ژبې (پښتو، دري، عربي او انګلیسي)',
      supportedLanguagesList: [
        {name: 'پښتو (Pashto)', note: 'اصیل او ښکلي پښتو فونټونه او مناسب اصطلاحات'},
        {name: 'دري (Dari)', note: 'د دري ژبې روان او کره ګرامري متنونه'},
        {name: 'عربي (العربية)', note: 'د قران کریم اعراب لرونکی او د احادیثو اصیل متن'},
        {name: 'انګلیسي (English)', note: 'نړیوال ستندرد او اسانه لاسرسی'},
      ],

      // Section B: The Challenges
      challengesTitle: 'ننګونې او خنډونه',
      challengesSubtitle:
        'هغه ستونزې چې د یو باوري، پاک او بې‌اعلاناتو اسلامي ملګري د جوړولو سبب شوې.',
      challengesList: [
        {
          id: 'inaccurate-times',
          title: 'په غرنیو او بېلابېلو سیمو کې د وختونو ناسموالی',
          desc: 'ډېر عمومي اسلامي پروګرامونه د لمانځه لپاره یو ډول زاویې کاروي چې په غرنیو او لوړو سیمو کې د سهار او ماښام په وخت کې د غلطۍ لامل کېږي.',
          icon: Clock,
          color: 'from-amber-500/20 to-orange-500/5',
          border: 'border-amber-200 dark:border-amber-800/60',
          badge: 'د وخت دقت',
        },
        {
          id: 'intrusive-ads',
          title: 'په عبادتي پروګرامونو کې د اعلاناتو او سوداګریزو پلټنو زیاتوالی',
          desc: 'په عامو اسلامي اپلیکیشنونو کې ډېر ځورونکي اعلانات، ویډیوګانې او د کاروونکي د معلوماتو جاسوسي د لمانځه او ذکر پر مهال ارامي خرابوي.',
          icon: AlertTriangle,
          color: 'from-rose-500/20 to-red-500/5',
          border: 'border-rose-200 dark:border-rose-800/60',
          badge: 'د تمرکز او محرمیت خنډ',
        },
        {
          id: 'fragmented-tools',
          title: 'په بېلو پروګرامونو کې د دیني وسایلو وېش',
          desc: 'کاروونکي اړ دي چې د لمانځه، قبلې، اذکارو، دعاګانو او نږدې جوماتونو لپاره څو جلا جلا اپلیکیشنونه انسټال او وکاروي.',
          icon: Layers,
          color: 'from-sky-500/20 to-blue-500/5',
          border: 'border-sky-200 dark:border-sky-800/60',
          badge: 'بې‌نظمي او پاشلتیا',
        },
        {
          id: 'religious-queries',
          title: 'شرعي پوښتنو ته په اسانۍ د کره ځواب نه موندل',
          desc: 'عام خلک د لمانځه، طهارت او روژې د مسایلو په اړه د ژر او باوري معلوماتو ترلاسه کولو کې له بې‌باوره انټرنېټي لیکنو سره مخ کېږي.',
          icon: Bot,
          color: 'from-indigo-500/20 to-purple-500/5',
          border: 'border-indigo-200 dark:border-indigo-800/60',
          badge: 'د معلوماتو کمښت',
        },
      ],

      // Section C: The Solution
      solutionTitle: 'حللارې او ځانګړنې',
      solutionSubtitle:
        'څنګه هدایت لار په هوښیار ډیزاین، افلاین معمارۍ او د AI مرستیال پر مټ دا ستونزې حل کړې دي.',
      solutionList: [
        {
          title: 'یو موټی او بشپړ اسلامي ډیجیټل جوړښت',
          desc: 'د لمانځه مهالوېش، قبله، تسبېح، اذکار، دعاګانې، نږدې جوماتونه او AI مرستیال ټول په یو سپک کاریال کې راټول شوي.',
          icon: Layers,
        },
        {
          title: 'اسلامي AI مرستیال د دیني پوښتنو لپاره',
          desc: 'د دیني، اخلاقي او فقهي پوښتنو لپاره یو ځیرک مرستیال چې سمدستي او په ادبي بڼه ځواب وړاندې کوي.',
          icon: Bot,
        },
        {
          title: 'سل په سلو کې له اعلاناتو پاک او د رازدارۍ خوندیتوب',
          desc: 'هېڅ ډول تجارتي اعلان، پلټونکی سکرېپټ یا د کاروونکي د معلوماتو جاسوسي شتون نه لري، ترڅو عبادت په پوره ارامۍ ترسره شي.',
          icon: ShieldCheck,
        },
        {
          title: 'فلکي محاسبې د Room محلي ډېټابېس سره',
          desc: 'له انټرنېټ پرته د لمر د حرکت د زاویو له مخې د وختونو حساب چې په ټیلفون کې ډېر چټک راباسي.',
          icon: Database,
        },
        {
          title: 'د لړزې ضد او اسانه قبلې کمپاس',
          desc: 'د موبایل له حس‌ګرونو سره د کعبې لوری په ډېر لوړ دقت او بې له نوسانونو ښیي.',
          icon: Compass,
        },
        {
          title: 'د نږدې جوماتونو موندنه (GPS)',
          desc: 'په سفر یا نااشنا ښار کې تر ټولو نږدې جومات او د جمعې ځای په متر او دقیق واټن سره ښیي.',
          icon: MapPin,
        },
        {
          title: 'په څلورو ژبو د متنونو او خطونو روښانه ترتیب',
          desc: 'د پښتو، دري، عربي او انګلیسي ژبو لپاره بومي او ښکلي فونټونه چې لوستل یې ډېر اسانه دي.',
          icon: Languages,
        },
      ],

      // Section D: The Results
      resultsTitle: 'لاسته راوړنې او عملي ګټې',
      resultsSubtitle:
        'هغه ګټې چې د دې کاریال له لارې هره ورځ کاروونکو او کورنیو ته رسېږي.',
      resultsList: [
        {
          title: 'ارام او له اعلاناتو پاک عبادت',
          desc: 'د بې‌ځایه اعلاناتو نشتوالی د لمانځه او ذکر په وخت کې د انسان ارامي او روحاني سکون تضمینوي.',
          metric: '۱۰۰٪ پاک',
          highlight: 'بې‌اعلاناتو',
        },
        {
          title: 'د اسلامي پوښتنو فوري ځواب',
          desc: 'کاروونکي کولای شي د شرعي مسایلو په هکله له AI مرستیال څخه په څو ثانیو کې کره معلومات ترلاسه کړي.',
          metric: 'فوري AI',
          highlight: 'دیني لارښوونه',
        },
        {
          title: 'سل په سلو کې افلاین کارېدنه',
          desc: 'د لمانځه وختونه، قبله، تسبېح او ټول اذکار له انټرنېټ پرته په لرو پرتو سیمو کې هم کار کوي.',
          metric: 'افلاین',
          highlight: 'بشپړ باور',
        },
        {
          title: 'د مستندو اذکارو او دعاګانو ټولګه',
          desc: 'له قران کریم او صحیح نبوي احادیثو څخه سلګونه اذکار او دعاګانې په منظم ډلبندۍ کې وړاندې شوي.',
          metric: 'مستند',
          highlight: 'صحیح احادیث',
        },
        {
          title: 'د نږدې جوماتونو چټک پیدا کول',
          desc: 'مسافرین او لاروي کولای شي په نااشنا سیمو کې په څو دقیقو کې تر ټولو نږدې جومات ومومي.',
          metric: 'GPS لارښود',
          highlight: 'دقیق واټن',
        },
        {
          title: 'د ژبو بشپړ بومي ملاتړ',
          desc: 'پښتو، دري، عربي او انګلیسي ژبو کاروونکو ته په خپله ژبه ډېر ښکلی او بې‌تېروتنې انټرفېس برابروي.',
          metric: '۴ ژبې',
          highlight: 'بومي فونټونه',
        },
      ],

      // Section E: Key Features (9 cards)
      featuresTitle: 'اصلي ځانګړنې',
      featuresSubtitle:
        'په هدایت لار کاریال کې پلي شوې نهه مرکزي وړتیاوې وګورئ.',
      featureCards: [
        {
          num: '۰۱',
          title: 'د لمانځه فلکي دقیق وختونه',
          desc: 'د سهار، لمرخاته، غرمې، مازدیګر، ماښام او ماخستن دقیق وختونه، د بل لمانځه پاتې وخت او د جماعت لارښوونه.',
          icon: Clock,
        },
        {
          num: '۰۲',
          title: 'اسلامي AI مرستیال',
          desc: 'د شرعي مسایلو، اخلاقو او د عبادت اړوند پوښتنو ته د ځواب ویلو لپاره ځیرک اسلامي مرستیال.',
          icon: Bot,
        },
        {
          num: '۰۳',
          title: 'د قبلې سنسوري کمپاس',
          desc: 'د موبایل له سنسرونو څخه په ګټې اخیستنې د قبلې د لوري دقیق او بې‌لړزې موندل په هر ځای کې.',
          icon: Compass,
        },
        {
          num: '۰۴',
          title: 'ګڼونکې تسبېح د وایبریشن سره',
          desc: 'سمارټ تسبېح د ۳۳، ۹۹ او ۱۰۰۰ حدونو او د سکرین له کتنې پرته د وایبریشن غبرګون سره.',
          icon: Sparkles,
        },
        {
          num: '۰۵',
          title: 'د مسنونو اذکارو بشپړه برخه',
          desc: 'سهاري، ماښامني او له لمانځه وروسته مسنون اذکار په اعراب او مانا سره.',
          icon: BookOpen,
        },
        {
          num: '۰۶',
          title: 'د قراني او نبوي دعاګانو خزانه',
          desc: 'د قران کریم او معتبرو احادیثو څخه د غوره او اړینو دعاګانو بشپړ بنډل.',
          icon: HeartHandshake,
        },
        {
          num: '۰۷',
          title: 'د نږدې جوماتونو او جمعو موندنه',
          desc: 'د GPS له لارې د نږدې جوماتونو واټن او د هغوی کره موقعیت موندل.',
          icon: MapPin,
        },
        {
          num: '۰۸',
          title: 'په څلورو ژبو بشپړ ملاتړ',
          desc: 'د پښتو، دري، عربي او انګلیسي ترمنځ فوري او منظم بدلون بې له کومې ګډوډۍ.',
          icon: Languages,
        },
        {
          num: '۰۹',
          title: 'د ورځې او شپې ښکلي تمونه',
          desc: 'د شپې د لمانځه (تهجد) او سهار لپاره ځانګړی تم چې سترګې نه خفه کوي.',
          icon: SunMoon,
        },
      ],

      // Visual Showcase
      galleryTitle: 'بصري ننداره او د کاریال سکرینونه',
      gallerySubtitle:
        'د هدایت لار اصلي سکرینونه وګورئ چې پکې روښانه فونټونه او اسانه ډیزاین کارول شوی دی.',
      galleryTabs: [
        {title: 'د لمانځه ډشبورډ', key: 'prayer'},
        {title: 'اسلامي AI مرستیال', key: 'ai'},
        {title: 'قبله او جوماتونه', key: 'qibla'},
        {title: 'تسبېح او اذکار', key: 'tasbih'},
      ],
      galleryItems: [
        {
          id: 'prayer',
          title: 'د لمانځه مهالوېش او معکوس حساب',
          subtitle: 'فلکي وختونه، د بل لمانځه معکوس ټایمر او د جماعت لارښوونه',
          description:
            'اصلي مخپاڼه د اتوماتیک موقعیت، هجري نېټې (۲۴ جمادی الاول ۱۴۴۸ هـ ق) او د لمانځه متحرک کارت ښیي. د مازدیګر لمونځ په ۰۳:۱۹ بجو او د لمانځه د پاتې وخت کاونټ ډاون (۰۲:۴۷:۵۲) په خورا ښکلا ښکاري.',
          points: [
            'د لمانځه فعال کارت د بل لمانځه د پاتې وخت له ښودلو سره',
            'د پنځو لمونځونو بشپړ جدول: سهار ۰۴:۵۱، لمرخاته ۰۶:۱۶، غرمه ۱۱:۳۷، مازدیګر ۰۳:۱۹، ماښام ۰۴:۵۷، ماخستن ۰۶:۲۲',
            'د هجري قمري کلیزې دقیق سمون او ننداره',
            'په پورتنۍ برخه کې د اسلامي AI مرستیال د پوښتنې کارت',
          ],
        },
        {
          id: 'ai',
          title: 'اسلامي AI مرستیال',
          subtitle: 'خپلې دیني او فقهي پوښتنې په اسانۍ وپوښتئ',
          description:
            'یو ډاډمن او ځیرک چټ انټرفېس چې کاروونکي پکې د لمانځه د شرایطو، طهارت، روژې او شرعي ادابو په اړه پوښتنې کوي او مستند ځوابونه ترلاسه کوي.',
          points: [
            'د کاروونکي لپاره ساده او چټک د پوښتنو سکرین',
            'له قران کریم او سنت څخه رېښه لرونکي معتبر ځوابونه',
            'د مهمو دیني لارښوونو د کاپي کولو او خوندي کولو امکان',
            'په پښتو، دري، عربي او انګلیسي ژبو د خبرو اترو وړتیا',
          ],
        },
        {
          id: 'qibla',
          title: 'د قبلې کمپاس او نږدې جوماتونه',
          subtitle: 'د کعبې شریفي دقیق لوری او د مساجدو واټن موندل',
          description:
            'د موبایل د زاویې سنسرونو په مرسته د قبلې لوری ټاکي، او د GPS له لارې نږدې جوماتونه (لکه مسجد حضرت معاذ بن جبل په ۳۴۱ مترۍ کې) ښیي.',
          points: [
            'د قبلې دقیق ډایل او د کعبې لوری په درجو سره',
            'د لړزې ضد سنسوري الګوریتم چې پر هر ټیلفون روښانه پایله ورکوي',
            'د نږدې جوماتونو لیست او تر هغوی د پلي تګ د دقیقو او مترونو حساب',
            'د جمعې د لمانځه ځایونو ته د سمدستي لارښوونې اسانتیا',
          ],
        },
        {
          id: 'tasbih',
          title: 'ګڼونکې تسبېح او مسنون اذکار',
          subtitle: 'د وایبریشن بټن، سهاري او ماښامني اذکار او دعاګانې',
          description:
            'د تسبېح لپاره ارګونومیک او لوی ډیزاین چې کاروونکی کولای شي د سکرین له کتلو پرته یوازې د وایبریشن احساس له لارې ذکرونه حساب کړي.',
          points: [
            'لویه بټنه چې پر هر ټک ارامه لړزه (Vibration) کوي',
            'د ۳۳، ۹۹، ۱۰۰ او ۱۰۰۰ ذکرونو حدونه د بشپړېدو له ځانګړي خبرتیا سره',
            'سهاري، ماښامني او له لمانځه وروسته اذکار د تکرار له شمېر سره',
            'په محلي Room ډېټابېس کې سل په سلو کې افلاین زېرمه',
          ],
        },
      ],

      // Technical Specs
      specsTitle: 'تخنیکي مشخصات او معمارۍ',
      specsSubtitle:
        'د انډروایډ بومي سیستم او محلي ډېټابېس تخنیکي جزییات.',
      specsTable: [
        {label: 'د کاریال بڼه', val: 'د انډروایډ بومي موبایل کاریال (Native Android)'},
        {label: 'ملاتړ شوی سیستم', val: 'انډروایډ ۸.۰ او پورته (API 26–35)'},
        {label: 'پروګرامینګ ژبه', val: 'Kotlin 2.0+ د Coroutines او StateFlow سره'},
        {label: 'د انټرفېس معمارۍ', val: 'Jetpack Compose له عصري ډیزاین او تمونو سره'},
        {label: 'محلي ډېټابېس', val: 'Android Room Database د SQLite پر بنسټ (افلاین)'},
        {label: 'کارول شوي سنسرونه', val: 'Accelerometer او Magnetometer د قبلې لپاره'},
        {label: 'د AI مرستیال سیسټم', val: 'د اسلامي پوهې هوښیار مرستیال (Natural Language AI)'},
        {label: 'د موقعیت موندنه', val: 'Google FusedLocationProviderClient + OpenStreetMap'},
        {label: 'د ژبو ملاتړ', val: 'د Unicode Bidi له مخې پښتو، دري، عربي او انګلیسي'},
        {label: 'رازداري او امنیت', val: 'سل په سلو کې محلي، بې له اعلاناتو او بې له جاسوسۍ'},
        {label: 'د خپرېدو نسخه', val: 'AGZ Labs Production v2.0'},
      ],

      ctaTitle: 'له هدایت لار کاریال څخه ګټه واخلئ',
      ctaSubtitle:
        'ستاسو د اسلامي او نېک ژوند لپاره یو ډاډمن او ارام ملګری.',
      ctaBack: 'بېرته پروژو ته',
      ctaShare: 'پروژه شریکه کړئ',
      linkCopied: 'لېنک کاپي شو!',
    },

    fa: {
      breadcrumbPortfolio: 'پورتفولیو',
      breadcrumbProjects: 'پروژه‌ها',
      backButton: 'بازگشت به پروژه‌ها',
      brandBadge: 'AGZ Labs · اپلیکیشن بومی اندروید',
      versionBadge: 'v2.0 · نسخه فعال',
      title: 'هدایت لار',
      arabicTitle: 'Hidayat Lar',
      tagline: 'همراه هوشمند برای زندگی بهتر و اسلامی',
      subTagline: 'همراه معتمد شما برای عبادات و اعمال نیک',
      shortDescription:
        'اوقات شرعی نجومی، قبله‌نما، اذکار و ادعیه، تسبیح هوشمند، مکان‌یاب مساجد و دستیار هوش مصنوعی اسلامی به چهار زبان.',
      coverImageAlt: 'بنر تبلیغاتی رسمی اپلیکیشن هدایت لار و دستیار هوش مصنوعی اسلامی',
      quickJump: 'دسترسی سریع',
      navAppInfo: 'اطلاعات برنامه',
      navChallenges: 'چالش‌ها',
      navSolution: 'راه‌حل‌ها',
      navResults: 'نتایج',
      navFeatures: 'ویژگی‌های کلیدی',
      navGallery: 'گالری تصویری',
      navSpecs: 'مشخصات فنی',

      // Section A: App Info
      appInfoTitle: 'معرفی برنامه و هدف بنیادین',
      appInfoSubtitle:
        'همراه جامع و معتبر سبک زندگی اسلامی که آداب اصیل عبادی را با هوش مصنوعی کمکی تلفیق کرده است.',
      appInfoIntro:
        'هدایت لار (Hidayat Lar) یک اپلیکیشن پیشرفته بومی اندروید است که در AGZ Labs توسط عبدالجلیل ځواک طراحی و پیاده‌سازی شده است. این اپلیکیشن با هدف حفظ آرامش روحی در عبادات، دسترسی بدون آگهی و حفظ کامل حریم خصوصی شکل گرفته است. این سامانه با قابلیت‌هایی چون محاسبه دقیق اوقات شرعی، قبله‌نمای سنسوری، تسبیح دیجیتال هوشمند، گنجینه ادعیه مأثوره، مکان‌یابی مساجد و دستیار هوش مصنوعی اسلامی به چهار زبان (پشتو، دری، عربی و انگلیسی) در خدمت کاربران است.',
      appInfoPoints: [
        {
          title: 'محاسبه اوقات شرعی نجومی و شمارش معکوس',
          desc: 'محاسبه موقعیت خورشید به صورت محلی برای نمازهای پنجگانه، شمارش معکوس تا نماز بعدی و یادآور نماز جماعت.',
        },
        {
          title: 'دستیار تخصصی هوش مصنوعی اسلامی',
          desc: 'رابط کاربری هوشمند جهت پاسخگویی سریع، محترمانه و مستند به پرسش‌های دینی، احکام نماز، روزه و اخلاق اسلامی.',
        },
        {
          title: 'قبله‌نمای دقیق مبتنی بر سنسورهای سخت‌افزاری',
          desc: 'جهت‌یابی آرام و بدون لرزش به سوی کعبه مشرفه با بهره‌گیری از فیلترهای نرم‌کننده حسگرهای حرکتی.',
        },
        {
          title: 'تسبیح دیجیتال با بازخورد لمسی و اذکار مأثوره',
          desc: 'شمارنده تسبیح با قابلیت ویبره بدون نیاز به نگاه کردن به صفحه، به همراه مجموعه کامل اذکار صبح و شام.',
        },
      ],
      supportedLanguagesHeading: 'زبان‌های پشتیبانی‌شده (پشتو، دری، عربی و انگلیسی)',
      supportedLanguagesList: [
        {name: 'پشتو (Pashto)', note: 'تایپوگرافی اصیل پشتو، اعداد بومی و اصطلاحات متناسب'},
        {name: 'دری (Dari)', note: 'متون روان و منطبق با فرهنگ و زبان فارسی دری'},
        {name: 'عربی (العربية)', note: 'اعراب‌گذاری دقیق آیات قرآن و متون احادیث نبوی'},
        {name: 'انگلیسی (English)', note: 'استاندارد بین‌المللی و دسترسی جهانی'},
      ],

      // Section B: The Challenges
      challengesTitle: 'چالش‌ها و موانع',
      challengesSubtitle:
        'مشکلاتی که ضرورت ایجاد یک اپلیکیشن اسلامی اصیل و بدون تبلیغات را رقم زد.',
      challengesList: [
        {
          id: 'inaccurate-times',
          title: 'خطای محاسباتی اوقات در مناطق کوهستانی',
          desc: 'بسیاری از برنامه‌های عمومی با زاویه‌های ثابت عمل می‌کنند که در مناطق با پستی و بلندی یا عرض جغرافیایی متفاوت باعث اختلاف در سحر و مغرب می‌شود.',
          icon: Clock,
          color: 'from-amber-500/20 to-orange-500/5',
          border: 'border-amber-200 dark:border-amber-800/60',
          badge: 'دقت زمان‌سنجی',
        },
        {
          id: 'intrusive-ads',
          title: 'تبلیغات آزاردهنده و ردیابی کاربران در اپ‌های عبادی',
          desc: 'برنامه‌های مذهبی متداول معمولاً سرشار از پاپ‌آپ‌های تجاری، بنرهای ناگهانی و ردیاب‌های اینترنتی هستند که خلوت معنوی کاربر را برهم می‌زنند.',
          icon: AlertTriangle,
          color: 'from-rose-500/20 to-red-500/5',
          border: 'border-rose-200 dark:border-rose-800/60',
          badge: 'تمرکز و حریم خصوصی',
        },
        {
          id: 'fragmented-tools',
          title: 'پراکندگی ابزارهای دینی در برنامه‌های متعدد',
          desc: 'کاربران ناچارند برای اوقات شرعی، قبله‌نما، کتاب ادعیه، اذکار و یافتن مسجد به چندین برنامه مجزا مراجعه کنند.',
          icon: Layers,
          color: 'from-sky-500/20 to-blue-500/5',
          border: 'border-sky-200 dark:border-sky-800/60',
          badge: 'عدم یکپارچگی',
        },
        {
          id: 'religious-queries',
          title: 'دشواری دسترسی فوری به پاسخ پرسش‌های شرعی',
          desc: 'یافتن پاسخ‌های دقیق و معتبر فقهی و اخلاقی در وب‌سایت‌های متفرقه زمان‌بر و گاه با منابع غیرمعتبر همراه است.',
          icon: Bot,
          color: 'from-indigo-500/20 to-purple-500/5',
          border: 'border-indigo-200 dark:border-indigo-800/60',
          badge: 'دسترسی به دانش',
        },
      ],

      // Section C: The Solution
      solutionTitle: 'راه‌حل‌ها و نوآوری‌ها',
      solutionSubtitle:
        'چگونه هدایت لار با معماری بومی، عملکرد آفلاین و هوش مصنوعی این نیازها را برطرف ساخت.',
      solutionList: [
        {
          title: 'ساختار یکپارچه سبک زندگی اسلامی',
          desc: 'تجمیع اوقات شرعی، قبله، تسبیح، ادعیه، اذکار، مکان‌یاب مساجد و دستیار هوش مصنوعی در یک اپلیکیشن منسجم.',
          icon: Layers,
        },
        {
          title: 'دستیار هوش مصنوعی پاسخگوی مسائل دینی',
          desc: 'پاسخگویی سریع، محترمانه و مستند به پرسش‌های شرعی، آداب عبادات و احکام اسلامی.',
          icon: Bot,
        },
        {
          title: 'صد درصد بدون تبلیغات و حفظ کامل حریم خصوصی',
          desc: 'عاری از هرگونه بنر تبلیغاتی، ویدئوهای اسپانسری و اسکریپت‌های ردیابی اطلاعات کاربر.',
          icon: ShieldCheck,
        },
        {
          title: 'محاسبات نجومی با پایگاه داده محلی Room',
          desc: 'محاسبه دقیق افلاین اوقات شرعی بر اساس مختصات جغرافیایی بدون نیاز به اینترنت مداوم.',
          icon: Database,
        },
        {
          title: 'قبله‌نمای دقیق مجهز به فیلتر ضد لرزش',
          desc: 'ترکیب داده‌های شتاب‌سنج و مغناطیس‌سنج دستگاه برای نمایش دقیق و روان جهت قبله.',
          icon: Compass,
        },
        {
          title: 'مکان‌یاب مساجد نزدیک با GPS',
          desc: 'یافتن سریع مساجد محلی و نمازجمعه‌ها همراه با فاصله به متر و زمان پیاده‌روی.',
          icon: MapPin,
        },
        {
          title: 'تایپوگرافی بومی چهارزبانه',
          desc: 'فونت‌های استاندارد و بهینه برای زبان‌های پشتو، دری، عربی و انگلیسی با چینش بی‌نقص RTL/LTR.',
          icon: Languages,
        },
      ],

      // Section D: The Results
      resultsTitle: 'نتایج و دستاوردها',
      resultsSubtitle:
        'مزایای ملموس و ارزشمندی که کاربران روزانه از هدایت لار دریافت می‌کنند.',
      resultsList: [
        {
          title: 'عبادت آرام و بدون اختلال',
          desc: 'نبود هرگونه تبلیغ بازرگانی، آرامش ذهنی کامل را در هنگام تلاوت ادعیه و نمازها فراهم می‌آورد.',
          metric: '۱۰۰٪ پاک',
          highlight: 'بدون آگهی',
        },
        {
          title: 'پاسخ فوری به مسائل دینی',
          desc: 'دستیار هوش مصنوعی ابهامات شرعی و فقهی را در چند ثانیه و با متانت پاسخ می‌دهد.',
          metric: 'پاسخ هوشمند',
          highlight: 'هدایت معتبر',
        },
        {
          title: 'عملکرد کاملاً آفلاین',
          desc: 'اوقات، قبله، تسبیح و گنجینه اذکار بدون وابستگی به اینترنت در هر مکانی همیشه در دسترس هستند.',
          metric: 'آفلاین',
          highlight: 'پایداری کامل',
        },
        {
          title: 'گنجینه اذکار و ادعیه مأثوره',
          desc: 'صدها دعای مستند از قرآن کریم و احادیث معتبر با اعراب‌گذاری کامل و دسته‌بندی منظم.',
          metric: 'مستند',
          highlight: 'احادیث صحیح',
        },
        {
          title: 'یافتن سریع مساجد در سفر',
          desc: 'مسافران به سادگی نزدیک‌ترین مسجد برای اقامه نماز را با تعیین فاصله دقیق پیدا می‌کنند.',
          metric: 'GPS مساجد',
          highlight: 'فاصله به متر',
        },
        {
          title: 'پشتیبانی فرهنگی و زبانی کامل',
          desc: 'امکان استفاده روان و لذت‌بخش برای فارسی‌زبانان، پشتوزبانان، عرب‌زبانان و مخاطبان انگلیسی.',
          metric: '۴ زبان',
          highlight: 'بومی و اصیل',
        },
      ],

      // Section E: Key Features (9 cards)
      featuresTitle: 'ویژگی‌های کلیدی',
      featuresSubtitle:
        'نه توانمندی اصلی توسعه‌یافته در اپلیکیشن هدایت لار را مرور کنید.',
      featureCards: [
        {
          num: '۰۱',
          title: 'اوقات شرعی نجومی و شمارش معکوس',
          desc: 'محاسبه دقیق اوقات صبح، طلوع، ظهر، عصر، مغرب و عشاء همراه با زمان باقی‌مانده و یادآور جماعت.',
          icon: Clock,
        },
        {
          num: '۰۲',
          title: 'دستیار هوش مصنوعی اسلامی',
          desc: 'پاسخگویی به مسائل دینی، احکام، اخلاق و معارف با تکیه بر منابع معتبر اسلامی.',
          icon: Bot,
        },
        {
          num: '۰۳',
          title: 'قبله‌نمای سنسوری دقیق',
          desc: 'تشخیص زاویه دقیق قبله با فیلتر کاهش نوسان مبتنی بر سنسورهای زاویه‌سنج دستگاه.',
          icon: Compass,
        },
        {
          num: '۰۴',
          title: 'تسبیح دیجیتال با لرزش',
          desc: 'شمارنده هوشمند با تعیین اهداف ۳۳، ۹۹ و ۱۰۰۰ و بازخورد هپتیک بدون نیاز به نگاه به نمایشگر.',
          icon: Sparkles,
        },
        {
          num: '۰۵',
          title: 'مجموعه جامع اذکار مأثوره',
          desc: 'اذکار صبح، شام، پس از نمازها و دعاهای حفاظت همراه با شمارنده و ترجمه روان.',
          icon: BookOpen,
        },
        {
          num: '۰۶',
          title: 'گنجینه ادعیه قرآن و احادیث',
          desc: 'ادعیه برگزیده از کلام‌الله مجید و سنت نبوی با اعراب کامل و دسته‌بندی موضوعی.',
          icon: HeartHandshake,
        },
        {
          num: '۰۷',
          title: 'مکان‌یاب مساجد و نمازهای جمعه',
          desc: 'جستجوی هوشمند مساجد پیرامون با GPS، نمایش فاصله و هدایت سریع به سمت نماز جماعت.',
          icon: MapPin,
        },
        {
          num: '۰۸',
          title: 'پشتیبانی از چهار زبان',
          desc: 'تغییر روان و سریع میان پشتو، دری، عربی و انگلیسی با استانداردهای کامل راست‌چین و چپ‌چین.',
          icon: Languages,
        },
        {
          num: '۰۹',
          title: 'تم‌های تاریک و روشن چشم‌نواز',
          desc: 'طراحی ویژه تم تاریک برای جلوگیری از خستگی چشم در زمان اقامه نماز شب (تهجد) و نماز صبح.',
          icon: SunMoon,
        },
      ],

      // Visual Showcase
      galleryTitle: 'گالری تصویری و نمای صفحات',
      gallerySubtitle:
        'صفحات واقعی اپلیکیشن هدایت لار با طراحی اسلامی مدرن و سلسله‌مراتب بصری شفاف.',
      galleryTabs: [
        {title: 'داشبورد نماز', key: 'prayer'},
        {title: 'دستیار هوش مصنوعی', key: 'ai'},
        {title: 'قبله و مساجد', key: 'qibla'},
        {title: 'تسبیح و اذکار', key: 'tasbih'},
      ],
      galleryItems: [
        {
          id: 'prayer',
          title: 'داشبورد اوقات شرعی و شمارش معکوس',
          subtitle: 'اوقات نجومی زنده، شمارش معکوس و راهنمای نماز جماعت',
          description:
            'صفحه اصلی اپلیکیشن موقعیت مکانی خودکار، تاریخ هجری قمری (۲۴ جمادی‌الاول ۱۴۴۸) و کارت پویای نماز را نشان می‌دهد؛ نماز عصر در ۰۳:۱۹ بعد از ظهر و شمارش معکوس ۰۲:۴۷:۵۲ با وضوح نمایان است.',
          points: [
            'کارت فعال نماز با نشانگر زمان باقی‌مانده تا وقت بعدی',
            'جدول کامل نمازها: صبح ۰۴:۵۱، طلوع ۰۶:۱۶، ظهر ۱۱:۳۷، عصر ۰۳:۱۹، مغرب ۰۴:۵۷، عشاء ۰۶:۲۲',
            'تنظیم خودکار تقویم هجری قمری و رویت هلال محلی',
            'دسترسی سریع به دستیار هوش مصنوعی اسلامی در بالای صفحه',
          ],
        },
        {
          id: 'ai',
          title: 'دستیار هوش مصنوعی اسلامی',
          subtitle: 'پاسخگویی به سوالات دینی و فقهی با آسودگی خاطر',
          description:
            'محیط گفتگوی هوشمند برای طرح پرسش‌های شرعی در حوزه طهارت، نماز، روزه و اخلاق با استناد به منابع معتبر.',
          points: [
            'محیط گفتگوی ساده با پرسش‌های آماده و پرتکرار مذهبی',
            'پاسخ‌های مستند به آیات قرآن کریم و احادیث نبوی',
            'امکان نشانه‌گذاری و ذخیره پاسخ‌ها برای مراجعات بعدی',
            'پاسخگویی به زبان‌های پشتو، دری، عربی و انگلیسی',
          ],
        },
        {
          id: 'qibla',
          title: 'قبله‌نما و مکان‌یاب مساجد',
          subtitle: 'جهت‌یابی دقیق کعبه و یافتن مساجد نزدیک با GPS',
          description:
            'ترکیب داده‌های قطب‌نمای دستگاه برای تعیین زاویه دقیق قبله در کنار اسکن خودکار مساجد نزدیک (نظیر مسجد حضرت معاذ بن جبل در فاصله ۳۴۱ متری).',
          points: [
            'صفحه مدرن قبله‌نما با نمایش درجات و نماد کعبه',
            'فیلتر تثبیت‌کننده حسگرها جهت جلوگیری از لرزش عقربه',
            'لیست مساجد اطراف با محاسبه دقیق متر و زمان پیاده‌روی',
            'امکان مسیریابی سریع به سمت نماز جمعه و جماعت',
          ],
        },
        {
          id: 'tasbih',
          title: 'تسبیح دیجیتال و گنجینه اذکار',
          subtitle: 'شمارنده لمسی با ویبره، ادعیه صبح و شام و تعقیبات',
          description:
            'طراحی ارگونومیک تسبیح برای ذکر گفتن بدون نیاز به نگاه مکرر به صفحه، به همراه صدها ذکر مأثوره معتبر.',
          points: [
            'دکمه بزرگ لمسی با بازخورد لرزشی ملایم در هر شمارش',
            'هدف‌گذاری‌های ۳۳، ۹۹، ۱۰۰ و ۱۰۰۰ با اعلان پایان دور',
            'اذکار صبح و شام با متن عربی، ترجمه و شمارنده اختصاصی',
            'ذخیره‌سازی کامل آفلاین در دیتابیس Room بدون کمترین تأخیر',
          ],
        },
      ],

      // Technical Specs
      specsTitle: 'مشخصات فنی و معماری نرم‌افزار',
      specsSubtitle:
        'جزییات مهندسی ساختار اندروید و پایگاه داده محلی.',
      specsTable: [
        {label: 'نوع نرم‌افزار', val: 'اپلیکیشن بومی موبایل اندروید (Native Android)'},
        {label: 'سیستم‌عامل هدف', val: 'اندروید ۸.۰ و بالاتر (API Level 26–35)'},
        {label: 'زبان برنامه‌نویسی', val: 'Kotlin 2.0+ با Coroutines و StateFlow'},
        {label: 'فریم‌ورک رابط کاربری', val: 'Jetpack Compose با Material 3 و تم‌های سفارشی'},
        {label: 'دیتابیس محلی', val: 'Android Room Database مبتنی بر SQLite (آفلاین)'},
        {label: 'حسگرهای سخت‌افزاری', val: 'ترکیب سنسورهای Accelerometer و Magnetometer'},
        {label: 'موتور هوش مصنوعی', val: 'دستیار پردازش زبان طبیعی و معارف اسلامی (AI Engine)'},
        {label: 'سرویس موقعیت‌یابی', val: 'Google Play FusedLocationProviderClient + OpenStreetMap'},
        {label: 'بین‌المللی‌سازی', val: 'جداسازی متون دوزبانه Unicode Bidi (پشتو، دری، عربی، انگلیسی)'},
        {label: 'امنیت و محرمانگی', val: 'بدون ردیابی، بدون تبلیغات بازرگانی، داده‌های کاملاً محلی'},
        {label: 'وضعیت نسخه', val: 'AGZ Labs Production v2.0'},
      ],

      ctaTitle: 'تجربه اپلیکیشن هدایت لار',
      ctaSubtitle:
        'همراه معنوی آرام، دقیق و بدون تبلیغات برای آرامش روزمره شما.',
      ctaBack: 'بازگشت به پروژه‌ها',
      ctaShare: 'اشتراک‌گذاری پروژه',
      linkCopied: 'لینک کپی شد!',
    },
  };

  const t = content[language as 'en' | 'ps' | 'fa'] || content.en;

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={cn(
        'min-h-screen transition-colors duration-300 font-sans',
        isDark ? 'bg-[#07090e] text-slate-100 selection:bg-indigo-500/30' : 'bg-slate-50 text-slate-900 selection:bg-indigo-500/20'
      )}
    >
      {/* Floating Header / Breadcrumbs & Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-xl border-b transition-colors bg-white/80 dark:bg-[#07090e]/80 border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Back button & Breadcrumbs */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors shadow-2xs cursor-pointer group"
              title={t.backButton}
            >
              <ArrowLeft
                size={14}
                className={cn('transition-transform group-hover:-translate-x-0.5', isRtl && 'rotate-180 group-hover:translate-x-0.5')}
              />
              <span className="hidden sm:inline">{t.backButton}</span>
            </button>

            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

            <nav className="hidden md:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <button onClick={onBack} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
                {t.breadcrumbPortfolio}
              </button>
              <ChevronRight size={12} className={isRtl ? 'rotate-180' : ''} />
              <button onClick={onBack} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
                {t.breadcrumbProjects}
              </button>
              <ChevronRight size={12} className={isRtl ? 'rotate-180' : ''} />
              <span className="font-semibold text-indigo-600 dark:text-indigo-400 truncate max-w-[160px]">
                {t.title}
              </span>
            </nav>
          </div>

          {/* Quick Jump Links & Controls */}
          <div className="flex items-center gap-2">
            {/* Quick Share */}
            <button
              onClick={handleShare}
              className="relative p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={t.ctaShare}
            >
              {copiedLink ? <Check size={16} className="text-emerald-500" /> : <Share2 size={16} />}
              {copiedLink && (
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md whitespace-nowrap">
                  {t.linkCopied}
                </span>
              )}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs">
              {(['en', 'ps', 'fa'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={cn(
                    'px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer',
                    language === lang
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-bold shadow-2xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                  )}
                >
                  {lang === 'en' ? 'EN' : lang === 'ps' ? 'پښتو' : 'دری'}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Toggle Theme"
            >
              {isDark ? <SunMoon size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16 sm:space-y-24">
        {/* ================= HERO SECTION ================= */}
        <section className="relative">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-gradient-to-tr from-emerald-500/10 via-indigo-500/15 to-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Badges & Meta */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
              <span>{t.brandBadge}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
              <CheckCircle2 size={12} />
              <span>{t.versionBadge}</span>
            </span>

            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              <Languages size={12} />
              <span>Pashto · Dari · Arabic · English</span>
            </span>
          </div>

          {/* Title & Taglines */}
          <div className="space-y-3 mb-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-outfit text-slate-900 dark:text-white flex flex-wrap items-center gap-3">
              <span>{t.title}</span>
              <span className="text-2xl sm:text-4xl text-indigo-600 dark:text-indigo-400 font-serif font-bold">
                ({t.arabicTitle})
              </span>
            </h1>

            <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 via-indigo-600 to-sky-600 dark:from-emerald-400 dark:via-indigo-300 dark:to-sky-400 bg-clip-text text-transparent">
              {t.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              {t.shortDescription}
            </p>
          </div>

          {/* Key Value Micro-Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2">
                <Clock size={18} />
              </div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">Prayer Times</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">Astronomical Calculations</p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-2">
                <Bot size={18} />
              </div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">Islamic AI</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">Religious Inquiries & Fiqh</p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
                <Compass size={18} />
              </div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">Qibla Compass</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">Hardware Sensor Fusion</p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-2">
                <WifiOff size={18} />
              </div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">100% Offline Core</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">Zero Commercial Ads</p>
            </div>
          </div>

          {/* Hero Banner Showcase with Lightbox Trigger */}
          <div className="relative group rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/90 shadow-2xl bg-slate-950 max-w-5xl mx-auto">
            <div className="relative w-full min-h-[260px] sm:min-h-[360px] lg:min-h-[420px] max-h-[500px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 flex items-center justify-center p-3 sm:p-5">
              {/* Soft ambient background blur */}
              <img
                src={hidayatLarBanner}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 dark:opacity-40 scale-110 pointer-events-none"
              />

              {/* Crisp, uncropped full poster */}
              <img
                src={hidayatLarBanner}
                alt={t.coverImageAlt}
                className="relative z-10 w-full h-auto max-h-[460px] object-contain rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.01]"
                loading="eager"
              />

              {/* Gradient Scrim & Branding Label */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none z-10" />

              {/* Lightbox Zoom Trigger */}
              <button
                onClick={() => setIsBannerModalOpen(true)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-2xl bg-slate-900/75 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 shadow-lg transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                title="Expand Poster"
              >
                <Maximize2 size={14} />
                <span className="hidden sm:inline">Zoom Artwork</span>
              </button>

              {/* Bottom Tagline on Poster */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 text-white pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs font-mono shadow-md">
                    HL
                  </div>
                  <span className="font-bold text-sm tracking-wide">Hidayat Lar · AGZ Labs</span>
                </div>
                <span className="text-xs font-medium text-slate-200 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {t.subTagline}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION A: APP INFO ================= */}
        <section id="app-info" className="scroll-mt-24 space-y-8">
          <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              <Sparkles size={14} />
              <span>Section A</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-outfit">
              {t.appInfoTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
              {t.appInfoSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Detailed Intro text */}
            <div className="lg:col-span-7 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>{t.appInfoIntro}</p>

              {/* Core Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {t.appInfoPoints.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-2"
                  >
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                      <CheckCircle2 size={16} />
                      <h4>{pt.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{pt.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Architecture Card */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/70 dark:from-slate-900 dark:via-slate-900/90 dark:to-indigo-950/30 border border-indigo-100 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400">
                <Languages size={20} />
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white font-outfit">
                  {t.supportedLanguagesHeading}
                </h3>
              </div>

              <div className="space-y-3">
                {t.supportedLanguagesList.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 flex items-start gap-3 shadow-2xs"
                  >
                    <div className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">{lang.name}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">{lang.note}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>RTL / LTR Bidirectional Isolation</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">Unicode Safe</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION B: THE CHALLENGES ================= */}
        <section id="challenges" className="scroll-mt-24 space-y-8">
          <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <AlertTriangle size={14} />
              <span>Section B</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-outfit">
              {t.challengesTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
              {t.challengesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {t.challengesList.map((ch) => {
              const IconComp = ch.icon;
              return (
                <div
                  key={ch.id}
                  className={cn(
                    'p-6 rounded-3xl bg-white dark:bg-slate-900 border transition-all duration-300 shadow-sm relative overflow-hidden group hover:shadow-md',
                    ch.border
                  )}
                >
                  <div className={cn('absolute -right-12 -top-12 w-36 h-36 rounded-full bg-gradient-to-br blur-2xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity', ch.color)} />

                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-100 shadow-2xs">
                      <IconComp size={20} />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {ch.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 relative z-10">
                    {ch.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                    {ch.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= SECTION C: THE SOLUTION ================= */}
        <section id="solution" className="scroll-mt-24 space-y-8">
          <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={14} />
              <span>Section C</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-outfit">
              {t.solutionTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
              {t.solutionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.solutionList.map((sol, idx) => {
              const IconComp = sol.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-emerald-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <IconComp size={20} />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Capability #{idx + 1}</span>
                    <Check size={14} className="text-emerald-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= SECTION D: THE RESULTS ================= */}
        <section id="results" className="scroll-mt-24 space-y-8">
          <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              <Sparkles size={14} />
              <span>Section D</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-outfit">
              {t.resultsTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
              {t.resultsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.resultsList.map((res, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">
                      {res.metric}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                      {res.highlight}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white pt-1">
                    {res.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {res.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION E: KEY FEATURES (9 CARDS) ================= */}
        <section id="features" className="scroll-mt-24 space-y-8">
          <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              <Layers size={14} />
              <span>Section E</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-outfit">
              {t.featuresTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
              {t.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.featureCards.map((feat) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={feat.num}
                  className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-500/40 hover:shadow-md transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      <IconComp size={20} />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                      {feat.num}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= SECTION F: VISUAL SHOWCASE & SCREENS ================= */}
        <section id="gallery" className="scroll-mt-24 space-y-8">
          <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              <Smartphone size={14} />
              <span>Section F</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-outfit">
              {t.galleryTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
              {t.gallerySubtitle}
            </p>
          </div>

          {/* Interactive Screen Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            {t.galleryTabs.map((tab, idx) => (
              <button
                key={tab.key}
                onClick={() => setActiveGalleryTab(idx)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer',
                  activeGalleryTab === idx
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow-2xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                )}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content Presentation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGalleryTab}
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -12}}
              transition={{duration: 0.3}}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left/Main Column: Architectural Description */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
                  Screen Showcase {activeGalleryTab + 1} / {t.galleryItems.length}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-outfit">
                  {t.galleryItems[activeGalleryTab].title}
                </h3>

                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  {t.galleryItems[activeGalleryTab].subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t.galleryItems[activeGalleryTab].description}
                </p>

                <div className="space-y-2 pt-2">
                  {t.galleryItems[activeGalleryTab].points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual UI Mockup Card */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-indigo-950 text-white border border-slate-700 shadow-xl space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2.5 font-mono">
                  <span>9:41 AM · Auto Location</span>
                  <span className="text-emerald-400">● GPS Connected</span>
                </div>

                {activeGalleryTab === 0 && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                      <div className="flex justify-between items-center text-xs text-slate-300">
                        <span>Current Active Prayer</span>
                        <span className="text-amber-300 font-bold">Asr 03:19 PM</span>
                      </div>
                      <div className="text-lg font-bold text-white">Remaining: 02:47:52</div>
                      <div className="text-[11px] text-emerald-300">Perform prayer in congregation</div>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
                      <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/60">
                        <div className="text-[10px] text-slate-400">Fajr</div>
                        <div className="font-bold">04:51 AM</div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/60">
                        <div className="text-[10px] text-slate-400">Dhuhr</div>
                        <div className="font-bold">11:37 AM</div>
                      </div>
                      <div className="p-2 rounded-lg bg-indigo-900/60 border border-indigo-500/50">
                        <div className="text-[10px] text-indigo-300">Asr</div>
                        <div className="font-bold text-amber-300">03:19 PM</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeGalleryTab === 1 && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-indigo-950/80 border border-indigo-700/60 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-indigo-300">
                        <Bot size={16} />
                        <span>Islamic AI Assistant</span>
                      </div>
                      <p className="text-xs text-slate-200">
                        "What are the sunnah supplications after completing obligatory prayer?"
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-slate-300 space-y-1">
                      <div className="text-[10px] text-emerald-400 font-bold">Verified Sunnah Reference</div>
                      <p className="text-[11px] leading-relaxed">
                        Say "Astaghfirullah" (3x), then "Allahumma anta al-salam wa minka al-salam..." (Sahih Muslim).
                      </p>
                    </div>
                  </div>
                )}

                {activeGalleryTab === 2 && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center space-y-2">
                      <Compass size={40} className="mx-auto text-emerald-400 animate-pulse" />
                      <div className="text-sm font-bold text-white">Qibla: 247° WSW</div>
                      <div className="text-[11px] text-slate-400">Direction to Holy Kaaba, Mecca</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-rose-400" />
                        <span>مسجد حضرت معاذ بن جبل</span>
                      </div>
                      <span className="font-mono text-emerald-400 font-bold">341 m</span>
                    </div>
                  </div>
                )}

                {activeGalleryTab === 3 && (
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-center space-y-2">
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Digital Tasbih Counter</div>
                      <div className="text-3xl font-extrabold text-white font-mono">33 / 33</div>
                      <div className="text-xs text-emerald-300 font-bold">سُبْحَانَ اللَّهِ (SubhanAllah)</div>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 text-center text-[11px]">
                      <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300">Target 33</div>
                      <div className="p-1.5 rounded-lg bg-indigo-900 text-white font-bold">Target 99</div>
                      <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300">Target 1000</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                  <span>AGZ Labs Production View</span>
                  <span className="font-bold text-indigo-400">v2.0 APK</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ================= SECTION G: TECHNICAL SPECS ================= */}
        <section id="specs" className="scroll-mt-24 space-y-8">
          <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              <Database size={14} />
              <span>Section G</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-outfit">
              {t.specsTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
              {t.specsSubtitle}
            </p>
          </div>

          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {t.specsTable.map((spec, sIdx) => (
                <div
                  key={sIdx}
                  className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors text-xs sm:text-sm"
                >
                  <span className="font-semibold text-slate-500 dark:text-slate-400">{spec.label}</span>
                  <span className="font-bold text-slate-900 dark:text-white font-mono text-right">{spec.val}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BOTTOM CTA ================= */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-emerald-950 text-white relative overflow-hidden shadow-2xl text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-outfit">
              {t.ctaTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              {t.ctaSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onBack}
              className="px-6 py-3 rounded-2xl bg-white text-slate-900 font-bold text-xs sm:text-sm shadow-lg hover:bg-slate-100 transition-all cursor-pointer flex items-center gap-2 active:scale-95"
            >
              <ArrowLeft size={16} className={isRtl ? 'rotate-180' : ''} />
              <span>{t.ctaBack}</span>
            </button>

            <button
              onClick={handleShare}
              className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm backdrop-blur-md transition-all cursor-pointer flex items-center gap-2 active:scale-95"
            >
              <Share2 size={16} />
              <span>{copiedLink ? t.linkCopied : t.ctaShare}</span>
            </button>
          </div>
        </section>
      </main>

      {/* Lightbox Modal for Poster Zoom */}
      <AnimatePresence>
        {isBannerModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{opacity: 0, scale: 0.95}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.95}}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            >
              <button
                onClick={() => setIsBannerModalOpen(false)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white rounded-full bg-white/10 backdrop-blur-md cursor-pointer transition-colors"
                title="Close Lightbox"
              >
                <X size={20} />
              </button>

              <img
                src={hidayatLarBanner}
                alt={t.coverImageAlt}
                className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl border border-white/20"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
