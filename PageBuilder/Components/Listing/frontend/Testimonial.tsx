import Section from "@components/Section/Section";
import { rest } from "lodash";
import Carousel from "@components/Carousel/KeenSlider";
import RichText from "PageBuilder/RichText/frontend/RichText";
import { listingQueryResult } from "../listing.query";
import clsx from "clsx";

const Testimonial: React.FC<listingQueryResult> = (props) => {
  const { backgroundColor, name, header, items } = props;

  if (!items || items.length < 1) return null;

  const isPrimary = backgroundColor === "primary";
  const isSecondary = backgroundColor === "secondary";
  const isSecMedium = backgroundColor === "secondary-medium";
  const isSecLight = backgroundColor === "secondary-light";
  const isGrey = ["dark-grey", "grey"].includes(backgroundColor || "");

  return (
    <Section id={name} width="l" noProse {...rest} bg={backgroundColor}>
      <div
        className={clsx(
          " max-w-3xl mx-auto relative pt-8 text-secondary-medium",
          {
            "bg-secondary":
              isPrimary || isSecMedium || !backgroundColor || isGrey,

            " bg-primary ": isSecondary || isSecLight,
          }
        )}
      >
        <div
          className={clsx(
            "top-0 left-12 -translate-y-9 text-9xl garamondFont w-fit h-fit absolute",
            {
              "text-primary": !backgroundColor || isGrey,
              "text-secondary-medium": isPrimary,
              "text-white": isSecondary || isSecMedium,
            }
          )}
        >
          ”
        </div>

        {header && (
          <div
            className={clsx("mt-12 mb-12 px-12 ", {
              "typo-invert": !backgroundColor || isSecMedium,
              "typo-bright": isPrimary || isSecondary || isSecLight || isGrey,
            })}
          >
            <RichText content={header} />
          </div>
        )}

        <Carousel dots={items.length > 1}>
          {items.map((item) => (
            <div
              key={item.key}
              className={clsx(" typo-spacings px-12 pb-12 typo-bright")}
            >
              <RichText content={item.content} />
            </div>
          ))}
        </Carousel>
      </div>
    </Section>
  );
};

export default Testimonial;
