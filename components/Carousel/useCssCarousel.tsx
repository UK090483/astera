import { useEffect, useState } from "react";

type useCssCarouselProps = {
  ref: React.RefObject<HTMLDivElement>;
};

const useCssCarousel = ({ ref }: useCssCarouselProps) => {
  const [showNext, setShowNext] = useState(true);
  const [showPrev, setShowPrev] = useState(false);

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
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
  };

  const next = () => {
    const ul = ref.current?.querySelector("ul");
    const lis = ref.current?.querySelectorAll("li");
    console.log(ref.current?.getBoundingClientRect().width);
    console.log(getLastAndNext(lis));
  };
  const prev = () => {};
  return { handleScroll, next, prev, showNext, showPrev };
};

export default useCssCarousel;

const getLastAndNext = (lis: NodeListOf<HTMLLIElement> | undefined) => {
  if (!lis) return null;
  let last: number | null = null;
  let next: number | null = null;
  for (let index = 0; index < lis.length; index++) {
    console.log(lis[index].getBoundingClientRect());

    const left = lis[index].getBoundingClientRect().left;
    const isNegative = left < 0;
    // if (isNegative) {
    //   last = index;
    // }
    // if (!isNegative) {
    //   next = index;
    //   break;
    // }
  }

  return [last, next];
};
