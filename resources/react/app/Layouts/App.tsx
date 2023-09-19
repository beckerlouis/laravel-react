import { Meta, Notifications } from '@kit/kit';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import React from 'react';

export const AppContext = React.createContext({});

export const App = ({ children }: { children: React.ReactNode; }) => {
  const [ modal, setModal ] = React.useState<string | null>(null);

  return (
    <AppContext.Provider
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
    </AppContext.Provider>
  );
};

export default App;
