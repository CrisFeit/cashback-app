import Vue from "vue";
import Vuex from "vuex";
import { auth } from '@/database';
import { db } from '@/database';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user   :  null,
    bag    :  new Set(),
    orders :  []
    },

  mutations: {
    changeUser(state,userData){
       state.user = userData        
    },
    addItem(state,item){
      state.bag.has(item) ? null : state.bag.add(item)
      state.bag = new Set(state.bag)
    },
    removeItem(state,item){
      state.bag.delete(item)
      state.bag = new Set(state.bag)
    },
    updateItem(state,products){
      state.bag = new Set(products)
    },
    emptyBag(state){
      state.bag = new Set()
    },
    updateOrders(state,newOrders){
      state.orders = newOrders
    }
  },
  
  actions: {
    async emitAuth(context){
      let userId   = await auth.currentUser.uid
      let userData = db.collection("users").where('user_id','==',userId).get()
      .then(snapshot =>{
        snapshot.forEach(doc => {
            userData = doc.data()
        });
        context.commit('changeUser', userData)
      }).catch(err => {
        console.log(err)
      })

    },
    storeOrders(context){
      let userId = auth.currentUser.uid
      db.collection('orders').where('user_id','==',userId).onSnapshot(snapshot =>{
        context.commit('updateOrders', snapshot.docChanges().map(change => {
          console.log(change);
          return {
              id    : change.doc.id,
              data : change.doc.data()
            }
        })
        )
      })
    }
  },
  modules: {}
});
