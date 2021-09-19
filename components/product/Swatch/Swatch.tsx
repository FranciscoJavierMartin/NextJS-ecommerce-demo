import React, { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';
import { Check } from '@components/icons';
import { AvailableChoices } from '@common/types/product';
import { isDark } from '@lib/color';

import styles from './Swatch.module.css';

interface SwatchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  label?: string;
  variant?: AvailableChoices;
  active?: boolean;
}

const Swatch: FC<SwatchProps> = ({
  color,
  label,
  variant,
  active,
  ...rest
}) => {
  const rootClassName = cn(styles.root, {
    [styles.active]: active,
    [styles.color]: color,
    [styles.size]: variant === 'Size',
    [styles.dark]: color && isDark(color),
  });
  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={rootClassName}
      {...rest}
    >
      {variant === 'Color' && active && (
        <span>
          <Check />
        </span>
      )}
      {variant === 'Size' ? label?.toLowerCase() : null}
    </button>
  );
};

export default Swatch;
