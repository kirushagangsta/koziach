<template>
  <div class="container-fluid">
    <div v-if="!mobile">
      <div class="row justify-content-center" style="min-height: 100vh">
        <router-view/>
        <header-image/>
      </div>
    </div>
    <div v-else>
      <div class="row pe-3">
        <div class="col-6 align-self-center advantages__header-text">
          {{headerText}}
        </div>
        <header-image/>
      </div>
      <component :is="mobileComponent"></component>
    </div>
    <advantages-block/>
    <site-footer/>
  </div>
</template>
<script>
 import HeaderImage from "@/components/HeaderImage";
 import AdvantagesBlock from "@/components/AdvantagesBlock";
 import SiteFooter from "@/components/SiteFooter";
 import OfferDescMobile from "@/components/OfferDescMobile";
 import FormMobile from "@/components/FormMobile";
 import SuccessMobile from "@/components/SuccessMobile";
 export default {
   components : {
     SiteFooter, OfferDescMobile, FormMobile, SuccessMobile,
     HeaderImage, AdvantagesBlock
   },
   data : () => {
     return {
       windowWidth : window.innerWidth
     }
   },
   created() {
     window.addEventListener("resize", this.resizeHandler);
   },
   beforeUnmount() {
     window.removeEventListener("resize", this.resizeHandler);
   },
   computed: {
     mobile() {
       console.log(this.windowWidth);
       return (this.windowWidth < 1000)
     },
     currentRoute() {
       return this.$route.path
     },
     headerText() {
       if (this.currentRoute === "/") {
         return `Законно снимем с военного учёта за 2 недели`
       }
       else return `Оформить заявку`
     },
     mobileComponent() {
       switch (this.currentRoute) {
         case "/": return "OfferDescMobile"
         case "/form" : return "FormMobile"
         case "/success" : return "SuccessMobile"
         default: return "OfferDescMobile"
       }
     }
   },
   methods : {
     resizeHandler() {
       this.windowWidth = window.innerWidth;
     }
   }

 }
</script>
<style>
@import '~bootstrap/dist/css/bootstrap.css';
</style>
