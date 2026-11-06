import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  ArrowLeft,
  CloudSun,
  Globe,
  Radio,
  Leaf,
  Cpu,
  Sparkles,
  Smartphone,
  Database,
  WifiOff,
  SunMoon,
  AlertTriangle,
  Languages,
  Wind,
  CheckCircle2,
  Calendar,
  Layers,
  MapPin,
  ExternalLink,
  ChevronRight,
  Maximize2,
  X,
  Share2,
  Check
} from 'lucide-react';
import {useTheme} from '../../context/ThemeContext';
import {useLanguage} from '../../context/LanguageContext';
import {cn} from '../../lib/utils';
import zwakWeatherBanner from '../../assets/images/zwak_weather_banner.png';

interface ZwakWeatherDetailsProps {
  onBack: () => void;
}

export function ZwakWeatherDetails({onBack}: ZwakWeatherDetailsProps) {
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

  // Content in 3 languages
  const content = {
    en: {
      breadcrumbPortfolio: 'Portfolio',
      breadcrumbProjects: 'Projects',
      backButton: 'Back to Projects',
      brandBadge: 'AGZ Labs · Android Application',
      versionBadge: 'v2.5.0 · Active Release',
      title: 'Zwak Weather',
      tagline: 'Smart Weather for Everyone',
      shortDescription:
        'A multilingual weather application offering forecasts, radar, agricultural insights, air quality, and weather news.',
      coverImageAlt: 'Zwak Weather - Smart Forecasting Application Branded Banner',
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
        'A comprehensive multilingual weather application offering forecasts, radar, agricultural insights, air quality, and weather news.',
      appInfoIntro:
        'Zwak Weather is a modern, high-precision Android weather application engineered by AGZ Labs. Conceived to unify fragmented meteorological information, it delivers accurate atmospheric forecasts, live radar maps, specialized agricultural indicators, and air quality metrics across four languages: Pashto, Dari, Arabic, and English.',
      appInfoPoints: [
        {
          title: 'Real-Time Meteorological Guidance',
          desc: 'Instant real-time temperature, "feels like" index, humidity, atmospheric pressure, and structured 24-hour and 7-day forecast curves for any locality.',
        },
        {
          title: 'Interactive Weather Radar & Air Quality',
          desc: 'Dynamic interactive radar layers to track storm paths, precipitation density, and wind vectors alongside live Air Quality Index (AQI) monitoring.',
        },
        {
          title: 'Agricultural Calculations & Crop Insights',
          desc: 'Actionable agro-meteorological guidance (Zarghoona Hawa) designed to calculate optimal spraying hours, soil moisture balance, and early frost warnings.',
        },
        {
          title: 'Severe Weather Alerts & Preparedness',
          desc: 'High-visibility safety warnings for impending heatwaves, frost, strong winds, dust storms, and potential flooding to keep communities prepared.',
        },
      ],
      supportedLanguagesHeading: 'Supported Languages (Native RTL & LTR)',
      supportedLanguagesList: [
        {name: 'Pashto (پښتو)', note: 'Culturally native typography & regional district names'},
        {name: 'Dari (دری)', note: 'Full Persian/Dari localization & standard numbers'},
        {name: 'Arabic (العربية)', note: 'Accurate terminology & Arabic typography'},
        {name: 'English', note: 'Global metrics, international formats & clean hierarchy'},
      ],

      // Section B: The Challenges
      challengesTitle: 'The Challenges',
      challengesSubtitle:
        'Real-world problems that motivated the creation of a tailored, all-in-one weather platform.',
      challengesList: [
        {
          id: 'fragmented',
          title: 'Fragmented Weather Information',
          desc: 'Weather forecasts, radar, air quality, and environmental information are spread across different services, forcing users to juggle multiple apps to get a complete picture.',
          icon: Layers,
          color: 'from-amber-500/20 to-orange-500/5',
          border: 'border-amber-200 dark:border-amber-800/60',
          badge: 'Fragmentation',
        },
        {
          id: 'agricultural',
          title: 'Limited Agricultural Insights',
          desc: 'General weather applications often lack practical agricultural indicators such as evapotranspiration, soil moisture, and spraying conditions essential for farming operations.',
          icon: Leaf,
          color: 'from-emerald-500/20 to-teal-500/5',
          border: 'border-emerald-200 dark:border-emerald-800/60',
          badge: 'Farming Gap',
        },
        {
          id: 'complex',
          title: 'Complex Weather Data',
          desc: 'Meteorological information can be difficult for ordinary people to understand and use in daily decisions due to dense charts, technical jargon, and unintuitive layouts.',
          icon: Wind,
          color: 'from-sky-500/20 to-blue-500/5',
          border: 'border-sky-200 dark:border-sky-800/60',
          badge: 'Usability',
        },
        {
          id: 'severe',
          title: 'Severe Weather Preparedness',
          desc: 'Understanding and preparing for heatwaves, frost, strong winds, dust storms, and potential flooding is a significant challenge when alerts are delayed or buried.',
          icon: AlertTriangle,
          color: 'from-rose-500/20 to-red-500/5',
          border: 'border-rose-200 dark:border-rose-800/60',
          badge: 'Safety Hazard',
        },
      ],

      // Section C: The Solution
      solutionTitle: 'The Solution',
      solutionSubtitle:
        'How Zwak Weather addresses these challenges through thoughtful engineering, comprehensive data unification, and user-centric design.',
      solutionList: [
        {
          title: 'Multiple Weather Information Sources in One Application',
          desc: 'Consolidates live conditions, atmospheric indices, radar maps, air quality, and agricultural parameters into a single unified mobile platform.',
          icon: Layers,
        },
        {
          title: 'Hourly & 7-Day Forecasts',
          desc: 'Delivers structured 24-hour progression curves and 7-day extended trajectories for precise short-term and weekly planning.',
          icon: Calendar,
        },
        {
          title: 'Agricultural Calculations & Crop Insights',
          desc: 'Computes field-tested agro-meteorological metrics including evapotranspiration, soil moisture estimates, and optimal pesticide spraying windows.',
          icon: Leaf,
        },
        {
          title: 'Understandable Weather Visualizations',
          desc: 'Presents complex meteorological datasets through intuitive temperature curves, clear color scales, and accessible condition icons.',
          icon: SunMoon,
        },
        {
          title: 'Severe Weather Alerts',
          desc: 'Provides prominent early notifications for flash floods, dust storms, extreme temperatures, and frost to safeguard people and livelihoods.',
          icon: AlertTriangle,
        },
        {
          title: 'Interactive Radar & Air Quality Information',
          desc: 'Enables users to visually inspect moving precipitation systems and track live particulate matter (PM2.5, PM10) on dynamic maps.',
          icon: Radio,
        },
        {
          title: 'Four-Language Support',
          desc: 'Features culturally native typography and flawless RTL/LTR bidirectional isolation across Pashto, Dari, Arabic, and English.',
          icon: Globe,
        },
      ],

      // Section D: The Results
      resultsTitle: 'The Results',
      resultsSubtitle:
        'Short, realistic benefits delivered to everyday users, commuters, and growers.',
      resultsList: [
        {
          title: 'Convenient Access to Weather Information',
          desc: 'Eliminates the need to switch between disjointed weather apps by bringing all vital environmental data together in one place.',
          metric: 'All-in-One',
          highlight: 'Unified convenience',
        },
        {
          title: 'Better Understanding of Weather Conditions',
          desc: 'Clear visual curves and plain-language summaries help non-specialists easily interpret atmospheric trends and daily shifts.',
          metric: 'Clear UI',
          highlight: 'Intuitive curves',
        },
        {
          title: 'More Informed Agricultural Planning',
          desc: 'Growers can schedule irrigation, fertilizer application, and harvesting with greater precision and confidence.',
          metric: 'Agro Tools',
          highlight: 'Practical crop care',
        },
        {
          title: 'Improved Awareness of Severe Weather Risks',
          desc: 'Timely hazard alerts ensure people and communities take proactive precautions against extreme weather events.',
          metric: 'Early Alerts',
          highlight: 'Proactive safety',
        },
        {
          title: 'Access to Previously Cached Information',
          desc: 'Android Room Database ensures previously retrieved forecasts and radar frames remain viewable during intermittent network drops.',
          metric: 'Local Cache',
          highlight: 'Offline continuity',
        },
        {
          title: 'Multilingual Accessibility',
          desc: 'Native typography and full bidirectional text support ensure millions of people can read vital forecasts in their mother tongue.',
          metric: '4 Languages',
          highlight: 'Native RTL/LTR',
        },
      ],

      // Section E: Key Features (9 visual cards)
      featuresTitle: 'Key Features',
      featuresSubtitle:
        'Explore the nine core implemented capabilities engineered into Zwak Weather.',
      featureCards: [
        {
          num: '01',
          title: 'Real-Time Weather & Forecasts',
          desc: 'Live temperature, humidity, wind velocity, barometric pressure, and structured 24-hour and 7-day forecast curves.',
          icon: CloudSun,
        },
        {
          num: '02',
          title: 'Smart GPS Location',
          desc: 'Automatic device geolocation to instantly acquire local meteorological data or easily switch to any regional provincial capital.',
          icon: MapPin,
        },
        {
          num: '03',
          title: 'Interactive Weather Radar',
          desc: 'Live meteorological radar map tracking precipitation density, cloud fronts, storm systems, and wind patterns with zoom and pan controls.',
          icon: Radio,
        },
        {
          num: '04',
          title: 'Agricultural Intelligence',
          desc: 'Specialized agro-meteorological advisories calculating ideal chemical spraying hours, soil moisture balance, and early frost risks.',
          icon: Leaf,
        },
        {
          num: '05',
          title: 'Severe Weather Alerts',
          desc: 'High-visibility safety warnings for impending flash floods, dust storms, severe thunderstorms, extreme heat, and heavy frost.',
          icon: AlertTriangle,
        },
        {
          num: '06',
          title: 'Air Quality Monitoring',
          desc: 'Live Air Quality Index (AQI) tracking particulate matter (PM2.5, PM10) and atmospheric pollutants with health precautions.',
          icon: Wind,
        },
        {
          num: '07',
          title: 'Climate & Weather News',
          desc: 'Curated meteorological bulletins, seasonal outlooks, and regional environmental updates directly accessible in the app.',
          icon: Calendar,
        },
        {
          num: '08',
          title: 'Four-Language Support',
          desc: 'Fluid switching between Pashto, Dari, Arabic, and English with culturally native typography, full RTL alignment, and zero interface overlap.',
          icon: Languages,
        },
        {
          num: '09',
          title: 'Dark & Light Themes',
          desc: 'Thoughtfully designed dual color palettes providing optimal contrast in bright daylight and eye comfort during low-light nighttime reading.',
          icon: SunMoon,
        },
      ],

      // Visual Showcase
      galleryTitle: 'Visual Showcase & Screens',
      gallerySubtitle:
        'Explore actual screens from Zwak Weather, demonstrating clean typography, intuitive data presentation, and modern mobile aesthetics.',
      galleryTabs: [
        {title: 'Main Weather Dashboard', key: 'dashboard'},
        {title: 'Interactive Radar', key: 'radar'},
        {title: 'Agricultural Intelligence', key: 'agri'},
        {title: 'Weather Forecast', key: 'forecast'},
      ],
      galleryItems: [
        {
          id: 'dashboard',
          title: 'Main Weather Dashboard',
          subtitle: 'Clean visual hierarchy with live temperature & 24h outlook',
          description:
            'The main dashboard presents the current temperature (67° Clear Sky), feels-like index (63°), daily high/low range, and hourly forecast cards with native Pashto/Dari time labels (غ.و ۱, غ.و ۲, غ.و ۳). Below, an elegant temperature curve visualizes diurnal trends.',
          points: [
            'Current temperature card with sun/condition illustration',
            'Hourly 24-hour outlook cards with localized time markers',
            'Smooth temperature curve diagram showing daily thermal shifts',
            'Bottom navigation: Home, Radar, Agriculture, Air Quality, News',
          ],
        },
        {
          id: 'radar',
          title: 'Interactive Weather Radar',
          subtitle: 'Live visual tracking of precipitation, storm fronts & wind',
          description:
            'The weather radar screen visualizes dynamic atmospheric layers overlaid onto regional maps. Users can zoom into their locality to inspect approaching rain bands, cloud cover thickness, and prevailing wind vectors.',
          points: [
            'Precipitation intensity color scale (light shower to severe storm)',
            'Dynamic time-step scrubber to inspect incoming weather over 3–6 hours',
            'Fluid pinch-to-zoom navigation across provincial terrain',
            'Clean vector controls optimized for high-refresh mobile screens',
          ],
        },
        {
          id: 'agri',
          title: 'Agricultural Intelligence (Zarghoona Hawa)',
          subtitle: 'Field-tested meteorological recommendations for farmers & growers',
          description:
            'The Zarghoona Hawa ("Green Weather") module provides direct, practical guidance for agriculturalists. Instead of abstract numbers, it translates weather variables into actionable recommendations on crop irrigation and pesticide application.',
          points: [
            'Safe pesticide/herbicide spraying window calculator based on wind & humidity',
            'Frost risk indicator warning farmers 24–48 hours before sub-zero drops',
            'Evapotranspiration & soil surface moisture estimates for irrigation timing',
            'Crop-specific advisory bulletins written in accessible everyday language',
          ],
        },
        {
          id: 'forecast',
          title: 'Extended Weather Forecast',
          subtitle: 'Detailed multi-day trends, precipitation probability & atmospheric indices',
          description:
            'The extended forecast screen breaks down multi-day atmospheric trajectories with high/low temperature intervals, rain likelihood percentages, relative humidity, UV radiation index, and barometric trends.',
          points: [
            'Multi-day outlook with daily high and low temperature comparisons',
            'Rain & precipitation likelihood percentages for outdoor scheduling',
            'UV index meter with skin protection precautions during peak sun hours',
            'Wind velocity & direction arrows with atmospheric pressure readings',
          ],
        },
      ],

      // Section 4: Project Information Area
      specsTitle: 'Project Information & Specifications',
      specsSubtitle: 'Verified application parameters and architecture specifications.',
      specItems: [
        {label: 'Application Name', value: 'Zwak Weather'},
        {label: 'Brand / Studio', value: 'AGZ Labs'},
        {label: 'Target Platform', value: 'Android'},
        {label: 'Category', value: 'Weather Application'},
        {label: 'Current Version', value: '2.5.0'},
        {label: 'Programming Language', value: 'Kotlin'},
        {label: 'UI Framework', value: 'Jetpack Compose'},
        {label: 'Local Data Storage', value: 'Room Database (Local Caching)'},
      ],
      connectivityNoteTitle: 'Important Connectivity & Offline Notice',
      connectivityNoteDesc:
        'Internet connection is required for live real-time weather retrieval, interactive radar layers, and climate news updates. The application is not fully offline; rather, Android Room Database acts as local data storage and caching to guarantee that previously loaded weather forecasts remain accessible even during temporary connection drops.',
    },

    ps: {
      breadcrumbPortfolio: 'پورټفولیو',
      breadcrumbProjects: 'پروژې',
      backButton: 'بېرته پروژو ته',
      brandBadge: 'AGZ Labs · د انډروایډ کاریال',
      versionBadge: 'نسخه ۲.۵.۰ · فعاله نسخه',
      title: 'ځواک ویدر (Zwak Weather)',
      tagline: 'د ټولو لپاره هوښیاره هوا',
      shortDescription:
        'د هوا حالاتو څو ژبنی کاریال چې د هوا وړاندوینې، رادار، کرنیز معلومات، د هوا کیفیت او تازه خبرونه وړاندې کوي.',
      coverImageAlt: 'ځواک ویدر - د هوا پېژندنې د هوښیار انډروایډ کاریال بنر',
      quickJump: 'چټک لاسرسی',
      navAppInfo: 'د کاریال پېژندنه',
      navChallenges: 'ستونزې او ننګونې',
      navSolution: 'عملي حل لارې',
      navResults: 'لاسته راوړنې',
      navFeatures: 'مهمې ځانګړنې',
      navGallery: 'بصري نندارتون',
      navSpecs: 'د پروژې مشخصات',

      // Section A: App Info
      appInfoTitle: 'د کاریال پېژندنه او بنسټیزه موخه',
      appInfoSubtitle:
        'یو جامع څو ژبنی اقلیمي کاریال چې د هوا وړاندوینې، رادار، کرنیز معلومات، د هوا کیفیت او اقلیمي خبرونه وړاندې کوي.',
      appInfoIntro:
        'ځواک ویدر (Zwak Weather) د AGZ Labs لخوا په کوټلین او Jetpack Compose کې یو پرمختللی انډروایډ کاریال دی. دا کاریال د متفرقه او شیندلو اقلیمي معلوماتو د یوځای کولو لپاره طرحه شوی چې په خپلو ملي ژبو (پښتو او دري) ترڅنګ په عربي او انګلیسي کې د هوا دقیق حالات، انټراکټیف رادار، کرنیز معلومات او د هوا کیفیت وړاندې کوي.',
      appInfoPoints: [
        {
          title: 'د هوا ژوندی او ۲۴ ساعته څار',
          desc: 'د سمدستي تودوخې، احساس کېدونکې درجې، رطوبت، باد او ۲۴ ساعته او ۷ ورځنۍ ګرافیکي وړاندوینه د هرې سیمې لپاره.',
        },
        {
          title: 'انټراکټیف رادار او د هوا کیفیت',
          desc: 'پر نقشه د ورېځو، د باران شدت او د بادونو ژوندی لیدلوری د هوا د ککړتیا (AQI) له دوامداره څار سره.',
        },
        {
          title: 'د کرنې لپاره ځانګړي معلومات (زرغونه هوا)',
          desc: 'د کروندګرو لپاره عملي مشورې؛ د درملو د شیندلو مناسب وخت، د خاورې لندبل او د شپې د یخنۍ مخکینۍ خبرتیا.',
        },
        {
          title: 'د سختې هوا بېړنۍ خبرتیاوې',
          desc: 'د ناڅاپي سېلابونو، سختې یخنۍ، دوړو او طوفانونو او د تودوخې د څپو پر وړاندې د خوندیتوب روښانه خبرتیاوې.',
        },
      ],
      supportedLanguagesHeading: 'ملاتړ شوې ژبې (بشپړ RTL او LTR ملاتړ)',
      supportedLanguagesList: [
        {name: 'پښتو (Pashto)', note: 'اصیل او روان فونټونه د ولایتونو له کره نومونو سره'},
        {name: 'دري (Dari)', note: 'کامل دري ژباړه او د هېواد د سیمو کره نومونه'},
        {name: 'عربي (Arabic)', note: 'د اقلیمي اصطلاحاتو معیاري عربي او فصیح خط'},
        {name: 'انګلیسي (English)', note: 'نړیوال واحدونه، واضح درجه بندي او روان انګلیسي متن'},
      ],

      // Section B: The Challenges
      challengesTitle: 'اصلي ستونزې او ننګونې',
      challengesSubtitle: 'هغه ننګونې چې د یوه منظم او جامع اقلیمي سیستم اړتیا یې روښانه کړه.',
      challengesList: [
        {
          id: 'fragmented',
          title: 'شیندلي او جلا اقلیمي معلومات',
          desc: 'د هوا وړاندوینې، رادار، د هوا کیفیت او چاپېریالي معلومات په بېلابېلو ایپسونو او خدماتو کې خپاره دي او کاروونکي اړ وو څو پروګرامونه وڅاري.',
          icon: Layers,
          color: 'from-amber-500/20 to-orange-500/5',
          border: 'border-amber-200 dark:border-amber-800/60',
          badge: 'د معلوماتو شیندل',
        },
        {
          id: 'agricultural',
          title: 'د کرنې لپاره د ځانګړو معلوماتو کمښت',
          desc: 'عام موسمي کاریالونه د کرنې لپاره اړین شاخصونه لکه د خاورې لندبل، تبخیر او د کیمیاوي درملو شیندلو مناسب شرایط نه وړاندې کوي.',
          icon: Leaf,
          color: 'from-emerald-500/20 to-teal-500/5',
          border: 'border-emerald-200 dark:border-emerald-800/60',
          badge: 'د کرنې تشه',
        },
        {
          id: 'complex',
          title: 'د موسمي ارقامو پېچلتیا',
          desc: 'د هوا پېچلي تخنیکي معلومات او درانده ګرافونه د عامو خلکو لپاره په ورځنیو چارو کې د پوهېدو او کارېدو وړ نه دي.',
          icon: Wind,
          color: 'from-sky-500/20 to-blue-500/5',
          border: 'border-sky-200 dark:border-sky-800/60',
          badge: 'پېچلتیا',
        },
        {
          id: 'severe',
          title: 'له سختو موسمي حالاتو سره مبارزه',
          desc: 'د تودوخې د څپو، سختې یخنۍ، دوړو او طوفانونو او سېلابونو پر وړاندې پر وخت پوهاوی او چمتووالی یوه لویه ننګونه ده.',
          icon: AlertTriangle,
          color: 'from-rose-500/20 to-red-500/5',
          border: 'border-rose-200 dark:border-rose-800/60',
          badge: 'بېړني حالات',
        },
      ],

      // Section C: The Solution
      solutionTitle: 'عملي حل لارې',
      solutionSubtitle:
        'ځواک ویدر څنګه دغه ننګونې د یو موټي ډیزاین او عملي معمارۍ له لارې حل کړې دي.',
      solutionList: [
        {
          title: 'په یو اپلیکیشن کې د هوا د بېلابېلو معلوماتو راټولول',
          desc: 'د هوا حالات، رادار، د تودوخې کچه، د هوا کیفیت او د کرنې شاخصونه ټول په یوه منظم او سپک اپلیکیشن کې سره یوځای شول.',
          icon: Layers,
        },
        {
          title: 'ساعت په ساعت او ۷ ورځنۍ وړاندوینې',
          desc: 'د ۲۴ ساعتونو او اوو راتلونکو ورځو لپاره د تودوخې د بدلون منظمې او دقیقې منحني وړاندې کوي.',
          icon: Calendar,
        },
        {
          title: 'کرنیز حسابونه او د فصلونو روښانه شاخصونه',
          desc: 'د خاورې لندبل، د کیمیاوي درملو د شیندلو د وخت ټاکل او د حاصلاتو د یخنۍ مخکینۍ سپارښتنې محاسبه کوي.',
          icon: Leaf,
        },
        {
          title: 'د پوهېدو وړ او ساده بصري ګرافونه',
          desc: 'د هوا پېچلي معلومات په روانو رنګونو، ساده نښانو او د تودوخې په اسانه ګرافونو کې ښيي.',
          icon: SunMoon,
        },
        {
          title: 'د سختې هوا بېړنۍ خبرتیاوې',
          desc: 'د سېلابونو، طوفانونو، د تودوخې د زیاتوالي او کنګل کېدو پر وړاندې سمدستي خبرداري ورکوي.',
          icon: AlertTriangle,
        },
        {
          title: 'انټراکټیف رادار او د هوا د کیفیت معلومات',
          desc: 'پر نقشه د بارانونو د تېرېدو څارنه او د هوا د ککړتیا (AQI) او زیانمنو ذرو ژوندۍ څارنه اسانه کوي.',
          icon: Radio,
        },
        {
          title: 'په څلورو ژبو بشپړ بومي ملاتړ',
          desc: 'په پښتو، دري، عربي او انګلیسي ژبو د اصیلو فونټونو او دوه طرفه متونو (RTL/LTR) بې‌عیبه ملاتړ.',
          icon: Globe,
        },
      ],

      // Section D: The Results
      resultsTitle: 'لاسته راوړنې او عملي ارزښت',
      resultsSubtitle: 'هغه رښتیني ارزښتونه چې د کاروونکو او کروندګرو ورځني ژوند ته یې ګټه رسولې ده.',
      resultsList: [
        {
          title: 'د هوا معلوماتو ته اسانه او چټک لاسرسی',
          desc: 'د جلا جلا ایپسونو د لټون اړتیا پای ته ورسېده او ټول اړین چاپیریالي معلومات په یو ځای کې موندل کېږي.',
          metric: 'ټول په یو کې',
          highlight: 'اسانه لاسرسی',
        },
        {
          title: 'د اقلیمي حالاتو ښه او روښانه پوهېدنه',
          desc: 'ساده توضیحات او روښانه ګرافونه هر چا ته مرسته کوي چې د هوا پر بدلونونو په اسانۍ پوه شي.',
          metric: 'روښانه ډیزاین',
          highlight: 'ساده پوهېدنه',
        },
        {
          title: 'لا ډېر باوري کرنیز پلان جوړول',
          desc: 'کروندګر کولای شي د اوبو لګولو، درمل شیندلو او حاصل ټولو وختونه په پوره ډاډ سره تنظیم کړي.',
          metric: 'زرغونه هوا',
          highlight: 'د کرنې مرسته',
        },
        {
          title: 'د سختې هوا له خطرونو مخکینی پوهاوی',
          desc: 'د خطرونو پر وخت پیغامونه خلکو ته دا موکه ورکوي چې د موسمي افتونو پر وړاندې احتیاطي تدابیر ونیسي.',
          metric: 'بېړني پیغامونه',
          highlight: 'خوندیتوب',
        },
        {
          title: 'په محلي حافظه کې زېرمه شوو معلوماتو ته لاسرسی',
          desc: 'په Room ډېټابېس کې د کشنګ له امله، د شبکې د موقتي پرېکون پر مهال هم مخکني معلومات پر سکرین روښانه پاتې کېږي.',
          metric: 'محلي کشنګ',
          highlight: 'له خطا خوندي',
        },
        {
          title: 'په څلورو ژبو اسانه لاسرسی',
          desc: 'اصیله تایپوګرافي میلیونونو وګړو ته اجازه ورکوي چې د هوا حالات په خپله ژبه ولولي.',
          metric: '۴ ژبې',
          highlight: 'بومي خط',
        },
      ],

      // Section E: Key Features (9 visual cards)
      featuresTitle: 'د کاریال نهه بنسټیزې ځانګړنې',
      featuresSubtitle: 'د ځواک ویدر هغه ۹ پلې شوې وړتیاوې چې کارول یې باوري کړي دي.',
      featureCards: [
        {
          num: '۰۱',
          title: 'د هوا ژوندی حالت او ۲۴ ساعته وړاندوینه',
          desc: 'د تودوخې درجه، احساس کېدونکې درجه، رطوبت او د ۲۴ ساعتونو او ۷ ورځو ګرافیکي منحني.',
          icon: CloudSun,
        },
        {
          num: '۰۲',
          title: 'د GPS سمارټ ځای موندنه',
          desc: 'په اوتومات ډول د خپل موقعیت پېژندنه یا په اسانۍ د ولایتونو په منځ کې پلټنه.',
          icon: MapPin,
        },
        {
          num: '۰۳',
          title: 'د هوا متحرک او انټراکټیف رادار',
          desc: 'د ورېځو، طوفانونو، د باران شدت او د باد سرعت ژوندی رادار له زوم او حرکت سره.',
          icon: Radio,
        },
        {
          num: '۰۴',
          title: 'کرنیز معلومات (زرغونه هوا)',
          desc: 'د کرنې، د درملو شیندلو د وخت، د خاورې د لندبل او د یخنۍ د خطر مخکینۍ سپارښتنې.',
          icon: Leaf,
        },
        {
          num: '۰۵',
          title: 'د سختې هوا بېړنۍ خبرتیاوې',
          desc: 'د سختو سېلابونو، دوړو، طوفانونو او ناڅاپي یخنۍ په اړه د خطر سمدستي پیغامونه.',
          icon: AlertTriangle,
        },
        {
          num: '۰۶',
          title: 'د هوا د کیفیت څارنه (AQI)',
          desc: 'د هوا د ککړتیا او زهرجنو ذرو کچه د روغتیایي سپارښتنو سره د حساسو خلکو لپاره.',
          icon: Wind,
        },
        {
          num: '۰۷',
          title: 'د اقلیم او هوا تازه خبرونه',
          desc: 'د سیمې او هېواد د اقلیمي بدلونونو او هوا پېژندنې خبرونه او مقالې په اپلیکیشن کې دننه.',
          icon: Calendar,
        },
        {
          num: '۰۸',
          title: 'په څلورو ژبو بشپړ ملاتړ',
          desc: 'د پښتو، دري، عربي او انګلیسي ژبو ترمنځ سمدستي او ارام بدلون له اصلي ښکلي خط سره.',
          icon: Languages,
        },
        {
          num: '۰۹',
          title: 'د ورځې او شپې غوره بڼې (Dark & Light)',
          desc: 'د سترګو د ساتنې او په لمر کې د لوړ کنټراسټ او لوستلو لپاره دوه معیاري ډیزاینونه.',
          icon: SunMoon,
        },
      ],

      // Visual Showcase
      galleryTitle: 'بصري نندارتون او سکرینونه',
      gallerySubtitle:
        'د ځواک ویدر اصلي مخپاڼې، دقیق رادار او ځانګړي ماډیولونه دلته په عملي بڼه وګورئ.',
      galleryTabs: [
        {title: 'د هوا اصلي ډشبورډ', key: 'dashboard'},
        {title: 'د هوا رادار', key: 'radar'},
        {title: 'کرنیز معلومات (زرغونه هوا)', key: 'agri'},
        {title: 'د څو ورځو وړاندوینه', key: 'forecast'},
      ],
      galleryItems: [
        {
          id: 'dashboard',
          title: 'د هوا اصلي ډشبورډ',
          subtitle: 'روښانه ترتیب له ژ ژوندۍ تودوخې او ۲۴ ساعته ګراف سره',
          description:
            'اصلي ډشبورډ د تودوخې ژوندی حالت (67° شین اسمان)، احساسېدونکې درجه (63°)، د ورځې لوړه او ټیټه تودوخه، او د ساعت په ساعت وړاندوینه د پښتو شمېرو (غ.و ۱، غ.و ۲، غ.و ۳) سره ښیي. لاندې د تودوخې د بدلون ښکلې منحني هم لیدل کېږي.',
          points: [
            'د تودوخې اصلي کارت له لمرین سمبول سره',
            'د ساعت په ساعت وړاندوینه د پښتو نښانو سره',
            'د تودوخې د بدلون ګرافیکي منحني',
            'لاندینی مینو: کور، رادار، کرنه، د هوا ککړتیا، خبرونه',
          ],
        },
        {
          id: 'radar',
          title: 'د هوا انټراکټیف رادار',
          subtitle: 'د باران، ورېځو او طوفانونو ژوندۍ څارنه پر نقشه',
          description:
            'د رادار پر سکرین د هوا جریانونه په ژوندي ډول ښکاري. کاروونکي کولای شي خپله سیمه زوم کړي او د باراني ورېځو حرکت او د باد لوری له نږدې وګوري.',
          points: [
            'د باران د شدت رنګین مقیاس (له سپک باران څخه تر سخت طوفان)',
            'د راتلونکو ۳ تر ۶ ساعتونو د هوا د حرکت مهالوېش',
            'د نقشې روان او اسانه زوم پر غرنیو او ښاري سیمو',
            'د موبایل د لوړ کیفیت پردې لپاره چټک کنټرولونه',
          ],
        },
        {
          id: 'agri',
          title: 'کرنیز معلومات (زرغونه هوا)',
          subtitle: 'د کروندګرو او بڼوالو لپاره عملي اقلیمي مشورې',
          description:
            'د زرغونه هوا ماډیول د پېچلو علمي فورمولونو پر ځای په ساده ژبه کروندګر ته وایي چې کله درمل وشیندي او کله خپلو کښتونو ته اوبه ورکړي ترڅو حاصلات یې له تاوانه وژغورل شي.',
          points: [
            'د باد او رطوبت پر بنسټ د کیمیاوي درملو د شیندلو مناسب وخت ټاکل',
            'د یخنۍ او منفي درجو مخکینۍ خبرتیا ۲۴ تر ۴۸ ساعته مخکې',
            'د خاورې د لندبل او اوبو لګولو اټکل',
            'د هر فصل لپاره ساده او د پوهېدو وړ لارښوونې',
          ],
        },
        {
          id: 'forecast',
          title: 'د څو ورځو وړاندوینه',
          subtitle: 'د راتلونکو ورځو د هوا حالت، د باران سلنه او د لمر وړانګې',
          description:
            'د وړاندوینې په سکرین کې د راتلونکو څو ورځو لوړه او ټیټه تودوخه، د باران د ورېدو احتمالي سلنه، نسبي رطوبت او د لمر د ماورای بنفش وړانګو (UV) کچه په تفصیلي ډول ښودل کېږي.',
          points: [
            'د څو راتلونکو ورځو د تودوخې پرله‌پسې پرتله',
            'د باران او واورې د ورېدو دقیق فیصدي اټکل',
            'د الټراوایلټ (UV) وړانګو کچه د روغتیا ساتلو لپاره',
            'د باد سرعت او د اتموسفیر د فشار کره معلومات',
          ],
        },
      ],

      // Section 4: Project Information Area
      specsTitle: 'د پروژې پېژندنه او مشخصات',
      specsSubtitle: 'د ځواک ویدر تخنیکي جوړښت او د پرمختیا رسمي جزییات.',
      specItems: [
        {label: 'د کاریال نوم', value: 'ځواک ویدر (Zwak Weather)'},
        {label: 'جوړوونکی نښان / سټوډیو', value: 'AGZ Labs'},
        {label: 'پلیټفارم', value: 'Android'},
        {label: 'د کاریال کټګوري', value: 'د هوا حالاتو کاریال (Weather App)'},
        {label: 'اوسنۍ نسخه', value: '2.5.0'},
        {label: 'د پروګرامینګ ژبه', value: 'Kotlin'},
        {label: 'د کاروونکي مخ ډیزاین', value: 'Jetpack Compose'},
        {label: 'د محلي ډېټا کشنګ', value: 'Room Database (Local Caching)'},
      ],
      connectivityNoteTitle: 'د انټرنېټ اړتیا او د افلاین کشنګ مهم وضاحت',
      connectivityNoteDesc:
        'د هوا د ژوندیو معلوماتو، د رادار د نقشو او تازه خبرونو د کارېدو لپاره د انټرنېټ شتون حتمي دی. کاریال سل په سلو کې افلاین نه دی، بلکې په ټیلفون کې Room ډېټابېس د محلي ذخیرې او کشنګ دنده ترسره کوي ترڅو د انټرنېټ د موقتي پرېکون پر مهال هم مخکني راښکته شوي معلومات پر سکرین روښانه پاتې شي او کاروونکی له خالي پاڼې سره مخ نشي.',
    },

    fa: {
      breadcrumbPortfolio: 'پورتفولیو',
      breadcrumbProjects: 'پروژه‌ها',
      backButton: 'بازگشت به پروژه‌ها',
      brandBadge: 'AGZ Labs · اپلیکیشن اندروید',
      versionBadge: 'نسخه ۲.۵.۰ · نسخه فعال',
      title: 'زواک ویدر (Zwak Weather)',
      tagline: 'هواشناسی هوشمند برای همه',
      shortDescription:
        'اپلیکیشن چندزبانه هواشناسی شامل پیش‌بینی وضع هوا، رادار، بینش‌های زراعتی، کیفیت هوا و اخبار جوی.',
      coverImageAlt: 'بنر رسمی زواک ویدر - اپلیکیشن هوشمند هواشناسی اندروید',
      quickJump: 'دسترسی سریع',
      navAppInfo: 'معرفی برنامه',
      navChallenges: 'چالش‌ها و موانع',
      navSolution: 'راهکارهای عملی',
      navResults: 'نتایج و ارزش‌ها',
      navFeatures: 'ویژگی‌های کلیدی',
      navGallery: 'گالری تصاویر',
      navSpecs: 'مشخصات پروژه',

      // Section A: App Info
      appInfoTitle: 'معرفی برنامه و هدف اصلی',
      appInfoSubtitle:
        'یک سامانه جامع چندزبانه هواشناسی برای ارائه پیش‌بینی دقیق، رادار، بینش‌های زراعتی، کیفیت هوا و اخبار جوی.',
      appInfoIntro:
        'زواک ویدر (Zwak Weather) یک اپلیکیشن مدرن هواشناسی است که توسط AGZ Labs طراحی و با زبان کاتلین و Jetpack Compose پیاده‌سازی شده است. این اپلیکیشن داده‌های پراکنده هواشناسی را یکپارچه کرده و پیش‌بینی‌های ۲۴ ساعته و ۷ روزه، رادار تعاملی، توصیه‌های زراعتی و پایش کیفیت هوا را به چهار زبان (پشتو، دری، عربی و انگلیسی) ارائه می‌دهد.',
      appInfoPoints: [
        {
          title: 'پایش زنده هوا و پیش‌بینی دقیق',
          desc: 'نمایش آنی دما، دمای احساسی، رطوبت، فشار هوا و نمودار پیوسته تغییرات دما در طول شبانه‌روز و ۷ روز آینده.',
        },
        {
          title: 'رادار تعاملی و پایش کیفیت هوا',
          desc: 'رادار هواشناسی تصویری بر روی نقشه جهت رصد جبهه‌های بارشی و باد به همراه پایش شاخص کیفیت هوا (AQI).',
        },
        {
          title: 'بینش‌های هواشناسی زراعتی (زرغونه هوا)',
          desc: 'راهنمایی‌های میدانی برای دهاقین جهت تعیین ساعات سمپاشی، برآورد رطوبت خاک و هشدار زودهنگام سرمازدگی.',
        },
        {
          title: 'هشدارهای شرایط نامساعد جوی',
          desc: 'اعلان‌های فوری در برابر موج‌های گرما، سرمازدگی، طوفان‌های گرد و غبار و سیلاب‌ها جهت حفظ ایمنی.',
        },
      ],
      supportedLanguagesHeading: 'زبان‌های پشتیبانی‌شده (طراحی اصیل RTL و LTR)',
      supportedLanguagesList: [
        {name: 'پشتو (Pashto)', note: 'قلم بومی و اصیل با نگارش استاندارد نام ولایات'},
        {name: 'دری (Dari)', note: 'ترجمه روان و تایپوگرافی اصیل با ارقام خوانا'},
        {name: 'عربی (Arabic)', note: 'اصطلاحات علمی استاندارد هواشناسی و چیدمان منظم'},
        {name: 'انگلیسی (English)', note: 'واحدهای استاندارد جهانی و سلسله‌مراتب بصری دقیق'},
      ],

      // Section B: The Challenges
      challengesTitle: 'چالش‌ها و نیازهای واقعی',
      challengesSubtitle: 'مشکلاتی که ضرورت طراحی یک سامانه جامع و یکپارچه هواشناسی را نشان داد.',
      challengesList: [
        {
          id: 'fragmented',
          title: 'پراکندگی اطلاعات هواشناسی',
          desc: 'پیش‌بینی‌ها، رادار، کیفیت هوا و داده‌های زیست‌محیطی در سرویس‌های متعددی پراکنده‌اند و کاربر را مجبور به استفاده از چندین اپلیکیشن می‌کردند.',
          icon: Layers,
          color: 'from-amber-500/20 to-orange-500/5',
          border: 'border-amber-200 dark:border-amber-800/60',
          badge: 'پراکندگی اطلاعات',
        },
        {
          id: 'agricultural',
          title: 'محدودیت بینش‌های تخصصی کشاورزی',
          desc: 'برنامه‌های عمومی هواشناسی فاقد شاخص‌های عملی زراعت مانند تبخیر-تعرق، رطوبت خاک و شرایط سمپاشی هستند.',
          icon: Leaf,
          color: 'from-emerald-500/20 to-teal-500/5',
          border: 'border-emerald-200 dark:border-emerald-800/60',
          badge: 'خلاء زراعتی',
        },
        {
          id: 'complex',
          title: 'پیچیدگی تحلیل داده‌های اقلیمی',
          desc: 'داده‌های خام هواشناسی و نمودارهای فنی برای درک و استفاده روزمره عموم دشوارند و نیازمند تصویرسازی ساده هستند.',
          icon: Wind,
          color: 'from-sky-500/20 to-blue-500/5',
          border: 'border-sky-200 dark:border-sky-800/60',
          badge: 'پیچیدگی داده',
        },
        {
          id: 'severe',
          title: 'آمادگی ناکافی در برابر شرایط حاد جوی',
          desc: 'آگاهی زودهنگام و مقابله با موج‌های گرما، سرمازدگی، طوفان‌های گرد و غبار و سیلاب‌ها نیازمند هشدارهای سریع و به موقع است.',
          icon: AlertTriangle,
          color: 'from-rose-500/20 to-red-500/5',
          border: 'border-rose-200 dark:border-rose-800/60',
          badge: 'مخاطرات جوی',
        },
      ],

      // Section C: The Solution
      solutionTitle: 'راهکارهای مهندسی‌شده',
      solutionSubtitle: 'پاسخ زواک ویدر به این چالش‌ها از طریق یکپارچه‌سازی و طراحی کاربرمحور.',
      solutionList: [
        {
          title: 'تجمیع منابع چندگانه هواشناسی در یک برنامه',
          desc: 'یکپارچه‌سازی پیش‌بینی زنده، رادار، کیفیت هوا، اخبار و شاخص‌های زراعتی در یک محیط هماهنگ و سبک.',
          icon: Layers,
        },
        {
          title: 'پیش‌بینی‌های ساعتی و ۷ روزه',
          desc: 'ارائه منحنی‌های پیوسته ۲۴ ساعته و روند هفتگی تغییرات جوی برای برنامه‌ریزی دقیق کوتاه‌مدت و هفتگی.',
          icon: Calendar,
        },
        {
          title: 'محاسبات زراعتی و توصیه‌های مراقبت از محصولات',
          desc: 'محاسبه متغیرهای تبخیر-تعرق، رطوبت خاک و تعیین زمان مناسب سمپاشی برای بهبود تصمیم‌گیری دهاقین.',
          icon: Leaf,
        },
        {
          title: 'تصویرسازی‌های ساده و قابل درک اقلیمی',
          desc: 'نمایش نمودارهای قابل‌فهم، رنگ‌بندی استاندارد و آیکون‌های متناسب برای فهم آسان شرایط آب و هوا.',
          icon: SunMoon,
        },
        {
          title: 'هشدارهای شرایط سخت جوی',
          desc: 'ارسال هشدارهای فوری پیش از وقوع سیلاب، تندباد، گرمای طاقت‌فرسا و سرمازدگی ناگهانی.',
          icon: AlertTriangle,
        },
        {
          title: 'رادار تعاملی و پایش شاخص کیفیت هوا',
          desc: 'امکان مشاهده مسیر بارش‌ها بر روی نقشه و پایش آنلاین ذرات معلق (PM2.5, PM10).',
          icon: Radio,
        },
        {
          title: 'پشتیبانی کامل از چهار زبان',
          desc: 'پیاده‌سازی تایپوگرافی اصیل پشتو، دری، عربی و انگلیسی با جداسازی جهت‌دار کامل متن (Bidi).',
          icon: Globe,
        },
      ],

      // Section D: The Results
      resultsTitle: 'نتایج عملی و ارزش‌های ارائه‌شده',
      resultsSubtitle: 'مزایای کاربردی و ملموس زواک ویدر برای عموم شهروندان، مسافران و کشاورزان.',
      resultsList: [
        {
          title: 'دسترسی سریع و آسان به اطلاعات هواشناسی',
          desc: 'رفع نیاز به نصب برنامه‌های پراکنده با تجمیع تمام شاخص‌های جوی در یک نرم‌افزار واحد.',
          metric: 'همه‌در‌یکی',
          highlight: 'دسترسی یکپارچه',
        },
        {
          title: 'درک بهتر و کاربردی از وضعیت جوی',
          desc: 'نمودارهای روان و متن‌های ساده که فهم روند تغییرات هوا را برای هر کاربری آسان می‌سازد.',
          metric: 'طراحی شفاف',
          highlight: 'فهم آسان',
        },
        {
          title: 'برنامه‌ریزی زراعی دقیق‌تر و آگاهانه‌تر',
          desc: 'کمک به کشاورزان در زمان‌بندی سمپاشی، آبیاری و برداشت محصول با اطمینان بالاتر.',
          metric: 'زرغونه هوا',
          highlight: 'حفاظت زراعی',
        },
        {
          title: 'ارتقای هوشیاری نسبت به مخاطرات حاد آب و هوایی',
          desc: 'هشدارهای زودهنگام که امکان آمادگی در برابر نوسانات شدید اقلیمی را فراهم می‌سازند.',
          metric: 'هشدارهای فوری',
          highlight: 'ایمنی بالاتر',
        },
        {
          title: 'دسترسی به اطلاعات کش‌شده در قطعی اینترنت',
          desc: 'کش محلی داده‌ها در Room Database باعث می‌شود پیش‌بینی‌های قبلی در زمان عدم دسترسی به شبکه بدون خطا نمایش داده شوند.',
          metric: 'کش دیتابیس Room',
          highlight: 'پایداری آفلاین',
        },
        {
          title: 'دسترسی چندزبانه بدون مانع',
          desc: 'نمایش بی‌نقص متون به زبان مادری بدون به‌هم‌ریختگی حروف یا برعکس شدن اعداد.',
          metric: '۴ زبان',
          highlight: 'تایپوگرافی اصیل',
        },
      ],

      // Section E: Key Features (9 visual cards)
      featuresTitle: 'نه ویژگی کلیدی برنامه',
      featuresSubtitle: 'مرور قابلیت‌های اساسی و پیاده‌سازی‌شده زواک ویدر.',
      featureCards: [
        {
          num: '۰۱',
          title: 'پیش‌بینی زنده و ۲۴ ساعته هوا',
          desc: 'نمایش زنده دما، دمای احساسی، رطوبت، سرعت باد و نمودار پیوسته تغییرات دما در طول شبانه‌روز و ۷ روز آینده.',
          icon: CloudSun,
        },
        {
          num: '۰۲',
          title: 'مکان‌یابی هوشمند با GPS',
          desc: 'شناسایی خودکار شهر و موقعیت جغرافیایی کاربر با دقت بالا یا جستجوی سریع میان ولایات.',
          icon: MapPin,
        },
        {
          num: '۰۳',
          title: 'رادار تعاملی هواشناسی',
          desc: 'نقشه راداری زنده برای پیگیری مسیر ابرها، تراکم باران و جهت وزش باد با قابلیت زوم.',
          icon: Radio,
        },
        {
          num: '۰۴',
          title: 'بینش‌های زراعتی (زرغونه هوا)',
          desc: 'راهنماهای ویژه دهقانان برای تعیین ساعات ایمن سمپاشی، رطوبت خاک و اخطار دمای زیر صفر.',
          icon: Leaf,
        },
        {
          num: '۰۵',
          title: 'هشدارهای شرایط سخت جوی',
          desc: 'پیام‌های فوری برای مقابله با سیلاب، توفان گرد و غبار، گرمای شدید و یخبندان ناگهانی.',
          icon: AlertTriangle,
        },
        {
          num: '۰۶',
          title: 'پایش شاخص کیفیت هوا (AQI)',
          desc: 'اندازه‌گیری غلظت ذرات معلق (PM2.5 و PM10) به همراه هشدارهای سلامتی برای افراد حساس.',
          icon: Wind,
        },
        {
          num: '۰۷',
          title: 'اخبار و مقالات اقلیم و هوا',
          desc: 'دسترسی به جدیدترین اطلاعیه‌های جوی و مقالات تغییرات اقلیمی در داخل اپلیکیشن.',
          icon: Calendar,
        },
        {
          num: '۰۸',
          title: 'پشتیبانی از چهار زبان',
          desc: 'جابجایی بی‌درنگ میان پشتو، دری، عربی و انگلیسی با فونت‌های اصیل و بدون تداخل بصری.',
          icon: Languages,
        },
        {
          num: '۰۹',
          title: 'تم‌های تاریک و روشن (Dark & Light)',
          desc: 'دو حالت رنگی استاندارد برای خوانایی عالی در زیر نور خورشید و آرامش چشم در شب.',
          icon: SunMoon,
        },
      ],

      // Visual Showcase
      galleryTitle: 'گالری بصری و بخش‌های اپلیکیشن',
      gallerySubtitle:
        'تصاویر واقعی و بخش‌های مختلف زواک ویدر را با طراحی مدرن و داده‌های دقیق بررسی کنید.',
      galleryTabs: [
        {title: 'داشبورد اصلی هوا', key: 'dashboard'},
        {title: 'رادار هواشناسی', key: 'radar'},
        {title: 'بینش‌های زراعتی', key: 'agri'},
        {title: 'پیش‌بینی چندروزه', key: 'forecast'},
      ],
      galleryItems: [
        {
          id: 'dashboard',
          title: 'داشبورد اصلی هواشناسی',
          subtitle: 'سلسله‌مراتب شفاف بصری با دمای زنده و نمودار ۲۴ ساعته',
          description:
            'داشبورد اصلی شرایط لحظه‌ای (دمای ۶۷ درجه، هوای صاف)، دمای احساسی (۶۳ درجه)، حداقل و حداکثر روز، و کارت‌های ساعتی را با نمادها و اعداد بومی نشان می‌دهد. در پایین کارت، نمودار پیوسته نوسانات دما چیدمان شده است.',
          points: [
            'کارت وضعیت فعلی با تصویرسازی اختصاصی آفتاب و ابرها',
            'کارت‌های پیش‌بینی ۲۴ ساعته با زمان‌بندی دقیق',
            'منحنی پیوسته تغییرات دما در طول شبانه‌روز',
            'منوی دسترسی سریع: خانه، رادار، زراعت، کیفیت هوا، اخبار',
          ],
        },
        {
          id: 'radar',
          title: 'رادار تعاملی هواشناسی',
          subtitle: 'مشاهده زنده جبهه‌های بارشی، ابرها و باد روی نقشه',
          description:
            'صفحه رادار لایه‌های فعال جوی را به شکل پویا نمایش می‌دهد. کاربران می‌توانند با زوم بر روی منطقه خود، مسیر بارش‌ها و جبهه باد را پیش‌بینی نمایند.',
          points: [
            'طیف رنگی استاندارد برای سنجش شدت بارندگی (از ملایم تا طوفانی)',
            'نوار زمان برای بررسی وضعیت جوی ۳ تا ۶ ساعت آینده',
            'ناوبری روان با لمس دو انگشتی بر روی پستی و بلندی‌ها',
            'طراحی برداری سبک و واکنش‌گرا در گوشی‌های هوشمند',
          ],
        },
        {
          id: 'agri',
          title: 'بینش‌های زراعتی (زرغونه هوا)',
          subtitle: 'راهنمایی‌های کاربردی اقلیمی برای کشاورزان و باغداران',
          description:
            'ماژول زرغونه هوا اطلاعات پیچیده جوی را به توصیه‌های ساده و کارآمد برای حفاظت از محصولات کشاورزی و برنامه‌ریزی آبیاری تبدیل می‌کند.',
          points: [
            'محاسبه ساعات مناسب سمپاشی بر مبنای سرعت باد و رطوبت',
            'هشدار زودهنگام خطر سرمازدگی ۲۴ تا ۴۸ ساعت قبل از افت شدید دما',
            'سنجش تقریبی رطوبت سطح خاک و تعریق جهت تعیین دور آبیاری',
            'توصیه‌های کاربردی به زبان ساده و قابل‌فهم برای عموم دهاقین',
          ],
        },
        {
          id: 'forecast',
          title: 'پیش‌بینی تفصیلی چندروزه',
          subtitle: 'بررسی شاخص‌های جوی، احتمال بارندگی و اشعه خورشید',
          description:
            'در صفحه پیش‌بینی، نوسانات دمای روزهای آینده، درصد احتمال بارندگی، رطوبت نسبی هوا و شاخص تابش فرابنفش (UV) به صورت کامل نمایش داده می‌شود.',
          points: [
            'مقایسه حداقل و حداکثر دمای روزهای آینده در جدول منظم',
            'درصد احتمال باران و برف جهت برنامه‌ریزی کاری و مسافرت',
            'شاخص فرابنفش (UV) برای حفاظت از پوست در ساعات تابش شدید',
            'اطلاعات دقیق سرعت باد و جهت وزش با فشار جوی',
          ],
        },
      ],

      // Section 4: Project Information Area
      specsTitle: 'مشخصات و اطلاعات فنی پروژه',
      specsSubtitle: 'پارامترهای رسمی اپلیکیشن و ساختار فنی زواک ویدر.',
      specItems: [
        {label: 'نام برنامه', value: 'زواک ویدر (Zwak Weather)'},
        {label: 'برند / استودیو', value: 'AGZ Labs'},
        {label: 'پلتفرم هدف', value: 'Android'},
        {label: 'دسته‌بندی', value: 'اپلیکیشن هواشناسی (Weather App)'},
        {label: 'نسخه فعلی', value: '2.5.0'},
        {label: 'زبان برنامه‌نویسی', value: 'Kotlin'},
        {label: 'فریم‌ورک رابط کاربری', value: 'Jetpack Compose'},
        {label: 'ذخیره‌سازی و کش محلی', value: 'Room Database (Local Caching)'},
      ],
      connectivityNoteTitle: 'یادداشت مهم در خصوص اینترنت و کش محلی',
      connectivityNoteDesc:
        'اتصال به اینترنت برای دریافت اطلاعات زنده، بارگذاری نقشه‌های رادار و اخبار الزامی است. این اپلیکیشن کاملاً آفلاین نیست؛ بلکه پایگاه داده محلی Room به عنوان کش عمل می‌کند تا در صورت قطعی موقت شبکه اینترنت، پیش‌بینی‌های قبلاً دانلود شده بدون اشکال روی صفحه نمایش باقی بمانند و کاربر با صفحه خالی روبرو نشود.',
    },
  };

  const t = content[language] || content.en;
  const currentGalleryItem = t.galleryItems[activeGalleryTab] || t.galleryItems[0];

  return (
    <div
      className={cn(
        'min-h-screen relative transition-colors duration-300 pb-20 select-text',
        isDark ? 'bg-[#07090e] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
      )}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Ambient Atmospheric Lighting Mesh */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div
          className={cn(
            'absolute -top-24 left-1/4 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none transition-colors duration-500',
            isDark ? 'bg-sky-600/12' : 'bg-sky-200/40'
          )}
        />
        <div
          className={cn(
            'absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none transition-colors duration-500',
            isDark ? 'bg-indigo-600/10' : 'bg-indigo-200/35'
          )}
        />
        <div
          className={cn(
            'absolute top-2/3 -left-20 w-[480px] h-[480px] rounded-full blur-[150px] pointer-events-none transition-colors duration-500',
            isDark ? 'bg-emerald-600/10' : 'bg-emerald-200/30'
          )}
        />
        <div className={`absolute inset-0 ${isDark ? 'bg-tech-grid-dark' : 'bg-tech-grid-light'} opacity-20`} />
      </div>

      {/* Top Navigation Bar with Breadcrumbs & Actions */}
      <header className="sticky top-0 z-40 bg-white/85 dark:bg-[#07090e]/85 backdrop-blur-md border-b border-slate-200/90 dark:border-white/[0.08] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left: Back button & Breadcrumbs */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 transition-all cursor-pointer shadow-2xs group shrink-0"
              aria-label={t.backButton}
            >
              <ArrowLeft
                size={16}
                className={cn('transition-transform group-hover:-translate-x-0.5', isRtl && 'rotate-180 group-hover:translate-x-0.5')}
              />
              <span className="hidden xs:inline">{t.backButton}</span>
            </button>

            <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 hidden sm:block" />

            <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium truncate">
              <button onClick={onBack} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                {t.breadcrumbPortfolio}
              </button>
              <ChevronRight size={13} className={isRtl ? 'rotate-180' : ''} />
              <button onClick={onBack} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                {t.breadcrumbProjects}
              </button>
              <ChevronRight size={13} className={isRtl ? 'rotate-180' : ''} />
              <span className="text-slate-900 dark:text-white font-bold truncate">Zwak Weather</span>
            </nav>
          </div>

          {/* Right: Quick actions: Share, Language switcher, Theme toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 transition-colors cursor-pointer shadow-2xs"
              title="Copy page link"
              aria-label="Share project"
            >
              {copiedLink ? <Check size={16} className="text-emerald-500" /> : <Share2 size={16} />}
            </button>

            {/* Language Switcher Pill */}
            <div className="flex items-center p-0.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-[11px] font-semibold">
              <button
                onClick={() => setLanguage('ps')}
                className={cn(
                  'px-2 py-1 rounded-lg transition-all cursor-pointer',
                  language === 'ps' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs font-bold' : 'text-slate-600 dark:text-slate-400'
                )}
              >
                پښتو
              </button>
              <button
                onClick={() => setLanguage('fa')}
                className={cn(
                  'px-2 py-1 rounded-lg transition-all cursor-pointer',
                  language === 'fa' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs font-bold' : 'text-slate-600 dark:text-slate-400'
                )}
              >
                دری
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  'px-2 py-1 rounded-lg transition-all cursor-pointer',
                  language === 'en' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs font-bold' : 'text-slate-600 dark:text-slate-400'
                )}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 transition-colors cursor-pointer shadow-2xs"
              aria-label="Toggle theme"
            >
              <SunMoon size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 relative z-10 space-y-16 sm:space-y-24">
        {/* ==========================================================================
            HERO HEADER & BRANDED COVER SHOWCASE
           ========================================================================== */}
        <section aria-labelledby="project-hero-title">
          <div className="flex flex-col gap-6">
            {/* Header Badges & Category */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80">
                <Smartphone size={13} className="text-indigo-600 dark:text-indigo-400" />
                <span>{t.brandBadge}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t.versionBadge}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                <Globe size={13} />
                <span>Pashto · Dari · Arabic · English</span>
              </span>
            </div>

            {/* Main Title & Tagline */}
            <div className="max-w-4xl">
              <h1 id="project-hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-outfit tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                {t.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-500 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-300 mt-2 font-outfit">
                {t.tagline}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-3 max-w-3xl">
                {t.shortDescription}
              </p>
            </div>

            {/* Quick In-Page Navigation Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href="#app-info"
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-2xs"
              >
                1. {t.navAppInfo}
              </a>
              <a
                href="#challenges"
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-2xs"
              >
                2. {t.navChallenges}
              </a>
              <a
                href="#solution"
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-2xs"
              >
                3. {t.navSolution}
              </a>
              <a
                href="#results"
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-2xs"
              >
                4. {t.navResults}
              </a>
              <a
                href="#features"
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-2xs"
              >
                5. {t.navFeatures}
              </a>
              <a
                href="#visual-showcase"
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white transition-colors shadow-2xs"
              >
                {t.navGallery}
              </a>
              <a
                href="#project-specs"
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-2xs"
              >
                {t.navSpecs}
              </a>
            </div>

            {/* Provided Branded Banner Showcase Container */}
            <div className="relative group rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/[0.1] shadow-2xl bg-slate-950 mt-3 max-w-5xl mx-auto">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10] overflow-hidden bg-slate-950">
                {/* Full poster filling container edge-to-edge */}
                <img
                  src={zwakWeatherBanner}
                  alt={t.coverImageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                />

                {/* Subtle Hover Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-80 z-10" />

                {/* Overlay Badge Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 text-white pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-xl text-xs font-bold bg-black/60 backdrop-blur-md border border-white/20">
                      AGZ Labs Brand Identity
                    </span>
                    <span className="px-3 py-1 rounded-xl text-xs font-medium bg-black/50 backdrop-blur-md border border-white/10 hidden sm:inline">
                      Jetpack Compose · Real Device Layout
                    </span>
                  </div>

                  <button
                    onClick={() => setIsBannerModalOpen(true)}
                    className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white transition-colors cursor-pointer"
                  >
                    <Maximize2 size={13} />
                    <span>Expand Banner</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION 4 SPECIFICATION: CLEAN PROJECT INFORMATION AREA
           ========================================================================== */}
        <section id="project-specs" aria-labelledby="specs-title" className="scroll-mt-24">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c121e]/90 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_14px_rgba(15,23,42,0.04)] backdrop-blur-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-outfit">
                  Specifications & Verified Data
                </span>
                <h2 id="specs-title" className="text-xl sm:text-2xl font-bold font-outfit text-slate-900 dark:text-white mt-1">
                  {t.specsTitle}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
                {t.specsSubtitle}
              </p>
            </div>

            {/* Spec Attributes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6">
              {t.specItems.map((spec, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {spec.label}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 font-outfit">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Accuracy Notice on Connectivity & Storage */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-800 dark:text-slate-200">
              <div className="flex items-start gap-3">
                <AlertTriangle size={18} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-300">
                    {t.connectivityNoteTitle}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                    {t.connectivityNoteDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION A: APP INFO
           ========================================================================== */}
        <section id="app-info" aria-labelledby="app-info-title" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                A. Application Information
              </span>
              <h2 id="app-info-title" className="text-2xl sm:text-3xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
                {t.appInfoTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {t.appInfoSubtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.appInfoIntro}
              </p>

              {/* Supported Languages Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/[0.08] shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  <Languages size={15} className="text-indigo-600 dark:text-indigo-400" />
                  <span>{t.supportedLanguagesHeading}</span>
                </div>
                <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                  {t.supportedLanguagesList.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                      <span className="font-bold text-slate-800 dark:text-slate-200">{lang.name}</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">{lang.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Capability Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.appInfoPoints.map((pt, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white dark:bg-[#0c121e]/90 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3 shadow-2xs">
                      {i === 0 && <CloudSun size={20} />}
                      {i === 1 && <Radio size={20} />}
                      {i === 2 && <Leaf size={20} />}
                      {i === 3 && <Cpu size={20} />}
                    </div>
                    <h3 className="text-sm font-bold font-outfit text-slate-900 dark:text-white mb-1.5">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION B: THE CHALLENGES
           ========================================================================== */}
        <section id="challenges" aria-labelledby="challenges-title" className="scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase text-xs mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400" />
              B. The Challenges
            </span>
            <h2 id="challenges-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
              {t.challengesTitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
              {t.challengesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.challengesList.map((ch) => {
              const Icon = ch.icon;
              return (
                <div
                  key={ch.id}
                  className="group relative p-5 rounded-2xl bg-white dark:bg-[#0c121e]/90 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className={cn('absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r opacity-70 group-hover:opacity-100 transition-opacity', ch.color)} />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-2xs group-hover:scale-105 transition-transform">
                        <Icon size={18} />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
                        {ch.badge}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold font-outfit text-slate-900 dark:text-white mb-2 leading-snug">
                      {ch.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {ch.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==========================================================================
            SECTION C: THE SOLUTION
           ========================================================================== */}
        <section id="solution" aria-labelledby="solution-title" className="scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              C. The Solution
            </span>
            <h2 id="solution-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
              {t.solutionTitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
              {t.solutionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.solutionList.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0c121e]/90 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-2xs">
                        <Icon size={18} />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-outfit text-slate-900 dark:text-white mb-2 leading-snug">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==========================================================================
            SECTION D: THE RESULTS
           ========================================================================== */}
        <section id="results" aria-labelledby="results-title" className="scroll-mt-24">
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/50 dark:from-slate-900/90 dark:via-[#0c121e]/95 dark:to-indigo-950/40 border border-indigo-200/80 dark:border-indigo-900/60 shadow-md">
            <div className="max-w-3xl mb-8">
              <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2">
                <CheckCircle2 size={14} />
                <span>D. The Results</span>
              </span>
              <h2 id="results-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
                {t.resultsTitle}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                {t.resultsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.resultsList.map((res, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-outfit">
                        {res.metric}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                        {res.highlight}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold font-outfit text-slate-900 dark:text-white mb-1.5">
                      {res.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {res.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
            SECTION E: KEY FEATURES (10 VISUAL CARDS)
           ========================================================================== */}
        <section id="features" aria-labelledby="features-title" className="scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              E. Key Features
            </span>
            <h2 id="features-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
              {t.featuresTitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
              {t.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {t.featureCards.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.num}
                  className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0c121e]/90 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-2xs">
                        <Icon size={16} />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                        {feat.num}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold font-outfit text-slate-900 dark:text-white mb-1.5 leading-snug">
                      {feat.title}
                    </h3>
                    <p className="text-[11.5px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==========================================================================
            SECTION 3: VISUAL SHOWCASE & SCREENSHOT GALLERY
           ========================================================================== */}
        <section id="visual-showcase" aria-labelledby="gallery-title" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2">
                <Sparkles size={13} />
                <span>Visual Showcase</span>
              </span>
              <h2 id="gallery-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
                {t.galleryTitle}
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-md text-xs sm:text-sm leading-relaxed">
              {t.gallerySubtitle}
            </p>
          </div>

          {/* Module Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 bg-slate-100 dark:bg-slate-900/90 rounded-2xl max-w-full overflow-x-auto border border-slate-200/90 dark:border-slate-800 shadow-xs mb-6">
            {t.galleryTabs.map((tab, idx) => (
              <button
                key={tab.key}
                onClick={() => setActiveGalleryTab(idx)}
                className={cn(
                  'px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap',
                  activeGalleryTab === idx
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow-2xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                )}
              >
                <span>{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Active Screen Detail View */}
          <div className="rounded-3xl bg-white dark:bg-[#0c121e]/90 border border-slate-200/90 dark:border-white/[0.08] shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Viewport with Actual UI Asset Representation */}
            <div className="lg:col-span-7 bg-slate-950 relative min-h-[300px] sm:min-h-[380px] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
              <img
                src={zwakWeatherBanner}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-25 scale-110 pointer-events-none"
              />
              <img
                src={zwakWeatherBanner}
                alt={currentGalleryItem.title}
                className="relative z-10 w-full h-auto max-h-[380px] object-contain rounded-2xl opacity-95 shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none z-10" />

              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-xl text-xs font-bold bg-black/70 backdrop-blur-md text-white border border-white/20">
                  {currentGalleryItem.title}
                </span>
              </div>
            </div>

            {/* Description & Points Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left rtl:text-right">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-outfit">
                  {currentGalleryItem.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-outfit text-slate-900 dark:text-white mt-1 mb-3">
                  {currentGalleryItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {currentGalleryItem.description}
                </p>

                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Key Screen Capabilities:
                  </div>
                  {currentGalleryItem.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Screen {activeGalleryTab + 1} of {t.galleryTabs.length}
                </span>
                <button
                  onClick={onBack}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                >
                  <span>{t.backButton}</span>
                  <ChevronRight size={13} className={isRtl ? 'rotate-180' : ''} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation Return Anchor */}
        <div className="pt-8 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <ArrowLeft size={16} className={isRtl ? 'rotate-180' : ''} />
            <span>{t.backButton}</span>
          </button>
        </div>
      </main>

      {/* Banner Fullscreen Modal */}
      <AnimatePresence>
        {isBannerModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{opacity: 0, scale: 0.95}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.95}}
              className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-950 text-white">
                <span className="text-xs sm:text-sm font-bold font-outfit">
                  Zwak Weather — Branded Banner (AGZ Labs)
                </span>
                <button
                  onClick={() => setIsBannerModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-2 sm:p-4 bg-slate-950">
                <img
                  src={zwakWeatherBanner}
                  alt="Zwak Weather Full Banner"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
