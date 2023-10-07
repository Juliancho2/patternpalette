import React, { useState } from 'react';

const useValidateFormFeedback = () => {
  const [messageError, setMessageError] = useState('');
  const [visibleError, setVisibleError] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(true);

  const validationForm = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>, form:any) => {
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

  return { messageError, visibleError, isActiveButton, validationForm, setIsActiveButton, setMessageError, setVisibleError };
};

export default useValidateFormFeedback;
