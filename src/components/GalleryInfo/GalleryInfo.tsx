import React from 'react';
import * as S from './GalleryInfo.styled';
import { GallertInfoProps } from './GalleryInfo.type';
import { SelectBox, CheckBox } from 'components';
import { RENDER_OPTIONS, IMAGE_QUALITY_OPTIONS } from 'constants/constants';
const GalleryInfo = ({ items, checkItems, checkAllItemsHandler }: GallertInfoProps) => {
  const idList = items.map(items => items.id);
  return (
    <S.Info>
      <S.GalleryLeft>
        <S.Count>{items.length}개 랜더샷</S.Count>
        {checkItems.length > 0 && (
          <S.CheckBoxGroup>
            <CheckBox
              checked={checkItems.length === items.length}
              checkAllItemsHandler={checkAllItemsHandler}
              idList={idList}
            />
            <span>모두선택</span>
          </S.CheckBoxGroup>
        )}
      </S.GalleryLeft>
      <S.Title>갤러리</S.Title>
      <S.SelectGroup>
        <SelectBox options={RENDER_OPTIONS} />
        <SelectBox options={IMAGE_QUALITY_OPTIONS} />
      </S.SelectGroup>
    </S.Info>
  );
};

export default React.memo(GalleryInfo);
