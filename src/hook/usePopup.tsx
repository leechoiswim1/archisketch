import React, { useState, useCallback } from 'react';

const usePopup = () => {
  const [cardPopupItem, setCardPopupItem] = useState(0);
  const [cardPopupState, setCardPopupState] = useState(false);
  const popUpHandler = useCallback(
    (id: number) => {
      setCardPopupItem(id);
      setCardPopupState(!cardPopupState);
    },
    [cardPopupItem],
  );

  return {
    cardPopupItem: cardPopupItem,
    cardPopupState: cardPopupState,
    popUpHandler: popUpHandler,
  };
};

export default usePopup;
