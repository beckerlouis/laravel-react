import Auth from '../../Layouts/Auth';
import { Link, useForm } from '@inertiajs/react';
import { Button } from 'flowbite-react';
import { useEffect } from 'react';

const Register = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => () => {
    reset('password', 'password_confirmation');
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    post(route('register'));
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden px-6 py-4 mt-6 max-w-md w-full">
      <div>
        <label className="block font-medium text-sm text-gray-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={data.name}
          autoComplete="name"
          onChange={(e) => setData('name', e.target.value)}
          className="block border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
        />
        <div className="text-sm text-red-600">
          {errors.name}
        </div>
      </div>
      <div className="mt-4">
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
        <Link
          href={route('login')}
          className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md"
        >
          Already registered?
        </Link>
        <Button
          type="submit"
          color="dark"
          size="sm"
          className="ml-4"
          onClick={submitForm}
          disabled={processing}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

Register.layout = (page) => <Auth>{page}</Auth>;

export default Register;
