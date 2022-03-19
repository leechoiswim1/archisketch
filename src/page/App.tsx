import React, { useEffect, useState } from 'react';
import { Header, Gallery, Modal } from 'components';
import { getData } from 'service/Api';
import * as S from './App.styled';
import { ItemsType } from 'components/Gallery/Gallery.type';
import { CardImage } from 'components/Card/Card.type';

const App = () => {
  const [items, setItems] = useState<ItemsType>([]);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [selectedUrl, setSelectedUrl] = useState<string>('');
  const [modalState, setModalState] = useState(false);

  const changeItemHandler = (item: number) => {
    if (items.length < item || item < 1) {
      return;
    }
    setSelectedItem(item);
  };

  const modalOpenHandler = () => {
    setModalState(true);
  };

  const modalCloseHandler = () => {
    setModalState(false);
  };

  useEffect(() => {
    getData().then(res => {
      const data = res.renderings.map((item: { _id: string }, idx: number) => {
        const card = { id: idx + 1, imageUrl: item._id };
        return card;
      });
      setItems(data);
    });
  }, []);

  useEffect(() => {
    if (selectedItem) {
      const idx = items.findIndex((item: CardImage) => item.id === selectedItem);
      const imageUrl = items[idx].imageUrl;
      setSelectedUrl(imageUrl);
    }
  }, [selectedItem, items]);

  return (
    <S.Wrapper>
      <Header />
      <Gallery
        items={items}
        changeItemHandler={changeItemHandler}
        modalOpenHandler={modalOpenHandler}
      />
      {modalState && selectedItem && (
        <Modal
          modalCloseHandler={modalCloseHandler}
          selectedUrl={selectedUrl}
          selectedItem={selectedItem}
          changeItemHandler={changeItemHandler}
        />
      )}
    </S.Wrapper>
  );
};

export default App;
