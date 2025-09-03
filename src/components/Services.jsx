import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaCloud, FaTools } from 'react-icons/fa';
import TiltCard from './TiltCard';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-5xl text-neon-teal" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks like React, Vue, and Angular. Focus on performance, accessibility, and user experience.",
      technologies: ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-neon-teal/20 to-neon-purple/20",
      hoverGradient: "from-neon-teal/30 to-neon-purple/30"
    },
    {
      icon: <FaServer className="text-5xl text-neon-purple" />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Python, and databases. Implementing RESTful APIs, authentication, and data management.",
      technologies: ["Node.js", "Python", "Express", "MongoDB"],
      gradient: "from-neon-purple/20 to-neon-blue/20",
      hoverGradient: "from-neon-purple/30 to-neon-blue/30"
    },
    {
      icon: <FaCloud className="text-5xl text-neon-blue" />,
      title: "Cloud Solutions",
      description: "Deploying and managing applications on cloud platforms. Implementing scalable architectures, CI/CD pipelines, and infrastructure as code.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      gradient: "from-neon-blue/20 to-neon-cyan/20",
      hoverGradient: "from-neon-blue/30 to-neon-cyan/30"
    },
    {
      icon: <FaTools className="text-5xl text-neon-cyan" />,
      title: "DevOps & Tools",
      description: "Streamlining development workflows with automation, monitoring, and deployment strategies. Ensuring code quality and efficient delivery.",
      technologies: ["GitHub Actions", "Jenkins", "Monitoring", "Testing"],
      gradient: "from-neon-cyan/20 to-neon-teal/20",
      hoverGradient: "from-neon-cyan/30 to-neon-teal/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-teal/3 via-transparent to-neon-purple/3"></div>
      
      {/* Service-themed Floating Icons */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`service-icon-${i}`}
          className="absolute text-2xl opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            color: ['#00ff88', '#8b5cf6', '#06b6d4', '#f59e0b'][i % 4]
          }}
          animate={{
            y: [-30, 30, -30],
            rotate: [0, 360, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear"
          }}
        >
          {['⚡', '🔧', '☁️', '💻', '🚀', '⚙️', '🔗', '📱'][i]}
        </motion.div>
      ))}
      
      {/* Code Symbol Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`code-sparkle-${i}`}
          className="absolute text-sm font-mono text-purple-400 opacity-40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "linear"
          }}
        >
          {['</>', '{}', '[]', '()', '<>', '&&'][i]}
        </motion.div>
      ))}
      
      {/* Tech Sparkle Balls */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`tech-sparkle-${i}`}
          className="absolute w-3 h-3 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `linear-gradient(45deg, ${['#00ff88', '#8b5cf6', '#06b6d4', '#f59e0b', '#ef4444'][i]}, ${['#06b6d4', '#f59e0b', '#ef4444', '#00ff88', '#8b5cf6'][i]})`
          }}
          animate={{
            y: [-25, 25, -25],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 7 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear"
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-neon-teal/20 rounded-lg rotate-45"
        animate={{
          rotate: [45, 135, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10 rounded-full"
        animate={{
          y: [-10, 10, -10],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-neon-cyan/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          {Array.from({ length: 6 }).map((_, i) => (
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
          <motion.h2
            className="relative text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ser<span className="relative bg-gradient-to-r from-purple-500 via-violet-600 to-purple-700 bg-clip-text text-transparent">
              v
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
            </span>ices
            <motion.span
              className="absolute left-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-700 rounded-full"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              style={{ transformOrigin: 'center' }}
            />
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive full-stack development services to bring your ideas to life with cutting-edge technologies and innovative solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <TiltCard className="h-full">
                <div className="relative h-full">
                  {/* Card Background with Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>

                  {/* Glassmorphism Card */}
                  <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:border-transparent transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20 overflow-hidden">
                    {/* Animated Gradient Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-violet-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                      <div className="w-full h-full bg-slate-900/90 rounded-2xl"></div>
                    </div>
                    {/* Enhanced Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-violet-600/15 to-purple-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon Container */}
                      <motion.div
                        className="mb-6 flex justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <div className="relative">
                          <div className="p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
                            {service.icon}
                          </div>
                          {/* Icon glow effect */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/30 to-violet-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                        </div>
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        className="text-xl sm:text-2xl font-bold text-white mb-4 text-center group-hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {service.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors duration-300"
                        whileHover={{ scale: 1.01 }}
                      >
                        {service.description}
                      </motion.p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 justify-center mt-auto">
                        {service.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1.5 text-xs sm:text-sm bg-white/10 text-gray-300 rounded-full border border-white/20 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white transition-all duration-300 backdrop-blur-sm"
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "rgba(139, 92, 246, 0.1)",
                              borderColor: "rgba(139, 92, 246, 0.5)"
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Subtle border glow */}
                    <div className="absolute inset-0 rounded-2xl border border-gradient-to-r from-neon-teal/20 via-neon-purple/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

