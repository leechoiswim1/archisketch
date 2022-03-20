import React from 'react';
import * as S from './Spinner.styled';

const Spinner = () => {
  return (
    <S.Wrapper>
      <S.Spin>
        {[...Array(4)].map((n, index) => {
          return <S.Dot key={index} />;
        })}
      </S.Spin>
    </S.Wrapper>
  );
};

export default Spinner;
