import { ApplicationLogo, Meta, Notifications } from '@kit/kit';
import React from 'react';

export const Web = ({ children }: { children: React.ReactNode; }) => (
  <>
    <Meta />
    <div
      className="flex flex-col items-center justify-center bg-gray-100 bg-dots-darker bg-center selection:bg-blue-300 selection:text-white min-h-screen w-full">
      <ApplicationLogo/>
      <main className="flex items-center justify-center mx-auto w-full">{children}</main>
    </div>
    <Notifications/>
  </>
);

export default Web;
