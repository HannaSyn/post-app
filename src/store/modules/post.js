import api from '@/api/post';

const state = {
  posts: []
};

const getters = {
  posts(state) {
    return state.posts;
  }
};

const mutations = {
  setPost(state, posts) {
    state.posts = posts;
  },
  editPost(state, post) {
    state.posts.map((el) => {
      if (el.id === post.id) {
        el.title = post.title;
        el.body = post.body;
      }

      return el;
    })
  },
  deletePost(state, id) {
    const index = state.posts.findIndex(el => el.id === id);
    state.posts.splice(index, 1);
  },
  addPost (state, post) {
    state.posts.push(post);
  },
};

const actions = {
  fetchPosts (context) {
    api.index().then(function (response) {
      context.commit('setPost', response.data);
    })
  },
  editPost (context, params) {
    api.update(params, params.id).then(function (response) {
      context.commit('editPost', response.data);
    })
  },
  deletePost (context, id) {
    api.delete(id).then(function () {
      context.commit('deletePost', id);
    })
  },
  createPost (context, params) {
    api.create(params).then(function (response) {
      context.commit('addPost', response.data);
    })
  },
};

export default {
  state,
  mutations,
  getters,
  actions
};
