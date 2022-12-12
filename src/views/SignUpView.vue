<template>
<div class="signUp">
  <ContainerBootstrap>
    <div class="row justify-content-center">
      <div class="col-7">
        <BenefitsTable title="Что дает регистрация? 🤔"/>
      </div>
      <div class="col-5">
        <FormBootstrap title="Регистрация"/>
      </div>
    </div>
  </ContainerBootstrap>
</div>
</template>

<script>
import ContainerBootstrap from "@/components/UI/ContainerBootstrap.vue";
import FormBootstrap from "@/components/UI/FormBootstrap.vue";
import BenefitsTable from "@/components/BenefitsTable.vue";

export default {
  name: "SignUpView",
  components: {BenefitsTable, FormBootstrap, ContainerBootstrap}
}
</script>

<style scoped>

</style>