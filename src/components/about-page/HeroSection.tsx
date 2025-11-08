"use client";

import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-start justify-end py-24 text-white overflow-hidden shadow-xl">
      <div
        className="
    absolute inset-0 bg-cover bg-no-repeat top-10 
    bg-[url('/image/about-page/about-bg.png')] 
    bg-[position:calc(85%)_center]  
    md:bg-right-center                     
  "
      />

      <div className="relative z-10 text-left w-full px-8 lg:px-32 ">
        <div className="flex flex-col justify-between items-start gap-8">
          <motion.h1
            className="tracking-tight text-left text-5xl md:text-6xl lg:text-9xl font-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Who We Are
          </motion.h1>
          <motion.p
            className="text-xl text-left mb-6 font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            UBC’s Premier Marketing Community Since 1995
          </motion.p>
        </div>
      </div>

      <div className="absolute inset-0 z-1 bg-gradient-to-b from-ma-red/0 to-ma-red/90 " />
      {/* <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/30 to-black/50 " /> */}
      <div className="absolute inset-0 z-0 bg-ma-red/30 backdrop-blur-xl [mask-image:linear-gradient(to_top,black,transparent)]" />
    </main>
  );
};

export default HeroSection;
