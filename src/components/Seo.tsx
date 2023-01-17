import Head from "next/head";

interface TitleProp {
  title: string;
}

const Seo = ({ title }: TitleProp) => {
  return (
    <Head>
      <title>{title} | 원아로그, onealog</title>
      <meta name="description" content="원아로그 onealog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
