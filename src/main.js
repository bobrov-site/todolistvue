import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {ValidationProvider} from "vee-validate/dist/vee-validate.full.esm";
import {ValidationObserver} from "vee-validate";
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDataBase } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeTgmPw34ZhqsL4Tfv5zsFykek_A_WcFw",
  authDomain: "todolistvue-5ea9a.firebaseapp.com",
  projectId: "todolistvue-5ea9a",
  storageBucket: "todolistvue-5ea9a.appspot.com",
  messagingSenderId: "530284892850",
  appId: "1:530284892850:web:63567dba67910caf812fab",
  measurementId: "G-7821MBSJRW",
  databaseURL: "https://todolistvue-5ea9a-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const database = getDataBase();
console.log(database)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
