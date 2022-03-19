import React from 'react';
import * as S from './Card.styled';
import { CardProps } from './Card.type';

const Card = ({ item, modalOpenHandler, changeItemHandler }: CardProps) => {
  const cardClickHandler = () => {
    modalOpenHandler();
    changeItemHandler(item.id);
  };

  return (
    <S.Wrapper onClick={cardClickHandler}>
      <S.Inner>
        <S.CardBox>
          <S.CardImage src={item.imageUrl} alt={item.imageUrl} />
          <S.SelectedImage />
        </S.CardBox>
      </S.Inner>
    </S.Wrapper>
  );
};

export default Card;
