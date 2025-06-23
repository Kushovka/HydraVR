import Button from "../components/Button";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <section id="howto" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="contact-gradient md:rounded-[100px] rounded-[50px]"
        >
          <div className="flex flex-col items-center justify-center md:py-24 py-12 gap-6">
            {/* title */}
            <div className="flex flex-col items-center justify-center gap-6 pb-14">
              <h1 className="md:text-[36px] sm:text-[32px] text-[28px] text-white font-semibold">
                JOIN HYDRA
              </h1>
              <div className="md:w-full w-2/3 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />
              <h2 className="md:text-[36px] sm:text-[32px] text-[28px] text-center text-white font-light">
                Let’s Build Your VR Experience
              </h2>
            </div>
            {/* name */}
            <div className="div-contact flex-col lg:flex-row">
              <input
                type="text"
                placeholder="First Name"
                className="input-contact"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input-contact"
              />
            </div>
            {/* email + phone */}
            <div className="div-contact flex-col lg:flex-row">
              <input
                type="text"
                placeholder="Email"
                className="input-contact"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="input-contact"
              />
            </div>
            {/* Subject */}
            <div className="div-contact flex-col lg:flex-row">
              <input
                type="text"
                placeholder="Subject"
                className="input-contact"
              />
            </div>
            {/* message */}
            <div className="div-contact pb-10 flex-col lg:flex-row">
              <textarea
                type="text"
                rows={"7"}
                placeholder="Tell Us Something..."
                className="input-contact"
              />
            </div>
            <Button title="SEND TO HYDRA" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
