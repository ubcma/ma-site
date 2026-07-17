"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

// Photos from the culture-photos folder
const photos = [
  { src: "/image/about-page/culture-photos/image 2.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 3.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 4.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 5.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 6.jpg", span: "col-span-1" },

  { src: "/image/about-page/culture-photos/image 7.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 8.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 9.jpg", span: "col-span-2 row-span-1" },
  { src: "/image/about-page/culture-photos/image 10.jpg", span: "col-span-1" },

  { src: "/image/about-page/culture-photos/image 11.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 12.jpg", span: "col-span-2 row-span-1" },
  { src: "/image/about-page/culture-photos/image 13.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 14.jpg", span: "col-span-1" },

  { src: "/image/about-page/culture-photos/image 15.jpg", span: "col-span-2 row-span-1" },
  { src: "/image/about-page/culture-photos/image 16.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 17.jpg", span: "col-span-2 row-span-1" },

  { src: "/image/about-page/culture-photos/image 18.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 19.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 20.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 21.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 22.jpg", span: "col-span-1" },

  { src: "/image/about-page/culture-photos/image 23.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 24.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 25.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 26.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 27.jpg", span: "col-span-1" },

  { src: "/image/about-page/culture-photos/image 28.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 29.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 30.jpg", span: "col-span-2 row-span-1" },
  { src: "/image/about-page/culture-photos/image 31.jpg", span: "col-span-1" },

  { src: "/image/about-page/culture-photos/image 32.jpg", span: "col-span-1" },
  { src: "/image/about-page/culture-photos/image 33.jpg", span: "col-span-2 row-span-1" },
  { src: "/image/about-page/culture-photos/image 34.jpg", span: "col-span-2 row-span-1" },
];

const INITIAL_VISIBLE_COUNT = 16;

const PhotosSection = () => {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const visiblePhotos = showAll ? photos : photos.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section ref={ref} className="bg-white py-16 md:py-24">
      <div className="px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.h2
          className="text-black text-3xl md:text-5xl lg:text-6xl font-black text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          This is the <span className="text-ma-red underline decoration-4 underline-offset-4">MAFAM</span>. Welcome home:
        </motion.h2>
        <div className="relative">

          {/* Photo Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {visiblePhotos.map((photo, index) => (
              <motion.div
                key={photo.src}
                className={`${photo.span} relative overflow-hidden rounded-lg`}
                style={{height: '289px' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: showAll ? 0 : 0.1 + index * 0.03,
                  ease: "easeOut",
                }}
              >
                <Image
                  src={photo.src}
                  alt={`MAFAM culture photo ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
              </motion.div>
            ))}
          </motion.div>
          {/* Gradient overlay */}
          {!showAll && (
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-t from-white to-transparent z-10" />
          )}        
        </div>
        {/* Show More/Less Button */}
        <motion.div
            className="flex justify-center mt-10 md:mt-16"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.1, delay: 0.4 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-ma-red text-white font-bold px-8 py-3 rounded-full hover:bg-red-700 transition-colors duration-200 text-sm md:text-base"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </motion.div>
      </div>
    </section>
  );
};

export default PhotosSection;
