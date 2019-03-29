import request from 'umi-request';

export async function query(url,value) {
  return request(url,{ params: value })
}

// import axios from 'axios'

// export async function query() {
//   return  (
//     axios.get('/api/article')
//     .then(function (response) {
//       const { data } = response;
//       return data
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//   )
// }