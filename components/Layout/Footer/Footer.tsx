import React from "react";
import Section from "@components/Section/Section";

import { usePageBuilderContext } from "PageBuilder/lib/PageBuilderContext";
import Logo from "../Logo";
import {
  HeaderNavigation,
  NavigationItemBase,
} from "PageBuilder/Navigation/Frontend/Navigation";

const Footer: React.FC = () => {
  const year = React.useMemo(() => new Date().getFullYear(), []);

  const { data } = usePageBuilderContext();

  return (
    <footer
      data-testid="footer"
      className="  bg-secondary-dark relative  typo-invert overflow-hidden"
    >
      <div className=" relative  ">
        <BigA />
        <Section as="div" width="l" topSpace="m">
          <div className=" flex flex-wrap ">
            <div className="w-full whitespace-pre-wrap mb-8">
              <p className="text-primary font-bold text-xl">KONTAKT</p>

              <ContactItem
                link={data?.footer?.addressLink}
                text={data?.footer?.address}
              >
                <svg
                  width="16"
                  height="19"
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" fill-white opacity-50 "
                >
                  <path d="M7.88 0C3.535 0 0 3.535 0 7.88C0 10.419 1.318 12.549 3.103 14.154C4.933 15.799 7.88 18.625 7.88 18.625C7.88 18.625 10.645 16.006 12.641 14.166C14.411 12.534 15.76 10.426 15.76 7.88C15.759 3.535 12.225 0 7.88 0ZM7.901 10.348C6.541 10.348 5.439 9.246 5.439 7.886C5.439 6.526 6.541 5.424 7.901 5.424C9.261 5.424 10.363 6.526 10.363 7.886C10.363 9.246 9.261 10.348 7.901 10.348Z" />
                </svg>
              </ContactItem>
              <ContactItem
                link={"tel:" + data?.footer?.phoneNumber}
                text={data?.footer?.phoneNumber}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" fill-white opacity-50 "
                >
                  <path d="M4.691 14.4142C9.842 19.4792 15.138 19.9303 16.89 18.1793L18.838 16.2313C19.197 15.8723 19.197 15.2913 18.838 14.9323L16.241 12.3352L15.916 12.0103L15.919 12.0173C15.558 11.6562 14.973 11.6562 14.612 12.0173L14.617 12.0103L14.292 12.3352L12.993 13.6342C12.275 14.3523 11.114 14.3523 10.396 13.6342L7.933 11.1712L7.935 11.1733L5.472 8.71025C4.754 7.99225 4.754 6.83125 5.472 6.11325L6.771 4.81425L7.096 4.48925L7.089 4.49425C7.45 4.13325 7.45 3.54825 7.089 3.18725L7.096 3.19025L6.771 2.86525L4.174 0.26925C3.815 -0.08975 3.234 -0.08975 2.875 0.26925L0.927997 2.21725C-0.823003 3.96825 -0.372003 9.26425 4.693 14.4163" />
                </svg>
              </ContactItem>

              <ContactItem
                link={`mailto:${data?.footer?.emailAddress}`}
                text={data?.footer?.emailAddress}
              >
                <svg
                  width="22"
                  height="17"
                  viewBox="0 0 22 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" fill-white opacity-50 "
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.84126e-06 1.88693V0.890631H0.996842C0.99913 0.890623 1.00142 0.890623 1.00371 0.890631H20.9615H21.9615V1.70808C21.9889 1.8414 21.9888 1.97898 21.9615 2.11185V15.6337V16.6337H20.9615H1.00001H5.84126e-06V15.6337V1.89379C-1.96542e-06 1.89151 -1.96604e-06 1.88922 5.84126e-06 1.88693ZM2.00001 4.16425V14.6337H19.9615V4.20232L11.6766 11.7975L11.0008 12.4171L10.3251 11.7975L2.00001 4.16425ZM18.4327 2.89063H3.57033L11.0009 9.70374L18.4327 2.89063Z"
                  />
                </svg>
              </ContactItem>
            </div>
          </div>

          <div className=" flex justify-center items-center ">
            <Logo className=" fill-primary max-w-[150px] mt-10 mb-6" />
          </div>
        </Section>
      </div>
      <div className="bg-secondary-extraDark">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between container max-w-6xl mx-auto px-sides  py-2">
          {data?.menu.mainNav && (
            <HeaderNavigation
              NavigationItemBase={(props) => (
                <NavigationItemBase
                  {...props}
                  className="text-sm text-white opacity-25"
                />
              )}
              className="flex"
              //@ts-ignore
              items={data?.menu.footerNav}
            />
          )}
          <p className=" text-sm text-white opacity-40 py-2 ">
            © All Rights Reserved © {year} ASTERA Legal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const ContactItem: React.FC<{ link?: string; text?: string }> = (props) => {
  return (
    <>
      <a
        href={`${props.link}`}
        className="grid grid-cols-[40px_1fr] mb-8 hover:underline  decoration-white underline-offset-4"
        target="_blank"
        rel="noreferrer"
      >
        <div className="h-6 flex justify-start items-center ">
          {props.children}
        </div>

        <p className="text-base ">{props.text}</p>
      </a>
    </>
  );
};

const BigA = () => (
  <div className="absolute  right-0 top-1/2 -translate-y-1/2  pointer-events-none ">
    <svg
      width="185"
      height="382"
      viewBox="0 0 185 382"
      className="ml-auto fill-white opacity-[0.15]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M86.37 226.292L183.636 0C81.559 3.927 0 87.874 0 190.913C0 227.249 10.146 261.215 27.751 290.138C57.498 287.142 65.531 273.643 86.369 226.292H86.37Z" />

      <path d="M184.407 200.298H124.99L110.127 234.464C91.564 278.281 91.564 290.909 150.244 290.909V306.511H38.955C72.601 350.727 125.058 379.849 184.407 381.895V200.298Z" />
      <path d="M184.407 62.635L136.878 172.823H184.407V62.635Z" />
    </svg>
  </div>
);
