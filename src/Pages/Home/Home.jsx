import React from 'react';
import Banner from '../../Components/Header/Banner';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Skills from '../../Components/Skills/Skills';
import Experience from '../../Components/Experience/Experience';
import Education from '../../Components/Education/Education';
import Projects from '../../Components/Projects/Projects';
import Contact from '../../Components/Contact/Contact';
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <div>
      <Banner />

      <Element name="aboutMe">
        <AboutMe />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="education">
        <Education />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Home;
