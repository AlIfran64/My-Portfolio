import React from 'react';
import CountUp from 'react-countup';
import logo from '../../../src/assets/logo.png';

const AboutMe = () => {
  return (
    <div className='max-w-6xl mx-10 md:mx-auto my-10 md:my-32 bg-[#0f0f0f] p-8 md:p-15 rounded-2xl border border-[#2a2a2a]'>

      <p className='text-justify text-white text-base md:text-lg leading-relaxed'>
        Welcome! I’m Al Ifran, a passionate MERN stack developer skilled in building clean, responsive, and user-friendly web applications. I specialize in crafting dynamic frontend experiences with React and Tailwind CSS, backed by robust APIs using Node.js, Express, and MongoDB.

        I love solving real-world problems, collaborating with teams, and constantly growing. Outside of coding, I’m a cycling enthusiast and avid traveller, always eager to explore and learn something new.
      </p>

      <div className="divider mt-6"></div>

      <div className='flex flex-col md:flex-row justify-between items-center md:items-end mt-10 gap-10'>

        <div className='flex flex-col sm:flex-row items-center sm:items-start gap-8 w-full md:w-auto justify-center'>

          {/* box-1 */}
          <div className='text-center sm:text-left'>
            <p className='text-3xl md:text-4xl font-bold text-white'>
              <CountUp end={50} duration={2} enableScrollSpy={true} />+
            </p>
            <p className='text-neutral-400 mt-1'>Projects done</p>
          </div>

          {/* Box-2 */}
          <div className='text-center sm:text-left'>
            <p className='text-3xl md:text-4xl font-bold text-white'>
              <CountUp end={1} duration={2} enableScrollSpy={true} />+
            </p>
            <p className='text-neutral-400 mt-1'>Years of experience</p>
          </div>

          {/* Box-3 */}
          <div className='text-center sm:text-left'>
            <p className='text-3xl md:text-4xl font-bold text-white'>
              <CountUp end={5} duration={2} enableScrollSpy={true} />+
            </p>
            <p className='text-neutral-400 mt-1'>Certifications</p>
          </div>
        </div>

        <div>
          <img className='w-8 md:w-10 h-8 md:h-10' src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
