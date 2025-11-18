import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (typedRef.current) {
      const roles = [
        "Full Stack Developer",
        "Frontend Developer",
        "Freelance Developer",
        "Web Developer",
        "Software Developer"
      ];
      
      let roleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;
      
      const type = () => {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
          // Remove characters
          typedRef.current!.textContent = currentRole.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50;
        } else {
          // Add characters
          typedRef.current!.textContent = currentRole.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 100;
        }
        
        // Check if word is complete
        if (!isDeleting && charIndex === currentRole.length) {
          // Pause at end of word
          typingSpeed = 1500;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          // Move to next word
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
        
        setTimeout(type, typingSpeed);
      };
      
      // Start typing effect
      setTimeout(type, 1000);
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-200 rounded-full text-sm font-medium">
            Welcome to my portfolio
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Hi, I'm <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">MONIKA</strong>
        </h1>
        
        <h2 className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
          I'm a <span className="typed font-semibold text-purple-600 dark:text-purple-400" ref={typedRef}></span>
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
Passionate about creating innovative solutions that bridge the gap between technology and human needs        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a 
            href="#" 
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Download Resume
          </a>
          <a 
            href="#projects" 
            className="px-8 py-4 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border border-purple-600 rounded-full font-medium hover:bg-purple-50 dark:hover:bg-gray-700 transition-all"
          >
            Explore Projects
          </a>
        </div>
        
        {/* <div className="border-t border-gray-200 dark:border-gray-700 pt-8 max-w-2xl mx-auto">
          <p className="text-lg italic text-gray-700 dark:text-gray-300">
            "Passionate about creating innovative solutions that bridge the gap between technology and human needs"
          </p>
        </div> */}
        
        <div className="social-links flex justify-center space-x-6 mt-8">
          <a href="https://github.com/monikaips" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          <a href="https://www.linkedin.com/in/monika-p-30b32a22a/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          
          <a href="mailto:csemonikap@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
            </svg>
          </a>
          
          <a href="https://www.facebook.com/share/1DaNohQZYX/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;