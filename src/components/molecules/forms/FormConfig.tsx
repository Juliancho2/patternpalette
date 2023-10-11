'use client';
import { PatternContext } from '@/context/patternsContext';
import React, { useContext } from 'react';
import code from '@/assets/img/code.svg';
import tailwind from '@/assets/img/tailwind.svg';
import ModalCode from '../modals/ModalCode';
import InputColorBg from '@/components/atomic/input/InputColorBg';
import InputColorFront from '@/components/atomic/input/InputColorFront';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import { converterCss } from '@/utils/converterCss';
import { sizeExtractor } from '@/utils/sizeExtractor';
import InputRange from '@/components/atomic/input/InputRange';
import Picture from '@/components/atomic/picture/Picture';
import downloadPng from '@/utils/downloadPng';

const SideBar = () => {
  const context = useContext(PatternContext);
  const { copyToClipboard, resetCopyStatus, isCopied } = useCopyToClipboard();

  const copyTailwind = () => {
    context?.handleModalCode();
  };

  const copyCss = () => {
    if (context) {
      const codeCss = converterCss(context.bgBody);
      copyToClipboard(codeCss);
      setTimeout(() => {
        resetCopyStatus();
      }, 1000);
    }
  };

  const handleBgOpacity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const opa = Number(e.target.value) / 10;
    if (context) {
      context.handlePropertyOpacity(opa);
    }
  };
  const handleBgSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const opa = `${e.target.value}px ${e.target.value}px`;
    if (context) {
      context.handlePropertySize(opa);
    }
  };
  return (
    <>
      {
        context?.openModalCode && <ModalCode />
      }
      <div className="flex border border-gray-200 items-center w-full min-h-[350px] mx-auto bg-[#F8FAFF] rounded-xl  md:sticky z-10 top-16  row-full">
        <div className="py-1 px-8 w-full">
          {
            context &&
            <div >

              <div className="mb-4">
                <InputRange handleRange={(e) => handleBgSize(e)} label='Size' min={5} max={40} value={sizeExtractor(context?.bgBody.backgroundSize)} />

              </div>

              <div className="mb-4">
                <InputRange handleRange={(e) => handleBgOpacity(e)} label='Opacity' min={1} max={10} value={context.bgBody.opacity * 10} />

              </div>
              <InputColorBg />
              <InputColorFront />
            </div>
          }
          <div className='flex mt-5 justify-center gap-6'>
            <button onClick={() => copyCss()} data-tip={isCopied ? 'copied' : 'css'} className={'tooltip shadow-sm border border-gray-200 flex justify-center w-16 rounded-md p-1 bg-[#F8FAFF] hover:bg-gray-200 transition-all duration-300 cursor-pointer '}>
              <Picture src={code} alt='eye' width={20} height={20} />
            </button>
            <button onClick={() => copyTailwind()} data-tip="tailwind" className="flex items-center justify-center tooltip shadow-sm border border-gray-200 w-16 rounded-md p-1 bg-[#F8FAFF] hover:bg-gray-200 transition-all duration-300 cursor-pointer ">
              <Picture src={tailwind} alt='eye' width={20} height={20} />
            </button>
            <button onClick={() => downloadPng()} data-tip="png" className="flex items-center justify-center tooltip shadow-sm border border-gray-200 w-16 rounded-md p-1 bg-[#F8FAFF] hover:bg-gray-200 transition-all duration-300 cursor-pointer ">
              <svg width={20} height={20} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.5 6.5V6H2V6.5H2.5ZM10.5 10.5H10V11H10.5V10.5ZM12.5 10.5V11H13V10.5H12.5ZM13.5 3.5H14V3.29289L13.8536 3.14645L13.5 3.5ZM10.5 0.5L10.8536 0.146447L10.7071 0H10.5V0.5ZM6.5 6.5L6.94721 6.27639L6 6.5H6.5ZM6 10.5V11H7V10.5H6ZM8.5 10.5L8.05279 10.7236C8.15649 10.931 8.38919 11.0399 8.61488 10.9866C8.84056 10.9333 9 10.7319 9 10.5H8.5ZM9 6.5V6H8V6.5H9ZM2.5 7H3.5V6H2.5V7ZM3 11V8.5H2V11H3ZM3 8.5V6.5H2V8.5H3ZM3.5 8H2.5V9H3.5V8ZM4 7.5C4 7.77614 3.77614 8 3.5 8V9C4.32843 9 5 8.32843 5 7.5H4ZM3.5 7C3.77614 7 4 7.22386 4 7.5H5C5 6.67157 4.32843 6 3.5 6V7ZM10 6V10.5H11V6H10ZM10.5 11H12.5V10H10.5V11ZM13 10.5V8.5H12V10.5H13ZM10.5 7H13V6H10.5V7ZM2 5V1.5H1V5H2ZM13 3.5V5H14V3.5H13ZM2.5 1H10.5V0H2.5V1ZM10.1464 0.853553L13.1464 3.85355L13.8536 3.14645L10.8536 0.146447L10.1464 0.853553ZM2 1.5C2 1.22386 2.22386 1 2.5 1V0C1.67157 0 1 0.671573 1 1.5H2ZM1 12V13.5H2V12H1ZM2.5 15H12.5V14H2.5V15ZM14 13.5V12H13V13.5H14ZM12.5 15C13.3284 15 14 14.3284 14 13.5H13C13 13.7761 12.7761 14 12.5 14V15ZM1 13.5C1 14.3284 1.67157 15 2.5 15V14C2.22386 14 2 13.7761 2 13.5H1ZM6 6.5V10.5H7V6.5H6ZM6.05279 6.72361L8.05279 10.7236L8.94721 10.2764L6.94721 6.27639L6.05279 6.72361ZM8 6.5V10.5H9V6.5H8Z" fill="#000000"></path> </g></svg>
            </button>
            <button onClick={() => context?.resetBgBody()} data-tip="reset" className="
            flex items-center justify-center tooltip shadow-sm border border-gray-200 w-16 rounded-md p-1 bg-[#F8FAFF] hover:bg-gray-200 transition-all duration-300 cursor-pointer ">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.39502 12.0014C4.39544 12.4156 4.73156 12.751 5.14577 12.7506C5.55998 12.7502 5.89544 12.4141 5.89502 11.9999L4.39502 12.0014ZM6.28902 8.1116L6.91916 8.51834L6.91952 8.51777L6.28902 8.1116ZM9.33502 5.5336L9.0396 4.84424L9.03866 4.84464L9.33502 5.5336ZM13.256 5.1336L13.4085 4.39927L13.4062 4.39878L13.256 5.1336ZM16.73 7.0506L16.1901 7.57114L16.1907 7.57175L16.73 7.0506ZM17.7142 10.2078C17.8286 10.6059 18.2441 10.8358 18.6422 10.7214C19.0403 10.607 19.2703 10.1915 19.1558 9.79342L17.7142 10.2078ZM17.7091 9.81196C17.6049 10.2129 17.8455 10.6223 18.2464 10.7265C18.6473 10.8307 19.0567 10.5901 19.1609 10.1892L17.7091 9.81196ZM19.8709 7.45725C19.9751 7.05635 19.7346 6.6469 19.3337 6.54272C18.9328 6.43853 18.5233 6.67906 18.4191 7.07996L19.8709 7.45725ZM18.2353 10.7235C18.6345 10.8338 19.0476 10.5996 19.1579 10.2004C19.2683 9.80111 19.034 9.38802 18.6348 9.2777L18.2353 10.7235ZM15.9858 8.5457C15.5865 8.43537 15.1734 8.66959 15.0631 9.06884C14.9528 9.46809 15.187 9.88119 15.5863 9.99151L15.9858 8.5457ZM19.895 11.9999C19.8946 11.5856 19.5585 11.2502 19.1443 11.2506C18.7301 11.251 18.3946 11.5871 18.395 12.0014L19.895 11.9999ZM18.001 15.8896L17.3709 15.4829L17.3705 15.4834L18.001 15.8896ZM14.955 18.4676L15.2505 19.157L15.2514 19.1566L14.955 18.4676ZM11.034 18.8676L10.8815 19.6019L10.8839 19.6024L11.034 18.8676ZM7.56002 16.9506L8.09997 16.4301L8.09938 16.4295L7.56002 16.9506ZM6.57584 13.7934C6.46141 13.3953 6.04593 13.1654 5.64784 13.2798C5.24974 13.3942 5.01978 13.8097 5.13421 14.2078L6.57584 13.7934ZM6.58091 14.1892C6.6851 13.7884 6.44457 13.3789 6.04367 13.2747C5.64277 13.1705 5.23332 13.4111 5.12914 13.812L6.58091 14.1892ZM4.41914 16.544C4.31495 16.9449 4.55548 17.3543 4.95638 17.4585C5.35727 17.5627 5.76672 17.3221 5.87091 16.9212L4.41914 16.544ZM6.05478 13.2777C5.65553 13.1674 5.24244 13.4016 5.13212 13.8008C5.02179 14.2001 5.25601 14.6132 5.65526 14.7235L6.05478 13.2777ZM8.30426 15.4555C8.70351 15.5658 9.11661 15.3316 9.22693 14.9324C9.33726 14.5331 9.10304 14.12 8.70378 14.0097L8.30426 15.4555ZM5.89502 11.9999C5.89379 10.7649 6.24943 9.55591 6.91916 8.51834L5.65889 7.70487C4.83239 8.98532 4.3935 10.4773 4.39502 12.0014L5.89502 11.9999ZM6.91952 8.51777C7.57513 7.50005 8.51931 6.70094 9.63139 6.22256L9.03866 4.84464C7.65253 5.4409 6.47568 6.43693 5.65852 7.70544L6.91952 8.51777ZM9.63045 6.22297C10.7258 5.75356 11.9383 5.62986 13.1059 5.86842L13.4062 4.39878C11.9392 4.09906 10.4158 4.25448 9.0396 4.84424L9.63045 6.22297ZM13.1035 5.86793C14.2803 6.11232 15.3559 6.7059 16.1901 7.57114L17.27 6.53006C16.2264 5.44761 14.8807 4.70502 13.4085 4.39927L13.1035 5.86793ZM16.1907 7.57175C16.9065 8.31258 17.4296 9.21772 17.7142 10.2078L19.1558 9.79342C18.8035 8.5675 18.1557 7.44675 17.2694 6.52945L16.1907 7.57175ZM19.1609 10.1892L19.8709 7.45725L18.4191 7.07996L17.7091 9.81196L19.1609 10.1892ZM18.6348 9.2777L15.9858 8.5457L15.5863 9.99151L18.2353 10.7235L18.6348 9.2777ZM18.395 12.0014C18.3963 13.2363 18.0406 14.4453 17.3709 15.4829L18.6312 16.2963C19.4577 15.0159 19.8965 13.5239 19.895 11.9999L18.395 12.0014ZM17.3705 15.4834C16.7149 16.5012 15.7707 17.3003 14.6587 17.7786L15.2514 19.1566C16.6375 18.5603 17.8144 17.5643 18.6315 16.2958L17.3705 15.4834ZM14.6596 17.7782C13.5643 18.2476 12.3517 18.3713 11.1842 18.1328L10.8839 19.6024C12.3508 19.9021 13.8743 19.7467 15.2505 19.157L14.6596 17.7782ZM11.1865 18.1333C10.0098 17.8889 8.93411 17.2953 8.09997 16.4301L7.02008 17.4711C8.06363 18.5536 9.40936 19.2962 10.8815 19.6019L11.1865 18.1333ZM8.09938 16.4295C7.38355 15.6886 6.86042 14.7835 6.57584 13.7934L5.13421 14.2078C5.48658 15.4337 6.13433 16.5545 7.02067 17.4718L8.09938 16.4295ZM5.12914 13.812L4.41914 16.544L5.87091 16.9212L6.58091 14.1892L5.12914 13.812ZM5.65526 14.7235L8.30426 15.4555L8.70378 14.0097L6.05478 13.2777L5.65526 14.7235Z" fill="#000000"></path> </g></svg>

            </button>
          </div>
        </div>

      </div>

    </>
  );
};

export default SideBar;
