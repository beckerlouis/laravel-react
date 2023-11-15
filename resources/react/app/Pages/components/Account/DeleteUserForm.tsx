import { ModalDeleteUser } from '../modals';
import { useAppState } from '@kit/contexts';
import { Button } from 'flowbite-react';

export const DeleteUserForm = () => {
  const { setModal } = useAppState();

  return (
    <section className="max-w-xl space-y-6">
      <header>
        <h2 className="text-lg font-medium text-gray-900">Delete Account</h2>
        <div className="text-sm text-gray-600 mt-1">
            Once your account is deleted, all of its resources and data will be permanently deleted. Before
            deleting your account, please download any data or information that you wish to retain.
        </div>
      </header>
      <Button
        color="failure"
        size="sm"
        onClick={() => setModal('modal-delete-account')}
      >
          Delete Account
      </Button>
      <ModalDeleteUser />
    </section>
  );
};
