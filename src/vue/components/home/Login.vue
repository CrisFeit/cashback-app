<template  lang="pug">
  section.login
    form(class="form" v-on:submit.prevent="login" autocomplete="off")
      h4.title Login para Portal de Representante
      include ../../includes/loading-bar.pug
      include ../../includes/form-fields.pug
      +formFields({
        textButton : "Entrar"
      })
      p.redirect Ainda não é representante ? 
       router-link(class="redirect-link" :to="{ name: 'Signup' }") Cadastre-se aqui
</template>

<script>
import { auth } from '@/database';
export default {
  name: 'Login',
  data(){
    return {
      email : null,
      password : null,
      feedback : '',
      danger   :true,
      loading: false,
    }
  },
  methods : {
    login() {
      if(this.email && this.password){
        this.loading = true
        this.danger = false
        this.feedback = 'Aguarde ...'
        auth.signInWithEmailAndPassword(this.email,this.password)
        .then( () => {
          this.$router.push({ name : 'Shop'})
        }).catch(err => {
          this.danger = true
          this.loading = false
          err.code === 'auth/user-not-found' ? this.feedback =  'Usuário não cadastrado': 
          err.code === 'auth/wrong-password' ? this.feedback = 'Senha incorreta' : 
          this.feedback = 'Senha ou usuário incorreto';
        })
        this.feedback = null
      }
      else{
        this.danger = true
        this.loading = false
        this.feedback = 'Preencha todos os campos'
      }
    }
  }
};
</script>