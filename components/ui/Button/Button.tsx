import React, { ButtonHTMLAttributes, FC } from 'react';
import LoadingDots from '@components/ui/LoadingDots/LoadingDots';
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
      {isLoading && (
        <i className='pl-2 m-0 flex'>
          <LoadingDots />
        </i>
      )}
    </button>
  );
};

export default Button;
