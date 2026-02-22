"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const CultureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
    <section id="culture-header" className="bg-ma-red">
        <div className="flex justify-center items-center py-20 md:mx-48 mx-8">
        <motion.h1 
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="text-white text-5xl md:text-9xl font-black tracking-tight">
            Meet the #MAFAM
        </motion.h1>
        </div>
    </section>
    <section id="culture" ref={ref}>
      <div className="relative h-[791px]">
        <img src="/image/about-page/culture-bg.webp" alt="Partners Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:px-48 px-8 py-20">
          <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-16 items-center text-white">
            <div className="flex flex-col items-start justify-center">
              <motion.div 
                className="md:text-3xl text-sm font-medium border-white border-4 rounded-full px-10 py-2 mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Culture 
              </motion.div>
              <motion.h2 
                className="text-5xl md:text-8xl font-black"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                WHERE AMBITION MEETS <span className="text-ma-red">ENERGY</span>.
              </motion.h2>
            </div>

            <div className="flex flex-col items-start justify-center w-full space-y-6">
              <motion.p 
                className="md:text-xl text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                At UBCMA, we take marketing seriously, but we <span className="italic font-bold">never forget to enjoy the ride</span>. Our culture is all about working hard and playing harder, surrounded by a community that pushes you to grow, create, and have a <span className="italic font-bold">damn good time</span> doing it.
              </motion.p>
              <motion.p 
                className="md:text-xl text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                Whether you&apos;re pitching in a boardroom, celebrating at a social, or building your career alongside lifelong friends, MAFAM is here to celebrate your wins, support your grind, and remind you that <span className="italic font-bold">success is best shared</span>.              
              </motion.p>
              <motion.p 
                className="md:text-xl text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              >
                We&apos;re not just a club. <span className="italic font-bold">We&apos;re a culture. A family.</span>
              </motion.p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-ma-red/0 to-ma-red/50 " />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/50 to-black/80 " />
      </div>
    </section>
    </>
  );
};

export default CultureSection;