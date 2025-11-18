import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "HyrSense - AI Interview Automation Platform",
      problem: "Companies were spending excessive time and resources on initial technical interviews, leading to delayed hiring processes and candidate drop-offs.",
      role: "Full Stack Developer & AI Integration Specialist",
      stack: "React, TypeScript, FastAPI, AWS (Cognito, Lambda, S3, DynamoDB), WebRTC, Stripe",
      architecture: "Microservices architecture with React frontend, FastAPI backend, and AWS serverless infrastructure. Real-time communication via WebRTC for video interviews.",
      implementation: "Developed the complete frontend with React and TypeScript, implemented secure authentication with AWS Cognito, built the backend API with FastAPI, integrated Stripe for payments, and created real-time video interview functionality with WebRTC.",
      challenges: "Implementing real-time video communication with low latency, ensuring data security during interviews, and integrating multiple payment gateways seamlessly.",
      impact: "Reduced initial interview time by 70%, improved candidate experience scores by 40%, and accelerated the hiring process for partner companies.",
      links: {
        repo: "#",
        live: "#"
      }
    },
    {
      title: "SkillfulSense - AI Skill Testing Platform",
      problem: "Traditional skill assessment methods were time-consuming and didn't provide comprehensive insights into candidate abilities.",
      role: "Lead Frontend Developer & Backend API Developer",
      stack: "React, TypeScript, FastAPI, AWS (Cognito, S3, Lambda), Razorpay, MongoDB",
      architecture: "Single-page application with React frontend, RESTful API backend using FastAPI, MongoDB for data storage, and AWS services for authentication and file storage.",
      implementation: "Built the responsive frontend with React and TypeScript, implemented secure user authentication with AWS Cognito, developed the backend API with FastAPI, integrated Razorpay for subscription payments, and created comprehensive dashboards for users and admins.",
      challenges: "Creating an intuitive user interface for complex skill assessments, ensuring secure payment processing, and optimizing performance for real-time skill evaluation.",
      impact: "Enabled 500+ users to assess their skills effectively, achieved 95% customer satisfaction, and reduced assessment completion time by 50%.",
      links: {
        repo: "#",
        live: "#"
      }
    }
  ];

  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{study.title}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-600 mb-3">Problem</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{study.problem}</p>
                    
                    <h4 className="text-lg font-semibold text-purple-600 mb-3">My Role</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{study.role}</p>
                    
                    <h4 className="text-lg font-semibold text-purple-600 mb-3">Tech Stack</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{study.stack}</p>
                    
                    <h4 className="text-lg font-semibold text-purple-600 mb-3">Architecture</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{study.architecture}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-purple-600 mb-3">Implementation</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{study.implementation}</p>
                    
                    <h4 className="text-lg font-semibold text-purple-600 mb-3">Challenges</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{study.challenges}</p>
                    
                    <h4 className="text-lg font-semibold text-purple-600 mb-3">Impact</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{study.impact}</p>
                    
                    <div className="flex flex-wrap gap-4 mt-6">
                      <a 
                        href={study.links.repo} 
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all"
                      >
                        View Repository
                      </a>
                      <a 
                        href={study.links.live} 
                        className="px-4 py-2 bg-white dark:bg-gray-600 text-purple-600 dark:text-purple-300 border border-purple-600 dark:border-purple-300 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-gray-500 transition-all"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;