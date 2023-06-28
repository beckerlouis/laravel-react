import { Head, usePage } from '@inertiajs/react';
import ApplicationLogo from '../../web/Pages/Components/ApplicationLogo';
import Notifications from '../../web/Layouts/Notifications';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export const Web = ({ children }: LayoutProps) => {
  const { seo }: any = usePage().props;

  return (
    <>
      <Head>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description}/>
        <meta name="keywords" content={seo?.keywords?.map((keyword) => keyword).join(', ')}/>
      </Head>
      <div
        className="flex flex-col items-center justify-center bg-gray-100 bg-dots-darker bg-center selection:bg-blue-300 selection:text-white min-h-screen w-full">
        <ApplicationLogo/>
        <main className="flex items-center justify-center mx-auto w-full">{children}</main>
      </div>
      <Notifications/>
    </>
  );
};

export default Web;
