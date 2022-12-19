<template>
  <div>
    <div class="profile">
      <ContainerBootstrap>
        <div class="row">
          <div class="col-6">
            <TitlePage text="Профиль"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="border p-4 d-flex flex-column">
              <TitleSection text="Изображение профиля"/>
              <input class="d-none" @change="changeAvatar" type="file" ref="file">
              <img class="userAvatar mb-2" alt="аватар" :src="avatar">
              <button-bootstrap v-if="!isAvatarUploaded" @click.native="uploadAvatar()" css-class="btn btn-primary">Изменить</button-bootstrap>
              <button-bootstrap v-if="isAvatarUploaded" @click.native="isAvatarUploaded = false; uploadAvatar()" type="btn" css-class="btn btn-success">Успешно загружено</button-bootstrap>
            </div>
            <h2></h2>
          </div>
          <div class="col-12 col-md-6">
            <div class="border p-4">
              <FormBootstrap title="Личная информация"/>
            </div>
          </div>
        </div>
      </ContainerBootstrap>
    </div>
  </div>
</template>

<script>
import ContainerBootstrap from "@/components/UI/ContainerBootstrap.vue";
import TitlePage from "@/components/TitlePage.vue";
import {mapState} from "vuex";
import TitleSection from "@/components/TitleSection.vue";
import ButtonBootstrap from "@/components/UI/ButtonBootstrap.vue";
import FormBootstrap from "@/components/UI/FormBootstrap.vue";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {getAuth, updateProfile} from "firebase/auth";

export default {
  name: "ProfileView",
  components: {FormBootstrap, ButtonBootstrap, TitleSection, TitlePage, ContainerBootstrap},
  data: () => ({
    imageUrl : '',
    isAvatarUploaded : false,
  }),
  mounted() {
    if (!this.isLogin) {
      this.$router.push('/signIn');
    }
  },
  methods: {
    changeAvatar() {
      // eslint-disable-next-line no-debugger
      const auth = getAuth()
      const storage = getStorage();
      const file = this.$refs.file.files[0]
      const fileName = this.$refs.file.files[0].name
      const storageRef = ref(storage, fileName)
      uploadBytes(storageRef, file).then(() => {
        console.log('аватар загружен')
        this.isAvatarUploaded = true
        updateProfile(auth.currentUser, {
          photoURL: this.imageUrl
        }).then(() => {
          this.$store.commit('user/updateUserAvatar', this.imageUrl)
        }).catch((error) => {
          console.log(error)
          console.log('аватар пользователя НЕ обновлен')
        })
      }).catch((error) => {
        console.log(error + 'ошибка в загрузке аватарки')
      });
      getDownloadURL(ref(storage, fileName)).then((url) => {
        this.imageUrl = url
      }).catch((error) => {
        console.log(error + 'ошибка в скачивании аватарки')
      });
    },
    uploadAvatar() {
      this.$refs.file.click()
    },
  },
  computed: {
    ...mapState({
      isLogin: state => state.user.isLogin,
      email: state => state.user.email,
      avatar: state => state.user.avatar
    })
  }
}
</script>

<style lang="scss" scoped>
.userAvatar {
  width: 200px;
  height: 200px;
  border-radius: 15px;
}
</style>