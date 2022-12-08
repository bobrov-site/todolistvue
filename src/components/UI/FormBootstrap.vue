<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Электронная почта</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">Укажите адрес электронной почты в качестве логина для входа на сайт</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Пароль</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword2" class="form-label">Повторите пароль</label>
      <input type="password" class="form-control" id="exampleInputPassword2">
    </div>
    <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
  </form>
</template>

<script>
export default {
  name: "FormBootstrap"
}
</script>

<style scoped>

</style>