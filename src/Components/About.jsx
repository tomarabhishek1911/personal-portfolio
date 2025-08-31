import aboutImg from "../assets/sample about2.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h2>

      <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity: 1, x: 0 }}
        initial={{opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-5 max-w-1xl py-8 font-light tracking-normal text-lg lg:text-base text-wrap">
            I'm Abhishek Singh Tomar, a passionate Computer Science and Engineering undergraduate at Lovely Professional University. I specialize in full-stack web development using the MERN stack, with a strong focus on building scalable, responsive, and user-centric applications. I enjoy transforming ideas into working digital solutions—from laundry service platforms with real-time scheduling to interactive blogging and game-based web apps.

Alongside academic learning, I've actively honed my coding skills by solving over 500 problems on LeetCode, earning multiple stars on HackerRank, and completing industry-relevant certifications, including Python and cloud computing. I'm always eager to learn, adapt, and collaborate, whether it's leading a team project or diving deep into backend logic and frontend polish.

With a solid foundation in programming languages like C++, Python, and JavaScript, and a creative problem-solving mindset, I strive to grow as a developer who not only writes code but builds meaningful user experiences.
                        </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
