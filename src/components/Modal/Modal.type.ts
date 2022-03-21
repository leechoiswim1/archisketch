export type ModalProps = {
  modalCloseHandler: () => void;
  selectedItem?: number;
  selectedUrl: string;
  changeItemHandler: (item: number) => void;
  deleteItem: (selectedItem: number) => void;
};
