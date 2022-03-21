import React, { ReactElement } from 'react';
import * as S from './CheckBox.styled';
import { CheckBoxProps } from './CheckBox.type';
const CheckBox = ({
  menuTrueHandler,
  menuFalseHandler,
  checkItemHandler,
  id,
  checked,
}: CheckBoxProps): ReactElement => {
  return (
    <S.CheckBox
      type="checkbox"
      checked={checked}
      onMouseEnter={menuTrueHandler}
      onMouseLeave={menuFalseHandler}
      onChange={() => id && checkItemHandler && checkItemHandler(id)}
    />
  );
};
export default React.memo(CheckBox);
