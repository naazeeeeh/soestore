<template>
  <div class="home">
    <HeaderSoe />
    <HeroSoe />
    <ItemSoe />
    <InstaSoe />
    <PartnerSoe />
    <FooterSoe />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSoe from "@/components/HeaderSoe.vue";
import HeroSoe from "@/components/HeroSoe.vue";
import ItemSoe from "@/components/ItemSoe.vue";
import InstaSoe from "@/components/InstaSoe.vue";
import PartnerSoe from "@/components/PartnerSoe.vue";
import FooterSoe from "@/components/FooterSoe.vue";

export default {
  name: "HomeView",
  components: {
    HeaderSoe,
    HeroSoe,
    ItemSoe,
    InstaSoe,
    PartnerSoe,
    FooterSoe,
  },
};
</script>
