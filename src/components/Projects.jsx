import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import TiltCard from './TiltCard';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiVite } from 'react-icons/si';

// Projects data
const projectsData = [
  {
    id: 1,
    title: 'Cab Sharing Website',
    description: 'Modern cab sharing platform with ride booking, driver matching, real-time tracking, and responsive design for seamless transportation experience.',
    techStack: [
      { name: 'React', iconType: 'FaReact', color: 'text-blue-400' },
      { name: 'TailwindCSS', iconType: 'SiTailwindcss', color: 'text-teal-400' },
      { name: 'JavaScript', iconType: 'FaCode', color: 'text-yellow-400' },
      { name: 'Vite', iconType: 'SiVite', color: 'text-purple-400' }
    ],
    github: 'https://github.com/vivekjais03/cab-sharing',
    demo: 'https://cab-sharing-seven.vercel.app/',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop&crop=center',
    gradient: 'from-blue-500/20 to-blue-600/20',
    hoverGradient: 'from-blue-500/30 to-blue-600/30'
  },
  {
    id: 2,
    title: 'PodCast Streaming Service',
    description: 'Modern podcast streaming platform with audio player, episode management, user subscriptions, and responsive design for seamless listening experience.',
    techStack: [
      { name: 'React', iconType: 'FaReact', color: 'text-blue-400' },
      { name: 'Node.js', iconType: 'FaNodeJs', color: 'text-green-400' },
      { name: 'MongoDB', iconType: 'SiMongodb', color: 'text-green-500' },
      { name: 'Express', iconType: 'SiExpress', color: 'text-gray-400' }
    ],
    github: 'https://github.com/vivekjais03/podcast-streaming-service',
    demo: 'https://podcast-streaming-service-rouge.vercel.app/',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=500&h=300&fit=crop&crop=center',
    gradient: 'from-blue-600/20 to-blue-700/20',
    hoverGradient: 'from-blue-600/30 to-blue-700/30'
  },
  {
    id: 3,
    title: 'House Price Prediction',
    description: 'Machine learning model to predict house prices using various features like location, size, and amenities with interactive web interface.',
    techStack: [
      { name: 'React', iconType: 'FaReact', color: 'text-blue-400' },
      { name: 'Node.js', iconType: 'FaNodeJs', color: 'text-green-400' },
      { name: 'TailwindCSS', iconType: 'SiTailwindcss', color: 'text-teal-400' },
      { name: 'Express', iconType: 'SiExpress', color: 'text-gray-400' }
    ],
    github: 'https://github.com/vivekjais03/House_Price_Prediction',
    demo: 'https://house-price-prediction-pi-two.vercel.app/',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop&crop=center',
    gradient: 'from-blue-400/20 to-blue-500/20',
    hoverGradient: 'from-blue-400/30 to-blue-500/30'
  },
  {
    id: 4,
    title: 'API Gateway Service',
    description: 'Scalable API gateway with authentication, rate limiting, logging, and microservices architecture.',
    techStack: [
      { name: 'Node.js', iconType: 'FaNodeJs', color: 'text-green-400' },
      { name: 'Express', iconType: 'SiExpress', color: 'text-gray-400' },
      { name: 'MongoDB', iconType: 'SiMongodb', color: 'text-green-500' },
      { name: 'Docker', iconType: 'FaCode', color: 'text-blue-400' }
    ],
    github: 'https://github.com/user/api-gateway',
    demo: 'https://api-gateway.demo',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&crop=center',
    gradient: 'from-blue-700/20 to-blue-500/20',
    hoverGradient: 'from-blue-700/30 to-blue-500/30'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with 3D animations, particle effects, and responsive design.',
    techStack: [
      { name: 'React', iconType: 'FaReact', color: 'text-blue-400' },
      { name: 'Vite', iconType: 'SiVite', color: 'text-yellow-400' },
      { name: 'TailwindCSS', iconType: 'SiTailwindcss', color: 'text-teal-400' },
      { name: 'Framer Motion', iconType: 'FaCode', color: 'text-purple-400' }
    ],
    github: 'https://github.com/user/portfolio-website',
    demo: 'https://portfolio-website.demo',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop&crop=center',
    gradient: 'from-blue-600/20 to-blue-400/20',
    hoverGradient: 'from-blue-600/30 to-blue-400/30'
  },
  {
    id: 6,
    title: 'Task Management System',
    description: 'Collaborative task management with real-time updates, team features, and project tracking.',
    techStack: [
      { name: 'React', iconType: 'FaReact', color: 'text-blue-400' },
      { name: 'Node.js', iconType: 'FaNodeJs', color: 'text-green-400' },
      { name: 'MongoDB', iconType: 'SiMongodb', color: 'text-green-500' },
      { name: 'Express', iconType: 'SiExpress', color: 'text-gray-400' }
    ],
    github: 'https://github.com/user/task-manager',
    demo: 'https://task-manager.demo',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center',
    gradient: 'from-blue-400/20 to-blue-700/20',
    hoverGradient: 'from-blue-400/30 to-blue-700/30'
  }
];

// Categories
const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];

// Icon map
const getIcon = (iconType) => {
  const iconMap = {
    FaReact: <FaReact />,
    FaNodeJs: <FaNodeJs />,
    SiMongodb: <SiMongodb />,
    SiExpress: <SiExpress />,
    SiTailwindcss: <SiTailwindcss />,
    SiVite: <SiVite />,
    FaCode: <FaCode />
  };
  return iconMap[iconType] || <FaCode />;
};

// Sparkle effect for heading
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
            scale: 0
          }}
          animate={{
            y: [null, Math.random() * -40 - 20],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 2
          }}
        />
      ))}
    </>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category.toLowerCase() === filter.toLowerCase());

  const handleDemoClick = (e, projectTitle, demoUrl) => {
    if (demoUrl.includes('.demo')) {
      e.preventDefault();
      alert(`🚀 Demo for "${projectTitle}" is coming soon!\n\nThis project is currently in development. Check back later for a live demo!`);
      return;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <SectionWrapper id="projects" className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Project-themed Floating Elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`project-icon-${i}`}
          className="absolute text-xl opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            color: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'][i % 5]
          }}
          animate={{
            y: [-25, 25, -25],
            rotate: [0, 180, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear"
          }}
        >
          {['💻', '🚀', '⭐', '🔧', '💡', '🌐', '📱', '📊', '🔗', '⚙️'][i]}
        </motion.div>
      ))}
      
      {/* GitHub Stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`github-star-${i}`}
          className="absolute text-yellow-400 opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "linear"
          }}
        >
          ⭐
        </motion.div>
      ))}
      
      {/* Development Symbols */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`dev-symbol-${i}`}
          className="absolute text-sm font-mono text-purple-400 opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: i * 1,
            ease: "linear"
          }}
        >
          {['git', 'npm', 'api', 'css', 'jsx', 'sql'][i]}
        </motion.div>
      ))}
      
      {/* Project Sparkle Balls */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`project-sparkle-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `linear-gradient(45deg, ${['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'][i]}, ${['#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][i]})`
          }}
          animate={{
            y: [-30, 30, -30],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "linear"
          }}
        />
      ))}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Heading with sparkles */}
        <motion.div className="text-center mb-16 relative" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="relative inline-block">
            <h2 className="relative text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Pro<span className="bg-gradient-to-r from-purple-400 via-violet-500 to-purple-700 bg-clip-text text-transparent">j</span>ects
              <motion.span
                className="absolute left-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-700 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                style={{ transformOrigin: 'center' }}
              />
            </h2>
            <Sparkles />
          </div>
          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Explore my latest work showcasing cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                filter === cat
                  ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white border-purple-500/50 shadow-lg'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="group">
              <TiltCard className="h-full">
                <div className="relative h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity`} />
                  <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 h-full overflow-hidden group-hover:shadow-xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.hoverGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                    <div className="relative z-10 h-full flex flex-col">
                      <motion.div className="relative mb-6 overflow-hidden rounded-xl">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full border border-white/20">{project.category}</div>
                      </motion.div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 flex-grow">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.techStack.map((tech, i) => (
                          <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg">
                            <span className={`text-lg ${tech.color}`}>{getIcon(tech.iconType)}</span>
                            <span className="text-gray-300 text-sm">{tech.name}</span>
                          </div>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-4 mt-auto">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600/50 rounded-lg text-white hover:shadow-lg">
                          <FaGithub /> <span>Code</span>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => handleDemoClick(e, project.title, project.demo)}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-800 to-black border border-slate-700/50 rounded-lg text-white hover:from-slate-700 hover:to-slate-800 hover:shadow-lg transition-all duration-300"
                        >
                          <FaExternalLinkAlt /> <span>Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
