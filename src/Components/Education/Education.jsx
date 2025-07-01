import React from 'react';
import diu from '../../../src/assets/diu.png';

const Education = () => {
  return (
    <div data-aos="fade-left" className="max-w-6xl mx-auto my-10 md:my-20 lg:my-32 p-8">
      <h2 className='text-4xl text-center font-bold text-white mb-2'>Educational Qualification</h2>
      <p className='text-center text-neutral-400 text-xl'> The core knowledge and skills that drive my growth as a software developer.</p>

      <div className='mt-10 bg-[#0f0f0f] border border-[#2a2a2a] p-12 rounded-2xl space-y-2 flex flex-col md:flex-row justify-evenly items-center gap-10'>

        <div>
          <img className='w-44' src={diu} alt="logo" />
        </div>
        <div className='space-y-2'>
          <h3 className="text-2xl font-semibold text-white text-center md:text-start">BSc in Computer Science and Engineering</h3>
          <p className="text-neutral-400 font-semibold mt-1 text-center md:text-start">Daffodil International University</p>
          <p className="text-neutral-500 italic mb-4 text-center md:text-start">September 2019 – June 2024</p>
          <p className="text-gray-300 mb-1 text-center md:text-start"><span className="font-semibold text-white">CGPA:</span> 3.51 / 4.00</p>
          <p className="text-gray-300 text-center md:text-start">
            <span className="font-semibold text-white">Relevant Coursework:</span> Web Development, Software Engineering, Database Management
          </p>
        </div>

      </div>
    </div>

  );
};

export default Education;
