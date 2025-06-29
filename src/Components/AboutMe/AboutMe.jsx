import React from 'react';

const AboutMe = () => {
  return (
    <div className='max-w-6xl mx-auto my-32 bg-[#0f0f0f] p-20 rounded-2xl'>
      <p className='text-justify text-white text-lg'>
        Welcome! I’m Al Ifran, a passionate MERN stack developer skilled in building clean, responsive, and user-friendly web applications. I specialize in crafting dynamic frontend experiences with React and Tailwind CSS, backed by robust APIs using Node.js, Express, and MongoDB.

        I love solving real-world problems, collaborating with teams, and constantly growing. Outside of coding, I’m a cycling enthusiast and avid traveller, always eager to explore and learn something new.
      </p>

      <div className='mt-10 flex items-center gap-8'>

        {/* box-1 */}
        <div>
          <p>50+</p>
          <p>Projects done</p>
        </div>

        {/* Box-2 */}
        <div>
          <p>1+</p>
          <p>Years of experience</p>
        </div>

        {/* Box-3 */}
        <div></div>
      </div>
    </div>

  );
};

export default AboutMe;
