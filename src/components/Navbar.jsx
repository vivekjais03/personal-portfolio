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
          className="p-4 rounded-2xl bg-gradient-to-r from-black/90 to-gray-800/90 backdrop-blur-xl border border-gray-600/30 text-white shadow-2xl"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05, rotate: 180 }}
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
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw]
                         bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-xl
                         border-l border-gray-600/20 shadow-2xl z-40"
            >
              <div className="flex flex-col h-full p-6 pt-20">
                <div className="flex-1 space-y-2">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-4 w-full px-6 py-4 rounded-xl transition-all duration-300 ${
                        activeId === item.id
                          ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg scale-105 border border-gray-500/50"
                          : "text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105"
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-semibold text-lg">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-center text-gray-400 text-sm">
                    Vivek Jaiswal Portfolio
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
