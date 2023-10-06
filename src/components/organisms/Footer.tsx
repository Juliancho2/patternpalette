import React from 'react';
import Logo from '@/assets/img/logoP.svg';
import Image from 'next/image';

const Footer = () => {
  return (
        <footer className='bg-gray-100 '>
            <div className='footer items-center p-4 mx-auto  text-neutral-content max-w-6xl'>
                <aside className="items-center grid-flow-col">
                    <Image width={30} height={30} alt="logo" src={Logo}/>
                    <p className='text-gray-400'>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 w-full  md:place-self-center md:justify-self-end">
                    <p className='text-gray-400 w-full text-center md:text-end'>Made by @julianchoms</p>
                </nav>
            </div >
        </footer>
  );
};

export default Footer;
