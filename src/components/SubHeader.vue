<template>
  <div class="sub-header">
    <div>
    <!-- <section class="image-sub-header"></section> -->
    <img alt="sub-header" class="img-fluid mx-auto" src="../assets/images/animated-subheader.jpg">
    <div class="rectangle"></div>
    <div class="triangle"></div>
    <div class="circle"></div>
    <div class="rectangle"></div>
    <div class="circle"></div>
    </div>
  </div>
</template>
<script>
   export default {
      name:"SubHeader-component"
   }
</script>
<style lang="scss">
  $blue: #282C82;
  $purple: #4F539E;
  $purple-light: #A5B4E5;
  $yellow: #F8EB7C;
  $light: #FAF6F6;
  $coral: #ff8552;
  $red: #e84855;
  $black: #212529;
  .image-sub-header {
    position: relative;
    background-image: url('../assets/images/TechTeach-banner.gif');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 700px
  }
  .triangle {
    margin: 0 auto;
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
    animation: borderColor 5s infinite;
    @media (min-width: 992px) {
      border-left-width: 150px;
      border-right-width: 150px;
      border-bottom-width: 200px;
      line-height: 200px;
    }
  }
  .rectangle {
    margin: 0 auto;
    background-color: $purple;
    color: $yellow !important;
    height: 150px;
    width: 150px;
    line-height: 150px;
    animation: rotation 4s infinite linear;
    @media (min-width: 992px) {
      height: 200px;
      width: 200px;
      line-height: 200px
    }
  }
  .circle {
    margin: 0 auto;
    background-color: $purple-light;
    color: $blue;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    line-height: 200px;
    // animation: circle 4s infinite;
    animation: pulse 3s ease infinite alternate, nudge 5s linear infinite alternate;
  }
  @keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
  }
  @keyframes borderColor {
    0%   {border-bottom-color: $purple-light;}
    50%   {border-bottom-color: $red;}
    100% {border-bottom-color: $yellow;}
  }
  @keyframes rectangle {
    from {background-color:$purple;}
    to {background-color: $yellow;}
  }
  @keyframes circle {
    from {background-color: $yellow;}
    to {background-color: $red;}
  }
  @keyframes pulse {
    0%, 100% {
      background-color: $yellow;
    }
    50% {
      background-color: $red;
    }
  }

  @keyframes nudge {
    0%, 100% {
      transform: translate(0, 0);
    }
    
    50% {
      transform: translate(150px, 0);
    }
    
    80% {
      transform: translate(-150px, 0);
    }
  }
  
</style>