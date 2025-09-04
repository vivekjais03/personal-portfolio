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

      {/* Mobile Bottom Navigation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50
                   bg-black/90 backdrop-blur-xl border-t border-white/10
                   px-2 py-2 safe-area-pb"
      >
        <div className="flex justify-around items-center max-w-md mx-auto">
          {navItems.slice(0, 5).map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center p-2 rounded-lg min-w-[60px] transition-all duration-300 ${
                activeId === item.id
                  ? "text-purple-400 bg-purple-500/20"
                  : "text-gray-400 hover:text-white"
              }`}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-lg mb-1">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </motion.button>
          ))}
          
          {/* More Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col items-center justify-center p-2 rounded-lg min-w-[60px] text-gray-400 hover:text-white transition-colors duration-300"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-lg mb-1">⋯</span>
            <span className="text-xs font-medium">More</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile More Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden fixed bottom-20 left-4 right-4 z-40
                       bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden
                       border border-white/10"
          >
            <div className="p-4">
              {navItems.slice(5).map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeId === item.id
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
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
