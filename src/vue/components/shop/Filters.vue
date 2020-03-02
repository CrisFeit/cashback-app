<template>
  <section class="trees trees--cluster">
    <h5 class="trees__title page-title">Loja</h5>
    <section  class="trees__box trees__box--cluster"
              v-on:mouseleave="hideSub()"
    >
    <template v-for="category in categories">
        <div :class="{'trees__branch':true,'trees__resize': cat,'trees__resize-2': categories.length > 1 &&categories.length < 3}" :key="category">
          <label 
                :class="{'trees__label':true,'trees__label--hover':hoverLabel == category,'trees__label--active': activeLabel == category}" 
                v-bind:for="category" 
                v-on:click="uncheck"
                v-on:mouseenter="displaySub(category)"
          >
            <figure class="trees__figure" >
                  <i class="trees__img" :title="category"></i>
            </figure>
                  <h6 class="trees__label-title">{{ category }} </h6>
            <input type="radio" class="input__radio"
                    v-bind:id="category"
                    v-bind:value="category"
                    v-on:change="filtrate"
                    v-model="update.data"
            />
          </label>
        </div>
    </template>
    </section>
  </section>
</template>
  
<script>

export default {
  name: 'cluster-trees',
  data() {
    return {
      categories: ['boca','olhos','rosto','unhas'],
      update    : {
        name    : 'categories',
        data    :  '',
      },
      activePanel : '',
      hoverLabel  : '',
      activeLabel : '',
    };
  },
  computed: {
    dept() {
      return this.categories.length > 6;
    },
    cat() {
      return this.categories.length < 2;
    },
    cluster() {
      return this.categories.length < 4;
    }
  },
  methods: {
    uncheck(){
      if(this.update.data === event.target.value){
        this.update.data = 'maquiagem';
        this.activeLabel = '';
        this.filtrate();
      }
    },
    hideSub(){
      this.hoverLabel   = '';
      this.activePanel  = '';
    },
    displaySub(sub){
      this.hoverLabel = sub;
      this.activePanel = sub;
    },
    filtrate() {
      this.$emit('change-data', this.update);
      this.activeLabel = this.update.data 
     }
    }
}
</script>