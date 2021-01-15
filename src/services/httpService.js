import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";
//You can intercept requests or responses before they are handled by then or catch.
axios.interceptors.response.use(null, error => {
  //// Do something with response data
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    //console.log("Logging the error", error);
    logger.log(error);
    toast.error("an unexpected error occured");
  }

  return Promise.reject(error);
});
function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
