// LandingPage.jsx
import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {/* First Row */}
      <div className="flex justify-center items-center mb-8">
        {/* Services Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg mr-4 w-80">
          <h2 className="text-xl font-bold mb-4">Services</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan nisi id libero dictum, eget luctus elit fermentum.</p>
        </div>
        
        {/* About Us Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg w-80">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan nisi id libero dictum, eget luctus elit fermentum.</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex justify-center items-center">
        {/* Contact Us Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg mr-4 w-80">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan nisi id libero dictum, eget luctus elit fermentum.</p>
        </div>

        {/* Feedback Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg w-80">
          <h2 className="text-xl font-bold mb-4">Feedback</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan nisi id libero dictum, eget luctus elit fermentum.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
