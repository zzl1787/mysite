import React from 'react';
import { connect } from 'dva';

function About(props) {
  return (
    <div >
      <h1>{ props.count }</h1>
      <h1>this is my about page !</h1>
    </div>
  );
}

export default connect(({ about }) => ({
  count: about.count,
}))(About);
