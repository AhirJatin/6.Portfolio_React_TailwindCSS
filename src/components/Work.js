import React from "react";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// images
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-10 lg:flex-row ">
          <div className="mb-10 flex flex-1 flex-col gap-y-12 lg:mb-0">
            {/* text */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
            >
              <h2 className="h2 font-bold leading-tight text-accent">
                My latest <br />
                Work.
              </h2>
              <p className=" mb-12 max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                repudiandae consequatur accusamus architecto rem, perspiciatis
                delectus placeat similique quidem cupiditate.
              </p>
              <button className="btn btn-sm">View all Projects</button>
            </motion.div>
            {/* image */}
            {/* Project 1 */}
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              className=" group relative overflow-hidden rounded-xl border-2 border-white/50"
            >
              {/* overlay */}
              <div className=" absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
              {/* image */}
              <img
                className="transition-all duration-500 group-hover:scale-125"
                src={Img1}
                alt=""
              />
              {/* pre-title */}
              <div className=" absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className=" absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
                <span className="text-3xl text-white">project title</span>
              </div>
            </motion.div>
          </div>
          <div className="flex-1">
            <div className=" flex flex-col gap-y-14">
              {/* Project 2 */}
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                className=" group relative overflow-hidden rounded-xl border-2 border-white/50"
              >
                {/* overlay */}
                <div className=" absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
                {/* image */}
                <img
                  className="transition-all duration-500 group-hover:scale-125"
                  src={Img2}
                  alt=""
                />
                {/* pre-title */}
                <div className=" absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
                  <span className="text-gradient">UI/UX Design</span>
                </div>
                {/* title */}
                <div className=" absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
                  <span className="text-3xl text-white">project title</span>
                </div>
              </motion.div>
              {/* Project 3 */}
              <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                whileInView={"show"}
                className=" group relative overflow-hidden rounded-xl border-2 border-white/50"
              >
                {/* overlay */}
                <div className=" absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
                {/* image */}
                <img
                  className="transition-all duration-500 group-hover:scale-125"
                  src={Img3}
                  alt=""
                />
                {/* pre-title */}
                <div className=" absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
                  <span className="text-gradient">UI/UX Design</span>
                </div>
                {/* title */}
                <div className=" absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
                  <span className="text-3xl text-white">project title</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
