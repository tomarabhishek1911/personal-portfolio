import React, { useState } from "react";
import RS1 from "../assets/projects/RS1.pdf";
import RS2 from "../assets/projects/RS2.pdf";
import RS3 from "../assets/projects/RS3.pdf";
import RS4 from "../assets/projects/RS4.pdf";
import RS5 from "../assets/projects/RS5.pdf";
import RS6 from "../assets/projects/RS6.pdf";
import RS7 from "../assets/projects/RS7.pdf";
import { RESEARCH } from "../constants";
import { motion } from "framer-motion";

const Research = () => {
  const [showAll, setShowAll] = useState(false);
  const researchPapers = [RS1, RS2, RS3, RS4, RS5, RS6, RS7];

  const visibleResearch = showAll ? RESEARCH : RESEARCH.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 0.5}}
      className="my-20 text-center text-4xl"> Web-Development Work </motion.h2>
      <div>
        {visibleResearch.map((research, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className="w-full lg:w-1/4">
              <img
                src={research.image}
                width={150}
                height={150}
                alt={research.title}
                className="mb-6 rounded"
              />
              <a
                href={research.link}
                download
                className="mt-2 inline-block rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white px-4 py-2 text-sm font-semibold tracking-tight hover:opacity-90 transition-opacity duration-300 mb-4">
                  
                Link
              </a>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1.5}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-bold">{research.title}</h6>
              <p className="mb-4 text-neutral-400">{research.description}</p>
              {research.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400">

                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="text-center my-6">
        <button
          onClick={toggleShowAll}
          className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white px-4 py-2 text-sm font-semibold tracking-tight hover:opacity-90 transition-opacity duration-300">

          {showAll ? "Show Less" : "View More"}{" "}
          <span className="ml-2">
            {showAll ? "▲" : "▼"}
          </span>
        </button>
      </motion.div>
    </div>
  );
};

export default Research;
