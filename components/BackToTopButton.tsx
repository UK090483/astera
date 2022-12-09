import * as React from "react";
import { useScrollThreshold } from "@hooks/useScrollThreshold";
import clsx from "clsx";

export function BackToTopButton() {
  const scrolled = useScrollThreshold(400);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className={clsx(
        "fixed shadow-2xl rounded-full bottom-4 right-4 transition-transform ",
        {
          "translate-y-32": !scrolled,
          "translate-y-0": scrolled,
        }
      )}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#BF664A" />
        <path
          d="M24 36C24 36.5523 24.4477 37 25 37C25.5523 37 26 36.5523 26 36H24ZM25.7071 13.2929C25.3166 12.9024 24.6834 12.9024 24.2929 13.2929L17.9289 19.6569C17.5384 20.0474 17.5384 20.6805 17.9289 21.0711C18.3195 21.4616 18.9526 21.4616 19.3431 21.0711L25 15.4142L30.6569 21.0711C31.0474 21.4616 31.6805 21.4616 32.0711 21.0711C32.4616 20.6805 32.4616 20.0474 32.0711 19.6569L25.7071 13.2929ZM26 36V14H24V36H26Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
