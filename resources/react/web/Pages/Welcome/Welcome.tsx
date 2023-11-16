import { Auth, Documentations } from './components';
import style from './page.module.scss';
import Web from '../../Layouts/Web';
import { ApplicationLogo } from '@kit/kit';
import { ReactNode } from 'react';

const Welcome = () => (
  <div className={style.page}>
    <div className="px-8 sm:pt-10 pb-20 mx-auto max-w-7xl w-full">
      <Auth />
      <ApplicationLogo />
      <Documentations />
    </div>
  </div>
);

Welcome.layout = (page: ReactNode) => <Web>{page}</Web>;

export default Welcome;
