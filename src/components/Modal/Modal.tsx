import React from 'react';
import * as S from './Modal.styled';
import { Header } from 'components';
import { ModalProps } from './Modal.type';
const Modal = ({ modalCloseHandler, selectedItem, selectedUrl, changeItemHandler }: ModalProps) => {
  const nextImageHandler = () => {
    selectedItem && changeItemHandler(selectedItem + 1);
  };
  const prevImageHandler = () => {
    selectedItem && changeItemHandler(selectedItem - 1);
  };
  return (
    <S.Wrapper>
      <Header modalCloseHandler={modalCloseHandler} />
      <S.ModalDetail>
        <S.PrevButton onClick={prevImageHandler} />
        <S.NextButton onClick={nextImageHandler} />
        <S.DetailImage src={selectedUrl} />
      </S.ModalDetail>
    </S.Wrapper>
  );
};

export default Modal;
