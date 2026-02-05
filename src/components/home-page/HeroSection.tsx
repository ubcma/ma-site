"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-start justify-end py-24 text-white overflow-hidden shadow-xl">
      <div
        className="absolute inset-0 bg-cover bg-center top-10"
        style={{
          backgroundImage: "url('/image/home-page/png-bg/home-bg.jpg')",
        }}
      />

      <div className="relative z-10 text-left w-full px-8 lg:px-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-16">
          <motion.h1 
            className="tracking-tight text-left text-5xl md:text-6xl lg:text-[112px] font-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="whitespace-nowrap">UBC Marketing</span><br /> Association
          </motion.h1>
          
          <div className="flex flex-col items-start md:items-end justify-between mb-4">
            <motion.p 
              className="text-xl text-left md:text-right mb-6 font-bold w-[328px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
            Building Canada&apos;s next generation of bold marketers.
            </motion.p>
            <motion.div 
              className="flex flex-row justify-start gap-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <Link href="https://app.ubcma.ca/" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="lg:px-12 lg:py-8 px-8 py-6 text-ma-red lg:text-3xl text-xl bg-white hover:bg-[#f3dee2] hover:brightness-90 font-bold rounded-[90px]"
                >
                  Become a Member
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 z-1 bg-gradient-to-b from-ma-red/0 to-ma-red/70" />
      {/* <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/30 to-black/50 " /> */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 z-0 bg-ma-red/70 backdrop-blur-xl [mask-image:linear-gradient(to_top,black,transparent)]" />
    </main>
  );
};

export default HeroSection;
