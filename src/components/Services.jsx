import React from 'react';
import Card from './Card';
import { Settings } from 'lucide-react';
import servicebg from '../assets/bgimages/servicebg.jpg'; // Background image

// Import the images for each card
import card1 from '../assets/cards/card1.jpg';
import card2 from '../assets/cards/card2.jpg';
import card3 from '../assets/cards/card3.jpg';
import card4 from '../assets/cards/card4.jpg';
import card5 from '../assets/cards/card5.jpg';
import card6 from '../assets/cards/card6.jpg'; 

const Services = () => {
  // Card data array with image, title, and description
  const cardData = [
    { image: card1, title: "Web Development", description: "Building responsive and modern websites." },
    { image: card2, title: "Mobile Apps", description: "Creating Android and iOS apps." },
    { image: card3, title: "UI/UX Design", description: "Crafting beautiful user interfaces." },
    { image: card4, title: "SEO Optimization", description: "Improving website ranking on search engines." },
    { image: card5, title: "Digital Marketing", description: "Promoting brands through digital channels." },
    { image: card6, title: "Cloud Hosting", description: "Deploying scalable and secure applications." }
  ];

  return (
    <div id='services' className="relative flex flex-col justify-between px-4 md:px-20 py-12 overflow-hidden">
      
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${servicebg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h4 className="text-blue-300 text-sm font-medium flex items-center gap-2 mb-2 uppercase tracking-wider">
          <Settings className="w-5 h-5" />
          Services
        </h4>
        <h1 className="text-3xl md:text-4xl font-bold text-white">Our Services</h1>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {cardData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default Services;
