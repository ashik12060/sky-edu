import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-green-500 text-white py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/aecc.png" alt="AECC Logo" className="h-10 w-auto" />
        <h1 className="text-xl font-bold ml-4">AECC</h1>
      </div>
      
      {/* Hamburger icon for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Nav links for large screens */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-gray-200">Study Abroad</a>

        {/* Wrap dropdown and parent in the same container */}
        <div
          className="relative group"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="hover:text-gray-200">
            Student Services
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Consulting</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Visa Support</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Accommodation</a>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-gray-200">Scholarships</a>
        <a href="#" className="hover:text-gray-200">English Test</a>
        <a href="#" className="hover:text-gray-200">About Us</a>
        <a href="#" className="hover:text-gray-200">Latest Updates</a>
        <a href="#" className="hover:text-gray-200">Contact Us</a>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-green-500 text-white shadow-lg z-10">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#" className="hover:bg-green-600 py-2 px-4 rounded">Study Abroad</a></li>
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:bg-green-600 py-2 px-4 rounded w-full text-left"
              >
                Student Services
              </button>
              {dropdownOpen && (
                <ul className="bg-green-600 text-white py-2 px-4 rounded mt-2">
                  <li><a href="#" className="hover:bg-green-700 block py-2 px-4 rounded">Consulting</a></li>
                  <li><a href="#" className="hover:bg-green-700 block py-2 px-4 rounded">Visa Support</a></li>
                  <li><a href="#" className="hover:bg-green-700 block py-2 px-4 rounded">Accommodation</a></li>
                </ul>
              )}
            </li>
            <li><a href="#" className="hover:bg-green-600 py-2 px-4 rounded">Scholarships</a></li>
            <li><a href="#" className="hover:bg-green-600 py-2 px-4 rounded">English Test</a></li>
            <li><a href="#" className="hover:bg-green-600 py-2 px-4 rounded">About Us</a></li>
            <li><a href="#" className="hover:bg-green-600 py-2 px-4 rounded">Latest Updates</a></li>
            <li><a href="#" className="hover:bg-green-600 py-2 px-4 rounded">Contact Us</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
