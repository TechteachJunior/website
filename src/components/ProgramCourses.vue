<template>
   <div class="container-fluid" id="ProgramCourses">   
      <main role="main">
        <div class="sub-header"><h1>Cursos de programación</h1></div>
        <section role="section">
          <article id="scratchCourses">
            <div class="title">
              <img class="img-fluid course-logo-header" src="../assets/images/logos/scratch-logo.png"><h2>Scratch</h2>
            </div>
            <div class="content">
              <CoursesScratch />
            </div>
          </article>
          <article id="codeOrgCourses">
            <div class="title">
              <img class="img-fluid course-logo-header" src="../assets/images/logos/code-org.png"><h2>Code Org</h2>
            </div>
            <div class="content">
              <CoursesCodeOrg />
            </div>
          </article>
          <article id="codeOrgCourses">
            <div class="title">
              <img class="img-fluid course-logo-header" src="../assets/images/logos/csfirst.png"><h2>CSFirst</h2>
            </div>
            <div class="content">
              <CoursesCsfirst />
            </div>
          </article>
        </section>
      </main>
   </div>
</template>

<script>
  import CoursesScratch from '../components/CoursesScratch'
  import CoursesCodeOrg from '../components/CoursesCodeOrg'
  import CoursesCsfirst from '../components/CoursesCsfirst'
  export default {
    name: 'ProgramCourses',
    components: {
      CoursesScratch,
      CoursesCodeOrg,
      CoursesCsfirst,
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

  #ProgramCourses {
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
