type useLoadMoreProps<T = {}> = {
  setItems: React.Dispatch<React.SetStateAction<T[]>>;
  contentType?: string;
  orderKey: string;
  orderDir?: string;
  last?: string;
  items: T[];
};

function useLoadMore<T>(props: useLoadMoreProps<T>) {
  const { setItems, contentType, orderKey, items } = props;
  const lastItem = items[items.length - 1];

  //@ts-ignore
  const last = lastItem[orderKey] || null;

  const loadMore = () => {
    if (!contentType || !last) return;
    fetch(
      `/api/list?contentType=${contentType}&orderKey=${orderKey}&last=${last}`
    )
      .then((res) => res.json())
      .then((i) => {
        if (i.items) {
          setItems((old) => [...old, ...i.items]);
        }
      });
  };

  return { loadMore };
}

export default useLoadMore;
