import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaHandsHelping } from 'react-icons/fa';

const Volunteer = () => {
  const volunteerActivities = [
    {
      title: "Tech Mentor",
      organization: "Code for Good",
      period: "Jan 2024 - Present",
      description: "Mentoring junior developers and computer science students in web development and cloud technologies.",
      achievements: [
        "Mentored 25+ students in React, TypeScript, and AWS",
        "Conducted 40+ hours of technical workshops",
        "Helped 15 students secure internships in tech companies"
      ]
    },
    {
      title: "Hackathon Judge",
      organization: "InnovateX University",
      period: "Sep 2024",
      description: "Judged student projects at the annual university hackathon focusing on AI and cloud solutions.",
      achievements: [
        "Evaluated 30+ projects across different technology stacks",
        "Provided technical feedback to improve project implementations",
        "Awarded best use of AWS services to 3 winning teams"
      ]
    },
    {
      title: "Open Source Contributor",
      organization: "Community Projects",
      period: "Ongoing",
      description: "Contributing to open source projects focused on developer tools and educational resources.",
      achievements: [
        "Contributed to 10+ open source repositories",
        "Submitted 50+ pull requests with bug fixes and feature enhancements",
        "Reviewed code for 30+ community contributions"
      ]
    }
  ];

  const competitions = [
    {
      name: "National Hackathon 2025",
      position: "2nd Place",
      project: "AI Resume Analyzer",
      description: "Developed an AI-powered system to analyze resumes and match candidates with job requirements."
    },
    {
      name: "Cloud Innovation Challenge",
      position: "Winner",
      project: "Serverless E-commerce Platform",
      description: "Built a fully serverless e-commerce solution using AWS services with automatic scaling."
    },
    {
      name: "University Coding Competition",
      position: "1st Place",
      project: "Algorithm Optimizer",
      description: "Created a tool to visualize and optimize complex algorithms for better performance."
    }
  ];

  return (
    <section id="volunteer" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Volunteer Work & Competitions</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaHandsHelping className="text-purple-600 mr-3" />
              Volunteer Activities
            </h3>
            
            <div className="space-y-8">
              {volunteerActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{activity.title}</h4>
                      <p className="text-purple-600 font-semibold">{activity.organization}</p>
                    </div>
                    <span className="mt-2 md:mt-0 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                      {activity.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{activity.description}</p>
                  
                  <ul className="space-y-2">
                    {activity.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaTrophy className="text-yellow-500 mr-3" />
              Competitions
            </h3>
            
            <div className="space-y-8">
              {competitions.map((competition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{competition.name}</h4>
                      <p className="text-purple-600 font-semibold">{competition.project}</p>
                    </div>
                    <span className="text-sm font-bold text-yellow-600 bg-yellow-100 dark:bg-yellow-900 px-3 py-1 rounded-full">
                      {competition.position}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300">{competition.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;