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
            <div class="d-flex flex-column flex-md-row justify-content-around">
               <div class="d-flex justify-content-center align-items-center mx-auto text-center"><router-link to="program-courses" class="programming-link">Programar</router-link></div>
               <div class="d-flex justify-content-center align-items-center text-center"><router-link to="typing-courses" class="typing-link">Type</router-link></div>
               <div class="d-flex justify-content-center align-items-center mx-auto text-center"><router-link to="google-drive-courses" class="google-drive-link">Google Drive</router-link></div>
            </div>
            </article>
            <article id="learning-options">
              <div class="title">
                <h2>Empezar por aquí</h2>
              </div>
              <div class="content">
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
              <div class="content">
                
              </div>
            </article>
            <article id="otherLearn">
              <div class="title">
                <h2>¿Qué enseñan otros y otros tutores?</h2>
              </div>
              <div class="content">
                
              </div>
            </article>
         </section>
      </main>
      <!--This is what it's really about!-->
      <ChatBox class="fixed-bottom mb-5"/>
   </div>
</template>

<script>

   import ChatBox from '../components/ChatBox'
   import Courses from '../components/Courses'
   import CoursesBegin from '../components/CoursesBegin'
   export default {
      name: 'Teach',
      components: {
         ChatBox,
         Courses,
         CoursesBegin
      }
   }

</script>