import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-2/5 flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/src/assets/photo.png" 
                    alt="Monika P" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            
            {/* Resume Button */}
            <a 
              href="https://drive.google.com/file/d/1_DKwLJSr0eV-Q_wg2nNCdpx_1bMboNZ-/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Download Resume
            </a>
          </div>

          {/* Content */}
          <div className="lg:w-3/5">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Crafting Digital Experiences</h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a Full Stack Developer specialized in building AI-powered SaaS platforms using React.js, TypeScript, FastAPI, and AWS. I design end-to-end systems with secure authentication, payment integrations, cloud deployments, and high-performance UIs.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I enjoy creating products that solve real-world problems and improve user experience. I'm currently working on interview automation systems, modern dashboards, and scalable backend APIs using AWS services.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                With a strong foundation in computer science from Government College of Engineering, Salem (CGPA: 8.85/10), I bring both technical expertise and creative problem-solving to every project I undertake.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">8.85</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
                </div>
                {/* <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-600">2021</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Started</div>
                </div> */}
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-600">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                </div>
              </div>
              
              {/* Skills */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Specializations</h4>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'FastAPI', 'AWS'].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;