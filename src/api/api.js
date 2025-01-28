// import axios from "axios";
// import config from "@/config/config";

// const api= axios.create({
//     baseURL: config.apiUrl,
// });

import config from "@/config/config";
import axios from "axios";

const api = axios.create({
  baseURL: config.apiUrl,
});
export default api;