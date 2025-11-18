import React, { useState } from 'react';

// Define a type for our project data
type Project = {
  title: string;
  period: string;
  company?: string;
  description: string;
  achievements: string[];
  skills: string[];
  badge?: string;
  logo?: string;
};

// Define a type for our expanded state
type ExpandedState = {
  [key: number]: boolean;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "HyrSense – AI-Powered Hiring Platform",
      period: "Nov 2025 - Present",
      company: "BAPON IT Services",
      description: "An AI-powered hiring automation platform used for candidate screening, interviews, and skill evaluation.",
      badge: "Current",
      achievements: [
        "Designed and developed the complete UI for both the marketing website and the internal hiring webapp.",
        "Integrated the website and webapp into a single production-ready platform with a smooth and unified UX.",
        "Implemented AWS Cognito authentication with manual email/password login and Google SSO.",
        "Configured Cognito Pre/Post Authentication Lambda triggers for custom authentication workflows.",
        "Integrated Razorpay and Stripe payment gateways for subscriptions and secure global transactions.",
        "Developed FastAPI endpoints for retrieving user data and managing interview flows.",
        "Reused and integrated legacy APIs from an older project to speed up development.",
        "Worked extensively with AWS Cognito, Lambda, API Gateway, S3, CloudFront, Route53, and CloudWatch.",
        "Currently building the AI-powered Job Description Generator using skill extraction and prompt-driven workflows."
      ],
      skills: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Python",
        "AWS Cognito",
        "Google SSO",
        "AWS Lambda",
        "API Gateway",
        "CloudFront",
        "Route53",
        "Razorpay",
        "Stripe"
      ],
      logo: "/src/assets/HRS.png",
    },
{
  title: "SkillfulSense – AI Skill Assessment Platform",
  period: "Jul 2025 - Oct 2025",
  company: "BAPON IT Services",
  description: "An AI-powered skill assessment platform for candidates, organizations, and trainers.",
  logo: "/src/assets/sfs.png",
  achievements: [
    "Developed secure signup and login flows using AWS Cognito with complete authentication logic.",
    "Integrated the website with the webapp and unified the user experience across both platforms.",
    "Integrated Razorpay and Stripe payments with full payment verification and transaction checking.",
    "Connected the application with backend APIs using both Fetch and Axios for stability and speed.",
    "Built the complete Admin Dashboard for user management, payment management, and role-based access control.",
    "Created grievance tracking modules with UI for complaints, updates, and admin resolution.",
    "Developed UI for attending assessments with question navigation, timers, and submission flows.",
    "Integrated Steve AI Voice Tutor for real-time doubt clarification and interactive learning support.",
    "Created feedback page, test report page, certificate generation, and certificate download flow.",
    "Built certificate verification UI and implemented end-to-end verification logic."
  ],
  skills: [
    "React.js",
    "TypeScript",
    "AWS Cognito",
    "Axios",
    "Tailwind CSS",
    "Razorpay",
    "Stripe",
    "RBAC",
    "AI Voice Tutor Integration"
  ]
}
,
    {
      title: "Online Financial Capability Training System – Proposal",
      period: "Aug 2025",
      description: "A finance teaching platform aimed at enhancing students' money management skills.",
      achievements: [
        "Designed a finance teaching platform aimed at enhancing students' money management and budgeting skills",
        "Proposed 4 levels of admin management: Super Admin, Organization Admin, Department Admin, and Candidate",
        "Built a prototype with dashboards, signup forms, and role-based access control (RBAC)",
        "Developed interactive learning modules covering budgeting, savings, debt, tax, and funding",
        "Fetching data for MCQ tests, dashboards, and forms from FastAPI endpoints",
        "Integrated Steve AI Tutor for real-time doubt clearing and interactive student support"
      ],
      skills: ["React.js", "TypeScript", "FastAPI", "Role-Based Access Control (RBAC)"]
    },
    {
      title: "Namsarathi - Scheme Mapper",
      period: "Mar 2025 - May 2025",
      company: "Government College of Engineering, Salem",
      description: "Mapping government schemes to beneficiaries based on their socio-economic background.",
      achievements: [
        "Developed a system to map government schemes to beneficiaries using their socio-economic data",
        "Implemented NLP and OCR technologies for document processing",
        "Built frontend with React.js and integrated with Flask backend",
        "Created MongoDB database for storing scheme and beneficiary data",
        "Implemented effective grievance redressal mechanisms"
      ],
      skills: ["React.js", "Flask", "MongoDB", "Natural Language Processing (NLP)", "Optical Character Recognition (OCR)", "Tesseract"],
      logo: "/src/assets/namsarathi.jpeg"
      
    },
    {
      title: "Smart HVAC Predictive Maintenance System",
      period: "Apr 2024 - Jun 2024",
      company: "Forge Innovation & Ventures",
      description: "IoT-based system for predictive maintenance of HVAC systems.",
      achievements: [
        "Developed an IoT system for HVAC predictive maintenance",
        "Implemented data analysis using Google Sheets and Apps Script",
        "Created dashboards for monitoring system performance",
        "Built automated alerts for maintenance requirements",
        "Integrated real-time sensor data processing"
      ],
      skills: ["Data Analysis", "Google Sheets", "Google Apps Script", "Web Development", "Internet of Things (IoT)"],
      logo: "/src/assets/hvac.png"
    },
      {
      title: "DESTINA- AI Travel Companion",
      period: "Apr 2025",
      description: "An AI-powered travel guide providing city insights and recommendations.",
      achievements: [
        "Built an AI-powered travel companion using Python and Streamlit",
        "Integrated Google Gemini AI for intelligent travel recommendations",
        "Seamlessly integrated Wikipedia & Google Maps APIs",
        "Provided city insights, famous spots, local food, malls, and restaurant recommendations",
        "Created an intuitive UI for smooth user experience"
      ],
      skills: ["Python", "APIs & AI", "Streamlit", "Google Gemini AI", "Wikipedia API", "Google Maps API"]
    },
    {
      title: "Page Translator",
      period: "May 2024 - Jun 2024",
      description: "A smart system for translating web pages in real-time.",
      achievements: [
        "Developed a real-time web page translation system",
        "Implemented language detection and translation APIs",
        "Created user-friendly interface for translation controls",
        "Ensured accurate translation while preserving page layout"
      ],
      skills: ["HTML5", "CSS", "JavaScript", "Translation APIs"]
    },
    {
      title: "Speech to Text Converter",
      period: "Jun 2024",
      description: "A web application that converts speech to text in real-time.",
      achievements: [
        "Built a real-time speech recognition system",
        "Implemented browser-based speech APIs",
        "Created clean UI with start/stop controls",
        "Added support for multiple languages",
        "Ensured high accuracy in noise environments"
      ],
      skills: ["HTML5", "CSS", "JavaScript", "Speech Recognition API"]
    },
    {
      title: "Monthly Calendar",
      period: "Apr 2024 - May 2024",
      description: "A digital calendar application with event management features.",
      achievements: [
        "Developed a fully functional monthly calendar application",
        "Implemented event creation, editing, and deletion",
        "Added reminder notifications for events",
        "Created responsive design for all devices",
        "Integrated local storage for data persistence"
      ],
      skills: ["HTML5", "CSS", "JavaScript", "Local Storage"]
    },
    {
      title: "Weather App",
      period: "May 2024",
      description: "A weather forecasting application with detailed meteorological data.",
      achievements: [
        "Built a weather application with current and forecast data",
        "Integrated weather APIs for real-time data",
        "Implemented location-based weather detection",
        "Created visually appealing weather cards",
        "Added search functionality for any location"
      ],
      skills: ["HTML5", "CSS", "JavaScript", "Weather APIs"]
    },
    {
      title: "Art Gallery",
      period: "Apr 2024",
      description: "An online gallery showcasing digital artworks.",
      achievements: [
        "Developed a responsive art gallery website",
        "Implemented image grid layout with filtering options",
        "Added lightbox functionality for detailed viewing",
        "Created artist information sections",
        "Optimized images for fast loading"
      ],
      skills: ["HTML5", "CSS", "JavaScript"]
    },
    {
      title: "Text to Speech Converter",
      period: "Apr 2024",
      description: "A web application that converts text to speech.",
      achievements: [
        "Built a text-to-speech conversion tool",
        "Implemented multiple voice options",
        "Added speed and pitch controls",
        "Created clean, accessible UI",
        "Ensured cross-browser compatibility"
      ],
      skills: ["HTML5", "CSS", "JavaScript", "Speech Synthesis API"]
    },
    {
      title: "Deep Learning Fashion MNIST Project",
      period: "Aug 2022 - Dec 2022",
      company: "Coincent.ai",
      description: "A deep learning project for fashion item classification using MNIST dataset.",
      achievements: [
        "Implemented deep learning model for fashion item classification",
        "Used MNIST dataset for training and testing",
        "Built neural network architecture with TensorFlow",
        "Achieved high accuracy in classification tasks",
        "Created visualization tools for model performance"
      ],
      skills: ["Python", "TensorFlow", "Deep Learning", "MNIST Dataset", "Neural Networks"]
    }
  ];

  // State to track which projects are expanded
  const [expanded, setExpanded] = useState<ExpandedState>({});

  // Function to toggle the expanded state of a project
  const toggleExpand = (index: number) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            A showcase of my work across AI, web development, and IoT domains
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  {project.logo ? (
                    <div className="mb-3">
                      <img 
                        src={project.logo} 
                        alt={project.title} 
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  ) : null}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{project.period}</p>
                  {project.company && (
                    <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">{project.company}</p>
                  )}
                </div>
                {project.badge && (
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full">
                    {project.badge}
                  </span>
                )}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements</h4>
                <ul className="space-y-1">
                  {(expanded[index] 
                    ? project.achievements 
                    : project.achievements.slice(0, 3)
                  ).map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</span>
                    </li>
                  ))}
                  {project.achievements.length > 3 && !expanded[index] && (
                    <li className="flex items-start">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 mr-3 flex-shrink-0"></div>
                      <button 
                        onClick={() => toggleExpand(index)}
                        className="text-gray-700 dark:text-gray-300 text-sm underline hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer"
                      >
                        And {project.achievements.length - 3} more...
                      </button>
                    </li>
                  )}
                  {project.achievements.length > 3 && expanded[index] && (
                    <li className="flex items-start">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 mr-3 flex-shrink-0"></div>
                      <button 
                        onClick={() => toggleExpand(index)}
                        className="text-gray-700 dark:text-gray-300 text-sm underline hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer"
                      >
                        Show Less
                      </button>
                    </li>
                  )}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;