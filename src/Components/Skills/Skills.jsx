import React from 'react';
import react from '../../../src/assets/react.png';
import js from '../../../src/assets/javascript.png';
import tailwind from '../../../src/assets/tailwind.png';
import css from '../../../src/assets/css.png';
import html from '../../../src/assets/html.png';
import express from '../../../src/assets/icons8-express-js-250.png';
import node from '../../../src/assets/nodejs.png';
import jwt from '../../../src/assets/jwt.png';
import mongodb from '../../../src/assets/mongo.png';
import firebase from '../../../src/assets/firebase.png';
import mysql from '../../../src/assets/mysql.png';
import sqlite from '../../../src/assets/sqlite.png';
import git from '../../../src/assets/git.png';
import github from '../../../src/assets/github.png';
import vercel from '../../../src/assets/vercel.png'
import netlify from '../../../src/assets/netlify-seeklogo.png';
import surge from '../../../src/assets/surge.png';
import figma from '../../../src/assets/figma.png';
import pixso from '../../../src/assets/pixso.png';
import c from '../../../src/assets/icons8-c-programming-240.png';
import c2 from '../../../src/assets/icons8-c++-240.png';
import python from '../../../src/assets/icons8-python-240.png';
import java from '../../../src/assets/icons8-java-logo-240.png';
import php from '../../../src/assets/icons8-php-logo-160.png';

const Skills = () => {
  return (
    <div className='max-w-6xl mx-10  md:mx-auto my-10 md:my-32'>
      <h1 className='text-4xl text-center font-bold text-white mb-2'>Skills</h1>
      <p className='text-center text-neutral-400 text-xl'>A diverse set of skills that power my development workflow.</p>

      <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5'>

        {/* box-1 */}
        <div className='bg-[#0f0f0f] p-10 rounded-2xl border border-[#2a2a2a]'>
          <p className='text-white font-semibold'>Frontend</p>
          <div className="divider mt-0"></div>

          <div className='flex flex-wrap items-center gap-2 md:gap-3'>

            {/* react */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15 p-2' src={react} alt="logo" />
            </div>

            {/* js */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15 p-2' src={js} alt="logo" />
            </div>

            {/* tailwindcss */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15 p-2' src={tailwind} alt="logo" />
            </div>

            {/* css */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15 p-2' src={css} alt="logo" />
            </div>

            {/* html */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15 p-2' src={html} alt="logo" />
            </div>
          </div>
        </div>

        {/* box-2 */}
        <div className='bg-[#0f0f0f] p-10 rounded-2xl border border-[#2a2a2a]'>
          <p className='text-white font-semibold'>Backend</p>
          <div className="divider mt-0"></div>

          <div className='flex flex-wrap items-center gap-2 md:gap-3'>

            {/* node */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15 p-2' src={node} alt="logo" />
            </div>

            {/* express */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={express} alt="logo" />
            </div>

            {/* jwt */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={jwt} alt="logo" />
            </div>

          </div>
        </div>
        {/* box-3 */}
        <div className='bg-[#0f0f0f] p-10 rounded-2xl border border-[#2a2a2a]'>
          <p className='text-white font-semibold'>Database</p>
          <div className="divider mt-0"></div>

          <div className='flex flex-wrap items-center gap-2 md:gap-3'>

            {/* mongodb */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={mongodb} alt="logo" />
            </div>

            {/* firebase */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={firebase} alt="logo" />
            </div>

            {/* mysql */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={mysql} alt="logo" />
            </div>

            {/* sqlite */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={sqlite} alt="logo" />
            </div>
          </div>
        </div>

        {/* box-4 */}
        <div className='bg-[#0f0f0f] p-10 rounded-2xl border border-[#2a2a2a]'>
          <p className='text-white font-semibold'>Version Control & Deployment</p>
          <div className="divider mt-0"></div>

          <div className='flex flex-wrap items-center gap-2 md:gap-3'>

            {/* git */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={git} alt="logo" />
            </div>

            {/* github */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={github} alt="logo" />
            </div>

            {/* vercel */}
            <div className='bg-[#171717] border-2 border-neutral-800 rounded-xl'>
              <img className='w-10 md:w-15 p-2  invert' src={vercel} alt="logo" />
            </div>

            {/* netlify */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={netlify} alt="logo" />
            </div>

            {/* surge */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15 h-10 md:h-15  p-2 ' src={surge} alt="logo" />
            </div>

            {/* firebase */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={firebase} alt="logo" />
            </div>
          </div>
        </div>

        {/* box-5 */}
        <div className='bg-[#0f0f0f] p-10 rounded-2xl border border-[#2a2a2a]'>
          <p className='text-white font-semibold'>UI/UX Tools</p>
          <div className="divider mt-0"></div>

          <div className='flex flex-wrap items-center gap-2 md:gap-3'>

            {/* figma */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={figma} alt="logo" />
            </div>

            {/* pixso */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={pixso} alt="logo" />
            </div>
          </div>
        </div>

        {/* box-6 */}
        <div className='bg-[#0f0f0f] p-10 rounded-2xl border border-[#2a2a2a]'>
          <p className='text-white font-semibold'>Familiar With</p>
          <div className="divider mt-0"></div>

          <div className='flex flex-wrap items-center gap-2 md:gap-3'>

            {/* C */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={c} alt="logo" />
            </div>

            {/* C++ */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={c2} alt="logo" />
            </div>

            {/* python */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={python} alt="logo" />
            </div>

            {/* java */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={java} alt="logo" />
            </div>

            {/* php */}
            <div className='bg-[#171717] rounded-xl border-2 border-neutral-800'>
              <img className='w-10 md:w-15  p-2 ' src={php} alt="logo" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;