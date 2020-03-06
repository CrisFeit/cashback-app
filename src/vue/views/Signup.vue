<template lang="pug">
  section.home
    <Header />
      main.main
       section.signup
          form(class="form" v-on:submit.prevent="signup")
            h4.title Cadastro de Representante Eudora
            include ../includes/loading-bar.pug

            fieldset.field
              <input :class="{'input':true,'-labelUp': name }" type="name" name="name" maxlength="50" v-on:keyup="mask($event.target,'0',$event,/[^a-zA-Z\s]+/g)" v-model="name" v-on:focus="feedback = null" />
              label(class="label" for="name") Digite seu Nome

            fieldset.field
              <input :class="{'input cpf':true,'-labelUp': cpf }" type="text" name="cpf"  minlength=14 maxlength="14" v-on:keyup="mask($event.target,'000.000.000-00',$event,/[^\d]+/g)" v-model="cpf"  v-on:focus="feedback = null" />
              label(class="label" for="cpf") Digite seu Cpf
              
              include ../includes/form-fields.pug
              +formFields({
                textButton : "Cadastrar"
              })
    <Footer />
</template>

<script>
import { db , auth} from "@/database";
import Header from "@/vue/components/layout/Header";
import Footer from "@/vue/components/layout/Footer";
import maskInput  from "@/vue/helpers/mask";

export default {
  name: "Signup",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      email: null,
      password: null,
      cpf: null,
      name: null,
      feedback: ' ',
      danger:true,
      loading: false,
    };
  },
  methods: {
    signup() {
      if (this.email && this.password && this.name && this.cpf) {
        (async() => {
        this.loading = true
        this.danger = false
        this.feedback = 'Aguarde ... '
        let ref = db.collection("users").doc(this.cpf)
            if ( await ref.get().then(snapshot => snapshot.exists)) {
              this.danger = true
              this.loading = false
              this.feedback = 'Usuário já cadastrado'
            } else {
                 auth.createUserWithEmailAndPassword(this.email, this.password)
                .then(cred => {
                    ref.set({
                    name: this.name,
                    cpf : this.cpf,
                    email :this.email,
                    user_id: cred.user.uid
                  });
                })
                .then(() => {
                  this.$router.push({ name: "Shop" })
                })
                .catch(err => {
                  this.danger = true
                  this.loading = false
                  err.code == "auth/weak-password"
                    ? (this.feedback = "Senha deve conter no mínimo 6 caracteres")
                    : err.code == "auth/email-already-in-use"
                    ? (this.feedback = "Usuário já cadastrado")
                    : this.feedback = "Preencha os dados corretamente"
                });
            }
        })();
      } else {
        this.danger = true
        this.loading = false
        this.feedback = "Preencha todos os campos"
      }
    },
    mask(input,mask,event,regex){
      return maskInput(input,mask,event,regex)
    }
  }
};
</script>