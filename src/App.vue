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

 
  .container-fluid{
    padding: 0 !important;
  } 
  .title {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    color: $purple;
    h2 {
      font-weight: 700;
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
      .logo-text {
        color: $light;
        font-weight: 700;
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
      .nav-link {
        color: $light !important;
        font-weight: 700;
         border-bottom: 2px solid transparent;
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
        background-color: $purple-light;
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
      padding-top: 90px;
    }
  }
  #question {
    background-color: $yellow;
    h1 {
      color: $blue;
      font-family: 'Cabin Sketch', cursive;
      font-weight:  400;
      font-size: 2.6667em;
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
        color: $purple;
        width: 0;
        height: 0;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-bottom: 150px solid $yellow;
        line-height: 150px;
        display: flex;
        justify-content: center;
        span {
          margin-top: 1rem;
        }
      }
      &.typing-link {
        background-color: $purple-light;
        color: $blue;
        height: 150px;
        width: 150px;
        border-radius: 50%;
        line-height: 150px;
      }
      &.google-drive-link {
        background-color: $purple;
        color: $yellow !important;
        height: 150px;
        width: 150px;
        line-height: 150px;
      }
    }
  } 
  .course-level {
    color: $purple;
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
        button {
          padding: 0;
          border: none;
        }
      }
      .card-footer {
        border: none;
        .course-type {
          background-color: transparent;
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 30px solid #F8EB7C
        }
        .course-type-google {
          background-color: $purple;
          color: $yellow !important;
          height: 30px;
          width: 30px;
          line-height: 30px;
        }
      }
    }
  }
  .modal {
    font-size: 1.2em;
    .course-logo {
      max-width: 40px;
      float: left;
    }
    .modal-body {
      .course-image {
        img {
          max-width: 250px;
        }
      }
    }
    .btn-secondary {
      border-radius: 0;
      background-color: $blue;
      border-color: $blue;
      color: $light;
      &:hover {
        background-color: $purple-light;
        border-color: $purple-light;
        color: $blue;
      } 
    }
  }
  .btn-secondary {
    border-radius: 0;
    background-color: $blue;
    border-color: $blue;
    color: $light;
    &:hover {
      background-color: $purple-light;
      border-color: $purple-light;
      color: $blue;
    }
  }
  a {
    color: $blue !important;
  }
</style>

