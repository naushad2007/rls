import { ReactNode } from "react";

export default interface ModalProps {
  title?: string;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  footer?: ReactNode;
}

export interface DataModalProps extends ModalProps {
  onReset?: () => void;
  onSubmit?: () => void;
}
