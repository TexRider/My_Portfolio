import React, { useState } from "react";
import { motion } from "framer-motion";
import SkillBar from "../components/SkillBar";

const About = () => {
  const [showDialog, setShowDialog] = useState(false);
  const skills = [
    { skill: "React", level: 90 },
    { skill: "JavaScript", level: 85 },
    { skill: "HTML/CSS", level: 95 },
    { skill: "TailwindCSS", level: 88 },
    { skill: "Node.js", level: 75 },
    { skill: "UI/UX Design", level: 80 },
    { skill: "Vercel", level: 65 },
  ];

  const handleContactClick = () => {
    setShowDialog(true);
  };

  const handleConfirmCall = () => {
    window.location.href = "tel:+94761987997";
    setShowDialog(false);
  };

  const handleCancelCall = () => {
    setShowDialog(false);
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Confirmation Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-xl"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-2">
              Call Pasindu Silva?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              +94 76 198 7997
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleCancelCall}
                className="flex-1 py-3 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmCall}
                className="flex-1 py-3 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and
            expertise in web development.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <motion.div
            className="lg:w-1/2 bg-white dark:bg-gray-700 rounded-2xl p-6 md:p-8 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-600">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
              I am a Software Engineering student currently pursuing an honors
              degree, with over 2 years of experience in frontend and full-stack
              development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
              I specialize in building responsive, user-friendly web
              applications and have worked on several client projects, including
              web-based portfolios showcased in the projects section.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              With strong skills in problem solving, critical thinking, and
              efficient resource management, I am passionate about creating
              impactful digital solutions that combine functionality with clean
              design.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white text-sm uppercase tracking-wide mb-1">
                  Name:
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Pasindu Silva
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white text-sm uppercase tracking-wide mb-1">
                  Email:
                </h4>
                <p className="text-gray-600 dark:text-gray-300 break-all">
                  it18038910study@gmail.com
                </p>
              </div>
              <div
                className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg cursor-pointer transition-all hover:bg-gray-100 dark:hover:bg-gray-500 active:scale-95"
                onClick={handleContactClick}
              >
                <h4 className="font-semibold text-gray-800 dark:text-white text-sm uppercase tracking-wide mb-1">
                  Contact No:
                </h4>
                <p className="text-gray-600 dark:text-gray-300 flex items-center">
                  <span>+94 76 198 7997</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white text-sm uppercase tracking-wide mb-1">
                  Location:
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Colombo 14, Sri Lanka
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg sm:col-span-2">
                <h4 className="font-semibold text-gray-800 dark:text-white text-sm uppercase tracking-wide mb-1">
                  Availability:
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Open to Work
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 bg-white dark:bg-gray-700 rounded-2xl p-6 md:p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-600">
              My Skills
            </h3>
            <div className="space-y-7">
              {skills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.skill}
                  level={skill.level}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
