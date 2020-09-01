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

  .container-fluid{
    padding: 0 !important;
  } 
  .title {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
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
        color: $yellow;
        font-weight: 700;
      }
      .nav-link {
        color: $yellow !important;
        font-weight: 700;
        &:hover, &:active {
          border-bottom: 2px solid $purple-light;
        }
        a {
          color: $yellow !important;
          font-weight: 700;
          text-decoration: none;
        }
      }
    }
  }
  .sub-header {
    background-color: $blue;
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
        color: $yellow;
        height: 150px;
        width: 150px;
        line-height: 150px;
      }
    }
  } 
  .content {
    ul {
      padding: 0;
      li {
        list-style: none;
        margin-top: 1rem;
      }
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

