<template>
  <div class="home">
    <NavbarBootstrap/>
    <ContainerBootstrap>
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
