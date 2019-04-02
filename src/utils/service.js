import request from 'umi-request';

const api = "https://api.github.com/repos/intVergil/gh-api-blog"

export async function query( url, value ) {
  return request(api + url,{ params: value })
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