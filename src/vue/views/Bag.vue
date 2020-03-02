<template lang="pug">
  main(class="main bag")
    h3(class="page-title") Minha Sacola

    section(class="bag-top" v-show="products.size")
      router-link(class="button-return" :to="{ name : 'Shop'}") Continuar Compra
      button(class="button-finish" v-on:click="checkout()") Finalizar Compra
      div(class="bag-totals")
        div(class="amount")
          span(class="bag__totals-text") Total
          span(class="bag__totals-amount") {{ total | precify }}
        include ../includes/loading-bar.pug
        div(class="cashback")
          span(class="cashback-text") Cashback
          span(class="cashback-value") + {{cashback| precify}}
    section(class="bag-shelf" v-if="products.size")
      div(class="bag-shelf__item" v-for="item in products" :key="item.id")
          div(class="bag-shelf__item-img-anchor")
            img(class="bag-shelf__item-img" v-bind:src="item.img.imageUrl")
          
          div(class="bag-shelf__item-info")
            div(class="bag-shelf__item-info-name") {{item.name}})
            div(class="bag-shelf__item-info-price")
              template(v-if="item.discount")
                div(class="bag-shelf__item-info-price-discount") {{item.ListPrice * item.quantity | precify}}
                div(class="bag-shelf__item-info-price-sell") {{ item.price * item.quantity  | precify}}
              template(v-else) {{ item.price * item.quantity | precify}}
              
            select(class="bag-shelf__item-info-quantity"  v-on:change="item.quantity = $event.target.value,updateItem(products)")
              option(v-for="numb in 10" :value="numb" :key="numb") {{numb}}
            button(:class="{'bag-shelf__item-info-del icons':true,'-disabled' :loading}"
                    v-on:click="removeItem(item)")           
          
          div(class="bag-shelf__item-line")
    
    section(v-else class="bag-shelf__empty")
      p(class="bag-shelf__empty-title") Sacola Vazia
</template>

<script>
import { db  } from '@/database';
import { getDate} from '@/vue/helpers/date';
import { mapState ,mapMutations } from 'vuex';
export default {
  data(){
    return {
      selected : 1,
      loading  : false,
      percent  : .10
    }
  },
  computed: {
    ...mapState(['user','bag']),
    products(){
      return this.bag
    },
    total (){
      return this.products.size ? [...this.products].reduce((totals , item) => {
        return totals + (item.price * item.quantity)
      },0) : 0
    },
    cashback(){
      return this.total * this.percent
    },
  },
  filters :{
    precify(value){
      return value ? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : value
    },
  },
  methods:{
    ...mapMutations(['removeItem','updateItem','emptyBag']),
    checkout(){
      this.loading = true
      db.collection("orders").add({
        user_id       : this.user.user_id,
        total         : this.total,
        cashback      : this.cashback,
        percent       : '10\u0025',
        status        : 'Em Aprova\u00E7\u00E3o',
        date          : getDate(),
      }).then(() => {
         this.loading = false
         this.emptyBag()
         this.$router.push({ name: "Orders" })
      }).catch( err => {
        console.log(err)
         this.loading = false
      })
    },
  }
}
</script>