import React from 'react';
import { Home, ArrowRight } from "lucide-react"; // Imported ArrowRight icon
import aboutus from '../assets/aboutus.jpg'; // Updated image path

const About = () => {
  return (
    <div id='about' className='bg-gradient-to-br from-purple-50 via-white to-purple-100 flex flex-col md:flex-row items-center justify-between gap-10 py-20 px-6 md:px-20'>
      
      {/* Left - Image */}
      <div className='flex-1'>
        <img
          className='rounded-2xl w-full transform hover:scale-105 transition duration-500 ease-in-out'
          src={aboutus}
          alt="About us"
        />
      </div>

      {/* Right - Content */}
      <div className='flex-1'>
        <h4 className="text-blue-950 text-sm font-medium flex items-center gap-2 mb-2 uppercase tracking-wider">
          <Home className="w-5 h-5" />
          About Us
        </h4>
        <h1 className='text-purple-900 font-bold text-3xl mb-4'>
          About Us
        </h1>
        
        <div className='flex flex-col gap-4 justify-center'>
          <p className='text-gray-600 text-xl max-w-xl text-justify'>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>

          {/* Read More Button with Arrow */}
          <a
            href="#"
            className='inline-flex items-center gap-2 bg-purple-900 hover:bg-blue-950 transition-all duration-300 text-white rounded-md py-2 px-4 text-sm font-medium w-fit mt-2 transform hover:scale-105'
          >
            Read more
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
