import React, { useEffect, useState } from 'react';
import { Header, Gallery } from 'components';
import { getData } from 'service/Api';
import * as S from './App.styled';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData().then(res => {
      setItems(res.renderings);
    });
  }, []);

  return (
    <S.Wrapper>
      <Header />
      <Gallery items={items} />
    </S.Wrapper>
  );
};

export default App;
