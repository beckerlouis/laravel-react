import React from 'react';

export default function ApplicationLogo() {
  return (
    <div className="flex space-x-6 items-center justify-center">
      <a href="https://laravel.com/" target="_blank" rel="noreferrer">
        <img src="/helpers/laravel.svg" className="w-16" alt=""/>
      </a>
      <div className="text-lg font-bold px-4">+</div>
      <a href="https://fr.legacy.reactjs.org/" target="_blank" rel="noreferrer">
        <img src="/helpers/reactjs.png" className="w-20" alt=""/>
      </a>
    </div>
  );
}
