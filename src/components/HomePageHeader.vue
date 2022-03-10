<template>
  <div class="col-xl-5 col-7 pb-5 ps-xl-0 ps-3 offer">
    <div class="row">
      <div class="col-12 offer__text_big pt-xl-5 pt-3">
        Законно снимем с военного учёта за<br/> 2 недели
      </div>
    </div>
    <div class="row">
      <div class="col-12 pe-5 pt-4 mt-2 offer__description">
        Столкнулись с проблемами призывного возраста? Если Вы гражданин РФ в возрасте до 27 лет, то наша команда законно поможет Вам сделать оповещение об обучении в Европе на требуемое время.
      </div>
    </div>
    <div class="row ps-3 pt-4 mt-2 pb-5">
      <router-link to="/form" class="col-auto offer__button">
        Оставить заявку
      </router-link>
      <div class="col-auto align-self-center ps-4 offer__price">
        Прейскурант 99 000 ₽
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePageHeader"
}
</script>

<style lang="scss">
  .offer__text_big {
    font-size: 64px;
    line-height: 81px;
    letter-spacing: -0.24px;
    @media screen and (max-width: 1000px){
      font-size: 22px;
      line-height: 28px;
    }
  }
  .offer__description{
    font-size: 24px;
    line-height: 160%;
    letter-spacing: -0.24px;
  }
  .offer__footer-text {
    font-size: 18px;
    line-height: 20px;
  }
  .offer__button{
    @extend .offer__footer-text;
    background: #6CB5C4;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
    border-radius: 666666px;
    padding: 18px 36px;

    height: 60px;
    color: #FFFFFF;
  }
  .offer__price{
    @extend .offer__footer-text;
    color: rgba(39, 46, 62, 0.75);
  }
  a{
    text-decoration: none;
  }
  a:hover {
    color: #FFFFFF;
  }
</style>