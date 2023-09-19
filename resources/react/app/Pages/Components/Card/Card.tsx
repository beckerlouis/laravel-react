import React from 'react';
import style from './component.module.scss';

export const Card = ({ children }: any) => (
  <div className={style.component}>{children}</div>
);

export default Card;
