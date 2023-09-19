import { Head, usePage } from '@inertiajs/react';
import React from 'react';

export const Meta = () => {
  const { seo }: any = usePage().props;

  return (
    <Head>
      <title>{seo?.title}</title>
      <meta name="description" content={seo?.description}/>
      <meta name="keywords" content={seo?.keywords?.map((keyword) => keyword).join(', ')}/>
    </Head>
  );
};
