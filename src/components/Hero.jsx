import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/programming.svg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0
  },
  visibale: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5 , delay: delay},
  },
});
const Hero = () => {
  return (
    <main className="border-b border-neutral-900 pb-4 lg:mb-3.5">
      <div className="flex flex-wrap gap-6 md:flex-nowrap">
        <div className="w-full lg:w-1/2">
          <div className="felx flex-col items-center lg:items-start lg:text-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visibale"
            className="pb-8 text-4xl font-thin tracking-tight lg:mt-16 lg:text-5xl">
            Md Mohammed
            </motion.h1>
            <motion.p
            variants={container(0.5)}
            initial="hidden"
            animate="visibale"
            className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.p>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visibale"
            className="my-2 max-w-xl py-6 font-light lg:text-start tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full   lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 1, delay: 1.2}}
             src={profilePic} alt="Profile Pictuer" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
