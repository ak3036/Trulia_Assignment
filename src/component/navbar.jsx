import { useState, useRef } from 'react';
import HamburgerComponent from './Hamburger';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  const handleMouseEnter = (value) => {
    clearTimeout(dropdownTimeoutRef.current); // Clear any existing timeout
    setOpenDropdown(value); // Open the dropdown
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null); // Close the dropdown after a delay
    }, 200); // Delay to allow smooth mouse movement
  };

  const navItems = [
    {
      label: 'Buy',
      value: 'buy',
      dropdownItems: [
        { label: 'Homes for Sale' },
        { label: 'Open Houses' },
        { label: 'New Homes' },
        { label: 'Recently Sold' },
      ],
    },
    {
      label: 'Rent',
      value: 'rent',
      dropdownItems: [
        { label: 'All Rentals' },
        { label: 'Apartments for Rent' },
        { label: 'Houses for Rent' },
        { label: 'Post A Rental Listing' },
      ],
    },
    {
      label: 'Mortgage',
      value: 'mortgage',
      dropdownItems: [
        { label: 'Mortgage Overview' },
        { label: 'Get Pre-Qualified' },
        { label: 'Mortgage Rates' },
        { label: 'Refinance Rates' },
        { label: 'Mortgage Calculator' },
        { label: 'Affordability Calculator' },
        { label: 'Refinance Calculator' },
        { label: 'Rent vs Buy Calculator' },
      ],
    },
  ];

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md font-sans h-14'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between'>
        {/* Left Side: Logo and Main Navigation */}
        <div className='flex items-center space-x-4'>
          {/* Logo */}
          <a href='/' className='inline-flex items-center mr-6'>
            <h1 className='text-2xl font-bold text-black'>trulia</h1>
          </a>

          {/* Desktop Navigation - Main Tabs */}
          <nav className='hidden md:flex space-x-4'>
            {navItems.map((item) => (
              <div
                key={item.value}
                className='relative group'
                onMouseEnter={() => handleMouseEnter(item.value)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`
                    text-base font-medium px-3 py-2 rounded-md
                    ${'text-black bg-white hover:bg-[#007882] hover:text-white'}
                    transition duration-150 ease-in-out
                  `}
                  onClick={() => setActiveTab(item.value)}
                >
                  {item.label}
                </button>

                {openDropdown === item.value && (
                  <div className='absolute z-50 left-0 mt-2 w-60 bg-white shadow-lg rounded-md border border-gray-200 py-2'>
                    {item.dropdownItems.map((dropItem, index) => (
                      <a
                        key={index}
                        href='#'
                        className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                      >
                        {dropItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right Side: Saved Items and Sign Up */}
        <div className='hidden md:flex items-center space-x-4'>
          {/* Saved Navigation */}
          <nav className='flex space-x-4'>
            <button
              className={`
                    text-base font-medium px-3 py-2 rounded-md
                    ${'text-black bg-white hover:bg-[#007882] hover:text-white'}
                    transition duration-150 ease-in-out
                  `}
            >
              Saved Homes
            </button>
            <button
              className={`
                    text-base font-medium px-3 py-2 rounded-md
                    ${'text-black bg-white hover:bg-[#007882] hover:text-white'}
                    transition duration-150 ease-in-out
                  `}
            >
              Saved Searches
            </button>
          </nav>

          {/* Sign Up / Log In Button */}
          <a
            href='/signup'
            className='whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-base font-medium text-black bg-white hover:bg-gray-200'
          >
            Sign up or Log in
          </a>

          <HamburgerComponent />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
