import React from 'react';
import img from '../../media/cover.jpg'

const Hero = () => {

  return (
    <div className="bg-indigo-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-indigo-900 sm:text-5xl md:text-6xl">
          Your study abroad journey, simplified
        </h2>
        <p className="mt-4 text-xl text-indigo-900">
          We've helped 60,000+ students turn their dreams into reality, for FREE!*
        </p>
        <div className="my-10">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Register for FREE →
          </button>
        </div>
      </div>

    


      <div  className="mt-44 relative">
      <div className="absolute inset-0 flex items-center justify-center">
      <img src={img} className='w-100' alt='' />
      </div>
      </div>
    </div>
  );
};

export default Hero;