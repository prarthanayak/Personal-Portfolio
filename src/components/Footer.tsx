import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-8 bg-slate-900 dark:bg-slate-950 text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="flex items-center justify-center gap-2 text-gray-300"
          whileHover={{ scale: 1.05 }}
        >
          Made with <Heart className="text-red-500" size={16} fill="currentColor" /> by Prarthana Nayak
        </motion.p>
        <p className="text-gray-400 mt-2 text-sm">
          © 2025 Prarthana Nayak. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;