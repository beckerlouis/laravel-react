import { Form, Modal, ModalWidth } from '@kit/kit';
import { Button } from 'flowbite-react';
import { clx } from '@kit/utils';
import React from 'react';
import { useAppState } from '@kit/contexts';
import { useForm } from '@inertiajs/react';

export const DeleteUserForm = () => {
  const { setModal } = useAppState();

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

  const modalValue = 'modal-delete-account';

  return (
    <>
      <section className={clx('max-w-xl space-y-6')}>
        <header>
          <h2 className={clx('text-lg font-medium text-gray-900')}>Delete Account</h2>
          <div className={clx('text-sm text-gray-600 mt-1')}>
            Once your account is deleted, all of its resources and data will be permanently deleted. Before
            deleting your account, please download any data or information that you wish to retain.
          </div>
        </header>
        <Button
          color="failure"
          size="sm"
          onClick={() => setModal(modalValue)}
        >
          Delete Account
        </Button>
      </section>
      <Modal
        title="Are you sure you want to delete your account?"
        width={ModalWidth.xl}
        value={modalValue}
      >
        <Form
          data={data}
          setData={setData}
          onSubmit={deleteUser}
          className={clx('px-8 py-6')}
        >
          <div className={clx('text-sm text-gray-600 mt-1')}>
            Once your account is deleted, all of its resources and data will be permanently deleted. Please
            enter your password to confirm you would like to permanently delete your account.
          </div>
          <div className={clx('mt-6')}>
            <label className={clx('block text-sm text-gray-700 font-medium')}>
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={data.password}
              autoComplete="password"
              onChange={(e) => setData('password', e.target.value)}
              className={clx('block border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full')}
              required
            />
            <div className={clx('text-sm text-red-600')}>
              {errors.password}
            </div>
          </div>
          <div className={clx('flex gap-2 items-center justify-end mt-6')}>
            <Button
              color="gray"
              size="sm"
              onClick={() => setModal(null)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              color="failure"
              className={clx('ml-4')}
              size="sm"
              disabled={processing}
            >
              Delete Account
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default DeleteUserForm;
