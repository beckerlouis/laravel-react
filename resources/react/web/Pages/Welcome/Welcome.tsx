import { Auth, Documentations } from './Components';
import { ApplicationLogo } from '@kit/kit';
import React from 'react';
import style from './page.module.scss';
import Web from '../../Layouts/Web';

const Welcome = () => (
  <div className={style.page}>
    <div className="px-8 sm:pt-10 pb-20 mx-auto max-w-7xl w-full">
      <Auth />
      <ApplicationLogo />
      <Documentations />
    </div>
  </div>
);

Welcome.layout = (page) => <Web>{page}</Web>;

export default Welcome;
