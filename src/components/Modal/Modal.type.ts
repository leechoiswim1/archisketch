export interface ModalProps {
  modalCloseHandler: () => void;
  selectedItem?: number;
  selectedUrl: string;
  changeItemHandler: (item: number) => void;
}
