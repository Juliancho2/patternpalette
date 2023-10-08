'use client';
import { PatternContext } from '@/context/patternsContext';
import useClickOutside from '@/hooks/useClickOutside';
import React, { useState, useContext, useEffect } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';

const InputColorBg = () => {
  const context = useContext(PatternContext);
  const [color, setColor] = useState('#F8FAFF');
  const { refElement } = useClickOutside({
    onOutsideClick () {
      context?.closePickers('bg');
    }
  });

  useEffect(() => {
    context?.handlePropertyColor(color);
  }, [color]);

  return (
    <div >
      <label className="text-slate-400 font-normal text-sm">Background</label>
      <div className='flex flex-col rounded-full relative'>
        <div onClick={() => context?.handlePickerBg()} style={{ background: `${context?.bgBody.backgroundColor}` }} className='h-8 w-8 rounded-full border border-gray-200 shadow-sm cursor-pointer'>

        </div>
        <div ref={refElement} className='absolute top-8 z-10'>
          {
            context?.pickerBg && <HexAlphaColorPicker color={color} onChange={setColor} />
          }
        </div>
      </div>
    </div>
  );
};

export default InputColorBg;
