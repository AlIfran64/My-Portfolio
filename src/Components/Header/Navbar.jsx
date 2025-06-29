import React from 'react';
import logo from '../../../src/assets/logo.png';
import { GoDownload } from 'react-icons/go';
import { Link } from 'react-scroll';

const Navbar = () => {


  const links = <>

    <li>
      <Link
        to="aboutMe"
        smooth={true}
        duration={500}
        offset={-200}
        spy={true}
        activeClass="border-b-2 border-[#00C6FF] py-1 font-semibold"
        className="mx-2 cursor-pointer hover:text-[#00C6FF] text-white text-sm transition duration-300"
      >
        About me
      </Link>
    </li>


    <li>
      <Link
        to="skills"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="border-b-2 border-[#00C6FF] py-1 font-semibold"
        className="mx-2 cursor-pointer hover:text-[#00C6FF] text-white text-sm transition duration-300"
      >
        Skills
      </Link>
    </li>

    <li>
      <Link
        to="experience"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="border-b-2 border-[#00C6FF] py-1 font-semibold"
        className="mx-2 cursor-pointer hover:text-[#00C6FF] text-white text-sm transition duration-300"
      >
        Experience
      </Link>
    </li>

    <li>
      <Link
        to="education"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="border-b-2 border-[#00C6FF] py-1 font-semibold"
        className="mx-2 cursor-pointer hover:text-[#00C6FF] text-white text-sm transition duration-300"
      >
        Education
      </Link>
    </li>

    <li>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="border-b-2 border-[#00C6FF] py-1 font-semibold"
        className="mx-2 cursor-pointer hover:text-[#00C6FF] text-white text-sm transition duration-300"
      >
        Projects
      </Link>
    </li>

    <li>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="border-b-2 border-[#00C6FF] py-1 font-semibold"
        className="mx-2 cursor-pointer hover:text-[#00C6FF] text-white text-sm transition duration-300"
      >
        Contact
      </Link>
    </li>
  </>


  return (
    <div className="navbar bg-black shadow-sm p-5 fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img className="w-10 h-10" src={logo} alt="logo" />
        </button>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://drive.google.com/uc?export=download&id=1rauTLzFz1229QVGBlpELeCJPXVfZkk3U"
          target="_blank"
          rel="noopener noreferrer"
          className="btn rounded-full bg-gradient-to-r from-[#00C6FF] via-[#0072FF] to-[#0059B3] text-white hover:from-[#0072FF] hover:via-[#00C6FF] hover:to-[#0099FF] transition-colors duration-300 flex items-center gap-2 px-5 py-2 font-semibold shadow-md"
        >
          <GoDownload size={20} /> Download Resume
        </a>

      </div>
    </div>
  );
};

export default Navbar;
