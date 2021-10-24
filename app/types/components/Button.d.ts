import { IconType } from "react-icons";

export default interface ButtonProps {
  icon?: IconType;
  onClick?: () => void;
  className?: string;
  outline?: boolean;
  isLoading?: boolean;
  isDelete?: boolean;
}
