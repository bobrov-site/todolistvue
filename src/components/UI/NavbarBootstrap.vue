<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">TodoList Vue2</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Домой</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/todolist">Задачи</router-link>
          </li>
          <li v-if="!isLogin" class="nav-item">
            <router-link class="nav-link" to="/signUp">Регистрация</router-link>
          </li>
          <li v-if="!isLogin" class="nav-item">
            <router-link class="nav-link" to="/signIn">Вход</router-link>
          </li>
          <li v-if="isLogin" class="nav-item">
            <a @click="logOutUser" class="nav-link logOut">Выход</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
.logOut {
  cursor: pointer;
}
</style>
<script>
import {mapState} from "vuex";
import {getAuth, signOut} from "firebase/auth";

export default {
  name: "NavbarBootstrap",
  computed: {
    ...mapState({
      isLogin: state => state.user.isLogin
    })
  },
  methods: {
    logOutUser() {
      const auth = getAuth()
      signOut(auth).then(() => {
        this.$store.commit('user/logOutUser', false)
        this.$router.push('/')
      }).catch((error)=> {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss">
.router-link-exact-active {
  color: rgba(0,0,0,0.9) !important;
}
</style>