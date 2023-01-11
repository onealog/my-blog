import type { AppProps } from 'next/app';
import '../styles/input.css';

import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        hr {
          border: 0 solid #eaeaea;
          border-top-width: 1px;
        }

        ul {
          margin: 0px;
          padding: 0px;
        }

        li {
          list-style: none;
        }

        ::selection {
          background: #d7f7ff;;
        }

        ::-moz-selection {
          background: #d7f7ff;;
        }
      `}</style>
    </Layout>
  );
};

export default MyApp;
