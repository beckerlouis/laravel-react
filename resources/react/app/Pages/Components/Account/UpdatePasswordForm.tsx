import { Button } from 'flowbite-react';
import React from 'react';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';

export const UpdatePasswordForm = () => {
  const passwordInput = React.useRef<HTMLInputElement>();
  const currentPasswordInput = React.useRef<HTMLInputElement>();

  const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
  });

  const updatePassword = (e) => {
    e.preventDefault();

    put(route('password.update'), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors) => {
        if (errors.password) {
          reset('password', 'password_confirmation');
          passwordInput.current?.focus();
        }

        if (errors.current_password) {
          reset('current_password');
          currentPasswordInput.current?.focus();
        }
      },
    });
  };

  return (
    <section className="max-w-xl">
      <header>
        <h2 className="text-lg font-medium text-gray-900">Update Password</h2>
        <div className="text-sm text-gray-600 mt-1">
          Ensure your account is using a long, random password to stay secure.
        </div>
      </header>
      <form onSubmit={updatePassword} className="space-y-6 mt-6">
        <div>
          <label className="block font-medium text-sm text-gray-700">
            Current Password
          </label>
          <input
            id="current_password"
            type="password"
            name="current_password"
            value={data.current_password}
            autoComplete="current_password"
            onChange={(e) => setData('current_password', e.target.value)}
            className="block border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
            required
          />
          <div className="text-sm text-red-600">
            {errors.current_password}
          </div>
        </div>
        <div>
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
        <div>
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
        <div className="flex items-center gap-4">
          <Button
            type="submit"
            color="dark"
            size="sm"
            disabled={processing}
          >
            Save
          </Button>
          <Transition
            show={recentlySuccessful}
            enterFrom="opacity-0"
            leaveTo="opacity-0"
            className="transition ease-in-out"
          >
            <div className="text-sm text-green-600">Saved.</div>
          </Transition>
        </div>
      </form>
    </section>
  );
};

export default UpdatePasswordForm;
