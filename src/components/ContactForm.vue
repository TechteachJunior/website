<template>
  
</template>
<script>
  export default {
    name:"Form"    
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

  .form-container {
    label {
      font-weight: 700;
    }
    input {
      border-radius: 0;
      height: calc(2.5em + 0.75rem + 2px);
    }
    .btn-primary {
      background-color: $yellow !important;
      border-radius: 0 !important;
      font-weight: 700 !important;
      font-size: 1rem !important;
      color: $blue;
      border-color: transparent;
      min-width: 210px;
      @media (min-width: 992px) {
        font-size: 1.5rem !important;
      }
      &:hover {
        background-color: $blue !important;
        color: $yellow;
      }
    }
  }
</style>