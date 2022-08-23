<template>
<button type="button" :class="cssClass" class="btn">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "ButtonBootstrap",
  props: {
    cssClass: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>