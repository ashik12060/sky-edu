import React from 'react';

function Testimonial() {
  const testimonials = [
    {
      name: 'Nasrin',
      country: 'Bangladesh',
      testimonial:
        'It has come to my knowledge that Australia is popular for being ranked in the 3rd position for accommodating international students. Of the top 100 colleges in the world, several of them can be found in Australia. This proves high-quality education. In addition, it is known for having a multi-cultural society that will benefit my personal and social development.',
    },
    {
      name: 'Mohammed',
      country: 'Bangladesh',
      testimonial:
        'I had a wonderful experience with AECC. I especially thank the education counsellor, who helped me a lot during my whole journey and listened to my queries. I also recommend others who are planning to study abroad to contact the AECC team and fulfil their dreams.',
    },
    {
      name: 'Rozina',
      country: 'Bangladesh',
      testimonial:
        'AECC helped me with my visa process, and it was seamless. The staff member was so helpful and answered all my queries patiently, and guided me in all aspects. Now I am in the UK. she still helps and supports me in case of any doubts.',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-900 mb-4">
          Putting you first in your journey to study abroad
        </h1>
        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 xl:w-1/3 p-4 flex">
              <div className="max-w-sm w-full h-full rounded overflow-hidden shadow-md bg-indigo-500 text-white flex flex-col">
                <div className="px-6 py-4 flex-grow">
                  <div className="font-bold  text-xl mb-2">{testimonial.name}</div>
                  <p className="text-base flex-grow">
                    {testimonial.testimonial}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">
                    {testimonial.country}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
