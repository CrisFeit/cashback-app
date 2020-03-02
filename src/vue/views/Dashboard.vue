<template>
  <section class="dashboard">
    <Header />
    <NavMenu />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </section>
</template>

<script>

import Header from "@/vue/components/layout/Header";
import Footer from "@/vue/components/layout/Footer";
import NavMenu from "@/vue/components/dashboard/NavMenu";

export default {
  name: "Dashboard",
  components: {
    Header,
    Footer,
    NavMenu,
  },
  created(){
    this.$store.dispatch('emitAuth')
    this.$store.dispatch('storeOrders')
  },
};
</script>