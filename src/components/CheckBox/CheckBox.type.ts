export interface CheckBoxProps {
  checked: boolean;
  idList?: number[];
  id?: number;
  checkAllItemsHandler?: (item: number[]) => void;
  checkItemHandler?: (item: number) => void;
  menuFalseHandler?: () => void;
  menuTrueHandler?: () => void;
}
