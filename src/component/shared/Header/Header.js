import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [photoDropdownOpen, setPhotoDropdownOpen] = useState(false); // State for mobile dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-50 text-indigo-800 border-b-2 border-indigo-500 py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/aecc.png" alt="AECC Logo" className="h-10 w-auto" />
        <h1 className="text-xl font-bold ml-4"><Link to='/'>MyskyEdu</Link></h1>
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
      <nav className="hidden md:flex space-x-6 font-semibold text-base" >
        {/* Photo Dropdown - Hover for Desktop */}
        

        

        <div className="relative inline-block text-left  group mb-2 py-2 md:mb-0">
          <button className="inline-flex justify-center items-center lg:px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          Study Abroad
            <svg
              className="w-4 h-4 ml-2 -mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Hover Dropdown for Desktop */}
          <div className="origin-top-left absolute left-0 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block z-50">
            <div className="py-1">
              <Link to="/hajj-packages" className="block px-4 py-2 text-l hover:bg-gray-100  ">
              <span className='hover:border-b-4 hover:border-indigo-800'>Study in Uk</span>
              </Link>
              <Link to="/umrah-packages" className="block px-4 py-2 text-l hover:bg-gray-100">
             
              <span className='hover:border-b-4 hover:border-indigo-800'> Study in USA</span>
              </Link>
              <Link to="/visa-process" className="block px-4 py-2 text-l hover:bg-gray-100">
           
              <span className='hover:border-b-4 hover:border-indigo-800'> Study in Australia</span>
              </Link>
              <Link to="/air-ticket" className="block px-4 py-2 text-l hover:bg-gray-100">
             
              <span className='hover:border-b-4 hover:border-indigo-800'> Study in NewZealand</span>
              </Link>
              <Link to="/air-ticket" className="block px-4 py-2 text-l hover:bg-gray-100">
            
              <span className='hover:border-b-4 hover:border-indigo-800'> Study in Sweden</span>
              </Link>
              <Link to="/air-ticket" className="block px-4 py-2 text-l hover:bg-gray-100">
           
              <span className='hover:border-b-4 hover:border-indigo-800'> Study in Denmark</span>
              </Link>
              <Link to="/air-ticket" className="block px-4 py-2 text-l  hover:bg-gray-100">
            
              <span className='hover:border-b-4 hover:border-indigo-800'> Study in Finland</span>
              </Link>
              <Link to="/air-ticket" className="block px-4 py-2 text-l  hover:bg-gray-100">
              
              <span className='hover:border-b-4 hover:border-indigo-800'> Study in Hungary</span>
              </Link>
              <Link to="/air-ticket" className="block px-4 py-2 text-l  hover:bg-gray-100">
             
              <span className='hover:border-b-4 hover:border-indigo-800'> Study in Malta</span>
              </Link>
              <Link to="/air-ticket" className="block px-4 py-2 text-l  hover:bg-gray-100">
             
              <span className='hover:border-b-4 hover:border-indigo-800'> Study in France</span>
              </Link>
              <Link to="/air-ticket" className="block px-4 py-2 text-l  hover:bg-gray-100">
              
              <span className='hover:border-b-4 hover:border-indigo-800'> Study in Italy</span>
              </Link>
              <Link to="/air-ticket" className="block px-4 py-2 text-l  hover:bg-gray-100">
           
              <span className='hover:border-b-4 hover:border-indigo-800'> Study in Austria</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Wrap dropdown and parent in the same container */}
        

        <Link   to='' className="py-2 rounded">Scholarships</Link>
        <Link   to='' className="py-2 rounded">English Test</Link>
        <Link   to='' className="py-2 rounded">About Us</Link>
        <Link   to='' className="py-2 rounded">Latest Updates</Link>
        <Link to='/contact' className="py-2 px-4 rounded">Contact Us</Link>
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
            <li>
              <button
                onClick={() => setPhotoDropdownOpen(!photoDropdownOpen)}
                className="hover:bg-green-600 py-2 px-4 rounded w-full text-left"
              >
                Photo
              </button>
              {photoDropdownOpen && (
                <ul className="bg-green-600 text-white py-2 px-4 rounded mt-2">
                  <li><a href="#" className="hover:bg-green-700 block py-2 px-4 rounded">হজ্জ প্যাকেজ</a></li>
                  <li><a href="#" className="hover:bg-green-700 block py-2 px-4 rounded">উমরাহ্‌ প্যাকেজ</a></li>
                  <li><a href="#" className="hover:bg-green-700 block py-2 px-4 rounded">ভিসা প্রসেস</a></li>
                  <li><a href="#" className="hover:bg-green-700 block py-2 px-4 rounded">এয়ার টিকেট</a></li>
                </ul>
              )}
            </li>
            <li><a href="#" className="hover:bg-green-600 py-2 px-4 rounded">Scholarships</a></li>
            <li><a href="#" className="hover:bg-green-600 py-2 px-4 rounded">English Test</a></li>
            <li><a href="#" className="hover:bg-green-600 py-2 px-4 rounded">About Us</a></li>
            <li><a href="#" className="hover:bg-green-600 py-2 px-4 rounded">Latest Updates</a></li>
            <li><Link to='/contact' className="hover:bg-green-600 py-2 px-4 rounded">Contact Us</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
