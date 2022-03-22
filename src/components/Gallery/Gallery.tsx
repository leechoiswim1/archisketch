import React, { ReactElement } from 'react';
import * as S from './Gallery.styled';
import { GalleryInfo, Card } from 'components';
import { GelleryProps } from './Gallery.type';
import { useAddCheckItem } from 'hook';
const Gallery = ({
  items,
  modalOpenHandler,
  changeItemHandler,
  deleteItem,
}: GelleryProps): ReactElement => {
  const { checkItems, checkItemHandler } = useAddCheckItem();
  return (
    <S.Wrapper>
      <GalleryInfo itemsLength={items.length} />
      <S.CardWrapper>
        {items &&
          items.map(item => {
            return (
              <Card
                key={`item${item.id}`}
                item={item}
                checkItems={checkItems}
                deleteItem={deleteItem}
                changeItemHandler={changeItemHandler}
                modalOpenHandler={modalOpenHandler}
                checkItemHandler={checkItemHandler}
              />
            );
          })}
      </S.CardWrapper>
    </S.Wrapper>
  );
};

export default Gallery;
