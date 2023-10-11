'use client';
import { PatternContext } from '@/context/patternsContext';
import { useContext } from 'react';

const PatternBody = () => {
  const context = useContext(PatternContext);
  const bg = {
    backgroundImage: context?.bgBody.background,
    backgroundSize: context?.bgBody.backgroundSize,
    backgroundPosition: context?.bgBody.backgroundPosition || '',
    backgroundColor: context?.bgBody.backgroundColor || 'none',
    opacity: context?.bgBody.opacity
  };

  return (
    <div
      id='bg-body'
      style={bg}
      className={'h-full w-full'}
    >
    </div>
  );
};

export default PatternBody;
