import React from 'react';
import BuyHome from '../Assets/BuyAHome.png';
import Neighborhoods from '../Assets/Neighborhoods.png';
import RentAHome from '../Assets/RentAHome (1).png';

const HeroSection = () => {
  return (
    <div className='bg-white pb-10'>
      <div className='container mx-auto px-5 lg:px-20 xl:px-40'>
        <h1 className='text-4xl lg:text-5xl font-semibold text-[#3B4144] text-center mb-12'>
          See how Trulia can help
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {/* Buy a Home Section */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-20 h-20 flex items-center justify-center mb-6'>
              <img
                src={BuyHome}
                alt='Buy a home'
                className='w-full h-full object-contain'
              />
            </div>
            <h3 className='text-gray-800 font-bold text-xl mb-4'>Buy a home</h3>
            <p className='text-gray-600 leading-relaxed'>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
            <button
              className='
                text-base font-medium px-6 py-2 mt-6 rounded-md
                bg-[#007882] text-white hover:bg-white border hover:border-[#007882] hover:text-[#007882]
                transition duration-200 ease-in-out
              '
            >
              Find a home
            </button>
          </div>

          {/* Rent a Home Section */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-20 h-20 flex items-center justify-center mb-6'>
              <img
                src={RentAHome}
                alt='Rent a home'
                className='w-full h-full object-contain'
              />
            </div>
            <h3 className='text-gray-800 font-bold text-xl mb-4'>
              Rent a home
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              With 35+ filters and custom keyword search, Trulia can help you
              easily find a home or apartment for rent that you'll love.
            </p>
            <button
              className='
                text-base font-medium px-6 py-2 mt-6 rounded-md
                bg-[#007882] text-white hover:bg-white border hover:border-[#007882] hover:text-[#007882]
                transition duration-200 ease-in-out
              '
            >
              Find a rental
            </button>
          </div>

          {/* See Neighborhoods Section */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-20 h-20 flex items-center justify-center mb-6'>
              <img
                src={Neighborhoods}
                alt='See neighborhoods'
                className='w-full h-full object-contain'
              />
            </div>
            <h3 className='text-gray-800 font-bold text-xl mb-4'>
              See neighborhoods
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              With more neighborhood insights than any other real estate
              website, we've captured the color and diversity of communities.
            </p>
            <button
              className='
                text-base font-medium px-6 py-2 mt-6 rounded-md
                bg-[#007882] text-white hover:bg-white border hover:border-[#007882] hover:text-[#007882]
                transition duration-200 ease-in-out
              '
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
