<template lang="pug">
  main.main.orders
    h3.page-title Minhas Compras

    section.info
      p.info-text Receba 10% de cashback do valor total de cada compra
      include ../includes/loading-bar.pug
      div.cashback
        span(class="cashback-text") Cashback
        span(class="cashback-value") {{ accumulated | precify}}

    section.orders-shelf( v-if="orders.length > 0")
      div.orders-card(v-for="order in orders")
        div.order-title Compra Realizada em
          div.orders-date {{order.data.date.day}}
        div.orders-cod Código 
          span.text  {{order.id}}
        .left
          div.orders-item Total 
            span.text  {{order.data.total     | precify}}
          div.orders-item Cashback
            span.text   {{order.data.cashback | precify}}
          div.orders-item Retorno  
            span.text   {{order.data.percent}}
        .right
          div.orders-item Status  
            span.order-status  {{order.data.status}}
          button.order-button.cancel(:class="{'-disabled': loading}" v-on:click="deleteOrder(order.id)") cancelar
</template>

<script>
import { db ,auth } from '@/database';
import {  mapActions } from 'vuex';

export default {
  data(){
    return{
      orders : [],
      loading : false,
    }
  },
  filters :{
    precify(value){
      return value ? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : value
    },
  },
  computed : {
    accumulated(){
      return this.orders.length ? [...this.orders].reduce((totals , order) => {
        return totals + order.data.cashback
      },0) : 0
    },
  },
  methods : {
    ...mapActions(['storeOrders']),
    deleteOrder(id){
      this.loading = true
      db.collection('orders').doc(id).delete().then(()=> {
      this.fetchOrders()
      this.loading = false
      })
    },
    fetchOrders(){
      let userId = auth.currentUser.uid
      db.collection('orders').where('user_id','==',userId).onSnapshot(snapshot =>{
        this.orders = snapshot.docChanges().map(change => {  
        this.storeOrders()
          return {
              id    : change.doc.id,
              data : change.doc.data()
            }
        })
      })
    }
  },
  created(){
    this.fetchOrders()
  }
}
</script>