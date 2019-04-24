import services from '../services/index';

export default {
  namespace: 'agents',
  state: {
    data: [],
    type: 'all'
  },

  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname}) => {
        console.log(pathname)
        dispatch({
          type: 'update',
          payload: {
            pathName: pathname
          }
        })
        if (pathname === '/agents') {
          dispatch({type: 'fetchOrderList'});
        }
      });
    },
  },
  effects: {
    * update({ payload }, { put }) {
      yield put({ type: 'save', payload });
    },
    *fetchOrderList({ payload }, { call, put }) {
      yield call(services.agents.query);
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
