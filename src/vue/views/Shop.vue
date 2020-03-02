<template>
    <main class="main shop">
    <section id="vue-category" class="container">
        <div id="vue-nav-box" class="nav-box">
          <filters v-on:change-data="updateData"/>
          <block v-bind:blocking="loading"/>
        </div>
          <layer v-bind:department="' '"
                  v-bind:category="categories"
          />
        <div id="vue-shelfs" class="shelfs">
          <shelf-mobile v-if="isMobile" 
                  v-bind:products="shelf"
                  v-bind:loader="loading"
          />
          <shelfs v-else
                  v-bind:products="shelf"
                  v-bind:loader="loading"
          />
        </div>
      </section>
    </main>
</template>

<script>
import axios  from "axios";
import components from '@/vue/components/shop/shopComponents';

export default {
  name : 'Shop',
  components,
  data(){
    return{
      categories  : 'maquiagem',
      loading     : true,
      shelf       : [],
    }
  },
  computed: {
    request(){
        return `/api/${this.categories}.json`
    },
    isMobile(){
      return window.screen.width < 768
    }
  },
  methods: {
    updateData(update) {
      this.shelf        = [];
      this[update.name] = update.data;
      this.loading      = true;
      this.fetchProducts();
    },
    async fetchProducts() {
      try {
        const items  = await axios.get(this.request)
        this.shelf   = [...this.shelf, ...items.data];
        this.loading = false;
      } 
      catch (err) {
        console.log(err)
      }
    },
  },
  created(){
    this.fetchProducts();
    window.onresize = this.isMobile
  },
}
</script>
