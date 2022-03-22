import React from 'react';
import * as S from './GalleryInfo.styled';
import { GallertInfoProps } from './GalleryInfo.type';
import { SelectBox, CheckBox } from 'components';
import { RENDER_OPTIONS, IMAGE_QUALITY_OPTIONS } from 'constants/constants';
import { download, trash } from 'assets/icons';
import fileDownloadHandler from 'utils/fileDownloadHandler';
const GalleryInfo = ({
  items,
  checkItems,
  checkAllItemsHandler,
  deleteAllItems,
}: GallertInfoProps) => {
  const idList = items.map(items => items.id);

  const checkUrls = () => {
    checkItems
      .map(checkItem => items.findIndex(item => item.id === checkItem))
      .map(index => ({ id: items[index].id, imageUrl: items[index].imageUrl }))
      .forEach(item => fileDownloadHandler(item.imageUrl, item.id));
  };
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
      {checkItems.length > 0 ? (
        <S.SelectGroup>
          <S.Button onClick={checkUrls}>
            <img src={download} alt="download" />
          </S.Button>
          <S.Button onClick={deleteAllItems}>
            <img src={trash} alt="trash" />
          </S.Button>
          <S.Button onClick={() => checkAllItemsHandler([])}>
            <span>선택 취소</span>
          </S.Button>
        </S.SelectGroup>
      ) : (
        <S.SelectGroup>
          <SelectBox options={RENDER_OPTIONS} />
          <SelectBox options={IMAGE_QUALITY_OPTIONS} />
        </S.SelectGroup>
      )}
    </S.Info>
  );
};

export default React.memo(GalleryInfo);
