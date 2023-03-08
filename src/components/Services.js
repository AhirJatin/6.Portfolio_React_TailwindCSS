import React from "react";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
//icons
import { BsArrowUpRight } from "react-icons/bs";

// services data
const services = [
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptas laudantium sint excepturi minima optio earum esse quaerat illum impedit.",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptas laudantium sint excepturi minima optio earum esse quaerat illum impedit.",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptas laudantium sint excepturi minima optio earum esse quaerat illum impedit.",
    link: "Learn more",
  },
  {
    name: "Product Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptas laudantium sint excepturi minima optio earum esse quaerat illum impedit.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image*/}
          <div className=" mb-12 flex-1 mix-blend-lighten lg:mb-0 lg:bg-services lg:bg-bottom lg:bg-no-repeat">
            <motion.h2
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="h2 mb-6 text-accent"
            >
              What I DO
            </motion.h2>
            <motion.h3
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              className="h3  mb-16 max-w-[455px]"
            >
              I'm a Freelance Front-end Developer with over 5 years of
              experience.
            </motion.h3>
            <motion.button
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="btn btn-sm"
            >
              See my Work
            </motion.button>
          </div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                //  destructure services
                const { name, description, link } = service;
                return (
                  <div
                    key={index}
                    className="mb-9 flex border-b border-white/20"
                  >
                    <div className="max-w-[476px]">
                      <h4 className=" mb-6 font-primary text-[20px] font-semibold tracking-wider">
                        {name}
                      </h4>
                      <p className=" mb-5 font-secondary text-[16px] leading-tight md:text-[20px]">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col items-end">
                      <a
                        href="/"
                        className="btn mb-[42px] flex h-9 w-9 items-center justify-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="/" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
