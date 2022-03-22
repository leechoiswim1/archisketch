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
  return { checkItems: checkItems, checkItemHandler: checkItemHandler };
};

export default useAddCheckItem;
