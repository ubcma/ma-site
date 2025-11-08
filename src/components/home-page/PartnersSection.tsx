"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" ref={ref}>
      <div className="relative h-[788px]">
        <img src="/image/home-page/png-bg/partners-bg.png" alt="Partners Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:px-48 px-8 py-20">
          <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-16 items-start text-white">
            <div className="flex flex-col items-start justify-center">
              <motion.div 
                className="md:text-3xl text-sm font-medium border-white border-4 rounded-full px-10 py-2 mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Partners 
              </motion.div>
              <motion.h2 
                className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                THE <span className="text-ma-red">BIGGEST</span><br /><span className="text-ma-red">NAMES</span> IN<br />MARKETING.
              </motion.h2>
            </div>

            <div className="flex flex-col items-start justify-center md:w-[400px] w-full space-y-6">
              <motion.p 
                className="md:text-xl text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                Looking for the next generation of talented marketing professionals? UBCMA is the place to be.
              </motion.p>
              <motion.p 
                className="md:text-xl text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                Learn how your brand can engage with top student talent, build campus presence, and connect with our<span className="italic font-bold">9000+ followers</span>.
              </motion.p>
              <motion.p 
                className="md:text-xl text-sm font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              >
                Email us at corporaterelations@ubcma.ca to get involved!
              </motion.p>
              <motion.div 
                className="flex flex-row justify-end gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="lg:px-12 lg:py-8 px-8 py-6 text-white lg:text-3xl text-xl bg-ma-red hover:bg-[#c41f3a] hover:brightness-90 font-bold rounded-[90px]"
                >
                  Partnerships Package
                </Button>
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

export default PartnersSection;

