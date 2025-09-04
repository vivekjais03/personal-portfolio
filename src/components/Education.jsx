import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const educationData = [
  {
    id: 1,
    degree: 'BTech in Computer Science and Engineering',
    institution: 'Vellore Institute of Technology - Vellore',
    duration: 'Aug 2022 - Jul 2026',
    description:
      'Currently pursuing B.Tech in Computer Science and Engineering with focus on software development, data structures, algorithms, and modern web technologies.',
    grade: '8.52 CGPA',
    skills: [
      'Data Structures',
      'Algorithms',
      'Web Development',
      'Software Engineering',
      'Database Management',
    ],
  },
  {
    id: 2,
    degree: 'Class 12 (Higher Secondary)',
    institution: 'Nav Jeevan Mission School - Deoria',
    duration: 'Apr 2021 - May 2022',
    description:
      'Completed higher secondary education with Physics, Chemistry, and Mathematics as main subjects. Built strong foundation in science and mathematics.',
    grade: '',
    skills: [
      'Physics',
      'Chemistry',
      'Mathematics',
      'Problem Solving',
      'Analytical Thinking',
    ],
  },
  {
    id: 3,
    degree: 'Class 10 (Secondary School)',
    institution: 'Nav Jeevan Mission School - Deoria',
    duration: 'Apr 2019 - May 2020',
    description:
      'Completed secondary education with focus on fundamental subjects and development of logical reasoning skills.',
    grade: '',
    skills: [
      'Mathematics',
      'Science',
      'English',
      'Social Studies',
      'Logical Reasoning',
    ],
  },
];

const Sparkles = () => {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-600 rounded-full shadow-lg shadow-purple-500/30"
          initial={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 80 - 40,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: [null, Math.random() * -40 - 20],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
};

const Education = () => {
  return (
    <SectionWrapper
      id="education"
      className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/3 via-transparent to-blue-600/3"></div>
      
      {/* Education-themed Floating Icons */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`edu-icon-${i}`}
          className="absolute text-xl opacity-25"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            color: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][i % 4]
          }}
          animate={{
            y: [-25, 25, -25],
            rotate: [0, 180, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            delay: i * 1,
            ease: "linear"
          }}
        >
          {['🎓', '📚', '📝', '✏️', '📊', '💻', '🔬', '🏆'][i]}
        </motion.div>
      ))}
      
      {/* Left Side Education Icons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`left-edu-${i}`}
          className="absolute text-lg opacity-30"
          style={{
            top: `${20 + i * 12}%`,
            left: `${5 + Math.random() * 15}%`,
            color: ['#8b5cf6', '#06b6d4', '#10b981'][i % 3]
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-5, 5, -5],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear"
          }}
        >
          {['📖', '📜', '📋', '🖥️', '🔍', '📊'][i]}
        </motion.div>
      ))}
      
      {/* Left Side Academic Text */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`left-text-${i}`}
          className="absolute text-xs font-semibold text-purple-300 opacity-40"
          style={{
            top: `${30 + i * 20}%`,
            left: `${8 + Math.random() * 10}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "linear"
          }}
        >
          {['CGPA', 'VIT', 'BTech', 'CSE'][i]}
        </motion.div>
      ))}
      
      {/* Academic Symbols */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`academic-${i}`}
          className="absolute text-sm font-bold text-purple-400 opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear"
          }}
        >
          {['A+', 'PhD', 'BSc', 'MSc', 'GPA', 'CSE'][i]}
        </motion.div>
      ))}
      
      {/* Floating Books */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`book-${i}`}
          className="absolute w-3 h-2 rounded-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `linear-gradient(45deg, ${['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'][i]}, ${['#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][i]})`
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 7 + i,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "linear"
          }}
        />
      ))}

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 border border-blue-500/20 rounded-full"
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-40 left-16 w-16 h-16 bg-gradient-to-br from-blue-600/10 to-blue-700/10 rounded-lg rotate-45"
        animate={{ rotate: [45, 225, 45], y: [-15, 15, -15] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Heading with sparkles */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            <motion.h2
              className="relative text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ed<span className="relative bg-gradient-to-r from-purple-400 via-violet-500 to-purple-700 bg-clip-text text-transparent">
                u
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
              </span>cation
              {/* Underline */}
              <motion.span
                className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-700 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                style={{ transformOrigin: 'center' }}
              />
            </motion.h2>
            {/* Sparkles floating around */}
            <Sparkles />
          </div>

          {/* Subtitle */}
          <motion.p
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            My academic background and professional certifications that shaped
            my career
          </motion.p>
        </motion.div>

        {/* Timeline (same as before) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white to-gray-300"></div>

            {educationData.map(({ id, degree, institution, duration, description, grade, skills }, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-16"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute -left-16 top-6 w-4 h-4 bg-gradient-to-r from-white to-gray-300 rounded-full border-4 border-slate-900 shadow-lg"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white to-gray-300 animate-pulse"></div>
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 
                             hover:border-white/20 transition-all duration-500 group hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors duration-300 mb-2 sm:mb-0">
                        {degree}
                      </h3>
                      {grade && (
                        <span className="text-sm text-white font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/20 self-start">
                          {grade}
                        </span>
                      )}
                    </div>

                    <div className="mb-4">
                      <p className="text-lg text-gray-300 font-medium mb-1 group-hover:text-gray-200 transition-colors duration-300">
                        {institution}
                      </p>
                      <span className="text-sm text-gray-400 font-medium">
                        {duration}
                      </span>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      {description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3">
                        Key Skills & Knowledge:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="px-3 py-1.5 text-xs sm:text-sm bg-white/10 text-gray-300 rounded-full border border-white/20 
                                       hover:border-white/50 hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-sm"
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              borderColor: 'rgba(255, 255, 255, 0.5)',
                            }}
                            transition={{
                              type: 'spring',
                              stiffness: 400,
                              damping: 17,
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
