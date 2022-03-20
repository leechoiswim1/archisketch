import React from 'react';
import * as S from './GalleryInfo.styled';
import { GallertInfoProps } from './GalleryInfo.type';
const GalleryInfo = ({ itemsLength }: GallertInfoProps) => {
  return (
    <S.Info>
      <S.Count>{itemsLength}개 랜더샷</S.Count> <S.Title>갤러리</S.Title>
      <S.SelectGroup>
        <S.SelectWrap>
          <S.Select>
            <option defaultValue="allRender">모든 랜더샷</option>
            <option value="option1">옵션1</option>
            <option value="option2">옵션2</option>
            <option value="option3">옵션3</option>
          </S.Select>
        </S.SelectWrap>
        <S.SelectWrap>
          <S.Select>
            <option defaultValue="allResolution">모든화질</option>
            <option value="option1">옵션1</option>
            <option value="option2">옵션2</option>
            <option value="option3">옵션3</option>
          </S.Select>{' '}
        </S.SelectWrap>
      </S.SelectGroup>
    </S.Info>
  );
};

export default GalleryInfo;
