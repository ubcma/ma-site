"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="studios" className="relative" ref={ref}>
      <div className="flex flex-col items-center justify-center space-y-10 md:px-48 px-8 md:py-20 py-70 relative z-10">
        {/* Left side icons */}  

        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          src="/image/studios-page/star-icon.png"
          alt="Studio Icon"
          className="absolute sm:block hidden -left-20 md:top-10 top-0 md:w-[230px] w-[150px] object-contain z-20"
        >
        </motion.img>

        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          src="/image/home-page/studio-icons/urpistd-12 1.png"
          alt="Studio Icon"
          className="absolute sm:block hidden left-0 md:top-30 top-0 md:w-[330px] w-[200px] object-contain z-20 -rotate-12"
        >
        </motion.img>

        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          src="/image/studios-page/star-icon2.png"
          alt="Studio Icon"
          className="absolute sm:block hidden left-0 md:top-100 top-0 md:w-[230px] w-[150px] object-contain z-20"
        >
        </motion.img>

        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          src="/image/home-page/studio-icons/urpistd-12 1.png"
          alt="Studio Icon"
          className="absolute sm:block hidden -left-50 md:top-120 top-0 md:w-[440px] w-[330px] object-contain z-20 rotate-35"
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
          src="/image/home-page/studio-icons/urpistd-12 3.png"
          alt="Studio Icon"
          className="absolute sm:block hidden -right-25 md:top-8 bottom-0 md:w-[305px] w-[200px] object-contain z-20"
        >
        </motion.img>

        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          src="/image/studios-page/star-icon.png"
          alt="Studio Icon"
          className="absolute sm:block hidden right-10 md:top-50 top-0 md:w-[190px] w-[100px] object-contain z-20"
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
          className="absolute sm:block hidden -right-30 md:top-90 bottom-0 md:w-[300px] w-[200px] object-contain z-20 -rotate-10"
        >
        </motion.img>

        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          src="/image/studios-page/star-icon.png"
          alt="Studio Icon"
          className="absolute sm:block hidden -right-50 md:top-130 top-0 md:w-[420px] w-[310px] object-contain z-20 rotate-10"
        >
        </motion.img>

        <motion.img
          src="/image/studios-page/studios-bg.png"
          alt="Studio Icon"
          className="md:w-[955px]"
        >
        </motion.img>
        <motion.h3 
          className="md:text-4xl text-2xl text-center text-[#605493] font-black"
          style={{
            WebkitTextStroke: '1.5px black',
          }}
        >
          Where student talent meets real-world marketing
        </motion.h3>
      </div>
    </section>
  );
};

export default HeroSection;
