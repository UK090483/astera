import clsx from "clsx";
import { ListingItem } from "PageBuilder/Components/Listing/listing.query";
import RichText from "PageBuilder/RichText/frontend/RichText";
import { span } from "PageBuilder/__test__/richtextTestPrepare";

import * as React from "react";

interface ICarouselProps {
  rankingItems?: ListingItem[];
}

function RankingCarousel(props: ICarouselProps) {
  const { rankingItems } = props;

  const [activeItemIndex, setActiveItemIndex] = React.useState(0);

  if (!rankingItems) return null;

  return (
    <div className="relative">
      <div className=" z-50 min-h-[10%] w-full absolute top-0 bg-gradient-to-b from-white  pointer-events-none" />
      <div className="z-50 min-h-[30%] w-full absolute bottom-0 bg-gradient-to-b from-transparent to-white pointer-events-none" />

      <div className="w-full flex flex-col px-sides pb-12 max-h-[800px] md:max-h-[500px] overflow-hidden  ">
        <div
          style={{
            transform: `translateY(${-144 * activeItemIndex + 150}px)`,
          }}
          className="transition-transform duration-700"
        >
          {rankingItems.map((i, index) => {
            const dotActive = activeItemIndex === index;
            return (
              <div
                data-index={index}
                key={i.key}
                className={clsx(
                  "flex justify-center items-center flex-col md:flex-row "
                )}
              >
                <Dot
                  isLast={index === rankingItems.length - 1}
                  active={dotActive}
                  isFirst={index === 0}
                  onClick={() => setActiveItemIndex(index)}
                  text={i.title}
                />

                <div className="h-fit md:h-0">
                  <div
                    className={clsx(
                      " transition-all max-h-0 overflow-hidden duration-700  md:-translate-y-1/2",
                      {
                        "opacity-0": !dotActive,
                        "max-h-[400px] opacity-100": dotActive,
                      }
                    )}
                  >
                    <div className={clsx("p-8 bg-primary typo-bright")}>
                      <RichText content={i.content} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RankingCarousel;

const Dot: React.FC<{
  active: boolean;
  onClick: () => void;
  isLast: boolean;
  isFirst: boolean;
  text?: string;
}> = ({ children, active, onClick, isLast, text }) => {
  const preparedText = text?.slice(0, 2);

  return (
    <div
      className={clsx(
        "flex justify-center items-center flex-shrink-0  w-[200px] relative"
      )}
    >
      <div
        className={clsx("bg-primary rounded-full transition-all p-4", {
          "bg-opacity-10 ": active,
          "bg-opacity-0": !active,
        })}
      >
        <div
          className={clsx("bg-primary rounded-full p-4 transition-all", {
            "bg-opacity-25": active,
            "bg-opacity-0": !active,
          })}
        >
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClick();
            }}
            className={`w-24 h-24 mx-0.5 flex leading-7 flex-col items-center text-4xl justify-center bg-primary rounded-full  transition-colors text-white`}
          >
            {text && (
              <>
                <span className="">{text?.slice(0, 2)}</span>
                <span>{text?.slice(2, 4)}</span>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        style={{ borderWidth: 1 }}
        className={clsx(
          "-z-10 absolute w-1/2 top-1/2 right-0  opacity-0  border-primary",
          { "md:opacity-100": active }
        )}
      ></div>

      {!isLast && (
        <div
          style={{ borderWidth: 1, height: "100%" }}
          className={clsx("-z-10 absolute  top-1/2 left-1/2 border-primary")}
        ></div>
      )}
    </div>
  );
};
