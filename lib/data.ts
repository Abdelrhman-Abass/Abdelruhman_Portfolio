import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FcMindMap } from "react-icons/fc";
import { SiGreatlearning } from "react-icons/si";

import { LuGraduationCap } from "react-icons/lu";
import thumbnail from "@/public/thumbnail.jpg";
import login from "@/public/login.png";
import Realtor from "@/public/Realtor.png";
import first from "@/public/First.png";
import illustration from "@/public/illustration.png";
import logo from "@/public/logo.png";

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
    location: "Faculty of Computer and Information",
    description: "Currently at the senior level in my degree program",
    icon: React.createElement(LuGraduationCap),
    date: "Expected Graduation: 2025",
  },
  {
    title: "Software Team Leader",
    location: "Alexandria",
    description:
      "I worked as a Team leader for E-commerce Software platform in a freelance project that takes 4 months.",
      icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "ICPC Finalist",
    location: "Egypt",
    description:
      "Engaged in problem-solving competitions. Although our first attempt wasn't the best, we improved significantly in subsequent years.",
    icon: React.createElement(FcMindMap),
    date: "2022 - 2023",
  },
  {
    title: "FrontEnd Mentor",
    location: "Egypt",
    description:
      "As a member at Gdsc damanhour university, I assist fellow members in learning new tools and more skills. Provide support for understanding concepts in front end development.",
    icon: React.createElement(SiGreatlearning),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Borcella",
    description:
    "Two apps for E-commerce platform Client needed, one for Customers and one for admin. Each has a lot of features with secure admin panel.",
    tags: ["TypeScript", "React", "Next.js", "MongoDB", "Tailwind", "Shadcn UI " , "Stipe"],
    imageUrl: logo,
    href:"https://github.com/Abdelrhman-Abass/Borcella_Store"
  },
  {
    title: "Realtor",
    description:
      "Dealing with CRUD operations. Easily buy, sell and explore apartments with a nice design and easy to use with a strong authentication system.",
    tags: ["React", "Firebase", "SQL", "Tailwind", "React-Router-Dom"],
    imageUrl: Realtor,
    href:"https://github.com/Abdelrhman-Abass/Relator-V2"
  },

  {
    title: "Digital hippo",
    description:
      "E-commerce platform, Offers CRUD operations, secure authentication, basic CMS, search/filtering, and responsive design.",
    tags: ["TypeScript", "React", "Next.js", "MongoDB", "Tailwind", "Payload CMS" , "Stipe"],
    imageUrl: thumbnail,
    href:"https://github.com/Abdelrhman-Abass/digital-hippo"
  },
  {
    title: "Insatgram",
    description:
      "Explore social media. Easily create and explore posts with strong authentication system and quick datafetching  for a smooth user experience.",
    tags: ["React", "TypeScript", "React-query", "Tailwind", "Appwrite","shadcn"],
    imageUrl: login,
    href:"https://github.com/Abdelrhman-Abass/instagram"
  },
  
  
  {
    title: "Youtube",
    description:
      "Dealing with CRUD operations. Modern YouTube Clone Application in React JS with Material UI design and easy to use with a strong authentication system.",
    tags: ["React", "MUI UI", "Redux", "Tailwind", "React-Router-Dom"],
    imageUrl: first,
    href:"https://github.com/Abdelrhman-Abass/Yotube-v1"
  },
  {
    title: "JobBoard",
    description:
      "Modern job board with responsive design. Easily create, post Jobs with authentication system. Explore & Submit Job Applications.",
    tags: ["Javascript", "Python", "Django", "Django-Rest", "Sass"],
    imageUrl: illustration,
    href:"https://github.com/Abdelrhman-Abass/job-board-django/tree/main"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Sass",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
