<template>
  <div id="app">
    <div class="wrapper">
      <Header />
    </div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  export default {
    name: 'app',
    components: {
      Header,
      Footer
    },
    watch: {
      message: {
        immediate: true,
        handler: function (to) {
          // Show correct title in tab (defined in routes.js)
          document.title = to.meta.title || 'TechTeach Junior'
        }
      }
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


  .container-fluid{
    padding: 0 !important;
  }
  .title {
    padding: 2rem 2rem;
    display: flex;
    align-items: center;
    color: $blue;
    h2 {
      font-weight: 700;
      font-size: 1.2rem;
      @media (min-width: 1200px) {
        font-size: 2rem;
      }
    }
  }
  #app {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 18px;
  }
  small {
    font-size: 0.8em;
  }
  strong, b {
    font-weight: 700;
  }
  header {
    nav {
      background-color: $blue;
      a {
        &:hover {
          text-decoration: none;
        }
      }
      .logo img{
        width: 40px;
        @media (min-width: 600px) {
          width: 50px;
        }
        @media (min-width: 1200px) {
          width: 60px;
        }
      }
      .logo-text {
        color: $light;
        font-weight: 700;
        .logo-title {
          font-size: 0.8rem;
          @media (min-width: 992px) {
            font-size: 1rem;
          }
          @media (min-width: 1200px) {
            font-size: 1.5rem;
          }
        }
      }
      .logo-slang {
        font-size: 0.6rem;
        @media (min-width: 1200px) {
          font-size: 1rem;
        }
      }
      &.navbar {
        @media (min-width: 992px) {
          z-index: 1;
          width: 100%;
          position: fixed;
        }
      }
      &.navbar-light .navbar-toggler {
        background-color: $purple-light;
      }
      .nav-item {
        @media (min-width: 1200px) {
          padding: 0 1rem;
        }
      }
      .nav-link {
        color: $light !important;
        font-weight: 700;
        border-bottom: 2px solid transparent;
        @media (min-width: 1200px) {
          font-size: 1.5rem;
        }      
        &:hover, &:active {
          border-bottom: 2px solid $yellow;
        }
        a {
          color: $light !important;
          font-weight: 700;
          text-decoration: none;
        }
      }
      .dropdown-menu {
        background-color: $yellow;
         @media (min-width: 992px) {
          font-size: 1.5rem;
        }  
        a {
          color: $blue;
          font-weight: 700;
        }
      }
    }
  }
  .sub-header {
    background-color: $blue;
    @media (min-width: 992px) {
      padding-top: 86px;
    }
  }
  #question {
    background-color: $yellow;
    h1 {
      color: $blue;
      font-family: 'Poppins', sans-serif;
      font-weight:  700;
      font-size: 1.5em;
      @media (min-width: 600px) {
        font-size: 2em;
      }
      @media (min-width: 1200px) {
        font-size: 2.6667em;
      }
    }
  }

  #menu-learning-option {
    background-color: $light;
    padding: 2rem 0;
    a {
      font-weight: 700;
      border: none;
      text-decoration: none;
      &.programming-link {
        background-color: transparent;
        color: $blue !important;
        width: 0;
        height: 0;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-bottom: 150px solid $purple-light;
        line-height: 150px;
        display: flex;
        justify-content: center;
        @media (min-width: 992px) {
          border-left-width: 150px;
          border-right-width: 150px;
          border-bottom-width: 200px;
          line-height: 200px;
        }
        span {
          margin-top: 1rem;
          @media (min-width: 992px) {
            font-size: 1.5rem;
          }
        }
      }
      &.google-drive-link {
        background-color: $purple;
        color: $yellow !important;
        height: 150px;
        width: 150px;
        line-height: 150px;
        @media (min-width: 992px) {
          height: 200px;
          width: 200px;
          line-height: 200px
        }
        span {
          @media (min-width: 992px) {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  .course-level {
    color: $blue;
    font-weight: 700;
  }
  .content {
    background-color: $blue;
    padding: 2rem 0;
    &.coral-background {
      background-color: $coral;
    }
    &.yellow-background {
      background-color: $yellow;
    }
    a:hover {
      text-decoration: none;
    }
    ul {
      padding: 0;
      li {
        list-style: none;
        margin-top: 1rem;
      }
    }
    .card {
      height: 100%;
      border-color: $light;
      .card-header {
        font-weight: 700;
        border: none;
        .course-title {
          color:$black;
        }
        .course-logo {
          max-width: 40px;
          margin-right: 15px;
          float: left;
        }
      }
      .card-body {
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .card-footer {
        border: none;
        .decription-text {
          color: $black;
        }
        .course-type {
          background-color: transparent;
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 30px solid $purple-light;
        }
        .course-type-google {
          background-color: $purple;
          color: $yellow !important;
          height: 30px;
          width: 30px;
          line-height: 30px;
        }
        .course-type-personalized {
          max-width: 40px;
        }
      }
    }
  }
  #courses {
    .btn-default {
      @media (min-width: 992px) {
        min-width: 400px;
      }
    }
  }
  .btn-default {
    background-color: $yellow !important;
    border-radius: 0 !important;
    font-weight: 700 !important;
    font-size: 1rem !important;
    @media (min-width: 992px) {
      font-size: 1.5rem !important;
    }
    &:hover {
      background-color: $light !important;
    }
  }
  a {
    color: $blue !important;
  }
</style>

