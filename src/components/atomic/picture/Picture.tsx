import Image from 'next/image';
import React from 'react';

type Props={
    src:string
    alt:string
    width:number
    height:number,
    styles?:string
}

const Picture = ({ src, alt, width, height, styles }:Props) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} className={styles}/>
  );
};

export default Picture;
