import React, { FC } from 'react';
import Ticker from 'react-ticker';

import styles from './Marquee.module.css';

const Marquee: FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <Ticker offset={80}>
        {() => <div className={styles.container}>{children}</div>}
      </Ticker>
    </div>
  );
};

export default Marquee;
