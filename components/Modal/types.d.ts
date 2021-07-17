export default interface ModalProps {
  title?: string;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}
