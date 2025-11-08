"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const StatementSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="statement" ref={ref}>
      <div className="relative h-[457px]">
        <img src="/image/about-page/statement-bg.png" alt="Statement Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute z-10 h-full flex items-start lg:mx-48 mx-8 ">
          <div className="flex h-full justify-center items-center text-white text-2xl font-semibold max-w-[555px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              The University of British Columbia Marketing Association (UBCMA) is UBC's <span className="italic text-ma-red">premier marketing community</span> bringing together 400+ students from all faculties who share a passion for marketing.
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-ma-red/0 to-ma-red/80 " />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/30 to-black/50 " />
      </div>
    </section>
  );
};

export default StatementSection;