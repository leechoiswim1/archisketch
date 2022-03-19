import React, { ReactElement } from 'react';
import * as S from './Gallery.styled';
import { GalleryInfo, Card } from 'components';
import { GelleryProps } from './Gallery.type';
const Gallery = ({ items }: GelleryProps): ReactElement => {
  return (
    <S.Wrapper>
      <GalleryInfo />
      <S.CardWrapper>
        {items &&
          items.map(item => {
            return <Card key={item._id} item={item} />;
          })}
      </S.CardWrapper>
    </S.Wrapper>
  );
};

export default Gallery;
