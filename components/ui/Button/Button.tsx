import React, { FC } from 'react';
import styles from './Button.module.css';

const Button: FC = ({ children }) => {
  return (
    <button className={styles.root} type='button'>
      {children}
    </button>
  );
};

export default Button;
