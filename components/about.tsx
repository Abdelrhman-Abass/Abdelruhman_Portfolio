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
      initial={{ opacity: 0, y: 100 ,translateX:-50}}
      animate={{ opacity: 1, y: 0 , translateX:0 }}
      transition={{ delay: 0.675 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am Computer Science student at senior level in faculty of computer and information  {" "}
        , Based from Alexandria, Egypt.
        I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>, Self-motivated and result-oriented
        proficient with python, git, sql and web scrapping from 365 data science platform. Finalist
        in the International Collegiate Programming Contest{" "} <span className="font-medium">(ICPC)</span> with strong problem-solving
        and teamwork skills.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. . Demonstrate excellent communication, adaptability, and time
        management abilities. Fluent in Arabic (native language) and English. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

    </motion.section>
  );
}
