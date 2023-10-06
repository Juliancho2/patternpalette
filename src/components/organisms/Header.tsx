import React from 'react';
import NavHeader from '../molecules/navbar/NavHeader';
import LogoMain from '../atomic/logo/LogoMain';

const Header = () => {
  return (
    <header className='bg-[#111827] border border-gray-800 relative z-20 '>
      <div className='w-full  max-w-6xl mx-auto py-3 px-1 flex items-center justify-between'>
        <LogoMain width={30} height={30}/>
        <NavHeader/>
      </div>
    </header>
  );
};

export default Header;
