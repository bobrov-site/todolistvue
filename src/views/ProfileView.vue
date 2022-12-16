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
              <img alt="аватар" src="#">
              <button-bootstrap css-class="btn btn-primary">Изменить</button-bootstrap>
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

export default {
  name: "ProfileView",
  components: {FormBootstrap, ButtonBootstrap, TitleSection, TitlePage, ContainerBootstrap},
  mounted() {
    if (!this.isLogin) {
      this.$router.push('/signIn');
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.user.isLogin
    })
  }
}
</script>

<style scoped>

</style>