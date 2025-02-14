import React, { useState } from 'react';
import BrandSvg from '../elements/svg/BrandSvg';

const Header = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState('Home');

  const handleClick = (link: React.SetStateAction<string>) => {
    setActiveLink(link); // Set the clicked link as active
  };

  return (
    // <header className="header mt-12 sm:mt-0">
    <header className="header mt-2">
      <div className="container">
        <div className="flex items-center">
          <BrandSvg className="h-8 w-8 mr-2" />
        </div>
        <nav className="nav">
          <a
            href="#"
            className={`text-sm font-regular p-2 w-[88px] h-[36px] text-center rounded-[8px] ${
              activeLink === 'Home' ? 'active bg-blue text-white' : ''
            }`}
            onClick={() => handleClick('Home')}
          >
            Home
          </a>

          <a
            href="#"
            className={`text-sm font-regular p-2 w-[88px] h-[36px] text-center rounded-[8px] ${
              activeLink === 'About' ? 'bg-blue text-white' : ''
            }`}
          >
            About
          </a>

          <a
            href="#"
            className={`text-sm font-regular p-2 w-[88px] h-[36px] text-center rounded-[8px] ${
              activeLink === 'Contact' ? 'bg-blue text-white' : ''
            }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
