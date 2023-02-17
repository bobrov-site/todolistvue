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
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
  components: {NavbarBootstrap, FooterBootstrap},
  mounted() {
    const auth = getAuth()
    auth.currentUser;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.commit('user/logInUser', [user.email, user.displayName, user.uid, user.photoURL, true])
      }
      else {
        console.log('пользователь не в системе')
      }
    })
  }
}
</script>
<style lang="scss">
html {
  height: 100vh;
}
@import "@/assets/scss/index.scss";
</style>
