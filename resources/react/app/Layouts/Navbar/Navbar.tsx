import { Link, usePage } from '@inertiajs/react';
import { Menu, Transition } from '@headlessui/react';
import { clx } from '@kit/utils';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PageProps } from '@kit/types';
import React from 'react';
import style from './component.module.scss';

export const Navbar = () => {
  const { auth } = usePage<PageProps>().props;

  const userMenu: any = [
    {
      name: 'Profile',
      route: route('profile'),
    },
    {
      name: 'Administration',
      link: '/admin',
    },
    {
      name: 'Go to Website',
      link: '/',
    },
    {
      name: 'Log Out',
      route: route('logout'),
    },
  ];

  return (
    <nav className={style.component}>
      <div className={clx('flex items-center justify-between h-24')}>
        <Link href={route('app')} className={clx('flex items-center justify-center')}>
          <img src="/helpers/laravel.svg" className={clx('w-8')} alt=""/>
          <div className="font-bold px-4">+</div>
          <img src="/helpers/reactjs.png" className={clx('w-10')} alt=""/>
        </Link>
        <div className={clx('ml-3 relative')}>
          <Menu as="div" className={clx('relative inline-block text-left')}>
            <div>
              <Menu.Button
                className={clx('inline-flex items-center justify-center text-sm text-gray-600 font-medium rounded-md w-full')}>
                {auth?.user?.name}
                <FontAwesomeIcon icon={faAngleDown} className={clx('ml-2 -mr-1')}/>
              </Menu.Button>
            </div>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className={clx('absolute right-0 bg-white origin-top-right divide-y divide-gray-100 rounded-md shadow-lg mt-2 w-40')}>
                <div className={clx('px-1 py-1')}>
                  {userMenu.map((menu: { link: string; route: string; name: string; }, idx: number) => (
                    <Menu.Item key={idx}>
                      {({ active }) => (
                        <>
                          {menu.link ? (
                            <a
                              href={menu.link}
                              className={clx('flex items-center text-sm text-gray-900 group rounded-md px-2 py-2 w-full', (active && 'bg-gray-100'))}
                            >
                              {menu.name}
                            </a>
                          ) : (
                            <Link
                              href={menu.route}
                              className={clx('flex items-center text-sm text-gray-900 group rounded-md px-2 py-2 w-full', (active && 'bg-gray-100'))}
                            >
                              {menu.name}
                            </Link>
                          )}
                        </>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
