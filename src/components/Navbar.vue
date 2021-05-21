<template >

  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-md navbar-light" style="background-color: #84ffd4;">
      <div class="container-fluid">
        <router-link to="/formulario">
        <a class="navbar-brand ml-4" href="#">Inicio</a>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/formulario">
               <a class="nav-link" href="#">Ingrese sus datos</a> 
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/detalleobj">
               <a class="nav-link" href="#">Detalle de objetos</a> 
            </router-link>
          </li>
         </ul> 
      </div>
    </div>
  </nav>
  <br>
    
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navbar {

  }
</style>
