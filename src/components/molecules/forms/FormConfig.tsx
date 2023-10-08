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
          </div>
        </div>

      </div>

    </>
  );
};

export default SideBar;
