import React from 'react';
import { motion } from 'framer-motion';

const Media = () => {
  const mediaItems = [
    {
      title: "HyrSense Platform Demo",
      type: "video",
      description: "Demonstration of the AI interview automation platform with real-time video interviewing capabilities.",
      thumbnail: "", // Placeholder
      link: "#"
    },
    {
      title: "SkillfulSense Dashboard",
      type: "image",
      description: "Interactive dashboard for skill assessment with real-time analytics and reporting.",
      thumbnail: "", // Placeholder
      link: "#"
    },
    {
      title: "EBookBank Search Feature",
      type: "gif",
      description: "Real-time search functionality in the PDF sharing platform with optimized performance.",
      thumbnail: "", // Placeholder
      link: "#"
    }
  ];

  return (
    <section id="media" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Media</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <div className="bg-gray-200 dark:bg-gray-600 border-2 border-dashed w-full h-48" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-purple-600 text-white rounded-full p-4">
                    {item.type === "video" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    )}
                    {item.type === "image" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    )}
                    {item.type === "gif" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
                <a 
                  href={item.link} 
                  className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                >
                  View {item.type === "video" ? "Video" : item.type === "image" ? "Image" : "Demo"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;