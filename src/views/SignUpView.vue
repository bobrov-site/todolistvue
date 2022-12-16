<template>
<div class="signUp">
  <ContainerBootstrap>
    <div class="row justify-content-center flex-column-reverse flex-md-row">
      <div class="col-12 col-md-7">
        <BenefitsTable class="mt-4 mt-md-4" title="Что дает регистрация? 🤔"/>
      </div>
      <div class="col-12 col-md-5">
        <FormBootstrap class="mt-4" title="Регистрация"/>
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