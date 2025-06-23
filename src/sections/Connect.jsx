import { connectItems } from "../constants";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Connect = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <section ref={ref}>
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative flex flex-col lg:flex-row lg:justify-center lg:items-center gap-6 px-6 md:px-12 py-10 md:rounded-[90px] rounded-[45px] shadow-xl connect-gradient"
        >
          {connectItems.map((item, i) => {
            return (
              <div
                key={item.name}
                className="flex items-center gap-4 px-4"
              >
                <img
                  className="xl:w-14 xl:h-14 md:w-12 md:h-12 w-10 h-10 object-contain"
                  src={item.imgPath}
                  alt={item.name}
                />
                <div className="flex flex-col justify-center gap-2 w-full">
                  <h1 className="xl:text-2xl lg:text-xl font-semibold text-white">
                    {item.name}
                  </h1>
                  <p className="xl:text-sm lg:text-[12px] font-light text-white/70">
                    {item.description}
                  </p>
                </div>

               
                {i !== connectItems.length - 1 && (
                  <div className="hidden lg:block ml-6">
                    <div className="w-px h-16 bg-white/60" />
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
