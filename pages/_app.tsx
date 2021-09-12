import { AppProps } from 'next/dist/shared/lib/router/router';
import Layout from '@components/common/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
