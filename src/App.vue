<template>
  <div id="app">
    <div class="wrapper">
      <Header />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header'
  export default {
    name: 'app',
    components: {
      Header
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
</style>

