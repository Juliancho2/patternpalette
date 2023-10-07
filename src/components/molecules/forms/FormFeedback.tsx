'use client';
import InputFormFeedback from '@/components/atomic/input/InputFormFeedback';
import AreaFormFeedback from '@/components/atomic/textarea/AreaFormFeedback';
import useValidateFormFeedback from '@/hooks/useValidateFormFeedback';
import React, { useRef, useState } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  message: ''
};

const FormFeedback = () => {
  const [messageSuccessfully, setMessageSuccessfully] = useState('');
  const [form, setForm] = useState(INITIAL_STATE);
  const formRef = useRef<HTMLFormElement | null>(null);
  const {
    validationForm,
    visibleError,
    isActiveButton,
    setIsActiveButton,
    setMessageError,
    setVisibleError,
    messageError
  } = useValidateFormFeedback();

  function sendDataForm (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsActiveButton(false);
    if (formRef.current) {
      fetch('https://formsubmit.co/ajax/julianmoreno242@gmail.com', {
        method: 'POST',
        body: new FormData(formRef.current)
      }).then(response => {
        response.ok
          ? response.json()
          : Promise.reject(response);
      }).then(() => {
        setMessageSuccessfully('The mail has been sent successfully');
        setTimeout(() => {
          setMessageSuccessfully('');
        }, 2000);
        setForm(INITIAL_STATE);
        setIsActiveButton(true);
      })
        .catch(() => {
          setMessageError('An error occurred while sending');
          setVisibleError(true);
          setTimeout(() => {
            setVisibleError(false);
          }, 2000);
        });
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value
    });
  };
  return (
    <>

      <div className='w-full max-w-3xl  rounded-md phone-4 mt-5 p-8 relative  mx-auto border'>
        <h2 className='text-slate-600 text-2xl font-medium text-center '>Give me feedback</h2>
        <form ref={formRef} onSubmit={(e) => sendDataForm(e)} className="w-full  mx-auto flex relative rounded-md">
          <div className="  px-6 py-4 w-full min-h-[300px] mx-auto space-y-4  z-20">
            <div className='w-full'>
              <InputFormFeedback form={form} onKeyUp={(e) => validationForm(e, form)} onChange={(e) => handleChange(e)} styles="outline-none bg-transparent border-b border-indigo-200 border-t-indigo-500 duration-300 focus:border-b-[#610061] transition-all w-full  text-gray-600 py-2" placeHolder="Name" name="name" />
            </div>
            <div>
              <InputFormFeedback form={form.email} onKeyUp={(e) => validationForm(e, form)} onChange={(e) => handleChange(e)} styles="outline-none bg-transparent text-gray-600 border-b border-indigo-200 focus:border-[#610061] transition-all duration-300  w-full py-2" type="email" placeHolder="Email" name="email" />
            </div>
            <div>
              <AreaFormFeedback form={form} onKeyUp={(e) => validationForm(e, form)} onChange={(e) => handleChange(e)} styles="outline-none resize-none bg-transparent border-b text-gray-600 border-indigo-200 focus:border-[#610061] transition-all duration-300 w-full  py-2" name="message" placeHolder="Message"/>
            </div>
            <div>
              <button type="submit" className='h-8 text-xs font-semibold btn btn-success text-slate-50 px-4 py-1 w-full' disabled={!isActiveButton}>Submit</button>
            </div>
            {visibleError && <p className='w-full bg-rose-500 text-white text-center py-1'>{messageError}</p>}
            {messageSuccessfully && <p className='w-full bg-green-500 text-white text-center py-1'>{messageSuccessfully}</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormFeedback;
