<template>
  <header role="banner">
    <div>
      <b-navbar toggleable="lg">
          <router-link to="/" class="logo d-flex align-items-center" title="Ir al home" aria-label="Tech Teach Logo">
            <img class="img-fluid" src="../assets/images/logos/tech-teach.png">
            <div class="d-flex flex-column logo-text ml-3">
              <div class="logo-title">{ TechTeach }</div>
              <div class="logo-slang">Aprende a programar y diviertete</div>
            </div>
          </router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
          <b-navbar-nav>
            <li class="nav-item"><router-link class="nav-link" to="/">Aprende</router-link></li>
            <b-nav-item-dropdown text="Los cursos">
              <b-dropdown-item><router-link to="program-courses">Programar</router-link></b-dropdown-item>
              <b-dropdown-item><router-link to="google-drive-courses">Google</router-link></b-dropdown-item>
              <b-dropdown-item><router-link to="minecraft-courses">Minecraft</router-link></b-dropdown-item>
              <b-dropdown-item><router-link to="typing-courses">Typing Club</router-link></b-dropdown-item>
            </b-nav-item-dropdown>
            <li class="nav-item"><router-link class="nav-link" to="/about">Conócenos</router-link></li>
          </b-navbar-nav>
        </b-collapse> 
      </b-navbar>
    </div>
  </header>
</template>
<script>
   export default {
      name:"Header-component"
   }
</script>