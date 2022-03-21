export type HeaderProps = {
  path?: string;
  selectedItem?: number;
  selectedUrl?: string;
  deleteItem?: (selectedItem: number) => void;
  modalCloseHandler?: () => void;
};
