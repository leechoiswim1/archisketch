export interface CheckBoxProps {
  checked: boolean;
  menuFalseHandler: () => void;
  menuTrueHandler: () => void;
  checkItemHandler: (item: number) => void;
  id: number;
}
