import { useAppState } from '@kit/contexts';
import { Modal } from '@kit/kit';
import { Button } from 'flowbite-react';

export const ModalExample = ({ value }: { value: string }) => {
  const { setModal } = useAppState();

  return (
    <Modal value={value} width={'max-w-[550px]'}>
      <div className="flex flex-col gap-6 px-8 py-6">
        <div className="flex flex-col gap-4">
          <div className="text-xl font-medium">
              Modal Example Title
          </div>
          <div className="text-sm text-gray-600">
              Modal Example Description
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
        </div>
      </div>
    </Modal>
  );
};
