import { Dialog, Transition } from '@headlessui/react';
import { Button } from 'flowbite-react';
import { clx } from '@kit/utils';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './component.module.scss';
import { useAppState } from '@kit/contexts';

type ModalProps = {
  title?: string;
  width?: (typeof ModalWidth)[keyof typeof ModalWidth];
  children: React.ReactNode;
  value: string;
};

export const ModalWidth = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  full: 'max-w-full',
};

export const Modal = ({ title, width = 'max-w-md', children, value }: ModalProps) => {
  const { modal, setModal } = useAppState();

  return (
    <Transition appear show={value === modal} as={React.Fragment}>
      <Dialog as="div" className={style.component} onClose={() => setModal(null)}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={style.backdrop} />
        </Transition.Child>
        <div className={style.content}>
          <div className={style.wrapper}>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={clx(style.panel, width)}>
                {title && (
                  <div className={style.header}>
                    <Dialog.Title className={style.title}>{title}</Dialog.Title>
                    <Button className={style.close} onClick={() => setModal(null)}>
                      <FontAwesomeIcon icon={faTimes} />
                    </Button>
                  </div>
                )}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
