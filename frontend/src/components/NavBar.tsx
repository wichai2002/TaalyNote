"use client"
import { useState } from 'react';
import Link from 'next/link';
import "../styles/navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="bg-yellow-800 text-white px-4 py-2 flex items-center justify-between relative text-style">
      <div className="text-xl font-bold mx-2 nav-logo">TAALY NOTE</div>
      <div className="hidden md:flex space-x-4 items-center">

        {/* Menu bar */}
        <div className="flex ">
          <Link href="/public-note" className={"px-4 mx-3"}><p>PUBLIC NOTE</p></Link>
          <Link href="/daily-note" className={"px-4 mx-3"}><p>DAILY NOTE</p></Link>
          <Link href="/teams" className={"px-4 mx-3"}><p>TEAMS</p></Link>
        </div>

        {/* User Profile */}
        <div className="relative">
          <button onClick={toggleProfileMenu} className="focus:outline-none flex items-center space-x-2">
            <span>ญาณิศา จันทราสกุล</span>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU7ayQAfh3Q7oEihJGIuCcD47y7sAGh78bNw&s" 
            alt="Profile Icon" 
            className="h-17 w-12 rounded-full" 
          />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20">
              <Link href="/profile">
                <p className="block px-4 py-2 hover:bg-rose-400">Profile</p>
              </Link>
              <Link href="/settings">
                <p className="block px-4 py-2 hover:bg-rose-400">Settings</p>
              </Link>
              <Link href="/logout">
                <p className="block px-4 py-2 hover:bg-rose-400">Logout</p>
              </Link>
            </div>
          )}
        </div>
      </div>


      {/* RESPONSIVE HIDDEN */}
      <div className="md:hidden">
        <button id="menu-button" className="focus:outline-none" onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 absolute top-12 left-0 w-full text-orange-950 z-10 bg-violet-50">
          <Link href="/public-note"><p className="block px-4 py-2 hover:bg-violet-300">PUBLIC NOTE</p></Link>
          <Link href="/daily-note"><p className="block px-4 py-2 hover:bg-violet-300">DAILY NOTE</p></Link>
          <Link href="/teams"><p className="block px-4 py-2 hover:bg-violet-300">TEAMS</p></Link>
          <button onClick={toggleProfileMenu} className="block px-4 py-2 text-left focus:outline-none flex items-center space-x-2">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU7ayQAfh3Q7oEihJGIuCcD47y7sAGh78bNw&s" 
              alt="Profile Icon" className="h-10 w-10 rounded-full" 
            />
            <span>ญาณิศา จันทราสกุล</span>
          </button>
          {isProfileOpen && (
            <div className="flex flex-col space-y-2">
              <Link href="/profile"><p className="block px-4 py-2 hover:bg-rose-400">Profile</p></Link>
              <Link href="/settings"><p className="block px-4 py-2 hover:bg-rose-400">Settings</p></Link>
              <Link href="/logout"><p className="block px-4 py-2 hover:bg-rose-400">Logout</p></Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
