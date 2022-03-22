import React, { useState } from 'react';

const usePopup = () => {
  const [cardPopupItem, setCardPopupItem] = useState(0);
  const [cardPopupState, setCardPopupState] = useState(false);
  const popUpHandler = (id: number) => {
    setCardPopupItem(id);
    setCardPopupState(!cardPopupState);
  };

  return {
    cardPopupItem: cardPopupItem,
    cardPopupState: cardPopupState,
    popUpHandler: popUpHandler,
  };
};

export default usePopup;
