import React from 'react';
import { motion } from 'framer-motion';

const Publications = () => {
  const publications = [
    {
      title: "AI-Powered Interview Automation: A Case Study",
      excerpt: "Exploring the implementation of machine learning algorithms in automating technical interviews for efficient candidate assessment.",
      date: "October 2025",
      link: "#"
    },
    {
      title: "Optimizing Cloud Costs in SaaS Applications",
      excerpt: "Strategies for reducing infrastructure expenses while maintaining performance in AWS-based SaaS platforms.",
      date: "August 2025",
      link: "#"
    },
    {
      title: "Real-time Analytics in Web Applications",
      excerpt: "Implementing live data visualization and processing using modern frontend frameworks and backend technologies.",
      date: "May 2025",
      link: "#"
    }
  ];

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications & Blogs</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 mb-6 last:mb-0 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">{pub.title}</h3>
                <span className="text-sm text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded-full">
                  {pub.date}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">{pub.excerpt}</p>
              
              <a 
                href={pub.link} 
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;