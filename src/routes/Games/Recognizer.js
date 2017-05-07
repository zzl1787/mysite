import React from 'react';
import { connect } from 'dva';
import styles from './Recognizer.css';
import RecognizerComponent from '../../components/Games/Recognizer/Recognizer';
import MainLayout from '../../components/MainLayout/MainLayout';

function Recognizer({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <RecognizerComponent />
      </div>
    </MainLayout>
  );
}

export default connect()(Recognizer);
