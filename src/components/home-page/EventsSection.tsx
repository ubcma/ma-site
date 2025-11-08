"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" ref={ref}>
      <div className="relative h-[788px]">
        <img src="/image/home-page/png-bg/events-bg.png" alt="Events Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:px-48 px-8 py-20">
          <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-16 items-start text-white">
            <div className="flex flex-col items-start justify-center">
              <motion.div 
                className="md:text-3xl text-sm font-medium border-white border-3 rounded-full px-10 py-2 mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Events 
              </motion.div>
              <motion.h2 
                className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                12+ BOLD, <br /> <span className="text-ma-red">HIGH-IMPACT</span> <br /> EXPERIENCES.
              </motion.h2>
            </div>

            <div className="flex flex-col items-start justify-center md:w-[400px] w-full space-y-6">
              <motion.p 
                className="md:text-xl text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                At UBCMA, our events are where marketers find <span className="italic font-bold">their voice, their network, and their next big break</span>.
              </motion.p>
              <motion.p 
                className="md:text-xl text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                With <span className="italic font-bold">12+ annual events</span> ranging from national conferences to boat parties, we create bold, <span className="italic font-bold">high-impact experiences</span> that help students learn, grow, and connect.
              </motion.p>
              <motion.p 
                className="md:text-xl text-sm font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              >
                Want access? Become a UBCMA member to unlock exclusive event registrations, job postings, and more.
              </motion.p>
              <motion.div 
                className="flex flex-row justify-end gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                <Link href="https://app.ubcma.ca/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="lg:px-12 lg:py-8 px-8 py-6 text-white lg:text-3xl text-xl bg-ma-red hover:bg-[#c41f3a] hover:brightness-90 font-bold rounded-[90px]"
                  >
                    Become a Member
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-ma-red/0 to-ma-red/50 " />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/30 to-black/50 " />
      </div>
    </section>
  );
};

export default EventsSection;

