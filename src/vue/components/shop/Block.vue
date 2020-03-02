<template>
  <div class="filter__block" v-show="blocking"></div>
</template>

<script>
export default {
  name  : 'block',
  props : {
    blocking : Boolean
  }
}
</script>