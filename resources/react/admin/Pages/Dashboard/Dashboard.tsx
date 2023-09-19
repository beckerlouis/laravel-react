import Admin from '../../Layouts/Admin';
import React from 'react';
import style from './page.module.scss';

const Dashboard = () => (
  <div className={style.page}>
    dashboard admin
  </div>
);

Dashboard.layout = (page) => <Admin>{page}</Admin>;

export default Dashboard;
