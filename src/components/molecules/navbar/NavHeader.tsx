import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import coffee from '@/assets/img/coffee.svg';
import twitter from '@/assets/img/x.svg';

const NavHeader = () => {
  return (
    <nav className='flex items-center gap-2'>

          <li className='list-none w-12'>
            <Link href={'https://twitter.com/julianchoms'} target='_blank' className='flex items-center justify-center gap-1 border border-gray-600 bg-[#E6E8E9] text-xs py-1 px-2 rounded-md text-slate-300  hover:scale-105 transition-all duration-150'>
              <Image alt='' width={17} height={17} src={twitter}></Image>
            </Link>
          </li>
          <li className='list-none w-12'>
            <Link href={'https://www.buymeacoffee.com/juliancho'} target='_blank' className='flex items-center justify-center gap-1 border border-gray-600 bg-[#E6E8E9] text-xs py-1 px-2 rounded-md text-slate-300  hover:scale-105 transition-all duration-150'>
              <Image alt='' width={17} height={17} src={coffee}></Image>
            </Link>
          </li>
        </nav>
  );
};

export default NavHeader;
