import React, { useCallback, useState } from 'react';
import * as S from './Card.styled';
import { CardProps } from './Card.type';
import CheckBox from 'components/CheckBox/CheckBox';
import { moreHorizontal } from 'assets/icons';
import { fileDownloadHandler } from 'utils/fileDownloadHandler';
import { useCheckItem } from 'hook';

const Card = ({
  checkItems,
  item,
  modalOpenHandler,
  changeItemHandler,
  checkItemHandler,
  deleteItem,
  cardPopupItem,
  cardPopupState,
  popUpHandler,
}: CardProps) => {
  const id = item.id;
  const checked = useCheckItem({ checkItems, id });
  const [isMenu, setIsMenu] = useState(false);

  const cardClickHandler = useCallback(() => {
    if (!isMenu) {
      modalOpenHandler();
      changeItemHandler(id);
    }
  }, [isMenu, changeItemHandler, modalOpenHandler, id]);

  const menuTrueHandler = useCallback(() => {
    setIsMenu(true);
  }, []);
  const menuFalseHandler = useCallback(() => {
    setIsMenu(false);
  }, []);

  return (
    <S.Wrapper onClick={cardClickHandler}>
      <S.Inner>
        <S.CardBox>
          <S.CardImage src={item.imageUrl} alt={item.imageUrl} />
          <S.SelectedImage>
            <CheckBox
              id={item.id}
              checked={checked}
              menuTrueHandler={menuTrueHandler}
              menuFalseHandler={menuFalseHandler}
              checkItemHandler={checkItemHandler}
            />

            <S.MenuIcon
              onMouseEnter={menuTrueHandler}
              onMouseLeave={menuFalseHandler}
              src={moreHorizontal}
              alt="moreHorizontal"
              onClick={() => popUpHandler(item.id)}
            />
          </S.SelectedImage>
        </S.CardBox>
      </S.Inner>
      {cardPopupItem === item.id && cardPopupState && (
        <S.CardPopup onMouseEnter={menuTrueHandler} onMouseLeave={menuFalseHandler} id="popUp">
          <S.Menu onClick={() => fileDownloadHandler(item.imageUrl, item.id)}>다운로드</S.Menu>
          <S.Menu onClick={() => deleteItem(item.id)}> 삭제</S.Menu>
        </S.CardPopup>
      )}
    </S.Wrapper>
  );
};

export default Card;
