<template >

  <section class="src-components-detalle-obj">
    <div class="jumbotron">
      <h4><u>Detalle de usuarios</u></h4>
      <hr>
      <button class="btn btn-light mr-6" @click="getUsuariosCb()">Usuarios XMLHttpRequest</button>
      <button class="btn btn-success mr-6" @click="getUsuariosFetch()">Usuarios Fetch</button>
      <button class="btn btn-dark mr-6" @click="getUsuariosAxios()">Usuarios Axios</button>
      <hr>
      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-bordered">
          <tr>
            <th v-for="(col,index) in getCols" :key="index">{{col}}</th>
          </tr>
          <tr v-for="(usuario,index) in usuarios" :key="index">
            <td v-for="(col,index) in getCols" :key="index">{{usuario[col]}}</td>
          </tr>
        </table>
        <h5 class="alert alert-success">Se encontraron {{usuarios.length}} usuarios</h5>
      </div>
      <h5 v-else class="alert alert-info">No se encontraron usuarios</h5>
    </div>
    
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-detalle-obj',
    props: [],
    mounted () {

    },
    data () {
      return {
        url:'https://609dbec433eed8001795709d.mockapi.io/usuarios',
        usuarios:[]
      }
    },
    methods: {
      getUsuariosCb() {
        let xhr = new XMLHttpRequest
        xhr.open('get',this.url)
        xhr.addEventListener('load', () => {
          if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log('XMLHttpRequest',respuesta)
            this.usuarios = respuesta
          }
          else {
            console.error(`Error en GET -> status: ${xhr.status}`)
          }
        })
        xhr.addEventListener('error', e => {
            console.error(`Error XMLHttpRequest ->`, e)
        })
        xhr.send()
      },
      getUsuariosFetch(){
        fetch(this.url)
        .then(datos=>datos.json())
        .then(respuesta => {
          console.log('FETCH',respuesta)
          this.usuarios=respuesta
        })
        .catch(error=>console.error(error))
      },
      getUsuariosAxios(){
        this.axios(this.url)
        .then(respuesta =>{
          console.log('AXIOS',respuesta.data)
          this.usuarios=respuesta.data
        })
        .catch(error=>console.error(error))
      }
    },
    computed: {
      getCols(){
        return Object.keys(this.usuarios[0])
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-detalle-obj {

  }
</style>
