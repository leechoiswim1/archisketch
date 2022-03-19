import React from 'react';
import * as S from './Header.styled';
import Cancle from 'assets/icons/x.svg';
import { HeaderProps } from './Header.type';
const Header = ({ modalCloseHandler }: HeaderProps) => {
  return (
    <S.Header>
      <S.Button onClick={modalCloseHandler}>
        <img src={Cancle} alt="Cancle Icon" />
      </S.Button>
    </S.Header>
  );
};

export default Header;
