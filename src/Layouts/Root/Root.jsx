import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Root = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // optional settings
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;