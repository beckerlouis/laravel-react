import { Meta, Notifications } from '@kit/kit';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import React from 'react';

export const AdminContext = React.createContext({});

export const Admin = ({ children }: { children: React.ReactNode; }) => {
  const [ modal, setModal ] = React.useState<string | null>(null);

  return (
    <AdminContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      <Meta />
      <Navbar/>
      <main>{children}</main>
      <Footer/>
      <Notifications/>
    </AdminContext.Provider>
  );
};

export default Admin;
