<template>
<footer class="footer bg-dark">
<ContainerBootstrap>
  <div class="row">
    <div class="col-12 text-center">
      <a href="https://taplink.cc/bobrov_site">Даниил Бобров</a>
    </div>
  </div>
</ContainerBootstrap>
</footer>
</template>

<script>
import ContainerBootstrap from "@/components/UI/ContainerBootstrap";
export default {
  name: "FooterBootstrap",
  components: {ContainerBootstrap}
}
</script>

<style scoped lang="scss">
.footer {
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 75px;
}
</style>