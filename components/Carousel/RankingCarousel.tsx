import clsx from "clsx";
import { ListingItem } from "PageBuilder/Components/Listing/listing.query";
import RichText from "PageBuilder/RichText/frontend/RichText";
import { span } from "PageBuilder/__test__/richtextTestPrepare";

import * as React from "react";
import { useIsomorphicLayoutEffect } from "react-use";

interface ICarouselProps {
  rankingItems?: ListingItem[];
}

function RankingCarousel(props: ICarouselProps) {
  const { rankingItems } = props;
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);

  const handleItemSize = React.useCallback((size) => {
    console.log(size);
  }, []);

  if (!rankingItems || rankingItems?.length < 1) return null;

  return (
    <div className="relative ">
      <div className="w-full flex flex-col px-sides pb-12 max-h-[800px] md:max-h-[500px] overflow-hidden  ">
        <div
          style={{
            transform: `translateY(${
              -160 * (activeItemIndex === 0 ? -1 : activeItemIndex - 1)
            }px)`,
          }}
          className="transition-transform duration-700"
        >
          {rankingItems.map((i, index) => {
            const dotActive = activeItemIndex === index;

            return (
              <RankingItem
                key={i.key}
                content={i.content}
                active={dotActive}
                handleItemSize={handleItemSize}
              >
                <Dot
                  isLast={index === rankingItems.length - 1}
                  active={dotActive}
                  isFirst={index === 0}
                  onClick={() => setActiveItemIndex(index)}
                  text={i.title}
                />
              </RankingItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RankingCarousel;

const RankingItem: React.FC<{
  active: boolean;
  content: any;
  handleItemSize: (size: number) => void;
}> = ({ active, content, children, handleItemSize }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [maxHeight, setMaxHeight] = React.useState(0);

  useIsomorphicLayoutEffect(() => {
    if (!active) {
      setMaxHeight(0);
      return;
    }
    if (!ref?.current) return;
    const height = ref.current.clientHeight;
    setMaxHeight(height);
    handleItemSize(height);
  }, [active, handleItemSize, ref.current]);

  return (
    <div
      className={clsx("flex justify-center items-center flex-col md:flex-row ")}
    >
      {children}

      <div className="h-fit md:h-0 w-full">
        <div
          style={{ maxHeight }}
          className={clsx(
            " transition-all max-h-0 overflow-hidden duration-700  md:-translate-y-1/2",
            {
              "opacity-0": !active,
              " opacity-100": active,
            }
          )}
        >
          <div ref={ref} className={clsx("p-8 bg-primary typo-bright")}>
            <RichText content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Dot: React.FC<{
  active: boolean;
  onClick: () => void;
  isLast: boolean;
  isFirst: boolean;
  text?: string;
}> = ({ active, onClick, isLast, text, isFirst }) => {
  return (
    <div
      className={clsx(
        "flex justify-center items-start flex-shrink-0  w-[200px] relative ",
        { "opacity-100 ": active, "opacity-40": !active }
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
            className={clsx(
              `w-24 h-24 mx-0.5 flex leading-7 flex-col items-center text-4xl justify-center bg-primary rounded-full  transition-colors text-white`
            )}
          >
            {text && (
              <>
                <span className=" mb-0.5">{text?.slice(0, 2)}</span>
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

      {!isFirst && (
        <div
          style={{ borderWidth: 1, height: "50%" }}
          className={clsx("-z-10 absolute  top-0 left-1/2 border-primary")}
        ></div>
      )}

      {!isLast && (
        <div
          style={{ borderWidth: 1, height: "50%" }}
          className={clsx("-z-10 absolute  top-1/2 left-1/2 border-primary")}
        ></div>
      )}
    </div>
  );
};
