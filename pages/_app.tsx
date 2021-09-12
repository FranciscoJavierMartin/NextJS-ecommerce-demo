import { FC } from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import 'tailwindcss/tailwind.css';
import '@assets/main.css';

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
