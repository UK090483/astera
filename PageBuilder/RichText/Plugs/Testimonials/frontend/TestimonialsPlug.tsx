import * as React from "react";
import { PortableTextComponent } from "@portabletext/react";
import { testimonialsPlugResult } from "../testimonials.query";
import Carousel from "@components/Carousel/CarouselCss";
interface ITestimonialsPlugProps {}

const TestimonialsPlug: PortableTextComponent<testimonialsPlugResult> = (
  props
) => {
  const { value } = props;

  return (
    <Carousel>
      {value.items?.map((i) => (
        <div key={i._id}>bla</div>
      ))}
    </Carousel>
  );
};

export default TestimonialsPlug;
