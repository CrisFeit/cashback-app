<template>
    <nav class="nav">
      <h3 class="nav-title"><span class="menu-name"> Representante</span><i class="icons"></i></h3>
        <router-link :class="{'menu-item':true , '-active': $route.name == 'Shop'}" :to="{ name : 'Shop' }">
          <i class="icons store"></i><span class="menu-name"> Loja</span>
        </router-link>

        <router-link :class="{'menu-item':true , '-active': $route.name == 'Bag'}" :to="{ name: 'Bag'}">
          <i class="icons cart">
              <i class="amount">{{$store.state.bag.size}}</i>
          </i>
          <span class="menu-name"> Minha Sacola</span>
          </router-link>

        <router-link :class="{'menu-item':true , '-active': $route.name == 'Orders'}" :to="{ name: 'Orders'}">
          <i class="icons orders-amount">
             <i class="amount">{{$store.state.orders.length}}</i>
          </i>
          <span class="menu-name"> Minhas Compras</span>
        </router-link>

        <router-link v-if="!isMobile" :class="{'menu-item':true , '-active': $route.name == 'Profile'}" :to="{ name: 'Profile' }">
          <i class="icons profile"></i><span class="menu-name"> Minha Conta</span>
        </router-link>
      
        <router-link :class="{'menu-item':true , '-active': $route.name == 'Info'}" :to="{ name: 'Info' }">
          <i class="icons info"></i><span class="menu-name"> Informações</span>
        </router-link>
    </nav>
</template>

<script>
export default {
  
  computed: {
    isMobile(){
      return window.screen.width < 768
    }
  },
  created(){
    window.onresize = this.isMobile
  },
}
</script>