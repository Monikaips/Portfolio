import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaCode, 
  FaFolder, 
  FaEnvelope,
  FaTimes,
  FaBars
} from 'react-icons/fa';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const toggleButton = document.getElementById('sidebar-toggle');
      
      if (sidebar && !sidebar.contains(event.target as Node) && 
          toggleButton && !toggleButton.contains(event.target as Node)) {
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero', icon: <FaHome /> },
    { name: 'About', to: 'about', icon: <FaUser /> },
    { name: 'Experience', to: 'experience', icon: <FaBriefcase /> },
    { name: 'Skills', to: 'skills', icon: <FaCode /> },
    { name: 'Projects', to: 'projects', icon: <FaFolder /> },
    { name: 'Contact', to: 'contact', icon: <FaEnvelope /> }
  ];

  return (
    <>
      {/* Sidebar Toggle Button */}
      <div 
        id="sidebar-toggle"
        className="header-toggle fixed top-5 right-5 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white cursor-pointer transition-all hover:bg-purple-700 hover:translate-y-[-2px]"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar */}
      <aside 
        id="sidebar"
        className={`header fixed top-0 left-0 bottom-0 w-60 md:w-72 p-6 transition-all duration-300 ease-in-out z-40 overflow-y-auto bg-white dark:bg-gray-900 shadow-xl ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:z-auto`}
      >
        <nav className="navmenu mt-8">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="flex items-center px-5 py-3 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-all hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-700 dark:hover:text-purple-300 cursor-pointer hover:translate-x-[5px]"
                  onClick={closeSidebar}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;