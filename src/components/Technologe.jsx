import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariantes = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologe = () => {
  return (
    <div className="border-b border-neutral-900 pb-8">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl "
      >
        Technologes
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* TEch -1- */}
        <motion.div
          variants={iconVariantes(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-700"
        >
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>
        {/* TEch -2- */}
        <motion.div
          variants={iconVariantes(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-700"
        >
          <TbBrandNextjs className="text-6xl " />
        </motion.div>
        {/* TEch -3- */}
        <motion.div
          variants={iconVariantes(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-700"
        >
          <SiMongodb className="text-6xl text-green-500" />
        </motion.div>
        {/* TEch -4- */}
        <motion.div
          variants={iconVariantes(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-700"
        >
          <DiRedis className="text-6xl text-red-700" />
        </motion.div>
        {/* TEch -5- */}
        <motion.div
          variants={iconVariantes(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-700"
        >
          <FaNodeJs className="text-6xl text-green-500" />
        </motion.div>
        {/* TEch -6- */}
        <motion.div
          variants={iconVariantes(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-700"
        >
          <BiLogoPostgresql className="text-6xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologe;
