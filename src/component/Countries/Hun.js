import React, { useState } from 'react'
import img from '../../media/cover.jpg'
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import { Link } from 'react-router-dom';

const Hun = (event) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [preferredStudyDestination, setPreferredStudyDestination] = useState('');
    const [preferredStudyYear, setPreferredStudyYear] = useState('');
    const [preferredStudyIntake, setPreferredStudyIntake] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // TODO: Submit the form data to your backend
      console.log({
        name,
        email,
        mobileNumber,
        preferredStudyDestination,
        preferredStudyYear,
        preferredStudyIntake,
      });
    };
  
  return (
    <div>
          <>
   <Header />
    <div className="bg-purple-100 min-h-screen">
      

      <main className="container mx-auto p-6 mt-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">
            Your dream of studying in Australia is closer than you think!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Learn everything you need to know about studying in Australia and get end to end expert guidance from us.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md">
            Get Started for Free
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center mt-12">
          <div className="md:w-1/2 p-4">
            <img
              src={img}
              alt="Sydney Opera House"
              className="w-full rounded-md shadow-md"
            />
          </div>
          <div className="md:w-1/2 p-4">
 <h2 className="text-2xl font-bold text-purple-700 mb-4">
              Why Study in Australia?
            </h2>
            <ul className="list-disc pl-4">
              <li className="text-lg text-gray-600 mb-2">
                World-class education system
              </li>
              <li className="text-lg text-gray-600 mb-2">
                High standard of living
              </li>
              <li className="text-lg text-gray-600 mb-2">
                Diverse cultural environment
              </li>
            </ul>
          </div>
        </div>
      </main>


      <div className="container mx-auto p-4">
  <h1 className="text-3xl font-bold text-center mb-8">
    Study in Australia for Bangladeshi Students
  </h1>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div>
      <p className="text-lg mb-4">
        Australia stands proud among international students&apos; preferred study
        destinations, with eight globally ranked universities. Australia is
        home to a solid Bangladeshi community, which will help you get
        comfortable with the place. Perth is the most-picked city in Australia,
        followed by Brisbane, Melbourne, Adelaide, and Sydney. Providing
        world-class education, sophisticated technology and culture,
        better-paying job opportunities, etc., has led to Australia&apos;s
        spectacular position.
      </p>
      <p className="text-lg mb-4">
        Australia offers a wide range of study choices for international
        students to pursue. From popular options like Medicine, Engineering,
        Business, and Science, to some rare preferences like performing
        arts, theology, and eastern medicine, there are institutions to study in
        Australia for almost every other course. The programmes are
        designed to give in-depth theoretical knowledge enhanced by practical
        learning.
      </p>
      <p className="text-lg mb-4">
        Additionally, internships and industry engagement are integral parts of
        learning in Australia. Therefore, students gain hands-on experience
        and build connections in their chosen field. Australia is also
        renowned for its research opportunities, with many universities
        offering scholarships to international students.
      </p>
    </div>
    <form 
      onSubmit={handleSubmit} 
      className="bg-gray-100 p-6 rounded-lg shadow-md"
    >
      <label
        className="block mb-2 text-lg"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="w-full p-2 pl-10 mb-4 text-lg text-gray-700 rounded border border-indigo-600"
        id="name"
        type="text"
        placeholder='Enter name'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label
        className="block mb-2 text-lg"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="w-full p-2 pl-10 mb-4 text-lg text-gray-700 rounded border border-indigo-600"
        id="email"
        type="email"
         placeholder='Enter email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label
        className="block mb-2 text-lg"
        htmlFor="mobileNumber"
      >
        Mobile Number
      </label>
      <input
        className="w-full p-2 pl-10 mb-4 text-lg text-gray-700 rounded border border-indigo-600"
        id="mobileNumber"
        type="tel"
         placeholder='Enter mobile number'
        value={mobileNumber}
        onChange={(event) => setMobileNumber(event.target.value)}
      />
      <label
        className="block mb-2 text-lg"
        htmlFor="preferredStudyDestination"
      >
        Preferred Study Destination
      </label>
      <select
        className="w-full p-2 pl-10 mb-4 text-lg text-gray-700 rounded border border-indigo-600"
        id="preferredStudyDestination"
        value={preferredStudyDestination}
        onChange={(event) => setPreferredStudyDestination(event.target.value)}
      >
        <option value="">Select</option>
        <option value="Perth">Perth</option>
        <option value="Brisbane">Brisbane</option>
        <option value="Melbourne">Melbourne</option>
        <option value="Adelaide">Adelaide</option>
        <option value="Sydney">Sydney</option>
      </select>
      <label
        className="block mb-2 text-lg"
        htmlFor="preferredStudyYear"
      >
        Preferred Study Year
      </label>
      <select
        className="w-full p-2 pl-10 mb-4 text-lg text-gray-700 rounded border border-indigo-600"
        id="preferredStudyYear"
        value={preferredStudyYear}
        onChange={(event) => setPreferredStudyYear(event.target.value)}
      >
        <option value="">Select</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
      <label
        className="block mb-2 text-lg"
        htmlFor="preferredStudyIntake"
      >
        Preferred Study Intake
      </label>
      <select
        className="w-full p-2 pl-10 mb-4 text-lg text-gray-700 rounded border border-indigo-600"
        id="preferredStudyIntake"
        value={preferredStudyIntake}
        onChange={(event) => setPreferredStudyIntake(event.target.value)}
      >
        <option value="">Select</option>
        <option value="February">February</option>
        <option value="July">July</option>
        <option value="October">October</option>
      </select>
      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded w-full"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</div>



      

      
    </div>
    <div className="my-10 text-center">
        <Link to='/contact' className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700">
          Book a free consultation
        </Link>
      </div>

    <Footer />
   </>
    </div>
  )
}

export default Hun;