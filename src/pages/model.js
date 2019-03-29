import * as blogService from 'utils/service';
import moment from 'moment';

export default {
  namespace: 'blog',

  state: {
    articles:[],
    labels:[],
    yearsData:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        dispatch({ type: 'fetch' });
        dispatch({ type: 'fetch_labels' });
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const data = yield call(blogService.query, '/api/issues' );
      const years = Array.from(new Set(data.map( d => moment(d.updated_at).format('YYYY') )))
      const yearsData = years.map(x => Object.assign({year:x, count:data.filter( d => moment(d.updated_at).format('YYYY') === "2019" ).length}));
      yield put({ type: 'save' , 
        payload: { articles: data, yearsData:yearsData }
      });
    },

    *fetch_labels({ payload }, { call, put }) {
      const labels = yield call(blogService.query, '/api/labels' );
      yield put({ type: 'save' , 
        payload: { labels: labels }
      });
    },
    
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
  