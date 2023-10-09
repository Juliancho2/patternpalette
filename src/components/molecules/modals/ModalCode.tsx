import { PatternContext } from '@/context/patternsContext';
import useClickOutside from '@/hooks/useClickOutside';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import { converterTailwind } from '@/utils/converterTailwind';
import React, { useContext } from 'react';

const ModalCode = () => {
  const context = useContext(PatternContext);
  const { isCopied, copyToClipboard, resetCopyStatus } = useCopyToClipboard();
  const { refElement } = useClickOutside({ onOutsideClick: context?.handleModalCode });

  const copyTailwind = () => {
    if (context) {
      const codeTailwind = converterTailwind(context.bgBody);
      copyToClipboard(codeTailwind);
      setTimeout(() => {
        resetCopyStatus();
      }, 800);
    }
  };

  return (
    <div className='bg-black fixed  top-0 w-full h-screen left-0 flex justify-center items-center bg-opacity-40 z-20'>
      <div ref={refElement} id='code' className='left-0 min-w-[450px] max-w-xl bottom-0 z-50 bg-[#F43F5E]  rounded-2xl'>
        <div className='px-4 text-sm flex justify-between text-white py-1'>
          <p >tailwind.config</p>
          <div className='flex gap-2 items-center'>
            <button className='flex p-1 rounded-md gap-2 flex-row-reverse hover:bg-gray-50 hover:bg-opacity-10' onClick={() => copyTailwind()}>{isCopied ? 'Copied' : 'Copy code'}
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7778 5H14.6667C15.5047 5 15.9237 5 16.1841 5.2636C16.4444 5.52721 16.4444 5.95147 16.4444 6.8V10M13.7778 5V5.8C13.7778 6.22426 13.7778 6.4364 13.6476 6.5682C13.5174 6.7 13.3079 6.7 12.8889 6.7H7.55556C7.13653 6.7 6.92702 6.7 6.79684 6.5682C6.66667 6.4364 6.66667 6.22426 6.66667 5.8V5M13.7778 5C13.7778 4.57574 13.7778 4.2636 13.6476 4.1318C13.5174 4 13.3079 4 12.8889 4H7.55556C7.13653 4 6.92702 4 6.79684 4.1318C6.66667 4.2636 6.66667 4.57574 6.66667 5M6.66667 5H5.77778C4.93973 5 4.5207 5 4.26035 5.2636C4 5.52721 4 5.95147 4 6.8V17.1959C4 18.0445 4 18.4687 4.26035 18.7323C4.5207 18.9959 4.93973 18.9959 5.77778 18.9959H9.77778M14 20H18C18.9428 20 19.4142 20 19.7071 19.7071C20 19.4142 20 18.9428 20 18V14C20 13.0572 20 12.5858 19.7071 12.2929C19.4142 12 18.9428 12 18 12H14C13.0572 12 12.5858 12 12.2929 12.2929C12 12.5858 12 13.0572 12 14V18C12 18.9428 12 19.4142 12.2929 19.7071C12.5858 20 13.0572 20 14 20Z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <svg onClick={() => context?.handleModalCode()} width={20} height={20} className='cursor-pointer' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff4242"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z" fill="#ff4242"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#ff4242"></path> </g></svg>
          </div>

        </div>
        <div className="mockup-code  px-2">
          <pre>
            <code className=' whitespace-pre-wrap'>{converterTailwind(context?.bgBody)}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ModalCode;
