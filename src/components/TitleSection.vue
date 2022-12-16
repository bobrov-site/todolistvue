<template>
<h2>
  {{text}}
</h2>
</template>

<script>
export default {
  name: "TitleSection",
  props: {
    text: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>