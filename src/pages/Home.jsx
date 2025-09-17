import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

// Import the profile image
import ProfileImage from "../assets/images/Profile_Image.png";
import ReactImage from "../assets/images/React.png";
import JSImage from "../assets/images/JS.png";
import TailwindImage from "../assets/images/TailwindCSS.png";

const TextType = ({
  texts,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer;

    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
    } else if (
      !isDeleting &&
      currentText.length < texts[currentTextIndex].length
    ) {
      // Typing
      timer = setTimeout(() => {
        setCurrentText(
          texts[currentTextIndex].substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    } else if (isDeleting && currentText.length > 0) {
      // Deleting
      timer = setTimeout(() => {
        setCurrentText(
          texts[currentTextIndex].substring(0, currentText.length - 1)
        );
      }, typingSpeed / 2);
    } else if (isDeleting && currentText.length === 0) {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    } else if (
      !isDeleting &&
      currentText.length === texts[currentTextIndex].length
    ) {
      // Finished typing, pause before deleting
      setIsPaused(true);
    }

    return () => clearTimeout(timer);
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    isPaused,
    texts,
    typingSpeed,
    pauseDuration,
  ]);

  return (
    <span className="inline-block font-inconsolata font-bold">
      {currentText}
      {showCursor && <span className="animate-pulse">{cursorCharacter}</span>}
    </span>
  );
};

const Home = () => {
  const titles = [
    "Frontend Developer",
    "Full-Stack Developer",
    "Web Portfolio Creator",
    "Software Engineer",
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Hi, I'm{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Pasindu Silva
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 min-h-[2.5rem]">
              <TextType
                texts={titles}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-base sm:text-lg">
              I create beautiful, functional, and responsive web applications
              with modern technologies like React, TailwindCSS, and Framer
              Motion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="btn-primary cursor-pointer text-center"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="border border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 font-bold py-2 px-4 rounded cursor-pointer transition-colors text-center"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Outer container - responsive size */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] mx-auto bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                {/* First ring - responsive size */}
                <motion.div
                  className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] bg-indigo-200 dark:bg-indigo-800 rounded-full flex items-center justify-center animate-float"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Second ring - responsive size */}
                  <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-[24rem] lg:h-[24rem] bg-indigo-300 dark:bg-indigo-700 rounded-full flex items-center justify-center">
                    {/* Third ring - responsive size (now contains the image) */}
                    <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-[20rem] lg:h-[20rem] bg-indigo-400 dark:bg-indigo-600 rounded-full flex items-center justify-center">
                      {/* Image container - responsive size */}
                      <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-40 md:h-40 lg:w-[18rem] lg:h-[18rem] rounded-full flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800">
                        <img
                          src={ProfileImage}
                          alt="Pasindu Silva"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating badges - responsive positions and sizes */}
              <motion.div
                className="absolute top-0 sm:top-2 md:top-4 -right-4 sm:-right-6 md:-right-8 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-yellow-50 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <img
                  src={ReactImage}
                  alt="React"
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 object-contain"
                />
              </motion.div>
              <motion.div
                className="absolute bottom-4 sm:bottom-6 md:bottom-8 -left-4 sm:-left-6 md:-left-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-cyan-50 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <img
                  src={TailwindImage}
                  alt="Tailwind"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain"
                />
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-6 sm:-right-8 md:-right-12 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <img
                  src={JSImage}
                  alt="JS"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;