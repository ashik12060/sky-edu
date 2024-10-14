import React from 'react';

const HeroBanner = () => {
  return (
    <div className="bg-gray-50 p-10 flex flex-col items-center">
      {/* Header Text */}
      <h2 className="text-2xl font-semibold text-center">
        With you at every step of your study abroad journey
      </h2>
      <p className="text-center text-gray-500 mt-2">
        Get personalised, friendly, honest guidance for free
      </p>

      {/* Call to Action Button */}
      <div className="mt-6">
        <button className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700">
          Book a free consultation
        </button>
      </div>

      {/* Card Section */}
      <div className="flex items-center mt-10 space-x-4">
        {/* Left Arrow */}
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4">
          {/* Test Preparation Programs */}
          <div className="p-4 bg-white rounded-lg shadow-md text-center">
            <img src="test-preparation-icon.png" alt="Test Preparation" className="mx-auto" />
            <h3 className="font-semibold mt-4">Test Preparation Programs</h3>
            <p className="text-indigo-600 mt-2">Know more &gt;</p>
          </div>

          {/* Scholarship Guidance */}
          <div className="p-4 bg-indigo-50 rounded-lg shadow-md text-center">
            <img src="scholarship-guidance-icon.png" alt="Scholarship Guidance" className="mx-auto" />
            <h3 className="font-semibold mt-4">Scholarship Guidance</h3>
            <p className="text-indigo-600 mt-2">Know more &gt;</p>
          </div>

          {/* Visa Application */}
          <div className="p-4 bg-pink-50 rounded-lg shadow-md text-center">
            <img src="visa-application-icon.png" alt="Visa Application" className="mx-auto" />
            <h3 className="font-semibold mt-4">Visa Application</h3>
            <p className="text-indigo-600 mt-2">Know more &gt;</p>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex justify-center space-x-2">
        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default HeroBanner;
