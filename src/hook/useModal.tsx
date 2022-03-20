import React, { useState, useCallback } from 'react';

const useModal = () => {
  const [modalState, setModalState] = useState(false);

  const modalOpenHandler = useCallback(() => {
    setModalState(true);
  }, []);

  const modalCloseHandler = useCallback(() => {
    setModalState(false);
  }, []);
  return { modalState: modalState, modalOpenHandler: modalOpenHandler, modalCloseHandler };
};

export default useModal;
