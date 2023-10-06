'use client';
import React, { useContext, useEffect } from 'react';
import eye from '@/assets/img/eye.svg';
import Image from 'next/image';
import { Pattern } from '@/interface/pattern';
import { PatternContext } from '@/context/patternsContext';
import useLocalStorage from '@/hooks/useLocalStorage';

type Props = {
  pattern: Pattern
}
const Card = ({ pattern }: Props) => {
  const context = useContext(PatternContext);
  const { addLocalStorage } = useLocalStorage();

  const handleView = () => {
    context?.handleBgBody(pattern);
  };

  useEffect(() => {
    context?.handleFavoriteItems();
  }, []);

  return (
    <div className="card border border-slate-400  bg-gray-100 shadow-sm max-h-[200px]"><figure onClick={() => addLocalStorage(pattern)} style={pattern} className='bg-example-size h-32 relative  '>
      <div className=' border border-slate-500 p-2 bg-slate-600 h-8 w-8 flex justify-center items-center rounded-full absolute right-4 top-5 hover:opacity-90 hover:border-gray-300 transition-all duration-300 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className={`w-4 h-4 ${pattern.favorite && 'fill-red-600'}`}><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
      </div>
    </figure>

      <div className="card-actions justify-between p-4 ">
        <p className='text-gray-400 text-sm'>{pattern.name}</p>
        <button onClick={() => handleView()} data-tip="view" className=" tooltip shadow-sm border h-8 w-8 rounded-full p-1 bg-gray-300 hover:opacity-50 transition-all duration-300 cursor-pointer">
          <Image src={eye} alt='eye' />
        </button>

      </div>
    </div>
  );
};

export default Card;
