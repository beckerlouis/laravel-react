import React from 'react';
import style from './component.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={style.component}>
      <div className="text-left">&copy; {currentYear} - Laravel React</div>
    </footer>
  );
};

export default Footer;
