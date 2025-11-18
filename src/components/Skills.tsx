import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      iconColor: "#E0F2FF",
      skills: [
        "HTML",
        "CSS",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Ant Design",
        "Bootstrap"
      ]
    },
    {
      name: "Backend & API Development",
      iconColor: "#DFFFE8",
      skills: [
        "FastAPI",
        "Python",
        "Authentication flows",
        "Serverless functions",
        "API Gateway"
      ]
    },
    {
      name: "Cloud & DevOps",
      iconColor: "#F3E8FF",
      skills: [
        "AWS Cognito",
        "AWS Lambda",
        "AWS API Gateway",
        "S3",
        "CloudFront",
        "Route53",
        "CloudWatch"
      ]
    },
    {
      name: "Payments & Integrations",
      iconColor: "#FFF6E5",
      skills: [
        "Razorpay",
        "Stripe",
      ]
    },
    {
      name: "Databases",
      iconColor: "#E8F6FF",
      skills: [
        "MongoDB",
        "Firebase"
      ]
    },
    {
      name: "AI & Tools",
      iconColor: "#E3FFE8",
      skills: [
        "ChatGPT",
        "Claude",
        "Cursor",
        "Qoder",
        "Bolt",
        "Lovable"
      ]
    },
    {
      name: "Languages",
      iconColor: "#FFF0F0",
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Specialized expertise across the full development stack
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              style={{
                borderRadius: '24px',
                boxShadow: '0 6px 24px rgba(0,0,0,0.06)',
                border: '1px solid #e5e7eb'
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center"
                style={{ backgroundColor: category.iconColor }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category.name}
              </h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;