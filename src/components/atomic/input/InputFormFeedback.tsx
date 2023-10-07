import React from 'react';

type Props={
    form:any
    onKeyUp:(e: React.KeyboardEvent<HTMLInputElement>)=>void
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void
    styles?:string
    type?:string
    placeHolder:string
    name:string
    label?:string
}
const InputFormFeedback = ({ form, onChange, onKeyUp, styles, type = 'text', placeHolder, name, label }:Props) => {
  return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input value={form.name} onKeyUp={onKeyUp} onChange={onChange} className={styles} required={true} type={type}placeholder={placeHolder} name={name} />
        </div>
  );
};

export default InputFormFeedback;
