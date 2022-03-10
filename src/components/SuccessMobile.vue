<template>
  <div class="row">

  </div>
  <div class="row">
    <div class="col-12 text-center mt-5">
      <img src="@/assets/images/success-img.svg" class="img-fluid">
    </div>
  </div>
  <div class="col-12 text-center offer__text_big pt-5">
    Ваша заявка успешно<br/>
    отправлена!
  </div>
  <div class="row justify-content-center mt-5">
    <router-link to="/" class="col-auto offer__button offer__button_back">
      На главную
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SuccessMobile"
}
</script>

<style scoped>

</style>