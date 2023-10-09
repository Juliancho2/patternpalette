import React from 'react';

type Props={
    label:string
    value:number | undefined,
    min:number
    max:number
    handleRange:(e: React.ChangeEvent<HTMLInputElement>)=>void
}

const InputRange = ({ handleRange, label, value, min, max }:Props) => {
  return (
        <>
            <label className="block text-slate-400 text-sm font-normal mb-2">{label}</label>
            <input onChange={(e) => handleRange(e)} type="range" value={value} name='backgoundSize' min={min} max={max} className="range  range-xs " />
        </>
  );
};

export default InputRange;
