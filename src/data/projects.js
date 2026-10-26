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
    link: "https://github.com/mohamedhamdi",
    features: [
      "Real-time Grafana telemetry dashboard tracking memory usage, disk utilization, idle CPU, and network download/upload metrics",
      "Custom Python Live Log Dashboard & Prediction engine analyzing /var/log/structured.log in real time",
      "Dynamic severity breakdown categorization across info, warning, error, notice, and debug levels (274k+ entries)",
      "Predictive event anomaly detection estimating upcoming error probabilities and overdue failure intervals",
      "Rsyslog & Graylog log forwarding pipeline across distributed Linux and network nodes"
    ]
  },
  {
    id: "desktop-app-analytics",
    title: "CodeAnalytics Desktop Suite",
    category: "dev",
    categoryLabel: "Software Engineering",
    summary: "High-performance desktop system built for system telemetry, code execution metrics, and real-time database monitoring.",
    description: "A robust desktop management and telemetry application developed during engineering studies at ESPRIT. Implements an event-driven architecture with low-latency data streams, active connection monitoring, and query performance visualization.",
    tags: ["Java", "C++", "Spring Boot", "SQLite", "Data Structures"],
    image: "/images/desktop-app.jpg",
    link: "https://github.com/mohamedhamdi",
    features: [
      "Real-time resource and API performance visualization with responsive graphs",
      "Multi-threaded background workers for non-blocking UI interactions",
      "Modular MVC architecture separating UI rendering from data persistence"
    ]
  },
  {
    id: "zenith-fullstack-hub",
    title: "Zenith Commerce & Admin Hub",
    category: "dev",
    categoryLabel: "Full-Stack Web App",
    summary: "Full-stack web management platform built with Symfony, Angular & Spring Boot architectures, featuring order pipelines and RBAC.",
    description: "An end-to-end enterprise web application combining a responsive frontend with structured backend services. Designed for e-commerce workflow automation, inventory tracking, analytics dashboards, and secure transaction handling.",
    tags: ["Angular", "Spring Boot", "Symfony", "PHP", "MySQL", "REST API"],
    image: "/images/webapp.jpg",
    link: "https://github.com/mohamedhamdi",
    features: [
      "Robust RESTful API endpoints for catalog synchronization and order lifecycle",
      "Dynamic dashboard featuring sales trends, inventory indicators, and customer segments",
      "Secure authentication, CSRF protection, and role-based permissions"
    ]
  },
  {
    id: "aurora-brand-identity",
    title: "Aurora Brand & Visual Identity",
    category: "des",
    categoryLabel: "Brand & Graphic Design",
    summary: "Complete visual identity system, geometric poster series, and emblem badges created for client brand storytelling.",
    description: "Comprehensive branding project delivered for commercial clients as part of freelance graphic design work. Covers custom vector logo design, modular typography hierarchies, packaging guidelines, and custom promotional posters.",
    tags: ["Illustrator", "Photoshop", "Branding", "Vector Art", "Typography"],
    image: "/images/branding.jpg",
    link: "https://www.behance.net/",
    features: [
      "Cohesive brand system including logo marks, badges, and color tokens",
      "Set of high-impact geometric posters for digital campaigns and print collateral",
      "Production-ready vector assets optimized for screen, print, and merchandise"
    ]
  },
  {
    id: "lumina-motion-showreel",
    title: "Lumina Motion & Cinematic Sequences",
    category: "des",
    categoryLabel: "Motion & Video Editing",
    summary: "Dynamic motion graphics, kinetic typography, and video editing sequences crafted with After Effects and Premiere Pro.",
    description: "Showcase of motion design work for promotional clips, title sequences, and social media campaigns. Combines kinetic typography, beat-synced transitions, audio design, and custom color grading to produce engaging visual experiences.",
    tags: ["Premiere Pro", "After Effects", "Motion Design", "Color Grading", "Sound FX"],
    image: "/images/motion-video.jpg",
    link: "https://www.behance.net/",
    features: [
      "Multi-track timeline editing with smooth rhythmic pacing and sound synchronization",
      "Dynamic typography and UI animations for product teasers",
      "Optimized export pipelines for digital displays and multi-platform distribution"
    ]
  }
];
