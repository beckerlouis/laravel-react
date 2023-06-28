import React from 'react';
import './footer.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center text-sm text-gray-700 py-8">
      <div className="text-left">&copy; {currentYear} - Laravel React</div>
    </footer>
  );
};

export default Footer;
