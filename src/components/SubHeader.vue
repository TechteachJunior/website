<template>
  <div class="sub-header">
    <div class="text-center">
    <section class="image-sub-header"></section>
    <!-- <img alt="sub-header" class="img-fluid mx-auto" src="../assets/images/TechTeach-banner.gif"> -->
    </div>
  </div>
</template>
<script>
   export default {
      name:"SubHeader-component"
   }
</script>
<style>
  .image-sub-header {
    position: relative;
    background-image: url('../assets/images/TechTeach-banner.gif');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 700px
  }
</style>