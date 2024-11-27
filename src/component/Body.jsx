import React, { useState, useEffect, useCallback } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { X } from 'lucide-react';
import { MdLocationOn } from 'react-icons/md';
import { FaCar } from 'react-icons/fa';

const RealEstateSearch = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedButton, setSelectedButton] = useState('Buy'); // Default selected button is "Buy"
  const [searchResults, setSearchResults] = useState([]); // Results to display
  const [loading, setLoading] = useState(false); // Loading state for debouncing

  // Dummy data for search suggestions
  const dummyData = [
    'New York',
    'San Francisco',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Seattle',
    'Denver',
  ];

  const handleCancel = () => {
    setSearchText('');
    setIsDialogOpen(false);
    setSearchResults([]);
  };

  const handleClearText = (e) => {
    e.stopPropagation();
    setSearchText('');
    setSearchResults([]);
  };

  const handleClickOutside = (e) => {
    if (e.target.closest('#searchBox')) return;
    setIsDialogOpen(false);
  };

  // Debouncing logic
  useEffect(() => {
    if (searchText) {
      setLoading(true);
      const timer = setTimeout(() => {
        const filteredResults = dummyData.filter((item) =>
          item.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchResults(filteredResults);
        setLoading(false);
      }, 500); // Debounce delay: 500ms

      return () => clearTimeout(timer); // Cleanup previous timer
    } else {
      setSearchResults([]);
    }
  }, [searchText]);

  useEffect(() => {
    if (isDialogOpen) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isDialogOpen]);

  return (
    <div className='size-[11/12]'>
      <div className='relative'>
        <div className='px-4'>
          <img
            src={require('../Assets/background (1).png')}
            alt='background-image'
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
          <h2 className='text-5xl font-bold mb-6'>
            Discover a place <br /> you'll love to live
          </h2>
          <div className='flex justify-center items-center space-x-4 mb-6'>
            {/* Buy Button */}
            <button
              className={`py-2 px-6 rounded-md font-bold ${
                selectedButton === 'Buy'
                  ? 'bg-white text-[#007882]'
                  : 'bg-transparent border border-white text-white hover:bg-white hover:text-[#007882]'
              }`}
              onClick={() => setSelectedButton('Buy')}
            >
              Buy
            </button>
            {/* Rent Button */}
            <button
              className={`py-2 px-6 rounded-md font-bold ${
                selectedButton === 'Rent'
                  ? 'bg-white text-[#007882]'
                  : 'bg-transparent border border-white text-white hover:bg-white hover:text-[#007882]'
              }`}
              onClick={() => setSelectedButton('Rent')}
            >
              Rent
            </button>
            {/* Sold Button */}
            <button
              className={`py-2 px-6 rounded-md font-bold ${
                selectedButton === 'Sold'
                  ? 'bg-white text-[#007882]'
                  : 'bg-transparent border border-white text-white hover:bg-white hover:text-[#007882]'
              }`}
              onClick={() => setSelectedButton('Sold')}
            >
              Sold
            </button>
          </div>
          <div className='relative w-[600px] mx-auto' id='searchBox'>
            <input
              type='text'
              value={searchText}
              placeholder='Search for City, Neighborhood, Zip, County'
              className='w-[600px] px-8 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007882] text-lg text-black'
              onClick={() => setIsDialogOpen(true)}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {isDialogOpen ? (
              <button
                className='absolute top-1/2 right-4 transform -translate-y-1/2 text-[#007882] font-semibold'
                onClick={handleCancel}
              >
                Cancel
              </button>
            ) : (
              <button className='bg-red-600 hover:bg-red-900 text-white font-bold py-3 px-4 rounded absolute top-1/2 right-0 transform -translate-y-1/2 text-lg'>
                <IoIosSearch className='text-white size-10' />
              </button>
            )}
            {searchText && (
              <button
                className='absolute top-1/2 right-16 transform -translate-y-1/2 text-gray-500 hover:text-black'
                onClick={handleClearText}
              >
                <X size={20} />
              </button>
            )}

            {isDialogOpen && (
              <div className='absolute top-full mt-2 bg-white shadow-md rounded-md w-full p-4 z-50'>
                <div className='space-y-4'>
                  <div className='flex items-center text-teal-600 space-x-2 cursor-pointer'>
                    <MdLocationOn size={20} />
                    <span className='font-medium'>Current Location</span>
                  </div>
                  <div className='flex items-center text-teal-600 space-x-2 cursor-pointer'>
                    <FaCar size={20} />
                    <span className='font-medium'>Search by commute time</span>
                  </div>
                </div>
                {/* Display Search Results */}
                <div className='mt-4'>
                  {loading ? (
                    <p className='text-gray-500'>Loading...</p>
                  ) : searchResults.length > 0 ? (
                    searchResults.map((result, index) => (
                      <div
                        key={index}
                        className='p-2 hover:bg-gray-100 cursor-pointer rounded-md text-black'
                      >
                        {result}
                      </div>
                    ))
                  ) : (
                    searchText && (
                      <p className='text-gray-500'>No results found.</p>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateSearch;
