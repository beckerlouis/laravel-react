import Auth from '../../Layouts/Auth';
import { Link, useForm } from '@inertiajs/react';
import { Button } from 'flowbite-react';
import { ReactNode } from 'react';

const VerifyEmail = ({ status }: any) => {
  const { post } = useForm({});

  const submitForm = (e) => {
    e.preventDefault();

    post(route('verification.send'));
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden px-6 py-4 mt-6 max-w-md w-full">
      <div className="text-sm text-gray-600 mb-4">
        Thanks for signing up! Before getting started, could you verify your email address by clicking on the
        link we just emailed to you? If you didn't receive the email, we will gladly send you another.
      </div>
      {status === 'verification-link-sent' && (
        <div className="text-sm text-green-600 font-medium mb-4">
          A new verification link has been sent to the email address you provided during registration.
        </div>
      )}
      <div className="flex items-center justify-between mt-4">
        <Button
          color="dark"
          size="sm"
          onClick={submitForm}
        >
          Resend Verification Email
        </Button>
        <Link
          href={route('logout')}
          className="text-sm text-gray-600 hover:text-gray-900 underline rounded-md"
        >
          Log Out
        </Link>
      </div>
    </div>
  );
};

VerifyEmail.layout = (page: ReactNode) => <Auth>{page}</Auth>;

export default VerifyEmail;
