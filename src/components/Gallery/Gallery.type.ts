import { CardImage } from 'components/Card/Card.type';

export type ItemsType = CardImage[];

export type GelleryProps = {
  items: ItemsType;
  setItems: React.Dispatch<React.SetStateAction<ItemsType>>;
  modalOpenHandler: () => void;
  changeItemHandler: (item: number) => void;
  deleteItem: (item: number) => void;
};
