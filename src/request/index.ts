import axios from 'axios';
import { configProviderProps } from 'element-plus';

const baseURL = 'http://ec2-3-90-247-48.compute-1.amazonaws.com';

const axiosInstance = axios.create({
  baseURL,
  imeout:5000,
});

export const getPostList = () => axiosInstance.get('/GetAll');
export const createPost = (postData) => axiosInstance.post('/CreatePost', postData);
export const updatePost = (postId, postData) => axiosInstance.put(`/UpdatePost/${postId}`, postData);
export const deletePost = (postId) => axiosInstance.delete(`/DeletePost/${postId}`);

export default axiosInstance;

// //creating an Axios instance
// const service=axios.create({
//   //baseURL:'https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api',
//   baseURL: "http://ec2-3-90-247-48.compute-1.amazonaws.com/",
//   timeout:5000,
//   headers:{
//     "Content-Type":"application/json;charset=utf-8"
//   }
// })

// //Request Interception
// service.interceptors.request.use((config) => {
//   config.headers = config.headers || {}
//   if(localStorage.getItem("token")){
//       config.headers.token = localStorage.getItem("token") || ""
//   }
//   return config
// })

// //响应拦截
// service.interceptors.response.use(({ data }) => {
//   const code : number = data.data.code
//   if(code != 200){
//       return Promise.reject(data)
//   }
//   return data
// },(err) => {
//   console.log(err)
// })

//export default service
