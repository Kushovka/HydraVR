import { techItems } from "../constants";

import imgTech from "/images/tech/imgTech.png";
import { IoIosArrowDown } from "react-icons/io";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Tech = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <section id="technologies" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-20">
        <div>
          {/*  */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="border border-transparent rounded-[160px] overflow-hidden"
            >
              <img
                src={imgTech}
                alt="imgTech"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/3 left-0 right-0">
                <div className="text-center flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                    }
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <h1 className="text-[14px] sm:text-[24px] md:text-[28px] lg:text-[36px] text-white font-semibold">
                      TECHNOLOGIES & HARDWARE
                    </h1>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                    }
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <h2 className="text-[14px] sm:text-[24px] md:text-[28px] lg:text-[36px] text-white font-light">
                      USED BY HYDRA VR.
                    </h2>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute left-1/2 -translate-x-1/2 lg:-bottom-10 md:-bottom-8 sm:-bottom-7 -bottom-5 border-[4px] sm:border-[7px] md:border-[8px] lg:border-[10px] bg-gradient-to-l from-[#C0B7E8] to-[#8176AF] p-1 sm:p-2 xl:p-3 border-[#0E0E0E] border-opacity-90 rounded-full cursor-pointer group"
              >
                <a href="#howto">
                  <IoIosArrowDown className="xl:size-12 lg:size-10 md:size-7 sm:size-6 size-4 text-white group-hover:translate-y-1 transition-all duration-300" />
                </a>
              </motion.div>
            </motion.div>
          </div>
          {/*  */}
          <div className="py-8 md:py-12 px-8 md:px-12">
            <div className="flex items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-0">
              {techItems.map((item, i) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 0 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                  key={item.title}
                  className=""
                >
                  <img src={item.imgPath} alt={item.title} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
