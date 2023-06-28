import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import route from '../../../vendor/tightenco/ziggy';

createServer((page) => createInertiaApp({
  page,
  render: ReactDOMServer.renderToString,
  title: (title) => `${title}`,
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.tsx`,
    import.meta.glob('./Pages/**/*.tsx'),
  ),
  setup: ({ App, props }) => {
    global.route = (name, params, absolute) => route(name, params, absolute, {
      ...page.props.ziggy,
      location: new URL(page.props.ziggy.location),
    });

    return <App {...props} />;
  },
}));
