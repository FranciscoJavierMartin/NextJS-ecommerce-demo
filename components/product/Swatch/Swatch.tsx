import React, { FC } from 'react';
import { Check } from '@components/icons';

import styles from './Swatch.module.css';

interface SwatchProps {
  color?: string;
  label?: string;
  variant?: 'Size' | 'Color' | string;
}

const Swatch: FC<SwatchProps> = ({ color, label, variant }) => {
  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={styles.root}
    >
      <span>
        <Check />
      </span>
      {variant === 'Size' ? label?.toLowerCase() : null}
    </button>
  );
};

export default Swatch;
