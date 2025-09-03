import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const experiences = [
  {
    id: 1,
    role: 'Frontend Intern',
    company: 'JOL Energy Pvt Ltd',
    duration: 'Jul 2025 - Aug 2025',
    description: 'Worked on frontend development tasks, building responsive UI components and collaborating with the design team.',
  },
  {
    id: 2,
    role: 'Microsoft Azure AI Fundamentals',
    company: 'Microsoft',
    duration: 'Issued: 24 Jun 2025',
    description: 'Certified in Microsoft Azure AI Fundamentals, demonstrating knowledge of AI concepts and Azure AI services.',
  },
  {
    id: 3,
    role: 'MERN Full Stack Development',
    company: 'Ethnus',
    duration: 'Jun 2025 - Jul 2025',
    description: 'Completed comprehensive MERN stack development certification covering MongoDB, Express.js, React, and Node.js.',
  },
];

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/3 via-transparent to-blue-600/3"></div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 border border-blue-500/20 rounded-lg rotate-45"
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
        className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-br from-blue-600/10 to-blue-700/10 rounded-full"
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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {Array.from({ length: 8 }).map((_, i) => (
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
            Exp<span className="relative bg-gradient-to-r from-purple-500 via-violet-600 to-purple-700 bg-clip-text text-transparent">
              e
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
            </span>rience
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
            My professional journey and key milestones in software development
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Enhanced Timeline */}
          <div className="relative border-l-4 border-gradient-to-b from-white to-gray-300 ml-8">
            {experiences.map(({ id, role, company, duration, description }, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-12 ml-8 relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute -left-12 top-2 w-6 h-6 bg-gradient-to-r from-white to-gray-300 rounded-full border-4 border-slate-900 shadow-lg"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white to-gray-300 animate-pulse"></div>
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 group hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">
                        {role}
                      </h3>
                      <span className="text-sm text-white font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/20 mt-2 md:mt-0">
                        {duration}
                      </span>
                    </div>

                    <p className="text-lg text-gray-300 font-medium mb-3 group-hover:text-gray-200 transition-colors duration-300">
                      {company}
                    </p>

                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {description}
                    </p>
                  </div>

                  {/* Subtle border glow */}
                  <div className="absolute inset-0 rounded-2xl border border-gradient-to-r from-white/20 via-gray-300/20 to-gray-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
