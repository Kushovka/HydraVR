import Button from "../components/Button";

import { GoArrowRight } from "react-icons/go";
import user from "/images/hero/user.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <section className="" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 md:pt-56 pt-48 relative">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="md:w-1/2 space-y-16"
          >
            <div className="space-y-9">
              <div>
                <h1 className="lg:text-[40px] md:text-[30px] sm:text-[40px] text-[30px] font-semibold text-white">
                  <span className="text-gradient lg:text-[46px] md:text-[33px] sm:text-[46px] text-[33px]">
                    Dive
                  </span>{" "}
                  Into The Depths
                  <br /> Of
                  <span className="text-gradient lg:text-[46px] md:text-[33px] sm:text-[46px] text-[33px]">
                    {" "}
                    Virtual Reality
                  </span>
                </h1>
              </div>
              <p className="md:w-3/4 lg:w-2/3 text-white lg:text-base md:text-sm text-base md:flex hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore nisl tincidunt
                eget. Lectus mauris eros in vitae .
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-6 group">
              <Button title="BUILD YOUR WORLD" />
              <GoArrowRight className="md:flex hidden size-14 text-secondary group-hover:animate-pulse cursor-pointer group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </motion.div>
          {/* right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative md:w-full lg:w-1/2 flex items-center lg:justify-end"
          >
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border-t-8 border-l-8 border-secondary rounded-full opacity-40" />
            <div className="absolute top-0 lg:right-1/4 xl:left-0 w-[400px] h-[400px] border-b-8 border-l-3 border-secondary rounded-full opacity-20" />
            <div className="absolute bottom-2/3 left-1/3 w-[500px] h-[500px] border-b-2 border-l-8 border-secondary rounded-full opacity-40" />
            <div className="absolute bottom-1/3 left-3/4 w-[400px] h-[400px] border-t-8 border-l-8 border-secondary rounded-full opacity-20" />
            <div className=" border-[20px] z-20 border-black/15 rounded-t-[40px] rounded-r-[40px] md:rounded-bl-[250px] rounded-bl-[150px] overflow-hidden">
              <div className="z-20">
                <img className="w-full h-full object-cover" src={user} alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
