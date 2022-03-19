import { CardImage } from 'components/Card/Card.type';

export type ItemsType = CardImage[];

export type GelleryProps = {
  items: ItemsType;
  modalOpenHandler: () => void;
  changeItemHandler: (item: number) => void;
};
