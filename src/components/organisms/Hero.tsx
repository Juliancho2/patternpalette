import React from 'react';
import github from '@/assets/img/github.svg';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='min-h-[50vh] w-full flex items-center justify-center relative'>

      <div className='w-full max-w-6xl mx-auto text-center '>
        <small className='text-base'>CSS patterns backgrounds</small>
        <h1 className='text-5xl pb-4 text-center font-semibold text-[#011440] '>Pattern Palette</h1>

        <p className='text-lg my-2 text-gray-400'>A collection of background patterns to take your web design to the next level.</p>
        <Link href={'https://github.com/Juliancho2/patternpallete'} target='_blank'>
          <button className="btn  text-white shadow-sm bg-[#F43F5E] hover:bg-gray-400  mt-5 ">
            <Image src={github} alt='github' /> Star On Github
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
