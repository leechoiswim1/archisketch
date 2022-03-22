export type CardImage = {
  id: number;
  imageUrl: string;
};
export type CardProps = {
  item: CardImage;
  checked: boolean;
  modalOpenHandler: () => void;
  changeItemHandler: (item: number) => void;
  checkItemHandler: (item: number) => void;
  deleteItem: (item: number) => void;
  cardPopupItem: number;
  cardPopupState: boolean;
  popUpHandler: (id: number) => void;
};
