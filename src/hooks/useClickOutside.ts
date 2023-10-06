import { useEffect, useRef } from 'react';

type Props={
  onOutsideClick?: ((value?: string | undefined) => void | undefined) | undefined;
}

const useClickOutside = ({ onOutsideClick }:Props) => {
  const refElement = useRef<HTMLDivElement | null >(null);

  useEffect(() => {
    const handleCLikOutside = (e:MouseEvent) => {
      if (refElement.current && !refElement.current.contains(e.target as Node)) {
        onOutsideClick?.();
      }
    };
    document.addEventListener('mousedown', handleCLikOutside);
    return () => {
      document.removeEventListener('mousedown', handleCLikOutside);
    };
  }, [refElement, onOutsideClick]);

  return { refElement };
};

export default useClickOutside;
