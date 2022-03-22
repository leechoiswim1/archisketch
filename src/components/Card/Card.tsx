import React, { useCallback, useState } from 'react';
import * as S from './Card.styled';
import { CardProps } from './Card.type';
import CheckBox from 'components/CheckBox/CheckBox';
import { moreHorizontal } from 'assets/icons';

const Card = ({
  checked,
  item,
  modalOpenHandler,
  changeItemHandler,
  checkItemHandler,
  popUpHandler,
}: CardProps) => {
  const id = item.id;
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
    </S.Wrapper>
  );
};

export default React.memo(Card);
