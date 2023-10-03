import { Modal, ModalWidth } from '@kit/kit';
import { Button } from 'flowbite-react';
import { clx } from '@kit/utils';
import React from 'react';
import { useAppState } from '@kit/contexts';

export const ModalExample = ({ value }: { value: string }) => {
  const { setModal } = useAppState();

  return (
    <Modal
      title="Modal Example Title"
      width={ModalWidth.xl}
      value={value}
    >
      <div className={clx('px-6 py-4')}>
          Modal Example Content
      </div>
      <div className={clx('flex items-center justify-end space-x-2 border-t border-admin-subdued-active px-6 py-4')}>
        <Button
          color="gray"
          size="sm"
          onClick={() => setModal(null)}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default ModalExample;
