import api from '@/api/comments';

const state = {
  comments: [],
  commentsLoaded: false,
};

const getters = {
  comments(state) {
    return state.comments;
  },

  commentsLoaded(state) {
    return state.commentsLoaded;
  },
};

const mutations = {
  setComments(state, comments) {
    state.comments = comments;
  },
  setCommentsLoaded(state, commentsLoaded) {
    state.commentsLoaded = commentsLoaded;
  }
};

const actions = {
  fetchComments (context, postId) {
    api.index(postId).then(function (response) {
      context.commit('setComments', response.data);
      context.commit('setCommentsLoaded', true);
    })
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};