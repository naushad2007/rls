import { IconType } from 'react-icons/lib';

export default interface ButtonProps {
  icon?: IconType;
  onClick: () => void;
  className?: string;
  outline?: boolean;
  isLoading?: boolean;
  isDelete?: boolean;
}
