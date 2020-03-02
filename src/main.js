import Vue from "vue";
import App from "./vue/App.vue";
import router from "./vue/router/routes";
import store from "./vue/store";
import { auth } from '@/database';

Vue.config.productionTip = false;

let vm = null;
// Espera o serviço de autenticação iniciar antes de criar a aplicação 
auth.onAuthStateChanged(() => {  
  if(!vm){
   vm = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})
