<template>
  <footer>
    <div class="d-flex align-items-center justify-content-center">
      <span class="instagram"><a title="Ir a nuestra cuenta de Instagram" href="https://www.instagram.com/techteachjunior/?hl=es" target="_blank"><i class="fab fa-2x fa-instagram"></i></a></span>
      <span class="youtube"><a title="Ir a nuestro canal de Youtube" href="https://www.youtube.com/channel/UCcEcmhkUhx4T663twEUZu_g" target="_blank"><i class="fab fa-2x fa-youtube"></i></a></span>
      <span class="email"><a title="Envíanos un correo" href="mailto:info@techteachjunior.com?Subject=Hola Tech teachers"><i class="fas fa-2x fa-envelope"></i></a></span>
    </div>
    <div class="w-100 mb-2"></div>
    <div class="text-center copyright">TechTeach Junior ©</div>
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
    padding: 20px;
    a {
      color: $light !important;
      &:hover {
        svg path{
          fill:$yellow;
        }
      }
    }
    span {
      margin: 0 15px;
    }
    .copyright {
      color: $light;
    }
  }

</style>