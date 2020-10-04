<template>
  <div class="form-container col-10 col-xl-5 mx-auto">
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Tu correo electrónico:"
        label-for="input-1"
        description="Solo lo usaremos para responderte.">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Introduce tu correo electrónico. Ejemplo: techteach@gmail.com."
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        id="input-group-2" 
        label="Tu nombre:" 
        label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Nombre"
        ></b-form-input>
      </b-form-group>   
      <b-form-group 
        id="input-group-3" 
        label="Tu mensaje:" 
        label-for="textarea">
        <b-form-textarea
          id="textarea"
          v-model="form.message"
          required
          rows="8"
          placeholder="¿Qué nos quieres compartir?"
        ></b-form-textarea>
      </b-form-group> 
      <div class="text-center">
        <b-button title="Enviar formulario" type="submit" value="Send" variant="primary">Enviar formulario</b-button>
      </div>
    </b-form>
    <div class="mt-3 d-none" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </div>
  </div>
</template>
<script>
  export default {
    name:"Form",
      data() {
      return {
        form: {
          email: '',
          name: '',
          message: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert('Gracias por contactarnos')
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