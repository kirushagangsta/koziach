<template>
    <home-page-header v-if="!mobile"></home-page-header>
    <offer-desc-mobile v-else/>
</template>

<script>
import HomePageHeader from "@/components/HomePageHeader";
import OfferDescMobile from "@/components/OfferDescMobile";
export default {
  name: 'HomeView',
  components: {
    HomePageHeader, OfferDescMobile
  },


}
</script>
