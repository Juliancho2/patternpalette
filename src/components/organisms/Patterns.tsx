'use client';
import React, { useContext, useEffect, useState } from 'react';
import Card from '../molecules/card/Card';
import FormConfig from '../molecules/forms/FormConfig';
import { PatternContext } from '@/context/patternsContext';
import useFetch from '@/hooks/useFetch';
import { Pattern } from '@prisma/client';
import LoaderAccent from '../atomic/loader/LoaderAccent';

const Patterns = () => {
  const context = useContext(PatternContext);
  const url = String(process.env.NEXT_PUBLIC_API);
  const res = useFetch<Pattern[]>(url);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    res.then(res => {
      context?.handleItemsPattern(res);
      setLoading(false);
    });
  }, []);

  const handleSort = (a: any, b: any) => {
    if (a.favorite && !b.favorite) {
      return -1;
    } else if (!a.favorite && b.favorite) {
      return 1;
    }

    if (a.id < b.id) {
      return -1;
    } else if (a.id > b.id) {
      return 1;
    } else {
      return 0;
    }
  };
  return (
    <section className='pt-2 pb-24 relative px-2'>
      <div className='max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-10'>
        <div className='grid grid-cols-2 justify-center md:grid-cols-3 gap-3 col-span-2'>
          {loading && <LoaderAccent/>}
          {context?.itemsPattern && [...context.itemsPattern].slice().sort(handleSort).map(pat => <Card key={pat.name} pattern={pat} />)}

        </div>
        <div className='order-first md:order-2'>
          <FormConfig />
        </div>
      </div>

    </section>
  );
};

export default Patterns;
