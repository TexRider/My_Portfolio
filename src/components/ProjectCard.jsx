import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-medium py-1 px-3 rounded-full transition-colors duration-300 shadow-md"
              aria-label="Live Demo"
            >
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="bg-white text-gray-800 hover:bg-gray-800 hover:text-white text-xs font-medium py-1 px-3 rounded-full transition-colors duration-300 shadow-md"
              aria-label="View Code"
            >
              Code
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 py-1 px-3 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;