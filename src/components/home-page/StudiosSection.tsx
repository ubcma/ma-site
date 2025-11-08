"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const StudiosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="studios" className="bg-[#605493] relative" ref={ref}>
      <div className="flex flex-col items-center justify-center space-y-10 md:py-20 py-70 relative z-10">
        {/* Left side icons */}  
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          src="/image/home-page/studio-icons/urpistd-12 1.png"
          alt="Studio Icon"
          className="absolute -left-30 md:-top-35 top-0 md:w-[470px] w-[300px] object-contain z-20"
        >
        </motion.img>
  
        <motion.img
         initial={{ opacity: 0, scale: 0 }}
         animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
         transition={{
             duration: 0.4,
             scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
         }}
         src="/image/home-page/studio-icons/subuhd-12 1.png"
         alt="Studio Icon"
         className="absolute -left-30 -bottom-35 lg:w-[550px] w-[400px] object-contain z-20"
        >
        </motion.img>

        {/* Right side icons */}
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          src="/image/home-page/studio-icons/asuyausyus-12 1.png"
          alt="Studio Icon"
          className="absolute -right-30 -top-30 lg:w-[550px] w-[400px] object-contain z-20"
        >
        </motion.img>
        
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          src="/image/home-page/studio-icons/urpistd-12 3.png"
          alt="Studio Icon"
          className="absolute -right-30 md:-bottom-30 bottom-0 md:w-[470px] w-[300px] object-contain z-20"
        >
        </motion.img>

        <motion.h2 
          className="md:text-9xl text-6xl text-white font-black tracking-tight"
          style={{
            WebkitTextStroke: '3px black',
          }}
        >
          STUDIOS
        </motion.h2>
        <motion.h3 
          className="md:text-5xl text-3xl text-white font-black tracking-tight"
          style={{
            WebkitTextStroke: '1.5px black',
          }}
        >
          Powered by <span className="text-ma-red">UBCMA</span>
        </motion.h3>
        <motion.p className="text-white md:text-2xl text-sm font-regular text-center md:w-[500px] w-full px-8">
          Studios is UBC&apos;s <span className="italic font-bold">premier student-led marketing consultancy</span>. We empower brands through playful and effective marketing strategies that break traditional norms.
        </motion.p>
        <motion.div>
          <Link href="/studios">
            <Button
              size="lg"
              className="lg:px-12 lg:py-8 px-8 py-6 text-white lg:text-3xl text-xl bg-ma-red hover:bg-[#c41f3a] hover:brightness-90 font-bold rounded-[90px]"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StudiosSection;

