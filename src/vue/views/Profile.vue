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
    section.profile-card(v-else)
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
      return this.$store.state.user  instanceof Promise ? null : this.$store.state.user  
    }
  },
  methods :{
    deleteProfile(){
      this.loading = true
      let userAuth = auth.currentUser;
      if(this.user){
          db.collection('users').doc(this.user.cpf).delete()
          .then(()=>{
            auth.signOut()
          .then( () => {
            this.$router.push({ name : 'Home'})
            userAuth.delete()
          .then(()=>{
            return    
          }).catch(function(err) {
                console.log(err);
          });
        })    
      })
    }else{
        auth.signOut()
        .then(()=>{
          this.$router.push({ name : 'Home'})
          userAuth.delete()
        .then( () => {
            return    
          }).catch(function(err) {
                console.log(err);
          });
        })
      }
    }
  },
  created(){
    this.$store.dispatch('emitAuth')
    
  },
}
</script>