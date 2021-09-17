import React, { FC } from 'react';
import Link from 'next/link';
import Container from '@components/ui/Container/Container';

import styles from './Navbar.module.css';

const Navbar: FC = () => {
  return (
    <Container>
      <div className={styles.root}>
        <div className='flex flex-1 items-center'>
          <Link href='/'>
            <a className={styles.logo}>
              <h1>NEXT_STORE</h1>
            </a>
          </Link>
          <nav className='ml-6 space-x-6'>
            <Link href='/'>
              <a className={styles.link}>All</a>
            </Link>
            <Link href='/'>
              <a className={styles.link}>Clothes</a>
            </Link>
            <Link href='/'>
              <a className={styles.link}>Accesories</a>
            </Link>
            <Link href='/'>
              <a className={styles.link}>Shoes</a>
            </Link>
          </nav>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
