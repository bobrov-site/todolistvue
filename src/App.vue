<template>
  <div id="app" class="h-100 d-flex flex-column justify-content-around">
    <NavbarBootstrap/>
    <router-view/>
<!--    <nav>-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </nav>-->
    <FooterBootstrap/>
  </div>
</template>
<script>
import NavbarBootstrap from "@/components/UI/NavbarBootstrap";
import FooterBootstrap from "@/components/UI/FooterBootstrap";
export default {
  components: {NavbarBootstrap, FooterBootstrap}
}
</script>
<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
