import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import { Link, usePage } from '@inertiajs/react';
import { PageProps } from '@kit/types';
import { Fragment } from 'react';

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
    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-24">
        <Link href={route('app')} className="flex items-center justify-center">
          <img src="/helpers/laravel.svg" className="w-8" alt="" />
          <div className="font-bold px-4">+</div>
          <img src="/helpers/reactjs.png" className="w-10" alt="" />
        </Link>
        <div className="ml-3 relative">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className="inline-flex items-center justify-center text-sm text-gray-600 font-medium rounded-md w-full">
                {auth?.user?.name}
                <FontAwesomeIcon icon={faAngleDown} className="ml-2 -mr-1" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className="absolute right-0 bg-white origin-top-right divide-y divide-gray-100 rounded-md shadow-lg mt-2 w-40">
                <div className="px-1 py-1">
                  {userMenu.map((menu: { link: string; route: string; name: string; }, idx: number) => (
                    <Menu.Item key={idx}>
                      {menu.link ? (
                        <a
                          href={menu.link}
                          className="flex items-center text-sm text-gray-900 group rounded-md px-2 py-2 w-full', (active && 'bg-gray-100"
                        >
                          {menu.name}
                        </a>
                      ) : (
                        <Link
                          href={menu.route}
                          className="flex items-center text-sm text-gray-900 group rounded-md px-2 py-2 w-full', (active && 'bg-gray-100"
                        >
                          {menu.name}
                        </Link>
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
