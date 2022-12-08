const ArrowIcon: React.FC<{ className?: string }> = (props) => {
  const { className } = props;
  return (
    <svg
      viewBox="0 0 17 12"
      xmlns="http://www.w3.org/2000/svg"
      className={" h-[1em] inline  mr-4 " + className}
    >
      <path d="M12.1713 11.8741L16.1713 6.87408L16.9209 5.93704L16.1713 5L12.1713 0L9.82869 1.87409L13.0791 5.93704L9.82869 10L12.1713 11.8741ZM1.14441e-05 7.4978L9.00001 7.4978L9.00001 4.4978L1.14441e-05 4.4978V7.4978Z" />
    </svg>
  );
};

export default ArrowIcon;
