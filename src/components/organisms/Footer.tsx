import React from 'react';
import LogoMain from '../atomic/logo/LogoMain';

const Footer = () => {
  return (
        <footer className='bg-gray-100 relative'>
            <div className='footer flex  p-4 mx-auto text-neutral-content max-w-6xl'>
                <aside className="items-center flex  w-full ">
                    <LogoMain width={30} height={30}/>
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
