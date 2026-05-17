/**
 * Jahrom Language System — v2 (rebuilt)
 * EN / AR / UR / FA / HI
 * RTL: AR, UR, FA | LTR: EN, HI
 *
 * Fix: DOMContentLoaded was already fired by the time defer'd script ran.
 * Now uses readyState check + immediate init, exposed as window.juhrumInitLang
 * so inline page scripts can also call it safely.
 */

const JUHRUM_LANGS = {

  en: {
    dir: 'ltr', font: null, label: 'EN',
    t: {
      nav_home:'Home', nav_products:'Products', nav_story:'Our Story',
      nav_contact:'Contact', nav_whatsapp:'WhatsApp Us',
      pl_step1:'Calibrating...', pl_step2:'Building...', pl_step3:'Ready.',
      pl_sub:'Desert Iron — Est. 2004 — Sharjah UAE',
      hero_tag:'Sharjah, UAE — Industrial Area 4 — Est. 2004',
      hero_l0:'DESERT', hero_l1:'IRON.', hero_l2:'BUILT.',
      hero_sub:'Built for drivers who don\'t compromise. Over 22 years. 500+ builds. Every truck hand-fitted in Sharjah\'s Industrial Area 4.',
      hero_btn_products:'View Products', hero_btn_story:'Our Story',
      stat_years:'Years Experience', stat_rating:'Google Rating', stat_trucks:'Trucks Built',
      scroll_lbl:'Scroll to Explore',
      tick1:'Bed Covers', tick2:'Exterior Builds', tick3:'Audio Systems',
      tick4:'Paint Protection', tick5:'Upholstery', tick6:'4.7★ Google Rating', tick7:'Sharjah UAE',
      ts_tag:'Product Showcase', ts_sub:'Scroll to explore',
      ts_loading:'Loading',
      ts_p0_title:'The Base Build',
      ts_p0_desc:'Every Jahrom build starts with the stock truck — a blank canvas. We assess the vehicle, plan the build, and source every accessory to spec. Nothing gets fitted that doesn\'t belong.',
      ts_p0_hint:'↓ Keep scrolling',
      ts_p1_title:'Full Safari Build',
      ts_p1_desc:'Lights on. Accessories locked in. This is the complete Jahrom treatment — every exterior mod fitted flush, every light dialled in. Built for the UAE desert and beyond.',
      ts_p1_note:'Exterior builds from AED 8,000',
      ts_p2_title:'Power Side Step',
      ts_p2_desc:'Electric retractable side steps that deploy the moment you open the door. Precision-fitted to your truck\'s sill, flush when closed, solid underfoot when extended. No rattle. No gap.',
      ts_p2_note:'Steps from AED 2,200 fitted',
      ts_p3_title:'Tri-Fold Bed Cover',
      ts_p3_desc:'Hard tri-fold tonneau covers that lock your bed down. Weatherproof, low-profile, and strong enough to stand on. Opens fully in seconds, locks tight for highway speeds.',
      ts_p3_note:'Bed covers from AED 3,400 fitted',
      ts_p4_title:'Front Grille',
      ts_p4_desc:'Custom billet and mesh grilles that transform the face of the truck. Every grille is fitted with OEM precision — no drilling, no gaps, no flex. Your truck\'s most visible statement.',
      ts_p4_note:'Grilles from AED 1,800 fitted',
      ts_p5_title:'See the Full Catalogue',
      ts_p5_desc:'Roof racks, snorkels, winches, lighting rigs, PPF, audio builds — the full Jahrom range. Every accessory sourced, every fitment guaranteed.',
      ts_p5_btn:'View Full Catalogue',
      ts_hint_text:'Scroll to Build',
      ts_hint_sub:'Keep scrolling for 3D interactive showcase',
      booking_h3_l1:'YOUR TRUCK.', booking_h3_l2:'YOUR TERMS.',
      booking_text:'No waiting lists. No upselling. Tell us your truck, we\'ll tell you exactly what fits, what it costs, and when it\'s done.',
      booking_btn_wa:'WhatsApp Us', booking_btn_call:'Call: 050 300 2898',
      booking_info:'Open Sat–Thu: 8AM–11PM, Fri: 3PM–11PM, Every Day',
      story_section_tag:'Our Journey',
      story_section_h2_l1:'FROM VISION TO', story_section_h2_l2:'REALITY',
      stage1_tag:'The Origin — 01 / 04', stage1_title:'Foundation',
      stage1_text:'Industrial Area 4. 2004. One rule: serious trucks deserve serious gear. Everything else is negotiable.',
      stage2_tag:'The Method — 02 / 04', stage2_title:'Craft',
      stage2_text:'No templates. No rush jobs. Every fit verified twice. Your Silverado isn\'t our last Silverado — it\'s the only one that matters.',
      stage3_tag:'The Proof — 03 / 04', stage3_title:'Trusted',
      stage3_text:'4.7★ didn\'t come from marketing. It came from 500+ trucks that still look factory-fresh in UAE heat. Word travels.',
      stage4_tag:'The Present — 04 / 04', stage4_title:'Today',
      stage4_text:'Ram TRX. F-150 Raptor. GMC Sierra Denali. Built them all. Your truck\'s next chapter starts in Industrial Area 4.',
      reviews_h2_l1:'WHAT THEY', reviews_h2_l2:'SAY.',
      rating_label:'Google Reviews',
      r1_text:'"Best shop for 4x4 accessories in Sharjah. They know their trucks — Tundra, GMC, Ram, F-150. Prices are honest and the team actually knows what they\'re doing."',
      r1_name:'Adnan Aadi', r1_meta:'6 months ago',
      r2_text:'"Got a rear hitch carrier fitted same day. Fair prices, no nonsense. Good stock of offroad parts that you won\'t find elsewhere in Sharjah."',
      r2_name:'Hisham Irshad', r2_meta:'2 months ago',
      r3_text:'"Professional team. Quality work. Every detail on my truck was handled properly — not rushed, not cut short. Highly recommended."',
      r3_name:'Mohammed R.', r3_meta:'4 months ago',
      cs_whatsapp_label:'WhatsApp — Fastest Response', cs_whatsapp_val:'Message Us Now',
      cs_call_label:'Call Direct', cs_call_val:'050 300 2898',
      cs_visit_label:'Walk In — No Appointment', cs_visit_val:'Industrial Area 4, Sharjah',
      footer_tag:'Desert Iron — Built for Power',
      footer_copy:'© 2025 Jahrom Auto Accessories, Sharjah UAE',
      contact_hero_tag:'Get In Touch',
      contact_hero_h1_l1:'COME IN.', contact_hero_h1_l2:'BUILD IT.',
      contact_hero_sub:'No appointment needed. Walk in, tell us about your truck, and we\'ll show you what\'s possible.',
      contact_btn_wa:'Message on WhatsApp', contact_btn_call:'Call: 050 300 2898',
      contact_email:'h_jahrom@yahoo.com',
      contact_social_title:'See the builds. Follow us.',
      contact_instagram:'Instagram', contact_youtube:'YouTube', contact_tiktok:'TikTok',
      story_page_hero_sub:'Expert craftsmanship. UAE desert. Over 22 years of building the best pickup trucks in Sharjah.',
      story_ch1_title:'The Origin',
      story_ch1_h2_l1:'BUILT IN', story_ch1_h2_l2:'SHARJAH.',
      story_ch1_h2_l3:'BUILT IN', story_ch1_h2_l4:'SHARJAH.',
      story_ch1_b1:'Founded over two decades ago in the heart of Sharjah, Jahrom was built on a single belief: that every truck deserves expert-level attention and precision craftsmanship. What started as a specialist workshop became the UAE's most trusted pickup truck accessories destination.',
      story_ch1_b2:'When Hadi established the shop in Sharjah\'s Industrial Area 4, he brought that same obsession with him. He knew exactly what serious truck owners wanted — not just parts, but accessories that genuinely elevated their vehicle. Products chosen with care, fitted with precision, backed with knowledge.',
      story_ch1_b3:'Over 22 years later, Jahrom has become the go-to destination for pickup truck owners across the UAE who refuse to compromise.',
      story_ch2_title:'The Environment',
      story_ch2_h2_l1:'BUILT FOR', story_ch2_h2_l2:'UAE', story_ch2_h2_l3:'TERRAIN.',
      story_ch2_b1:'48°C summers. Sand in every seal. UV that destroys cheap coatings within months. The UAE is one of the most punishing environments on earth for truck accessories — and most shops ignore that.',
      story_ch2_b2:'We don\'t. Every product at Jahrom has been tested against this climate — not in a lab, but in the real heat of Sharjah summers. Bed covers that lock out desert dust. PPF that doesn\'t yellow. Thermal insulation that actually works.',
      story_ch2_b3:'If it can\'t handle a full UAE year, it doesn\'t earn a place in our showroom. Full stop.',
      story_ch3_title:'The Products',
      story_ch3_h2_l1:'WHAT WE', story_ch3_h2_l2:'ACTUALLY', story_ch3_h2_l3:'DO.',
      story_ch3_b1:'Ram TRX. F-150 Raptor. GMC Sierra Denali. We\'ve built them all. Jahrom specialises in American pickup trucks — the trucks UAE drivers actually choose when they refuse to compromise.',
      story_ch3_b2:'Bed covers — from retractable hardtops in 6063-T5 aluminium to soft tri-fold covers. Exterior builds — bull bars, running boards, roof racks, fender flares. Electronics — head units with Apple CarPlay, premium audio, cameras. Protection — self-healing PPF, thermal insulation. Interior upholstery — full leather seat and floor installations in any colour.',
      story_ch3_b3:'And because we source directly from manufacturers, our prices remain competitive without compromising on quality. That\'s the promise Hadi made when he opened the doors — and it\'s the promise Jahrom keeps every day.',
      story_ch3_cta:'Browse Products',
      val1_title:'Precision Fit', val1_body:'Every accessory sourced specifically for American pickup trucks. We know every model, every spec, every year. Perfect fitment every time.',
      val2_title:'Fair Pricing', val2_body:'Direct supplier relationships mean we eliminate the middleman. Premium quality at prices that don't make you choose between good gear and a fair deal.',
      val3_title:'Professional Installation', val3_body:'We don't just sell — we fit. Every product installed by our technical team to factory-finish standard.',
      val4_title:'UAE-Proven', val4_body:'Over 22 years of UAE desert, heat, and sand have tested every product we stock. If it's in our showroom, it earned its place.',
      val5_title:'Expert Guidance', val5_body:'Not sure what you need? Come in and talk to us — we'll recommend exactly what fits your truck, your driving, and your budget.',
      val6_title:'Word of Mouth', val6_body:'Our reputation has been built entirely by customers who came back, and customers who sent their friends.',
    }
  },

  ar: {
    dir: 'rtl', font: 'Noto Sans Arabic', label: 'عربي',
    t: {
      nav_home:'الرئيسية', nav_products:'المنتجات', nav_story:'قصتنا',
      nav_contact:'تواصل', nav_whatsapp:'واتساب',
      pl_step1:'جاري التحضير...', pl_step2:'نبني شيئاً...', pl_step3:'جاهز.',
      pl_sub:'حديد الصحراء — منذ 2019 — الشارقة',
      hero_tag:'الشارقة، الإمارات — المنطقة الصناعية 4 — منذ 2019',
      hero_l0:'صُنع', hero_l1:'بلا', hero_l2:'حدود.',
      hero_sub:'للسائقين الذين لا يتنازلون. خمس سنوات. أكثر من 500 بناء. كل بيكآب يُركَّب بعناية في المنطقة الصناعية 4 بالشارجة.',
      hero_btn_products:'استعرض المنتجات', hero_btn_story:'قصتنا',
      stat_years:'سنوات خبرة', stat_rating:'تقييم جوجل', stat_trucks:'سيارة جاهزة',
      scroll_lbl:'اسحب للاستكشاف',
      tick1:'أغطية الصندوق', tick2:'تعديلات خارجية', tick3:'أنظمة صوت',
      tick4:'حماية الطلاء', tick5:'تنجيد داخلي', tick6:'تقييم جوجل 4.7★', tick7:'الشارقة الإمارات',
      ts_tag:'عرض المنتجات', ts_sub:'اسحب للاستكشاف', ts_loading:'جاري التحميل',
      ts_p0_title:'البناء الأساسي',
      ts_p0_desc:'كل بناء في جهروم يبدأ من السيارة الأصلية — قماش فارغ. نقيّم السيارة، نخطط للبناء، ونوفر كل إكسسوار حسب المواصفة. لا شيء يُركَّب ما لم يكن في مكانه الصحيح.',
      ts_p0_hint:'↓ تابع السحب',
      ts_p1_title:'بناء سفاري كامل',
      ts_p1_desc:'الأضواء شغّالة. الإكسسوارات مثبّتة. هذا هو الاهتمام الكامل من جهروم — كل تعديل خارجي مثبّت بدقة، كل ضوء مضبوط. مبني لصحراء الإمارات وما وراءها.',
      ts_p1_note:'بناء خارجي من 8,000 درهم',
      ts_p2_title:'درج جانبي كهربائي',
      ts_p2_desc:'درج جانبي كهربائي قابل للسحب يخرج لحظة فتح الباب. مثبّت بدقة على عتبة سيارتك، مخفي عند الإغلاق، متين عند الاستخدام. بدون اهتزاز. بدون فراغات.',
      ts_p2_note:'الدرج من 2,200 درهم مع التركيب',
      ts_p3_title:'غطاء صندوق ثلاثي الطي',
      ts_p3_desc:'أغطية صندوق صلبة ثلاثية الطي تحمي صندوقك. مقاومة للطقس، منخفضة المستوى، قوية بما يكفي للوقوف عليها. تُفتح بالكامل في ثوانٍ، تُغلق بإحكام للطرق السريعة.',
      ts_p3_note:'أغطية الصندوق من 3,400 درهم مع التركيب',
      ts_p4_title:'شبكة أمامية',
      ts_p4_desc:'شبكات مخصصة تحوّل واجهة سيارتك. كل شبكة تُركَّب بدقة المصنع — بدون حفر، بدون فراغات، بدون ارتخاء. أبرز بيان جمالي لسيارتك.',
      ts_p4_note:'الشبكات من 1,800 درهم مع التركيب',
      ts_p5_title:'شاهد الكتالوج الكامل',
      ts_p5_desc:'رافعات سقف، مداخن هواء، رافعات بضائع، منظومات إضاءة، PPF، بناء صوتي — المجموعة الكاملة لجهروم. كل إكسسوار موفَّر، كل تركيب مضمون.',
      ts_p5_btn:'شاهد الكتالوج الكامل',
      ts_hint_text:'اسحب للبناء',
      ts_hint_sub:'تابع السحب للعرض التفاعلي ثلاثي الأبعاد',
      booking_h3_l1:'سيارتك.', booking_h3_l2:'شروطك.',
      booking_text:'بدون قوائم انتظار. بدون مبالغة في البيع. حدثنا عن سيارتك وسنخبرك بالضبط بما يناسبها، وبكم يكلف، ومتى ينتهي.',
      booking_btn_wa:'واتساب', booking_btn_call:'اتصل: 050 300 2898',
      booking_info:'مفتوح 8 صباحاً – 11 مساءً، كل يوم',
      story_section_tag:'مسيرتنا',
      story_section_h2_l1:'من الفكرة إلى', story_section_h2_l2:'الحقيقة',
      stage1_tag:'البداية — 01 / 04', stage1_title:'الأساس',
      stage1_text:'المنطقة الصناعية 4. 2019. قاعدة واحدة: السيارات الجادة تستحق معدات جادة. كل شيء آخر قابل للنقاش.',
      stage2_tag:'الأسلوب — 02 / 04', stage2_title:'الحرفية',
      stage2_text:'لا قوالب. لا تسرّع. كل تركيب يُتحقق منه مرتين. سيلفرادوك ليس آخر سيلفرادو لدينا — إنه الوحيد الذي يهم.',
      stage3_tag:'الإثبات — 03 / 04', stage3_title:'موثوق',
      stage3_text:'4.7★ لم تأتِ من التسويق. جاءت من أكثر من 500 سيارة لا تزال تبدو جديدة في حرارة الإمارات. الكلام ينتشر.',
      stage4_tag:'الحاضر — 04 / 04', stage4_title:'اليوم',
      stage4_text:'Ram TRX. F-150 Raptor. GMC Sierra Denali. بنيناهم جميعاً. الفصل القادم لسيارتك يبدأ في المنطقة الصناعية 4.',
      reviews_h2_l1:'ما يقوله', reviews_h2_l2:'العملاء.',
      rating_label:'تقييمات جوجل',
      r1_text:'"أفضل محل إكسسوارات 4x4 في الشارجة. يعرفون سياراتهم جيداً — Tundra، GMC، Ram، F-150. الأسعار صادقة والفريق فعلاً عارف ش يسوي."',
      r1_name:'عدنان عادي', r1_meta:'منذ 6 أشهر',
      r2_text:'"ركّبوا لي حامل هيتش خلفي في نفس اليوم. أسعار عادلة، بدون ضغط. مخزون جيد من قطع الأوفرود ما تلاقيها في أي مكان ثاني بالشارجة."',
      r2_name:'هشام إرشاد', r2_meta:'منذ شهرين',
      r3_text:'"فريق محترف. شغل نظيف. كل تفصيلة في سيارتي اتعاملوا معها صح — ما تسرّعوا، ما قصّروا. أنصح بهم بشدة."',
      r3_name:'محمد ر.', r3_meta:'منذ 4 أشهر',
      cs_whatsapp_label:'واتساب — أسرع رد', cs_whatsapp_val:'راسلنا الآن',
      cs_call_label:'اتصل مباشرة', cs_call_val:'050 300 2898',
      cs_visit_label:'تفضل بدون موعد', cs_visit_val:'المنطقة الصناعية 4، الشارجة',
      footer_tag:'حديد الصحراء — مبني للقوة',
      footer_copy:'© 2025 جهروم لإكسسوارات السيارات، الشارقة الإمارات',
      contact_hero_tag:'تواصل معنا',
      contact_hero_h1_l1:'تعال.', contact_hero_h1_l2:'ابنِه.',
      contact_hero_sub:'ما تحتاج موعد. تعال وحدثنا عن سيارتك وبنشوفك وش ممكن.',
      contact_btn_wa:'راسلنا على واتساب', contact_btn_call:'اتصل: 050 300 2898',
      contact_email:'h_jahrom@yahoo.com',
      contact_social_title:'تابع المشاريع. اتبعنا.',
      contact_instagram:'انستغرام', contact_youtube:'يوتيوب', contact_tiktok:'تيك توك',
      story_page_hero_sub:'حرفية فارسية. صحراء الإمارات. خمس سنوات في بناء أفضل البيكآب في الشارجة.',
      story_ch1_title:'البداية', story_ch1_h2_l1:'ولد في', story_ch1_h2_l2:'إيران.', story_ch1_h2_l3:'بُني في', story_ch1_h2_l4:'الشارجة.',
      story_ch1_b1:'قصة جهروم ما بدأت في الإمارات، بل في إيران — بلد فيها واحدة من أقوى ثقافات السيارات في العالم. أسسها هادي غنائيان، وجهروم تحمل روح الدقة الفارسية: الإيمان بأن كل شيء يستحق إتقان.',
      story_ch1_b2:'لما فتح هادي المحل في المنطقة الصناعية 4 بالشارجة، جاب معه نفس الهوس. كان يعرف بالضبط ش يبغاه أصحاب البيكآب — مو بس قطع، إكسسوارات تغير السيارة فعلاً.',
      story_ch1_b3:'أكثر من خمس سنوات بعدها، صار جهروم الوجهة الأولى لأصحاب البيكآب في الإمارات اللي ما يقبلون التنازل.',
      story_ch2_title:'البيئة', story_ch2_h2_l1:'مصمم', story_ch2_h2_l2:'لتضاريس', story_ch2_h2_l3:'الإمارات.',
      story_ch2_b1:'حرارة 48 درجة صيفاً. رمل في كل مكان. أشعة UV تدمر الطلاء الرخيص في أشهر. الإمارات من أقسى البيئات على الإكسسوارات — وأغلب المحلات تتجاهل هذا.',
      story_ch2_b2:'إحنا ما نتجاهله. كل منتج في جهروم اتجرب في هالمناخ — مو في مختبر، بل في حر الشارجة الفعلي. أغطية صندوق تمنع غبار الصحراء. PPF ما يصفر. عازل حراري يشتغل فعلاً.',
      story_ch2_b3:'إذا ما يتحمل سنة كاملة في الإمارات، ما يستاهل مكان في محلنا. خلاص.',
      story_ch3_title:'المنتجات', story_ch3_h2_l1:'وش', story_ch3_h2_l2:'نسوي', story_ch3_h2_l3:'بالضبط.',
      story_ch3_b1:'Ram TRX. F-150 Raptor. GMC Sierra Denali. بنيناهم كلهم. جهروم متخصص في البيكآب الأمريكي.',
      story_ch3_b2:'أغطية صندوق من صلبة قابلة للسحب إلى ناعمة ثلاثية الطي. تعديلات خارجية — بول بار، درج جانبي، رافعة سقف، أجنحة فوندر. إلكترونيات — Apple CarPlay، صوتيات فاخرة، كاميرات. حماية — PPF ذاتي الإصلاح، عازل حراري. داخلية — جلد كامل للكراسي والأرضية.',
      story_ch3_b3:'وعشان نشتري مباشرة من الموردين، أسعارنا منافسة بدون تنازل عن الجودة. هذا وعد هادي — وجهروم يلتزم به كل يوم.',
      story_ch3_cta:'استعرض المنتجات',
      val1_title:'تركيب دقيق', val1_body:'كل إكسسوار مصنوع خصيصاً للبيكآب الأمريكي. نعرف كل موديل وكل مواصفة. تركيب مثالي في كل مرة.',
      val2_title:'أسعار عادلة', val2_body:'علاقاتنا المباشرة مع الموردين تعني لا وسطاء. منتجات فاخرة بأسعار ما تضطر فيها تختار بين الجودة والسعر.',
      val3_title:'تركيب احترافي', val3_body:'ما نبيع بس — نركّب. كل منتج يركّبه فريقنا التقني بمعيار المصنع.',
      val4_title:'مُختبر في الإمارات', val4_body:'خمس سنوات من صحراء الإمارات وحرارتها ورمالها اختبرت كل منتج في محلنا.',
      val5_title:'إرشاد متخصص', val5_body:'مو عارف وش تحتاج؟ تعال وحدثنا — بنوصيك بالضبط بما يناسب سيارتك وأسلوبك وميزانيتك.',
      val6_title:'شهرة بالكلام', val6_body:'سمعتنا بُنيت من عملاء رجعوا وعملاء أرسلوا أصحابهم. لا اختصارات. شغل ممتاز سنة بعد سنة.',
    }
  },

  ur: {
    dir: 'rtl', font: 'Noto Nastaliq Urdu', label: 'اردو',
    t: {
      nav_home:'ہوم', nav_products:'پروڈکٹس', nav_story:'ہماری کہانی',
      nav_contact:'رابطہ', nav_whatsapp:'WhatsApp',
      pl_step1:'تیاری ہو رہی ہے...', pl_step2:'بن رہا ہے...', pl_step3:'تیار.',
      pl_sub:'ڈیزرٹ آئرن — 2019 سے — شارجہ',
      hero_tag:'شارجہ، یو اے ای — انڈسٹریل ایریا 4 — 2019 سے',
      hero_l0:'حدوں سے', hero_l1:'پرے', hero_l2:'بنایا.',
      hero_sub:'ان لوگوں کے لیے جو سمجھوتہ نہیں کرتے۔ پانچ سال۔ 500+ بلڈز۔ ہر گاڑی شارجہ کے انڈسٹریل ایریا 4 میں ہاتھ سے فٹ۔',
      hero_btn_products:'پروڈکٹس دیکھیں', hero_btn_story:'ہماری کہانی',
      stat_years:'سال کا تجربہ', stat_rating:'Google ریٹنگ', stat_trucks:'گاڑیاں تیار',
      scroll_lbl:'اسکرول کریں',
      tick1:'بیڈ کور', tick2:'ایکسٹیریئر بلڈز', tick3:'آڈیو سسٹم',
      tick4:'پینٹ پروٹیکشن', tick5:'اپہولسٹری', tick6:'4.7★ Google ریٹنگ', tick7:'شارجہ یو اے ای',
      ts_tag:'پروڈکٹ شوکیس', ts_sub:'اسکرول کریں', ts_loading:'لوڈ ہو رہا ہے',
      ts_p0_title:'بیس بلڈ', ts_p0_desc:'جہروم کا ہر بلڈ اصل گاڑی سے شروع ہوتا ہے۔ ہم گاڑی دیکھتے ہیں، پلان بناتے ہیں، اور ہر اکسیسری سپیک کے مطابق لاتے ہیں۔',
      ts_p0_hint:'↓ اسکرول جاری رکھیں',
      ts_p1_title:'فل سفاری بلڈ', ts_p1_desc:'لائٹس آن۔ اکسیسریز لاک۔ یہ جہروم کا مکمل ٹریٹمنٹ ہے — ہر موڈ فلش فٹ، ہر لائٹ سیٹ۔ UAE صحرا کے لیے بنایا گیا۔',
      ts_p1_note:'ایکسٹیریئر بلڈز AED 8,000 سے',
      ts_p2_title:'پاور سائیڈ سٹیپ', ts_p2_desc:'الیکٹرک ریٹریکٹیبل سائیڈ سٹیپ جو دروازہ کھلتے ہی نکل آتے ہیں۔ گاڑی کی سل پر پریسیژن فٹ۔',
      ts_p2_note:'سٹیپس AED 2,200 سے (فٹنگ سمیت)',
      ts_p3_title:'ٹرائی-فولڈ بیڈ کور', ts_p3_desc:'مضبوط ٹرائی-فولڈ ٹونو کور جو بیڈ کو لاک کر دیتے ہیں۔ ویدر پروف، لو پروفائل، اور مضبوط۔',
      ts_p3_note:'بیڈ کور AED 3,400 سے (فٹنگ سمیت)',
      ts_p4_title:'فرنٹ گریل', ts_p4_desc:'کسٹم گریلز جو گاڑی کا چہرہ بدل دیتے ہیں۔ OEM پریسیژن کے ساتھ فٹ — کوئی ڈرلنگ نہیں، کوئی گیپ نہیں۔',
      ts_p4_note:'گریلز AED 1,800 سے (فٹنگ سمیت)',
      ts_p5_title:'مکمل کیٹالاگ دیکھیں', ts_p5_desc:'روف ریک، سنارکل، ونچ، لائٹنگ، PPF، آڈیو — جہروم کا پورا رینج۔',
      ts_p5_btn:'مکمل کیٹالاگ دیکھیں',
      ts_hint_text:'بلڈ کے لیے اسکرول کریں', ts_hint_sub:'3D انٹریکٹو شوکیس کے لیے اسکرول جاری رکھیں',
      booking_h3_l1:'آپ کی گاڑی.', booking_h3_l2:'آپ کی شرائط.',
      booking_text:'کوئی ویٹنگ لسٹ نہیں۔ کوئی اضافی سیلنگ نہیں۔ گاڑی بتائیں، ہم بتائیں گے کیا فٹ ہوگا، کتنا لگے گا، کب ملے گا۔',
      booking_btn_wa:'WhatsApp پر میسج', booking_btn_call:'کال: 050 300 2898',
      booking_info:'روزانہ کھلا صبح 8 سے رات 11 بجے تک',
      story_section_tag:'ہماری مسیر', story_section_h2_l1:'خواب سے', story_section_h2_l2:'حقیقت تک',
      stage1_tag:'آغاز — 01 / 04', stage1_title:'بنیاد', stage1_text:'انڈسٹریل ایریا 4۔ 2019۔ ایک اصول: سنجیدہ گاڑیاں سنجیدہ اکسیسریز مانگتی ہیں۔',
      stage2_tag:'طریقہ — 02 / 04', stage2_title:'ہنر', stage2_text:'کوئی ٹیمپلیٹ نہیں۔ کوئی جلدی نہیں۔ ہر فٹنگ دو بار چیک۔ آپ کا سلوراڈو ہمارا آخری نہیں — لیکن اس وقت وہی اکلوتا ہے جو اہم ہے۔',
      stage3_tag:'ثبوت — 03 / 04', stage3_title:'قابل اعتماد', stage3_text:'4.7★ مارکیٹنگ سے نہیں آئی۔ 500+ گاڑیوں سے آئی جو UAE کی گرمی میں بھی نئی لگتی ہیں۔',
      stage4_tag:'حال — 04 / 04', stage4_title:'آج', stage4_text:'Ram TRX. F-150 Raptor. GMC Sierra Denali. سب بنائے۔ آپ کی گاڑی کا اگلا باب انڈسٹریل ایریا 4 سے شروع ہوتا ہے۔',
      reviews_h2_l1:'گاہک', reviews_h2_l2:'کیا کہتے ہیں.',
      rating_label:'Google ریویوز',
      r1_text:'"شارجہ میں 4x4 اکسیسریز کی بہترین دکان۔ گاڑیاں جانتے ہیں — Tundra، GMC، Ram، F-150. قیمتیں ایمانداری کی اور ٹیم واقعی جانتی ہے کیا کر رہی ہے۔"',
      r1_name:'عدنان عادی', r1_meta:'6 ماہ پہلے',
      r2_text:'"اسی دن ریئر ہیچ کیریئر فٹ کروایا۔ مناسب قیمت، کوئی پریشانی نہیں۔ آف روڈ پارٹس کا اچھا ذخیرہ۔"',
      r2_name:'ہشام ارشاد', r2_meta:'2 ماہ پہلے',
      r3_text:'"پروفیشنل ٹیم۔ معیاری کام۔ گاڑی کی ہر تفصیل صحیح طریقے سے ہینڈل کی — جلدی نہیں، کمی نہیں۔"',
      r3_name:'محمد ر.', r3_meta:'4 ماہ پہلے',
      cs_whatsapp_label:'WhatsApp — سب سے تیز', cs_whatsapp_val:'ابھی میسج کریں',
      cs_call_label:'براہ راست کال', cs_call_val:'050 300 2898',
      cs_visit_label:'بغیر اپوائنٹمنٹ آئیں', cs_visit_val:'انڈسٹریل ایریا 4، شارجہ',
      footer_tag:'ڈیزرٹ آئرن — طاقت کے لیے بنایا', footer_copy:'© 2025 جہروم آٹو اکسیسریز، شارجہ یو اے ای',
      contact_hero_tag:'رابطہ کریں', contact_hero_h1_l1:'آئیں.', contact_hero_h1_l2:'بنائیں.',
      contact_hero_sub:'اپوائنٹمنٹ نہیں چاہیے۔ آئیں، اپنی گاڑی بتائیں، ہم دکھائیں گے کیا ممکن ہے۔',
      contact_btn_wa:'WhatsApp پر میسج', contact_btn_call:'کال: 050 300 2898',
      contact_email:'h_jahrom@yahoo.com', contact_social_title:'بلڈز دیکھیں۔ فالو کریں۔',
      contact_instagram:'انسٹاگرام', contact_youtube:'یوٹیوب', contact_tiktok:'ٹک ٹاک',
      story_page_hero_sub:'ایرانی ہنر۔ UAE کا صحرا۔ شارجہ کے بہترین ٹرک بنانے کے پانچ سال۔',
      story_ch1_title:'آغاز', story_ch1_h2_l1:'ایران میں', story_ch1_h2_l2:'پیدا ہوئے.', story_ch1_h2_l3:'شارجہ میں', story_ch1_h2_l4:'بنائے.',
      story_ch1_b1:'جہروم کی کہانی UAE سے نہیں، ایران سے شروع ہوتی ہے۔ ہادی غنائیان کی بنائی اس دکان میں ایرانی باریک بینی کا جوہر ہے۔',
      story_ch1_b2:'جب ہادی نے شارجہ میں دکان کھولی تو وہی جنون ساتھ لے آئے۔ سنجیدہ ٹرک مالکان کو صرف پرزے نہیں بلکہ ایسی اکسیسریز چاہیے تھیں جو گاڑی کو واقعی اگلے درجے پر لے جائیں۔',
      story_ch1_b3:'پانچ سال سے زائد عرصے بعد، جہروم پورے UAE میں ان ٹرک مالکان کی پہلی پسند بن گئی ہے جو سمجھوتہ کرنے سے انکاری ہیں۔',
      story_ch2_title:'ماحول', story_ch2_h2_l1:'UAE کے', story_ch2_h2_l2:'لیے', story_ch2_h2_l3:'بنایا.',
      story_ch2_b1:'48 ڈگری گرمی۔ ہر جگہ ریت۔ UV جو سستی کوٹنگ مہینوں میں تباہ کر دے۔',
      story_ch2_b2:'ہم نہیں کرتے۔ جہروم کا ہر پروڈکٹ شارجہ کی اصل گرمی میں ٹیسٹ کیا گیا ہے۔',
      story_ch2_b3:'اگر پورا UAE سال نہیں جھیل سکتا، تو ہمارے شوروم میں جگہ نہیں۔',
      story_ch3_title:'پروڈکٹس', story_ch3_h2_l1:'ہم', story_ch3_h2_l2:'اصل میں', story_ch3_h2_l3:'کیا کرتے ہیں.',
      story_ch3_b1:'Ram TRX. F-150 Raptor. GMC Sierra Denali. سب بنائے ہیں۔ جہروم امریکی پک اپ ٹرکوں میں ماہر ہے۔',
      story_ch3_b2:'بیڈ کور، ایکسٹیریئر موڈز، Apple CarPlay، سیلف-ہیلنگ PPF، تھرمل انسولیشن، پوری لیدر انٹیریئر۔',
      story_ch3_b3:'ہم سیدھے مینوفیکچرر سے خریدتے ہیں اس لیے قیمتیں کوالٹی سے سمجھوتہ کیے بغیر مسابقتی رہتی ہیں۔',
      story_ch3_cta:'پروڈکٹس دیکھیں',
      val1_title:'درست فٹنگ', val1_body:'ہر اکسیسری امریکی پک اپ ٹرکوں کے لیے خصوصی طور پر حاصل کی گئی ہے۔ ہر ماڈل، ہر سپیک جانتے ہیں۔',
      val2_title:'منصفانہ قیمت', val2_body:'براہ راست سپلائر تعلقات کا مطلب ہے کوئی بیچولیا نہیں۔',
      val3_title:'پیشہ ورانہ تنصیب', val3_body:'ہم صرف بیچتے نہیں — فٹ بھی کرتے ہیں۔',
      val4_title:'UAE میں آزمایا گیا', val4_body:'پانچ سال UAE کے صحرا، گرمی اور ریت نے ہر پروڈکٹ کو ٹیسٹ کیا ہے۔',
      val5_title:'ماہر رہنمائی', val5_body:'یقین نہیں کیا چاہیے؟ آئیں بات کریں — ہم بالکل وہی تجویز کریں گے جو آپ کے ٹرک کے لیے بہترین ہو.',
      val6_title:'زبانی شہرت', val6_body:'ہماری ساکھ انہی گاہکوں نے بنائی جو واپس آئے اور جنہوں نے دوست بھیجے.',
    }
  },

  fa: {
    dir: 'rtl', font: 'Noto Sans Arabic', label: 'فارسی',
    t: {
      nav_home:'خانه', nav_products:'محصولات', nav_story:'داستان ما',
      nav_contact:'تماس', nav_whatsapp:'واتساپ',
      pl_step1:'در حال آماده‌سازی...', pl_step2:'در حال ساخت...', pl_step3:'آماده.',
      pl_sub:'آهن صحرا — از ۲۰۱۹ — شارجه',
      hero_tag:'شارجه، امارات — منطقه صنعتی ۴ — از ۲۰۱۹',
      hero_l0:'ساخته', hero_l1:'شده', hero_l2:'بی‌حد.',
      hero_sub:'برای رانندگانی که کوتاه نمی‌آن. پنج سال. بیش از ۵۰۰ بلد. هر وانت با دست در منطقه صنعتی ۴ شارجه نصب شده.',
      hero_btn_products:'محصولات رو ببین', hero_btn_story:'داستان ما',
      stat_years:'سال تجربه', stat_rating:'امتیاز گوگل', stat_trucks:'ماشین آماده',
      scroll_lbl:'اسکرول کن',
      tick1:'کاور صندوق', tick2:'تغییرات خارجی', tick3:'سیستم صوتی',
      tick4:'حفاظت رنگ', tick5:'رودوزی داخلی', tick6:'امتیاز ۴.۷★ گوگل', tick7:'شارجه امارات',
      ts_tag:'ویترین محصولات', ts_sub:'اسکرول کن', ts_loading:'در حال بارگذاری',
      ts_p0_title:'بلد پایه', ts_p0_desc:'هر بلد جهرم از ماشین اصلی شروع می‌شه — یه بوم خالی. ماشین رو بررسی می‌کنیم، برنامه می‌ریزیم و هر لوازم رو طبق مشخصات تهیه می‌کنیم.',
      ts_p0_hint:'↓ اسکرول رو ادامه بده',
      ts_p1_title:'بلد سافاری کامل', ts_p1_desc:'چراغ‌ها روشن. لوازم قفل. این درمان کامل جهرمه — هر مود خارجی فلاش نصب، هر چراغ تنظیم. برای صحرای امارات ساخته شده.',
      ts_p1_note:'بلدهای خارجی از AED 8,000',
      ts_p2_title:'پله جانبی برقی', ts_p2_desc:'پله‌های جانبی کشویی برقی که لحظه باز کردن در بیرون می‌آن. دقیق روی سیل ماشینت نصب شده.',
      ts_p2_note:'پله‌ها از AED 2,200 (با نصب)',
      ts_p3_title:'کاور سه‌تایی صندوق', ts_p3_desc:'کاورهای سخت سه‌تایی که صندوقت رو قفل می‌کنن. ضدآب، کم‌ارتفاع و محکم.',
      ts_p3_note:'کاورهای صندوق از AED 3,400 (با نصب)',
      ts_p4_title:'گریل جلو', ts_p4_desc:'گریل‌های سفارشی که چهره ماشین رو تغییر می‌دن. با دقت OEM نصب شده — بدون سوراخ‌کاری، بدون فاصله.',
      ts_p4_note:'گریل‌ها از AED 1,800 (با نصب)',
      ts_p5_title:'کاتالوگ کامل رو ببین', ts_p5_desc:'رک سقفی، اسنورکل، وینچ، نورپردازی، PPF، بلد صوتی — مجموعه کامل جهرم.',
      ts_p5_btn:'کاتالوگ کامل رو ببین',
      ts_hint_text:'برای بلد اسکرول کن', ts_hint_sub:'برای ویترین تعاملی سه‌بعدی اسکرول رو ادامه بده',
      booking_h3_l1:'ماشین تو.', booking_h3_l2:'شرایط تو.',
      booking_text:'لیست انتظار نداریم. اضافه‌فروشی نداریم. ماشینت رو بگو، دقیقاً می‌گیم چی مناسبه، چقدر می‌شه، کی تموم می‌شه.',
      booking_btn_wa:'واتساپ', booking_btn_call:'تماس: 050 300 2898',
      booking_info:'روزانه باز: ۸ صبح تا ۱۱ شب',
      story_section_tag:'مسیر ما', story_section_h2_l1:'از رؤیا تا', story_section_h2_l2:'واقعیت',
      stage1_tag:'آغاز — ۰۱ / ۰۴', stage1_title:'پایه', stage1_text:'منطقه صنعتی ۴. ۲۰۱۹. یه قانون: ماشین‌های جدی به ادوات جدی نیاز دارن.',
      stage2_tag:'روش — ۰۲ / ۰۴', stage2_title:'هنر', stage2_text:'قالب نداریم. عجله نداریم. هر نصب دوبار بررسی می‌شه. سیلورادوی تو آخرین ما نیست — ولی تنها چیزیه که الان اهمیت داره.',
      stage3_tag:'اثبات — ۰۳ / ۰۴', stage3_title:'اعتماد', stage3_text:'۴.۷★ از بازاریابی نیومد. از بیش از ۵۰۰ ماشین اومد که هنوز تو گرمای امارات مثل روز اول هستن.',
      stage4_tag:'حال — ۰۴ / ۰۴', stage4_title:'امروز', stage4_text:'Ram TRX. F-150 Raptor. GMC Sierra Denali. همه رو ساختیم. فصل بعدی ماشینت از منطقه صنعتی ۴ شروع می‌شه.',
      reviews_h2_l1:'مشتریان', reviews_h2_l2:'چی می‌گن.',
      rating_label:'نظرات گوگل',
      r1_text:'"بهترین فروشگاه لوازم 4x4 در شارجه. ماشین‌ها رو می‌شناسن — Tundra، GMC، Ram، F-150. قیمت‌ها منصفانه و تیم واقعاً بلده."',
      r1_name:'عدنان عادی', r1_meta:'۶ ماه پیش',
      r2_text:'"کریر هیچ عقبی رو همون روز نصب کردن. قیمت منصفانه، بدون دردسر. موجودی خوب از قطعات آفرود."',
      r2_name:'هشام ارشاد', r2_meta:'۲ ماه پیش',
      r3_text:'"تیم حرفه‌ای. کار با کیفیت. هر جزئیاتی از ماشینم درست انجام شد — عجله نکردن، کم نذاشتن."',
      r3_name:'محمد ر.', r3_meta:'۴ ماه پیش',
      cs_whatsapp_label:'واتساپ — سریع‌ترین پاسخ', cs_whatsapp_val:'همین الان پیام بده',
      cs_call_label:'تماس مستقیم', cs_call_val:'050 300 2898',
      cs_visit_label:'بدون وقت قبلی بیا', cs_visit_val:'منطقه صنعتی ۴، شارجه',
      footer_tag:'آهن صحرا — ساخته برای قدرت', footer_copy:'© 2025 جهرم لوازم یدکی خودرو، شارجه امارات',
      contact_hero_tag:'تماس با ما', contact_hero_h1_l1:'بیا.', contact_hero_h1_l2:'بسازیم.',
      contact_hero_sub:'وقت قبلی نمی‌خواد. بیا، از ماشینت بگو، نشونت می‌دیم چی ممکنه.',
      contact_btn_wa:'پیام در واتساپ', contact_btn_call:'تماس: 050 300 2898',
      contact_email:'h_jahrom@yahoo.com', contact_social_title:'پروژه‌ها رو ببین. دنبال کن.',
      contact_instagram:'اینستاگرام', contact_youtube:'یوتیوب', contact_tiktok:'تیک‌تاک',
      story_page_hero_sub:'هنر ایرانی. صحرای امارات. پنج سال ساختن بهترین وانت‌های شارجه.',
      story_ch1_title:'ریشه‌ها', story_ch1_h2_l1:'متولد', story_ch1_h2_l2:'ایران.', story_ch1_h2_l3:'ساخته', story_ch1_h2_l4:'شارجه.',
      story_ch1_b1:'داستان جهرم نه از امارات، بلکه از ایران شروع می‌شه. هادی غنائیان این مغازه رو با ذات دقت ایرانی بنیان گذاشت.',
      story_ch1_b2:'وقتی هادی مغازه رو در شارجه راه انداخت، همون وسواس رو با خودش آورد. صاحبان جدی وانت نه فقط قطعات، بلکه لوازمی می‌خواستن که ماشین رو واقعاً ارتقا بده.',
      story_ch1_b3:'بیش از پنج سال بعد، جهرم تبدیل شده به مقصد اول صاحبان وانت در امارات که حاضر نیستن کوتاه بیان.',
      story_ch2_title:'محیط', story_ch2_h2_l1:'ساخته', story_ch2_h2_l2:'برای', story_ch2_h2_l3:'امارات.',
      story_ch2_b1:'تابستان ۴۸ درجه‌ای. ماسه توی هر درز. UV که رنگ‌های ارزون رو ظرف چند ماه از بین می‌بره.',
      story_ch2_b2:'ما نمی‌گیریم. هر محصول جهرم در گرمای واقعی شارجه آزمایش شده.',
      story_ch2_b3:'اگه نتونه یه سال کامل در امارات دوام بیاره، جایی در ویترین ما نداره.',
      story_ch3_title:'محصولات', story_ch3_h2_l1:'دقیقاً', story_ch3_h2_l2:'چی', story_ch3_h2_l3:'انجام می‌دیم.',
      story_ch3_b1:'Ram TRX. F-150 Raptor. GMC Sierra Denali. همه رو ساختیم. جهرم تخصصش وانت‌های آمریکاییه.',
      story_ch3_b2:'کاور صندوق، موڈهای خارجی، Apple CarPlay، PPF خودترمیم، عایق حرارتی، چرم کامل داخلی.',
      story_ch3_b3:'چون مستقیم از تولیدکننده می‌خریم، قیمت‌هامون رقابتیه بدون کوتاه اومدن از کیفیت.',
      story_ch3_cta:'محصولات رو ببین',
      val1_title:'نصب دقیق', val1_body:'هر لوازم مخصوص وانت‌های آمریکایی تهیه شده. هر مدل، هر سال رو می‌شناسیم. نصب کامل هر بار.',
      val2_title:'قیمت منصفانه', val2_body:'رابطه مستقیم با تامین‌کننده یعنی واسطه نداریم.',
      val3_title:'نصب حرفه‌ای', val3_body:'ما فقط نمی‌فروشیم — نصب هم می‌کنیم.',
      val4_title:'آزمایش‌شده در امارات', val4_body:'پنج سال صحرا، گرما و ماسه امارات هر محصول ما رو آزمایش کرده.',
      val5_title:'راهنمایی متخصص', val5_body:'مطمئن نیستی چی لازم داری؟ بیا باهامون حرف بزن.',
      val6_title:'شهرت دهان‌به‌دهان', val6_body:'شهرت ما توسط مشتریانی ساخته شده که برگشتن و مشتریانی که دوستانشون رو فرستادن.',
    }
  },

  hi: {
    dir: 'ltr', font: 'Noto Sans Devanagari', label: 'हिन्दी',
    t: {
      nav_home:'होम', nav_products:'प्रोडक्ट्स', nav_story:'हमारी कहानी',
      nav_contact:'संपर्क', nav_whatsapp:'WhatsApp Us',
      pl_step1:'तैयार हो रहा है...', pl_step2:'बन रहा है...', pl_step3:'तैयार.',
      pl_sub:'डेज़र्ट आयरन — 2019 से — शारजाह',
      hero_tag:'शारजाह, UAE — इंडस्ट्रियल एरिया 4 — 2019 से',
      hero_l0:'BUILT', hero_l1:'BEYOND', hero_l2:'LIMITS.',
      hero_sub:'उनके लिए जो समझौता नहीं करते। पाँच साल। 500+ बिल्ड्स। हर ट्रक शारजाह के इंडस्ट्रियल एरिया 4 में हाथ से फिट।',
      hero_btn_products:'प्रोडक्ट्स देखें', hero_btn_story:'हमारी कहानी',
      stat_years:'साल का अनुभव', stat_rating:'Google रेटिंग', stat_trucks:'ट्रक तैयार',
      scroll_lbl:'स्क्रॉल करें',
      tick1:'बेड कवर', tick2:'एक्सटेरियर बिल्ड्स', tick3:'ऑडियो सिस्टम',
      tick4:'पेंट प्रोटेक्शन', tick5:'अपहोल्स्ट्री', tick6:'4.7★ Google रेटिंग', tick7:'शारजाह UAE',
      ts_tag:'प्रोडक्ट शोकेस', ts_sub:'स्क्रॉल करें', ts_loading:'लोड हो रहा है',
      ts_p0_title:'बेस बिल्ड', ts_p0_desc:'जुहरुम का हर बिल्ड स्टॉक ट्रक से शुरू होता है — एक खाली कैनवास। हम गाड़ी का आकलन करते हैं, बिल्ड प्लान करते हैं, और हर एक्सेसरी स्पेक के अनुसार लाते हैं।',
      ts_p0_hint:'↓ स्क्रॉल जारी रखें',
      ts_p1_title:'फुल सफारी बिल्ड', ts_p1_desc:'लाइट्स ऑन। एक्सेसरीज़ लॉक। यह जुहरुम का पूरा ट्रीटमेंट है — हर एक्सटेरियर मॉड फ्लश फिट, हर लाइट डायल्ड इन। UAE के रेगिस्तान के लिए बनाया।',
      ts_p1_note:'एक्सटेरियर बिल्ड AED 8,000 से',
      ts_p2_title:'पावर साइड स्टेप', ts_p2_desc:'इलेक्ट्रिक रिट्रैक्टेबल साइड स्टेप जो दरवाज़ा खुलते ही बाहर आ जाते हैं।',
      ts_p2_note:'स्टेप्स AED 2,200 से (फिटिंग सहित)',
      ts_p3_title:'ट्राई-फोल्ड बेड कवर', ts_p3_desc:'हार्ड ट्राई-फोल्ड टोनो कवर जो बेड को लॉक कर देते हैं। वेदरप्रूफ, लो-प्रोफाइल, और मज़बूत।',
      ts_p3_note:'बेड कवर AED 3,400 से (फिटिंग सहित)',
      ts_p4_title:'फ्रंट ग्रिल', ts_p4_desc:'कस्टम ग्रिल्स जो ट्रक का चेहरा बदल देते हैं। OEM प्रिसिज़न से फिट — कोई ड्रिलिंग नहीं, कोई गैप नहीं।',
      ts_p4_note:'ग्रिल्स AED 1,800 से (फिटिंग सहित)',
      ts_p5_title:'पूरा कैटालॉग देखें', ts_p5_desc:'रूफ रैक, स्नॉर्कल, विंच, लाइटिंग, PPF, ऑडियो — जुहरुम की पूरी रेंज।',
      ts_p5_btn:'पूरा कैटालॉग देखें',
      ts_hint_text:'बिल्ड के लिए स्क्रॉल करें', ts_hint_sub:'3D इंटरएक्टिव शोकेस के लिए स्क्रॉल जारी रखें',
      booking_h3_l1:'आपका ट्रक.', booking_h3_l2:'आपकी शर्तें.',
      booking_text:'कोई वेटिंग लिस्ट नहीं। कोई अनावश्यक सेलिंग नहीं। ट्रक बताएं, हम बताएंगे क्या फिट होगा, कितना लगेगा, कब मिलेगा।',
      booking_btn_wa:'WhatsApp पर मैसेज', booking_btn_call:'कॉल: 050 300 2898',
      booking_info:'रोज़ खुला सुबह 8 से रात 11 बजे तक',
      story_section_tag:'हमारी यात्रा', story_section_h2_l1:'सपने से', story_section_h2_l2:'हकीकत तक',
      stage1_tag:'शुरुआत — 01 / 04', stage1_title:'नींव', stage1_text:'इंडस्ट्रियल एरिया 4। 2019। एक नियम: गंभीर ट्रकों को गंभीर गियर चाहिए।',
      stage2_tag:'तरीका — 02 / 04', stage2_title:'हुनर', stage2_text:'कोई टेम्पलेट नहीं। कोई जल्दबाज़ी नहीं। हर फिटिंग दो बार चेक।',
      stage3_tag:'सबूत — 03 / 04', stage3_title:'भरोसेमंद', stage3_text:'4.7★ मार्केटिंग से नहीं आई। 500+ ट्रकों से आई जो UAE की गर्मी में भी नए लगते हैं।',
      stage4_tag:'आज — 04 / 04', stage4_title:'आज', stage4_text:'Ram TRX. F-150 Raptor. GMC Sierra Denali. सब बनाए। आपके ट्रक का अगला अध्याय इंडस्ट्रियल एरिया 4 से शुरू होता है।',
      reviews_h2_l1:'ग्राहक', reviews_h2_l2:'क्या कहते हैं.',
      rating_label:'Google रिव्यूज़',
      r1_text:'"शारजाह में 4x4 एक्सेसरीज़ की सबसे अच्छी दुकान। गाड़ियाँ जानते हैं — Tundra, GMC, Ram, F-150. कीमतें ईमानदार और टीम वाकई जानकार।"',
      r1_name:'अदनान आदी', r1_meta:'6 महीने पहले',
      r2_text:'"उसी दिन रियर हिच कैरियर फिट करवाया। उचित कीमत, कोई झंझट नहीं।"',
      r2_name:'हिशाम इर्शाद', r2_meta:'2 महीने पहले',
      r3_text:'"प्रोफेशनल टीम। क्वालिटी काम। गाड़ी की हर डीटेल सही तरीके से हैंडल।"',
      r3_name:'मोहम्मद आर.', r3_meta:'4 महीने पहले',
      cs_whatsapp_label:'WhatsApp — सबसे तेज़ जवाब', cs_whatsapp_val:'अभी मैसेज करें',
      cs_call_label:'सीधे कॉल करें', cs_call_val:'050 300 2898',
      cs_visit_label:'बिना अपॉइंटमेंट आएं', cs_visit_val:'इंडस्ट्रियल एरिया 4, शारजाह',
      footer_tag:'डेज़र्ट आयरन — ताक़त के लिए बनाया', footer_copy:'© 2025 जुहरुम ऑटो एक्सेसरीज़, शारजाह UAE',
      contact_hero_tag:'हमसे संपर्क करें', contact_hero_h1_l1:'आएं.', contact_hero_h1_l2:'बनाएं.',
      contact_hero_sub:'अपॉइंटमेंट नहीं चाहिए। आएं, गाड़ी बताएं, हम दिखाएंगे क्या मुमकिन है।',
      contact_btn_wa:'WhatsApp पर मैसेज', contact_btn_call:'कॉल: 050 300 2898',
      contact_email:'h_jahrom@yahoo.com', contact_social_title:'बिल्ड्स देखें। फॉलो करें।',
      contact_instagram:'Instagram', contact_youtube:'YouTube', contact_tiktok:'TikTok',
      story_page_hero_sub:'ईरानी हुनर। UAE का रेगिस्तान। शारजाह के सबसे बेहतरीन ट्रक बनाने के पाँच साल।',
      story_ch1_title:'शुरुआत', story_ch1_h2_l1:'ईरान में', story_ch1_h2_l2:'जन्मे.', story_ch1_h2_l3:'शारजाह में', story_ch1_h2_l4:'बनाए.',
      story_ch1_b1:'जुहरुम की कहानी UAE से नहीं, ईरान से शुरू होती है। हादी ग़नाईयान ने इसे ईरानी बारीकी की भावना के साथ बनाया।',
      story_ch1_b2:'जब हादी ने शारजाह में दुकान खोली, वही जुनून साथ लाए।',
      story_ch1_b3:'पाँच साल बाद, जुहरुम पूरे UAE में उन लोगों की पहली पसंद बन गया जो समझौता नहीं करते।',
      story_ch2_title:'माहौल', story_ch2_h2_l1:'UAE के', story_ch2_h2_l2:'लिए', story_ch2_h2_l3:'बनाया.',
      story_ch2_b1:'48°C गर्मी। हर जगह रेत। UV जो सस्ती कोटिंग महीनों में बर्बाद कर दे।',
      story_ch2_b2:'हम नहीं करते। जुहरुम का हर प्रोडक्ट शारजाह की असली गर्मी में टेस्ट किया गया है।',
      story_ch2_b3:'अगर पूरा UAE साल नहीं झेल सकता, तो हमारे शोरूम में जगह नहीं।',
      story_ch3_title:'प्रोडक्ट्स', story_ch3_h2_l1:'हम', story_ch3_h2_l2:'असल में', story_ch3_h2_l3:'क्या करते हैं.',
      story_ch3_b1:'Ram TRX. F-150 Raptor. GMC Sierra Denali. सब बनाए हैं।',
      story_ch3_b2:'बेड कवर, एक्सटेरियर मॉड्स, Apple CarPlay, सेल्फ-हीलिंग PPF, थर्मल इंसुलेशन, पूरी लेदर इंटीरियर।',
      story_ch3_b3:'हम सीधे मैन्युफैक्चरर से खरीदते हैं इसलिए कीमतें क्वालिटी से समझौता किए बिना कॉम्पिटिटिव रहती हैं।',
      story_ch3_cta:'प्रोडक्ट्स देखें',
      val1_title:'सटीक फिटिंग', val1_body:'हर एक्सेसरी अमेरिकी पिकअप ट्रकों के लिए खास तौर पर सोर्स की गई है।',
      val2_title:'उचित मूल्य', val2_body:'डायरेक्ट सप्लायर संबंधों का मतलब कोई बिचौलिया नहीं।',
      val3_title:'पेशेवर इंस्टॉलेशन', val3_body:'हम सिर्फ बेचते नहीं — फिट भी करते हैं।',
      val4_title:'UAE में परीक्षित', val4_body:'पाँच साल UAE के रेगिस्तान, गर्मी और रेत ने हर प्रोडक्ट को परखा है।',
      val5_title:'विशेषज्ञ मार्गदर्शन', val5_body:'यकीन नहीं क्या चाहिए? आएं, बात करें।',
      val6_title:'जुबानी शोहरत', val6_body:'हमारी प्रतिष्ठा उन ग्राहकों ने बनाई जो वापस आए और अपने दोस्त भेजे।',
    }
  }
};

// ─────────────────────────────────────────────────────
// Core apply function
// ─────────────────────────────────────────────────────
function juhrumApplyLang(code) {
  const lang = JUHRUM_LANGS[code];
  if (!lang) return;

  localStorage.setItem('juhrum-lang', code);

  document.documentElement.setAttribute('lang', code);
  document.documentElement.setAttribute('dir', lang.dir);

  // Font injection
  let fontStyle = document.getElementById('juhrum-lang-font');
  if (!fontStyle) {
    fontStyle = document.createElement('style');
    fontStyle.id = 'juhrum-lang-font';
    document.head.appendChild(fontStyle);
  }

  if (lang.font === 'Noto Sans Arabic') {
    fontStyle.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;600;700&display=swap');
      body, [data-i18n], .jnav-links a, .cs-label, .cs-title,
      .ed-body, .sh-sub, .jnav-wa, .btn-g span, .btn-dark span, .btn-o,
      .booking-text, .h-sub, .ts-panel-desc, .ts-panel-note, .ts-panel-hint,
      .ts-panel-title, .booking-info, .stage-text, .stage-title, .stage-tag,
      .rcard-text, .rcard-name, .reviews-h2, .story-h2, .booking-h3,
      .jfoot-tag, .jfoot-copy, .ts-hint-text, .ts-hint-sub, .h-tag,
      .hst-l, .h-scroll-lbl, .soc-block-title, .soc-btn, .vcard-body,
      .vcard-title, .tick, .ticker-i { font-family: 'Noto Sans Arabic', sans-serif !important; letter-spacing: 0 !important; }
      .booking-h3, .h-h1, .reviews-h2, .story-h2, .stage-title, .ed-h2 {
        font-family: 'Noto Sans Arabic', sans-serif !important;
        font-size: 0.75em; line-height: 1.15 !important;
      }
      [dir="rtl"] .h-h1 .row { text-align: right; }
    `;
  } else if (lang.font === 'Noto Nastaliq Urdu') {
    fontStyle.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600;700&display=swap');
      body, [data-i18n], .jnav-links a, .cs-label, .cs-title,
      .ed-body, .sh-sub, .jnav-wa, .btn-g span, .btn-dark span, .btn-o,
      .booking-text, .h-sub, .ts-panel-desc, .ts-panel-note, .ts-panel-hint,
      .ts-panel-title, .booking-info, .stage-text, .stage-title, .stage-tag,
      .rcard-text, .rcard-name, .reviews-h2, .story-h2, .booking-h3,
      .jfoot-tag, .jfoot-copy, .ts-hint-text, .ts-hint-sub, .h-tag,
      .hst-l, .h-scroll-lbl, .soc-block-title, .soc-btn, .vcard-body,
      .vcard-title { font-family: 'Noto Nastaliq Urdu', serif !important; letter-spacing: 0 !important; line-height: 2 !important; }
      .booking-h3, .h-h1, .reviews-h2, .story-h2, .stage-title, .ed-h2 {
        font-family: 'Noto Nastaliq Urdu', serif !important;
        font-size: 0.65em; line-height: 1.5 !important;
      }
      [dir="rtl"] .h-h1 .row { text-align: right; }
    `;
  } else if (lang.font === 'Noto Sans Devanagari') {
    fontStyle.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;600;700&display=swap');
      [data-i18n], .jnav-links a, .h-sub, .booking-text, .ts-panel-desc,
      .stage-text, .rcard-text, .rcard-name, .jfoot-tag, .jfoot-copy,
      .cs-label, .cs-title, .hst-l, .booking-info, .soc-block-title,
      .soc-btn, .vcard-body, .vcard-title { font-family: 'Noto Sans Devanagari', sans-serif !important; letter-spacing: 0 !important; }
    `;
  } else {
    fontStyle.textContent = '';
  }

  // Translate all data-i18n elements
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

  // Preloader steps
  window.__juhrumLangSteps = [lang.t.pl_step1, lang.t.pl_step2, lang.t.pl_step3];

  // Update dropdown label
  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = lang.label + ' ▾';

  // Update active option
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === code);
  });

  applyLayoutDir(lang.dir);
}

function applyLayoutDir(dir) {
  const rtl = dir === 'rtl';

  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.marginLeft = rtl ? 'auto' : '0';
    heroContent.style.marginRight = rtl ? '0' : 'auto';
    heroContent.style.textAlign = rtl ? 'right' : 'left';
  }
  const htag = document.querySelector('.h-tag');
  if (htag) htag.style.flexDirection = rtl ? 'row-reverse' : 'row';
  document.querySelectorAll('.h-h1 .row').forEach(r => { r.style.textAlign = rtl ? 'right' : 'left'; });
  const hctas = document.querySelector('.h-ctas');
  if (hctas) hctas.style.flexDirection = rtl ? 'row-reverse' : 'row';
  const hstats = document.querySelector('.h-stats');
  if (hstats) { hstats.style.right = rtl ? 'auto' : '0'; hstats.style.left = rtl ? '0' : 'auto'; }
  const hscroll = document.querySelector('.h-scroll');
  if (hscroll) { hscroll.style.right = rtl ? 'auto' : '52px'; hscroll.style.left = rtl ? '52px' : 'auto'; }
  const bctas = document.querySelector('.booking-ctas');
  if (bctas) bctas.style.flexDirection = rtl ? 'row-reverse' : 'row';
  const storyIntro = document.querySelector('.story-intro');
  if (storyIntro) storyIntro.style.direction = dir;
  document.querySelectorAll('.two-col').forEach(tc => { tc.style.direction = dir; });
  const rg = document.querySelector('.reviews-grid');
  if (rg) rg.style.direction = dir;
  document.querySelectorAll('.rcard-text, .rcard-name, .rcard-meta').forEach(el => { el.style.textAlign = rtl ? 'right' : 'left'; });
  document.querySelectorAll('.cs-arrow').forEach(a => {
    if (a.textContent === '→' || a.textContent === '←') { a.textContent = rtl ? '←' : '→'; }
  });
  document.querySelectorAll('.vcard, .vcard-body, .contact-left').forEach(el => {
    el.style.textAlign = rtl ? 'right' : 'left';
    el.style.direction = dir;
  });
  const foot = document.querySelector('.jfoot');
  if (foot) foot.style.direction = dir;
  const ticker = document.querySelector('.ticker');
  if (ticker) ticker.style.direction = 'ltr';
  document.querySelectorAll('.ts-panel').forEach(p => { p.style.textAlign = rtl ? 'right' : 'left'; p.style.direction = dir; });
  const tsh = document.querySelector('.ts-scroll-hint');
  if (tsh) { tsh.style.right = rtl ? 'auto' : '0'; tsh.style.left = rtl ? '0' : 'auto'; tsh.style.textAlign = rtl ? 'right' : 'left'; }
}

// ─────────────────────────────────────────────────────
// Init — dead-simple, no cloning, no pointerup, no double-fire
// Works on mouse (desktop) and touch (mobile) identically
// ─────────────────────────────────────────────────────
function juhrumInitLang() {
  var saved = localStorage.getItem('juhrum-lang') || 'en';
  juhrumApplyLang(saved);

  var btn = document.getElementById('lang-btn');
  var dd  = document.getElementById('lang-dropdown');
  if (!btn || !dd) return;
  if (btn._langBound) return;  // guard against double-init
  btn._langBound = true;

  var open = false;

  function openDD() {
    open = true;
    dd.classList.add('open');
  }
  function closeDD() {
    open = false;
    dd.classList.remove('open');
  }
  function toggleDD(e) {
    e.stopPropagation();
    // Also close theme dropdown if present
    var tdd = document.getElementById('theme-dropdown');
    if (tdd) tdd.classList.remove('open');
    open ? closeDD() : openDD();
  }

  // Single click listener — browsers fire click reliably on both mouse and touch
  btn.addEventListener('click', toggleDD);

  dd.querySelectorAll('.lang-option').forEach(function(opt) {
    opt.addEventListener('click', function(e) {
      e.stopPropagation();
      juhrumApplyLang(opt.getAttribute('data-lang'));
      closeDD();
    });
  });

  // Close on outside click / tap
  document.addEventListener('click', function() { closeDD(); });
}

// Expose globally
window.juhrumApplyLang = juhrumApplyLang;
window.juhrumInitLang  = juhrumInitLang;

// Auto-init regardless of when script runs
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', juhrumInitLang);
} else {
  juhrumInitLang();
}
