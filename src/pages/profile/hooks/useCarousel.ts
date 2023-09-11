import { useRef, useEffect } from 'react';

export const useCarousel = (
  selectedTabIndex: number,
  setSelectedTabIndex: (index: number) => void,
  totalIndex: number
): [React.RefObject<HTMLDivElement>] => {
  const MIN_DISTANCE = 50;
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.scrollLeft = carousel.clientWidth * selectedTabIndex;

    let startX = 0;
    let distanceX = 0;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (event instanceof TouchEvent) {
        startX = event.touches[0].pageX;
      } else {
        startX = event.pageX;
      }
      carousel.addEventListener('mousemove', handlePointerMove);
      carousel.addEventListener('touchmove', handlePointerMove);
    };

    const handlePointerMove = (event: PointerEvent | TouchEvent) => {
      if (event instanceof TouchEvent) {
        distanceX = event.touches[0].pageX - startX;
      } else {
        distanceX = event.pageX - startX;
      }
      if (Math.abs(distanceX) < MIN_DISTANCE) {
        carousel.scrollLeft =
          carousel.clientWidth * selectedTabIndex - distanceX;
      }
    };

    const handlePointerUp = () => {
      if (
        distanceX > 0 &&
        Math.abs(distanceX) > MIN_DISTANCE &&
        selectedTabIndex > 0
      ) {
        setSelectedTabIndex(selectedTabIndex - 1);
      } else if (
        distanceX < 0 &&
        Math.abs(distanceX) > MIN_DISTANCE &&
        selectedTabIndex < totalIndex
      ) {
        setSelectedTabIndex(selectedTabIndex + 1);
      }
      carousel.style.marginLeft = `0px`;
      carousel.removeEventListener('mousemove', handlePointerMove);
      carousel.removeEventListener('touchmove', handlePointerMove);
    };

    const handlePointerCancel = () => {
      carousel.scrollLeft = carousel.clientWidth * selectedTabIndex;
      carousel.removeEventListener('mousemove', handlePointerMove);
      carousel.removeEventListener('touchmove', handlePointerMove);
    };

    const handlePointerLeave = () => {
      carousel.scrollLeft = carousel.clientWidth * selectedTabIndex;
      carousel.removeEventListener('mousemove', handlePointerMove);
      carousel.removeEventListener('touchmove', handlePointerMove);
    };

    carousel.addEventListener('mousedown', handlePointerDown);
    carousel.addEventListener('mouseup', handlePointerUp);
    carousel.addEventListener('touchstart', handlePointerDown);
    carousel.addEventListener('touchend', handlePointerUp);
    carousel.addEventListener('touchcancel', handlePointerCancel);
    carousel.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      carousel.removeEventListener('mousedown', handlePointerDown);
      carousel.removeEventListener('mouseup', handlePointerUp);
      carousel.removeEventListener('touchstart', handlePointerDown);
      carousel.removeEventListener('touchend', handlePointerUp);
      carousel.removeEventListener('touchcancel', handlePointerCancel);
      carousel.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, [selectedTabIndex, setSelectedTabIndex, totalIndex]);

  return [carouselRef];
};
