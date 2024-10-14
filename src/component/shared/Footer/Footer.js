import React from 'react';

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-900 text-white py-10">
      <div className="container  mx-auto flex  flex-col md:flex-row md:space-x-8 items-start">
        {/* Service Sections */}
        <div className="flex flex-col mb-4 md:mb-0 w-full md:w-1/4">
          <h3 className="font-bold text-lg mb-3 border-b-2 border-indigo-600 pb-1">Our Services</h3>
          <ul className="list-none space-y-2 text-gray-300">
            <li className="hover:text-indigo-400 transition-colors">Education Counselling</li>
            <li className="hover:text-indigo-400 transition-colors">Application Process</li>
            <li className="hover:text-indigo-400 transition-colors">Visa Documentation</li>
            <li className="hover:text-indigo-400 transition-colors">Scholarship Guidance</li>
            <li className="hover:text-indigo-400 transition-colors">AECC Skills Personality Test</li>
          </ul>
        </div>
        
        <div className="flex flex-col mb-4 md:mb-0 w-full md:w-1/4">
          <h3 className="font-bold text-lg mb-3 border-b-2 border-indigo-600 pb-1">Study Destinations</h3>
          <ul className="list-none space-y-2 text-gray-300">
            <li className="hover:text-indigo-400 transition-colors">Study In Australia</li>
            <li className="hover:text-indigo-400 transition-colors">Study In Canada</li>
            <li className="hover:text-indigo-400 transition-colors">Study In Ireland</li>
            <li className="hover:text-indigo-400 transition-colors">Study In New Zealand</li>
            <li className="hover:text-indigo-400 transition-colors">Study In UK</li>
            <li className="hover:text-indigo-400 transition-colors">Study In USA</li>
          </ul>
        </div>
        
        <div className="flex flex-col mb-4 md:mb-0 w-full md:w-1/4">
          <h3 className="font-bold text-lg mb-3 border-b-2 border-indigo-600 pb-1">Quick Links</h3>
          <ul className="list-none space-y-2 text-gray-300">
            <li className="hover:text-indigo-400 transition-colors">Innovation Hub</li>
            <li className="hover:text-indigo-400 transition-colors">Visit Our Virtual Office</li>
            <li className="hover:text-indigo-400 transition-colors">Book An Appointment</li>
          </ul>
        </div>
        
        <div className="flex flex-col mb-4 md:mb-0 w-full md:w-1/4">
          <h3 className="font-bold text-lg mb-3 border-b-2 border-indigo-600 pb-1">About Us</h3>
          <ul className="list-none space-y-2 text-gray-300">
            <li className="hover:text-indigo-400 transition-colors">Partner With Us</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-500 w-full my-6" />

      {/* Quick Links for Countries */}
      <div className="flex flex-wrap justify-center space-x-4 mb-6 w-full">
        <a href="#" className="hover:text-indigo-400 transition-colors">Australia</a>
        <a href="#" className="hover:text-indigo-400 transition-colors">Canada</a>
        <a href="#" className="hover:text-indigo-400 transition-colors">Ireland</a>
        <a href="#" className="hover:text-indigo-400 transition-colors">New Zealand</a>
        <a href="#" className="hover:text-indigo-400 transition-colors">UK</a>
        <a href="#" className="hover:text-indigo-400 transition-colors">USA</a>
      </div>

      <p className="text-sm text-gray-400 text-center">Copyright @{currentYear}
      . All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
