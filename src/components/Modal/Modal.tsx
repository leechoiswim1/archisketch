import React from 'react';
import * as S from './Modal.styled';
import { Header } from 'components';
import { ModalProps } from './Modal.type';
import ArrowRight from 'assets/icons/arrowRight.svg';
import ArrowLeft from 'assets/icons/arrowLeft.svg';
const Modal = ({
  prevItem,
  nextItem,
  modalCloseHandler,
  selectedItem,
  selectedUrl,
  changeItemHandler,
  deleteItem,
}: ModalProps) => {
  const imageChangeHandler = (way: string) => {
    selectedItem &&
      changeItemHandler(way === 'next' ? nextItem(selectedItem) : prevItem(selectedItem));
  };

  return (
    <S.Wrapper>
      <Header
        modalCloseHandler={modalCloseHandler}
        path="modal"
        selectedItem={selectedItem}
        selectedUrl={selectedUrl}
        deleteItem={deleteItem}
      />
      <S.ModalDetail>
        <S.Button way="prev" onClick={() => imageChangeHandler('prev')}>
          <img src={ArrowLeft} alt="ArrowLeft" />
        </S.Button>
        <S.Button way="next" onClick={() => imageChangeHandler('next')}>
          <img src={ArrowRight} alt="ArrowRight" />
        </S.Button>
        <S.DetailImage src={selectedUrl} />
      </S.ModalDetail>
    </S.Wrapper>
  );
};

export default Modal;
