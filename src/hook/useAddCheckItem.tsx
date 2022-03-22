import React, { useState } from 'react';

const useAddCheckItem = () => {
  const [checkItems, setCheckItems] = useState<number[]>([]);

  const checkItemHandler = (item: number) => {
    checkItems.includes(item)
      ? setCheckItems([...checkItems.filter(checkItem => checkItem !== item)])
      : setCheckItems([...checkItems, item]);
  };
  return { checkItems: checkItems, checkItemHandler: checkItemHandler };
};

export default useAddCheckItem;
