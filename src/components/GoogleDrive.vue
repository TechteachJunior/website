<template>
   <div class="container-fluid" id="coursesPage">   
      <main role="main">
        <div class="sub-header"><h1>Cursos de Google Drive</h1></div>
        <section role="section">
          <article id="googleCourses">
            <div class="title">
              <img class="img-fluid course-logo-header" src="../assets/images/logos/google.png"><h2>Google</h2>
            </div>
            <div class="content">
              <CoursesGoogle />
            </div>
          </article>
          <article id="googleCourses">
            <div class="title">
              <img class="img-fluid course-logo-header" src="../assets/images/logos/google-presentations.png"><h2>Google Presentations</h2>
            </div>
            <div class="content">
              <CoursesGooglePresentations />
            </div>
          </article>
          <!-- <article id="googleCourses">
            <div class="title">
              <img class="img-fluid course-logo-header" src="../assets/images/logos/google-docs.png"><h2>Google Documents</h2>
            </div>
            <div class="content">
              <CoursesGoogleDocs />
            </div>
          </article> -->
        </section>
      </main>
   </div>
</template>

<script>
  import CoursesGoogle from '../components/CoursesGoogle'
  import CoursesGooglePresentations from '../components/CoursesGooglePresentations'
  // import CoursesGoogleDocs from '../components/CoursesGoogleDocs'
  export default {
    name: 'GoogleDriveCourses',
    components: {
      CoursesGoogle,
      CoursesGooglePresentations
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

  #coursesPage {
    .sub-header {
      padding: 2rem 2rem;
      background-color: $purple;
      @media (min-width: 992px) {
        padding-top: calc(90px + 2rem);
      }
      h1 {
        font-weight:  700;
        color: $yellow;
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
      background-color: $purple;
      padding: 2rem 0;
    }
  }
</style>
