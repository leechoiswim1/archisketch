import React from 'react';
import * as S from './Header.styled';
import Cancle from 'assets/icons/x.svg';
const Header = () => {
  return (
    <S.Header>
      <S.Button>
        <img src={Cancle} alt="Cancle Icon" />
      </S.Button>
    </S.Header>
  );
};

export default Header;
