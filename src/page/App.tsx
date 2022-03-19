import React, { useEffect, useState } from 'react';
import { Header, Gallery, Modal } from 'components';
import * as S from './App.styled';
import { CardImage } from 'components/Card/Card.type';
import useItems from 'hook/useItems';

const App = () => {
  const items = useItems();
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
    if (selectedItem) {
      const idx = items.findIndex((item: CardImage) => item.id === selectedItem);
      const imageUrl = items[idx].imageUrl;
      setSelectedUrl(imageUrl);
    }
  }, [selectedItem, items]);

  if (!items) {
    return <div>'Loading...'</div>;
  }

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
