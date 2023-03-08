import React from "react";
// image
import Image from "../assets/avatar.svg";
//typing animation
import { TypeAnimation } from "react-type-animation";
// icons
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center lg:flex-row lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="text-[55px] font-bold leading-[1] lg:text-[80px]"
            >
              BEN AIDEN
            </motion.h1>
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              className="mb-6 font-secondary text-[36px] font-semibold uppercase leading-[1] lg:text-[60px]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "Youtuber",
                  2000,
                  "Designer",
                  2000,
                  "Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                className=" text-accent"
              />
            </motion.div>
            <motion.p
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="mx-auto mb-8 max-w-lg lg:mx-0"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              mollitia quia ut libero distinctio quam architecto sequi nobis
              quasi tempora?
            </motion.p>
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView={"show"}
              className="mx-auto mb-12 flex max-w-max items-center gap-x-5 lg:mx-0"
            >
              <button className="btn btn-sm">Contact me</button>
              <a href="/" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/*Socials*/}
            <motion.div
              variants={fadeIn("right", 0.7)}
              initial="hidden"
              whileInView={"show"}
              className=" mx-auto flex max-w-max items-center gap-x-6 text-[20px] lg:mx-0"
            >
              <a href="/">
                <FaYoutube />
              </a>
              <a href="/">
                <FaGithub />
              </a>
              <a href="/">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className=" hidden max-w-[320px] flex-1 lg:flex lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
