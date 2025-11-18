import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              Monika P
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
            <p className="text-gray-600 dark:text-gray-400">Freelance Developer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://www.linkedin.com/in/monika-p-30b32a22a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/Monikaips" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="mailto:jpmonika3004@gmail.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
            <a 
              href="tel:+918778957646" 
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="Phone"
            >
              <FaPhone size={24} />
            </a>
          </div>
          
          <div className="text-gray-600 dark:text-gray-400 text-center md:text-right">
            <p>&copy; {currentYear} Monika P. All rights reserved.</p>
            <p className="mt-1">Built with React, TypeScript and Tailwind CSS</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-500 text-sm">
          <p>Designed and developed by <a 
            href="https://www.linkedin.com/in/monika-p-30b32a22a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            Monika P
          </a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;