import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaCode } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiKubernetes, SiGraphql } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'React', level: 75, icon: <FaReact className="text-2xl" />, color: 'text-blue-400' },
    { name: 'Node.js', level: 70, icon: <FaNodeJs className="text-2xl" />, color: 'text-green-400' },
    { name: 'Python', level: 80, icon: <FaPython className="text-2xl" />, color: 'text-yellow-400' },
    { name: 'TypeScript', level: 65, icon: <SiTypescript className="text-2xl" />, color: 'text-blue-500' },
    { name: 'AWS', level: 60, icon: <FaAws className="text-2xl" />, color: 'text-orange-400' },
    { name: 'Docker', level: 55, icon: <FaDocker className="text-2xl" />, color: 'text-blue-600' }
  ];

  const technologies = [
    { name: 'React', icon: <FaReact />, color: 'hover:text-blue-400' },
    { name: 'Vue.js', icon: <FaCode />, color: 'hover:text-green-400' },
    { name: 'Angular', icon: <FaCode />, color: 'hover:text-red-400' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'hover:text-green-500' },
    { name: 'Python', icon: <FaPython />, color: 'hover:text-yellow-500' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'hover:text-blue-600' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'hover:text-green-600' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'hover:text-blue-700' },
    { name: 'AWS', icon: <FaAws />, color: 'hover:text-orange-500' },
    { name: 'Docker', icon: <FaDocker />, color: 'hover:text-blue-500' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: 'hover:text-blue-400' },
    { name: 'GraphQL', icon: <SiGraphql />, color: 'hover:text-pink-500' }
  ];

  return (
    <SectionWrapper id="about" className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/3 via-transparent to-blue-600/3"></div>
      
      {/* Optimized Floating Sparkles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Optimized Sparkle Balls */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`sparkle-ball-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-25, 25, -25],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear"
          }}
        />
      ))}

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-24 h-24 border border-blue-500/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-16 w-16 h-16 bg-gradient-to-br from-blue-600/10 to-blue-700/10 rounded-lg rotate-45"
        animate={{
          rotate: [45, 135, 45],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Enhanced Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-white/20">
                  <img
                    src="/Gemini_Generated_Image_1qg4nc1qg4nc1qg4.png"
                    alt="Vivek Jaiswal"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Simple overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-violet-600/10 rounded-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>

                  {/* Simple border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-purple-400/30"></div>
                </div>


              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative inline-block">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-20, -40, -20],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                <h2 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight z-10">
                  Ab<span className="relative bg-gradient-to-r from-purple-500 via-violet-600 to-purple-700 bg-clip-text text-transparent">
                    o
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full"
                        style={{
                          top: `${-10 + i * 5}px`,
                          left: `${-5 + i * 10}px`,
                        }}
                        animate={{
                          y: [-5, 5, -5],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "linear"
                        }}
                      />
                    ))}
                  </span>ut Me
                  <motion.span
                    className="absolute left-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-700 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: 'center' }}
                  />
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light">
                I'm a passionate <span className="text-blue-400 font-semibold">final year BTech CSE student</span> with a keen interest in full-stack development.
                I'm enthusiastic about creating innovative digital solutions and bringing ideas to life through clean, efficient code.
              </p>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light">
                I'm actively learning and exploring modern web technologies, building personal projects, and contributing to <span className="text-blue-500 font-semibold">open-source projects</span>.
                When I'm not coding, you can find me staying updated with the latest trends in technology and expanding my knowledge in the field.
              </p>
            </motion.div>

            {/* Enhanced Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Core Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 ${skill.color} group-hover:border-white/40 transition-all duration-300`}>
                        {skill.icon}
                      </div>
                      <span className="text-white font-medium text-sm">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                    className="group"
                  >
                    <div className="flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                      <span className={`text-xl transition-colors duration-300 ${tech.color}`}>
                        {tech.icon}
                      </span>
                      <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
