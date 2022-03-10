<template>
  <div class="col-5 pe-5 pb-5 offer">
    <div class="row">
      <div class="col-12 text-center offer__text_big pt-5">
        Ваша заявка
        отправлена!
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center mt-5">
        <img src="@/assets/images/success-img.svg">
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <router-link to="/" class="col-auto offer__button offer__button_back">
        На главную
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessBlock"
}
</script>

<style lang="scss" scoped>
  .offer__button_back{
    box-shadow: 0px 0px 1px rgba(117, 131, 142, 0.04), 0px 2px 4px rgba(52, 60, 68, 0.16);
  }
</style>