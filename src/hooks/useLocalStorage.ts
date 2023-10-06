import { PatternContext } from '@/context/patternsContext';
import { Pattern } from '@/interface/pattern';
import { useContext } from 'react';

const useLocalStorage = () => {
  const context = useContext(PatternContext);

  const addLocalStorage = (pattern:Pattern) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const itemsStorage = window.localStorage.getItem('pallet');

      if (itemsStorage) {
        const findItem = JSON.parse(itemsStorage).find((item: Pattern) => (item.name === pattern.name));

        if (findItem) {
          const patterFilter = JSON.parse(itemsStorage).filter((item: Pattern) => (item.name !== findItem.name));
          window.localStorage.setItem('pallet', JSON.stringify(patterFilter));
        } else {
          const newPattern = JSON.parse(itemsStorage).concat(pattern);
          window.localStorage.setItem('pallet', JSON.stringify(newPattern));
        }
      } else {
        window.localStorage.setItem('pallet', JSON.stringify([pattern]));
      }
    }
    context?.handleFavoriteItems();
  };

  return { addLocalStorage };
};

export default useLocalStorage;
