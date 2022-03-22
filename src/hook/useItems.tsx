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
      data && setIsLoading(false);
    });
  }, []);

  const prevItem = (selectedItem: number) => {
    const currentId = items.findIndex(item => item.id === selectedItem);
    return currentId - 1 > 0 ? items[currentId - 1].id : items[items.length - 1].id;
  };

  const nextItem = (selectedItem: number) => {
    const currentId = items.findIndex(item => item.id === selectedItem);
    return currentId + 1 > items.length - 1 ? items[0].id : items[currentId + 1].id;
  };

  useEffect(() => {
    setIsLoading(true);
    getItem();
  }, [getItem]);
  return { items: items, isLoading: isLoading, setItems: setItems, prevItem, nextItem };
};

export default useItems;
