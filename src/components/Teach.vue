<template>
   <div>
      <section role="section">
         <div class="sub-header">
            <div class="text-center">
            <img alt="sub-header" class="img-fluid mx-auto" src="../assets/images/sub-header.jpg">
            </div>
         </div>
      </section>
      <main role="main">
         <section role="section">
            <article id="question">
            <div class="container">
               <div class="row align-items-center">
                  <div class="col-8 col-md-4 col-lg-3 px-5 mx-auto">
                  <a class="chatbot-link" href="#">
                     <img alt="chatbot" src="../assets/images/chatbot/SambotNormal-01.svg">
                  </a>
                  </div>
                  <div class="col-12 col-md-8 col-lg-9">
                  <h1 class="learn-question text-center">¿Qué enseñaras hoy?</h1>
                  </div>
               </div>
            </div>
            </article>
            <article id="menu-learning-option">
              <MenuOptions />
            </article>
            <article id="learning-options">
              <div class="title">
                <h2><i class="fas fa-star mr-2"></i>Empezar por aquí</h2>
              </div>
              <div class="content coral-background">
                <CoursesBegin />
              </div>
            </article>
            <article id="courses">
              <div class="title">
                <h2><i class="fas fa-shapes mr-2"></i> Los cursos</h2>
              </div>
              <div class="content">
                <Courses />
              </div>
            </article>
            <article id="discoverMore">
              <div class="title">
                <h2><i class="fas fa-lightbulb mr-2"></i> Descubre más</h2>
              </div>
              <div class="content yellow-background">
                <DiscoverMore />
              </div>
            </article>
         </section>
      </main>
   </div>
</template>

<script>

   import Courses from '../components/Courses'
   import CoursesBegin from '../components/CoursesBegin'
   import MenuOptions from '../components/MenuOptions'
   import DiscoverMore from '../components/DiscoverMore'
   export default {
      name: 'Teach',
      components: {
         Courses,
         CoursesBegin,
         MenuOptions,
         DiscoverMore
      }
   }

</script>