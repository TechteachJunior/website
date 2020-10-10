<template>
  <div class="sub-header">
    <div class="container-animation">
      <div class="container-circle-first"><div class="circlefirst"><span><b>Jugar</b></span></div></div>
      <div class="container-rectangle-first"><div class="rectangle"></div></div>
      <div class="container-triangle-first"><div class="triangle"></div></div>
      <div class="container-rectangle-second"><div class="rectangle"></div></div>
      <div class="container-circle-second"><div class="circle"><span><b>Crear</b></span></div></div>
      <div class="container-circle-third"><div class="circlefirst"><span><b>Conectar</b></span></div></div>
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

  .container-animation {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: url('../assets/images/confetti.gif');
    background-position: center center;
    background-size: contain;
    background-repeat: repeat;
    background-color: $blue;
    height: 400px;
  }
  .container-triangle-first {
    position: absolute;
    z-index: 5;
  }
  .container-circle-first {
    position: absolute;
    z-index: 6;
    top: 90px;
  }
  .container-circle-second {
    position: absolute;
    z-index: 5;
    bottom: 0;
    left: 35%;
  }
  .container-circle-third {
    position: absolute;
    z-index: 5;
    bottom: 0;
    right: 35%;
  }
  .container-rectangle-first {
    position: absolute;
    left: 25%;
    top: 10%;
    z-index: 4;
    @media (min-width: 992px) {
      left: 40%;
    }
  }
  .container-rectangle-second {
    position: absolute;
    right: 25%;
    bottom: 10%;
    z-index: 1;
    @media (min-width: 992px) {
      left: 40%
    }
  }
  .triangle {
    margin: 0 auto;
    background-color: transparent;
    color: $blue !important;
    width: 0;
    height: 0;
    border-left: 80px solid transparent;
    border-right: 80px solid transparent;
    border-bottom: 130px solid $purple-light;
    line-height: 130px;
    display: flex;
    justify-content: center;
    animation: borderColor 5s infinite;
    @media (min-width: 992px) {
      border-left-width: 100px;
      border-right-width: 100px;
      border-bottom-width: 150px;
      line-height: 150px;;
    }
    @media (min-width: 1560px) {
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
    height: 110px;
    width: 110px;
    line-height: 110px;
    animation: rotation 4s infinite linear;
    @media (min-width: 992px) {
      height: 150px;
      width: 150px;
      line-height: 150px;
    }
    @media (min-width: 1560px) {
      height: 200px;
      width: 200px;
      line-height: 200px;
    }
  }
  .circle {
    margin: 0 auto;
    background-color: $purple-light;
    color: $blue;
    height: 110px;
    width: 110px;
    border-radius: 50%;
    line-height: 110px;
    animation: pulse 3s ease infinite alternate, nudgesecond 5s linear infinite alternate;
    @media (min-width: 992px) {
      height: 150px;
      width: 150px;
      line-height: 150px;
    }
    @media (min-width: 1560px) {
      height: 200px;
      width: 200px;
      line-height: 200px;
    }
    span {
      display: flex;
      justify-content: center;
      color: $light;
      font-size: 0.8rem;
      @media (min-width: 992px) {
        font-size: 1rem;
      }
      @media (min-width: 1560px) {
        font-size: 1.5rem;
      }
    }
  }
  .circlefirst{
    margin: 0 auto;
    background-color: $purple-light;
    color: $blue;
    height: 110px;
    width: 110px;
    border-radius: 50%;
    line-height: 110px;
    animation: pulse 3s ease infinite alternate, nudge 5s linear infinite alternate;
    @media (min-width: 992px) {
      height: 150px;
      width: 150px;
      line-height: 150px;
    }
    @media (min-width: 1560px) {
      height: 200px;
      width: 200px;
      line-height: 200px;
    }
    span {
      display: flex;
      justify-content: center;
      color: $light;
      font-size: 0.8rem;
      @media (min-width: 992px) {
        font-size: 1rem;
      }
      @media (min-width: 1560px) {
        font-size: 1.5rem;
      }
    }
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
    0%   {border-bottom-color: $red;}
    50%   {border-bottom-color: $purple-light;}
    100% {border-bottom-color: $coral;}
  }
  @keyframes rectangle {
    from {background-color:$purple;}
    to {background-color: $yellow;}
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
      transform: translate(0, -100px);
    }
    
    80% {
      transform: translate(100px, 0);
    }
  }
  @keyframes nudgesecond {
    0%, 100% {
      transform: translate(0, 0);
    }
    
    50% {
      transform: translate(200px, 0);
    }
    
    80% {
      transform: translate(-200px, 0);
    }
  }
  
</style>