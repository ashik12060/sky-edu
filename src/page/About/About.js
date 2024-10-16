import React from 'react';
import Header from '../../component/shared/Header/Header';
import Footer from '../../component/shared/Footer/Footer';
import client from '../../media/manager.jpg'

const About = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-indigo-600">About Us</h2>
            <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-indigo-800 sm:text-5xl">
              Welcome to Our Consultancy Firm
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-700 mx-auto">
              We provide expert guidance and services to help businesses and individuals reach their full potential. From strategic consulting to visa assistance, we're here to support your goals.
            </p>
          </div>

          {/* Our Mission Section */}
          <section className="mt-16">
            <h3 className="text-3xl font-semibold text-indigo-800 text-center">Our Mission</h3>
            <p className="mt-4 text-lg text-gray-700 text-center">
              Our mission is to empower our clients by providing reliable, personalized, and high-quality consulting services, whether you're expanding your business or planning to study abroad. We are committed to your success.
            </p>
          </section>

          {/* Our Values Section */}
          <section className="mt-16">
            <h3 className="text-3xl font-semibold text-indigo-800 text-center">Our Core Values</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white shadow-lg rounded-lg">
                <h4 className="text-xl font-bold text-indigo-800">Integrity</h4>
                <p className="mt-4 text-gray-600">
                  We uphold the highest standards of integrity in everything we do, ensuring transparency and honesty in all our dealings with clients.
                </p>
              </div>
              <div className="text-center p-6 bg-white shadow-lg rounded-lg">
                <h4 className="text-xl font-bold text-indigo-800">Commitment</h4>
                <p className="mt-4 text-gray-600">
                  We are dedicated to helping our clients achieve their objectives by delivering top-notch consulting services tailored to their specific needs.
                </p>
              </div>
              <div className="text-center p-6 bg-white shadow-lg rounded-lg">
                <h4 className="text-xl font-bold text-indigo-800">Innovation</h4>
                <p className="mt-4 text-gray-600">
                  We believe in continuous improvement and innovation, ensuring that our solutions remain cutting-edge and relevant in a fast-changing world.
                </p>
              </div>
            </div>
          </section>

          {/* Our Services Section */}
          <section className="mt-16">
            <h3 className="text-3xl font-semibold text-indigo-800 text-center">What We Offer</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-indigo-800">Business Consulting</h4>
                <p className="mt-4 text-gray-600">
                  From business strategy development to market analysis, we provide expert guidance to help your business thrive in a competitive environment.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-indigo-800">Visa & Immigration Support</h4>
                <p className="mt-4 text-gray-600">
                  We offer comprehensive visa processing and immigration services to help individuals and families transition smoothly to their new destinations.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-indigo-800">Education Consultancy</h4>
                <p className="mt-4 text-gray-600">
                  Whether you're planning to study abroad or need assistance with admissions, we provide end-to-end support to make your academic dreams come true.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mt-16 bg-indigo-50 py-12">
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-indigo-800">Client Testimonials</h3>
              <p className="mt-4 max-w-2xl text-lg text-gray-700 mx-auto">
                Hear what our satisfied clients have to say about our services.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <p className="text-gray-600 italic">"The team at [Consultancy Firm] helped us navigate complex visa processes with ease. Their expertise is unmatched!"</p>
                <p className="mt-4 text-indigo-800 font-bold">– John Doe</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <p className="text-gray-600 italic">"I couldn’t have asked for better guidance when expanding my business overseas. Highly recommend!"</p>
                <p className="mt-4 text-indigo-800 font-bold">– Sarah Lee</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                <p className="text-gray-600 italic">"Thanks to [Consultancy Firm], I got admission to my dream university. Their support was invaluable!"</p>
                <p className="mt-4 text-indigo-800 font-bold">– Alex Johnson</p>
              </div>
            </div>
          </section>

          {/* Our Team Section */}
          <section className="mt-16">
            <h3 className="text-3xl font-semibold text-indigo-800 text-center">Meet Our Team</h3>
            <p className="mt-4 max-w-2xl text-lg text-gray-700 mx-auto text-center">
              Our experienced and dedicated team is here to guide you through every step of the way.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <img src={client} alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full" />
                <h4 className="mt-4 text-xl font-bold text-indigo-800">Jane Smith</h4>
                <p className="mt-2 text-gray-600">CEO & Founder</p>
              </div>
              <div className="text-center">
                <img src={client} alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full" />
                <h4 className="mt-4 text-xl font-bold text-indigo-800">Michael Brown</h4>
                <p className="mt-2 text-gray-600">Head of Business Development</p>
              </div>
              <div className="text-center">
                <img src={client} alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full" />
                <h4 className="mt-4 text-xl font-bold text-indigo-800">Emily Davis</h4>
                <p className="mt-2 text-gray-600">Immigration Consultant</p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mt-16 bg-indigo-600 text-white py-12 text-center rounded-lg">
            <h3 className="text-3xl font-semibold">Ready to Start Your Journey?</h3>
            <p className="mt-4 text-lg">
              Whether you're looking to grow your business or planning a move abroad, we are here to guide you. Reach out to us today to get started!
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg shadow hover:bg-gray-100"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
