import { Dialog, Transition } from '@headlessui/react';
import { AppContext } from '../../../Layouts/App';
import { Button } from 'flowbite-react';
import React from 'react';
import { useForm } from '@inertiajs/react';

export const DeleteUserForm = () => {
  const { modal, setModal } = React.useContext<any>(AppContext);

  const passwordInput = React.useRef<HTMLInputElement>();

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({ password: '' });

  const deleteUser = (e) => {
    e.preventDefault();

    destroy(route('profile.destroy'), {
      preserveScroll: true,
      onSuccess: () => handleClose(),
      onError: () => passwordInput.current?.focus(),
      onFinish: () => reset(),
    });
  };

  const handleClose = () => {
    setModal(null);

    reset();
  };

  return (
    <>
      <section className="max-w-xl space-y-6">
        <header>
          <h2 className="text-lg font-medium text-gray-900">Delete Account</h2>
          <div className="text-sm text-gray-600 mt-1">
            Once your account is deleted, all of its resources and data will be permanently deleted. Before
            deleting your account, please download any data or information that you wish to retain.
          </div>
        </header>
        <Button color="failure" size="sm" onClick={() => setModal('modal-delete-account')}>Delete Account</Button>
      </section>
      <Transition appear show={modal === 'modal-delete-account'} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center p-4 min-h-full">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-white text-left align-middle shadow-xl transform transition-all rounded-2xl overflow-hidden max-w-xl w-full">
                  <form onSubmit={deleteUser} className="px-8 py-6">
                    <h2 className="text-lg text-gray-900 font-medium">
                      Are you sure you want to delete your account?
                    </h2>
                    <div className="text-sm text-gray-600 mt-1">
                      Once your account is deleted, all of its resources and data will be permanently deleted. Please
                      enter your password to confirm you would like to permanently delete your account.
                    </div>
                    <div className="mt-6">
                      <label className="block text-sm text-gray-700 font-medium">
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
                    <div className="flex gap-2 items-center justify-end mt-6">
                      <Button color="gray" size="sm" onClick={() => setModal(null)}>Cancel</Button>
                      <Button type="submit" color="failure" size="sm" disabled={processing}>Delete Account</Button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DeleteUserForm;
