import React from 'react';
import { motion } from 'framer-motion';

const Talks = () => {
  const talks = [
    {
      event: "TechCon 2025",
      role: "Speaker",
      title: "Building Scalable AI SaaS Platforms",
      date: "September 2025",
      links: {
        slides: "#",
        video: "#"
      }
    },
    {
      event: "Cloud Developers Summit",
      role: "Panelist",
      title: "Serverless Architecture in Modern Applications",
      date: "July 2025",
      links: {
        slides: "#",
        video: "#"
      }
    },
    {
      event: "React India Conference",
      role: "Workshop Instructor",
      title: "Advanced State Management with React Query",
      date: "April 2025",
      links: {
        slides: "#",
        video: "#"
      }
    }
  ];

  return (
    <section id="talks" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Talks & Workshops</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {talks.map((talk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 mb-6 last:mb-0"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{talk.title}</h3>
                  <p className="text-purple-600 font-semibold">{talk.event} • {talk.role}</p>
                </div>
                <span className="mt-2 md:mt-0 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                  {talk.date}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <a 
                  href={talk.links.slides} 
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all"
                >
                  View Slides
                </a>
                <a 
                  href={talk.links.video} 
                  className="px-4 py-2 bg-white dark:bg-gray-600 text-purple-600 dark:text-purple-300 border border-purple-600 dark:border-purple-300 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-gray-500 transition-all"
                >
                  Watch Video
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Talks;