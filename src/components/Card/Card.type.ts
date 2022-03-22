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
  popUpHandler: (id: number) => void;
};
