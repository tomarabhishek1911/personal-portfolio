import profilePic from "../assets/photo5.jpg";
import resumeFile from "../assets/resume.pdf"; 
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 1, delay: delay},
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-14 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
             className="pb-16 text-6xl font-serif tracking-tight lg:mt-16 lg:text-8xl">
              Abhishek Singh Tomar  
            </motion.h1> {/* Name of the portfolio holder */}
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
             className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              B.Tech CSE Student | Lovely Professional University {/* Current Designation */}
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-5 max-w-1xl py-8 font-light tracking-normal text-lg lg:text-base text-justify">
              {/* {HERO_CONTENT} */}
            I am Abhishek Singh Tomar, a dedicated and driven B.Tech student in Computer Science and Engineering at Lovely Professional University with a CGPA of 8.02. I have hands-on experience in full-stack web development using the MERN stack, backed by certifications and training from Cipher School and Udemy. With over 500+ problems solved on LeetCode and multiple projects deployed online—including a laundry service platform, a blogging website, and interactive applications like Tic-Tac-Toe with move history—I bring a strong foundation in coding, a passion for clean UI/UX, and practical deployment skills. I am proficient in C++, Python, JavaScript, and React, and I thrive in collaborative environments where problem-solving, adaptability, and leadership are key.

            </motion.p>

            {/* Resume Download Button */}
            
            <motion.a
              href={resumeFile}
              download="Abhishek_Singh_Tomar_CV.pdf"
              variants={container(1.5)}
            initial="hidden"
            animate="visible"
              className = "mt-1 inline-block rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white px-8 py-4 text-lg font-semibold tracking-tight hover:opacity-90 transition-opacity duration-300 mb-10"
            >
              Download CV
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-3">
          <div className="flex justify-center">
            <motion.img 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }} 
            src={profilePic}
            alt="Abhishek Singh Tomar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;