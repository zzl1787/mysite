import React from 'react';
import styles from './Footer.css';

function Footer() {
  return (
    <div className={styles.normal}>
      <div>
        <hr />
        Copyright @copy 2006-2017 all rights reserved<br />
        联系方式：zzl1787@gmail.com<br />
        ICP: <a href="http://www.miitbeian.gov.cn/">湘ICP备05021949</a>
      </div>
    </div>
  );
}

export default Footer;
