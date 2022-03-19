import React, { useEffect, useState } from 'react';
import { ItemsType } from 'components/Gallery/Gallery.type';
import { getData } from 'service/Api';
const useItems = () => {
  const [items, setItems] = useState<ItemsType>([]);

  useEffect(() => {
    getData().then(res => {
      const data = res.renderings.map((item: { _id: string }, idx: number) => {
        const card = { id: idx + 1, imageUrl: item._id };
        return card;
      });
      setItems(data);
    });
  }, []);
  return items;
};

export default useItems;
