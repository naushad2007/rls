import { FC } from 'react';
import { MdClose } from 'react-icons/md';
import ReactModal from 'react-modal';

import styles from '@/styles/components/Modal.module.css';
import ModalProps from '@/types/components/Modal';

const Modal: FC<ModalProps> = ({ isOpen, setOpen, title, children }) => {
  const handleClose = () => setOpen(false);

  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      className={styles.modal}
      overlayClassName={styles.overlay}
      onRequestClose={handleClose}>
      <header>
        <div className="flex items-center justify-between">
          <h1>{title}</h1>
          <MdClose className="text-xl cursor-pointer" onClick={handleClose} />
        </div>
      </header>
      {children}
    </ReactModal>
  );
};

export default Modal;
