export interface CardImage {
  id: number;
  imageUrl: string;
}
export interface CardProps {
  item: CardImage;
  modalOpenHandler: () => void;
  changeItemHandler: (item: number) => void;
}
