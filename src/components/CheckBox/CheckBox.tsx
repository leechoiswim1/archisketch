import React, { ReactElement } from 'react';
import * as S from './CheckBox.styled';
import { CheckBoxProps } from './CheckBox.type';
const CheckBox = ({
  menuTrueHandler,
  menuFalseHandler,
  checkItemHandler,
  checkAllItemsHandler,
  id,
  idList,
  checked,
}: CheckBoxProps): ReactElement => {
  return (
    <S.CheckBox
      type="checkbox"
      checked={checked}
      galleryInfo={idList ? true : false}
      onMouseEnter={menuTrueHandler}
      onMouseLeave={menuFalseHandler}
      onMouseOver={menuTrueHandler}
      onChange={() =>
        id && checkItemHandler
          ? checkItemHandler(id)
          : idList && checkAllItemsHandler && checkAllItemsHandler(idList)
      }
    />
  );
};
export default React.memo(CheckBox);
