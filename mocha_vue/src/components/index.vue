<template>
   <div class="page">
       <h3>{{count}}</h3>
       <button @click="bbb"></button>
   </div>
</template>

<script>
   export default {
       data() {
           return {
               count:100
           }

       },
       methods: {
           bbb(){
               this.count++
           }
       },
       components: {

       }
   }
</script>

<style scoped >


</style>
