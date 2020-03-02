<template>
  <div class="observer__box" v-show="observing">
     <div class="observer__spinner"></div>
  </div>
</template>

<script>
export default {
  name  : 'loader',
  props : {
    observing : Boolean
  }
}
</script>