import React from 'react';
import atc from '../../../src/assets/atc.png';

const Experience = () => {
  return (
    <div data-aos="fade-right" className="max-w-6xl mx-auto my-10 md:my-20 lg:my-32 p-8 lg:p-0">
      <h2 className='text-4xl text-center font-bold text-white mb-2'>Experience</h2>
      <p className='text-center text-neutral-400 text-xl'>Hands-on Industry Experience in Real-world Projects and Collaboration</p>
      <div className=" bg-[#0F0F0F] backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border border-[#2a2a2a] mt-10">


        <div className="space-y-4">
          <div className='flex justify-between items-center'>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Software Engineer Intern</h3>
              <p className="text-neutral-400">ATC Tech Limited, Hi-Tech Park, Rajshahi</p>
              <p className="text-sm text-neutral-500 mb-4">April 2024 – July 2024</p>
            </div>
            <div>
              <img className='w-24 rounded-lg' src={atc} alt="logo" />
            </div>
          </div>

          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>
              Developed user interfaces with <span className="text-white font-medium">Tailwind CSS</span> and <span className="text-white font-medium">React.js</span>, improving web application visuals and functionality.
            </li>
            <li>
              Collaborated with UX/UI team to create responsive, user-friendly designs.
            </li>
            <li>
              Gained hands-on experience in frontend development and software engineering best practices.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
