import { ApplicationLogo, Meta, Notifications } from '@kit/kit';
import { AppStateProvider } from '@kit/contexts';
import { clx } from '@kit/utils';
import React from 'react';

export const Web = ({ children }: { children: React.ReactNode; }) => (
  <AppStateProvider>
    <Meta />
    <div
      className={clx('flex flex-col items-center justify-center bg-gray-100 bg-dots-darker bg-center selection:bg-blue-300 selection:text-white min-h-screen w-full')}>
      <ApplicationLogo/>
      <main className={clx('flex items-center justify-center mx-auto w-full')}>{children}</main>
    </div>
    <Notifications/>
  </AppStateProvider>
);

export default Web;
