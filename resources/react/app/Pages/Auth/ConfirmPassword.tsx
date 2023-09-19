import Auth from '../../Layouts/Auth';
import { Button } from 'flowbite-react';
import React from 'react';
import { useForm } from '@inertiajs/react';

const ConfirmPassword = () => {
  const { data, setData, post, processing, errors, reset } = useForm({ password: '' });

  React.useEffect(() => () => {
    reset('password');
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    post(route('password.confirm'));
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden px-6 py-4 mt-6 max-w-md w-full">
      <form onSubmit={submitForm}>
        <div className="text-sm text-gray-600 mb-4">
          This is a secure area of the application. Please confirm your password before continuing.
        </div>
        <div className="mt-4">
          <label className="block font-medium text-sm text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={data.password}
            autoComplete="password"
            onChange={(e) => setData('password', e.target.value)}
            className="block border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
            required
          />
          <div className="text-sm text-red-600">
            {errors.password}
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <Button
            type="submit"
            color="dark"
            size="sm"
            disabled={processing}
          >
            Confirm
          </Button>
        </div>
      </form>
    </div>
  );
};

ConfirmPassword.layout = (page) => <Auth>{page}</Auth>;

export default ConfirmPassword;
