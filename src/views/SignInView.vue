<template>
<div class="signIn">
  <ContainerBootstrap>
    <div v-if="this.$route.params.passwordReset" class="row justify-content-center">
      <div class="col-12">
        <AlertBootstrap :is-sign-in="true"/>
      </div>
    </div>
    <div class="row justify-content-center flex-column-reverse flex-md-row">
      <div class="col-12 col-md-7">
        <BenefitsTable class="mt-4 mt-md-4" title="Что даёт аккаунт? 🤔"/>
      </div>
      <div class="col-12 col-md-5">
        <FormBootstrap class="mt-4" title="Вход"/>
      </div>
    </div>
  </ContainerBootstrap>
</div>
</template>

<script>
import ContainerBootstrap from "@/components/UI/ContainerBootstrap.vue";
import BenefitsTable from "@/components/BenefitsTable.vue";
import FormBootstrap from "@/components/UI/FormBootstrap.vue";
import AlertBootstrap from "@/components/UI/AlertBootstrap.vue";

export default {
  name: "SignInView",
  components: {AlertBootstrap, FormBootstrap, BenefitsTable, ContainerBootstrap},
}
</script>

<style scoped>

</style>