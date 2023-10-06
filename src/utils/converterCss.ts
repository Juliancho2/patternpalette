import { Pattern } from '@/interface/pattern';

export function converterCss (value:Pattern) {
  const newCss = `
    background-image: ${value.background};
    background-size: ${value.backgroundSize};
    background-position: ${value.backgroundPosition || ''};
    background-color:${value.backgroundColor};
    opacity: ${value.opacity};`;

  return newCss;
}
