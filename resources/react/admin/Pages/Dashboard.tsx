import Admin from '../Layouts/Admin';
import React from 'react';

const Dashboard = () => (
  <div className="flex items-center justify-center h-full w-full">
    dashboard admin
  </div>
);

Dashboard.layout = (page) => <Admin>{page}</Admin>;

export default Dashboard;
