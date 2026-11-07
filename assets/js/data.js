/* ==========================================================================
   PORTFOLIO DATA — add, remove or edit projects here.

   Every project field:
     id          unique slug (letters, numbers, dashes)
     title       project name
     category    small badge on the card
     group       filter tab it belongs to: "saas" | "apps" | "websites"
     description one or two sentences
     live        live URL ("" hides the Live Demo button)
     repo        GitHub URL ("" hides the GitHub button)
     image       screenshot path ("" or a missing file shows a placeholder)
     tech        technology tags. Leave [] until you have confirmed the stack.
     label       optional status badge, e.g. "Concept" or "Demo project"

   Screenshots: 1200 x 750 px (16:10) WebP or JPG works best.
   Save them in assets/img/projects/ and point `image` at the file.
   If an image is missing or fails to load, a clean placeholder is shown instead.
   ========================================================================== */

window.PORTFOLIO_DATA = {

  /* ---------- Featured projects (the main showcase) ---------- */
  featured: [
    {
      id: "gympulse",
      title: "GymPulse",
      category: "SaaS / Gym Management Platform",
      group: "saas",
      description: "A gym management SaaS platform designed to help gym owners manage their operations and digital workflows.",
      live: "https://gympulse.cloud",
      repo: "",
      image: "", // screenshot: save as assets/img/projects/gympulse.webp, then put that path here
      tech: ["React", "Next.js"], // confirm or correct
      label: ""
    },
    {
      id: "gympulse-crm",
      title: "GymPulse Sales CRM",
      category: "CRM / Business Dashboard",
      group: "saas",
      description: "A sales CRM interface built for managing leads and sales-related workflows within the GymPulse ecosystem.",
      live: "https://crm.gympulse.cloud/",
      repo: "",
      image: "", // screenshot: save as assets/img/projects/gympulse-crm.webp, then put that path here
      tech: [], // add the confirmed stack
      label: ""
    },
    {
      id: "the-aviyaan",
      title: "The Aviyaan",
      category: "Business Website / Hospitality",
      group: "websites",
      description: "A website developed for a hotel and wellness resort, presenting its services, experiences, and brand identity.",
      live: "https://theaviyaan.com",
      repo: "",
      image: "", // screenshot: save as assets/img/projects/the-aviyaan.webp, then put that path here
      tech: [],
      label: ""
    },
    {
      id: "aviyaan-gallery",
      title: "Aviyaan Gallery Showcase",
      category: "Web Application / Gallery",
      group: "apps",
      description: "A digital gallery showcase for presenting visual content and venue-related experiences.",
      live: "https://venues.theaviyaan.com/",
      repo: "",
      image: "", // screenshot: save as assets/img/projects/aviyaan-gallery.webp, then put that path here
      tech: [],
      label: ""
    },
    {
      id: "qr-suite",
      title: "QR Management Suite",
      category: "Web Application / QR Management",
      group: "apps",
      description: "A QR management web application built for managing QR-related digital workflows.",
      live: "https://qrsuite.theaviyaan.com/",
      repo: "",
      image: "", // screenshot: save as assets/img/projects/qr-suite.webp, then put that path here
      tech: [],
      label: ""
    },
    {
      id: "aura-creations",
      title: "Aura Creations",
      category: "Business Website / Creative Brand",
      group: "websites",
      description: "A responsive website concept for a creative brand, showcasing its services and visual identity.",
      live: "https://lucifer01430.github.io/aura-creation-demo/",
      repo: "https://github.com/lucifer01430/aura-creation-demo",
      image: "assets/img/projects/aura-creations.webp",
      tech: ["HTML5", "CSS3", "JavaScript"],
      label: "Concept"
    },
    {
      id: "jgd-hostel-pg",
      title: "JGD Hostel PG",
      category: "Business Website / Hostel & Accommodation",
      group: "websites",
      description: "A website concept for a hostel and PG accommodation business, presenting its facilities and information.",
      live: "https://lucifer01430.github.io/jgd-hostel-pg-demo/",
      repo: "https://github.com/lucifer01430/jgd-hostel-pg-demo",
      image: "assets/img/projects/jgd-hostel-pg.webp",
      tech: ["HTML5", "CSS3", "JavaScript"],
      label: "Concept"
    }
  ],

  /* ---------- More Experiments & Projects (smaller cards) ---------- */
  additional: [
    {
      id: "shikshabhavan",
      title: "Shikshabhavan Home Tuition",
      category: "Website prototype",
      description: "A landing website prototype for a home tuition service, presenting tutoring options for students and parents.",
      live: "https://lucifer01430.github.io/shikshabhavan-home-tuition/",
      repo: "https://github.com/lucifer01430/shikshabhavan-home-tuition",
      image: "assets/img/projects/shikshabhavan.webp",
      tech: ["Tailwind CSS", "JavaScript"],
      label: "Prototype"
    },
    {
      id: "sia-air-conn",
      title: "Sia Air Conn",
      category: "Business website",
      description: "A service website for an AC repair and maintenance business.",
      live: "https://lucifer01430.github.io/SiaAirCon/",
      repo: "https://github.com/lucifer01430/SiaAirCon",
      image: "assets/img/projects/sia-air-conn.webp",
      tech: ["Bootstrap", "GSAP"],
      label: ""
    },
    {
      id: "impression-wedding",
      title: "Impression Wedding",
      category: "Business website",
      description: "A website for a wedding and events planning brand.",
      live: "https://lucifer01430.github.io/ImpressionWedding/",
      repo: "https://github.com/lucifer01430/ImpressionWedding",
      image: "assets/img/projects/impression-wedding.webp",
      tech: ["HTML5", "CSS3", "JavaScript"],
      label: ""
    },
    {
      id: "hisaab-hub",
      title: "Hisaab HUB",
      category: "Web app / PWA",
      description: "An offline-first personal finance tracker with a calendar view, spending insights and monthly PDF reports.",
      live: "https://lucifer01430.github.io/hisabhub/",
      repo: "https://github.com/lucifer01430/hisabhub",
      image: "assets/img/projects/hisaab-hub.webp",
      tech: ["Bootstrap", "Chart.js", "jsPDF", "PWA"],
      label: ""
    },
    {
      id: "bike-expense-tracker",
      title: "Bike Expense Tracker",
      category: "Web app / PWA",
      description: "An offline-first app for logging fuel, service and upgrade costs for a bike, with charts and insights.",
      live: "https://lucifer01430.github.io/bike-expense-tracker/",
      repo: "https://github.com/lucifer01430/bike-expense-tracker",
      image: "assets/img/projects/bike-expense-tracker.webp",
      tech: ["Bootstrap", "Chart.js", "PWA"],
      label: ""
    },
    {
      id: "python-mastery",
      title: "Python Mastery",
      category: "Learning platform",
      description: "A free, beginner-friendly Python learning site with chapter notes, exercises and projects.",
      live: "https://lucifer01430.github.io/python-mastery-with-harsh/",
      repo: "https://github.com/lucifer01430/python-mastery-with-harsh",
      image: "assets/img/projects/python-mastery.webp",
      tech: ["Bootstrap", "AOS"],
      label: ""
    },
    {
      id: "6tv-bharat",
      title: "6TV Bharat",
      category: "News portal theme",
      description: "A static frontend theme for a Hindi news portal, with category, article, live TV and gallery pages.",
      live: "https://lucifer01430.github.io/6tv_bharat/",
      repo: "https://github.com/lucifer01430/6tv_bharat",
      image: "assets/img/projects/6tv-bharat.webp",
      tech: ["Bootstrap", "JavaScript"],
      label: "Demo project"
    },
    {
      id: "lalalaphing",
      title: "Lalalaphing",
      category: "Brand website",
      description: "A brand website for a DIY laphing kit business in Delhi NCR.",
      live: "https://lucifer01430.github.io/Lalalaphing/",
      repo: "https://github.com/lucifer01430/Lalalaphing",
      image: "assets/img/projects/lalalaphing.webp",
      tech: ["HTML5", "CSS3", "JavaScript"],
      label: ""
    },
    {
      id: "html-mdn",
      title: "HTML MDN Website",
      category: "Documentation site",
      description: "A beginner-friendly HTML guide that rewrites MDN's HTML documentation in a simpler format.",
      live: "https://lucifer01430.github.io/html_mdn/",
      repo: "https://github.com/lucifer01430/html_mdn",
      image: "assets/img/projects/html-mdn.webp",
      tech: ["HTML5", "CSS3", "JavaScript"],
      label: ""
    }
  ],

  /* ---------- Code & Experiments (GitHub repositories) ----------
     Stacks below are taken from each repository's README / code.
     No stars, forks or commit counts are shown on purpose. */
  repos: [
    {
      id: "ai-notes",
      title: "AI Notes Management System",
      repoName: "ai-notes-management-system",
      description: "A full-stack notes workspace with AI-generated summaries and semantic search, built as an internship assignment.",
      repo: "https://github.com/lucifer01430/ai-notes-management-system",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel", "MySQL", "Gemini AI"]
    },
    {
      id: "pdf-compressor",
      title: "PDF Compressor Web App",
      repoName: "pdf-compressor-webapp",
      description: "A single-page app that compresses large PDFs locally with selectable compression profiles, so files never leave your machine.",
      repo: "https://github.com/lucifer01430/pdf-compressor-webapp",
      tech: ["Python", "Flask", "Bootstrap", "Ghostscript"]
    },
    {
      id: "grow-up-my-tree",
      title: "Grow Up My Tree",
      repoName: "gmt-website-prototype",
      description: "A frontend prototype for a tree-planting platform, covering the product catalogue, product details, cart and contact pages.",
      repo: "https://github.com/lucifer01430/gmt-website-prototype",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"]
    },
    {
      id: "whatsapp-ocr",
      title: "WhatsApp Screenshot OCR",
      repoName: "whatsapp-screenshot-ocr",
      description: "An admin dashboard that reads names and phone numbers from WhatsApp screenshots and exports them to Excel.",
      repo: "https://github.com/lucifer01430/whatsapp-screenshot-ocr",
      tech: ["Python", "Django", "EasyOCR", "OpenCV", "Pandas"]
    }
  ],

  /* ---------- Skills ----------
     icon: "si-…" = brand icon (Simple Icons), "i-…" = generic icon (Lucide).
     color: brand colour shown on hover (optional). */
  skills: [
    {
      group: "Frontend",
      icon: "i-layout-dashboard",
      items: [
        { name: "HTML5", icon: "si-html5", color: "#E34F26" },
        { name: "CSS3", icon: "si-css", color: "#8D6CE0" },
        { name: "JavaScript", icon: "si-javascript", color: "#F7DF1E" },
        { name: "React.js", icon: "si-react", color: "#61DAFB" },
        { name: "Next.js", icon: "si-nextdotjs", color: "#FFFFFF" },
        { name: "Bootstrap", icon: "si-bootstrap", color: "#9B6FE0" },
        { name: "Responsive UI Development", icon: "i-monitor-smartphone", color: "" }
      ]
    },
    {
      group: "Backend",
      icon: "i-server",
      items: [
        { name: "PHP", icon: "si-php", color: "#8F94D6" },
        { name: "Python", icon: "si-python", color: "#5A9FD4" },
        { name: "Django", icon: "si-django", color: "#44B78B" },
        { name: "Node.js / Express.js", icon: "si-nodedotjs", color: "#5FA04E" },
        { name: "REST API Development", icon: "i-workflow", color: "" }
      ]
    },
    {
      group: "Database",
      icon: "i-database",
      items: [
        { name: "MySQL", icon: "si-mysql", color: "#5B9BD5" },
        { name: "MongoDB", icon: "si-mongodb", color: "#47A248" },
        { name: "MariaDB", icon: "si-mariadb", color: "#C49A6C" }
      ]
    },
    {
      group: "Tools & Workflow",
      icon: "i-wrench",
      items: [
        { name: "Git", icon: "si-git", color: "#F05032" },
        { name: "GitHub", icon: "si-github", color: "#FFFFFF" },
        { name: "VS Code", icon: "i-code-xml", color: "#3EA6F0" },
        { name: "Codex", icon: "i-square-terminal", color: "" },
        { name: "Antigravity", icon: "i-orbit", color: "" }
      ]
    }
  ]
};
