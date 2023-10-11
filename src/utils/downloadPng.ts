import * as htmlToImage from 'html-to-image';

const downloadPng = async () => {
  const bgBody = document.getElementById('bg-body');
  if (bgBody) {
    htmlToImage.toPng(bgBody).then(function (dataUrl) {
      const link = document.createElement('a');
      link.download = 'pattern.png';
      link.href = dataUrl;
      link.click();
    });
  }
};
export default downloadPng;
