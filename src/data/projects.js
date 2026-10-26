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
    id: "aurora-brand-identity",
    title: "Brand Identity, Badges & Poster Design",
    category: "des",
    categoryLabel: "Brand & Graphic Design",
    summary: "Complete visual identity systems, promotional posters, event badges, and brand assets created for freelance clients.",
    description: "Comprehensive branding and vector graphic design work delivered for commercial and freelance clients. Covers custom vector logo marks, typography pairings, event posters, and digital promotional collateral.",
    tags: ["Illustrator", "Photoshop", "Branding", "Vector Art", "Typography"],
    image: "/images/branding.jpg",
    link: "https://www.behance.net/",
    features: [
      "Vector logos and badge emblems designed in Adobe Illustrator",
      "Editorial and event posters produced with Photoshop & advanced layout principles",
      "Print-ready assets prepared for commercial merchandise and digital publishing"
    ]
  },
  {
    id: "lumina-motion-showreel",
    title: "Motion Graphics & Video Editing",
    category: "des",
    categoryLabel: "Motion & Video Production",
    summary: "Dynamic video editing, kinetic typography, and motion graphic sequences created with Premiere Pro and After Effects.",
    description: "Collection of video editing and motion design projects created for online promotions, social channels, and client reels. Combines rhythmic timeline cuts, color grading, and dynamic title motion.",
    tags: ["Premiere Pro", "After Effects", "Motion Design", "Color Grading", "Video Editing"],
    image: "/images/motion-video.jpg",
    link: "https://www.behance.net/",
    features: [
      "Multi-track timeline editing with beat synchronization in Premiere Pro",
      "Kinetic typography sequences and animated titles in After Effects",
      "Color grading and multi-platform format encoding"
    ]
  }
];
