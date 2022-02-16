import Head from 'next/head';

type Prop = {
  title: string,
};

const Seo = ({ title }: Prop) => {
  return (
    <Head>
      <title>{title} | 원아로그, onealog</title>
      <meta name="description" content="원아로그 onealog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
