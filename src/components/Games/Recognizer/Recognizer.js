import React from 'react';
import {Button} from 'antd';
import {connect} from 'dva';
import SketchPad from './SketchPad'

function Recognizer(props) {

  let pad;

  function testHandler() {
    let image = pad.getImage();
    // console.log(image);
    let data = new FormData();
    data.append('key','test');
    data.append('file', image);
    console.log(data);
    props.dispatch({
      type: 'recognizer/speculate',
      payload: data,
    });
  }

  function clearHandler() {
    pad.clear();
  }

  return (
    <div >
      <SketchPad ref={(node) => pad = node}/>
      <h1>result: {props.result}</h1>
      <div>
        <Button type="primary" onClick={clearHandler}>重写</Button>
        <Button type="primary" onClick={testHandler}>尝试一下</Button>
      </div>
    </div>
  );

}

export default connect(({recognizer}) => ({
  clear: recognizer.clear,
  image: recognizer.image,
  result: recognizer.result,
}))(Recognizer);

