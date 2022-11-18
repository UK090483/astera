import * as React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useCarouselProps } from "./useCarousel";
import "swiper/css";

interface ICarouselProps extends Omit<useCarouselProps, "items"> {
  children: React.ReactElement[];
}

function Carousel(props: ICarouselProps) {
  const { children } = props;

  return (
    <Swiper
      spaceBetween={50}
      slidesPerGroup={1}
      breakpoints={{ 500: { slidesPerView: 3.5 }, 10: { slidesPerView: 1.5 } }}
      loop={true}
      loopFillGroupWithBlank={true}
      centeredSlides={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {React.Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
