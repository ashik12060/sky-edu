import React, { useState } from "react";

function FreeConsultation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [preferredStudyDestination, setPreferredStudyDestination] = useState("");
  const [preferredStudyYear, setPreferredStudyYear] = useState("");
  const [preferredStudyIntake, setPreferredStudyIntake] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", {
      name,
      email,
      mobileNumber,
      preferredStudyDestination,
      preferredStudyYear,
      preferredStudyIntake,
    });
  };

  return (
    <div className=" mx-auto px-4 py-16 flex flex-col lg:flex-row bg-indigo-50">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 p-28">
        <h3 className="text-2xl text-blue-900 mb-4 text-start">
          Better futures begin with AECC
        </h3>
        <p className="mb-4 text-start text-indigo-900 text-base	">
          We're here to support you on your study abroad journey and help you create an extraordinary future for yourself.
        </p>
        <p className="mb-4 text-start text-indigo-900 text-base	">
          Fill the form to schedule a free consultation session. Our counselors will get in touch with you soon.Book your FREE consultation with Certified Counsellors
        </p>
       
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2">
      <h2  className="text-xl text-blue-900 mb-4 text-center font-bold">Book your FREE consultation with Certified Counsellors</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-indigo-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-indigo-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mobileNumber" className="font-bold">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="border border-indigo-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="preferredStudyDestination" className="font-bold">
              Preferred Study Destination
            </label>
            <input
              type="text"
              id="preferredStudyDestination"
              value={preferredStudyDestination}
              onChange={(e) => setPreferredStudyDestination(e.target.value)}
              className="border border-indigo-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="preferredStudyYear" className="font-bold">
              Preferred Study Year
            </label>
            <input
              type="text"
              id="preferredStudyYear"
              value={preferredStudyYear}
              onChange={(e) => setPreferredStudyYear(e.target.value)}
              className="border border-indigo-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="preferredStudyIntake" className="font-bold">
              Preferred Study Intake
            </label>
            <input
              type="text"
              id="preferredStudyIntake"
              value={preferredStudyIntake}
              onChange={(e) => setPreferredStudyIntake(e.target.value)}
              className="border border-indigo-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Book Your Consultation
          </button>
        </form>
      </div>
    </div>
  );
}

export default FreeConsultation;
