import React from 'react';
import * as S from './Card.styled';
import { CardProps } from './Card.type';

const Card = ({ item }: CardProps) => {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.CardBox>
          <S.CardImage src={item._id} alt={item._id} />
        </S.CardBox>
      </S.Inner>
    </S.Wrapper>
  );
};

export default Card;
