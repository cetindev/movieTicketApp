<script>
export default {
  name:'Home',
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('fetchMovies')
  }
}
</script>


<template>
  
</template>


<style>

</style>script

