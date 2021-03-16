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
  }
};

const actions = {
  async fetchPosts(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await response.json();
    context.commit('setPost', posts);
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
