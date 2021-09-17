import React from 'react';
import Footer from '@components/common/Footer/Footer';
import Navbar from '@components/common/Navbar/Navbar';
import style from './Layout.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={style.root}>
      <Navbar />
      <main className='fit'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
