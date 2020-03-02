<template>
  <section class="home">
    <Header />
    <main class="main">
      <Login />
    </main>
    <Footer />
  </section>
</template>

<script>
import Header from "@/vue/components/layout/Header";
import Footer from "@/vue/components/layout/Footer";
import Login from "@/vue/components/home/Login.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Login,
  }
};
</script>
