import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="flex justify-center p-4">
      <div className="max-w-xs bg-transparent border border-gray-300 rounded-xl shadow-md backdrop-blur-lg dark:border-gray-600">
        <img className="rounded-t-xl w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-4">
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">{description}</p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
          >
            Read more
            <svg className="w-3.5 h-3.5 ml-2" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
