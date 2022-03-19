import React from 'react';
import * as S from './Modal.styled';
import { Header } from 'components';
import { ModalProps } from './Modal.type';
const Modal = ({ modalCloseHandler, selectedItem, selectedUrl, changeItemHandler }: ModalProps) => {
  const imageChangeHandler = (way: string) => {
    selectedItem && changeItemHandler(way === 'next' ? selectedItem + 1 : selectedItem - 1);
  };

  return (
    <S.Wrapper>
      <Header modalCloseHandler={modalCloseHandler} />
      <S.ModalDetail>
        <S.Button way="prev" onClick={() => imageChangeHandler('prev')} />
        <S.Button way="next" onClick={() => imageChangeHandler('next')} />
        <S.DetailImage src={selectedUrl} />
      </S.ModalDetail>
    </S.Wrapper>
  );
};

export default Modal;
