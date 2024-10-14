import React from 'react';
import img from '../../media/333.png'
import img2 from '../../media/999.png'
import img3 from '../../media/surokkha.png'

function IndustryPartnerships() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl text-indigo-600 font-bold text-center mb-8">Our Industry Partnerships</h2>
      <p className="text-lg text-indigo-600 font-bold text-center mb-12">
        Our affiliations with industry leaders, accreditations, and partnerships speak volumes about our credibility and standing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center justify-center">
          <img src={img} alt="The PIE" className="w-32 h-32 mb-4" />
          <p className="text-center text-gray-600">Professionals in International Education</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={img2} alt="World University Rankings" className="w-32 h-32 mb-4" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={img3} alt="Migration Institute of Australia" className="w-32 h-32 mb-4" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={img} alt="ICEF Agency Status" className="w-32 h-32 mb-4" />
          <p className="text-center text-gray-600">#0330</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={img2} alt="American International Recruitment Council" className="w-32 h-32 mb-4" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={img3} alt="ECAN" className="w-32 h-32 mb-4" />
         </div>
      </div>
    </div>
  );
}

export default IndustryPartnerships;