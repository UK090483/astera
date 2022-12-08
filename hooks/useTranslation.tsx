import { useRouter } from "next/router";

type useTranslationProps = {
  [k: string]: {
    default: string;
    en?: string;
  };
};

type Result<T> = {
  [Key in keyof T]: string;
};

const useTranslation = <
  T extends Record<string, { default: string; en?: string }>
>(
  obj: T
): Result<T> => {
  const { locale } = useRouter();

  return (Object.keys(obj) as Array<keyof T>).reduce((result, key) => {
    if (locale === "en") {
      result[key] = obj[key].en || obj[key].default;
      return result;
    }
    result[key] = obj[key].default;
    return result;
  }, {} as Result<T>);
};

export default useTranslation;
