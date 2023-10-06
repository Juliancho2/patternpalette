import { useState, useCallback } from 'react';

function useCopyToClipboard () {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback((text: string) => {
    const copyText = document.createElement('textarea');
    copyText.value = text;
    document.body.appendChild(copyText);
    copyText.select();
    document.execCommand('copy');
    document.body.removeChild(copyText);
    setIsCopied(true);
  }, []);

  const resetCopyStatus = useCallback(() => {
    setIsCopied(false);
  }, []);

  return { isCopied, copyToClipboard, resetCopyStatus };
}

export default useCopyToClipboard;
