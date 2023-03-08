import React from "react";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            <h3 className="text-3xl font-bold uppercase tracking-wider text-accent">
              Get in Touch
            </h3>
            <p className="font-primary text-[36px] leading-[1] tracking-wide lg:text-[60px]">
              Let's work <br /> together!
            </p>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-1 flex-col items-start gap-y-6 rounded-2xl border p-6 pb-10"
          >
            <input
              type="text"
              className="w-full border-b border-white/50 bg-transparent py-3 outline-none transition-all duration-300 placeholder:text-white focus:border-accent"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="w-full border-b border-white/50 bg-transparent py-3 outline-none transition-all duration-300 placeholder:text-white focus:border-accent"
              placeholder="Your Email"
            />
            <textarea
              className="mb-12 w-full resize-none border-b border-white/50 bg-transparent py-6 outline-none transition-all duration-300 placeholder:text-white focus:border-accent md:py-12"
              placeholder="Your Message"
            ></textarea>
            <button className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
