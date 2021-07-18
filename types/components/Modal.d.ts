export default interface ModalProps {
  title?: string;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export interface DataModalProps extends ModalProps {
  onReset?: () => void;
  onSubmit?: () => void;
}
