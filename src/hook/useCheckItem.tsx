import React, { useState, useEffect } from 'react';

type checkItemProps = {
  checkItems: number[];
  id: number;
};

const useCheckItem = ({ checkItems, id }: checkItemProps) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const idx = checkItems.findIndex(chekedItem => chekedItem === id);
    if (idx === -1) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [checkItems, id]);
  return checked;
};

export default useCheckItem;
