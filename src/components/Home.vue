<template>
   <div>
      <section role="section">
         <SubHeader />
      </section>
      <main role="main">
         <section role="section">
            <article id="menu-learning-option">
               <MenuOptions />
            </article>
            <article id="question">
               <div class="container">
                  <div class="row align-items-center">
                     <div class="col-8 col-md-4 col-lg-3 px-5 mx-auto">
                        <a class="chatbot-link" href="#">
                           <img alt="chatbot" src="../assets/images/chatbot/SambotNormal-01.svg">
                        </a>
                     </div>
                     <div class="col-12 col-md-8 col-lg-9">
                        <h1 class="learn-question text-center mb-4 mb-md-0">¿Qué aprenderemos hoy?</h1>
                     </div>
                  </div>
               </div>
            </article>
            <article id="week-options">
               <div class="content pt-0 blue-background">
                  <div class="py-3 px-3">
                     <p class="text-white text-center"><i class="fas fa-comment-dots mr-2"></i><b>¡Hola!, soy Sammi, y esta semana te invito a empezar los siguientes cursos. ¿Te apuntas?</b> </p>
                     <p class="mb-0 text-white text-center"><small>Comparte tus progresos conmigo en Instagram <i class="fab fa-instagram"></i> - <b><a class="text-white" href="https://www.instagram.com/techteachjunior/?hl=es" target="_blank">techteachjunior</a></b> <i class="fas fa-heart"></i></small></p>
                  </div>
                  <CoursesWeek />
               </div>
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
                <h2><i class="fas fa-shapes mr-2"></i>Los cursos</h2>
              </div>
              <div class="content">
                <Courses />
              </div>
            </article>
            <article id="typingClub">
              <div class="title">
                <h2><i class="fas fa-keyboard mr-2"></i>Typing Club</h2>
              </div>
              <div class="content purple-light-background text-center">
                 <h3><b>Curso gratis de mecanografía en español</b></h3>
                 <div class="mb-3">
                  <img alt="Typing Club Logo" src="../assets/images/logos/typingclub_logo.png">
                 </div>
                 <p class="mb-1">Aprender dactilografía online es una habilidad fácil y útil para aprender.</p><p> TypingClub es un curso para mejorar la mecanografía en español.</p>
                 <div class="col-12 col-sm-8 col-xl-6 mx-auto">
                  <a href="https://www.typingclub.com/sportal/program-3.game" target="_blank"><img class="img-fluid" alt="Typing Club Logo" src="../assets/images/typing-club.webp"></a>
                 </div>
              </div>
            </article>
            <article id="discoverMore">
              <div class="title">
                <h2><i class="fas fa-lightbulb mr-2"></i>Descubre más</h2>
              </div>
              <div class="content yellow-background">
                <DiscoverMore />
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
   import SubHeader from '../components/SubHeader'
   import Courses from '../components/Courses'
   import CoursesWeek from '../components/CoursesWeek'
   import CoursesBegin from '../components/CoursesBegin'
   import MenuOptions from '../components/MenuOptions'
   import DiscoverMore from '../components/DiscoverMore'
   export default {
      name: 'Home',
      components: {
         // ChatBox,
         SubHeader,
         Courses,
         CoursesWeek,
         CoursesBegin,
         MenuOptions,
         DiscoverMore,
      }
   }
</script>