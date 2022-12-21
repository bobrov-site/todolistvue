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
import {getApp, getApps, initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";

export default {
  components: {NavbarBootstrap, FooterBootstrap},
  mounted() {
    const firebaseConfig = {
      databaseURL: 'https://todolistvue-5ea9a-default-rtdb.europe-west1.firebasedatabase.app/'
    }
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    const database = getDatabase(app)
    this.$store.commit('user/setDatabase', database)
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
