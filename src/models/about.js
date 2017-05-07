
export default {
  namespace: 'about',
  state: {
    count: 1,
  },
  reducers: {
    setCount(state, { payload }) {
      return { ...state, count: payload };
    },
  },
};
