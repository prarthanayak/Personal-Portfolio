import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Cloud, Star, TrendingUp } from 'lucide-react';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'JavaScript', level: 95, icon: '🟨' },
        { name: 'TypeScript', level: 90, icon: '🔷' },
        { name: 'Python', level: 88, icon: '🐍' },
        { name: 'Java', level: 80, icon: '☕' },
      ]
    },
    {
      title: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'Vue.js', level: 85, icon: '💚' },
        { name: 'Next.js', level: 90, icon: '▲' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
      ]
    },
    {
      title: 'Backend',
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 90, icon: '🟢' },
        { name: 'Express', level: 88, icon: '🚀' },
        { name: 'FastAPI', level: 85, icon: '⚡' },
        { name: 'PostgreSQL', level: 87, icon: '🐘' },
      ]
    },
    {
      title: 'Tools & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 95, icon: '📝' },
        { name: 'Docker', level: 82, icon: '🐳' },
        { name: 'AWS', level: 78, icon: '☁️' },
        { name: 'Vercel', level: 90, icon: '▲' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              onHoverStart={() => setActiveCategory(category.title)}
              onHoverEnd={() => setActiveCategory(null)}
              className="relative group"
            >
              <motion.div
                className={`bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-opacity-50 ${
                  activeCategory === category.title ? 'scale-105' : ''
                }`}
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {category.icon}
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <motion.span
                          className="text-sm text-gray-500 dark:text-gray-400 font-semibold"
                          animate={activeCategory === category.title ? { scale: 1.1 } : { scale: 1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      {/* Interactive Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-2 bg-gradient-to-r ${category.color} rounded-full relative`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: 1.2 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                          >
                            {/* Animated shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={activeCategory === category.title ? {
                                x: ['-100%', '100%']
                              } : {}}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                          </motion.div>
                        </div>

                        {/* Skill level indicator */}
                        {activeCategory === category.title && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute -top-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-2 py-1 rounded text-xs font-semibold"
                            style={{ left: `${skill.level}%`, transform: 'translateX(-50%)' }}
                          >
                            {skill.level}%
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-gray-900 dark:border-t-white" />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Category Stats */}
                <motion.div
                  className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
                  animate={activeCategory === category.title ? { opacity: 1 } : { opacity: 0.7 }}
                >
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-yellow-500" />
                      <span>Expertise</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp size={12} className="text-green-500" />
                      <span>Growing</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating particles for active category */}
              {activeCategory === category.title && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${category.color} rounded-full`}
                      animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      style={{
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Interactive Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of development and deliver 
              cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;