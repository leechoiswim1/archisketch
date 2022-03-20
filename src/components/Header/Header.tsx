import React from 'react';
import * as S from './Header.styled';
import { x, download, tag, trash } from 'assets/icons';
import { HeaderProps } from './Header.type';

const Header = ({ modalCloseHandler, path, selectedItem, deleteItem }: HeaderProps) => {
  if (!path) {
    return (
      <S.Header>
        <S.HeaderLeft>
          <S.Button>
            <img src={x} alt="cancle" />
          </S.Button>
        </S.HeaderLeft>
      </S.Header>
    );
  } else {
    return (
      <S.Header>
        <S.HeaderLeft>
          <S.Button onClick={modalCloseHandler}>
            <img src={x} alt="cancle" />
          </S.Button>
        </S.HeaderLeft>
        <S.HeaderRight>
          <S.Button>
            <img src={tag} alt="tag" />
          </S.Button>
          <S.Button>
            <img src={download} alt="download" />
            <span>Download</span>
          </S.Button>
          <S.Button onClick={() => deleteItem && selectedItem && deleteItem(selectedItem)}>
            <img src={trash} alt="trash" />
          </S.Button>
        </S.HeaderRight>
      </S.Header>
    );
  }
};

export default Header;
