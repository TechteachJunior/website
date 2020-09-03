<template>
  <header role="banner">
    <div>
      <b-navbar toggleable="lg">
          <router-link to="/" class="logo d-flex align-items-center" aria-label="Tech Teach Logo">
            <img class="img-fluid" src="../assets/images/logos/tech-teach.png" style="width: 60px;">
            <div class="d-flex flex-column logo-text ml-3">
              <div>{ TechTeach }</div>
              <div><small>Aprende a programar y diviertete</small></div>
            </div>
          </router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#learn"><router-link to="/">Aprende</router-link></b-nav-item>
            <b-nav-item-dropdown text="Los cursos">
              <b-dropdown-item><router-link to="program-courses">Programar</router-link></b-dropdown-item>
              <b-dropdown-item><router-link to="google-drive-courses">Google</router-link></b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item><router-link to="/teach">Tutores</router-link></b-nav-item>
            <b-nav-item><router-link to="/about">Conócenos</router-link></b-nav-item>
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