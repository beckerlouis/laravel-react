import { Footer, Navbar } from './components';
import { AppStateProvider } from '@kit/contexts';
import { Meta, Notifications } from '@kit/kit';
import { ReactNode } from 'react';

export const Web = ({ children }: { children: ReactNode }) => (
  <AppStateProvider>
    <Meta/>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    <Notifications/>
  </AppStateProvider>
);

export default Web;
