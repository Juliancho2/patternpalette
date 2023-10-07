import React from 'react';
import coffee from '@/assets/img/coffee.svg';
import twitter from '@/assets/img/x.svg';
import Picture from '@/components/atomic/picture/Picture';
import Anchor from '@/components/atomic/anchor/Anchor';

const NavHeader = () => {
  return (
    <nav className='flex items-center gap-2'>
      <li className='list-none w-12'>
        <Anchor href={'https://twitter.com/julianchoms'} styles='flex items-center justify-center gap-1 border border-gray-600 bg-[#E6E8E9] text-xs py-1 px-2 rounded-md text-slate-300  hover:scale-105 transition-all
            duration-150' target='_blank'>
          <Picture alt='twitter' width={17} height={17} src={twitter} />
        </Anchor>
      </li>
      <li className='list-none w-12'>
        <Anchor href={'https://twitter.com/julianchoms'} styles='flex items-center justify-center gap-1 border border-gray-600 bg-[#E6E8E9] text-xs py-1 px-2 rounded-md text-slate-300  hover:scale-105 transition-all
            duration-150' target='_blank'>
          <Picture alt='coffee' width={17} height={17} src={coffee} />
        </Anchor>
      </li>
    </nav>
  );
};

export default NavHeader;
