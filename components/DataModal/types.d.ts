import ModalProps from '../Modal/types';

export default interface DataModalProps extends ModalProps {
  onReset?: () => void;
  onSubmit?: () => void;
}
