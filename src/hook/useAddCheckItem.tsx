import React, { useState, useCallback } from 'react';

const useAddCheckItem = () => {
  const [checkItems, setCheckItems] = useState<number[]>([]);

  const checkItemHandler = useCallback(
    (item: number) => {
      checkItems.includes(item)
        ? setCheckItems([...checkItems.filter(checkItem => checkItem !== item)])
        : setCheckItems([...checkItems, item]);
    },
    [checkItems],
  );
  const checkAllItemsHandler = useCallback(
    (items: number[]) => {
      checkItems.length === items.length ? setCheckItems([]) : setCheckItems([...items]);
    },
    [checkItems],
  );
  return {
    checkItems: checkItems,
    checkItemHandler: checkItemHandler,
    checkAllItemsHandler: checkAllItemsHandler,
  };
};

export default useAddCheckItem;
