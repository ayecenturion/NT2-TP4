<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>¡Bienvenidos a todos!</h1>
      <hr>
      <h2>Vue CLI - Router / Formularios</h2>
      <br>
      <Navbar/>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  background-color: #d1cfcf;
}
h1  {
  color:#1e1d1d;
}
h2  {
  color:#666666;
}
.jumbotron{
  padding: 32px !important;
}
</style>
