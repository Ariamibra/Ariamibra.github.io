const CONTENT = {

  /* ── الاسم ── */
  name: {
    first: "Aryam",
    last:  { en: "Alsaidi", ar: "الصعيدي" }
  },

  /* ── Hero ── */
  hero: {
    tag:   { en: "GIS Graduate · Spatial Analysis · Industrial Geospatial Systems",
             ar: "خريجة نظم المعلومات الجغرافية · تحليل مكاني · أنظمة جيومكانية صناعية" },
    title: { en: "Industrial Spatial Analysis · Geospatial Data Systems",
             ar: "التحليل المكاني الصناعي · قواعد البيانات الجغرافية" },
    desc:  { en: "Transforming spatial data into clear and actionable insights. Focused on industrial geospatial analysis, geodatabase design, and multi-layered GIS methodologies.",
             ar: "أحوّل البيانات المكانية إلى رؤى واضحة وقابلة للتطبيق. متخصصة في التحليل الجيومكاني الصناعي وتصميم قواعد البيانات الجغرافية." },
    email: "aryam.gis@outlook.com",
    linkedin: "https://linkedin.com/in/aryam-alsaidi"
  },

  /* ── About Stats ── */
  stats: [
    { number: "120", label: { en: "Factory Records Mapped",     ar: "سجل مصنع مُرصد" } },
    { number: "25",  label: { en: "Years of Temporal Data",     ar: "عامًا من البيانات الزمنية" } },
    { number: "7",   label: { en: "Analytical Methods Applied", ar: "منهجية تحليلية مطبّقة" } },
    { number: "3",   label: { en: "Industrial Cities Analyzed", ar: "مدينة صناعية محللة" } }
  ],

  /* ── About Text ── */
  about: [
    { en: "GIS graduate specializing in <strong>industrial spatial analysis</strong> and geodatabase design. My capstone research analyzed the evolution of three industrial cities in Dammam across <span class='hl'>25 years</span> — mapping 120 factories across nine industry types and uncovering a complementary, not competing, industrial ecosystem.",
      ar: "خريجة GIS متخصصة في <strong>التحليل المكاني الصناعي</strong> وتصميم قواعد البيانات الجغرافية. بحث تخرجي درس تطور ثلاث مدن صناعية في الدمام عبر <span class='hl'>25 عامًا</span>." },
    { en: "I build projects that go beyond maps — translating spatial data into <strong>clear insights</strong> for urban planning, industrial development, and evidence-based decision-making.",
      ar: "أبني مشاريع تتجاوز الخرائط — أترجم البيانات المكانية إلى <strong>رؤى واضحة</strong> تخدم التخطيط العمراني والتطوير الصناعي." },
    { en: "Seeking a GIS or spatial data role where I can contribute to meaningful projects within Saudi Arabia's development agenda.",
      ar: "أسعى إلى دور في GIS أو البيانات المكانية يتيح لي المساهمة في مشاريع ذات أثر ضمن مسيرة التنمية في المملكة العربية السعودية." }
  ],

  /* ── Skills ── */
  skills: [
    {
      title: { en: "GIS & Spatial Tools", ar: "أدوات GIS والتحليل المكاني" },
      tags: [
        { en: "ArcGIS Pro",          ar: "ArcGIS Pro" },
        { en: "Spatial Analysis",    ar: "التحليل المكاني" },
        { en: "Remote Sensing",      ar: "الاستشعار عن بعد" },
        { en: "Google Earth Pro",    ar: "Google Earth Pro" },
        { en: "USGS Earth Explorer", ar: "USGS Earth Explorer" }
      ]
    },
    {
      title: { en: "Data & Database", ar: "البيانات وقواعد البيانات" },
      tags: [
        { en: "Geodatabase Design",   ar: "تصميم قواعد البيانات الجغرافية" },
        { en: "Database Structuring", ar: "هيكلة قواعد البيانات" },
        { en: "Microsoft Excel",      ar: "Microsoft Excel" },
        { en: "Data Organization",    ar: "تنظيم البيانات" },
        { en: "Chart Visualization",  ar: "تصور البيانات بالمخططات" }
      ]
    },
    {
      title: { en: "Analytical Methods", ar: "المنهجيات التحليلية" },
      tags: [
        { en: "Kernel Density Estimation", ar: "تقدير الكثافة النووية" },
        { en: "Weighted Overlay",          ar: "التراكب الموزون" },
        { en: "Buffer Analysis",           ar: "تحليل المنطقة الحدية" },
        { en: "Location Quotient",         ar: "معامل الموقع" },
        { en: "Spatiotemporal Analysis",   ar: "التحليل المكاني الزمني" },
        { en: "Sensitivity Analysis",      ar: "تحليل الحساسية" },
        { en: "Proximity Analysis",        ar: "تحليل القرب" }
      ]
    },
    {
      title: { en: "Productivity & Office", ar: "الإنتاجية والمكتب" },
      tags: [{ en: "Microsoft Word",       ar: "Microsoft Word" },
        { en: "Microsoft PowerPoint", ar: "Microsoft PowerPoint" },
        { en: "Microsoft Excel",      ar: "Microsoft Excel" },
        { en: "Canva",                ar: "Canva" }
      ]
    }
  ],

  /* ── Education ── */
  education: {
    degree: { en: "Bachelor of Geographic Information Systems", ar: "بكالوريوس نظم المعلومات الجغرافية" },
    university: { en: "University of Hail", ar: "جامعة حائل" },
    year: "2026",
    grade: { en: "Very Good — Second Class Honors", ar: "جيد جداً — الدرجة الثانية بمرتبة الشرف" },
    specialization: { en: "GIS & Spatial Analysis", ar: "نظم المعلومات الجغرافية والتحليل المكاني" }
  },

  /* ── Certifications ── */
  certifications: [
    {
      name:   { en: "Google Data Analytics Certificate", ar: "شهادة تحليل بيانات Google" },
      issuer: "Google · Coursera",
      status: { en: "In Progress", ar: "جارٍ إتمامه" },
      badge:  "progress"
      /* لما تكملينها: حذفي status و badge وأضيفي year: "2026" */
    }
    /* لإضافة شهادة جديدة:
    ,{
      name:   { en: "...", ar: "..." },
      issuer: "...",
      year:   "2026"
    }
    */
  ],

  /* ── Projects ── */
  projects: [
    {
      number:   "01",
      featured: true,
      tag:    { en: "Capstone Research · GIS Analysis", ar: "مشروع التخرج · تحليل GIS" },
      title:  { en: "Industrial Cities Spatial Analysis — Dammam", ar: "التحليل المكاني للمدن الصناعية — الدمام" },
      desc:   { en: "A 25-year spatiotemporal study of three industrial cities (D1, D2, D3) in Dammam. Analyzed 120 factory records across nine industry classifications — revealing a complementary, not competing, industrial ecosystem through seven GIS analytical methods.",
                ar: "دراسة مكانية زمنية لمدة 25 عامًا لثلاث مدن صناعية في الدمام. تحليل 120 سجلاً صناعياً — أثبتت أن المدن تكمّل بعضها ولا تتنافس." },
      methods: [
        { en: "Kernel Density",      ar: "الكثافة النووية" },
        { en: "Location Quotient",   ar: "معامل الموقع" },
        { en: "Weighted Overlay",    ar: "التراكب الموزون" },
        { en: "Buffer Analysis",     ar: "تحليل المنطقة الحدية" },
        { en: "Near Tool",           ar: "أداة القرب" },
        { en: "Sensitivity Analysis",ar: "تحليل الحساسية" },
        { en: "Density per Area",    ar: "الكثافة بالمساحة" }
      ],
      link:   "projects/project1.html",
      status: null  /* null = مكتمل، "coming-soon" = قريبًا */
    },
    {
      number:   "02",
      featured: false,
      tag:    { en: "Data Visualization", ar: "تصور البيانات" },
      title:  { en: "Power BI Geospatial Dashboard", ar: "لوحة بيانات Power BI الجيومكانية" },
      desc:   { en: "Interactive visualization of industrial spatial datasets from the Dammam analysis — designed to communicate findings clearly to decision-makers.",
                ar: "تصور تفاعلي للبيانات المكانية الصناعية المستخرجة من تحليل الدمام." },
      methods: [],
      link:   null,
      status: "coming-soon"
    },
    {
      number:   "03",
      featured: false,
      tag:    { en: "More Work", ar: "مشاريع أخرى" },
      title:  { en: "Additional Projects", ar: "مشاريع إضافية" },
      desc:   { en: "Further projects in spatial analysis, remote sensing, and geodatabase systems will be published here as they develop.",
                ar: "مشاريع قادمة في التحليل المكاني والاستشعار عن بعد وأنظمة قواعد البيانات الجغرافية." },
      methods: [],
      link:   null,
      status: "coming-soon"
    }
  ],

  /* ── Contact ── */
  contact: {
    desc: { en: "Open to GIS Analyst, Spatial Data, and Geospatial roles — particularly in urban development, industrial planning, and smart city projects in Saudi Arabia.",
            ar: "متاحة لفرص في تحليل GIS والبيانات المكانية — خاصةً في مجالات التطوير العمراني والتخطيط الصناعي ومشاريع المدن الذكية في المملكة العربية السعودية." }
  },

  /* ── Footer ── */
  footer: {
    location: { en: "Saudi Arabia", ar: " المملكة العربية السعودية" }
  }

};
