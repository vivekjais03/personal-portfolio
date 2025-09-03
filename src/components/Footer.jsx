import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/vivekjais03',
      icon: '🐙',
      color: 'hover:text-neon-purple'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vivek-jaiswal-47a807254/',
      icon: '💼',
      color: 'hover:text-neon-blue'
    },
    {
      name: 'Twitter',
      href: 'https://x.com/vivek_j0101',
      icon: '🐦',
      color: 'hover:text-neon-teal'
    },
    {
      name: 'Email',
      href: 'mailto:jaiswalvivek421@gmail.com',
      icon: '📧',
      color: 'hover:text-neon-teal'
    },
    {
      name: 'Mobile',
      href: 'tel:+916387861367',
      icon: '📱',
      color: 'hover:text-neon-teal'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 border-t border-white/10">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-teal/5 via-transparent to-neon-purple/5"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-4 left-1/4 w-2 h-2 bg-neon-teal/20 rounded-full"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-8 right-1/3 w-1.5 h-1.5 bg-neon-purple/20 rounded-full"
          animate={{
            y: [-8, 8, -8],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-6 left-1/2 w-1 h-1 bg-neon-blue/20 rounded-full"
          animate={{
            y: [-6, 6, -6],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's Build Something Amazing
            </motion.h3>
            <motion.p
              className="text-gray-400 max-w-md mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Always open to new opportunities and exciting projects
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center space-x-2 text-gray-400 ${link.color} transition-all duration-300 hover:scale-110`}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                  {link.icon}
                </span>
                <span className="font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-500 text-sm leading-relaxed">
              © {currentYear} <span className="text-white font-medium">Vivek Jaiswal</span>.
              <br className="sm:hidden" />
              <span className="sm:ml-1">All rights reserved.</span>
            </p>
            <motion.p
              className="text-gray-600 text-xs mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              Built with ❤️ using React & Tailwind CSS
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-teal/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;
