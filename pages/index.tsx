import type { NextPage } from 'next';

import Seo from '../components/Seo';
import Home from '../components/Home';
import styles from '../styles/Home.module.css';

const home: NextPage = () => {
  return (
    <>
      <Seo title="Home" />
      <Home />
    </>
  )
}

export default home;
