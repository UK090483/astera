import { useEffect, useState } from "react";

type useCssCarouselProps = {
  ref: React.RefObject<HTMLUListElement>;
};

const useCssCarousel = ({ ref }: useCssCarouselProps) => {
  const [showNext, setShowNext] = useState(true);
  const [showPrev, setShowPrev] = useState(false);

  // useEffect(() => {
  //   const wrap = ref.current;
  //   if (!wrap) return;

  //   const handleScroll = () => {};

  //   wrap.addEventListener("scroll", handleScroll);

  //   return () => {
  //     wrap.removeEventListener("scroll", handleScroll);
  //   };
  // }, [ref]);
  const handleScroll: React.UIEventHandler<HTMLUListElement> = (e) => {
    console.log(e.currentTarget.scrollLeft);
  };

  const next = () => {};
  const prev = () => {};
  return { handleScroll, next, prev, showNext, showPrev };
};

export default useCssCarousel;
