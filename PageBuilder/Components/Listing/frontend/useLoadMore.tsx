import { useRouter } from "next/router";
import { useState } from "react";

type useLoadMoreProps<T = {}> = {
  setItems: React.Dispatch<React.SetStateAction<T[]>>;
  contentType?: string;
  orderKey: string;
  orderDir?: string;
  last?: string;
  items?: T[];
};

function useLoadMore<T>(props: useLoadMoreProps<T>) {
  const { setItems, contentType, orderKey, items = [] } = props;
  const { locale } = useRouter();
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  if (!items) return { loadMore: () => {}, loading: false, hasMore: false };
  const lastItem = items[items.length - 1];

  //@ts-ignore
  const last = lastItem ? lastItem[orderKey] || null : null;

  const loadMore = () => {
    if (!contentType || !last) return;
    setLoading(true);
    fetch(
      `/api/list?contentType=${contentType}&orderKey=${orderKey}&last=${last}&locale=${locale}`
    )
      .then((res) => res.json())
      .then((i) => {
        if (i.items) {
          setLoading(false);
          if (i.items.length === 0) {
            setHasMore(false);
          }
          setItems((old) => [...old, ...i.items]);
        }
      });
  };

  return { loadMore, loading, hasMore };
}

export default useLoadMore;
