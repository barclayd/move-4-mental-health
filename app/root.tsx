import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';
import appStyles from './styles/app.css';
import tailwindStyles from './styles/tailwind.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Move 4 Mental Health',
  viewport: 'width=device-width,initial-scale=1',
  keywords: 'M4MH, Move for Mental Health'
});

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Matter-Medium.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Matter-Regular.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
    },
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: appStyles }
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
