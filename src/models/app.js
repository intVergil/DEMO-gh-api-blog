import router from 'umi/router';

export default {

  namespace: 'app',

  state: {
    loggedIn: false
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if ( pathname.startsWith('/login') ) {
          if(sessionStorage.getItem('admin_token')){
            router.push("/admin")
          }
        }else if ( pathname.startsWith('/admin') ) {
          if(!sessionStorage.getItem('admin_token')){
            router.push("/login")
          }
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
