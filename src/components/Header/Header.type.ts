export type HeaderProps = {
  modalCloseHandler?: () => void;
  path?: string;
  selectedItem?: number;
  deleteItem?: (selectedItem: number) => void;
};
