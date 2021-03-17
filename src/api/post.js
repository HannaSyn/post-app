import axios from 'axios';
import config from '../../api.config';

export default {
  index () {
    return axios.get(`${config.domen}/posts`);
  },

  update ( params, id ) {
    return axios.put(`${config.domen}/posts/${id}`, params);
  },

  delete ( id ) {
    return axios.delete(`${config.domen}/posts/${id}`);
  },

  create (params) {
    return axios.post(`${config.domen}/posts/`, params);
  }
}
