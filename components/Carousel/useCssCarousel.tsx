import { useEffect, useState } from "react";

type useCssCarouselProps = {
  ref: React.RefObject<HTMLUListElement>;
};

const useCssCarousel = ({ ref }: useCssCarouselProps) => {
  const [showNext, setShowNext] = useState(true);
  const [showPrev, setShowPrev] = useState(false);

  const handleScroll: React.UIEventHandler<HTMLUListElement> = (e) => {
    const scrollLeft = e.currentTarget.scrollLeft;

    const fullScrollWidth =
      e.currentTarget.scrollWidth -
      e.currentTarget.getBoundingClientRect().width;

    if (scrollLeft > 50) {
      setShowPrev(true);
    }
    if (scrollLeft < 50) {
      setShowPrev(false);
    }
    if (fullScrollWidth - scrollLeft > 50) {
      setShowNext(true);
    }
    if (fullScrollWidth - scrollLeft < 50) {
      setShowNext(false);
    }

    console.log({
      scrollLeft,
      fullScrollWidth,
    });
  };

  const next = () => {};
  const prev = () => {};
  return { handleScroll, next, prev, showNext, showPrev };
};

export default useCssCarousel;
