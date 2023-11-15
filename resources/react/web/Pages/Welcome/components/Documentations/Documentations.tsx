import style from './component.module.scss';
import { faNpm } from '@fortawesome/free-brands-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';

export const Documentations = () => {
  const documentation = [
    {
      name: 'Package.json',
      description: 'Installed in the project\'s package.json:',
      icon: faNpm,
      list: [
        [
          {
            name: 'react',
            url: 'https://www.npmjs.com/package/react',
          },
          {
            name: 'vite',
            url: 'https://www.npmjs.com/package/vite',
          },
          {
            name: 'sass',
            url: 'https://www.npmjs.com/package/sass',
          },
          {
            name: 'moment',
            url: 'https://www.npmjs.com/package/moment',
          },
          {
            name: 'inertiajs',
            url: 'https://www.npmjs.com/package/@inertiajs/react',
          },
        ],
        [
          {
            name: 'tailwindcss',
            url: 'https://www.npmjs.com/package/tailwindcss',
          },
          {
            name: 'typography',
            url: 'https://www.npmjs.com/package/@tailwindcss/typography',
          },
          {
            name: 'forms',
            url: 'https://www.npmjs.com/package/@tailwindcss/typography',
          },
        ],
        [
          {
            name: 'headlessui',
            url: 'https://www.npmjs.com/package/@headlessui/react',
          },
          {
            name: 'flowbite',
            url: 'https://www.npmjs.com/package/@headlessui/react',
          },
          {
            name: 'flowbite-react',
            url: 'https://www.npmjs.com/package/@headlessui/react',
          },
        ],
        {
          name: 'react-fontawesome',
          url: 'https://www.npmjs.com/package/react-fontawesome',
        },
        [
          {
            name: 'eslint',
            url: 'https://www.npmjs.com/package/eslint',
          },
          {
            name: 'typescript',
            url: 'https://www.npmjs.com/package/typescript',
          },
        ],
      ],
    },
    {
      name: 'Composer.json',
      description: 'Installed in the project\'s composer.json:',
      image: {
        src: '/helpers/composer.png',
        className: 'w-8',
      },
      list: [
        [
          {
            name: 'breeze',
            url: 'https://packagist.org/packages/laravel/breeze',
          },
          {
            name: 'pint',
            url: 'https://packagist.org/packages/laravel/pint',
          },
          {
            name: 'sail',
            url: 'https://packagist.org/packages/laravel/sail',
          },
          {
            name: 'sanctum',
            url: 'https://packagist.org/packages/laravel/sanctum',
          },
          {
            name: 'tinker',
            url: 'https://packagist.org/packages/laravel/tinker',
          },
        ],
        {
          name: 'inertia-laravel',
          url: 'https://packagist.org/packages/inertiajs/inertia-laravel',
        },
        {
          name: 'tightenco/ziggy',
          url: 'https://packagist.org/packages/tightenco/ziggy',
        },
        {
          name: 'barryvdh/laravel-ide-helper',
          url: 'https://packagist.org/packages/barryvdh/laravel-ide-helper',
        },
      ],
    },
    {
      name: 'ESLint',
      // eslint-disable-next-line max-len
      description: `
        To activate ESLint on PhpStorm :
        <br>
        <span class="font-bold">Settings</span> >
        <span class="font-bold">Languages & Frameworks</span> >
        <span class="font-bold">JavaScript</span> >
        <span class="font-bold">Code Quality Tools</span> >
        <span class="font-bold">ESLint</span>
        <br>
        <ul class="list-disc list-inside">
          <li>Check "Automatic ESLint configuration"</li>
          <li>Fill <code class="text-xs">{**/*,*}.{js,ts,jsx,tsx,html,vue}</code> in "Run for files"</li>
          <li>Check "Run eslint --fix on save</li>
          <li>Apply and Save</li>
        </ul>
        <br>
        <span>Linter commands :</span>
        <ul class="list-disc list-inside">
          <li><code class="text-xs">npm run lint</code></li>
          <li><code class="text-xs">npm run pre-commit</code></li>
        </ul>
      `,
      image: {
        src: '/helpers/eslint.png',
        className: 'w-8',
      },
    },
    {
      name: 'Sitemap',
      description: `
        Views are organized as follows:
        <div class="grid grid-cols-2 mt-4 w-full">
          <ul class="sitemap">
            <li>
              <div class="first">resources</div>
              <ul>
                <li>
                  <div>react</div>
                  <ul>
                    <li>
                      <div><a href="/app" class="underline">app</a></div>
                      <ul>
                        <li><div>Layouts</div></li>
                        <li><div>Pages</div></li>
                      </ul>
                    </li>
                    <li>
                      <div><a href="/" class="underline">web</a></div>
                      <ul>
                        <li><div>Layouts</div></li>
                        <li>
                          <div>Pages</div>
                          <ul>
                            <li><div>Auth</div></li>
                            <li><div>...</div></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="sitemap">
            <li>
              <div class="first">app</div>
              <ul>
                <li>
                  <div>Http</div>
                  <ul>
                    <li>
                      <div>Controllers</div>
                      <ul>
                        <li>
                          <div>App</div>
                          <ul>
                            <li><div>Account</div></li>
                          </ul>
                        </li>
                        <li>
                          <div>Web</div>
                          <ul>
                            <li><div>Auth</div></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      `,
      icon: faSitemap,
    },
  ];

  return (
    <div className={style.component}>
      {documentation?.map((doc, idx) => (
        <Documentation doc={doc} key={idx}/>
      ))}
    </div>
  );
};
const Documentation = ({ doc }: any) => (
  <div className={style.row}>
    <div>
      <div className="flex items-center justify-center bg-red-50 rounded-full h-16 w-16">
        {doc.icon ? (
          <FontAwesomeIcon icon={doc.icon} className="text-red-500 h-7 w-7"/>
        ) : (
          <img src={doc.image.src} className={doc.image.className} alt=""/>
        )}
      </div>
      <div className="text-xl font-semibold mt-6">{doc.name}</div>
      <div className="text-sm text-gray-500 leading-relaxed mt-4">
        <div dangerouslySetInnerHTML={{ __html: doc.description }}/>
        <ul className="list-disc list-inside">
          {doc.list?.map((item, idx) => (
            <li key={idx}>
              {item.length > 0 ? (
                <Fragment>
                  {item.map((subItem, idx) => <a
                    href={subItem.url}
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                    key={idx}>
                    {subItem.name}
                  </a>)
                    .reduce((acc, x) => acc === null ? [ x ] : [ acc, ', ', x ], null)}
                </Fragment>
              ) : (
                <a
                  href={item.url}
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
