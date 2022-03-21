import React from 'react';
import * as S from './SelectBox.styled';
import { chevronDown } from 'assets/icons';
import { SelectBoxProps } from './SelectBox.type';

const SelectBox = ({ options }: SelectBoxProps) => {
  return (
    <S.SelectWrap>
      <S.SelectInner>
        <S.Select>
          <option defaultValue={options.default.value}>{options.default.content}</option>
          {options.options.map(option => {
            return (
              <option value={option.value} key={option.value}>
                {option.content}
              </option>
            );
          })}
        </S.Select>
        <S.ArrowIcon>
          <img src={chevronDown} alt="chevronDown" />
        </S.ArrowIcon>
      </S.SelectInner>
    </S.SelectWrap>
  );
};

export default SelectBox;
