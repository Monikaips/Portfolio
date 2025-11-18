import React from 'react';
import { motion } from 'framer-motion';
import reactBoot from '../assets/react-boot.pdf';
import jsBoot from '../assets/js-boot.pdf';

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      logo: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
      link: "https://www.credly.com/badges/1fc6c188-c793-443f-ab70-fb267055a9de",
      description: "Verified certification demonstrating foundational knowledge of Artificial Intelligence, Machine Learning concepts, and Azure Cognitive Services."
    },
    // {
    //   title: "Cloud Computing Certification",
    //   issuer: "IIT Kharagpur – NPTEL",
    //   date: "2024",
    //   logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/IIT_Kharagpur_Logo.svg/1200px-IIT_Kharagpur_Logo.svg.png",
    //   link: "YOUR_CERTIFICATE_LINK",
    //   description: "Successfully completed the NPTEL-certified Cloud Computing program covering virtualization, distributed systems, cloud architecture, and cloud service models."
    // },
    // {
    //   title: "Angular Basics",
    //   issuer: "SkillUp Online (Simplilearn)",
    //   date: "2024",
    //   logo: "https://angular.io/assets/images/logos/angular/angular.svg",
    //   link: "YOUR_CERTIFICATE_LINK",
    //   description: "Hands-on introduction to Angular framework including components, modules, routing, services, and modern UI development practices."
    // },
    
    {
      title: "IR4.0 Foundation Course – TechSaksham",
      issuer: "Microsoft, SAP & Tamil Nadu Skill Development (Naan Mudhalvan)",
      date: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      extraLogos: [
        "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
        "https://www.naanmudhalvan.tn.gov.in/theme/images/logo.png"
      ],
      link: "https://drive.google.com/file/d/11Wi8Z3IPxw_5VIdmIv5xxSKA2PoCd790/view?usp=drivesdk",
      description:
        "Completed the IR4.0 Foundation Course under the TechSaksham program sponsored by Microsoft and SAP, supported by Tamil Nadu Skill Development Corporation (Naan Mudhalvan)."
    },
    {
      title: "React Bootcamp",
      issuer: "LetsUpgrade",
      date: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      link: reactBoot,
      description: "Completed a 3-day React bootcamp focused on components, props, state, hooks, and building dynamic responsive UIs."
    },
    {
      title: "JavaScript Bootcamp",
      issuer: "LetsUpgrade",
      date: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      link: jsBoot,
      description: "Strengthened JavaScript fundamentals through hands-on projects involving DOM manipulation, ES6 features, functions, arrays, and working with APIs."
    },
    {
      title: "Discover Data Analysis",
      issuer: "Microsoft Learn",
      date: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      link: "https://learn.microsoft.com/en-us/users/monikap-9050/achievements/7pac8c7z?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      description: "Explored essential data analysis concepts including data cleaning, transformation, visualization, and interpreting patterns using real-world datasets."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  
                  {/* Logo */}
                  <div className="flex items-center gap-3">
                    <img 
                      src={cert.logo} 
                      alt={`${cert.title} logo`}
                      className="h-10 w-10 object-contain"
                    />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Date */}
                  <span className="text-sm text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded-full whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>



                {/* Issuer */}
                <p className="text-purple-600 font-semibold mb-3">{cert.issuer}</p>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {cert.description}
                </p>

                {/* Link */}
                <a 
                  href={cert.link}
                  target="_blank"
                  className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                >
                  View Certificate
                </a>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
