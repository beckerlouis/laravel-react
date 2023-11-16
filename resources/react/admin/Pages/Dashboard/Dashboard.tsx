import { ModalExample } from './modals';
import Admin from '../../Layouts/Admin';
import { useAppState } from '@kit/contexts';
import { Button } from 'flowbite-react';
import { ReactNode } from 'react';

const Dashboard = () => {
  const { setModal } = useAppState();

  const modalValue = 'modal-example';

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div>
        <div>admin dashboard</div>
        <div className="mt-4">
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

Dashboard.layout = (page: ReactNode) => <Admin>{page}</Admin>;

export default Dashboard;
