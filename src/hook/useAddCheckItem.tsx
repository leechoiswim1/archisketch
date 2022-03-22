import React, { useState } from 'react';

const useAddCheckItem = () => {
  const [checkItems, setCheckItems] = useState<number[]>([]);

  const checkItemHandler = (item: number) => {
    setCheckItems([...checkItems, item]);
  };
  return { checkItems: checkItems, checkItemHandler: checkItemHandler };
};

export default useAddCheckItem;
