<template>
  <form>
    <v-container fluid>
      <h1 class="form-title">Create new post</h1>

      <v-text-field
        v-model="post.title"
        :error-messages="titleErrors"
        label="Title"
        required
      ></v-text-field>

        <v-textarea
          v-model="post.body"
          :error-messages="bodyErrors"
          required
          clearable
          clear-icon="mdi-close-circle"
          label="Text"
          value=""
        ></v-textarea>
      
      <v-btn
        class="mr-4"
        @click="submit"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>

    </v-container>

  </form>
</template>

<script>
  import postValidation from '@/mixins/postValidation';
  import { mapActions } from 'vuex';

  export default {
    mixins: [postValidation],
    data () {
      return {
        post: {
          title: '',
          body: '',
        },
      };
    },
    methods: {
      ...mapActions(['createPost']),
      submit () {
        if (this.valid()) {
          this.createPost(this.post);
          this.clear();
        }
      },
      clear () {
        this.reset();
        this.post.title = '';
        this.post.body = '';
      },
    },
  }
</script>
<style lang="scss" scoped>
.container{
  padding: 30px;
}
.form-title{
  position: relative;
  padding: 0 0 0 15px;
  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 5px;
    height: 32px;
    background-color:#b15dff;
  }
}
</style>
