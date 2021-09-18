import React from 'react';
import Footer from '@components/common/Footer/Footer';
import Navbar from '@components/common/Navbar/Navbar';
import Sidebar from '@components/ui/Sidebar/Sidebar';

import style from './Layout.module.css';
import CartSidebar from '@components/cart/CartSidebar/CartSidebar';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={style.root}>
      <Navbar />
      <Sidebar>
        <CartSidebar />
      </Sidebar>
      <main className='fit'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
