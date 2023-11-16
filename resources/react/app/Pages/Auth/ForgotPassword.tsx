import Auth from '../../Layouts/Auth';
import { useForm } from '@inertiajs/react';
import { Button } from 'flowbite-react';
import { ReactNode } from 'react';

const ForgotPassword = ({ status }: any) => {
  const { data, setData, post, processing, errors } = useForm({ email: '' });

  const submitForm = (e) => {
    e.preventDefault();

    post(route('password.email'));
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden px-6 py-4 mt-6 max-w-md w-full">
      <div className="text-sm text-gray-600 mb-4">
        Forgot your password? No problem. Just let us know your email address and we will email you a password
        reset link that will allow you to choose a new one.
      </div>
      {status && (
        <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">{status}</div>
      )}
      <label className="block font-medium text-sm text-gray-700">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        value={data.email}
        autoComplete="email"
        onChange={(e) => setData('email', e.target.value)}
        className="block border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
        required
      />
      <div className="text-sm text-red-600">
        {errors.email}
      </div>
      <div className="flex items-center justify-end mt-4">
        <Button
          color="dark"
          size="sm"
          onClick={submitForm}
          disabled={processing}
        >
          Email Password Reset Link
        </Button>
      </div>
    </div>
  );
};

ForgotPassword.layout = (page: ReactNode) => <Auth>{page}</Auth>;

export default ForgotPassword;
