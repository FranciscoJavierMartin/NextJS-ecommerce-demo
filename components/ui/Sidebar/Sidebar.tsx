import React, { FC, useEffect, useRef } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ children, isOpen, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebarRef.current) {
      if (isOpen) {
        disableBodyScroll(sidebarRef.current);
      } else {
        enableBodyScroll(sidebarRef.current);
      }
    }

    return () => clearAllBodyScrollLocks();
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div
          ref={sidebarRef}
          className='fixed inset-0 overflow-hidden h-full z-50'
        >
          <div className='absolute inset-0 overflow-hidden'>
            <div
              className='absolute inset-0 bg-black bg-opacity-50 transition-opacity'
              onClick={onClose}
            />
            <section className='absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none'>
              <div className='h-full md:w-screen md:max-w-md'>
                <div className='h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto'>
                  {children}
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
