import React from 'react';
import Footer from '@components/common/Footer/Footer';
import Navbar from '@components/common/Navbar/Navbar';
import Sidebar from '@components/ui/Sidebar/Sidebar';
import CartSidebar from '@components/cart/CartSidebar/CartSidebar';
import { useUI } from '@contexts/ui/UIWrapper';
import { ApiProvider } from '@framework';

import style from './Layout.module.css';

const Layout: React.FC = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI();

  return (
    <ApiProvider>
      <div className={style.root}>
        <Navbar />
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
          <CartSidebar />
        </Sidebar>
        <main className='fit'>{children}</main>
        <Footer />
      </div>
    </ApiProvider>
  );
};

export default Layout;
