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
                     <p>TechTeach es un proyecto voluntario donde brindamos acceso a las niñas y los niños al mundo de la programación y la computación. </p>

                     <p>Hoy en día se puede aprender de todo en línea, sólo hay que saber dónde encontrar los recursos. En esta página proporcionamos una compilación de recursos buenos y divertidos en español para fomentar este aprendizaje. También tenemos nuestro propio canal en <a href="https://www.youtube.com/channel/UCcEcmhkUhx4T663twEUZu_g" target="_blank">YouTube (TechTeach Junior)</a> donde subimos tutoriales de computación para niñas y niños.</p>

                     <p>Esta idea nació de la experiencia tras dar clases presenciales de programación y computación. Esta página puede ser utilizada para dar clase o individualmente por la niña/el niño. Siempre estamos mejorando y ampliando el contenido, por tanto sugerencias son siempre bienvenidas.</p>
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
            <!-- <article id="contact">
              <div class="title">
                <h2><i class="fas fa-keyboard mr-2"></i>Escríbenos</h2>
              </div>
              <div class="content">
                 <ContactForm />
              </div>
            </article> -->
         </section>
      </main>
   </div>
</template>

<script>
   import SubHeader from '../components/SubHeader'
   import Team from '../components/Team'
   // import ContactForm from '../components/ContactForm'
   export default {
      name: 'About',
      components: {
         SubHeader,
         Team
         // ContactForm
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
         background-color: $blue;
      }
      h1 {
         color: $purple-light;
      }
      p {
         color: $light;
         @media (min-width: 1200px) {
            font-size: 1.2rem;
         }
      }
      a {
         color: $light !important;
         text-decoration: underline;
         &:hover {
            color: $yellow !important;
         }
      }
   }
   #team {
      .card {
         border: none;
         border-radius: 0;
         .card-body .image{
            background-size: cover;
            background-position: center;
            max-width: 100%;
            height: 440px;
            width: 100%;
            @media (min-width: 560px) {
               height: 560px;
            }
            @media (min-width: 768px) {
               height: 450px;
            }
            @media (min-width: 992px) {
               height: 480px;
            }
            @media (min-width: 1200px) {
               height: 340px;
            }
            @media (min-width: 1560px) {
               height: 470px;
            }
            &#teamFirst {
               background-image: url('../assets/images/team/elena-fuentes.jpeg');
            }
            &#teamSecond {
               background-image: url('../assets/images/team/mayra-amador.jpeg');
            }
            &#teamThird {
               background-image: url('../assets/images/team/susy-fuentes.jpeg');
            }
         }
         .card-footer {
            background-color: $purple-light;
            border-radius: 0;
         }
      }
   }
   #contact {
      .content {
         background-color: $purple-light;
      }
      label {
         font-size: 1.2rem;
      }
   }
</style>