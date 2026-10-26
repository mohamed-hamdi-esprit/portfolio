/**
 * PROJECTS DATA SOURCE
 * 
 * To add a new project to your portfolio:
 * 1. Place your preview picture in `public/images/your-project.jpg`
 * 2. Add a new object entry below in the PROJECTS array.
 */

export const PROJECTS = [
  {
    id: "monitoring-telemetry-system",
    title: "System Telemetry & Predictive Log Monitoring",
    category: "dev",
    categoryLabel: "Observability & DevOps",
    summary: "Production monitoring infrastructure featuring live Grafana system gauges and a custom Python predictive log analyzer built with Graylog and Rsyslog.",
    description: "An end-to-end telemetry and log observability system deployed for infrastructure monitoring at AsteelFlash. Combines a Grafana dashboard monitoring memory, CPU, disk, and bidirectional network throughput with a custom Python terminal tool that watches structured system logs in real time, classifies event severities (over 270k+ entries), and predicts upcoming failure events with automated alerting.",
    tags: ["Grafana", "Python", "Graylog", "Rsyslog", "Linux", "GNS3"],
    image: "/images/monitoring-system.png",
    link: "", // Private / Internal project; leave empty to hide repo button
    features: [
      "Real-time Grafana telemetry dashboard tracking memory usage, disk utilization, idle CPU, and network download/upload metrics",
      "Custom Python Live Log Dashboard & Prediction engine analyzing /var/log/structured.log in real time",
      "Dynamic severity breakdown categorization across info, warning, error, notice, and debug levels (274k+ entries)",
      "Predictive event anomaly detection estimating upcoming error probabilities and overdue failure intervals",
      "Rsyslog & Graylog log forwarding pipeline across distributed Linux and network nodes"
    ]
  },
  {
    id: "autoloc-rental-platform",
    title: "AutoLoc — Vehicle Rental Platform",
    category: "dev",
    categoryLabel: "Enterprise Software & Spring Boot",
    summary: "Robust multi-agency vehicle rental management platform engineered with Spring Boot, Java, and MySQL.",
    description: "Plateforme robuste développée avec Spring Boot pour la gestion centralisée et multi-agences de location de véhicules. Permet aux clients de rechercher, réserver et gérer leurs locations tout en offrant aux agents d'agence un tableau de bord complet pour la gestion de flotte et des réservations.",
    tags: ["Spring Boot", "Java", "MySQL", "REST API", "MVC Architecture"],
    image: "/images/desktop-app.jpg",
    link: "https://github.com/mohamed-hamdi-esprit/AutoLoc",
    features: [
      "Centralized multi-agency vehicle fleet inventory, tracking, and reservation workflows",
      "Role-based permission architecture distinguishing clients from agency managers",
      "Spring Boot backend services with relational schema mapping and data integrity validations"
    ]
  },
  {
    id: "fullstack-web-application",
    title: "Full-Stack Web Management Platform",
    category: "dev",
    categoryLabel: "Web Engineering & Symfony",
    summary: "Full-stack web application built with Symfony, HTML5 & CSS3, featuring secure authentication and database persistence.",
    description: "Web application developed during software engineering coursework at ESPRIT. Implements clean MVC architecture with Symfony, Twig templates, relational database modeling, and secure form validation.",
    tags: ["Symfony", "PHP", "Angular", "HTML5", "CSS3", "MySQL"],
    image: "/images/webapp.jpg",
    link: "", // Set to your GitHub repo link once uploaded
    features: [
      "Structured MVC backend architecture utilizing Symfony framework components",
      "Dynamic data queries and relational persistence layer with Doctrine ORM",
      "Responsive frontend interface tailored for cross-device usability"
    ]
  },
  {
    id: "sakura-shop-obsidian",
    title: "Sakura Shop — Obsidian Black Product Sheet",
    category: "des",
    categoryLabel: "Brand & Graphic Design",
    summary: "Product showcase sheet for a custom anime-inspired t-shirt brand, featuring hand-illustrated manga artwork and bilingual Japanese typography.",
    description: "Designed a premium product presentation sheet for Sakura Shop, a Tunisian streetwear brand specialising in hand-illustrated, anime-inspired custom t-shirts. The design fuses editorial dark-mode aesthetics with manga culture: large bold typography, wabi-sabi concrete textures, and bilingual Japanese text (モンキー・D・ルフィ). All print artwork was hand-drawn and translated into high-durability heat transfer prints.",
    tags: ["Photoshop", "Illustrator", "Typography", "Print Design", "Branding"],
    image: "/images/design/sakura-obsidian.jpg",
    link: "",
    features: [
      "Full-bleed product sheet layout with editorial typography hierarchy",
      "Hand-illustrated anime print (One Piece — Gear 5 Luffy) adapted for fabric printing",
      "Bilingual Japanese & Latin typography system",
      "Details section covering tissue quality, print durability, and brand identity"
    ]
  },
  {
    id: "sakura-shop-new-collection",
    title: "Sakura Shop — New Collection Launch Poster",
    category: "des",
    categoryLabel: "Brand & Graphic Design",
    summary: "Fashion launch poster for Sakura Shop's new anime streetwear collection, blending model photography with hand-crafted graphic overlays.",
    description: "Campaign poster for the Sakura Shop new collection drop. Combines real model photography (front & back t-shirt views) with dark floral sakura petal backgrounds, rough-edged text overlays, sticker collateral, and a bold 'NEW COLLECTION' title treatment. Designed for Instagram & print formats.",
    tags: ["Photoshop", "Compositing", "Fashion Design", "Social Media", "Branding"],
    image: "/images/design/sakura-new-collection.jpg",
    link: "",
    features: [
      "Photo compositing of front/back model shots on custom dark floral background",
      "Rough-texture brush lettering for 'NEW COLLECTION' headline",
      "Sticker design integration as additional merchandising collateral",
      "Dual-purpose layout optimised for Instagram feed and print"
    ]
  },
  {
    id: "sissa-sissa-logo",
    title: "Sissa Sissa — Food Brand Logo & Identity",
    category: "des",
    categoryLabel: "Logo & Brand Identity",
    summary: "Circular badge logo designed for a homemade food brand, combining a cute cartoon mascot with vintage stamp aesthetics.",
    description: "Brand identity design for Sissa Sissa, a homemade food business. The logo uses a vintage circular badge format in warm pink with cream-gold lettering, centred around a hand-drawn cartoon mascot — a chef girl pushing a cheese-laden wheelbarrow. The design conveys warmth, craftsmanship, and approachability while remaining versatile across packaging, social media, and signage.",
    tags: ["Illustrator", "Photoshop", "Logo Design", "Brand Identity", "Mascot Design"],
    image: "/images/design/sissa-sissa-logo.jpg",
    link: "",
    features: [
      "Circular badge logo mark with hand-lettered curved typography",
      "Original cartoon mascot character — chef girl with wheelbarrow",
      "Warm pink & cream-gold palette evoking artisan food culture",
      "Scalable vector format ready for packaging, print, and digital"
    ]
  },
  {
    id: "halloween-party-ticket",
    title: "ESPR — Halloween Party Event Ticket",
    category: "des",
    categoryLabel: "Event Design & Print",
    summary: "Spooky event ticket design for the Esprit Student Committee Halloween Trick-or-Treat Party, featuring gothic typography and Halloween illustrations.",
    description: "Official event ticket design commissioned by the Esprit Student Committee for their annual Halloween Trick-or-Treat Party. The ticket features a dark gothic layout with spider-web textures, ghost illustrations, a detachable stub with pumpkin embellishment, and horror-font typography. Designed for print distribution — Regular Release batch.",
    tags: ["Photoshop", "Illustrator", "Event Design", "Print", "Typography"],
    image: "/images/design/halloween-ticket.jpg",
    link: "",
    features: [
      "Dual-panel ticket layout with perforated stub stub section",
      "Gothic Halloween typography combining horror fonts and serif details",
      "Spider-web and ghost decorative illustration elements",
      "Print-ready layout for physical ticket distribution (Esprit, Bloc E)"
    ]
  },
  {
    id: "halloween-soldout-announcement",
    title: "ESPR — Halloween Blind Release SOLD OUT",
    category: "des",
    categoryLabel: "Social Media & Motion Design",
    summary: "High-energy sold-out announcement graphic for the ESPR Halloween event, designed for Instagram Story format with bold brush lettering.",
    description: "Urgent-feel social media announcement created for the Esprit Student Committee's Halloween event Blind Release sell-out. Uses aggressive brush-stroke red overlays, double-layered 'SOLD OUT' type treatment (outline + handwritten script), and a repeating caution-tape ticket strip at the centre. Designed as an Instagram Story (9:16) for maximum scroll-stopping impact.",
    tags: ["Photoshop", "Social Media", "Typography", "Instagram Story", "Event Design"],
    image: "/images/design/halloween-soldout.jpg",
    link: "",
    features: [
      "9:16 Instagram Story format optimised for mobile-first viewing",
      "Layered 'SOLD OUT' type system combining outline and handwritten script",
      "Red brush-stroke texture overlays for urgency and energy",
      "Embedded ticket strip with repeating sold-out caution tape motif"
    ]
  }
];
