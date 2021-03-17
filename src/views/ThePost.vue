<template>
  <div class="post">
    <v-container fluid class="container">
      <div class="post__item">
        <div v-if="!editable">
          <p class="post__title content">{{ item.title }}</p>
          <p class="post__body content">{{ item.body }}</p>
        </div>

        <div v-else>
          <v-text-field
            :error-messages="titleErrors"
            v-model="post.title"
            label="Title"
            required
          ></v-text-field>

          <v-textarea
            v-model="post.body"
            :error-messages="bodyErrors"
            label="Post"
            required
            clearable
            clear-icon="mdi-close-circle"
          ></v-textarea>
        </div>

        <v-btn v-if="!editable" class="mr-4" @click="editable = true">
          edit
        </v-btn>
        <v-btn v-if="editable" class="mr-4" @click="editItem">
          submit
        </v-btn>
        <v-btn @click="deleteItem">
          delete
        </v-btn>
      </div>
      <div class="comments" v-if="commentsLoaded">
        <Comment
          v-for="comment in comments"
          :key="comment.id"
          :comment="comment"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import postValidation from "@/mixins/postValidation";
import Comment from "@/components/Comment";
import { mapGetters, mapActions } from "vuex";

export default {
  mixins: [postValidation],
  data() {
    return {
      post: {
        title: "",
        body: ""
      },
      item: null,
      editable: false
    };
  },
  computed: {
    ...mapGetters(["posts", "comments", "commentsLoaded"])
  },
  methods: {
    ...mapActions(["fetchComments", "editPost", "deletePost"]),
    deleteItem() {
      this.deletePost(this.item.id);
      setTimeout(() => {
        this.$router.push("/");
      }, 500);
    },
    editItem() {
      if (this.valid()) {
        this.post.id = this.item.id;
        this.editPost(this.post);
        this.editable = false;
      }
    }
  },
  created() {
    const postId = this.$route.params.id;
    this.item = this.posts.find(element => element.id == postId);
    this.fetchComments(postId);
    this.post = Object.assign({}, this.item);
  },
  components: {
    Comment
  }
};
</script>

<style lang="scss">
.post {
  // .post__item

  &__item {
    background-color: #33333d;
    padding: 20px;
  }

  // .post__title

  &__title {
    position: relative;
    padding: 0 0 0 15px;
    font-size: 22px;
    font-weight: 700;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 3px;
      width: 5px;
      height: 24px;
      background-color: #72deff;
    }
  }

  // .post__body

  &__body {
    font-size: 20px;
  }
}
.container {
  padding: 20px;
}
</style>
