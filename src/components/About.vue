<template>
   <div class="wrapper">
      <section role="section">
         <SubHeader />
      </section>
      <main role="main">
         <section role="section">
            <article id="aboutUs">
               <div class="container">
                  <div class="p-3 p-lg-5">
                     <h1 class="text-center"><b>¿Qué es TechTeach?</b></h1>
                     <p>TechTeach es un proyecto voluntario donde brindamos acceso a l@s nin@s al mundo de programación y computación. </p>

                     <p>Hoy en día se puede aprender de todo en linea, sólo hay que saber dónde encontrar los recursos. En esta página presentamos una compilación de recursos buenos y divertidos en español. También tenemos nuestro propio canal en <a href="https://www.youtube.com/channel/UCcEcmhkUhx4T663twEUZu_g" target="_blank">YouTube (TechTeach Junior)</a> donde subimos tutoriales de computación para niñ@s.</p>

                     <p>Esta idea nació de la experiencia de fisicamente dar clase de programación y computación. Esta página puede ser utilizada para dar clase o individualmente por el/la niñ@. Siempre estamos mejorando y amplificando el contenido y sugerencias siempre son bienvenidas.</p>
                  </div>
               </div>
            </article>
            <article id="team">
               <div class="title">
                  <h2><i class="fas fa-users mr-2"></i>El equipo detrás de TechTeach</h2>
               </div>
               <div class="content">
                  <Team />
               </div>
            </article>
            <article id="contact">
              <div class="title">
                <h2><i class="fas fa-keyboard mr-2"></i>Escríbenos</h2>
              </div>
              <div class="content">
                 <ContactForm />
              </div>
            </article>
         </section>
      </main>
   </div>
</template>

<script>
   import SubHeader from '../components/SubHeader'
   import Team from '../components/Team'
   import ContactForm from '../components/ContactForm'
   export default {
      name: 'About',
      components: {
         SubHeader,
         Team,
         ContactForm
      }
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
      background-color: $yellow;
      padding-top: 4rem;
         padding-bottom: 4rem;
      .container {
         background-color: $light;
      }
      h1 {
         color: $blue;
      }
   }
   #team {
      .card {
         border: none;
         border-radius: 0;
      }
      .card-footer {
         background-color: $purple-light;
         border-radius: 0;
      }
   }
   #contact {
      .content {
         background-color: $purple-light;
      }
   }
</style>