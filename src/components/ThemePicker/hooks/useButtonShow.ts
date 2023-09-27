import { useCallback, useEffect, useRef, useState } from 'react';

const useScrollButton = () => {
  const scrollRef = useRef(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const handleButtonShow = useCallback(() => {
    const { clientWidth, scrollWidth, scrollLeft } = scrollRef.current;
    const hasHideElement = scrollWidth - clientWidth > 0;
    const splitPixel = scrollWidth - clientWidth;

    if (!hasHideElement) {
      setShowPrevButton(false);
      setShowNextButton(false);
      return;
    }
    setShowPrevButton(scrollLeft > 0);
    setShowNextButton(scrollLeft < splitPixel - 5);
  }, []);

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      handleButtonShow();
      const scrollRefInstance = scrollRef.current;
      window.addEventListener('resize', handleButtonShow);
      scrollRefInstance?.addEventListener('scroll', handleButtonShow);

      return () => {
        window.removeEventListener('resize', handleButtonShow);
        scrollRefInstance?.removeEventListener('scroll', handleButtonShow);
      };
    }
  }, [handleButtonShow]);

  return [scrollRef, showPrevButton, showNextButton] as const;
};

export default useScrollButton;
