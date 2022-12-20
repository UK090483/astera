type useDateProps = {
  date?: string;
};

const useDate = ({ date }: useDateProps) => {
  if (!date) return "";
  const jsDate = new Date(date);
  if (jsDate.toString() === "Invalid Date") {
    console.error("Invalid Date in useDate");
    return "";
  }
  return jsDate.toLocaleDateString("de");
};

export default useDate;
