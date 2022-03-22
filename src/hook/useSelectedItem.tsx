import React, { useState, useEffect, useCallback } from 'react';
import { ItemsType } from 'components/Gallery/Gallery.type';
import { CardImage } from 'components/Card/Card.type';

const useSelectedItem = (items: ItemsType) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [selectedUrl, setSelectedUrl] = useState<string>('');

  const changeItemHandler = useCallback(
    (item: number) => {
      setSelectedItem(item);
    },
    [setSelectedItem],
  );

  useEffect(() => {
    if (selectedItem && items) {
      const idx = items.findIndex((item: CardImage) => item.id === selectedItem);
      const imageUrl = items[idx].imageUrl;
      setSelectedUrl(imageUrl);
    }
  }, [selectedItem, items]);

  return {
    selectedItem: selectedItem,
    changeItemHandler: changeItemHandler,
    selectedUrl: selectedUrl,
  };
};

export default useSelectedItem;
