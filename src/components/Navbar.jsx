import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  { id: "hero", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "services", label: "Services", icon: <FaBriefcase /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "education", label: "Education", icon: <FaGraduationCap /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  const scrollToSection = (id) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:flex fixed top-0 left-0 h-full w-20 
                   bg-black/40 backdrop-blur-md border-r border-white/10 shadow-xl 
                   flex-col items-center py-10 space-y-6 z-50"
      >
      {/* Logo */}
      <motion.div
        className="mb-10 text-white font-bold text-2xl tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-cyan-400 drop-shadow-[0_0_8px_#00f6ff]">V</span>
      </motion.div>

      {/* Navigation Items */}
      <div className="flex flex-col items-center gap-8">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative group flex items-center justify-center w-12 h-12 rounded-full cursor-pointer 
                        transition-all duration-300 ${
                          activeId === item.id
                            ? "bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_#00f6ff]"
                            : "text-gray-400 hover:text-white hover:bg-white/10"
                        }`}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="text-xl"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
            </motion.span>
            {/* Tooltip */}
            <span className="absolute left-14 opacity-0 group-hover:opacity-100 
              bg-black/70 text-white text-sm px-2 py-1 rounded-md transition-all duration-300 whitespace-nowrap">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>

      </motion.nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
          className="p-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-white shadow-lg"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-4 top-20 bottom-4
                       bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden z-40
                       flex flex-col"
          >
            <div className="flex flex-col p-6 space-y-4 overflow-y-auto">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-4 px-6 py-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeId === item.id
                      ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-semibold">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
