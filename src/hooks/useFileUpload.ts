import { useRef } from 'react';

export const useFileUpload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openFileInput = () => {
    fileInputRef.current?.click();
  };

  return { fileInputRef, openFileInput };
};
