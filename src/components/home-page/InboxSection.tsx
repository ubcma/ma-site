"use client";

import EmailSubscribe from "@/components/EmailSubscribe";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const InboxSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="inbox" className="bg-ma-red" ref={ref}>
      <div className="h-[312] lg:mx-48 mx-8 py-20">
        <div className="flex lg:flex-row flex-col justify-between gap-16 items-center">
          <motion.h2 
            className="text-white text-4xl md:text-6xl font-black tracking-tight"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Real Opportunities, <br /> Right to Your Inbox.
          </motion.h2>
          <div className="flex flex-col justify-center md:items-start items-center">
            <motion.p 
              className="text-white text-regular md:text-xl font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Be the first to know about exclusive events, job postings, and what&apos;s next in marketing. 
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="w-full"
            >
              <EmailSubscribe />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InboxSection;

