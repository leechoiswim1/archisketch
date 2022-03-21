import React from 'react';
import * as S from './GalleryInfo.styled';
import { GallertInfoProps } from './GalleryInfo.type';
import { SelectBox } from 'components';
import { RENDER_OPTIONS, IMAGE_QUALITY_OPTIONS } from 'constants/constants';
const GalleryInfo = ({ itemsLength }: GallertInfoProps) => {
  return (
    <S.Info>
      <S.Count>{itemsLength}개 랜더샷</S.Count> <S.Title>갤러리</S.Title>
      <S.SelectGroup>
        <SelectBox options={RENDER_OPTIONS} />
        <SelectBox options={IMAGE_QUALITY_OPTIONS} />
      </S.SelectGroup>
    </S.Info>
  );
};

export default GalleryInfo;
