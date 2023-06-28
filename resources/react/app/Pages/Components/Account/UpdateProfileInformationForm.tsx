import { Link, useForm, usePage } from '@inertiajs/react';
import { Button } from 'flowbite-react';
import React from 'react';
import { Transition } from '@headlessui/react';

export const UpdateProfileInformationForm = ({ mustVerifyEmail, status }: any) => {
  const { user }: any = usePage().props;

  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email,
  });

  const submit = (e) => {
    e.preventDefault();

    patch(route('profile.update'));
  };

  return (
    <section className="max-w-xl">
      <header>
        <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
        <div className="text-sm text-gray-600 mt-1">
          Update your account's profile information and email address.
        </div>
      </header>
      <form onSubmit={submit} className="space-y-6 mt-6">
        <div>
          <label className="block font-medium text-sm text-gray-700">
            Email
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={data.name}
            autoComplete="name"
            onChange={(e) => setData('name', e.target.value)}
            className="block border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
            required
          />
          <div className="text-sm text-red-600">
            {errors.name}
          </div>
        </div>
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
        {mustVerifyEmail && user.email_verified_at === null && (
          <div>
            <div className="text-sm text-gray-800 mt-2">
              Your email address is unverified.
              <Link
                href={route('verification.send')}
                method="post"
                as="button"
                className="text-sm text-gray-600 hover:text-gray-900 underline rounded-md"
              >
                Click here to re-send the verification email.
              </Link>
            </div>
            {status === 'verification-link-sent' && (
              <div className="text-sm text-green-600 font-medium mt-2">
                A new verification link has been sent to your email address.
              </div>
            )}
          </div>
        )}
        <div className="flex gap-4 items-center">
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

export default UpdateProfileInformationForm;
