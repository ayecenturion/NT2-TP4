
export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      FormData : this.getInicialData(),
      FormState: {}, //se inicializa con un obj vacio y tiene que estar relacionado con el :state del html
      nombreLongMin: 5,
      nombreLongMax: 15,
      edadMin: 18,
      edadMax: 120
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData(){
      return{
        nombre: '',
        edad:'',
        email:''
      }
    },
    enviar(){
      console.log({...this.FormData})
      this.FormData = this.getInicialData()
      this.FormState._reset()
    }
  }
}


