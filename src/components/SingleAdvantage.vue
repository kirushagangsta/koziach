<template>
  <div class="col-4 mt-xl-5 mt-3">
    <div class="row ms-xxl-4 me-xxl-4 me-0 ms-0">
      <div class="col-12 p-0 advantages__card">
        <div class="row">
          <div class="col-12">
            <img :src="require('@/assets/images/'+ src +'.svg')" style="width:100%">
          </div>
        </div>
        <div class="row pt-xl-4 mt-xl-3 pb-xl-5 pt-3 mt-2 pb-4">
          <div class="col-12 text-center advantages__card__text">
            {{ text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    src : String,
    text : String
  },
  name: "SingleAdvantage"
}
</script>

<style lang="scss" scoped>
  .advantages__card{
    background: #FFFFFF;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
    border-radius: 45px;
    @media screen and (max-width: 1000px){
      border-radius: 20px;
    }
  }
  .advantages__card__text{
    font-size: 30px;
    line-height: 41px;
    letter-spacing: -0.24px;
    @media screen and (max-width: 1000px){
      font-size: 12px;
      line-height: 16px;
    }
  }
</style>