import React, { useEffect } from 'react';
import Auth from '../../Layouts/Auth';
import { Button } from 'flowbite-react';
import { useForm } from '@inertiajs/react';

const ResetPassword = ({ token, email }: any) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  });

  useEffect(() => () => {
    reset('password', 'password_confirmation');
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    post(route('password.store'));
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden px-6 py-4 mt-6 max-w-md w-full">
      <div>
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
          autoComplete="new-password"
          onChange={(e) => setData('password', e.target.value)}
          className="block border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
          required
        />
        <div className="text-sm text-red-600">
          {errors.password}
        </div>
      </div>
      <div className="mt-4">
        <label className="block font-medium text-sm text-gray-700">
          Confirm Password
        </label>
        <input
          id="password_confirmation"
          type="password"
          name="password_confirmation"
          value={data.password_confirmation}
          autoComplete="new-password"
          onChange={(e) => setData('password_confirmation', e.target.value)}
          className="block border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
          required
        />
        <div className="text-sm text-red-600">
          {errors.password_confirmation}
        </div>
      </div>
      <div className="flex items-center justify-end mt-4">
        <Button
          color="dark"
          size="sm"
          className="ml-4"
          onClick={submitForm}
          disabled={processing}
        >
          Reset Password
        </Button>
      </div>
    </div>
  );
};

ResetPassword.layout = (page) => <Auth>{page}</Auth>;

export default ResetPassword;
