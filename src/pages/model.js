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
    setup({ dispatch }) {
      dispatch({ type: 'fetch' });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const data = yield call(blogService.query, '/issues' );
      const labels = yield call(blogService.query, '/labels' );
      labels.forEach(l => l.count = 0)
      data.forEach(a => a.labels.forEach( b => labels.forEach( c => b.name === c.name && c.count ++ )))
      const years = Array.from(new Set(data.map( d => moment(d.updated_at).format('YYYY') )))
      const yearsData = years.map(x => Object.assign({year:x, count:data.filter( d => moment(d.updated_at).format('YYYY') === "2019" ).length}));
      yield put({ type: 'save' , 
        payload: { 
          articles: data, 
          yearsData:yearsData, 
          labels: labels 
        }
      });
    },
    
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
  