import React, { useCallback } from 'react';
import { Header, Gallery, Modal, Spinner } from 'components';
import * as S from './App.styled';
import { useItems, useSelectedItem, useModal } from 'hook';

const App = () => {
  const { items, isLoading, setItems, nextItem, prevItem } = useItems();
  const { selectedItem, changeItemHandler, selectedUrl } = useSelectedItem(items);
  const { modalState, modalOpenHandler, modalCloseHandler } = useModal();

  const deleteItem = useCallback(
    (selectedItem: number) => {
      const result = items.filter(item => item.id !== selectedItem);
      setItems(result);
      changeItemHandler(nextItem(selectedItem));
    },
    [items],
  );

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <S.Wrapper>
        <Header />
        <Gallery
          setItems={setItems}
          items={items}
          changeItemHandler={changeItemHandler}
          modalOpenHandler={modalOpenHandler}
          deleteItem={deleteItem}
        />
        {modalState && selectedItem && (
          <Modal
            prevItem={prevItem}
            nextItem={nextItem}
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
