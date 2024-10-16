
import React from 'react';
import Header from '../../component/shared/Header/Header';
import Footer from '../../component/shared/Footer/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-indigo-600">Get In Touch</h2>
            <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-indigo-800 sm:text-5xl">
              Contact Us
            </p>
            <p className="mt-4 max-w-2xl text-xl text-indigo-900 mx-auto">
              We’d love to hear from you. Whether you have a question about services, pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </div>

          <div className="mt-12">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              {/* Contact Form */}
              <div className="md:col-span-2">
                <form action="#" method="POST" className="bg-white shadow-lg rounded-lg px-8 pt-8 pb-8 mb-4">
                  <div className="mb-6">
                    <label className="block text-indigo-800 text-sm font-bold mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border border-indigo-300 rounded w-full py-3 px-4 text-indigo-900 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      id="name"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-indigo-800 text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border border-indigo-300 rounded w-full py-3 px-4 text-indigo-900 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      id="email"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-indigo-800 text-sm font-bold mb-2" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      className="shadow appearance-none border border-indigo-300 rounded w-full py-3 px-4 text-indigo-900 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      id="subject"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-indigo-800 text-sm font-bold mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="shadow appearance-none border border-indigo-300 rounded w-full py-3 px-4 text-indigo-900 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      id="message"
                      rows="5"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      type="button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="md:col-span-1">
                <div className="bg-white shadow-lg rounded-lg p-8">
                  <h3 className="text-lg font-semibold text-indigo-800">Contact Information</h3>
                  <p className="mt-4 text-sm text-gray-600">
                    Reach us via phone, email, or visit us at our office. We are available Monday to Friday, 9 AM - 6 PM.
                  </p>
                  <div className="mt-6">
                    <h4 className="text-md font-semibold text-indigo-800">Phone</h4>
                    <p className="text-sm text-gray-600">+1 (123) 456-7890</p>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-md font-semibold text-indigo-800">Email</h4>
                    <p className="text-sm text-gray-600">info@consultancyfirm.com</p>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-md font-semibold text-indigo-800">Office Location</h4>
                    <p className="text-sm text-gray-600">123 Business Avenue, Suite 400, City, State, ZIP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <iframe
            title="Office Location"
            className="w-full h-80 md:h-96 shadow-lg rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.9537363153228!3d-37.8162791797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770b9c13663d63!2sConsultancy%20Firm%20HQ!5e0!3m2!1sen!2s!4v1635866144524!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
