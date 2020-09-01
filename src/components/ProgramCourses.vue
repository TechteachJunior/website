<template>
   <div class="container-fluid" id="ProgramCourses">   
      <main role="main">
        <div class="sub-header"><h1>Program courses</h1></div>
        <section role="section">
          <article id="scratchCourses">
            <div class="title">
              <img class="img-fluid course-logo" src="../assets/images/logos/scratch-logo.png"><h2>Scratch</h2>
            </div>
            <div class="content">
              <CoursesScratch />
            </div>
          </article>
          <article id="codeOrgCourses">
            <div class="title">
              <img class="img-fluid course-logo" src="../assets/images/logos/code-org.png"><h2>Code Org</h2>
            </div>
            <div class="content">
              <CoursesCodeOrg />
            </div>
          </article>
        </section>
      </main>
   </div>
</template>

<script>
  import CoursesScratch from '../components/CoursesScratch'
  import CoursesCodeOrg from '../components/CoursesCodeOrg'
  export default {
    name: 'ProgramCourses',
    components: {
      CoursesScratch,
      CoursesCodeOrg
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
      background-color: $yellow;
      h1 {
        font-family: 'Cabin Sketch', cursive;
        font-weight:  400;
        font-size: 2.6667em;
        color: $blue;
      }
    }
    .title {
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
    }
    .course-logo {
      max-width: 70px;
      margin-right: 15px;
    }
    .content {
      background-color: $purple-light;
      padding: 2rem 0;
    }
    li {
      list-style: none;
    }
    .card {
      .card-header {
        .course-logo {
          max-width: 40px;
          float: left;
        }
      }
      .card-body {
        padding: 0;
        button {
          padding: 0;
          border: none;
        }
      }
      .card-footer {
        .course-type {
          background-color: transparent;
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 30px solid #F8EB7C
        }
      }
    }
  }
</style>
