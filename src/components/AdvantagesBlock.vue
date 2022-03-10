<template>
  <div class="row mt-5 advantages">
    <div class="col-12">
      <div class="row">
        <div class="col-12 text-center advantages__header-text">
          Наши преимущества
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-8 col-12">
          <div class="row justify-content-center">
            <single-advantage v-for="item in getCards" :src="item.src" :text="item.text" :key="item.src"></single-advantage>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import SingleAdvantage from "@/components/SingleAdvantage";
import {mapGetters} from "vuex";
export default {
  name: "AdvantagesBlock",
  components : {
    SingleAdvantage
  },
  computed : mapGetters(['getCards']),
}
</script>

<style lang="scss">
  .advantages__header-text{
    font-size: 64px;
    line-height: 81px;
    letter-spacing: -0.24px;
    @media screen and (max-width: 1000px) {
      font-size: 22px;
      line-height: 28px;
    }
  }
</style>