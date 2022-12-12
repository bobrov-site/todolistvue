<template>
  <ValidationObserver v-slot="{handleSubmit, invalid}">
    <form @submit.prevent="handleSubmit(createUserWithEmailAndPassword())">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Электронная почта</label>
        <ValidationProvider name="email" rules="required|email" v-slot="{errors,valid,changed}">
          <input v-model="email" :class="{'is-valid' : valid && changed ,'is-invalid' : errors[0]}" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">Укажите адрес электронной почты в качестве логина для входа на сайт</div>
          <div class="invalid-feedback">{{errors[0]}}</div>
        </ValidationProvider>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Пароль</label>
        <ValidationProvider name="password" rules="required|min:8|max:16" v-slot="{errors,valid,changed}">
          <input v-model="password" :class="{'is-valid' : valid && changed ,'is-invalid' : errors[0]}" type="password" autocomplete="password" class="form-control" id="exampleInputPassword1">
          <div class="invalid-feedback">{{errors[0]}}</div>
        </ValidationProvider>
      </div>
      <div class="mb-3">
        <ValidationProvider name="repeatPassword" rules="required|confirmed:password" v-slot="{errors,valid,changed}">
          <label for="exampleInputPassword2" class="form-label">Повторите пароль</label>
          <input v-model="repeatPassword" :class="{'is-valid' : valid && changed ,'is-invalid' : errors[0]}" type="password" autocomplete="repeatPassword" class="form-control" id="exampleInputPassword2">
          <div class="invalid-feedback">{{errors[0]}}</div>
        </ValidationProvider>
      </div>
      <button type="submit" :disabled="invalid" class="btn btn-primary">Зарегистрироваться</button>
      <p class="text-body mt-4">Или</p>
      <button @click="signInWithGoogle" type="button" class="btn btn-primary">Зарегистрироваться при помощи Google</button>
      <p class="text-body mt-4">Уже есть аккаунт?</p>
      <a @click="signInWithGoogle" class="text-primary">Войти</a>
    </form>
  </ValidationObserver>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
export default {
  name: "FormBootstrap",
  data: function() {
    return {
      password: '',
      repeatPassword: '',
      email: '',
    }
  },
  methods: {
    createUserWithEmailAndPassword () {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth ,this.email, this.password).then((data) => {
        console.log(data)
        this.$router.push('/profile')
      }).catch(error => {
        console.log(error)
      })
    },
    signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth()
      signInWithPopup(auth, provider).then((data) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(data);
        const token = credential.accessToken;
        console.log(token)
        // The signed-in user info.
        const user = data.user;
        console.log(user)
      }).catch((error) => {
        // Handle Errors here.
        console.log(error)
        // ...
      });

    }
  }
}
</script>

<style scoped>

</style>