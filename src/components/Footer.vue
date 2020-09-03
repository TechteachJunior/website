<template>
  <footer>
    <div class="d-flex align-items-center justify-content-center">
      <span class="instagram"><a href="https://www.instagram.com/techteachjunior/?hl=es" target="_blank">instagram</a></span>
      <span class="youtube"><a href="https://www.youtube.com/channel/UCcEcmhkUhx4T663twEUZu_g" target="_blank">youtube</a></span>
      <span class="email"><a href="mailto:info@techteachjunior.com?Subject=Hola Tech teachers">Email</a></span>
    </div>
  </footer>
</template>
<script>
   export default {
      name:"Footer-component"
   }
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch&family=Poppins:wght@400;700&display=swap');

  $blue: #282C82;
  $purple: #4F539E;
  $purple-light: #A5B4E5;
  $yellow: #F8EB7C;
  $light: #FAF6F6;
  $coral: #ff8552;
  $red: #e84855;

  footer {
    background-color: $red;
    padding: 30px;
    a {
      color: $light !important;
    }
    span {
      margin: 0 15px;
    }
  }

</style>