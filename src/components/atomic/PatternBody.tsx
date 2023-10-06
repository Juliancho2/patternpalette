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
      style={bg}
      className={' w-full h-full absolute top-0'}
    >
    </div>
  );
};

export default PatternBody;
