/*
   Nevada Fashion - ملف الإعدادات السريعة
   ======================================
   
   هذا الملف يحتوي على جميع البيانات القابلة للتعديل
   في مكان واحد لسهولة الصيانة والتحديث
   
   استخدامه اختياري - يمكنك تعديل البيانات مباشرة في ملفات HTML
*/

// ===== معلومات الموقع =====
const SITE_CONFIG = {
  // اسم الموقع
  siteName: "Nevada Fashion",
  
  // الشعار
  logo: "✨",
  
  // وصف الموقع
  siteDescription: "موقع عرض الملابس النسائية النسائية",
  
  // رابط صفحة Instagram الرئيسية
  instagramUrl: "https://www.instagram.com/nevvada.store/",
  instagramHandle: "@nevvada.store",
  
  // السنة الحالية
  year: 2026
};

// ===== المنتجات =====
const PRODUCTS = [
  {
    id: 1,
    name: "فستان أسود أنيق",
    description: "فستان كلاسيكي أسود مع تفاصيل راقية وتصميم عصري",
    image: "images/product1.jpg",
    videoUrl: "https://www.instagram.com/reel/XXXXX/", // غيري XXXXX برقم الرeel
    buyUrl: "https://www.instagram.com/nevvada.store/"
  },
  {
    id: 2,
    name: "بلوزة وردية فاتحة",
    description: "بلوزة ناعمة بلون وردي جميل مع خامة قطن طبيعية",
    image: "images/product2.jpg",
    videoUrl: "https://www.instagram.com/reel/XXXXX/",
    buyUrl: "https://www.instagram.com/nevvada.store/"
  },
  {
    id: 3,
    name: "جاكيت بيج فاخر",
    description: "جاكيت بلون بيج ناعم مع خامة عالية الجودة وتفاصيل دقيقة",
    image: "images/product3.jpg",
    videoUrl: "https://www.instagram.com/reel/XXXXX/",
    buyUrl: "https://www.instagram.com/nevvada.store/"
  },
  {
    id: 4,
    name: "فستان كحلي مزخرف",
    description: "فستان بلون كحلي جميل مع زخرفات ذهبية أنيقة",
    image: "images/product4.jpg",
    videoUrl: "https://www.instagram.com/reel/XXXXX/",
    buyUrl: "https://www.instagram.com/nevvada.store/"
  },
  {
    id: 5,
    name: "قميص أبيض كلاسيكي",
    description: "قميص أبيض بسيط وأنيق يناسب جميع المناسبات",
    image: "images/product5.jpg",
    videoUrl: "https://www.instagram.com/reel/XXXXX/",
    buyUrl: "https://www.instagram.com/nevvada.store/"
  },
  {
    id: 6,
    name: "فستان جينز أنيق",
    description: "فستان جينز عصري مع قصة مريحة وأنيقة",
    image: "images/product6.jpg",
    videoUrl: "https://www.instagram.com/reel/XXXXX/",
    buyUrl: "https://www.instagram.com/nevvada.store/"
  }
];

// ===== صفحات الموقع =====
const PAGES = {
  home: "index.html",
  products: "products.html",
  about: "about.html",
  contact: "contact.html"
};

// ===== الألوان =====
const COLORS = {
  light: {
    bgPrimary: "#faf8f6",
    bgSecondary: "#ffffff",
    textPrimary: "#2c2c2c",
    textSecondary: "#666666",
    accentColor: "#d4a5a5",
    accentHover: "#c08e8e",
    borderColor: "#e8e1dd"
  },
  dark: {
    bgPrimary: "#1a1a1a",
    bgSecondary: "#2d2d2d",
    textPrimary: "#f0f0f0",
    textSecondary: "#b0b0b0",
    accentColor: "#d4a5a5",
    accentHover: "#e8b8b8",
    borderColor: "#3d3d3d"
  }
};

// ===== النصوص الثابتة =====
const TEXTS = {
  hero: {
    title: "مرحباً بكِ في Nevada Fashion",
    subtitle: "أحدث تصاميم الملابس النسائية براقة وأنيقة",
    button: "استكشفي المنتجات"
  },
  
  products: {
    title: "المنتجات",
    subtitle: "اكتشفي مجموعتنا الحصرية"
  },
  
  about: {
    title: "من نحن",
    subtitle: "تعرفي على قصة Nevada Fashion",
    content: "نحن Nevada Fashion، متخصصون في تقديم أحدث تصاميم الملابس النسائية بجودة عالية وتصاميم أنيقة وراقية."
  },
  
  contact: {
    title: "التواصل معنا",
    subtitle: "نحن هنا لخدمتك والإجابة على جميع استفساراتك",
    instagramMessage: "جميع عمليات الشراء والاستفسارات تتم عبر صفحة Instagram الخاصة بنا"
  },
  
  footer: {
    copyright: "© 2026 Nevada Fashion. جميع الحقوق محفوظة.",
    followUs: "تابعينا على Instagram"
  }
};

/*
   كيفية الاستخدام:
   
   1. غيري قيمة أي متغير أعلاه
   2. احفظي الملف
   3. أعد تحميل الصفحة
   
   أمثلة:
   - لتغيير اسم الموقع: SITE_CONFIG.siteName = "اسم جديد"
   - لتغيير لون التمييز: COLORS.light.accentColor = "#e91e63"
   - لتغيير نص البطل: TEXTS.hero.title = "مرحباً بك"
   
   ملاحظة: هذا الملف حالياً للمرجعية فقط
   لاستخدامه بفعالية، تحتاجين لربطه مع ملف JavaScript رئيسي
   أو استخدام القيم مباشرة في HTML
*/
