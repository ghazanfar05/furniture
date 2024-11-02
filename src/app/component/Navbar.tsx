'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Adjust if using a different image loader
import { IoSearchOutline } from 'react-icons/io5';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsSun, BsMoon } from 'react-icons/bs'; // Icons for theme toggle
import { motion } from 'framer-motion'
import { fadein } from '../variants'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true); // State for theme toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <nav   className={`fixed p-4 w-full z-20 ${isDarkTheme ? ' bg-gray-500 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] text-white' : 'bg-white text-black'} shadow-md`}>
      <div className="container mx-auto flex justify-between items-center ">

        {/* Logo Section */}
        <div className="flex items-center">
          {/* Placeholder for logo */}
          <motion.div
            variants={fadein("right", 0.2)}
            initial="hidden"
            whileInView="show"
          >

            <h1 className="text-xl "> Interior Design</h1>
            
          </motion.div>



        </div>

        {/* Navigation and Search Section */}
        <div className="flex-1 flex items-center justify-between md:justify-center">
          {/* Navigation Links */}
          <div className={`hidden md:flex space-x-6 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
            <a href="#Home" className="hover:text-gray-400 transition-colors duration-300">Home</a>
            <a href="#About" className="hover:text-gray-400 transition-colors duration-300">About</a>
            <a href="#Services" className="hover:text-gray-400 transition-colors duration-300">Services</a>
            <a href="#Design" className="hover:text-gray-400 transition-colors duration-300">Design</a>
            <a href="#Contact" className="hover:text-gray-400 transition-colors duration-300">Contact</a>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-xs md:max-w-md mx-4 hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className={`w-full py-2 px-4 rounded-md ${isDarkTheme ? 'bg-gray-800 text-white' : '  bg-neutral-900 text-black'} placeholder-white border border-gray-700 focus:outline-none focus:ring-1 focus:ring-black shadow-md transition-all duration-300`}
            />
            <IoSearchOutline className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkTheme ? 'text-white' : 'text-white'}`} />
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-md focus:outline-none"
          >
            {isDarkTheme ? <BsSun className="text-yellow-400" /> : <BsMoon className="text-slate-950" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="hover:text-black hover:bg-slate-300 text-black rounded-3xl bg-white "
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <AiOutlineClose className="h-5 w-4" />
            ) : (
              <AiOutlineMenu className="h-5 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-60 h-[500px] rounded-e-2xl mt-16 ${isDarkTheme ? 'bg-gray-500 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] text-white' : 'bg-white text-black'} transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30`}>
        <div className="flex flex-col items-center mt-16">
          <a href="#Home" className="block py-2 px-4 hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>Home</a>
          <a href="#About" className="block py-2 px-4 hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>About</a>
          <a href="#Services" className="block py-2 px-4 hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>Services</a>
          <a href="#Design" className="block py-2 px-4 hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>Design</a>
          <a href="#Contact" className="block py-2 px-4 hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;












