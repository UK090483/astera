/* eslint-disable @next/next/no-img-element */

import Marque from "@components/Marque";
import SanityImage from "@components/SanityImage";
import clsx from "clsx";
import { usePageBuilderContext } from "PageBuilder/lib/PageBuilderContext";
import RichText from "PageBuilder/RichText/frontend/RichText";
import React from "react";
import { heroResult } from "../hero.query";

const Hero: React.FC<heroResult> = (props) => {
  const { image, content, news } = props;

  const { data } = usePageBuilderContext();

  const _image = image && image.url ? image : data?.mainImage;

  const hasContent = content && content.length > 0;

  console.log(props);

  return (
    <>
      <div
        data-testid="heroBlock"
        className={clsx(
          "flex flex-col pt-11 lg:pt-16 relative justify-center items-center h-[300px] ",
          { "h-[500px] md:h-[600px]": hasContent }
        )}
      >
        {_image && (
          <SanityImage
            priority
            fill
            className="object-cover"
            src={_image}
            quality={100}
          />
        )}
        {hasContent && (
          <div className="typo typo-bright text-white max-w-3xl px-sides  flex flex-col items-center text-center justify-center  mx-auto  absolute inset-0 mt-36">
            {content && <RichText content={content} />}
          </div>
        )}
      </div>
      <div>
        <div className="garamondFont text-white bg-secondary-dark">NEWS</div>
        <div>
          {news && (
            <>
              <Marque items={news} className="">
                {(item) => (
                  <div
                    className="text-secondary-dark inline uppercase  tracking-wider "
                    key={item._id}
                  >
                    {item.title}
                    <span className=" px-5 ">{"|"}</span>
                  </div>
                )}
              </Marque>
              <Marque items={news} reverse>
                {(item) => (
                  <div
                    className="text-secondary-dark inline uppercase tracking-wider"
                    key={item._id}
                  >
                    {item.title}
                    <span className=" px-5 ">{"|"}</span>
                  </div>
                )}
              </Marque>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
