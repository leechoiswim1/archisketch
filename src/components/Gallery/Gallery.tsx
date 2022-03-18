import React from 'react';
import * as S from './Gellery.styled';

const Gallery = () => {
  return (
    <S.Wrapper>
      <S.Info>
        <S.Count>114개 랜더샷</S.Count> <S.Title>갤러리</S.Title>
        <S.SelectGroup>
          <S.SelectWrap>
            <S.Select>
              <option selected>모든 랜더샷</option>
              <option>옵션1</option>
              <option>옵션2</option>
              <option>옵션3</option>
            </S.Select>
          </S.SelectWrap>
          <S.SelectWrap>
            <S.Select>
              <option selected>모든화질</option>
              <option>옵션1</option>
              <option>옵션2</option>
              <option>옵션3</option>
            </S.Select>{' '}
          </S.SelectWrap>
        </S.SelectGroup>
      </S.Info>
    </S.Wrapper>
  );
};

export default Gallery;
