import React from 'react';
import github from '@/assets/img/github.svg';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='min-h-[40vh] w-full flex items-center justify-center relative'>

      <div className='w-full max-w-6xl mx-auto text-center '>
        <h1 className='text-5xl p-4 text-center font-bold from-teal-500 via-teal-500 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>Pattern Pallete</h1>
        <p className='text-lg my-2 text-gray-400'>Take your web design to the next level</p>
        <Link href={'https://github.com/Juliancho2/patternpallete'} target='_blank'>
          <button className="btn btn-outline  btn-success text-white  mt-5 shadow-sm ">
            <Image src={github} alt='github' /> Star On Github
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
