import React, { useEffect, useState, useCallback } from 'react';
import { ItemsType } from 'components/Gallery/Gallery.type';
import { getData } from 'service/Api';
const useItems = () => {
  const [items, setItems] = useState<ItemsType>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getItem = useCallback(() => {
    getData().then(res => {
      const data =
        res &&
        res.renderings.map((item: { _id: string }, idx: number) => {
          const card = { id: idx + 1, imageUrl: item._id };
          return card;
        });
      data && setItems(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getItem();
  }, [getItem]);
  return { items: items, isLoading: isLoading, setItems: setItems };
};

export default useItems;
