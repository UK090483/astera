import React, { useRef } from "react";

const isTest = process.env.NODE_ENV === "test";

type useAccordionProps = {
  initOpen?: boolean;
};

const useAccordion = (props?: useAccordionProps) => {
  const ref = useRef<HTMLUListElement>(
    //@ts-ignore
    isTest ? { getBoundingClientRect: () => ({ height: 200 }) } : null
  );
  const [open, setOpen] = React.useState(!!props?.initOpen);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (open && ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      return setHeight(height);
    }
    return setHeight(0);
  }, [open]);

  return {
    isOpen: open,
    close: () => setOpen(false),
    open: () => setOpen(true),
    toggle: () => setOpen((i) => !i),
    maxHeight: height,
    ref,
  };
};

export default useAccordion;

export {};
