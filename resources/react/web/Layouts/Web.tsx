import { Meta, Notifications } from '@kit/kit';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import React from 'react';

export const WebContext = React.createContext({});

export const Web = ({ children }: { children: React.ReactNode }) => {
  const [ modal, setModal ] = React.useState<string | null>(null);

  return (
    <WebContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      <Meta/>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
      <Notifications/>
    </WebContext.Provider>
  );
};

export default Web;
