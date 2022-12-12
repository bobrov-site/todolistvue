<template>
<div class="signIn">
  <ContainerBootstrap>
    <div class="row justify-content-center">
      <div class="col-7">
        <BenefitsTable title="Что даёт аккаунт? 🤔"/>
      </div>
      <div class="col-5">
        <FormBootstrap title="Вход"/>
      </div>
    </div>
  </ContainerBootstrap>
</div>
</template>

<script>
import ContainerBootstrap from "@/components/UI/ContainerBootstrap.vue";
import BenefitsTable from "@/components/BenefitsTable.vue";
import FormBootstrap from "@/components/UI/FormBootstrap.vue";

export default {
  name: "SignInView",
  components: {FormBootstrap, BenefitsTable, ContainerBootstrap}
}
</script>

<style scoped>

</style>