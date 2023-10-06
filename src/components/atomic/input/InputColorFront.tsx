'use client';
import { PatternContext } from '@/context/patternsContext';
import useClickOutside from '@/hooks/useClickOutside';
import React, { useState, useContext, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';

const InputColorFront = () => {
  const context = useContext(PatternContext);
  const [color, setColor] = useState('#262626');
  const { refElement } = useClickOutside({
    onOutsideClick () {
      context?.closePickers('front');
    }
  });

  useEffect(() => {
    context?.handlePropertyColorLine(color);
  }, [color]);

  return (
    <div >
      <label className="text-slate-400 font-medium text-sm">Front</label>
      <div className='flex flex-col relative'>
        <div onClick={() => context?.handlePickerFront()} style={{ background: `${color}` }} className='h-8 w-8 rounded-full border cursor-pointer'>

        </div>
        <div className='absolute top-8 z-10 ' ref={refElement}>
          {
            context?.pickerFront && <HexColorPicker color={color} onChange={setColor} />
          }
        </div>
      </div>
    </div>
  );
};

export default InputColorFront;
