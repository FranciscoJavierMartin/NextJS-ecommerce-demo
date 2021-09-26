import React, { FC } from 'react';
import Link from 'next/link';
import { useUI } from '@contexts/ui/UIWrapper';
import { WISHLIST_ROUTE } from 'constants/routes';
import useCart from '@framework/cart/useCart';

import { Bag as Cart, Heart } from '@components/icons';

import styles from './Usernav.module.css';
import { LineItem } from '@common/types/cart';

const Usernav: FC = () => {
  const { openSidebar } = useUI();
  const { data } = useCart();

  const itemsCount =
    data?.lineItems.reduce(
      (acc: number, lineItem: LineItem) => acc + lineItem.quantity,
      0
    ) ?? 0;

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Cart onClick={openSidebar} />
          {itemsCount > 0 && (
            <span className={styles.bagCount}>{itemsCount}</span>
          )}
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
