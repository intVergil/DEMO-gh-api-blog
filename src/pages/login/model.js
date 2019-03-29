// import { login } from './service';
import { message } from 'antd';
import router from 'umi/router';

export default {
  namespace: 'loginToAdmin',
  state: {},
  subscriptions: {},
  effects: {

    * admin_login({ payload }, { select }) {
      yield select(state=>state)
      if (payload.username === 'admin' && payload.password === '123456'){
        const token = 'cd534924c12561de4eb948531a7fdeb9';
        sessionStorage.setItem("admin_token", token);
        router.push('/admin');
      } else {
        message.error("用户名或密码不正确");
      }
    },
  },
  reducers: {},
};