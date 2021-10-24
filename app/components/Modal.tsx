import { FC } from "react";
import { MdClose } from "react-icons/md";
import ReactModal from "react-modal";

import styles from "@/styles/components/Modal.module.css";
import ModalProps from "@/types/components/Modal";

import { handleKeyUp } from "../utils";

const Modal: FC<ModalProps> = ({
  isOpen,
  setOpen,
  title,
  children,
  footer,
}) => {
  const handleClose = () => setOpen(false);

  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      closeTimeoutMS={250}
      className={styles.modal}
      overlayClassName={styles.overlay}
      onRequestClose={handleClose}
    >
      <header>
        <div className="flex items-center justify-between">
          <h1>{title}</h1>
          <MdClose
            tabIndex={0}
            className="text-xl cursor-pointer"
            onClick={handleClose}
            onKeyUp={(e) => handleKeyUp(e, handleClose)}
          />
        </div>
      </header>

      <main>{children}</main>

      {footer && <footer>{footer}</footer>}
    </ReactModal>
  );
};

export default Modal;
