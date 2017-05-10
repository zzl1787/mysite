import * as recognizerService from '../../services/Games/recognizer';

export default {
  namespace: 'recognizer',
  state: {
    clear: false,
    image: "",
    result: 0,
  },
  reducers: {
    setResult(state, {payload}) {
      return {...state, result: payload};
    },
  },
  effects: {
    *speculate({payload}, {call, put}) {
      const {data} = yield call(recognizerService.speculateImage);
      yield put({
        type: 'setResult',
        payload: data.result,
      });
    },
  },
};
