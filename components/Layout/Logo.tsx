/* eslint-disable @next/next/no-img-element */

import React from "react";

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`w-40  md:w-48  py-8 h-full fill-current ${className}`}
      viewBox="0 0 366 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.549 43.191C13.491 50.41 13.491 52.49 23.158 52.49V55.06H0.0310059V52.49C7.49601 52.49 8.59601 51.022 12.635 41.845L30.621 0H32.335L50.321 41.845C54.36 51.022 55.828 52.49 62.313 52.49V55.06H34.903V52.49C43.714 52.49 44.57 50.41 41.512 43.191L39.063 37.562H18.998L16.549 43.191ZM29.031 14.316L20.956 33.036H37.106L29.031 14.316Z" />
      <path d="M92.174 57.141C85.811 57.141 80.673 54.083 78.468 52.615C77.734 53.471 76.512 55.061 76.144 57.141H73.942V36.094H76.391C77.369 46.496 83.976 52.368 93.153 52.368C98.414 52.368 102.574 49.432 102.574 44.171C102.574 39.888 99.15 36.584 92.541 33.279L84.222 28.996C78.347 25.938 74.186 20.921 74.186 14.068C74.185 6.363 80.548 0.122 89.482 0.122C94.499 0.122 98.413 1.956 100.983 3.792C101.717 3.058 102.573 1.956 102.941 0H105.265V20.679H102.819C102.085 13.336 98.78 4.649 89.971 4.649C85.198 4.649 81.16 7.219 81.16 11.746C81.16 16.029 84.343 18.353 91.805 22.269L100.004 26.552C106.979 30.1 109.669 35.607 109.669 40.378C109.669 50.411 101.716 57.142 92.173 57.142L92.174 57.141Z" />
      <path d="M135.98 6.85099C124.725 6.85099 123.745 8.93099 122.276 14.682L121.664 17.131H119.218L120.074 2.08099H174.523L175.381 17.131H172.932L172.32 14.682C170.852 8.93099 169.874 6.85099 158.616 6.85099H151.641V38.297C151.641 50.535 153.234 52.615 161.43 52.615V55.061H133.164V52.615C141.363 52.615 142.953 50.535 142.953 38.297V6.85099H135.978H135.98Z" />
      <path d="M228.245 42.703L228.855 40.254H231.304L230.324 55.06H184.562V52.614C192.761 52.614 194.229 50.534 194.229 38.296V18.72C194.229 6.485 192.761 4.526 184.562 4.526V2.08H227.387L228.367 16.762H225.797L225.185 14.316C223.839 8.687 222.249 6.485 211.113 6.485H202.916V24.715H203.65C215.885 24.715 216.866 23.247 216.866 15.05H219.312V38.909H216.866C216.866 30.834 215.886 29.244 203.65 29.244H202.916V36.341C202.916 48.576 204.384 50.535 212.583 50.535H214.051C225.184 50.535 226.774 48.455 228.245 42.704V42.703Z" />
      <path d="M282.624 41.235C287.516 46.986 293.145 51.756 299.02 52.614V55.06H283.358L266.716 32.301H263.289V38.296C263.289 50.534 264.76 52.614 272.956 52.614V55.06H244.937V52.614C253.134 52.614 254.602 50.534 254.602 38.296V18.72C254.602 6.485 253.134 4.526 244.937 4.526V2.08H270.264C282.868 2.08 289.843 8.565 289.843 17.252C289.843 24.715 284.214 30.834 275.037 32.058L282.624 41.235ZM270.264 6.484H263.289V27.776H270.264C277.117 27.776 280.297 23.003 280.297 17.253C280.297 11.38 277.117 6.486 270.264 6.486V6.484Z" />
      <path d="M319.897 43.191C316.839 50.41 316.839 52.49 326.504 52.49V55.06H303.379V52.49C310.842 52.49 311.944 51.022 315.98 41.845L333.969 0H335.681L353.667 41.845C357.706 51.022 359.174 52.49 365.659 52.49V55.06H338.252V52.49C347.061 52.49 347.917 50.41 344.859 43.191L342.413 37.562H322.344L319.898 43.191H319.897ZM332.379 14.316L324.302 33.036H340.454L332.379 14.316Z" />
      <path d="M104.692 75.03H107.65V100.452H123.319V103.01H104.691V75.03H104.692Z" />
      <path d="M156.007 100.452V103.01H136.219V75.03H155.408V77.588H139.178V87.541H153.65V90.058H139.178V100.452H156.008H156.007Z" />
      <path d="M190.648 89.019H193.487V99.694C190.848 102.052 187.092 103.25 183.215 103.25C174.701 103.25 168.465 97.214 168.465 89.02C168.465 80.826 174.701 74.79 183.254 74.79C187.493 74.79 191.168 76.151 193.648 78.829L191.809 80.707C189.451 78.388 186.651 77.429 183.373 77.429C176.459 77.429 171.381 82.346 171.381 89.021C171.381 95.657 176.459 100.615 183.334 100.615C186.012 100.615 188.49 100.015 190.648 98.454V89.021V89.019Z" />
      <path d="M227.369 95.535H211.78L208.422 103.01H205.344L218.136 75.03H221.055L233.847 103.01H230.728L227.37 95.535H227.369ZM226.291 93.138L219.575 78.108L212.859 93.138H226.292H226.291Z" />
      <path d="M246.46 75.03H249.418V100.452H265.087V103.01H246.459V75.03H246.46Z" />
      <path d="M62.297 87.587H0V90.084H62.297V87.587Z" />
      <path d="M365.696 87.587H303.399V90.084H365.696V87.587Z" />
    </svg>
  );
};

export default Logo;
