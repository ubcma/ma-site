"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="request-consultation" ref={ref}>
      <div className="relative place-items-center mx-8 py-20">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
            <motion.img
              src="/image/studios-page/blocks.webp"
              alt="Mascot and Sign"
              className="md:w-[450px] "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            ></motion.img>
            <div className="flex flex-col items-start justify-center space-y-10 w-fit">
              <motion.h2
                className="text-5xl md:text-8xl font-black text-[#605493] tracking-tight"
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                style={{
                  WebkitTextStroke: "1.5px black",
                }}
              >
                mission
              </motion.h2>
              <motion.p
                className="md:text-xl text-sm w-full md:w-[445px]"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                We empower your brand through playful and effective marketing
                strategies that{" "}
                <span className="font-bold">break traditional norms</span>.
              </motion.p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
            <div className="flex flex-col items-start justify-center w-fit space-y-10">
              <motion.h2
                className="text-5xl md:text-8xl font-black text-[#605493] tracking-tight"
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                style={{
                  WebkitTextStroke: "1.5px black",
                }}
              >
                vision
              </motion.h2>
              <motion.p
                className="md:text-xl text-sm w-full md:w-[445px]"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                We want to revolutionize marketing consultancy by turning every
                brand story into an{" "}
                <span className="font-bold">unforgettable</span> experience.
              </motion.p>
            </div>

            <motion.img
              src="/image/studios-page/bookshelf.webp"
              alt="Mascot and Sign"
              className="md:w-[450px] "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            ></motion.img>
          </div>
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
            <motion.img
              src="/image/studios-page/puzzle.webp"
              alt="Mascot and Sign"
              className="md:w-[450px] "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            ></motion.img>
            <div className="flex flex-col items-start justify-center w-fit space-y-10">
              <motion.h2
                className="text-5xl md:text-8xl font-black text-[#605493] tracking-tight"
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                style={{
                  WebkitTextStroke: "1.5px black",
                }}
              >
                values
              </motion.h2>
              <motion.p
                className="md:text-xl text-sm w-full md:w-[445px] w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                At Studios, we take a{" "}
                <span className="font-bold">hands-on approach</span> because
                every brand is unique, and your story deserves more than a
                templated solution. Whether you want us to work with you as a
                partner or as your dedicated consulting team, we bring an{" "}
                <span className="font-bold">
                  unmatched level of personal service
                </span>
                .
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
