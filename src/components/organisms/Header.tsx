import React from 'react';
import NavHeader from '../molecules/navbar/NavHeader';
import LogoMain from '../atomic/logo/LogoMain';

const Header = () => {
  return (
    <header className=' border-b bg-[#F8FAFF] w-full z-20 fixed top-0'>
      <div className='w-full  max-w-6xl mx-auto py-3 px-4 flex items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <LogoMain width={30} height={30} />
          <p className='text-sm text-gray-400'>Pattern Pallete</p>
        </div>
        <NavHeader />
      </div>
    </header>
  );
};

export default Header;
