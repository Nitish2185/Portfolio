import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Credentials } from '../components/Credentials';

export const ArticlesPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Credentials />
      </motion.div>
    </main>
  );
};
