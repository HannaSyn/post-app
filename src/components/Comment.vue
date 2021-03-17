<template>
  <div class="comment__item">
    <p class="comment__name content">
      {{ comment.name }}
    </p>
    <p class="comment__email">
      {{ comment.email }}
    </p>
    <p class="comment__text content">
      {{ comment.body }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  // .comment__item

  &__item {
    margin: 10px;
    padding: 15px;
    background-color: #151519;
  }

  // .comment__name

  &__name {
    font-size: 18px;
    color: #c5c5c5;
  }

  // .comment__email

  &__email {
    font-style: italic;
    color: #045d56;
  }

  // .comment__text

  &__text {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
