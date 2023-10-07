'use client';
import React, { useRef, useState } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  message: ''
};

const FormFeedback = () => {
  const [messageError, setMessageError] = useState('');
  const [messageSuccessfully, setMessageSuccessfully] = useState('');
  const [visibleError, setVisibleError] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(true);
  const [form, setForm] = useState(INITIAL_STATE);
  const formRef = useRef();

  const validationForm = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, email, message } = form;

    let error = '';
    let isActive = true;

    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      if (e.target.name === 'name') {
        const regExp = /^[a-zA-Z]+$/;
        if (!regExp.test(name) || name.length < 1) {
          error = 'Name is incorrect';
          isActive = false;
        }
      } else if (e.target.name === 'email') {
        const regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!regExp.test(email) || email.length < 1) {
          error = 'Email is incorrect';
          isActive = false;
        }
      } else if (e.target.name === 'message') {
        if (message.length > 50) {
          error = 'Characters out of bounds';
          isActive = false;
        }
      }
    }

    setMessageError(error);
    setVisibleError(!!error);
    setIsActiveButton(isActive);
  };

  function sendDataForm (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsActiveButton(false);
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
        <form onSubmit={(e) => sendDataForm(e)} className="w-full  mx-auto flex relative rounded-md">

          <div className="  px-6 py-4 w-full min-h-[300px] mx-auto space-y-4  z-20">
            <div className='w-full'>
              <label htmlFor="name"></label>
              <input value={form.name} onKeyUp={(e) => validationForm(e)} onChange={(e) => handleChange(e)} className="outline-none bg-transparent border-b border-indigo-200 border-t-indigo-500 duration-300 focus:border-b-[#610061] transition-all w-full  text-gray-600 py-2" required={true} type="text" placeholder="Name" name="name" />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input value={form.email} onKeyUp={(e) => validationForm(e)} onChange={(e) => handleChange(e)} className="outline-none bg-transparent text-gray-600 border-b border-indigo-200 focus:border-[#610061] transition-all duration-300  w-full py-2" required={true} type="email" placeholder="Email" name="email" />
            </div><div><label htmlFor="message"></label>
              <textarea value={form.message} onKeyUp={(e) => validationForm(e)} onChange={(e) => handleChange(e)} className="outline-none resize-none bg-transparent border-b text-gray-600 border-indigo-200 focus:border-[#610061] transition-all duration-300 w-full  py-2" required={true} name="message" id="" placeholder="Message"></textarea></div>
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
