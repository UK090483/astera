import Link from "@components/Link";
import Marque from "@components/Marque";
import * as React from "react";
import { useScrolling, useWindowScroll } from "react-use";
import { heroResult } from "../hero.query";

interface INewsMarqueProps {
  // news?: { _id: string; title?: string | undefined }[];
  news?: heroResult["news"];
}

const NewsMarque: React.FunctionComponent<INewsMarqueProps> = ({ news }) => {
  const { y } = useWindowScroll();
  const ref = React.useRef<HTMLDivElement>(null);
  const [pos, setPos] = React.useState<null | number>(null);
  const percent = pos ? y / pos : 0;

  React.useEffect(() => {
    const top = ref.current?.getBoundingClientRect().top;
    if (top) {
      setPos(top);
    }
  }, []);

  if (!news) return null;
  return (
    <div className="flex overflow-hidden -translate-y-0.5">
      <div className="garamondFont text-5xl hidden  md:flex justify-center items-center px-4 text-white bg-secondary-dark">
        News
      </div>
      <div>
        <div ref={ref} className="overflow-hidden">
          <div
            style={{
              transform: `translateX(${percent * -15}%)`,
              borderBottomWidth: 1,
            }}
            className=" border-b-secondary-dark"
          >
            <div className="flex w-fit text-2xl font-light ">
              {news
                .filter((i) => !!i.title)
                .map((item) => (
                  <Link
                    internal={item.slug}
                    className="text-secondary-dark whitespace-nowrap uppercase tracking-wider "
                    key={item._id}
                  >
                    {item.title}
                    <span className="px-3">{"|"}</span>
                  </Link>
                ))}
            </div>
          </div>
          <div
            style={{
              transform: `translateX(${-20 + percent * 15}%)`,
              borderBottomWidth: 1,
            }}
            className=" border-b-secondary-dark text-2xl font-light"
          >
            {news
              .filter((i) => !!i.title)
              .map((item) => (
                <Link
                  internal={item.slug}
                  className="text-secondary-dark inline uppercase  shrink-0 tracking-wider "
                  key={item._id}
                >
                  {item.title}
                  <span className="px-3">{"|"}</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMarque;
