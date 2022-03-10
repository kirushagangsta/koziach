<template>
  <div class="row">
    <div class="col-12 text-center pt-4 mt-2 offer__description">
      Столкнулись с проблемами призывного возраста? Если Вы гражданин РФ в возрасте до 27 лет, то наша команда законно
      поможет Вам сделать оповещение об обучении в Европе на требуемое время.
    </div>
  </div>
  <div class="row justify-content-center pt-4 mt-2">
    <router-link to="/form" class="col-auto offer__button">
      Оставить заявку
    </router-link>
  </div>
  <div class="row justify-content-center pt-3 pb-3">
    <div class="col-auto align-self-center offer__price">
      Прейскурант 99 000 ₽
    </div>
  </div>
</template>

<script>
export default {
  name: "OfferDescMobile"
}
</script>

<style scoped>
  .offer__description {
    font-size: 16px;
  }
  .offer__button{
    font-size: 16px;
  }
  .offer__price {
    font-size: 14px;
  }
</style>