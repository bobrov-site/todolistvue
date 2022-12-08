<template>
  <span :class="cssClass" class="badge text-light">
    <i class="bi bi-calendar-week-fill me-2"></i> {{text}}
  </span>
</template>

<script>
export default {
  name: "BadgeBootstrap",
  props: {
    cssClass: {
      type: String,
      required: true
    },
    text: {
      required: true
    },
  }
}
</script>

<style scoped>

</style>