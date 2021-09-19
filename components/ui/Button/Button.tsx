import React, { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button className={cn(styles.root, className)} type='button' {...rest}>
      {children}
    </button>
  );
};

export default Button;
