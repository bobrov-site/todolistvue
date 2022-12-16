<template>
<div class="resetPassword">
  <ContainerBootstrap>
    <div class="row justify-content-center flex-column-reverse flex-md-row">
      <div class="col-12 col-md-6">
        <FormBootstrap class="mt-4" title="Восстановить пароль"/>
      </div>
    </div>
  </ContainerBootstrap>
</div>
</template>

<script>
import ContainerBootstrap from "@/components/UI/ContainerBootstrap.vue";
import FormBootstrap from "@/components/UI/FormBootstrap.vue";

export default {
  name: "ResetPasswordView",
  components: {ContainerBootstrap, FormBootstrap}
}
</script>

<style scoped>

</style>