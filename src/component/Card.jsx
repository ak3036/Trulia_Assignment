import React from 'react';

const Card = ({ price, beds, baths, sqft, address, image, opening }) => {
  return (
    <div className='w-72 flex-shrink-0 p-4'>
      <div className='relative h-40 w-full bg-gray-200 rounded mb-4'>
        <img src={image} alt='' className='rounded-lg w-full h-full' />

        <div className='absolute top-2 left-2 bg-white z-10 text-black font-bold px-2 py-1 rounded'>
          {opening}
        </div>

        <div className='absolute bottom-2 left-2 bg-opacity-80 px-2 py-1 rounded'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8  text-gray-200'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
      <h3 className='text-xl font-semibold mb-2'>${price}</h3>
      <p className='text-sm text-gray-600'>
        {beds} bd | {baths} ba | {sqft} sqft
      </p>
      <p className='text-sm text-gray-500 mt-2'>{address}</p>
    </div>
  );
};

export default Card;
