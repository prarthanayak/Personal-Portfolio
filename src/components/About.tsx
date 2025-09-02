import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Database } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const interests = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI/ML',
      description: 'Machine learning, deep learning, and artificial intelligence applications'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Science',
      description: 'Data analysis, visualization, and deriving insights from complex datasets'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Full-stack development with modern frameworks and technologies'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <motion.div
                  className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-8xl">
                    👨‍💻
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Hello! I'm Prarthana Nayak
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                A passionate full-stack developer with a deep love for creating innovative solutions 
                that bridge the gap between technology and human needs. With over 5 years of experience 
                in software development, I specialize in building scalable web applications and exploring 
                the fascinating world of artificial intelligence.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                When I'm not coding, you'll find me diving into the latest AI research papers, 
                contributing to open-source projects, or experimenting with new technologies. 
                I believe in the power of continuous learning and the importance of building 
                technology that makes the world a better place.
              </p>
            </motion.div>
          </div>

          {/* Areas of Interest */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Areas of Interest
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="text-center p-8 bg-white dark:bg-slate-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl mb-4">
                    {interest.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {interest.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;