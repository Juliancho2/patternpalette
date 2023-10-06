import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/img/logoP.svg';

type Props={
    width:number,
    height:number
}

const LogoMain = ({ width, height }:Props) => {
  return (
    <>
        <Image width={width} height={height} alt="logo" src={Logo} />
    </>
  );
};

export default LogoMain;
