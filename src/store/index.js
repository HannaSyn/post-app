import Vue from "vue";
import Vuex from "vuex";
import post from "@/store/modules/post";
import comments from "@/store/modules/comments";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    post,
    comments
  }
});
