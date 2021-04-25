<template>
   <div class="container-fluid" id="MinecraftCourses">   
      <main role="main">
        <div class="sub-header"><h1>Cursos de Minecraft</h1></div>
        <section role="section">
          <article id="codeOrgCourses">
            <div class="title">
              <img class="img-fluid course-logo-header" src="../assets/images/logos/minecraft-logo.png"><h2>Minecraft</h2>
            </div>
            <div class="content">
              <CoursesMinecraft />
            </div>
          </article>
        </section>
      </main>
   </div>
</template>

<script>
  import CoursesMinecraft from '../components/CoursesMinecraft'
  export default {
    name: 'MinecraftCourses',
    components: {
      CoursesMinecraft
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

  #MinecraftCourses {
    .sub-header {
      padding: 2rem 2rem;
      background-color: $purple-light;
      @media (min-width: 992px) {
        padding-top: calc(90px + 2rem);
      }
      h1 {
        font-weight:  700;
        color: $blue;
        font-size: 1.5em;
        @media (min-width: 600px) {
          font-size: 2em;
        }
        @media (min-width: 1200px) {
          font-size: 2.6667em;
        }
      }
    }
    .course-logo-header {
      max-width: 70px;
      margin-right: 15px;
    }
    .content {
      background-color: $purple-light;
      padding: 2rem 0;
    }
  }
</style>
