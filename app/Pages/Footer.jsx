// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto bg-black text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center space-x-4">
            <span className="text-gray-400"></span>
            <div>
              <p className="text-gray-400">Contact nums</p>
              <p>+91 0000000000</p>
            </div>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <div className="flex items-center space-x-4">
            <span className="text-gray-400"></span>
            <div>
              <p className="text-gray-400">Gmail</p>
              <p>demo@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <img src="path_to_your_logo.png" alt="Company Logo" className="h-12 mb-2" />
          <p className="pt-4 text-gray-400">We work throughout the world</p>
        </div>
        <div className="mb-4 md:mb-0">
          <div className="flex items-center space-x-4">
            <span className="text-gray-400"></span>
            <div>
              <p className="text-gray-400">Address</p>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400"></span>
            <div>
              <p className="text-gray-400">Leave a request</p>
              <p>Leave a request</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
