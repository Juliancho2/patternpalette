import React from 'react';
import Logo from '@/assets/img/logoP.svg';
import Image from 'next/image';

const Header = () => {
  return (
        <header className='border-b'>
            <div className='w-full max-w-6xl mx-auto py-3 px-1 '>
                <Image width={30} height={30} alt="logo" src={Logo} />
            </div>
        </header>
  );
};

export default Header;
