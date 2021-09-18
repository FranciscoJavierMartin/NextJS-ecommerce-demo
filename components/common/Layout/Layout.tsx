import React from 'react';
import Footer from '@components/common/Footer/Footer';
import Navbar from '@components/common/Navbar/Navbar';
import Sidebar from '@components/ui/Sidebar/Sidebar';
import { useUI } from '@components/ui/context';

import style from './Layout.module.css';
import CartSidebar from '@components/cart/CartSidebar/CartSidebar';

const Layout: React.FC = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI();

  return (
    <div className={style.root}>
      <Navbar />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
        <CartSidebar onClose={closeSidebar} />
      </Sidebar>
      <main className='fit'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
