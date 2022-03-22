import { ItemsType } from 'components/Gallery/Gallery.type';
export type GallertInfoProps = {
  items: ItemsType;
  checkItems: number[];
  checkAllItemsHandler: (items: number[]) => void;
  deleteAllItems: () => void;
};
