<template>
  <div class="row justify-content-center mt-5 footer">
    <div class="col-xl-10 col-12">
      <hr class="footer__line" />
      <div class="row justify-content-center mt-xl-5 mb-5">
        <div class="col-auto">
          <img src="@/assets/images/instagram.svg">
        </div>
        <div class="col-auto">
          <img src="@/assets/images/Telegram.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteFooter"
}
</script>

<style scoped>
 .footer__line {
   background: #6CB5C4;
   height: 2px;
 }
</style>