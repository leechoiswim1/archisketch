export type ModalProps = {
  prevItem: (item: number) => number;
  nextItem: (item: number) => number;
  modalCloseHandler: () => void;
  selectedItem?: number;
  selectedUrl: string;
  changeItemHandler: (item: number) => void;
  deleteItem: (selectedItem: number) => void;
};
