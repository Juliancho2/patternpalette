import React from 'react';

type Props = {
    form: any
    onKeyUp: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    styles?: string
    type?: string
    placeHolder: string
    name: string
    label?: string
}

const AreaFormFeedback = ({ form, onChange, onKeyUp, styles, type = 'text', placeHolder, name, label }: Props) => {
  return (
        <>
            <label htmlFor="message"></label>
            <textarea value={form.message} onKeyUp={onKeyUp} onChange={onChange} className="outline-none resize-none bg-transparent border-b text-gray-600 border-indigo-200 focus:border-[#610061] transition-all duration-300 w-full  py-2" required={true} name="message" id="" placeholder="Message"></textarea>
        </>
  );
};

export default AreaFormFeedback;
