<template>

  <div class="post">
    <v-container fluid class="container">
      <div class="post__item">
        <p class="post__title content">{{ post.title }}</p>
        <p class="post__body content">{{ post.body }}</p>
        <v-btn
          class="mr-4"
          @click.prevent
        >
          edit
        </v-btn>
        <v-btn 
          @click="deletePost"
        >
          delete
        </v-btn>
      </div>
      <div class="comments"
      v-if="commentsLoaded"
      >
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
import Comment from '@/components/Comment'
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['posts', 'comments', 'commentsLoaded']),
  },
  methods: {
    ...mapActions(['fetchComments']),
    deletePost () {
      
    }
  },
  data () {
    return {
      post: null,
    };
  },
  created () {
    const postId = this.$route.params.id;
    this.post = this.posts.find(element => element.id == postId);
    this.fetchComments(postId);
  },
  components: {
    Comment
  }
}
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
      &::before{
        content: '';
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