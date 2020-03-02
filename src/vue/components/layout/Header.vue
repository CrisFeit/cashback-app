<template>
    <header class="header">
        <router-link class="logo" :to="{name: !user ? 'Home' : 'Shop'}">
          <img class="logo-img" src="img/logo-eudora-white.png">
        </router-link>
            <router-link class="link button-login"  v-if="!user" :to="{ name: 'Home' }">Login</router-link>
            <router-link class="link button-signup" v-if="!user" :to="{ name: 'Signup' }">Cadastro</router-link>
            <router-link class="link button-user" v-if="user" :to="{ name: 'Profile' }">
              <i class="user-avatar"></i>
              <span class="user-name">{{ userName | breakword }}</span>
            </router-link>
          <a v-if="user" class="link button-logout" v-on:click="logout">Sair</a>
    </header>
</template>

<script>
import { auth } from '@/database';
export default {
  name: "Header",
  data() {
    return {
      user:null,
    };
  },
  filters :{
    breakword(name){
      return name ? name.indexOf(' ') != -1 ? name.split(' ')[0] : name : ''; 
    }
  },
  methods: {
    logout() {
      auth.signOut().then( () => this.$router.push({ name : 'Home'}))
    }
  },
  created(){
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.user = user
      }else{
        this.user = null
      }
    })
  },
  computed : {
    userName(){
      return  this.$store.state.user ? this.$store.state.user.name : ''
    } ,
    isMobile(){
      return window.innerWidth < 768;
    },
  },
}
</script>