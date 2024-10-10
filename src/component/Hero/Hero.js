import React from 'react';
import img from '../../media/cover.jpg'

const Hero = () => {

  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Your study abroad journey, simplified
        </h2>
        <p className="mt-4 text-xl text-gray-500">
          We've helped 60,000+ students turn their dreams into reality, for FREE!*
        </p>
        <div className="my-10">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Register for FREE →
          </button>
        </div>
      </div>

      {/* <div className="mt-44 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-indigo-100">
                  <svg
                    className="w-12 h-12 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h 12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm0-1V9a2 2 0 00-2-2H6a2 2 0 00-2 2v6zM4 9h16v12H4V9z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  60,000+ Students
                </h3>
                
                <p className="mt-2 text-base text-gray-500">
                  We've helped 60,000+ students turn their dreams into reality, for FREE!*
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-indigo-100">
                  <svg
                    className="w-12 h-12 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm0-1V9a2 2 0 00-2-2H6a2 2 0 00-2 2v6zM4 9h16v12H4V9z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  100+ Countries
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We've helped students from 100+ countries turn their dreams into reality, for FREE!*
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-indigo-100">
                  <svg
                    className="w-12 h-12 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm0-1V9a2 2 0 00-2-2H6a2 2 0 00-2 2v6zM4 9h16v12H4V9z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  1000+ Universities
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We've helped students get accepted into 1000+ universities, for FREE!*
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      <div  className="mt-44 relative">
      <div className="absolute inset-0 flex items-center justify-center">
      <img src={img} className='w-100' alt='' />
      </div>
      </div>
    </div>
  );
};

export default Hero;