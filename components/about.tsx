"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100, translateX: -50 }}
      animate={{ opacity: 1, y: 0, translateX: 0 }}
      transition={{ delay: 0.675 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I’m <span className="font-medium">Abdelrahman Abass</span>, a{" "}
        <span className="font-medium">Front-End Developer</span> from
        Alexandria, Egypt, with a{" "}
        <span className="font-medium">
          Bachelor’s degree in Computer Science
        </span>{" "}
        from Damanhur University. I specialize in building{" "}
        <span className="font-medium">
          high-performance, scalable web applications
        </span>{" "}
        using React.js, Next.js, and TypeScript.
      </p>

      <p className="mb-3">
        Over the past two years, I’ve delivered impactful projects for startups
        and agencies. At <span className="font-medium">IT Legend</span>, I
        developed and optimized enterprise-level Next.js platforms for over
        5,000 users, achieving a 95% performance boost through lazy loading,
        SSR, and code splitting. I also built reusable UI component libraries
        using TypeScript and ShadCN UI that reduced development time by 30%.
      </p>

      <p className="mb-3">
        As a <span className="font-medium">Technical Instructor at GDG on Campus</span>,
        I’ve mentored over 150 developers, leading workshops on React, Next.js,
        and performance optimization. Additionally, as an{" "}
        <span className="font-medium">ICPC Regional Finalist</span>, I bring a
        strong foundation in algorithms, problem-solving, and analytical
        thinking that I apply to my development work every day.
      </p>

      <p>
        My core stack includes{" "}
        <span className="font-medium">
          React.js, Next.js, TypeScript, Node.js, and MongoDB
        </span>
        , along with tools like TailwindCSS, ShadCN UI, and Docker. I’m
        passionate about clean architecture, user-centered design, and
        delivering efficient, modern web experiences. I’m currently seeking a{" "}
        <span className="font-medium">full-time Front-End Developer role</span>{" "}
        where I can contribute to building innovative and scalable products.
      </p>
    </motion.section>
  );
}
