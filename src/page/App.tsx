import React from 'react';
import { Header, Gallery, Modal, Spinner } from 'components';
import * as S from './App.styled';
import { useItems, useSelectedItem, useModal } from 'hook';

const App = () => {
  const { items, isLoading, setItems } = useItems();
  const { selectedItem, changeItemHandler, selectedUrl } = useSelectedItem(items);
  const { modalState, modalOpenHandler, modalCloseHandler } = useModal();
  const deleteItem = (selectedItem: number) => {
    const result = items.filter(item => item.id !== selectedItem);
    setItems(result);
    changeItemHandler(selectedItem + 1);
  };

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
          deleteItem={deleteItem}
        />
        {modalState && selectedItem && (
          <Modal
            deleteItem={deleteItem}
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
