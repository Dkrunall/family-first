'use client';
import React, { useState } from 'react';
import Button from '../ui/Button';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#4444444d] shadow-md rounded-[20px] p-3 sm:p-4 lg:p-6 mx-2 sm:mx-4 lg:mx-[30px]">
      <div className="flex flex-row justify-between items-center w-full">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
          <Link className='flex items-center gap-3' href="/">
          <img 
            src="/images/img_people_nearby.png" 
            alt="Family First Logo" 
            className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] lg:w-[44px] lg:h-[44px]"
          />
          <span className="text-white text-base sm:text-lg lg:text-xl xl:text-[27px] font-normal leading-tight lg:leading-[39px] font-['Excon'] whitespace-nowrap">
            Family First
          </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <nav className="flex items-center gap-6 xl:gap-8">
            <a 
              href="#why-us" 
              className="text-white text-base hover:text-opacity-80 transition-opacity whitespace-nowrap"
            >
              Why us
            </a>
            <a 
              href="#features" 
              className="text-white text-base hover:text-opacity-80 transition-opacity whitespace-nowrap"
            >
              Features
            </a>
            <a 
              href="#benefits" 
              className="text-white text-base hover:text-opacity-80 transition-opacity whitespace-nowrap"
            >
              Benefits
            </a>
          </nav>
          <Button 
            variant="secondary" 
            size="sm"
            className="font-semibold bg-[linear-gradient(54deg,#e9866e_0%,#959189_50%,#4a9ca5_100%)] whitespace-nowrap w-32"
          >
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="flex lg:hidden p-2 text-white" 
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        menuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col items-center gap-4 py-4 border-t border-white/20">
          <nav className="flex flex-col items-center gap-4">
            <a 
              href="#why-us" 
              className="text-white text-base hover:text-opacity-80 transition-opacity py-2"
              onClick={() => setMenuOpen(false)}
            >
              Why us
            </a>
            <a 
              href="#features" 
              className="text-white text-base hover:text-opacity-80 transition-opacity py-2"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#benefits" 
              className="text-white text-base hover:text-opacity-80 transition-opacity py-2"
              onClick={() => setMenuOpen(false)}
            >
              Benefits
            </a>
          </nav>
          <Button 
            variant="secondary" 
            size="sm"
            className="font-semibold bg-[linear-gradient(54deg,#e9866e_0%,#959189_50%,#4a9ca5_100%)] mt-2 w-40"
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;