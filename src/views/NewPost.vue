<template>
  <form>
    <v-container fluid>
      <h1 class="form-title">Create new post</h1>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
          
      <v-text-field
        v-model="title"
        :error-messages="titleErrors"
        label="Title"
        required
        @input="$v.title.$touch()"
        @blur="$v.title.$touch()"
      ></v-text-field>

        <v-textarea
          v-model="body"
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
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'
  export default {
    mixins: [validationMixin],
    validations: {
      email: { required, email },
      title: { required },
      body: { required }},
    data: () => ({
      email: '',
      title: '',
      body: ''
    }),
    computed: {
      titleErrors () {
        const errors = []
        if (!this.$v.title.$dirty) return errors
        !this.$v.title.required && errors.push('Title is required')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      bodyErrors () {
        const errors = []
        if (!this.$v.body.$dirty) return errors
        !this.$v.body.required && errors.push('You should fill this field')
        return errors
      },
    },
    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.email = '',
        this.title = '',
        this.body = ''
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