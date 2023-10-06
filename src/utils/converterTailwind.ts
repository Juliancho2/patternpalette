import { Pattern } from '@/interface/pattern';

export function converterTailwind (value:Pattern | undefined) {
  const codeTailwind = `
  backgroundImage: {
   '${value?.name}': '${value?.background}',
  },
  backgroundColor: {
    'color': '${value?.backgroundColor}',
  },
  backgroundSize: {
    'size': '${value?.backgroundSize}',
  },
  opacity: {
    '${value && (value.opacity * 100)}': '${value?.opacity}',
  },
  `;
  return codeTailwind;
}
