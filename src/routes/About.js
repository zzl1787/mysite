import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import AboutComponent from '../components/About/About';
import MainLayout from '../components/MainLayout/MainLayout';

function About({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <AboutComponent />
      </div>
    </MainLayout>
  );
}

export default connect()(About);
