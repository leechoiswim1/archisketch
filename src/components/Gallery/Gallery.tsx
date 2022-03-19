import React, { ReactElement } from 'react';
import * as S from './Gallery.styled';
import { GalleryInfo, Card } from 'components';
import { GelleryProps } from './Gallery.type';
const Gallery = ({ items, modalOpenHandler, changeItemHandler }: GelleryProps): ReactElement => {
  return (
    <S.Wrapper>
      <GalleryInfo />
      <S.CardWrapper>
        {items &&
          items.map(item => {
            return (
              <Card
                key={`item${item.id}`}
                item={item}
                changeItemHandler={changeItemHandler}
                modalOpenHandler={modalOpenHandler}
              />
            );
          })}
      </S.CardWrapper>
    </S.Wrapper>
  );
};

export default Gallery;
