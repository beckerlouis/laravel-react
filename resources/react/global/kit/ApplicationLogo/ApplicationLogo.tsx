import { clx } from '@kit/utils';
import React from 'react';
import style from './component.module.scss';

export const ApplicationLogo = () => (
  <div className={style.component}>
    <a href="https://laravel.com/" target="_blank" rel="noreferrer">
      <img src="/helpers/laravel.svg" className={clx('w-16')} alt=""/>
    </a>
    <div className="text-lg font-bold px-4">+</div>
    <a href="https://fr.legacy.reactjs.org/" target="_blank" rel="noreferrer">
      <img src="/helpers/reactjs.png" className={clx('w-20')} alt=""/>
    </a>
  </div>
);

export default ApplicationLogo;
