import React, { FC } from 'react';
import Link from 'next/link';
import { useUI } from '@contexts/ui/UIWrapper';
import { WISHLIST_ROUTE } from 'constants/routes';

import styles from './Usernav.module.css';

import { Bag as Cart, Heart } from '@components/icons';

const Usernav: FC = () => {
  const { openSidebar } = useUI();

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Cart onClick={openSidebar} />
        </li>
        <li className={styles.item}>
          <Link href={`/${WISHLIST_ROUTE}`}>
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;