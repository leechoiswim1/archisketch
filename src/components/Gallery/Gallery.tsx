import React, { ReactElement } from 'react';
import * as S from './Gallery.styled';
import { GalleryInfo, Card } from 'components';
import { GelleryProps } from './Gallery.type';
import { useAddCheckItem, usePopup } from 'hook';
const Gallery = ({
  items,
  modalOpenHandler,
  changeItemHandler,
  deleteItem,
}: GelleryProps): ReactElement => {
  const { checkItems, checkItemHandler } = useAddCheckItem();
  const { cardPopupItem, cardPopupState, popUpHandler } = usePopup();
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
                cardPopupItem={cardPopupItem}
                cardPopupState={cardPopupState}
                popUpHandler={popUpHandler}
                checked={checkItems.includes(item.id)}
                deleteItem={deleteItem}
                changeItemHandler={changeItemHandler}
                modalOpenHandler={modalOpenHandler}
                checkItemHandler={checkItemHandler}
              />
            );
          })}
      </S.CardWrapper>
      {cardPopupState && <S.PopupOverlay onClick={() => popUpHandler(0)} />}
    </S.Wrapper>
  );
};

export default Gallery;
