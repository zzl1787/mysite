import React from 'react';
import { Button } from 'antd';
import { connect } from 'dva';

function Recognizer(props) {
  function clickHandler() {
    props.dispatch({
      type: 'recognizer/speculate',
    });
  }
  return (
    <div >
      <h1>this is a recognizer !</h1>
      <h1>result: {props.result}</h1>
      <Button type="primary" onClick={clickHandler}>尝试一下</Button>
    </div>
  );
}

export default connect(({ recognizer }) => ({
  result: recognizer.result,
}))(Recognizer);

