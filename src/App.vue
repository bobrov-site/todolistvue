<template>
  <div id="app" class="h-100 d-flex flex-column justify-content-between">
    <NavbarBootstrap/>
    <router-view/>
    <FooterBootstrap/>
  </div>
</template>
<script>
import NavbarBootstrap from "@/components/UI/NavbarBootstrap";
import FooterBootstrap from "@/components/UI/FooterBootstrap";
export default {
  components: {NavbarBootstrap, FooterBootstrap},
}
</script>
<style lang="scss">
html {
  height: 100vh;
}
@import "@/assets/scss/index.scss";
</style>
