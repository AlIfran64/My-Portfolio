import React from 'react';
import banner from '../../../src/assets/banner-bg.jpg';
import myPic from '../../../src/assets/mypic.png';
import picbg from '../../../src/assets/picbg.png';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router';
import { GoDownload } from 'react-icons/go';
import { RiContactsLine } from 'react-icons/ri';

const Banner = () => {
  return (
    <div className='relative px-5 sm:px-10 lg:px-20 pt-20'>
      {/* Background */}
      <div
        className='absolute inset-0 bg-no-repeat bg-center bg-cover filter grayscale opacity-50'
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className='absolute inset-0 bg-black opacity-80'></div>

      {/* Content */}
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-2 md:gap-10 relative z-10 px-5 pt-5'>

        {/* Left */}
        <div className='w-full lg:w-1/2 text-white'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            Hi! I'm{' '}
            <span className='bg-gradient-to-r from-[#00C6FF] via-[#0072FF] to-[#0059B3] bg-clip-text text-transparent'>
              Al Ifran
            </span>
          </h1>

          <p className='mt-3 text-xl sm:text-2xl font-medium'>
            <Typewriter
              words={['Mern Stack Web Developer', 'React Developer', 'Full Stack Engineer']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <p className='my-5 text-sm sm:text-base text-justify leading-relaxed'>
            Passionate about building fast, responsive, and scalable web applications using modern technologies like React, Node.js, Express, and MongoDB.
          </p>

          {/* Social Icons */}
          {/* SVG */}
          <div className='flex justify-center md:justify-start items-center gap-5 my-10'>
            {/* GitHub */}
            <Link target='_blank' to={'https://github.com/AlIfran64'}>
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0.297C5.37 0.297 0 5.668 0 12.297c0 5.292 3.438 9.787 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.745.084-.73.084-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.526.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.05.138 3 .404 2.29-1.553 3.296-1.23 3.296-1.23.654 1.65.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.604-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 22.08 24 17.587 24 12.297c0-6.63-5.37-12-12-12" />
              </svg>
            </Link>


            {/* LinkedIn */}
            <Link target='_blank' to={'https://www.linkedin.com/in/al-ifran-36127024a/'}>
              <svg
                height="24"
                width="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452H16.9v-5.569c0-1.328-.026-3.039-1.851-3.039-1.851 0-2.134 1.446-2.134 2.939v5.669h-3.551V9h3.41v1.561h.047c.475-.9 1.637-1.851 3.368-1.851 3.6 0 4.267 2.368 4.267 5.455v6.287zM5.337 7.433a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.726v20.547C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.774 1.778-1.726V1.726C24 .774 23.204 0 22.225 0z" />
              </svg>
            </Link>


            {/* Twitter */}
            <Link target='_blank' to={'https://x.com/al_ifran64'}>
              <svg
                height="24"
                width="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.958 4.958 0 0 0 2.163-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.195-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.665 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616c-.054 2.385 1.674 4.614 4.127 5.099a4.996 4.996 0 0 1-2.224.085 4.935 4.935 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 19.54a13.936 13.936 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.633A9.936 9.936 0 0 0 24 4.59z" />
              </svg>
            </Link>

          </div>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row items-center gap-4 my-5'>
            <a
              href="https://drive.google.com/uc?export=download&id=1rauTLzFz1229QVGBlpELeCJPXVfZkk3U"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[2px] rounded-full bg-gradient-to-r from-[#00C6FF] via-[#0072FF] to-[#0059B3] hover:from-[#0072FF] hover:via-[#00C6FF] hover:to-[#0099FF] transition-colors duration-300"
            >
              <span className="rounded-full bg-gradient-to-r from-[#00C6FF] via-[#0072FF] to-[#0059B3] text-white px-6 py-2 font-semibold shadow-md flex items-center gap-2">
                <GoDownload size={20} /> Download Resume
              </span>
            </a>

            <button className='p-[2px] rounded-full bg-gradient-to-r from-[#00C6FF] via-[#0072FF] to-[#0059B3] hover:from-[#0072FF] hover:via-[#00C6FF] hover:to-[#0099FF] transition-colors duration-300'>
              <span className='bg-black text-white rounded-full px-6 py-2 font-semibold flex items-center gap-2'>
                <RiContactsLine size={18} /> Contact Now
              </span>
            </button>
          </div>
        </div>

        {/* Right */}
        <div className='w-full lg:w-1/2 mb-10 lg:mb-0'>
          <div
            className='bg-center bg-contain bg-no-repeat flex justify-center items-center rounded-xl overflow-hidden shadow-lg w-full'
            style={{ backgroundImage: `url(${picbg})` }}
          >
            <img
              src={myPic}
              alt="pic"
              className='w-[220px] sm:w-[300px] md:w-[340px] lg:w-[380px] h-auto object-cover rounded-lg'
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
