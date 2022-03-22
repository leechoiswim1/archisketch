import React, { ReactElement } from 'react';
import * as S from './Gallery.styled';
import { GalleryInfo, Card } from 'components';
import { GelleryProps } from './Gallery.type';
import { useAddCheckItem, usePopup } from 'hook';
import { fileDownloadHandler } from 'utils/fileDownloadHandler';
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
              <S.CardInner key={`item${item.id}`}>
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
                      <S.Menu onClick={() => fileDownloadHandler(item.imageUrl, item.id)}>
                        다운로드
                      </S.Menu>
                      <S.Menu onClick={() => deleteItem(item.id)}> 삭제</S.Menu>
                    </S.CardPopup>
                  </S.PopupWrapper>
                )}
              </S.CardInner>
            );
          })}
      </S.CardWrapper>
    </S.Wrapper>
  );
};

export default Gallery;
