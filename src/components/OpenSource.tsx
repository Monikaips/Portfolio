import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

const OpenSource = () => {
  const projects = [
    {
      name: "react-ai-components",
      description: "A collection of React components powered by AI for faster UI development.",
      stars: 1200,
      forks: 85,
      language: "TypeScript",
      link: "#"
    },
    {
      name: "fastapi-auth-utils",
      description: "Utility functions and middleware for authentication in FastAPI applications.",
      stars: 850,
      forks: 120,
      language: "Python",
      link: "#"
    },
    {
      name: "aws-serverless-starter",
      description: "Boilerplate for AWS serverless applications with Lambda, API Gateway, and DynamoDB.",
      stars: 650,
      forks: 95,
      language: "JavaScript",
      link: "#"
    }
  ];

  return (
    <section id="open-source" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Source Contributions</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaGithub className="text-gray-700 dark:text-gray-300 mr-2" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                    {project.language}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                  <div className="flex items-center mr-4">
                    <FaStar className="mr-1" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCodeBranch className="mr-1" />
                    <span>{project.forks}</span>
                  </div>
                </div>
                
                <a 
                  href={project.link} 
                  className="w-full py-2 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all block"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;