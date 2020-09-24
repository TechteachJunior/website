<template>
   <div class="wrapper">
      <section role="section">
         <div class="sub-header">
            <div class="text-center">
               <img alt="sub-header" class="img-fluid mx-auto" src="../assets/images/sub-header.jpg">
            </div>
         </div>
      </section>
      <main role="main">
         <section role="section">
            <article id="aboutUs">
               <div class="container">
                  <div class="row align-items-center">
                     ¿Qué es TechTeach?
                  </div>
               </div>
            </article>
            <article id="team">
              <div class="title">
                <h2><i class="fas fa-users mr-2"></i>El equipo detrás de TechTeach</h2>
              </div>
              <div class="content">
  
              </div>
            </article>
            <article id="contact">
              <div class="title">
                <h2><i class="fas fa-keyboard mr-2"></i>Escribenos</h2>
              </div>
              <div class="content">

              </div>
            </article>
         </section>
      </main>
   </div>
</template>

<script>
   export default {
      name: 'About'
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
  $black: #212529;

   #aboutUs {
      background-color: $blue;
      padding-top: 4rem;
         padding-bottom: 4rem;
      .container {
         background-color: $light;
      }
   }
</style>