import React, { useState, useEffect, useRef } from 'react';

const useScrollButton = () => {
  const scrollRef = useRef(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      handleButtonShow();
      window.addEventListener('resize', handleButtonShow);
      scrollRef.current.addEventListener('scroll', handleButtonShow);
  
      return () => {
        window.removeEventListener('resize', handleButtonShow);
      }
    }
  }, [])

  const handleButtonShow = () => {
    const { clientWidth } = scrollRef.current;
    const { scrollWidth } = scrollRef.current;
    const { scrollLeft } = scrollRef.current;

    const splitContainer = scrollWidth - clientWidth > 0;
    const splitPixcel = scrollWidth - clientWidth;

    if (!splitContainer) {
      setShowPrevButton(false);
      setShowNextButton(false);
      return;
    }
    if (scrollLeft > 0) {
      setShowPrevButton(true);
    } else {
      setShowPrevButton(false);
    }
    if (scrollLeft < splitPixcel - 5) {
      setShowNextButton(true);
    } else {
      setShowNextButton(false);
    }
  };

  const clickPrevButton = (move: number) => {
    scrollRef.current.scrollLeft -= move;
  };

  const clickNextButton = (move: number) => {
    scrollRef.current.scrollLeft += move;
  };

  return [scrollRef, showPrevButton, showNextButton, clickPrevButton, clickNextButton] as const;
}

export default useScrollButton;