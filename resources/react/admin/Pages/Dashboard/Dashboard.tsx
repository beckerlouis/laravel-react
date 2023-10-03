import Admin from '../../Layouts/Admin';
import { Button } from 'flowbite-react';
import { clx } from '@kit/utils';
import ModalExample from './Modals/ModalExample';
import React from 'react';
import style from './page.module.scss';
import { useAppState } from '@kit/contexts';

const Dashboard = () => {
  const { setModal } = useAppState();

  const modalValue = 'modal-example';

  return (
    <div className={style.page}>
      <div>
        <div>admin dashboard</div>
        <div className={clx('mt-4')}>
          <Button
            color="gray"
            size="sm"
            onClick={() => setModal(modalValue)}
          >
            Modal Example
          </Button>
          <ModalExample value={modalValue}/>
        </div>
      </div>
    </div>
  );
};

Dashboard.layout = (page) => <Admin>{page}</Admin>;

export default Dashboard;
