<template>

 <div class="row justify-content-md-center mt-5">
    
    <div class="col-md-auto">
        <h4 class="text-center">{{this.user?.email}}</h4>
        <div class="mb-3">
            <label class="form-label">Correo</label>
            <input v-model="correo" class="form-control" type="text" placeholder="Ingrese su correo">
        </div>

        <div class="mb-3">
            <label class="form-label">Contraseña</label>
            <input v-model="password" class="form-control" type="password" placeholder="Ingrese su contraseña">
        </div>
        
        <div class="text-center">
             <button v-if="user?.email == null" @click="login()" class="btn btn-primary">Ingresar</button>
             <button @click="registrar()" class="btn btn-primary">Registrar</button>
            
        </div>
      

    </div>

 </div>  
    
</template>
<script>
import {auth} from '@/utils/firebase.js'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'

export default {
    name: 'AutenticacionForm',

    data(){
        return{
            correo:'',
            password:'',
            user: null
        }
    },

    methods:{
        async registrar(){
            try {
                await createUserWithEmailAndPassword(auth,this.correo, this.password),
                this.vaciar()
            } catch (error) {
                console.log(error)
            }
           
        },

        usuario_logueado(){
            onAuthStateChanged(auth, (user) => {
                this.user= user
            })
        },
        
        

        async login(){
            try {
                await signInWithEmailAndPassword(auth,this.correo,this.password),
                this.vaciar()
            }
             catch (error) {
                console.log(error)
            }
           
        },

        vaciar(){
            this.correo='',
            this.password=''
        }

    },
    mounted(){
        this.usuario_logueado()
    }
}
</script>