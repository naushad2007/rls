import React from 'react';
import { FC } from 'react';

import Button from '../Button';
import Modal from '../Modal';
import DataModalProps from './types';

const DataModal: FC<DataModalProps> = ({
  title,
  isOpen,
  setOpen,
  children,
  onReset = () => {},
  onSubmit = () => {},
}) => {
  return (
    <Modal isOpen={isOpen} setOpen={setOpen} title={title}>
      <main>{children}</main>
      <footer>
        <Button outline onClick={onReset}>
          Reset
        </Button>
        <Button onClick={onSubmit}>Submit</Button>
      </footer>
    </Modal>
  );
};

export default DataModal;
