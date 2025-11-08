import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FcMindMap } from "react-icons/fc";
import { SiGreatlearning } from "react-icons/si";
import { PiCertificateBold } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import thumbnail from "@/public/thumbnail.jpg";
import login from "@/public/login.png";
import artMarket from "@/public/artMarket.png";
import Realtor from "@/public/Realtor.png";
import first from "@/public/First.png";
import illustration from "@/public/illustration.png";
import logo from "@/public/logo.png";
import rashed from "@/public/rashed.png";
import legend from "@/public/legend.png";
import property from "@/public/white-logo.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BSc in Computer Science",
    location: "Damanhur University, Egypt",
    description:
      "Graduated with a Bachelor's degree in Computer Science, focusing on Algorithms, Web Development, and Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "Graduated: 2025",
  },
  {
    title: "Front-End Developer – IT Legend",
    location: "Remote, Egypt",
    description:
      "Developed and optimized enterprise-grade Next.js platforms for 5K+ users, boosting performance by 95% using SSR, code-splitting, and lazy loading. Built a TypeScript + ShadCN UI library that reduced development time by 30%.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 – 2025",
  },
  {
    title: "React Developer – DEPI Internship",
    location: "Remote, Egypt",
    description:
      "Delivered 4+ responsive web apps integrating REST APIs using React.js and Node.js. Built reusable UI components with React Hook Form and TanStack Table while collaborating in agile sprints.",
    icon: React.createElement(PiCertificateBold),
    date: "2024",
  },
  {
    title: "Tech Lead & Full-Stack Developer (Freelance)",
    location: "Remote",
    description:
      "Led a team of 5 developers to deliver 7+ full-stack applications using Next.js, Node.js, and MongoDB. Integrated Stripe, Paymob, and PayPal for secure payments and managed agile workflows with CI/CD.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 – Present",
  },
  {
    title: "Technical Head – GDG on Campus",
    location: "Egypt",
    description:
      "Mentored over 150 students in front-end development. Conducted workshops on React, Next.js, and performance optimization while promoting clean code and scalable architecture.",
    icon: React.createElement(SiGreatlearning),
    date: "2023 – Present",
  },
  {
    title: "ICPC Regional Finalist",
    location: "Egypt",
    description:
      "Qualified as an ICPC Regional Finalist, gaining advanced problem-solving, analytical thinking, and teamwork skills through competitive programming.",
    icon: React.createElement(FcMindMap),
    date: "2023",
  },
  {
    title: "ITI Summer Internship",
    location: "Egypt",
    description:
      "Completed intensive training in HTML, CSS, JavaScript, Bootstrap, and React.js. Built practical front-end projects and gained hands-on experience in UI design and component development.",
    icon: React.createElement(PiCertificateBold),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "IT Legend Platform",
    description:
    "Course and e-commerce web platform with performance optimizations improving SEO and speed by 95%.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Shadcn UI", "React Query", "Docker"],
    imageUrl: legend,
    href: "https://itlegend.net/",
  },
  {
    title: "Property Search Optimization",
    description:
      "Optimized a legacy real estate platform to achieve 95%+ Lighthouse scores and 100% accessibility using SSR and code cleanup.",
    tags: ["Next.js", "TypeScript", "Tailwind", "React Query", "Docker"],
    imageUrl: property,
    href: "https://property-search.com/",
  },
  {
    title: "Rashed – AI Fake News Detection",
    description:
      "AI-powered fake news detection web app integrating Hugging Face NLP models and real-time dashboards. Awarded A+ for innovation and UX.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Express", "Python", "BERT"],
    imageUrl: rashed,
    href: "https://github.com/Abdelrhman-Abass/Rashed-GradALL",
  },
  {
    title: "Borcella – E-Commerce Platform",
    description:
      "Full e-commerce system with customer and admin panels, secure payments, and responsive design.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Shadcn UI", "Stripe"],
    imageUrl: logo,
    href: "https://github.com/Abdelrhman-Abass/Borcella_Store",
  },
  {
    title: "ArtMarket",
    description:
      "Full-stack artwork marketplace built during DEPI internship, integrating payments and admin control.",
    tags: ["React", "Express.js", "PostgreSQL", "Tailwind", "Stripe"],
    imageUrl: artMarket,
    href: "https://github.com/Abdelrhman-Abass/ArtMarket",
  },
  {
    title: "Digital Hippo",
    description:
      "Modern e-commerce app with CMS, CRUD operations, authentication, and payment system.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Payload CMS", "Stripe"],
    imageUrl: thumbnail,
    href: "https://github.com/Abdelrhman-Abass/digital-hippo",
  },
  {
    title: "Instagram Clone",
    description:
      "Social media platform for creating and browsing posts with authentication and optimized data fetching.",
    tags: ["React", "TypeScript", "React Query", "Appwrite", "Tailwind", "Shadcn UI"],
    imageUrl: login,
    href: "https://github.com/Abdelrhman-Abass/instagram",
  },
  {
    title: "Realtor",
    description:
      "Real estate app for property management with CRUD operations, authentication, and responsive UI.",
    tags: ["React", "Firebase", "SQL", "Tailwind"],
    imageUrl: Realtor,
    href: "https://github.com/Abdelrhman-Abass/Relator-V2",
  },
  {
    title: "JobBoard",
    description:
      "Responsive job platform with authentication, job creation, and Django REST integration.",
    tags: ["Python", "Django", "JavaScript", "Sass"],
    imageUrl: illustration,
    href: "https://github.com/Abdelrhman-Abass/job-board-django",
  },
] as const;

export const skillsData = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "HTML5",
  "CSS3",
  "TailwindCSS",
  "ShadCN UI",
  "Redux",
  "Zustand",
  "React Query",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git / GitHub",
  "CI/CD",
  "Python",
  "Framer Motion",
] as const;