import App from '../../Layouts/App';
import { Card } from './../Components';
import { clx } from '@kit/utils';
import React from 'react';
import style from './page.module.scss';

const Dashboard = () => (
  <div className={style.page}>
    <Card>
      <h2 className={clx('text-xl text-gray-800 font-semibold leading-tight')}>App</h2>
    </Card>
  </div>
);

Dashboard.layout = (page) => <App>{page}</App>;

export default Dashboard;
