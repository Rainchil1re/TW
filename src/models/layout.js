export default {
  namespace: 'layout',
  state: {
    data: []
  },

  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname}) => {
        dispatch({
          type: 'update',
          payload: {
            pathName: pathname
          }
        })
      });
    },
  },
  effects: {
    * update({ payload }, { put }) {
      yield put({ type: 'save', payload });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
