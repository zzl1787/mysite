import React from 'react';
import {Button} from 'antd';
import {connect} from 'dva';
import SketchPad from './SketchPad'
import styles from './Recognizer.css';

function Recognizer(props) {

  let pad;

  function testHandler() {
    let image = pad.getImage();
    let formData = new FormData();
    formData.append('the_image', image, 'test.png');
    props.dispatch({
      type: 'recognizer/speculate',
      payload: formData,
    });
  }

  function clearHandler() {
    props.dispatch({
      type: 'recognizer/clearResult',
    });
    pad.clear();
  }

  return (
    <div className={styles.whole}>
      <SketchPad ref={(node) => pad = node}/>
      <h3>我猜你写的数字是:  {props.result}</h3>
      <div>
        <Button type="danger" onClick={clearHandler} className={styles.clear}>重写</Button>
        <Button type="primary" onClick={testHandler} className={styles.test}>尝试一下</Button>
      </div>
    </div>
  );

}

export default connect(({recognizer}) => ({
  result: recognizer.result,
}))(Recognizer);

