import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

// IMport images
import AdminImage from '../assets/images/Portfolio_Projects/Admin.png';
import ChatbotImage from '../assets/images/Portfolio_Projects/chatbot.png';
import FrontendImage from '../assets/images/Portfolio_Projects/Frontend.png';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform - VTrolly",
      description:
        "A full-featured e-commerce platform with product filtering, cart functionality, and secure checkout. Secure checkout methods are created per request",
      technologies: ["React", "Node.js", "MongoDB", "Framer Motion"],
      image: FrontendImage,
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Admin Platforms",
      description:
        "A fully inetgrated and secured admin panel to manage the fromtend. Priotized on security and authorization in order to provide security and intruder prevention",
      technologies: ["React", "MongoDB", "TailwindCSS", "Framer Motion"],
      image: AdminImage,
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Chatbots",
      description:
        "A simplified and responsive chatbot to the requested web application. Customizable based on request through admin access and responsive to web content",
      technologies: ["React", "MongoDB", "TailwindCSS", "Framer Motion"],
      image: ChatbotImage,
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website - Personal",
      description:
        "A modern portfolio website with smooth animations and responsive design (this website!).",
      technologies: ["React", "TailwindCSS", "Framer Motion", "React Scroll"],
      image: "https://via.placeholder.com/400x250/EC4899/FFFFFF?text=Portfolio",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website - Ishara Perera",
      description:
        "A modern portfolio website with gallery display, requests maangement, and separate projects for user viewing.",
      technologies: ["React", "TailwindCSS", "Framer Motion", "React Scroll"],
      image: "https://via.placeholder.com/400x250/EC4899/FFFFFF?text=Portfolio",
      demoUrl: "https://portfolio-ishara-perera.vercel.app/",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and
            expertise in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
