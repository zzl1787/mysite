import * as recognizerService from '../../services/Games/recognizer';

export default {
  namespace: 'recognizer',
  state: {
    result: 0,
  },
  reducers: {
    setResult(state, {payload}) {
      return {...state, result: payload};
    },
    clearResult(state) {
      return {...state, result: ''};
    },
  },
  effects: {
    *speculate({payload}, {call, put}) {
      const {data} = yield call(recognizerService.speculateImage,payload);
      yield put({
        type: 'setResult',
        payload: data.result,
      });
    },
  },
};
