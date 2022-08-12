<template>
<div class="search">
  <container-bootstrap>
    <div class="row">
      <div class="col-12">
        <TitlePage text="По запросу найдено"/>
        <SearchBootstrap/>
      </div>
    </div>
  </container-bootstrap>
</div>
</template>

<script>
import ContainerBootstrap from "@/components/UI/ContainerBootstrap";
import TitlePage from "@/components/TitlePage";
import SearchBootstrap from "@/components/UI/SearchBootstrap";
export default {
  name: "SearchView",
  components: {SearchBootstrap, TitlePage, ContainerBootstrap}
}
</script>

<style scoped>

</style>