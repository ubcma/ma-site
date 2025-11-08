"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      title: "educate",
      image: "/image/home-page/png-bg/educate-bg.png",
      description: 'We equip students with cutting-edge industry knowledge, practical skills, and insights that <span class="itallic font-bold">go beyond the classroom</span>.',
    },
    {
      title: "engage",
      image: "/image/home-page/png-bg/engage-bg.jpg",
      description: 'We build a tight-knit, supportive community where students can network, collaborate, and grow together through <span class="italic font-bold">meaningful relationships</span>.',
    },
    {
      title: "execute",
      image: "/image/home-page/png-bg/execute-bg.png",
      description: 'We create opportunities to <span class="italic font-bold">apply learning in real-time</span> through premier conferences, exclusive networking socials, high-stakes case competitions, and hands-on projects that bridge theory and practice.',
    },
  ];

  return (
    <section id="our-mission" ref={ref}>
      <div className="lg:mx-48 mx-8 py-20">
        <motion.h2 
          className="text-4xl md:text6xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our mission is simple:
        </motion.h2>
        <div className="flex md:flex-row flex-col gap-4">
          {cards.map((card, index) => (
            <motion.div 
              key={card.title}
              className="group relative md:w-[365px] w-full h-[349px]"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 + index * 0.15 }}
            >
              <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
              <div className="flex h-full w-full items-end justify-center absolute z-10 text-white text-5xl font-bold pb-4 group-hover:opacity-0 transition-opacity duration-100">
                {card.title}
              </div>
              <div className="absolute inset-0 z-10 flex items-start justify-center p-10 text-white text-left text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div dangerouslySetInnerHTML={{ __html: card.description }} />
              </div>
              <div className="absolute inset-0 z-1 bg-gradient-to-b from-ma-red/0 to-ma-red/80 group-hover:from-black/60 group-hover:to-black/80 rounded-2xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

