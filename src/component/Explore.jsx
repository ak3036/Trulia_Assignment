import React, { useRef } from 'react';
import { data } from '../utils/mockData';

const TruliaCards = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 1200; // scroll distance
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='max-w-7xl mx-auto px-4 mt-24'>
      <h1 className='text-4xl font-bold text-center mb-4 text-[#3B4144]'>
        Explore homes on Trulia
      </h1>
      <p className='text-center mb-24 text-gray-600 max-w-3xl mx-auto'>
        Take a deep dive and browse homes for sale, original neighborhood
        photos, resident reviews, and local insights to find what is right for
        you.
      </p>

      <div className='relative'>
        {/* Left scroll button */}
        <button
          onClick={() => scroll('left')}
          className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors'
        >
          <svg
            className='w-6 h-6 text-gray-600'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path d='M15 18l-6-6 6-6' />
          </svg>
        </button>

        {/* Right scroll button */}
        <button
          onClick={() => scroll('right')}
          className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors'
        >
          <svg
            className='w-6 h-6 text-gray-600'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path d='M9 18l6-6-6-6' />
          </svg>
        </button>

        <div
          ref={scrollContainerRef}
          className='overflow-x-auto scrollbar-hide'
        >
          <div className='flex gap-6 pb-4'>
            {data.map((location, index) => {
              if (index % 5 === 0) {
                // Render a large card for every 5th card
                return (
                  <div
                    key={index}
                    className='flex-none w-[300px] h-[350px] relative rounded-lg overflow-hidden shadow-lg'
                  >
                    <div className='relative h-full group'>
                      <img
                        src={location.img}
                        alt={location.city}
                        className='w-full h-full object-cover'
                      />
                      <div className='absolute inset-0 bg-black bg-opacity-20' />
                      <div className='absolute bottom-0 left-0 right-0 p-4'>
                        <h3 className='text-white text-2xl font-semibold mb-4'>
                          {location.city}
                        </h3>
                        <button className='bg-white text-gray-800 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors'>
                          View Homes
                          <svg
                            className='w-4 h-4'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                          >
                            <path d='M9 18l6-6-6-6' />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              } else if ((index - 1) % 5 < 4) {
                // Render smaller cards in a 2x2 grid
                const groupStartIndex = Math.floor(index / 5) * 5 + 1; // Get the start index of the group
                const isGroupStart = index === groupStartIndex;

                if (isGroupStart) {
                  return (
                    <div
                      key={index}
                      className='grid grid-cols-2 gap-4 w-[350px] h-[350px] flex-none'
                    >
                      {data
                        .slice(groupStartIndex, groupStartIndex + 4)
                        .map((smallLocation, smallIndex) => (
                          <div
                            key={smallIndex}
                            className='relative rounded-lg overflow-hidden shadow-lg'
                          >
                            <div className='relative h-[160px] group'>
                              <img
                                src={smallLocation.img}
                                alt={smallLocation.city}
                                className='w-full h-full object-cover'
                              />
                              <div className='absolute inset-0 bg-black bg-opacity-20' />
                              <div className='absolute bottom-0 left-0 right-0 p-2'>
                                <h3 className='text-white text-sm font-semibold'>
                                  {smallLocation.city}
                                </h3>
                                <button className='bg-white text-gray-800 px-2 py-1 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors'>
                                  View Homes
                                  <svg
                                    className='w-2 h-2'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                  >
                                    <path d='M9 18l6-6-6-6' />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  );
                }
                return null;
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruliaCards;
