import { useForm } from '@inertiajs/react';
import { useAppState } from '@kit/contexts';
import { Form, Modal } from '@kit/kit';
import { Button } from 'flowbite-react';
import { useRef } from 'react';

export const ModalDeleteUser = () => {
  const { setModal } = useAppState();

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({ password: '' });

  const passwordInput = useRef<HTMLInputElement>();

  const handleClose = () => {
    setModal(null);

    reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    destroy(route('profile.destroy'), {
      preserveScroll: true,
      onSuccess: () => handleClose(),
      onError: () => passwordInput.current?.focus(),
      onFinish: () => reset(),
    });
  };

  return (
    <Modal value={'modal-delete-account'} width={'max-w-[550px]'}>
      <Form
        data={data}
        setData={setData}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-6 px-8 py-6">
          <div className="flex flex-col gap-4">
            <div className="text-xl font-medium">
              Are you sure you want to delete your account?
            </div>
            <div className="text-sm text-gray-600">
              Once your account is deleted, all of its resources and data will be permanently deleted. Please
              enter your password to confirm you would like to permanently delete your account.
            </div>
          </div>
          <div>
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
          <div className="flex gap-2 items-center justify-end">
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
              className="ml-4"
              size="sm"
              disabled={processing}
            >
              Delete Account
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  );
};
