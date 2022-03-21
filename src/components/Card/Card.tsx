import React, { useEffect, useState } from 'react';
import * as S from './Card.styled';
import { CardProps } from './Card.type';
import CheckBox from 'components/CheckBox/CheckBox';
import { moreHorizontal } from 'assets/icons';
import { fileDownloadHandler } from 'utils/fileDownloadHandler';

const Card = ({
  checkItems,
  item,
  modalOpenHandler,
  changeItemHandler,
  checkItemHandler,
  deleteItem,
}: CardProps) => {
  const [isMenu, setIsMenu] = useState(false);
  const [checked, setChecked] = useState(false);
  const [cardMenu, setCardMenu] = useState(false);
  const cardClickHandler = () => {
    if (!isMenu) {
      modalOpenHandler();
      changeItemHandler(item.id);
    }
  };

  const menuTrueHandler = () => {
    setIsMenu(true);
  };
  const menuFalseHandler = () => {
    setIsMenu(false);
  };
  useEffect(() => {
    const idx = checkItems.findIndex(chekedItem => chekedItem === item.id);
    if (idx === -1) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [checkItems]);

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
            <S.MenuWrapper>
              <S.MenuIcon
                onMouseEnter={menuTrueHandler}
                onMouseLeave={menuFalseHandler}
                src={moreHorizontal}
                alt="moreHorizontal"
                onClick={() => {
                  setCardMenu(!cardMenu);
                }}
              />
              {cardMenu && (
                <S.Menus onMouseEnter={menuTrueHandler} onMouseLeave={menuFalseHandler}>
                  <S.Menu onClick={() => fileDownloadHandler(item.imageUrl, item.id)}>
                    다운로드
                  </S.Menu>
                  <S.Menu onClick={() => deleteItem(item.id)}> 삭제</S.Menu>
                </S.Menus>
              )}
            </S.MenuWrapper>
          </S.SelectedImage>
        </S.CardBox>
      </S.Inner>
    </S.Wrapper>
  );
};

export default Card;
