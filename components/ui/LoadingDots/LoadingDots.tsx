import React, { FC } from 'react';

import styles from './LoadingDots.module.css';

const LoadingDots: FC = () => {
  return (
    <span className={styles.root}>
      <span />
      <span />
      <span />
    </span>
  );
};

export default LoadingDots;
