import * as blogService from 'utils/service';

export default {
  namespace: 'article',

  state: {
    article:null,
    comments:[],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if ( pathname.startsWith('/blog') ) {
            document.body.scrollIntoView()
            dispatch({ type: 'fetch_by_id', payload:pathname.split("/")[2]});
        }
      });
    },
  },

  effects: {
    *fetch_by_id({ payload }, { call, put }) {
      const articleurl = `/api/issues/${payload}`
      const article = yield call(blogService.query,articleurl);
      const commentsurl = `${articleurl}/comments`
      const comments = yield call(blogService.query,commentsurl);
      yield put({ type: 'save' , 
        payload: { article: article, comments: comments }
      });
    },

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
  