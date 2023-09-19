import { PageProps } from '@kit/types';
import React from 'react';
import style from './component.module.scss';
import { usePage } from '@inertiajs/react';

export const Auth = () => {
  const { auth }: any = usePage<PageProps>().props;

  return (
    <div className={style.component}>
      {auth.user ? (
        <a href="/app" className="text-gray-600 hover:text-gray-900 font-semibold">
          Dashboard
        </a>
      ) : (
        <>
          <a href="/app/login" className="text-gray-600 hover:text-gray-900 font-semibold">
            Log in
          </a>
          <a href="/app/register" className="ml-4 text-gray-600 hover:text-gray-900 font-semibold">
            Register
          </a>
        </>
      )}
    </div>
  );
};

export default Auth;
