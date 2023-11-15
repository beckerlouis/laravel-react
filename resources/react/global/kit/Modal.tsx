import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Transition } from '@headlessui/react';
import { useAppState } from '@kit/contexts';
import clsx from 'clsx';
import { Fragment, ReactNode } from 'react';

type ModalProps = {
  value: string;
  width: string;
  children: ReactNode;
};

export const Modal = ({ width, children, value }: ModalProps) => {
  const { modal, setModal } = useAppState();

  return (
    <Transition appear show={value === modal} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={() => setModal(null)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>
        <div className="fixed inset-0 mx-4 overflow-y-auto">
          <div
            className={clsx(
              'mx-auto flex min-h-full items-center justify-center text-center',
              width,
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex w-full transform flex-col rounded-lg bg-white text-left align-middle shadow-xl transition-all">{children}</Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const Padding = ({ children }: { children: ReactNode }) => (
  <div className="h-full w-full p-6">{children}</div>
);

const Header = ({ title }: { title: string }) => {
  const { setModal } = useAppState();

  return (
    <div className="relative flex w-full items-center justify-between">
      <Dialog.Title className="text-2xl">{title}</Dialog.Title>
      <button
        className="flex h-[36px] hover:bg-app-gray-150 w-[36px] items-center justify-center rounded-[4px] transition duration-150"
        onClick={() => setModal(null)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};

const Content = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col gap-6">{children}</div>
);

Modal.Padding = Padding;
Modal.Header = Header;
Modal.Content = Content;
