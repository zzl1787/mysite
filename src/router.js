import React from 'react';
import {Router} from 'dva/router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({history, app}) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/IndexPage'));
        });
      },
    },
    {
      path: '/about',
      name: 'AboutPage',
      getComponent(nextState, cb) {
        registerModel(app, require('./models/about'));
        require.ensure([], (require) => {
          cb(null, require('./routes/About'));
        });
      },
    },
    {
      path: '/recognizer',
      name: 'RecognizerPage',
      getComponent(nextState, cb) {
        registerModel(app, require('./models/Games/recognizer'));
        require.ensure([], (require) => {
          cb(null, require('./routes/Games/Recognizer'));
        });
      },
    },
    {
      path: '/users',
      name: 'UsersPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/users'));
          cb(null, require('./routes/Users'));
        });
      },
    },
  ];

  return <Router history={history} routes={routes}/>;
}

export default RouterConfig;
