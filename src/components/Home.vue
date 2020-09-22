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
                  <h1 class="learn-question text-center">¿Qué aprenderemos hoy?</h1>
                  </div>
               </div>
            </div>
            </article>
            <article id="menu-learning-option">
              <MenuOptions />
            </article>
            <article id="learning-options">
              <div class="title">
                <h2><i class="fas fa-star"></i>Empezar por aquí</h2>
              </div>
              <div class="content coral-background">
                <CoursesBegin />
              </div>
            </article>
            <article id="courses">
              <div class="title">
                <h2>Los cursos</h2>
              </div>
              <div class="content">
                <Courses />
              </div>
            </article>
            <article id="discoverMore">
              <div class="title">
                <h2>Descrube más</h2>
              </div>
              <div class="content yellow-background">
                
              </div>
            </article>
         </section>
      </main>
      <!--This is what it's really about!-->
      <!-- <ChatBox class="fixed-bottom mb-5"/> -->
   </div>
</template>

<script>
   // import ChatBox from '../components/ChatBox'
   import Courses from '../components/Courses'
   import CoursesBegin from '../components/CoursesBegin'
   import MenuOptions from '../components/MenuOptions'
   export default {
      name: 'Home',
      components: {
         // ChatBox,
         Courses,
         CoursesBegin,
         MenuOptions
      }
   }
</script>