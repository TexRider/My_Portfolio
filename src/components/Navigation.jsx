import React from "react";
import { motion } from "framer-motion";

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8">
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            {item.name}
          </motion.a>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <motion.nav
        className={`fixed top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg md:hidden ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col p-4`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </motion.nav>
    </>
  );
};

export default Navigation;
