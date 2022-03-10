<template>
  <div class="col-xl-4 col-5 text-center pb-3 pe-4 ps-4 pt-3 header-image">
    <div class="row h-100 align-content-center">
      <img src="@/assets/images/header-image.svg" class="col-12">
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderImage"
}
</script>

<style lang="scss" scoped>
  .header-image{
    background: #6CB5C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 120px 120px;
    height: 90vh;
    @media screen and (max-width: 1000px) {
      border-radius: 0px 0px 50px 50px;
      height: auto;
    }
  }
</style>