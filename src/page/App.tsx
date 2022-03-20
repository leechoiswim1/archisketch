import React from 'react';
import { Header, Gallery, Modal, Spinner } from 'components';
import * as S from './App.styled';
import { useItems, useSelectedItem, useModal } from 'hook';

const App = () => {
  const { items, isLoading } = useItems();
  const { selectedItem, changeItemHandler, selectedUrl } = useSelectedItem(items);
  const { modalState, modalOpenHandler, modalCloseHandler } = useModal();

  if (isLoading) {
    return <Spinner />;
  } else {
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
  }
};

export default App;
