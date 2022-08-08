<template>
  <div class="home">
    <NavbarBootstrap/>
    <ContainerBootstrap>
      <div class="row justify-content-center">
        <div class="col-12 d-flex justify-content-center">
          <img class="avatar shadow-lg" alt="avatar" src="@/assets/images/avatar.png">
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <h2>Тестовое приложение "Туду лист"</h2>
          <p>Обучающее приложение 💼</p>
          <a href="#">К задачам</a>
        </div>
      </div>
    </ContainerBootstrap>
  </div>
</template>

<script>

import ContainerBootstrap from "@/components/Bootstrap/ContainerBootstrap";
import NavbarBootstrap from "@/components/UI/NavbarBootstrap";
export default {
  name: 'HomeView',
  components: {NavbarBootstrap, ContainerBootstrap}
}
</script>
<style scoped lang="scss">
.avatar {
  margin-top: 2rem;
  border-radius: 50%;
}
h2 {
  margin-top: 1rem;
}
p {
  margin-top: 1rem;
}
</style>
