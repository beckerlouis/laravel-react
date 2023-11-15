import { usePage } from '@inertiajs/react';
import { PageProps } from '@kit/types';

export const Auth = () => {
  const { auth }: any = usePage<PageProps>().props;

  return (
    <div className="p-6 text-center sm:fixed sm:right-0 sm:top-0 sm:text-right">
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
