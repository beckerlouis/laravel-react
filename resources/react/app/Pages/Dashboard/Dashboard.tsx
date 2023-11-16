import App from '../../Layouts/App';
import { Card } from '../components';
import { ReactNode } from 'react';

const Dashboard = () => (
  <Card>
    <h2 className="text-xl text-gray-800 font-semibold leading-tight">App</h2>
  </Card>
);

Dashboard.layout = (page: ReactNode) => <App>{page}</App>;

export default Dashboard;
