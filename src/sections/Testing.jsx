import Title from "../components/Title";
import { testingItems } from "../constants";

import { FaArrowRight } from "react-icons/fa6";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Testing = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <section className="relative" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Title
          title="HOW WE BUILD"
          text="WITH HYDRA VR?"
          description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
        />
      </motion.div>
      <svg
        className="absolute top-2/3 left-0 w-full h-[120px] -translate-y-1/2 pointer-events-none hidden md:flex"
        height="120"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 
       C75,0 125,120 200,60 
       C275,0 325,120 400,60 
       C475,0 525,120 600,60 
       C675,0 725,120 800,60 
       C875,0 925,120 1000,60 
       C1075,0 1125,120 1200,60"
          stroke="#C0B7E8"
          strokeWidth="5"
          fill="none"
          opacity="0.3"
        />
      </svg>
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-20">
        <div className="relative md:flex justify-between sm:grid sm:grid-cols-2 grid-cols-1 md:gap-5 lg:gap-10 space-y-10 sm:space-y-0">
          {testingItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center space-y-7">
              <motion.div
                layout
                initial={{ opacity: 0, y: 0 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="flex items-center justify-center w-[130px] h-[130px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] xl:w-[198px] xl:h-[198px] border-[10px] md:border-[13px] lg:border-[15px] xl:border-[19px] border-black rounded-full border-opacity-[32%] cursor-pointer group"
              >
                <div className="xl:w-[159px] xl:h-[159px] lg:w-[150px] lg:h-[150px] md:w-[130px] md:h-[130px] w-[110px] h-[110px] flex items-center justify-center bg-gradient-to-l from-[#C0B7E8] to-[#8176AF] rounded-full p-8 group-hover:scale-105 transition-all duration-300 cursor-pointer">
                  <h1 className="xl:text-[64px] lg:text-[58px] md:text-[50px] text-[45px] text-[#343045] font-semibold">
                    {item.num}
                  </h1>
                </div>
              </motion.div>

              <motion.div
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="xl:w-2/3 sm:w-1/2 flex items-start justify-center gap-3 group"
              >
                <div className="flex items-center justify-center">
                  <FaArrowRight className="xl:size-9 lg:size-8 md:size-7 size-6 text-[#C0B7E8] group-hover:translate-x-1 transition-all duration-300 cursor-pointer" />
                </div>
                <div className=" group cursor-pointer">
                  <h2 className="sm:text-[18px] md:text-[16px] lg:text-[22px] xl:text-[24px] text-white font-semibold">
                    {item.text}
                  </h2>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testing;
