<template lang="pug">
  main.main.profile
    h3.page-title Minha Conta
    include ../includes/loading-bar.pug

    section.profile-card(v-if="user")
      div.profile-img
        i.profile-icon.icons
      div.profile-info
        div.profile-item Nome  
          span.profile-text  {{user.name}}
        div.profile-item Cpf 
          span.profile-text  {{user.cpf}}
        div.profile-item Email 
          span.profile-text  {{user.email}}
        div.profile-item Id 
          span.profile-text  {{user.user_id}}
        button(:class="{'profile-button':true,'cancel':true,'-disabled': loading}" v-on:click="deleteProfile()") deletar
</template>

<script>
import { db, auth } from '@/database';
export default {
  data(){
    return {
      loading : false
    }
  },
  computed: {
    user(){
      return this.$store.state.user
    }
  },
  methods :{
    deleteProfile(){
      this.loading = true
      var userAuth = auth.currentUser;
      db.collection('users').doc(this.user.cpf).delete()
      .then(()=>{
        auth.signOut().then( () => {
          this.$router.push({ name : 'Home'})
            userAuth.delete()
          }).catch(function(err) {
            console.log(err);
            this.$router.push({ name: "Home" })
        });
        
      })
    }
  },
  created(){
    this.$store.dispatch('emitAuth')
  },
}
</script>