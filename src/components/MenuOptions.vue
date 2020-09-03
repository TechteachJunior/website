<template>
  <div class="d-flex flex-column flex-md-row justify-content-around">
    <div class="d-flex mb-2 mb-sm-0 justify-content-center align-items-center mx-auto text-center"><router-link to="program-courses" class="programming-link"><span>Programar</span></router-link></div>
    <!-- <div class="d-flex justify-content-center align-items-center text-center"><router-link to="typing-courses" class="typing-link">Type</router-link></div> -->
    <div class="d-flex justify-content-center align-items-center mx-auto text-center"><router-link to="google-drive-courses" class="google-drive-link"><span>Google</span></router-link></div>
  </div>
</template>

<script>
   export default {
      name: 'MenuOptions'
   }
</script>