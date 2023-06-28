import { Head, usePage } from '@inertiajs/react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Notifications from './Notifications';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export const Admin = ({ children }: LayoutProps) => {
  const { seo }: any = usePage().props;

  return (
    <>
      <Head>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description}/>
        <meta name="keywords" content={seo?.keywords?.map((keyword) => keyword).join(', ')}/>
      </Head>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
      <Notifications/>
    </>
  );
};

export default Admin;
