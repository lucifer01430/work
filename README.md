# Harsh Pandey — Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Portfolio-blue?style=for-the-badge&logo=googlechrome&logoColor=white)](https://lucifer01430.github.io/Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-lucifer01430-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lucifer01430)
[![Email](https://img.shields.io/badge/Email-Contact%20Me-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:harshpandeylucifer@gmail.com)

A high-performance, responsive personal developer portfolio engineered to showcase full-stack projects, SaaS platforms, and client solutions. Built with clean web standards, modern design principles, and zero heavy build tooling.

---

## 📌 Overview

This repository hosts the source code for **Harsh Pandey's** personal developer portfolio. The website features an interactive developer-centric aesthetic with terminal-inspired elements, smooth scroll interactions, dynamic project filtering, and clean browser mockups.

- **Live URL:** [https://lucifer01430.github.io/Portfolio/](https://lucifer01430.github.io/Portfolio/)
- **Author:** Harsh Pandey (Full Stack Web Developer)

---

## ✨ Key Features

- **⚡ Lightweight & Zero-Build Architecture**  
  Built with native web standards—no bundlers, frameworks, or `npm` installations required. Runs seamlessly right out of the box.

- **💻 Interactive Code & Terminal UI**  
  Features a session-aware terminal preloader (with skip controls and accessibility fallbacks) and a code editor hero section.

- **📂 Dynamic Project Showcase & Filtering**  
  Filterable project catalog (SaaS platforms, web applications, and websites) powered by structured data objects.

- **🎨 Tailored Design System**  
  Deep dark mode palette with glowing accents, custom typography (*Bricolage Grotesque* and *JetBrains Mono*), and fluid CSS micro-interactions.

- **📱 Fully Responsive & Cross-Device Optimized**  
  Fluid layouts verified across mobile, tablet, and widescreen desktop breakpoints without layout shifts or horizontal overflow.

- **♿ Accessibility & Performance First**  
  Semantic HTML5 structure, skip navigation links, visible keyboard focus indicators, `prefers-reduced-motion` compliance, and lazy-loaded media assets.

- **🔍 Comprehensive SEO & Social Media Metadata**  
  Pre-configured Open Graph tags, Twitter cards, and JSON-LD structured data for rich previews and search discoverability.

---

## 🛠️ Tech Stack

| Domain | Technologies / Assets |
|---|---|
| **Core** | Semantic HTML5, Modern CSS3 (Grid & Custom Properties), JavaScript (ES6+), jQuery |
| **Typography** | Bricolage Grotesque (Headings & Body), JetBrains Mono (Code & Terminal) |
| **Icons** | Lucide Icons & Simple Icons (Optimized SVG sprite) |
| **Asset Delivery** | Self-hosted web fonts and local assets for offline resilience and fast load times |

---

## 📂 Project Structure

```
harsh-portfolio/
├── index.html                  # Core markup, SEO/meta tags, and inline SVG icon sprite
├── .nojekyll                   # GitHub Pages configuration
├── README.md                   # Project documentation
└── assets/
    ├── css/
    │   └── style.css           # Design tokens, layout systems, component styling, animations
    ├── js/
    │   ├── config.js           # Site configuration (contact info, feature toggles)
    │   ├── data.js             # Portfolio content (projects, experience, repositories, tech tags)
    │   └── main.js             # Application logic, dynamic rendering, and UI interactions
    ├── vendor/
    │   └── jquery-4.0.0.min.js # Self-hosted jQuery
    ├── fonts/                  # Self-hosted WOFF2 font files
    └── img/                    # Optimized image assets & project thumbnails
```

---

## 🚀 Running Locally

Because this project is built with vanilla web technologies, no build step or package manager is necessary:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lucifer01430/Portfolio.git
   cd Portfolio
   ```

2. **Open directly or serve locally:**
   - **Directly:** Double-click `index.html` to open in any web browser.
   - **Using Python HTTP Server:**
     ```bash
     python3 -m http.server 8080
     ```
     Navigate to `http://localhost:8080` in your browser.
   - **Using Node / NPX:**
     ```bash
     npx serve .
     ```

---

## ⚙️ Configuration & Content Architecture

The portfolio is architected to separate structure, style, and content:

- **`assets/js/config.js`**: Global site settings including contact details, social links, preloader behavior, and availability status.
- **`assets/js/data.js`**: Central data store for featured projects, experiments, open-source repositories, and technology skillsets.

---

## 📬 Contact & Connect

- **Portfolio:** [lucifer01430.github.io/Portfolio](https://lucifer01430.github.io/Portfolio/)
- **GitHub:** [@lucifer01430](https://github.com/lucifer01430)
- **Email:** [harshpandeylucifer@gmail.com](mailto:harshpandeylucifer@gmail.com)

---

## 📄 License & Credits

- Typography: [Bricolage Grotesque](https://github.com/ateliertriay/bricolage) & [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (SIL Open Font License)
- Icons: [Lucide](https://lucide.dev) (ISC) & [Simple Icons](https://simpleicons.org) (CC0)
- JavaScript Library: [jQuery](https://jquery.com) (MIT)
