
<template>
<div class="row">
<div v-for="p of lista_cas" v-bind:key="p.id" class="col-3">
    <div class="card" style="width: 18rem;">
     <img :src="p.url" class="card-img-top" alt="...">
    <div class="card-body">
        <h5>{{p.descripcion}}</h5>
    <p class="card-text">${{p.precio}}</p>
  </div>
</div>  
</div>
</div>
</template>

<script>
import {db} from '@/utils/firebase.js'
import {collection, onSnapshot} from 'firebase/firestore'
export default{
    name: 'Catalogo',

    data(){
        return{
            lista_cas: []
        }
    },

    methods:{


    obtenerCa(){
          onSnapshot (collection(db, 'ca'), (snapshot)=>{
            this.lista_cas = []
            snapshot.docs.map((doc)=>{
                this.lista_cas.push({...doc.data(),id:doc.id})
            })
          })
        
    },
    },
    mounted(){ 
        this.obtenerCa()
    }

}        
</script>
