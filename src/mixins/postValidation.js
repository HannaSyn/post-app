import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  validations: {
    post: {
      title: { required },
      body: { required },
    },
  },
  computed: {
    titleErrors () {
      const errors = []
      if (!this.$v.post.title.$dirty) return errors
      !this.$v.post.title.required && errors.push('Title is required')
      return errors
    },
    bodyErrors () {
      const errors = []
      if (!this.$v.post.body.$dirty) return errors
      !this.$v.post.body.required && errors.push('You should fill this field')
      return errors
    },
  },
  methods: {
    valid () {
      this.$v.$touch();

      return !this.$v.$invalid;
    },

    reset () {
      this.$v.$reset();
    },
  },
};
