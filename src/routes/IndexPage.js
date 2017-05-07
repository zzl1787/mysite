import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';

function IndexPage({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <h1 className={styles.title}>Hi!   Welcome to zhaozhe’s site!</h1>
        <br />
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li><Link to="/about">Getting Started</Link></li>
        </ul>
      </div>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
