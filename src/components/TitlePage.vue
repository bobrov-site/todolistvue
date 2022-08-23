<template>
<h1>
{{text}}
</h1>
</template>

<script>
export default {
  name: "TitlePage",
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 75px;
}
</style>