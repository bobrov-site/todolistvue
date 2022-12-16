<template>
  <div>
    <div v-if="isSignUpPage" class="border p-4">
      <h2>{{title}}</h2>
      <ValidationObserver v-slot="{handleSubmit, invalid}">
        <form @submit.prevent="handleSubmit(createUserWithEmailAndPassword())">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Электронная почта</label>
            <ValidationProvider name="email" rules="required|email" v-slot="{errors,valid,changed}">
              <input v-model="email" :class="{'is-valid' : valid && changed ,'is-invalid' : errors[0], 'is-invalid' : feedbackEmail}" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">Укажите адрес электронной почты в качестве логина для входа на сайт</div>
              <div class="invalid-feedback">{{errors[0]}}</div>
              <div v-if="feedbackEmail" class="invalid-feedback">{{feedbackEmail}}</div>
              <router-link v-if="feedbackEmail" to="/signIn" class="text-primary">Уже есть аккаунт? Войдите</router-link>
            </ValidationProvider>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Пароль</label>
            <ValidationProvider name="password" rules="required|min:8|max:16" v-slot="{errors,valid,changed}">
              <input v-model="password" :class="{'is-valid' : valid && changed ,'is-invalid' : errors[0]}" type="password" autocomplete="password" class="form-control" id="exampleInputPassword1">
              <div id="passwordHelp" class="form-text">Пароль должен состоять из минимум 8 и максимум 18 символов</div>
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
        </form>
      </ValidationObserver>
      <p class="text-body mt-4">Или</p>
      <button @click="signInWithGoogle" type="button" class="btn btn-primary">
        <i class="bi bi-google"></i>
        Зарегистрироваться при помощи Google
      </button>
      <p class="text-body mt-4">
        Уже есть аккаунт?
        <router-link to="/signIn" class="text-primary">Войти</router-link>
      </p>
    </div>
    <div v-if="isSignInPage" class="border p-4">
      <h2>{{title}}</h2>
      <ValidationObserver v-slot="{handleSubmit, invalid}">
        <form @submit.prevent="handleSubmit(signInWithEmailAndPassword())">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Электронная почта</label>
            <ValidationProvider name="email" rules="required|email">
              <input @input="removeFeedback('email')" v-model="email" :class="{'is-invalid': feedbackEmail}"  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div class="invalid-feedback">{{feedbackEmail}}</div>
            </ValidationProvider>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Пароль</label>
            <ValidationProvider name="password" rules="required||min:8|max:16">
              <input @input="removeFeedback('password')" v-model="password" :class="{'is-invalid': feedbackPassword}" type="password" autocomplete="password" class="form-control" id="exampleInputPassword1">
              <router-link to="/resetPassword" id="passwordHelp2" class="text-primary">Забыли пароль?</router-link>
              <div class="invalid-feedback">{{feedbackPassword}}</div>
            </ValidationProvider>
          </div>
          <button type="submit" :disabled="invalid" class="btn btn-primary">Войти</button>
        </form>
      </ValidationObserver>
      <p class="text-body mt-4">Или</p>
      <button @click="signInWithGoogle" type="button" class="btn btn-primary">Войти при помощи Google</button>
      <p class="text-body mt-4">
        Нет аккаунта?
        <router-link to="/signUp" class="text-primary">Зарегистрироваться</router-link>
      </p>
    </div>
    <div v-if="isResetPasswordPage" class="border p-4">
      <h2>{{title}}</h2>
      <ValidationObserver v-slot="{handleSubmit, invalid}">
        <form @submit.prevent="handleSubmit(sendPasswordResetEmail())">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Электронная почта</label>
            <ValidationProvider name="email" rules="required|email">
              <input @input="removeFeedback('email')" v-model="email" :class="{'is-invalid': feedbackEmail}"  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div class="invalid-feedback">{{feedbackEmail}}</div>
              <div class="form-text">Укажите адрес электронной почты, на которой зарегистрирован аккаунт</div>
            </ValidationProvider>
          </div>
          <button type="submit" :disabled="invalid" class="btn btn-primary">Восстановить</button>
        </form>
      </ValidationObserver>
    </div>
    <div v-if="isProfilePage">
      <h2>{{title}}</h2>
      <div v-if="!isChange">
        <div class="mb-3">
          <AlertBootstrap @click.native="hideProfileAlert()" v-if="isProfileChanged" :is-profile-success="true"/>
        </div>
        <p class="text-body">Email: {{getUserEmail}}</p>
        <p class="text-body">Имя: {{getUserName || 'Не указано'}}</p>
        <button-bootstrap @click.native="openChangeForm()" css-class="btn btn-primary">Изменить</button-bootstrap>
      </div>
      <ValidationObserver v-slot="{handleSubmit, invalid}">
        <form @submit.prevent="handleSubmit(updateProfile())" v-if="isChange">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Электронная почта</label>
            <ValidationProvider name="email" rules="required|email">
              <input v-model="emailSet" type="email" class="form-control" id="exampleInputEmail1">
            </ValidationProvider>
          </div>
          <div class="mb-3">
            <label for="exampleInputName1" class="form-label">Имя</label>
            <ValidationProvider name="name" rules="required|alpha_spaces">
              <input v-model="nameSet" type="text" class="form-control" id="exampleInputName1">
            </ValidationProvider>
          </div>
          <div class="d-flex justify-content-between">
            <button-bootstrap @click.native="openChangeForm()" css-class="btn btn-secondary">Закрыть</button-bootstrap>
            <button-bootstrap :type="'submit'" :disabled="invalid" css-class="btn btn-success">Сохранить</button-bootstrap>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile, updateEmail, signOut  } from "firebase/auth";
import {mapGetters} from "vuex";
import ButtonBootstrap from "@/components/UI/ButtonBootstrap.vue";
import AlertBootstrap from "@/components/UI/AlertBootstrap.vue";
export default {
  name: "FormBootstrap",
  components: {AlertBootstrap, ButtonBootstrap},
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  data: function() {
    return {
      password: '',
      repeatPassword: '',
      email: '',
      name: '',
      errorCode: '',
      errorMessage: '',
      feedbackEmail: '',
      feedbackPassword: '',
      isChange: false,
      isProfileChanged: false,
    }
  },
  computed: {
    ...mapGetters({
      getUserName: "user/getUserName",
      getUserEmail: "user/getUserEmail",
    }),
    emailSet: {
      get() {
        return this.getUserEmail
      },
      set(value) {
        this.$store.commit('user/updateUserEmail', value)
      }
    },
    nameSet: {
      get() {
        return this.getUserName
      },
      set(value) {
        this.$store.commit('user/updateUserName', value)
      }
    },
    isSignUpPage() {
      return this.$route.name === 'signUp';
    },
    isSignInPage() {
      return this.$route.name === 'signIn' || this.$route.name === 'signInPasswordReset';
    },
    isResetPasswordPage() {
      return this.$route.name === 'resetPassword'
    },
    isProfilePage() {
      return this.$route.name === 'profile'
    },
  },
  methods: {
    hideProfileAlert() {
      this.isProfileChanged = !this.isProfileChanged
    },
    openChangeForm() {
      this.isChange = !this.isChange
    },
    removeFeedback(input) {
      if (input === 'email') {
        this.feedbackEmail = ''
      }
      if (input === 'password') {
        this.feedbackPassword = ''
      }
    },
    updateProfile() {
      const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: this.nameSet
      }).then(() => {
        this.$store.commit('user/updateUserName', this.nameSet)
      }).catch((error) => {
        console.log(error, 'ошибка')
        return false
      })
      if (auth.currentUser.email !== this.emailSet) {
        updateEmail(auth.currentUser, this.emailSet).then(() => {
          this.$store.commit('user/updateUserEmail', this.emailSet)
        }).catch((error) => {
          console.log(error, 'ошибка')
          return false
        })
        signOut(auth).then(() => {
          this.$store.commit('user/logOutUser')
          this.$router.push('/signIn')
        })
      }
      this.isChange = !this.isChange;
      this.isProfileChanged = !this.isProfileChanged
    },
    sendPasswordResetEmail() {
      const auth = getAuth();
      auth.languageCode = 'ru'
      sendPasswordResetEmail(auth, this.email).then(()=> {
        this.$router.push('/signIn/passwordReset')
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode)
      })
    },
    signInWithEmailAndPassword() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password).then((data) => {
        this.$store.commit('user/logInUser', [data.user.email, data.user.displayName, data.user.uid, true])
        this.$router.push('/profile')
      }).catch((error) => {
        this.errorCode = error.code
        this.errorMessage = error.message
        if (this.errorCode === 'auth/wrong-password') {
          this.feedbackPassword = 'Неправильный пароль. Укажите другой'
        }
        else {
         this.feedbackEmail = 'Такого аккаунта нет. Укажите другую почту'
        }
      })
    },
    createUserWithEmailAndPassword () {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth ,this.email, this.password).then((data) => {
        this.$store.commit('user/logInUser', [data.user.email, data.user.displayName, data.user.uid, true])
        this.$router.push('/profile')
      }).catch(error => {
        this.errorCode = error.code
        this.errorMessage = error.message
        if (this.errorCode === 'auth/email-already-in-use') {
          this.feedbackEmail = 'Такой аккаунт уже существует.'
        }
      })
    },
    signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth()
      signInWithPopup(auth, provider).then((data) => {
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(data);
        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = data.user;
        this.$store.commit('user/logInUser', [data.user.email, data.user.displayName, data.user.uid, true])
        this.$router.push('/profile')
      }).catch((error) => {
        // Handle Errors here.
        console.log(error)
        // ...
      });

    }
  }
}
</script>

<style lang="scss" scoped>
#passwordHelp2 {
  cursor: pointer;
}
</style>