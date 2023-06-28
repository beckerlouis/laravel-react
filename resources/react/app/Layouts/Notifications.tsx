import { faCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import React, { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePage } from '@inertiajs/react';

const DisplayDuration = 5000;

const Notifications = () => (
  <Fragment>
    <Error/>
    <Success/>
  </Fragment>
);

const Error = () => {
  const [ display, setDisplay ] = useState(false);

  const { flash }: any = usePage().props;

  const { error } = flash;

  useEffect(() => {
    setDisplay(true);
    if (error) {
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, DisplayDuration);
    }
  }, [ flash, error ]);

  if (!error || !display) {
    return <></>;
  }

  return (
    <button
      className="fixed left-0 right-0 bottom-4 flex items-center justify-center z-[100] w-full"
      onClick={() => setDisplay(false)}
    >
      <div
        className="flex items-center bg-black text-black rounded-lg shadow pl-3 pr-4 py-3 mb-4"
        role="alert"
      >
        <div
          className="relative inline-flex shrink-0 items-center justify-center bg-red-100 text-red-500 rounded h-7 w-7">
          <div
            className="animate-ping absolute inline-flex bg-red-400 opacity-75 rounded h-full w-full"></div>
          <FontAwesomeIcon icon={faTriangleExclamation} className="h-4 w-4"/>
        </div>
        <div className="text-sm text-white ml-2">{error}</div>
      </div>
    </button>
  );
};

const Success = () => {
  const [ display, setDisplay ] = useState(false);

  const { flash }: any = usePage().props;

  const { success } = flash;

  useEffect(() => {
    if (success) {
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, DisplayDuration);
    }
  }, [ flash, success ]);

  if (!success || !display) {
    return <></>;
  }

  return (
    <button
      className="fixed left-0 right-0 bottom-4 flex items-center justify-center z-[100] w-full"
      onClick={() => setDisplay(false)}
    >
      <div
        className="flex items-center bg-black text-black rounded-lg shadow pl-3 pr-4 py-3 mb-4"
        role="alert"
      >
        <div
          className="relative inline-flex shrink-0 items-center justify-center bg-green-100 text-green-500 rounded h-7 w-7">
          <span
            className="animate-ping absolute inline-flex bg-green-400 opacity-75 rounded h-full w-full"></span>
          <FontAwesomeIcon icon={faCheck} className="h-4 w-4"/>
        </div>
        <div className="text-sm text-white ml-2">{success}</div>
      </div>
    </button>
  );
};

export default Notifications;
