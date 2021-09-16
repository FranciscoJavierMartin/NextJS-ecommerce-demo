import React from 'react';
import Footer from '../Footer/Footer';
import style from './Layout.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={style.root}>
      <main className='fit'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
