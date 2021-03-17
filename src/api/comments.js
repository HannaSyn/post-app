import axios from "axios";
import config from "../../api.config";

export default {
  index(postId) {
    return axios.get(`${config.domen}/posts/${postId}/comments`);
  }
};
