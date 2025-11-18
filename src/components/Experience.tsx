import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Bapon IT Services",
      location: "Chennai",
      period: "Jul 2025 – Present",
      description: "Work on two AI SaaS products—SkillfulSense and HyrSense—building production-ready features using React, TypeScript, FastAPI, and AWS. Implement secure authentication using Cognito, integrated Razorpay & Stripe, built dashboards, and automated backend data pipelines.",
      achievements: [
        "Built authentication + subscription architecture with AWS Cognito & FastAPI",
        "Implemented Razorpay + Stripe payment flows with signature verification",
        "Developed analytics dashboards for users and admins",
        "Reduced development time by 2× using AI-assisted workflows"
      ],
      badge: "Current Position",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      role: "Graduate Innovation Engineer Intern",
      company: "Forge Innovation & Ventures",
      location: "Salem",
      period: "Feb 2024 – Jul 2025",
      description: "Developed a smart HVAC predictive maintenance system using IoT sensors and ML-based analytics. Built dashboards, AC control tools, and energy optimization features for real-world use cases.",
      achievements: [
        "Reduced energy wastage through ML prediction",
        "Built IoT dashboards with analytics & control UI",
        "Implemented data visualization from real-time sensor streams",
        "Spearheaded UI/UX improvements for better reporting"
      ],
      badge: "Internship",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      role: "Artificial Intelligence Intern",
      company: "Coincent.ai",
      location: "Remote",
      period: "Aug 2022 – Nov 2022",
      description: "Worked on AI and Python-based projects focusing on model development, data preprocessing, and building real-time automation scripts. Gained hands-on experience in applying machine learning concepts, building intelligent systems, and deploying small-scale AI utilities.",
      achievements: [
        "Built ML models in Python for classification and predictive tasks",
        "Implemented data cleaning, feature extraction, and preprocessing workflows",
        "Automated repetitive tasks using Python scripts and AI-driven logic"
      ],
      badge: "Internship",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Professional journey spanning software development, full-stack engineering, cloud systems, and AI-powered applications.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 relative overflow-hidden"
              style={{
                boxShadow: '0px 8px 24px rgba(0,0,0,0.08)',
                borderRadius: '24px'
              }}
            >
              {/* Gradient stroke at the bottom */}
              {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div> */}
              
              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full">
                  {exp.badge}
                </span>
              </div>
              
              {/* Card content */}
              <div className="pr-24">
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl mr-4">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                    </div>
                  </div>
                </div>
                
                {/* Location and date */}
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{exp.location}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{exp.period}</span>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Key Achievements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;