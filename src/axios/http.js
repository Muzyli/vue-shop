/* eslint-disable */
import axios from 'axios';

const Service = axios.create({
  timeout: 7000, // 请求超时时间
  baseURL: 'http://localhost:8080/',
  method: 'post',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

Service.interceptors.response.use(
  // 请求成功
  (res) => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // 请求失败
  error => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    }
  });

  export default Service;