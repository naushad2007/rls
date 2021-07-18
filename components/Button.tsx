import cx from 'classnames';
import { FC } from 'react';

import styles from '@/styles/components/Button.module.css';
import ButtonProps from '@/types/components/Button';
import { handleKeyUp } from '@/utils/index';

const Button: FC<ButtonProps> = ({
  children,
  className,
  icon: Icon,
  outline = false,
  isLoading = false,
  isDelete = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick ?? null}
      onKeyUp={(e) => handleKeyUp(e, onClick)}
      className={cx(styles.button, className, {
        [styles.outline]: outline,
        [styles.remove]: isDelete,
      })}>
      {Icon && <Icon className="mr-3" />}
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
