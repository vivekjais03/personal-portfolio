import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Button from './Button';
import ParticleBackground from './ParticleBackground';
import RotatingCube from './3d/RotatingCube';
import LightningOrb from './3d/LightningOrb';

// Animated Starfield
const Starfield = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-px bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Shooting Stars
const ShootingStars = () => {
  return (
    <>
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-px bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            top: `${Math.random() * 40}%`,
            left: '-100px',
            transform: 'rotate(-25deg)'
          }}
          animate={{
            x: ['0px', '120vw'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 10 + Math.random() * 8,
            ease: "easeOut"
          }}
        />
      ))}
    </>
  );
};

// 3D Parallax Particles
const ParallaxParticles = () => {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/50 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-25, 25, -25],
            x: [-15, 15, -15],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

const TypewriterText = ({ texts, speed = 100, delay = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting && currentIndex < currentText.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      }, speed / 2);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === currentText.length) {
      // Pause before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex(prev => (prev + 1) % texts.length);
    }
  }, [currentIndex, currentTextIndex, isDeleting, texts, speed, delay]);

  return (
    <span className="font-light">
      {displayText}
      <span className="animate-pulse text-purple-400 ml-1">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Starfield */}
      <Starfield />
      
      {/* Shooting Stars */}
      <ShootingStars />
      
      {/* 3D Parallax Particles */}
      <ParallaxParticles />
      
      {/* Particle Background */}
      <ParticleBackground />

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-teal/5 via-transparent to-neon-purple/5"></div>
      
      {/* Optimized Floating Sparkles */}
      {[...Array(12)].map((_, i) => (
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
            delay: i * 0.5,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Optimized Sparkle Balls */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`sparkle-ball-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 1,
            ease: "linear"
          }}
        />
      ))}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-neon-teal/20 to-neon-purple/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-5">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <pointLight position={[-10, -10, -10]} intensity={0.4} color="#00ff88" />

            {/* 3D Elements */}
            <RotatingCube />
            <LightningOrb />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              autoRotate
              autoRotateSpeed={0.3}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-purple-500 via-violet-600 to-purple-700 bg-clip-text text-transparent">
                  Viv<span className="relative bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    e
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
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
                  </span>k Jais<span className="relative bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    w
                    {[...Array(2)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          top: `${-8 + i * 6}px`,
                          left: `${-3 + i * 8}px`,
                        }}
                        animate={{
                          y: [-4, 4, -4],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.4,
                          ease: "linear"
                        }}
                      />
                    ))}
                  </span>al
                </span>
              </h1>
            </motion.div>

            <motion.div
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypewriterText
                texts={[
                  'Full Stack Developer',
                  'React Specialist',
                  'Node.js Expert',
                  'Cloud Architect'
                ]}
                speed={120}
                delay={2500}
              />
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting exceptional digital experiences with cutting-edge technologies,
              delivering scalable solutions that drive innovation and business growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                >
                  <span className="relative z-10">Hire Me</span>
                  {/* Enhanced lightning spark effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                  </div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => {
                    window.open('https://drive.google.com/file/d/1zEKTBumyoaKbECxLJAmfUpyYj88t5OUD/view?usp=sharing', '_blank');
                  }}
                  className="backdrop-blur-md bg-white/10 border-2 border-white/20 hover:border-purple-500/50 hover:bg-white/20 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                >
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500/60 to-violet-600/60 shadow-2xl shadow-purple-500/30 relative">
                  <img
                    src="/123.png"
                    alt="Vivek Jaiswal"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter group-hover:brightness-110"
                  />

                  {/* Unique holographic effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-violet-400/20 to-purple-700/40 rounded-full mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-purple-300/20 rounded-full"></div>
                  
                  {/* Animated scan lines */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-8 rounded-full"
                    animate={{
                      y: [-100, 400, -100],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Digital grid overlay */}
                  <div className="absolute inset-0 opacity-20 rounded-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                {/* Enhanced glowing rings with unique effects */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-purple-400/50"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 0.2, 0.6],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full border border-violet-500/60"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.4, 0.8, 0.4],
                    rotate: [360, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border border-purple-600/40"
                  animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.3, 0.7, 0.3],
                    rotate: [0, -360]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
                
                {/* Unique pulsing outer ring */}
                <motion.div
                  className="absolute -inset-8 rounded-full border border-purple-300/20"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;