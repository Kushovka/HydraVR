import Title from "../components/Title";
import { cardItems } from "../constants";
import Button from "../components/Button";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const Cards = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });
  return (
    <section id="services" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Title
          title="WHY BUILD"
          text="WITH HYDRA?"
          description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
        />
      </motion.div>
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cardItems.map((item, i) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              <div className="card-gradient flex flex-col items-center justify-center px-10 py-7 rounded-[40px] shadow-lg gap-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="border-[14px] z-20 border-[#0E0E0E]/40 rounded-full overflow-hidden">
                  <img
                    src={item.imgPath}
                    className="w-full h-full object-cover"
                    alt={item.title}
                  />
                </div>
                <div className="flex flex-col items-center justify-center space-y-6">
                  <h1 className="text-white text-xl xl:text-2xl font-semibold">
                    {item.title}
                  </h1>
                  <span className="w-[150px] h-[1px] bg-[#C0B7E8]/20" />
                  <p className="text-white md:text-sm">{item.description}</p>
                </div>
                <Button title="TRY IT NOW" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
