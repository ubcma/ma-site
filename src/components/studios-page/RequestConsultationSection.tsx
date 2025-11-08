"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const RequestConsultationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="request-consultation"  className="bg-[#605493]" ref={ref}>
      <div className="relative md:mx-48 mx-8 py-20">
          <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-16 items-center text-white">
            <div className="flex flex-col items-start justify-center w-full space-y-10">
            <motion.h2 
                className="text-5xl md:text-8xl font-black tracking-tight"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                style={{
                  WebkitTextStroke: '1.5px black',
                }}
              >
                we are <br /> studios
              </motion.h2>
              <motion.p 
                className="md:text-xl text-sm w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
              <span className="font-bold">Powered by UBCMA</span>, Studios is UBC's premier student-led marketing consultancy. We empower brands through playful and effective marketing strategies that break traditional norms.
              </motion.p>
              <motion.div 
                className="flex flex-row justify-end gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="lg:px-12 lg:py-10 px-8 py-6 text-white lg:text-3xl text-xl bg-ma-red hover:bg-ma-red/50 hover:brightness-90 font-black rounded-[90px]"
                >
                  REQUEST A CONSULTATION
                </Button>
              </motion.div>
            </div>
            
              <motion.img 
                src="/image/studios-page/mascot-and-sign.png"
                alt="Mascot and Sign"
                className="md:w-[500px] "
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
              </motion.img>
                   
          </div>
      </div>
    </section>
  );
};

export default RequestConsultationSection;

