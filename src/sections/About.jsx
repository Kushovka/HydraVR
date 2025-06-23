import Title from "../components/Title";
import Button from "../components/Button";

import aboutImg from "/images/about/aboutImg.png";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <section id="about" className="my-10 md:my-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Title
          title="INTRODUCTION"
          text="TO HYDRA VR"
          description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
        />
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <div className="z-20 md:rounded-bl-[100px] md:rounded-br-[240px] md:rounded-tr-[100px] md:rounded-tl-[240px] rounded-bl-[80px] rounded-br-[150px] rounded-tr-[80px] rounded-tl-[150px] overflow-hidden">
              <img
                className="relative w-full h-full object-cover"
                src={aboutImg}
                alt="aboutImg"
              />
            </div>
          </motion.div>
          {/* right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:w-[45%] space-y-8 flex flex-col items-center md:items-start"
          >
            <div className="flex flex-col justify-center gap-8">
              <h1 className="text-white text-[36px] font-bold flex flex-col text-center md:text-left justify-center">
                ABOUT
                <span className="text-white text-[36px] font-light">
                  HYDRA VR
                </span>
              </h1>
              <p className="text-sm lg:text-base md:flex hidden text-white">
                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
                mattis rhoncus urna neque viverra justo. Vivamus at augue eget
                arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
                Aenean et tortor at risus viverra adipiscing at in. Mattis
                aliquam faucibus purus in massa. Est placerat in egestas erat
                imperdiet sed. Consequat semper viverra nam libero justo laoreet
                sit amet. Aliquam etiam erat velit scelerisque in dictum non
                consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec
                ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet
                nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n
                tempor.
              </p>
            </div>
            <Button title="LET’S GET IN TOUCH" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
