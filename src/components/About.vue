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
            <article>
               <div class="container">
                  <div class="row align-items-center">
                     ¿Qué es TechTeach?
                  </div>
               </div>
            </article>
            <article id="learning-options">
              <div class="title">
                <h2><i class="fas fa-users mr-2"></i>El equipo detrás de TechTeach</h2>
              </div>
              <div class="content coral-background">
                <CoursesBegin />
              </div>
            </article>
            <article id="learning-options">
              <div class="title">
                <h2><i class="fas fa-keyboard mr-2"></i>Escribenos</h2>
              </div>
              <div class="content coral-background">
                <CoursesBegin />
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