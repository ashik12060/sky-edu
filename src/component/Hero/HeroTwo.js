import React from "react";

import img from '../../media/13063.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const HeroTwo = () => {
  return (
    
    <div className="bg-indigo-50">
      <div className="container mx-auto px-4 py-16 ">
      <h1 className="text-4xl font-bold text-center mb-8">
        Wherever you want to go, we'll get you there.
      </h1>
      <p className="text-lg text-center mb-12">
        Explore the best study destinations in the world! Learn all about the
        countries' top universities, scholarships, cost of living, post-study
        work rights and more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg shadow-md p-4 bg-white">
          <img
            src={img}
            alt="Study in UK"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-xl font-bold mt-4">Study in UK</h2>
          <a
            href="#"
            className="inline-block text-blue-500 font-bold hover:underline mt-2"
          >
            Learn more <FontAwesomeIcon icon={faAnglesRight} />
          </a>
        </div>
        <div className="rounded-lg shadow-md p-4 bg-white">
          <img
            src={img}
            alt="Study in UK"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-xl font-bold mt-4">Study in UK</h2>
          <a
            href="#"
            className="inline-block text-blue-500 font-bold hover:underline mt-2"
          >
            Learn more <FontAwesomeIcon icon={faAnglesRight} />
          </a>
        </div>
        <div className="rounded-lg shadow-md p-4 bg-white">
          <img
            src={img}
            alt="Study in UK"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-xl font-bold mt-4">Study in UK</h2>
          <a
            href="#"
            className="inline-block text-blue-500 font-bold hover:underline mt-2"
          >
            Learn more <FontAwesomeIcon icon={faAnglesRight} />
          </a>
        </div>
        <div className="rounded-lg shadow-md p-4 bg-white">
          <img
            src={img}
            alt="Study in UK"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-xl font-bold mt-4">Study in UK</h2>
          <a
            href="#"
            className="inline-block text-blue-500 font-bold hover:underline mt-2"
          >
            Learn more <FontAwesomeIcon icon={faAnglesRight} />
          </a>
        </div>
        <div className="rounded-lg shadow-md p-4 bg-white">
          <img
            src={img}
            alt="Study in USA"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-xl font-bold mt-4">Study in USA</h2>
          <a
            href="#"
            className="inline-block text-blue-500 font-bold hover:underline mt-2"
          >
            Learn more <FontAwesomeIcon icon={faAnglesRight} />
          </a>
        </div>
        <div className="rounded-lg shadow-md p-4 bg-white">
          <img
            src={img}
            alt="Study in Australia"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-xl font-bold mt-4">Study in Australia</h2>
          <a
            href="#"
            className="inline-block text-blue-500 font-bold hover:underline mt-2"
          >
            Learn more <FontAwesomeIcon icon={faAnglesRight} />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroTwo;