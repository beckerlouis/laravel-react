import { Link, useForm } from '@inertiajs/react';
import React, { useEffect } from 'react';
import Auth from '../../Layouts/Auth';
import { Button } from 'flowbite-react';

const Login = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => () => {
    reset('password');
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden px-6 py-4 mt-6 max-w-md w-full">
      <form onSubmit={submitForm}>
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
            autoComplete="password"
            onChange={(e) => setData('password', e.target.value)}
            className="block border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
            required
          />
          <div className="text-sm text-red-600">
            {errors.password}
          </div>
        </div>
        <div className="block mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              className="border-gray-300 text-indigo-600 shadow-sm rounded"/>
            <span className="text-sm text-gray-600 ml-2">Remember me</span>
          </label>
        </div>
        <div className="flex items-center justify-end mt-4">
          <Link
            href={route('password.request')}
            className="text-sm text-gray-600 hover:text-gray-900 underline rounded-md"
          >
            Forgot your password?
          </Link>
          <Button
            type="submit"
            color="dark"
            size="sm"
            className="ml-4"
            disabled={processing}
          >
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
};

Login.layout = (page) => <Auth>{page}</Auth>;

export default Login;
