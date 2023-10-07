import Link from 'next/link';
import React from 'react';

type Props={
    href:string
    target?:string
    styles?:string
    children:React.ReactNode
}

const Anchor = ({ href, target, styles, children }:Props) => {
  return (
   <Link href={href} target={target} className={styles}>{children}</Link>
  );
};

export default Anchor;
