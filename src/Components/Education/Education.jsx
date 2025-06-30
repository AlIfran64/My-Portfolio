import React from 'react';

const Education = () => {
  return (
    <div id="education" className="min-h-screen bg-[#0f0f0f] px-4 py-20 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-[#1a1a1a]/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border border-[#2a2a2a]">
        <h2 className="text-4xl font-bold text-white text-center mb-6">Education</h2>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">BSc in Computer Science and Engineering</h3>
          <p className="text-neutral-400">Daffodil International University</p>
          <p className="text-sm text-neutral-500 mb-4">September 2019 – June 2024</p>

          <p className="text-neutral-300">
            <span className="text-white font-medium">CGPA:</span> 3.51 out of 4.00
          </p>

          <p className="text-neutral-300">
            <span className="text-white font-medium">Relevant Coursework:</span> Web Development, Software Engineering, Database Management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
