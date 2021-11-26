<template>
    <div class="row">
        <div class="col-4">

            <div class="mb-3">
                <label for="">Descripcion</label>
                <input v-model="descripcion" type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label for="">Precio</label>
                <input v-model="precio" type="number" class="form-control">
            </div>
            <div class="mb-3">
                <label for="">Porcentaje de descuento</label>
                <input v-model="descuento" type="number" class="form-control">
            </div>
            <div class="mb-3">
                <label for="">Categoria</label>
                <input v-model="categoria" type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label for="">Stock</label>
                <input v-model="stock" type="number" class="form-control">
            </div>
            <div class="mb-3">
                <label for="">Estado</label>

                <select name="select">
                    <option value="value1">Activo</option>
                    <option value="value2" selected>Inactivo</option>
                </select>
            </div>
        

            <div class="mb-3">
                <label class="form-label">Adjuntar</label>
                <input @change="vista_previa()" id="inp_file" type="file" class="form-control">
            </div>

            <button @click="guardarCa()" class="btn btn-info">Guardar</button>
            <button @click="actualizarCa()" class="btn btn-primary">Actualizar</button>
        </div>    
        
        <div class="col-8">
             <table class="table">
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>%Descuento</th>
                        <th>Categoria</th>
                        <th>Stock</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr v-for="ca of lista_cas" v-bind:key="ca.id">
                        <td> <img :src="ca.url" style="width:2rem"> </td>
                        <td>{{ca.descripcion}}</td>
                        <td>{{ca.precio}}</td>
                        <td>{{ca.descuento}}</td>
                        <td>{{ca.categoria}}</td>
                        <td>{{ca.stock}}</td>
                        <td>{{ca.estado}}</td>
                        
                        
                        <td>
                        <button @click="eliminarCa(ca.id)" class="btn btn-danger btn-sm">x</button>
                        <button @click="editar(ca)" class="btn btn-primary btn-sm ms-1">Editar</button>
                        </td>    
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

import {db, storage} from '@/utils/firebase.js'
import {collection, addDoc, onSnapshot, deleteDoc,doc, updateDoc} from 'firebase/firestore'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'


export default{
    name: 'CatalogoAdminForm',
    data(){
        return{
            descripcion:'',
            precio:null,
            descuento:null,
            categoria:'',
            stock:null,
            estado:null,
            
            lista_ca:[],
            id: null,
        }
    },

    methods:{

        async guardarCa(){

            await this.subir_imagen()
            const unCa = {
                descripcion: this.descripcion,
                precio: this.precio,
                descuento: this.descuento,
                categoria: this.categoria,
                stock: this.stock,
                estado: this.estado,
                url: this.url,
            }

            const coleccion = collection(db,'ca')

            await addDoc(coleccion, unCa)

            document.getElementById('inp_file').value=''
            this.preview=''
        },

        obtenerCa(){
          onSnapshot (collection(db, 'ca'), (snapshot)=>{
            this.lista_cas = []
            snapshot.docs.map((doc)=>{
                this.lista_cas.push({...doc.data(),id:doc.id})
            })
          })
        
        },

        eliminarCa(id){
            deleteDoc(doc(db,'ca',id))
        },

        editar(unaCa){
            this.descripcion = unaCa.descripcion,
            this.precio = unaCa.precio,
            this.descuento = unaCa.descuento,
            this.categoria = unaCa.categoria,
            this.stock = unaCa.stock,
            this.estado = unaCa.estado

        },

        async actualizarCa(){
            const caModificada = {
                descripcion: this.descripcion,
                precio: this.precio,
                descuento: this.descuento,
                categoria: this.categoria,
                stock: this.stock,
                estado: this.estado

                
            }

            await updateDoc(doc(db,'ca',this.id),caModificada)
            
            this.descripcion = '';
            this.precio = null;
            this.descuento = null;
            this.categoria ='' ;
            this.stock= null;
            this.estado=null
        
        },

        async subir_imagen(){
            const archivo = document.getElementById("inp_file").files[0]
            //decimos en donde y con que nombre guardamos el archivo a storage
            const config = ref (storage,'catalogo/'+archivo.name)
            await uploadBytes(config,archivo).then(()=>{
                
            })

            this.url = await getDownloadURL(config)
        },

        vista_previa(){
            this.preview = URL.createObjectURL(document.getElementById('inp_file').files[0])
        }

    },

    mounted(){ 
        this.obtenerCa()
    }
    

}
</script>