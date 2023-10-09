'use client';
import { Pattern, PatternContextInterface, Pickers } from '@/interface/pattern';
import React, { createContext, useState } from 'react';

const initialBgBody: Pattern = {
  name: 'pattern-1',
  background: 'radial-gradient(circle, #F8FAFF  10%, transparent 11%)',
  backgroundPosition: 'center',
  backgroundColor: '#F8FAFF',
  backgroundSize: '12px 12px',
  opacity: 1,
  favorite: false

};

export const PatternContext = createContext<PatternContextInterface | undefined>(undefined);

export const PatternProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bgBody, setBgBody] = useState(initialBgBody);
  const [itemsPattern, setItemsPattern] = useState<Pattern[] | null>(null);
  const [openModalCode, setOpenModalCode] = useState(false);
  const [pickerFront, setPickerFront] = useState(false);
  const [pickerBg, setPickerBg] = useState(false);

  const handleItemsPattern = (pattern:Pattern[]) => {
    setItemsPattern(pattern);
  };

  const resetBgBody = () => setBgBody(initialBgBody);
  const handleBgBody = (value: Pattern) => {
    setBgBody(value);
  };
  const handlePropertyOpacity = (value: number) => {
    setBgBody((prev) => ({ ...prev, opacity: Number(value) }));
  };
  const handlePropertySize = (value: string) => {
    setBgBody((prev) => ({ ...prev, backgroundSize: value }));
  };
  const handlePropertyColor = (value: string) => {
    setBgBody((prev) => ({ ...prev, backgroundColor: value }));
  };
  const handlePropertyColorLine = (value: string) => {
    const rex = /#[0-9A-Fa-f]{6}\b/gi;
    setBgBody((prev) => ({ ...prev, background: bgBody.background.replace(rex, value) }));
  };
  const handleModalCode = () => {
    setOpenModalCode(prev => !prev);
  };
  // handlers pickers
  const handlePickerFront = () => {
    setPickerFront(prev => !prev);
  };
  const handlePickerBg = () => {
    setPickerBg(prev => !prev);
  };
  const closePickers = (value:Pickers) => {
    if (value === 'bg') {
      setPickerBg(false);
    } else {
      setPickerFront(false);
    }
  };
  const handleFavoriteItems = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const localStorage = window.localStorage.getItem('pallet');
      if (localStorage) {
        const value: Pattern[] = JSON.parse(localStorage);
        const newPatterns = itemsPattern?.map(item => {
          const storageItem = value.find(storage => storage.id === item.id);
          return storageItem ? { ...item, favorite: true } : { ...item, favorite: false };
        });

        if (newPatterns) {
          setItemsPattern(newPatterns);
        };
      }
    }
  };
  return (
    <PatternContext.Provider value={{ bgBody, handleBgBody, resetBgBody, handlePropertyOpacity, handlePropertySize, handlePropertyColor, handlePropertyColorLine, itemsPattern, handleFavoriteItems, handleModalCode, openModalCode, handlePickerFront, pickerFront, handlePickerBg, pickerBg, handleItemsPattern, closePickers }}>
      {children}
    </PatternContext.Provider>
  );
};
