// import axios from "axios";
// import { getAuth } from "firebase/auth";

// const instance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
// });

// instance.interceptors.request.use(
//   async (config) => {
//     const user = getAuth().currentUser;
//     if (user) {
//       const token = await user.getIdToken();
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// instance.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response && err.response.status === 401) {
//       window.location.href = "/login";
//     }
//     return Promise.reject(err);
//   }
// );

// export default instance;
