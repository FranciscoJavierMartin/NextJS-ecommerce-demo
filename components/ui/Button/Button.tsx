import React, { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  isLoading,
  className,
  ...rest
}) => {
  const rootClassName = cn(styles.root, className, {
    [styles.loading]: isLoading,
  });
  return (
    <button className={rootClassName} type='button' {...rest}>
      {children}
      {isLoading && <div>Loading...</div>}
    </button>
  );
};

export default Button;
