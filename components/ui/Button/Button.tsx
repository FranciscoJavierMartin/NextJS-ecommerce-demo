import React, {
  ButtonHTMLAttributes,
  ComponentType,
  HTMLAttributes,
  FC,
} from 'react';
import LoadingDots from '@components/ui/LoadingDots/LoadingDots';
import cn from 'classnames';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  Component?: string | ComponentType<HTMLAttributes<HTMLElement>>;
  href?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  isLoading,
  className,
  Component = 'button',
  ...rest
}) => {
  const rootClassName = cn(styles.root, className, {
    [styles.loading]: isLoading,
  });
  return (
    <Component className={rootClassName} type='button' {...rest}>
      {children}
      {isLoading && (
        <i className='pl-2 m-0 flex'>
          <LoadingDots />
        </i>
      )}
    </Component>
  );
};

export default Button;
