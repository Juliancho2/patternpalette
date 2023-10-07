import React from 'react';
import Logo from '@/assets/img/logoP.svg';
import Image from 'next/image';

const Footer = () => {
  return (
        <footer className='bg-gray-100 '>
            <div className='footer flex  p-4 mx-auto text-neutral-content max-w-6xl'>
                <aside className="items-center flex  w-full ">
                    <Image className='mx-auto' width={30} height={30} alt="logo" src={Logo}/>
                    <p className='text-gray-400 text-start w-full text-xs'>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav className="w-full ">
                    <p className='text-gray-400 w-full  text-end text-xs'>Made by @julianchoms</p>
                </nav>
            </div >
        </footer>
  );
};

export default Footer;
