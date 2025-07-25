'use client';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-footer-1 mt-8 sm:mt-[52px] px-4 sm:px-[63px] py-6 sm:py-8">
      <div className="w-full max-w-[94%] mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          {/* Brand Section */}
          <div className="w-full lg:w-[28%] space-y-4 lg:space-y-6">
            <h2 className="text-global-4 text-2xl sm:text-[32px] font-bold leading-tight lg:leading-[46px] font-['Excon']">
              Family First
            </h2>
            <p className="text-global-4 text-base sm:text-[20px] font-medium leading-6 lg:leading-[24px]">
              With Family First, parents get complete control of their child's device—without the child ever knowing.
            </p>
          </div>

          {/* About Us Section */}
          <div className="w-full lg:w-auto lg:mt-[14px]">
            <h3 className="text-global-4 text-lg font-extrabold leading-[22px] mb-4 sm:mb-6">
              About Us
            </h3>
            <ul className="space-y-3 sm:space-y-[14px]">
              <li>
                <a href="#company" className="text-global-4 text-sm sm:text-base leading-5 hover:opacity-80 transition-opacity">
                  Company
                </a>
              </li>
              <li>
                <a href="#features" className="text-global-4 text-sm sm:text-base leading-5 hover:opacity-80 transition-opacity">
                  Features
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-global-4 text-sm sm:text-base leading-5 hover:opacity-80 transition-opacity">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#career" className="text-global-4 text-sm sm:text-base leading-5 hover:opacity-80 transition-opacity">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Available Section */}
          <div className="w-full lg:w-auto lg:mt-[14px]">
            <h3 className="text-global-4 text-lg font-extrabold leading-[22px] mb-4 sm:mb-6">
              Available
            </h3>
            <a 
              href="#download" 
              className="text-global-4 text-sm sm:text-base leading-5 bg-[linear-gradient(54deg,#e9866e_0%,#959189_50%,#4a9ca5_100%)] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Download App
            </a>
          </div>

          {/* Get In Touch Section */}
          <div className="w-full lg:w-[20%] space-y-6 sm:space-y-8">
            <div className="space-y-6 sm:space-y-[30px]">
              <h3 className="text-global-4 text-lg font-extrabold leading-[22px]">
                Get In Touch
              </h3>
              
              {/* Location */}
              <div className="flex items-center gap-3">
                <img 
                  src="/images/img_location_pin_svgrepo_com.svg" 
                  alt="Location" 
                  className="w-5 h-5"
                />
                <span className="text-global-4 text-sm sm:text-base leading-5">
                  Indore, India
                </span>
              </div>

              {/* Social Media Icons - Hidden */}
              {/* <div className="flex items-center gap-4">
                <a href="#instagram" className="hover:opacity-80 transition-opacity">
                  <img 
                    src="/images/img_instagram.svg" 
                    alt="Instagram" 
                    className="w-6 h-6"
                  />
                </a>
                <a href="#whatsapp" className="hover:opacity-80 transition-opacity">
                  <img 
                    src="/images/img_wa.svg" 
                    alt="WhatsApp" 
                    className="w-6 h-6"
                  />
                </a>
                <a href="#linkedin" className="hover:opacity-80 transition-opacity">
                  <img 
                    src="/images/img_linkedin.svg" 
                    alt="LinkedIn" 
                    className="w-6 h-6"
                  />
                </a>
                <a href="#twitter" className="hover:opacity-80 transition-opacity">
                  <img 
                    src="/images/img_twiter.svg" 
                    alt="Twitter" 
                    className="w-6 h-6"
                  />
                </a>
              </div> */}
            </div>

            {/* Additional Icon */}
            <div className="flex justify-end">
              <img 
                src="/images/img_group_6.png" 
                alt="Group" 
                className="w-[44px] h-[44px]"
              />
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[2px] w-full bg-footer-1 rounded-[1px] mt-6 sm:mt-[34px] mb-3 sm:mb-[14px]"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-global-4 text-xs sm:text-sm leading-tight sm:leading-[19px] font-['Satoshi']">
            © 2025 Familyfirst. All rights reserved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link 
              href="/privacy-policy" 
              className="text-global-4 text-sm sm:text-base leading-tight sm:leading-[22px] font-['Satoshi'] hover:opacity-80 transition-opacity"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;