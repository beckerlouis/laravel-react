import { Meta, Notifications } from '@kit/kit';
import { AppStateProvider } from '@kit/contexts';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import React from 'react';

export const App = ({ children }: { children: React.ReactNode; }) => (
  <AppStateProvider>
    <Meta />
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    <Notifications/>
  </AppStateProvider>
);

export default App;
