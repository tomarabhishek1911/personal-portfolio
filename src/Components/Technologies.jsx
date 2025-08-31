 import { animate, motion } from "framer-motion"; 
import { SiCplusplus, SiReact, SiCss3, SiHtml5, SiJavascript, SiNodedotjs, SiGithub,SiLeetcode } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: {y: -10},
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

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCplusplus className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiReact className="text-7xl text-green-600"/>
                </motion.div>
                <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCss3 className="text-7xl text-white-400"/>
                </motion.div>
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiHtml5 className="text-7xl text-red-700"/>
                </motion.div>
                <motion.div
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-7xl text-purple-600"/>
                </motion.div>
                <motion.div
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNodedotjs className="text-7xl text-white-400"/>
                </motion.div>
                <motion.a
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                href="https://leetcode.com/u/abhishek__singh__tomar/"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiLeetcode className="text-7xl text-blue-800"/>
                </motion.a>
                <motion.a
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                href = "https://github.com/tomarabhishek1911"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiGithub className="text-7xl text-amber-700"/>
                </motion.a>
        </motion.div>
    </div>
  )
}

export default Technologies