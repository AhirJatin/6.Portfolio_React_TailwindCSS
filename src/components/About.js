import React from "react";
//image
// import Image from "../assets/about.png";
//countup
import CountUp from "react-countup";
//intersection observer
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        {/*text*/}
        <div>
          <motion.h2
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="h2 text-accent"
          >
            About me
          </motion.h2>
          <motion.h3
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            className="h3 mb-4"
          >
            I'm a Freelance Front-end Developer with over 5 years of experience.
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className=" mb-6"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            natus nobis in earum cum ut amet veritatis veniam mollitia iure?
          </motion.p>
          {/* states */}
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            className="mb-12 flex gap-x-4 lg:gap-x-10"
          >
            <div>
              <div className=" text-gradient mb-2 font-tertiary text-[30px]">
                {inView ? <CountUp start={0} end={13} duration={3} /> : null}+
              </div>
              <div className=" font-primary text-sm tracking-[2px]">
                Years of <br />
                Experience.
              </div>
            </div>
            <div>
              <div className=" text-gradient mb-2 font-tertiary text-[30px]">
                {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                k+
              </div>
              <div className=" font-primary text-sm tracking-[2px]">
                Projects <br />
                Completed.
              </div>
            </div>
            <div>
              <div className=" text-gradient mb-2 font-tertiary text-[30px]">
                {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                k+
              </div>
              <div className=" font-primary text-sm tracking-[2px]">
                Satisfied <br />
                Clients.
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            whileInView={"show"}
            className="flex items-center gap-x-6"
          >
            <button className="btn btn-lg">Contact me</button>
            <a href="/" className="text-gradient btn-link">
              My Portfolio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
