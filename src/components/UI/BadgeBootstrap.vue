<template>
<span :class="cssClass" class="badge">{{text}}</span>
</template>

<script>
export default {
  name: "BadgeBootstrap",
  props: {
    cssClass: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    }
  }
}
</script>

<style scoped>

</style>