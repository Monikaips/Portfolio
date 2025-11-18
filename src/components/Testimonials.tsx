import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Monika's expertise in building AI-powered SaaS platforms was instrumental in accelerating our product development. Her ability to seamlessly integrate complex systems while maintaining clean, maintainable code is exceptional.",
      name: "Rajesh Kumar",
      title: "CTO, Bapon IT Services",
      avatar: "" // Placeholder
    },
    {
      quote: "Working with Monika on our HVAC predictive maintenance system was a game-changer. Her innovative approach to IoT architecture and real-time analytics helped us reduce maintenance costs by 35%.",
      name: "Priya Sharma",
      title: "Lead Engineer, Forge Innovation & Ventures",
      avatar: "" // Placeholder
    },
    {
      quote: "Monika's technical skills combined with her problem-solving abilities make her a valuable asset to any team. She consistently delivers high-quality solutions on time and exceeds expectations.",
      name: "Amit Patel",
      title: "Engineering Manager, TechFlow Solutions",
      avatar: "" // Placeholder
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8"
            >
              <div className="text-purple-500 mb-4">
                <FaQuoteLeft size={24} />
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="bg-gray-200 dark:bg-gray-600 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-purple-600">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;