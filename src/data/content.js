/**
 * Content Data Store for PRATHYAYA M V Portfolio
 * All content, copy, technical specifications, and image paths live here.
 * Nothing is hardcoded in component JSX.
 */

export const profileData = {
  name: "PRATHYAYA MV",
  studentId: "BFT/23/601",
  department: "Bachelor of Fashion Technology (B.FTech)",
  year: "4th Year",
  institution: "National Institute of Fashion Technology (NIFT)",
  statusLine: "● OPEN TO INTERNSHIPS & COLLABORATIONS",
  tagline: "4th-Year Fashion Technology (B.FTech) student at NIFT, blending garment construction, 2D CAD, apparel tech & editorial design.",
  
  heroBadges: [
    { text: "make things", color: "sticky-yellow", rotation: "-3deg" },
    { text: "obsessed w/ the details", color: "sticky-pink", rotation: "2deg" },
    { text: "Fashion Technologist", color: "sticky-mint", rotation: "-2deg" },
  ],

  heroSnapshots: [
    {
      id: "corset-01",
      title: "CORSET DRESS",
      subtitle: "Off-Shoulder Glossy Crimson Satin Gown",
      tag: "EVENINGWEAR",
      src: "/images/hero/hero-corset.jpg",
      alt: "Crimson satin corset gown front view on mannequin",
      projectId: "03"
    },
    {
      id: "jacket-01",
      title: "STRUCTURED JACKET",
      subtitle: "Notched Lapels & Sheer Balloon Sleeves",
      tag: "TAILORING",
      src: "/images/hero/hero-jacket.jpg",
      alt: "Structured tailored blazer jacket with sheer balloon sleeves",
      projectId: "02"
    },
    {
      id: "shirt-01",
      title: "SHIRT DRESS",
      subtitle: "Oversized A-Line Silhouette · Golden Hour",
      tag: "EDITORIAL",
      src: "/images/hero/hero-shirtdress.jpg",
      alt: "Oversized A-line shirt dress beach editorial photoshoot",
      projectId: "01"
    }
  ],

  heroPolaroids: [
    {
      src: "/images/hero/hero-corset.jpg",
      caption: "Corset Gown // Final drape",
      alt: "Crimson satin corset gown front view on mannequin",
      rotation: "-3deg",
      tapeColor: "sticky-pink",
    },
    {
      src: "/images/hero/hero-jacket.jpg",
      caption: "Plum Jacket // Sheer balloon sleeve",
      alt: "Structured tailored blazer jacket with sheer balloon sleeves",
      rotation: "2.5deg",
      tapeColor: "sticky-sky",
    },
    {
      src: "/images/hero/hero-shirtdress.jpg",
      caption: "A-Line Shirt Dress // Beach Editorial",
      alt: "Oversized A-line shirt dress beach editorial photoshoot",
      rotation: "-2deg",
      tapeColor: "sticky-yellow",
    },
  ],

  bioIntro: "what's up!",
  bioText: [
    "I am a final-year Fashion Technology student at NIFT with a rigorous technical foundation in pattern engineering, production planning, 2D CAD drafting, and wearable technology integration.",
    "My work bridges the tactile craftsmanship of physical garment construction with data-driven apparel engineering—from calculating precise marker efficiency down to two decimal places, to designing micro-controller automation systems and crafting publication-grade editorial layouts.",
    "Currently exploring 3D apparel simulation in CLO 3D and seeking industry roles where technical precision and creative exploration elevate product development."
  ],

  aboutPolaroids: [
    {
      src: "/images/about/portrait.jpg",
      caption: "Prathyaya M V · NIFT",
      alt: "Portrait of Prathyaya M V",
      rotation: "-2.5deg",
      tapeColor: "sticky-yellow",
    },
  ],

  education: [
    {
      degree: "Bachelor of Fashion Technology (B.FTech)",
      institution: "National Institute of Fashion Technology (NIFT)",
      period: "2023 – 2027 (4th Year)",
      rollId: "BFT/23/601",
      highlight: "Specialization in Garment Construction, CAD Drafting, Marker Optimization, and Apparel Production Systems.",
      tabColor: "charcoal",
      textColor: "cream"
    },
    {
      degree: "Apparel Industry Internship",
      institution: "Leading Export & Manufacturing House",
      period: "Summer Practice / Forthcoming",
      rollId: "Internship Project",
      highlight: "Apparel Internship Project, details coming soon. Focusing on production floor tracking, line efficiency, and quality inspection pipelines.",
      tabColor: "mustard",
      textColor: "ink"
    },
    {
      degree: "Professional Certifications",
      institution: "Industry & CAD Competencies",
      period: "Ongoing & Completed",
      rollId: "Certifications",
      highlight: "Pattern Making & Digital Grading Certification (Optitex 2D CAD), Smart Apparel & IoT Workshop Prototyping.",
      tabColor: "sticky-sky",
      textColor: "ink"
    }
  ],

  skills: [
    { name: "Pattern Making & Garment Construction (PM-GC)", category: "Garment Construction", color: "sticky-yellow", rotation: "-2deg" },
    { name: "2D CAD (Optitex)", category: "CAD & Digital", color: "sticky-mint", rotation: "1.5deg" },
    { name: "Pattern Grading", category: "CAD & Digital", color: "sticky-pink", rotation: "-1deg" },
    { name: "Marker Planning", category: "Production Tech", color: "sticky-sky", rotation: "2deg" },
    { name: "CLO 3D (ongoing)", category: "CAD & Digital", color: "mustard", rotation: "-2.5deg" },
    { name: "Arduino / IoT Prototyping", category: "Apparel Tech", color: "sticky-mint", rotation: "1deg" },
    { name: "Editorial & Magazine Layout", category: "Design & Media", color: "sticky-pink", rotation: "-1.5deg" },
    { name: "Typography", category: "Design & Media", color: "sticky-yellow", rotation: "2.5deg" }
  ],

  atAGlanceStats: [
    { value: "06", label: "Featured Projects" },
    { value: "S–XXL", label: "5-Size Grading Range" },
    { value: "114", label: "Marker Pieces Placed" },
    { value: "84.91%", label: "Marker Efficiency" }
  ],

  socialLinks: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/_prath_ya_ya_?dmpr=MXhiYWp5ejh5eWV5aQ==",
      icon: "Instagram",
      color: "sticky-pink"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/prathyaya-m-v-19350a291?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: "Linkedin",
      color: "sticky-sky"
    },
    {
      name: "Email (Gmail)",
      url: "mailto:prathyaya.mv@nift.ac.in",
      icon: "Mail",
      color: "sticky-yellow"
    }
  ],

  tapeStripSkills: [
    "Optitex",
    "CLO 3D",
    "Arduino Uno",
    "Libre Baskerville",
    "Minion Pro",
    "Pattern Grading",
    "Marker Optimization",
    "NIFT Tech"
  ]
};

export const filterCategories = [
  { id: "all", label: "ALL" },
  { id: "pattern-garment", label: "PATTERN & GARMENT" },
  { id: "cad", label: "CAD" },
  { id: "iot", label: "IoT" },
  { id: "editorial", label: "EDITORIAL" }
];

export const projectsData = [
  {
    id: "01",
    slug: "shirt-dress",
    category: "pattern-garment",
    categoryLabel: "PATTERN & GARMENT",
    title: "PM-GC: SHIRT DRESS",
    subtitle: "Oversized A-Line Silhouette",
    tagline: "Oversized A-line silhouette with a flared hem",
    folderTabColor: "charcoal",
    folderTextColor: "cream",
    badge: "Garment Construction",
    thumbnail: "/images/shirt-dress/thumbnail.jpg",
    thumbnailAlt: "Oversized A-line shirt dress beach editorial thumbnail",
    overview: "This shirt dress features a relaxed and oversized A-line silhouette with a loose, flowing fit and a wide flared hem. It has a classic shirt collar with a collar stand and a full-length centre-front button placket with contrasting dark buttons. The dress has three-quarter-length sleeves with cuffs that can be rolled up for a casual look. It has no defined waist, allowing the fabric to fall freely from the upper body, creating a comfortable and elegant appearance. The overall style is minimal, contemporary, comfortable, and effortlessly casual, with a clean shirt-inspired design and soft flowing volume.",
    meta: {
      type: "Physical Garment Construction",
      tools: "Pattern Drafting, Juki Lockstitch, Pressing Equipment",
      focus: "A-Line Flow, Collar Stand Engineering, Placket Alignment, Flared Hem",
      year: "2024 / Completed"
    },
    statNotes: [
      { value: "A-Line", label: "Fluid Silhouette" },
      { value: "¾ Sleeve", label: "Roll-Up Cuffed Sleeves" },
      { value: "Flared", label: "Wide Hem Volume" },
      { value: "4-Stage", label: "Construction Pipeline" }
    ],
    process: [
      {
        step: 1,
        title: "Reference Study",
        description: "Selected an e-commerce image as the design reference and studied the shirt collar, button placket, sleeves, A-line silhouette, and flared hem."
      },
      {
        step: 2,
        title: "Pattern Development",
        description: "Drafted the pattern based on the reference design. Modified it according to personal body measurements and required fit. Measurements included chest, shoulder, waist, length, armhole, neck, sleeve, collar, and cuff."
      },
      {
        step: 3,
        title: "Cutting & Stitching",
        description: "Cut the individual pattern pieces from the selected fabric. Assembled the pieces through stitching. Conducted a test fit and made necessary adjustments."
      },
      {
        step: 4,
        title: "Final Garment",
        description: "Added the collar, front buttons, sleeves, and flared hem. Finished the garment to achieve the desired silhouette and appearance. Documented the final front and back views."
      }
    ],
    gallery: [
      {
        type: "final",
        title: "Final Output — Beach Editorial 01",
        caption: "Full front silhouette on location at the beach during golden hour, highlighting the fluid A-line drape",
        src: "/images/shirt-dress/final-01.jpg",
        aspect: "4:5",
        alt: "Beach editorial full front shot of oversized black A-line shirt dress"
      },
      {
        type: "final",
        title: "Final Output — Beach Editorial 02",
        caption: "Sunset side profile showing the flared hem volume, collar stand, and relaxed roll-up cuff sleeves",
        src: "/images/shirt-dress/final-02.jpg",
        aspect: "4:5",
        alt: "Beach editorial sunset profile shot of shirt dress by the ocean"
      },
      {
        type: "reference",
        title: "E-Commerce Reference — Front View",
        caption: "Original design inspiration: Relaxed oversized A-line silhouette with classic shirt collar, full placket, and flared hem",
        src: "/images/shirt-dress/reference-front.png",
        aspect: "3:4",
        alt: "Shirt dress e-commerce reference front view"
      },
      {
        type: "reference",
        title: "E-Commerce Reference — Back View",
        caption: "Reference study: Back yoke, ease distribution, and flowing flared volume",
        src: "/images/shirt-dress/reference-back.png",
        aspect: "3:4",
        alt: "Shirt dress e-commerce reference back view"
      }
    ]
  },

  {
    id: "02",
    slug: "jacket",
    category: "pattern-garment",
    categoryLabel: "PATTERN & GARMENT",
    title: "PM-GC: STRUCTURED BLAZER JACKET",
    subtitle: "Sheer Balloon Sleeves & Tailored Lapels",
    tagline: "Sheer balloon sleeves meet tailored lapels",
    folderTabColor: "mustard",
    folderTextColor: "ink",
    badge: "Garment Construction",
    thumbnail: "/images/jacket/thumbnail.jpg",
    thumbnailAlt: "Structured blazer jacket with sheer balloon sleeves thumbnail",
    overview: "This jacket features a relaxed, slightly oversized silhouette with a structured blazer-inspired design. It has wide notched lapels, a deep V-shaped front opening, and a double-button front closure. The jacket has long balloon-style sleeves with contrasting sheer upper sleeves and fuller fabric sections towards the cuffs. It has a slightly flared body with a longer length extending below the hip, creating a contemporary and casual look. Overall, the jacket combines tailored blazer elements with relaxed proportions and contrasting sleeve details, giving it a modern and stylish appearance.",
    meta: {
      type: "Tailored Outerwear & Mixed Media",
      tools: "Pattern Drafting, Interfacing Press, Industrial Lockstitch",
      focus: "Notched Lapel Roll Line, Balloon Sleeve Volume, Contrast Sheer Panels",
      year: "2024 / Completed"
    },
    statNotes: [
      { value: "Mauve/Plum", label: "Contrast Sheer Palette" },
      { value: "6-Step", label: "Construction Cycle" },
      { value: "Double", label: "Front Button Fastening" },
      { value: "Below-Hip", label: "Flared Peplum Length" }
    ],
    process: [
      {
        step: 1,
        title: "Reference Study",
        description: "Selected an e-commerce image as the design reference. Studied the jacket’s silhouette, notched lapels, button placement, sleeve design, cuffs, and length. Identified the contrasting sleeve panels and overall construction details."
      },
      {
        step: 2,
        title: "Pattern Development",
        description: "Drafted the jacket pattern according to body measurements and the required fit. Prepared patterns for the front and back panels, sleeves, lapels, collar, and cuffs. Modified the patterns to achieve the desired silhouette and sleeve volume."
      },
      {
        step: 3,
        title: "Fabric Selection and Cutting",
        description: "Selected suitable fabrics for the jacket body and contrasting sleeve sections. Marked the pattern pieces on the fabric. Cut the individual components accurately, including the lining if required."
      },
      {
        step: 4,
        title: "Garment Construction",
        description: "Joined the front and back panels through stitching. Constructed the lapels and attached them to the neckline. Assembled the sleeves with contrasting panels and attached them to the armholes."
      },
      {
        step: 5,
        title: "Fitting and Finishing",
        description: "Conducted a test fit to check the jacket’s shape, proportions, and sleeve volume. Made the necessary adjustments to the fit and construction. Completed hemming, button attachment, thread trimming, and pressing."
      },
      {
        step: 6,
        title: "Final Garment",
        description: "Inspected the finished jacket for stitching quality and overall appearance. Ensured that the lapels, buttons, contrasting sleeves, and silhouette matched the intended design. Documented the final front and back views in the Main Garment section."
      }
    ],
    gallery: [
      {
        type: "final",
        title: "Final Output — Front View",
        caption: "Structured mauve jacket with sheer pink balloon sleeves, double-button closure, and matching tailored trousers",
        src: "/images/jacket/final-01.jpg",
        aspect: "3:4",
        alt: "Structured blazer jacket front view on model showing notched lapels and sheer sleeves"
      },
      {
        type: "final",
        title: "Final Output — Back View",
        caption: "Back tailoring profile showing sheer contrast shoulder panels and elongated flared hemline",
        src: "/images/jacket/final-02.jpg",
        aspect: "3:4",
        alt: "Structured blazer jacket back view showing panel construction and silhouette"
      },
      {
        type: "reference",
        title: "E-Commerce Reference — Front View",
        caption: "Original design reference: Relaxed tailored blazer silhouette with sheer contrast balloon sleeves and notched lapels",
        src: "/images/jacket/reference-front.png",
        aspect: "3:4",
        alt: "Reference blazer jacket front view"
      },
      {
        type: "reference",
        title: "E-Commerce Reference — Back View",
        caption: "Reference study: Back tailoring panels, contrasting sleeve volume, and elongated flared hem",
        src: "/images/jacket/reference-back.png",
        aspect: "3:4",
        alt: "Reference blazer jacket back view"
      }
    ]
  },

  {
    id: "03",
    slug: "corset-dress",
    category: "pattern-garment",
    categoryLabel: "PATTERN & GARMENT",
    title: "PM-GC: CORSET DRESS",
    subtitle: "Off-Shoulder Satin Gown with Lace-Up Back",
    tagline: "Off-shoulder satin gown with a lace-up back",
    folderTabColor: "charcoal",
    folderTextColor: "cream",
    badge: "Garment Construction",
    thumbnail: "/images/corset-dress/thumbnail.jpg",
    thumbnailAlt: "Crimson satin corset gown thumbnail",
    overview: "This gown features an elegant off-shoulder, fitted bodice with a structured corset-like appearance and a dramatic, voluminous skirt. The design includes large puffed balloon sleeves that add a statement element to the silhouette. The waist is fitted to create a defined shape, while the skirt flows outward into a full-length, floor-sweeping A-line silhouette with generous gathers and volume. The back features a lace-up corset closure and an open-back design, adding a romantic and sophisticated detail. Made in a glossy satin-like fabric, the gown has a luxurious finish and is styled as a dramatic, feminine, and glamorous evening or occasion wear garment.",
    meta: {
      type: "Couture Eveningwear & Corsetry",
      tools: "Pattern Drafting, Boning Channels, Eyelet Setting, Satin Rolled Hem",
      focus: "Off-Shoulder Fit, Bodice Structuring, Balloon Sleeves, Lace-Up Back",
      year: "2024 / Completed"
    },
    statNotes: [
      { value: "Crimson", label: "Glossy Satin Luster" },
      { value: "Lace-Up", label: "Adjustable Corset Back" },
      { value: "Floor-Length", label: "Sweeping A-Line Skirt" },
      { value: "Puff Sleeve", label: "Voluminous Balloon Sleeves" }
    ],
    process: [
      {
        step: 1,
        title: "Reference Study",
        description: "Selected the gown as the design reference. Studied the off-shoulder neckline, fitted bodice, puff sleeves, full skirt, and back lace-up detail."
      },
      {
        step: 2,
        title: "Pattern Development",
        description: "Drafted the bodice, sleeve, and skirt patterns according to body measurements. Developed the puff sleeve and gathered skirt for the required volume. Added allowances for the back corset and finishing."
      },
      {
        step: 3,
        title: "Fabric Cutting",
        description: "Selected satin fabric for the garment. Marked and cut all pattern pieces accurately. Prepared separate pieces for the bodice, sleeves, and skirt."
      },
      {
        step: 4,
        title: "Garment Construction",
        description: "Constructed and fitted the bodice. Attached the voluminous puff sleeves. Gathered and attached the skirt to the waistline. Added the back lace-up/corset closure."
      },
      {
        step: 5,
        title: "Fitting & Finishing",
        description: "Conducted a test fitting to check the bodice, sleeve volume, and skirt flare. Made necessary fitting adjustments. Completed hemming, pressing, and final finishing."
      },
      {
        step: 6,
        title: "Final Garment",
        description: "Checked the overall silhouette and construction quality. Ensured the final gown achieved the intended dramatic and elegant appearance."
      }
    ],
    gallery: [
      {
        type: "final",
        title: "Final Output — Front View",
        caption: "Dramatic off-shoulder silhouette with structured bodice and voluminous balloon sleeves",
        src: "/images/corset-dress/final-front.jpg",
        aspect: "4:5",
        alt: "Crimson glossy satin off-shoulder corset gown front full view on model"
      },
      {
        type: "final",
        title: "Final Output — Back Lace-Up View",
        caption: "Open-back detail with lace-up corset closure, gathered waistline, and floor-sweeping skirt",
        src: "/images/corset-dress/final-back.jpg",
        aspect: "4:5",
        alt: "Crimson glossy satin corset gown back view showing lace-up corset and sweeping train"
      },
      {
        type: "reference",
        title: "E-Commerce Reference — Front View",
        caption: "Design reference study: Off-shoulder sweetheart neckline, structured corset bodice, and voluminous ballgown skirt",
        src: "/images/corset-dress/reference-front.jpg",
        aspect: "9:16",
        alt: "Reference corset ballgown front view"
      },
      {
        type: "reference",
        title: "E-Commerce Reference — Back View",
        caption: "Design reference study: Open-back lace-up corsetry, gathered waist ease, and dramatic sleeve ribbons",
        src: "/images/corset-dress/reference-back.jpg",
        aspect: "9:16",
        alt: "Reference corset ballgown back view"
      }
    ]
  },

  {
    id: "04",
    slug: "optitex",
    category: "cad",
    categoryLabel: "2D CAD & OPTITEX",
    title: "2D CAD: OPTITEX",
    subtitle: "Digital Patterns, Grading & Marker Planning",
    tagline: "Digital block patterns, grading, and marker planning for a men's shirt",
    folderTabColor: "mustard",
    folderTextColor: "ink",
    badge: "2D CAD & Production",
    thumbnail: "/images/optitex/thumbnail.jpg",
    thumbnailAlt: "Optitex 2D CAD marker and pattern thumbnail",
    overview: "Comprehensive digital apparel production project utilizing Optitex 2D CAD. Built foundation master block patterns for a men's tailored shirt, executed 5-size grading across standard commercial sizing (S through XXL), and generated automated marker plans achieving 84.91% fabric utilization efficiency.",
    focusTags: [
      "Digital Pattern Construction",
      "Grading",
      "Marker Planning",
      "Optitex PDS",
      "Fabric Efficiency"
    ],
    meta: {
      type: "Digital Apparel Engineering",
      tools: "Optitex PDS, Optitex Mark, Digitizer Table",
      focus: "Grade Rules, Grainline Alignment, Marker Optimization",
      year: "2024 / Completed"
    },
    statNotes: [
      { value: "84.91%", label: "Marker Efficiency" },
      { value: "114", label: "Pieces Placed" },
      { value: "110 cm", label: "Fabric Width" },
      { value: "9m 16.22cm", label: "Marker Length" },
      { value: "5 Sizes", label: "Graded (S–XXL)" }
    ],
    process: [
      {
        step: 1,
        title: "Measurement & Reference Study",
        description: "Established comprehensive tech-pack measurement chart (bust/chest, waist, shoulder point-to-point, neck circumference, armhole depth, sleeve length, garment length) based on standard industry specs."
      },
      {
        step: 2,
        title: "Pattern Development",
        description: "Drafted basic bodice, sleeve, and collar blocks digitally in Optitex PDS. Modified into production-ready front placket, back yoke with pleats, sleeve with placket, and collar stand pieces."
      },
      {
        step: 3,
        title: "Pattern Grading",
        description: "Applied coordinate delta grading rules (dX, dY) from Base Size M across the full range (S, M, L, XL, XXL). Verified perimeter growth and armhole-sleeve cap circumference balance across all sizes."
      },
      {
        step: 4,
        title: "Marker Making",
        description: "Loaded graded pieces into Optitex Mark module. Set fabric constraints (110 cm cuttable width, unidirectional grain lines, pairing constraints) and ran nesting algorithms to achieve maximum material economy."
      }
    ],
    measurementTable: {
      baseSize: "M",
      columns: ["Measurement Point", "S", "M (Base)", "L", "XL", "XXL", "Tol (±)"],
      // NOTE: Verify against original slide and extend table with remaining rows as needed
      rows: [
        { point: "Shoulder point to point", s: "15 ½", m: "16", l: "16 ½", xl: "17", xxl: "17 ½", tol: "¼" },
        { point: "Chest @ 1\" from seam", s: "38 ½", m: "40 ½", l: "42 ½", xl: "44 ½", xxl: "46 ½", tol: "½" },
        { point: "Waist across", s: "39", m: "40", l: "41", xl: "42", xxl: "43", tol: "½" },
        { point: "Front length from HPS", s: "26 ¾", m: "27 ¾", l: "28 ¾", xl: "29 ¾", xxl: "30 ¾", tol: "½" },
        { point: "Centre back sleeve length", s: "33 ½", m: "34 ½", l: "35 ½", xl: "36 ½", xxl: "37 ½", tol: "½" },
        { point: "Cuff height", s: "2 ½", m: "2 ½", l: "2 ½", xl: "2 ½", xxl: "2 ½", tol: "¼" }
      ]
    },
    gallery: [
      {
        type: "garment",
        title: "Garment Prototype",
        caption: "Dark tailored button-down shirt on hanger",
        src: "/images/optitex/garment-shirt.png",
        aspect: "3:4",
        alt: "Dark button-down shirt on hanger"
      },
      {
        type: "spec",
        title: "Measurement Specification Slide",
        caption: "Original Optitex measurement chart and tolerance specifications",
        src: "/images/optitex/measurement-chart.png",
        aspect: "4:3",
        alt: "Optitex shirt measurement chart slide"
      },
      {
        type: "cad",
        title: "Digital Block Patterns (Base Size M)",
        caption: "Optitex PDS workspace showing digitized front, back, yoke, sleeve, and collar",
        src: "/images/optitex/digital-block-patterns.png",
        aspect: "4:3",
        alt: "Digital block patterns in Optitex Base Size M"
      },
      {
        type: "cad",
        title: "Graded Pattern Nest (S–XXL)",
        caption: "Color-coded multi-size nested pattern overlay showing graded increments",
        src: "/images/optitex/graded-patterns.png",
        aspect: "4:3",
        alt: "Multi-size graded patterns in Optitex S to XXL"
      },
      {
        type: "marker",
        title: "Marker Order — Sizes Info",
        caption: "Sizes S, M, L, XL, XXL with bundle counts — Order for Marker Making dialog",
        src: "/images/optitex/marker-plan-01.png",
        aspect: "16:9",
        alt: "Optitex marker Sizes Info dialog showing S M L XL XXL bundles"
      },
      {
        type: "marker",
        title: "Marker Order — Pieces Info",
        caption: "114 pieces breakdown: collar, back bodice, sleeve, cuff, placket components",
        src: "/images/optitex/marker-plan-02.jpg",
        aspect: "16:9",
        alt: "Optitex marker Pieces Info dialog showing 114 pattern pieces"
      },
      {
        type: "marker",
        title: "Efficiency Summary Bar",
        caption: "Total:114  Placed:114  Efficiency:84.91%  Width:110cm  Length:9m 16.22cm",
        src: "/images/optitex/marker-efficiency-bar.png",
        aspect: "21:9",
        alt: "Optitex marker efficiency summary bar 84.91%"
      },
      {
        type: "marker",
        title: "Final Optimized Marker Layout",
        caption: "Full marker layout: 114 pieces placed, 9m 16.22cm length, 84.91% efficiency",
        src: "/images/optitex/marker-final.jpg",
        aspect: "21:9",
        alt: "Optitex final marker layout showing 84.91% efficiency"
      }
    ]
  },

  {
    id: "05",
    slug: "iot-liquid-filling",
    category: "iot",
    categoryLabel: "IoT & APPAREL TECH",
    title: "IoT: AUTOMATIC LIQUID FILLING SYSTEM",
    subtitle: "Arduino-Based Automation for Production",
    tagline: "Arduino-based automated water/liquid filling",
    folderTabColor: "charcoal",
    folderTextColor: "cream",
    badge: "Hardware & IoT",
    thumbnail: "/images/iot/thumbnail.jpg",
    thumbnailAlt: "Arduino automatic liquid filling prototype thumbnail",
    overview: "An automatic liquid filling system for industrial applications using an Arduino board. It automates filling containers, reducing manual effort, spillage, and inconsistency. A DC motor controls liquid flow while a servo motor operates the valve mechanism. The Arduino starts the filling and stops the flow once the required level or time is reached. It is suited to food, beverage, and pharmaceutical industries.",
    components: [
      "Arduino Uno R3",
      "HC-SR04 Ultrasonic Sensor",
      "DC Water Pump Motor (5V-12V)",
      "SG90 Micro Servo Motor",
      "Breadboard & Jumper Harness",
      "9V DC Power Supply / Battery"
    ],
    objectives: [
      "Design and develop an Arduino-based automatic liquid filling system",
      "Find the accurate distance and threshold point where the ultrasonic sensor acts",
      "Write and compile robust, timing-accurate microcontroller C++ code",
      "Build the breadboard circuit and calibrate motor response latency",
      "Construct the final physical test rig and validate volumetric repeatability"
    ],
    meta: {
      type: "Embedded Prototyping & Industrial Automation",
      tools: "Arduino IDE, C++, Ultrasonic Sensors, Servo Control",
      focus: "Sensor Thresholding, Actuation Speed, Fluid Repeatability",
      year: "2024 / Completed"
    },
    statNotes: [
      { value: "Arduino", label: "Atmega328P Core" },
      { value: "HC-SR04", label: "Sonar Level Trigger" },
      { value: "100%", label: "Hands-Free Dispense" }
    ],
    process: [
      {
        step: 1,
        title: "System Design & Logic Flow",
        description: "Mapped the operational state machine: standby scan -> container detect at threshold distance (<10cm) -> open servo valve & trigger DC pump -> timer/level cutoff -> close valve -> reset."
      },
      {
        step: 2,
        title: "Circuitry & Power Distribution",
        description: "Wired ultrasonic trig/echo pins to digital I/O, tied servo PWM signal line, and isolated pump inductive back-EMF using diode protection on breadboard."
      },
      {
        step: 3,
        title: "Firmware Development",
        description: "Authored C++ firmware in Arduino IDE with debounced distance calculations, microsecond pulse triggers, and fail-safe timeout routines to prevent liquid overfill."
      },
      {
        step: 4,
        title: "Mechanical Rig Assembly",
        description: "Constructed structural stand holding fluid reservoir, nozzle tube clamped to servo arm, and ultrasonic transceiver aimed perpendicular to target container."
      },
      {
        step: 5,
        title: "Testing & Volumetric Validation",
        description: "Ran 50 continuous liquid dispense cycles, measuring repeatability down to ±2ml tolerance across varying container heights."
      }
    ],
    gallery: [
      {
        type: "circuit",
        title: "Arduino Circuit Schematic",
        caption: "Wiring schematic showing Arduino Uno, HC-SR04 sensor, servo, DC pump, and power distribution (dark background)",
        src: "/images/iot/circuit-diagram.jpg",
        aspect: "16:9",
        alt: "Arduino automatic liquid filling circuit schematic diagram"
      },
      {
        type: "prototype",
        title: "Physical Working Prototype",
        caption: "Breadboard setup, fluid reservoir, sensor alignment, and active filling nozzle",
        src: "/images/iot/prototype.jpg",
        aspect: "3:2",
        alt: "Working prototype physical setup of Arduino liquid filling system"
      }
    ]
  },

  {
    id: "06",
    slug: "sabyasachi-magazine",
    category: "editorial",
    categoryLabel: "EDITORIAL & IDM",
    title: "FC IDM MAGAZINE: SABYASACHI",
    subtitle: "Editorial Design for the House of Sabyasachi",
    tagline: "Editorial design for the house of Sabyasachi",
    folderTabColor: "mustard",
    folderTextColor: "ink",
    badge: "Editorial & Publication",
    thumbnail: "/images/magazine/thumbnail-cover.jpg",
    thumbnailAlt: "Sabyasachi editorial magazine thumbnail",
    overview: "A comprehensive publication and editorial design project analyzing and honoring the heritage couture of the House of Sabyasachi. Incorporating rigorous primary and secondary fashion journalism, typographic hierarchy, editorial grid layouts, and archival photo curation.",
    meta: {
      type: "Editorial Direction & Magazine Design",
      tools: "Adobe InDesign, Illustrator, Photoshop, Typography Specimen",
      focus: "Editorial Grids, Visual Weight Hierarchy, Brand Narrative",
      year: "2024 / Completed"
    },
    statNotes: [
      { value: "7-Stage", label: "Research to Book" },
      { value: "A / B / C / D", label: "Visual Hierarchy" },
      { value: "4 Eras", label: "Heritage Timeline" }
    ],
    processFlow: [
      { step: "01", name: "SPD", desc: "Special Purpose Document" },
      { step: "02", name: "Resource Center", desc: "Archival Literature" },
      { step: "03", name: "Primary Research", desc: "Interviews & Outlets" },
      { step: "04", name: "Secondary Research", desc: "Couture History" },
      { step: "05", name: "Fonts & Images", desc: "Typography Pairing" },
      { step: "06", name: "Layouts & Spreads", desc: "Editorial Grids" },
      { step: "07", name: "Final Book", desc: "Print & Binding" }
    ],
    typographySpecimen: {
      primary: {
        name: "Libre Baskerville",
        designers: "Pablo Impallari & Rodrigo Fuenzalida (2012)",
        classification: "Open-source Serif / Web Optimized",
        weights: ["Regular", "Italic", "Bold"],
        role: "Primary Headings, Expressive Drop Caps, Cover Title",
        sample: "SABYASACHI — A Journey Through Time, Heritage, and Bengal Craftsmanship."
      },
      secondary: {
        name: "Minion Pro (Fallback: Crimson Pro)",
        designers: "Robert Slimbach for Adobe Systems (1992)",
        classification: "Transitional Neo-Renaissance Serif",
        weights: ["Regular", "Italic", "Semibold", "Semibold Italic", "Bold", "Bold Italic"],
        role: "Crossheads, Editorial Body Copy, Annotations & Citations",
        sample: "Bridging regal vintage Indian aesthetics with contemporary haute couture sensibilities."
      }
    },
    visualHierarchy: {
      textHierarchy: [
        { level: "1. Heading", spec: "Libre Baskerville Bold, Display Size, Tight Tracking" },
        { level: "2. Crossheads", spec: "Minion Pro Semibold, 18-22pt" },
        { level: "3. Body Text", spec: "Minion Pro Regular, 10.5pt on 15pt leading" },
        { level: "4. Citations & Captions", spec: "Minion Pro Italic, 8.5pt with subtle indent" },
        { level: "5. Folio & Page Numbers", spec: "Space Mono uppercase, letter-spaced outer margin" }
      ],
      imageHierarchy: [
        { badge: "A", title: "Hero Image", desc: "Full-bleed or multi-column anchor image commanding 60%+ visual entry point" },
        { badge: "B", title: "Secondary Subject", desc: "Supporting model or craft detail highlighting textile weave and embroidery" },
        { badge: "C", title: "Tertiary Context", desc: "Studio backstage photograph or historical sketch providing narrative depth" },
        { badge: "D", title: "Micro Accent", desc: "Jewelry macro, raw pigment swatches, or artisanal tool study" }
      ]
    },
    timelineSpreads: [
      { era: "1999–2005", title: "The Founding Years", desc: "Graduation from NIFT Kolkata, launch of the eponymous label with three workers, and early runway acclaim." },
      { era: "2006–2010", title: "Global Recognition & Bridal Couture", desc: "Debut at New York Fashion Week, Milan Fashion Week, and redefining the Indian bridal landscape." },
      { era: "2011–2017", title: "Diversification & Collaborations", desc: "Fine jewelry launch, luxury collaborations with Christian Louboutin and Asian Paints, cinematic costume design." },
      { era: "2018–Present", title: "Global Expansion & Legacy", desc: "Flagship boutique in New York's West Village, Bergdorf Goodman partnership, and establishing global heritage luxury." }
    ],
    gallery: [
      {
        type: "cover",
        title: "Magazine Cover",
        caption: "SABYASACHI by PRATHYAYA — Editorial Cover Spread",
        src: "/images/magazine/cover.jpg",
        aspect: "4:5",
        alt: "Sabyasachi magazine cover editorial spread"
      },
      {
        type: "spread",
        title: "Book Overview Spread",
        caption: "SPD publication overview with USPs, target audience, and key editorial features",
        src: "/images/magazine/spread-book-info.jpg",
        aspect: "4:3",
        alt: "Sabyasachi magazine book info and overview spread"
      },
      {
        type: "spread",
        title: "The Legacy Spread",
        caption: "The Legacy of Sabyasachi: A Journey Through Time (1999–Present Timeline Spread)",
        src: "/images/magazine/spread-legacy.jpg",
        aspect: "16:9",
        alt: "The Legacy of Sabyasachi timeline editorial spread"
      },
      {
        type: "spread",
        title: "Womenswear Editorial Spread",
        caption: "Womenswear Couture Spread: Typographic pacing and A/B/C/D image grid",
        src: "/images/magazine/spread-womenswear.jpg",
        aspect: "16:9",
        alt: "Sabyasachi womenswear editorial spread"
      },
      {
        type: "process",
        title: "Design Process & Spreads",
        caption: "SPD to final book research workflow diagram",
        src: "/images/magazine/design-process.jpg",
        aspect: "16:9",
        alt: "Magazine design process research sheet"
      },
      {
        type: "specimen",
        title: "Typographic Architecture",
        caption: "Type specimen sheet: Libre Baskerville & Minion Pro hierarchy",
        src: "/images/magazine/typography.jpg",
        aspect: "16:9",
        alt: "Typographic specimen analysis sheet"
      }
    ]
  },

  {
    id: "07",
    slug: "clo-3d",
    category: "cad",
    categoryLabel: "3D CAD & SIMULATION",
    title: "CLO 3D: DIGITAL SIMULATION",
    subtitle: "Virtual Prototyping & Avatar Draping",
    tagline: "3D Garment Simulation, digital draping, and virtual runway prototyping",
    folderTabColor: "mustard",
    folderTextColor: "ink",
    badge: "Ongoing Research",
    isComingSoon: true,
    thumbnail: "/images/clo3d/thumbnail.jpg",
    thumbnailAlt: "CLO 3D virtual simulation placeholder thumbnail",
    overview: "Currently exploring advanced 3D virtual prototyping, digital fabric physics simulation, tension/strain heat maps, and animated avatar draping in CLO 3D. Eliminating physical sample waste through photorealistic digital twins.",
    meta: {
      type: "3D Apparel Simulation",
      tools: "CLO 3D, Blender, Digital Textile Shader",
      focus: "Avatar Fitting, Fabric Particle Distance, Dynamic Drape",
      year: "2024–2025 / In Progress"
    }
  }
];
