<template>
    <div class="trees__layer">{{ chosen }}</div>
</template>

<script>
export default {
  name  : 'layer',
  props : {
      department :String,
      category   :String
  },
  computed :{
    chosen(){
      if(this.category !== ''){
        return this.category.indexOf('/') != -1 ? this.category.split('/')[1] : this.category
      }else{
        return this.department.indexOf('/') != -1 ? this.department.split('/')[1] : this.department
      }
    }
  },
}
</script>
