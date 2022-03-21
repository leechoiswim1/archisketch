import React, { useState } from 'react';

const useCheckItem = () => {
  const [checkItems, setCheckItems] = useState<number[]>([]);
  console.log(checkItems);
  const checkItemHandler = (item: number) => {
    setCheckItems([...checkItems, item]);
  };
  return { checkItems: checkItems, checkItemHandler: checkItemHandler };
};

export default useCheckItem;
