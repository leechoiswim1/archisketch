import React, { ReactElement, useCallback } from 'react';
import * as S from './Gallery.styled';
import { GalleryInfo, Card } from 'components';
import { GelleryProps } from './Gallery.type';
import { useAddCheckItem, usePopup } from 'hook';
import fileDownloadHandler from 'utils/fileDownloadHandler';
import { CardImage } from 'components/Card/Card.type';
const Gallery = ({
  items,
  setItems,
  modalOpenHandler,
  changeItemHandler,
  deleteItem,
}: GelleryProps): ReactElement => {
  const { checkItems, checkItemHandler, checkAllItemsHandler } = useAddCheckItem();
  const { cardPopupItem, cardPopupState, popUpHandler } = usePopup();

  const deleteAllItems = useCallback(() => {
    const result = items.filter(item => !checkItems.includes(item.id));
    setItems(result);
  }, [checkItems]);

  const ItemCard = React.memo(({ item }: { item: CardImage }) => (
    <S.CardInner>
      <Card
        item={item}
        popUpHandler={popUpHandler}
        checked={checkItems.includes(item.id)}
        changeItemHandler={changeItemHandler}
        modalOpenHandler={modalOpenHandler}
        checkItemHandler={checkItemHandler}
      />
      {cardPopupItem === item.id && cardPopupState && (
        <S.PopupWrapper>
          <S.PopupOverlay onClick={() => popUpHandler(0)} />
          <S.CardPopup id="popUp">
            <S.Menu onClick={() => fileDownloadHandler(item.imageUrl, item.id)}>다운로드</S.Menu>
            <S.Menu onClick={() => deleteItem(item.id)}> 삭제</S.Menu>
          </S.CardPopup>
        </S.PopupWrapper>
      )}
    </S.CardInner>
  ));
  return (
    <S.Wrapper>
      <GalleryInfo
        items={items}
        checkItems={checkItems}
        checkAllItemsHandler={checkAllItemsHandler}
        deleteAllItems={deleteAllItems}
      />
      <S.CardWrapper>
        {items &&
          items.map(item => {
            return <ItemCard item={item} key={`item${item.id}`} />;
          })}
      </S.CardWrapper>
    </S.Wrapper>
  );
};

export default Gallery;
