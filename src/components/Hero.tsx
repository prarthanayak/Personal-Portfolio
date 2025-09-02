import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer & AI Enthusiast";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const particles = Array.from({ length: 50 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
      animate={{
        x: [0, Math.random() * 1000 - 500],
        y: [0, Math.random() * 1000 - 500],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
      }}
    />
  ));

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {particles}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Prarthana Nayak
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl text-blue-200 mb-8 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            </motion.div>

            <motion.p
              className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Passionate about creating innovative solutions through code, exploring the frontiers of AI,
              and building digital experiences that make a difference.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <motion.button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.a
                href="https://drive.google.com/file/d/1GiI6_uCtQdGDB3PpIcbzdulO48sUEab7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-semibold transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-white/60" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;