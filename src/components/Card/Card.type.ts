export type CardImage = {
  id: number;
  imageUrl: string;
};
export type CardProps = {
  item: CardImage;
  checkItems: number[];
  modalOpenHandler: () => void;
  changeItemHandler: (item: number) => void;
  checkItemHandler: (item: number) => void;
  deleteItem: (item: number) => void;
};
