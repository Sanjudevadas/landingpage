import React from 'react';
import card1 from '../assets/cards/card1.jpg';

const Card = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="max-w-xs bg-transparent border border-gray-300 rounded-xl shadow-md backdrop-blur-lg dark:border-gray-600"> {/* Transparent and blurred background */}
        <a href="#">
          <img className="rounded-t-xl" src={card1} alt="Card" />
        </a>
        <div className="p-4">
          <a href="#">
            <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            ducimus qui blanditiis
            </h5>
          </a>
          <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
          accusamus et iusto odio dignissimos ducimus qui blanditiis
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
