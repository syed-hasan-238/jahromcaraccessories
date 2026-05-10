/**
 * Juhrum Language System
 * Supports: EN, AR, UR, FA, HI
 * RTL: AR, UR, FA
 * Fonts: Noto Sans Arabic (AR/UR/FA), Noto Sans Devanagari (HI)
 */

const JUHRUM_LANGS = {
  en: {
    dir: 'ltr',
    font: null,
    label: 'EN',
    name: 'English',
    t: {
      // NAV
      nav_home: 'Home',
      nav_products: 'Products',
      nav_story: 'Our Story',
      nav_contact: 'Contact',
      nav_whatsapp: 'WhatsApp Us',

      // HERO / PRELOADER
      preload_tagline: 'Desert Iron — Est. 2019 — Sharjah UAE',
      preload_subtitle: 'Preparing something extraordinary',

      // HOMEPAGE HERO
      hero_tag: 'Desert Iron — Est. 2019',
      hero_h1_line1: 'BUILT',
      hero_h1_line2: 'BEYOND',
      hero_h1_line3: 'LIMITS.',
      hero_sub: 'Premium accessories for the trucks that define the UAE. Sourced globally. Fitted in Sharjah.',

      // STATS
      stat_rating: '4.7★',
      stat_rating_label: 'Google Rating',
      stat_years: '5+',
      stat_years_label: 'Years of builds',
      stat_trucks: '1000+',
      stat_trucks_label: 'Trucks fitted',

      // SCROLL HINT
      scroll_hint: 'Scroll',

      // PRODUCTS SECTION
      products_tag: 'What We Do',
      products_h2_line1: 'EVERY',
      products_h2_line2: 'MOD.',
      products_h2_line3: 'DONE',
      products_h2_line4: 'RIGHT.',
      products_sub: 'Twelve categories of premium accessories — sourced from the world\'s best manufacturers, fitted by our expert team.',
      products_cta: 'Explore All Products',

      // STORY SECTION (homepage)
      story_tag: 'Our Story',
      story_h2_line1: 'PERSIAN',
      story_h2_line2: 'CRAFT.',
      story_h2_line3: 'UAE',
      story_h2_line4: 'BUILT.',
      story_body: 'Founded by Hadi Ghanaatian, Juhrum carries the DNA of Persian craftsmanship — the belief that anything worth doing is worth doing perfectly. Five years in Sharjah\'s Industrial Area 4 have proven that obsession right.',
      story_cta: 'Read Our Story',

      // CONTACT STRIP
      cs_whatsapp_label: 'WhatsApp — Fastest Response',
      cs_whatsapp_val: 'Message Us Now',
      cs_call_label: 'Call Direct',
      cs_call_val: '050 302 1700',
      cs_visit_label: 'Walk In — No Appointment',
      cs_visit_val: 'Industrial Area 4, Sharjah',
      cs_youtube_label: 'Watch Builds on YouTube',
      cs_youtube_val: '@Juhrum_auto_accessories',
      cs_tiktok_label: 'Follow on TikTok',
      cs_tiktok_val: '@jahromautoaccessorie',
      cs_instagram_label: 'Follow on Instagram',
      cs_instagram_val: '@juhrum_auto_accessories',

      // BOOKING
      booking_tag: 'Book a Fitting',
      booking_h3_line1: 'READY',
      booking_h3_line2: 'TO BUILD?',
      booking_text: 'Walk in with your truck. Our team will assess, advise, and build. No appointment needed — just show up.',
      booking_btn_whatsapp: 'Message on WhatsApp',
      booking_btn_visit: 'Find Our Location',

      // REVIEWS
      reviews_tag: 'What Customers Say',
      reviews_h2: 'THE WORD ON THE STREET.',
      reviews_cta: 'See All Reviews on Google',

      // FOOTER
      footer_tagline: 'Desert Iron — Est. 2019',
      footer_hours: 'Open Daily 8AM – 11PM',
      footer_address: 'Industrial Area 4, Sharjah, UAE',

      // CONTACT PAGE
      contact_hero_tag: 'Get In Touch',
      contact_hero_h1: 'COME IN.\nBUILD IT.',
      contact_hero_sub: 'No appointment needed. Walk in, tell us about your truck, and we\'ll show you what\'s possible.',
      contact_whatsapp: 'Message on WhatsApp',
      contact_call: 'Call: 050 302 1700',
      contact_email: 'h_jahrom@yahoo.com',
      contact_social_title: 'See the builds. Follow us.',
      contact_instagram: 'Instagram',
      contact_youtube: 'YouTube',
      contact_tiktok: 'TikTok',

      // STORY PAGE
      story_hero_sub: 'Persian craftsmanship. UAE desert. Five years of building the best pickup trucks in Sharjah.',
      story_ch1_title: 'The Origin',
      story_ch1_h2_line1: 'BORN IN',
      story_ch1_h2_line2: 'IRAN.',
      story_ch1_h2_line3: 'BUILT IN',
      story_ch1_h2_line4: 'SHARJAH.',
      story_ch1_body1: 'The story of Juhrum begins not in the UAE, but in Iran — a country with one of the most passionate car cultures in the world. Founded by Hadi Ghanaatian, Juhrum carries the DNA of Persian attention to detail: the belief that anything worth doing is worth doing perfectly.',
      story_ch1_body2: 'When Hadi established the shop in Sharjah\'s Industrial Area 4, he brought that same obsession with him. He knew exactly what serious truck owners wanted — not just parts, but accessories that genuinely elevated their vehicle. Products chosen with care, fitted with precision, backed with knowledge.',
      story_ch1_body3: 'More than five years later, Juhrum has become the go-to destination for pickup truck owners across the UAE who refuse to compromise.',

      story_ch2_title: 'The Environment',
      story_ch2_h2_line1: 'BUILT FOR',
      story_ch2_h2_line2: 'UAE',
      story_ch2_h2_line3: 'TERRAIN.',
      story_ch2_body1: '48°C summers. Sand in every seal. UV that destroys cheap coatings within months. The UAE is one of the most punishing environments on earth for truck accessories — and most shops ignore that.',
      story_ch2_body2: 'We don\'t. Every product at Juhrum has been tested against this climate — not in a lab, but in the real heat of Sharjah summers. Bed covers that lock out desert dust. PPF that doesn\'t yellow. Thermal insulation that actually works.',
      story_ch2_body3: 'If it can\'t handle a full UAE year, it doesn\'t earn a place in our showroom. Full stop.',

      story_ch3_title: 'The Products',
      story_ch3_h2_line1: 'WHAT WE',
      story_ch3_h2_line2: 'ACTUALLY',
      story_ch3_h2_line3: 'DO.',
      story_ch3_body1: 'Ram TRX. F-150 Raptor. GMC Sierra Denali. We\'ve built them all. Juhrum specialises in American pickup trucks — the trucks UAE drivers actually choose when they refuse to compromise.',
      story_ch3_body2: 'Bed covers — from retractable hardtops in 6063-T5 aluminium to soft tri-fold covers with weather-tight seals. Exterior builds — bull bars, running boards, roof racks, fender flares. Electronics — head units with Apple CarPlay, premium audio, cameras. Protection — self-healing PPF, thermal insulation, concealed protection. Interior upholstery — full leather seat and floor installations in any colour.',
      story_ch3_body3: 'And because we source directly from manufacturers, our prices remain competitive without compromising on quality. That\'s the promise Hadi made when he opened the doors — and it\'s the promise Juhrum keeps every day.',
      story_ch3_cta: 'Browse Products',
    }
  },

  ar: {
    dir: 'rtl',
    font: 'Noto Sans Arabic',
    label: 'عربي',
    name: 'Arabic',
    t: {
      nav_home: 'الرئيسية',
      nav_products: 'المنتجات',
      nav_story: 'قصتنا',
      nav_contact: 'تواصل معنا',
      nav_whatsapp: 'واتساب',

      preload_tagline: 'حديد الصحراء — منذ 2019 — الشارقة',
      preload_subtitle: 'نجهز لك شيئاً استثنائياً',

      hero_tag: 'حديد الصحراء — منذ 2019',
      hero_h1_line1: 'مبني',
      hero_h1_line2: 'بلا',
      hero_h1_line3: 'حدود.',
      hero_sub: 'إكسسوارات فاخرة للبيكآب والدفع الرباعي في الإمارات. مصادر عالمية. تركيب احترافي في الشارقة.',

      stat_rating: '4.7★',
      stat_rating_label: 'تقييم جوجل',
      stat_years: '+5',
      stat_years_label: 'سنوات خبرة',
      stat_trucks: '+1000',
      stat_trucks_label: 'سيارة جاهزة',

      scroll_hint: 'اسحب',

      products_tag: 'ماذا نعمل',
      products_h2_line1: 'كل',
      products_h2_line2: 'تعديل.',
      products_h2_line3: 'بشكل',
      products_h2_line4: 'صحيح.',
      products_sub: 'اثنا عشر فئة من الإكسسوارات الفاخرة — من أفضل الموردين العالميين، تركيب من فريقنا المتخصص.',
      products_cta: 'استعرض كل المنتجات',

      story_tag: 'قصتنا',
      story_h2_line1: 'حرفية',
      story_h2_line2: 'فارسية.',
      story_h2_line3: 'صُنع في',
      story_h2_line4: 'الإمارات.',
      story_body: 'أسسها هادي غنائيان، جهروم تحمل روح الدقة الفارسية — الإيمان بأن كل شيء يستحق أن يُعمل بإتقان. خمس سنوات في المنطقة الصناعية 4 بالشارقة أثبتت ذلك.',
      story_cta: 'اقرأ قصتنا',

      cs_whatsapp_label: 'واتساب — أسرع رد',
      cs_whatsapp_val: 'راسلنا الآن',
      cs_call_label: 'اتصل مباشرة',
      cs_call_val: '050 302 1700',
      cs_visit_label: 'تفضل بدون موعد',
      cs_visit_val: 'المنطقة الصناعية 4، الشارقة',
      cs_youtube_label: 'شاهد المشاريع على يوتيوب',
      cs_youtube_val: '@Juhrum_auto_accessories',
      cs_tiktok_label: 'تابعنا على تيك توك',
      cs_tiktok_val: '@jahromautoaccessorie',
      cs_instagram_label: 'تابعنا على انستغرام',
      cs_instagram_val: '@juhrum_auto_accessories',

      booking_tag: 'احجز موعد تركيب',
      booking_h3_line1: 'جاهز',
      booking_h3_line2: 'للبناء؟',
      booking_text: 'تعال بسيارتك. فريقنا يقيّم ويقترح ويركب. ما تحتاج موعد — فقط تعال.',
      booking_btn_whatsapp: 'راسلنا على واتساب',
      booking_btn_visit: 'موقعنا',

      reviews_tag: 'آراء العملاء',
      reviews_h2: 'ما يقوله الناس.',
      reviews_cta: 'شاهد كل التقييمات على جوجل',

      footer_tagline: 'حديد الصحراء — منذ 2019',
      footer_hours: 'مفتوح يومياً 8 صباحاً – 11 مساءً',
      footer_address: 'المنطقة الصناعية 4، الشارقة، الإمارات',

      contact_hero_tag: 'تواصل معنا',
      contact_hero_h1: 'تعال.\nابنِه.',
      contact_hero_sub: 'ما تحتاج موعد. تعال وحدثنا عن سيارتك وبنشوفك وش ممكن.',
      contact_whatsapp: 'راسلنا على واتساب',
      contact_call: 'اتصل: 050 302 1700',
      contact_email: 'h_jahrom@yahoo.com',
      contact_social_title: 'تابع المشاريع. اتبعنا.',
      contact_instagram: 'انستغرام',
      contact_youtube: 'يوتيوب',
      contact_tiktok: 'تيك توك',

      story_hero_sub: 'حرفية فارسية. صحراء الإمارات. خمس سنوات في بناء أفضل البيكآب في الشارقة.',
      story_ch1_title: 'البداية',
      story_ch1_h2_line1: 'ولد في',
      story_ch1_h2_line2: 'إيران.',
      story_ch1_h2_line3: 'بُني في',
      story_ch1_h2_line4: 'الشارقة.',
      story_ch1_body1: 'قصة جهروم ما بدأت في الإمارات، بل في إيران — بلد فيها واحدة من أقوى ثقافات السيارات في العالم. أسسها هادي غنائيان، وجهروم تحمل روح الدقة الفارسية: الإيمان بأن كل شيء يستحق إتقان.',
      story_ch1_body2: 'لما فتح هادي المحل في المنطقة الصناعية 4 بالشارقة، جاب معه نفس الهوس. كان يعرف بالضبط ش يبغاه أصحاب البيكآب الجادين — مو بس قطع، إكسسوارات تغير الوجه الكامل للسيارة. منتجات مختارة بعناية، مثبتة بدقة، مضمونة بمعرفة.',
      story_ch1_body3: 'أكثر من خمس سنوات بعدها، صار جهروم الوجهة الأولى لأصحاب البيكآب في الإمارات اللي ما يقبلون التنازل.',

      story_ch2_title: 'البيئة',
      story_ch2_h2_line1: 'مصمم',
      story_ch2_h2_line2: 'لتضاريس',
      story_ch2_h2_line3: 'الإمارات.',
      story_ch2_body1: 'حرارة 48 درجة صيفاً. رمل في كل مكان. أشعة UV تدمر الطلاء الرخيص في أشهر. الإمارات من أقسى البيئات على الإكسسوارات — وأغلب المحلات تتجاهل هذا.',
      story_ch2_body2: 'إحنا ما نتجاهله. كل منتج في جهروم اتجرب في هالمناخ — مو في مختبر، بل في حر الشارقة الفعلي. أغطية صندوق تمنع غبار الصحراء. PPF ما يصفر. عازل حراري يشتغل فعلاً.',
      story_ch2_body3: 'إذا ما يتحمل سنة كاملة في الإمارات، ما يستاهل مكان في محلنا. خلاص.',

      story_ch3_title: 'المنتجات',
      story_ch3_h2_line1: 'وش',
      story_ch3_h2_line2: 'نسوي',
      story_ch3_h2_line3: 'بالضبط.',
      story_ch3_body1: 'Ram TRX. F-150 Raptor. GMC Sierra Denali. بنيناهم كلهم. جهروم متخصص في البيكآب الأمريكي — السيارات اللي يختارها أهل الإمارات الجادون.',
      story_ch3_body2: 'أغطية صندوق — من الصلبة القابلة للسحب من ألمنيوم 6063-T5 إلى الناعمة الثلاثية الطي. تعديلات خارجية — بول بار، درج جانبي، رافعة سقف، أجنحة فوندر. إلكترونيات — شاشات مع Apple CarPlay، صوتيات فاخرة، كاميرات. حماية — PPF ذاتي الإصلاح، عازل حراري. داخلية — جلد كامل للكراسي والأرضية بأي لون.',
      story_ch3_body3: 'وعشان نشتري مباشرة من الموردين، أسعارنا منافسة بدون تنازل عن الجودة. هذا هو وعد هادي لما فتح الأبواب — وهذا ما يلتزم به جهروم كل يوم.',
      story_ch3_cta: 'استعرض المنتجات',
    }
  },

  ur: {
    dir: 'rtl',
    font: 'Noto Nastaliq Urdu',
    label: 'اردو',
    name: 'Urdu',
    t: {
      nav_home: 'ہوم',
      nav_products: 'پروڈکٹس',
      nav_story: 'ہماری کہانی',
      nav_contact: 'رابطہ',
      nav_whatsapp: 'واٹس ایپ',

      preload_tagline: 'ڈیزرٹ آئرن — 2019 سے — شارجہ',
      preload_subtitle: 'کچھ خاص تیار ہو رہا ہے',

      hero_tag: 'ڈیزرٹ آئرن — 2019 سے',
      hero_h1_line1: 'حدوں سے',
      hero_h1_line2: 'پرے',
      hero_h1_line3: 'بنایا.',
      hero_sub: 'یو اے ای کے بہترین ٹرکوں کے لیے پریمیم اکسیسریز۔ عالمی معیار، شارجہ میں نصب۔',

      stat_rating: '4.7★',
      stat_rating_label: 'گوگل ریٹنگ',
      stat_years: '5+',
      stat_years_label: 'سال کا تجربہ',
      stat_trucks: '1000+',
      stat_trucks_label: 'گاڑیاں تیار',

      scroll_hint: 'اسکرول',

      products_tag: 'ہم کیا کرتے ہیں',
      products_h2_line1: 'ہر',
      products_h2_line2: 'موڈ۔',
      products_h2_line3: 'صحیح',
      products_h2_line4: 'طریقے سے۔',
      products_sub: 'بارہ کیٹگریز کی پریمیم اکسیسریز — دنیا کے بہترین برانڈز، ہمارے ماہر ٹیم کی نصبکاری۔',
      products_cta: 'تمام پروڈکٹس دیکھیں',

      story_tag: 'ہماری کہانی',
      story_h2_line1: 'ایرانی',
      story_h2_line2: 'ہنر۔',
      story_h2_line3: 'یو اے ای میں',
      story_h2_line4: 'بنایا۔',
      story_body: 'ہادی غنائیان کی بنائی جہروم، ایرانی باریک بینی کی روایت لے کر آئی — یہ یقین کہ جو کام کرنا ہو، کامل کرو۔ شارجہ میں پانچ سال نے یہ ثابت کر دیا۔',
      story_cta: 'ہماری کہانی پڑھیں',

      cs_whatsapp_label: 'واٹس ایپ — سب سے تیز جواب',
      cs_whatsapp_val: 'ابھی میسج کریں',
      cs_call_label: 'براہ راست کال',
      cs_call_val: '050 302 1700',
      cs_visit_label: 'بغیر اپوائنٹمنٹ آئیں',
      cs_visit_val: 'انڈسٹریل ایریا 4، شارجہ',
      cs_youtube_label: 'یوٹیوب پر بلڈز دیکھیں',
      cs_youtube_val: '@Juhrum_auto_accessories',
      cs_tiktok_label: 'ٹک ٹاک پر فالو کریں',
      cs_tiktok_val: '@jahromautoaccessorie',
      cs_instagram_label: 'انسٹاگرام پر فالو کریں',
      cs_instagram_val: '@juhrum_auto_accessories',

      booking_tag: 'فٹنگ بک کریں',
      booking_h3_line1: 'تیار',
      booking_h3_line2: 'ہیں؟',
      booking_text: 'اپنی گاڑی لے کر آئیں۔ ہماری ٹیم دیکھے گی، مشورہ دے گی، کام کرے گی۔ اپوائنٹمنٹ کی ضرورت نہیں۔',
      booking_btn_whatsapp: 'واٹس ایپ پر میسج',
      booking_btn_visit: 'ہمارا پتہ دیکھیں',

      reviews_tag: 'گاہکوں کی رائے',
      reviews_h2: 'لوگ کیا کہتے ہیں۔',
      reviews_cta: 'گوگل پر تمام ریویوز دیکھیں',

      footer_tagline: 'ڈیزرٹ آئرن — 2019 سے',
      footer_hours: 'روزانہ کھلا صبح 8 بجے سے رات 11 بجے تک',
      footer_address: 'انڈسٹریل ایریا 4، شارجہ، یو اے ای',

      contact_hero_tag: 'رابطہ کریں',
      contact_hero_h1: 'آئیں۔\nبنائیں۔',
      contact_hero_sub: 'اپوائنٹمنٹ کی ضرورت نہیں۔ آئیں، اپنی گاڑی کے بارے میں بتائیں، ہم دکھائیں گے کیا ممکن ہے۔',
      contact_whatsapp: 'واٹس ایپ پر میسج',
      contact_call: 'کال: 050 302 1700',
      contact_email: 'h_jahrom@yahoo.com',
      contact_social_title: 'بلڈز دیکھیں۔ فالو کریں۔',
      contact_instagram: 'انسٹاگرام',
      contact_youtube: 'یوٹیوب',
      contact_tiktok: 'ٹک ٹاک',

      story_hero_sub: 'ایرانی ہنر۔ یو اے ای کا صحرا۔ شارجہ کے بہترین ٹرک بنانے کے پانچ سال۔',
      story_ch1_title: 'آغاز',
      story_ch1_h2_line1: 'ایران میں',
      story_ch1_h2_line2: 'پیدا ہوئے۔',
      story_ch1_h2_line3: 'شارجہ میں',
      story_ch1_h2_line4: 'بنائے۔',
      story_ch1_body1: 'جہروم کی کہانی یو اے ای سے نہیں، ایران سے شروع ہوتی ہے — ایک ایسا ملک جہاں گاڑیوں سے محبت کا کوئی جواب نہیں۔ ہادی غنائیان کی بنائی اس دکان میں ایرانی باریک بینی کا جوہر ہے: یہ یقین کہ جو کام کرنا ہو، کامل کرو۔',
      story_ch1_body2: 'جب ہادی نے شارجہ کے انڈسٹریل ایریا 4 میں دکان کھولی، وہی جذبہ ساتھ لائے۔ وہ جانتے تھے کہ سنجیدہ ٹرک مالکان کو کیا چاہیے — صرف پرزے نہیں، بلکہ ایسی اکسیسریز جو گاڑی کو اگلے درجے پر لے جائیں۔',
      story_ch1_body3: 'پانچ سال بعد، جہروم یو اے ای بھر میں ان لوگوں کی پہلی پسند بن گئی جو سمجھوتہ نہیں کرتے۔',

      story_ch2_title: 'ماحول',
      story_ch2_h2_line1: 'یو اے ای',
      story_ch2_h2_line2: 'کے لیے',
      story_ch2_h2_line3: 'بنایا۔',
      story_ch2_body1: '48 ڈگری گرمی۔ ہر جگہ ریت۔ UV جو سستی کوٹنگ مہینوں میں تباہ کر دے۔ یو اے ای ٹرک اکسیسریز کے لیے دنیا کے سخت ترین ماحولوں میں سے ہے — اور اکثر دکانیں اسے نظرانداز کرتی ہیں۔',
      story_ch2_body2: 'ہم نہیں کرتے۔ جہروم کا ہر پروڈکٹ اس موسم میں آزمایا گیا ہے — لیب میں نہیں، شارجہ کی اصل گرمی میں۔ صحرائی گرد روکنے والے بیڈ کور۔ PPF جو پیلا نہ پڑے۔ تھرمل انسولیشن جو واقعی کام کرے۔',
      story_ch2_body3: 'اگر پورا یو اے ای کا سال نہیں برداشت کر سکتا، تو ہمارے شوروم میں جگہ نہیں۔ بس۔',

      story_ch3_title: 'پروڈکٹس',
      story_ch3_h2_line1: 'ہم',
      story_ch3_h2_line2: 'اصل میں',
      story_ch3_h2_line3: 'کیا کرتے ہیں۔',
      story_ch3_body1: 'Ram TRX۔ F-150 Raptor۔ GMC Sierra Denali۔ سب بنائے ہیں۔ جہروم امریکی پک اپ ٹرکوں میں مہارت رکھتا ہے — وہ گاڑیاں جو یو اے ای والے چنتے ہیں جب سمجھوتہ نہیں کرنا ہوتا۔',
      story_ch3_body2: 'بیڈ کور — سخت ریٹریکٹیبل سے نرم ٹرائی فولڈ تک۔ باہری تبدیلیاں — بل بار، رننگ بورڈ، روف ریک، فینڈر فلیئر۔ الیکٹرونکس — Apple CarPlay اسکرین، پریمیم آڈیو، کیمرے۔ تحفظ — سیلف ہیلنگ PPF، تھرمل انسولیشن۔ اندرونی — کسی بھی رنگ میں مکمل چمڑے کی سیٹ اور فرش۔',
      story_ch3_body3: 'اور چونکہ ہم براہ راست مینوفیکچررز سے خریدتے ہیں، ہمارے دام مسابقتی رہتے ہیں بغیر معیار کی قربانی کے۔ یہی وعدہ ہادی نے دروازے کھولتے وقت کیا تھا — اور یہی جہروم روزانہ نبھاتا ہے۔',
      story_ch3_cta: 'پروڈکٹس دیکھیں',
    }
  },

  fa: {
    dir: 'rtl',
    font: 'Noto Sans Arabic',
    label: 'فارسی',
    name: 'Persian',
    t: {
      nav_home: 'خانه',
      nav_products: 'محصولات',
      nav_story: 'داستان ما',
      nav_contact: 'تماس',
      nav_whatsapp: 'واتساپ',

      preload_tagline: 'آهن صحرا — از ۲۰۱۹ — شارجه',
      preload_subtitle: 'چیز خاصی داریم برات آماده می‌کنیم',

      hero_tag: 'آهن صحرا — از ۲۰۱۹',
      hero_h1_line1: 'ساخته',
      hero_h1_line2: 'شده',
      hero_h1_line3: 'بی‌حد.',
      hero_sub: 'لوازم جانبی درجه یک برای وانت‌های امارات. از سراسر دنیا. نصب در شارجه.',

      stat_rating: '4.7★',
      stat_rating_label: 'امتیاز گوگل',
      stat_years: '5+',
      stat_years_label: 'سال تجربه',
      stat_trucks: '1000+',
      stat_trucks_label: 'ماشین آماده',

      scroll_hint: 'اسکرول',

      products_tag: 'چی کار می‌کنیم',
      products_h2_line1: 'هر',
      products_h2_line2: 'مود.',
      products_h2_line3: 'درست',
      products_h2_line4: 'انجام می‌شه.',
      products_sub: 'دوازده دسته لوازم جانبی فاخر — از بهترین برندهای دنیا، نصب توسط تیم متخصص ما.',
      products_cta: 'همه محصولات رو ببین',

      story_tag: 'داستان ما',
      story_h2_line1: 'هنر',
      story_h2_line2: 'ایرانی.',
      story_h2_line3: 'ساخته',
      story_h2_line4: 'امارات.',
      story_body: 'جهرم که هادی غنائیان اونو تأسیس کرده، حامل ذات دقت ایرانیه — این باور که هر چیزی ارزش داره، باید عالی انجام بشه. پنج سال در منطقه صنعتی ۴ شارجه این رو ثابت کرده.',
      story_cta: 'داستان ما رو بخون',

      cs_whatsapp_label: 'واتساپ — سریع‌ترین پاسخ',
      cs_whatsapp_val: 'همین الان پیام بده',
      cs_call_label: 'تماس مستقیم',
      cs_call_val: '050 302 1700',
      cs_visit_label: 'بدون وقت قبلی بیا',
      cs_visit_val: 'منطقه صنعتی ۴، شارجه',
      cs_youtube_label: 'پروژه‌ها رو در یوتیوب ببین',
      cs_youtube_val: '@Juhrum_auto_accessories',
      cs_tiktok_label: 'در تیک‌تاک دنبال کن',
      cs_tiktok_val: '@jahromautoaccessorie',
      cs_instagram_label: 'در اینستاگرام دنبال کن',
      cs_instagram_val: '@juhrum_auto_accessories',

      booking_tag: 'رزرو نصب',
      booking_h3_line1: 'آماده‌ای',
      booking_h3_line2: 'بسازیم؟',
      booking_text: 'ماشینت رو بیار. تیم ما بررسی می‌کنه، مشاوره می‌ده، کار می‌کنه. وقت قبلی لازم نیست — فقط بیا.',
      booking_btn_whatsapp: 'پیام در واتساپ',
      booking_btn_visit: 'مسیریابی',

      reviews_tag: 'نظر مشتریان',
      reviews_h2: 'مردم چی می‌گن.',
      reviews_cta: 'همه نظرات در گوگل',

      footer_tagline: 'آهن صحرا — از ۲۰۱۹',
      footer_hours: 'روزانه باز: ۸ صبح تا ۱۱ شب',
      footer_address: 'منطقه صنعتی ۴، شارجه، امارات',

      contact_hero_tag: 'تماس با ما',
      contact_hero_h1: 'بیا.\nبسازیم.',
      contact_hero_sub: 'وقت قبلی نمی‌خواد. بیا، از ماشینت بگو، ما نشونت می‌دیم چی ممکنه.',
      contact_whatsapp: 'پیام در واتساپ',
      contact_call: 'تماس: 050 302 1700',
      contact_email: 'h_jahrom@yahoo.com',
      contact_social_title: 'پروژه‌ها رو ببین. دنبال کن.',
      contact_instagram: 'اینستاگرام',
      contact_youtube: 'یوتیوب',
      contact_tiktok: 'تیک‌تاک',

      story_hero_sub: 'هنر ایرانی. صحرای امارات. پنج سال ساختن بهترین وانت‌های شارجه.',
      story_ch1_title: 'ریشه‌ها',
      story_ch1_h2_line1: 'متولد',
      story_ch1_h2_line2: 'ایران.',
      story_ch1_h2_line3: 'ساخته',
      story_ch1_h2_line4: 'شارجه.',
      story_ch1_body1: 'داستان جهرم نه از امارات، بلکه از ایران شروع می‌شه — کشوری که یکی از پرشورترین فرهنگ‌های خودرویی دنیا رو داره. هادی غنائیان این مغازه رو با ذات دقت ایرانی بنیان گذاشت: این باور که هر چیزی که ارزش انجام داره، باید کامل انجام بشه.',
      story_ch1_body2: 'وقتی هادی مغازه رو در منطقه صنعتی ۴ شارجه راه انداخت، همون وسواس رو با خودش آورد. دقیقاً می‌دونست صاحبان جدی وانت چی می‌خوان — نه فقط قطعات، بلکه لوازمی که واقعاً سطح ماشین رو بالا ببره.',
      story_ch1_body3: 'بیش از پنج سال بعد، جهرم تبدیل شده به مقصد اول صاحبان وانت در سراسر امارات که حاضر نیستن کوتاه بیان.',

      story_ch2_title: 'محیط',
      story_ch2_h2_line1: 'ساخته',
      story_ch2_h2_line2: 'برای',
      story_ch2_h2_line3: 'امارات.',
      story_ch2_body1: 'تابستان ۴۸ درجه‌ای. ماسه توی هر درز. UV که رنگ‌های ارزون رو ظرف چند ماه از بین می‌بره. امارات یکی از سخت‌ترین محیط‌های دنیا برای لوازم جانبی خودروئه — و اکثر مغازه‌ها این رو نادیده می‌گیرن.',
      story_ch2_body2: 'ما نمی‌گیریم. هر محصول جهرم در این آب‌وهوا آزمایش شده — نه در آزمایشگاه، بلکه در گرمای واقعی شارجه. کاورهایی که گرد صحرا رو بیرون نگه می‌دارن. PPF که زرد نمی‌شه. عایق حرارتی که واقعاً کار می‌کنه.',
      story_ch2_body3: 'اگه نتونه یه سال کامل در امارات دوام بیاره، جایی در ویترین ما نداره. همین.',

      story_ch3_title: 'محصولات',
      story_ch3_h2_line1: 'دقیقاً',
      story_ch3_h2_line2: 'چی',
      story_ch3_h2_line3: 'انجام می‌دیم.',
      story_ch3_body1: 'Ram TRX. F-150 Raptor. GMC Sierra Denali. همه رو ساختیم. جهرم تخصصش وانت‌های آمریکاییه — ماشین‌هایی که رانندگان امارات وقتی نمی‌خوان کوتاه بیان، انتخاب می‌کنن.',
      story_ch3_body2: 'کاور صندوق — از سقف‌های سخت کشویی از آلومینیوم ۶۰۶۳-T5 تا کاورهای نرم سه‌تایی. تغییرات بیرونی — بول‌بار، پله جانبی، رک سقفی، فلپ گلگیر. الکترونیک — مانیتور با Apple CarPlay، صوت فاخر، دوربین. حفاظت — PPF خودترمیم، عایق حرارتی. داخلی — چرم کامل صندلی و کف در هر رنگی.',
      story_ch3_body3: 'و چون مستقیم از تولیدکننده می‌خریم، قیمت‌هامون رقابتیه بدون اینکه از کیفیت کوتاه بیایم. این وعده‌ایه که هادی وقت افتتاح داد — و هر روز جهرم بهش پایبنده.',
      story_ch3_cta: 'محصولات رو ببین',
    }
  },

  hi: {
    dir: 'ltr',
    font: 'Noto Sans Devanagari',
    label: 'हिन्दी',
    name: 'Hindi',
    t: {
      nav_home: 'होम',
      nav_products: 'प्रोडक्ट्स',
      nav_story: 'हमारी कहानी',
      nav_contact: 'संपर्क',
      nav_whatsapp: 'WhatsApp',

      preload_tagline: 'डेज़र्ट आयरन — 2019 से — शारजाह',
      preload_subtitle: 'कुछ ख़ास तैयार हो रहा है',

      hero_tag: 'डेज़र्ट आयरन — 2019 से',
      hero_h1_line1: 'BUILT',
      hero_h1_line2: 'BEYOND',
      hero_h1_line3: 'LIMITS.',
      hero_sub: 'UAE के बेहतरीन ट्रकों के लिए प्रीमियम एक्सेसरीज़। दुनिया से सोर्स किया, शारजाह में फिट।',

      stat_rating: '4.7★',
      stat_rating_label: 'Google रेटिंग',
      stat_years: '5+',
      stat_years_label: 'साल का अनुभव',
      stat_trucks: '1000+',
      stat_trucks_label: 'ट्रक तैयार',

      scroll_hint: 'स्क्रॉल',

      products_tag: 'हम क्या करते हैं',
      products_h2_line1: 'हर',
      products_h2_line2: 'MOD.',
      products_h2_line3: 'सही',
      products_h2_line4: 'तरीके से।',
      products_sub: 'बारह कैटेगरी की प्रीमियम एक्सेसरीज़ — दुनिया के सबसे अच्छे ब्रांड्स, हमारी एक्सपर्ट टीम द्वारा फिट।',
      products_cta: 'सभी प्रोडक्ट देखें',

      story_tag: 'हमारी कहानी',
      story_h2_line1: 'ईरानी',
      story_h2_line2: 'हुनर।',
      story_h2_line3: 'UAE में',
      story_h2_line4: 'बनाया।',
      story_body: 'हादी ग़नाईयान द्वारा स्थापित जुहरुम, ईरानी बारीकी की परंपरा लेकर आई — यह विश्वास कि जो काम करना हो, उसे परफेक्ट करो। शारजाह में पाँच साल ने यह साबित कर दिया।',
      story_cta: 'हमारी कहानी पढ़ें',

      cs_whatsapp_label: 'WhatsApp — सबसे तेज़ जवाब',
      cs_whatsapp_val: 'अभी मैसेज करें',
      cs_call_label: 'सीधे कॉल करें',
      cs_call_val: '050 302 1700',
      cs_visit_label: 'बिना अपॉइंटमेंट आएं',
      cs_visit_val: 'इंडस्ट्रियल एरिया 4, शारजाह',
      cs_youtube_label: 'YouTube पर बिल्ड्स देखें',
      cs_youtube_val: '@Juhrum_auto_accessories',
      cs_tiktok_label: 'TikTok पर फॉलो करें',
      cs_tiktok_val: '@jahromautoaccessorie',
      cs_instagram_label: 'Instagram पर फॉलो करें',
      cs_instagram_val: '@juhrum_auto_accessories',

      booking_tag: 'फिटिंग बुक करें',
      booking_h3_line1: 'तैयार हैं',
      booking_h3_line2: 'बनाने के लिए?',
      booking_text: 'अपनी गाड़ी लेकर आएं। हमारी टीम देखेगी, सलाह देगी, काम करेगी। अपॉइंटमेंट की ज़रूरत नहीं।',
      booking_btn_whatsapp: 'WhatsApp पर मैसेज',
      booking_btn_visit: 'हमारा लोकेशन',

      reviews_tag: 'ग्राहकों की राय',
      reviews_h2: 'लोग क्या कहते हैं।',
      reviews_cta: 'Google पर सभी रिव्यू देखें',

      footer_tagline: 'डेज़र्ट आयरन — 2019 से',
      footer_hours: 'रोज़ खुला सुबह 8 बजे से रात 11 बजे तक',
      footer_address: 'इंडस्ट्रियल एरिया 4, शारजाह, UAE',

      contact_hero_tag: 'हमसे संपर्क करें',
      contact_hero_h1: 'आएं।\nबनाएं।',
      contact_hero_sub: 'अपॉइंटमेंट नहीं चाहिए। आएं, अपनी गाड़ी के बारे में बताएं, हम दिखाएंगे क्या मुमकिन है।',
      contact_whatsapp: 'WhatsApp पर मैसेज',
      contact_call: 'कॉल: 050 302 1700',
      contact_email: 'h_jahrom@yahoo.com',
      contact_social_title: 'बिल्ड्स देखें। फॉलो करें।',
      contact_instagram: 'Instagram',
      contact_youtube: 'YouTube',
      contact_tiktok: 'TikTok',

      story_hero_sub: 'ईरानी हुनर। UAE का रेगिस्तान। शारजाह के सबसे बेहतरीन ट्रक बनाने के पाँच साल।',
      story_ch1_title: 'शुरुआत',
      story_ch1_h2_line1: 'ईरान में',
      story_ch1_h2_line2: 'जन्मे।',
      story_ch1_h2_line3: 'शारजाह में',
      story_ch1_h2_line4: 'बनाए।',
      story_ch1_body1: 'जुहरुम की कहानी UAE से नहीं, ईरान से शुरू होती है — एक ऐसा देश जहाँ गाड़ियों के प्रति जुनून बेमिसाल है। हादी ग़नाईयान ने इसे ईरानी बारीकी की भावना के साथ बनाया: यह यक़ीन कि जो काम करना हो, पूरी तरह से करो।',
      story_ch1_body2: 'जब हादी ने शारजाह के इंडस्ट्रियल एरिया 4 में दुकान खोली, वही जुनून साथ लाए। वो जानते थे कि सीरियस ट्रक ओनर्स क्या चाहते हैं — सिर्फ पार्ट्स नहीं, बल्कि ऐसी एक्सेसरीज़ जो गाड़ी को एक अलग लेवल पर ले जाएं।',
      story_ch1_body3: 'पाँच साल बाद, जुहरुम पूरे UAE में उन लोगों की पहली पसंद बन गया जो समझौता नहीं करते।',

      story_ch2_title: 'माहौल',
      story_ch2_h2_line1: 'UAE के',
      story_ch2_h2_line2: 'लिए',
      story_ch2_h2_line3: 'बनाया।',
      story_ch2_body1: '48°C गर्मी। हर जगह रेत। UV जो सस्ती कोटिंग को महीनों में बर्बाद कर दे। UAE ट्रक एक्सेसरीज़ के लिए दुनिया के सबसे कठोर वातावरणों में से एक है — और ज़्यादातर दुकानें इसे नज़रअंदाज़ करती हैं।',
      story_ch2_body2: 'हम नहीं करते। जुहरुम का हर प्रोडक्ट इस मौसम में टेस्ट किया गया है — लैब में नहीं, बल्कि शारजाह की असली गर्मी में। बेड कवर जो रेगिस्तानी धूल रोकें। PPF जो पीला न पड़े। थर्मल इंसुलेशन जो सच में काम करे।',
      story_ch2_body3: 'अगर पूरा UAE साल नहीं झेल सकता, तो हमारे शोरूम में जगह नहीं। बस।',

      story_ch3_title: 'प्रोडक्ट्स',
      story_ch3_h2_line1: 'हम',
      story_ch3_h2_line2: 'असल में',
      story_ch3_h2_line3: 'क्या करते हैं।',
      story_ch3_body1: 'Ram TRX. F-150 Raptor. GMC Sierra Denali. सब बनाए हैं। जुहरुम अमेरिकी पिकअप ट्रकों में माहिर है — वो गाड़ियाँ जो UAE के लोग चुनते हैं जब समझौता नहीं करना होता।',
      story_ch3_body2: 'बेड कवर — रिट्रैक्टेबल हार्डटॉप से ट्राई-फोल्ड तक। बाहरी बदलाव — बुल बार, रनिंग बोर्ड, रूफ रैक, फेंडर फ्लेयर। इलेक्ट्रॉनिक्स — Apple CarPlay, प्रीमियम ऑडियो, कैमरे। प्रोटेक्शन — सेल्फ-हीलिंग PPF, थर्मल इंसुलेशन। इंटीरियर — किसी भी रंग में पूरी लेदर सीट और फ्लोर।',
      story_ch3_body3: 'और क्योंकि हम सीधे मैन्युफैक्चरर से खरीदते हैं, हमारी कीमतें क्वालिटी से समझौता किए बिना कॉम्पिटिटिव रहती हैं। यही वादा हादी ने दरवाज़े खोलते वक्त किया था — और यही जुहरुम हर दिन निभाता है।',
      story_ch3_cta: 'प्रोडक्ट्स देखें',
    }
  }
};

// ──────────────────────────────────────────
// Apply language to page
// ──────────────────────────────────────────
function juhrumApplyLang(code) {
  const lang = JUHRUM_LANGS[code];
  if (!lang) return;

  // Store
  localStorage.setItem('juhrum-lang', code);

  // HTML dir + lang
  document.documentElement.setAttribute('lang', code);
  document.documentElement.setAttribute('dir', lang.dir);

  // Font injection
  if (!document.getElementById('juhrum-lang-font')) {
    const style = document.createElement('style');
    style.id = 'juhrum-lang-font';
    document.head.appendChild(style);
  }
  const fontStyle = document.getElementById('juhrum-lang-font');
  if (lang.font === 'Noto Sans Arabic') {
    fontStyle.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;600;700&display=swap');
      [data-i18n], .jnav-links a, .cs-label, .cs-title, .ed-body, .ed-h2, 
      .sh-h1, .sh-sub, .jnav-wa, .btn-g, .btn-dark, .booking-text,
      .booking-h3, .h-sub, .pq-text, .vcard-body, .vcard-title {
        font-family: 'Noto Sans Arabic', sans-serif !important;
        letter-spacing: 0 !important;
      }
      .ed-h2, .sh-h1, .booking-h3, .pq-text, .values-h { 
        line-height: 1.1 !important;
        font-size: 0.8em;
      }
    `;
  } else if (lang.font === 'Noto Nastaliq Urdu') {
    fontStyle.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');
      [data-i18n], .jnav-links a, .cs-label, .cs-title, .ed-body, .ed-h2, 
      .sh-h1, .sh-sub, .jnav-wa, .btn-g, .btn-dark, .booking-text,
      .booking-h3, .h-sub, .pq-text, .vcard-body, .vcard-title {
        font-family: 'Noto Nastaliq Urdu', serif !important;
        letter-spacing: 0 !important;
        line-height: 1.8 !important;
      }
      .ed-h2, .sh-h1, .booking-h3, .pq-text, .values-h { 
        line-height: 1.5 !important;
        font-size: 0.75em;
      }
    `;
  } else if (lang.font === 'Noto Sans Devanagari') {
    fontStyle.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;600;700&display=swap');
      [data-i18n], .jnav-links a, .cs-label, .cs-title, .ed-body,
      .sh-sub, .booking-text, .vcard-body, .vcard-title {
        font-family: 'Noto Sans Devanagari', sans-serif !important;
        letter-spacing: 0 !important;
      }
    `;
  } else {
    fontStyle.textContent = '';
  }

  // Translate all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (lang.t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = lang.t[key];
      } else {
        el.textContent = lang.t[key];
      }
    }
  });

  // Update dropdown button label
  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = lang.label + ' ▾';

  // Update active state in dropdown
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === code);
  });
}

function juhrumInitLang() {
  const saved = localStorage.getItem('juhrum-lang') || 'en';
  juhrumApplyLang(saved);

  // Toggle dropdown
  const btn = document.getElementById('lang-btn');
  const dropdown = document.getElementById('lang-dropdown');
  if (!btn || !dropdown) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      juhrumApplyLang(opt.getAttribute('data-lang'));
      dropdown.classList.remove('open');
    });
  });

  document.addEventListener('click', () => dropdown.classList.remove('open'));
}

document.addEventListener('DOMContentLoaded', juhrumInitLang);
