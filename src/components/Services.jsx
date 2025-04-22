import React from 'react';
import Card from './Card';
import { Settings } from "lucide-react"; // Changed icon import
import backgroundImage from '../assets/bgimages/bgimage.jpg' // Import the background image

const Services = () => {
  return (
    <div className="relative flex flex-col justify-between px-4 md:px-20 py-12 ">
      {/* Background image and overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-opacity-50"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Set background image here
      ></div>

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-90 bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center">
        <h4 className="text-blue-600 text-sm font-medium flex items-center gap-2 mb-2 uppercase tracking-wider">
          <Settings className="w-5 h-5" />
          Services
        </h4>
        <h1 className="text-3xl font-bold text-white">Our Services</h1>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {Array(6).fill(null).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
};

export default Services;
