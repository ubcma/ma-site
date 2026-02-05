"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const NumbersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      number: "300+",
      description: '<span class="italic font-bold">active members</span> from all faculties leveling up their marketing game',
    },
    {
      number: "50+",
      description: '<span class="italic font-bold">job postings</span> on our member exclusive job portal',
    },
    {
      number: "42",
      description: '<span class="italic font-bold">execs</span> across <span class="italic font-bold text-ma-red">10 unique specializations</span>, powering everything we do',
    },
    {
      number: "12+",
      description: '<span class="italic font-bold">annual events</span> from conferences to case comps to club nights',
    },
    {
      number: "70+",
      description: '<span class="italic font-bold">industry connections</span> with industry leaders and peers',
    },
    {
      number: "400K+",
      description: '<span class="italic font-bold">social impressions</span> amplifying student voices and ideas',
    },
  ];

  return (
    <section id="stats" className="bg-ma-red" ref={ref}>
      <div className="lg:mx-48 mx-8 py-20">
        <motion.h2 
          className="text-4xl md:text6xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          By the numbers:
        </motion.h2>
        
        <div className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.number}
              className="flex flex-col items-center justify-center bg-white rounded-2xl p-6 h-[252px]"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + index * 0.1 }}
            >
              <h3 className="md:text-6xl text-4xl font-black text-ma-red mb-6">{stat.number}</h3>
              <p className="md:text-lg text-sm font-medium text-center" dangerouslySetInnerHTML={{ __html: stat.description }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;

