import React, { useRef } from 'react';
import Card from './Card';
import { homes } from '../utils/mockData';

const Homes = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className=' p-6'>
      <h1 className='text-4xl font-bold mb-6 mt-20 text-[#3B4144] flex items-center justify-center'>
        Newly listed homes in San Francisco
      </h1>
      <div className='relative'>
        <button
          onClick={scrollLeft}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10  text-gray-800 rounded-full w-10 h-10 flex items-center justify-center'
        >
          &#8249; {/* Unicode Left Arrow */}
        </button>

        {/* Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          className='flex space-x-4 overflow-x-auto scrollbar-hidden p-4'
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE and Edge
          }}
        >
          {homes.map((home, index) => (
            <Card
              key={index}
              price={home.price}
              beds={home.beds}
              baths={home.baths}
              sqft={home.sqft}
              address={home.address}
              image={home.img}
              opening={home.opening}
            />
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className='absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black rounded-full shadow-lg w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>

        <button
          onClick={scrollLeft}
          className='absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform duration-300'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Homes;
